import { TabData, TabId } from "../config/types";
import { TABS_KEY } from "../config/constants";

interface SerializedTabs {
  activeTabId: TabId;
  tabCounter: number;
  tabs: { id: TabId; data: TabData }[];
}

export class TabsManager {
  private tabCounter = 1;
  private activeTabId: TabId = "tab-1";
  private data = new Map<TabId, TabData>();

  initFirstTab(content: string) {
    this.data.set("tab-1", {
      title: "Untitled-1",
      content,
      isDirty: false,
      file: null,
      savedContent: content,
    });
    return "tab-1" as TabId;
  }

  restoreTabs(): SerializedTabs | null {
    try {
      const raw = localStorage.getItem(TABS_KEY);
      if (!raw) return null;
      const saved: SerializedTabs = JSON.parse(raw);
      if (!saved.tabs || saved.tabs.length === 0) return null;
      this.tabCounter = saved.tabCounter;
      this.activeTabId = saved.activeTabId;
      for (const { id, data } of saved.tabs) {
        this.data.set(id, { ...data, isDirty: false, savedContent: data.content });
      }
      return saved;
    } catch {
      return null;
    }
  }

  persistTabs() {
    const tabs: { id: TabId; data: TabData }[] = [];
    this.data.forEach((data, id) => tabs.push({ id, data }));
    const payload: SerializedTabs = {
      activeTabId: this.activeTabId,
      tabCounter: this.tabCounter,
      tabs,
    };
    localStorage.setItem(TABS_KEY, JSON.stringify(payload));
  }
  active() {
    return this.activeTabId;
  }
  setActive(id: TabId) {
    this.activeTabId = id;
  }
  get(id: TabId) {
    return this.data.get(id);
  }
  set(id: TabId, td: Partial<TabData>) {
    const cur = this.data.get(id);
    if (cur) this.data.set(id, { ...cur, ...td });
  }
  allIds() {
    return Array.from(this.data.keys());
  }
  create() {
    this.tabCounter++;
    const id = `tab-${this.tabCounter}` as TabId;
    this.data.set(id, {
      title: `Untitled-${this.tabCounter}`,
      content: "",
      isDirty: false,
      file: null,
      savedContent: "",
    });
    return id;
  }
  remove(id: TabId) {
    this.data.delete(id);
  }
  size() {
    return this.data.size;
  }
}
