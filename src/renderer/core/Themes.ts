import * as monaco from "monaco-editor";

export interface ThemeUIColors {
  background: string;
  foreground: string;
  border: string;
  lineNumber: string;
  panelBg: string;
  hoverBg: string;
  string: string;
  number: string;
  boolean: string;
  nullish: string;
  object: string;
  func: string;
  result: string;
  error: string;
  warning: string;
  info: string;
  security: string;
  securityBg: string;
  errorBg: string;
}

const themeUI: Record<string, ThemeUIColors> = {
  "github-dark": {
    background: "#000000",
    foreground: "#e6edf3",
    border: "#21262d",
    lineNumber: "#6e7681",
    panelBg: "#000000",
    hoverBg: "#21262d",
    string: "#a5d6ff",
    number: "#fff173",
    boolean: "#ff7b72",
    nullish: "#8b949e",
    object: "#7ee787",
    func: "#d2a8ff",
    result: "#56d364",
    error: "#f85149",
    warning: "#d29922",
    info: "#58a6ff",
    security: "#ffa657",
    securityBg: "rgba(255, 166, 87, 0.1)",
    errorBg: "rgba(248, 81, 73, 0.1)",
  },
  "tomorrow-night-bright": {
    background: "#000000",
    foreground: "#eaeaea",
    border: "#21262d",
    lineNumber: "#6e7681",
    panelBg: "#000000",
    hoverBg: "#21262d",
    string: "#b9ca4a",
    number: "#e78c45",
    boolean: "#d54e53",
    nullish: "#969896",
    object: "#70c0b1",
    func: "#7aa6da",
    result: "#b9ca4a",
    error: "#d54e53",
    warning: "#e7c547",
    info: "#7aa6da",
    security: "#e7c547",
    securityBg: "rgba(231, 197, 71, 0.1)",
    errorBg: "rgba(213, 78, 83, 0.1)",
  },
  "ayu-dark": {
    background: "#0d1017",
    foreground: "#bfbdb6",
    border: "#1b1f29",
    lineNumber: "#5a6378",
    panelBg: "#0d1017",
    hoverBg: "#1b1f29",
    string: "#aad94c",
    number: "#d2a6ff",
    boolean: "#ff8f40",
    nullish: "#5a6673",
    object: "#95e6cb",
    func: "#ffb454",
    result: "#aad94c",
    error: "#d95757",
    warning: "#e6b450",
    info: "#39bae6",
    security: "#e6b450",
    securityBg: "rgba(230, 180, 80, 0.1)",
    errorBg: "rgba(217, 87, 87, 0.1)",
  },
  "ayu-mirage": {
    background: "#1f2430",
    foreground: "#cccac2",
    border: "#2a2f3a",
    lineNumber: "#6e7c8f",
    panelBg: "#1f2430",
    hoverBg: "#2a2f3a",
    string: "#d5ff80",
    number: "#dfbfff",
    boolean: "#ffa659",
    nullish: "#6e7c8f",
    object: "#95e6cb",
    func: "#ffcd66",
    result: "#d5ff80",
    error: "#ff6666",
    warning: "#ffcc66",
    info: "#5ccfe6",
    security: "#ffcc66",
    securityBg: "rgba(255, 204, 102, 0.1)",
    errorBg: "rgba(255, 102, 102, 0.1)",
  },
  "ayu-light": {
    background: "#fcfcfc",
    foreground: "#5c6166",
    border: "#e0e0e0",
    lineNumber: "#adaeb1",
    panelBg: "#fcfcfc",
    hoverBg: "#e8e8e8",
    string: "#86b300",
    number: "#a37acc",
    boolean: "#fa8532",
    nullish: "#adaeb1",
    object: "#4cbf99",
    func: "#eba400",
    result: "#86b300",
    error: "#e65050",
    warning: "#f29718",
    info: "#55b4d4",
    security: "#f29718",
    securityBg: "rgba(242, 151, 24, 0.1)",
    errorBg: "rgba(230, 80, 80, 0.1)",
  },
};

export function getThemeUIColors(themeName: string): ThemeUIColors {
  return themeUI[themeName] || themeUI["github-dark"];
}

export function registerThemes() {
  monaco.editor.defineTheme("github-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "7d8590" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "string", foreground: "a5d6ff" },
      { token: "number", foreground: "79c0ff" },
      { token: "regexp", foreground: "7ee787" },
      { token: "operator", foreground: "ff7b72" },
      { token: "namespace", foreground: "ffa657" },
      { token: "type", foreground: "ffa657" },
      { token: "class", foreground: "ffa657" },
      { token: "function", foreground: "d2a8ff" },
    ],
    colors: {
      "editor.background": "#000000",
      "editor.foreground": "#e6edf3",
      "editor.selectionBackground": "#264f78",
      "editorCursor.foreground": "#e6edf3",
      "editor.lineHighlightBackground": "#21262d50",
    },
  });

  monaco.editor.defineTheme("tomorrow-night-bright", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "969896", fontStyle: "italic" },
      { token: "keyword", foreground: "d54e53" },
      { token: "string", foreground: "b9ca4a" },
    ],
    colors: {
      "editor.background": "#000000",
      "editor.foreground": "#eaeaea",
      "editor.selectionBackground": "#424242",
      "editor.lineHighlightBackground": "#2a2a2a",
    },
  });

  monaco.editor.defineTheme("ayu-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "5a6673", fontStyle: "italic" },
      { token: "string", foreground: "aad94c" },
      { token: "string.regexp", foreground: "95e6cb" },
      { token: "number", foreground: "d2a6ff" },
      { token: "constant", foreground: "d2a6ff" },
      { token: "keyword", foreground: "ff8f40" },
      { token: "keyword.operator", foreground: "f29668" },
      { token: "operator", foreground: "f29668" },
      { token: "function", foreground: "ffb454" },
      { token: "variable", foreground: "bfbdb6" },
      { token: "variable.member", foreground: "f07178" },
      { token: "variable.language", foreground: "39bae6", fontStyle: "italic" },
      { token: "type", foreground: "59c2ff" },
      { token: "class", foreground: "59c2ff" },
      { token: "namespace", foreground: "59c2ff" },
      { token: "tag", foreground: "39bae6" },
      { token: "attribute.name", foreground: "ffb454" },
      { token: "delimiter", foreground: "bfbdb6b3" },
      { token: "invalid", foreground: "d95757" },
      { token: "support.function", foreground: "f07178" },
      { token: "regexp", foreground: "95e6cb" },
    ],
    colors: {
      "editor.background": "#0d1017",
      "editor.foreground": "#bfbdb6",
      "editor.selectionBackground": "#3388ff40",
      "editorCursor.foreground": "#e6b450",
      "editor.lineHighlightBackground": "#161a24",
      "editorLineNumber.foreground": "#5a6378a6",
      "editorIndentGuide.background": "#5a637842",
      "editorWhitespace.foreground": "#5a6378a6",
    },
  });

  monaco.editor.defineTheme("ayu-mirage", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7c8f", fontStyle: "italic" },
      { token: "string", foreground: "d5ff80" },
      { token: "string.regexp", foreground: "95e6cb" },
      { token: "number", foreground: "dfbfff" },
      { token: "constant", foreground: "dfbfff" },
      { token: "keyword", foreground: "ffa659" },
      { token: "keyword.operator", foreground: "f29e74" },
      { token: "operator", foreground: "f29e74" },
      { token: "function", foreground: "ffcd66" },
      { token: "variable", foreground: "cccac2" },
      { token: "variable.member", foreground: "f28779" },
      { token: "variable.language", foreground: "5ccfe6", fontStyle: "italic" },
      { token: "type", foreground: "73d0ff" },
      { token: "class", foreground: "73d0ff" },
      { token: "namespace", foreground: "73d0ff" },
      { token: "tag", foreground: "5ccfe6" },
      { token: "attribute.name", foreground: "ffcd66" },
      { token: "delimiter", foreground: "cccac2b3" },
      { token: "invalid", foreground: "ff6666" },
      { token: "support.function", foreground: "f28779" },
      { token: "regexp", foreground: "95e6cb" },
    ],
    colors: {
      "editor.background": "#1f2430",
      "editor.foreground": "#cccac2",
      "editor.selectionBackground": "#409fff40",
      "editorCursor.foreground": "#ffcc66",
      "editor.lineHighlightBackground": "#1a1f29",
      "editorLineNumber.foreground": "#6e7c8fa6",
      "editorIndentGuide.background": "#6e7c8f42",
      "editorWhitespace.foreground": "#6e7c8fa6",
    },
  });

  monaco.editor.defineTheme("ayu-light", {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "adaeb1", fontStyle: "italic" },
      { token: "string", foreground: "86b300" },
      { token: "string.regexp", foreground: "4cbf99" },
      { token: "number", foreground: "a37acc" },
      { token: "constant", foreground: "a37acc" },
      { token: "keyword", foreground: "fa8532" },
      { token: "keyword.operator", foreground: "f2a191" },
      { token: "operator", foreground: "f2a191" },
      { token: "function", foreground: "eba400" },
      { token: "variable", foreground: "5c6166" },
      { token: "variable.member", foreground: "f07171" },
      { token: "variable.language", foreground: "55b4d4", fontStyle: "italic" },
      { token: "type", foreground: "22a4e6" },
      { token: "class", foreground: "22a4e6" },
      { token: "namespace", foreground: "22a4e6" },
      { token: "tag", foreground: "55b4d4" },
      { token: "attribute.name", foreground: "eba400" },
      { token: "delimiter", foreground: "5c6166b3" },
      { token: "invalid", foreground: "e65050" },
      { token: "support.function", foreground: "f07171" },
      { token: "regexp", foreground: "4cbf99" },
    ],
    colors: {
      "editor.background": "#fcfcfc",
      "editor.foreground": "#5c6166",
      "editor.selectionBackground": "#035bd626",
      "editorCursor.foreground": "#f29718",
      "editor.lineHighlightBackground": "#828e9f1a",
      "editorLineNumber.foreground": "#adaeb1a6",
      "editorIndentGuide.background": "#adaeb142",
      "editorWhitespace.foreground": "#adaeb1a6",
    },
  });
}
