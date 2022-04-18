"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_spin_index_module_ts"],{

/***/ 75147:
/*!******************************************!*\
  !*** ./src/app/components/spin/basic.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSpinBasicComponent": () => (/* binding */ NzDemoSpinBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);


class NzDemoSpinBasicComponent {
}
NzDemoSpinBasicComponent.ɵfac = function NzDemoSpinBasicComponent_Factory(t) { return new (t || NzDemoSpinBasicComponent)(); };
NzDemoSpinBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSpinBasicComponent, selectors: [["nz-demo-spin-basic"]], decls: 1, vars: 0, consts: [["nzSimple", ""]], template: function NzDemoSpinBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spin", 0);
    } }, directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__.NzSpinComponent], encapsulation: 2 });


/***/ }),

/***/ 7408:
/*!*****************************************************!*\
  !*** ./src/app/components/spin/custom-indicator.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSpinCustomIndicatorComponent": () => (/* binding */ NzDemoSpinCustomIndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);



function NzDemoSpinCustomIndicatorComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
} }
class NzDemoSpinCustomIndicatorComponent {
}
NzDemoSpinCustomIndicatorComponent.ɵfac = function NzDemoSpinCustomIndicatorComponent_Factory(t) { return new (t || NzDemoSpinCustomIndicatorComponent)(); };
NzDemoSpinCustomIndicatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSpinCustomIndicatorComponent, selectors: [["nz-demo-spin-custom-indicator"]], decls: 3, vars: 1, consts: [["indicatorTemplate", ""], ["nzSimple", "", 3, "nzIndicator"], ["nz-icon", "", "nzType", "loading"]], template: function NzDemoSpinCustomIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoSpinCustomIndicatorComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-spin", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIndicator", _r0);
    } }, directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconDirective, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_2__.NzSpinComponent], styles: ["i[_ngcontent-%COMP%] {\n        font-size: 24px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1pbmRpY2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsZUFBZTtNQUNqQiIsImZpbGUiOiJjdXN0b20taW5kaWNhdG9yLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 99863:
/*!*******************************************************!*\
  !*** ./src/app/components/spin/delay-and-debounce.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSpinDelayAndDebounceComponent": () => (/* binding */ NzDemoSpinDelayAndDebounceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);





class NzDemoSpinDelayAndDebounceComponent {
    constructor() {
        this.isSpinning = false;
    }
}
NzDemoSpinDelayAndDebounceComponent.ɵfac = function NzDemoSpinDelayAndDebounceComponent_Factory(t) { return new (t || NzDemoSpinDelayAndDebounceComponent)(); };
NzDemoSpinDelayAndDebounceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSpinDelayAndDebounceComponent, selectors: [["nz-demo-spin-delay-and-debounce"]], decls: 6, vars: 6, consts: [[3, "nzSpinning", "nzDelay"], [3, "nzType", "nzMessage", "nzDescription"], [3, "ngModel", "ngModelChange"]], template: function NzDemoSpinDelayAndDebounceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-spin", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Loading state\uFF1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSpinDelayAndDebounceComponent_Template_nz_switch_ngModelChange_5_listener($event) { return ctx.isSpinning = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpinning", ctx.isSpinning)("nzDelay", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "info")("nzMessage", "Alert message title")("nzDescription", "Further details about the context of this alert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isSpinning);
    } }, directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__.NzSpinComponent, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__.NzAlertComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 70808:
/*!*************************************************!*\
  !*** ./src/app/components/spin/en.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSpinEnComponent": () => (/* binding */ NzDemoSpinEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 75147);
/* harmony import */ var _inside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inside */ 19596);
/* harmony import */ var _tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tip */ 11179);
/* harmony import */ var _custom_indicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-indicator */ 7408);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./size */ 25563);
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested */ 22545);
/* harmony import */ var _delay_and_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delay-and-debounce */ 99863);















class NzDemoSpinEnComponent {
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
NzDemoSpinEnComponent.ɵfac = function NzDemoSpinEnComponent_Factory(t) { return new (t || NzDemoSpinEnComponent)(); };
NzDemoSpinEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: NzDemoSpinEnComponent, selectors: [["nz-demo-spin"]], viewQuery: function NzDemoSpinEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 302, vars: 28, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-spin-demo-basic", "nzTitle", "Basic Usage"], ["nzHref", "#components-spin-demo-size", "nzTitle", "Size"], ["nzHref", "#components-spin-demo-inside", "nzTitle", "Inside a container"], ["nzHref", "#components-spin-demo-nested", "nzTitle", "Embedded mode"], ["nzHref", "#components-spin-demo-tip", "nzTitle", "Customized description"], ["nzHref", "#components-spin-demo-delay-and-debounce", "nzTitle", "delay"], ["nzHref", "#components-spin-demo-custom-indicator", "nzTitle", "Custom spinning indicator"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic Usage", "nzSelector", "nz-demo-spin-basic", "nzGenerateCommand", "ng g ng-zorro-antd:spin-basic <name>", "nzComponentName", "NzDemoSpinBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Inside a container", "nzSelector", "nz-demo-spin-inside", "nzGenerateCommand", "ng g ng-zorro-antd:spin-inside <name>", "nzComponentName", "NzDemoSpinInsideComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Customized description", "nzSelector", "nz-demo-spin-tip", "nzGenerateCommand", "ng g ng-zorro-antd:spin-tip <name>", "nzComponentName", "NzDemoSpinTipComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom spinning indicator", "nzSelector", "nz-demo-spin-custom-indicator", "nzGenerateCommand", "ng g ng-zorro-antd:spin-custom-indicator <name>", "nzComponentName", "NzDemoSpinCustomIndicatorComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Size", "nzSelector", "nz-demo-spin-size", "nzGenerateCommand", "ng g ng-zorro-antd:spin-size <name>", "nzComponentName", "NzDemoSpinSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Embedded mode", "nzSelector", "nz-demo-spin-nested", "nzGenerateCommand", "ng g ng-zorro-antd:spin-nested <name>", "nzComponentName", "NzDemoSpinNestedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "delay", "nzSelector", "nz-demo-spin-delay-and-debounce", "nzGenerateCommand", "ng g ng-zorro-antd:spin-delay-and-debounce <name>", "nzComponentName", "NzDemoSpinDelayAndDebounceComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "language-css"], [1, "token", "selector"], [1, "token", "class"], [1, "token", "property"], [1, "token", "function"], [1, "token", "number"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-spin"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-spin'", 1, "anchor"]], template: function NzDemoSpinEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzClick", function NzDemoSpinEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "section", 10)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Spin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "span", 11)(15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "A spinner for displaying loading state of a page or a section.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "h2", 15)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "pre", 17)(29, "code")(30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, " NzSpinModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "'ng-zorro-antd/spin'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "h2")(47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NzDemoSpinEnComponent_Template_i_click_49_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 22)(51, "div", 23)(52, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "nz-demo-spin-basic", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "A simple loading status.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "nz-demo-spin-inside", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Spin in a container.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](63, "nz-demo-spin-tip", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "Customized description content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "nz-demo-spin-custom-indicator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "Use custom loading indicator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 23)(73, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](74, "nz-demo-spin-size", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "A small ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "Spin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, " use in loading text, default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "Spin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, " use in loading card-level block, and large ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "Spin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, " use in loading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, "page");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](91, "nz-demo-spin-nested", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94, "Embedding content into ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, "nz-spin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, " will alter it into loading state.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](99, "nz-demo-spin-delay-and-debounce", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102, "Specifies a delay for loading state. If ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "spinning");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105, " ends during delay, loading status won't appear.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "pre", 33)(107, "code")(108, "span", 34)(109, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110, ".example");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](116, "text-align");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, " center");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](124, "background");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, "rgba");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](136, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "0.05");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](144, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](146, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149, "border-radius");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](152, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](155, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](157, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](160, "margin-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](162, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](165, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](168, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](169, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](170, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](174, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](175, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](176, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](177, "px ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](178, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](179, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](180, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](181, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](182, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](183, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](184, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](185, "margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](186, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](187, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](190, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](191, "px ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](192, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](193, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](195, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](196, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](197, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](198, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](199, "section", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](200, "h2", 40)(201, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](202, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](203, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](204, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](205, "h3", 42)(206, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](207, "nz-spin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](208, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](209, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](210, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](211, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](212, "table")(213, "thead")(214, "tr")(215, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](216, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](217, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](218, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](219, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](220, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](222, "Default Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](223, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "tbody")(226, "tr")(227, "td")(228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](229, "[nzDelay]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](231, "specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](232, "td")(233, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](234, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](236, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](238, "tr")(239, "td")(240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](241, "[nzIndicator]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](243, "the spinning indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](244, "td")(245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](246, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](248, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](250, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](251, "tr")(252, "td")(253, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](254, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](256, "size of Spin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](257, "td")(258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](259, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](260, "td")(261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](262, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](264, "tr")(265, "td")(266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](267, "[nzSpinning]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](269, "whether Spin is spinning");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](270, "td")(271, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](272, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](273, "td")(274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](275, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](277, "tr")(278, "td")(279, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](280, "[nzSimple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](282, "whether Spin has no children");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](283, "td")(284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](285, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](286, "td")(287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](288, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](289, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](290, "tr")(291, "td")(292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](293, "[nzTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](295, "customize description content when Spin has children");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](296, "td")(297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](298, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](300, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-basic")("nzLink", "components-spin-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-inside")("nzLink", "components-spin-demo-inside")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/inside.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-tip")("nzLink", "components-spin-demo-tip")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/tip.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-custom-indicator")("nzLink", "components-spin-demo-custom-indicator")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/custom-indicator.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-size")("nzLink", "components-spin-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-nested")("nzLink", "components-spin-demo-nested")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/nested.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-delay-and-debounce")("nzLink", "components-spin-demo-delay-and-debounce")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/delay-and-debounce.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoSpinBasicComponent, _inside__WEBPACK_IMPORTED_MODULE_2__.NzDemoSpinInsideComponent, _tip__WEBPACK_IMPORTED_MODULE_3__.NzDemoSpinTipComponent, _custom_indicator__WEBPACK_IMPORTED_MODULE_4__.NzDemoSpinCustomIndicatorComponent, _size__WEBPACK_IMPORTED_MODULE_5__.NzDemoSpinSizeComponent, _nested__WEBPACK_IMPORTED_MODULE_6__.NzDemoSpinNestedComponent, _delay_and_debounce__WEBPACK_IMPORTED_MODULE_7__.NzDemoSpinDelayAndDebounceComponent], encapsulation: 2 });


/***/ }),

/***/ 92257:
/*!*************************************************!*\
  !*** ./src/app/components/spin/index.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSpinModule": () => (/* binding */ NzDemoSpinModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 58540);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 75147);
/* harmony import */ var _custom_indicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-indicator */ 7408);
/* harmony import */ var _delay_and_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delay-and-debounce */ 99863);
/* harmony import */ var _inside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inside */ 19596);
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested */ 22545);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./size */ 25563);
/* harmony import */ var _tip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tip */ 11179);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zh.component */ 99376);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./en.component */ 70808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);


















class NzDemoSpinModule {
}
NzDemoSpinModule.ɵfac = function NzDemoSpinModule_Factory(t) { return new (t || NzDemoSpinModule)(); };
NzDemoSpinModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: NzDemoSpinModule });
NzDemoSpinModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoSpinEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoSpinZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](NzDemoSpinModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoSpinBasicComponent,
        _custom_indicator__WEBPACK_IMPORTED_MODULE_3__.NzDemoSpinCustomIndicatorComponent,
        _delay_and_debounce__WEBPACK_IMPORTED_MODULE_4__.NzDemoSpinDelayAndDebounceComponent,
        _inside__WEBPACK_IMPORTED_MODULE_5__.NzDemoSpinInsideComponent,
        _nested__WEBPACK_IMPORTED_MODULE_6__.NzDemoSpinNestedComponent,
        _size__WEBPACK_IMPORTED_MODULE_7__.NzDemoSpinSizeComponent,
        _tip__WEBPACK_IMPORTED_MODULE_8__.NzDemoSpinTipComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoSpinZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoSpinEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_13__.NzSpinModule, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_14__.NzAlertModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__.NzSwitchModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 19596:
/*!*******************************************!*\
  !*** ./src/app/components/spin/inside.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSpinInsideComponent": () => (/* binding */ NzDemoSpinInsideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);


class NzDemoSpinInsideComponent {
}
NzDemoSpinInsideComponent.ɵfac = function NzDemoSpinInsideComponent_Factory(t) { return new (t || NzDemoSpinInsideComponent)(); };
NzDemoSpinInsideComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSpinInsideComponent, selectors: [["nz-demo-spin-inside"]], decls: 2, vars: 0, consts: [[1, "example"], ["nzSimple", ""]], template: function NzDemoSpinInsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-spin", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__.NzSpinComponent], styles: [".example[_ngcontent-%COMP%] {\n        text-align: center;\n        background: rgba(0, 0, 0, 0.05);\n        border-radius: 4px;\n        margin-bottom: 20px;\n        padding: 30px 50px;\n        margin: 20px 0;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2lkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxrQkFBa0I7UUFDbEIsK0JBQStCO1FBQy9CLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGNBQWM7TUFDaEIiLCJmaWxlIjoiaW5zaWRlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuZXhhbXBsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 58540:
/*!*******************************************!*\
  !*** ./src/app/components/spin/module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);




const moduleList = [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_0__.NzSpinModule, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__.NzAlertModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchModule];


/***/ }),

/***/ 22545:
/*!*******************************************!*\
  !*** ./src/app/components/spin/nested.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSpinNestedComponent": () => (/* binding */ NzDemoSpinNestedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);





class NzDemoSpinNestedComponent {
    constructor() {
        this.isSpinning = false;
    }
}
NzDemoSpinNestedComponent.ɵfac = function NzDemoSpinNestedComponent_Factory(t) { return new (t || NzDemoSpinNestedComponent)(); };
NzDemoSpinNestedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSpinNestedComponent, selectors: [["nz-demo-spin-nested"]], decls: 6, vars: 5, consts: [[3, "nzSpinning"], [3, "nzType", "nzMessage", "nzDescription"], [3, "ngModel", "ngModelChange"]], template: function NzDemoSpinNestedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-spin", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Loading state\uFF1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSpinNestedComponent_Template_nz_switch_ngModelChange_5_listener($event) { return ctx.isSpinning = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpinning", ctx.isSpinning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "info")("nzMessage", "Alert message title")("nzDescription", "Further details about the context of this alert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isSpinning);
    } }, directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__.NzSpinComponent, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__.NzAlertComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 25563:
/*!*****************************************!*\
  !*** ./src/app/components/spin/size.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSpinSizeComponent": () => (/* binding */ NzDemoSpinSizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);


class NzDemoSpinSizeComponent {
}
NzDemoSpinSizeComponent.ɵfac = function NzDemoSpinSizeComponent_Factory(t) { return new (t || NzDemoSpinSizeComponent)(); };
NzDemoSpinSizeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSpinSizeComponent, selectors: [["nz-demo-spin-size"]], decls: 3, vars: 2, consts: [["nzSimple", "", 3, "nzSize"], ["nzSimple", ""]], template: function NzDemoSpinSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spin", 0)(1, "nz-spin", 1)(2, "nz-spin", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "large");
    } }, directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__.NzSpinComponent], styles: ["nz-spin[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin-right: 16px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UscUJBQXFCO1FBQ3JCLGtCQUFrQjtNQUNwQiIsImZpbGUiOiJzaXplLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1zcGluIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 11179:
/*!****************************************!*\
  !*** ./src/app/components/spin/tip.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSpinTipComponent": () => (/* binding */ NzDemoSpinTipComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);



class NzDemoSpinTipComponent {
}
NzDemoSpinTipComponent.ɵfac = function NzDemoSpinTipComponent_Factory(t) { return new (t || NzDemoSpinTipComponent)(); };
NzDemoSpinTipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSpinTipComponent, selectors: [["nz-demo-spin-tip"]], decls: 2, vars: 0, consts: [["nzTip", "Loading..."], ["nzType", "info", "nzMessage", "Alert message title", "nzDescription", "Further details about the context of this alert."]], template: function NzDemoSpinTipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-spin", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__.NzSpinComponent, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__.NzAlertComponent], encapsulation: 2 });


/***/ }),

/***/ 99376:
/*!*************************************************!*\
  !*** ./src/app/components/spin/zh.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSpinZhComponent": () => (/* binding */ NzDemoSpinZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 75147);
/* harmony import */ var _inside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inside */ 19596);
/* harmony import */ var _tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tip */ 11179);
/* harmony import */ var _custom_indicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-indicator */ 7408);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./size */ 25563);
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested */ 22545);
/* harmony import */ var _delay_and_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delay-and-debounce */ 99863);















class NzDemoSpinZhComponent {
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
NzDemoSpinZhComponent.ɵfac = function NzDemoSpinZhComponent_Factory(t) { return new (t || NzDemoSpinZhComponent)(); };
NzDemoSpinZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: NzDemoSpinZhComponent, selectors: [["nz-demo-spin"]], viewQuery: function NzDemoSpinZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 201, vars: 28, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-spin-demo-basic", "nzTitle", "\u57FA\u672C\u7528\u6CD5"], ["nzHref", "#components-spin-demo-size", "nzTitle", "\u5404\u79CD\u5927\u5C0F"], ["nzHref", "#components-spin-demo-inside", "nzTitle", "\u5BB9\u5668"], ["nzHref", "#components-spin-demo-nested", "nzTitle", "\u5361\u7247\u52A0\u8F7D\u4E2D"], ["nzHref", "#components-spin-demo-tip", "nzTitle", "\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848"], ["nzHref", "#components-spin-demo-delay-and-debounce", "nzTitle", "\u5EF6\u8FDF"], ["nzHref", "#components-spin-demo-custom-indicator", "nzTitle", "\u81EA\u5B9A\u4E49\u6307\u793A\u7B26"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C\u7528\u6CD5", "nzSelector", "nz-demo-spin-basic", "nzGenerateCommand", "ng g ng-zorro-antd:spin-basic <name>", "nzComponentName", "NzDemoSpinBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u5BB9\u5668", "nzSelector", "nz-demo-spin-inside", "nzGenerateCommand", "ng g ng-zorro-antd:spin-inside <name>", "nzComponentName", "NzDemoSpinInsideComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848", "nzSelector", "nz-demo-spin-tip", "nzGenerateCommand", "ng g ng-zorro-antd:spin-tip <name>", "nzComponentName", "NzDemoSpinTipComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u6307\u793A\u7B26", "nzSelector", "nz-demo-spin-custom-indicator", "nzGenerateCommand", "ng g ng-zorro-antd:spin-custom-indicator <name>", "nzComponentName", "NzDemoSpinCustomIndicatorComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5404\u79CD\u5927\u5C0F", "nzSelector", "nz-demo-spin-size", "nzGenerateCommand", "ng g ng-zorro-antd:spin-size <name>", "nzComponentName", "NzDemoSpinSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5361\u7247\u52A0\u8F7D\u4E2D", "nzSelector", "nz-demo-spin-nested", "nzGenerateCommand", "ng g ng-zorro-antd:spin-nested <name>", "nzComponentName", "NzDemoSpinNestedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5EF6\u8FDF", "nzSelector", "nz-demo-spin-delay-and-debounce", "nzGenerateCommand", "ng g ng-zorro-antd:spin-delay-and-debounce <name>", "nzComponentName", "NzDemoSpinDelayAndDebounceComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-spin"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-spin'", 1, "anchor"]], template: function NzDemoSpinZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzClick", function NzDemoSpinZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "section", 10)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Spin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "\u52A0\u8F7D\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\u7528\u4E8E\u9875\u9762\u548C\u533A\u5757\u7684\u52A0\u8F7D\u4E2D\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "h2", 15)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "\u9875\u9762\u5C40\u90E8\u5904\u4E8E\u7B49\u5F85\u5F02\u6B65\u6570\u636E\u6216\u6B63\u5728\u6E32\u67D3\u8FC7\u7A0B\u65F6\uFF0C\u5408\u9002\u7684\u52A0\u8F7D\u52A8\u6548\u4F1A\u6709\u6548\u7F13\u89E3\u7528\u6237\u7684\u7126\u8651\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "pre", 17)(30, "code")(31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, " NzSpinModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "'ng-zorro-antd/spin'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "h2")(48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NzDemoSpinZhComponent_Template_i_click_50_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 22)(52, "div", 23)(53, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "nz-demo-spin-basic", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "\u4E00\u4E2A\u7B80\u5355\u7684 loading \u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "nz-demo-spin-inside", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "\u653E\u5165\u4E00\u4E2A\u5BB9\u5668\u4E2D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "nz-demo-spin-tip", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](69, "nz-demo-spin-custom-indicator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "\u4F7F\u7528\u81EA\u5B9A\u4E49\u6307\u793A\u7B26\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 23)(74, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](75, "nz-demo-spin-size", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "\u5C0F\u7684\u7528\u4E8E\u6587\u672C\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u7528\u4E8E\u5361\u7247\u5BB9\u5668\u7EA7\u52A0\u8F7D\uFF0C\u5927\u7684\u7528\u4E8E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "\u9875\u9762\u7EA7");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "\u52A0\u8F7D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](83, "nz-demo-spin-nested", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "\u53EF\u4EE5\u76F4\u63A5\u628A\u5185\u5BB9\u5185\u5D4C\u5230 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, "nz-spin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, " \u4E2D\uFF0C\u5C06\u73B0\u6709\u5BB9\u5668\u53D8\u4E3A\u52A0\u8F7D\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](91, "nz-demo-spin-delay-and-debounce", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94, "\u5EF6\u8FDF\u663E\u793A loading \u6548\u679C\u3002\u5F53 spinning \u72B6\u6001\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, "nzDelay");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, " \u65F6\u95F4\u5185\u7ED3\u675F\uFF0C\u5219\u4E0D\u663E\u793A loading \u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "h2", 34)(100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "h3", 36)(105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, "nz-spin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "table")(112, "thead")(113, "tr")(114, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "tbody")(125, "tr")(126, "td")(127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](128, "[nzDelay]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](130, "\u5EF6\u8FDF\u663E\u793A\u52A0\u8F7D\u6548\u679C\u7684\u65F6\u95F4\uFF08\u9632\u6B62\u95EA\u70C1\uFF09\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "td")(132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](135, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](137, "tr")(138, "td")(139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, "[nzIndicator]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "\u52A0\u8F7D\u6307\u793A\u7B26");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "td")(144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "tr")(151, "td")(152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](153, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](155, "\u7EC4\u4EF6\u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "td")(157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "td")(160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "tr")(164, "td")(165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166, "[nzSpinning]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](168, "\u662F\u5426\u65CB\u8F6C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "td")(170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "td")(173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](174, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "tr")(177, "td")(178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](179, "[nzSimple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](181, "\u662F\u5426\u5305\u88F9\u5143\u7D20");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](182, "td")(183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](184, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "td")(186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](187, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "tr")(190, "td")(191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](192, "[nzTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](194, "\u5F53\u4F5C\u4E3A\u5305\u88F9\u5143\u7D20\u65F6\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](195, "td")(196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](197, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](199, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-basic")("nzLink", "components-spin-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-inside")("nzLink", "components-spin-demo-inside")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/inside.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-tip")("nzLink", "components-spin-demo-tip")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/tip.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-custom-indicator")("nzLink", "components-spin-demo-custom-indicator")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/custom-indicator.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-size")("nzLink", "components-spin-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-nested")("nzLink", "components-spin-demo-nested")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/nested.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-spin-demo-delay-and-debounce")("nzLink", "components-spin-demo-delay-and-debounce")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/delay-and-debounce.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoSpinBasicComponent, _inside__WEBPACK_IMPORTED_MODULE_2__.NzDemoSpinInsideComponent, _tip__WEBPACK_IMPORTED_MODULE_3__.NzDemoSpinTipComponent, _custom_indicator__WEBPACK_IMPORTED_MODULE_4__.NzDemoSpinCustomIndicatorComponent, _size__WEBPACK_IMPORTED_MODULE_5__.NzDemoSpinSizeComponent, _nested__WEBPACK_IMPORTED_MODULE_6__.NzDemoSpinNestedComponent, _delay_and_debounce__WEBPACK_IMPORTED_MODULE_7__.NzDemoSpinDelayAndDebounceComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_spin_index_module_ts.js.map