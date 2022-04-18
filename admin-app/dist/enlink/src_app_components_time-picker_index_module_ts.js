"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_time-picker_index_module_ts"],{

/***/ 19966:
/*!*************************************************!*\
  !*** ./src/app/components/time-picker/addon.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerAddonComponent": () => (/* binding */ NzDemoTimePickerAddonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);






function NzDemoTimePickerAddonComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTimePickerAddonComponent_ng_template_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NzDemoTimePickerAddonComponent {
    constructor() {
        this.time = null;
    }
}
NzDemoTimePickerAddonComponent.ɵfac = function NzDemoTimePickerAddonComponent_Factory(t) { return new (t || NzDemoTimePickerAddonComponent)(); };
NzDemoTimePickerAddonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTimePickerAddonComponent, selectors: [["nz-demo-time-picker-addon"]], decls: 4, vars: 2, consts: [[3, "ngModel", "nzAddOn", "ngModelChange"], ["timePicker", ""], ["addOnTemplate", ""], ["nz-button", "", "nzSize", "small", "nzType", "primary", 3, "click"]], template: function NzDemoTimePickerAddonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-time-picker", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTimePickerAddonComponent_Template_nz_time_picker_ngModelChange_0_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoTimePickerAddonComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time)("nzAddOn", _r1);
    } }, directives: [ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__.NzTimePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 33746:
/*!*************************************************!*\
  !*** ./src/app/components/time-picker/basic.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerBasicComponent": () => (/* binding */ NzDemoTimePickerBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoTimePickerBasicComponent {
    constructor() {
        this.time = null;
        this.defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);
    }
}
NzDemoTimePickerBasicComponent.ɵfac = function NzDemoTimePickerBasicComponent_Factory(t) { return new (t || NzDemoTimePickerBasicComponent)(); };
NzDemoTimePickerBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTimePickerBasicComponent, selectors: [["nz-demo-time-picker-basic"]], decls: 1, vars: 2, consts: [[3, "ngModel", "nzDefaultOpenValue", "ngModelChange"]], template: function NzDemoTimePickerBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-time-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTimePickerBasicComponent_Template_nz_time_picker_ngModelChange_0_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time)("nzDefaultOpenValue", ctx.defaultOpenValue);
    } }, directives: [ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__.NzTimePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 40480:
/*!*********************************************************!*\
  !*** ./src/app/components/time-picker/disabled-part.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerDisabledPartComponent": () => (/* binding */ NzDemoTimePickerDisabledPartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);


class NzDemoTimePickerDisabledPartComponent {
    disabledHours() {
        return [1, 2, 3];
    }
    disabledMinutes(hour) {
        if (hour === 4) {
            return [20, 21, 22, 23, 24, 25];
        }
        else {
            return [];
        }
    }
    disabledSeconds(hour, minute) {
        if (hour === 5 && minute === 1) {
            return [20, 21, 22, 23, 24, 25];
        }
        else {
            return [];
        }
    }
}
NzDemoTimePickerDisabledPartComponent.ɵfac = function NzDemoTimePickerDisabledPartComponent_Factory(t) { return new (t || NzDemoTimePickerDisabledPartComponent)(); };
NzDemoTimePickerDisabledPartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTimePickerDisabledPartComponent, selectors: [["nz-demo-time-picker-disabled-part"]], decls: 1, vars: 3, consts: [[3, "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds"]], template: function NzDemoTimePickerDisabledPartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-time-picker", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabledHours", ctx.disabledHours)("nzDisabledMinutes", ctx.disabledMinutes)("nzDisabledSeconds", ctx.disabledSeconds);
    } }, directives: [ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__.NzTimePickerComponent], encapsulation: 2 });


/***/ }),

/***/ 25774:
/*!****************************************************!*\
  !*** ./src/app/components/time-picker/disabled.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerDisabledComponent": () => (/* binding */ NzDemoTimePickerDisabledComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);


class NzDemoTimePickerDisabledComponent {
}
NzDemoTimePickerDisabledComponent.ɵfac = function NzDemoTimePickerDisabledComponent_Factory(t) { return new (t || NzDemoTimePickerDisabledComponent)(); };
NzDemoTimePickerDisabledComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTimePickerDisabledComponent, selectors: [["nz-demo-time-picker-disabled"]], decls: 1, vars: 0, consts: [["nzDisabled", ""]], template: function NzDemoTimePickerDisabledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-time-picker", 0);
    } }, directives: [ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__.NzTimePickerComponent], encapsulation: 2 });


/***/ }),

/***/ 742:
/*!********************************************************!*\
  !*** ./src/app/components/time-picker/en.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerEnComponent": () => (/* binding */ NzDemoTimePickerEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 33746);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size */ 91431);
/* harmony import */ var _hide_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hide-column */ 93962);
/* harmony import */ var _addon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addon */ 19966);
/* harmony import */ var _use12_hours__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use12-hours */ 21273);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./value */ 3390);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./disabled */ 25774);
/* harmony import */ var _interval_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interval-options */ 84421);
/* harmony import */ var _disabled_part__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./disabled-part */ 40480);

















class NzDemoTimePickerEnComponent {
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
NzDemoTimePickerEnComponent.ɵfac = function NzDemoTimePickerEnComponent_Factory(t) { return new (t || NzDemoTimePickerEnComponent)(); };
NzDemoTimePickerEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NzDemoTimePickerEnComponent, selectors: [["nz-demo-time-picker"]], viewQuery: function NzDemoTimePickerEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 477, vars: 34, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-time-picker-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-time-picker-demo-value", "nzTitle", "Data binding"], ["nzHref", "#components-time-picker-demo-size", "nzTitle", "Three Sizes"], ["nzHref", "#components-time-picker-demo-disabled", "nzTitle", "disabled"], ["nzHref", "#components-time-picker-demo-hide-column", "nzTitle", "Hour and minute"], ["nzHref", "#components-time-picker-demo-interval-options", "nzTitle", "interval option"], ["nzHref", "#components-time-picker-demo-addon", "nzTitle", "Addon"], ["nzHref", "#components-time-picker-demo-disabled-part", "nzTitle", "disabled part"], ["nzHref", "#components-time-picker-demo-use12-hours", "nzTitle", "12 hours"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-time-picker-basic", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-basic <name>", "nzComponentName", "NzDemoTimePickerBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Three Sizes", "nzSelector", "nz-demo-time-picker-size", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-size <name>", "nzComponentName", "NzDemoTimePickerSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Hour and minute", "nzSelector", "nz-demo-time-picker-hide-column", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-hide-column <name>", "nzComponentName", "NzDemoTimePickerHideColumnComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Addon", "nzSelector", "nz-demo-time-picker-addon", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-addon <name>", "nzComponentName", "NzDemoTimePickerAddonComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "12 hours", "nzSelector", "nz-demo-time-picker-use12-hours", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-use12-hours <name>", "nzComponentName", "NzDemoTimePickerUse12HoursComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Data binding", "nzSelector", "nz-demo-time-picker-value", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-value <name>", "nzComponentName", "NzDemoTimePickerValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "disabled", "nzSelector", "nz-demo-time-picker-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-disabled <name>", "nzComponentName", "NzDemoTimePickerDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "interval option", "nzSelector", "nz-demo-time-picker-interval-options", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-interval-options <name>", "nzComponentName", "NzDemoTimePickerIntervalOptionsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "disabled part", "nzSelector", "nz-demo-time-picker-disabled-part", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-disabled-part <name>", "nzComponentName", "NzDemoTimePickerDisabledPartComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-time-picker"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-time-picker'", 1, "anchor"], ["href", "https://angular.io/api/common/DatePipe"], ["id", "methods"], ["onclick", "window.location.hash = 'methods'", 1, "anchor"]], template: function NzDemoTimePickerEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("nzClick", function NzDemoTimePickerEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "section", 12)(14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "TimePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "span", 13)(17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "To select/input a time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "h2", 17)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "By clicking the input box, you can select a time from a popup panel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "pre", 19)(31, "code")(32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, " NzTimePickerModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "'ng-zorro-antd/time-picker'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "h2")(49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NzDemoTimePickerEnComponent_Template_i_click_51_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 24)(53, "div", 25)(54, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "nz-demo-time-picker-basic", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, ", and then we could select or input a time in panel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "nz-demo-time-picker-size", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "The input box comes in three sizes. large is used in the form, while the medium size is the default.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "nz-demo-time-picker-hide-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "While part of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "nzFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, " is omitted, the corresponding column in panel will disappear, too.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](76, "nz-demo-time-picker-addon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "Render addon contents to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, " panel's bottom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](84, "nz-demo-time-picker-use12-hours", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "TimePicker of 12 hours with default format ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "h:mm:ss a");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "div", 25)(91, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](92, "nz-demo-time-picker-value", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "Work with two-way binding.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](97, "nz-demo-time-picker-disabled", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "A disabled state of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](105, "nz-demo-time-picker-interval-options", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](108, "Show stepped options by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "nzHourStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "nzMinuteStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, "nzSecondStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](117, "nz-demo-time-picker-disabled-part", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120, "To specify the hours|minutes|seconds that cannot be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "h2", 38)(123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](126, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "pre", 40)(128, "code")(129, "span", 41)(130, "span", 41)(131, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136, "[(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "span", 43)(138, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](139, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](141, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, "someTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](144, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](146, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](147, "span", 41)(148, "span", 41)(149, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](151, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "h3", 44)(155, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](156, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](160, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "table")(162, "thead")(163, "tr")(164, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](165, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](167, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](168, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](169, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](171, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](172, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](173, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "tbody")(175, "tr")(176, "td")(177, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](180, "to set time");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](183, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](185, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "tr")(188, "td")(189, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](190, "[nzAddon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](192, "called from timepicker panel to render some addon to its bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](193, "td")(194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](195, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](197, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](199, "tr")(200, "td")(201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](202, "[nzAllowEmpty]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](204, "allow clearing text");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](205, "td")(206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](207, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](208, "td")(209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](210, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](212, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](213, "tr")(214, "td")(215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](216, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](218, "get focus when component mounted");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "td")(220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](221, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](222, "td")(223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](224, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](226, "tr")(227, "td")(228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](229, "[nzClearText]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](231, "clear tooltip of icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](232, "td")(233, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](234, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](235, "td")(236, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](237, "'clear'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](239, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](240, "tr")(241, "td")(242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](243, "[nzDefaultOpenValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](245, "default open panel value if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](247, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](248, " is null");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](249, "td")(250, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](251, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](252, "td")(253, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](254, "new Date()");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](256, "tr")(257, "td")(258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](259, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](261, "determine whether the TimePicker is disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](262, "td")(263, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](264, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](265, "td")(266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](267, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](269, "tr")(270, "td")(271, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](272, "[nzDisabledHours]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](273, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](274, "to specify the hours that cannot be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](275, "td")(276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](277, "() => number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](279, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](281, "tr")(282, "td")(283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](284, "[nzDisabledMinutes]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](286, "to specify the minutes that cannot be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](287, "td")(288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](289, "(hour: number) => number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](291, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](292, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](293, "tr")(294, "td")(295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](296, "[nzDisabledSeconds]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](298, "to specify the seconds that cannot be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](299, "td")(300, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](301, "(hour: number, minute: number) => number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](303, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](305, "tr")(306, "td")(307, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](308, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](309, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](310, "to set the time format");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](311, "td")(312, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](313, "DatePipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](314, "td")(315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](316, "\"HH:mm:ss\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](318, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](319, "tr")(320, "td")(321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](322, "[nzHideDisabledOptions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](324, "hide the options that can not be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](325, "td")(326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](327, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](328, "td")(329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](330, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](332, "tr")(333, "td")(334, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](335, "[nzHourStep]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](336, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](337, "interval between hours in picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](338, "td")(339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](340, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](341, "td")(342, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](343, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](345, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](346, "tr")(347, "td")(348, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](349, "[nzMinuteStep]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](351, "interval between minutes in picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](352, "td")(353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](354, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](355, "td")(356, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](357, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](358, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](359, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](360, "tr")(361, "td")(362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](363, "[nzSecondStep]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](365, "interval between seconds in picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](366, "td")(367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](368, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](369, "td")(370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](371, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](372, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](373, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](374, "tr")(375, "td")(376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](377, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](378, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](379, "whether to popup panel, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](380, "td")(381, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](382, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](383, "td")(384, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](385, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](386, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](387, "tr")(388, "td")(389, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](390, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](392, "display when there's no value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](393, "td")(394, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](395, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](396, "td")(397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](398, "\"Select a time\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](400, "tr")(401, "td")(402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](403, "[nzPopupClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](405, "className of panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](406, "td")(407, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](408, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](409, "td")(410, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](411, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](412, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](413, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](414, "tr")(415, "td")(416, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](417, "[nzUse12Hours]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](419, "display as 12 hours format, with default format ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](420, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](421, "h:mm:ss a");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](422, "td")(423, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](424, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](425, "td")(426, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](427, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](429, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](430, "tr")(431, "td")(432, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](433, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](435, "a callback function, can be executed when the selected time is changing");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](436, "td")(437, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](438, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](439, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](440, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](442, "tr")(443, "td")(444, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](445, "(nzOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](447, "a callback function which will be called while panel opening/closing");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](448, "td")(449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](450, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](452, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](454, "h4", 48)(455, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](456, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](457, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](458, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](459, "table")(460, "thead")(461, "tr")(462, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](463, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](464, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](465, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](466, "tbody")(467, "tr")(468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](469, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](470, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](471, "remove focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](472, "tr")(473, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](474, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](476, "get focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-basic")("nzLink", "components-time-picker-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-size")("nzLink", "components-time-picker-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-hide-column")("nzLink", "components-time-picker-demo-hide-column")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/hide-column.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-addon")("nzLink", "components-time-picker-demo-addon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/addon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-use12-hours")("nzLink", "components-time-picker-demo-use12-hours")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/use12-hours.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-value")("nzLink", "components-time-picker-demo-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-disabled")("nzLink", "components-time-picker-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-interval-options")("nzLink", "components-time-picker-demo-interval-options")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/interval-options.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-disabled-part")("nzLink", "components-time-picker-demo-disabled-part")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/disabled-part.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoTimePickerBasicComponent, _size__WEBPACK_IMPORTED_MODULE_2__.NzDemoTimePickerSizeComponent, _hide_column__WEBPACK_IMPORTED_MODULE_3__.NzDemoTimePickerHideColumnComponent, _addon__WEBPACK_IMPORTED_MODULE_4__.NzDemoTimePickerAddonComponent, _use12_hours__WEBPACK_IMPORTED_MODULE_5__.NzDemoTimePickerUse12HoursComponent, _value__WEBPACK_IMPORTED_MODULE_6__.NzDemoTimePickerValueComponent, _disabled__WEBPACK_IMPORTED_MODULE_7__.NzDemoTimePickerDisabledComponent, _interval_options__WEBPACK_IMPORTED_MODULE_8__.NzDemoTimePickerIntervalOptionsComponent, _disabled_part__WEBPACK_IMPORTED_MODULE_9__.NzDemoTimePickerDisabledPartComponent], encapsulation: 2 });


/***/ }),

/***/ 93962:
/*!*******************************************************!*\
  !*** ./src/app/components/time-picker/hide-column.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerHideColumnComponent": () => (/* binding */ NzDemoTimePickerHideColumnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoTimePickerHideColumnComponent {
    constructor() {
        this.time = new Date();
    }
}
NzDemoTimePickerHideColumnComponent.ɵfac = function NzDemoTimePickerHideColumnComponent_Factory(t) { return new (t || NzDemoTimePickerHideColumnComponent)(); };
NzDemoTimePickerHideColumnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTimePickerHideColumnComponent, selectors: [["nz-demo-time-picker-hide-column"]], decls: 1, vars: 1, consts: [["nzFormat", "HH:mm", 3, "ngModel", "ngModelChange"]], template: function NzDemoTimePickerHideColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-time-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTimePickerHideColumnComponent_Template_nz_time_picker_ngModelChange_0_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time);
    } }, directives: [ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__.NzTimePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 59768:
/*!********************************************************!*\
  !*** ./src/app/components/time-picker/index.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerModule": () => (/* binding */ NzDemoTimePickerModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 77885);
/* harmony import */ var _addon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addon */ 19966);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 33746);
/* harmony import */ var _disabled_part__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disabled-part */ 40480);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disabled */ 25774);
/* harmony import */ var _hide_column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hide-column */ 93962);
/* harmony import */ var _interval_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interval-options */ 84421);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./size */ 91431);
/* harmony import */ var _use12_hours__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use12-hours */ 21273);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./value */ 3390);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zh.component */ 19349);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./en.component */ 742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);


















class NzDemoTimePickerModule {
}
NzDemoTimePickerModule.ɵfac = function NzDemoTimePickerModule_Factory(t) { return new (t || NzDemoTimePickerModule)(); };
NzDemoTimePickerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: NzDemoTimePickerModule });
NzDemoTimePickerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoTimePickerEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoTimePickerZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](NzDemoTimePickerModule, { declarations: [_addon__WEBPACK_IMPORTED_MODULE_2__.NzDemoTimePickerAddonComponent,
        _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoTimePickerBasicComponent,
        _disabled_part__WEBPACK_IMPORTED_MODULE_4__.NzDemoTimePickerDisabledPartComponent,
        _disabled__WEBPACK_IMPORTED_MODULE_5__.NzDemoTimePickerDisabledComponent,
        _hide_column__WEBPACK_IMPORTED_MODULE_6__.NzDemoTimePickerHideColumnComponent,
        _interval_options__WEBPACK_IMPORTED_MODULE_7__.NzDemoTimePickerIntervalOptionsComponent,
        _size__WEBPACK_IMPORTED_MODULE_8__.NzDemoTimePickerSizeComponent,
        _use12_hours__WEBPACK_IMPORTED_MODULE_9__.NzDemoTimePickerUse12HoursComponent,
        _value__WEBPACK_IMPORTED_MODULE_10__.NzDemoTimePickerValueComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoTimePickerZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoTimePickerEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_15__.NzTimePickerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 84421:
/*!************************************************************!*\
  !*** ./src/app/components/time-picker/interval-options.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerIntervalOptionsComponent": () => (/* binding */ NzDemoTimePickerIntervalOptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);


class NzDemoTimePickerIntervalOptionsComponent {
}
NzDemoTimePickerIntervalOptionsComponent.ɵfac = function NzDemoTimePickerIntervalOptionsComponent_Factory(t) { return new (t || NzDemoTimePickerIntervalOptionsComponent)(); };
NzDemoTimePickerIntervalOptionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTimePickerIntervalOptionsComponent, selectors: [["nz-demo-time-picker-interval-options"]], decls: 1, vars: 2, consts: [[3, "nzMinuteStep", "nzSecondStep"]], template: function NzDemoTimePickerIntervalOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-time-picker", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMinuteStep", 15)("nzSecondStep", 10);
    } }, directives: [ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__.NzTimePickerComponent], encapsulation: 2 });


/***/ }),

/***/ 77885:
/*!**************************************************!*\
  !*** ./src/app/components/time-picker/module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);


const moduleList = [ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_0__.NzTimePickerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule];


/***/ }),

/***/ 91431:
/*!************************************************!*\
  !*** ./src/app/components/time-picker/size.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerSizeComponent": () => (/* binding */ NzDemoTimePickerSizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoTimePickerSizeComponent {
    constructor() {
        this.time = new Date();
    }
}
NzDemoTimePickerSizeComponent.ɵfac = function NzDemoTimePickerSizeComponent_Factory(t) { return new (t || NzDemoTimePickerSizeComponent)(); };
NzDemoTimePickerSizeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTimePickerSizeComponent, selectors: [["nz-demo-time-picker-size"]], decls: 3, vars: 3, consts: [["nzSize", "large", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["nzSize", "small", 3, "ngModel", "ngModelChange"]], template: function NzDemoTimePickerSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-time-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTimePickerSizeComponent_Template_nz_time_picker_ngModelChange_0_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-time-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTimePickerSizeComponent_Template_nz_time_picker_ngModelChange_1_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-time-picker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTimePickerSizeComponent_Template_nz_time_picker_ngModelChange_2_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time);
    } }, directives: [ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__.NzTimePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: ["nz-time-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0Usb0JBQW9CO01BQ3RCIiwiZmlsZSI6InNpemUudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXRpbWUtcGlja2VyIHtcbiAgICAgICAgbWFyZ2luOiAwIDhweCAxMnB4IDA7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 21273:
/*!*******************************************************!*\
  !*** ./src/app/components/time-picker/use12-hours.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerUse12HoursComponent": () => (/* binding */ NzDemoTimePickerUse12HoursComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoTimePickerUse12HoursComponent {
    constructor() {
        this.time = null;
    }
}
NzDemoTimePickerUse12HoursComponent.ɵfac = function NzDemoTimePickerUse12HoursComponent_Factory(t) { return new (t || NzDemoTimePickerUse12HoursComponent)(); };
NzDemoTimePickerUse12HoursComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTimePickerUse12HoursComponent, selectors: [["nz-demo-time-picker-use12-hours"]], decls: 2, vars: 4, consts: [[3, "ngModel", "nzUse12Hours", "ngModelChange"], ["nzFormat", "h:mm a", 3, "ngModel", "nzUse12Hours", "ngModelChange"]], template: function NzDemoTimePickerUse12HoursComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-time-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTimePickerUse12HoursComponent_Template_nz_time_picker_ngModelChange_0_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-time-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTimePickerUse12HoursComponent_Template_nz_time_picker_ngModelChange_1_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time)("nzUse12Hours", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time)("nzUse12Hours", true);
    } }, directives: [ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__.NzTimePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: ["nz-time-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZTEyLWhvdXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLG9CQUFvQjtNQUN0QiIsImZpbGUiOiJ1c2UxMi1ob3Vycy50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotdGltZS1waWNrZXIge1xuICAgICAgICBtYXJnaW46IDAgOHB4IDEycHggMDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 3390:
/*!*************************************************!*\
  !*** ./src/app/components/time-picker/value.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerValueComponent": () => (/* binding */ NzDemoTimePickerValueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 95689);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoTimePickerValueComponent {
    constructor() {
        this.time = null;
    }
    log(time) {
        console.log(time && time.toTimeString());
    }
}
NzDemoTimePickerValueComponent.ɵfac = function NzDemoTimePickerValueComponent_Factory(t) { return new (t || NzDemoTimePickerValueComponent)(); };
NzDemoTimePickerValueComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTimePickerValueComponent, selectors: [["nz-demo-time-picker-value"]], decls: 1, vars: 1, consts: [[3, "ngModel", "ngModelChange"]], template: function NzDemoTimePickerValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-time-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTimePickerValueComponent_Template_nz_time_picker_ngModelChange_0_listener($event) { return ctx.time = $event; })("ngModelChange", function NzDemoTimePickerValueComponent_Template_nz_time_picker_ngModelChange_0_listener($event) { return ctx.log($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time);
    } }, directives: [ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_1__.NzTimePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 19349:
/*!********************************************************!*\
  !*** ./src/app/components/time-picker/zh.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTimePickerZhComponent": () => (/* binding */ NzDemoTimePickerZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 33746);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size */ 91431);
/* harmony import */ var _hide_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hide-column */ 93962);
/* harmony import */ var _addon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addon */ 19966);
/* harmony import */ var _use12_hours__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use12-hours */ 21273);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./value */ 3390);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./disabled */ 25774);
/* harmony import */ var _interval_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interval-options */ 84421);
/* harmony import */ var _disabled_part__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./disabled-part */ 40480);

















class NzDemoTimePickerZhComponent {
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
NzDemoTimePickerZhComponent.ɵfac = function NzDemoTimePickerZhComponent_Factory(t) { return new (t || NzDemoTimePickerZhComponent)(); };
NzDemoTimePickerZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NzDemoTimePickerZhComponent, selectors: [["nz-demo-time-picker"]], viewQuery: function NzDemoTimePickerZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 480, vars: 34, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-time-picker-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-time-picker-demo-value", "nzTitle", "\u6570\u636E\u7ED1\u5B9A"], ["nzHref", "#components-time-picker-demo-size", "nzTitle", "\u4E09\u79CD\u5927\u5C0F"], ["nzHref", "#components-time-picker-demo-disabled", "nzTitle", "\u7981\u7528"], ["nzHref", "#components-time-picker-demo-hide-column", "nzTitle", "\u9009\u62E9\u65F6\u5206"], ["nzHref", "#components-time-picker-demo-interval-options", "nzTitle", "\u6B65\u957F\u9009\u9879"], ["nzHref", "#components-time-picker-demo-addon", "nzTitle", "\u9644\u52A0\u5185\u5BB9"], ["nzHref", "#components-time-picker-demo-disabled-part", "nzTitle", "\u7981\u7528\u90E8\u5206"], ["nzHref", "#components-time-picker-demo-use12-hours", "nzTitle", "12\u5C0F\u65F6\u5236"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-time-picker-basic", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-basic <name>", "nzComponentName", "NzDemoTimePickerBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u4E09\u79CD\u5927\u5C0F", "nzSelector", "nz-demo-time-picker-size", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-size <name>", "nzComponentName", "NzDemoTimePickerSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9009\u62E9\u65F6\u5206", "nzSelector", "nz-demo-time-picker-hide-column", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-hide-column <name>", "nzComponentName", "NzDemoTimePickerHideColumnComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9644\u52A0\u5185\u5BB9", "nzSelector", "nz-demo-time-picker-addon", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-addon <name>", "nzComponentName", "NzDemoTimePickerAddonComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "12\u5C0F\u65F6\u5236", "nzSelector", "nz-demo-time-picker-use12-hours", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-use12-hours <name>", "nzComponentName", "NzDemoTimePickerUse12HoursComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6570\u636E\u7ED1\u5B9A", "nzSelector", "nz-demo-time-picker-value", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-value <name>", "nzComponentName", "NzDemoTimePickerValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7981\u7528", "nzSelector", "nz-demo-time-picker-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-disabled <name>", "nzComponentName", "NzDemoTimePickerDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6B65\u957F\u9009\u9879", "nzSelector", "nz-demo-time-picker-interval-options", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-interval-options <name>", "nzComponentName", "NzDemoTimePickerIntervalOptionsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7981\u7528\u90E8\u5206", "nzSelector", "nz-demo-time-picker-disabled-part", "nzGenerateCommand", "ng g ng-zorro-antd:time-picker-disabled-part <name>", "nzComponentName", "NzDemoTimePickerDisabledPartComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-time-picker"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-time-picker'", 1, "anchor"], ["href", "https://angular.io/api/common/DatePipe"], ["id", "\u65B9\u6CD5"], ["onclick", "window.location.hash = '\u65B9\u6CD5'", 1, "anchor"]], template: function NzDemoTimePickerZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("nzClick", function NzDemoTimePickerZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "section", 12)(14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "TimePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "\u65F6\u95F4\u9009\u62E9\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "\u8F93\u5165\u6216\u9009\u62E9\u65F6\u95F4\u7684\u63A7\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "h2", 17)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65F6\u95F4\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65F6\u95F4\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "pre", 19)(32, "code")(33, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, " NzTimePickerModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "'ng-zorro-antd/time-picker'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "h2")(50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NzDemoTimePickerZhComponent_Template_i_click_52_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 24)(54, "div", 25)(55, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "nz-demo-time-picker-basic", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "\u70B9\u51FB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u6D6E\u5C42\u4E2D\u9009\u62E9\u6216\u8005\u8F93\u5165\u67D0\u4E00\u65F6\u95F4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "nz-demo-time-picker-size", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u5927\u7684\u7528\u5728\u8868\u5355\u4E2D\uFF0C\u4E2D\u7684\u4E3A\u9ED8\u8BA4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](69, "nz-demo-time-picker-hide-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "p")(72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, " \u6D6E\u5C42\u4E2D\u7684\u5217\u4F1A\u968F\u7740 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "nzFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, " \u53D8\u5316\uFF0C\u5F53\u7565\u53BB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "nzFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, " \u4E2D\u7684\u67D0\u90E8\u5206\u65F6\uFF0C\u6D6E\u5C42\u4E2D\u5BF9\u5E94\u7684\u5217\u4E5F\u4F1A\u6D88\u5931\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](82, "nz-demo-time-picker-addon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, " \u9009\u62E9\u6846\u5E95\u90E8\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](90, "nz-demo-time-picker-use12-hours", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, "12\u5C0F\u65F6\u5236\u7684\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u9ED8\u8BA4format\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "h:mm:ss a");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "div", 25)(97, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](98, "nz-demo-time-picker-value", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101, "\u53EF\u4EE5\u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](103, "nz-demo-time-picker-disabled", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "\u7981\u7528\u65F6\u95F4\u9009\u62E9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](108, "nz-demo-time-picker-interval-options", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](111, "\u53EF\u4EE5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "nzHourStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, "nzMinuteStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "nzSecondStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, " \u6309\u6B65\u957F\u5C55\u793A\u53EF\u9009\u7684\u65F6\u5206\u79D2\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](120, "nz-demo-time-picker-disabled-part", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123, "\u7981\u7528\u90E8\u5206\u65F6\u95F4\u9009\u62E9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "h2", 38)(126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "pre", 40)(131, "code")(132, "span", 41)(133, "span", 41)(134, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](135, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](137, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](139, "[(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "span", 43)(141, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](144, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145, "someTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](147, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "span", 41)(151, "span", 41)(152, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](154, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](155, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](156, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "h3", 44)(158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](159, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](161, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "table")(165, "thead")(166, "tr")(167, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](170, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](172, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](173, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](174, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "tbody")(178, "tr")(179, "td")(180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](181, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](183, "\u5F53\u524D\u65F6\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "td")(185, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](188, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](190, "tr")(191, "td")(192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](193, "[nzAddon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](195, "\u9009\u62E9\u6846\u5E95\u90E8\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](196, "td")(197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](198, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](200, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](202, "tr")(203, "td")(204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](205, "[nzAllowEmpty]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](207, "\u662F\u5426\u5C55\u793A\u6E05\u9664\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](208, "td")(209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](210, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](211, "td")(212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](213, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](215, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](216, "tr")(217, "td")(218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](219, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](221, "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](222, "td")(223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](224, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](225, "td")(226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](227, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "tr")(230, "td")(231, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](232, "[nzClearText]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](234, "\u6E05\u9664\u6309\u94AE\u7684\u63D0\u793A\u6587\u6848");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](235, "td")(236, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](237, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](238, "td")(239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](240, "'clear'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](242, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](243, "tr")(244, "td")(245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](246, "[nzDefaultOpenValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](248, "\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](250, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](251, " \u4E0D\u5B58\u5728\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u9762\u677F\u6253\u5F00\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](252, "td")(253, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](254, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](255, "td")(256, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](257, "new Date()");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](259, "tr")(260, "td")(261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](262, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](264, "\u7981\u7528\u5168\u90E8\u64CD\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](265, "td")(266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](267, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](268, "td")(269, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](270, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](272, "tr")(273, "td")(274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](275, "[nzDisabledHours]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](277, "\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](278, "td")(279, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](280, "() => number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](282, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](284, "tr")(285, "td")(286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](287, "[nzDisabledMinutes]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](289, "\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](290, "td")(291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](292, "(hour: number) => number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](294, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](296, "tr")(297, "td")(298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](299, "[nzDisabledSeconds]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](300, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](301, "\u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](302, "td")(303, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](304, "(hour: number, minute: number) => number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](306, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](308, "tr")(309, "td")(310, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](311, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](313, "\u5C55\u793A\u7684\u65F6\u95F4\u683C\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](314, "td")(315, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](316, "DatePipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](317, "td")(318, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](319, "\"HH:mm:ss\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](320, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](321, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](322, "tr")(323, "td")(324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](325, "[nzHideDisabledOptions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](326, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](327, "\u9690\u85CF\u7981\u6B62\u9009\u62E9\u7684\u9009\u9879");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](328, "td")(329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](330, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](331, "td")(332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](333, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](335, "tr")(336, "td")(337, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](338, "[nzHourStep]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](340, "\u5C0F\u65F6\u9009\u9879\u95F4\u9694");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](341, "td")(342, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](343, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](344, "td")(345, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](346, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](348, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](349, "tr")(350, "td")(351, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](352, "[nzMinuteStep]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](354, "\u5206\u949F\u9009\u9879\u95F4\u9694");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](355, "td")(356, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](357, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](358, "td")(359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](360, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](361, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](362, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](363, "tr")(364, "td")(365, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](366, "[nzSecondStep]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](368, "\u79D2\u9009\u9879\u95F4\u9694");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](369, "td")(370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](371, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](372, "td")(373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](374, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](376, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](377, "tr")(378, "td")(379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](380, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](382, "\u9762\u677F\u662F\u5426\u6253\u5F00\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](383, "td")(384, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](385, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](386, "td")(387, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](388, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](390, "tr")(391, "td")(392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](393, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](395, "\u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](396, "td")(397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](398, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](399, "td")(400, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](401, "\"\u8BF7\u9009\u62E9\u65F6\u95F4\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](402, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](403, "tr")(404, "td")(405, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](406, "[nzPopupClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](407, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](408, "\u5F39\u51FA\u5C42\u7C7B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](409, "td")(410, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](411, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](412, "td")(413, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](414, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](416, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](417, "tr")(418, "td")(419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](420, "[nzUse12Hours]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](422, "\u4F7F\u752812\u5C0F\u65F6\u5236\uFF0C\u4E3Atrue\u65F6format\u9ED8\u8BA4\u4E3A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](423, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](424, "h:mm:ss a");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](425, "td")(426, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](427, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](428, "td")(429, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](430, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](431, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](432, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](433, "tr")(434, "td")(435, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](436, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](438, "\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](439, "td")(440, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](441, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](442, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](443, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](445, "tr")(446, "td")(447, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](448, "(nzOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](450, "\u9762\u677F\u6253\u5F00/\u5173\u95ED\u65F6\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](451, "td")(452, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](453, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](455, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](457, "h4", 48)(458, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](459, "\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](460, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](461, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](462, "table")(463, "thead")(464, "tr")(465, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](466, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](467, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](468, "\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](469, "tbody")(470, "tr")(471, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](472, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](473, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](474, "\u79FB\u9664\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](475, "tr")(476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](477, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](479, "\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-basic")("nzLink", "components-time-picker-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-size")("nzLink", "components-time-picker-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-hide-column")("nzLink", "components-time-picker-demo-hide-column")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/hide-column.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-addon")("nzLink", "components-time-picker-demo-addon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/addon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-use12-hours")("nzLink", "components-time-picker-demo-use12-hours")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/use12-hours.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-value")("nzLink", "components-time-picker-demo-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-disabled")("nzLink", "components-time-picker-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-interval-options")("nzLink", "components-time-picker-demo-interval-options")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/interval-options.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-time-picker-demo-disabled-part")("nzLink", "components-time-picker-demo-disabled-part")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/time-picker/demo/disabled-part.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoTimePickerBasicComponent, _size__WEBPACK_IMPORTED_MODULE_2__.NzDemoTimePickerSizeComponent, _hide_column__WEBPACK_IMPORTED_MODULE_3__.NzDemoTimePickerHideColumnComponent, _addon__WEBPACK_IMPORTED_MODULE_4__.NzDemoTimePickerAddonComponent, _use12_hours__WEBPACK_IMPORTED_MODULE_5__.NzDemoTimePickerUse12HoursComponent, _value__WEBPACK_IMPORTED_MODULE_6__.NzDemoTimePickerValueComponent, _disabled__WEBPACK_IMPORTED_MODULE_7__.NzDemoTimePickerDisabledComponent, _interval_options__WEBPACK_IMPORTED_MODULE_8__.NzDemoTimePickerIntervalOptionsComponent, _disabled_part__WEBPACK_IMPORTED_MODULE_9__.NzDemoTimePickerDisabledPartComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_time-picker_index_module_ts.js.map