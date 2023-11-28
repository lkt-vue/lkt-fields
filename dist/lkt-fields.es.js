var Sl = Object.defineProperty;
var xl = (e, t, i) => t in e ? Sl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var j = (e, t, i) => (xl(e, typeof t != "symbol" ? t + "" : t, i), i);
import ei from "@vuepic/vue-datepicker";
import { generateRandomString as X } from "lkt-string-tools";
import { slotProvided as pt } from "lkt-vue-tools";
import { openBlock as C, createElementBlock as L, normalizeClass as K, renderSlot as V, withDirectives as $, createElementVNode as ee, vModelCheckbox as Ai, createCommentVNode as T, Fragment as Bt, renderList as At, defineComponent as Mi, useSlots as Di, ref as H, computed as le, watch as Se, unref as de, vModelText as te, createBlock as he, nextTick as st, resolveComponent as fe, vModelDynamic as ti, vModelRadio as Cl, createVNode as Oi, withModifiers as Ue, toDisplayString as ii } from "vue";
import { createLktEvent as Q } from "lkt-events";
import "lkt-tools";
import { existsHTTPResource as zl } from "lkt-http-client";
import Vi from "suneditor";
import El from "katex";
const We = {
  computed: {
    classes() {
      const e = ["lkt-field"];
      if (this.palette && e.push(`lkt-field--${this.palette}`), this.changed && e.push("is-changed"), "multiple" in this && this.multiple && e.push("is-multiple"), "disabled" in this && this.disabled && e.push("is-disabled"), "stateConfigValue" in this) {
        const t = this.stateConfigValue.amountEnabled();
        t > 0 && (e.push("has-icons"), e.push(`has-icons-${t}`));
      }
      return e.push(this.isValid ? "is-valid" : "is-error"), e.push(this.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }
  }
}, Ui = {
  emits: ["update:modelValue"],
  mixins: [We],
  props: {
    modelValue: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: X(16) },
    valid: { type: [Boolean, Function], default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Identifier: X(16),
      originalValue: this.modelValue,
      Value: this.modelValue
    };
  },
  computed: {
    isValid() {
      return typeof this.valid == "function" ? this.valid() : this.valid;
    },
    changed() {
      return this.Value !== this.originalValue;
    },
    canRenderLabelSlot() {
      return pt(this, "label");
    },
    canRenderLabelHtml() {
      return this.canRenderLabelSlot ? !1 : !this.label && this.emptyLabel ? !0 : !!this.label;
    }
  },
  watch: {
    modelValue(e) {
      this.$refs.input && (this.$refs.input.value = e ? "true" : "false"), this.Value = e;
    },
    Value(e) {
      this.$emit("update:modelValue", e);
    }
  },
  methods: {
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    setIsDisabled(e = !1) {
      return this.disabled = e === !0, this;
    },
    isDisabled() {
      return this.disabled;
    },
    getValue() {
      return this.modelValue;
    }
  }
}, ie = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, l] of t)
    i[n] = l;
  return i;
}, Ll = {
  name: "LktFieldCheck",
  mixins: [Ui]
}, Il = ["data-labeled"], Nl = ["name", "id", "disabled", "readonly", "placeholder", "value"], Rl = ["for", "innerHTML"];
function Tl(e, t, i, n, l, s) {
  return C(), L("div", {
    class: K(["is-check", e.classes]),
    "data-labeled": e.canRenderLabelHtml
  }, [
    V(e.$slots, "prefix"),
    $(ee("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.Value = o),
      type: "checkbox",
      ref: "input",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder,
      value: e.Value ? "true" : "false"
    }, null, 8, Nl), [
      [Ai, e.Value]
    ]),
    e.canRenderLabelSlot ? V(e.$slots, "label", { key: 0 }) : T("", !0),
    e.canRenderLabelHtml ? (C(), L("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Rl)) : T("", !0)
  ], 10, Il);
}
const ni = /* @__PURE__ */ ie(Ll, [["render", Tl]]), Bl = {
  name: "LktFieldSwitch",
  mixins: [Ui]
}, Al = ["data-labeled"], Ml = ["name", "id", "disabled", "readonly", "placeholder"], Dl = ["for", "innerHTML"];
function Ol(e, t, i, n, l, s) {
  return C(), L("div", {
    class: K(["is-switch", e.classes]),
    "data-labeled": e.canRenderLabelHtml
  }, [
    V(e.$slots, "prefix"),
    $(ee("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.Value = o),
      type: "checkbox",
      ref: "input",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, Ml), [
      [Ai, e.Value]
    ]),
    e.canRenderLabelSlot ? V(e.$slots, "label", { key: 0 }) : T("", !0),
    e.canRenderLabelHtml ? (C(), L("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Dl)) : T("", !0)
  ], 10, Al);
}
const li = /* @__PURE__ */ ie(Bl, [["render", Ol]]);
class De {
  constructor(t, i) {
    j(this, "value");
    j(this, "disabled");
    t || (t = {}), this.value = t, i || (i = !1), this.disabled = i;
  }
  enabled() {
    return Object.keys(this.value).filter((i) => i === "reset" && this.disabled ? !1 : this.value[i] === !0);
  }
  amountEnabled() {
    return this.enabled().length;
  }
}
class Oe {
  constructor(t) {
    j(this, "value");
    t || (t = {}), this.value = t;
  }
  text(t) {
    return this.value[t];
  }
}
const Vl = (e, t, i) => {
  const n = [!1, ""], l = [!1, ""], s = [!1, ""];
  return e === !0 && (n[0] = !0), t === !0 && (l[0] = !0), i === !0 && (s[0] = !0), Array.isArray(e) && (n[0] = e[0], n[1] = e[1]), Array.isArray(t) && (l[0] = t[0], l[1] = t[1]), Array.isArray(i) && (s[0] = i[0], s[1] = i[1]), typeof e == "string" && e.length > 0 && (n[0] = !0, n[1] = e), typeof t == "string" && t.length > 0 && (l[0] = !0, l[1] = t), typeof i == "string" && i.length > 0 && (s[0] = !0, s[1] = i), {
    config: new De({
      reset: n[0],
      error: l[0],
      info: s[0]
    }),
    texts: new Oe({
      reset: n[1],
      error: l[1],
      info: s[1]
    })
  };
}, Mt = (e, t, i, n = {}) => {
  e.$emit("click-ui", t, Q(i, n));
}, Fi = (e, t, i, n = {}) => {
  e.$emit("keyup", t, Q(i, n));
}, Hi = (e, t, i, n = {}) => {
  e.$emit("keydown", t, Q(i, n));
}, Pi = (e, t, i, n = {}) => {
  e.$emit("focus", t, Q(i, n));
}, $i = (e, t, i, n = {}) => {
  e.$emit("blur", t, Q(i, n));
}, ji = (e, t, i, n = {}) => {
  e.$emit("click", t, Q(i, n));
}, Ul = {
  name: "lktFieldState",
  emits: ["click-ui"],
  props: {
    stateConfigValue: { type: Object, default: () => ({}) },
    stateTextsValue: { type: Object, default: () => ({}) }
  },
  computed: {
    enabledIcons() {
      return this.stateConfigValue.enabled();
    }
  },
  methods: {
    onUIStatusClick(e, t, i = {}) {
      Mt(this, e, t, i);
    }
  }
}, Fl = { class: "lkt-field__state" }, Hl = ["title", "onClick"];
function Pl(e, t, i, n, l, s) {
  return C(), L("div", Fl, [
    (C(!0), L(Bt, null, At(s.enabledIcons, (o) => (C(), L("i", {
      class: K("lkt-field__" + o + "-icon"),
      title: i.stateTextsValue.text(o),
      onClick: (a) => s.onUIStatusClick(a, o)
    }, null, 10, Hl))), 256))
  ]);
}
const pe = /* @__PURE__ */ ie(Ul, [["render", Pl]]), $l = ["data-show-ui", "data-labeled"], jl = ["name", "id", "disabled", "readonly", "placeholder", "tabindex"], Gl = ["name", "id", "disabled", "readonly", "tabindex"], ql = ["for", "innerHTML"], Wl = { name: "LktFieldText", inheritAttrs: !1 }, wt = /* @__PURE__ */ Mi({
  ...Wl,
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: X(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    tabindex: { type: [Number, Boolean], default: !1 },
    reset: { type: [Boolean, String, Array], default: !1 },
    info: { type: [Boolean, String, Array], default: !1 },
    error: { type: [Boolean, String, Array], default: !1 }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-ui"],
  setup(e, { expose: t, emit: i }) {
    const n = i, l = Di(), s = e;
    let o = H(null), a = H(null);
    (() => {
      const S = Vl(s.reset, s.info, s.error);
      o = H(S.config).value, a = H(S.texts).value;
    })();
    const u = X(16), c = H(null), f = H(s.modelValue), d = H(s.modelValue), m = le(() => typeof s.valid == "function" ? s.valid() : s.valid), h = le(() => d.value !== f.value), b = le(() => o.amountEnabled() > 0), g = le(() => {
      const S = ["lkt-field"];
      return s.palette && S.push(`lkt-field--${s.palette}`), h.value && S.push("is-changed"), s.disabled && S.push("is-disabled"), S.push(m.value ? "is-valid" : "is-error"), S.push(s.modelValue ? "is-filled" : "is-empty"), S.join(" ");
    }), p = () => {
      st(() => {
        c.value.focus();
      });
    };
    Se(() => s.modelValue, (S) => d.value = S), Se(d, (S) => n("update:modelValue", S));
    const _ = () => d.value = f.value, v = () => d.value, y = (S) => n("keyup", S, Q(u, { value: d.value })), w = (S) => n("keydown", S, Q(u, { value: d.value })), k = (S) => n("focus", S, Q(u, { value: d.value })), x = (S) => n("blur", S, Q(u, { value: d.value })), R = (S) => n("click", S, Q(u, { value: d.value })), I = (S, z) => {
      if (z.id === "reset")
        return _();
      n("click-ui", S, Q(z.id, { field: this }));
    };
    return t({
      Identifier: u,
      reset: _,
      focus: p,
      value: v
    }), (S, z) => (C(), L("div", {
      class: K(["is-text", g.value]),
      "data-show-ui": b.value,
      "data-labeled": !de(l).label
    }, [
      V(S.$slots, "prefix"),
      e.placeholder ? $((C(), L("input", {
        key: 0,
        "onUpdate:modelValue": z[0] || (z[0] = (E) => d.value = E),
        ref: (E) => c.value = E,
        type: "text",
        name: e.name,
        id: de(u),
        disabled: e.disabled,
        readonly: e.readonly,
        placeholder: e.placeholder,
        tabindex: e.tabindex,
        onKeyup: y,
        onKeydown: w,
        onFocus: k,
        onBlur: x,
        onClick: R
      }, null, 40, jl)), [
        [te, d.value]
      ]) : $((C(), L("input", {
        key: 1,
        "onUpdate:modelValue": z[1] || (z[1] = (E) => d.value = E),
        ref: (E) => c.value = E,
        type: "text",
        name: e.name,
        id: de(u),
        disabled: e.disabled,
        readonly: e.readonly,
        tabindex: e.tabindex,
        onKeyup: y,
        onKeydown: w,
        onFocus: k,
        onBlur: x,
        onClick: R
      }, null, 40, Gl)), [
        [te, d.value]
      ]),
      de(l).label ? V(S.$slots, "label", { key: 2 }) : T("", !0),
      de(l).label ? T("", !0) : (C(), L("label", {
        key: 3,
        for: de(u),
        innerHTML: e.label
      }, null, 8, ql)),
      b.value ? (C(), he(pe, {
        key: 4,
        "state-config-value": de(o),
        "state-texts-value": de(a),
        onClickUi: I
      }, null, 8, ["state-config-value", "state-texts-value"])) : T("", !0)
    ], 10, $l));
  }
}), Yl = {
  methods: {
    onUIStatusClick(e, t, i = {}) {
      Mt(this, e, t, i);
    }
  }
}, Le = {
  mixins: [Yl],
  methods: {
    onClickUi(e, t) {
      const i = t.id;
      if (i === "reset") {
        this.reset();
        return;
      }
      if (i === "password" && "visiblePassword" in this) {
        this.visiblePassword = !this.visiblePassword;
        return;
      }
      Mt(this, e, t.id, { field: this });
    }
  }
}, Ye = {
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-ui"],
  mixins: [We],
  props: {
    modelValue: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: X(16) },
    valid: { type: [Boolean, Function], default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 },
    tabindex: { type: [Number, Boolean], default: !1 },
    stateConfig: { type: Object, default: () => ({}) },
    stateTexts: { type: Object, default: () => ({}) }
  },
  data() {
    return {
      Identifier: X(16),
      originalValue: this.modelValue,
      value: this.modelValue,
      stateConfigValue: new De(this.stateConfig, this.disabled || this.readonly),
      stateTextValue: new Oe(this.stateTexts)
    };
  },
  computed: {
    showInfoUi() {
      return this.stateConfigValue.amountEnabled() > 0;
    },
    isValid() {
      return typeof this.valid == "function" ? this.valid() : this.valid;
    },
    isEmpty() {
      return !this.modelValue;
    },
    changed() {
      return this.value !== this.originalValue;
    },
    canRenderLabelSlot() {
      return pt(this, "label");
    },
    canRenderLabelHtml() {
      return this.canRenderLabelSlot ? !1 : !this.label && this.emptyLabel ? !0 : !!this.label;
    }
  },
  watch: {
    modelValue(e) {
      this.value = e;
    },
    value(e) {
      this.$emit("update:modelValue", e);
    },
    stateConfig: {
      handler() {
        this.stateConfigValue = new De(this.stateConfig, this.disabled || this.readonly);
      },
      deep: !0
    },
    stateTexts: {
      handler() {
        this.stateTextValue = new Oe(this.stateTexts);
      },
      deep: !0
    }
  },
  methods: {
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    setIsDisabled(e = !1) {
      return this.disabled = e === !0, this;
    },
    isDisabled() {
      return this.disabled;
    },
    reset() {
      this.value = this.originalValue;
    },
    getValue() {
      return this.modelValue;
    },
    onKeyUp(e) {
      Fi(this, e, this.name, { value: this.Value });
    },
    onKeyDown(e) {
      Hi(this, e, this.name, { value: this.Value });
    },
    onFocus(e) {
      Pi(this, e, this.name, { value: this.Value });
    },
    onBlur(e) {
      $i(this, e, this.name, { value: this.Value });
    },
    onClick(e) {
      ji(this, e, this.name, { value: this.Value });
    }
  }
}, Xl = {
  name: "LktFieldTextArea",
  components: { lktFieldState: pe },
  mixins: [Ye, Le]
}, Kl = ["data-show-ui", "data-labeled"], Jl = ["name", "id", "disabled", "readonly", "placeholder"], Zl = ["name", "id", "disabled", "readonly"], Ql = ["for", "innerHTML"];
function es(e, t, i, n, l, s) {
  const o = fe("lkt-field-state");
  return C(), L("div", {
    class: K(["is-textarea", e.classes]),
    "data-show-ui": e.showInfoUi,
    "data-labeled": e.canRenderLabelHtml
  }, [
    V(e.$slots, "prefix"),
    e.placeholder ? $((C(), L("textarea", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, Jl)), [
      [te, e.value]
    ]) : $((C(), L("textarea", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.value = a),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, Zl)), [
      [te, e.value]
    ]),
    e.canRenderLabelSlot ? V(e.$slots, "label", { key: 2 }) : T("", !0),
    e.canRenderLabelHtml ? (C(), L("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Ql)) : T("", !0),
    e.showInfoUi ? (C(), he(o, {
      key: 4,
      "state-config-value": e.stateConfigValue,
      "state-texts-value": e.stateTextValue,
      onClickUi: e.onClickUi
    }, null, 8, ["state-config-value", "state-texts-value", "onClickUi"])) : T("", !0)
  ], 10, Kl);
}
const si = /* @__PURE__ */ ie(Xl, [["render", es]]), ts = {
  name: "LktFieldEmail",
  components: { lktFieldState: pe },
  mixins: [Ye, Le]
}, is = ["data-show-ui", "data-labeled"], ns = ["name", "id", "disabled", "readonly", "placeholder"], ls = ["name", "id", "disabled", "readonly"], ss = ["for", "innerHTML"];
function os(e, t, i, n, l, s) {
  const o = fe("lkt-field-state");
  return C(), L("div", {
    class: K(["is-email", e.classes]),
    "data-show-ui": e.showInfoUi,
    "data-labeled": e.canRenderLabelHtml
  }, [
    V(e.$slots, "prefix"),
    e.placeholder ? $((C(), L("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      type: "email",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, ns)), [
      [te, e.value]
    ]) : $((C(), L("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.value = a),
      type: "email",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, ls)), [
      [te, e.value]
    ]),
    e.canRenderLabelSlot ? V(e.$slots, "label", { key: 2 }) : T("", !0),
    e.canRenderLabelHtml ? (C(), L("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, ss)) : T("", !0),
    e.showInfoUi ? (C(), he(o, {
      key: 4,
      "state-config-value": e.stateConfigValue,
      "state-texts-value": e.stateTextValue,
      onClickUi: e.onClickUi
    }, null, 8, ["state-config-value", "state-texts-value", "onClickUi"])) : T("", !0)
  ], 10, is);
}
const oi = /* @__PURE__ */ ie(ts, [["render", os]]), as = {
  name: "LktFieldTel",
  components: { lktFieldState: pe },
  mixins: [Ye, Le]
}, rs = ["data-show-ui", "data-labeled"], us = ["name", "id", "disabled", "readonly", "placeholder"], cs = ["name", "id", "disabled", "readonly"], ds = ["for", "innerHTML"];
function fs(e, t, i, n, l, s) {
  const o = fe("lkt-field-state");
  return C(), L("div", {
    class: K(["is-tel", e.classes]),
    "data-show-ui": e.showInfoUi,
    "data-labeled": e.canRenderLabelHtml
  }, [
    V(e.$slots, "prefix"),
    e.placeholder ? $((C(), L("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      type: "tel",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, us)), [
      [te, e.value]
    ]) : $((C(), L("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.value = a),
      type: "tel",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, cs)), [
      [te, e.value]
    ]),
    e.canRenderLabelSlot ? V(e.$slots, "label", { key: 2 }) : T("", !0),
    e.canRenderLabelHtml ? (C(), L("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, ds)) : T("", !0),
    e.showInfoUi ? (C(), he(o, {
      key: 4,
      "state-config-value": e.stateConfigValue,
      "state-texts-value": e.stateTextValue,
      onClickUi: e.onClickUi
    }, null, 8, ["state-config-value", "state-texts-value", "onClickUi"])) : T("", !0)
  ], 10, rs);
}
const ai = /* @__PURE__ */ ie(as, [["render", fs]]), hs = {
  props: {
    modelValue: { type: [String, Number, Object, Array, Date, Boolean], default: () => {
    } },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: X(16) },
    invalid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    canReset: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Value: this.modelValue,
      Identifier: X(16),
      canEmit: !1,
      originalValue: this.value
    };
  },
  computed: {
    changed() {
      return this.Value !== this.originalValue;
    },
    canRenderLabelSlot() {
      return !!this.$slots.label;
    },
    canRenderLabelHtml() {
      return this.canRenderLabelSlot ? !1 : !this.label && this.emptyLabel ? !0 : !!this.label;
    }
  },
  methods: {
    setIsDisabled(e = !1) {
      return this.disabled = e === !0, this;
    },
    isDisabled() {
      return this.disabled;
    },
    reset() {
      this.Value = void 0;
    },
    getValue() {
      return this.Value;
    },
    onKeyUp(e) {
      Fi(this, e, this.name, { value: this.Value });
    },
    onKeyDown(e) {
      Hi(this, e, this.name, { value: this.Value });
    },
    onFocus(e) {
      Pi(this, e, this.name, { value: this.Value });
    },
    onBlur(e) {
      $i(this, e, this.name, { value: this.Value });
    },
    onClick(e) {
      ji(this, e, this.name, { value: this.Value });
    }
  },
  watch: {
    value(e) {
      this.Value = e;
    },
    Value(e) {
      this.canEmit === !0 && (this.$emit("input", e), this.$emit("change", e));
    }
  },
  mounted() {
    this.canEmit = !0;
  }
}, ps = {
  name: "LktFieldUnit",
  components: { lktFieldState: pe },
  mixins: [hs, Le],
  props: {
    value: { type: [Number, String], default: "" },
    min: { type: [Number, void 0], default: void 0 },
    max: { type: [Number, void 0], default: void 0 },
    step: { type: [Number, String], default: 1 },
    addRange: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Value: 0,
      updating: !1
    };
  },
  computed: {
    Min() {
      return typeof this.min < "u" ? parseInt(this.min) : !1;
    },
    Max() {
      return typeof this.max < "u" ? parseInt(this.max) : !1;
    }
  },
  watch: {
    Value(e) {
      if (this.canEmit === !0) {
        if (this.updating)
          return;
        if (this.updating = !0, this.reAssign(e)) {
          this.$nextTick(() => {
            this.updating = !1;
          });
          return;
        }
        this.validate(e), this.$emit("input", e), this.$emit("change", e), this.$nextTick(() => {
          this.updating = !1;
        });
      }
    },
    min() {
      this.reAssign(this.Value);
    },
    max() {
      this.reAssign(this.Value);
    }
  },
  methods: {
    reAssign(e) {
      e = Number(e);
      let t = !1;
      return this.min !== !1 && e < this.min ? (e = this.min, t = !0) : this.max !== !1 && e > this.max && (e = this.max, t = !0), t === !0 ? (this.Value = e, !0) : !1;
    }
  }
}, gs = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled", "data-ranged"], ms = ["id", "name", "disabled", "readonly", "min", "max"], bs = ["name", "id", "disabled", "readonly", "min", "max", "step", "placeholder"], _s = ["for", "innerHTML"];
function vs(e, t, i, n, l, s) {
  const o = fe("lkt-field-state");
  return C(), L("div", {
    class: "lkt-field-unit",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !l.Value,
    "data-filled": !!l.Value,
    "data-ranged": i.addRange
  }, [
    i.addRange ? $((C(), L("input", {
      key: 0,
      type: "range",
      id: e.Identifier + "Points",
      name: e.name + "Points",
      "onUpdate:modelValue": t[0] || (t[0] = (a) => l.Value = a),
      disabled: e.disabled,
      readonly: e.readonly,
      min: s.Min,
      max: s.Max
    }, null, 8, ms)), [
      [te, l.Value]
    ]) : T("", !0),
    V(e.$slots, "prefix"),
    $(ee("input", {
      "onUpdate:modelValue": t[1] || (t[1] = (a) => l.Value = a),
      type: "number",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      min: s.Min,
      max: s.Max,
      step: i.step,
      placeholder: e.placeholder
    }, null, 8, bs), [
      [te, l.Value]
    ]),
    e.canRenderLabelSlot ? V(e.$slots, "label", { key: 1 }) : T("", !0),
    e.canRenderLabelHtml ? (C(), L("label", {
      key: 2,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, _s)) : T("", !0),
    e.showInfoUi ? (C(), he(o, {
      key: 3,
      "state-config-value": e.stateConfigValue,
      "state-texts-value": e.stateTextValue,
      onClickUi: e.onClickUi
    }, null, 8, ["state-config-value", "state-texts-value", "onClickUi"])) : T("", !0)
  ], 8, gs);
}
const ri = /* @__PURE__ */ ie(ps, [["render", vs]]), ys = {
  name: "LktFieldPassword",
  components: { lktFieldState: pe },
  mixins: [Ye, Le],
  data() {
    return {
      visiblePassword: !1
    };
  },
  computed: {
    inputType() {
      return this.visiblePassword ? "text" : "password";
    }
  }
}, ws = ["data-show-ui", "data-labeled"], ks = ["type", "name", "id", "disabled", "readonly", "placeholder"], Ss = ["type", "name", "id", "disabled", "readonly"], xs = ["for", "innerHTML"];
function Cs(e, t, i, n, l, s) {
  const o = fe("lkt-field-state");
  return C(), L("div", {
    class: K(["is-password", e.classes]),
    "data-show-ui": e.showInfoUi,
    "data-labeled": e.canRenderLabelHtml
  }, [
    V(e.$slots, "prefix"),
    e.placeholder ? $((C(), L("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      type: s.inputType,
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, ks)), [
      [ti, e.value]
    ]) : $((C(), L("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.value = a),
      type: s.inputType,
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, Ss)), [
      [ti, e.value]
    ]),
    e.canRenderLabelSlot ? V(e.$slots, "label", { key: 2 }) : T("", !0),
    e.canRenderLabelHtml ? (C(), L("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, xs)) : T("", !0),
    e.showInfoUi ? (C(), he(o, {
      key: 4,
      "state-config-value": e.stateConfigValue,
      "state-texts-value": e.stateTextValue,
      onClickUi: e.onClickUi
    }, null, 8, ["state-config-value", "state-texts-value", "onClickUi"])) : T("", !0)
  ], 10, ws);
}
const ui = /* @__PURE__ */ ie(ys, [["render", Cs]]);
class at {
  constructor(t = []) {
    j(this, "value");
    this.value = [...t];
  }
  all() {
    return this.value;
  }
  filter(t) {
    if (t === "")
      return this.all();
    const i = t.toLowerCase();
    return this.value.filter((n) => n.label.toLowerCase().indexOf(i) !== -1);
  }
  receiveOptions(t) {
    const i = /* @__PURE__ */ new Set(), n = [...this.value, ...t], l = [];
    n.forEach((s) => {
      let o = [s.value, s.label].join("-");
      i.has(o) || (l.push(s), i.add(o));
    }), this.value = l;
  }
}
const zs = {
  emits: ["update:modelValue"],
  mixins: [We],
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: X(16) },
    valid: { type: [Boolean, Function], default: !1 },
    disabled: { type: Boolean, default: !1 },
    closeOnSelect: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 },
    options: { type: Array, default: () => [] },
    disabledOptions: { type: Array, default: () => [] }
  },
  data() {
    const e = new at(this.options);
    return {
      Identifier: X(16),
      originalValue: this.modelValue,
      value: this.modelValue,
      loading: !1,
      updatedModelValue: !1,
      latestTimestamp: Date.now(),
      optionsValue: e
    };
  },
  computed: {
    isValid() {
      return typeof this.valid == "function" ? this.valid() : this.valid;
    },
    changed() {
      return this.value !== this.originalValue;
    },
    canRenderLabelSlot() {
      return pt(this, "label");
    },
    canRenderLabelHtml() {
      return this.canRenderLabelSlot ? !1 : !this.label && this.emptyLabel ? !0 : !!this.label;
    }
  },
  watch: {
    modelValue(e) {
      this.value = e;
    },
    value(e) {
      this.$emit("update:modelValue", e), this.updatedModelValue = !0, this.$nextTick(() => {
        this.updatedModelValue = !1;
      });
    },
    options: {
      handler() {
        const e = new at(this.options);
        this.optionsValue = e;
      },
      deep: !0
    }
  },
  methods: {
    renderOption(e) {
      return typeof this.optionFormatter == "function" ? this.optionFormatter(e) : e.label;
    },
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    setIsDisabled(e = !1) {
      return this.disabled = e === !0, this;
    },
    isDisabled() {
      return this.disabled;
    },
    reset() {
      this.modelValue = this.originalValue;
    },
    getValue() {
      return this.modelValue;
    }
  }
}, Es = {
  name: "LktFieldRadio",
  mixins: [zs],
  props: {
    value: { type: String, default: "" }
  }
}, Ls = ["data-labeled"], Is = { class: "lkt-field__option" }, Ns = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], Rs = ["for", "innerHTML"];
function Ts(e, t, i, n, l, s) {
  return C(), L("div", {
    class: K(["is-radio", e.classes]),
    "data-labeled": e.canRenderLabelHtml
  }, [
    V(e.$slots, "prefix"),
    (C(!0), L(Bt, null, At(e.optionsValue.all(), (o, a) => (C(), L("div", Is, [
      $(ee("input", {
        type: "radio",
        "onUpdate:modelValue": t[0] || (t[0] = (r) => e.Value = r),
        name: e.name,
        id: e.Identifier + a,
        disabled: e.disabled,
        readonly: e.readonly,
        placeholder: e.placeholder,
        value: o.value,
        checked: o.value === e.Value
      }, null, 8, Ns), [
        [Cl, e.Value]
      ]),
      ee("label", {
        for: e.Identifier + a,
        innerHTML: o.label
      }, null, 8, Rs)
    ]))), 256))
  ], 10, Ls);
}
const ci = /* @__PURE__ */ ie(Es, [["render", Ts]]), Bs = {
  emits: ["update:modelValue", "click-ui"],
  mixins: [We],
  props: {
    modelValue: { type: [String, Date], default: "" },
    disabledDates: { type: Array, default: () => [] },
    utc: { type: Boolean, default: !1 },
    multiDates: { type: Boolean, default: !1 },
    inline: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    timePicker: { type: Boolean, default: !1 },
    weekPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    preventMinMaxNavigation: { type: Boolean, default: !1 },
    range: { type: Boolean, default: !1 },
    autoRange: { type: [Number, String], default: () => null },
    multiCalendars: { type: [Boolean, Number, String], default: () => null },
    flow: { type: Array, default: () => null },
    presetRanges: { type: Array, default: () => [] },
    minDate: { type: [Date, String], default: () => null },
    maxDate: { type: [Date, String], default: () => null },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: X(16) },
    valid: { type: [Boolean, Function], default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Identifier: X(16),
      originalValue: this.modelValue,
      value: this.modelValue,
      stateConfigValue: new De(this.stateConfig, this.disabled || this.readonly),
      stateTextValue: new Oe(this.stateTexts)
    };
  },
  computed: {
    showInfoUi() {
      return this.stateConfigValue.amountEnabled() > 0;
    },
    isValid() {
      return typeof this.valid == "function" ? this.valid() : this.valid;
    },
    isEmpty() {
      return !this.value;
    },
    changed() {
      return this.value !== this.originalValue;
    },
    canRenderLabelSlot() {
      return pt(this, "label");
    },
    canRenderLabelHtml() {
      return this.canRenderLabelSlot ? !1 : !this.label && this.emptyLabel ? !0 : !!this.label;
    }
  },
  watch: {
    modelValue(e) {
      this.value = e;
    },
    value(e) {
      this.$emit("update:modelValue", e);
    },
    stateConfig: {
      handler() {
        this.stateConfigValue = new De(this.stateConfig, this.disabled || this.readonly);
      },
      deep: !0
    },
    stateTexts: {
      handler() {
        this.stateTextValue = new Oe(this.stateTexts);
      },
      deep: !0
    }
  },
  methods: {
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    setIsDisabled(e = !1) {
      return this.disabled = e === !0, this;
    },
    isDisabled() {
      return this.disabled;
    },
    reset() {
      this.value = this.originalValue;
    },
    getValue() {
      return this.modelValue;
    }
  }
}, As = {
  name: "LktFieldDate",
  components: { lktFieldState: pe },
  mixins: [Bs, Le]
}, Ms = ["data-show-ui", "data-labeled"], Ds = ["for", "innerHTML"];
function Os(e, t, i, n, l, s) {
  const o = fe("Datepicker"), a = fe("lkt-field-state");
  return C(), L("div", {
    class: K(["is-date", e.classes]),
    "data-show-ui": e.showInfoUi,
    "data-labeled": e.canRenderLabelHtml
  }, [
    V(e.$slots, "prefix"),
    Oi(o, {
      modelValue: e.value,
      "onUpdate:modelValue": t[0] || (t[0] = (r) => e.value = r),
      uid: e.Identifier,
      disabled: e.disabled,
      name: e.name,
      range: e.range,
      "auto-range": e.autoRange,
      "multi-calendars": e.multiCalendars,
      "month-picker": e.monthPicker,
      "time-picker": e.timePicker,
      inline: e.inline,
      "multi-dates": e.multiDates,
      flow: e.flow,
      utc: e.utc,
      "week-picker": e.weekPicker,
      "year-picker": e.yearPicker,
      "preset-ranges": e.presetRanges,
      "disabled-dates": e.disabledDates,
      "min-date": e.minDate,
      "max-date": e.maxDate,
      "prevent-min-max-navigation": e.preventMinMaxNavigation
    }, null, 8, ["modelValue", "uid", "disabled", "name", "range", "auto-range", "multi-calendars", "month-picker", "time-picker", "inline", "multi-dates", "flow", "utc", "week-picker", "year-picker", "preset-ranges", "disabled-dates", "min-date", "max-date", "prevent-min-max-navigation"]),
    e.canRenderLabelSlot ? V(e.$slots, "label", { key: 0 }) : T("", !0),
    e.canRenderLabelHtml ? (C(), L("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Ds)) : T("", !0),
    e.showInfoUi ? (C(), he(a, {
      key: 2,
      "state-config-value": e.stateConfigValue,
      "state-texts-value": e.stateTextValue,
      onClickUi: e.onClickUi
    }, null, 8, ["state-config-value", "state-texts-value", "onClickUi"])) : T("", !0)
  ], 10, Ms);
}
const di = /* @__PURE__ */ ie(As, [["render", Os]]);
class M {
}
j(M, "SHOW_PASSWORD_MESSAGE", ""), j(M, "IS_MANDATORY_MESSAGE", ""), j(M, "FOLLOW_LINK_MESSAGE", ""), j(M, "OPEN_MESSAGE", ""), j(M, "RESET_MESSAGE", ""), j(M, "NO_OPTIONS_MESSAGE", ""), j(M, "TODAY_RANGE_TEXT", ""), j(M, "THIS_MONTH_RANGE_TEXT", ""), j(M, "LAST_MONTH_RANGE_TEXT", ""), j(M, "THIS_YEAR_RANGE_TEXT", "");
const Vs = () => M.NO_OPTIONS_MESSAGE;
class fi {
  constructor(t) {
    j(this, "value");
    if (typeof t != "function" && typeof t != "object")
      throw new Error("searchOptions must be an object or a function returning an object");
    if (typeof t == "function" && typeof t() != "object")
      throw new Error("searchOptions function must return an object");
    t || (t = {}), this.value = t;
  }
  getOptions() {
    return typeof this.value == "function" ? this.value() : this.value;
  }
}
function Us(e, t) {
  const i = /* @__PURE__ */ Object.create(null), n = e.split(",");
  for (let l = 0; l < n.length; l++)
    i[n[l]] = !0;
  return t ? (l) => !!i[l.toLowerCase()] : (l) => !!i[l];
}
const me = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Gi = () => {
}, Fs = () => !1, Hs = /^on[^a-z]/, Ps = (e) => Hs.test(e), ue = Object.assign, $s = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, js = Object.prototype.hasOwnProperty, F = (e, t) => js.call(e, t), O = Array.isArray, Be = (e) => mt(e) === "[object Map]", Gs = (e) => mt(e) === "[object Set]", W = (e) => typeof e == "function", oe = (e) => typeof e == "string", gt = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", qs = (e) => (ae(e) || W(e)) && W(e.then) && W(e.catch), Ws = Object.prototype.toString, mt = (e) => Ws.call(e), qi = (e) => mt(e).slice(8, -1), Ys = (e) => mt(e) === "[object Object]", Dt = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Wi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (i) => t[i] || (t[i] = e(i));
}, Yi = Wi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xs = Wi((e) => e ? `on${Yi(e)}` : ""), Ve = (e, t) => !Object.is(e, t), Ks = (e, t, i) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: i
  });
};
let hi;
const kt = () => hi || (hi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ot(e) {
  if (O(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const n = e[i], l = oe(n) ? eo(n) : Ot(n);
      if (l)
        for (const s in l)
          t[s] = l[s];
    }
    return t;
  } else if (oe(e) || ae(e))
    return e;
}
const Js = /;(?![^(]*\))/g, Zs = /:([^]+)/, Qs = /\/\*[^]*?\*\//g;
function eo(e) {
  const t = {};
  return e.replace(Qs, "").split(Js).forEach((i) => {
    if (i) {
      const n = i.split(Zs);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Vt(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (O(e))
    for (let i = 0; i < e.length; i++) {
      const n = Vt(e[i]);
      n && (t += n + " ");
    }
  else if (ae(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
function pi(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Xi;
function to(e, t = Xi) {
  t && t.active && t.effects.push(e);
}
function io() {
  return Xi;
}
const St = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Ki = (e) => (e.w & we) > 0, Ji = (e) => (e.n & we) > 0, no = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= we;
}, lo = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let i = 0;
    for (let n = 0; n < t.length; n++) {
      const l = t[n];
      Ki(l) && !Ji(l) ? l.delete(e) : t[i++] = l, l.w &= ~we, l.n &= ~we;
    }
    t.length = i;
  }
}, xt = /* @__PURE__ */ new WeakMap();
let He = 0, we = 1;
const Ct = 30;
let Y;
const xe = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), zt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class so {
  constructor(t, i = null, n) {
    this.fn = t, this.scheduler = i, this.active = !0, this.deps = [], this.parent = void 0, to(this, n);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Y, i = Ce;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Y, Y = this, Ce = !0, we = 1 << ++He, He <= Ct ? no(this) : gi(this), this.fn();
    } finally {
      He <= Ct && lo(this), we = 1 << --He, Y = this.parent, Ce = i, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Y === this ? this.deferStop = !0 : this.active && (gi(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function gi(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let i = 0; i < t.length; i++)
      t[i].delete(e);
    t.length = 0;
  }
}
let Ce = !0;
const Zi = [];
function Ut() {
  Zi.push(Ce), Ce = !1;
}
function Ft() {
  const e = Zi.pop();
  Ce = e === void 0 ? !0 : e;
}
function J(e, t, i) {
  if (Ce && Y) {
    let n = xt.get(e);
    n || xt.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(i);
    l || n.set(i, l = St());
    const s = process.env.NODE_ENV !== "production" ? { effect: Y, target: e, type: t, key: i } : void 0;
    oo(l, s);
  }
}
function oo(e, t) {
  let i = !1;
  He <= Ct ? Ji(e) || (e.n |= we, i = !Ki(e)) : i = !e.has(Y), i && (e.add(Y), Y.deps.push(e), process.env.NODE_ENV !== "production" && Y.onTrack && Y.onTrack(
    ue(
      {
        effect: Y
      },
      t
    )
  ));
}
function ye(e, t, i, n, l, s) {
  const o = xt.get(e);
  if (!o)
    return;
  let a = [];
  if (t === "clear")
    a = [...o.values()];
  else if (i === "length" && O(e)) {
    const u = Number(n);
    o.forEach((c, f) => {
      (f === "length" || !gt(f) && f >= u) && a.push(c);
    });
  } else
    switch (i !== void 0 && a.push(o.get(i)), t) {
      case "add":
        O(e) ? Dt(i) && a.push(o.get("length")) : (a.push(o.get(xe)), Be(e) && a.push(o.get(zt)));
        break;
      case "delete":
        O(e) || (a.push(o.get(xe)), Be(e) && a.push(o.get(zt)));
        break;
      case "set":
        Be(e) && a.push(o.get(xe));
        break;
    }
  const r = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: i, newValue: n, oldValue: l, oldTarget: s } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? Je(a[0], r) : Je(a[0]));
  else {
    const u = [];
    for (const c of a)
      c && u.push(...c);
    process.env.NODE_ENV !== "production" ? Je(St(u), r) : Je(St(u));
  }
}
function Je(e, t) {
  const i = O(e) ? e : [...e];
  for (const n of i)
    n.computed && mi(n, t);
  for (const n of i)
    n.computed || mi(n, t);
}
function mi(e, t) {
  (e !== Y || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(ue({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const ao = /* @__PURE__ */ Us("__proto__,__v_isRef,__isVue"), Qi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gt)
), bi = /* @__PURE__ */ ro();
function ro() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...i) {
      const n = A(this);
      for (let s = 0, o = this.length; s < o; s++)
        J(n, "get", s + "");
      const l = n[t](...i);
      return l === -1 || l === !1 ? n[t](...i.map(A)) : l;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...i) {
      Ut();
      const n = A(this)[t].apply(this, i);
      return Ft(), n;
    };
  }), e;
}
function uo(e) {
  const t = A(this);
  return J(t, "has", e), t.hasOwnProperty(e);
}
class en {
  constructor(t = !1, i = !1) {
    this._isReadonly = t, this._shallow = i;
  }
  get(t, i, n) {
    const l = this._isReadonly, s = this._shallow;
    if (i === "__v_isReactive")
      return !l;
    if (i === "__v_isReadonly")
      return l;
    if (i === "__v_isShallow")
      return s;
    if (i === "__v_raw" && n === (l ? s ? on : sn : s ? So : ln).get(t))
      return t;
    const o = O(t);
    if (!l) {
      if (o && F(bi, i))
        return Reflect.get(bi, i, n);
      if (i === "hasOwnProperty")
        return uo;
    }
    const a = Reflect.get(t, i, n);
    return (gt(i) ? Qi.has(i) : ao(i)) || (l || J(t, "get", i), s) ? a : Z(a) ? o && Dt(i) ? a : a.value : ae(a) ? l ? rn(a) : an(a) : a;
  }
}
class co extends en {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, n, l) {
    let s = t[i];
    if (Ge(s) && Z(s) && !Z(n))
      return !1;
    if (!this._shallow && (!Et(n) && !Ge(n) && (s = A(s), n = A(n)), !O(t) && Z(s) && !Z(n)))
      return s.value = n, !0;
    const o = O(t) && Dt(i) ? Number(i) < t.length : F(t, i), a = Reflect.set(t, i, n, l);
    return t === A(l) && (o ? Ve(n, s) && ye(t, "set", i, n, s) : ye(t, "add", i, n)), a;
  }
  deleteProperty(t, i) {
    const n = F(t, i), l = t[i], s = Reflect.deleteProperty(t, i);
    return s && n && ye(t, "delete", i, void 0, l), s;
  }
  has(t, i) {
    const n = Reflect.has(t, i);
    return (!gt(i) || !Qi.has(i)) && J(t, "has", i), n;
  }
  ownKeys(t) {
    return J(
      t,
      "iterate",
      O(t) ? "length" : xe
    ), Reflect.ownKeys(t);
  }
}
class tn extends en {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, i) {
    return process.env.NODE_ENV !== "production" && pi(
      `Set operation on key "${String(i)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, i) {
    return process.env.NODE_ENV !== "production" && pi(
      `Delete operation on key "${String(i)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const fo = /* @__PURE__ */ new co(), ho = /* @__PURE__ */ new tn(), po = /* @__PURE__ */ new tn(!0), Ht = (e) => e, bt = (e) => Reflect.getPrototypeOf(e);
function Ze(e, t, i = !1, n = !1) {
  e = e.__v_raw;
  const l = A(e), s = A(t);
  i || (Ve(t, s) && J(l, "get", t), J(l, "get", s));
  const { has: o } = bt(l), a = n ? Ht : i ? Gt : jt;
  if (o.call(l, t))
    return a(e.get(t));
  if (o.call(l, s))
    return a(e.get(s));
  e !== l && e.get(t);
}
function Qe(e, t = !1) {
  const i = this.__v_raw, n = A(i), l = A(e);
  return t || (Ve(e, l) && J(n, "has", e), J(n, "has", l)), e === l ? i.has(e) : i.has(e) || i.has(l);
}
function et(e, t = !1) {
  return e = e.__v_raw, !t && J(A(e), "iterate", xe), Reflect.get(e, "size", e);
}
function _i(e) {
  e = A(e);
  const t = A(this);
  return bt(t).has.call(t, e) || (t.add(e), ye(t, "add", e, e)), this;
}
function vi(e, t) {
  t = A(t);
  const i = A(this), { has: n, get: l } = bt(i);
  let s = n.call(i, e);
  s ? process.env.NODE_ENV !== "production" && nn(i, n, e) : (e = A(e), s = n.call(i, e));
  const o = l.call(i, e);
  return i.set(e, t), s ? Ve(t, o) && ye(i, "set", e, t, o) : ye(i, "add", e, t), this;
}
function yi(e) {
  const t = A(this), { has: i, get: n } = bt(t);
  let l = i.call(t, e);
  l ? process.env.NODE_ENV !== "production" && nn(t, i, e) : (e = A(e), l = i.call(t, e));
  const s = n ? n.call(t, e) : void 0, o = t.delete(e);
  return l && ye(t, "delete", e, void 0, s), o;
}
function wi() {
  const e = A(this), t = e.size !== 0, i = process.env.NODE_ENV !== "production" ? Be(e) ? new Map(e) : new Set(e) : void 0, n = e.clear();
  return t && ye(e, "clear", void 0, void 0, i), n;
}
function tt(e, t) {
  return function(n, l) {
    const s = this, o = s.__v_raw, a = A(o), r = t ? Ht : e ? Gt : jt;
    return !e && J(a, "iterate", xe), o.forEach((u, c) => n.call(l, r(u), r(c), s));
  };
}
function it(e, t, i) {
  return function(...n) {
    const l = this.__v_raw, s = A(l), o = Be(s), a = e === "entries" || e === Symbol.iterator && o, r = e === "keys" && o, u = l[e](...n), c = i ? Ht : t ? Gt : jt;
    return !t && J(
      s,
      "iterate",
      r ? zt : xe
    ), {
      next() {
        const { value: f, done: d } = u.next();
        return d ? { value: f, done: d } : {
          value: a ? [c(f[0]), c(f[1])] : c(f),
          done: d
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ge(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const i = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${Yi(e)} operation ${i}failed: target is readonly.`,
        A(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function go() {
  const e = {
    get(s) {
      return Ze(this, s);
    },
    get size() {
      return et(this);
    },
    has: Qe,
    add: _i,
    set: vi,
    delete: yi,
    clear: wi,
    forEach: tt(!1, !1)
  }, t = {
    get(s) {
      return Ze(this, s, !1, !0);
    },
    get size() {
      return et(this);
    },
    has: Qe,
    add: _i,
    set: vi,
    delete: yi,
    clear: wi,
    forEach: tt(!1, !0)
  }, i = {
    get(s) {
      return Ze(this, s, !0);
    },
    get size() {
      return et(this, !0);
    },
    has(s) {
      return Qe.call(this, s, !0);
    },
    add: ge("add"),
    set: ge("set"),
    delete: ge("delete"),
    clear: ge("clear"),
    forEach: tt(!0, !1)
  }, n = {
    get(s) {
      return Ze(this, s, !0, !0);
    },
    get size() {
      return et(this, !0);
    },
    has(s) {
      return Qe.call(this, s, !0);
    },
    add: ge("add"),
    set: ge("set"),
    delete: ge("delete"),
    clear: ge("clear"),
    forEach: tt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = it(
      s,
      !1,
      !1
    ), i[s] = it(
      s,
      !0,
      !1
    ), t[s] = it(
      s,
      !1,
      !0
    ), n[s] = it(
      s,
      !0,
      !0
    );
  }), [
    e,
    i,
    t,
    n
  ];
}
const [
  mo,
  bo,
  _o,
  vo
] = /* @__PURE__ */ go();
function Pt(e, t) {
  const i = t ? e ? vo : _o : e ? bo : mo;
  return (n, l, s) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    F(i, l) && l in n ? i : n,
    l,
    s
  );
}
const yo = {
  get: /* @__PURE__ */ Pt(!1, !1)
}, wo = {
  get: /* @__PURE__ */ Pt(!0, !1)
}, ko = {
  get: /* @__PURE__ */ Pt(!0, !0)
};
function nn(e, t, i) {
  const n = A(i);
  if (n !== i && t.call(e, n)) {
    const l = qi(e);
    console.warn(
      `Reactive ${l} contains both the raw and reactive versions of the same object${l === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ln = /* @__PURE__ */ new WeakMap(), So = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap();
function xo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Co(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : xo(qi(e));
}
function an(e) {
  return Ge(e) ? e : $t(
    e,
    !1,
    fo,
    yo,
    ln
  );
}
function rn(e) {
  return $t(
    e,
    !0,
    ho,
    wo,
    sn
  );
}
function nt(e) {
  return $t(
    e,
    !0,
    po,
    ko,
    on
  );
}
function $t(e, t, i, n, l) {
  if (!ae(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = l.get(e);
  if (s)
    return s;
  const o = Co(e);
  if (o === 0)
    return e;
  const a = new Proxy(
    e,
    o === 2 ? n : i
  );
  return l.set(e, a), a;
}
function Ae(e) {
  return Ge(e) ? Ae(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ge(e) {
  return !!(e && e.__v_isReadonly);
}
function Et(e) {
  return !!(e && e.__v_isShallow);
}
function Lt(e) {
  return Ae(e) || Ge(e);
}
function A(e) {
  const t = e && e.__v_raw;
  return t ? A(t) : e;
}
function zo(e) {
  return Ks(e, "__v_skip", !0), e;
}
const jt = (e) => ae(e) ? an(e) : e, Gt = (e) => ae(e) ? rn(e) : e;
function Z(e) {
  return !!(e && e.__v_isRef === !0);
}
function Eo(e) {
  return Z(e) ? e.value : e;
}
const Lo = {
  get: (e, t, i) => Eo(Reflect.get(e, t, i)),
  set: (e, t, i, n) => {
    const l = e[t];
    return Z(l) && !Z(i) ? (l.value = i, !0) : Reflect.set(e, t, i, n);
  }
};
function Io(e) {
  return Ae(e) ? e : new Proxy(e, Lo);
}
const ze = [];
function No(e) {
  ze.push(e);
}
function Ro() {
  ze.pop();
}
function G(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Ut();
  const i = ze.length ? ze[ze.length - 1].component : null, n = i && i.appContext.config.warnHandler, l = To();
  if (n)
    Ee(
      n,
      i,
      11,
      [
        e + t.join(""),
        i && i.proxy,
        l.map(
          ({ vnode: s }) => `at <${Sn(i, s.type)}>`
        ).join(`
`),
        l
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    l.length && s.push(`
`, ...Bo(l)), console.warn(...s);
  }
  Ft();
}
function To() {
  let e = ze[ze.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const i = t[0];
    i && i.vnode === e ? i.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function Bo(e) {
  const t = [];
  return e.forEach((i, n) => {
    t.push(...n === 0 ? [] : [`
`], ...Ao(i));
  }), t;
}
function Ao({ vnode: e, recurseCount: t }) {
  const i = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, l = ` at <${Sn(
    e.component,
    e.type,
    n
  )}`, s = ">" + i;
  return e.props ? [l, ...Mo(e.props), s] : [l + s];
}
function Mo(e) {
  const t = [], i = Object.keys(e);
  return i.slice(0, 3).forEach((n) => {
    t.push(...un(n, e[n]));
  }), i.length > 3 && t.push(" ..."), t;
}
function un(e, t, i) {
  return oe(t) ? (t = JSON.stringify(t), i ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? i ? t : [`${e}=${t}`] : Z(t) ? (t = un(e, A(t.value), !0), i ? t : [`${e}=Ref<`, t, ">"]) : W(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = A(t), i ? t : [`${e}=`, t]);
}
const qt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Ee(e, t, i, n) {
  let l;
  try {
    l = n ? e(...n) : e();
  } catch (s) {
    cn(s, t, i);
  }
  return l;
}
function rt(e, t, i, n) {
  if (W(e)) {
    const s = Ee(e, t, i, n);
    return s && qs(s) && s.catch((o) => {
      cn(o, t, i);
    }), s;
  }
  const l = [];
  for (let s = 0; s < e.length; s++)
    l.push(rt(e[s], t, i, n));
  return l;
}
function cn(e, t, i, n = !0) {
  const l = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const o = t.proxy, a = process.env.NODE_ENV !== "production" ? qt[i] : i;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, o, a) === !1)
            return;
      }
      s = s.parent;
    }
    const r = t.appContext.config.errorHandler;
    if (r) {
      Ee(
        r,
        null,
        10,
        [e, o, a]
      );
      return;
    }
  }
  Do(e, i, l, n);
}
function Do(e, t, i, n = !0) {
  if (process.env.NODE_ENV !== "production") {
    const l = qt[t];
    if (i && No(i), G(`Unhandled error${l ? ` during execution of ${l}` : ""}`), i && Ro(), n)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let ut = !1, It = !1;
const se = [];
let _e = 0;
const Me = [];
let re = null, be = 0;
const dn = /* @__PURE__ */ Promise.resolve();
let Wt = null;
const Oo = 100;
function Vo(e) {
  const t = Wt || dn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Uo(e) {
  let t = _e + 1, i = se.length;
  for (; t < i; ) {
    const n = t + i >>> 1, l = se[n], s = qe(l);
    s < e || s === e && l.pre ? t = n + 1 : i = n;
  }
  return t;
}
function Yt(e) {
  (!se.length || !se.includes(
    e,
    ut && e.allowRecurse ? _e + 1 : _e
  )) && (e.id == null ? se.push(e) : se.splice(Uo(e.id), 0, e), fn());
}
function fn() {
  !ut && !It && (It = !0, Wt = dn.then(pn));
}
function hn(e) {
  O(e) ? Me.push(...e) : (!re || !re.includes(
    e,
    e.allowRecurse ? be + 1 : be
  )) && Me.push(e), fn();
}
function Fo(e) {
  if (Me.length) {
    const t = [...new Set(Me)];
    if (Me.length = 0, re) {
      re.push(...t);
      return;
    }
    for (re = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), re.sort((i, n) => qe(i) - qe(n)), be = 0; be < re.length; be++)
      process.env.NODE_ENV !== "production" && gn(e, re[be]) || re[be]();
    re = null, be = 0;
  }
}
const qe = (e) => e.id == null ? 1 / 0 : e.id, Ho = (e, t) => {
  const i = qe(e) - qe(t);
  if (i === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return i;
};
function pn(e) {
  It = !1, ut = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), se.sort(Ho);
  const t = process.env.NODE_ENV !== "production" ? (i) => gn(e, i) : Gi;
  try {
    for (_e = 0; _e < se.length; _e++) {
      const i = se[_e];
      if (i && i.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(i))
          continue;
        Ee(i, null, 14);
      }
    }
  } finally {
    _e = 0, se.length = 0, Fo(e), ut = !1, Wt = null, (se.length || Me.length) && pn(e);
  }
}
function gn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const i = e.get(t);
    if (i > Oo) {
      const n = t.ownerInstance, l = n && kn(n.type);
      return G(
        `Maximum recursive updates exceeded${l ? ` in component <${l}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, i + 1);
  }
}
const Fe = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (kt().__VUE_HMR_RUNTIME__ = {
  createRecord: vt(Po),
  rerender: vt($o),
  reload: vt(jo)
});
const ct = /* @__PURE__ */ new Map();
function Po(e, t) {
  return ct.has(e) ? !1 : (ct.set(e, {
    initialDef: $e(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function $e(e) {
  return xn(e) ? e.__vccOpts : e;
}
function $o(e, t) {
  const i = ct.get(e);
  !i || (i.initialDef.render = t, [...i.instances].forEach((n) => {
    t && (n.render = t, $e(n.type).render = t), n.renderCache = [], n.update();
  }));
}
function jo(e, t) {
  const i = ct.get(e);
  if (!i)
    return;
  t = $e(t), ki(i.initialDef, t);
  const n = [...i.instances];
  for (const l of n) {
    const s = $e(l.type);
    Fe.has(s) || (s !== i.initialDef && ki(s, t), Fe.add(s)), l.appContext.propsCache.delete(l.type), l.appContext.emitsCache.delete(l.type), l.appContext.optionsCache.delete(l.type), l.ceReload ? (Fe.add(s), l.ceReload(t.styles), Fe.delete(s)) : l.parent ? Yt(l.parent.update) : l.appContext.reload ? l.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  hn(() => {
    for (const l of n)
      Fe.delete(
        $e(l.type)
      );
  });
}
function ki(e, t) {
  ue(e, t);
  for (const i in e)
    i !== "__file" && !(i in t) && delete e[i];
}
function vt(e) {
  return (t, i) => {
    try {
      return e(t, i);
    } catch (n) {
      console.error(n), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ve = null, Go = null;
const qo = Symbol.for("v-ndc"), Wo = (e) => e.__isSuspense;
function Yo(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : hn(e);
}
const lt = {};
function Xo(e, t, { immediate: i, deep: n, flush: l, onTrack: s, onTrigger: o } = me) {
  var a;
  process.env.NODE_ENV !== "production" && !t && (i !== void 0 && G(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), n !== void 0 && G(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const r = (y) => {
    G(
      "Invalid watch source: ",
      y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = io() === ((a = ke) == null ? void 0 : a.scope) ? ke : null;
  let c, f = !1, d = !1;
  if (Z(e) ? (c = () => e.value, f = Et(e)) : Ae(e) ? (c = () => e, n = !0) : O(e) ? (d = !0, f = e.some((y) => Ae(y) || Et(y)), c = () => e.map((y) => {
    if (Z(y))
      return y.value;
    if (Ae(y))
      return Re(y);
    if (W(y))
      return Ee(y, u, 2);
    process.env.NODE_ENV !== "production" && r(y);
  })) : W(e) ? t ? c = () => Ee(e, u, 2) : c = () => {
    if (!(u && u.isUnmounted))
      return m && m(), rt(
        e,
        u,
        3,
        [h]
      );
  } : (c = Gi, process.env.NODE_ENV !== "production" && r(e)), t && n) {
    const y = c;
    c = () => Re(y());
  }
  let m, h = (y) => {
    m = _.onStop = () => {
      Ee(y, u, 4), m = _.onStop = void 0;
    };
  }, b = d ? new Array(e.length).fill(lt) : lt;
  const g = () => {
    if (!!_.active)
      if (t) {
        const y = _.run();
        (n || f || (d ? y.some((w, k) => Ve(w, b[k])) : Ve(y, b))) && (m && m(), rt(t, u, 3, [
          y,
          b === lt ? void 0 : d && b[0] === lt ? [] : b,
          h
        ]), b = y);
      } else
        _.run();
  };
  g.allowRecurse = !!t;
  let p;
  l === "sync" ? p = g : l === "post" ? p = () => Ei(g, u && u.suspense) : (g.pre = !0, u && (g.id = u.uid), p = () => Yt(g));
  const _ = new so(c, p);
  return process.env.NODE_ENV !== "production" && (_.onTrack = s, _.onTrigger = o), t ? i ? g() : b = _.run() : l === "post" ? Ei(
    _.run.bind(_),
    u && u.suspense
  ) : _.run(), () => {
    _.stop(), u && u.scope && $s(u.scope.effects, _);
  };
}
function Ko(e, t, i) {
  const n = this.proxy, l = oe(e) ? e.includes(".") ? Jo(n, e) : () => n[e] : e.bind(n, n);
  let s;
  W(t) ? s = t : (s = t.handler, i = t);
  const o = ke;
  Rt(this);
  const a = Xo(l, s.bind(n), i);
  return o ? Rt(o) : wn(), a;
}
function Jo(e, t) {
  const i = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < i.length && n; l++)
      n = n[i[l]];
    return n;
  };
}
function Re(e, t) {
  if (!ae(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Z(e))
    Re(e.value, t);
  else if (O(e))
    for (let i = 0; i < e.length; i++)
      Re(e[i], t);
  else if (Gs(e) || Be(e))
    e.forEach((i) => {
      Re(i, t);
    });
  else if (Ys(e))
    for (const i in e)
      Re(e[i], t);
  return e;
}
function Zo(e, t, i = ke, n = !1) {
  if (i) {
    const l = i[e] || (i[e] = []), s = t.__weh || (t.__weh = (...o) => {
      if (i.isUnmounted)
        return;
      Ut(), Rt(i);
      const a = rt(t, i, e, o);
      return wn(), Ft(), a;
    });
    return n ? l.unshift(s) : l.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const l = Xs(qt[e].replace(/ hook$/, ""));
    G(
      `${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Qo = (e) => (t, i = ke) => Zo(e, (...n) => t(...n), i), ea = Qo("bum"), Nt = (e) => e ? _a(e) ? va(e) || e.proxy : Nt(e.parent) : null, je = /* @__PURE__ */ ue(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? nt(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? nt(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? nt(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? nt(e.refs) : e.refs,
  $parent: (e) => Nt(e.parent),
  $root: (e) => Nt(e.root),
  $emit: (e) => e.emit,
  $options: (e) => na(e),
  $forceUpdate: (e) => e.f || (e.f = () => Yt(e.update)),
  $nextTick: (e) => e.n || (e.n = Vo.bind(e.proxy)),
  $watch: (e) => Ko.bind(e)
}), ta = (e) => e === "_" || e === "$", yt = (e, t) => e !== me && !e.__isScriptSetup && F(e, t), ia = {
  get({ _: e }, t) {
    const { ctx: i, setupState: n, data: l, props: s, accessCache: o, type: a, appContext: r } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const m = o[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return n[t];
          case 2:
            return l[t];
          case 4:
            return i[t];
          case 3:
            return s[t];
        }
      else {
        if (yt(n, t))
          return o[t] = 1, n[t];
        if (l !== me && F(l, t))
          return o[t] = 2, l[t];
        if ((u = e.propsOptions[0]) && F(u, t))
          return o[t] = 3, s[t];
        if (i !== me && F(i, t))
          return o[t] = 4, i[t];
        o[t] = 0;
      }
    }
    const c = je[t];
    let f, d;
    if (c)
      return t === "$attrs" ? (J(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && J(e, "get", t), c(e);
    if ((f = a.__cssModules) && (f = f[t]))
      return f;
    if (i !== me && F(i, t))
      return o[t] = 4, i[t];
    if (d = r.config.globalProperties, F(d, t))
      return d[t];
    process.env.NODE_ENV !== "production" && ve && (!oe(t) || t.indexOf("__v") !== 0) && (l !== me && ta(t[0]) && F(l, t) ? G(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ve && G(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, i) {
    const { data: n, setupState: l, ctx: s } = e;
    return yt(l, t) ? (l[t] = i, !0) : process.env.NODE_ENV !== "production" && l.__isScriptSetup && F(l, t) ? (G(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : n !== me && F(n, t) ? (n[t] = i, !0) : F(e.props, t) ? (process.env.NODE_ENV !== "production" && G(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && G(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: i
    }) : s[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: n, appContext: l, propsOptions: s }
  }, o) {
    let a;
    return !!i[o] || e !== me && F(e, o) || yt(t, o) || (a = s[0]) && F(a, o) || F(n, o) || F(je, o) || F(l.config.globalProperties, o);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : F(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
process.env.NODE_ENV !== "production" && (ia.ownKeys = (e) => (G(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Si(e) {
  return O(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function na(e) {
  const t = e.type, { mixins: i, extends: n } = t, {
    mixins: l,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, a = s.get(t);
  let r;
  return a ? r = a : !l.length && !i && !n ? r = t : (r = {}, l.length && l.forEach(
    (u) => dt(r, u, o, !0)
  ), dt(r, t, o)), ae(t) && s.set(t, r), r;
}
function dt(e, t, i, n = !1) {
  const { mixins: l, extends: s } = t;
  s && dt(e, s, i, !0), l && l.forEach(
    (o) => dt(e, o, i, !0)
  );
  for (const o in t)
    if (n && o === "expose")
      process.env.NODE_ENV !== "production" && G(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = la[o] || i && i[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const la = {
  data: xi,
  props: zi,
  emits: zi,
  methods: Pe,
  computed: Pe,
  beforeCreate: q,
  created: q,
  beforeMount: q,
  mounted: q,
  beforeUpdate: q,
  updated: q,
  beforeDestroy: q,
  beforeUnmount: q,
  destroyed: q,
  unmounted: q,
  activated: q,
  deactivated: q,
  errorCaptured: q,
  serverPrefetch: q,
  components: Pe,
  directives: Pe,
  watch: oa,
  provide: xi,
  inject: sa
};
function xi(e, t) {
  return t ? e ? function() {
    return ue(
      W(e) ? e.call(this, this) : e,
      W(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sa(e, t) {
  return Pe(Ci(e), Ci(t));
}
function Ci(e) {
  if (O(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
    return t;
  }
  return e;
}
function q(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Pe(e, t) {
  return e ? ue(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zi(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ue(
    /* @__PURE__ */ Object.create(null),
    Si(e),
    Si(t != null ? t : {})
  ) : t;
}
function oa(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const i = ue(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    i[n] = q(e[n], t[n]);
  return i;
}
function aa() {
  return {
    app: null,
    config: {
      isNativeTag: Fs,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
const Ei = Yo, ra = (e) => e.__isTeleport, mn = Symbol.for("v-fgt"), ua = Symbol.for("v-txt"), ca = Symbol.for("v-cmt");
let Te = null;
function da(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const fa = (...e) => vn(
  ...e
), bn = "__vInternal", _n = ({ key: e }) => e != null ? e : null, ot = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || Z(e) || W(e) ? { i: ve, r: e, k: t, f: !!i } : e : null);
function ha(e, t = null, i = null, n = 0, l = null, s = e === mn ? 0 : 1, o = !1, a = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _n(t),
    ref: t && ot(t),
    scopeId: Go,
    slotScopeIds: null,
    children: i,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: n,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: ve
  };
  return a ? (Xt(r, i), s & 128 && e.normalize(r)) : i && (r.shapeFlag |= oe(i) ? 8 : 16), process.env.NODE_ENV !== "production" && r.key !== r.key && G("VNode created with invalid key (NaN). VNode type:", r.type), !o && Te && (r.patchFlag > 0 || s & 6) && r.patchFlag !== 32 && Te.push(r), r;
}
const pa = process.env.NODE_ENV !== "production" ? fa : vn;
function vn(e, t = null, i = null, n = 0, l = null, s = !1) {
  if ((!e || e === qo) && (process.env.NODE_ENV !== "production" && !e && G(`Invalid vnode type when creating vnode: ${e}.`), e = ca), da(e)) {
    const a = ft(
      e,
      t,
      !0
    );
    return i && Xt(a, i), !s && Te && (a.shapeFlag & 6 ? Te[Te.indexOf(e)] = a : Te.push(a)), a.patchFlag |= -2, a;
  }
  if (xn(e) && (e = e.__vccOpts), t) {
    t = ga(t);
    let { class: a, style: r } = t;
    a && !oe(a) && (t.class = Vt(a)), ae(r) && (Lt(r) && !O(r) && (r = ue({}, r)), t.style = Ot(r));
  }
  const o = oe(e) ? 1 : Wo(e) ? 128 : ra(e) ? 64 : ae(e) ? 4 : W(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && o & 4 && Lt(e) && (e = A(e), G(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ha(
    e,
    t,
    i,
    n,
    l,
    o,
    s,
    !0
  );
}
function ga(e) {
  return e ? Lt(e) || bn in e ? ue({}, e) : e : null;
}
function ft(e, t, i = !1) {
  const { props: n, ref: l, patchFlag: s, children: o } = e, a = t ? ba(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && _n(a),
    ref: t && t.ref ? i && l ? O(l) ? l.concat(ot(t)) : [l, ot(t)] : ot(t) : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && O(o) ? o.map(yn) : o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== mn ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ft(e.ssContent),
    ssFallback: e.ssFallback && ft(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function yn(e) {
  const t = ft(e);
  return O(e.children) && (t.children = e.children.map(yn)), t;
}
function ma(e = " ", t = 0) {
  return pa(ua, null, e, t);
}
function Xt(e, t) {
  let i = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (O(t))
    i = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Xt(e, l()), l._c && (l._d = !0));
      return;
    } else {
      i = 32;
      const l = t._;
      !l && !(bn in t) ? t._ctx = ve : l === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    W(t) ? (t = { default: t, _ctx: ve }, i = 32) : (t = String(t), n & 64 ? (i = 16, t = [ma(t)]) : i = 8);
  e.children = t, e.shapeFlag |= i;
}
function ba(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = Vt([t.class, n.class]));
      else if (l === "style")
        t.style = Ot([t.style, n.style]);
      else if (Ps(l)) {
        const s = t[l], o = n[l];
        o && s !== o && !(O(s) && s.includes(o)) && (t[l] = s ? [].concat(s, o) : o);
      } else
        l !== "" && (t[l] = n[l]);
  }
  return t;
}
aa();
let ke = null, Kt, Ne, Li = "__VUE_INSTANCE_SETTERS__";
(Ne = kt()[Li]) || (Ne = kt()[Li] = []), Ne.push((e) => ke = e), Kt = (e) => {
  Ne.length > 1 ? Ne.forEach((t) => t(e)) : Ne[0](e);
};
const Rt = (e) => {
  Kt(e), e.scope.on();
}, wn = () => {
  ke && ke.scope.off(), Kt(null);
};
function _a(e) {
  return e.vnode.shapeFlag & 4;
}
function va(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Io(zo(e.exposed)), {
      get(t, i) {
        if (i in t)
          return t[i];
        if (i in je)
          return je[i](e);
      },
      has(t, i) {
        return i in t || i in je;
      }
    }));
}
const ya = /(?:^|[-_])(\w)/g, wa = (e) => e.replace(ya, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function kn(e, t = !0) {
  return W(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Sn(e, t, i = !1) {
  let n = kn(t);
  if (!n && t.__file) {
    const l = t.__file.match(/([^/\\]+)\.\w+$/);
    l && (n = l[1]);
  }
  if (!n && e && e.parent) {
    const l = (s) => {
      for (const o in s)
        if (s[o] === t)
          return o;
    };
    n = l(
      e.components || e.parent.type.components
    ) || l(e.appContext.components);
  }
  return n ? wa(n) : i ? "App" : "Anonymous";
}
function xn(e) {
  return W(e) && "__vccOpts" in e;
}
const ka = ["id", "onFocus", "onBlur"], Sa = { class: "lkt-field__select" }, xa = ["onClick"], Ca = {
  key: 0,
  class: "lkt-field__select-dropdown"
}, za = { class: "lkt-field__select-search-container" }, Ea = {
  key: 0,
  class: "lkt-field__select-options"
}, La = ["onClick"], Ia = ["innerHTML", "onClick"], Na = { name: "LktFieldSelect", inheritAttrs: !1 }, Ii = /* @__PURE__ */ Mi({
  ...Na,
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: X(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    closeOnSelect: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 },
    options: { type: Array, default: () => [] },
    disabledOptions: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    canTag: { type: Boolean, default: !1 },
    noOptionsMessage: { type: String, default: Vs() },
    resource: { type: String, default: () => null },
    searchStringResourceParam: { type: String, default: "query" },
    searchOptions: { type: [Object, Function], default: () => null },
    searchPlaceholder: { type: String, default: "" }
  },
  emits: ["update:modelValue", "click-ui"],
  setup(e, { expose: t, emit: i }) {
    const n = i, l = Di(), s = e, o = H(null), a = H(null), r = X(16), u = H(new fi(s.searchOptions)), c = H(new at(s.options)), f = H(!1), d = H(s.modelValue), m = H(s.modelValue), h = H(!1), b = H(!1), g = H(c.value.all()), p = H(c.value.all()), _ = H("");
    s.closeOnSelect === null ? f.value = s.multiple === !0 : f.value = s.closeOnSelect;
    const v = le(() => !!l.label);
    le(() => v ? !1 : !s.label && s.emptyLabel ? !0 : !!s.label), le(() => zl(s.resource));
    const y = le(() => typeof s.valid == "function" ? s.valid() : s.valid), w = le(() => m.value !== d.value), k = le(() => {
      const B = ["lkt-field"];
      return s.palette && B.push(`lkt-field--${s.palette}`), w.value && B.push("is-changed"), s.multiple && B.push("is-multiple"), s.disabled && B.push("is-disabled"), b.value && B.push("has-focus"), B.push(y.value ? "is-valid" : "is-error"), B.push(s.modelValue ? "is-filled" : "is-empty"), B.join(" ");
    }), x = le(() => {
      let B = "";
      return p.value.forEach((ne) => {
        ne.value == m.value && (B = ne.label);
      }), B;
    }), R = () => {
      p.value = c.value.all(), g.value = c.value.filter(_.value);
    }, I = () => {
      _.value = "", R();
    }, S = () => {
      m.value = d.value;
    }, z = () => s.modelValue, E = () => {
      I(), b.value = !b.value, b.value && st(() => {
        o.value.focus(), st(() => {
          o.value.focus();
        });
      });
    };
    Se(() => s.modelValue, (B) => {
      m.value = B;
    }), Se(m, (B) => {
      n("update:modelValue", B), h.value = !0, st(() => h.value = !1);
    }), Se(_, R), Se(() => s.searchOptions, (B) => {
      u.value = new fi(B);
    }), Se(() => s.options, (B) => {
      c.value = new at(B);
    }), R();
    const N = (B) => {
      m.value = B.value, b.value = !1;
    }, U = (B) => {
      const ne = [
        "is-select",
        "lkt-field__select",
        "lkt-field__select-value",
        "lkt-field__select-dropdown",
        "lkt-field__select-search-container",
        "lkt-field__select-options",
        "lkt-field__select-option",
        "lkt-field__select-search"
      ], P = B.target;
      let ce = !1;
      ne.forEach((Qt) => {
        (P.className.includes(Qt) || P.parentElement && P.parentElement.className.includes(Qt)) && (ce = !0);
      }), ce || (I(), b.value = !1);
    };
    return window.addEventListener("click", U), ea(() => {
      window.removeEventListener("click", U);
    }), t({
      reset: S,
      value: z
    }), (B, ne) => (C(), L("div", {
      class: K(["is-select", k.value]),
      "data-show-ui": !1
    }, [
      V(B.$slots, "prefix"),
      ee("select", {
        ref: (P) => a.value = P,
        id: de(r),
        onFocus: Ue(E, ["stop", "prevent"]),
        onBlur: Ue(E, ["stop", "prevent"]),
        style: { height: "0", opacity: "0", width: "0" }
      }, null, 40, ka),
      ee("div", Sa, [
        ee("div", {
          class: "lkt-field__select-value",
          onClick: Ue(E, ["stop", "prevent"])
        }, ii(x.value), 9, xa),
        b.value ? (C(), L("div", Ca, [
          ee("div", za, [
            Oi(wt, {
              ref: (P) => o.value = P,
              modelValue: _.value,
              "onUpdate:modelValue": ne[0] || (ne[0] = (P) => _.value = P),
              placeholder: e.searchPlaceholder,
              tabindex: -1,
              class: "lkt-field__select-search"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          e.readonly ? T("", !0) : (C(), L("ul", Ea, [
            (C(!0), L(Bt, null, At(g.value, (P) => (C(), L("li", {
              class: K(["lkt-field__select-option", { "is-active": P.value == m.value }]),
              onClick: Ue((ce) => N(P), ["prevent", "stop"])
            }, ii(P.label), 11, La))), 256))
          ]))
        ])) : T("", !0)
      ]),
      ee("label", {
        innerHTML: e.label,
        onClick: Ue(E, ["stop", "prevent"])
      }, null, 8, Ia)
    ], 2));
  }
}), Ra = {
  name: "blockquote",
  display: "command",
  add: function(e, t) {
    const i = e.context;
    i.blockquote = {
      targetButton: t,
      tag: e.util.createElement("BLOCKQUOTE")
    };
  },
  active: function(e) {
    if (!e)
      this.util.removeClass(this.context.blockquote.targetButton, "active");
    else if (/blockquote/i.test(e.nodeName))
      return this.util.addClass(this.context.blockquote.targetButton, "active"), !0;
    return !1;
  },
  action: function() {
    const e = this.util.getParentElement(this.getSelectionNode(), "blockquote");
    e ? this.detachRangeFormatElement(e, null, null, !1, !1) : this.applyRangeFormatElement(this.context.blockquote.tag.cloneNode(!1));
  }
}, Ta = {
  name: "align",
  display: "submenu",
  add: function(e, t) {
    const i = e.icons, n = e.context;
    n.align = {
      targetButton: t,
      _itemMenu: null,
      _alignList: null,
      currentAlign: "",
      defaultDir: e.options.rtl ? "right" : "left",
      icons: {
        justify: i.align_justify,
        left: i.align_left,
        right: i.align_right,
        center: i.align_center
      }
    };
    let l = this.setSubmenu(e), s = n.align._itemMenu = l.querySelector("ul");
    s.addEventListener("click", this.pickup.bind(e)), n.align._alignList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, s = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV"), l = e.options.alignItems;
    let s = "";
    for (let o = 0, a, r; o < l.length; o++)
      a = l[o], r = t.toolbar["align" + a.charAt(0).toUpperCase() + a.slice(1)], s += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + a + '" title="' + r + '" aria-label="' + r + '"><span class="se-list-icon">' + i["align_" + a] + "</span>" + r + "</button></li>";
    return n.className = "se-submenu se-list-layer se-list-align", n.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + s + "</ul></div>", n;
  },
  active: function(e) {
    const t = this.context.align, i = t.targetButton, n = i.firstElementChild;
    if (!e)
      this.util.changeElement(n, t.icons[t.defaultDir]), i.removeAttribute("data-focus");
    else if (this.util.isFormatElement(e)) {
      const l = e.style.textAlign;
      if (l)
        return this.util.changeElement(n, t.icons[l] || t.icons[t.defaultDir]), i.setAttribute("data-focus", l), !0;
    }
    return !1;
  },
  on: function() {
    const e = this.context.align, t = e._alignList, i = e.targetButton.getAttribute("data-focus") || e.defaultDir;
    if (i !== e.currentAlign) {
      for (let n = 0, l = t.length; n < l; n++)
        i === t[n].getAttribute("data-value") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentAlign = i;
    }
  },
  exchangeDir: function() {
    const e = this.options.rtl ? "right" : "left";
    if (!this.context.align || this.context.align.defaultDir === e)
      return;
    this.context.align.defaultDir = e;
    let t = this.context.align._itemMenu, i = t.querySelector('[data-value="left"]'), n = t.querySelector('[data-value="right"]');
    if (i && n) {
      const l = i.parentElement, s = n.parentElement;
      l.appendChild(n), s.appendChild(i);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !i && !/UL/i.test(t.tagName); )
      i = t.getAttribute("data-value"), t = t.parentNode;
    if (!i)
      return;
    const n = this.context.align.defaultDir, l = this.getSelectedElements();
    for (let s = 0, o = l.length; s < o; s++)
      this.util.setStyle(l[s], "textAlign", i === n ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, Ba = {
  name: "font",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.font = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _fontList: null,
      currentFont: ""
    };
    let n = this.setSubmenu(e);
    n.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(e)), i.font._fontList = n.querySelectorAll("ul li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-font-family";
    let n, l, s, o, a = e.options.font, r = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (s = 0, o = a.length; s < o; s++)
      n = a[s], l = n.split(",")[0], r += '<li><button type="button" class="se-btn-list" data-value="' + n + '" data-txt="' + l + '" title="' + l + '" aria-label="' + l + '" style="font-family:' + n + ';">' + l + "</button></li>";
    return r += "</ul></div>", i.innerHTML = r, i;
  },
  active: function(e) {
    const t = this.context.font.targetText, i = this.context.font.targetTooltip;
    if (e) {
      if (e.style && e.style.fontFamily.length > 0) {
        const n = e.style.fontFamily.replace(/["']/g, "");
        return this.util.changeTxt(t, n), this.util.changeTxt(i, this.lang.toolbar.font + " (" + n + ")"), !0;
      }
    } else {
      const n = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
      this.util.changeTxt(t, n), this.util.changeTxt(i, this.hasFocus ? this.lang.toolbar.font + (n ? " (" + n + ")" : "") : n);
    }
    return !1;
  },
  on: function() {
    const e = this.context.font, t = e._fontList, i = e.targetText.textContent;
    if (i !== e.currentFont) {
      for (let n = 0, l = t.length; n < l; n++)
        i === t[n].getAttribute("data-value") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentFont = i;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value");
    if (t) {
      const i = this.util.createElement("SPAN");
      i.style.fontFamily = t, this.nodeChange(i, ["font-family"], null, null);
    } else
      this.nodeChange(null, ["font-family"], ["span"], !0);
    this.submenuOff();
  }
}, Aa = {
  name: "fontSize",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.fontSize = {
      targetText: t.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.fontSize._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-font-size";
    const l = t.fontSize ? t.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let s = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let o = 0, a = t.fontSizeUnit, r = l.length, u; o < r; o++)
      u = l[o], s += '<li><button type="button" class="se-btn-list" data-value="' + u + a + '" title="' + u + a + '" aria-label="' + u + a + '" style="font-size:' + u + a + ';">' + u + "</button></li>";
    return s += "</ul></div>", n.innerHTML = s, n;
  },
  active: function(e) {
    if (!e)
      this.util.changeTxt(this.context.fontSize.targetText, this.hasFocus ? this._convertFontSize.call(this, this.options.fontSizeUnit, this.wwComputedStyle.fontSize) : this.lang.toolbar.fontSize);
    else if (e.style && e.style.fontSize.length > 0)
      return this.util.changeTxt(this.context.fontSize.targetText, this._convertFontSize.call(this, this.options.fontSizeUnit, e.style.fontSize)), !0;
    return !1;
  },
  on: function() {
    const e = this.context.fontSize, t = e._sizeList, i = e.targetText.textContent;
    if (i !== e.currentSize) {
      for (let n = 0, l = t.length; n < l; n++)
        i === t[n].getAttribute("data-value") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentSize = i;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value");
    if (t) {
      const i = this.util.createElement("SPAN");
      i.style.fontSize = t, this.nodeChange(i, ["font-size"], null, null);
    } else
      this.nodeChange(null, ["font-size"], ["span"], !0);
    this.submenuOff();
  }
}, Cn = {
  name: "colorPicker",
  add: function(e) {
    const t = e.context;
    t.colorPicker = {
      colorListHTML: "",
      _colorInput: "",
      _defaultColor: "#000",
      _styleProperty: "color",
      _currentColor: "",
      _colorList: []
    }, t.colorPicker.colorListHTML = this.createColorList(e, this._makeColorList);
  },
  createColorList: function(e, t) {
    const i = e.options, n = e.lang, l = !i.colorList || i.colorList.length === 0 ? [
      "#ff0000",
      "#ff5e00",
      "#ffe400",
      "#abf200",
      "#00d8ff",
      "#0055ff",
      "#6600ff",
      "#ff00dd",
      "#000000",
      "#ffd8d8",
      "#fae0d4",
      "#faf4c0",
      "#e4f7ba",
      "#d4f4fa",
      "#d9e5ff",
      "#e8d9ff",
      "#ffd9fa",
      "#f1f1f1",
      "#ffa7a7",
      "#ffc19e",
      "#faed7d",
      "#cef279",
      "#b2ebf4",
      "#b2ccff",
      "#d1b2ff",
      "#ffb2f5",
      "#bdbdbd",
      "#f15f5f",
      "#f29661",
      "#e5d85c",
      "#bce55c",
      "#5cd1e5",
      "#6699ff",
      "#a366ff",
      "#f261df",
      "#8c8c8c",
      "#980000",
      "#993800",
      "#998a00",
      "#6b9900",
      "#008299",
      "#003399",
      "#3d0099",
      "#990085",
      "#353535",
      "#670000",
      "#662500",
      "#665c00",
      "#476600",
      "#005766",
      "#002266",
      "#290066",
      "#660058",
      "#222222"
    ] : i.colorList;
    let s = [], o = '<div class="se-list-inner">';
    for (let a = 0, r = l.length, u; a < r; a++)
      u = l[a], u && (typeof u == "string" && (s.push(u), a < r - 1) || (s.length > 0 && (o += '<div class="se-selector-color">' + t(s) + "</div>", s = []), typeof u == "object" && (o += '<div class="se-selector-color">' + t(u) + "</div>")));
    return o += '<form class="se-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + n.dialogBox.submitButton + '" aria-label="' + n.dialogBox.submitButton + '">' + e.icons.checked + '</button><button type="button" class="se-btn _se_color_picker_remove" title="' + n.toolbar.removeFormat + '" aria-label="' + n.toolbar.removeFormat + '">' + e.icons.erase + "</button></form></div>", o;
  },
  _makeColorList: function(e) {
    let t = "";
    t += '<ul class="se-color-pallet">';
    for (let i = 0, n = e.length, l; i < n; i++)
      l = e[i], typeof l == "string" && (t += '<li><button type="button" data-value="' + l + '" title="' + l + '" aria-label="' + l + '" style="background-color:' + l + ';"></button></li>');
    return t += "</ul>", t;
  },
  init: function(e, t) {
    const i = this.plugins.colorPicker;
    let n = t || i.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor;
    n = i.isHexColor(n) ? n : i.rgb2hex(n) || n;
    const l = this.context.colorPicker._colorList;
    if (l)
      for (let s = 0, o = l.length; s < o; s++)
        n.toLowerCase() === l[s].getAttribute("data-value").toLowerCase() ? this.util.addClass(l[s], "active") : this.util.removeClass(l[s], "active");
    i.setInputText.call(this, i.colorName2hex.call(this, n));
  },
  setCurrentColor: function(e) {
    this.context.colorPicker._currentColor = e, this.context.colorPicker._colorInput.style.borderColor = e;
  },
  setInputText: function(e) {
    e = /^#/.test(e) ? e : "#" + e, this.context.colorPicker._colorInput.value = e, this.plugins.colorPicker.setCurrentColor.call(this, e);
  },
  getColorInNode: function(e) {
    let t = "";
    const i = this.context.colorPicker._styleProperty;
    for (; e && !this.util.isWysiwygDiv(e) && t.length === 0; )
      e.nodeType === 1 && e.style[i] && (t = e.style[i]), e = e.parentNode;
    return t;
  },
  isHexColor: function(e) {
    return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(e);
  },
  rgb2hex: function(e) {
    const t = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return t && t.length === 4 ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : "";
  },
  colorName2hex: function(e) {
    if (/^#/.test(e))
      return e;
    var t = this.util.createElement("div");
    t.style.display = "none", t.style.color = e;
    var i = this._w.getComputedStyle(this._d.body.appendChild(t)).color.match(/\d+/g).map(function(n) {
      return parseInt(n, 10);
    });
    return this.util.removeItem(t), i.length >= 3 ? "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).substr(1) : !1;
  }
}, Ma = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Cn]);
    const i = e.context;
    i.fontColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let n = this.setSubmenu(e);
    i.fontColor.colorInput = n.querySelector("._se_color_picker_input"), i.fontColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), n.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), n.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), n.addEventListener("click", this.pickup.bind(e)), i.fontColor.colorList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = t, i;
  },
  on: function() {
    const e = this.context.colorPicker, t = this.context.fontColor;
    e._colorInput = t.colorInput;
    const i = this.wwComputedStyle.color;
    e._defaultColor = i ? this.plugins.colorPicker.isHexColor(i) ? i : this.plugins.colorPicker.rgb2hex(i) : "#333333", e._styleProperty = "color", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
  },
  onChangeInput: function(e) {
    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
  },
  submit: function() {
    this.plugins.fontColor.applyColor.call(this, this.context.colorPicker._currentColor);
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.fontColor.applyColor.call(this, e.target.getAttribute("data-value"));
  },
  remove: function() {
    this.nodeChange(null, ["color"], ["span"], !0), this.submenuOff();
  },
  applyColor: function(e) {
    if (!e)
      return;
    const t = this.util.createElement("SPAN");
    t.style.color = e, this.nodeChange(t, ["color"], null, null), this.submenuOff();
  }
}, Da = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Cn]);
    const i = e.context;
    i.hiliteColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let n = this.setSubmenu(e);
    i.hiliteColor.colorInput = n.querySelector("._se_color_picker_input"), i.hiliteColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), n.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), n.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), n.addEventListener("click", this.pickup.bind(e)), i.hiliteColor.colorList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = t, i;
  },
  on: function() {
    const e = this.context.colorPicker, t = this.context.hiliteColor;
    e._colorInput = t.colorInput;
    const i = this.wwComputedStyle.backgroundColor;
    e._defaultColor = i ? this.plugins.colorPicker.isHexColor(i) ? i : this.plugins.colorPicker.rgb2hex(i) : "#ffffff", e._styleProperty = "backgroundColor", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
  },
  onChangeInput: function(e) {
    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
  },
  submit: function() {
    this.plugins.hiliteColor.applyColor.call(this, this.context.colorPicker._currentColor);
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.hiliteColor.applyColor.call(this, e.target.getAttribute("data-value"));
  },
  remove: function() {
    this.nodeChange(null, ["background-color"], ["span"], !0), this.submenuOff();
  },
  applyColor: function(e) {
    if (!e)
      return;
    const t = this.util.createElement("SPAN");
    t.style.backgroundColor = e, this.nodeChange(t, ["background-color"], null, null), this.submenuOff();
  }
}, Oa = {
  name: "horizontalRule",
  display: "submenu",
  add: function(e, t) {
    e.context.horizontalRule = {
      currentHR: null
    };
    let i = this.setSubmenu(e);
    i.querySelector("ul").addEventListener("click", this.horizontalRulePick.bind(e)), e.initMenuTarget(this.name, t, i), i = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), n = e.options.hrItems || [{ name: t.toolbar.hr_solid, class: "__se__solid" }, { name: t.toolbar.hr_dashed, class: "__se__dashed" }, { name: t.toolbar.hr_dotted, class: "__se__dotted" }];
    let l = "";
    for (let s = 0, o = n.length; s < o; s++)
      l += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + n[s].class + '" title="' + n[s].name + '" aria-label="' + n[s].name + '"><hr' + (n[s].class ? ' class="' + n[s].class + '"' : "") + (n[s].style ? ' style="' + n[s].style + '"' : "") + "/></button></li>";
    return i.className = "se-submenu se-list-layer se-list-line", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + l + "</ul></div>", i;
  },
  active: function(e) {
    if (!e)
      this.util.hasClass(this.context.horizontalRule.currentHR, "on") && this.controllersOff();
    else if (/HR/i.test(e.nodeName))
      return this.context.horizontalRule.currentHR = e, this.util.hasClass(e, "on") || (this.util.addClass(e, "on"), this.controllersOn("hr", this.util.removeClass.bind(this.util, e, "on"))), !0;
    return !1;
  },
  appendHr: function(e) {
    return this.focus(), this.insertComponent(e.cloneNode(!1), !1, !0, !1);
  },
  horizontalRulePick: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = t.getAttribute("data-command");
    for (; !i && !/UL/i.test(t.tagName); )
      t = t.parentNode, i = t.getAttribute("data-command");
    if (!i)
      return;
    const n = this.plugins.horizontalRule.appendHr.call(this, t.firstElementChild);
    n && (this.setRange(n, 0, n, 0), this.submenuOff());
  }
}, Va = {
  name: "list",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.list = {
      targetButton: t,
      _list: null,
      currentList: "",
      icons: {
        bullets: e.icons.list_bullets,
        number: e.icons.list_number
      }
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.list._list = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + t.toolbar.orderList + '" aria-label="' + t.toolbar.orderList + '">' + e.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + t.toolbar.unorderList + '" aria-label="' + t.toolbar.unorderList + '">' + e.icons.list_bullets + "</button></li></ul></div>", i;
  },
  active: function(e) {
    const t = this.context.list.targetButton, i = t.firstElementChild, n = this.util;
    if (n.isList(e)) {
      const l = e.nodeName;
      return t.setAttribute("data-focus", l), n.addClass(t, "active"), /UL/i.test(l) ? n.changeElement(i, this.context.list.icons.bullets) : n.changeElement(i, this.context.list.icons.number), !0;
    } else
      t.removeAttribute("data-focus"), n.changeElement(i, this.context.list.icons.number), n.removeClass(t, "active");
    return !1;
  },
  on: function() {
    const e = this.context.list, t = e._list, i = e.targetButton.getAttribute("data-focus") || "";
    if (i !== e.currentList) {
      for (let n = 0, l = t.length; n < l; n++)
        i === t[n].getAttribute("data-command") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentList = i;
    }
  },
  editList: function(e, t, i) {
    let n = this.getRange(), l = t || this.getSelectedElementsAndComponents(!1);
    if (l.length === 0 && (t || (n = this.getRange_addLine(n, null), l = this.getSelectedElementsAndComponents(!1), l.length === 0)))
      return;
    const s = this.util;
    s.sortByDepth(l, !0);
    let o = l[0], a = l[l.length - 1], r = (s.isListCell(o) || s.isComponent(o)) && !o.previousElementSibling ? o.parentNode.previousElementSibling : o.previousElementSibling, u = (s.isListCell(a) || s.isComponent(a)) && !a.nextElementSibling ? a.parentNode.nextElementSibling : a.nextElementSibling;
    const c = n.collapsed, f = {
      sc: n.startContainer,
      so: n.startContainer === n.endContainer && s.onlyZeroWidthSpace(n.startContainer) && n.startOffset === 0 && n.endOffset === 1 ? n.endOffset : n.startOffset,
      ec: n.endContainer,
      eo: n.endOffset
    };
    let d = null, m = !0;
    for (let h = 0, b = l.length; h < b; h++)
      if (!s.isList(s.getRangeFormatElement(l[h], function(g) {
        return this.getRangeFormatElement(g) && g !== l[h];
      }.bind(s)))) {
        m = !1;
        break;
      }
    if (m && (!r || o.tagName !== r.tagName || e !== r.tagName.toUpperCase()) && (!u || a.tagName !== u.tagName || e !== u.tagName.toUpperCase())) {
      if (i) {
        for (let v = 0, y = l.length; v < y; v++)
          for (let w = v - 1; w >= 0; w--)
            if (l[w].contains(l[v])) {
              l.splice(v, 1), v--, y--;
              break;
            }
      }
      const h = s.getRangeFormatElement(o), b = h && h.tagName === e;
      let g, p;
      const _ = function(v) {
        return !this.isComponent(v);
      }.bind(s);
      b || (p = s.createElement(e));
      for (let v = 0, y = l.length, w, k; v < y; v++)
        k = s.getRangeFormatElement(l[v], _), !(!k || !s.isList(k)) && (w ? w !== k ? (i && s.isListCell(k.parentNode) ? this.plugins.list._detachNested.call(this, g.f) : d = this.detachRangeFormatElement(g.f[0].parentNode, g.f, p, !1, !0), k = l[v].parentNode, b || (p = s.createElement(e)), w = k, g = { r: w, f: [s.getParentElement(l[v], "LI")] }) : g.f.push(s.getParentElement(l[v], "LI")) : (w = k, g = { r: w, f: [s.getParentElement(l[v], "LI")] }), v === y - 1 && (i && s.isListCell(k.parentNode) ? this.plugins.list._detachNested.call(this, g.f) : d = this.detachRangeFormatElement(g.f[0].parentNode, g.f, p, !1, !0)));
    } else {
      const h = r && r.parentNode, b = u && u.parentNode;
      r = h && !s.isWysiwygDiv(h) && h.nodeName === e ? h : r, u = b && !s.isWysiwygDiv(b) && b.nodeName === e ? b : u;
      const g = r && r.tagName === e, p = u && u.tagName === e;
      let _ = g ? r : s.createElement(e), v = null, y = null, w = null;
      const k = function(x) {
        return !this.isComponent(x) && !this.isList(x);
      }.bind(s);
      for (let x = 0, R = l.length, I, S, z, E, N, U, B, ne, P; x < R; x++) {
        if (S = l[x], S.childNodes.length === 0 && !s._isIgnoreNodeChange(S)) {
          s.removeItem(S);
          continue;
        }
        if (E = l[x + 1], N = S.parentNode, U = E ? E.parentNode : null, z = s.isListCell(S), P = s.isRangeFormatElement(N) ? N : null, B = z && !s.isWysiwygDiv(N) ? N.parentNode : N, ne = z && !s.isWysiwygDiv(N) ? !E || s.isListCell(B) ? N : N.nextSibling : S.nextSibling, I = s.createElement("LI"), s.copyFormatAttributes(I, S), x === 0 && f.sc === S && (f.sc = I), x === R - 1 && f.ec === S && (f.ec = I), s.isComponent(S)) {
          const ce = /^HR$/i.test(S.nodeName);
          ce || (I.innerHTML = "<br>"), I.innerHTML += S.outerHTML, ce && (I.innerHTML += "<br>");
        } else {
          const ce = S.childNodes;
          for (; ce[0]; )
            I.appendChild(ce[0]);
        }
        _.appendChild(I), (!E || B !== U || s.isRangeFormatElement(ne)) && (v || (v = _), (!g || !E || B !== U) && !(E && s.isList(U) && U === N) && _.parentNode !== B && B.insertBefore(_, ne)), s.removeItem(S), g && y === null && (y = _.children.length - 1), E && (s.getRangeFormatElement(U, k) !== s.getRangeFormatElement(N, k) || s.isList(U) && s.isList(N) && s.getElementDepth(U) !== s.getElementDepth(N)) && (_ = s.createElement(e)), P && P.children.length === 0 && s.removeItem(P);
      }
      y && (v = v.children[y]), p && (w = _.children.length - 1, _.innerHTML += u.innerHTML, _.children[w], s.removeItem(u));
    }
    return this.effectNode = null, c ? d : f;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], n = i.nextElementSibling, l = t.parentNode, s = l.parentNode.nextElementSibling, o = l.parentNode.parentNode;
    for (let r = 0, u = e.length; r < u; r++)
      o.insertBefore(e[r], s);
    if (n && l.children.length > 0) {
      const r = l.cloneNode(!1), u = l.childNodes, c = this.util.getPositionIndex(n);
      for (; u[c]; )
        r.appendChild(u[c]);
      i.appendChild(r);
    }
    l.children.length === 0 && this.util.removeItem(l), this.util.mergeSameTags(o);
    const a = this.util.getEdgeChildNodes(t, i);
    return {
      cc: t.parentNode,
      sc: a.sc,
      ec: a.ec
    };
  },
  editInsideList: function(e, t) {
    t = t || this.getSelectedElements().filter(function(o) {
      return this.isListCell(o);
    }.bind(this.util));
    const i = t.length;
    if (i === 0 || !e && !this.util.isListCell(t[0].previousElementSibling) && !this.util.isListCell(t[i - 1].nextElementSibling))
      return {
        sc: t[0],
        so: 0,
        ec: t[i - 1],
        eo: 1
      };
    let n = t[0].parentNode, l = t[i - 1], s = null;
    if (e) {
      if (n !== l.parentNode && this.util.isList(l.parentNode.parentNode) && l.nextElementSibling)
        for (l = l.nextElementSibling; l; )
          t.push(l), l = l.nextElementSibling;
      s = this.plugins.list.editList.call(this, n.nodeName.toUpperCase(), t, !0);
    } else {
      let o = this.util.createElement(n.nodeName), a = t[0].previousElementSibling, r = l.nextElementSibling;
      const u = { s: null, e: null, sl: n, el: n };
      for (let d = 0, m = i, h; d < m; d++)
        h = t[d], h.parentNode !== n && (this.plugins.list._insiedList.call(this, n, o, a, r, u), n = h.parentNode, o = this.util.createElement(n.nodeName)), a = h.previousElementSibling, r = h.nextElementSibling, o.appendChild(h);
      this.plugins.list._insiedList.call(this, n, o, a, r, u);
      const c = this.util.getNodeFromPath(u.s, u.sl), f = this.util.getNodeFromPath(u.e, u.el);
      s = {
        sc: c,
        so: 0,
        ec: f,
        eo: f.textContent.length
      };
    }
    return s;
  },
  _insiedList: function(e, t, i, n, l) {
    let s = !1;
    if (i && t.tagName === i.tagName) {
      const o = t.children;
      for (; o[0]; )
        i.appendChild(o[0]);
      t = i, s = !0;
    }
    if (n && t.tagName === n.tagName) {
      const o = n.children;
      for (; o[0]; )
        t.appendChild(o[0]);
      const a = n.nextElementSibling;
      n.parentNode.removeChild(n), n = a;
    }
    if (!s) {
      this.util.isListCell(i) && (e = i, n = null), e.insertBefore(t, n), l.s || (l.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), l.sl = e);
      const o = e.contains(l.sl) ? this.util.getNodePath(l.sl, e) : null;
      l.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), l.el = e, this.util.mergeSameTags(e, [l.s, l.e, o], !1), this.util.mergeNestedTags(e), o && (l.sl = this.util.getNodeFromPath(o, e));
    }
    return t;
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = "";
    for (; !i && !/^UL$/i.test(t.tagName); )
      i = t.getAttribute("data-command"), t = t.parentNode;
    if (!i)
      return;
    const n = this.plugins.list.editList.call(this, i, null, !1);
    n && this.setRange(n.sc, n.so, n.ec, n.eo), this.submenuOff(), this.history.push(!1);
  }
}, Ua = {
  name: "table",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    let n = i.table = {
      _element: null,
      _tdElement: null,
      _trElement: null,
      _trElements: null,
      _tableXY: [],
      _maxWidth: !0,
      _fixedColumn: !1,
      _rtl: e.options.rtl,
      cellControllerTop: e.options.tableCellControllerPosition === "top",
      resizeText: null,
      headerButton: null,
      mergeButton: null,
      splitButton: null,
      splitMenu: null,
      maxText: e.lang.controller.maxSize,
      minText: e.lang.controller.minSize,
      _physical_cellCnt: 0,
      _logical_cellCnt: 0,
      _rowCnt: 0,
      _rowIndex: 0,
      _physical_cellIndex: 0,
      _logical_cellIndex: 0,
      _current_colSpan: 0,
      _current_rowSpan: 0,
      icons: {
        expansion: e.icons.expansion,
        reduction: e.icons.reduction
      }
    }, l = this.setSubmenu(e), s = l.querySelector(".se-controller-table-picker");
    n.tableHighlight = l.querySelector(".se-table-size-highlighted"), n.tableUnHighlight = l.querySelector(".se-table-size-unhighlighted"), n.tableDisplay = l.querySelector(".se-table-size-display"), e.options.rtl && (n.tableHighlight.style.left = 10 * 18 - 13 + "px");
    let o = this.setController_table(e);
    n.tableController = o, n.resizeButton = o.querySelector("._se_table_resize"), n.resizeText = o.querySelector("._se_table_resize > span > span"), n.columnFixedButton = o.querySelector("._se_table_fixed_column"), n.headerButton = o.querySelector("._se_table_header");
    let a = this.setController_tableEditor(e, n.cellControllerTop);
    n.resizeDiv = a, n.splitMenu = a.querySelector(".se-btn-group-sub"), n.mergeButton = a.querySelector("._se_table_merge_button"), n.splitButton = a.querySelector("._se_table_split_button"), n.insertRowAboveButton = a.querySelector("._se_table_insert_row_a"), n.insertRowBelowButton = a.querySelector("._se_table_insert_row_b"), s.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, n)), s.addEventListener("click", this.appendTable.bind(e)), a.addEventListener("click", this.onClick_tableController.bind(e)), o.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, l), i.element.relative.appendChild(a), i.element.relative.appendChild(o), l = null, s = null, a = null, o = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.util.createElement("DIV");
    return t.className = "se-submenu se-selector-table", t.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>', t;
  },
  setController_table: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-table", n.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + i.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.maxSize + '</span></span></button><button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + i.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.fixedColumnWidth + '</span></span></button><button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + i.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.tableHeader + '</span></span></button><button type="button" data-command="remove" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", n;
  },
  setController_tableEditor: function(e, t) {
    const i = e.lang, n = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-table-cell", l.innerHTML = (t ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + n.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + n.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + n.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + n.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + n.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + n.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + n.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + n.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + i.controller.VerticalSplit + '" aria-label="' + i.controller.VerticalSplit + '">' + i.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + i.controller.HorizontalSplit + '" aria-label="' + i.controller.HorizontalSplit + '">' + i.controller.HorizontalSplit + "</li></ul></div></div></div>", l;
  },
  appendTable: function() {
    const e = this.util.createElement("TABLE"), t = this.plugins.table.createCells, i = this.context.table._tableXY[0];
    let n = this.context.table._tableXY[1], l = "<tbody>";
    for (; n > 0; )
      l += "<tr>" + t.call(this, "td", i) + "</tr>", --n;
    if (l += "</tbody>", e.innerHTML = l, this.insertComponent(e, !1, !0, !1)) {
      const o = e.querySelector("td div");
      this.setRange(o, 0, o, 0), this.plugins.table.reset_table_picker.call(this);
    }
  },
  createCells: function(e, t, i) {
    if (e = e.toLowerCase(), i) {
      const n = this.util.createElement(e);
      return n.innerHTML = "<div><br></div>", n;
    } else {
      let n = "";
      for (; t > 0; )
        n += "<" + e + "><div><br></div></" + e + ">", t--;
      return n;
    }
  },
  onMouseMove_tablePicker: function(e, t) {
    t.stopPropagation();
    let i = this._w.Math.ceil(t.offsetX / 18), n = this._w.Math.ceil(t.offsetY / 18);
    i = i < 1 ? 1 : i, n = n < 1 ? 1 : n, e._rtl && (e.tableHighlight.style.left = i * 18 - 13 + "px", i = 11 - i), e.tableHighlight.style.width = i + "em", e.tableHighlight.style.height = n + "em", this.util.changeTxt(e.tableDisplay, i + " x " + n), e._tableXY = [i, n];
  },
  reset_table_picker: function() {
    if (!this.context.table.tableHighlight)
      return;
    const e = this.context.table.tableHighlight.style, t = this.context.table.tableUnHighlight.style;
    e.width = "1em", e.height = "1em", t.width = "10em", t.height = "10em", this.util.changeTxt(this.context.table.tableDisplay, "1 x 1"), this.submenuOff();
  },
  init: function() {
    const e = this.context.table, t = this.plugins.table;
    if (t._removeEvents.call(this), t._selectedTable) {
      const i = t._selectedTable.querySelectorAll(".se-table-selected-cell");
      for (let n = 0, l = i.length; n < l; n++)
        this.util.removeClass(i[n], "se-table-selected-cell");
    }
    t._toggleEditor.call(this, !0), e._element = null, e._tdElement = null, e._trElement = null, e._trElements = null, e._tableXY = [], e._maxWidth = !0, e._fixedColumn = !1, e._physical_cellCnt = 0, e._logical_cellCnt = 0, e._rowCnt = 0, e._rowIndex = 0, e._physical_cellIndex = 0, e._logical_cellIndex = 0, e._current_colSpan = 0, e._current_rowSpan = 0, t._shift = !1, t._selectedCells = null, t._selectedTable = null, t._ref = null, t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null;
  },
  call_controller_tableEdit: function(e) {
    const t = this.plugins.table, i = this.context.table;
    if (!this.getSelection().isCollapsed && !t._selectedCell) {
      this.controllersOff(), this.util.removeClass(e, "se-table-selected-cell");
      return;
    }
    const n = i._element || this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    i._maxWidth = this.util.hasClass(n, "se-table-size-100") || n.style.width === "100%" || !n.style.width && !this.util.hasClass(n, "se-table-size-auto"), i._fixedColumn = this.util.hasClass(n, "se-table-layout-fixed") || n.style.tableLayout === "fixed", t.setTableStyle.call(this, i._maxWidth ? "width|column" : "width"), t.setPositionControllerTop.call(this, n), t.setPositionControllerDiv.call(this, e, t._shift), t._shift || this.controllersOn(i.resizeDiv, i.tableController, t.init.bind(this), e, "table");
  },
  setPositionControllerTop: function(e) {
    this.setControllerPosition(this.context.table.tableController, e, "top", { left: 0, top: 0 });
  },
  setPositionControllerDiv: function(e, t) {
    const i = this.context.table, n = i.resizeDiv;
    this.plugins.table.setCellInfo.call(this, e, t), i.cellControllerTop ? this.setControllerPosition(n, i._element, "top", { left: i.tableController.offsetWidth, top: 0 }) : this.setControllerPosition(n, e, "bottom", { left: 0, top: 0 });
  },
  setCellInfo: function(e, t) {
    const i = this.context.table, n = i._element = this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    if (/THEAD/i.test(n.firstElementChild.nodeName) ? this.util.addClass(i.headerButton, "active") : this.util.removeClass(i.headerButton, "active"), t || i._physical_cellCnt === 0) {
      i._tdElement !== e && (i._tdElement = e, i._trElement = e.parentNode);
      const l = i._trElements = n.rows, s = e.cellIndex;
      let o = 0;
      for (let c = 0, f = l[0].cells, d = l[0].cells.length; c < d; c++)
        o += f[c].colSpan;
      const a = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = l.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = o, i._physical_cellIndex = s, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[s].rowSpan - 1;
      let r = [], u = [];
      for (let c = 0, f, d; c <= a; c++) {
        f = l[c].cells, d = 0;
        for (let m = 0, h = f.length, b, g, p, _; m < h; m++) {
          if (b = f[m], g = b.colSpan - 1, p = b.rowSpan - 1, _ = m + d, u.length > 0)
            for (let v = 0, y; v < u.length; v++)
              y = u[v], !(y.row > c) && (_ >= y.index ? (d += y.cs, _ += y.cs, y.rs -= 1, y.row = c + 1, y.rs < 1 && (u.splice(v, 1), v--)) : m === h - 1 && (y.rs -= 1, y.row = c + 1, y.rs < 1 && (u.splice(v, 1), v--)));
          if (c === a && m === s) {
            i._logical_cellIndex = _;
            break;
          }
          p > 0 && r.push({
            index: _,
            cs: g + 1,
            rs: p,
            row: -1
          }), d += g;
        }
        u = u.concat(r).sort(function(m, h) {
          return m.index - h.index;
        }), r = [];
      }
      r = null, u = null;
    }
  },
  editTable: function(e, t) {
    const i = this.plugins.table, n = this.context.table, l = n._element, s = e === "row";
    if (s) {
      const o = n._trElement.parentNode;
      if (/^THEAD$/i.test(o.nodeName)) {
        if (t === "up")
          return;
        if (!o.nextElementSibling || !/^TBODY$/i.test(o.nextElementSibling.nodeName)) {
          l.innerHTML += "<tbody><tr>" + i.createCells.call(this, "td", n._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (i._ref) {
      const o = n._tdElement, a = i._selectedCells;
      if (s)
        if (t)
          i.setCellInfo.call(this, t === "up" ? a[0] : a[a.length - 1], !0), i.editRow.call(this, t, o);
        else {
          let r = a[0].parentNode;
          const u = [a[0]];
          for (let c = 1, f = a.length, d; c < f; c++)
            d = a[c], r !== d.parentNode && (u.push(d), r = d.parentNode);
          for (let c = 0, f = u.length; c < f; c++)
            i.setCellInfo.call(this, u[c], !0), i.editRow.call(this, t);
        }
      else {
        const r = a[0].parentNode;
        if (t) {
          let u = null;
          for (let c = 0, f = a.length - 1; c < f; c++)
            if (r !== a[c + 1].parentNode) {
              u = a[c];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? a[0] : u || a[0], !0), i.editCell.call(this, t, o);
        } else {
          const u = [a[0]];
          for (let c = 1, f = a.length, d; c < f && (d = a[c], r === d.parentNode); c++)
            u.push(d);
          for (let c = 0, f = u.length; c < f; c++)
            i.setCellInfo.call(this, u[c], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[s ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const o = l.children;
      for (let a = 0; a < o.length; a++)
        o[a].children.length === 0 && (this.util.removeItem(o[a]), a--);
      l.children.length === 0 && this.util.removeItem(l);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, n = !e, l = e === "up", s = i._rowIndex, o = n || l ? s : s + i._current_rowSpan + 1, a = n ? -1 : 1, r = i._trElements;
    let u = i._logical_cellCnt;
    for (let c = 0, f = s + (n ? -1 : 0), d; c <= f; c++) {
      if (d = r[c].cells, d.length === 0)
        return;
      for (let m = 0, h = d.length, b, g; m < h; m++)
        b = d[m].rowSpan, g = d[m].colSpan, !(b < 2 && g < 2) && b + c > o && o > c && (d[m].rowSpan = b + a, u -= g);
    }
    if (n) {
      const c = r[s + 1];
      if (c) {
        const f = [];
        let d = r[s].cells, m = 0;
        for (let h = 0, b = d.length, g, p; h < b; h++)
          g = d[h], p = h + m, m += g.colSpan - 1, g.rowSpan > 1 && (g.rowSpan -= 1, f.push({ cell: g.cloneNode(!1), index: p }));
        if (f.length > 0) {
          let h = f.shift();
          d = c.cells, m = 0;
          for (let b = 0, g = d.length, p, _; b < g && (p = d[b], _ = b + m, m += p.colSpan - 1, !(_ >= h.index && (b--, m--, m += h.cell.colSpan - 1, c.insertBefore(h.cell, p), h = f.shift(), !h))); b++)
            ;
          if (h) {
            c.appendChild(h.cell);
            for (let b = 0, g = f.length; b < g; b++)
              c.appendChild(f[b].cell);
          }
        }
      }
      i._element.deleteRow(o);
    } else {
      const c = i._element.insertRow(o);
      c.innerHTML = this.plugins.table.createCells.call(this, "td", u, !1);
    }
    n ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, n = this.util, l = !e, s = e === "left", o = i._current_colSpan, a = l || s ? i._logical_cellIndex : i._logical_cellIndex + o + 1, r = i._trElements;
    let u = [], c = [], f = 0;
    const d = [], m = [];
    for (let h = 0, b = i._rowCnt, g, p, _, v, y, w; h < b; h++) {
      g = r[h], p = a, y = !1, _ = g.cells, w = 0;
      for (let k = 0, x, R = _.length, I, S, z; k < R && (x = _[k], !!x); k++)
        if (I = x.rowSpan - 1, S = x.colSpan - 1, l) {
          if (z = k + w, c.length > 0) {
            const E = !_[k + 1];
            for (let N = 0, U; N < c.length; N++)
              U = c[N], !(U.row > h) && (z >= U.index ? (w += U.cs, z = k + w, U.rs -= 1, U.row = h + 1, U.rs < 1 && (c.splice(N, 1), N--)) : E && (U.rs -= 1, U.row = h + 1, U.rs < 1 && (c.splice(N, 1), N--)));
          }
          I > 0 && u.push({
            rs: I,
            cs: S + 1,
            index: z,
            row: -1
          }), z >= p && z + S <= p + o ? d.push(x) : z <= p + o && z + S >= p ? x.colSpan -= n.getOverlapRangeAtIndex(a, a + o, z, z + S) : I > 0 && (z < p || z + S > p + o) && m.push({
            cell: x,
            i: h,
            rs: h + I
          }), w += S;
        } else {
          if (k >= p)
            break;
          if (S > 0) {
            if (f < 1 && S + k >= p) {
              x.colSpan += 1, p = null, f = I + 1;
              break;
            }
            p -= S;
          }
          if (!y) {
            for (let E = 0, N; E < c.length; E++)
              N = c[E], p -= N.cs, N.rs -= 1, N.rs < 1 && (c.splice(E, 1), E--);
            y = !0;
          }
        }
      if (c = c.concat(u).sort(function(k, x) {
        return k.index - x.index;
      }), u = [], !l) {
        if (f > 0) {
          f -= 1;
          continue;
        }
        p !== null && _.length > 0 && (v = this.plugins.table.createCells.call(this, _[0].nodeName, 0, !0), v = g.insertBefore(v, _[p]));
      }
    }
    if (l) {
      let h, b;
      for (let g = 0, p = d.length, _; g < p; g++)
        _ = d[g].parentNode, n.removeItem(d[g]), _.cells.length === 0 && (h || (h = n.getArrayIndex(r, _)), b = n.getArrayIndex(r, _), n.removeItem(_));
      for (let g = 0, p = m.length, _; g < p; g++)
        _ = m[g], _.cell.rowSpan = n.getOverlapRangeAtIndex(h, b, _.i, _.rs);
      this.controllersOff();
    } else
      this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  _closeSplitMenu: null,
  openSplitMenu: function() {
    this.util.addClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "inline-table", this.plugins.table._closeSplitMenu = function() {
      this.util.removeClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "none", this.removeDocEvent("click", this.plugins.table._closeSplitMenu), this.plugins.table._closeSplitMenu = null;
    }.bind(this), this.addDocEvent("click", this.plugins.table._closeSplitMenu);
  },
  splitCells: function(e) {
    const t = this.util, i = e === "vertical", n = this.context.table, l = n._tdElement, s = n._trElements, o = n._trElement, a = n._logical_cellIndex, r = n._rowIndex, u = this.plugins.table.createCells.call(this, l.nodeName, 0, !0);
    if (i) {
      const c = l.colSpan;
      if (u.rowSpan = l.rowSpan, c > 1)
        u.colSpan = this._w.Math.floor(c / 2), l.colSpan = c - u.colSpan, o.insertBefore(u, l.nextElementSibling);
      else {
        let f = [], d = [];
        for (let m = 0, h = n._rowCnt, b, g; m < h; m++) {
          b = s[m].cells, g = 0;
          for (let p = 0, _ = b.length, v, y, w, k; p < _; p++) {
            if (v = b[p], y = v.colSpan - 1, w = v.rowSpan - 1, k = p + g, d.length > 0)
              for (let x = 0, R; x < d.length; x++)
                R = d[x], !(R.row > m) && (k >= R.index ? (g += R.cs, k += R.cs, R.rs -= 1, R.row = m + 1, R.rs < 1 && (d.splice(x, 1), x--)) : p === _ - 1 && (R.rs -= 1, R.row = m + 1, R.rs < 1 && (d.splice(x, 1), x--)));
            if (k <= a && w > 0 && f.push({
              index: k,
              cs: y + 1,
              rs: w,
              row: -1
            }), v !== l && k <= a && k + y >= a + c - 1) {
              v.colSpan += 1;
              break;
            }
            if (k > a)
              break;
            g += y;
          }
          d = d.concat(f).sort(function(p, _) {
            return p.index - _.index;
          }), f = [];
        }
        o.insertBefore(u, l.nextElementSibling);
      }
    } else {
      const c = l.rowSpan;
      if (u.colSpan = l.colSpan, c > 1) {
        u.rowSpan = this._w.Math.floor(c / 2);
        const f = c - u.rowSpan, d = [], m = t.getArrayIndex(s, o) + f;
        for (let p = 0, _, v; p < m; p++) {
          _ = s[p].cells, v = 0;
          for (let y = 0, w = _.length, k, x, R; y < w && (R = y + v, !(R >= a)); y++)
            k = _[y], x = k.rowSpan - 1, x > 0 && x + p >= m && R < a && d.push({
              index: R,
              cs: k.colSpan
            }), v += k.colSpan - 1;
        }
        const h = s[m], b = h.cells;
        let g = d.shift();
        for (let p = 0, _ = b.length, v = 0, y, w, k, x; p < _; p++) {
          if (k = p + v, y = b[p], w = y.colSpan - 1, x = k + w + 1, g && x >= g.index && (v += g.cs, x += g.cs, g = d.shift()), x >= a || p === _ - 1) {
            h.insertBefore(u, y.nextElementSibling);
            break;
          }
          v += w;
        }
        l.rowSpan = f;
      } else {
        u.rowSpan = l.rowSpan;
        const f = t.createElement("TR");
        f.appendChild(u);
        for (let h = 0, b; h < r; h++) {
          if (b = s[h].cells, b.length === 0)
            return;
          for (let g = 0, p = b.length; g < p; g++)
            h + b[g].rowSpan - 1 >= r && (b[g].rowSpan += 1);
        }
        const d = n._physical_cellIndex, m = o.cells;
        for (let h = 0, b = m.length; h < b; h++)
          h !== d && (m[h].rowSpan += 1);
        o.parentNode.insertBefore(f, o.nextElementSibling);
      }
    }
    this.focusEdge(l), this.plugins.table.setPositionControllerDiv.call(this, l, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, n = e._ref, l = e._selectedCells, s = l[0];
    let o = null, a = null, r = n.ce - n.cs + 1, u = n.re - n.rs + 1, c = "", f = null;
    for (let d = 1, m = l.length, h, b; d < m; d++) {
      h = l[d], f !== h.parentNode && (f = h.parentNode), b = h.children;
      for (let g = 0, p = b.length; g < p; g++)
        i.isFormatElement(b[g]) && i.onlyZeroWidthSpace(b[g].textContent) && i.removeItem(b[g]);
      c += h.innerHTML, i.removeItem(h), f.cells.length === 0 && (o ? a = f : o = f, u -= 1);
    }
    if (o) {
      const d = t._trElements, m = i.getArrayIndex(d, o), h = i.getArrayIndex(d, a || o), b = [];
      for (let g = 0, p; g <= h; g++) {
        if (p = d[g].cells, p.length === 0) {
          b.push(d[g]);
          continue;
        }
        for (let _ = 0, v = p.length, y, w; _ < v; _++)
          y = p[_], w = y.rowSpan - 1, w > 0 && g + w >= m && (y.rowSpan -= i.getOverlapRangeAtIndex(m, h, g, g + w));
      }
      for (let g = 0, p = b.length; g < p; g++)
        i.removeItem(b[g]);
    }
    s.innerHTML += c, s.colSpan = r, s.rowSpan = u, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, s), i.addClass(s, "se-table-selected-cell"), this.focusEdge(s);
  },
  toggleHeader: function() {
    const e = this.util, t = this.context.table.headerButton, i = e.hasClass(t, "active"), n = this.context.table._element;
    if (i)
      e.removeItem(n.querySelector("thead"));
    else {
      const l = e.createElement("THEAD");
      l.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", n.insertBefore(l, n.firstElementChild);
    }
    e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1);
  },
  setTableStyle: function(e) {
    const t = this.context.table, i = t._element;
    let n, l, s, o;
    e.indexOf("width") > -1 && (n = t.resizeButton.firstElementChild, l = t.resizeText, t._maxWidth ? (s = t.icons.reduction, o = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (s = t.icons.expansion, o = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(n, s), this.util.changeTxt(l, o)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
  },
  setActiveButton: function(e, t) {
    const i = this.context.table;
    /^TH$/i.test(e.nodeName) ? (i.insertRowAboveButton.setAttribute("disabled", !0), i.insertRowBelowButton.setAttribute("disabled", !0)) : (i.insertRowAboveButton.removeAttribute("disabled"), i.insertRowBelowButton.removeAttribute("disabled")), !t || e === t ? (i.splitButton.removeAttribute("disabled"), i.mergeButton.setAttribute("disabled", !0)) : (i.splitButton.setAttribute("disabled", !0), i.mergeButton.removeAttribute("disabled"));
  },
  _bindOnSelect: null,
  _bindOffSelect: null,
  _bindOffShift: null,
  _selectedCells: null,
  _shift: !1,
  _fixedCell: null,
  _fixedCellName: null,
  _selectedCell: null,
  _selectedTable: null,
  _ref: null,
  _toggleEditor: function(e) {
    this.context.element.wysiwyg.setAttribute("contenteditable", e), e ? this.util.removeClass(this.context.element.wysiwyg, "se-disabled") : this.util.addClass(this.context.element.wysiwyg, "se-disabled");
  },
  _offCellMultiSelect: function(e) {
    e.stopPropagation();
    const t = this.plugins.table;
    t._shift ? t._initBind && (this._wd.removeEventListener("touchmove", t._initBind), t._initBind = null) : (t._removeEvents.call(this), t._toggleEditor.call(this, !0)), !(!t._fixedCell || !t._selectedTable) && (t.setActiveButton.call(this, t._fixedCell, t._selectedCell), t.call_controller_tableEdit.call(this, t._selectedCell || t._fixedCell), t._selectedCells = t._selectedTable.querySelectorAll(".se-table-selected-cell"), t._selectedCell && t._fixedCell && this.focusEdge(t._selectedCell), t._shift || (t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null));
  },
  _onCellMultiSelect: function(e) {
    this._antiBlur = !0;
    const t = this.plugins.table, i = this.util.getParentElement(e.target, this.util.isCell);
    if (t._shift)
      i === t._fixedCell ? t._toggleEditor.call(this, !0) : t._toggleEditor.call(this, !1);
    else if (!t._ref) {
      if (i === t._fixedCell)
        return;
      t._toggleEditor.call(this, !1);
    }
    !i || i === t._selectedCell || t._fixedCellName !== i.nodeName || t._selectedTable !== this.util.getParentElement(i, "TABLE") || (t._selectedCell = i, t._setMultiCells.call(this, t._fixedCell, i));
  },
  _setMultiCells: function(e, t) {
    const i = this.plugins.table, n = i._selectedTable.rows, l = this.util, s = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let c = 0, f = s.length; c < f; c++)
      l.removeClass(s[c], "se-table-selected-cell");
    if (e === t && (l.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let o = !0, a = [], r = [];
    const u = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let c = 0, f = n.length, d, m; c < f; c++) {
      d = n[c].cells, m = 0;
      for (let h = 0, b = d.length, g, p, _, v; h < b; h++) {
        if (g = d[h], _ = g.colSpan - 1, v = g.rowSpan - 1, p = h + m, a.length > 0)
          for (let y = 0, w; y < a.length; y++)
            w = a[y], !(w.row > c) && (p >= w.index ? (m += w.cs, p += w.cs, w.rs -= 1, w.row = c + 1, w.rs < 1 && (a.splice(y, 1), y--)) : h === b - 1 && (w.rs -= 1, w.row = c + 1, w.rs < 1 && (a.splice(y, 1), y--)));
        if (o) {
          if ((g === e || g === t) && (u.cs = u.cs !== null && u.cs < p ? u.cs : p, u.ce = u.ce !== null && u.ce > p + _ ? u.ce : p + _, u.rs = u.rs !== null && u.rs < c ? u.rs : c, u.re = u.re !== null && u.re > c + v ? u.re : c + v, u._i += 1), u._i === 2) {
            o = !1, a = [], r = [], c = -1;
            break;
          }
        } else if (l.getOverlapRangeAtIndex(u.cs, u.ce, p, p + _) && l.getOverlapRangeAtIndex(u.rs, u.re, c, c + v)) {
          const y = u.cs < p ? u.cs : p, w = u.ce > p + _ ? u.ce : p + _, k = u.rs < c ? u.rs : c, x = u.re > c + v ? u.re : c + v;
          if (u.cs !== y || u.ce !== w || u.rs !== k || u.re !== x) {
            u.cs = y, u.ce = w, u.rs = k, u.re = x, c = -1, a = [], r = [];
            break;
          }
          l.addClass(g, "se-table-selected-cell");
        }
        v > 0 && r.push({
          index: p,
          cs: _ + 1,
          rs: v,
          row: -1
        }), m += g.colSpan - 1;
      }
      a = a.concat(r).sort(function(h, b) {
        return h.index - b.index;
      }), r = [];
    }
  },
  _removeEvents: function() {
    const e = this.plugins.table;
    e._initBind && (this._wd.removeEventListener("touchmove", e._initBind), e._initBind = null), e._bindOnSelect && (this._wd.removeEventListener("mousedown", e._bindOnSelect), this._wd.removeEventListener("mousemove", e._bindOnSelect), e._bindOnSelect = null), e._bindOffSelect && (this._wd.removeEventListener("mouseup", e._bindOffSelect), e._bindOffSelect = null), e._bindOffShift && (this._wd.removeEventListener("keyup", e._bindOffShift), e._bindOffShift = null);
  },
  _initBind: null,
  onTableCellMultiSelect: function(e, t) {
    const i = this.plugins.table;
    i._removeEvents.call(this), this.controllersOff(), i._shift = t, i._fixedCell = e, i._fixedCellName = e.nodeName, i._selectedTable = this.util.getParentElement(e, "TABLE");
    const n = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let l = 0, s = n.length; l < s; l++)
      this.util.removeClass(n[l], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), i._bindOnSelect = i._onCellMultiSelect.bind(this), i._bindOffSelect = i._offCellMultiSelect.bind(this), t ? (i._bindOffShift = function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), i._ref || this.controllersOff();
    }.bind(this), this._wd.addEventListener("keyup", i._bindOffShift, !1), this._wd.addEventListener("mousedown", i._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", i._bindOnSelect, !1), this._wd.addEventListener("mouseup", i._bindOffSelect, !1), i._initBind = i.init.bind(this), this._wd.addEventListener("touchmove", i._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled"))
      return;
    const i = t.getAttribute("data-command"), n = t.getAttribute("data-value"), l = t.getAttribute("data-option"), s = this.plugins.table;
    if (typeof s._closeSplitMenu == "function" && (s._closeSplitMenu(), i === "onsplit") || !i)
      return;
    e.preventDefault();
    const o = this.context.table;
    switch (i) {
      case "insert":
      case "delete":
        s.editTable.call(this, n, l);
        break;
      case "header":
        s.toggleHeader.call(this);
        break;
      case "onsplit":
        s.openSplitMenu.call(this);
        break;
      case "split":
        s.splitCells.call(this, n);
        break;
      case "merge":
        s.mergeCells.call(this);
        break;
      case "resize":
        o._maxWidth = !o._maxWidth, s.setTableStyle.call(this, "width"), s.setPositionControllerTop.call(this, o._element), s.setPositionControllerDiv.call(this, o._tdElement, s._shift);
        break;
      case "layout":
        o._fixedColumn = !o._fixedColumn, s.setTableStyle.call(this, "column"), s.setPositionControllerTop.call(this, o._element), s.setPositionControllerDiv.call(this, o._tdElement, s._shift);
        break;
      case "remove":
        const a = o._element.parentNode;
        this.util.removeItem(o._element), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(r) {
          return r.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, Fa = {
  name: "formatBlock",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.formatBlock = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _formatList: null,
      currentFormat: ""
    };
    let n = this.setSubmenu(e);
    n.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.formatBlock._formatList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang.toolbar, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-format";
    const l = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], s = !t.formats || t.formats.length === 0 ? l : t.formats;
    let o = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let a = 0, r = s.length, u, c, f, d, m, h, b; a < r; a++)
      u = s[a], typeof u == "string" && l.indexOf(u) > -1 ? (c = u.toLowerCase(), f = c === "blockquote" ? "range" : c === "pre" ? "free" : "replace", m = /^h/.test(c) ? c.match(/\d+/)[0] : "", d = i["tag_" + (m ? "h" : c)] + m, b = "", h = "") : (c = u.tag.toLowerCase(), f = u.command, d = u.name || c, b = u.class, h = b ? ' class="' + b + '"' : ""), o += '<li><button type="button" class="se-btn-list" data-command="' + f + '" data-value="' + c + '" data-class="' + b + '" title="' + d + '" aria-label="' + d + '"><' + c + h + ">" + d + "</" + c + "></button></li>";
    return o += "</ul></div>", n.innerHTML = o, n;
  },
  active: function(e) {
    let t = this.lang.toolbar.formats;
    const i = this.context.formatBlock.targetText;
    if (!e)
      this.util.changeTxt(i, t);
    else if (this.util.isFormatElement(e)) {
      const l = this.context.formatBlock._formatList, s = e.nodeName.toLowerCase(), o = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let a = 0, r = l.length, u; a < r; a++)
        if (u = l[a], s === u.getAttribute("data-value") && o === u.getAttribute("data-class")) {
          t = u.title;
          break;
        }
      return this.util.changeTxt(i, t), i.setAttribute("data-value", s), i.setAttribute("data-class", o), !0;
    }
    return !1;
  },
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, i = e.targetText, n = (i.getAttribute("data-value") || "") + (i.getAttribute("data-class") || "");
    if (n !== e.currentFormat) {
      for (let l = 0, s = t.length, o; l < s; l++)
        o = t[l], n === o.getAttribute("data-value") + o.getAttribute("data-class") ? this.util.addClass(o, "active") : this.util.removeClass(o, "active");
      e.currentFormat = n;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, n = null, l = null, s = "";
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), n = t.getAttribute("data-value"), s = t.getAttribute("data-class"), i) {
        l = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!!i) {
      if (i === "range") {
        const o = l.cloneNode(!1);
        this.applyRangeFormatElement(o);
      } else {
        let o = this.getRange(), a = this.getSelectedElementsAndComponents(!1);
        if (a.length === 0 && (o = this.getRange_addLine(o, null), a = this.getSelectedElementsAndComponents(!1), a.length === 0))
          return;
        const r = o.startOffset, u = o.endOffset, c = this.util;
        let f = a[0], d = a[a.length - 1];
        const m = c.getNodePath(o.startContainer, f, null, null), h = c.getNodePath(o.endContainer, d, null, null), b = this.detachList(a, !1);
        b.sc && (f = b.sc), b.ec && (d = b.ec), this.setRange(c.getNodeFromPath(m, f), r, c.getNodeFromPath(h, d), u);
        const g = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const p = g.length - 1;
          let _ = g[p].parentNode, v = l.cloneNode(!1);
          const y = v;
          for (let w = p, k, x, R, I, S, z, E = !0; w >= 0; w--)
            if (k = g[w], k !== (g[w + 1] ? g[w + 1].parentNode : null)) {
              if (z = c.isComponent(k), x = z ? "" : k.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), R = c.getParentElement(k, function(N) {
                return N.parentNode === _;
              }), (_ !== k.parentNode || z) && (c.isFormatElement(_) ? (_.parentNode.insertBefore(v, _.nextSibling), _ = _.parentNode) : (_.insertBefore(v, R ? R.nextSibling : null), _ = k.parentNode), I = v.nextSibling, I && v.nodeName === I.nodeName && c.isSameAttributes(v, I) && (v.innerHTML += "<BR>" + I.innerHTML, c.removeItem(I)), v = l.cloneNode(!1), E = !0), S = v.innerHTML, v.innerHTML = (E || !x || !S || /<br>$/i.test(x) ? x : x + "<BR>") + S, w === 0) {
                _.insertBefore(v, k), I = k.nextSibling, I && v.nodeName === I.nodeName && c.isSameAttributes(v, I) && (v.innerHTML += "<BR>" + I.innerHTML, c.removeItem(I));
                const N = v.previousSibling;
                N && v.nodeName === N.nodeName && c.isSameAttributes(v, N) && (N.innerHTML += "<BR>" + v.innerHTML, c.removeItem(v));
              }
              z || c.removeItem(k), x && (E = !1);
            }
          this.setRange(y, 0, y, 0);
        } else {
          for (let p = 0, _ = g.length, v, y; p < _; p++)
            v = g[p], (v.nodeName.toLowerCase() !== n.toLowerCase() || (v.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== s) && !c.isComponent(v) && (y = l.cloneNode(!1), c.copyFormatAttributes(y, v), y.innerHTML = v.innerHTML, v.parentNode.replaceChild(y, v)), p === 0 && (f = y || v), p === _ - 1 && (d = y || v), y = null;
          this.setRange(c.getNodeFromPath(m, f), r, c.getNodeFromPath(h, d), u);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, Ha = {
  name: "lineHeight",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.lineHeight = {
      _sizeList: null,
      currentSize: -1
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.lineHeight._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer";
    const l = t.lineHeights ? t.lineHeights : [
      { text: "1", value: 1 },
      { text: "1.15", value: 1.15 },
      { text: "1.5", value: 1.5 },
      { text: "2", value: 2 }
    ];
    let s = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let o = 0, a = l.length, r; o < a; o++)
      r = l[o], s += '<li><button type="button" class="se-btn-list" data-value="' + r.value + '" title="' + r.text + '" aria-label="' + r.text + '">' + r.text + "</button></li>";
    return s += "</ul></div>", n.innerHTML = s, n;
  },
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, i = this.util.getFormatElement(this.getSelectionNode()), n = i ? i.style.lineHeight + "" : "";
    if (n !== e.currentSize) {
      for (let l = 0, s = t.length; l < s; l++)
        n === t[l].getAttribute("data-value") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentSize = n;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value") || "", i = this.getSelectedElements();
    for (let n = 0, l = i.length; n < l; n++)
      i[n].style.lineHeight = t;
    this.submenuOff(), this.history.push(!1);
  }
}, Pa = {
  name: "template",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.template = {
      selectedIndex: -1
    };
    let n = this.setSubmenu(e);
    n.querySelector("ul").addEventListener("click", this.pickup.bind(e)), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.options.templates;
    if (!t || t.length === 0)
      throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
    const i = e.util.createElement("DIV");
    i.className = "se-list-layer";
    let n = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
    for (let l = 0, s = t.length, o; l < s; l++)
      o = t[l], n += '<li><button type="button" class="se-btn-list" data-value="' + l + '" title="' + o.name + '" aria-label="' + o.name + '">' + o.name + "</button></li>";
    return n += "</ul></div>", i.innerHTML = n, i;
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation(), this.context.template.selectedIndex = e.target.getAttribute("data-value") * 1;
    const t = this.options.templates[this.context.template.selectedIndex];
    if (t.html)
      this.setContents(t.html);
    else
      throw this.submenuOff(), Error('[SUNEDITOR.template.fail] cause : "templates[i].html not found"');
    this.submenuOff();
  }
}, $a = {
  name: "paragraphStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.paragraphStyle = {
      _classList: null
    };
    let n = this.setSubmenu(e);
    n.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.paragraphStyle._classList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const n = e.lang.menu, l = {
      spaced: {
        name: n.spaced,
        class: "__se__p-spaced",
        _class: ""
      },
      bordered: {
        name: n.bordered,
        class: "__se__p-bordered",
        _class: ""
      },
      neon: {
        name: n.neon,
        class: "__se__p-neon",
        _class: ""
      }
    }, s = !t.paragraphStyles || t.paragraphStyles.length === 0 ? ["spaced", "bordered", "neon"] : t.paragraphStyles;
    let o = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let a = 0, r = s.length, u, c, f, d; a < r; a++) {
      if (u = s[a], typeof u == "string") {
        const m = l[u.toLowerCase()];
        if (!m)
          continue;
        u = m;
      }
      c = u.name, f = u.class ? ' class="' + u.class + '"' : "", d = u._class, o += '<li><button type="button" class="se-btn-list' + (d ? " " + d : "") + '" data-value="' + u.class + '" title="' + c + '" aria-label="' + c + '"><div' + f + ">" + c + "</div></button></li>";
    }
    return o += "</ul></div>", i.innerHTML = o, i;
  },
  on: function() {
    const t = this.context.paragraphStyle._classList, i = this.util.getFormatElement(this.getSelectionNode());
    for (let n = 0, l = t.length; n < l; n++)
      this.util.hasClass(i, t[n].getAttribute("data-value")) ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !/^UL$/i.test(t.tagName) && (i = t.getAttribute("data-value"), !i); )
      t = t.parentNode;
    if (!i)
      return;
    let n = this.getSelectedElements();
    if (n.length === 0 && (this.getRange_addLine(this.getRange(), null), n = this.getSelectedElements(), n.length === 0))
      return;
    const l = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
    for (let s = 0, o = n.length; s < o; s++)
      l(n[s], i);
    this.submenuOff(), this.history.push(!1);
  }
}, ja = {
  name: "textStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.textStyle = {
      _styleList: null
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.textStyle._styleList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const n = {
      code: {
        name: e.lang.menu.code,
        class: "__se__t-code",
        tag: "code"
      },
      translucent: {
        name: e.lang.menu.translucent,
        style: "opacity: 0.5;",
        tag: "span"
      },
      shadow: {
        name: e.lang.menu.shadow,
        class: "__se__t-shadow",
        tag: "span"
      }
    }, l = t.textStyles ? t.textStyles : e._w.Object.keys(n);
    let s = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let o = 0, a = l.length, r, u, c, f, d, m, h; o < a; o++) {
      if (r = l[o], f = "", m = "", d = [], typeof r == "string") {
        const b = n[r.toLowerCase()];
        if (!b)
          continue;
        r = b;
      }
      c = r.name, u = r.tag || "span", h = r._class, r.style && (f += ' style="' + r.style + '"', m += r.style.replace(/:[^;]+(;|$)\s*/g, ","), d.push("style")), r.class && (f += ' class="' + r.class + '"', m += "." + r.class.trim().replace(/\s+/g, ",."), d.push("class")), m = m.replace(/,$/, ""), s += '<li><button type="button" class="se-btn-list' + (h ? " " + h : "") + '" data-command="' + u + '" data-value="' + m + '" title="' + c + '" aria-label="' + c + '"><' + u + f + ">" + c + "</" + u + "></button></li>";
    }
    return s += "</ul></div>", i.innerHTML = s, i;
  },
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, n = this.getSelectionNode();
    for (let l = 0, s = i.length, o, a, r; l < s; l++) {
      o = i[l], a = o.getAttribute("data-value").split(",");
      for (let u = 0, c, f; u < a.length; u++) {
        for (c = n, r = !1; c && !e.isFormatElement(c) && !e.isComponent(c); ) {
          if (c.nodeName.toLowerCase() === o.getAttribute("data-command").toLowerCase() && (f = a[u], /^\./.test(f) ? e.hasClass(c, f.replace(/^\./, "")) : !!c.style[f])) {
            r = !0;
            break;
          }
          c = c.parentNode;
        }
        if (!r)
          break;
      }
      r ? e.addClass(o, "active") : e.removeClass(o, "active");
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, n = null;
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), i) {
        n = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!i)
      return;
    const l = n.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    l.pop();
    const s = n.classList;
    for (let r = 0, u = s.length; r < u; r++)
      l.push("." + s[r]);
    const o = this.util.hasClass(t, "active") ? null : n.cloneNode(!1), a = o ? null : [n.nodeName];
    this.nodeChange(o, l, a, !0), this.submenuOff();
  }
};
var D = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      name: "dialog",
      add: function(l) {
        const s = l.context;
        s.dialog = {
          kind: "",
          updateModal: !1,
          _closeSignal: !1
        };
        let o = l.util.createElement("DIV");
        o.className = "se-dialog sun-editor-common";
        let a = l.util.createElement("DIV");
        a.className = "se-dialog-back", a.style.display = "none";
        let r = l.util.createElement("DIV");
        r.className = "se-dialog-inner", r.style.display = "none", o.appendChild(a), o.appendChild(r), s.dialog.modalArea = o, s.dialog.back = a, s.dialog.modal = r, s.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(l)), s.dialog.modal.addEventListener("click", this._onClick_dialog.bind(l)), s.element.relative.appendChild(o), o = null, a = null, r = null;
      },
      _onMouseDown_dialog: function(l) {
        /se-dialog-inner/.test(l.target.className) ? this.context.dialog._closeSignal = !0 : this.context.dialog._closeSignal = !1;
      },
      _onClick_dialog: function(l) {
        (/close/.test(l.target.getAttribute("data-command")) || this.context.dialog._closeSignal) && this.plugins.dialog.close.call(this);
      },
      open: function(l, s) {
        if (this.modalForm)
          return !1;
        this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = function(a) {
          !/27/.test(a.keyCode) || this.plugins.dialog.close.call(this);
        }.bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = s, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = l, this.modalForm = this.context[l].modal;
        const o = this.context[l].focusElement;
        typeof this.plugins[l].on == "function" && this.plugins[l].on.call(this, s), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", o && o.focus();
      },
      _bindClose: null,
      close: function() {
        this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null);
        const l = this.context.dialog.kind;
        this.modalForm.style.display = "none", this.context.dialog.back.style.display = "none", this.context.dialog.modalArea.style.display = "none", this.context.dialog.updateModal = !1, typeof this.plugins[l].init == "function" && this.plugins[l].init.call(this), this.context.dialog.kind = "", this.modalForm = null, this.focus();
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "dialog", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: n
    })), n;
  });
})(zn);
const Xe = zn.exports, Ga = {
  name: "selectMenu",
  add: function(e) {
    e.context.selectMenu = {
      caller: {},
      callerContext: null
    };
  },
  setForm: function() {
    return '<div class="se-select-list"></div>';
  },
  createList: function(e, t, i) {
    e.form.innerHTML = "<ul>" + i + "</ul>", e.items = t, e.menus = e.form.querySelectorAll("li");
  },
  initEvent: function(e, t) {
    const i = t.querySelector(".se-select-list"), n = this.context.selectMenu.caller[e] = {
      form: i,
      items: [],
      menus: [],
      index: -1,
      item: null,
      clickMethod: null,
      callerName: e
    };
    i.addEventListener("mousedown", this.plugins.selectMenu.onMousedown_list), i.addEventListener("mousemove", this.plugins.selectMenu.onMouseMove_list.bind(this, n)), i.addEventListener("click", this.plugins.selectMenu.onClick_list.bind(this, n));
  },
  onMousedown_list: function(e) {
    e.preventDefault(), e.stopPropagation();
  },
  onMouseMove_list: function(e, t) {
    this.util.addClass(e.form, "__se_select-menu-mouse-move");
    const i = t.target.getAttribute("data-index");
    !i || (e.index = i * 1);
  },
  onClick_list: function(e, t) {
    const i = t.target.getAttribute("data-index");
    !i || e.clickMethod.call(this, e.items[i]);
  },
  moveItem: function(e, t) {
    this.util.removeClass(e.form, "__se_select-menu-mouse-move"), t = e.index + t;
    const i = e.menus, n = i.length, l = e.index = t >= n ? 0 : t < 0 ? n - 1 : t;
    for (let s = 0; s < n; s++)
      s === l ? this.util.addClass(i[s], "active") : this.util.removeClass(i[s], "active");
    e.item = e.items[l];
  },
  getItem: function(e, t) {
    return t = !t || t < 0 ? e.index : t, e.items[t];
  },
  on: function(e, t) {
    const i = this.context.selectMenu.caller[e];
    this.context.selectMenu.callerContext = i, i.clickMethod = t, i.callerName = e;
  },
  open: function(e, t) {
    const i = e.form;
    i.style.visibility = "hidden", i.style.display = "block", t(i), i.style.visibility = "";
  },
  close: function(e) {
    e.form.style.display = "none", e.items = [], e.menus = [], e.index = -1, e.item = null;
  },
  init: function(e) {
    !e || (e.items = [], e.menus = [], e.index = -1, e.item = null, e.callerName = "", this.context.selectMenu.callerContext = null);
  }
}, En = {
  name: "anchor",
  add: function(e) {
    e.addModule([Ga]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, n = (e.options.linkRelDefault.default || "").split(" "), l = e.icons, s = e.util.createElement("DIV");
    let o = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + l.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + l.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + l.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      o += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let a = 0, r = i.length, u; a < r; a++)
        u = i[a], o += '<li><button type="button" class="se-btn-list' + (n.indexOf(u) > -1 ? " se-checked" : "") + '" data-command="' + u + '" title="' + u + '" aria-label="' + u + '"><span class="se-svg">' + l.checked + "</span>" + u + "</button></li>";
      o += "</ul></div></div></div>";
    }
    return o += "</div></div>", s.innerHTML = o, s;
  },
  initEvent: function(e, t) {
    const i = this.plugins.anchor, n = this.context.anchor.caller[e] = {
      modal: t,
      urlInput: null,
      linkDefaultRel: this.options.linkRelDefault,
      defaultRel: this.options.linkRelDefault.default || "",
      currentRel: [],
      linkAnchor: null,
      linkValue: "",
      _change: !1,
      callerName: e
    };
    typeof n.linkDefaultRel.default == "string" && (n.linkDefaultRel.default = n.linkDefaultRel.default.trim()), typeof n.linkDefaultRel.check_new_window == "string" && (n.linkDefaultRel.check_new_window = n.linkDefaultRel.check_new_window.trim()), typeof n.linkDefaultRel.check_bookmark == "string" && (n.linkDefaultRel.check_bookmark = n.linkDefaultRel.check_bookmark.trim()), n.urlInput = t.querySelector(".se-input-url"), n.anchorText = t.querySelector("._se_anchor_text"), n.newWindowCheck = t.querySelector("._se_anchor_check"), n.downloadCheck = t.querySelector("._se_anchor_download"), n.download = t.querySelector("._se_anchor_download_icon"), n.preview = t.querySelector(".se-link-preview"), n.bookmark = t.querySelector("._se_anchor_bookmark_icon"), n.bookmarkButton = t.querySelector("._se_bookmark_button"), this.plugins.selectMenu.initEvent.call(this, e, t);
    const l = this.context.selectMenu.caller[e];
    this.options.linkRel.length > 0 && (n.relButton = t.querySelector(".se-anchor-rel-btn"), n.relList = t.querySelector(".se-list-layer"), n.relPreview = t.querySelector(".se-anchor-rel-preview"), n.relButton.addEventListener("click", i.onClick_relButton.bind(this, n)), n.relList.addEventListener("click", i.onClick_relList.bind(this, n))), n.newWindowCheck.addEventListener("change", i.onChange_newWindowCheck.bind(this, n)), n.downloadCheck.addEventListener("change", i.onChange_downloadCheck.bind(this, n)), n.anchorText.addEventListener("input", i.onChangeAnchorText.bind(this, n)), n.urlInput.addEventListener("input", i.onChangeUrlInput.bind(this, n)), n.urlInput.addEventListener("keydown", i.onKeyDownUrlInput.bind(this, l)), n.urlInput.addEventListener("focus", i.onFocusUrlInput.bind(this, n, l)), n.urlInput.addEventListener("blur", i.onBlurUrlInput.bind(this, l)), n.bookmarkButton.addEventListener("click", i.onClick_bookmarkButton.bind(this, n));
  },
  on: function(e, t) {
    const i = this.plugins.anchor;
    if (!t)
      i.init.call(this, e), e.anchorText.value = this.getSelection().toString().trim(), e.newWindowCheck.checked = this.options.linkTargetNewWindow;
    else if (e.linkAnchor) {
      this.context.dialog.updateModal = !0;
      const n = e.linkAnchor.getAttribute("href");
      e.linkValue = e.preview.textContent = e.urlInput.value = i.selfPathBookmark.call(this, n) ? n.substr(n.lastIndexOf("#")) : n, e.anchorText.value = e.linkAnchor.textContent, e.newWindowCheck.checked = !!/_blank/i.test(e.linkAnchor.target), e.downloadCheck.checked = e.linkAnchor.download;
    }
    this.context.anchor.callerContext = e, i.setRel.call(this, e, t && e.linkAnchor ? e.linkAnchor.rel : e.defaultRel), i.setLinkPreview.call(this, e, e.linkValue), this.plugins.selectMenu.on.call(this, e.callerName, this.plugins.anchor.setHeaderBookmark);
  },
  selfPathBookmark: function(e) {
    const t = this._w.location.href.replace(/\/$/, "");
    return e.indexOf("#") === 0 || e.indexOf(t) === 0 && e.indexOf("#") === (t.indexOf("#") === -1 ? t.length : t.substr(0, t.indexOf("#")).length);
  },
  _closeRelMenu: null,
  toggleRelList: function(e, t) {
    if (!t)
      this.plugins.anchor._closeRelMenu && this.plugins.anchor._closeRelMenu();
    else {
      const i = e.relButton, n = e.relList;
      this.util.addClass(i, "active"), n.style.visibility = "hidden", n.style.display = "block", this.options.rtl ? n.style.left = i.offsetLeft - n.offsetWidth - 1 + "px" : n.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", n.style.top = i.offsetTop + i.offsetHeight / 2 - n.offsetHeight / 2 + "px", n.style.visibility = "", this.plugins.anchor._closeRelMenu = function(l, s, o) {
        o && (l.relButton.contains(o.target) || l.relList.contains(o.target)) || (this.util.removeClass(s, "active"), l.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }.bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, n = i.getAttribute("data-command");
    if (!n)
      return;
    const l = e.currentRel, s = this.util.toggleClass(i, "se-checked"), o = l.indexOf(n);
    s ? o === -1 && l.push(n) : o > -1 && l.splice(o, 1), e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, n = e.currentRel = t ? t.split(" ") : [];
    if (!i)
      return;
    const l = i.querySelectorAll("button");
    for (let s = 0, o = l.length, a; s < o; s++)
      a = l[s].getAttribute("data-command"), n.indexOf(a) > -1 ? this.util.addClass(l[s], "se-checked") : this.util.removeClass(l[s], "se-checked");
    e.relPreview.title = e.relPreview.textContent = n.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const n = this.util.getListChildren(this.context.element.wysiwyg, function(a) {
      return /h[1-6]/i.test(a.nodeName);
    });
    if (n.length === 0)
      return;
    const l = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), s = [];
    let o = "";
    for (let a = 0, r = n.length, u; a < r; a++)
      u = n[a], l.test(u.textContent) && (s.push(u), o += '<li class="se-select-item" data-index="' + a + '">' + u.textContent + "</li>");
    s.length === 0 ? this.plugins.selectMenu.close.call(this, t) : (this.plugins.selectMenu.createList(t, s, o), this.plugins.selectMenu.open.call(this, t, this.plugins.anchor._setMenuListPosition.bind(this, e)));
  },
  _setMenuListPosition: function(e, t) {
    t.style.top = e.urlInput.offsetHeight + 1 + "px";
  },
  onKeyDownUrlInput: function(e, t) {
    switch (t.keyCode) {
      case 38:
        t.preventDefault(), t.stopPropagation(), this.plugins.selectMenu.moveItem.call(this, e, -1);
        break;
      case 40:
        t.preventDefault(), t.stopPropagation(), this.plugins.selectMenu.moveItem.call(this, e, 1);
        break;
      case 13:
        e.index > -1 && (t.preventDefault(), t.stopPropagation(), this.plugins.anchor.setHeaderBookmark.call(this, this.plugins.selectMenu.getItem(e, null)));
        break;
    }
  },
  setHeaderBookmark: function(e) {
    const t = this.context.anchor.callerContext, i = e.id || "h_" + this._w.Math.random().toString().replace(/.+\./, "");
    e.id = i, t.urlInput.value = "#" + i, (!t.anchorText.value.trim() || !t._change) && (t.anchorText.value = e.textContent), this.plugins.anchor.setLinkPreview.call(this, t, t.urlInput.value), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext), this.context.anchor.callerContext.urlInput.focus();
  },
  onChangeAnchorText: function(e, t) {
    e._change = !!t.target.value.trim();
  },
  onChangeUrlInput: function(e, t) {
    const i = t.target.value.trim();
    this.plugins.anchor.setLinkPreview.call(this, e, i), this.plugins.anchor.selfPathBookmark.call(this, i) ? this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, i) : this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
  },
  onFocusUrlInput: function(e, t) {
    const i = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, i) && this.plugins.anchor.createHeaderList.call(this, e, t, i);
  },
  onBlurUrlInput: function(e) {
    this.plugins.selectMenu.close.call(this, e);
  },
  setLinkPreview: function(e, t) {
    const i = e.preview, n = this.options.linkProtocol, l = this.options.linkNoPrefix, s = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(n) === 0, o = n ? this._w.RegExp("^" + t.substr(0, n.length)).test(n) : !1;
    t = e.linkValue = i.textContent = t ? l ? t : n && !s && !o ? n + t : s ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    !e || (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, i, n, l) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && n.downloadCheck.checked ? e.setAttribute("download", i || t) : e.removeAttribute("download"), n.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const s = n.currentRel.join(" ");
    s ? e.rel = s : e.removeAttribute("rel"), e.href = t, l ? e.children.length === 0 && (e.textContent = "") : e.textContent = i;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0)
      return null;
    const i = e.linkValue, n = e.anchorText, l = n.value.length === 0 ? i : n.value, s = e.linkAnchor || this.util.createElement("A");
    return this.plugins.anchor.updateAnchor.call(this, s, i, l, e, t), e.linkValue = e.preview.textContent = e.urlInput.value = e.anchorText.value = "", s;
  },
  onClick_bookmarkButton: function(e) {
    let t = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, t) ? (t = t.substr(1), e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active"), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext)) : (t = "#" + t, e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active"), e.downloadCheck.checked = !1, e.download.style.display = "none", this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, t)), e.urlInput.value = t, this.plugins.anchor.setLinkPreview.call(this, e, t), e.urlInput.focus();
  },
  onChange_newWindowCheck: function(e, t) {
    typeof e.linkDefaultRel.check_new_window == "string" && (t.target.checked ? this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relMerge.call(this, e, e.linkDefaultRel.check_new_window)) : this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relDelete.call(this, e, e.linkDefaultRel.check_new_window)));
  },
  onChange_downloadCheck: function(e, t) {
    t.target.checked ? (e.download.style.display = "block", e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active"), e.linkValue = e.preview.textContent = e.urlInput.value = e.urlInput.value.replace(/^\#+/, ""), typeof e.linkDefaultRel.check_bookmark == "string" && this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relMerge.call(this, e, e.linkDefaultRel.check_bookmark))) : (e.download.style.display = "none", typeof e.linkDefaultRel.check_bookmark == "string" && this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relDelete.call(this, e, e.linkDefaultRel.check_bookmark)));
  },
  _relMerge: function(e, t) {
    const i = e.currentRel;
    if (!t)
      return i.join(" ");
    if (/^only\:/.test(t))
      return t = t.replace(/^only\:/, "").trim(), e.currentRel = t.split(" "), t;
    const n = t.split(" ");
    for (let l = 0, s = n.length, o; l < s; l++)
      o = i.indexOf(n[l]), o === -1 && i.push(n[l]);
    return i.join(" ");
  },
  _relDelete: function(e, t) {
    if (!t)
      return e.currentRel.join(" ");
    /^only\:/.test(t) && (t = t.replace(/^only\:/, "").trim());
    const i = e.currentRel.join(" ").replace(this._w.RegExp(t + "\\s*"), "");
    return e.currentRel = i.split(" "), i;
  },
  init: function(e) {
    e.linkAnchor = null, e.linkValue = e.preview.textContent = e.urlInput.value = "", e.anchorText.value = "", e.newWindowCheck.checked = !1, e.downloadCheck.checked = !1, e._change = !1, this.plugins.anchor.setRel.call(this, e, e.defaultRel), e.relList && this.plugins.anchor.toggleRelList.call(this, e, !1), this.context.anchor.callerContext = null, this.plugins.selectMenu.init.call(this, this.context.selectMenu.callerContext);
  }
}, qa = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([Xe, En]);
    const t = e.context, i = t.link = {
      focusElement: null,
      _linkAnchor: null,
      anchorCtx: null
    };
    let n = this.setDialog(e);
    i.modal = n;
    let l = this.setController_LinkButton(e);
    i.linkController = l, n.querySelector("form").addEventListener("submit", this.submit.bind(e)), l.addEventListener("click", this.onClick_linkController.bind(e)), t.dialog.modal.appendChild(n), t.element.relative.appendChild(l), e.plugins.anchor.initEvent.call(e, "link", n), i.focusElement = t.anchor.caller.link.urlInput, n = null, l = null;
  },
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), n = e.icons;
    i.className = "se-dialog-content", i.style.display = "none";
    let l = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + n.cancel + '</button><span class="se-modal-title">' + t.dialogBox.linkBox.title + "</span></div>" + e.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>";
    return i.innerHTML = l, i;
  },
  setController_LinkButton: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-link", n.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + i.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", n;
  },
  open: function() {
    this.plugins.dialog.open.call(this, "link", this.currentControllerName === "link");
  },
  submit: function(e) {
    this.showLoading(), e.preventDefault(), e.stopPropagation();
    try {
      const t = this.plugins.anchor.createAnchor.call(this, this.context.anchor.caller.link, !1);
      if (t === null)
        return;
      if (this.context.dialog.updateModal) {
        const i = this.context.link._linkAnchor.childNodes[0];
        this.setRange(i, 0, i, i.textContent.length);
      } else {
        const i = this.getSelectedElements();
        if (i.length > 1) {
          const n = this.util.createElement(i[0].nodeName);
          if (n.appendChild(t), !this.insertNode(n, null, !0))
            return;
        } else if (!this.insertNode(t, null, !0))
          return;
        this.setRange(t.childNodes[0], 0, t.childNodes[0], t.textContent.length);
      }
    } finally {
      this.plugins.dialog.close.call(this), this.closeLoading(), this.history.push(!1);
    }
    return !1;
  },
  active: function(e) {
    if (!e)
      this.controllerArray.indexOf(this.context.link.linkController) > -1 && this.controllersOff();
    else if (this.util.isAnchor(e) && e.getAttribute("data-image-link") === null)
      return this.controllerArray.indexOf(this.context.link.linkController) < 0 && this.plugins.link.call_controller.call(this, e), !0;
    return !1;
  },
  on: function(e) {
    this.plugins.anchor.on.call(this, this.context.anchor.caller.link, e);
  },
  call_controller: function(e) {
    this.editLink = this.context.link._linkAnchor = this.context.anchor.caller.link.linkAnchor = e;
    const t = this.context.link.linkController, i = t.querySelector("a");
    i.href = e.href, i.title = e.textContent, i.textContent = e.textContent, this.util.addClass(e, "on"), this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "link", this.util.removeClass.bind(this.util, this.context.link._linkAnchor, "on"));
  },
  onClick_linkController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    if (!!t) {
      if (e.preventDefault(), /update/.test(t))
        this.plugins.dialog.open.call(this, "link", !0);
      else if (/unlink/.test(t)) {
        const i = this.util.getChildElement(this.context.link._linkAnchor, function(l) {
          return l.childNodes.length === 0 || l.nodeType === 3;
        }, !1), n = this.util.getChildElement(this.context.link._linkAnchor, function(l) {
          return l.childNodes.length === 0 || l.nodeType === 3;
        }, !0);
        this.setRange(i, 0, n, n.textContent.length), this.nodeChange(null, null, ["A"], !1);
      } else
        this.util.removeItem(this.context.link._linkAnchor), this.context.anchor.caller.link.linkAnchor = null, this.focus(), this.history.push(!1);
      this.controllersOff();
    }
  },
  init: function() {
    this.context.link.linkController.style.display = "none", this.plugins.anchor.init.call(this, this.context.anchor.caller.link);
  }
};
var Ln = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      name: "component",
      set_container: function(l, s) {
        const o = this.util.createElement("DIV");
        return o.className = "se-component " + s, o.appendChild(l), o;
      },
      set_cover: function(l) {
        const s = this.util.createElement("FIGURE");
        return s.appendChild(l), s;
      },
      create_caption: function() {
        const l = this.util.createElement("FIGCAPTION");
        return l.innerHTML = "<div>" + this.lang.dialogBox.caption + "</div>", l;
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "component", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: n
    })), n;
  });
})(Ln);
const Jt = Ln.exports;
var In = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      name: "resizing",
      add: function(l) {
        const s = l.icons, o = l.context;
        o.resizing = {
          _resizeClientX: 0,
          _resizeClientY: 0,
          _resize_plugin: "",
          _resize_w: 0,
          _resize_h: 0,
          _origin_w: 0,
          _origin_h: 0,
          _rotateVertical: !1,
          _resize_direction: "",
          _move_path: null,
          _isChange: !1,
          alignIcons: {
            basic: s.align_justify,
            left: s.align_left,
            right: s.align_right,
            center: s.align_center
          }
        };
        let a = this.setController_resize(l);
        o.resizing.resizeContainer = a, o.resizing.resizeDiv = a.querySelector(".se-modal-resize"), o.resizing.resizeDot = a.querySelector(".se-resize-dot"), o.resizing.resizeDisplay = a.querySelector(".se-resize-display");
        let r = this.setController_button(l);
        o.resizing.resizeButton = r;
        let u = o.resizing.resizeHandles = o.resizing.resizeDot.querySelectorAll("span");
        o.resizing.resizeButtonGroup = r.querySelector("._se_resizing_btn_group"), o.resizing.rotationButtons = r.querySelectorAll("._se_resizing_btn_group ._se_rotation"), o.resizing.percentageButtons = r.querySelectorAll("._se_resizing_btn_group ._se_percentage"), o.resizing.alignMenu = r.querySelector(".se-resizing-align-list"), o.resizing.alignMenuList = o.resizing.alignMenu.querySelectorAll("button"), o.resizing.alignButton = r.querySelector("._se_resizing_align_button"), o.resizing.autoSizeButton = r.querySelector("._se_resizing_btn_group ._se_auto_size"), o.resizing.captionButton = r.querySelector("._se_resizing_caption_button"), a.addEventListener("mousedown", function(c) {
          c.preventDefault();
        }), u[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), u[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), u[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), u[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), u[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), u[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), u[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), u[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), r.addEventListener("click", this.onClick_resizeButton.bind(l)), o.element.relative.appendChild(a), o.element.relative.appendChild(r), a = null, r = null, u = null;
      },
      setController_resize: function(l) {
        const s = l.util.createElement("DIV");
        return s.className = "se-controller se-resizing-container", s.style.display = "none", s.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', s;
      },
      setController_button: function(l) {
        const s = l.lang, o = l.icons, a = l.util.createElement("DIV");
        return a.className = "se-controller se-controller-resizing", a.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + o.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + o.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + o.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + o.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + o.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + o.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + o.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + o.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + o.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + o.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + o.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + o.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + o.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + o.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.remove + "</span></span></button></div>", a;
      },
      _module_getSizeX: function(l, s, o, a) {
        return s || (s = l._element), o || (o = l._cover), a || (a = l._container), s ? /%$/.test(s.style.width) ? (a && this.util.getNumber(a.style.width, 2) || 100) + "%" : s.style.width : "";
      },
      _module_getSizeY: function(l, s, o, a) {
        return s || (s = l._element), o || (o = l._cover), a || (a = l._container), !a || !o ? s && s.style.height || "" : this.util.getNumber(o.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? o.style.height : !/%$/.test(s.style.height) || !/%$/.test(s.style.width) ? s.style.height : (a && this.util.getNumber(a.style.height, 2) || 100) + "%";
      },
      _module_setModifyInputSize: function(l, s) {
        const o = l._onlyPercentage && this.context.resizing._rotateVertical;
        l.proportion.checked = l._proportionChecked = l._element.getAttribute("data-proportion") !== "false";
        let a = o ? "" : this.plugins.resizing._module_getSizeX.call(this, l);
        if (a === l._defaultSizeX && (a = ""), l._onlyPercentage && (a = this.util.getNumber(a, 2)), l.inputX.value = a, s.setInputSize.call(this, "x"), !l._onlyPercentage) {
          let r = o ? "" : this.plugins.resizing._module_getSizeY.call(this, l);
          r === l._defaultSizeY && (r = ""), l._onlyPercentage && (r = this.util.getNumber(r, 2)), l.inputY.value = r;
        }
        l.inputX.disabled = !!o, l.inputY.disabled = !!o, l.proportion.disabled = !!o, s.setRatio.call(this);
      },
      _module_setInputSize: function(l, s) {
        if (l._onlyPercentage) {
          s === "x" && l.inputX.value > 100 && (l.inputX.value = 100);
          return;
        }
        if (l.proportion.checked && l._ratio && /\d/.test(l.inputX.value) && /\d/.test(l.inputY.value)) {
          const o = l.inputX.value.replace(/\d+|\./g, "") || l.sizeUnit, a = l.inputY.value.replace(/\d+|\./g, "") || l.sizeUnit;
          if (o !== a)
            return;
          const r = o === "%" ? 2 : 0;
          s === "x" ? l.inputY.value = this.util.getNumber(l._ratioY * this.util.getNumber(l.inputX.value, r), r) + a : l.inputX.value = this.util.getNumber(l._ratioX * this.util.getNumber(l.inputY.value, r), r) + o;
        }
      },
      _module_setRatio: function(l) {
        const s = l.inputX.value, o = l.inputY.value;
        if (l.proportion.checked && /\d+/.test(s) && /\d+/.test(o)) {
          const a = s.replace(/\d+|\./g, "") || l.sizeUnit, r = o.replace(/\d+|\./g, "") || l.sizeUnit;
          if (a !== r)
            l._ratio = !1;
          else if (!l._ratio) {
            const u = this.util.getNumber(s, 0), c = this.util.getNumber(o, 0);
            l._ratio = !0, l._ratioX = u / c, l._ratioY = c / u;
          }
        } else
          l._ratio = !1;
      },
      _module_sizeRevert: function(l) {
        l._onlyPercentage ? l.inputX.value = l._origin_w > 100 ? 100 : l._origin_w : (l.inputX.value = l._origin_w, l.inputY.value = l._origin_h);
      },
      _module_saveCurrentSize: function(l) {
        const s = this.plugins.resizing._module_getSizeX.call(this, l), o = this.plugins.resizing._module_getSizeY.call(this, l);
        l._element.setAttribute("data-size", s + "," + o), l._videoRatio && (l._videoRatio = o);
      },
      call_controller_resize: function(l, s) {
        const o = this.context.resizing, a = this.context[s];
        o._resize_plugin = s;
        const r = o.resizeContainer, u = o.resizeDiv, c = this.util.getOffset(l, this.context.element.wysiwygFrame), f = o._rotateVertical = /^(90|270)$/.test(Math.abs(l.getAttribute("data-rotate")).toString()), d = f ? l.offsetHeight : l.offsetWidth, m = f ? l.offsetWidth : l.offsetHeight, h = c.top, b = c.left - this.context.element.wysiwygFrame.scrollLeft;
        r.style.top = h + "px", r.style.left = b + "px", r.style.width = d + "px", r.style.height = m + "px", u.style.top = "0px", u.style.left = "0px", u.style.width = d + "px", u.style.height = m + "px";
        let g = l.getAttribute("data-align") || "basic";
        g = g === "none" ? "basic" : g;
        const p = this.util.getParentElement(l, this.util.isComponent), _ = this.util.getParentElement(l, "FIGURE"), v = this.plugins.resizing._module_getSizeX.call(this, a, l, _, p) || "auto", y = a._onlyPercentage && s === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, a, l, _, p) || "auto");
        this.util.changeTxt(o.resizeDisplay, this.lang.dialogBox[g] + " (" + v + y + ")"), o.resizeButtonGroup.style.display = a._resizing ? "" : "none";
        const w = a._resizing && !a._resizeDotHide && !a._onlyPercentage ? "flex" : "none", k = o.resizeHandles;
        for (let z = 0, E = k.length; z < E; z++)
          k[z].style.display = w;
        if (a._resizing) {
          const z = o.rotationButtons;
          z[0].style.display = z[1].style.display = a._rotation ? "" : "none";
        }
        if (a._alignHide)
          o.alignButton.style.display = "none";
        else {
          o.alignButton.style.display = "";
          const z = o.alignMenuList;
          this.util.changeElement(o.alignButton.firstElementChild, o.alignIcons[g]);
          for (let E = 0, N = z.length; E < N; E++)
            z[E].getAttribute("data-value") === g ? this.util.addClass(z[E], "on") : this.util.removeClass(z[E], "on");
        }
        const x = o.percentageButtons, R = /%$/.test(l.style.width) && /%$/.test(p.style.width) ? this.util.getNumber(p.style.width, 0) / 100 + "" : "";
        for (let z = 0, E = x.length; z < E; z++)
          x[z].getAttribute("data-value") === R ? this.util.addClass(x[z], "active") : this.util.removeClass(x[z], "active");
        a._captionShow ? (o.captionButton.style.display = "", this.util.getChildElement(l.parentNode, "figcaption") ? (this.util.addClass(o.captionButton, "active"), a._captionChecked = !0) : (this.util.removeClass(o.captionButton, "active"), a._captionChecked = !1)) : o.captionButton.style.display = "none", r.style.display = "block";
        const I = { left: 0, top: 50 };
        this.options.iframe && (I.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, I.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(o.resizeButton, r, "bottom", I), this.controllersOn(r, o.resizeButton, this.util.setDisabledButtons.bind(this.util, !1, this.resizingDisabledButtons), l, s), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), o._resize_w = d, o._resize_h = m;
        const S = (l.getAttribute("origin-size") || "").split(",");
        return o._origin_w = S[0] || l.naturalWidth, o._origin_h = S[1] || l.naturalHeight, {
          w: d,
          h: m,
          t: h,
          l: b
        };
      },
      _closeAlignMenu: null,
      openAlignMenu: function() {
        const l = this.context.resizing.alignButton;
        this.util.addClass(l, "on"), this.context.resizing.alignMenu.style.top = l.offsetTop + l.offsetHeight + "px", this.context.resizing.alignMenu.style.left = l.offsetLeft - l.offsetWidth / 2 + "px", this.context.resizing.alignMenu.style.display = "block", this.plugins.resizing._closeAlignMenu = function() {
          this.util.removeClass(this.context.resizing.alignButton, "on"), this.context.resizing.alignMenu.style.display = "none", this.removeDocEvent("click", this.plugins.resizing._closeAlignMenu), this.plugins.resizing._closeAlignMenu = null;
        }.bind(this), this.addDocEvent("click", this.plugins.resizing._closeAlignMenu);
      },
      onClick_resizeButton: function(l) {
        l.stopPropagation();
        const s = l.target, o = s.getAttribute("data-command") || s.parentNode.getAttribute("data-command");
        if (!o)
          return;
        const a = s.getAttribute("data-value") || s.parentNode.getAttribute("data-value"), r = this.context.resizing._resize_plugin, u = this.context[r], c = u._element, f = this.plugins[r];
        if (l.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), o === "onalign"))) {
          switch (o) {
            case "auto":
              this.plugins.resizing.resetTransform.call(this, c), f.setAutoSize.call(this), this.selectComponent(c, r);
              break;
            case "percent":
              let d = this.plugins.resizing._module_getSizeY.call(this, u);
              if (this.context.resizing._rotateVertical) {
                const w = c.getAttribute("data-percentage");
                w && (d = w.split(",")[1]);
              }
              this.plugins.resizing.resetTransform.call(this, c), f.setPercentSize.call(this, a * 100, this.util.getNumber(d, 0) === null || !/%$/.test(d) ? "" : d), this.selectComponent(c, r);
              break;
            case "mirror":
              const m = c.getAttribute("data-rotate") || "0";
              let h = c.getAttribute("data-rotateX") || "", b = c.getAttribute("data-rotateY") || "";
              a === "h" && !this.context.resizing._rotateVertical || a === "v" && this.context.resizing._rotateVertical ? b = b ? "" : "180" : h = h ? "" : "180", c.setAttribute("data-rotateX", h), c.setAttribute("data-rotateY", b), this.plugins.resizing._setTransForm(c, m, h, b);
              break;
            case "rotate":
              const g = this.context.resizing, p = c.getAttribute("data-rotate") * 1 + a * 1, _ = this._w.Math.abs(p) >= 360 ? 0 : p;
              c.setAttribute("data-rotate", _), g._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(_).toString()), this.plugins.resizing.setTransformSize.call(this, c, null, null), this.selectComponent(c, r);
              break;
            case "onalign":
              this.plugins.resizing.openAlignMenu.call(this);
              return;
            case "align":
              const v = a === "basic" ? "none" : a;
              f.setAlign.call(this, v, null, null, null), this.selectComponent(c, r);
              break;
            case "caption":
              const y = !u._captionChecked;
              if (f.openModify.call(this, !0), u._captionChecked = u.captionCheckEl.checked = y, f.update_image.call(this, !1, !1, !1), y) {
                const w = this.util.getChildElement(u._caption, function(k) {
                  return k.nodeType === 3;
                });
                w ? this.setRange(w, 0, w, w.textContent.length) : u._caption.focus(), this.controllersOff();
              } else
                this.selectComponent(c, r), f.openModify.call(this, !0);
              break;
            case "revert":
              f.setOriginSize.call(this), this.selectComponent(c, r);
              break;
            case "update":
              f.openModify.call(this), this.controllersOff();
              break;
            case "delete":
              f.destroy.call(this);
              break;
          }
          this.history.push(!1);
        }
      },
      resetTransform: function(l) {
        const s = (l.getAttribute("data-size") || l.getAttribute("data-origin") || "").split(",");
        this.context.resizing._rotateVertical = !1, l.style.maxWidth = "", l.style.transform = "", l.style.transformOrigin = "", l.setAttribute("data-rotate", ""), l.setAttribute("data-rotateX", ""), l.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, s[0] ? s[0] : "auto", s[1] ? s[1] : "", !0);
      },
      setTransformSize: function(l, s, o) {
        let a = l.getAttribute("data-percentage");
        const r = this.context.resizing._rotateVertical, u = l.getAttribute("data-rotate") * 1;
        let c = "";
        if (a && !r)
          a = a.split(","), a[0] === "auto" && a[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, a[0], a[1]);
        else {
          const f = this.util.getParentElement(l, "FIGURE"), d = s || l.offsetWidth, m = o || l.offsetHeight, h = (r ? m : d) + "px", b = (r ? d : m) + "px";
          if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, d + "px", m + "px", !0), f.style.width = h, f.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : b, r) {
            let g = d / 2 + "px " + d / 2 + "px 0", p = m / 2 + "px " + m / 2 + "px 0";
            c = u === 90 || u === -270 ? p : g;
          }
        }
        l.style.transformOrigin = c, this.plugins.resizing._setTransForm(l, u.toString(), l.getAttribute("data-rotateX") || "", l.getAttribute("data-rotateY") || ""), r ? l.style.maxWidth = "none" : l.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, l);
      },
      _setTransForm: function(l, s, o, a) {
        let r = (l.offsetWidth - l.offsetHeight) * (/-/.test(s) ? 1 : -1), u = "";
        if (/[1-9]/.test(s) && (o || a))
          switch (u = o ? "Y" : "X", s) {
            case "90":
              u = o && a ? "X" : a ? u : "";
              break;
            case "270":
              r *= -1, u = o && a ? "Y" : o ? u : "";
              break;
            case "-90":
              u = o && a ? "Y" : o ? u : "";
              break;
            case "-270":
              r *= -1, u = o && a ? "X" : a ? u : "";
              break;
            default:
              u = "";
          }
        s % 180 === 0 && (l.style.maxWidth = ""), l.style.transform = "rotate(" + s + "deg)" + (o ? " rotateX(" + o + "deg)" : "") + (a ? " rotateY(" + a + "deg)" : "") + (u ? " translate" + u + "(" + r + "px)" : "");
      },
      setCaptionPosition: function(l) {
        const s = this.util.getChildElement(this.util.getParentElement(l, "FIGURE"), "FIGCAPTION");
        s && (s.style.marginTop = (this.context.resizing._rotateVertical ? l.offsetWidth - l.offsetHeight : 0) + "px");
      },
      onMouseDown_resize_handle: function(l) {
        l.stopPropagation(), l.preventDefault();
        const s = this.context.resizing, o = s._resize_direction = l.target.classList[0];
        s._resizeClientX = l.clientX, s._resizeClientY = l.clientY, this.context.element.resizeBackground.style.display = "block", s.resizeButton.style.display = "none", s.resizeDiv.style.float = /l/.test(o) ? "right" : /r/.test(o) ? "left" : "none";
        const a = function(c) {
          if (c.type === "keydown" && c.keyCode !== 27)
            return;
          const f = s._isChange;
          s._isChange = !1, this.removeDocEvent("mousemove", r), this.removeDocEvent("mouseup", a), this.removeDocEvent("keydown", a), c.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, o), f && this.history.push(!1));
        }.bind(this), r = this.plugins.resizing.resizing_element.bind(this, s, o, this.context[s._resize_plugin]);
        this.addDocEvent("mousemove", r), this.addDocEvent("mouseup", a), this.addDocEvent("keydown", a);
      },
      resizing_element: function(l, s, o, a) {
        const r = a.clientX, u = a.clientY;
        let c = o._element_w, f = o._element_h;
        const d = o._element_w + (/r/.test(s) ? r - l._resizeClientX : l._resizeClientX - r), m = o._element_h + (/b/.test(s) ? u - l._resizeClientY : l._resizeClientY - u), h = o._element_h / o._element_w * d;
        /t/.test(s) && (l.resizeDiv.style.top = o._element_h - (/h/.test(s) ? m : h) + "px"), /l/.test(s) && (l.resizeDiv.style.left = o._element_w - d + "px"), /r|l/.test(s) && (l.resizeDiv.style.width = d + "px", c = d), /^(t|b)[^h]$/.test(s) ? (l.resizeDiv.style.height = h + "px", f = h) : /^(t|b)h$/.test(s) && (l.resizeDiv.style.height = m + "px", f = m), l._resize_w = c, l._resize_h = f, this.util.changeTxt(l.resizeDisplay, this._w.Math.round(c) + " x " + this._w.Math.round(f)), l._isChange = !0;
      },
      cancel_controller_resize: function(l) {
        const s = this.context.resizing._rotateVertical;
        this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
        let o = this._w.Math.round(s ? this.context.resizing._resize_h : this.context.resizing._resize_w), a = this._w.Math.round(s ? this.context.resizing._resize_w : this.context.resizing._resize_h);
        if (!s && !/%$/.test(o)) {
          const c = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
          this.util.getNumber(o, 0) > c && (a = this._w.Math.round(a / o * c), o = c);
        }
        const r = this.context.resizing._resize_plugin;
        this.plugins[r].setSize.call(this, o, a, !1, l), s && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, o, a), this.selectComponent(this.context[r]._element, r);
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "resizing", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: n
    })), n;
  });
})(In);
const Nn = In.exports;
var Rn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      name: "fileManager",
      _xmlHttp: null,
      _checkMediaComponent: function(l) {
        return /IMG/i.test(l) ? !/FIGURE/i.test(l.parentElement.nodeName) || !/FIGURE/i.test(l.parentElement.parentElement.nodeName) : !0;
      },
      upload: function(l, s, o, a, r) {
        this.showLoading();
        const u = this.plugins.fileManager, c = u._xmlHttp = this.util.getXMLHttpRequest();
        if (c.onreadystatechange = u._callBackUpload.bind(this, c, a, r), c.open("post", l, !0), s !== null && typeof s == "object" && this._w.Object.keys(s).length > 0)
          for (let f in s)
            c.setRequestHeader(f, s[f]);
        c.send(o);
      },
      _callBackUpload: function(l, s, o) {
        if (l.readyState === 4)
          if (l.status === 200)
            try {
              s(l);
            } catch (a) {
              throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + a.message + '"');
            } finally {
              this.closeLoading();
            }
          else {
            this.closeLoading();
            const a = l.responseText ? JSON.parse(l.responseText) : l;
            if (typeof o != "function" || o("", a, this)) {
              const r = "[SUNEDITOR.fileManager.upload.serverException] status: " + l.status + ", response: " + (a.errorMessage || l.responseText);
              throw this.functions.noticeOpen(r), Error(r);
            }
          }
      },
      checkInfo: function(l, s, o, a, r) {
        let u = [];
        for (let p = 0, _ = s.length; p < _; p++)
          u = u.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(s[p] + ':not([data-se-embed="true"])')));
        const c = this.plugins.fileManager, f = this.context[l], d = f._infoList, m = c.setInfo.bind(this);
        if (u.length === d.length)
          if (this._componentsInfoReset) {
            for (let p = 0, _ = u.length; p < _; p++)
              m(l, u[p], o, null, r);
            return;
          } else {
            let p = !1;
            for (let _ = 0, v = d.length, y; _ < v; _++)
              if (y = d[_], u.filter(function(w) {
                return y.src === w.src && y.index.toString() === w.getAttribute("data-index");
              }).length === 0) {
                p = !0;
                break;
              }
            if (!p)
              return;
          }
        const h = r ? this.context.resizing._resize_plugin : "";
        r && (this.context.resizing._resize_plugin = l);
        const b = [], g = [];
        for (let p = 0, _ = d.length; p < _; p++)
          g[p] = d[p].index;
        for (f.__updateTags = u; u.length > 0; ) {
          const p = u.shift();
          !this.util.getParentElement(p, this.util.isMediaComponent) || !c._checkMediaComponent(p) ? (b.push(f._infoIndex), a(p)) : !p.getAttribute("data-index") || g.indexOf(p.getAttribute("data-index") * 1) < 0 ? (b.push(f._infoIndex), p.removeAttribute("data-index"), m(l, p, o, null, r)) : b.push(p.getAttribute("data-index") * 1);
        }
        for (let p = 0, _; p < d.length; p++)
          _ = d[p].index, !(b.indexOf(_) > -1) && (d.splice(p, 1), typeof o == "function" && o(null, _, "delete", null, 0, this), p--);
        r && (this.context.resizing._resize_plugin = h);
      },
      setInfo: function(l, s, o, a, r) {
        const u = r ? this.context.resizing._resize_plugin : "";
        r && (this.context.resizing._resize_plugin = l);
        const c = this.plugins[l], f = this.context[l], d = f._infoList;
        let m = s.getAttribute("data-index"), h = null, b = "";
        if (a || (a = {
          name: s.getAttribute("data-file-name") || (typeof s.src == "string" ? s.src.split("/").pop() : ""),
          size: s.getAttribute("data-file-size") || 0
        }), !m || this._componentsInfoInit)
          b = "create", m = f._infoIndex++, s.setAttribute("data-index", m), s.setAttribute("data-file-name", a.name), s.setAttribute("data-file-size", a.size), h = {
            src: s.src,
            index: m * 1,
            name: a.name,
            size: a.size
          }, d.push(h);
        else {
          b = "update", m *= 1;
          for (let g = 0, p = d.length; g < p; g++)
            if (m === d[g].index) {
              h = d[g];
              break;
            }
          h || (m = f._infoIndex++, h = { index: m }, d.push(h)), h.src = s.src, h.name = s.getAttribute("data-file-name"), h.size = s.getAttribute("data-file-size") * 1;
        }
        if (h.element = s, h.delete = c.destroy.bind(this, s), h.select = function(g) {
          g.scrollIntoView(!0), this._w.setTimeout(c.select.bind(this, g));
        }.bind(this, s), r) {
          if (!s.getAttribute("origin-size") && s.naturalWidth && s.setAttribute("origin-size", s.naturalWidth + "," + s.naturalHeight), !s.getAttribute("data-origin")) {
            const g = this.util.getParentElement(s, this.util.isMediaComponent), p = this.util.getParentElement(s, "FIGURE"), _ = this.plugins.resizing._module_getSizeX.call(this, f, s, p, g), v = this.plugins.resizing._module_getSizeY.call(this, f, s, p, g);
            s.setAttribute("data-origin", _ + "," + v), s.setAttribute("data-size", _ + "," + v);
          }
          if (!s.style.width) {
            const g = (s.getAttribute("data-size") || s.getAttribute("data-origin") || "").split(",");
            c.onModifyMode.call(this, s, null), c.applySize.call(this, g[0], g[1]);
          }
          this.context.resizing._resize_plugin = u;
        }
        typeof o == "function" && o(s, m, b, h, --f._uploadFileLength < 0 ? 0 : f._uploadFileLength, this);
      },
      deleteInfo: function(l, s, o) {
        if (s >= 0) {
          const a = this.context[l]._infoList;
          for (let r = 0, u = a.length; r < u; r++)
            if (s === a[r].index) {
              a.splice(r, 1), typeof o == "function" && o(null, s, "delete", null, 0, this);
              return;
            }
        }
      },
      resetInfo: function(l, s) {
        const o = this.context[l];
        if (typeof s == "function") {
          const a = o._infoList;
          for (let r = 0, u = a.length; r < u; r++)
            s(null, a[r].index, "delete", null, 0, this);
        }
        o._infoList = [], o._infoIndex = 0;
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileManager", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: n
    })), n;
  });
})(Rn);
const Zt = Rn.exports, Wa = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([Xe, En, Jt, Nn, Zt]);
    const t = e.options, i = e.context, n = i.image = {
      _infoList: [],
      _infoIndex: 0,
      _uploadFileLength: 0,
      focusElement: null,
      sizeUnit: t._imageSizeUnit,
      _linkElement: "",
      _altText: "",
      _align: "none",
      _floatClassRegExp: "__se__float\\-[a-z]+",
      _v_src: { _linkValue: "" },
      svgDefaultSize: "30%",
      base64RenderIndex: 0,
      _element: null,
      _cover: null,
      _container: null,
      inputX: null,
      inputY: null,
      _element_w: 1,
      _element_h: 1,
      _element_l: 0,
      _element_t: 0,
      _defaultSizeX: "auto",
      _defaultSizeY: "auto",
      _origin_w: t.imageWidth === "auto" ? "" : t.imageWidth,
      _origin_h: t.imageHeight === "auto" ? "" : t.imageHeight,
      _proportionChecked: !0,
      _resizing: t.imageResizing,
      _resizeDotHide: !t.imageHeightShow,
      _rotation: t.imageRotation,
      _alignHide: !t.imageAlignShow,
      _onlyPercentage: t.imageSizeOnlyPercentage,
      _ratio: !1,
      _ratioX: 1,
      _ratioY: 1,
      _captionShow: !0,
      _captionChecked: !1,
      _caption: null,
      captionCheckEl: null
    };
    let l = this.setDialog(e);
    n.modal = l, n.imgInputFile = l.querySelector("._se_image_file"), n.imgUrlFile = l.querySelector("._se_image_url"), n.focusElement = n.imgInputFile || n.imgUrlFile, n.altText = l.querySelector("._se_image_alt"), n.captionCheckEl = l.querySelector("._se_image_check_caption"), n.previewSrc = l.querySelector("._se_tab_content_image .se-link-preview"), l.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), n.imgInputFile && l.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(n.imgInputFile, n.imgUrlFile, n.previewSrc)), n.imgUrlFile && n.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(n.previewSrc, n._v_src, t.linkProtocol)), n.imgInputFile && n.imgUrlFile && n.imgInputFile.addEventListener("change", this._fileInputChange.bind(n));
    const s = l.querySelector(".__se__gallery");
    s && s.addEventListener("click", this._openGallery.bind(e)), n.proportion = {}, n.inputX = {}, n.inputY = {}, t.imageResizing && (n.proportion = l.querySelector("._se_image_check_proportion"), n.inputX = l.querySelector("._se_image_size_x"), n.inputY = l.querySelector("._se_image_size_y"), n.inputX.value = t.imageWidth, n.inputY.value = t.imageHeight, n.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), n.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), n.inputX.addEventListener("change", this.setRatio.bind(e)), n.inputY.addEventListener("change", this.setRatio.bind(e)), n.proportion.addEventListener("change", this.setRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(l), e.plugins.anchor.initEvent.call(e, "image", l.querySelector("._se_tab_content_url")), n.anchorCtx = e.context.anchor.caller.image, l = null;
  },
  setDialog: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-dialog-content se-dialog-image", n.style.display = "none";
    let l = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + i.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + i.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + i.toolbar.imageGallery + '" aria-label="' + i.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-form"><label>' + i.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const s = t.imageSizeOnlyPercentage, o = s ? ' style="display: none !important;"' : "", a = t.imageHeightShow ? "" : ' style="display: none !important;"';
      l += '<div class="se-dialog-form">', s || !t.imageHeightShow ? l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", l += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (s ? ' type="number" min="1"' : 'type="text"') + (s ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + a + ">" + (s ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + o + (s ? ' max="100"' : "") + a + "/><label" + o + a + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
    }
    return l += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + i.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none">' + e.context.anchor.forms.innerHTML + '</div><div class="se-dialog-footer"><div' + (t.imageAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = l, n;
  },
  _fileInputChange: function() {
    this.imgInputFile.value ? (this.imgUrlFile.setAttribute("disabled", !0), this.previewSrc.style.textDecoration = "line-through") : (this.imgUrlFile.removeAttribute("disabled"), this.previewSrc.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _openGallery: function() {
    this.callPlugin("imageGallery", this.plugins.imageGallery.open.bind(this, this.plugins.image._setUrlInput.bind(this.context.image)), null);
  },
  _setUrlInput: function(e) {
    this.altText.value = e.alt, this._v_src._linkValue = this.previewSrc.textContent = this.imgUrlFile.value = e.src, this.imgUrlFile.focus();
  },
  _onLinkPreview: function(e, t, i) {
    const n = i.target.value.trim();
    e._linkValue = this.textContent = n ? t && n.indexOf("://") === -1 && n.indexOf("#") !== 0 ? t + n : n.indexOf("://") === -1 ? "/" + n : n : "";
  },
  fileTags: ["img"],
  select: function(e) {
    this.plugins.image.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "image"));
  },
  destroy: function(e) {
    const t = e || this.context.image._element, i = this.util.getParentElement(t, this.util.isMediaComponent) || t, n = t.getAttribute("data-index") * 1;
    let l = i.previousElementSibling || i.nextElementSibling;
    const s = i.parentNode;
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), s !== this.context.element.wysiwyg && this.util.removeItemAllParents(s, function(o) {
      return o.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "image", n, this.functions.onImageUpload), this.history.push(!1);
  },
  on: function(e) {
    const t = this.context.image;
    e ? t.imgInputFile && this.options.imageMultipleFile && t.imgInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.options.imageWidth === t._defaultSizeX ? "" : this.options.imageWidth, t.inputY.value = t._origin_h = this.options.imageHeight === t._defaultSizeY ? "" : this.options.imageHeight, t.imgInputFile && this.options.imageMultipleFile && t.imgInputFile.setAttribute("multiple", "multiple")), this.plugins.anchor.on.call(this, t.anchorCtx, e);
  },
  open: function() {
    this.plugins.dialog.open.call(this, "image", this.currentControllerName === "image");
  },
  openTab: function(e) {
    const t = this.context.image.modal, i = e === "init" ? t.querySelector("._se_tab_link") : e.target;
    if (!/^BUTTON$/i.test(i.tagName))
      return !1;
    const n = i.getAttribute("data-tab-link"), l = "_se_tab_content";
    let s, o, a;
    for (o = t.getElementsByClassName(l), s = 0; s < o.length; s++)
      o[s].style.display = "none";
    for (a = t.getElementsByClassName("_se_tab_link"), s = 0; s < a.length; s++)
      this.util.removeClass(a[s], "active");
    return t.querySelector("." + l + "_" + n).style.display = "block", this.util.addClass(i, "active"), n === "image" && this.context.image.focusElement ? this.context.image.focusElement.focus() : n === "url" && this.context.anchor.caller.image.urlInput.focus(), !1;
  },
  submit: function(e) {
    const t = this.context.image, i = this.plugins.image;
    e.preventDefault(), e.stopPropagation(), t._altText = t.altText.value, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked, t._resizing && (t._proportionChecked = t.proportion.checked);
    try {
      this.context.dialog.updateModal && i.update_image.call(this, !1, !0, !1), t.imgInputFile && t.imgInputFile.files.length > 0 ? (this.showLoading(), i.submitAction.call(this, this.context.image.imgInputFile.files)) : t.imgUrlFile && t._v_src._linkValue.length > 0 && (this.showLoading(), i.onRender_imgUrl.call(this, t._v_src._linkValue));
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.submit.fail] cause : "' + n.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0)
      return;
    let t = 0, i = [];
    for (let a = 0, r = e.length; a < r; a++)
      /image/i.test(e[a].type) && (i.push(e[a]), t += e[a].size);
    const n = this.options.imageUploadSizeLimit;
    if (n > 0) {
      let a = 0;
      const r = this.context.image._infoList;
      for (let u = 0, c = r.length; u < c; u++)
        a += r[u].size * 1;
      if (t + a > n) {
        this.closeLoading();
        const u = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + n / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(u, { limitSize: n, currentSize: a, uploadSize: t }, this)) && this.functions.noticeOpen(u);
        return;
      }
    }
    const l = this.context.image;
    l._uploadFileLength = i.length;
    const o = {
      anchor: this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0),
      inputWidth: l.inputX.value,
      inputHeight: l.inputY.value,
      align: l._align,
      isUpdate: this.context.dialog.updateModal,
      alt: l._altText,
      element: l._element
    };
    if (typeof this.functions.onImageUploadBefore == "function") {
      const a = this.functions.onImageUploadBefore(i, o, this, function(r) {
        r && this._w.Array.isArray(r.result) ? this.plugins.image.register.call(this, o, r) : this.plugins.image.upload.call(this, o, r);
      }.bind(this));
      if (typeof a > "u")
        return;
      if (!a) {
        this.closeLoading();
        return;
      }
      this._w.Array.isArray(a) && a.length > 0 && (i = a);
    }
    this.plugins.image.upload.call(this, o, i);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.image.error] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.image.error.call(this, t, null);
      return;
    }
    const i = this.options.imageUploadUrl, n = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const l = new FormData();
      for (let s = 0; s < n; s++)
        l.append("file-" + s, t[s]);
      this.plugins.fileManager.upload.call(this, i, this.options.imageUploadHeader, l, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError);
    } else
      this.plugins.image.setup_reader.call(this, t, e.anchor, e.inputWidth, e.inputHeight, e.align, e.alt, n, e.isUpdate);
  },
  callBack_imgUpload: function(e, t) {
    if (typeof this.functions.imageUploadHandler == "function")
      this.functions.imageUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.image.error.call(this, i.errorMessage, i) : this.plugins.image.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result;
    for (let n = 0, l = i.length, s; n < l; n++)
      if (s = { name: i[n].name, size: i[n].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, i[n].url, e.element, s);
        break;
      } else
        this.plugins.image.create_image.call(this, i[n].url, e.anchor, e.inputWidth, e.inputHeight, e.align, s, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, i, n, l, s, o, a) {
    try {
      this.context.image.base64RenderIndex = o;
      const r = this._w.FileReader, u = [o];
      this.context.image.inputX.value = i, this.context.image.inputY.value = n;
      for (let c = 0, f, d; c < o; c++)
        f = new r(), d = e[c], f.onload = function(m, h, b, g, p) {
          u[p] = { result: m.result, file: g }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, h, u, b, t, i, n, l, s), this.closeLoading());
        }.bind(this, f, a, this.context.image._element, d, c), f.readAsDataURL(d);
    } catch (r) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + r.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, n, l, s, o, a) {
    const r = this.plugins.image.update_src, u = this.plugins.image.create_image;
    for (let c = 0, f = t.length; c < f; c++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[c].file.name), this.context.image._element.setAttribute("data-file-size", t[c].file.size), r.call(this, t[c].result, i, t[c].file)) : u.call(this, t[c].result, n, l, s, o, t[c].file, a);
  },
  onRender_imgUrl: function(e) {
    if (e || (e = this.context.image._v_src._linkValue), !e)
      return !1;
    const t = this.context.image;
    try {
      const i = { name: e.split("/").pop(), size: 0 };
      this.context.dialog.updateModal ? this.plugins.image.update_src.call(this, e, t._element, i) : this.plugins.image.create_image.call(this, e, this.plugins.anchor.createAnchor.call(this, t.anchorCtx, !0), t.inputX.value, t.inputY.value, t._align, i, t._altText);
    } catch (i) {
      throw Error('[SUNEDITOR.image.URLRendering.fail] cause : "' + i.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  onRender_link: function(e, t) {
    return t ? (t.setAttribute("data-image-link", "image"), e.setAttribute("data-image-link", t.href), t.appendChild(e), t) : e;
  },
  setInputSize: function(e, t) {
    if (t && t.keyCode === 32) {
      t.preventDefault();
      return;
    }
    this.plugins.resizing._module_setInputSize.call(this, this.context.image, e);
  },
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.image);
  },
  checkFileInfo: function() {
    const e = this.plugins.image, t = this.context.image, i = function(n) {
      e.onModifyMode.call(this, n, null), e.openModify.call(this, !0), t.inputX.value = t._origin_w, t.inputY.value = t._origin_h;
      const l = this.util.getFormatElement(n);
      l && (t._align = l.style.textAlign || l.style.float), this.util.isAnchor(n.parentNode) && !t.anchorCtx.linkValue && (t.anchorCtx.linkValue = " "), e.update_image.call(this, !0, !1, !0), e.init.call(this);
    }.bind(this);
    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, i, !0);
  },
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload);
  },
  create_image: function(e, t, i, n, l, s, o) {
    const a = this.plugins.image, r = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let u = this.util.createElement("IMG");
    u.src = e, u.alt = o, u.setAttribute("data-rotate", "0"), t = a.onRender_link.call(this, u, t ? t.cloneNode(!1) : null), r._resizing && u.setAttribute("data-proportion", r._proportionChecked);
    const c = this.plugins.component.set_cover.call(this, t), f = this.plugins.component.set_container.call(this, c, "se-image-container");
    r._captionChecked && (r._caption = this.plugins.component.create_caption.call(this), c.appendChild(r._caption)), r._element = u, r._cover = c, r._container = f, a.applySize.call(this, i, n), a.setAlign.call(this, l, u, c, f), u.onload = a._image_create_onload.bind(this, u, r.svgDefaultSize, f), this.insertComponent(f, !0, !0, !0) && this.plugins.fileManager.setInfo.call(this, "image", u, this.functions.onImageUpload, s, !0), this.context.resizing._resize_plugin = "";
  },
  _image_create_onload: function(e, t, i) {
    if (e.offsetWidth === 0 && this.plugins.image.applySize.call(this, t, ""), this.options.mediaAutoSelect)
      this.selectComponent(e, "image");
    else {
      const n = this.appendFormatTag(i, null);
      n && this.setRange(n, 0, n, 0);
    }
  },
  update_image: function(e, t, i) {
    const n = this.context.image;
    let l = n._element, s = n._cover, o = n._container, a = !1;
    s === null && (a = !0, l = n._element.cloneNode(!0), s = this.plugins.component.set_cover.call(this, l)), o === null ? (s = s.cloneNode(!0), l = s.querySelector("img"), a = !0, o = this.plugins.component.set_container.call(this, s, "se-image-container")) : a && (o.innerHTML = "", o.appendChild(s), n._cover = s, n._element = l, a = !1);
    let r;
    const u = this.util.isNumber(n.inputX.value) ? n.inputX.value + n.sizeUnit : n.inputX.value, c = this.util.isNumber(n.inputY.value) ? n.inputY.value + n.sizeUnit : n.inputY.value;
    /%$/.test(l.style.width) ? r = u !== o.style.width || c !== o.style.height : r = u !== l.style.width || c !== l.style.height, l.alt = n._altText;
    let f = !1;
    n._captionChecked ? n._caption || (n._caption = this.plugins.component.create_caption.call(this), s.appendChild(n._caption), f = !0) : n._caption && (this.util.removeItem(n._caption), n._caption = null, f = !0);
    let d = null;
    const m = this.plugins.anchor.createAnchor.call(this, n.anchorCtx, !0);
    if (m)
      n._linkElement !== m || a && !o.contains(m) ? (n._linkElement = m.cloneNode(!1), s.insertBefore(this.plugins.image.onRender_link.call(this, l, n._linkElement), n._caption), d = n._element) : n._linkElement.setAttribute("data-image-link", "image");
    else if (n._linkElement !== null) {
      const b = l;
      if (b.setAttribute("data-image-link", ""), s.contains(n._linkElement)) {
        const g = b.cloneNode(!0);
        s.removeChild(n._linkElement), s.insertBefore(g, n._caption), n._element = l = g;
      }
    }
    let h = null;
    if (a) {
      if (h = this.util.isRangeFormatElement(n._element.parentNode) || this.util.isWysiwygDiv(n._element.parentNode) ? n._element : this.util.isAnchor(n._element.parentNode) ? n._element.parentNode : this.util.getFormatElement(n._element) || n._element, this.util.getParentElement(n._element, this.util.isNotCheckingNode))
        h = d ? m : n._element, h.parentNode.replaceChild(o, h);
      else if (this.util.isListCell(h)) {
        const b = this.util.getParentElement(n._element, function(g) {
          return g.parentNode === h;
        });
        h.insertBefore(o, b), this.util.removeItem(n._element), this.util.removeEmptyNode(b, null, !0);
      } else if (this.util.isFormatElement(h)) {
        const b = this.util.getParentElement(n._element, function(g) {
          return g.parentNode === h;
        });
        h = this.util.splitElement(h, b), h.parentNode.insertBefore(o, h), this.util.removeItem(n._element), this.util.removeEmptyNode(h, null, !0), h.children.length === 0 && (h.innerHTML = this.util.htmlRemoveWhiteSpace(h.innerHTML));
      } else if (this.util.isFormatElement(h.parentNode)) {
        const b = h.parentNode;
        b.parentNode.insertBefore(o, h.previousSibling ? b.nextElementSibling : b), n.__updateTags.map(function(g) {
          return h.contains(g);
        }).length === 0 && this.util.removeItem(h);
      } else
        h.parentNode.replaceChild(o, h);
      l = o.querySelector("img"), n._element = l, n._cover = s, n._container = o;
    }
    d && (a ? (this.util.removeItem(d), this.util.getListChildren(m, function(b) {
      return /IMG/i.test(b.tagName);
    }).length === 0 && this.util.removeItem(m)) : this.util.removeItem(m)), (f || !n._onlyPercentage && r) && !e && (/\d+/.test(l.style.height) || this.context.resizing._rotateVertical && n._captionChecked) && (/%$/.test(n.inputX.value) || /%$/.test(n.inputY.value) ? this.plugins.resizing.resetTransform.call(this, l) : this.plugins.resizing.setTransformSize.call(this, l, this.util.getNumber(n.inputX.value, 0), this.util.getNumber(n.inputY.value, 0))), n._resizing && (l.setAttribute("data-proportion", n._proportionChecked), r && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, l, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", l, this.functions.onImageUpload, null, !0), t && this.selectComponent(l, "image"), i || this.history.push(!1);
  },
  update_src: function(e, t, i) {
    t.src = e, this._w.setTimeout(this.plugins.fileManager.setInfo.bind(this, "image", t, this.functions.onImageUpload, i, !0)), this.selectComponent(t, "image");
  },
  onModifyMode: function(e, t) {
    if (!e)
      return;
    const i = this.context.image;
    i._linkElement = i.anchorCtx.linkAnchor = this.util.isAnchor(e.parentNode) ? e.parentNode : null, i._element = e, i._cover = this.util.getParentElement(e, "FIGURE"), i._container = this.util.getParentElement(e, this.util.isMediaComponent), i._caption = this.util.getChildElement(i._cover, "FIGCAPTION"), i._align = e.getAttribute("data-align") || e.style.float || "none", e.style.float = "", this.plugins.anchor.setCtx(i._linkElement, i.anchorCtx), t && (i._element_w = t.w, i._element_h = t.h, i._element_t = t.t, i._element_l = t.l);
    let n = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), l, s;
    n ? (n = n.split(","), l = n[0], s = n[1]) : t && (l = t.w, s = t.h), i._origin_w = l || e.style.width || e.width || "", i._origin_h = s || e.style.height || e.height || "";
  },
  openModify: function(e) {
    const t = this.context.image;
    t.imgUrlFile && (t._v_src._linkValue = t.previewSrc.textContent = t.imgUrlFile.value = t._element.src), t._altText = t.altText.value = t._element.alt, (t.modal.querySelector('input[name="suneditor_image_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_image_radio"][value="none"]')).checked = !0, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked = !!t._caption, t._resizing && this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.image), e || this.plugins.dialog.open.call(this, "image", !0);
  },
  applySize: function(e, t) {
    const i = this.context.image;
    return e || (e = i.inputX.value || this.options.imageWidth), t || (t = i.inputY.value || this.options.imageHeight), i._onlyPercentage && !!e || /%$/.test(e) ? (this.plugins.image.setPercentSize.call(this, e, t), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.image.setAutoSize.call(this) : this.plugins.image.setSize.call(this, e, t, !1), !1);
  },
  sizeRevert: function() {
    this.plugins.resizing._module_sizeRevert.call(this, this.context.image);
  },
  setSize: function(e, t, i, n) {
    const l = this.context.image, s = /^(rw|lw)$/.test(n) && /\d+/.test(l._element.style.height);
    /^(th|bh)$/.test(n) && /\d+/.test(l._element.style.width) || (l._element.style.width = this.util.isNumber(e) ? e + l.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), s || (l._element.style.height = this.util.isNumber(t) ? t + l.sizeUnit : /%$/.test(t) ? "" : t), l._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
  },
  setAutoSize: function() {
    const e = this.context.image;
    e._caption && (e._caption.style.marginTop = ""), this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this), e._element.style.maxWidth = "", e._element.style.width = "", e._element.style.height = "", e._cover.style.width = "", e._cover.style.height = "", this.plugins.image.setAlign.call(this, null, null, null, null), e._element.setAttribute("data-percentage", "auto,auto"), this.plugins.resizing._module_saveCurrentSize.call(this, e);
  },
  setOriginSize: function() {
    const e = this.context.image;
    e._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this);
    const t = (e._element.getAttribute("data-origin") || "").split(","), i = t[0], n = t[1];
    t && (e._onlyPercentage || /%$/.test(i) && (/%$/.test(n) || !/\d/.test(n)) ? this.plugins.image.setPercentSize.call(this, i, n) : this.plugins.image.setSize.call(this, i, n), this.plugins.resizing._module_saveCurrentSize.call(this, e));
  },
  setPercentSize: function(e, t) {
    const i = this.context.image;
    t = !!t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + i.sizeUnit : t || "";
    const n = /%$/.test(t);
    i._container.style.width = this.util.isNumber(e) ? e + "%" : e, i._container.style.height = "", i._cover.style.width = "100%", i._cover.style.height = n ? t : "", i._element.style.width = "100%", i._element.style.height = n ? "" : t, i._element.style.maxWidth = "", i._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing.setCaptionPosition.call(this, i._element), this.plugins.resizing._module_saveCurrentSize.call(this, i);
  },
  cancelPercentAttr: function() {
    const e = this.context.image;
    e._cover.style.width = "", e._cover.style.height = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.image._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), e._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null);
  },
  setAlign: function(e, t, i, n) {
    const l = this.context.image;
    e || (e = l._align), t || (t = l._element), i || (i = l._cover), n || (n = l._container), /%$/.test(t.style.width) && e === "center" ? (n.style.minWidth = "100%", i.style.width = n.style.width) : (n.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : !t.style.width || t.style.width === "auto" ? "" : t.style.width || "100%"), this.util.hasClass(n, "__se__float-" + e) || (this.util.removeClass(n, l._floatClassRegExp), this.util.addClass(n, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  init: function() {
    const e = this.context.image;
    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.options.imageWidth === e._defaultSizeX ? "" : this.options.imageWidth, e.inputY.value = this.options.imageHeight === e._defaultSizeY ? "" : this.options.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1), this.plugins.anchor.init.call(this, e.anchorCtx);
  }
}, Ya = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([Xe, Jt, Nn, Zt]);
    const t = e.options, i = e.context, n = i.video = {
      _infoList: [],
      _infoIndex: 0,
      _uploadFileLength: 0,
      focusElement: null,
      sizeUnit: t._videoSizeUnit,
      _align: "none",
      _floatClassRegExp: "__se__float\\-[a-z]+",
      _youtubeQuery: t.youtubeQuery,
      _videoRatio: t.videoRatio * 100 + "%",
      _defaultRatio: t.videoRatio * 100 + "%",
      _linkValue: "",
      _element: null,
      _cover: null,
      _container: null,
      inputX: null,
      inputY: null,
      _element_w: 1,
      _element_h: 1,
      _element_l: 0,
      _element_t: 0,
      _defaultSizeX: "100%",
      _defaultSizeY: t.videoRatio * 100 + "%",
      _origin_w: t.videoWidth === "100%" ? "" : t.videoWidth,
      _origin_h: t.videoHeight === "56.25%" ? "" : t.videoHeight,
      _proportionChecked: !0,
      _resizing: t.videoResizing,
      _resizeDotHide: !t.videoHeightShow,
      _rotation: t.videoRotation,
      _alignHide: !t.videoAlignShow,
      _onlyPercentage: t.videoSizeOnlyPercentage,
      _ratio: !1,
      _ratioX: 1,
      _ratioY: 1,
      _captionShow: !1
    };
    let l = this.setDialog(e);
    n.modal = l, n.videoInputFile = l.querySelector("._se_video_file"), n.videoUrlFile = l.querySelector(".se-input-url"), n.focusElement = n.videoUrlFile || n.videoInputFile, n.preview = l.querySelector(".se-link-preview"), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), n.videoInputFile && l.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(n.videoInputFile, n.videoUrlFile, n.preview)), n.videoInputFile && n.videoUrlFile && n.videoInputFile.addEventListener("change", this._fileInputChange.bind(n)), n.videoUrlFile && n.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(n.preview, n, t.linkProtocol)), n.proportion = {}, n.videoRatioOption = {}, n.inputX = {}, n.inputY = {}, t.videoResizing && (n.proportion = l.querySelector("._se_video_check_proportion"), n.videoRatioOption = l.querySelector(".se-video-ratio"), n.inputX = l.querySelector("._se_video_size_x"), n.inputY = l.querySelector("._se_video_size_y"), n.inputX.value = t.videoWidth, n.inputY.value = t.videoHeight, n.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), n.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), n.inputX.addEventListener("change", this.setRatio.bind(e)), n.inputY.addEventListener("change", this.setRatio.bind(e)), n.proportion.addEventListener("change", this.setRatio.bind(e)), n.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(l), l = null;
  },
  setDialog: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-dialog-content", n.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
    if (t.videoFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="' + t.videoAccept + '"' + (t.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.videoUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), t.videoResizing) {
      const s = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], o = t.videoRatio, a = t.videoSizeOnlyPercentage, r = a ? ' style="display: none !important;"' : "", u = t.videoHeightShow ? "" : ' style="display: none !important;"', c = t.videoRatioShow ? "" : ' style="display: none !important;"', f = !a && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      l += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + u + ">" + i.dialogBox.height + '</label><label class="size-h"' + c + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (a ? ' type="number" min="1"' : 'type="text"') + (a ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + f + ">" + (a ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (a ? ' type="number" min="1"' : 'type="text"') + (a ? ' max="100"' : "") + u + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + c + ">", u || (l += '<option value=""> - </option>');
      for (let d = 0, m = s.length; d < m; d++)
        l += '<option value="' + s[d].value + '"' + (o.toString() === s[d].value.toString() ? " selected" : "") + ">" + s[d].name + "</option>";
      l += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + r + f + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
    }
    return l += '</div><div class="se-dialog-footer"><div' + (t.videoAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = l, n;
  },
  _fileInputChange: function() {
    this.videoInputFile.value ? (this.videoUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.videoUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _onLinkPreview: function(e, t, i) {
    const n = i.target.value.trim();
    /^<iframe.*\/iframe>$/.test(n) ? (e._linkValue = n, this.textContent = '<IFrame :src=".."></IFrame>') : e._linkValue = this.textContent = n ? t && n.indexOf("://") === -1 && n.indexOf("#") !== 0 ? t + n : n.indexOf("://") === -1 ? "/" + n : n : "";
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.videoTagAttrs;
    if (!!t)
      for (let i in t)
        !this.util.hasOwn(t, i) || e.setAttribute(i, t[i]);
  },
  createVideoTag: function() {
    const e = this.util.createElement("VIDEO");
    return this.plugins.video._setTagAttrs.call(this, e), e;
  },
  _setIframeAttrs: function(e) {
    e.frameBorder = "0", e.allowFullscreen = !0;
    const t = this.options.videoIframeAttrs;
    if (!!t)
      for (let i in t)
        !this.util.hasOwn(t, i) || e.setAttribute(i, t[i]);
  },
  createIframeTag: function() {
    const e = this.util.createElement("IFRAME");
    return this.plugins.video._setIframeAttrs.call(this, e), e;
  },
  fileTags: ["iframe", "video"],
  select: function(e) {
    this.plugins.video.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "video"));
  },
  destroy: function(e) {
    const t = e || this.context.video._element, i = this.context.video._container, n = t.getAttribute("data-index") * 1;
    let l = i.previousElementSibling || i.nextElementSibling;
    const s = i.parentNode;
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), s !== this.context.element.wysiwyg && this.util.removeItemAllParents(s, function(o) {
      return o.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "video", n, this.functions.onVideoUpload), this.history.push(!1);
  },
  on: function(e) {
    const t = this.context.video;
    e ? t.videoInputFile && this.options.videoMultipleFile && t.videoInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.options.videoWidth === t._defaultSizeX ? "" : this.options.videoWidth, t.inputY.value = t._origin_h = this.options.videoHeight === t._defaultSizeY ? "" : this.options.videoHeight, t.proportion.disabled = !0, t.videoInputFile && this.options.videoMultipleFile && t.videoInputFile.setAttribute("multiple", "multiple")), t._resizing && this.plugins.video.setVideoRatioSelect.call(this, t._origin_h || t._defaultRatio);
  },
  open: function() {
    this.plugins.dialog.open.call(this, "video", this.currentControllerName === "video");
  },
  setVideoRatio: function(e) {
    const t = this.context.video, i = e.target.options[e.target.selectedIndex].value;
    t._defaultSizeY = t._videoRatio = i ? i * 100 + "%" : t._defaultSizeY, t.inputY.placeholder = i ? i * 100 + "%" : "", t.inputY.value = "";
  },
  setInputSize: function(e, t) {
    if (t && t.keyCode === 32) {
      t.preventDefault();
      return;
    }
    const i = this.context.video;
    this.plugins.resizing._module_setInputSize.call(this, i, e), e === "y" && this.plugins.video.setVideoRatioSelect.call(this, t.target.value || i._defaultRatio);
  },
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.video);
  },
  submit: function(e) {
    const t = this.context.video, i = this.plugins.video;
    e.preventDefault(), e.stopPropagation(), t._align = t.modal.querySelector('input[name="suneditor_video_radio"]:checked').value;
    try {
      t.videoInputFile && t.videoInputFile.files.length > 0 ? (this.showLoading(), i.submitAction.call(this, this.context.video.videoInputFile.files)) : t.videoUrlFile && t._linkValue.length > 0 && (this.showLoading(), i.setup_url.call(this, t._linkValue));
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.video.submit.fail] cause : "' + n.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0)
      return;
    let t = 0, i = [];
    for (let o = 0, a = e.length; o < a; o++)
      /video/i.test(e[o].type) && (i.push(e[o]), t += e[o].size);
    const n = this.options.videoUploadSizeLimit;
    if (n > 0) {
      let o = 0;
      const a = this.context.video._infoList;
      for (let r = 0, u = a.length; r < u; r++)
        o += a[r].size * 1;
      if (t + o > n) {
        this.closeLoading();
        const r = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + n / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(r, { limitSize: n, currentSize: o, uploadSize: t }, this)) && this.functions.noticeOpen(r);
        return;
      }
    }
    const l = this.context.video;
    l._uploadFileLength = i.length;
    const s = {
      inputWidth: l.inputX.value,
      inputHeight: l.inputY.value,
      align: l._align,
      isUpdate: this.context.dialog.updateModal,
      element: l._element
    };
    if (typeof this.functions.onVideoUploadBefore == "function") {
      const o = this.functions.onVideoUploadBefore(i, s, this, function(a) {
        a && this._w.Array.isArray(a.result) ? this.plugins.video.register.call(this, s, a) : this.plugins.video.upload.call(this, s, a);
      }.bind(this));
      if (typeof o > "u")
        return;
      if (!o) {
        this.closeLoading();
        return;
      }
      typeof o == "object" && o.length > 0 && (i = o);
    }
    this.plugins.video.upload.call(this, s, i);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.video.error] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.video.error.call(this, t, null);
      return;
    }
    const i = this.options.videoUploadUrl, n = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const l = new FormData();
      for (let s = 0; s < n; s++)
        l.append("file-" + s, t[s]);
      this.plugins.fileManager.upload.call(this, i, this.options.videoUploadHeader, l, this.plugins.video.callBack_videoUpload.bind(this, e), this.functions.onVideoUploadError);
    } else
      throw Error('[SUNEDITOR.videoUpload.fail] cause : There is no "videoUploadUrl" option.');
  },
  callBack_videoUpload: function(e, t) {
    if (typeof this.functions.videoUploadHandler == "function")
      this.functions.videoUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.video.error.call(this, i.errorMessage, i) : this.plugins.video.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result, n = this.plugins.video.createVideoTag.call(this);
    for (let l = 0, s = i.length, o; l < s; l++)
      o = { name: i[l].name, size: i[l].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : n.cloneNode(!1), i[l].url, e.inputWidth, e.inputHeight, e.align, o, e.isUpdate);
    this.closeLoading();
  },
  setup_url: function(e) {
    try {
      const t = this.context.video;
      if (e || (e = t._linkValue), !e || /^<iframe.*\/iframe>$/.test(e) && (e = new this._w.DOMParser().parseFromString(e, "text/html").querySelector("iframe").src, e.length === 0))
        return !1;
      if (/youtu\.?be/.test(e)) {
        if (/^http/.test(e) || (e = "https://" + e), e = e.replace("watch?v=", ""), /^\/\/.+\/embed\//.test(e) || (e = e.replace(e.match(/\/\/.+\//)[0], "//www.youtube.com/embed/").replace("&", "?&")), t._youtubeQuery.length > 0)
          if (/\?/.test(e)) {
            const i = e.split("?");
            e = i[0] + "?" + t._youtubeQuery + "&" + i[1];
          } else
            e += "?" + t._youtubeQuery;
      } else
        /vimeo\.com/.test(e) && (e.endsWith("/") && (e = e.slice(0, -1)), e = "https://player.vimeo.com/video/" + e.slice(e.lastIndexOf("/") + 1));
      this.plugins.video.create_video.call(this, this.plugins.video[!/embed|iframe|player|\/e\/|\.php|\.html?/.test(e) && !/vimeo\.com/.test(e) ? "createVideoTag" : "createIframeTag"].call(this), e, t.inputX.value, t.inputY.value, t._align, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.video.upload.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_video: function(e, t, i, n, l, s, o) {
    this.context.resizing._resize_plugin = "video";
    const a = this.context.video;
    let r = null, u = null, c = !1;
    if (o) {
      if (e = a._element, e.src !== t) {
        c = !0;
        const b = /youtu\.?be/.test(t), g = /vimeo\.com/.test(t);
        if ((b || g) && !/^iframe$/i.test(e.nodeName)) {
          const p = this.plugins.video.createIframeTag.call(this);
          p.src = t, e.parentNode.replaceChild(p, e), a._element = e = p;
        } else if (!b && !g && !/^videoo$/i.test(e.nodeName)) {
          const p = this.plugins.video.createVideoTag.call(this);
          p.src = t, e.parentNode.replaceChild(p, e), a._element = e = p;
        } else
          e.src = t;
      }
      u = a._container, r = this.util.getParentElement(e, "FIGURE");
    } else
      c = !0, e.src = t, a._element = e, r = this.plugins.component.set_cover.call(this, e), u = this.plugins.component.set_container.call(this, r, "se-video-container");
    a._cover = r, a._container = u;
    const f = this.plugins.resizing._module_getSizeX.call(this, a) !== (i || a._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, a) !== (n || a._videoRatio), d = !o || f;
    a._resizing && (this.context.video._proportionChecked = a.proportion.checked, e.setAttribute("data-proportion", a._proportionChecked));
    let m = !1;
    d && (m = this.plugins.video.applySize.call(this)), m && l === "center" || this.plugins.video.setAlign.call(this, null, e, r, u);
    let h = !0;
    if (o)
      a._resizing && this.context.resizing._rotateVertical && d && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (h = this.insertComponent(u, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const b = this.appendFormatTag(u, null);
      b && this.setRange(b, 0, b, 0);
    }
    h && (c && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, s, !0), o && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e)
      return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const n = e;
    t._element = e = e.cloneNode(!0);
    const l = t._cover = this.plugins.component.set_cover.call(this, e), s = t._container = this.plugins.component.set_container.call(this, l, "se-video-container");
    try {
      const o = i.querySelector("figcaption");
      let a = null;
      o && (a = this.util.createElement("DIV"), a.innerHTML = o.innerHTML, this.util.removeItem(o));
      const r = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, r[0] || n.style.width || n.width || "", r[1] || n.style.height || n.height || "");
      const u = this.util.getFormatElement(n);
      if (u && (t._align = u.style.textAlign || u.style.float), this.plugins.video.setAlign.call(this, null, e, l, s), this.util.getParentElement(n, this.util.isNotCheckingNode))
        n.parentNode.replaceChild(s, n);
      else if (this.util.isListCell(i)) {
        const c = this.util.getParentElement(n, function(f) {
          return f.parentNode === i;
        });
        i.insertBefore(s, c), this.util.removeItem(n), this.util.removeEmptyNode(c, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const c = this.util.getParentElement(n, function(f) {
          return f.parentNode === i;
        });
        i = this.util.splitElement(i, c), i.parentNode.insertBefore(s, i), this.util.removeItem(n), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(s, i);
      a && i.parentNode.insertBefore(a, s.nextElementSibling);
    } catch (o) {
      console.warn("[SUNEDITOR.video.error] Maybe the video tag is nested.", o);
    }
    this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, null, !0), this.plugins.video.init.call(this);
  },
  onModifyMode: function(e, t) {
    const i = this.context.video;
    i._element = e, i._cover = this.util.getParentElement(e, "FIGURE"), i._container = this.util.getParentElement(e, this.util.isMediaComponent), i._align = e.style.float || e.getAttribute("data-align") || "none", e.style.float = "", t && (i._element_w = t.w, i._element_h = t.h, i._element_t = t.t, i._element_l = t.l);
    let n = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), l, s;
    n ? (n = n.split(","), l = n[0], s = n[1]) : t && (l = t.w, s = t.h), i._origin_w = l || e.style.width || e.width || "", i._origin_h = s || e.style.height || e.height || "";
  },
  openModify: function(e) {
    const t = this.context.video;
    if (t.videoUrlFile && (t._linkValue = t.preview.textContent = t.videoUrlFile.value = t._element.src || (t._element.querySelector("source") || "").src || ""), (t.modal.querySelector('input[name="suneditor_video_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_video_radio"][value="none"]')).checked = !0, t._resizing) {
      this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.video);
      const i = t._videoRatio = this.plugins.resizing._module_getSizeY.call(this, t);
      this.plugins.video.setVideoRatioSelect.call(this, i) || (t.inputY.value = t._onlyPercentage ? this.util.getNumber(i, 2) : i);
    }
    e || this.plugins.dialog.open.call(this, "video", !0);
  },
  setVideoRatioSelect: function(e) {
    let t = !1;
    const i = this.context.video, n = i.videoRatioOption.options;
    /%$/.test(e) || i._onlyPercentage ? e = this.util.getNumber(e, 2) / 100 + "" : (!this.util.isNumber(e) || e * 1 >= 1) && (e = ""), i.inputY.placeholder = "";
    for (let l = 0, s = n.length; l < s; l++)
      n[l].value === e ? (t = n[l].selected = !0, i.inputY.placeholder = e ? e * 100 + "%" : "") : n[l].selected = !1;
    return t;
  },
  checkFileInfo: function() {
    this.plugins.fileManager.checkInfo.call(this, "video", ["iframe", "video"], this.functions.onVideoUpload, this.plugins.video._update_videoCover.bind(this), !0);
  },
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "video", this.functions.onVideoUpload);
  },
  applySize: function(e, t) {
    const i = this.context.video;
    return e || (e = i.inputX.value || this.options.videoWidth), t || (t = i.inputY.value || this.options.videoHeight), i._onlyPercentage || /%$/.test(e) || !e ? (this.plugins.video.setPercentSize.call(this, e || "100%", t || (/%$/.test(i._videoRatio) ? i._videoRatio : i._defaultRatio)), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.video.setAutoSize.call(this) : this.plugins.video.setSize.call(this, e, t || i._videoRatio || i._defaultRatio, !1), !1);
  },
  sizeRevert: function() {
    this.plugins.resizing._module_sizeRevert.call(this, this.context.video);
  },
  setSize: function(e, t, i, n) {
    const l = this.context.video, s = /^(rw|lw)$/.test(n), o = /^(th|bh)$/.test(n);
    o || (e = this.util.getNumber(e, 0)), s || (t = this.util.isNumber(t) ? t + l.sizeUnit : t || ""), e = e ? e + l.sizeUnit : "", o || (l._element.style.width = e), s || (l._cover.style.paddingBottom = l._cover.style.height = t), !o && !/%$/.test(e) && (l._cover.style.width = e, l._container.style.width = ""), !s && !/%$/.test(t) ? l._element.style.height = t : l._element.style.height = "", i || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
  },
  setAutoSize: function() {
    this.plugins.video.setPercentSize.call(this, 100, this.context.video._defaultRatio);
  },
  setOriginSize: function(e) {
    const t = this.context.video;
    t._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, t._element), this.plugins.video.cancelPercentAttr.call(this);
    const i = ((e ? t._element.getAttribute("data-size") : "") || t._element.getAttribute("data-origin") || "").split(",");
    if (i) {
      const n = i[0], l = i[1];
      t._onlyPercentage || /%$/.test(n) && (/%$/.test(l) || !/\d/.test(l)) ? this.plugins.video.setPercentSize.call(this, n, l) : this.plugins.video.setSize.call(this, n, l), this.plugins.resizing._module_saveCurrentSize.call(this, t);
    }
  },
  setPercentSize: function(e, t) {
    const i = this.context.video;
    t = !!t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + i.sizeUnit : t || i._defaultRatio, i._container.style.width = this.util.isNumber(e) ? e + "%" : e, i._container.style.height = "", i._cover.style.width = "100%", i._cover.style.height = t, i._cover.style.paddingBottom = t, i._element.style.width = "100%", i._element.style.height = "100%", i._element.style.maxWidth = "", i._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null), i._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing._module_saveCurrentSize.call(this, i);
  },
  cancelPercentAttr: function() {
    const e = this.context.video;
    e._cover.style.width = "", e._cover.style.height = "", e._cover.style.paddingBottom = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.video._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), e._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null);
  },
  setAlign: function(e, t, i, n) {
    const l = this.context.video;
    e || (e = l._align), t || (t = l._element), i || (i = l._cover), n || (n = l._container), /%$/.test(t.style.width) && e === "center" ? (n.style.minWidth = "100%", i.style.width = n.style.width, i.style.height = i.style.height, i.style.paddingBottom = /%$/.test(i.style.height) ? this.util.getNumber(this.util.getNumber(i.style.height, 2) / 100 * this.util.getNumber(i.style.width, 2), 2) + "%" : i.style.height) : (n.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", i.style.paddingBottom = i.style.height), this.util.hasClass(n, "__se__float-" + e) || (this.util.removeClass(n, l._floatClassRegExp), this.util.addClass(n, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  init: function() {
    const e = this.context.video;
    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.options.videoWidth, e._origin_h = this.options.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.options.videoWidth === e._defaultSizeX ? "" : this.options.videoWidth, e.inputY.value = this.options.videoHeight === e._defaultSizeY ? "" : this.options.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio));
  }
}, Xa = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([Xe, Jt, Zt]);
    const t = e.context, i = t.audio = {
      _infoList: [],
      _infoIndex: 0,
      _uploadFileLength: 0,
      focusElement: null,
      targetSelect: null,
      _origin_w: e.options.audioWidth,
      _origin_h: e.options.audioHeight,
      _linkValue: "",
      _element: null,
      _cover: null,
      _container: null
    };
    let n = this.setDialog(e);
    i.modal = n, i.audioInputFile = n.querySelector("._se_audio_files"), i.audioUrlFile = n.querySelector(".se-input-url"), i.focusElement = i.audioInputFile || i.audioUrlFile, i.preview = n.querySelector(".se-link-preview");
    let l = this.setController(e);
    i.controller = l, n.querySelector("form").addEventListener("submit", this.submit.bind(e)), i.audioInputFile && n.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(i.audioInputFile, i.audioUrlFile, i.preview)), i.audioInputFile && i.audioUrlFile && i.audioInputFile.addEventListener("change", this._fileInputChange.bind(i)), l.addEventListener("click", this.onClick_controller.bind(e)), i.audioUrlFile && i.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(i.preview, i, e.options.linkProtocol)), t.dialog.modal.appendChild(n), t.element.relative.appendChild(l), n = null, l = null;
  },
  setDialog: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-dialog-content", n.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
    return t.audioFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="' + t.audioAccept + '"' + (t.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.audioUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = l, n;
  },
  setController: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-link", n.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", n;
  },
  _fileInputChange: function() {
    this.audioInputFile.value ? (this.audioUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.audioUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _createAudioTag: function() {
    const e = this.util.createElement("AUDIO");
    this.plugins.audio._setTagAttrs.call(this, e);
    const t = this.context.audio._origin_w, i = this.context.audio._origin_h;
    return e.setAttribute("origin-size", t + "," + i), e.style.cssText = (t ? "width:" + t + "; " : "") + (i ? "height:" + i + ";" : ""), e;
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.audioTagAttrs;
    if (!!t)
      for (let i in t)
        !this.util.hasOwn(t, i) || e.setAttribute(i, t[i]);
  },
  _onLinkPreview: function(e, t, i) {
    const n = i.target.value.trim();
    e._linkValue = this.textContent = n ? t && n.indexOf("://") === -1 && n.indexOf("#") !== 0 ? t + n : n.indexOf("://") === -1 ? "/" + n : n : "";
  },
  fileTags: ["audio"],
  select: function(e) {
    this.plugins.audio.onModifyMode.call(this, e);
  },
  destroy: function(e) {
    e = e || this.context.audio._element;
    const t = this.util.getParentElement(e, this.util.isComponent) || e, i = e.getAttribute("data-index") * 1, n = t.previousElementSibling || t.nextElementSibling, l = t.parentNode;
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), l !== this.context.element.wysiwyg && this.util.removeItemAllParents(l, function(s) {
      return s.childNodes.length === 0;
    }, null), this.focusEdge(n), this.plugins.fileManager.deleteInfo.call(this, "audio", i, this.functions.onAudioUpload), this.history.push(!1);
  },
  checkFileInfo: function() {
    this.plugins.fileManager.checkInfo.call(this, "audio", ["audio"], this.functions.onAudioUpload, this.plugins.audio.updateCover.bind(this), !1);
  },
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "audio", this.functions.onAudioUpload);
  },
  on: function(e) {
    const t = this.context.audio;
    e ? t._element ? (this.context.dialog.updateModal = !0, t._linkValue = t.preview.textContent = t.audioUrlFile.value = t._element.src, t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple")) : t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple") : (this.plugins.audio.init.call(this), t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.setAttribute("multiple", "multiple"));
  },
  open: function() {
    this.plugins.dialog.open.call(this, "audio", this.currentControllerName === "audio");
  },
  submit: function(e) {
    const t = this.context.audio;
    e.preventDefault(), e.stopPropagation();
    try {
      t.audioInputFile && t.audioInputFile.files.length > 0 ? (this.showLoading(), this.plugins.audio.submitAction.call(this, t.audioInputFile.files)) : t.audioUrlFile && t._linkValue.length > 0 && (this.showLoading(), this.plugins.audio.setupUrl.call(this, t._linkValue));
    } catch (i) {
      throw this.closeLoading(), Error('[SUNEDITOR.audio.submit.fail] cause : "' + i.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0)
      return;
    let t = 0, i = [];
    for (let o = 0, a = e.length; o < a; o++)
      /audio/i.test(e[o].type) && (i.push(e[o]), t += e[o].size);
    const n = this.options.audioUploadSizeLimit;
    if (n > 0) {
      let o = 0;
      const a = this.context.audio._infoList;
      for (let r = 0, u = a.length; r < u; r++)
        o += a[r].size * 1;
      if (t + o > n) {
        this.closeLoading();
        const r = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + n / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(r, { limitSize: n, currentSize: o, uploadSize: t }, this)) && this.functions.noticeOpen(r);
        return;
      }
    }
    const l = this.context.audio;
    l._uploadFileLength = i.length;
    const s = {
      isUpdate: this.context.dialog.updateModal,
      element: l._element
    };
    if (typeof this.functions.onAudioUploadBefore == "function") {
      const o = this.functions.onAudioUploadBefore(i, s, this, function(a) {
        a && this._w.Array.isArray(a.result) ? this.plugins.audio.register.call(this, s, a) : this.plugins.audio.upload.call(this, s, a);
      }.bind(this));
      if (typeof o > "u")
        return;
      if (!o) {
        this.closeLoading();
        return;
      }
      typeof o == "object" && o.length > 0 && (i = o);
    }
    this.plugins.audio.upload.call(this, s, i);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.audio.exception] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.audio.error.call(this, t, null);
      return;
    }
    const i = this.options.audioUploadUrl, n = this.context.dialog.updateModal ? 1 : t.length, l = new FormData();
    for (let s = 0; s < n; s++)
      l.append("file-" + s, t[s]);
    this.plugins.fileManager.upload.call(this, i, this.options.audioUploadHeader, l, this.plugins.audio.callBack_upload.bind(this, e), this.functions.onAudioUploadError);
  },
  callBack_upload: function(e, t) {
    if (typeof this.functions.audioUploadHandler == "function")
      this.functions.audioUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.audio.error.call(this, i.errorMessage, i) : this.plugins.audio.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result;
    for (let n = 0, l = i.length, s, o; n < l; n++)
      e.isUpdate ? o = e.element : o = this.plugins.audio._createAudioTag.call(this), s = { name: i[n].name, size: i[n].size }, this.plugins.audio.create_audio.call(this, o, i[n].url, s, e.isUpdate);
    this.closeLoading();
  },
  setupUrl: function(e) {
    try {
      if (e.length === 0)
        return !1;
      this.plugins.audio.create_audio.call(this, this.plugins.audio._createAudioTag.call(this), e, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.audio.audio.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_audio: function(e, t, i, n) {
    const l = this.context.audio;
    if (n)
      if (l._element && (e = l._element), e && e.src !== t)
        e.src = t, this.selectComponent(e, "audio");
      else {
        this.selectComponent(e, "audio");
        return;
      }
    else {
      e.src = t;
      const s = this.plugins.component.set_cover.call(this, e), o = this.plugins.component.set_container.call(this, s, "");
      if (!this.insertComponent(o, !1, !0, !this.options.mediaAutoSelect)) {
        this.focus();
        return;
      }
      if (!this.options.mediaAutoSelect) {
        const a = this.appendFormatTag(o, null);
        a && this.setRange(a, 0, a, 0);
      }
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, i, !1), n && this.history.push(!1);
  },
  updateCover: function(e) {
    const t = this.context.audio;
    this.plugins.audio._setTagAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const n = e;
    t._element = e = e.cloneNode(!1);
    const l = this.plugins.component.set_cover.call(this, e), s = this.plugins.component.set_container.call(this, l, "se-audio-container");
    try {
      if (this.util.getParentElement(n, this.util.isNotCheckingNode))
        n.parentNode.replaceChild(s, n);
      else if (this.util.isListCell(i)) {
        const o = this.util.getParentElement(n, function(a) {
          return a.parentNode === i;
        });
        i.insertBefore(s, o), this.util.removeItem(n), this.util.removeEmptyNode(o, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const o = this.util.getParentElement(n, function(a) {
          return a.parentNode === i;
        });
        i = this.util.splitElement(i, o), i.parentNode.insertBefore(s, i), this.util.removeItem(n), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(s, i);
    } catch (o) {
      console.warn("[SUNEDITOR.audio.error] Maybe the audio tag is nested.", o);
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, null, !1), this.plugins.audio.init.call(this);
  },
  onModifyMode: function(e) {
    const t = this.context.audio;
    this.setControllerPosition(t.controller, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t.controller, e, this.plugins.audio.onControllerOff.bind(this, e), "audio"), this.util.addClass(e, "active"), t._element = e, t._cover = this.util.getParentElement(e, "FIGURE"), t._container = this.util.getParentElement(e, this.util.isComponent);
  },
  openModify: function(e) {
    if (this.context.audio.audioUrlFile) {
      const t = this.context.audio;
      t._linkValue = t.preview.textContent = t.audioUrlFile.value = t._element.src;
    }
    e || this.plugins.dialog.open.call(this, "audio", !0);
  },
  onClick_controller: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command");
    !t || (e.preventDefault(), /update/.test(t) ? this.plugins.audio.openModify.call(this, !1) : this.plugins.audio.destroy.call(this, this.context.audio._element), this.controllersOff());
  },
  onControllerOff: function(e) {
    this.util.removeClass(e, "active"), this.context.audio.controller.style.display = "none";
  },
  init: function() {
    if (this.context.dialog.updateModal)
      return;
    const e = this.context.audio;
    e.audioInputFile && (e.audioInputFile.value = ""), e.audioUrlFile && (e._linkValue = e.preview.textContent = e.audioUrlFile.value = ""), e.audioInputFile && e.audioUrlFile && (e.audioUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._element = null;
  }
}, Ni = "https://katex.org/docs/supported.html", Ka = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([Xe]);
    const t = e.context;
    t.math = {
      focusElement: null,
      previewElement: null,
      fontSizeElement: null,
      defaultFontSize: "",
      _mathExp: null
    };
    let i = this.setDialog(e);
    t.math.modal = i, t.math.focusElement = i.querySelector(".se-math-exp"), t.math.previewElement = i.querySelector(".se-math-preview"), t.math.fontSizeElement = i.querySelector(".se-math-size"), t.math.focusElement.addEventListener(e.util.isIE ? "textinput" : "input", this._renderMathExp.bind(e, t.math), !1), t.math.fontSizeElement.addEventListener("change", function(l) {
      this.fontSize = l.target.value;
    }.bind(t.math.previewElement.style), !1);
    let n = this.setController_MathButton(e);
    t.math.mathController = n, t.math._mathExp = null, i.querySelector("form").addEventListener("submit", this.submit.bind(e), !1), n.addEventListener("click", this.onClick_mathController.bind(e)), t.math.previewElement.style.fontSize = t.math.defaultFontSize, t.dialog.modal.appendChild(i), t.element.relative.appendChild(n), i = null, n = null;
  },
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), n = e.options.mathFontSize;
    let l = n[0].value;
    i.className = "se-dialog-content", i.style.display = "none";
    let s = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + Ni + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let o = 0, a = n.length, r; o < a; o++)
      r = n[o], r.default && (l = r.value), s += '<option value="' + r.value + '"' + (r.default ? " selected" : "") + ">" + r.text + "</option>";
    return s += '</select></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", e.context.math.defaultFontSize = l, i.innerHTML = s, i;
  },
  setController_MathButton: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    return i.className = "se-controller se-controller-link", i.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + e.icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + e.icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", i;
  },
  open: function() {
    this.plugins.dialog.open.call(this, "math", this.currentControllerName === "math");
  },
  managedTags: function() {
    return {
      className: "katex",
      method: function(e) {
        if (!e.getAttribute("data-exp") || !this.options.katex)
          return;
        const t = this._d.createRange().createContextualFragment(this.plugins.math._renderer.call(this, this.util.HTMLDecoder(e.getAttribute("data-exp"))));
        e.innerHTML = t.querySelector(".katex").innerHTML, e.setAttribute("contenteditable", !1);
      }
    };
  },
  _renderer: function(e) {
    let t = "";
    try {
      this.util.removeClass(this.context.math.focusElement, "se-error"), t = this.options.katex.src.renderToString(e, { throwOnError: !0, displayMode: !0 });
    } catch (i) {
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + Ni + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
    }
    return t;
  },
  _renderMathExp: function(e, t) {
    e.previewElement.innerHTML = this.plugins.math._renderer.call(this, t.target.value);
  },
  submit: function(e) {
    this.showLoading(), e.preventDefault(), e.stopPropagation();
    const t = function() {
      if (this.context.math.focusElement.value.trim().length === 0)
        return !1;
      const i = this.context.math, n = i.focusElement.value, l = i.previewElement.querySelector(".katex");
      if (!l)
        return !1;
      if (l.className = "__se__katex " + l.className, l.setAttribute("contenteditable", !1), l.setAttribute("data-exp", this.util.HTMLEncoder(n)), l.setAttribute("data-font-size", i.fontSizeElement.value), l.style.fontSize = i.fontSizeElement.value, this.context.dialog.updateModal) {
        const s = this.util.getParentElement(i._mathExp, ".katex");
        s.parentNode.replaceChild(l, s), this.setRange(l, 0, l, 1);
      } else {
        const s = this.getSelectedElements();
        if (s.length > 1) {
          const a = this.util.createElement(s[0].nodeName);
          if (a.appendChild(l), !this.insertNode(a, null, !0))
            return !1;
        } else if (!this.insertNode(l, null, !0))
          return !1;
        const o = this.util.createTextNode(this.util.zeroWidthSpace);
        l.parentNode.insertBefore(o, l.nextSibling), this.setRange(l, 0, l, 1);
      }
      return i.focusElement.value = "", i.fontSizeElement.value = "1em", i.previewElement.style.fontSize = "1em", i.previewElement.innerHTML = "", !0;
    }.bind(this);
    try {
      t() && (this.plugins.dialog.close.call(this), this.history.push(!1));
    } catch {
      this.plugins.dialog.close.call(this);
    } finally {
      this.closeLoading();
    }
    return !1;
  },
  active: function(e) {
    if (!e)
      this.controllerArray.indexOf(this.context.math.mathController) > -1 && this.controllersOff();
    else if (e.getAttribute("data-exp"))
      return this.controllerArray.indexOf(this.context.math.mathController) < 0 && (this.setRange(e, 0, e, 1), this.plugins.math.call_controller.call(this, e)), !0;
    return !1;
  },
  on: function(e) {
    if (!e)
      this.plugins.math.init.call(this);
    else {
      const t = this.context.math;
      if (t._mathExp) {
        const i = this.util.HTMLDecoder(t._mathExp.getAttribute("data-exp")), n = t._mathExp.getAttribute("data-font-size") || "1em";
        this.context.dialog.updateModal = !0, t.focusElement.value = i, t.fontSizeElement.value = n, t.previewElement.innerHTML = this.plugins.math._renderer.call(this, i), t.previewElement.style.fontSize = n;
      }
    }
  },
  call_controller: function(e) {
    this.context.math._mathExp = e;
    const t = this.context.math.mathController;
    this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "math");
  },
  onClick_mathController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    !t || (e.preventDefault(), /update/.test(t) ? (this.context.math.focusElement.value = this.util.HTMLDecoder(this.context.math._mathExp.getAttribute("data-exp")), this.plugins.dialog.open.call(this, "math", !0)) : (this.util.removeItem(this.context.math._mathExp), this.context.math._mathExp = null, this.focus(), this.history.push(!1)), this.controllersOff());
  },
  init: function() {
    const e = this.context.math;
    e.mathController.style.display = "none", e._mathExp = null, e.focusElement.value = "", e.previewElement.innerHTML = "";
  }
};
var Tn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      name: "fileBrowser",
      _xmlHttp: null,
      _loading: null,
      add: function(l) {
        const s = l.context;
        s.fileBrowser = {
          _closeSignal: !1,
          area: null,
          header: null,
          tagArea: null,
          body: null,
          list: null,
          tagElements: null,
          items: [],
          selectedTags: [],
          selectorHandler: null,
          contextPlugin: "",
          columnSize: 4
        };
        let o = l.util.createElement("DIV");
        o.className = "se-file-browser sun-editor-common";
        let a = l.util.createElement("DIV");
        a.className = "se-file-browser-back";
        let r = l.util.createElement("DIV");
        r.className = "se-file-browser-inner", r.innerHTML = this.set_browser(l), o.appendChild(a), o.appendChild(r), this._loading = o.querySelector(".se-loading-box"), s.fileBrowser.area = o, s.fileBrowser.header = r.querySelector(".se-file-browser-header"), s.fileBrowser.titleArea = r.querySelector(".se-file-browser-title"), s.fileBrowser.tagArea = r.querySelector(".se-file-browser-tags"), s.fileBrowser.body = r.querySelector(".se-file-browser-body"), s.fileBrowser.list = r.querySelector(".se-file-browser-list"), s.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(l)), s.fileBrowser.list.addEventListener("click", this.onClickFile.bind(l)), r.addEventListener("mousedown", this._onMouseDown_browser.bind(l)), r.addEventListener("click", this._onClick_browser.bind(l)), s.element.relative.appendChild(o), o = null, a = null, r = null;
      },
      set_browser: function(l) {
        const s = l.lang;
        return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + s.dialogBox.close + '" aria-label="' + s.dialogBox.close + '">' + l.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>';
      },
      _onMouseDown_browser: function(l) {
        /se-file-browser-inner/.test(l.target.className) ? this.context.fileBrowser._closeSignal = !0 : this.context.fileBrowser._closeSignal = !1;
      },
      _onClick_browser: function(l) {
        l.stopPropagation(), (/close/.test(l.target.getAttribute("data-command")) || this.context.fileBrowser._closeSignal) && this.plugins.fileBrowser.close.call(this);
      },
      open: function(l, s) {
        this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = function(u) {
          !/27/.test(u.keyCode) || this.plugins.fileBrowser.close.call(this);
        }.bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
        const o = this.context.fileBrowser;
        o.contextPlugin = l, o.selectorHandler = s;
        const a = this.context[l], r = a.listClass;
        this.util.hasClass(o.list, r) || (o.list.className = "se-file-browser-list " + r), this.options.popupDisplay === "full" ? o.area.style.position = "fixed" : o.area.style.position = "absolute", o.titleArea.textContent = a.title, o.area.style.display = "block", this.plugins.fileBrowser._drawFileList.call(this, this.context[l].url, this.context[l].header);
      },
      _bindClose: null,
      close: function() {
        const l = this.plugins.fileBrowser;
        l._xmlHttp && l._xmlHttp.abort(), l._bindClose && (this._d.removeEventListener("keydown", l._bindClose), l._bindClose = null);
        const s = this.context.fileBrowser;
        s.area.style.display = "none", s.selectorHandler = null, s.selectedTags = [], s.items = [], s.list.innerHTML = s.tagArea.innerHTML = s.titleArea.textContent = "", typeof this.plugins[s.contextPlugin].init == "function" && this.plugins[s.contextPlugin].init.call(this), s.contextPlugin = "";
      },
      showBrowserLoading: function() {
        this._loading.style.display = "block";
      },
      closeBrowserLoading: function() {
        this._loading.style.display = "none";
      },
      _drawFileList: function(l, s) {
        const o = this.plugins.fileBrowser, a = o._xmlHttp = this.util.getXMLHttpRequest();
        if (a.onreadystatechange = o._callBackGet.bind(this, a), a.open("get", l, !0), s !== null && typeof s == "object" && this._w.Object.keys(s).length > 0)
          for (let r in s)
            a.setRequestHeader(r, s[r]);
        a.send(null), this.plugins.fileBrowser.showBrowserLoading();
      },
      _callBackGet: function(l) {
        if (l.readyState === 4) {
          if (this.plugins.fileBrowser._xmlHttp = null, l.status === 200)
            try {
              const s = JSON.parse(l.responseText);
              s.result.length > 0 ? this.plugins.fileBrowser._drawListItem.call(this, s.result, !0) : s.nullMessage && (this.context.fileBrowser.list.innerHTML = s.nullMessage);
            } catch (s) {
              throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + s.message + '"');
            } finally {
              this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px";
            }
          else if (this.plugins.fileBrowser.closeBrowserLoading(), l.status !== 0) {
            const s = l.responseText ? JSON.parse(l.responseText) : l, o = "[SUNEDITOR.fileBrowser.get.serverException] status: " + l.status + ", response: " + (s.errorMessage || l.responseText);
            throw Error(o);
          }
        }
      },
      _drawListItem: function(l, s) {
        const o = this.context.fileBrowser, a = this.context[o.contextPlugin], r = [], u = l.length, c = a.columnSize || o.columnSize, f = c <= 1 ? 1 : Math.round(u / c) || 1, d = a.itemTemplateHandler;
        let m = "", h = '<div class="se-file-item-column">', b = 1;
        for (let g = 0, p, _; g < u; g++)
          if (p = l[g], _ = p.tag ? typeof p.tag == "string" ? p.tag.split(",") : p.tag : [], _ = p.tag = _.map(function(v) {
            return v.trim();
          }), h += d(p), (g + 1) % f === 0 && b < c && g + 1 < u && (b++, h += '</div><div class="se-file-item-column">'), s && _.length > 0)
            for (let v = 0, y = _.length, w; v < y; v++)
              w = _[v], w && r.indexOf(w) === -1 && (r.push(w), m += '<a title="' + w + '" aria-label="' + w + '">' + w + "</a>");
        h += "</div>", o.list.innerHTML = h, s && (o.items = l, o.tagArea.innerHTML = m, o.tagElements = o.tagArea.querySelectorAll("A"));
      },
      onClickTag: function(l) {
        const s = l.target;
        if (!this.util.isAnchor(s))
          return;
        const o = s.textContent, a = this.plugins.fileBrowser, r = this.context.fileBrowser, u = r.tagArea.querySelector('a[title="' + o + '"]'), c = r.selectedTags, f = c.indexOf(o);
        f > -1 ? (c.splice(f, 1), this.util.removeClass(u, "on")) : (c.push(o), this.util.addClass(u, "on")), a._drawListItem.call(
          this,
          c.length === 0 ? r.items : r.items.filter(function(d) {
            return d.tag.some(function(m) {
              return c.indexOf(m) > -1;
            });
          }),
          !1
        );
      },
      onClickFile: function(l) {
        l.preventDefault(), l.stopPropagation();
        const s = this.context.fileBrowser, o = s.list;
        let a = l.target, r = null;
        if (a === o)
          return;
        for (; o !== a.parentNode && (r = a.getAttribute("data-command"), !r); )
          a = a.parentNode;
        if (!r)
          return;
        (s.selectorHandler || this.context[s.contextPlugin].selectorHandler)(a, a.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileBrowser", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: n
    })), n;
  });
})(Tn);
const Ja = Tn.exports, Za = {
  name: "imageGallery",
  add: function(e) {
    e.addModule([Ja]);
    const t = e.context;
    t.imageGallery = {
      title: e.lang.toolbar.imageGallery,
      url: e.options.imageGalleryUrl,
      header: e.options.imageGalleryHeader,
      listClass: "se-image-list",
      itemTemplateHandler: this.drawItems,
      selectorHandler: this.setImage.bind(e),
      columnSize: 4
    };
  },
  open: function(e) {
    this.plugins.fileBrowser.open.call(this, "imageGallery", e);
  },
  drawItems: function(e) {
    const t = e.src.split("/").pop();
    return '<div class="se-file-item-img"><img src="' + (e.thumbnail || e.src) + '" alt="' + (e.alt || t) + '" data-command="pick" data-value="' + (e.src || e.thumbnail) + '"><div class="se-file-img-name se-file-name-back"></div><div class="se-file-img-name __se__img_name">' + (e.name || t) + "</div></div>";
  },
  setImage: function(e, t) {
    this.callPlugin("image", function() {
      const i = { name: t, size: 0 };
      this.plugins.image.create_image.call(this, e.getAttribute("data-value"), null, this.context.image._origin_w, this.context.image._origin_h, "none", i, e.alt);
    }.bind(this), null);
  }
}, Bn = { blockquote: Ra, align: Ta, font: Ba, fontSize: Aa, fontColor: Ma, hiliteColor: Da, horizontalRule: Oa, list: Va, table: Ua, formatBlock: Fa, lineHeight: Ha, template: Pa, paragraphStyle: $a, textStyle: ja, link: qa, image: Wa, video: Ya, audio: Xa, math: Ka, imageGallery: Za };
var An = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "ckb",
      toolbar: {
        default: "\u0628\u0646\u0647\u200C\u0695\u0647\u200C\u062A",
        save: "\u067E\u0627\u0634\u0647\u200C\u0643\u0647\u200C\u0648\u062A\u0643\u0631\u062F\u0646",
        font: "\u0641\u06C6\u0646\u062A",
        formats: "Formats",
        fontSize: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C",
        bold: "\u062A\u06C6\u062E\u0643\u0631\u062F\u0646",
        underline: "\u0647\u06CE\u06B5 \u0628\u0647\u200C\u0698\u06CE\u0631\u062F\u0627 \u0628\u06CE\u0646\u0647\u200C",
        italic: "\u0644\u0627\u0631",
        strike: "\u0647\u06CE\u06B5 \u0628\u0647\u200C\u0646\u0627\u0648\u062F\u0627 \u0628\u06CE\u0646\u0647\u200C",
        subscript: "\u0698\u06CE\u0631\u0633\u06A9\u0631\u06CC\u067E\u062A",
        superscript: "\u0633\u06D5\u0631\u0646\u0648\u0648\u0633",
        removeFormat: "\u0644\u0627\u0628\u0631\u062F\u0646\u06CC \u0641\u06C6\u0631\u0645\u0627\u062A",
        fontColor: "\u0631\u0647\u200C\u0646\u06AF\u06CC \u0641\u06C6\u0646\u062A",
        hiliteColor: "\u0631\u0647\u200C\u0646\u06AF\u06CC \u062F\u06CC\u0627\u0631\u0643\u0631\u0627\u0648",
        indent: "\u0628\u06C6\u0634\u0627\u06CC\u06CC \u0628\u06D5\u062C\u06CE\u0647\u06CE\u0634\u062A\u0646",
        outdent: "\u0644\u0627\u0628\u0631\u062F\u0646\u06CC \u0628\u06C6\u0634\u0627\u06CC\u06CC",
        align: "\u0626\u0627\u0631\u0627\u0633\u062A\u0647\u200C",
        alignLeft: "\u0644\u0627\u06CC \u0686\u0647\u200C\u067E",
        alignRight: "\u0644\u0627\u06CC \u0631\u0627\u0633\u062A",
        alignCenter: "\u0646\u0627\u0648\u0647\u200C\u0646\u062F",
        alignJustify: "\u0628\u0647\u200C\u0631\u06CE\u0643\u06CC \u062F\u0627\u0628\u0647\u200C\u0634 \u0628\u0643\u0647\u200C",
        list: "\u0644\u06CC\u0633\u062A",
        orderList: "\u0644\u06CC\u0633\u062A\u06CC \u0631\u06CC\u0632\u0643\u0631\u0627\u0648",
        unorderList: "\u0644\u06CC\u0633\u062A\u06CC \u0631\u06CC\u0632\u0646\u0647\u200C\u0643\u0631\u0627\u0648",
        horizontalRule: "\u0647\u06CE\u06B5\u06CC \u0626\u0627\u0633\u06C6\u06CC\u06CC",
        hr_solid: "\u067E\u062A\u0647\u200C\u0648",
        hr_dotted: "\u0646\u0648\u0643\u062A\u0647\u200C \u0646\u0648\u0643\u062A\u0647\u200C",
        hr_dashed: "\u062F\u0627\u0634 \u062F\u0627\u0634",
        table: "\u062E\u0634\u062A\u0647\u200C",
        link: "\u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631",
        math: "\u0628\u06CC\u0631\u0643\u0627\u0631\u06CC",
        image: "\u0648\u06CE\u0646\u0647\u200C",
        video: "\u06A4\u06CC\u062F\u06CC\u06C6",
        audio: "\u062F\u0647\u200C\u0646\u06AF",
        fullScreen: "\u067E\u0695 \u0628\u0647\u200C \u0634\u0627\u0634\u0647\u200C",
        showBlocks: "\u0628\u06B5\u06C6\u0643 \u0646\u06CC\u0634\u0627\u0646\u0628\u062F\u0647",
        codeView: "\u0628\u06CC\u0646\u06CC\u0646\u06CC \u0643\u06C6\u062F\u0647\u200C\u0643\u0627\u0646",
        undo: "\u0648\u06D5\u06A9 \u062E\u06C6\u06CC \u0644\u06CE \u0628\u06A9\u06D5\u0648\u06D5",
        redo: "\u0647\u06D5\u06B5\u06AF\u06D5\u0695\u0627\u0646\u062F\u0646\u06D5\u0648\u06D5",
        preview: "\u067E\u06CE\u0634\u0628\u06CC\u0646\u06CC\u0646",
        print: "\u067E\u0631\u06CC\u0646\u062A",
        tag_p: "\u067E\u0647\u200C\u0631\u0647\u200C\u06AF\u0631\u0627\u0641",
        tag_div: "\u06CC \u0626\u0627\u0633\u0627\u06CC\u06CC (DIV)",
        tag_h: "\u0633\u06D5\u0631\u067E\u06D5\u0695\u06D5",
        tag_blockquote: "\u062F\u0647\u200C\u0642",
        tag_pre: "\u0643\u06C6\u062F",
        template: "\u0642\u0627\u06B5\u0628",
        lineHeight: "\u0628\u06B5\u0646\u062F\u06CC \u062F\u06CE\u0631",
        paragraphStyle: "\u0633\u062A\u0627\u06CC\u0644\u06CC \u067E\u0647\u200C\u0631\u0647\u200C\u06AF\u0631\u0627\u0641",
        textStyle: "\u0633\u062A\u0627\u06CC\u0644\u06CC \u0646\u0648\u0633\u06CC\u0646",
        imageGallery: "\u06AF\u0627\u0644\u0647\u200C\u0631\u06CC \u0648\u06CE\u0646\u0647\u200C\u0643\u0627\u0646",
        dir_ltr: "\u0645\u0646 \u0627\u0644\u064A\u0633\u0627\u0631 \u0625\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646",
        dir_rtl: "\u0645\u0646 \u0627\u0644\u064A\u0645\u064A\u0646 \u0627\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631",
        mention: "\u062A\u0646\u0648\u064A\u0647 \u0628"
      },
      dialogBox: {
        linkBox: {
          title: "\u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631 \u062F\u0627\u0628\u0646\u06CE",
          url: "\u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631",
          text: "\u062A\u06CE\u0643\u0633\u062A\u06CC \u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631",
          newWindowCheck: "\u0644\u0647\u200C \u067E\u0647\u200C\u0646\u062C\u0647\u200C\u0631\u0647\u200C\u06CC\u0647\u200C\u0643\u06CC \u0646\u0648\u06CE \u0628\u0643\u0647\u200C\u0631\u0647\u200C\u0648\u0647\u200C",
          downloadLinkCheck: "\u0631\u0627\u0628\u0637 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
          bookmark: "\u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629"
        },
        mathBox: {
          title: "\u0628\u06CC\u0631\u0643\u0627\u0631\u06CC",
          inputLabel: "\u0646\u06CC\u0634\u0627\u0646\u0647\u200C\u0643\u0627\u0646\u06CC \u0628\u06CC\u0631\u0643\u0627\u0631\u06CC",
          fontSizeLabel: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C\u06CC \u0641\u06C6\u0646\u062A",
          previewLabel: "\u067E\u06CE\u0634\u0628\u06CC\u0646\u06CC\u0646"
        },
        imageBox: {
          title: "\u0648\u06CE\u0646\u0647\u200C\u06CC\u0647\u200C\u0643 \u062F\u0627\u0628\u0646\u06CE",
          file: "\u0641\u0627\u06CC\u0644\u06CE\u0643 \u0647\u0647\u200C\u06B5\u0628\u0698\u06CE\u0631\u0647\u200C",
          url: "\u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631\u06CC \u0648\u06CE\u0646\u0647\u200C",
          altText: "\u0646\u0648\u0633\u06CC\u0646\u06CC \u062C\u06CE\u06AF\u0631\u0647\u200C\u0648\u0647\u200C"
        },
        videoBox: {
          title: "\u06A4\u06CC\u062F\u06CC\u06C6\u06CC\u0647\u200C\u0643 \u062F\u0627\u0628\u0646\u06CE",
          file: "\u0641\u0627\u06CC\u0644\u06CE\u0643 \u0647\u0647\u200C\u06B5\u0628\u0698\u06CE\u0631\u0647\u200C",
          url: "YouTube/Vimeo \u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631\u06CC \u0644\u0647\u200C\u0646\u0627\u0648\u062F\u0627\u0646\u0627\u0646 \u0648\u0647\u200C\u0643 "
        },
        audioBox: {
          title: "\u062F\u0647\u200C\u0646\u06AF\u06CE\u0643 \u062F\u0627\u0628\u0646\u06CE",
          file: "\u0641\u0627\u06CC\u0644\u06CE\u0643 \u0647\u0647\u200C\u06B5\u0628\u0698\u06CE\u0631\u0647\u200C",
          url: "\u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631\u06CC \u062F\u0647\u200C\u0646\u06AF"
        },
        browser: {
          tags: "\u062A\u0627\u06AF\u0647\u200C\u0643\u0627\u0646",
          search: "\u06AF\u0647\u200C\u0631\u0627\u0646"
        },
        caption: "\u067E\u06CE\u0646\u0627\u0633\u0647\u200C\u06CC\u0647\u200C\u0643 \u062F\u0627\u0628\u0646\u06CE",
        close: "\u062F\u0627\u062E\u0633\u062A\u0646",
        submitButton: "\u0646\u0627\u0631\u062F\u0646",
        revertButton: "\u0628\u06CC\u06AF\u06D5\u0695\u06CE\u0646\u06D5\u0648\u06D5 \u0633\u06D5\u0631 \u0628\u0627\u0631\u06CC \u0633\u06D5\u0631\u06D5\u062A\u0627\u06CC\u06CC",
        proportion: "\u0631\u06CE\u0698\u0647\u200C\u0643\u0627\u0646 \u0648\u0647\u200C\u0643 \u062E\u06C6\u06CC \u0628\u0647\u06CE\u06B5\u0647\u200C\u0648\u0647\u200C",
        basic: "\u0633\u0647\u200C\u0631\u0647\u200C\u062A\u0627\u06CC\u06CC",
        left: "\u0686\u0647\u200C\u067E",
        right: "\u0631\u0627\u0633\u062A",
        center: "\u0646\u0627\u0648\u06D5\u0695\u0627\u0633\u062A",
        width: "\u067E\u0627\u0646\u06CC",
        height: "\u0628\u0647\u200C\u0631\u0632\u06CC",
        size: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C",
        ratio: "\u0631\u06CE\u0698\u0647\u200C"
      },
      controller: {
        edit: "\u062F\u06D5\u0633\u06A9\u0627\u0631\u06CC\u06A9\u0631\u062F\u0646",
        unlink: "\u0633\u0695\u06CC\u0646\u06D5\u0648\u06D5\u06CC \u0628\u06D5\u0633\u062A\u06D5\u0631",
        remove: "\u0633\u0695\u06CC\u0646\u0647\u200C\u0648\u0647\u200C",
        insertRowAbove: "\u0631\u06CC\u0632\u0643 \u0644\u0647\u200C \u0633\u0647\u200C\u0631\u0647\u200C\u0648\u0647\u200C \u0632\u06CC\u0627\u062F\u0628\u0643\u0647\u200C",
        insertRowBelow: "\u0631\u06CC\u0632\u06CE\u0643 \u0644\u0647\u200C \u062E\u0648\u0627\u0631\u0647\u200C\u0648\u0647\u200C \u0632\u06CC\u0627\u062F\u0628\u0643\u0647\u200C",
        deleteRow: "\u0631\u06CC\u0632 \u0628\u0633\u0631\u0647\u200C\u0648\u0647\u200C",
        insertColumnBefore: "\u0633\u062A\u0648\u0646\u06CE\u0643 \u0644\u0647\u200C \u067E\u06CE\u0634\u0647\u200C\u0648\u0647\u200C \u0632\u06CC\u0627\u062F\u0628\u0643\u0647\u200C",
        insertColumnAfter: "\u0633\u062A\u0648\u0646\u06CE\u0643 \u0644\u0647\u200C \u062F\u0648\u0627\u0648\u0647\u200C \u0632\u06CC\u0627\u062F\u0628\u0643\u0647\u200C",
        deleteColumn: "\u0633\u062A\u0648\u0646\u06CE\u0643 \u0628\u0633\u0631\u0647\u200C\u0648\u0647\u200C",
        fixedColumnWidth: "\u067E\u0627\u0646\u06CC \u0633\u062A\u0648\u0646 \u0646\u0647\u200C\u06AF\u06C6\u0631\u0628\u0643\u0647\u200C",
        resize100: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C \u0628\u06AF\u06C6\u0631\u0647\u200C \u0628\u06C6 \u0661\u0660\u0660%",
        resize75: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C \u0628\u06AF\u06C6\u0631\u0647\u200C \u0628\u06C6 \u0667\u0665%",
        resize50: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C \u0628\u06AF\u06C6\u0631\u0647\u200C \u0628\u06C6 \u0665\u0660%",
        resize25: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C \u0628\u06AF\u06C6\u0631\u0647\u200C \u0628\u06C6 \u0662\u0665%",
        autoSize: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C\u06CC \u062E\u06C6\u0643\u0627\u0631\u0627\u0646\u0647\u200C",
        mirrorHorizontal: "\u0647\u0647\u200C\u06B5\u06AF\u0647\u200C\u0631\u06CE\u0646\u0647\u200C\u0648\u0647\u200C \u0628\u0647\u200C\u062F\u0647\u200C\u0648\u0631\u06CC \u062A\u0647\u200C\u0648\u0647\u200C\u0631\u0647\u200C\u06CC \u0626\u0627\u0633\u06C6\u06CC\u06CC",
        mirrorVertical: "\u0647\u0647\u200C\u06B5\u06AF\u0647\u200C\u0631\u06CE\u0646\u0647\u200C\u0648\u0647\u200C \u0628\u0647\u200C\u062F\u0647\u200C\u0648\u0631\u06CC \u062A\u0647\u200C\u0648\u0647\u200C\u0631\u0647\u200C\u06CC \u0633\u062A\u0648\u0646\u06CC",
        rotateLeft: "\u0628\u0633\u0648\u0695\u06CE\u0646\u0647\u200C \u0628\u0647\u200C\u0644\u0627\u06CC \u0686\u0647\u200C\u067E\u062F\u0627",
        rotateRight: "\u0628\u0633\u0648\u0631\u06CE\u0646\u0647\u200C \u0628\u0647\u200C\u0644\u0627\u06CC \u0631\u0627\u0633\u062A\u062F\u0627",
        maxSize: "\u06AF\u0647\u200C\u0648\u0631\u0647\u200C\u062A\u0631\u06CC\u0646 \u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C",
        minSize: "\u0628\u0686\u0648\u0643\u062A\u0631\u06CC\u0646 \u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C",
        tableHeader: "\u0633\u0647\u200C\u0631\u062F\u06CE\u0631\u06CC \u062E\u0634\u062A\u0647\u200C\u0643",
        mergeCells: "\u062E\u0627\u0646\u0647\u200C\u0643\u0627\u0646 \u062A\u06CE\u0643\u0647\u200C\u06B5\u0628\u0643\u0647\u200C",
        splitCells: "\u062E\u0627\u0646\u0647\u200C\u0643\u0627\u0646 \u0644\u06CE\u0643 \u062C\u06CC\u0627\u0628\u0643\u0647\u200C\u0648\u0647\u200C",
        HorizontalSplit: "\u062C\u06CC\u0627\u0643\u0631\u062F\u0646\u0647\u200C\u0648\u0647\u200C\u06CC \u0626\u0627\u0633\u06C6\u06CC\u06CC",
        VerticalSplit: "\u062C\u06CC\u0627\u0643\u0631\u062F\u0646\u0647\u200C\u0648\u0647\u200C\u06CC \u0633\u062A\u0648\u0646\u06CC"
      },
      menu: {
        spaced: "\u0628\u06C6\u0634\u0627\u06CC \u0647\u0647\u200C\u0628\u06CE\u062A",
        bordered: "\u0644\u06CE\u0648\u0627\u0631\u06CC \u0647\u0647\u200C\u0628\u06CE\u062A",
        neon: "\u0646\u06CC\u06C6\u0646",
        translucent: "\u0643\u0647\u200C\u0645\u06CE\u0643 \u0648\u0647\u200C\u0643 \u0634\u0648\u0648\u0634\u0647\u200C",
        shadow: "\u0633\u06CE\u0628\u0647\u200C\u0631",
        code: "\u0643\u06C6\u062F"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ckb", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(An);
const Mn = An.exports;
var Dn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "da",
      toolbar: {
        default: "Default",
        save: "Gem",
        font: "Skrifttype",
        formats: "Format",
        fontSize: "Skriftst\xF8rrelse",
        bold: "Fed",
        underline: "Understreget",
        italic: "Skr\xE5skrift",
        strike: "Overstreget",
        subscript: "S\xE6nket skrift",
        superscript: "H\xE6vet skrift",
        removeFormat: "Fjern formatering",
        fontColor: "Skriftfarve",
        hiliteColor: "Baggrundsfarve",
        indent: "Ryk ind",
        outdent: "Ryk ud",
        align: "Justering",
        alignLeft: "Venstrejustering",
        alignRight: "H\xF8jrejustering",
        alignCenter: "Midterjustering",
        alignJustify: "Tilpas margin",
        list: "Lister",
        orderList: "Nummereret liste",
        unorderList: "Uordnet liste",
        horizontalRule: "Horisontal linie",
        hr_solid: "Almindelig",
        hr_dotted: "Punkteret",
        hr_dashed: "Streget",
        table: "Tabel",
        link: "Link",
        math: "Math",
        image: "Billede",
        video: "Video",
        audio: "Audio",
        fullScreen: "Fuld sk\xE6rm",
        showBlocks: "Vis blokke",
        codeView: "Vis koder",
        undo: "Undo",
        redo: "Redo",
        preview: "Preview",
        print: "Print",
        tag_p: "Paragraph",
        tag_div: "Normal (DIV)",
        tag_h: "Overskrift",
        tag_blockquote: "Citer",
        tag_pre: "Code",
        template: "Schablone",
        lineHeight: "Linjeh\xF8jde",
        paragraphStyle: "Afsnitstil",
        textStyle: "Tekststil",
        imageGallery: "Billedgalleri",
        dir_ltr: "Venstre til h\xF8jre",
        dir_rtl: "H\xF8jre til venstre",
        mention: "N\xE6vne"
      },
      dialogBox: {
        linkBox: {
          title: "Inds\xE6t link",
          url: "URL til link",
          text: "Tekst for link",
          newWindowCheck: "\xC5ben i nyt faneblad",
          downloadLinkCheck: "Download link",
          bookmark: "Bogm\xE6rke"
        },
        mathBox: {
          title: "Math",
          inputLabel: "Matematisk notation",
          fontSizeLabel: "Skriftst\xF8rrelse",
          previewLabel: "Preview"
        },
        imageBox: {
          title: "Inds\xE6t billede",
          file: "Inds\xE6t fra fil",
          url: "Inds\xE6t fra URL",
          altText: "Alternativ tekst"
        },
        videoBox: {
          title: "Inds\xE6t Video",
          file: "Inds\xE6t fra fil",
          url: "Indlejr video / YouTube,Vimeo"
        },
        audioBox: {
          title: "Inds\xE6t Audio",
          file: "Inds\xE6t fra fil",
          url: "Inds\xE6t fra URL"
        },
        browser: {
          tags: "Tags",
          search: "S\xF8g"
        },
        caption: "Inds\xE6t beskrivelse",
        close: "Luk",
        submitButton: "Gennemf\xF8r",
        revertButton: "Gendan",
        proportion: "Bevar proportioner",
        basic: "Basis",
        left: "Venstre",
        right: "H\xF8jre",
        center: "Center",
        width: "Bredde",
        height: "H\xF8jde",
        size: "St\xF8rrelse",
        ratio: "Forhold"
      },
      controller: {
        edit: "Rediger",
        unlink: "Fjern link",
        remove: "Fjern",
        insertRowAbove: "Inds\xE6t r\xE6kke foroven",
        insertRowBelow: "Inds\xE6t r\xE6kke nedenfor",
        deleteRow: "Slet r\xE6kke",
        insertColumnBefore: "Inds\xE6t kolonne f\xF8r",
        insertColumnAfter: "Inds\xE6t kolonne efter",
        deleteColumn: "Slet kolonne",
        fixedColumnWidth: "Fast s\xF8jlebredde",
        resize100: "Forst\xF8r 100%",
        resize75: "Forst\xF8r 75%",
        resize50: "Forst\xF8r 50%",
        resize25: "Forst\xF8r 25%",
        autoSize: "Auto st\xF8rrelse",
        mirrorHorizontal: "Spejling, horisontal",
        mirrorVertical: "Spejling, vertikal",
        rotateLeft: "Roter til venstre",
        rotateRight: "Toter til h\xF8jre",
        maxSize: "Max st\xF8rrelse",
        minSize: "Min st\xF8rrelse",
        tableHeader: "Tabel overskrift",
        mergeCells: "Sammenl\xE6g celler (merge)",
        splitCells: "Opdel celler",
        HorizontalSplit: "Opdel horisontalt",
        VerticalSplit: "Opdel vertikalt"
      },
      menu: {
        spaced: "Brev Afstand",
        bordered: "Afgr\xE6nsningslinje",
        neon: "Neon",
        translucent: "Gennemsigtig",
        shadow: "Skygge",
        code: "Code"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "da", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Dn);
const On = Dn.exports;
var Vn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "de",
      toolbar: {
        default: "Standard",
        save: "Speichern",
        font: "Schriftart",
        formats: "Format",
        fontSize: "Schriftgr\xF6\xDFe",
        bold: "Fett",
        underline: "Unterstrichen",
        italic: "Kursiv",
        strike: "Durchgestrichen",
        subscript: "Tiefgestellt",
        superscript: "Hochgestellt",
        removeFormat: "Format entfernen",
        fontColor: "Schriftfarbe",
        hiliteColor: "Farbe f\xFCr Hervorhebungen",
        indent: "Einzug vergr\xF6\xDFern",
        outdent: "Einzug verkleinern",
        align: "Ausrichtung",
        alignLeft: "Links ausrichten",
        alignRight: "Rechts ausrichten",
        alignCenter: "Zentriert ausrichten",
        alignJustify: "Blocksatz",
        list: "Liste",
        orderList: "Nummerierte Liste",
        unorderList: "Aufz\xE4hlung",
        horizontalRule: "Horizontale Linie",
        hr_solid: "Strich",
        hr_dotted: "Gepunktet",
        hr_dashed: "Gestrichelt",
        table: "Tabelle",
        link: "Link",
        math: "Mathematik",
        image: "Bild",
        video: "Video",
        audio: "Audio",
        fullScreen: "Vollbild",
        showBlocks: "Blockformatierungen anzeigen",
        codeView: "Quelltext anzeigen",
        undo: "R\xFCckg\xE4ngig",
        redo: "Wiederholen",
        preview: "Vorschau",
        print: "Drucken",
        tag_p: "Absatz",
        tag_div: "Normal (DIV)",
        tag_h: "Header",
        tag_blockquote: "Zitat",
        tag_pre: "Quellcode",
        template: "Vorlage",
        lineHeight: "Zeilenh\xF6he",
        paragraphStyle: "Absatzstil",
        textStyle: "Textstil",
        imageGallery: "Bildergalerie",
        dir_ltr: "Links nach rechts",
        dir_rtl: "Rechts nach links",
        mention: "Erw\xE4hnen"
      },
      dialogBox: {
        linkBox: {
          title: "Link einf\xFCgen",
          url: "Link-URL",
          text: "Link-Text",
          newWindowCheck: "In neuem Fenster anzeigen",
          downloadLinkCheck: "Download-Link",
          bookmark: "Lesezeichen"
        },
        mathBox: {
          title: "Mathematik",
          inputLabel: "Mathematische Notation",
          fontSizeLabel: "Schriftgr\xF6\xDFe",
          previewLabel: "Vorschau"
        },
        imageBox: {
          title: "Bild einf\xFCgen",
          file: "Datei ausw\xE4hlen",
          url: "Bild-URL",
          altText: "Alternativer Text"
        },
        videoBox: {
          title: "Video einf\xFCgen",
          file: "Datei ausw\xE4hlen",
          url: "Video-URL, YouTube/Vimeo"
        },
        audioBox: {
          title: "Audio einf\xFCgen",
          file: "Datei ausw\xE4hlen",
          url: "Audio-URL"
        },
        browser: {
          tags: "Stichworte",
          search: "Suche"
        },
        caption: "Beschreibung eingeben",
        close: "Schlie\xDFen",
        submitButton: "\xDCbernehmen",
        revertButton: "R\xFCckg\xE4ngig",
        proportion: "Seitenverh\xE4ltnis beibehalten",
        basic: "Standard",
        left: "Links",
        right: "Rechts",
        center: "Zentriert",
        width: "Breite",
        height: "H\xF6he",
        size: "Gr\xF6\xDFe",
        ratio: "Verh\xE4ltnis"
      },
      controller: {
        edit: "Bearbeiten",
        unlink: "Link entfernen",
        remove: "L\xF6schen",
        insertRowAbove: "Zeile oberhalb einf\xFCgen",
        insertRowBelow: "Zeile unterhalb einf\xFCgen",
        deleteRow: "Zeile l\xF6schen",
        insertColumnBefore: "Spalte links einf\xFCgen",
        insertColumnAfter: "Spalte rechts einf\xFCgen",
        deleteColumn: "Spalte l\xF6schen",
        fixedColumnWidth: "Feste Spaltenbreite",
        resize100: "Zoom 100%",
        resize75: "Zoom 75%",
        resize50: "Zoom 50%",
        resize25: "Zoom 25%",
        autoSize: "Automatische Gr\xF6\xDFenanpassung",
        mirrorHorizontal: "Horizontal spiegeln",
        mirrorVertical: "Vertikal spiegeln",
        rotateLeft: "Nach links drehen",
        rotateRight: "Nach rechts drehen",
        maxSize: "Maximale Gr\xF6\xDFe",
        minSize: "Mindestgr\xF6\xDFe",
        tableHeader: "Tabellen\xFCberschrift",
        mergeCells: "Zellen verbinden",
        splitCells: "Zellen teilen",
        HorizontalSplit: "Horizontal teilen",
        VerticalSplit: "Vertikal teilen"
      },
      menu: {
        spaced: "Buchstabenabstand",
        bordered: "Umrandet",
        neon: "Neon",
        translucent: "Durchscheinend",
        shadow: "Schatten",
        code: "Quellcode"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "de", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Vn);
const Un = Vn.exports;
var Fn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "en",
      toolbar: {
        default: "Default",
        save: "Save",
        font: "Font",
        formats: "Formats",
        fontSize: "Size",
        bold: "Bold",
        underline: "Underline",
        italic: "Italic",
        strike: "Strike",
        subscript: "Subscript",
        superscript: "Superscript",
        removeFormat: "Remove Format",
        fontColor: "Font Color",
        hiliteColor: "Highlight Color",
        indent: "Indent",
        outdent: "Outdent",
        align: "Align",
        alignLeft: "Align left",
        alignRight: "Align right",
        alignCenter: "Align center",
        alignJustify: "Align justify",
        list: "List",
        orderList: "Ordered list",
        unorderList: "Unordered list",
        horizontalRule: "Horizontal line",
        hr_solid: "Solid",
        hr_dotted: "Dotted",
        hr_dashed: "Dashed",
        table: "Table",
        link: "Link",
        math: "Math",
        image: "Image",
        video: "Video",
        audio: "Audio",
        fullScreen: "Full screen",
        showBlocks: "Show blocks",
        codeView: "Code view",
        undo: "Undo",
        redo: "Redo",
        preview: "Preview",
        print: "print",
        tag_p: "Paragraph",
        tag_div: "Normal (DIV)",
        tag_h: "Header",
        tag_blockquote: "Quote",
        tag_pre: "Code",
        template: "Template",
        lineHeight: "Line height",
        paragraphStyle: "Paragraph style",
        textStyle: "Text style",
        imageGallery: "Image gallery",
        dir_ltr: "Left to right",
        dir_rtl: "Right to left",
        mention: "Mention"
      },
      dialogBox: {
        linkBox: {
          title: "Insert Link",
          url: "URL to link",
          text: "Text to display",
          newWindowCheck: "Open in new window",
          downloadLinkCheck: "Download link",
          bookmark: "Bookmark"
        },
        mathBox: {
          title: "Math",
          inputLabel: "Mathematical Notation",
          fontSizeLabel: "Font Size",
          previewLabel: "Preview"
        },
        imageBox: {
          title: "Insert image",
          file: "Select from files",
          url: "Image URL",
          altText: "Alternative text"
        },
        videoBox: {
          title: "Insert Video",
          file: "Select from files",
          url: "Media embed URL, YouTube/Vimeo"
        },
        audioBox: {
          title: "Insert Audio",
          file: "Select from files",
          url: "Audio URL"
        },
        browser: {
          tags: "Tags",
          search: "Search"
        },
        caption: "Insert description",
        close: "Close",
        submitButton: "Submit",
        revertButton: "Revert",
        proportion: "Constrain proportions",
        basic: "Basic",
        left: "Left",
        right: "Right",
        center: "Center",
        width: "Width",
        height: "Height",
        size: "Size",
        ratio: "Ratio"
      },
      controller: {
        edit: "Edit",
        unlink: "Unlink",
        remove: "Remove",
        insertRowAbove: "Insert row above",
        insertRowBelow: "Insert row below",
        deleteRow: "Delete row",
        insertColumnBefore: "Insert column before",
        insertColumnAfter: "Insert column after",
        deleteColumn: "Delete column",
        fixedColumnWidth: "Fixed column width",
        resize100: "Resize 100%",
        resize75: "Resize 75%",
        resize50: "Resize 50%",
        resize25: "Resize 25%",
        autoSize: "Auto size",
        mirrorHorizontal: "Mirror, Horizontal",
        mirrorVertical: "Mirror, Vertical",
        rotateLeft: "Rotate left",
        rotateRight: "Rotate right",
        maxSize: "Max size",
        minSize: "Min size",
        tableHeader: "Table header",
        mergeCells: "Merge cells",
        splitCells: "Split Cells",
        HorizontalSplit: "Horizontal split",
        VerticalSplit: "Vertical split"
      },
      menu: {
        spaced: "Spaced",
        bordered: "Bordered",
        neon: "Neon",
        translucent: "Translucent",
        shadow: "Shadow",
        code: "Code"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "en", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Fn);
const _t = Fn.exports;
var Hn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "es",
      toolbar: {
        default: "Valor por defecto",
        save: "Guardar",
        font: "Fuente",
        formats: "Formato",
        fontSize: "Tama\xF1o de fuente",
        bold: "Negrita",
        underline: "Subrayado",
        italic: "Cursiva",
        strike: "Tachado",
        subscript: "Sub\xEDndice",
        superscript: "Super\xEDndice",
        removeFormat: "Eliminar formato",
        fontColor: "Color de fuente",
        hiliteColor: "Color de resaltado",
        indent: "M\xE1s tabulaci\xF3n",
        outdent: "Menos tabulaci\xF3n",
        align: "Alinear",
        alignLeft: "Alinear a la izquierda",
        alignRight: "Alinear a la derecha",
        alignCenter: "Alinear al centro",
        alignJustify: "Justificar",
        list: "Lista",
        orderList: "Lista ordenada",
        unorderList: "Lista desordenada",
        horizontalRule: "Horizontal line",
        hr_solid: "L\xEDnea horizontal solida",
        hr_dotted: "L\xEDnea horizontal punteada",
        hr_dashed: "L\xEDnea horizontal discontinua",
        table: "Tabla",
        link: "Link",
        math: "Matem\xE1ticas",
        image: "Imagen",
        video: "Video",
        audio: "Audio",
        fullScreen: "Pantalla completa",
        showBlocks: "Ver bloques",
        codeView: "Ver c\xF3digo fuente",
        undo: "UndoDeshacer \xFAltima acci\xF3n",
        redo: "Rehacer \xFAltima acci\xF3n",
        preview: "Vista previa",
        print: "Imprimir",
        tag_p: "P\xE1rrafo",
        tag_div: "Normal (DIV)",
        tag_h: "Header",
        tag_blockquote: "Cita",
        tag_pre: "C\xF3digo",
        template: "Plantilla",
        lineHeight: "Altura de la l\xEDnea",
        paragraphStyle: "Estilo del parrafo",
        textStyle: "Estilo del texto",
        imageGallery: "Galer\xEDa de im\xE1genes",
        dir_ltr: "De izquierda a derecha",
        dir_rtl: "De derecha a izquierda",
        mention: "Mencionar"
      },
      dialogBox: {
        linkBox: {
          title: "Insertar Link",
          url: "\xBFHacia que URL lleva el link?",
          text: "Texto para mostrar",
          newWindowCheck: "Abrir en una nueva ventana",
          downloadLinkCheck: "Enlace de descarga",
          bookmark: "Marcador"
        },
        mathBox: {
          title: "Matem\xE1ticas",
          inputLabel: "Notaci\xF3n Matem\xE1tica",
          fontSizeLabel: "Tama\xF1o de fuente",
          previewLabel: "Vista previa"
        },
        imageBox: {
          title: "Insertar imagen",
          file: "Seleccionar desde los archivos",
          url: "URL de la imagen",
          altText: "Texto alternativo"
        },
        videoBox: {
          title: "Insertar Video",
          file: "Seleccionar desde los archivos",
          url: "\xBFURL del v\xEDdeo? Youtube/Vimeo"
        },
        audioBox: {
          title: "Insertar Audio",
          file: "Seleccionar desde los archivos",
          url: "URL de la audio"
        },
        browser: {
          tags: "Etiquetas",
          search: "Buscar"
        },
        caption: "Insertar descripci\xF3n",
        close: "Cerrar",
        submitButton: "Enviar",
        revertButton: "revertir",
        proportion: "Restringir las proporciones",
        basic: "Basico",
        left: "Izquierda",
        right: "derecha",
        center: "Centro",
        width: "Ancho",
        height: "Alto",
        size: "Tama\xF1o",
        ratio: "Proporci\xF3n"
      },
      controller: {
        edit: "Editar",
        unlink: "Desvincular",
        remove: "RemoveQuitar",
        insertRowAbove: "Insertar fila arriba",
        insertRowBelow: "Insertar fila debajo",
        deleteRow: "Eliminar fila",
        insertColumnBefore: "Insertar columna antes",
        insertColumnAfter: "Insertar columna despu\xE9s",
        deleteColumn: "Eliminar columna",
        fixedColumnWidth: "Ancho de columna fijo",
        resize100: "Redimensionar 100%",
        resize75: "Redimensionar 75%",
        resize50: "Redimensionar 50%",
        resize25: "Redimensionar 25%",
        autoSize: "Tama\xF1o autom\xE1tico",
        mirrorHorizontal: "Espejo, Horizontal",
        mirrorVertical: "Espejo, Vertical",
        rotateLeft: "Girar a la izquierda",
        rotateRight: "Girar a la derecha",
        maxSize: "Tama\xF1o m\xE1ximo",
        minSize: "Tama\xF1o min\xEDmo",
        tableHeader: "Encabezado de tabla",
        mergeCells: "Combinar celdas",
        splitCells: "Dividir celdas",
        HorizontalSplit: "Divisi\xF3n horizontal",
        VerticalSplit: "Divisi\xF3n vertical"
      },
      menu: {
        spaced: "Espaciado",
        bordered: "Bordeado",
        neon: "Ne\xF3n",
        translucent: "Transl\xFAcido",
        shadow: "Sombreado",
        code: "C\xF3digo"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "es", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Hn);
const Pn = Hn.exports;
var $n = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "fr",
      toolbar: {
        default: "D\xE9faut",
        save: "Sauvegarder",
        font: "Police",
        formats: "Formats",
        fontSize: "Taille",
        bold: "Gras",
        underline: "Soulign\xE9",
        italic: "Italique",
        strike: "Barr\xE9",
        subscript: "Indice",
        superscript: "Exposant",
        removeFormat: "Effacer le formatage",
        fontColor: "Couleur du texte",
        hiliteColor: "Couleur en arri\xE8re plan",
        indent: "Indenter",
        outdent: "D\xE9sindenter",
        align: "Alignement",
        alignLeft: "\xC0 gauche",
        alignRight: "\xC0 droite",
        alignCenter: "Centr\xE9",
        alignJustify: "Justifi\xE9",
        list: "Liste",
        orderList: "Ordonn\xE9e",
        unorderList: "Non-ordonn\xE9e",
        horizontalRule: "Ligne horizontale",
        hr_solid: "Solide",
        hr_dotted: "Points",
        hr_dashed: "Tirets",
        table: "Table",
        link: "Lien",
        math: "Math",
        image: "Image",
        video: "Video",
        audio: "Audio",
        fullScreen: "Plein \xE9cran",
        showBlocks: "Voir les blocs",
        codeView: "Voir le code",
        undo: "Annuler",
        redo: "R\xE9tablir",
        preview: "Pr\xE9visualiser",
        print: "Imprimer",
        tag_p: "Paragraphe",
        tag_div: "Normal (DIV)",
        tag_h: "Titre",
        tag_blockquote: "Citation",
        tag_pre: "Code",
        template: "Template",
        lineHeight: "Hauteur de la ligne",
        paragraphStyle: "Style de paragraphe",
        textStyle: "Style de texte",
        imageGallery: "Galerie d'images",
        dir_ltr: "De gauche \xE0 droite",
        dir_rtl: "De droite \xE0 gauche",
        mention: "Mention"
      },
      dialogBox: {
        linkBox: {
          title: "Ins\xE9rer un lien",
          url: "Adresse URL du lien",
          text: "Texte \xE0 afficher",
          newWindowCheck: "Ouvrir dans une nouvelle fen\xEAtre",
          downloadLinkCheck: "Lien de t\xE9l\xE9chargement",
          bookmark: "Signet"
        },
        mathBox: {
          title: "Math",
          inputLabel: "Notation math\xE9matique",
          fontSizeLabel: "Taille",
          previewLabel: "Pr\xE9visualiser"
        },
        imageBox: {
          title: "Ins\xE9rer une image",
          file: "S\xE9lectionner le fichier",
          url: "Adresse URL du fichier",
          altText: "Texte Alternatif"
        },
        videoBox: {
          title: "Ins\xE9rer une vid\xE9o",
          file: "S\xE9lectionner le fichier",
          url: "URL d\u2019int\xE9gration du m\xE9dia, YouTube/Vimeo"
        },
        audioBox: {
          title: "Ins\xE9rer un fichier audio",
          file: "S\xE9lectionner le fichier",
          url: "Adresse URL du fichier"
        },
        browser: {
          tags: "Mots cl\xE9s",
          search: "Chercher"
        },
        caption: "Ins\xE9rer une description",
        close: "Fermer",
        submitButton: "Appliquer",
        revertButton: "Revenir en arri\xE8re",
        proportion: "Maintenir le rapport hauteur/largeur",
        basic: "Basique",
        left: "Gauche",
        right: "Droite",
        center: "Centr\xE9",
        width: "Largeur",
        height: "Hauteur",
        size: "Taille",
        ratio: "Rapport"
      },
      controller: {
        edit: "Modifier",
        unlink: "Supprimer un lien",
        remove: "Effacer",
        insertRowAbove: "Ins\xE9rer une ligne en dessous",
        insertRowBelow: "Ins\xE9rer une ligne au dessus",
        deleteRow: "Effacer la ligne",
        insertColumnBefore: "Ins\xE9rer une colonne avant",
        insertColumnAfter: "Ins\xE9rer une colonne apr\xE8s",
        deleteColumn: "Effacer la colonne",
        fixedColumnWidth: "Largeur de colonne fixe",
        resize100: "Redimensionner \xE0 100%",
        resize75: "Redimensionner \xE0 75%",
        resize50: "Redimensionner \xE0 50%",
        resize25: "Redimensionner \xE0 25%",
        autoSize: "Taille automatique",
        mirrorHorizontal: "Mirroir, Horizontal",
        mirrorVertical: "Mirroir, Vertical",
        rotateLeft: "Rotation \xE0 gauche",
        rotateRight: "Rotation \xE0 droite",
        maxSize: "Taille max",
        minSize: "Taille min",
        tableHeader: "En-t\xEAte de table",
        mergeCells: "Fusionner les cellules",
        splitCells: "Diviser les Cellules",
        HorizontalSplit: "Scission horizontale",
        VerticalSplit: "Scission verticale"
      },
      menu: {
        spaced: "Espacement",
        bordered: "Ligne de d\xE9marcation",
        neon: "N\xE9on",
        translucent: "Translucide",
        shadow: "Ombre",
        code: "Code"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "fr", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})($n);
const jn = $n.exports;
var Gn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "he",
      toolbar: {
        default: "\u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC",
        save: "\u05E9\u05DE\u05D5\u05E8",
        font: "\u05D2\u05D5\u05E4\u05DF",
        formats: "\u05E2\u05D9\u05E6\u05D5\u05D1",
        fontSize: "\u05D2\u05D5\u05D3\u05DC",
        bold: "\u05DE\u05D5\u05D3\u05D2\u05E9",
        underline: "\u05E7\u05D5 \u05EA\u05D7\u05EA\u05D5\u05DF",
        italic: "\u05E0\u05D8\u05D5\u05D9",
        strike: "\u05E7\u05D5 \u05D7\u05D5\u05E6\u05D4",
        subscript: "\u05E2\u05D9\u05DC\u05D9",
        superscript: "\u05EA\u05D7\u05EA\u05D9",
        removeFormat: "\u05D4\u05E1\u05E8 \u05E2\u05D9\u05E6\u05D5\u05D1",
        fontColor: "\u05E6\u05D1\u05E2 \u05D2\u05D5\u05E4\u05DF",
        hiliteColor: "\u05E6\u05D1\u05E2 \u05E7\u05D5 \u05EA\u05D7\u05EA\u05D5\u05DF",
        indent: "\u05D4\u05D2\u05D3\u05DC \u05DB\u05E0\u05D9\u05E1\u05D4",
        outdent: "\u05D4\u05E7\u05D8\u05DF \u05DB\u05E0\u05D9\u05E1\u05D4",
        align: "\u05D9\u05D9\u05E9\u05D5\u05E8",
        alignLeft: "\u05D9\u05D9\u05E9\u05E8 \u05DC\u05E9\u05DE\u05D0\u05DC",
        alignRight: "\u05D9\u05D9\u05E9\u05E8 \u05DC\u05D9\u05DE\u05D9\u05DF",
        alignCenter: "\u05DE\u05E8\u05DB\u05D6",
        alignJustify: "\u05D9\u05D9\u05E9\u05E8 \u05DC\u05E9\u05E0\u05D9 \u05D4\u05E6\u05D3\u05D3\u05D9\u05DD",
        list: "\u05E8\u05E9\u05D9\u05DE\u05D4",
        orderList: "\u05DE\u05E1\u05E4\u05D5\u05E8",
        unorderList: "\u05EA\u05D1\u05DC\u05D9\u05D8\u05D9\u05DD",
        horizontalRule: "\u05E7\u05D5 \u05D0\u05D5\u05E4\u05E7\u05D9",
        hr_solid: "\u05E7\u05D5",
        hr_dotted: "\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA",
        hr_dashed: "\u05DE\u05E7\u05E4\u05D9\u05DD",
        table: "\u05D8\u05D1\u05DC\u05D4",
        link: "\u05E7\u05D9\u05E9\u05D5\u05E8",
        math: "\u05DE\u05EA\u05DE\u05D8\u05D9\u05E7\u05D4",
        image: "\u05EA\u05DE\u05D5\u05E0\u05D4",
        video: "\u05D7\u05D5\u05D6\u05D9",
        audio: "\u05E9\u05DE\u05E2",
        fullScreen: "\u05DE\u05E1\u05DA \u05DE\u05DC\u05D0",
        showBlocks: "\u05D4\u05E6\u05D2 \u05D2\u05D5\u05E9\u05D9\u05DD",
        codeView: "\u05D4\u05E6\u05D2 \u05E7\u05D5\u05D3",
        undo: "\u05D1\u05D8\u05DC",
        redo: "\u05D7\u05D6\u05D5\u05E8",
        preview: "\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4",
        print: "\u05D4\u05D3\u05E4\u05E1",
        tag_p: "\u05E4\u05E1\u05E7\u05D4",
        tag_div: "\u05E8\u05D2\u05D9\u05DC\u05D4 (DIV)",
        tag_h: "\u05DB\u05D5\u05EA\u05E8\u05EA",
        tag_blockquote: "\u05E6\u05D9\u05D8\u05D5\u05D8",
        tag_pre: "\u05E7\u05D5\u05D3",
        template: "\u05EA\u05D1\u05E0\u05D9\u05EA",
        lineHeight: "\u05D2\u05D5\u05D1\u05D4 \u05D4\u05E9\u05D5\u05E8\u05D4",
        paragraphStyle: "\u05E1\u05D2\u05E0\u05D5\u05DF \u05E4\u05E1\u05E7\u05D4",
        textStyle: "\u05E1\u05D2\u05E0\u05D5\u05DF \u05D2\u05D5\u05E4\u05DF",
        imageGallery: "\u05D2\u05DC\u05E8\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
        dir_ltr: "\u05DE\u05E9\u05DE\u05D0\u05DC \u05DC\u05D9\u05DE\u05D9\u05DF",
        dir_rtl: "\u05DE\u05D9\u05DE\u05D9\u05DF \u05DC\u05E9\u05DE\u05D0\u05DC",
        mention: "\u05D4\u05D6\u05DB\u05E8"
      },
      dialogBox: {
        linkBox: {
          title: "\u05D4\u05DB\u05E0\u05E1 \u05E7\u05E9\u05D5\u05E8",
          url: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E7\u05E9\u05D5\u05E8",
          text: "\u05EA\u05D9\u05D0\u05D5\u05E8",
          newWindowCheck: "\u05E4\u05EA\u05D7 \u05D1\u05D7\u05DC\u05D5\u05DF \u05D7\u05D3\u05E9",
          downloadLinkCheck: "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D4\u05D5\u05E8\u05D3\u05D4",
          bookmark: "\u05E1\u05DE\u05E0\u05D9\u05D4"
        },
        mathBox: {
          title: "\u05E0\u05D5\u05E1\u05D7\u05D4",
          inputLabel: "\u05E1\u05D9\u05DE\u05E0\u05D9\u05DD \u05DE\u05EA\u05DE\u05D8\u05D9\u05DD",
          fontSizeLabel: "\u05D2\u05D5\u05D3\u05DC \u05D2\u05D5\u05E4\u05DF",
          previewLabel: "\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4"
        },
        imageBox: {
          title: "\u05D4\u05DB\u05E0\u05E1 \u05EA\u05DE\u05D5\u05E0\u05D4",
          file: "\u05D1\u05D7\u05E8 \u05DE\u05E7\u05D5\u05D1\u05E5",
          url: "\u05DB\u05EA\u05D5\u05D1\u05EA URL \u05EA\u05DE\u05D5\u05E0\u05D4",
          altText: "\u05EA\u05D9\u05D0\u05D5\u05E8 (\u05EA\u05D2\u05D9\u05EA alt)"
        },
        videoBox: {
          title: "\u05D4\u05DB\u05E0\u05E1 \u05E1\u05E8\u05D8\u05D5\u05DF",
          file: "\u05D1\u05D7\u05E8 \u05DE\u05E7\u05D5\u05D1\u05E5",
          url: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D8\u05DE\u05E2\u05D4 YouTube/Vimeo"
        },
        audioBox: {
          title: "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DE\u05E2",
          file: "\u05D1\u05D7\u05E8 \u05DE\u05E7\u05D5\u05D1\u05E5",
          url: "\u05DB\u05EA\u05D5\u05D1\u05EA URL \u05E9\u05DE\u05E2"
        },
        browser: {
          tags: "\u05EA\u05D2",
          search: "\u05D7\u05E4\u05E9"
        },
        caption: "\u05D4\u05DB\u05E0\u05E1 \u05EA\u05D9\u05D0\u05D5\u05E8",
        close: "\u05E1\u05D2\u05D5\u05E8",
        submitButton: "\u05E9\u05DC\u05D7",
        revertButton: "\u05D1\u05D8\u05DC",
        proportion: "\u05E9\u05DE\u05E8 \u05D9\u05D7\u05E1",
        basic: "\u05D1\u05E1\u05D9\u05E1\u05D9",
        left: "\u05E9\u05DE\u05D0\u05DC",
        right: "\u05D9\u05DE\u05D9\u05DF",
        center: "\u05DE\u05E8\u05DB\u05D6",
        width: "\u05E8\u05D5\u05D7\u05D1",
        height: "\u05D2\u05D5\u05D1\u05D4",
        size: "\u05D2\u05D5\u05D3\u05DC",
        ratio: "\u05D9\u05D7\u05E1"
      },
      controller: {
        edit: "\u05E2\u05E8\u05D5\u05DA",
        unlink: "\u05D4\u05E1\u05E8 \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",
        remove: "\u05D4\u05E1\u05E8",
        insertRowAbove: "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05D5\u05E8\u05D4 \u05DE\u05E2\u05DC",
        insertRowBelow: "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05D5\u05E8\u05D4 \u05DE\u05EA\u05D7\u05EA",
        deleteRow: "\u05DE\u05D7\u05E7 \u05E9\u05D5\u05E8\u05D4",
        insertColumnBefore: "\u05D4\u05DB\u05E0\u05E1 \u05E2\u05DE\u05D5\u05D3\u05D4 \u05DC\u05E4\u05E0\u05D9",
        insertColumnAfter: "\u05D4\u05DB\u05E0\u05E1 \u05E2\u05DE\u05D5\u05D3\u05D4 \u05D0\u05D7\u05E8\u05D9",
        deleteColumn: "\u05DE\u05D7\u05E7 \u05E2\u05DE\u05D5\u05D3\u05D4",
        fixedColumnWidth: "\u05E7\u05D1\u05E2 \u05E8\u05D5\u05D7\u05D1 \u05E2\u05DE\u05D5\u05D3\u05D5\u05EA",
        resize100: "\u05DC\u05DC\u05D0 \u05D4\u05E7\u05D8\u05E0\u05D4",
        resize75: "\u05D4\u05E7\u05D8\u05DF 75%",
        resize50: "\u05D4\u05E7\u05D8\u05DF 50%",
        resize25: "\u05D4\u05E7\u05D8\u05DF 25%",
        autoSize: "\u05D4\u05E7\u05D8\u05DF \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA",
        mirrorHorizontal: "\u05D4\u05E4\u05D5\u05DA \u05DC\u05E8\u05D5\u05D7\u05D1",
        mirrorVertical: "\u05D4\u05E4\u05D5\u05DA \u05DC\u05D2\u05D5\u05D1\u05D4",
        rotateLeft: "\u05E1\u05D5\u05D1\u05D1 \u05E9\u05DE\u05D0\u05DC\u05D4",
        rotateRight: "\u05E1\u05D5\u05D1\u05D1 \u05D9\u05DE\u05D9\u05E0\u05D4",
        maxSize: "\u05D2\u05D5\u05D3\u05DC \u05DE\u05E8\u05D1\u05D9",
        minSize: "\u05D2\u05D5\u05D3\u05DC \u05DE\u05D6\u05E2\u05E8\u05D9",
        tableHeader: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05D8\u05D1\u05DC\u05D4",
        mergeCells: "\u05DE\u05D6\u05D2 \u05EA\u05D0\u05D9\u05DD",
        splitCells: "\u05E4\u05E6\u05DC \u05EA\u05D0",
        HorizontalSplit: "\u05E4\u05E6\u05DC \u05DC\u05D2\u05D5\u05D1\u05D4",
        VerticalSplit: "\u05E4\u05E6\u05DC \u05DC\u05E8\u05D5\u05D7\u05D1"
      },
      menu: {
        spaced: "\u05DE\u05E8\u05D5\u05D5\u05D7",
        bordered: "\u05D1\u05E2\u05DC \u05DE\u05D9\u05EA\u05D0\u05E8",
        neon: "\u05D6\u05D5\u05D4\u05E8",
        translucent: "\u05E9\u05E7\u05D5\u05E3 \u05DC\u05DE\u05D7\u05E6\u05D4",
        shadow: "\u05E6\u05DC",
        code: "\u05E7\u05D5\u05D3"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "he", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Gn);
const qn = Gn.exports;
var Wn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG una finestra con un documento");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "it",
      toolbar: {
        default: "Predefinita",
        save: "Salva",
        font: "Font",
        formats: "Formato",
        fontSize: "Grandezza",
        bold: "Grassetto",
        underline: "Sottolineato",
        italic: "Corsivo",
        strike: "Barrato",
        subscript: "Apice",
        superscript: "Pedice",
        removeFormat: "Rimuovi formattazione",
        fontColor: "Colore testo",
        hiliteColor: "Colore sottolineatura",
        indent: "Aumenta rientro",
        outdent: "Riduci rientro",
        align: "Allinea",
        alignLeft: "Allinea a sinistra",
        alignRight: "Allinea a destra",
        alignCenter: "Allinea al centro",
        alignJustify: "Giustifica testo",
        list: "Elenco",
        orderList: "Elenco numerato",
        unorderList: "Elenco puntato",
        horizontalRule: "Linea orizzontale",
        hr_solid: "Linea continua",
        hr_dotted: "Puntini",
        hr_dashed: "Trattini",
        table: "Tabella",
        link: "Collegamento ipertestuale",
        math: "Formula matematica",
        image: "Immagine",
        video: "Video",
        audio: "Audio",
        fullScreen: "A tutto schermo",
        showBlocks: "Visualizza blocchi",
        codeView: "Visualizza codice",
        undo: "Annulla",
        redo: "Ripristina",
        preview: "Anteprima",
        print: "Stampa",
        tag_p: "Paragrafo",
        tag_div: "Normale (DIV)",
        tag_h: "Titolo",
        tag_blockquote: "Citazione",
        tag_pre: "Codice",
        template: "Modello",
        lineHeight: "Interlinea",
        paragraphStyle: "Stile paragrafo",
        textStyle: "Stile testo",
        imageGallery: "Galleria di immagini",
        dir_ltr: "Da sinistra a destra",
        dir_rtl: "Da destra a sinistra",
        mention: "Menzione"
      },
      dialogBox: {
        linkBox: {
          title: "Inserisci un link",
          url: "Indirizzo",
          text: "Testo da visualizzare",
          newWindowCheck: "Apri in una nuova finestra",
          downloadLinkCheck: "Link per scaricare",
          bookmark: "Segnalibro"
        },
        mathBox: {
          title: "Matematica",
          inputLabel: "Notazione matematica",
          fontSizeLabel: "Grandezza testo",
          previewLabel: "Anteprima"
        },
        imageBox: {
          title: "Inserisci immagine",
          file: "Seleziona da file",
          url: "Indirizzo immagine",
          altText: "Testo alternativo (ALT)"
        },
        videoBox: {
          title: "Inserisci video",
          file: "Seleziona da file",
          url: "Indirizzo video di embed, YouTube/Vimeo"
        },
        audioBox: {
          title: "Inserisci audio",
          file: "Seleziona da file",
          url: "Indirizzo audio"
        },
        browser: {
          tags: "tag",
          search: "Ricerca"
        },
        caption: "Inserisci didascalia",
        close: "Chiudi",
        submitButton: "Invia",
        revertButton: "Annulla",
        proportion: "Proporzionale",
        basic: "Da impostazione",
        left: "Sinistra",
        right: "Destra",
        center: "Centrato",
        width: "Larghezza",
        height: "Altezza",
        size: "Dimensioni",
        ratio: "Rapporto"
      },
      controller: {
        edit: "Modifica",
        unlink: "Elimina link",
        remove: "Rimuovi",
        insertRowAbove: "Inserisci riga sopra",
        insertRowBelow: "Inserisci riga sotto",
        deleteRow: "Cancella riga",
        insertColumnBefore: "Inserisci colonna prima",
        insertColumnAfter: "Inserisci colonna dopo",
        deleteColumn: "Cancella colonna",
        fixedColumnWidth: "Larghezza delle colonne fissa",
        resize100: "Ridimensiona 100%",
        resize75: "Ridimensiona 75%",
        resize50: "Ridimensiona 50%",
        resize25: "Ridimensiona 25%",
        autoSize: "Ridimensione automatica",
        mirrorHorizontal: "Capovolgi orizzontalmente",
        mirrorVertical: "Capovolgi verticalmente",
        rotateLeft: "Ruota a sinistra",
        rotateRight: "Ruota a destra",
        maxSize: "Dimensione massima",
        minSize: "Dimensione minima",
        tableHeader: "Intestazione tabella",
        mergeCells: "Unisci celle",
        splitCells: "Dividi celle",
        HorizontalSplit: "Separa orizontalmente",
        VerticalSplit: "Separa verticalmente"
      },
      menu: {
        spaced: "Spaziato",
        bordered: "Bordato",
        neon: "Luminoso",
        translucent: "Traslucido",
        shadow: "Ombra",
        code: "Codice"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "it", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Wn);
const Yn = Wn.exports;
var Xn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "ja",
      toolbar: {
        default: "\u30C7\u30D5\u30A9\u30EB\u30C8",
        save: "\u4FDD\u5B58",
        font: "\u30D5\u30A9\u30F3\u30C8",
        formats: "\u6BB5\u843D\u5F62\u5F0F",
        fontSize: "\u30B5\u30A4\u30BA",
        bold: "\u592A\u5B57",
        underline: "\u4E0B\u7DDA",
        italic: "\u30A4\u30BF\u30EA\u30C3\u30AF",
        strike: "\u53D6\u308A\u6D88\u3057\u7DDA",
        subscript: "\u4E0B\u4ED8\u304D",
        superscript: "\u4E0A\u4ED8\u304D",
        removeFormat: "\u5F62\u5F0F\u3092\u524A\u9664",
        fontColor: "\u6587\u5B57\u8272",
        hiliteColor: "\u6587\u5B57\u306E\u80CC\u666F\u8272",
        indent: "\u30A4\u30F3\u30C7\u30F3\u30C8",
        outdent: "\u30A4\u30F3\u30C7\u30F3\u30C8",
        align: "\u30BD\u30FC\u30C8",
        alignLeft: "\u5DE6\u63C3\u3048",
        alignRight: "\u53F3\u63C3\u3048",
        alignCenter: "\u4E2D\u592E\u63C3\u3048",
        alignJustify: "\u4E21\u7AEF\u63C3\u3048",
        list: "\u30EA\u30B9\u30C8",
        orderList: "\u6570\u5024\u30D6\u30EA\u30C3\u30C8",
        unorderList: "\u5186\u5F62\u30D6\u30EA\u30C3\u30C8",
        horizontalRule: "\u6C34\u5E73\u7DDA\u3092\u633F\u5165",
        hr_solid: "\u5B9F\u7DDA",
        hr_dotted: "\u70B9\u7DDA",
        hr_dashed: "\u30C0\u30C3\u30B7\u30E5",
        table: "\u30C6\u30FC\u30D6\u30EB",
        link: "\u30EA\u30F3\u30AF",
        math: "\u6570\u5B66",
        image: "\u753B\u50CF",
        video: "\u52D5\u753B",
        audio: "\u30AA\u30FC\u30C7\u30A3\u30AA",
        fullScreen: "\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3",
        showBlocks: "\u30D6\u30ED\u30C3\u30AF\u8868\u793A",
        codeView: "HTML\u306E\u7DE8\u96C6",
        undo: "\u5143\u306B\u623B\u3059",
        redo: "\u518D\u5B9F\u884C",
        preview: "\u30D7\u30EC\u30D3\u30E5\u30FC",
        print: "\u5370\u5237",
        tag_p: "\u672C\u6587",
        tag_div: "\u57FA\u672C\uFF08DIV\uFF09",
        tag_h: "\u30BF\u30A4\u30C8\u30EB",
        tag_blockquote: "\u5F15\u7528",
        tag_pre: "\u30B3\u30FC\u30C9",
        template: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8",
        lineHeight: "\u884C\u306E\u9AD8\u3055",
        paragraphStyle: "\u6BB5\u843D\u30B9\u30BF\u30A4\u30EB",
        textStyle: "\u30C6\u30AD\u30B9\u30C8\u30B9\u30BF\u30A4\u30EB",
        imageGallery: "\u30A4\u30E1\u30FC\u30B8\u30AE\u30E3\u30E9\u30EA\u30FC",
        dir_ltr: "\u5DE6\u304B\u3089\u53F3\u3078",
        dir_rtl: "\u53F3\u304B\u3089\u5DE6\u306B",
        mention: "\u8A00\u53CA\u3059\u308B"
      },
      dialogBox: {
        linkBox: {
          title: "\u30EA\u30F3\u30AF\u306E\u633F\u5165",
          url: "\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u30A2\u30C9\u30EC\u30B9",
          text: "\u753B\u9762\u306E\u30C6\u30AD\u30B9\u30C8",
          newWindowCheck: "\u5225\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u958B\u304F",
          downloadLinkCheck: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u30EA\u30F3\u30AF",
          bookmark: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF"
        },
        mathBox: {
          title: "\u6570\u5B66",
          inputLabel: "\u6570\u5B66\u8868\u8A18",
          fontSizeLabel: "\u30B5\u30A4\u30BA",
          previewLabel: "\u30D7\u30EC\u30D3\u30E5\u30FC"
        },
        imageBox: {
          title: "\u753B\u50CF\u306E\u633F\u5165",
          file: "\u30D5\u30A1\u30A4\u30EB\u306E\u9078\u629E",
          url: "\u30A4\u30E1\u30FC\u30B8\u30A2\u30C9\u30EC\u30B9",
          altText: "\u7F6E\u63DB\u6587\u5B57\u5217"
        },
        videoBox: {
          title: "\u52D5\u753B\u3092\u633F\u5165",
          file: "\u30D5\u30A1\u30A4\u30EB\u306E\u9078\u629E",
          url: "\u30E1\u30C7\u30A3\u30A2\u57CB\u3081\u8FBC\u307F\u30A2\u30C9\u30EC\u30B9, YouTube/Vimeo"
        },
        audioBox: {
          title: "\u30AA\u30FC\u30C7\u30A3\u30AA\u3092\u633F\u5165",
          file: "\u30D5\u30A1\u30A4\u30EB\u306E\u9078\u629E",
          url: "\u30AA\u30FC\u30C7\u30A3\u30AA\u30A2\u30C9\u30EC\u30B9"
        },
        browser: {
          tags: "\u30BF\u30B0",
          search: "\u63A2\u3059"
        },
        caption: "\u8AAC\u660E\u4ED8\u3051",
        close: "\u9589\u3058\u308B",
        submitButton: "\u78BA\u8A8D",
        revertButton: "\u5143\u306B\u623B\u3059",
        proportion: "\u306E\u5272\u5408\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA",
        basic: "\u57FA\u672C",
        left: "\u5DE6",
        right: "\u53F3",
        center: "\u4E2D\u592E",
        width: "\u6A2A",
        height: "\u7E26",
        size: "\u30B5\u30A4\u30BA",
        ratio: "\u6BD4\u7387"
      },
      controller: {
        edit: "\u7DE8\u96C6",
        unlink: "\u30EA\u30F3\u30AF\u89E3\u9664",
        remove: "\u524A\u9664",
        insertRowAbove: "\u4E0A\u306B\u884C\u3092\u633F\u5165",
        insertRowBelow: "\u4E0B\u306B\u884C\u3092\u633F\u5165",
        deleteRow: "\u884C\u306E\u524A\u9664",
        insertColumnBefore: "\u5DE6\u306B\u5217\u3092\u633F\u5165",
        insertColumnAfter: "\u53F3\u306B\u5217\u3092\u633F\u5165",
        deleteColumn: "\u5217\u3092\u524A\u9664\u3059\u308B",
        fixedColumnWidth: "\u56FA\u5B9A\u5217\u5E45",
        resize100: "100\uFF05 \u30B5\u30A4\u30BA",
        resize75: "75\uFF05 \u30B5\u30A4\u30BA",
        resize50: "50\uFF05 \u30B5\u30A4\u30BA",
        resize25: "25\uFF05 \u30B5\u30A4\u30BA",
        autoSize: "\u81EA\u52D5\u30B5\u30A4\u30BA",
        mirrorHorizontal: "\u5DE6\u53F3\u53CD\u8EE2",
        mirrorVertical: "\u4E0A\u4E0B\u53CD\u8EE2",
        rotateLeft: "\u5DE6\u306B\u56DE\u8EE2",
        rotateRight: "\u53F3\u306B\u56DE\u8EE2",
        maxSize: "\u6700\u5927\u30B5\u30A4\u30BA",
        minSize: "\u6700\u5C0F\u30B5\u30A4\u30BA",
        tableHeader: "\u8868\u306E\u30D8\u30C3\u30C0\u30FC",
        mergeCells: "\u30BB\u30EB\u306E\u7D50\u5408",
        splitCells: "\u30BB\u30EB\u3092\u5206\u5272",
        HorizontalSplit: "\u6A2A\u5206\u5272",
        VerticalSplit: "\u5782\u76F4\u5206\u5272"
      },
      menu: {
        spaced: "\u6587\u5B57\u9593\u9694",
        bordered: "\u5883\u754C\u7DDA",
        neon: "\u30CD\u30AA\u30F3",
        translucent: "\u534A\u900F\u660E",
        shadow: "\u5F71",
        code: "\u30B3\u30FC\u30C9"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ja", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Xn);
const Kn = Xn.exports;
var Jn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "ko",
      toolbar: {
        default: "\uAE30\uBCF8\uAC12",
        save: "\uC800\uC7A5",
        font: "\uAE00\uAF34",
        formats: "\uBB38\uB2E8 \uD615\uC2DD",
        fontSize: "\uD06C\uAE30",
        bold: "\uAD75\uAC8C",
        underline: "\uBC11\uC904",
        italic: "\uAE30\uC6B8\uC784",
        strike: "\uCDE8\uC18C\uC120",
        subscript: "\uC544\uB798 \uCCA8\uC790",
        superscript: "\uC704 \uCCA8\uC790",
        removeFormat: "\uD615\uC2DD \uC81C\uAC70",
        fontColor: "\uAE00\uC790\uC0C9",
        hiliteColor: "\uBC30\uACBD\uC0C9",
        indent: "\uB4E4\uC5EC\uC4F0\uAE30",
        outdent: "\uB0B4\uC5B4\uC4F0\uAE30",
        align: "\uC815\uB82C",
        alignLeft: "\uC67C\uCABD \uC815\uB82C",
        alignRight: "\uC624\uB978\uCABD \uC815\uB82C",
        alignCenter: "\uAC00\uC6B4\uB370 \uC815\uB82C",
        alignJustify: "\uC591\uCABD \uC815\uB82C",
        list: "\uB9AC\uC2A4\uD2B8",
        orderList: "\uC22B\uC790\uD615 \uB9AC\uC2A4\uD2B8",
        unorderList: "\uC6D0\uD615 \uB9AC\uC2A4\uD2B8",
        horizontalRule: "\uAC00\uB85C \uC904 \uC0BD\uC785",
        hr_solid: "\uC2E4\uC120",
        hr_dotted: "\uC810\uC120",
        hr_dashed: "\uB300\uC2DC",
        table: "\uD14C\uC774\uBE14",
        link: "\uB9C1\uD06C",
        math: "\uC218\uC2DD",
        image: "\uC774\uBBF8\uC9C0",
        video: "\uB3D9\uC601\uC0C1",
        audio: "\uC624\uB514\uC624",
        fullScreen: "\uC804\uCCB4 \uD654\uBA74",
        showBlocks: "\uBE14\uB85D \uBCF4\uAE30",
        codeView: "HTML \uD3B8\uC9D1",
        undo: "\uC2E4\uD589 \uCDE8\uC18C",
        redo: "\uB2E4\uC2DC \uC2E4\uD589",
        preview: "\uBBF8\uB9AC\uBCF4\uAE30",
        print: "\uC778\uC1C4",
        tag_p: "\uBCF8\uBB38",
        tag_div: "\uAE30\uBCF8 (DIV)",
        tag_h: "\uC81C\uBAA9",
        tag_blockquote: "\uC778\uC6A9\uBB38",
        tag_pre: "\uCF54\uB4DC",
        template: "\uD15C\uD50C\uB9BF",
        lineHeight: "\uC904 \uB192\uC774",
        paragraphStyle: "\uBB38\uB2E8 \uC2A4\uD0C0\uC77C",
        textStyle: "\uAE00\uC790 \uC2A4\uD0C0\uC77C",
        imageGallery: "\uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC",
        dir_ltr: "\uC67C\uCABD\uC5D0\uC11C \uC624\uB978\uCABD",
        dir_rtl: "\uC624\uB978\uCABD\uC5D0\uC11C \uC67C\uCABD",
        mention: "\uBA58\uC158"
      },
      dialogBox: {
        linkBox: {
          title: "\uB9C1\uD06C \uC0BD\uC785",
          url: "\uC778\uD130\uB137 \uC8FC\uC18C",
          text: "\uD654\uBA74 \uD14D\uC2A4\uD2B8",
          newWindowCheck: "\uC0C8\uCC3D\uC73C\uB85C \uC5F4\uAE30",
          downloadLinkCheck: "\uB2E4\uC6B4\uB85C\uB4DC \uB9C1\uD06C",
          bookmark: "\uBD81\uB9C8\uD06C"
        },
        mathBox: {
          title: "\uC218\uC2DD",
          inputLabel: "\uC218\uD559\uC801 \uD45C\uAE30\uBC95",
          fontSizeLabel: "\uAE00\uC790 \uD06C\uAE30",
          previewLabel: "\uBBF8\uB9AC\uBCF4\uAE30"
        },
        imageBox: {
          title: "\uC774\uBBF8\uC9C0 \uC0BD\uC785",
          file: "\uD30C\uC77C \uC120\uD0DD",
          url: "\uC774\uBBF8\uC9C0 \uC8FC\uC18C",
          altText: "\uB300\uCCB4 \uBB38\uC790\uC5F4"
        },
        videoBox: {
          title: "\uB3D9\uC601\uC0C1 \uC0BD\uC785",
          file: "\uD30C\uC77C \uC120\uD0DD",
          url: "\uBBF8\uB514\uC5B4 \uC784\uBCA0\uB4DC \uC8FC\uC18C, \uC720\uD29C\uBE0C/\uBE44\uBA54\uC624"
        },
        audioBox: {
          title: "\uC624\uB514\uC624 \uC0BD\uC785",
          file: "\uD30C\uC77C \uC120\uD0DD",
          url: "\uC624\uB514\uC624 \uD30C\uC77C \uC8FC\uC18C"
        },
        browser: {
          tags: "\uD0DC\uADF8",
          search: "\uAC80\uC0C9"
        },
        caption: "\uC124\uBA85 \uB123\uAE30",
        close: "\uB2EB\uAE30",
        submitButton: "\uD655\uC778",
        revertButton: "\uB418\uB3CC\uB9AC\uAE30",
        proportion: "\uBE44\uC728 \uB9DE\uCDA4",
        basic: "\uAE30\uBCF8",
        left: "\uC67C\uCABD",
        right: "\uC624\uB978\uCABD",
        center: "\uAC00\uC6B4\uB370",
        width: "\uAC00\uB85C",
        height: "\uC138\uB85C",
        size: "\uD06C\uAE30",
        ratio: "\uBE44\uC728"
      },
      controller: {
        edit: "\uD3B8\uC9D1",
        unlink: "\uB9C1\uD06C \uD574\uC81C",
        remove: "\uC0AD\uC81C",
        insertRowAbove: "\uC704\uC5D0 \uD589 \uC0BD\uC785",
        insertRowBelow: "\uC544\uB798\uC5D0 \uD589 \uC0BD\uC785",
        deleteRow: "\uD589 \uC0AD\uC81C",
        insertColumnBefore: "\uC67C\uCABD\uC5D0 \uC5F4 \uC0BD\uC785",
        insertColumnAfter: "\uC624\uB978\uCABD\uC5D0 \uC5F4 \uC0BD\uC785",
        deleteColumn: "\uC5F4 \uC0AD\uC81C",
        fixedColumnWidth: "\uACE0\uC815 \uB41C \uC5F4 \uB108\uBE44",
        resize100: "100% \uD06C\uAE30",
        resize75: "75% \uD06C\uAE30",
        resize50: "50% \uD06C\uAE30",
        resize25: "25% \uD06C\uAE30",
        autoSize: "\uC790\uB3D9 \uD06C\uAE30",
        mirrorHorizontal: "\uC88C\uC6B0 \uBC18\uC804",
        mirrorVertical: "\uC0C1\uD558 \uBC18\uC804",
        rotateLeft: "\uC67C\uCABD\uC73C\uB85C \uD68C\uC804",
        rotateRight: "\uC624\uB978\uCABD\uC73C\uB85C \uD68C\uC804",
        maxSize: "\uCD5C\uB300\uD654",
        minSize: "\uCD5C\uC18C\uD654",
        tableHeader: "\uD14C\uC774\uBE14 \uC81C\uBAA9",
        mergeCells: "\uC140 \uBCD1\uD569",
        splitCells: "\uC140 \uBD84\uD560",
        HorizontalSplit: "\uAC00\uB85C \uBD84\uD560",
        VerticalSplit: "\uC138\uB85C \uBD84\uD560"
      },
      menu: {
        spaced: "\uAE00\uC790 \uAC04\uACA9",
        bordered: "\uACBD\uACC4\uC120",
        neon: "\uB124\uC628",
        translucent: "\uBC18\uD22C\uBA85",
        shadow: "\uADF8\uB9BC\uC790",
        code: "\uCF54\uB4DC"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ko", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Jn);
const Zn = Jn.exports;
var Qn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "lv",
      toolbar: {
        default: "Noklus\u0113juma",
        save: "Saglab\u0101t",
        font: "Fonts",
        formats: "Form\u0101ti",
        fontSize: "Fonta lielums",
        bold: "Treknraksts",
        underline: "Pasv\u012Btrot",
        italic: "Sl\u012Bpraksts",
        strike: "P\u0101rsv\u012Btrojums",
        subscript: "Apak\u0161raksts",
        superscript: "Aug\u0161raksts",
        removeFormat: "No\u0146emt form\u0101tu",
        fontColor: "Fonta kr\u0101sa",
        hiliteColor: "Teksta iez\u012Bm\u0113\u0161anas kr\u0101sa",
        indent: "Palielin\u0101t atk\u0101pi",
        outdent: "Samazin\u0101t atk\u0101pi",
        align: "Izl\u012Bdzin\u0101t",
        alignLeft: "L\u012Bdzin\u0101t pa kreisi",
        alignRight: "L\u012Bdzin\u0101t pa labi",
        alignCenter: "Centr\u0113t",
        alignJustify: "Taisnot",
        list: "Saraksts",
        orderList: "Numer\u0101cija",
        unorderList: "Aizzimes",
        horizontalRule: "Horizont\u0101la l\u012Bnija",
        hr_solid: "Ciets",
        hr_dotted: "Punkti\u0146\u0161",
        hr_dashed: "Bra\u0161a",
        table: "Tabula",
        link: "Saite",
        math: "Matem\u0101tika",
        image: "Att\u0113ls",
        video: "Video",
        audio: "Audio",
        fullScreen: "Pilnekr\u0101na re\u017E\u012Bms",
        showBlocks: "Par\u0101dit blokus",
        codeView: "Koda skats",
        undo: "Atsaukt",
        redo: "Atk\u0101rtot",
        preview: "Priek\u0161skat\u012Bjums",
        print: "Druk\u0101t",
        tag_p: "Paragr\u0101fs",
        tag_div: "Norm\u0101li (DIV)",
        tag_h: "Galvene",
        tag_blockquote: "Cit\u0101ts",
        tag_pre: "Kods",
        template: "Veidne",
        lineHeight: "L\u012Bnijas augstums",
        paragraphStyle: "Paragr\u0101fa stils",
        textStyle: "Teksta stils",
        imageGallery: "Att\u0113lu galerija",
        dir_ltr: "No kreis\u0101s uz labo",
        dir_rtl: "No lab\u0101s uz kreiso",
        mention: "Piemin\u0113t"
      },
      dialogBox: {
        linkBox: {
          title: "Ievietot saiti",
          url: "Saites URL",
          text: "Par\u0101d\u0101mais teksts",
          newWindowCheck: "Atv\u0113rt jaun\u0101 log\u0101",
          downloadLinkCheck: "Lejupiel\u0101des saite",
          bookmark: "Gr\u0101matz\u012Bme"
        },
        mathBox: {
          title: "Matem\u0101tika",
          inputLabel: "Matem\u0101tisk\u0101 not\u0101cija",
          fontSizeLabel: "Fonta lielums",
          previewLabel: "Priek\u0161skat\u012Bjums"
        },
        imageBox: {
          title: "Ievietot att\u0113lu",
          file: "Izv\u0113lieties no failiem",
          url: "Att\u0113la URL",
          altText: "Alternat\u012Bvs teksts"
        },
        videoBox: {
          title: "Ievietot video",
          file: "Izv\u0113lieties no failiem",
          url: "Multivides iegul\u0161anas URL, YouTube/Vimeo"
        },
        audioBox: {
          title: "Ievietot audio",
          file: "Izv\u0113lieties no failiem",
          url: "Audio URL"
        },
        browser: {
          tags: "Tagi",
          search: "Mekl\u0113t"
        },
        caption: "Ievietot aprakstu",
        close: "Aizv\u0113rt",
        submitButton: "Iesniegt",
        revertButton: "Atjaunot",
        proportion: "Ierobe\u017Eo proporcijas",
        basic: "Nav iesai\u0146ojuma",
        left: "Pa kreisi",
        right: "Labaj\u0101 pus\u0113",
        center: "Centrs",
        width: "Platums",
        height: "Augstums",
        size: "Izm\u0113rs",
        ratio: "Attiec\u012Bba"
      },
      controller: {
        edit: "Redi\u0123\u0113t",
        unlink: "Atsaist\u012Bt",
        remove: "No\u0146emt",
        insertRowAbove: "Ievietot rindu virs",
        insertRowBelow: "Ievietot rindu zem\u0101k",
        deleteRow: "Dz\u0113st rindu",
        insertColumnBefore: "Ievietot kolonnu pirms",
        insertColumnAfter: "Ievietot kolonnu aiz",
        deleteColumn: "Dz\u0113st kolonnu",
        fixColumnWidth: "Fiks\u0113ts kolonnas platums",
        resize100: "Main\u012Bt izm\u0113ru 100%",
        resize75: "Main\u012Bt izm\u0113ru 75%",
        resize50: "Main\u012Bt izm\u0113ru 50%",
        resize25: "Main\u012Bt izm\u0113ru 25%",
        autoSize: "Autom\u0101tiskais izm\u0113rs",
        mirrorHorizontal: "Spogulis, horizont\u0101ls",
        mirrorVertical: "Spogulis, vertik\u0101ls",
        rotateLeft: "Pagriezt pa kreisi",
        rotateRight: "Pagriezt pa labi",
        maxSize: "Maksim\u0101lais izm\u0113rs",
        minSize: "Minim\u0101lais izm\u0113rs",
        tableHeader: "Tabulas galvene",
        mergeCells: "Apvienot \u0161\u016Bnas",
        splitCells: "Sadal\u012Bt \u0161\u016Bnas",
        HorizontalSplit: "Horizont\u0101ls sadal\u012Bjums",
        VerticalSplit: "Vertik\u0101ls sadal\u012Bjums"
      },
      menu: {
        spaced: "Ar atstarpi",
        bordered: "Robe\u017Eoj\u0101s",
        neon: "Neona",
        translucent: "Caursp\u012Bd\u012Bgs",
        shadow: "\u0112na",
        code: "Kods"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "lv", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Qn);
const el = Qn.exports;
var tl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "nl",
      toolbar: {
        default: "Standaard",
        save: "Opslaan",
        font: "Lettertype",
        formats: "Formaten",
        fontSize: "Lettergrootte",
        bold: "Vetgedrukt",
        underline: "Onderstrepen",
        italic: "Cursief",
        strike: "Doorstrepen",
        subscript: "Subscript",
        superscript: "Superscript",
        removeFormat: "Opmaak verwijderen",
        fontColor: "Tekstkleur",
        hiliteColor: "Tekst markeren",
        indent: "Inspringen",
        outdent: "Inspringen ongedaan maken",
        align: "Uitlijnen",
        alignLeft: "Links uitlijnen",
        alignRight: "Rechts uitlijnen",
        alignCenter: "In het midden uitlijnen",
        alignJustify: "Uitvullen",
        list: "Lijst",
        orderList: "Geordende lijst",
        unorderList: "Ongeordende lijst",
        horizontalRule: "Horizontale regel",
        hr_solid: "Standaard",
        hr_dotted: "Gestippeld",
        hr_dashed: "Gestreept",
        table: "Tabel",
        link: "Link",
        math: "Wiskunde",
        image: "Afbeelding",
        video: "Video",
        audio: "Audio",
        fullScreen: "Volledig scherm",
        showBlocks: "Blokken tonen",
        codeView: "Broncode weergeven",
        undo: "Ongedaan maken",
        redo: "Ongedaan maken herstellen",
        preview: "Voorbeeldweergave",
        print: "Printen",
        tag_p: "Alinea",
        tag_div: "Normaal (div)",
        tag_h: "Kop",
        tag_blockquote: "Citaat",
        tag_pre: "Code",
        template: "Sjabloon",
        lineHeight: "Lijnhoogte",
        paragraphStyle: "Alineastijl",
        textStyle: "Tekststijl",
        imageGallery: "Galerij",
        dir_ltr: "Van links naar rechts",
        dir_rtl: "Rechts naar links",
        mention: "Vermelding"
      },
      dialogBox: {
        linkBox: {
          title: "Link invoegen",
          url: "URL",
          text: "Tekst van de link",
          newWindowCheck: "In een nieuw tabblad openen",
          downloadLinkCheck: "Downloadlink",
          bookmark: "Bladwijzer"
        },
        mathBox: {
          title: "Wiskunde",
          inputLabel: "Wiskundige notatie",
          fontSizeLabel: "Lettergrootte",
          previewLabel: "Voorbeeld"
        },
        imageBox: {
          title: "Afbeelding invoegen",
          file: "Selecteer een bestand van uw apparaat",
          url: "URL",
          altText: "Alt-tekst"
        },
        videoBox: {
          title: "Video invoegen",
          file: "Selecteer een bestand van uw apparaat",
          url: "Embedded URL (YouTube/Vimeo)"
        },
        audioBox: {
          title: "Audio invoegen",
          file: "Selecteer een bestand van uw apparaat",
          url: "URL"
        },
        browser: {
          tags: "Tags",
          search: "Zoeken"
        },
        caption: "Omschrijving toevoegen",
        close: "Sluiten",
        submitButton: "Toepassen",
        revertButton: "Standaardwaarden herstellen",
        proportion: "Verhouding behouden",
        basic: "Standaard",
        left: "Links",
        right: "Rechts",
        center: "Midden",
        width: "Breedte",
        height: "Hoogte",
        size: "Grootte",
        ratio: "Verhouding"
      },
      controller: {
        edit: "Bewerken",
        unlink: "Ontkoppelen",
        remove: "Verwijderen",
        insertRowAbove: "Rij hierboven invoegen",
        insertRowBelow: "Rij hieronder invoegen",
        deleteRow: "Rij verwijderen",
        insertColumnBefore: "Kolom links invoegen",
        insertColumnAfter: "Kolom rechts invoegen",
        deleteColumn: "Kolom verwijderen",
        fixedColumnWidth: "Vaste kolombreedte",
        resize100: "Formaat wijzigen: 100%",
        resize75: "Formaat wijzigen: 75%",
        resize50: "Formaat wijzigen: 50%",
        resize25: "Formaat wijzigen: 25%",
        autoSize: "Automatische grootte",
        mirrorHorizontal: "Horizontaal spiegelen",
        mirrorVertical: "Verticaal spiegelen",
        rotateLeft: "Naar links draaien",
        rotateRight: "Naar rechts draaien",
        maxSize: "Maximale grootte",
        minSize: "Minimale grootte",
        tableHeader: "Tabelkoppen",
        mergeCells: "Cellen samenvoegen",
        splitCells: "Cellen splitsen",
        HorizontalSplit: "Horizontaal splitsen",
        VerticalSplit: "Verticaal splitsen"
      },
      menu: {
        spaced: "Uit elkaar",
        bordered: "Omlijnd",
        neon: "Neon",
        translucent: "Doorschijnend",
        shadow: "Schaduw",
        code: "Code"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "nl", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(tl);
const il = tl.exports;
var nl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "pl",
      toolbar: {
        default: "Domy\u015Blne",
        save: "Zapisz",
        font: "Czcionka",
        formats: "Formaty",
        fontSize: "Rozmiar",
        bold: "Pogrubienie",
        underline: "Podkre\u015Blenie",
        italic: "Kursywa",
        strike: "Przekre\u015Blenie",
        subscript: "Indeks dolny",
        superscript: "Indeks g\xF3rny",
        removeFormat: "Wyczy\u015B\u0107 formatowanie",
        fontColor: "Kolor tekstu",
        hiliteColor: "Kolor t\u0142a tekstu",
        indent: "Zwi\u0119ksz wci\u0119cie",
        outdent: "Zmniejsz wci\u0119cie",
        align: "Wyr\xF3wnaj",
        alignLeft: "Do lewej",
        alignRight: "Do prawej",
        alignCenter: "Do \u015Brodka",
        alignJustify: "Wyjustuj",
        list: "Lista",
        orderList: "Lista numerowana",
        unorderList: "Lista wypunktowana",
        horizontalRule: "Pozioma linia",
        hr_solid: "Ci\u0105g\u0142a",
        hr_dotted: "Kropkowana",
        hr_dashed: "Przerywana",
        table: "Tabela",
        link: "Odno\u015Bnik",
        math: "Matematyczne",
        image: "Obraz",
        video: "Wideo",
        audio: "Audio",
        fullScreen: "Pe\u0142ny ekran",
        showBlocks: "Poka\u017C bloki",
        codeView: "Widok kodu",
        undo: "Cofnij",
        redo: "Pon\xF3w",
        preview: "Podgl\u0105d",
        print: "Drukuj",
        tag_p: "Akapit",
        tag_div: "Blok (DIV)",
        tag_h: "Nag\u0142\xF3wek H",
        tag_blockquote: "Cytat",
        tag_pre: "Kod",
        template: "Szablon",
        lineHeight: "Odst\u0119p mi\u0119dzy wierszami",
        paragraphStyle: "Styl akapitu",
        textStyle: "Styl tekstu",
        imageGallery: "Galeria obraz\xF3w",
        dir_ltr: "Od lewej do prawej",
        dir_rtl: "Od prawej do lewej",
        mention: "Wzmianka"
      },
      dialogBox: {
        linkBox: {
          title: "Wstaw odno\u015Bnik",
          url: "Adres URL",
          text: "Tekst do wy\u015Bwietlenia",
          newWindowCheck: "Otw\xF3rz w nowym oknie",
          downloadLinkCheck: "Link do pobrania",
          bookmark: "Zak\u0142adka"
        },
        mathBox: {
          title: "Matematyczne",
          inputLabel: "Zapis matematyczny",
          fontSizeLabel: "Rozmiar czcionki",
          previewLabel: "Podgl\u0105d"
        },
        imageBox: {
          title: "Wstaw obraz",
          file: "Wybierz plik",
          url: "Adres URL obrazka",
          altText: "Tekst alternatywny"
        },
        videoBox: {
          title: "Wstaw wideo",
          file: "Wybierz plik",
          url: "Adres URL video, np. YouTube/Vimeo"
        },
        audioBox: {
          title: "Wstaw audio",
          file: "Wybierz plik",
          url: "Adres URL audio"
        },
        browser: {
          tags: "Tagi",
          search: "Szukaj"
        },
        caption: "Wstaw opis",
        close: "Zamknij",
        submitButton: "Zatwierd\u017A",
        revertButton: "Cofnij zmiany",
        proportion: "Ogranicz proporcje",
        basic: "Bez wyr\xF3wnania",
        left: "Do lewej",
        right: "Do prawej",
        center: "Do \u015Brodka",
        width: "Szeroko\u015B\u0107",
        height: "Wysoko\u015B\u0107",
        size: "Rozmiar",
        ratio: "Proporcje"
      },
      controller: {
        edit: "Edycja",
        unlink: "Usu\u0144 odno\u015Bnik",
        remove: "Usu\u0144",
        insertRowAbove: "Wstaw wiersz powy\u017Cej",
        insertRowBelow: "Wstaw wiersz poni\u017Cej",
        deleteRow: "Usu\u0144 wiersz",
        insertColumnBefore: "Wstaw kolumn\u0119 z lewej",
        insertColumnAfter: "Wstaw kolumn\u0119 z prawej",
        deleteColumn: "Usu\u0144 kolumn\u0119",
        fixedColumnWidth: "Sta\u0142a szeroko\u015B\u0107 kolumny",
        resize100: "Zmie\u0144 rozmiar - 100%",
        resize75: "Zmie\u0144 rozmiar - 75%",
        resize50: "Zmie\u0144 rozmiar - 50%",
        resize25: "Zmie\u0144 rozmiar - 25%",
        autoSize: "Rozmiar automatyczny",
        mirrorHorizontal: "Odbicie lustrzane w poziomie",
        mirrorVertical: "Odbicie lustrzane w pionie",
        rotateLeft: "Obr\xF3\u0107 w lewo",
        rotateRight: "Obr\xF3\u0107 w prawo",
        maxSize: "Maksymalny rozmiar",
        minSize: "Minimalny rozmiar",
        tableHeader: "Nag\u0142\xF3wek tabeli",
        mergeCells: "Scal kom\xF3rki",
        splitCells: "Podziel kom\xF3rki",
        HorizontalSplit: "Podzia\u0142 poziomy",
        VerticalSplit: "Podzia\u0142 pionowy"
      },
      menu: {
        spaced: "Rozstawiony",
        bordered: "Z obw\xF3dk\u0105",
        neon: "Neon",
        translucent: "P\xF3\u0142przezroczysty",
        shadow: "Cie\u0144",
        code: "Kod"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "pl", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(nl);
const ll = nl.exports;
var sl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "pt_br",
      toolbar: {
        default: "Padr\xE3o",
        save: "Salvar",
        font: "Fonte",
        formats: "Formatos",
        fontSize: "Tamanho",
        bold: "Negrito",
        underline: "Sublinhado",
        italic: "It\xE1lico",
        strike: "Riscado",
        subscript: "Subescrito",
        superscript: "Sobrescrito",
        removeFormat: "Remover Formata\xE7\xE3o",
        fontColor: "Cor da Fonte",
        hiliteColor: "Cor de destaque",
        indent: "Recuo",
        outdent: "Avan\xE7ar",
        align: "Alinhar",
        alignLeft: "Alinhar \xE0 esquerda",
        alignRight: "Alinhar \xE0 direita",
        alignCenter: "Centralizar",
        alignJustify: "Justificar",
        list: "Lista",
        orderList: "Lista ordenada",
        unorderList: "Lista desordenada",
        horizontalRule: "Linha horizontal",
        hr_solid: "s\xF3lida",
        hr_dotted: "pontilhada",
        hr_dashed: "tracejada",
        table: "Tabela",
        link: "Link",
        math: "Matem\xE1tica",
        image: "Imagem",
        video: "V\xEDdeo",
        audio: "\xC1udio",
        fullScreen: "Tela cheia",
        showBlocks: "Mostrar blocos",
        codeView: "Mostrar c\xF3digos",
        undo: "Voltar",
        redo: "Refazer",
        preview: "Prever",
        print: "Imprimir",
        tag_p: "Paragr\xE1fo",
        tag_div: "(DIV) Normal",
        tag_h: "Cabe\xE7alho",
        tag_blockquote: "Citar",
        tag_pre: "C\xF3digo",
        template: "Modelo",
        lineHeight: "Altura da linha",
        paragraphStyle: "Estilo do par\xE1grafo",
        textStyle: "Estilo do texto",
        imageGallery: "Galeria de imagens",
        dir_ltr: "Esquerda para direita",
        dir_rtl: "Direita para esquerda",
        mention: "Men\xE7\xE3o"
      },
      dialogBox: {
        linkBox: {
          title: "Inserir link",
          url: "URL para link",
          text: "Texto a mostrar",
          newWindowCheck: "Abrir em nova guia",
          downloadLinkCheck: "Link para Download",
          bookmark: "marcar p\xE1ginas"
        },
        mathBox: {
          title: "Matem\xE1tica",
          inputLabel: "Nota\xE7\xE3o matem\xE1tica",
          fontSizeLabel: "Tamanho",
          previewLabel: "Prever"
        },
        imageBox: {
          title: "Inserir imagens",
          file: "Selecionar arquivos",
          url: "URL da imagem",
          altText: "Texto alternativo"
        },
        videoBox: {
          title: "Inserir v\xEDdeo",
          file: "Selecionar arquivos",
          url: "URL do YouTube/Vimeo"
        },
        audioBox: {
          title: "Inserir \xE1udio",
          file: "Selecionar arquivos",
          url: "URL da \xE1udio"
        },
        browser: {
          tags: "Tag",
          search: "Procurar"
        },
        caption: "Inserir descri\xE7\xE3o",
        close: "Fechar",
        submitButton: "Enviar",
        revertButton: "Reverter",
        proportion: "Restringir propor\xE7\xF5es",
        basic: "B\xE1sico",
        left: "Esquerda",
        right: "Direita",
        center: "Centro",
        width: "Largura",
        height: "Altura",
        size: "Tamanho",
        ratio: "Propor\xE7\xF5es"
      },
      controller: {
        edit: "Editar",
        unlink: "Remover link",
        remove: "Remover",
        insertRowAbove: "Inserir linha acima",
        insertRowBelow: "Inserir linha abaixo",
        deleteRow: "Deletar linha",
        insertColumnBefore: "Inserir coluna antes",
        insertColumnAfter: "Inserir coluna depois",
        deleteColumn: "Deletar coluna",
        fixedColumnWidth: "Largura fixa da coluna",
        resize100: "Redimensionar para 100%",
        resize75: "Redimensionar para 75%",
        resize50: "Redimensionar para 50%",
        resize25: "Redimensionar para 25%",
        autoSize: "Tamanho autom\xE1tico",
        mirrorHorizontal: "Espelho, Horizontal",
        mirrorVertical: "Espelho, Vertical",
        rotateLeft: "Girar para esquerda",
        rotateRight: "Girar para direita",
        maxSize: "Tam m\xE1x",
        minSize: "Tam m\xEDn",
        tableHeader: "Cabe\xE7alho da tabela",
        mergeCells: "Mesclar c\xE9lulas",
        splitCells: "Dividir c\xE9lulas",
        HorizontalSplit: "Divis\xE3o horizontal",
        VerticalSplit: "Divis\xE3o vertical"
      },
      menu: {
        spaced: "Espa\xE7ado",
        bordered: "Com borda",
        neon: "Neon",
        translucent: "Transl\xFAcido",
        shadow: "Sombreado",
        code: "C\xF3digo"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "pt_br", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(sl);
const ol = sl.exports;
var al = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "ro",
      toolbar: {
        default: "Default",
        save: "Salveaz\u0103",
        font: "Font",
        formats: "Format",
        fontSize: "Dimensiune",
        bold: "\xCEngro\u0219at",
        underline: "Subliniat",
        italic: "\xCEnclinat",
        strike: "T\u0103iat",
        subscript: "Subscript",
        superscript: "Superscript",
        removeFormat: "\u0218terge formatare",
        fontColor: "Culoare font",
        hiliteColor: "Culoare de eviden\u021Biere",
        indent: "Indenteaz\u0103",
        outdent: "F\u0103r\u0103 indentare",
        align: "Aliniere",
        alignLeft: "Aliniere la st\xE2nga",
        alignRight: "Aliniere la dreapta",
        alignCenter: "Aliniere la centru",
        alignJustify: "Aliniere st\xE2nga - dreapta",
        list: "List\u0103",
        orderList: "List\u0103 ordonat\u0103",
        unorderList: "List\u0103 neordonat\u0103",
        horizontalRule: "Linie orizontal\u0103",
        hr_solid: "Solid",
        hr_dotted: "Punctat",
        hr_dashed: "Punctate",
        table: "Tabel",
        link: "Link",
        math: "Matematic\u0103",
        image: "Imagine",
        video: "Video",
        audio: "Audio",
        fullScreen: "Tot ecranul",
        showBlocks: "Arat\u0103 blocuri",
        codeView: "Vizualizare cod",
        undo: "Anuleaz\u0103",
        redo: "Ref\u0103",
        preview: "Previzualizare",
        print: "printeaz\u0103",
        tag_p: "Paragraf",
        tag_div: "Normal (DIV)",
        tag_h: "Antet",
        tag_blockquote: "Quote",
        tag_pre: "Citat",
        template: "Template",
        lineHeight: "\xCEn\u0103l\u021Bime linie",
        paragraphStyle: "Stil paragraf",
        textStyle: "Stil text",
        imageGallery: "Galerie de imagini",
        dir_ltr: "De la st\xE2nga la dreapta",
        dir_rtl: "De la dreapta la stanga",
        mention: "Mentiune"
      },
      dialogBox: {
        linkBox: {
          title: "Insereaz\u0103 Link",
          url: "Adres\u0103 link",
          text: "Text de afi\u0219at",
          newWindowCheck: "Deschide \xEEn fereastr\u0103 nou\u0103",
          downloadLinkCheck: "Link de desc\u0103rcare",
          bookmark: "Marcaj"
        },
        mathBox: {
          title: "Matematic\u0103",
          inputLabel: "Nota\u021Bie matematic\u0103",
          fontSizeLabel: "Dimensiune font",
          previewLabel: "Previzualizare"
        },
        imageBox: {
          title: "Insereaz\u0103 imagine",
          file: "Selecteaz\u0103",
          url: "URL imagine",
          altText: "text alternativ"
        },
        videoBox: {
          title: "Insereaz\u0103 video",
          file: "Selecteaz\u0103",
          url: "Include URL, youtube/vimeo"
        },
        audioBox: {
          title: "Insereaz\u0103 Audio",
          file: "Selecteaz\u0103",
          url: "URL Audio"
        },
        browser: {
          tags: "Etichete",
          search: "C\u0103utareim"
        },
        caption: "Insereaz\u0103 descriere",
        close: "\xCEnchide",
        submitButton: "Salveaz\u0103",
        revertButton: "Revenire",
        proportion: "Constr\xE2nge propor\u021Biile",
        basic: "De baz\u0103",
        left: "St\xE2nga",
        right: "Dreapta",
        center: "Centru",
        width: "L\u0103\u021Bime",
        height: "\xCEn\u0103l\u021Bime",
        size: "Dimensiune",
        ratio: "Ratie"
      },
      controller: {
        edit: "Editeaz\u0103",
        unlink: "Scoate link",
        remove: "Elimin\u0103",
        insertRowAbove: "Insereaz\u0103 r\xE2nd deasupra",
        insertRowBelow: "Insereaz\u0103 r\xE2nd dedesupt",
        deleteRow: "\u0218terge linie",
        insertColumnBefore: "Insereaz\u0103 coloan\u0103 \xEEnainte",
        insertColumnAfter: "Insereaz\u0103 coloan\u0103 dup\u0103",
        deleteColumn: "\u0218terge coloan\u0103",
        fixedColumnWidth: "L\u0103\u021Bime fix\u0103 coloan\u0103",
        resize100: "Redimensionare 100%",
        resize75: "Redimensionare 75%",
        resize50: "Redimensionare 50%",
        resize25: "Redimensionare 25%",
        autoSize: "Dimensiune automat\u0103",
        mirrorHorizontal: "Oglind\u0103, orizontal",
        mirrorVertical: "Oglind\u0103, vertical",
        rotateLeft: "Rote\u0219te la st\xE2nga",
        rotateRight: "Rote\u0219te la dreapta",
        maxSize: "Dimensiune maxim\u0103",
        minSize: "Dimensiune minim\u0103",
        tableHeader: "Antet tabel",
        mergeCells: "\xCEmbin\u0103 celule",
        splitCells: "Divizeaz\u0103 celule",
        HorizontalSplit: "Despicare orizontal\u0103",
        VerticalSplit: "Despicare vertical\u0103"
      },
      menu: {
        spaced: "Spa\u021Biat",
        bordered: "M\u0103rginit",
        neon: "Neon",
        translucent: "Translucent",
        shadow: "Umbr\u0103",
        code: "Citat"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ro", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(al);
const rl = al.exports;
var ul = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "ru",
      toolbar: {
        default: "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
        save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
        font: "\u0428\u0440\u0438\u0444\u0442",
        formats: "\u0421\u0442\u0438\u043B\u044C \u0430\u0431\u0437\u0430\u0446\u0430",
        fontSize: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
        bold: "\u041F\u043E\u043B\u0443\u0436\u0438\u0440\u043D\u044B\u0439",
        underline: "\u041F\u043E\u0434\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u044B\u0439",
        italic: "\u041A\u0443\u0440\u0441\u0438\u0432",
        strike: "\u0417\u0430\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044B\u0439",
        subscript: "\u041D\u0438\u0436\u043D\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441",
        superscript: "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441",
        removeFormat: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
        fontColor: "\u0426\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430",
        hiliteColor: "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",
        indent: "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F",
        outdent: "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F",
        align: "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435",
        alignLeft: "\u0421\u043B\u0435\u0432\u0430",
        alignRight: "\u0421\u043F\u0440\u0430\u0432\u0430",
        alignCenter: "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
        alignJustify: "\u041F\u043E \u0448\u0438\u0440\u0438\u043D\u0435",
        list: "\u0421\u043F\u0438\u0441\u043A\u0438",
        orderList: "\u041D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439",
        unorderList: "\u041C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439",
        horizontalRule: "\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u043D\u0438\u044F",
        hr_solid: "\u0421\u043F\u043B\u043E\u0448\u043D\u0430\u044F",
        hr_dotted: "\u041F\u0443\u043D\u043A\u0442\u0438\u0440",
        hr_dashed: "\u0428\u0442\u0440\u0438\u0445\u043E\u0432\u0430\u044F",
        table: "\u0422\u0430\u0431\u043B\u0438\u0446\u0430",
        link: "\u0421\u0441\u044B\u043B\u043A\u0430",
        math: "\u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439",
        image: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
        video: "\u0412\u0438\u0434\u0435\u043E",
        audio: "\u0410\u0443\u0434\u0438\u043E",
        fullScreen: "\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D",
        showBlocks: "\u0411\u043B\u043E\u0447\u043D\u044B\u0439 \u0432\u0438\u0434",
        codeView: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C HTML",
        undo: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
        redo: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C",
        preview: "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",
        print: "\u041F\u0435\u0447\u0430\u0442\u044C",
        tag_p: "\u0422\u0435\u043A\u0441\u0442",
        tag_div: "\u0411\u0430\u0437\u043E\u0432\u044B\u0439",
        tag_h: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        tag_blockquote: "\u0426\u0438\u0442\u0430\u0442\u0430",
        tag_pre: "\u041A\u043E\u0434",
        template: "\u0428\u0430\u0431\u043B\u043E\u043D",
        lineHeight: "\u0412\u044B\u0441\u043E\u0442\u0430 \u043B\u0438\u043D\u0438\u0438",
        paragraphStyle: "\u0421\u0442\u0438\u043B\u044C \u0430\u0431\u0437\u0430\u0446\u0430",
        textStyle: "\u0421\u0442\u0438\u043B\u044C \u0442\u0435\u043A\u0441\u0442\u0430",
        imageGallery: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F",
        dir_ltr: "\u0421\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E",
        dir_rtl: "\u0421\u043F\u0440\u0430\u0432\u0430 \u043D\u0430\u043B\u0435\u0432\u043E",
        mention: "\u0423\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435"
      },
      dialogBox: {
        linkBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
          url: "\u0421\u0441\u044B\u043B\u043A\u0430",
          text: "\u0422\u0435\u043A\u0441\u0442",
          newWindowCheck: "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435",
          downloadLinkCheck: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F",
          bookmark: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430"
        },
        mathBox: {
          title: "\u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439",
          inputLabel: "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C",
          fontSizeLabel: "\u041A\u0435\u0433\u043B\u044C",
          previewLabel: "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"
        },
        imageBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
          file: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B",
          url: "\u0410\u0434\u0440\u0435\u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
          altText: "\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"
        },
        videoBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0438\u0434\u0435\u043E",
          file: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B",
          url: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u0438\u0434\u0435\u043E, Youtube,Vimeo"
        },
        audioBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0430\u0443\u0434\u0438\u043E",
          file: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B",
          url: "\u0410\u0434\u0440\u0435\u0441 \u0430\u0443\u0434\u0438\u043E"
        },
        browser: {
          tags: "\u0422\u0435\u0433\u0438",
          search: "\u041F\u043E\u0438\u0441\u043A"
        },
        caption: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u044C",
        close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        submitButton: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",
        revertButton: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
        proportion: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0438",
        basic: "\u0411\u0435\u0437 \u043E\u0431\u0442\u0435\u043A\u0430\u043D\u0438\u044F",
        left: "\u0421\u043B\u0435\u0432\u0430",
        right: "\u0421\u043F\u0440\u0430\u0432\u0430",
        center: "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
        width: "\u0428\u0438\u0440\u0438\u043D\u0430",
        height: "\u0412\u044B\u0441\u043E\u0442\u0430",
        size: "\u0420\u0430\u0437\u043C\u0435\u0440",
        ratio: "\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435"
      },
      controller: {
        edit: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
        unlink: "\u0423\u0431\u0440\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
        remove: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        insertRowAbove: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u0432\u044B\u0448\u0435",
        insertRowBelow: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u043D\u0438\u0436\u0435",
        deleteRow: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443",
        insertColumnBefore: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u0441\u043B\u0435\u0432\u0430",
        insertColumnAfter: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u0441\u043F\u0440\u0430\u0432\u0430",
        deleteColumn: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446",
        fixedColumnWidth: "\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 \u0441\u0442\u043E\u043B\u0431\u0446\u0430",
        resize100: "\u0420\u0430\u0437\u043C\u0435\u0440 100%",
        resize75: "\u0420\u0430\u0437\u043C\u0435\u0440 75%",
        resize50: "\u0420\u0430\u0437\u043C\u0435\u0440 50%",
        resize25: "\u0420\u0430\u0437\u043C\u0435\u0440 25%",
        autoSize: "\u0410\u0432\u0442\u043E \u0440\u0430\u0437\u043C\u0435\u0440",
        mirrorHorizontal: "\u041E\u0442\u0440\u0430\u0437\u0438\u0442\u044C \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438",
        mirrorVertical: "\u041E\u0442\u0440\u0430\u0437\u0438\u0442\u044C \u043F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0438",
        rotateLeft: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0440\u043E\u0442\u0438\u0432 \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u0435\u043B\u043A\u0438",
        rotateRight: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u043E \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u0435\u043B\u043A\u0435",
        maxSize: "\u0428\u0438\u0440\u0438\u043D\u0430 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
        minSize: "\u0428\u0438\u0440\u0438\u043D\u0430 \u043F\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u043C\u0443",
        tableHeader: "\u0421\u0442\u0440\u043E\u043A\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432",
        mergeCells: "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442\u044C \u044F\u0447\u0435\u0439\u043A\u0438",
        splitCells: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u044F\u0447\u0435\u0439\u043A\u0443",
        HorizontalSplit: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
        VerticalSplit: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E"
      },
      menu: {
        spaced: "\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
        bordered: "\u0413\u0440\u0430\u043D\u0438\u0447\u043D\u0430\u044F \u041B\u0438\u043D\u0438\u044F",
        neon: "\u043D\u0435\u043E\u043D",
        translucent: "\u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439",
        shadow: "\u0422\u0435\u043D\u044C",
        code: "\u041A\u043E\u0434"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ru", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(ul);
const cl = ul.exports;
var dl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "se",
      toolbar: {
        default: "Default",
        save: "Spara",
        font: "Typsnitt",
        formats: "Format",
        fontSize: "Textstorlek",
        bold: "Fet",
        underline: "Understruket",
        italic: "Kursiv",
        strike: "\xD6verstruket",
        subscript: "S\xE4nkt skrift",
        superscript: "H\xF6jd skrift",
        removeFormat: "Ta bort formattering",
        fontColor: "Textf\xE4rg",
        hiliteColor: "Bakgrundsf\xE4rg",
        indent: "Minska indrag",
        outdent: "\xD6ka indrag",
        align: "Justering",
        alignLeft: "V\xE4nsterjustering",
        alignRight: "H\xF6gerjustering",
        alignCenter: "Mittenjusteirng",
        alignJustify: "Justera indrag",
        list: "Listor",
        orderList: "Numrerad lista",
        unorderList: "Oordnad lista",
        horizontalRule: "Horisontell linje",
        hr_solid: "Solid",
        hr_dotted: "Punkter",
        hr_dashed: "Prickad",
        table: "Tabell",
        link: "L\xE4nk",
        math: "Math",
        image: "Bild",
        video: "Video",
        audio: "Ljud",
        fullScreen: "Helsk\xE4rm",
        showBlocks: "Visa block",
        codeView: "Visa koder",
        undo: "\xC5ngra",
        redo: "G\xF6r om",
        preview: "Preview",
        print: "Print",
        tag_p: "Paragraf",
        tag_div: "Normal (DIV)",
        tag_h: "Rubrik",
        tag_blockquote: "Citer",
        tag_pre: "Kod",
        template: "Mall",
        lineHeight: "Linjeh\xF6jd",
        paragraphStyle: "Stil p\xE5 stycke",
        textStyle: "Textstil",
        imageGallery: "Bildgalleri",
        dir_ltr: "V\xE4nster till h\xF6ger",
        dir_rtl: "H\xF6ger till v\xE4nster",
        mention: "Namn"
      },
      dialogBox: {
        linkBox: {
          title: "L\xE4gg till l\xE4nk",
          url: "URL till l\xE4nk",
          text: "L\xE4nktext",
          newWindowCheck: "\xD6ppna i nytt f\xF6nster",
          downloadLinkCheck: "Nedladdningsl\xE4nk",
          bookmark: "Bokm\xE4rke"
        },
        mathBox: {
          title: "Math",
          inputLabel: "Matematisk notation",
          fontSizeLabel: "Textstorlek",
          previewLabel: "Preview"
        },
        imageBox: {
          title: "L\xE4gg till bild",
          file: "L\xE4gg till fr\xE5n fil",
          url: "L\xE4gg till fr\xE5n URL",
          altText: "Alternativ text"
        },
        videoBox: {
          title: "L\xE4gg till video",
          file: "L\xE4gg till fr\xE5n fil",
          url: "B\xE4dda in video / YouTube,Vimeo"
        },
        audioBox: {
          title: "L\xE4gg till ljud",
          file: "L\xE4gg till fr\xE5n fil",
          url: "L\xE4gg till fr\xE5n URL"
        },
        browser: {
          tags: "Tags",
          search: "S\xF6k"
        },
        caption: "L\xE4gg till beskrivning",
        close: "St\xE4ng",
        submitButton: "Skicka",
        revertButton: "\xC5terg\xE5",
        proportion: "Spara proportioner",
        basic: "Basic",
        left: "V\xE4nster",
        right: "H\xF6ger",
        center: "Center",
        width: "Bredd",
        height: "H\xF6jd",
        size: "Storlek",
        ratio: "F\xF6rh\xE5llande"
      },
      controller: {
        edit: "Redigera",
        unlink: "Ta bort l\xE4nk",
        remove: "Ta bort",
        insertRowAbove: "L\xE4gg till rad \xF6ver",
        insertRowBelow: "L\xE4gg till rad under",
        deleteRow: "Ta bort rad",
        insertColumnBefore: "L\xE4gg till kolumn f\xF6re",
        insertColumnAfter: "L\xE4gg till kolumn efter",
        deleteColumn: "Ta bort kolumner",
        fixedColumnWidth: "Fast kolumnbredd",
        resize100: "F\xF6rstora 100%",
        resize75: "F\xF6rstora 75%",
        resize50: "F\xF6rstora 50%",
        resize25: "F\xF6rstora 25%",
        autoSize: "Autostorlek",
        mirrorHorizontal: "Spegling, horisontell",
        mirrorVertical: "Spegling, vertikal",
        rotateLeft: "Rotera till v\xE4nster",
        rotateRight: "Rotera till h\xF6ger",
        maxSize: "Maxstorlek",
        minSize: "Minsta storlek",
        tableHeader: "Rubrik tabell",
        mergeCells: "Sammanfoga celler (merge)",
        splitCells: "Separera celler",
        HorizontalSplit: "Separera horisontalt",
        VerticalSplit: "Separera vertikalt"
      },
      menu: {
        spaced: "Avst\xE5nd",
        bordered: "Avgr\xE4nsningslinje",
        neon: "Neon",
        translucent: "Genomskinlig",
        shadow: "Skugga",
        code: "Kod"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "se", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(dl);
const fl = dl.exports;
var hl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "ua",
      toolbar: {
        default: "\u041F\u043E \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C",
        save: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
        font: "\u0428\u0440\u0438\u0444\u0442",
        formats: "\u0421\u0442\u0438\u043B\u044C \u0430\u0431\u0437\u0430\u0446\u0443",
        fontSize: "\u0420\u043E\u0437\u043C\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443",
        bold: "\u0416\u0438\u0440\u043D\u0438\u0439",
        underline: "\u041F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u0438\u0439",
        italic: "\u041A\u0443\u0440\u0441\u0438\u0432",
        strike: "\u041F\u0435\u0440\u0435\u043A\u0440\u0435\u0441\u043B\u0438\u0442\u0438",
        subscript: "\u041D\u0438\u0436\u043D\u0456\u0439 \u0456\u043D\u0434\u0435\u043A\u0441",
        superscript: "\u0412\u0435\u0440\u0445\u043D\u0456\u0439 \u0456\u043D\u0434\u0435\u043A\u0441",
        removeFormat: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0444\u043E\u0440\u043C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
        fontColor: "\u041A\u043E\u043B\u0456\u0440 \u0442\u0435\u043A\u0441\u0442\u0443",
        hiliteColor: "\u041A\u043E\u043B\u0456\u0440 \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
        indent: "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0441\u0442\u0443\u043F",
        outdent: "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0441\u0442\u0443\u043F",
        align: "\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F",
        alignLeft: "\u0417\u0430 \u043B\u0456\u0432\u0438\u043C \u043A\u0440\u0430\u0454\u043C",
        alignRight: "\u0417\u0430 \u043F\u0440\u0430\u0432\u0438\u043C \u043A\u0440\u0430\u0454\u043C",
        alignCenter: "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
        alignJustify: "\u0417\u0430 \u0448\u0438\u0440\u0438\u043D\u043E\u044E",
        list: "\u0421\u043F\u0438\u0441\u043E\u043A",
        orderList: "\u041D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u0438\u0439",
        unorderList: "\u041C\u0430\u0440\u043A\u043E\u0432\u0430\u043D\u0438\u0439",
        horizontalRule: "\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u043B\u0456\u043D\u0456\u044F",
        hr_solid: "\u0421\u0443\u0446\u0456\u043B\u044C\u043D\u0430",
        hr_dotted: "\u041F\u0443\u043D\u043A\u0442\u0438\u0440\u043D\u0430",
        hr_dashed: "\u0428\u0442\u0440\u0438\u0445\u043E\u0432\u0430",
        table: "\u0422\u0430\u0431\u043B\u0438\u0446\u044F",
        link: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
        math: "\u0424\u043E\u0440\u043C\u0443\u043B\u0430",
        image: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
        video: "\u0412\u0456\u0434\u0435\u043E",
        audio: "\u0410\u0443\u0434\u0456\u043E",
        fullScreen: "\u041F\u043E\u0432\u043D\u0438\u0439 \u0435\u043A\u0440\u0430\u043D",
        showBlocks: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u043B\u043E\u043A\u0438",
        codeView: "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u044F\u043A HTML",
        undo: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
        redo: "\u0412\u0438\u043A\u043E\u043D\u0430\u0442\u0438 \u0437\u043D\u043E\u0432\u0443",
        preview: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434",
        print: "\u0414\u0440\u0443\u043A",
        tag_p: "\u0410\u0431\u0437\u0430\u0446",
        tag_div: "\u0411\u0430\u0437\u043E\u0432\u0438\u0439",
        tag_h: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        tag_blockquote: "\u0426\u0438\u0442\u0430\u0442\u0430",
        tag_pre: "\u041A\u043E\u0434",
        template: "\u0428\u0430\u0431\u043B\u043E\u043D",
        lineHeight: "\u0412\u0438\u0441\u043E\u0442\u0430 \u043B\u0456\u043D\u0456\u0457",
        paragraphStyle: "\u0421\u0442\u0438\u043B\u044C \u0430\u0431\u0437\u0430\u0446\u0443",
        textStyle: "\u0421\u0442\u0438\u043B\u044C \u0442\u0435\u043A\u0441\u0442\u0443",
        imageGallery: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F",
        dir_ltr: "\u0417\u043B\u0456\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E",
        dir_rtl: "\u0421\u043F\u0440\u0430\u0432\u0430 \u043D\u0430\u043B\u0456\u0432\u043E",
        mention: "\u0417\u0433\u0430\u0434\u0430\u0442\u0438"
      },
      dialogBox: {
        linkBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
          url: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
          text: "\u0422\u0435\u043A\u0441\u0442",
          newWindowCheck: "\u0412\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0442\u0438 \u0432 \u043D\u043E\u0432\u043E\u043C\u0443 \u0432\u0456\u043A\u043D\u0456",
          downloadLinkCheck: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
          bookmark: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430"
        },
        mathBox: {
          title: "\u0424\u043E\u0440\u043C\u0443\u043B\u0430",
          inputLabel: "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0437\u0430\u043F\u0438\u0441",
          fontSizeLabel: "\u0420\u043E\u0437\u043C\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443",
          previewLabel: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434"
        },
        imageBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
          file: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0444\u0430\u0439\u043B",
          url: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
          altText: "\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u0438\u0439 \u043E\u043F\u0438\u0441 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"
        },
        videoBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0432\u0456\u0434\u0435\u043E",
          file: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0444\u0430\u0439\u043B",
          url: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0432\u0456\u0434\u0435\u043E, Youtube, Vimeo"
        },
        audioBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0430\u0443\u0434\u0456\u043E",
          file: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0444\u0430\u0439\u043B",
          url: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0430\u0443\u0434\u0456\u043E"
        },
        browser: {
          tags: "\u0422\u0435\u0433\u0438",
          search: "\u041F\u043E\u0448\u0443\u043A"
        },
        caption: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441",
        close: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
        submitButton: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438",
        revertButton: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438",
        proportion: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0456\u0457",
        basic: "\u0411\u0435\u0437 \u043E\u0431\u0442\u0456\u043A\u0430\u043D\u043D\u044F",
        left: "\u0417\u043B\u0456\u0432\u0430",
        right: "\u0421\u043F\u0440\u0430\u0432\u0430",
        center: "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
        width: "\u0428\u0438\u0440\u0438\u043D\u0430",
        height: "\u0412\u0438\u0441\u043E\u0442\u0430",
        size: "\u0420\u043E\u0437\u043C\u0456\u0440",
        ratio: "\u0421\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F"
      },
      controller: {
        edit: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438",
        unlink: "\u041F\u0440\u0438\u0431\u0440\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
        remove: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
        insertRowAbove: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0440\u044F\u0434\u043E\u043A \u0432\u0438\u0449\u0435",
        insertRowBelow: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0440\u044F\u0434\u043E\u043A \u043D\u0438\u0436\u0447\u0435",
        deleteRow: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0440\u044F\u0434\u043E\u043A",
        insertColumnBefore: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C \u0437\u043B\u0456\u0432\u0430",
        insertColumnAfter: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C \u0441\u043F\u0440\u0430\u0432\u0430",
        deleteColumn: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C",
        fixedColumnWidth: "\u0424\u0456\u043A\u0441\u043E\u0432\u0430\u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u0430 \u0441\u0442\u043E\u0432\u043F\u0446\u044F",
        resize100: "\u0420\u043E\u0437\u043C\u0456\u0440 100%",
        resize75: "\u0420\u043E\u0437\u043C\u0456\u0440 75%",
        resize50: "\u0420\u043E\u0437\u043C\u0456\u0440 50%",
        resize25: "\u0420\u043E\u0437\u043C\u0456\u0440 25%",
        autoSize: "\u0410\u0432\u0442\u043E \u0440\u043E\u0437\u043C\u0456\u0440",
        mirrorHorizontal: "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0438 \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0456",
        mirrorVertical: "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0438 \u043F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0456",
        rotateLeft: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u043F\u0440\u043E\u0442\u0438 \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u043E\u0432\u043E\u0457 \u0441\u0442\u0440\u0456\u043B\u043A\u0438",
        rotateRight: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0437\u0430 \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u043E\u0432\u043E\u044E \u0441\u0442\u0440\u0456\u043B\u043A\u043E\u044E",
        maxSize: "\u0428\u0438\u0440\u0438\u043D\u0430 \u0437\u0430 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438",
        minSize: "\u0428\u0438\u0440\u0438\u043D\u0430 \u0437\u0430 \u0432\u043C\u0456\u0441\u0442\u043E\u043C",
        tableHeader: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0442\u0430\u0431\u043B\u0438\u0446\u0456",
        mergeCells: "\u041E\u0431'\u0454\u0434\u043D\u0430\u0442\u0438 \u043A\u043B\u0456\u0442\u0438\u043D\u043A\u0438",
        splitCells: "\u0420\u043E\u0437\u0434\u0456\u043B\u0438\u0442\u0438 \u043A\u043B\u0456\u0442\u0438\u043D\u043A\u0443",
        HorizontalSplit: "\u0420\u043E\u0437\u0434\u0456\u043B\u0438\u0442\u0438 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
        VerticalSplit: "\u0420\u043E\u0437\u0434\u0456\u043B\u0438\u0442\u0438 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E"
      },
      menu: {
        spaced: "\u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
        bordered: "\u0417 \u043B\u0456\u043D\u0456\u044F\u043C\u0438",
        neon: "\u041D\u0435\u043E\u043D",
        translucent: "\u041D\u0430\u043F\u0456\u0432\u043F\u0440\u043E\u0437\u043E\u0440\u0438\u0439",
        shadow: "\u0422\u0456\u043D\u044C",
        code: "\u041A\u043E\u0434"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ua", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(hl);
const pl = hl.exports;
var gl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "ur",
      toolbar: {
        default: "\u0637\u06D2 \u0634\u062F\u06C1",
        save: "\u0645\u062D\u0641\u0648\u0638 \u06A9\u0631\u06CC\u06BA",
        font: "\u0641\u0648\u0646\u0679",
        formats: "\u0641\u0627\u0631\u0645\u06CC\u0679\u0633",
        fontSize: "\u0633\u0627\u0626\u0632",
        bold: "\u0628\u0648\u0644\u0688",
        underline: "\u0627\u0646\u0688\u0631 \u0644\u0627\u0626\u0646",
        italic: "\u062A\u0631\u0686\u06BE\u0627",
        strike: "\u0644\u06A9\u06CC\u0631\u06C1 \u06A9\u0631\u062F\u06C1",
        subscript: "\u0630\u06CC\u0644\u06CC",
        superscript: "\u0627\u0646\u062A\u06C1\u0627\u0626\u06CC",
        removeFormat: "\u0641\u0627\u0631\u0645\u06CC\u0679 \u06A9\u0648 \u062D\u0630\u0641 \u062F\u06CC\u06BA",
        fontColor: "\u0644\u06A9\u06BE\u0627\u0626\u06CC \u06A9\u0627 \u0631\u0646\u06AF",
        hiliteColor: "\u0646\u0645\u0627\u06CC\u0627\u06BA \u0631\u0646\u06AF",
        indent: "\u062D\u0627\u0634\u06CC\u06C1",
        outdent: "\u06C1\u0627\u0634\u06CC\u06C1 \u0648\u0627\u067E\u0633",
        align: "\u0631\u062E",
        alignLeft: "\u0628\u0627\u0626\u06CC\u06BA \u0637\u0631\u0641",
        alignRight: "\u062F\u0627\u0626\u06CC\u06BA \u0637\u0631\u0641",
        alignCenter: "\u0645\u0631\u06A9\u0632 \u0645\u06CC\u06BA \u0637\u0631\u0641",
        alignJustify: "\u06C1\u0631 \u0637\u0631\u0641 \u0628\u0631\u0627\u0628\u0631",
        list: "\u0641\u06C1\u0631\u0633\u062A",
        orderList: "\u062A\u0631\u062A\u06CC\u0628 \u0634\u062F\u06C1 \u0641\u06C1\u0631\u0633\u062A",
        unorderList: "\u063A\u06CC\u0631 \u062A\u0631\u062A\u06CC\u0628 \u0634\u062F\u06C1 \u0641\u06C1\u0631\u0633\u062A",
        horizontalRule: "\u0644\u06A9\u06CC\u0631",
        hr_solid: "\u0679\u06BE\u0648\u0633",
        hr_dotted: "\u0646\u0642\u0637\u06D2 \u062F\u0627\u0631",
        hr_dashed: "\u0688\u06CC\u0634\u0688",
        table: "\u0645\u06CC\u0632",
        link: "\u0644\u0646\u06A9",
        math: "\u0631\u06CC\u0627\u0636\u06CC",
        image: "\u062A\u0635\u0648\u06CC\u0631",
        video: "\u0648\u06CC\u0688\u06CC\u0648",
        audio: "\u0622\u0648\u0627\u0632",
        fullScreen: "\u067E\u0648\u0631\u06CC \u0627\u0633\u06A9\u0631\u06CC\u0646",
        showBlocks: "\u0688\u0628\u06D2 \u062F\u06A9\u06BE\u0627\u0626\u06CC\u06BA",
        codeView: "\u06A9\u0648\u0688 \u06A9\u0627 \u0646\u0638\u0627\u0631\u06C1",
        undo: "\u0648\u0627\u067E\u0633 \u06A9\u0631\u06CC\u06BA",
        redo: "\u062F\u0648\u0628\u0627\u0631\u06C1 \u06A9\u0631\u06CC\u06BA",
        preview: "\u067E\u06CC\u0634\u0646\u0638\u0631",
        print: "\u067E\u0631\u0646\u0679 \u06A9\u0631\u06CC\u06BA",
        tag_p: "\u067E\u06CC\u0631\u0627\u06AF\u0631\u0627\u0641",
        tag_div: "\u0639\u0627\u0645 (div)",
        tag_h: "\u06C1\u06CC\u0688\u0631",
        tag_blockquote: "\u0627\u0642\u062A\u0628\u0627\u0633",
        tag_pre: "\u06A9\u0648\u0688",
        template: "\u0633\u0627\u0646\u0686\u06C1",
        lineHeight: "\u0644\u06A9\u06CC\u0631 \u06A9\u06CC \u0627\u0648\u0646\u0686\u0627\u0626\u06CC",
        paragraphStyle: "\u0639\u0628\u0627\u0631\u062A \u06A9\u0627 \u0627\u0646\u062F\u0627\u0632",
        textStyle: "\u0645\u062A\u0646 \u06A9\u0627 \u0627\u0646\u062F\u0627\u0632",
        imageGallery: "\u062A\u0635\u0648\u06CC\u0631\u06CC \u0646\u06AF\u0627\u0631\u062E\u0627\u0646\u06C1",
        dir_ltr: "\u0628\u0627\u0626\u06CC\u06BA \u0633\u06D2 \u062F\u0627\u0626\u06CC\u06BA",
        dir_rtl: "\u062F\u0627\u0626\u06CC\u06BA \u0633\u06D2 \u0628\u0627\u0626\u06CC\u06BA",
        mention: "\u062A\u0630\u06A9\u0631\u06C1"
      },
      dialogBox: {
        linkBox: {
          title: "\u0644\u0646\u06A9 \u062F\u0627\u062E\u0644 \u06A9\u0631\u06CC\u06BA",
          url: "\u0644\u0646\u06A9 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u06CC\u06D2 URL",
          text: "\u0638\u0627\u06C1\u0631 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u06CC\u06D2 \u0645\u062A\u0646",
          newWindowCheck: "\u0646\u0626\u06CC \u0648\u0646\u0688\u0648 \u0645\u06CC\u06BA \u06A9\u06BE\u0648\u0644\u06CC\u06BA",
          downloadLinkCheck: "\u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u0644\u0646\u06A9",
          bookmark: "\u0628\u06A9 \u0645\u0627\u0631\u06A9"
        },
        mathBox: {
          title: "\u0631\u06CC\u0627\u0636\u06CC",
          inputLabel: "\u0631\u06CC\u0627\u0636\u06CC\u0627\u062A\u06CC \u0627\u0634\u0627\u0631\u06D2",
          fontSizeLabel: "\u062D\u0631\u0641 \u06A9\u0627 \u0633\u0627\u0626\u0632",
          previewLabel: "\u067E\u06CC\u0634 \u0646\u0638\u0627\u0631\u06C1"
        },
        imageBox: {
          title: "\u062A\u0635\u0648\u06CC\u0631 \u062F\u0627\u062E\u0644 \u06A9\u0631\u06CC\u06BA",
          file: "\u0641\u0627\u0626\u0644\u0648\u06BA \u0633\u06D2 \u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA",
          url: "\u062A\u0635\u0648\u06CC\u0631\u06CC URL",
          altText: "\u0645\u062A\u0628\u0627\u062F\u0644 \u0645\u062A\u0646"
        },
        videoBox: {
          title: "\u0648\u06CC\u0688\u06CC\u0648 \u062F\u0627\u062E\u0644 \u06A9\u0631\u06CC\u06BA",
          file: "\u0641\u0627\u0626\u0644\u0648\u06BA \u0633\u06D2 \u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA",
          url: "\u0630\u0631\u0627\u0626\u0639 \u0627\u0628\u0644\u0627\u063A \u06A9\u0627 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644\u060C \u06CC\u0648\u0679\u06CC\u0648\u0628/\u0648\u06CC\u0645\u06CC\u0648"
        },
        audioBox: {
          title: "\u0622\u0648\u0627\u0632 \u062F\u0627\u062E\u0644 \u06A9\u0631\u06CC\u06BA",
          file: "\u0641\u0627\u0626\u0644\u0648\u06BA \u0633\u06D2 \u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA",
          url: "\u0622\u0648\u0627\u0632 URL"
        },
        browser: {
          tags: "\u0679\u06CC\u06AF\u0632",
          search: "\u062A\u0644\u0627\u0634 \u06A9\u0631\u06CC\u06BA"
        },
        caption: "\u0639\u0646\u0648\u0627\u0646",
        close: "\u0628\u0646\u062F \u06A9\u0631\u06CC\u06BA",
        submitButton: "\u0628\u06BE\u06CC\u062C\u06CC\u06BA",
        revertButton: "\u0648\u0627\u067E\u0633",
        proportion: "\u062A\u0646\u0627\u0633\u0628 \u06A9\u0648 \u0645\u062D\u062F\u0648\u062F \u06A9\u0631\u06CC\u06BA",
        basic: "\u0628\u0646\u06CC\u0627\u062F\u06CC",
        left: "\u0628\u0627\u0626\u06CC\u06BA",
        right: "\u062F\u0627\u0626\u06CC\u06BA",
        center: "\u0645\u0631\u06A9\u0632",
        width: "\u0686\u0648\u0691\u0627\u0626\u06CC",
        height: "\u0627\u0648\u0646\u0686\u0627\u0626\u06CC",
        size: "\u062D\u062C\u0645",
        ratio: "\u062A\u0646\u0627\u0633\u0628"
      },
      controller: {
        edit: "\u062A\u0631\u0645\u06CC\u0645",
        unlink: "\u0644\u0646\u06A9 \u062E\u062A\u0645 \u06A9\u0631\u06CC\u06BA",
        remove: "\u062D\u0630\u0641",
        insertRowAbove: "\u0627\u0648\u067E\u0631 \u0642\u0637\u0627\u0631 \u0634\u0627\u0645\u0644 \u06A9\u0631\u06CC\u06BA",
        insertRowBelow: "\u0646\u06CC\u0686\u06D2 \u0642\u0637\u0627\u0631 \u0634\u0627\u0645\u0644 \u06A9\u0631\u06CC\u06BA",
        deleteRow: "\u0642\u0637\u0627\u0631 \u06A9\u0648 \u062D\u0630\u0641 \u06A9\u0631\u06CC\u06BA",
        insertColumnBefore: "\u067E\u06C1\u0644\u06D2 \u0633\u062A\u0648\u0646 \u0634\u0627\u0645\u0644 \u06A9\u0631\u06CC\u06BA",
        insertColumnAfter: "\u0627\u0633 \u06A9\u06D2 \u0628\u0639\u062F \u0633\u062A\u0648\u0646 \u0634\u0627\u0645\u0644 \u06A9\u0631\u06CC\u06BA",
        deleteColumn: "\u0633\u062A\u0648\u0646 \u062D\u0630\u0641 \u06A9\u0631\u06CC\u06BA",
        fixedColumnWidth: "\u0645\u0642\u0631\u0631\u06C1 \u0633\u062A\u0648\u0646 \u06A9\u06CC \u0686\u0648\u0691\u0627\u0626\u06CC",
        resize100: "100% \u06A9\u0627 \u062D\u062C\u0645 \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0631\u06CC\u06BA",
        resize75: "75% \u06A9\u0627 \u062D\u062C\u0645 \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0631\u06CC\u06BA",
        resize50: "50% \u06A9\u0627 \u062D\u062C\u0645 \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0631\u06CC\u06BA",
        resize25: "25% \u06A9\u0627 \u062D\u062C\u0645 \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0631\u06CC\u06BA",
        autoSize: "\u0627\u0632\u062E\u0648\u062F \u062D\u062C\u0645",
        mirrorHorizontal: "\u0622\u0626\u06CC\u0646\u06C1\u060C \u0627\u0641\u0642\u06CC",
        mirrorVertical: "\u0622\u0626\u06CC\u0646\u06C1\u060C \u0639\u0645\u0648\u062F\u06CC",
        rotateLeft: "\u0628\u0627\u0626\u06CC\u06BA \u06AF\u06BE\u0648\u0645\u0648",
        rotateRight: "\u062F\u0627\u0626\u06CC\u06BA \u06AF\u06BE\u0645\u0627\u0626\u06CC\u06BA",
        maxSize: "\u0632\u06CC\u0627\u062F\u06C1 \u0633\u06D2 \u0632\u06CC\u0627\u062F\u06C1 \u0633\u0627\u0626\u0632",
        minSize: "\u06A9\u0645 \u0627\u0632 \u06A9\u0645 \u0633\u0627\u0626\u0632",
        tableHeader: "\u0645\u06CC\u0632 \u06A9\u06CC \u0633\u0631\u062E\u06CC",
        mergeCells: "\u062D\u062C\u0631\u0648\u06BA \u06A9\u0648 \u0636\u0645 \u06A9\u0631\u06CC\u06BA",
        splitCells: "\u062D\u062C\u0631\u0648\u06BA \u06A9\u0648 \u0639\u0644\u06CC\u062F\u06C1 \u06A9\u0631\u0648",
        HorizontalSplit: "\u0627\u0641\u0642\u06CC \u062A\u0642\u0633\u06CC\u0645",
        VerticalSplit: "\u0639\u0645\u0648\u062F\u06CC \u062A\u0642\u0633\u06CC\u0645"
      },
      menu: {
        spaced: "\u0641\u0627\u0635\u0644\u06C1",
        bordered: "\u0633\u0631\u062D\u062F\u06CC",
        neon: "\u0646\u06CC\u06CC\u0646",
        translucent: "\u067E\u0627\u0631\u0628\u0627\u0633\u06CC",
        shadow: "\u0633\u0627\u06CC\u06C1",
        code: "\u06A9\u0648\u0688"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ur", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(gl);
const ml = gl.exports;
var bl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : D, function(t, i) {
    const n = {
      code: "zh_cn",
      toolbar: {
        default: "\u9ED8\u8BA4",
        save: "\u4FDD\u5B58",
        font: "\u5B57\u4F53",
        formats: "\u683C\u5F0F",
        fontSize: "\u5B57\u53F7",
        bold: "\u7C97\u4F53",
        underline: "\u4E0B\u5212\u7EBF",
        italic: "\u659C\u4F53",
        strike: "\u5220\u9664\u7EBF",
        subscript: "\u4E0B\u6807",
        superscript: "\u4E0A\u6807",
        removeFormat: "\u6E05\u9664\u683C\u5F0F",
        fontColor: "\u5B57\u4F53\u989C\u8272",
        hiliteColor: "\u80CC\u666F\u989C\u8272",
        indent: "\u589E\u52A0\u7F29\u8FDB",
        outdent: "\u51CF\u5C11\u7F29\u8FDB",
        align: "\u5BF9\u9F50\u65B9\u5F0F",
        alignLeft: "\u5DE6\u5BF9\u9F50",
        alignRight: "\u53F3\u5BF9\u9F50",
        alignCenter: "\u5C45\u4E2D",
        alignJustify: "\u4E24\u7AEF\u5BF9\u9F50",
        list: "\u5217\u8868",
        orderList: "\u6709\u5E8F\u5217\u8868",
        unorderList: "\u65E0\u5E8F\u5217\u8868",
        horizontalRule: "\u6C34\u5E73\u7EBF",
        hr_solid: "\u5B9E\u7EBF",
        hr_dotted: "\u70B9\u7EBF",
        hr_dashed: "\u865A\u7EBF",
        table: "\u8868\u683C",
        link: "\u8D85\u94FE\u63A5",
        math: "\u6570\u5B66",
        image: "\u56FE\u7247",
        video: "\u89C6\u9891",
        audio: "\u97F3\u8BAF",
        fullScreen: "\u5168\u5C4F",
        showBlocks: "\u663E\u793A\u5757\u533A\u57DF",
        codeView: "\u4EE3\u7801\u89C6\u56FE",
        undo: "\u64A4\u6D88",
        redo: "\u6062\u590D",
        preview: "\u9884\u89C8",
        print: "\u6253\u5370",
        tag_p: "\u6BB5\u843D",
        tag_div: "\u6B63\u6587 (DIV)",
        tag_h: "\u6807\u9898",
        tag_blockquote: "\u5F15\u7528",
        tag_pre: "\u4EE3\u7801",
        template: "\u6A21\u677F",
        lineHeight: "\u884C\u9AD8",
        paragraphStyle: "\u6BB5\u843D\u6837\u5F0F",
        textStyle: "\u6587\u5B57\u6837\u5F0F",
        imageGallery: "\u56FE\u7247\u5E93",
        dir_ltr: "\u5DE6\u5230\u53F3",
        dir_rtl: "\u53F3\u5230\u5DE6",
        mention: "\u63D0\u5230"
      },
      dialogBox: {
        linkBox: {
          title: "\u63D2\u5165\u8D85\u94FE\u63A5",
          url: "\u7F51\u5740",
          text: "\u8981\u663E\u793A\u7684\u6587\u5B57",
          newWindowCheck: "\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00",
          downloadLinkCheck: "\u4E0B\u8F7D\u94FE\u63A5",
          bookmark: "\u4E66\u7B7E"
        },
        mathBox: {
          title: "\u6570\u5B66",
          inputLabel: "\u6570\u5B66\u7B26\u53F7",
          fontSizeLabel: "\u5B57\u53F7",
          previewLabel: "\u9884\u89C8"
        },
        imageBox: {
          title: "\u63D2\u5165\u56FE\u7247",
          file: "\u4E0A\u4F20\u56FE\u7247",
          url: "\u56FE\u7247\u7F51\u5740",
          altText: "\u66FF\u6362\u6587\u5B57"
        },
        videoBox: {
          title: "\u63D2\u5165\u89C6\u9891",
          file: "\u4E0A\u4F20\u56FE\u7247",
          url: "\u5D4C\u5165\u7F51\u5740, Youtube,Vimeo"
        },
        audioBox: {
          title: "\u63D2\u5165\u97F3\u9891",
          file: "\u4E0A\u4F20\u56FE\u7247",
          url: "\u97F3\u9891\u7F51\u5740"
        },
        browser: {
          tags: "\u6807\u7B7E",
          search: "\u641C\u7D22"
        },
        caption: "\u6807\u9898",
        close: "\u53D6\u6D88",
        submitButton: "\u786E\u5B9A",
        revertButton: "\u6062\u590D",
        proportion: "\u6BD4\u4F8B",
        basic: "\u57FA\u672C",
        left: "\u5DE6",
        right: "\u53F3",
        center: "\u5C45\u4E2D",
        width: "\u5BBD\u5EA6",
        height: "\u9AD8\u5EA6",
        size: "\u5C3A\u5BF8",
        ratio: "\u6BD4"
      },
      controller: {
        edit: "\u7F16\u8F91",
        unlink: "\u53BB\u9664\u94FE\u63A5",
        remove: "\u5220\u9664",
        insertRowAbove: "\u5728\u4E0A\u65B9\u63D2\u5165",
        insertRowBelow: "\u5728\u4E0B\u65B9\u63D2\u5165",
        deleteRow: "\u5220\u9664\u884C",
        insertColumnBefore: "\u5728\u5DE6\u4FA7\u63D2\u5165",
        insertColumnAfter: "\u5728\u53F3\u4FA7\u63D2\u5165",
        deleteColumn: "\u5220\u9664\u5217",
        fixedColumnWidth: "\u56FA\u5B9A\u5217\u5BBD",
        resize100: "\u653E\u5927 100%",
        resize75: "\u653E\u5927 75%",
        resize50: "\u653E\u5927 50%",
        resize25: "\u653E\u5927 25%",
        mirrorHorizontal: "\u7FFB\u8F6C\u5DE6\u53F3",
        mirrorVertical: "\u7FFB\u8F6C\u4E0A\u4E0B",
        rotateLeft: "\u5411\u5DE6\u65CB\u8F6C",
        rotateRight: "\u5411\u53F3\u65CB\u8F6C",
        maxSize: "\u6700\u5927\u5C3A\u5BF8",
        minSize: "\u6700\u5C0F\u5C3A\u5BF8",
        tableHeader: "\u8868\u683C\u6807\u9898",
        mergeCells: "\u5408\u5E76\u5355\u5143\u683C",
        splitCells: "\u5206\u5272\u5355\u5143\u683C",
        HorizontalSplit: "\u6C34\u5E73\u5206\u5272",
        VerticalSplit: "\u5782\u76F4\u5206\u5272"
      },
      menu: {
        spaced: "\u95F4\u9694\u5F00",
        bordered: "\u8FB9\u754C\u7EBF",
        neon: "\u9713\u8679\u706F",
        translucent: "\u534A\u900F\u660E",
        shadow: "\u9634\u5F71",
        code: "\u4EE3\u7801"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "zh_cn", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(bl);
const _l = bl.exports, Qa = { ckb: Mn, da: On, de: Un, en: _t, es: Pn, fr: jn, he: qn, it: Yn, ja: Kn, ko: Zn, lv: el, nl: il, pl: ll, pt_br: ol, ro: rl, ru: cl, se: fl, ua: pl, ur: ml, zh_cn: _l }, ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: Mn,
  da: On,
  de: Un,
  en: _t,
  es: Pn,
  fr: jn,
  he: qn,
  it: Yn,
  ja: Kn,
  ko: Zn,
  lv: el,
  nl: il,
  pl: ll,
  pt_br: ol,
  ro: rl,
  ru: cl,
  se: fl,
  ua: pl,
  ur: ml,
  zh_cn: _l,
  default: Qa
}, Symbol.toStringTag, { value: "Module" })), er = (e, t, i) => {
  const n = {
    plugins: Bn,
    lang: ht[t] ? ht[t] : _t
  }, l = { ...e, ...n };
  return Vi.create(i, l);
}, tr = (e, t, i) => {
  const n = {
    katex: El,
    plugins: Bn,
    lang: ht[t] ? ht[t] : _t
  }, l = { ...e, ...n };
  return Vi.create(i, l);
}, ir = "Show password", nr = "This is mandatory", lr = "Follow link", sr = "Show details", or = "Reset", ar = "No results. Try typing some text.", rr = "Today", ur = "This month", cr = "Last month", dr = "This year", fr = {
  noOptionsMessage: ar,
  showPasswordMessage: ir,
  isMandatoryMessage: nr,
  followLinkMessage: lr,
  openMessage: sr,
  resetMessage: or,
  todayRangeText: rr,
  thisMonthRangeText: ur,
  lastMonthRangeText: cr,
  thisYearRangeText: dr
}, hr = [
  ["undo", "redo"],
  ["font", "fontSize", "formatBlock"],
  ["paragraphStyle", "blockquote"],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["fontColor", "hiliteColor", "textStyle"],
  ["removeFormat"],
  "/",
  ["outdent", "indent"],
  ["align", "horizontalRule", "list", "lineHeight"],
  ["table", "link"],
  ["fullScreen", "showBlocks", "codeView"],
  ["preview", "print"],
  ["template"]
], pr = [
  ["undo", "redo"],
  ["font", "fontSize", "formatBlock"],
  ["paragraphStyle", "blockquote"],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["fontColor", "hiliteColor", "textStyle"],
  ["removeFormat"],
  "/",
  ["outdent", "indent"],
  ["align", "horizontalRule", "list", "lineHeight"],
  ["table", "link", "math"],
  ["fullScreen", "showBlocks", "codeView"],
  ["preview", "print"],
  ["template"]
], vl = {
  mixins: [Ye, Le, We],
  props: {
    lang: { type: String, default: "en" },
    editorOptions: {
      type: Object,
      default() {
        return { buttonList: hr };
      }
    }
  },
  data() {
    return {
      editor: void 0,
      timeout: void 0,
      stateConfigValue: new De(this.stateConfig, this.disabled || this.readonly),
      stateTextValue: new Oe(this.stateTexts)
    };
  },
  watch: {
    disabled() {
      this.editor && this.updateEditorDisabled();
    }
  },
  methods: {
    storeEditorValue(e) {
      this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.value = e;
      }, 300);
    },
    updateEditorDisabled() {
      this.disabled ? this.editor.disabled() : this.editor.enabled();
    }
  }
}, gr = {
  name: "LktFieldEditor",
  components: { LktFieldState: pe },
  mixins: [vl],
  mounted() {
    this.editor = er(this.editorOptions, this.lang, this.Identifier), this.editor.onChange = this.storeEditorValue, this.updateEditorDisabled();
  }
}, mr = ["data-show-ui", "data-labeled"], br = ["name", "id", "disabled", "readonly", "placeholder"], _r = ["for", "innerHTML"];
function vr(e, t, i, n, l, s) {
  const o = fe("lkt-field-state");
  return C(), L("div", {
    class: K(["is-editor", e.classes]),
    "data-show-ui": e.showInfoUi,
    "data-labeled": e.canRenderLabelHtml
  }, [
    V(e.$slots, "prefix"),
    $(ee("textarea", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, br), [
      [te, e.value]
    ]),
    e.canRenderLabelSlot ? V(e.$slots, "label", { key: 0 }) : T("", !0),
    e.canRenderLabelHtml ? (C(), L("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, _r)) : T("", !0),
    e.showInfoUi ? (C(), he(o, {
      key: 2,
      "state-config-value": e.stateConfigValue,
      "state-texts-value": e.stateTextValue,
      onClickUi: e.onClickUi
    }, null, 8, ["state-config-value", "state-texts-value", "onClickUi"])) : T("", !0)
  ], 10, mr);
}
const Ri = /* @__PURE__ */ ie(gr, [["render", vr]]), yr = {
  name: "LktFieldKatex",
  components: { LktFieldState: pe },
  mixins: [vl],
  props: {
    editorOptions: {
      type: Object,
      default() {
        return { buttonList: pr };
      }
    }
  },
  mounted() {
    this.editor = tr(this.editorOptions, this.lang, this.Identifier), this.editor.onChange = this.storeEditorValue, this.updateEditorDisabled();
  }
}, wr = ["data-show-ui", "data-labeled"], kr = ["name", "id", "disabled", "readonly", "placeholder"], Sr = ["for", "innerHTML"];
function xr(e, t, i, n, l, s) {
  const o = fe("lkt-field-state");
  return C(), L("div", {
    class: K(["is-editor", e.classes]),
    "data-show-ui": e.showInfoUi,
    "data-labeled": e.canRenderLabelHtml
  }, [
    V(e.$slots, "prefix"),
    $(ee("textarea", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, kr), [
      [te, e.value]
    ]),
    e.canRenderLabelSlot ? V(e.$slots, "label", { key: 0 }) : T("", !0),
    e.canRenderLabelHtml ? (C(), L("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Sr)) : T("", !0),
    e.showInfoUi ? (C(), he(o, {
      key: 2,
      "state-config-value": e.stateConfigValue,
      "state-texts-value": e.stateTextValue,
      onClickUi: e.onClickUi
    }, null, 8, ["state-config-value", "state-texts-value", "onClickUi"])) : T("", !0)
  ], 10, wr);
}
const Ti = /* @__PURE__ */ ie(yr, [["render", xr]]);
function Tt(e) {
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tt(e);
}
function yl(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Ie(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Ke(e) {
  Ie(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Tt(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Cr(e, t) {
  Ie(2, arguments);
  var i = Ke(e), n = yl(t);
  if (isNaN(n))
    return new Date(NaN);
  if (!n)
    return i;
  var l = i.getDate(), s = new Date(i.getTime());
  s.setMonth(i.getMonth() + n + 1, 0);
  var o = s.getDate();
  return l >= o ? s : (i.setFullYear(s.getFullYear(), s.getMonth(), l), i);
}
function wl(e) {
  Ie(1, arguments);
  var t = Ke(e), i = t.getMonth();
  return t.setFullYear(t.getFullYear(), i + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function kl(e) {
  Ie(1, arguments);
  var t = Ke(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function zr(e) {
  Ie(1, arguments);
  var t = Ke(e), i = t.getFullYear();
  return t.setFullYear(i + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Er(e) {
  Ie(1, arguments);
  var t = Ke(e), i = new Date(0);
  return i.setFullYear(t.getFullYear(), 0, 1), i.setHours(0, 0, 0, 0), i;
}
function Bi(e, t) {
  Ie(2, arguments);
  var i = yl(t);
  return Cr(e, -i);
}
const Lr = () => ({ label: M.TODAY_RANGE_TEXT, range: [new Date(), new Date()] }), Ir = () => ({ label: M.THIS_MONTH_RANGE_TEXT, range: [kl(new Date()), wl(new Date())] }), Nr = () => ({
  label: M.LAST_MONTH_RANGE_TEXT,
  range: [kl(Bi(new Date(), 1)), wl(Bi(new Date(), 1))]
}), Rr = () => ({ label: M.THIS_YEAR_RANGE_TEXT, range: [Er(new Date()), zr(new Date())] }), Pr = () => [
  Lr(),
  Ir(),
  Nr(),
  Rr()
], $r = {
  install: (e, t = fr) => {
    t.components ? (t.components.date && e.component("Datepicker", ei).component("lkt-field-date", di), t.components.select && e.component("lkt-field-select", Ii), t.components.tel && e.component("lkt-field-tel", ai), t.components.text && e.component("lkt-field-text", wt), t.components.textarea && e.component("lkt-field-text-area", si), t.components.email && e.component("lkt-field-email", oi), t.components.password && e.component("lkt-field-password", ui), t.components.check && e.component("lkt-field-check", ni), t.components.unit && e.component("lkt-field-unit", ri), t.components.switch && e.component("lkt-field-switch", li), t.components.radio && e.component("lkt-field-radio", ci), t.components.editor && e.component("lkt-field-editor", Ri), t.components.katex && e.component("lkt-field-katex", Ti)) : e.component("Datepicker", ei).component("lkt-field-text", wt).component("lkt-field-text-area", si).component("lkt-field-check", ni).component("lkt-field-switch", li).component("lkt-field-email", oi).component("lkt-field-tel", ai).component("lkt-field-unit", ri).component("lkt-field-password", ui).component("lkt-field-radio", ci).component("lkt-field-date", di).component("lkt-field-select", Ii).component("lkt-field-editor", Ri).component("lkt-field-katex", Ti), typeof t == "object" && (typeof t.noOptionsMessage < "u" && (M.NO_OPTIONS_MESSAGE = t.noOptionsMessage), typeof t.showPasswordMessage < "u" && (M.SHOW_PASSWORD_MESSAGE = t.showPasswordMessage), typeof t.isMandatoryMessage < "u" && (M.IS_MANDATORY_MESSAGE = t.isMandatoryMessage), typeof t.todayRangeText < "u" && (M.TODAY_RANGE_TEXT = t.todayRangeText), typeof t.thisMonthRangeText < "u" && (M.THIS_MONTH_RANGE_TEXT = t.thisMonthRangeText), typeof t.lastMonthRangeText < "u" && (M.LAST_MONTH_RANGE_TEXT = t.lastMonthRangeText), typeof t.thisYearRangeText < "u" && (M.THIS_YEAR_RANGE_TEXT = t.thisYearRangeText), typeof t.followLinkMessage < "u" && (M.FOLLOW_LINK_MESSAGE = t.followLinkMessage), typeof t.openMessage < "u" && (M.OPEN_MESSAGE = t.openMessage), typeof t.resetMessage < "u" && (M.RESET_MESSAGE = t.resetMessage));
  }
};
export {
  $r as default,
  Pr as getDefaultPresetRanges
};
