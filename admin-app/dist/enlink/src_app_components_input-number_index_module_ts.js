"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_input-number_index_module_ts"],{

/***/ 6610:
/*!**************************************************!*\
  !*** ./src/app/components/input-number/basic.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoInputNumberBasicComponent": () => (/* binding */ NzDemoInputNumberBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoInputNumberBasicComponent {
    constructor() {
        this.demoValue = 3;
    }
}
NzDemoInputNumberBasicComponent.ɵfac = function NzDemoInputNumberBasicComponent_Factory(t) { return new (t || NzDemoInputNumberBasicComponent)(); };
NzDemoInputNumberBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoInputNumberBasicComponent, selectors: [["nz-demo-input-number-basic"]], decls: 1, vars: 4, consts: [[3, "ngModel", "nzMin", "nzMax", "nzStep", "ngModelChange"]], template: function NzDemoInputNumberBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-input-number", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputNumberBasicComponent_Template_nz_input_number_ngModelChange_0_listener($event) { return ctx.demoValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.demoValue)("nzMin", 1)("nzMax", 10)("nzStep", 1);
    } }, directives: [ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 18539:
/*!**************************************************!*\
  !*** ./src/app/components/input-number/digit.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoInputNumberDigitComponent": () => (/* binding */ NzDemoInputNumberDigitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoInputNumberDigitComponent {
}
NzDemoInputNumberDigitComponent.ɵfac = function NzDemoInputNumberDigitComponent_Factory(t) { return new (t || NzDemoInputNumberDigitComponent)(); };
NzDemoInputNumberDigitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoInputNumberDigitComponent, selectors: [["nz-demo-input-number-digit"]], decls: 1, vars: 5, consts: [[3, "ngModel", "nzMin", "nzMax", "nzStep", "nzPlaceHolder", "ngModelChange"]], template: function NzDemoInputNumberDigitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-input-number", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputNumberDigitComponent_Template_nz_input_number_ngModelChange_0_listener($event) { return ctx.demoValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.demoValue)("nzMin", 1)("nzMax", 10)("nzStep", 0.1)("nzPlaceHolder", "Digital");
    } }, directives: [ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 51441:
/*!*****************************************************!*\
  !*** ./src/app/components/input-number/disabled.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoInputNumberDisabledComponent": () => (/* binding */ NzDemoInputNumberDisabledComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);






class NzDemoInputNumberDisabledComponent {
    constructor() {
        this.demoValue = 3;
        this.isDisabled = false;
    }
    toggleDisabled() {
        this.isDisabled = !this.isDisabled;
    }
}
NzDemoInputNumberDisabledComponent.ɵfac = function NzDemoInputNumberDisabledComponent_Factory(t) { return new (t || NzDemoInputNumberDisabledComponent)(); };
NzDemoInputNumberDisabledComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoInputNumberDisabledComponent, selectors: [["nz-demo-input-number-disabled"]], decls: 5, vars: 6, consts: [[3, "ngModel", "nzMin", "nzMax", "nzStep", "nzDisabled", "ngModelChange"], [2, "margin-top", "20px"], ["nz-button", "", 3, "nzType", "click"]], template: function NzDemoInputNumberDisabledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-input-number", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputNumberDisabledComponent_Template_nz_input_number_ngModelChange_0_listener($event) { return ctx.demoValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoInputNumberDisabledComponent_Template_button_click_2_listener() { return ctx.toggleDisabled(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Toggle Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.demoValue)("nzMin", 1)("nzMax", 10)("nzStep", 1)("nzDisabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
    } }, directives: [ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 68298:
/*!*********************************************************!*\
  !*** ./src/app/components/input-number/en.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoInputNumberEnComponent": () => (/* binding */ NzDemoInputNumberEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 6610);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disabled */ 51441);
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatter */ 76125);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./size */ 54386);
/* harmony import */ var _digit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./digit */ 18539);
/* harmony import */ var _precision__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precision */ 87769);














class NzDemoInputNumberEnComponent {
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
NzDemoInputNumberEnComponent.ɵfac = function NzDemoInputNumberEnComponent_Factory(t) { return new (t || NzDemoInputNumberEnComponent)(); };
NzDemoInputNumberEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NzDemoInputNumberEnComponent, selectors: [["nz-demo-input-number"]], viewQuery: function NzDemoInputNumberEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 348, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-input-number-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-input-number-demo-size", "nzTitle", "Sizes"], ["nzHref", "#components-input-number-demo-disabled", "nzTitle", "Disabled"], ["nzHref", "#components-input-number-demo-digit", "nzTitle", "Decimals"], ["nzHref", "#components-input-number-demo-formatter", "nzTitle", "Formatter"], ["nzHref", "#components-input-number-demo-precision", "nzTitle", "Precision"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-input-number-basic", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-basic <name>", "nzComponentName", "NzDemoInputNumberBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Disabled", "nzSelector", "nz-demo-input-number-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-disabled <name>", "nzComponentName", "NzDemoInputNumberDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Formatter", "nzSelector", "nz-demo-input-number-formatter", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-formatter <name>", "nzComponentName", "NzDemoInputNumberFormatterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Sizes", "nzSelector", "nz-demo-input-number-size", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-size <name>", "nzComponentName", "NzDemoInputNumberSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Decimals", "nzSelector", "nz-demo-input-number-digit", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-digit <name>", "nzComponentName", "NzDemoInputNumberDigitComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Precision", "nzSelector", "nz-demo-input-number-precision", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-precision <name>", "nzComponentName", "NzDemoInputNumberPrecisionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-input-number"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-input-number'", 1, "anchor"], ["id", "methods"], ["onclick", "window.location.hash = 'methods'", 1, "anchor"]], template: function NzDemoInputNumberEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzClick", function NzDemoInputNumberEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "section", 9)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "InputNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span", 10)(14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Enter a number within certain range with the mouse or keyboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h2", 14)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "When a numeric value needs to be provided.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "pre", 16)(28, "code")(29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " NzInputNumberModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "'ng-zorro-antd/input-number'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "h2")(46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NzDemoInputNumberEnComponent_Template_i_click_48_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 21)(50, "div", 22)(51, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "nz-demo-input-number-basic", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Numeric-only input box.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "nz-demo-input-number-disabled", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Click the button to toggle between available and disabled states.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "nz-demo-input-number-formatter", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Display value within it's situation with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "nzFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, ", and we usually use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "nzParser");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, " at the same time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 22)(73, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "nz-demo-input-number-size", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "There are three sizes available to a numeric input box. By default, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "nzSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "32px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, ". The two additional sizes are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, " which means ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, "40px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "24px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, ", respectively.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](97, "nz-demo-input-number-digit", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100, "A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, "nzStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, " prop.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](105, "nz-demo-input-number-precision", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, "Set precision of the value");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "h2", 32)(111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](114, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "h3", 34)(116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "nz-input-number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](121, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "table")(123, "thead")(124, "tr")(125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, "property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](128, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](130, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](132, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "tbody")(134, "tr")(135, "td")(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](139, "current value, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "td")(141, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](142, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](143, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](145, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](147, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "tr")(149, "td")(150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](153, "get focus when component mounted");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "td")(155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](156, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "td")(158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](159, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "tr")(161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165, "disable the input");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "td")(167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](168, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](169, "td")(170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](171, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "tr")(173, "td")(174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](175, "[nzMax]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](177, "max value");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](178, "td")(179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](180, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, "Infinity");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "tr")(185, "td")(186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](187, "[nzMin]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](189, "min value");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](190, "td")(191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](192, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](193, "td")(194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](195, "-Infinity");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](196, "tr")(197, "td")(198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](199, "[nzFormatter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](201, "Specifies the format of the value presented");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](202, "td")(203, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](204, "(value: number | string) => string | number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](206, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](207, "tr")(208, "td")(209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](210, "[nzParser]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](212, "Specifies the value extracted from nzFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](213, "td")(214, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](215, "(value: string) => string | number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](216, "td")(217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](218, "(value: string) => value.trim().replace(/\u3002/g, '.').replace(/[^\\w\\.-]+/g, '')");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](219, "tr")(220, "td")(221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](222, "[nzPrecision]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](224, "precision of input value");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](225, "td")(226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](227, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](229, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](230, "tr")(231, "td")(232, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](233, "[nzPrecisionMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](234, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](235, "The method for calculating the precision of input value");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](236, "td")(237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](238, "'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](239, "td")(240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](241, "'toFixed'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](242, "tr")(243, "td")(244, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](245, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](247, "width of input box");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](248, "td")(249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](250, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](251, "td")(252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](253, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](254, "tr")(255, "td")(256, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](257, "[nzStep]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](259, "The number to which the current value is increased or decreased. It can be an integer or decimal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](260, "td")(261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](262, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](263, "td")(264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](265, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](266, "tr")(267, "td")(268, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](269, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](271, "Placeholder of select");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](272, "td")(273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](274, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](276, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](277, "tr")(278, "td")(279, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](280, "[nzId]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](282, "input id attribute inside the component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](283, "td")(284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](285, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](286, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](287, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](288, "tr")(289, "td")(290, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](291, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](292, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](293, "The callback triggered when the value is changed");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](294, "td")(295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](296, "EventEmitter<number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](298, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](299, "tr")(300, "td")(301, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](302, "(nzFocus)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](303, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](304, "focus callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](305, "td")(306, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](307, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](309, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](310, "tr")(311, "td")(312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](313, "(nzBlur)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](315, "blur callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](316, "td")(317, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](318, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](320, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](321, "h4", 37)(322, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](323, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](324, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](325, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](326, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](327, "You can get instance by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](329, "ViewChild");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](330, "table")(331, "thead")(332, "tr")(333, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](334, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](335, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](336, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](337, "tbody")(338, "tr")(339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](340, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](342, "get focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](343, "tr")(344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](345, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](347, "remove focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-basic")("nzLink", "components-input-number-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-disabled")("nzLink", "components-input-number-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-formatter")("nzLink", "components-input-number-demo-formatter")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/formatter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-size")("nzLink", "components-input-number-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-digit")("nzLink", "components-input-number-demo-digit")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/digit.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-precision")("nzLink", "components-input-number-demo-precision")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/precision.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoInputNumberBasicComponent, _disabled__WEBPACK_IMPORTED_MODULE_2__.NzDemoInputNumberDisabledComponent, _formatter__WEBPACK_IMPORTED_MODULE_3__.NzDemoInputNumberFormatterComponent, _size__WEBPACK_IMPORTED_MODULE_4__.NzDemoInputNumberSizeComponent, _digit__WEBPACK_IMPORTED_MODULE_5__.NzDemoInputNumberDigitComponent, _precision__WEBPACK_IMPORTED_MODULE_6__.NzDemoInputNumberPrecisionComponent], encapsulation: 2 });


/***/ }),

/***/ 76125:
/*!******************************************************!*\
  !*** ./src/app/components/input-number/formatter.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoInputNumberFormatterComponent": () => (/* binding */ NzDemoInputNumberFormatterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoInputNumberFormatterComponent {
    constructor() {
        this.demoValue = 100;
        this.formatterPercent = (value) => `${value} %`;
        this.parserPercent = (value) => value.replace(' %', '');
        this.formatterDollar = (value) => `$ ${value}`;
        this.parserDollar = (value) => value.replace('$ ', '');
    }
}
NzDemoInputNumberFormatterComponent.ɵfac = function NzDemoInputNumberFormatterComponent_Factory(t) { return new (t || NzDemoInputNumberFormatterComponent)(); };
NzDemoInputNumberFormatterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoInputNumberFormatterComponent, selectors: [["nz-demo-input-number-formatter"]], decls: 2, vars: 12, consts: [[3, "ngModel", "nzMin", "nzMax", "nzStep", "nzFormatter", "nzParser", "ngModelChange"]], template: function NzDemoInputNumberFormatterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-input-number", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputNumberFormatterComponent_Template_nz_input_number_ngModelChange_0_listener($event) { return ctx.demoValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-input-number", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputNumberFormatterComponent_Template_nz_input_number_ngModelChange_1_listener($event) { return ctx.demoValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.demoValue)("nzMin", 1)("nzMax", 100)("nzStep", 1)("nzFormatter", ctx.formatterDollar)("nzParser", ctx.parserDollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.demoValue)("nzMin", 1)("nzMax", 100)("nzStep", 1)("nzFormatter", ctx.formatterPercent)("nzParser", ctx.parserPercent);
    } }, directives: [ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: ["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1hdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxpQkFBaUI7TUFDbkIiLCJmaWxlIjoiZm9ybWF0dGVyLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1pbnB1dC1udW1iZXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 57579:
/*!*********************************************************!*\
  !*** ./src/app/components/input-number/index.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoInputNumberModule": () => (/* binding */ NzDemoInputNumberModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 50206);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 6610);
/* harmony import */ var _digit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digit */ 18539);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disabled */ 51441);
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatter */ 76125);
/* harmony import */ var _precision__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precision */ 87769);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./size */ 54386);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zh.component */ 34239);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./en.component */ 68298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);















class NzDemoInputNumberModule {
}
NzDemoInputNumberModule.ɵfac = function NzDemoInputNumberModule_Factory(t) { return new (t || NzDemoInputNumberModule)(); };
NzDemoInputNumberModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: NzDemoInputNumberModule });
NzDemoInputNumberModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoInputNumberEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoInputNumberZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](NzDemoInputNumberModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoInputNumberBasicComponent,
        _digit__WEBPACK_IMPORTED_MODULE_3__.NzDemoInputNumberDigitComponent,
        _disabled__WEBPACK_IMPORTED_MODULE_4__.NzDemoInputNumberDisabledComponent,
        _formatter__WEBPACK_IMPORTED_MODULE_5__.NzDemoInputNumberFormatterComponent,
        _precision__WEBPACK_IMPORTED_MODULE_6__.NzDemoInputNumberPrecisionComponent,
        _size__WEBPACK_IMPORTED_MODULE_7__.NzDemoInputNumberSizeComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoInputNumberZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoInputNumberEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_12__.NzInputNumberModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 50206:
/*!***************************************************!*\
  !*** ./src/app/components/input-number/module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);


const moduleList = [ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_0__.NzInputNumberModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule];


/***/ }),

/***/ 87769:
/*!******************************************************!*\
  !*** ./src/app/components/input-number/precision.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoInputNumberPrecisionComponent": () => (/* binding */ NzDemoInputNumberPrecisionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoInputNumberPrecisionComponent {
    constructor() {
        this.toFixedValue = 2;
        this.cutValue = 2;
        this.customFnValue = 2;
        this.precision = 2;
    }
    customPrecisionFn(value, precision) {
        return +Number(value).toFixed(precision + 1);
    }
}
NzDemoInputNumberPrecisionComponent.ɵfac = function NzDemoInputNumberPrecisionComponent_Factory(t) { return new (t || NzDemoInputNumberPrecisionComponent)(); };
NzDemoInputNumberPrecisionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoInputNumberPrecisionComponent, selectors: [["nz-demo-input-number-precision"]], decls: 3, vars: 7, consts: [["nzPlaceHolder", "toFixed", 3, "ngModel", "nzPrecision", "ngModelChange"], ["nzPrecisionMode", "cut", "nzPlaceHolder", "cut off", 3, "ngModel", "nzPrecision", "ngModelChange"], ["nzPlaceHolder", "cut off", 3, "ngModel", "nzPrecision", "nzPrecisionMode", "ngModelChange"]], template: function NzDemoInputNumberPrecisionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-input-number", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputNumberPrecisionComponent_Template_nz_input_number_ngModelChange_0_listener($event) { return ctx.toFixedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-input-number", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputNumberPrecisionComponent_Template_nz_input_number_ngModelChange_1_listener($event) { return ctx.cutValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-input-number", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputNumberPrecisionComponent_Template_nz_input_number_ngModelChange_2_listener($event) { return ctx.customFnValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.toFixedValue)("nzPrecision", ctx.precision);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cutValue)("nzPrecision", ctx.precision);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customFnValue)("nzPrecision", ctx.precision)("nzPrecisionMode", ctx.customPrecisionFn);
    } }, directives: [ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: ["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWNpc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxpQkFBaUI7TUFDbkIiLCJmaWxlIjoicHJlY2lzaW9uLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1pbnB1dC1udW1iZXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 54386:
/*!*************************************************!*\
  !*** ./src/app/components/input-number/size.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoInputNumberSizeComponent": () => (/* binding */ NzDemoInputNumberSizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoInputNumberSizeComponent {
    constructor() {
        this.demoValue = 3;
    }
}
NzDemoInputNumberSizeComponent.ɵfac = function NzDemoInputNumberSizeComponent_Factory(t) { return new (t || NzDemoInputNumberSizeComponent)(); };
NzDemoInputNumberSizeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoInputNumberSizeComponent, selectors: [["nz-demo-input-number-size"]], decls: 3, vars: 14, consts: [[3, "ngModel", "nzSize", "nzMin", "nzMax", "nzStep", "ngModelChange"], [3, "ngModel", "nzMin", "nzMax", "nzStep", "ngModelChange"]], template: function NzDemoInputNumberSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-input-number", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputNumberSizeComponent_Template_nz_input_number_ngModelChange_0_listener($event) { return ctx.demoValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-input-number", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputNumberSizeComponent_Template_nz_input_number_ngModelChange_1_listener($event) { return ctx.demoValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-input-number", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputNumberSizeComponent_Template_nz_input_number_ngModelChange_2_listener($event) { return ctx.demoValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.demoValue)("nzSize", "large")("nzMin", 1)("nzMax", 10)("nzStep", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.demoValue)("nzMin", 1)("nzMax", 10)("nzStep", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.demoValue)("nzSize", "small")("nzMin", 1)("nzMax", 10)("nzStep", 1);
    } }, directives: [ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: ["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsaUJBQWlCO01BQ25CIiwiZmlsZSI6InNpemUudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LWlucHV0LW51bWJlciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 34239:
/*!*********************************************************!*\
  !*** ./src/app/components/input-number/zh.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoInputNumberZhComponent": () => (/* binding */ NzDemoInputNumberZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 6610);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disabled */ 51441);
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatter */ 76125);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./size */ 54386);
/* harmony import */ var _digit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./digit */ 18539);
/* harmony import */ var _precision__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precision */ 87769);














class NzDemoInputNumberZhComponent {
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
NzDemoInputNumberZhComponent.ɵfac = function NzDemoInputNumberZhComponent_Factory(t) { return new (t || NzDemoInputNumberZhComponent)(); };
NzDemoInputNumberZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NzDemoInputNumberZhComponent, selectors: [["nz-demo-input-number"]], viewQuery: function NzDemoInputNumberZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 350, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-input-number-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-input-number-demo-size", "nzTitle", "\u4E09\u79CD\u5927\u5C0F"], ["nzHref", "#components-input-number-demo-disabled", "nzTitle", "\u4E0D\u53EF\u7528"], ["nzHref", "#components-input-number-demo-digit", "nzTitle", "\u5C0F\u6570"], ["nzHref", "#components-input-number-demo-formatter", "nzTitle", "\u683C\u5F0F\u5316\u5C55\u793A"], ["nzHref", "#components-input-number-demo-precision", "nzTitle", "\u7CBE\u5EA6"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-input-number-basic", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-basic <name>", "nzComponentName", "NzDemoInputNumberBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u4E0D\u53EF\u7528", "nzSelector", "nz-demo-input-number-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-disabled <name>", "nzComponentName", "NzDemoInputNumberDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u683C\u5F0F\u5316\u5C55\u793A", "nzSelector", "nz-demo-input-number-formatter", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-formatter <name>", "nzComponentName", "NzDemoInputNumberFormatterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E09\u79CD\u5927\u5C0F", "nzSelector", "nz-demo-input-number-size", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-size <name>", "nzComponentName", "NzDemoInputNumberSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5C0F\u6570", "nzSelector", "nz-demo-input-number-digit", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-digit <name>", "nzComponentName", "NzDemoInputNumberDigitComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7CBE\u5EA6", "nzSelector", "nz-demo-input-number-precision", "nzGenerateCommand", "ng g ng-zorro-antd:input-number-precision <name>", "nzComponentName", "NzDemoInputNumberPrecisionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-input-number"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-input-number'", 1, "anchor"], ["id", "\u65B9\u6CD5"], ["onclick", "window.location.hash = '\u65B9\u6CD5'", 1, "anchor"]], template: function NzDemoInputNumberZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzClick", function NzDemoInputNumberZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "section", 9)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "InputNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u6570\u5B57\u8F93\u5165\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\uFF0C\u8F93\u5165\u8303\u56F4\u5185\u7684\u6570\u503C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "h2", 14)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\u5F53\u9700\u8981\u83B7\u53D6\u6807\u51C6\u6570\u503C\u65F6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "pre", 16)(29, "code")(30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " NzInputNumberModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "'ng-zorro-antd/input-number'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "h2")(47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NzDemoInputNumberZhComponent_Template_i_click_49_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 21)(51, "div", 22)(52, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "nz-demo-input-number-basic", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "\u6570\u5B57\u8F93\u5165\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "nz-demo-input-number-disabled", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "\u70B9\u51FB\u6309\u94AE\u5207\u6362\u53EF\u7528\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "nz-demo-input-number-formatter", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "nzFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, " \u683C\u5F0F\u5316\u6570\u5B57\uFF0C\u4EE5\u5C55\u793A\u5177\u6709\u5177\u4F53\u542B\u4E49\u7684\u6570\u636E\uFF0C\u5F80\u5F80\u9700\u8981\u914D\u5408 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "nzParser");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, " \u4E00\u8D77\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 22)(74, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "nz-demo-input-number-size", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "\u4E09\u79CD\u5927\u5C0F\u7684\u6570\u5B57\u8F93\u5165\u6846\uFF0C\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "nzSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, " \u5206\u522B\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, " \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "40px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "24px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, " \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "32px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "nz-demo-input-number-digit", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "\u548C\u539F\u751F\u7684\u6570\u5B57\u8F93\u5165\u6846\u4E00\u6837\uFF0Cvalue \u7684\u7CBE\u5EA6\u7531 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "nzStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, " \u7684\u5C0F\u6570\u4F4D\u6570\u51B3\u5B9A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](106, "nz-demo-input-number-precision", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "\u6307\u5B9A value \u7684\u7CBE\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "h2", 32)(112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "h3", 34)(117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, "nz-input-number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](120, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "table")(124, "thead")(125, "tr")(126, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](127, "\u6210\u5458");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](129, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "tbody")(135, "tr")(136, "td")(137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](138, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](140, "\u5F53\u524D\u503C\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "td")(142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](143, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](144, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](146, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](148, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](149, "tr")(150, "td")(151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](152, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](154, "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "td")(156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](157, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "td")(159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](160, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](161, "tr")(162, "td")(163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](164, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](166, "\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "td")(168, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](169, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "td")(171, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](172, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "tr")(174, "td")(175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](176, "[nzMax]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](178, "\u6700\u5927\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](179, "td")(180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](181, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](182, "td")(183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](184, "Infinity");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](185, "tr")(186, "td")(187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](188, "[nzMin]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](190, "\u6700\u5C0F\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](191, "td")(192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](193, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "td")(195, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](196, "-Infinity");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](197, "tr")(198, "td")(199, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](200, "[nzFormatter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](202, "\u6307\u5B9A\u8F93\u5165\u6846\u5C55\u793A\u503C\u7684\u683C\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](203, "td")(204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](205, "(value: number | string) => string | number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](207, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](208, "tr")(209, "td")(210, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](211, "[nzParser]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](213, "\u6307\u5B9A\u4ECE nzFormatter \u91CC\u8F6C\u6362\u56DE\u6570\u5B57\u7684\u65B9\u5F0F\uFF0C\u548C nzFormatter \u642D\u914D\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](214, "td")(215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](216, "(value: string) => string | number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](217, "td")(218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](219, "(value: string) => value.trim().replace(/\u3002/g, '.').replace(/[^\\w\\.-]+/g, '')");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](220, "tr")(221, "td")(222, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](223, "[nzPrecision]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](225, "\u6570\u503C\u7CBE\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](226, "td")(227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](228, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](230, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](231, "tr")(232, "td")(233, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](234, "[nzPrecisionMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](236, "\u6570\u503C\u7CBE\u5EA6\u7684\u53D6\u503C\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](237, "td")(238, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](239, "'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](240, "td")(241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](242, "'toFixed'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](243, "tr")(244, "td")(245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](246, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](248, "\u8F93\u5165\u6846\u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](249, "td")(250, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](251, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](252, "td")(253, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](254, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](255, "tr")(256, "td")(257, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](258, "[nzStep]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](260, "\u6BCF\u6B21\u6539\u53D8\u6B65\u6570\uFF0C\u53EF\u4EE5\u4E3A\u5C0F\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](261, "td")(262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](263, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](264, "td")(265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](266, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](267, "tr")(268, "td")(269, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](270, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](272, "\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](273, "td")(274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](275, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](277, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](278, "tr")(279, "td")(280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](281, "[nzId]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](283, "\u7EC4\u4EF6\u5185\u90E8 input \u7684 id \u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](284, "td")(285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](286, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](288, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](289, "tr")(290, "td")(291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](292, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](294, "\u6570\u503C\u6539\u53D8\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](295, "td")(296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](297, "EventEmitter<number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](299, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](300, "tr")(301, "td")(302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](303, "(nzFocus)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](305, "focus\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](306, "td")(307, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](308, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](309, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](310, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](311, "tr")(312, "td")(313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](314, "(nzBlur)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](316, "blur\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](317, "td")(318, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](319, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](320, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](321, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](322, "h4", 37)(323, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](324, "\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](325, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](326, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](327, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](328, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](330, "ViewChild");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](331, " \u7B49\u65B9\u6CD5\u83B7\u5F97\u5B9E\u4F8B\u540E\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](332, "table")(333, "thead")(334, "tr")(335, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](336, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](337, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](338, "\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](339, "tbody")(340, "tr")(341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](342, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](343, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](344, "\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](345, "tr")(346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](347, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](348, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](349, "\u79FB\u9664\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-basic")("nzLink", "components-input-number-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-disabled")("nzLink", "components-input-number-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-formatter")("nzLink", "components-input-number-demo-formatter")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/formatter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-size")("nzLink", "components-input-number-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-digit")("nzLink", "components-input-number-demo-digit")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/digit.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-input-number-demo-precision")("nzLink", "components-input-number-demo-precision")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/precision.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoInputNumberBasicComponent, _disabled__WEBPACK_IMPORTED_MODULE_2__.NzDemoInputNumberDisabledComponent, _formatter__WEBPACK_IMPORTED_MODULE_3__.NzDemoInputNumberFormatterComponent, _size__WEBPACK_IMPORTED_MODULE_4__.NzDemoInputNumberSizeComponent, _digit__WEBPACK_IMPORTED_MODULE_5__.NzDemoInputNumberDigitComponent, _precision__WEBPACK_IMPORTED_MODULE_6__.NzDemoInputNumberPrecisionComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_input-number_index_module_ts.js.map