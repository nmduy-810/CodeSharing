"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_slider_index_module_ts"],{

/***/ 77269:
/*!********************************************!*\
  !*** ./src/app/components/slider/basic.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSliderBasicComponent": () => (/* binding */ NzDemoSliderBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);




class NzDemoSliderBasicComponent {
    constructor() {
        this.disabled = false;
        this.value1 = 30;
        this.value2 = [20, 50];
    }
}
NzDemoSliderBasicComponent.ɵfac = function NzDemoSliderBasicComponent_Factory(t) { return new (t || NzDemoSliderBasicComponent)(); };
NzDemoSliderBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSliderBasicComponent, selectors: [["nz-demo-slider-basic"]], decls: 4, vars: 5, consts: [[3, "ngModel", "nzDisabled", "ngModelChange"], ["nzRange", "", 3, "ngModel", "nzDisabled", "ngModelChange"], ["nzSize", "small", 3, "ngModel", "ngModelChange"]], template: function NzDemoSliderBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSliderBasicComponent_Template_nz_slider_ngModelChange_0_listener($event) { return ctx.value1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSliderBasicComponent_Template_nz_slider_ngModelChange_1_listener($event) { return ctx.value2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Disabled: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSliderBasicComponent_Template_nz_switch_ngModelChange_3_listener($event) { return ctx.disabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value1)("nzDisabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value2)("nzDisabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.disabled);
    } }, directives: [ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__.NzSliderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchComponent], encapsulation: 2 });


/***/ }),

/***/ 34215:
/*!***************************************************!*\
  !*** ./src/app/components/slider/en.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSliderEnComponent": () => (/* binding */ NzDemoSliderEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 77269);
/* harmony import */ var _icon_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-slider */ 64966);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ 15944);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertical */ 47830);
/* harmony import */ var _input_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-number */ 76208);
/* harmony import */ var _tip_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tip-formatter */ 33828);
/* harmony import */ var _mark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mark */ 28151);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tooltip */ 43669);

















class NzDemoSliderEnComponent {
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
NzDemoSliderEnComponent.ɵfac = function NzDemoSliderEnComponent_Factory(t) { return new (t || NzDemoSliderEnComponent)(); };
NzDemoSliderEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: NzDemoSliderEnComponent, selectors: [["nz-demo-slider"]], viewQuery: function NzDemoSliderEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 390, vars: 31, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-slider-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-slider-demo-input-number", "nzTitle", "Slider with InputNumber"], ["nzHref", "#components-slider-demo-icon-slider", "nzTitle", "Slider with icon"], ["nzHref", "#components-slider-demo-tip-formatter", "nzTitle", "Customerize tooltip"], ["nzHref", "#components-slider-demo-event", "nzTitle", "Event"], ["nzHref", "#components-slider-demo-mark", "nzTitle", "Graduated slider"], ["nzHref", "#components-slider-demo-vertical", "nzTitle", "Vertical"], ["nzHref", "#components-slider-demo-tooltip", "nzTitle", "Control visibility of Tooltip"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-slider-basic", "nzGenerateCommand", "ng g ng-zorro-antd:slider-basic <name>", "nzComponentName", "NzDemoSliderBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Slider with icon", "nzSelector", "nz-demo-slider-icon-slider", "nzGenerateCommand", "ng g ng-zorro-antd:slider-icon-slider <name>", "nzComponentName", "NzDemoSliderIconSliderComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Event", "nzSelector", "nz-demo-slider-event", "nzGenerateCommand", "ng g ng-zorro-antd:slider-event <name>", "nzComponentName", "NzDemoSliderEventComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Vertical", "nzSelector", "nz-demo-slider-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:slider-vertical <name>", "nzComponentName", "NzDemoSliderVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Slider with InputNumber", "nzSelector", "nz-demo-slider-input-number", "nzGenerateCommand", "ng g ng-zorro-antd:slider-input-number <name>", "nzComponentName", "NzDemoSliderInputNumberComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "/components/input-number/"], ["nzTitle", "Customerize tooltip", "nzSelector", "nz-demo-slider-tip-formatter", "nzGenerateCommand", "ng g ng-zorro-antd:slider-tip-formatter <name>", "nzComponentName", "NzDemoSliderTipFormatterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Graduated slider", "nzSelector", "nz-demo-slider-mark", "nzGenerateCommand", "ng g ng-zorro-antd:slider-mark <name>", "nzComponentName", "NzDemoSliderMarkComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Control visibility of Tooltip", "nzSelector", "nz-demo-slider-tooltip", "nzGenerateCommand", "ng g ng-zorro-antd:slider-tooltip <name>", "nzComponentName", "NzDemoSliderTooltipComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-slider"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-slider'", 1, "anchor"]], template: function NzDemoSliderEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("nzClick", function NzDemoSliderEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "section", 11)(13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "span", 12)(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "A Slider component for displaying current value and intervals in range.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "h2", 16)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "To input a value in a range.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "pre", 18)(30, "code")(31, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, " NzSliderModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "'ng-zorro-antd/slider'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "h2")(48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NzDemoSliderEnComponent_Template_i_click_50_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 23)(52, "div", 24)(53, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "nz-demo-slider-basic", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Basic slider. When ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "nzRange");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, ", display as dual thumb mode. When ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "nzDisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, ", the slider will not be interactive.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](71, "nz-demo-slider-icon-slider", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "You can add an icon beside the slider to make it meaningful.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](76, "nz-demo-slider-event", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, "nzOnChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, " callback function will fire when the user changes the slider's value. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "nzOnAfterChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, " callback function will fire when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, "onmouseup");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, " fired.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](90, "nz-demo-slider-vertical", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93, "The vertical Slider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div", 24)(95, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](96, "nz-demo-slider-input-number", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](99, "Synchronize with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, "InptNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](102, " component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](104, "nz-demo-slider-tip-formatter", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](107, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109, "nzTipFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](110, " to format content of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](112, "Toolip");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113, ". If ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](115, "nzTipFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116, " is null, hide it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](118, "nz-demo-slider-mark", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](121, "Using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](123, "nzMarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](124, " property to mark a graduated slider, use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](127, " to specify the position of thumb. When ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](129, "nzIncluded");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, " is false, means that different thumbs are coordinated. When ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "nzStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](133, " is null, users can only slide the thumbs onto marks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](135, "nz-demo-slider-tooltip", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](138, "When ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](140, "nzTooltipVisible");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](141, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](143, "always");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](144, ", Tooltip will show always. And set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146, "never");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](147, ", tooltip would never show, even when user is dragging or hovering.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](148, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](149, "h2", 37)(150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](151, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](153, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](154, "h3", 39)(155, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](156, "nz-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](157, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](158, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](159, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](160, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](161, "table")(162, "thead")(163, "tr")(164, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](165, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](167, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](169, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](171, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](172, "tbody")(173, "tr")(174, "td")(175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](176, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](178, "If true, the slider will not be interactable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "td")(180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](181, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](182, "td")(183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](184, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](185, "tr")(186, "td")(187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](188, "[nzDots]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](190, "Whether the thumb can drag over tick only.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](191, "td")(192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](193, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](194, "td")(195, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](196, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](197, "tr")(198, "td")(199, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](200, "[nzIncluded]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](202, "Make effect when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](203, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](204, "marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](205, " not null\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](207, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](208, " means containment and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](210, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](211, " means coordinative");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](212, "td")(213, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](214, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](215, "td")(216, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](217, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](218, "tr")(219, "td")(220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](221, "[nzMarks]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](223, "Tick mark of Slider, type of key must be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](224, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](225, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](226, ", and must in closed interval [min, max] \uFF0Ceach mark can declare its own style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "td")(228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](229, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](231, "{ number: string/HTML } or { number: { style: object, label: string/HTML } }");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](232, "tr")(233, "td")(234, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](235, "[nzMax]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](237, "The maximum value the slider can slide to");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](238, "td")(239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](240, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](241, "td")(242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](243, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](244, "tr")(245, "td")(246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](247, "[nzMin]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](249, "The minimum value the slider can slide to.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](250, "td")(251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](252, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](253, "td")(254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](255, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](256, "tr")(257, "td")(258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](259, "[nzRange]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](261, "dual thumb mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](262, "td")(263, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](264, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](265, "td")(266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](267, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](268, "tr")(269, "td")(270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](271, "[nzStep]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](273, "The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](275, "marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](276, " no null, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](278, "step");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](279, " can be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](281, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](282, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](283, "td")(284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](285, "number | null");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](286, "td")(287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](288, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](289, "tr")(290, "td")(291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](292, "[nzTipFormatter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](294, "Slider will pass its value to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](296, "tipFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](297, ", and display its value in Tooltip, and hide Tooltip when return value is null.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](298, "td")(299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](300, "(value: number) => string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](302, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](303, "tr")(304, "td")(305, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](306, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](308, "The value of slider. When ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](310, "range");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](311, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](313, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](314, ", use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](316, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](317, ", otherwise, use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](318, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](319, "[number, number]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](320, "td")(321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](322, "number | number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](324, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](325, "tr")(326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](328, "[nzVertical]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](330, "If true, the slider will be vertical.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](331, "td")(332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](333, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](334, "td")(335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](336, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](337, "tr")(338, "td")(339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](340, "[nzTooltipVisible]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](342, "When set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](344, "always");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](345, " tooltips are always displayed. When set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](346, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](347, "never");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](348, " they are never displayed");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](349, "td")(350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](351, "'default' | 'always' | 'never'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](352, "td")(353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](354, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](355, "tr")(356, "td")(357, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](358, "[nzTooltipPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](360, "Set the default placement of Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](361, "td")(362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](363, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](365, "tr")(366, "td")(367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](368, "(nzOnAfterChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](370, "Fire when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](372, "onmouseup");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](373, " is fired.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](374, "td")(375, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](376, "EventEmitter<number[] | number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](378, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](379, "tr")(380, "td")(381, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](382, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](384, "Callback function that is fired when the user changes the slider's value.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](385, "td")(386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](387, "EventEmitter<number[] | number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](389, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-basic")("nzLink", "components-slider-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-icon-slider")("nzLink", "components-slider-demo-icon-slider")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/icon-slider.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-event")("nzLink", "components-slider-demo-event")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/event.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-vertical")("nzLink", "components-slider-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-input-number")("nzLink", "components-slider-demo-input-number")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/input-number.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-tip-formatter")("nzLink", "components-slider-demo-tip-formatter")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/tip-formatter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-mark")("nzLink", "components-slider-demo-mark")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/mark.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-tooltip")("nzLink", "components-slider-demo-tooltip")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/tooltip.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_10__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoSliderBasicComponent, _icon_slider__WEBPACK_IMPORTED_MODULE_2__.NzDemoSliderIconSliderComponent, _event__WEBPACK_IMPORTED_MODULE_3__.NzDemoSliderEventComponent, _vertical__WEBPACK_IMPORTED_MODULE_4__.NzDemoSliderVerticalComponent, _input_number__WEBPACK_IMPORTED_MODULE_5__.NzDemoSliderInputNumberComponent, _tip_formatter__WEBPACK_IMPORTED_MODULE_6__.NzDemoSliderTipFormatterComponent, _mark__WEBPACK_IMPORTED_MODULE_7__.NzDemoSliderMarkComponent, _tooltip__WEBPACK_IMPORTED_MODULE_8__.NzDemoSliderTooltipComponent], encapsulation: 2 });


/***/ }),

/***/ 15944:
/*!********************************************!*\
  !*** ./src/app/components/slider/event.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSliderEventComponent": () => (/* binding */ NzDemoSliderEventComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoSliderEventComponent {
    constructor() {
        this.singleValue = 30;
        this.rangeValue = [20, 50];
    }
    onChange(value) {
        console.log(`onChange: ${value}`);
    }
    onAfterChange(value) {
        console.log(`onAfterChange: ${value}`);
    }
}
NzDemoSliderEventComponent.ɵfac = function NzDemoSliderEventComponent_Factory(t) { return new (t || NzDemoSliderEventComponent)(); };
NzDemoSliderEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSliderEventComponent, selectors: [["nz-demo-slider-event"]], decls: 2, vars: 3, consts: [[3, "ngModel", "ngModelChange", "nzOnAfterChange"], ["nzRange", "", 3, "nzStep", "ngModel", "ngModelChange", "nzOnAfterChange"]], template: function NzDemoSliderEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSliderEventComponent_Template_nz_slider_ngModelChange_0_listener($event) { return ctx.singleValue = $event; })("ngModelChange", function NzDemoSliderEventComponent_Template_nz_slider_ngModelChange_0_listener($event) { return ctx.onChange($event); })("nzOnAfterChange", function NzDemoSliderEventComponent_Template_nz_slider_nzOnAfterChange_0_listener($event) { return ctx.onAfterChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSliderEventComponent_Template_nz_slider_ngModelChange_1_listener($event) { return ctx.rangeValue = $event; })("ngModelChange", function NzDemoSliderEventComponent_Template_nz_slider_ngModelChange_1_listener($event) { return ctx.onChange($event); })("nzOnAfterChange", function NzDemoSliderEventComponent_Template_nz_slider_nzOnAfterChange_1_listener($event) { return ctx.onAfterChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.singleValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStep", 10)("ngModel", ctx.rangeValue);
    } }, directives: [ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__.NzSliderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 64966:
/*!**************************************************!*\
  !*** ./src/app/components/slider/icon-slider.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSliderIconSliderComponent": () => (/* binding */ NzDemoSliderIconSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);





class NzDemoSliderIconSliderComponent {
    constructor() {
        this.min = 0;
        this.max = 20;
        this.mid = parseFloat(((this.max - this.min) / 2).toFixed(5));
        this.preHighLight = false;
        this.nextHighLight = false;
        this._sliderValue = 0;
    }
    set sliderValue(value) {
        this._sliderValue = value;
        this.highlightIcon();
    }
    get sliderValue() {
        return this._sliderValue;
    }
    ngOnInit() {
        this.sliderValue = 0;
    }
    highlightIcon() {
        const lower = this._sliderValue >= this.mid;
        this.preHighLight = !lower;
        this.nextHighLight = lower;
    }
}
NzDemoSliderIconSliderComponent.ɵfac = function NzDemoSliderIconSliderComponent_Factory(t) { return new (t || NzDemoSliderIconSliderComponent)(); };
NzDemoSliderIconSliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSliderIconSliderComponent, selectors: [["nz-demo-slider-icon-slider"]], decls: 4, vars: 7, consts: [[1, "icon-wrapper", "test-class"], ["nz-icon", "", "nzType", "frown"], [3, "nzMin", "nzMax", "ngModel", "ngModelChange"], ["nz-icon", "", "nzType", "smile"]], template: function NzDemoSliderIconSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSliderIconSliderComponent_Template_nz_slider_ngModelChange_2_listener($event) { return ctx.sliderValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("icon-highlight", ctx.preHighLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMin", 0)("nzMax", 20)("ngModel", ctx.sliderValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("icon-highlight", ctx.nextHighLight);
    } }, directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_3__.NzSliderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: [".icon-wrapper[_ngcontent-%COMP%] {\n        position: relative;\n        padding: 0px 30px;\n      }\n\n      [nz-icon][_ngcontent-%COMP%] {\n        position: absolute;\n        top: -2px;\n        width: 16px;\n        height: 16px;\n        line-height: 1;\n        font-size: 16px;\n        color: rgba(0, 0, 0, 0.25);\n      }\n\n      [nz-icon][_ngcontent-%COMP%]:first-child {\n        left: 0;\n      }\n\n      [nz-icon][_ngcontent-%COMP%]:last-child {\n        right: 0;\n      }\n\n      .icon-highlight[_ngcontent-%COMP%] {\n        color: rgba(0, 0, 0, 0.45);\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24tc2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGtCQUFrQjtRQUNsQixpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osY0FBYztRQUNkLGVBQWU7UUFDZiwwQkFBMEI7TUFDNUI7O01BRUE7UUFDRSxPQUFPO01BQ1Q7O01BRUE7UUFDRSxRQUFRO01BQ1Y7O01BRUE7UUFDRSwwQkFBMEI7TUFDNUIiLCJmaWxlIjoiaWNvbi1zbGlkZXIudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5pY29uLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgICAgfVxuXG4gICAgICBbbnotaWNvbl0ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICB9XG5cbiAgICAgIFtuei1pY29uXTpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIFtuei1pY29uXTpsYXN0LWNoaWxkIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5pY29uLWhpZ2hsaWdodCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 6923:
/*!***************************************************!*\
  !*** ./src/app/components/slider/index.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSliderModule": () => (/* binding */ NzDemoSliderModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 56320);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 77269);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ 15944);
/* harmony import */ var _icon_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon-slider */ 64966);
/* harmony import */ var _input_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-number */ 76208);
/* harmony import */ var _mark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mark */ 28151);
/* harmony import */ var _tip_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tip-formatter */ 33828);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tooltip */ 43669);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vertical */ 47830);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zh.component */ 46663);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./en.component */ 34215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);




















class NzDemoSliderModule {
}
NzDemoSliderModule.ɵfac = function NzDemoSliderModule_Factory(t) { return new (t || NzDemoSliderModule)(); };
NzDemoSliderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: NzDemoSliderModule });
NzDemoSliderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoSliderEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoSliderZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](NzDemoSliderModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoSliderBasicComponent,
        _event__WEBPACK_IMPORTED_MODULE_3__.NzDemoSliderEventComponent,
        _icon_slider__WEBPACK_IMPORTED_MODULE_4__.NzDemoSliderIconSliderComponent,
        _input_number__WEBPACK_IMPORTED_MODULE_5__.NzDemoSliderInputNumberComponent,
        _mark__WEBPACK_IMPORTED_MODULE_6__.NzDemoSliderMarkComponent,
        _tip_formatter__WEBPACK_IMPORTED_MODULE_7__.NzDemoSliderTipFormatterComponent,
        _tooltip__WEBPACK_IMPORTED_MODULE_8__.NzDemoSliderTooltipComponent,
        _vertical__WEBPACK_IMPORTED_MODULE_9__.NzDemoSliderVerticalComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoSliderZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoSliderEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_15__.NzSliderModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__.NzSwitchModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_17__.NzInputNumberModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 76208:
/*!***************************************************!*\
  !*** ./src/app/components/slider/input-number.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSliderInputNumberComponent": () => (/* binding */ NzDemoSliderInputNumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);






const _c0 = function () { return { marginLeft: "16px" }; };
class NzDemoSliderInputNumberComponent {
    constructor() {
        this.value1 = 1;
        this.value2 = 0;
    }
}
NzDemoSliderInputNumberComponent.ɵfac = function NzDemoSliderInputNumberComponent_Factory(t) { return new (t || NzDemoSliderInputNumberComponent)(); };
NzDemoSliderInputNumberComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSliderInputNumberComponent, selectors: [["nz-demo-slider-input-number"]], decls: 10, vars: 18, consts: [["nzSpan", "12"], [3, "nzMin", "nzMax", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4"], [3, "nzMin", "nzMax", "ngStyle", "ngModel", "ngModelChange"], [3, "nzMin", "nzMax", "nzStep", "ngModel", "ngModelChange"], ["nzSpan", "4"], [3, "nzMin", "nzMax", "ngStyle", "nzStep", "ngModel", "ngModelChange"]], template: function NzDemoSliderInputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row")(1, "nz-col", 0)(2, "nz-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSliderInputNumberComponent_Template_nz_slider_ngModelChange_2_listener($event) { return ctx.value1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "nz-input-number", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSliderInputNumberComponent_Template_nz_input_number_ngModelChange_4_listener($event) { return ctx.value1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-row")(6, "nz-col", 0)(7, "nz-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSliderInputNumberComponent_Template_nz_slider_ngModelChange_7_listener($event) { return ctx.value2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-col", 5)(9, "nz-input-number", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSliderInputNumberComponent_Template_nz_input_number_ngModelChange_9_listener($event) { return ctx.value2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMin", 1)("nzMax", 20)("ngModel", ctx.value1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMin", 1)("nzMax", 20)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0))("ngModel", ctx.value1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngModel", ctx.value2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMin", 0)("nzMax", 1)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0))("nzStep", 0.01)("ngModel", ctx.value2);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_2__.NzSliderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_4__.NzInputNumberComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle], encapsulation: 2 });


/***/ }),

/***/ 28151:
/*!*******************************************!*\
  !*** ./src/app/components/slider/mark.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSliderMarkComponent": () => (/* binding */ NzDemoSliderMarkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);






const _c0 = function () { return [26, 37]; };
class NzDemoSliderMarkComponent {
    constructor() {
        this.marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
                style: {
                    color: '#f50'
                },
                label: '<strong>100°C</strong>'
            }
        };
    }
    changeMarks() {
        this.marks = {
            20: '20%',
            99: '99%'
        };
    }
}
NzDemoSliderMarkComponent.ɵfac = function NzDemoSliderMarkComponent_Factory(t) { return new (t || NzDemoSliderMarkComponent)(); };
NzDemoSliderMarkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSliderMarkComponent, selectors: [["nz-demo-slider-mark"]], decls: 18, vars: 16, consts: [[3, "nzMarks", "ngModel"], ["nzIncluded", "", "nzRange", "", 3, "nzMarks", "ngModel"], [3, "nzMarks", "nzIncluded", "ngModel"], [3, "nzMarks", "nzStep", "ngModel"], ["nzDots", "", 3, "nzMarks", "ngModel"], ["nz-button", "", 3, "click"]], template: function NzDemoSliderMarkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "included=true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-slider", 0)(4, "nz-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "included=false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "marks & step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "step=null || dots=true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-slider", 3)(14, "nz-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Change nzMarks dynamically: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoSliderMarkComponent_Template_button_click_16_listener() { return ctx.changeMarks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Change nzMarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMarks", ctx.marks)("ngModel", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMarks", ctx.marks)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMarks", ctx.marks)("nzIncluded", false)("ngModel", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMarks", ctx.marks)("nzStep", 10)("ngModel", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMarks", ctx.marks)("nzStep", null)("ngModel", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMarks", ctx.marks)("ngModel", 37);
    } }, directives: [ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__.NzSliderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["h4[_ngcontent-%COMP%] {\n        margin: 0 0 16px;\n      }\n\n      .ant-slider-with-marks[_ngcontent-%COMP%] {\n        margin-bottom: 44px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UsbUJBQW1CO01BQ3JCIiwiZmlsZSI6Im1hcmsudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgICAgIH1cblxuICAgICAgLmFudC1zbGlkZXItd2l0aC1tYXJrcyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 56320:
/*!*********************************************!*\
  !*** ./src/app/components/slider/module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 93389);





const moduleList = [
    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__.NzIconModule,
    ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__.NzSliderModule,
    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__.NzSwitchModule,
    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_3__.NzInputNumberModule,
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule
];


/***/ }),

/***/ 33828:
/*!****************************************************!*\
  !*** ./src/app/components/slider/tip-formatter.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSliderTipFormatterComponent": () => (/* binding */ NzDemoSliderTipFormatterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);


class NzDemoSliderTipFormatterComponent {
    formatter(value) {
        return `${value}%`;
    }
}
NzDemoSliderTipFormatterComponent.ɵfac = function NzDemoSliderTipFormatterComponent_Factory(t) { return new (t || NzDemoSliderTipFormatterComponent)(); };
NzDemoSliderTipFormatterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSliderTipFormatterComponent, selectors: [["nz-demo-slider-tip-formatter"]], decls: 2, vars: 2, consts: [[3, "nzTipFormatter"]], template: function NzDemoSliderTipFormatterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-slider", 0)(1, "nz-slider", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTipFormatter", ctx.formatter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTipFormatter", null);
    } }, directives: [ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__.NzSliderComponent], encapsulation: 2 });


/***/ }),

/***/ 43669:
/*!**********************************************!*\
  !*** ./src/app/components/slider/tooltip.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSliderTooltipComponent": () => (/* binding */ NzDemoSliderTooltipComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);


class NzDemoSliderTooltipComponent {
}
NzDemoSliderTooltipComponent.ɵfac = function NzDemoSliderTooltipComponent_Factory(t) { return new (t || NzDemoSliderTooltipComponent)(); };
NzDemoSliderTooltipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSliderTooltipComponent, selectors: [["nz-demo-slider-tooltip"]], decls: 2, vars: 2, consts: [[3, "nzTooltipVisible"]], template: function NzDemoSliderTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-slider", 0)(1, "nz-slider", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipVisible", "always");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipVisible", "never");
    } }, directives: [ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__.NzSliderComponent], encapsulation: 2 });


/***/ }),

/***/ 47830:
/*!***********************************************!*\
  !*** ./src/app/components/slider/vertical.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSliderVerticalComponent": () => (/* binding */ NzDemoSliderVerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);




const _c0 = function () { return { height: "300px" }; };
const _c1 = function () { return [20, 50]; };
const _c2 = function () { return [26, 37]; };
class NzDemoSliderVerticalComponent {
    constructor() {
        this.style = {
            float: 'left',
            height: '300px',
            marginLeft: '70px'
        };
        this.marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
                style: {
                    color: '#f50'
                },
                label: '<strong>100°C</strong>'
            }
        };
    }
}
NzDemoSliderVerticalComponent.ɵfac = function NzDemoSliderVerticalComponent_Factory(t) { return new (t || NzDemoSliderVerticalComponent)(); };
NzDemoSliderVerticalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSliderVerticalComponent, selectors: [["nz-demo-slider-vertical"]], decls: 7, vars: 12, consts: [[3, "ngStyle"], ["nzVertical", "", 3, "ngModel"], ["nzVertical", "", "nzRange", "", 3, "nzStep", "ngModel"], ["nzVertical", "", "nzRange", "", 3, "nzMarks", "ngModel"]], template: function NzDemoSliderVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStep", 10)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMarks", ctx.marks)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_2__.NzSliderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 46663:
/*!***************************************************!*\
  !*** ./src/app/components/slider/zh.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSliderZhComponent": () => (/* binding */ NzDemoSliderZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 77269);
/* harmony import */ var _icon_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-slider */ 64966);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ 15944);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertical */ 47830);
/* harmony import */ var _input_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-number */ 76208);
/* harmony import */ var _tip_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tip-formatter */ 33828);
/* harmony import */ var _mark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mark */ 28151);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tooltip */ 43669);

















class NzDemoSliderZhComponent {
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
NzDemoSliderZhComponent.ɵfac = function NzDemoSliderZhComponent_Factory(t) { return new (t || NzDemoSliderZhComponent)(); };
NzDemoSliderZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: NzDemoSliderZhComponent, selectors: [["nz-demo-slider"]], viewQuery: function NzDemoSliderZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 399, vars: 31, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-slider-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-slider-demo-input-number", "nzTitle", "\u5E26\u8F93\u5165\u6846\u7684\u6ED1\u5757"], ["nzHref", "#components-slider-demo-icon-slider", "nzTitle", "\u5E26 icon \u7684\u6ED1\u5757"], ["nzHref", "#components-slider-demo-tip-formatter", "nzTitle", "\u81EA\u5B9A\u4E49\u63D0\u793A"], ["nzHref", "#components-slider-demo-event", "nzTitle", "\u4E8B\u4EF6"], ["nzHref", "#components-slider-demo-mark", "nzTitle", "\u5E26\u6807\u7B7E\u7684\u6ED1\u5757"], ["nzHref", "#components-slider-demo-vertical", "nzTitle", "\u5782\u76F4"], ["nzHref", "#components-slider-demo-tooltip", "nzTitle", "\u63A7\u5236 Tooltip \u7684\u663E\u793A"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-slider-basic", "nzGenerateCommand", "ng g ng-zorro-antd:slider-basic <name>", "nzComponentName", "NzDemoSliderBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u5E26 icon \u7684\u6ED1\u5757", "nzSelector", "nz-demo-slider-icon-slider", "nzGenerateCommand", "ng g ng-zorro-antd:slider-icon-slider <name>", "nzComponentName", "NzDemoSliderIconSliderComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E8B\u4EF6", "nzSelector", "nz-demo-slider-event", "nzGenerateCommand", "ng g ng-zorro-antd:slider-event <name>", "nzComponentName", "NzDemoSliderEventComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5782\u76F4", "nzSelector", "nz-demo-slider-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:slider-vertical <name>", "nzComponentName", "NzDemoSliderVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5E26\u8F93\u5165\u6846\u7684\u6ED1\u5757", "nzSelector", "nz-demo-slider-input-number", "nzGenerateCommand", "ng g ng-zorro-antd:slider-input-number <name>", "nzComponentName", "NzDemoSliderInputNumberComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "/components/input-number/"], ["nzTitle", "\u81EA\u5B9A\u4E49\u63D0\u793A", "nzSelector", "nz-demo-slider-tip-formatter", "nzGenerateCommand", "ng g ng-zorro-antd:slider-tip-formatter <name>", "nzComponentName", "NzDemoSliderTipFormatterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5E26\u6807\u7B7E\u7684\u6ED1\u5757", "nzSelector", "nz-demo-slider-mark", "nzGenerateCommand", "ng g ng-zorro-antd:slider-mark <name>", "nzComponentName", "NzDemoSliderMarkComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u63A7\u5236 Tooltip \u7684\u663E\u793A", "nzSelector", "nz-demo-slider-tooltip", "nzGenerateCommand", "ng g ng-zorro-antd:slider-tooltip <name>", "nzComponentName", "NzDemoSliderTooltipComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-slider"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-slider'", 1, "anchor"]], template: function NzDemoSliderZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("nzClick", function NzDemoSliderZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "section", 11)(13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "\u6ED1\u52A8\u8F93\u5165\u6761");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "\u6ED1\u52A8\u578B\u8F93\u5165\u5668\uFF0C\u5C55\u793A\u5F53\u524D\u503C\u548C\u53EF\u9009\u8303\u56F4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "h2", 16)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "\u5F53\u7528\u6237\u9700\u8981\u5728\u6570\u503C\u533A\u95F4/\u81EA\u5B9A\u4E49\u533A\u95F4\u5185\u8FDB\u884C\u9009\u62E9\u65F6\uFF0C\u53EF\u4E3A\u8FDE\u7EED\u6216\u79BB\u6563\u503C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "pre", 18)(31, "code")(32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, " NzSliderModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "'ng-zorro-antd/slider'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "h2")(49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NzDemoSliderZhComponent_Template_i_click_51_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 23)(53, "div", 24)(54, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](55, "nz-demo-slider-basic", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "\u57FA\u672C\u6ED1\u52A8\u6761\u3002\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "nzRange");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, " \u65F6\uFF0C\u6E32\u67D3\u4E3A\u53CC\u6ED1\u5757\u3002\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "nzDisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, " \u65F6\uFF0C\u6ED1\u5757\u5904\u4E8E\u4E0D\u53EF\u7528\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](72, "nz-demo-slider-icon-slider", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "\u6ED1\u5757\u5DE6\u53F3\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u6807\u6765\u8868\u8FBE\u4E1A\u52A1\u542B\u4E49\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](77, "nz-demo-slider-event", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "\u5F53 Slider \u7684\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4F1A\u89E6\u53D1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "nzOnChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, " \u4E8B\u4EF6\uFF0C\u5E76\u628A\u6539\u53D8\u540E\u7684\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, "onmouseup");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, " \u65F6\uFF0C\u4F1A\u89E6\u53D1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, "nzOnAfterChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, " \u4E8B\u4EF6\uFF0C\u5E76\u628A\u5F53\u524D\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](91, "nz-demo-slider-vertical", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "\u5782\u76F4\u65B9\u5411\u7684 Slider\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "div", 24)(96, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](97, "nz-demo-slider-input-number", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100, "\u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](102, "\u6570\u5B57\u8F93\u5165\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](103, " \u7EC4\u4EF6\u4FDD\u6301\u540C\u6B65\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](105, "nz-demo-slider-tip-formatter", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](108, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](110, "nzTipFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](111, " \u53EF\u4EE5\u683C\u5F0F\u5316 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113, "Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114, " \u7684\u5185\u5BB9\uFF0C\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116, "nzTipFormatter = null");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](117, "\uFF0C\u5219\u9690\u85CF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](119, "Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](122, "nz-demo-slider-mark", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](125, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](127, "nzMarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](128, " \u5C5E\u6027\u6807\u6CE8\u5206\u6BB5\u5F0F\u6ED1\u5757\uFF0C\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](131, " \u6307\u5B9A\u6ED1\u5757\u4F4D\u7F6E\u3002\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](133, "nzIncluded = false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](134, " \u65F6\uFF0C\u8868\u660E\u4E0D\u540C\u6807\u8BB0\u95F4\u4E3A\u5E76\u5217\u5173\u7CFB\u3002\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](136, "nzStep = null");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](137, " \u65F6\uFF0CSlider \u7684\u53EF\u9009\u503C\u4EC5\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](139, "nzMarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](140, " \u6807\u51FA\u6765\u7684\u90E8\u5206\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](141, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](142, "nz-demo-slider-tooltip", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](143, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](145, "\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](147, "nzTooltipVisible");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](150, "always");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](151, " \u65F6\uFF0C\u5C06\u59CB\u7EC8\u663E\u793A ToolTip\uFF0C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](153, "never");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](154, " \u65F6\u53CD\u4E4B\u5219\u59CB\u7EC8\u4E0D\u663E\u793A\uFF0C\u5373\u4F7F\u5728\u62D6\u52A8\u3001\u79FB\u5165\u65F6\u4E5F\u662F\u5982\u6B64\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "h2", 37)(157, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](158, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](159, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](160, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](161, "h3", 39)(162, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](163, "nz-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](164, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](165, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](167, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "table")(169, "thead")(170, "tr")(171, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](172, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](173, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](174, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](175, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](176, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](177, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](178, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "tbody")(180, "tr")(181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](183, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](185, "\u503C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](187, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](188, " \u65F6\uFF0C\u6ED1\u5757\u4E3A\u7981\u7528\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](189, "td")(190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](191, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "td")(193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](194, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "tr")(196, "td")(197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](198, "[nzDots]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](200, "\u662F\u5426\u53EA\u80FD\u62D6\u62FD\u5230\u523B\u5EA6\u4E0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](201, "td")(202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](203, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](204, "td")(205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](206, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "tr")(208, "td")(209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](210, "[nzIncluded]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](211, "td")(212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](213, "marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](214, " \u4E0D\u4E3A\u7A7A\u5BF9\u8C61\u65F6\u6709\u6548\uFF0C\u503C\u4E3A true \u65F6\u8868\u793A\u503C\u4E3A\u5305\u542B\u5173\u7CFB\uFF0Cfalse \u8868\u793A\u5E76\u5217");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](215, "td")(216, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](217, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](218, "td")(219, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](220, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](221, "tr")(222, "td")(223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](224, "[nzMarks]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](226, "\u523B\u5EA6\u6807\u8BB0\uFF0Ckey \u7684\u7C7B\u578B\u5FC5\u987B\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](228, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](229, " \u4E14\u53D6\u503C\u5728\u95ED\u533A\u95F4 [min, max] \u5185\uFF0C\u6BCF\u4E2A\u6807\u7B7E\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](230, "td")(231, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](232, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](234, "{ number: string/HTML } or { number: { style: object, label: string/HTML } }");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](235, "tr")(236, "td")(237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](238, "[nzMax]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](240, "\u6700\u5927\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](241, "td")(242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](243, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](244, "td")(245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](246, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](247, "tr")(248, "td")(249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](250, "[nzMin]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](252, "\u6700\u5C0F\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](253, "td")(254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](255, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](256, "td")(257, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](258, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](259, "tr")(260, "td")(261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](262, "[nzRange]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](264, "\u53CC\u6ED1\u5757\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](265, "td")(266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](267, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](268, "td")(269, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](270, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](271, "tr")(272, "td")(273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](274, "[nzStep]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](276, "\u6B65\u957F\uFF0C\u53D6\u503C\u5FC5\u987B\u5927\u4E8E 0\uFF0C\u5E76\u4E14\u53EF\u88AB (max - min) \u6574\u9664\u3002\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](278, "marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](279, " \u4E0D\u4E3A\u7A7A\u5BF9\u8C61\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](281, "step");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](282, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](284, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](285, "\uFF0C\u6B64\u65F6 Slider \u7684\u53EF\u9009\u503C\u4EC5\u6709 marks \u6807\u51FA\u6765\u7684\u90E8\u5206\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](286, "td")(287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](288, "number | null");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](289, "td")(290, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](291, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](292, "tr")(293, "td")(294, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](295, "[nzTipFormatter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](297, "Slider \u4F1A\u628A\u5F53\u524D\u503C\u4F20\u7ED9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](299, "nzTipFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](300, "\uFF0C\u5E76\u5728 Tooltip \u4E2D\u663E\u793A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](301, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](302, "nzTipFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](303, " \u7684\u8FD4\u56DE\u503C\uFF0C\u82E5\u4E3A null\uFF0C\u5219\u9690\u85CF Tooltip\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](304, "td")(305, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](306, "(value: number) => string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](308, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](309, "tr")(310, "td")(311, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](312, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](314, "\u8BBE\u7F6E\u5F53\u524D\u53D6\u503C\u3002\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](316, "range");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](317, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](318, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](319, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](320, " \u65F6\uFF0C\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](322, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](323, "\uFF0C\u5426\u5219\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](325, "[number, number]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](328, "number | number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](330, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](331, "tr")(332, "td")(333, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](334, "[nzVertical]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](336, "\u503C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](337, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](338, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](339, " \u65F6\uFF0CSlider \u4E3A\u5782\u76F4\u65B9\u5411");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](340, "td")(341, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](342, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](343, "td")(344, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](345, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](346, "tr")(347, "td")(348, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](349, "[nzTooltipVisible]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](351, "\u503C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](353, "always");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](354, " \u65F6\u603B\u662F\u663E\u793A\uFF0C\u503C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](356, "never");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](357, " \u65F6\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u4E0D\u663E\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](358, "td")(359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](360, "'default' | 'always' | 'never'");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](361, "td")(362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](363, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](364, "tr")(365, "td")(366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](367, "[nzTooltipPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](369, "\u8BBE\u7F6E Tooltip \u7684\u9ED8\u8BA4\u4F4D\u7F6E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](370, "td")(371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](372, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](374, "tr")(375, "td")(376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](377, "(nzOnAfterChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](378, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](379, "\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](380, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](381, "onmouseup");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](382, " \u89E6\u53D1\u65F6\u673A\u4E00\u81F4\uFF0C\u628A\u5F53\u524D\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](383, "td")(384, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](385, "EventEmitter<number[] | number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](386, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](387, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](388, "tr")(389, "td")(390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](391, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](393, "\u5F53 Slider \u7684\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4F1A\u89E6\u53D1 ngModelChange \u4E8B\u4EF6\uFF0C\u5E76\u628A\u6539\u53D8\u540E\u7684\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](394, "td")(395, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](396, "EventEmitter<number[] | number>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](398, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-basic")("nzLink", "components-slider-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-icon-slider")("nzLink", "components-slider-demo-icon-slider")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/icon-slider.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-event")("nzLink", "components-slider-demo-event")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/event.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-vertical")("nzLink", "components-slider-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-input-number")("nzLink", "components-slider-demo-input-number")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/input-number.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-tip-formatter")("nzLink", "components-slider-demo-tip-formatter")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/tip-formatter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-mark")("nzLink", "components-slider-demo-mark")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/mark.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzId", "components-slider-demo-tooltip")("nzLink", "components-slider-demo-tooltip")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/slider/demo/tooltip.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_10__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_11__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoSliderBasicComponent, _icon_slider__WEBPACK_IMPORTED_MODULE_2__.NzDemoSliderIconSliderComponent, _event__WEBPACK_IMPORTED_MODULE_3__.NzDemoSliderEventComponent, _vertical__WEBPACK_IMPORTED_MODULE_4__.NzDemoSliderVerticalComponent, _input_number__WEBPACK_IMPORTED_MODULE_5__.NzDemoSliderInputNumberComponent, _tip_formatter__WEBPACK_IMPORTED_MODULE_6__.NzDemoSliderTipFormatterComponent, _mark__WEBPACK_IMPORTED_MODULE_7__.NzDemoSliderMarkComponent, _tooltip__WEBPACK_IMPORTED_MODULE_8__.NzDemoSliderTooltipComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_slider_index_module_ts.js.map