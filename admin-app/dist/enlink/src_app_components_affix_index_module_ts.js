"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_affix_index_module_ts"],{

/***/ 78644:
/*!*******************************************!*\
  !*** ./src/app/components/affix/basic.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAffixBasicComponent": () => (/* binding */ NzDemoAffixBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoAffixBasicComponent {
    constructor() {
        this.offsetTop = 10;
        this.nzOffsetBottom = 10;
    }
    setOffsetTop() {
        this.offsetTop += 10;
    }
    setOffsetBottom() {
        this.nzOffsetBottom += 10;
    }
}
NzDemoAffixBasicComponent.ɵfac = function NzDemoAffixBasicComponent_Factory(t) { return new (t || NzDemoAffixBasicComponent)(); };
NzDemoAffixBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoAffixBasicComponent, selectors: [["nz-demo-affix-basic"]], decls: 9, vars: 2, consts: [[3, "nzOffsetTop"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "nzOffsetBottom", "click"], ["nz-button", "", "nzType", "primary"]], template: function NzDemoAffixBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-affix", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoAffixBasicComponent_Template_button_click_1_listener() { return ctx.setOffsetTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Affix top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-affix", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoAffixBasicComponent_Template_nz_affix_click_5_listener() { return ctx.setOffsetBottom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3)(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Affix bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", ctx.offsetTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetBottom", ctx.nzOffsetBottom);
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__.NzAffixComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 21121:
/*!**************************************************!*\
  !*** ./src/app/components/affix/en.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAffixEnComponent": () => (/* binding */ NzDemoAffixEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 78644);
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./target */ 23901);
/* harmony import */ var _on_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-change */ 10176);











class NzDemoAffixEnComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
NzDemoAffixEnComponent.ɵfac = function NzDemoAffixEnComponent_Factory(t) { return new (t || NzDemoAffixEnComponent)(); };
NzDemoAffixEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzDemoAffixEnComponent, selectors: [["nz-demo-affix"]], viewQuery: function NzDemoAffixEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 221, vars: 16, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-affix-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-affix-demo-on-change", "nzTitle", "Callback"], ["nzHref", "#components-affix-demo-target", "nzTitle", "Container to scroll."], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-affix-basic", "nzGenerateCommand", "ng g ng-zorro-antd:affix-basic <name>", "nzComponentName", "NzDemoAffixBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Container to scroll.", "nzSelector", "nz-demo-affix-target", "nzGenerateCommand", "ng g ng-zorro-antd:affix-target <name>", "nzComponentName", "NzDemoAffixTargetComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Callback", "nzSelector", "nz-demo-affix-on-change", "nzGenerateCommand", "ng g ng-zorro-antd:affix-on-change <name>", "nzComponentName", "NzDemoAffixOnChangeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-affix"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-affix'", 1, "anchor"], [1, "language-jsx"], [1, "token", "tag"], [1, "token", "style-attr", "language-css"], [1, "token", "attr-name"], [1, "token", "attr-value"], [1, "token", "property"], [1, "token", "number"], [1, "token", "operator"]], template: function NzDemoAffixEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzClick", function NzDemoAffixEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 6)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 7)(11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Make an element stick to viewport.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h2", 11)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "When user browses a long web page, some content need to stick to the viewport. This is common for menus and actions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "pre", 13)(27, "code")(28, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " NzAffixModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "'ng-zorro-antd/affix'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "h2")(45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzDemoAffixEnComponent_Template_i_click_47_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 18)(49, "div", 19)(50, "nz-code-box", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "nz-demo-affix-basic", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "The simplest usage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "nz-demo-affix-target", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Set a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "nzTarget");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " for 'nz-affix', which is listen to scroll event of target element (default is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "window");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 19)(67, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "nz-demo-affix-on-change", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Callback with affixed state.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "h2", 26)(74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "h3", 28)(79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "table")(86, "thead")(87, "tr")(88, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "tbody")(99, "tr")(100, "td")(101, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "[nzOffsetBottom]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Pixels to offset from bottom when calculating position of scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "td")(106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "tr")(113, "td")(114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "[nzOffsetTop]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "Pixels to offset from top when calculating position of scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "td")(119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "td")(122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "tr")(127, "td")(128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "[nzTarget]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "specifies the scrollable area dom node");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "td")(133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "string | HTMLElement");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "td")(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "window");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "tr")(140, "td")(141, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "(nzChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Callback for when affix state is changed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "td")(146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "p")(152, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, " Children of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, " can not be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "position: absolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, ", but you can set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, " as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "position: absolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "pre", 31)(168, "code")(169, "span", 32)(170, "span", 32)(171, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "span", 33)(175, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, "=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "span", 35)(182, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](183, "position");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](185, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, " absolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](191, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197, "px, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](213, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "span", 32)(215, "span", 32)(216, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](218, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzId", "components-affix-demo-basic")("nzLink", "components-affix-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzId", "components-affix-demo-target")("nzLink", "components-affix-demo-target")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/target.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzId", "components-affix-demo-on-change")("nzLink", "components-affix-demo-on-change")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/on-change.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_5__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoAffixBasicComponent, _target__WEBPACK_IMPORTED_MODULE_2__.NzDemoAffixTargetComponent, _on_change__WEBPACK_IMPORTED_MODULE_3__.NzDemoAffixOnChangeComponent], encapsulation: 2 });


/***/ }),

/***/ 33628:
/*!**************************************************!*\
  !*** ./src/app/components/affix/index.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAffixModule": () => (/* binding */ NzDemoAffixModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 20672);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 78644);
/* harmony import */ var _on_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-change */ 10176);
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target */ 23901);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zh.component */ 97035);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.component */ 21121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);













class NzDemoAffixModule {
}
NzDemoAffixModule.ɵfac = function NzDemoAffixModule_Factory(t) { return new (t || NzDemoAffixModule)(); };
NzDemoAffixModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: NzDemoAffixModule });
NzDemoAffixModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoAffixEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_5__.NzDemoAffixZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NzDemoAffixModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoAffixBasicComponent,
        _on_change__WEBPACK_IMPORTED_MODULE_3__.NzDemoAffixOnChangeComponent,
        _target__WEBPACK_IMPORTED_MODULE_4__.NzDemoAffixTargetComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_5__.NzDemoAffixZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoAffixEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonModule, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__.NzAnchorModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 20672:
/*!********************************************!*\
  !*** ./src/app/components/affix/module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);



const moduleList = [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_0__.NzAffixModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__.NzAnchorModule];


/***/ }),

/***/ 10176:
/*!***********************************************!*\
  !*** ./src/app/components/affix/on-change.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAffixOnChangeComponent": () => (/* binding */ NzDemoAffixOnChangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoAffixOnChangeComponent {
    onChange(status) {
        console.log(status);
    }
}
NzDemoAffixOnChangeComponent.ɵfac = function NzDemoAffixOnChangeComponent_Factory(t) { return new (t || NzDemoAffixOnChangeComponent)(); };
NzDemoAffixOnChangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoAffixOnChangeComponent, selectors: [["nz-demo-affix-on-change"]], decls: 4, vars: 1, consts: [[3, "nzOffsetTop", "nzChange"], ["nz-button", ""]], template: function NzDemoAffixOnChangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzChange", function NzDemoAffixOnChangeComponent_Template_nz_affix_nzChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "120px to affix top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", 120);
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__.NzAffixComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 23901:
/*!********************************************!*\
  !*** ./src/app/components/affix/target.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAffixTargetComponent": () => (/* binding */ NzDemoAffixTargetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoAffixTargetComponent {
}
NzDemoAffixTargetComponent.ɵfac = function NzDemoAffixTargetComponent_Factory(t) { return new (t || NzDemoAffixTargetComponent)(); };
NzDemoAffixTargetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoAffixTargetComponent, selectors: [["nz-demo-affix-target"]], decls: 7, vars: 2, consts: [[1, "scrollable-container"], ["target", ""], [1, "background"], ["id", "affix-container-target", 3, "nzTarget"], ["nz-button", "", 3, "nzType"]], template: function NzDemoAffixTargetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2)(3, "nz-affix", 3)(4, "button", 4)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fixed at the top of container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTarget", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__.NzAffixComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], styles: [".scrollable-container[_ngcontent-%COMP%] {\n        height: 100px;\n        overflow-y: scroll;\n      }\n\n      .background[_ngcontent-%COMP%] {\n        padding-top: 60px;\n        height: 300px;\n        background-image: url(//zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxhQUFhO1FBQ2Isa0JBQWtCO01BQ3BCOztNQUVBO1FBQ0UsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYiw0RUFBNEU7TUFDOUUiLCJmaWxlIjoidGFyZ2V0LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuc2Nyb2xsYWJsZS1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICB9XG5cbiAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvUm1qd1FpSm9yS3lvYnZJLmpwZyk7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 97035:
/*!**************************************************!*\
  !*** ./src/app/components/affix/zh.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoAffixZhComponent": () => (/* binding */ NzDemoAffixZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 78644);
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./target */ 23901);
/* harmony import */ var _on_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-change */ 10176);











class NzDemoAffixZhComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
NzDemoAffixZhComponent.ɵfac = function NzDemoAffixZhComponent_Factory(t) { return new (t || NzDemoAffixZhComponent)(); };
NzDemoAffixZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzDemoAffixZhComponent, selectors: [["nz-demo-affix"]], viewQuery: function NzDemoAffixZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 221, vars: 16, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-affix-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-affix-demo-on-change", "nzTitle", "\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03"], ["nzHref", "#components-affix-demo-target", "nzTitle", "\u6EDA\u52A8\u5BB9\u5668"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-affix-basic", "nzGenerateCommand", "ng g ng-zorro-antd:affix-basic <name>", "nzComponentName", "NzDemoAffixBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u6EDA\u52A8\u5BB9\u5668", "nzSelector", "nz-demo-affix-target", "nzGenerateCommand", "ng g ng-zorro-antd:affix-target <name>", "nzComponentName", "NzDemoAffixTargetComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03", "nzSelector", "nz-demo-affix-on-change", "nzGenerateCommand", "ng g ng-zorro-antd:affix-on-change <name>", "nzComponentName", "NzDemoAffixOnChangeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-affix"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-affix'", 1, "anchor"], [1, "language-jsx"], [1, "token", "tag"], [1, "token", "style-attr", "language-css"], [1, "token", "attr-name"], [1, "token", "attr-value"], [1, "token", "property"], [1, "token", "number"], [1, "token", "operator"]], template: function NzDemoAffixZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzClick", function NzDemoAffixZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 6)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u56FA\u9489");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u5C06\u9875\u9762\u5143\u7D20\u9489\u5728\u53EF\u89C6\u8303\u56F4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h2", 11)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u5F53\u5185\u5BB9\u533A\u57DF\u6BD4\u8F83\u957F\uFF0C\u9700\u8981\u6EDA\u52A8\u9875\u9762\u65F6\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u5BF9\u5E94\u7684\u64CD\u4F5C\u6216\u8005\u5BFC\u822A\u9700\u8981\u5728\u6EDA\u52A8\u8303\u56F4\u5185\u59CB\u7EC8\u5C55\u73B0\u3002\u5E38\u7528\u4E8E\u4FA7\u8FB9\u83DC\u5355\u548C\u6309\u94AE\u7EC4\u5408\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u9875\u9762\u53EF\u89C6\u8303\u56F4\u8FC7\u5C0F\u65F6\uFF0C\u614E\u7528\u6B64\u529F\u80FD\u4EE5\u514D\u906E\u6321\u9875\u9762\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "pre", 13)(28, "code")(29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " NzAffixModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "'ng-zorro-antd/affix'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h2")(46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzDemoAffixZhComponent_Template_i_click_48_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 18)(50, "div", 19)(51, "nz-code-box", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "nz-demo-affix-basic", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "nz-demo-affix-target", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "nzTarget");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " \u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, " \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u9ED8\u8BA4\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "window");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 19)(71, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "nz-demo-affix-on-change", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "\u53EF\u4EE5\u83B7\u5F97\u662F\u5426\u56FA\u5B9A\u7684\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "h2", 26)(78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "h3", 28)(83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "table")(90, "thead")(91, "tr")(92, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "\u6210\u5458");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "tbody")(103, "tr")(104, "td")(105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "[nzOffsetBottom]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "\u8DDD\u79BB\u7A97\u53E3\u5E95\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "td")(110, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "tr")(117, "td")(118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "[nzOffsetTop]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "td")(123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "td")(126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "tr")(131, "td")(132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "[nzTarget]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, " \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u503C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u5E94 DOM \u5143\u7D20\u7684\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "td")(140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "string | HTMLElement");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "td")(143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "window");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "tr")(147, "td")(148, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "(nzChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "td")(153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "p")(159, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "\u6CE8\u610F\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, " \u5185\u7684\u5143\u7D20\u4E0D\u8981\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5982\u9700\u8981\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u6548\u679C\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, " \u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "pre", 31)(168, "code")(169, "span", 32)(170, "span", 32)(171, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "span", 33)(175, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, "=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "span", 35)(182, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](183, "position");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](185, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, " absolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](191, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197, "px, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](213, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "span", 32)(215, "span", 32)(216, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](218, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzId", "components-affix-demo-basic")("nzLink", "components-affix-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzId", "components-affix-demo-target")("nzLink", "components-affix-demo-target")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/target.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzId", "components-affix-demo-on-change")("nzLink", "components-affix-demo-on-change")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/on-change.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_5__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_6__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoAffixBasicComponent, _target__WEBPACK_IMPORTED_MODULE_2__.NzDemoAffixTargetComponent, _on_change__WEBPACK_IMPORTED_MODULE_3__.NzDemoAffixOnChangeComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_affix_index_module_ts.js.map