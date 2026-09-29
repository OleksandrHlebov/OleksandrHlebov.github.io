/* @ds-bundle: {"namespace":"CapmareDS","components":[{"name":"Avatar","sourcePath":"components/general/Avatar/Avatar.jsx"},{"name":"Badge","sourcePath":"components/general/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/general/Button/Button.jsx"},{"name":"Card","sourcePath":"components/general/Card/Card.jsx"},{"name":"CardDescription","sourcePath":"components/general/CardDescription/CardDescription.jsx"},{"name":"CardHeader","sourcePath":"components/general/CardHeader/CardHeader.jsx"},{"name":"CardTitle","sourcePath":"components/general/CardTitle/CardTitle.jsx"},{"name":"Checkbox","sourcePath":"components/general/Checkbox/Checkbox.jsx"},{"name":"Input","sourcePath":"components/general/Input/Input.jsx"},{"name":"Modal","sourcePath":"components/general/Modal/Modal.jsx"},{"name":"Select","sourcePath":"components/general/Select/Select.jsx"},{"name":"Tabs","sourcePath":"components/general/Tabs/Tabs.jsx"},{"name":"ThemeProvider","sourcePath":"components/general/ThemeProvider/ThemeProvider.jsx"},{"name":"Tooltip","sourcePath":"components/general/Tooltip/Tooltip.jsx"}],"sourceHashes":{"components/general/Avatar/Avatar.jsx":"2c4500b4cfc7","components/general/Avatar/Avatar.d.ts":"bbafa268bb95","components/general/Avatar/Avatar.prompt.md":"131dbe88e8ee","components/general/Badge/Badge.jsx":"13ade154c7d7","components/general/Badge/Badge.d.ts":"8faeccfa3acf","components/general/Badge/Badge.prompt.md":"95396fa5f37b","components/general/Button/Button.jsx":"11366bc4a353","components/general/Button/Button.d.ts":"034b706cfc01","components/general/Button/Button.prompt.md":"48f05ff8a98c","components/general/Card/Card.jsx":"43d987ef0be1","components/general/Card/Card.d.ts":"48b0c8f86f74","components/general/Card/Card.prompt.md":"2871f4e2962e","components/general/CardDescription/CardDescription.jsx":"296ad9bb8188","components/general/CardDescription/CardDescription.d.ts":"1181c866ac8a","components/general/CardDescription/CardDescription.prompt.md":"382a64e4a985","components/general/CardHeader/CardHeader.jsx":"ac4ce26ec3d4","components/general/CardHeader/CardHeader.d.ts":"7ac0ed109034","components/general/CardHeader/CardHeader.prompt.md":"f9e14ad0a153","components/general/CardTitle/CardTitle.jsx":"02c0cd6e8376","components/general/CardTitle/CardTitle.d.ts":"efe1d3b8feaf","components/general/CardTitle/CardTitle.prompt.md":"3407c2718c5d","components/general/Checkbox/Checkbox.jsx":"ea7529272598","components/general/Checkbox/Checkbox.d.ts":"9254a09b929e","components/general/Checkbox/Checkbox.prompt.md":"79ddcf748332","components/general/Input/Input.jsx":"258409b32ef1","components/general/Input/Input.d.ts":"3356855abf43","components/general/Input/Input.prompt.md":"4da696eb9109","components/general/Modal/Modal.jsx":"1d389e8ab2e1","components/general/Modal/Modal.d.ts":"2baf3efc7eeb","components/general/Modal/Modal.prompt.md":"73a830da49b1","components/general/Select/Select.jsx":"f4948bfa583f","components/general/Select/Select.d.ts":"0429c39ec003","components/general/Select/Select.prompt.md":"c38bb65e07df","components/general/Tabs/Tabs.jsx":"b66b347f09f2","components/general/Tabs/Tabs.d.ts":"64724ee8608f","components/general/Tabs/Tabs.prompt.md":"d2b246163d92","components/general/ThemeProvider/ThemeProvider.jsx":"9afc458e4bb9","components/general/ThemeProvider/ThemeProvider.d.ts":"2cee2ddbff30","components/general/ThemeProvider/ThemeProvider.prompt.md":"14e1f0ea9aa6","components/general/Tooltip/Tooltip.jsx":"524a741256d2","components/general/Tooltip/Tooltip.d.ts":"fb1219089324","components/general/Tooltip/Tooltip.prompt.md":"7d66165960db"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
"use strict";
var CapmareDS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx12(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs8(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx12;
      module.exports.jsxs = jsxs8;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs8 : jsx12)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // dist/index.js
  var index_exports = {};
  __export(index_exports, {
    Avatar: () => Avatar,
    Badge: () => Badge,
    Button: () => Button,
    Card: () => Card,
    CardDescription: () => CardDescription,
    CardHeader: () => CardHeader,
    CardTitle: () => CardTitle,
    Checkbox: () => Checkbox,
    Input: () => Input,
    Modal: () => Modal,
    Select: () => Select,
    Tabs: () => Tabs,
    ThemeProvider: () => ThemeProvider,
    Tooltip: () => Tooltip
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var import_react = __toESM(require_react_shim(), 1);
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var import_react2 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime6 = __toESM(require_react_shim(), 1);
  var import_react3 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime7 = __toESM(require_react_shim(), 1);
  var import_react4 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime8 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime9 = __toESM(require_react_shim(), 1);
  var import_react5 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime10 = __toESM(require_react_shim(), 1);
  var import_react6 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime11 = __toESM(require_react_shim(), 1);
  function ThemeProvider({ theme = "dark", children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        "data-theme": theme === "light" ? "light" : void 0,
        className: "bg-surface-2 font-sans text-text-primary",
        children
      }
    );
  }
  var variantClasses = {
    primary: "bg-primary text-text-inverse hover:bg-primary-hover active:bg-primary-active",
    secondary: "bg-surface-1 text-text-secondary border border-border hover:border-border-strong hover:text-text-primary",
    danger: "bg-danger text-text-inverse hover:bg-danger-hover",
    ghost: "bg-transparent text-text-primary hover:bg-surface-3"
  };
  var sizeClasses = {
    sm: "h-8 px-sm text-sm gap-xs",
    md: "h-10 px-md text-sm gap-sm",
    lg: "h-12 px-lg text-base gap-sm"
  };
  var Button = import_react.default.forwardRef(
    ({
      variant = "primary",
      size = "md",
      icon,
      isLoading = false,
      disabled,
      className = "",
      children,
      ...rest
    }, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          ref,
          disabled: disabled || isLoading,
          className: [
            "inline-flex items-center justify-center rounded-md font-mono font-medium",
            "transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            variantClasses[variant],
            sizeClasses[size],
            className
          ].join(" "),
          ...rest,
          children: [
            isLoading ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }) : icon,
            children
          ]
        }
      );
    }
  );
  Button.displayName = "Button";
  var Input = import_react2.default.forwardRef(
    ({ label, error, hint, id, className = "", ...rest }, ref) => {
      const inputId = id ?? import_react2.default.useId();
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col gap-xs", children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: inputId, className: "text-sm font-medium text-text-primary", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            ref,
            id: inputId,
            "aria-invalid": !!error,
            className: [
              "h-10 rounded-md border bg-surface-1 px-sm text-sm text-text-primary",
              "placeholder:text-text-secondary transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              error ? "border-danger" : "border-border",
              className
            ].join(" "),
            ...rest
          }
        ),
        error ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-sm text-danger", children: error }) : hint ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-sm text-text-secondary", children: hint }) : null
      ] });
    }
  );
  Input.displayName = "Input";
  var paddingClasses = {
    sm: "p-sm",
    md: "p-md",
    lg: "p-lg"
  };
  function Card({
    padding = "md",
    elevated = false,
    className = "",
    children,
    ...rest
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        className: [
          "rounded-lg border border-border bg-surface-1",
          elevated ? "shadow-md" : "shadow-sm",
          paddingClasses[padding],
          className
        ].join(" "),
        ...rest,
        children
      }
    );
  }
  function CardHeader({ className = "", ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: ["mb-sm flex flex-col gap-xs", className].join(" "), ...rest });
  }
  function CardTitle({ className = "", ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: ["text-base font-semibold text-text-primary", className].join(" "), ...rest });
  }
  function CardDescription({ className = "", ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: ["text-sm text-text-secondary", className].join(" "), ...rest });
  }
  var toneClasses = {
    neutral: "border border-transparent bg-surface-3 text-text-secondary",
    outline: "border border-border bg-transparent text-text-secondary",
    accent: "border border-accent/30 bg-accent/10 text-accent",
    primary: "border border-primary/30 bg-primary/10 text-primary",
    danger: "border border-danger/30 bg-danger/10 text-danger"
  };
  function Badge({ tone = "outline", className = "", children, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "span",
      {
        className: [
          "inline-flex items-center rounded-sm px-sm py-[0.1875rem]",
          "font-mono text-[0.6875rem] uppercase tracking-wide",
          toneClasses[tone],
          className
        ].join(" "),
        ...rest,
        children
      }
    );
  }
  var sizeClasses2 = {
    sm: "h-6 w-6 text-xs",
    md: "h-9 w-9 text-sm",
    lg: "h-12 w-12 text-base"
  };
  function initials(name) {
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
  }
  function Avatar({ src, name, size = "md", className = "", ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        role: "img",
        "aria-label": name,
        className: [
          "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
          "bg-surface-3 font-medium text-text-secondary",
          sizeClasses2[size],
          className
        ].join(" "),
        ...rest,
        children: src ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src, alt: name, className: "h-full w-full object-cover" }) : initials(name)
      }
    );
  }
  var Checkbox = import_react3.default.forwardRef(
    ({ label, id, className = "", ...rest }, ref) => {
      const checkboxId = id ?? import_react3.default.useId();
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { htmlFor: checkboxId, className: "inline-flex items-center gap-sm text-sm text-text-primary", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "input",
          {
            ref,
            id: checkboxId,
            type: "checkbox",
            className: [
              "h-4 w-4 rounded-sm border border-border-strong text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              className
            ].join(" "),
            ...rest
          }
        ),
        label
      ] });
    }
  );
  Checkbox.displayName = "Checkbox";
  var Select = import_react4.default.forwardRef(
    ({ label, options, placeholder, id, className = "", ...rest }, ref) => {
      const selectId = id ?? import_react4.default.useId();
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col gap-xs", children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { htmlFor: selectId, className: "text-sm font-medium text-text-primary", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "select",
          {
            ref,
            id: selectId,
            className: [
              "h-10 rounded-md border border-border bg-surface-1 px-sm text-sm text-text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              className
            ].join(" "),
            ...rest,
            children: [
              placeholder && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: "", disabled: true, hidden: true, children: placeholder }),
              options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: opt.value, disabled: opt.disabled, children: opt.label }, opt.value))
            ]
          }
        )
      ] });
    }
  );
  Select.displayName = "Select";
  function Modal({ open, onClose, title, children }) {
    if (!open) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-md",
        onMouseDown: (e) => {
          if (e.target === e.currentTarget) onClose();
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "div",
          {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": title,
            className: "w-full max-w-md rounded-lg border border-border bg-surface-1 p-lg shadow-lg",
            children: [
              title && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "mb-md flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "text-base font-semibold text-text-primary", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    "aria-label": "Close",
                    className: "rounded-sm p-xs text-text-secondary hover:bg-surface-3",
                    children: "\u2715"
                  }
                )
              ] }),
              children
            ]
          }
        )
      }
    );
  }
  var sideClasses = {
    top: "bottom-full left-1/2 mb-xs -translate-x-1/2",
    bottom: "top-full left-1/2 mt-xs -translate-x-1/2",
    left: "right-full top-1/2 mr-xs -translate-y-1/2",
    right: "left-full top-1/2 ml-xs -translate-y-1/2"
  };
  function Tooltip({ content, children, side = "top" }) {
    const [visible, setVisible] = import_react5.default.useState(false);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "span",
      {
        className: "relative inline-flex",
        onMouseEnter: () => setVisible(true),
        onMouseLeave: () => setVisible(false),
        onFocus: () => setVisible(true),
        onBlur: () => setVisible(false),
        children: [
          children,
          visible && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "span",
            {
              role: "tooltip",
              className: [
                "pointer-events-none absolute z-50 whitespace-nowrap rounded-sm bg-surface-3",
                "px-xs py-[0.125rem] text-xs text-text-primary shadow-sm",
                sideClasses[side]
              ].join(" "),
              children: content
            }
          )
        ]
      }
    );
  }
  function Tabs({ items, defaultValue, value, onValueChange }) {
    const [internalValue, setInternalValue] = import_react6.default.useState(
      defaultValue ?? items[0]?.value
    );
    const activeValue = value ?? internalValue;
    function select(next) {
      setInternalValue(next);
      onValueChange?.(next);
    }
    const activeItem = items.find((item) => item.value === activeValue);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { role: "tablist", className: "flex gap-md border-b border-border", children: items.map((item) => {
        const isActive = item.value === activeValue;
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "button",
          {
            role: "tab",
            type: "button",
            "aria-selected": isActive,
            onClick: () => select(item.value),
            className: [
              "border-b-2 px-xs pb-sm text-sm font-medium transition-colors",
              isActive ? "border-primary text-text-primary" : "border-transparent text-text-secondary hover:text-text-primary"
            ].join(" "),
            children: item.label
          },
          item.value
        );
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { role: "tabpanel", className: "pt-md", children: activeItem?.content })
    ] });
  }
  return __toCommonJS(index_exports);
})();
window.CapmareDS=CapmareDS.__dsMainNs?Object.assign({},CapmareDS,CapmareDS.__dsMainNs,{__dsMainNs:undefined}):CapmareDS;
