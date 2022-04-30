"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_radio_index_module_ts"],{

/***/ 2228:
/*!*******************************************!*\
  !*** ./src/app/components/radio/basic.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioBasicComponent": () => (/* binding */ NzDemoRadioBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoRadioBasicComponent {
}
NzDemoRadioBasicComponent.ɵfac = function NzDemoRadioBasicComponent_Factory(t) { return new (t || NzDemoRadioBasicComponent)(); };
NzDemoRadioBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoRadioBasicComponent, selectors: [["nz-demo-radio-basic"]], decls: 2, vars: 0, consts: [["nz-radio", "", "ngModel", ""]], template: function NzDemoRadioBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 71309:
/*!*********************************************!*\
  !*** ./src/app/components/radio/disable.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioDisableComponent": () => (/* binding */ NzDemoRadioDisableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);






class NzDemoRadioDisableComponent {
    constructor() {
        this.disabled = true;
    }
}
NzDemoRadioDisableComponent.ɵfac = function NzDemoRadioDisableComponent_Factory(t) { return new (t || NzDemoRadioDisableComponent)(); };
NzDemoRadioDisableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoRadioDisableComponent, selectors: [["nz-demo-radio-disable"]], decls: 10, vars: 3, consts: [["nz-radio", "", 3, "nzDisabled"], ["nz-radio", "", 3, "nzDisabled", "ngModel"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function NzDemoRadioDisableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br")(7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoRadioDisableComponent_Template_button_click_8_listener() { return ctx.disabled = !ctx.disabled; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Toggle disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", ctx.disabled)("ngModel", true);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 32365:
/*!**************************************************!*\
  !*** ./src/app/components/radio/en.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioEnComponent": () => (/* binding */ NzDemoRadioEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 2228);
/* harmony import */ var _radiogroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radiogroup */ 52251);
/* harmony import */ var _radiogroup_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radiogroup-options */ 48575);
/* harmony import */ var _radiogroup_with_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radiogroup-with-name */ 51932);
/* harmony import */ var _solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solid */ 16203);
/* harmony import */ var _disable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disable */ 71309);
/* harmony import */ var _radiogroup_more__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radiogroup-more */ 24695);
/* harmony import */ var _radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radiobutton */ 61304);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./size */ 54905);

















class NzDemoRadioEnComponent {
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
NzDemoRadioEnComponent.ɵfac = function NzDemoRadioEnComponent_Factory(t) { return new (t || NzDemoRadioEnComponent)(); };
NzDemoRadioEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NzDemoRadioEnComponent, selectors: [["nz-demo-radio"]], viewQuery: function NzDemoRadioEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 353, vars: 34, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-radio-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-radio-demo-disable", "nzTitle", "Disabled"], ["nzHref", "#components-radio-demo-radiogroup", "nzTitle", "Radio Group"], ["nzHref", "#components-radio-demo-radiogroup-more", "nzTitle", "Vertical RadioGroup"], ["nzHref", "#components-radio-demo-radiogroup-options", "nzTitle", "RadioGroup group - optional"], ["nzHref", "#components-radio-demo-radiobutton", "nzTitle", "Radio Style"], ["nzHref", "#components-radio-demo-radiogroup-with-name", "nzTitle", "RadioGroup with name"], ["nzHref", "#components-radio-demo-size", "nzTitle", "Size"], ["nzHref", "#components-radio-demo-solid", "nzTitle", "Solid radio button"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-radio-basic", "nzGenerateCommand", "ng g ng-zorro-antd:radio-basic <name>", "nzComponentName", "NzDemoRadioBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Radio Group", "nzSelector", "nz-demo-radio-radiogroup", "nzGenerateCommand", "ng g ng-zorro-antd:radio-radiogroup <name>", "nzComponentName", "NzDemoRadioRadiogroupComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "RadioGroup group - optional", "nzSelector", "nz-demo-radio-radiogroup-options", "nzGenerateCommand", "ng g ng-zorro-antd:radio-radiogroup-options <name>", "nzComponentName", "NzDemoRadioRadiogroupOptionsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "RadioGroup with name", "nzSelector", "nz-demo-radio-radiogroup-with-name", "nzGenerateCommand", "ng g ng-zorro-antd:radio-radiogroup-with-name <name>", "nzComponentName", "NzDemoRadioRadiogroupWithNameComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Solid radio button", "nzSelector", "nz-demo-radio-solid", "nzGenerateCommand", "ng g ng-zorro-antd:radio-solid <name>", "nzComponentName", "NzDemoRadioSolidComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Disabled", "nzSelector", "nz-demo-radio-disable", "nzGenerateCommand", "ng g ng-zorro-antd:radio-disable <name>", "nzComponentName", "NzDemoRadioDisableComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Vertical RadioGroup", "nzSelector", "nz-demo-radio-radiogroup-more", "nzGenerateCommand", "ng g ng-zorro-antd:radio-radiogroup-more <name>", "nzComponentName", "NzDemoRadioRadiogroupMoreComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Radio Style", "nzSelector", "nz-demo-radio-radiobutton", "nzGenerateCommand", "ng g ng-zorro-antd:radio-radiobutton <name>", "nzComponentName", "NzDemoRadioRadiobuttonComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Size", "nzSelector", "nz-demo-radio-size", "nzGenerateCommand", "ng g ng-zorro-antd:radio-size <name>", "nzComponentName", "NzDemoRadioSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-radio]-|-[nz-radio-button]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-radio]-|-[nz-radio-button]'", 1, "anchor"], ["id", "nz-radio-group"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-radio-group'", 1, "anchor"], ["id", "methods"], ["onclick", "window.location.hash = 'methods'", 1, "anchor"], ["id", "[nz-radio]"], ["onclick", "window.location.hash = '[nz-radio]'", 1, "anchor"]], template: function NzDemoRadioEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("nzClick", function NzDemoRadioEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "section", 12)(14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "span", 13)(17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Radio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "h2", 17)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "ul")(29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Used to select a single state in multiple options.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "The difference between Select is that Radio is visible to user and can facilitate the comparison of choice. So, when you want to use Radio, option should not be too much.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "pre", 19)(34, "code")(35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, " NzRadioModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "'ng-zorro-antd/radio'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "h2")(52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NzDemoRadioEnComponent_Template_i_click_54_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 24)(56, "div", 25)(57, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](58, "nz-demo-radio-basic", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "The simplest use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "nz-demo-radio-radiogroup", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "A group of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "nz-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, " components.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "nz-demo-radio-radiogroup-options", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "Render radios by configuring ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](79, "nz-demo-radio-radiogroup-with-name", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, "Passing the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "nzName");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, " property to all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "input[type=\"radio\"]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, " that are in the same RadioGroup. It is usually used to let the browser see your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "nz-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, " as a real \"group\" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, "nz-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](96, "nz-demo-radio-solid", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99, "Solid radio button style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "div", 25)(101, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](102, "nz-demo-radio-disable", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "p")(105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "nz-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](107, " unavailable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](109, "nz-demo-radio-radiogroup-more", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "Vertical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, "nz-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, ", with more radios.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](117, "nz-demo-radio-radiobutton", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120, "The combination of radio button style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](122, "nz-demo-radio-size", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](125, "There are three sizes available: large, medium, and small. It can coordinate with input box.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "h2", 38)(128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "h3", 40)(133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, "[nz-radio] | [nz-radio-button]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](138, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "table")(140, "thead")(141, "tr")(142, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](143, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](147, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "tbody")(151, "tr")(152, "td")(153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](154, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](156, "get focus when component mounted");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "td")(158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](159, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "td")(161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](162, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](163, "tr")(164, "td")(165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](166, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, "Disable radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "td")(170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](171, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](172, "td")(173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](174, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "tr")(176, "td")(177, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](180, "Specifies whether the radio is selected, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](183, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "td")(185, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "tr")(188, "td")(189, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](190, "[nzValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](192, "use with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](194, "nz-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](195, "td")(196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](197, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](199, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](200, "tr")(201, "td")(202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](203, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](205, "The callback function that is triggered when the state changes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](206, "td")(207, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](208, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](210, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](211, "h3", 43)(212, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](213, "nz-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](214, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](215, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](216, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](217, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](219, "radio group\uFF0Cwrap a group of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](221, "nz-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](222, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](223, "table")(224, "thead")(225, "tr")(226, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](227, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](228, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](229, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](230, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](231, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](232, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](233, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](234, "tbody")(235, "tr")(236, "td")(237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](238, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](240, "current selected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](242, "nz-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](243, " value, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](244, "td")(245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](246, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](248, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](249, "tr")(250, "td")(251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](252, "[nzName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](254, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](256, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](257, " property of all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](259, "input[type=\"radio\"]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](260, " children");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](261, "td")(262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](263, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](265, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](266, "tr")(267, "td")(268, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](269, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](271, "Disable all radio buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](272, "td")(273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](274, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](275, "td")(276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](277, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](278, "tr")(279, "td")(280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](281, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](283, "Size, only on radio style");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](284, "td")(285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](286, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](287, "td")(288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](289, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](290, "tr")(291, "td")(292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](293, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](295, "the callback function when current selected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](297, "nz-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](298, " value change");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](299, "td")(300, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](301, "EventEmitter<string>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](303, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](304, "tr")(305, "td")(306, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](307, "[nzButtonStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](309, "style type of radio button");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](310, "td")(311, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](312, "'outline' | 'solid'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](313, "td")(314, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](315, "'outline'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](316, "h2", 46)(317, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](318, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](319, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](320, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](321, "h3", 48)(322, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](323, "[nz-radio]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](324, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](325, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](326, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](327, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](328, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](329, "you can get ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](330, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](331, "NzRadioComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](332, " via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](333, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](334, "ViewChild");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](335, "table")(336, "thead")(337, "tr")(338, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](339, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](340, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](341, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](342, "tbody")(343, "tr")(344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](345, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](347, "remove focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](348, "tr")(349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](350, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](352, "get focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-basic")("nzLink", "components-radio-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-radiogroup")("nzLink", "components-radio-demo-radiogroup")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/radiogroup.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-radiogroup-options")("nzLink", "components-radio-demo-radiogroup-options")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/radiogroup-options.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-radiogroup-with-name")("nzLink", "components-radio-demo-radiogroup-with-name")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/radiogroup-with-name.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-solid")("nzLink", "components-radio-demo-solid")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/solid.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-disable")("nzLink", "components-radio-demo-disable")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/disable.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-radiogroup-more")("nzLink", "components-radio-demo-radiogroup-more")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/radiogroup-more.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-radiobutton")("nzLink", "components-radio-demo-radiobutton")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/radiobutton.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-size")("nzLink", "components-radio-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/size.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoRadioBasicComponent, _radiogroup__WEBPACK_IMPORTED_MODULE_2__.NzDemoRadioRadiogroupComponent, _radiogroup_options__WEBPACK_IMPORTED_MODULE_3__.NzDemoRadioRadiogroupOptionsComponent, _radiogroup_with_name__WEBPACK_IMPORTED_MODULE_4__.NzDemoRadioRadiogroupWithNameComponent, _solid__WEBPACK_IMPORTED_MODULE_5__.NzDemoRadioSolidComponent, _disable__WEBPACK_IMPORTED_MODULE_6__.NzDemoRadioDisableComponent, _radiogroup_more__WEBPACK_IMPORTED_MODULE_7__.NzDemoRadioRadiogroupMoreComponent, _radiobutton__WEBPACK_IMPORTED_MODULE_8__.NzDemoRadioRadiobuttonComponent, _size__WEBPACK_IMPORTED_MODULE_9__.NzDemoRadioSizeComponent], encapsulation: 2 });


/***/ }),

/***/ 29373:
/*!**************************************************!*\
  !*** ./src/app/components/radio/index.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioModule": () => (/* binding */ NzDemoRadioModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 53083);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 2228);
/* harmony import */ var _disable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disable */ 71309);
/* harmony import */ var _radiobutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radiobutton */ 61304);
/* harmony import */ var _radiogroup_more__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radiogroup-more */ 24695);
/* harmony import */ var _radiogroup_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radiogroup-options */ 48575);
/* harmony import */ var _radiogroup_with_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radiogroup-with-name */ 51932);
/* harmony import */ var _radiogroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radiogroup */ 52251);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./size */ 54905);
/* harmony import */ var _solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./solid */ 16203);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zh.component */ 38723);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./en.component */ 32365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);



















class NzDemoRadioModule {
}
NzDemoRadioModule.ɵfac = function NzDemoRadioModule_Factory(t) { return new (t || NzDemoRadioModule)(); };
NzDemoRadioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: NzDemoRadioModule });
NzDemoRadioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoRadioEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoRadioZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](NzDemoRadioModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoRadioBasicComponent,
        _disable__WEBPACK_IMPORTED_MODULE_3__.NzDemoRadioDisableComponent,
        _radiobutton__WEBPACK_IMPORTED_MODULE_4__.NzDemoRadioRadiobuttonComponent,
        _radiogroup_more__WEBPACK_IMPORTED_MODULE_5__.NzDemoRadioRadiogroupMoreComponent,
        _radiogroup_options__WEBPACK_IMPORTED_MODULE_6__.NzDemoRadioRadiogroupOptionsComponent,
        _radiogroup_with_name__WEBPACK_IMPORTED_MODULE_7__.NzDemoRadioRadiogroupWithNameComponent,
        _radiogroup__WEBPACK_IMPORTED_MODULE_8__.NzDemoRadioRadiogroupComponent,
        _size__WEBPACK_IMPORTED_MODULE_9__.NzDemoRadioSizeComponent,
        _solid__WEBPACK_IMPORTED_MODULE_10__.NzDemoRadioSolidComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoRadioZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoRadioEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__.NzRadioModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 53083:
/*!********************************************!*\
  !*** ./src/app/components/radio/module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);



const moduleList = [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_0__.NzRadioModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__.NzInputModule];


/***/ }),

/***/ 61304:
/*!*************************************************!*\
  !*** ./src/app/components/radio/radiobutton.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioRadiobuttonComponent": () => (/* binding */ NzDemoRadioRadiobuttonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoRadioRadiobuttonComponent {
    constructor() {
        this.radioValue = 'A';
    }
}
NzDemoRadioRadiobuttonComponent.ɵfac = function NzDemoRadioRadiobuttonComponent_Factory(t) { return new (t || NzDemoRadioRadiobuttonComponent)(); };
NzDemoRadioRadiobuttonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoRadioRadiobuttonComponent, selectors: [["nz-demo-radio-radiobutton"]], decls: 31, vars: 3, consts: [[3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "A"], ["nz-radio-button", "", "nzValue", "B"], ["nz-radio-button", "", "nzValue", "C"], ["nz-radio-button", "", "nzValue", "D"], ["nz-radio-button", "", "nzValue", "B", "nzDisabled", ""], ["nz-radio-button", "", "nzValue", "A", "nzDisabled", ""], ["nz-radio-button", "", "nzValue", "C", "nzDisabled", ""], ["nz-radio-button", "", "nzValue", "D", "nzDisabled", ""]], template: function NzDemoRadioRadiobuttonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiobuttonComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br")(10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiobuttonComponent_Template_nz_radio_group_ngModelChange_11_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br")(21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiobuttonComponent_Template_nz_radio_group_ngModelChange_22_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioButtonDirective], encapsulation: 2 });


/***/ }),

/***/ 24695:
/*!*****************************************************!*\
  !*** ./src/app/components/radio/radiogroup-more.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioRadiogroupMoreComponent": () => (/* binding */ NzDemoRadioRadiogroupMoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);





function NzDemoRadioRadiogroupMoreComponent_input_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 6);
} }
class NzDemoRadioRadiogroupMoreComponent {
    constructor() {
        this.radioValue = 'A';
        this.style = {
            display: 'block',
            height: '30px',
            lineHeight: '30px'
        };
    }
}
NzDemoRadioRadiogroupMoreComponent.ɵfac = function NzDemoRadioRadiogroupMoreComponent_Factory(t) { return new (t || NzDemoRadioRadiogroupMoreComponent)(); };
NzDemoRadioRadiogroupMoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoRadioRadiogroupMoreComponent, selectors: [["nz-demo-radio-radiogroup-more"]], decls: 10, vars: 6, consts: [[3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "A", 3, "ngStyle"], ["nz-radio", "", "nzValue", "B", 3, "ngStyle"], ["nz-radio", "", "nzValue", "C", 3, "ngStyle"], ["nz-radio", "", "nzValue", "M", 3, "ngStyle"], ["type", "text", "nz-input", "", 4, "ngIf"], ["type", "text", "nz-input", ""]], template: function NzDemoRadioRadiogroupMoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupMoreComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Option A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Option B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Option C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " More... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzDemoRadioRadiogroupMoreComponent_input_9_Template, 1, 0, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.radioValue === "M");
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective], styles: ["[nz-radio][_ngcontent-%COMP%] {\n        display: block;\n      }\n      input[_ngcontent-%COMP%] {\n        width: 100px;\n        margin-left: 10px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvZ3JvdXAtbW9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxjQUFjO01BQ2hCO01BQ0E7UUFDRSxZQUFZO1FBQ1osaUJBQWlCO01BQ25CIiwiZmlsZSI6InJhZGlvZ3JvdXAtbW9yZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LXJhZGlvXSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 48575:
/*!********************************************************!*\
  !*** ./src/app/components/radio/radiogroup-options.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioRadiogroupOptionsComponent": () => (/* binding */ NzDemoRadioRadiogroupOptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function NzDemoRadioRadiogroupOptionsComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r3.label);
} }
function NzDemoRadioRadiogroupOptionsComponent_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r4.label);
} }
function NzDemoRadioRadiogroupOptionsComponent_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r5.label);
} }
class NzDemoRadioRadiogroupOptionsComponent {
    constructor() {
        this.radioValue = 'Apple';
        this.options = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }
        ];
    }
}
NzDemoRadioRadiogroupOptionsComponent.ɵfac = function NzDemoRadioRadiogroupOptionsComponent_Factory(t) { return new (t || NzDemoRadioRadiogroupOptionsComponent)(); };
NzDemoRadioRadiogroupOptionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoRadioRadiogroupOptionsComponent, selectors: [["nz-demo-radio-radiogroup-options"]], decls: 6, vars: 6, consts: [[3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-radio", "", 3, "nzValue"]], template: function NzDemoRadioRadiogroupOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupOptionsComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoRadioRadiogroupOptionsComponent_label_1_Template, 2, 2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupOptionsComponent_Template_nz_radio_group_ngModelChange_2_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoRadioRadiogroupOptionsComponent_label_3_Template, 2, 2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupOptionsComponent_Template_nz_radio_group_ngModelChange_4_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoRadioRadiogroupOptionsComponent_label_5_Template, 2, 2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioComponent], encapsulation: 2 });


/***/ }),

/***/ 51932:
/*!**********************************************************!*\
  !*** ./src/app/components/radio/radiogroup-with-name.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioRadiogroupWithNameComponent": () => (/* binding */ NzDemoRadioRadiogroupWithNameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoRadioRadiogroupWithNameComponent {
    constructor() {
        this.radioValue = 'A';
    }
}
NzDemoRadioRadiogroupWithNameComponent.ɵfac = function NzDemoRadioRadiogroupWithNameComponent_Factory(t) { return new (t || NzDemoRadioRadiogroupWithNameComponent)(); };
NzDemoRadioRadiogroupWithNameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoRadioRadiogroupWithNameComponent, selectors: [["nz-demo-radio-radiogroup-with-name"]], decls: 9, vars: 1, consts: [["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "A"], ["nz-radio", "", "nzValue", "B"], ["nz-radio", "", "nzValue", "C"], ["nz-radio", "", "nzValue", "D"]], template: function NzDemoRadioRadiogroupWithNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupWithNameComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioComponent], encapsulation: 2 });


/***/ }),

/***/ 52251:
/*!************************************************!*\
  !*** ./src/app/components/radio/radiogroup.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioRadiogroupComponent": () => (/* binding */ NzDemoRadioRadiogroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoRadioRadiogroupComponent {
    constructor() {
        this.radioValue = 'A';
    }
}
NzDemoRadioRadiogroupComponent.ɵfac = function NzDemoRadioRadiogroupComponent_Factory(t) { return new (t || NzDemoRadioRadiogroupComponent)(); };
NzDemoRadioRadiogroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoRadioRadiogroupComponent, selectors: [["nz-demo-radio-radiogroup"]], decls: 9, vars: 1, consts: [[3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "A"], ["nz-radio", "", "nzValue", "B"], ["nz-radio", "", "nzValue", "C"], ["nz-radio", "", "nzValue", "D"]], template: function NzDemoRadioRadiogroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioComponent], encapsulation: 2 });


/***/ }),

/***/ 54905:
/*!******************************************!*\
  !*** ./src/app/components/radio/size.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioSizeComponent": () => (/* binding */ NzDemoRadioSizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoRadioSizeComponent {
    constructor() {
        this.radioValue = 'A';
    }
}
NzDemoRadioSizeComponent.ɵfac = function NzDemoRadioSizeComponent_Factory(t) { return new (t || NzDemoRadioSizeComponent)(); };
NzDemoRadioSizeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoRadioSizeComponent, selectors: [["nz-demo-radio-size"]], decls: 31, vars: 3, consts: [["nzSize", "large", 3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "A"], ["nz-radio-button", "", "nzValue", "B"], ["nz-radio-button", "", "nzValue", "C"], ["nz-radio-button", "", "nzValue", "D"], [3, "ngModel", "ngModelChange"], ["nzSize", "small", 3, "ngModel", "ngModelChange"]], template: function NzDemoRadioSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioSizeComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br")(10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-radio-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioSizeComponent_Template_nz_radio_group_ngModelChange_11_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br")(21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioSizeComponent_Template_nz_radio_group_ngModelChange_22_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioButtonDirective], encapsulation: 2 });


/***/ }),

/***/ 16203:
/*!*******************************************!*\
  !*** ./src/app/components/radio/solid.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioSolidComponent": () => (/* binding */ NzDemoRadioSolidComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoRadioSolidComponent {
    constructor() {
        this.radioValue = 'A';
    }
}
NzDemoRadioSolidComponent.ɵfac = function NzDemoRadioSolidComponent_Factory(t) { return new (t || NzDemoRadioSolidComponent)(); };
NzDemoRadioSolidComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoRadioSolidComponent, selectors: [["nz-demo-radio-solid"]], decls: 9, vars: 1, consts: [["nzButtonStyle", "solid", 3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "A"], ["nz-radio-button", "", "nzValue", "B"], ["nz-radio-button", "", "nzValue", "C"], ["nz-radio-button", "", "nzValue", "D"]], template: function NzDemoRadioSolidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioSolidComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioButtonDirective], encapsulation: 2 });


/***/ }),

/***/ 38723:
/*!**************************************************!*\
  !*** ./src/app/components/radio/zh.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoRadioZhComponent": () => (/* binding */ NzDemoRadioZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 2228);
/* harmony import */ var _radiogroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radiogroup */ 52251);
/* harmony import */ var _radiogroup_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radiogroup-options */ 48575);
/* harmony import */ var _radiogroup_with_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radiogroup-with-name */ 51932);
/* harmony import */ var _solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solid */ 16203);
/* harmony import */ var _disable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disable */ 71309);
/* harmony import */ var _radiogroup_more__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radiogroup-more */ 24695);
/* harmony import */ var _radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radiobutton */ 61304);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./size */ 54905);

















class NzDemoRadioZhComponent {
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
NzDemoRadioZhComponent.ɵfac = function NzDemoRadioZhComponent_Factory(t) { return new (t || NzDemoRadioZhComponent)(); };
NzDemoRadioZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NzDemoRadioZhComponent, selectors: [["nz-demo-radio"]], viewQuery: function NzDemoRadioZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 364, vars: 34, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-radio-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-radio-demo-disable", "nzTitle", "\u4E0D\u53EF\u7528"], ["nzHref", "#components-radio-demo-radiogroup", "nzTitle", "\u5355\u9009\u7EC4\u5408"], ["nzHref", "#components-radio-demo-radiogroup-more", "nzTitle", "RadioGroup \u5782\u76F4"], ["nzHref", "#components-radio-demo-radiogroup-options", "nzTitle", "RadioGroup \u7EC4\u5408 - \u914D\u7F6E\u65B9\u5F0F"], ["nzHref", "#components-radio-demo-radiobutton", "nzTitle", "\u6309\u94AE\u6837\u5F0F"], ["nzHref", "#components-radio-demo-radiogroup-with-name", "nzTitle", "\u5355\u9009\u7EC4\u5408 - \u914D\u5408 name \u4F7F\u7528"], ["nzHref", "#components-radio-demo-size", "nzTitle", "\u5927\u5C0F"], ["nzHref", "#components-radio-demo-solid", "nzTitle", "\u586B\u5E95\u7684\u6309\u94AE\u6837\u5F0F"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-radio-basic", "nzGenerateCommand", "ng g ng-zorro-antd:radio-basic <name>", "nzComponentName", "NzDemoRadioBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u5355\u9009\u7EC4\u5408", "nzSelector", "nz-demo-radio-radiogroup", "nzGenerateCommand", "ng g ng-zorro-antd:radio-radiogroup <name>", "nzComponentName", "NzDemoRadioRadiogroupComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "RadioGroup \u7EC4\u5408 - \u914D\u7F6E\u65B9\u5F0F", "nzSelector", "nz-demo-radio-radiogroup-options", "nzGenerateCommand", "ng g ng-zorro-antd:radio-radiogroup-options <name>", "nzComponentName", "NzDemoRadioRadiogroupOptionsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5355\u9009\u7EC4\u5408 - \u914D\u5408 name \u4F7F\u7528", "nzSelector", "nz-demo-radio-radiogroup-with-name", "nzGenerateCommand", "ng g ng-zorro-antd:radio-radiogroup-with-name <name>", "nzComponentName", "NzDemoRadioRadiogroupWithNameComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u586B\u5E95\u7684\u6309\u94AE\u6837\u5F0F", "nzSelector", "nz-demo-radio-solid", "nzGenerateCommand", "ng g ng-zorro-antd:radio-solid <name>", "nzComponentName", "NzDemoRadioSolidComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E0D\u53EF\u7528", "nzSelector", "nz-demo-radio-disable", "nzGenerateCommand", "ng g ng-zorro-antd:radio-disable <name>", "nzComponentName", "NzDemoRadioDisableComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "RadioGroup \u5782\u76F4", "nzSelector", "nz-demo-radio-radiogroup-more", "nzGenerateCommand", "ng g ng-zorro-antd:radio-radiogroup-more <name>", "nzComponentName", "NzDemoRadioRadiogroupMoreComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6309\u94AE\u6837\u5F0F", "nzSelector", "nz-demo-radio-radiobutton", "nzGenerateCommand", "ng g ng-zorro-antd:radio-radiobutton <name>", "nzComponentName", "NzDemoRadioRadiobuttonComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5927\u5C0F", "nzSelector", "nz-demo-radio-size", "nzGenerateCommand", "ng g ng-zorro-antd:radio-size <name>", "nzComponentName", "NzDemoRadioSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-radio]-|-[nz-radio-button]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-radio]-|-[nz-radio-button]'", 1, "anchor"], ["id", "nz-radio-group"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-radio-group'", 1, "anchor"], ["id", "\u65B9\u6CD5"], ["onclick", "window.location.hash = '\u65B9\u6CD5'", 1, "anchor"], ["id", "[nz-radio]"], ["onclick", "window.location.hash = '[nz-radio]'", 1, "anchor"]], template: function NzDemoRadioZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("nzClick", function NzDemoRadioZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "section", 12)(14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "\u5355\u9009\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "\u5355\u9009\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "h2", 17)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "ul")(30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "\u7528\u4E8E\u5728\u591A\u4E2A\u5907\u9009\u9879\u4E2D\u9009\u4E2D\u5355\u4E2A\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "\u548C Select \u7684\u533A\u522B\u662F\uFF0CRadio \u6240\u6709\u9009\u9879\u9ED8\u8BA4\u53EF\u89C1\uFF0C\u65B9\u4FBF\u7528\u6237\u5728\u6BD4\u8F83\u4E2D\u9009\u62E9\uFF0C\u56E0\u6B64\u9009\u9879\u4E0D\u5B9C\u8FC7\u591A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "pre", 19)(35, "code")(36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, " NzRadioModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "'ng-zorro-antd/radio'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "h2")(53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NzDemoRadioZhComponent_Template_i_click_55_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 24)(57, "div", 25)(58, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "nz-demo-radio-basic", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "nz-demo-radio-radiogroup", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "\u4E00\u7EC4\u4E92\u65A5\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "nz-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, " \u914D\u5408\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](72, "nz-demo-radio-radiogroup-options", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, "\u901A\u8FC7\u914D\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, " \u53C2\u6570\u6765\u6E32\u67D3\u5355\u9009\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](80, "nz-demo-radio-radiogroup-with-name", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "\u53EF\u4EE5\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "nz-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86, " \u914D\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, "nzName");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, " \u53C2\u6570\uFF0C\u4E3A\u7EC4\u5408\u5185\u7684 input \u5143\u7D20\u8D4B\u4E88\u76F8\u540C\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, " \u5C5E\u6027\uFF0C\u4F7F\u6D4F\u89C8\u5668\u628A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "nz-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, " \u4E0B\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "nz-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, " \u771F\u6B63\u770B\u4F5C\u662F\u4E00\u7EC4\uFF08\u4F8B\u5982\u53EF\u4EE5\u901A\u8FC7\u65B9\u5411\u952E\u59CB\u7EC8");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "\u5728\u540C\u4E00\u7EC4\u5185");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101, "\u66F4\u6539\u9009\u9879\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](103, "nz-demo-radio-solid", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "\u5B9E\u8272\u586B\u5E95\u7684\u5355\u9009\u6309\u94AE\u6837\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "div", 25)(108, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](109, "nz-demo-radio-disable", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "p")(112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "nz-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, " \u4E0D\u53EF\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](116, "nz-demo-radio-radiogroup-more", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, "\u5782\u76F4\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121, "nz-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "\uFF0C\u914D\u5408\u66F4\u591A\u8F93\u5165\u6846\u9009\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](124, "nz-demo-radio-radiobutton", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "\u6309\u94AE\u6837\u5F0F\u7684\u5355\u9009\u7EC4\u5408\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](129, "nz-demo-radio-size", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132, "\u5927\u4E2D\u5C0F\u4E09\u79CD\u7EC4\u5408\uFF0C\u53EF\u4EE5\u548C\u8868\u5355\u8F93\u5165\u6846\u8FDB\u884C\u5BF9\u5E94\u914D\u5408\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](133, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "h2", 38)(135, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](138, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "h3", 40)(140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](141, "[nz-radio] | [nz-radio-button]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](143, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "table")(147, "thead")(148, "tr")(149, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](152, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](153, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](154, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](155, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](156, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "tbody")(158, "tr")(159, "td")(160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](161, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163, "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "td")(165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](166, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "td")(168, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](169, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "tr")(171, "td")(172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](173, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175, "\u8BBE\u5B9A disable \u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](176, "td")(177, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "td")(180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](181, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](182, "tr")(183, "td")(184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](185, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](187, "\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](188, "td")(189, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](190, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "td")(192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](193, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](194, "tr")(195, "td")(196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](197, "[nzValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](199, "\u8BBE\u7F6E value\uFF0C\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](201, "nz-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](202, " \u914D\u5408\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](203, "td")(204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](205, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](207, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](208, "tr")(209, "td")(210, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](211, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](213, "\u9009\u4E2D\u53D8\u5316\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](214, "td")(215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](216, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](218, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "h3", 43)(220, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](221, "nz-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](222, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](223, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](224, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](225, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](226, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](227, "\u5355\u9009\u6846\u7EC4\u5408\uFF0C\u7528\u4E8E\u5305\u88F9\u4E00\u7EC4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](229, "nz-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](230, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](231, "table")(232, "thead")(233, "tr")(234, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](235, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](236, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](237, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](238, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](239, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](240, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](241, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](242, "tbody")(243, "tr")(244, "td")(245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](246, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](248, "\u6307\u5B9A\u9009\u4E2D\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](250, "nz-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](251, " \u7684 value \u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](252, "td")(253, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](254, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](256, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](257, "tr")(258, "td")(259, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](260, "[nzName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](261, "td")(262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](263, "nz-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](264, " \u4E0B\u6240\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](266, "input[type=\"radio\"]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](267, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](268, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](269, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](270, " \u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](271, "td")(272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](273, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](275, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](276, "tr")(277, "td")(278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](279, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](281, "\u8BBE\u5B9A\u6240\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](282, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](283, "nz-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](284, " disable \u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](285, "td")(286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](287, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](288, "td")(289, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](290, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](291, "tr")(292, "td")(293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](294, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](296, "\u5927\u5C0F\uFF0C\u53EA\u5BF9\u6309\u94AE\u6837\u5F0F\u751F\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](297, "td")(298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](299, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](300, "td")(301, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](302, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](303, "tr")(304, "td")(305, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](306, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](308, "\u9009\u4E2D\u53D8\u5316\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](309, "td")(310, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](311, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](313, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](314, "tr")(315, "td")(316, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](317, "[nzButtonStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](319, "RadioButton \u7684\u98CE\u683C\u6837\u5F0F\uFF0C\u76EE\u524D\u6709\u63CF\u8FB9\u548C\u586B\u8272\u4E24\u79CD\u98CE\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](320, "td")(321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](322, "'outline' | 'solid'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](323, "td")(324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](325, "'outline'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](326, "h2", 46)(327, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](328, "\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](329, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](330, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](331, "h3", 48)(332, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](333, "[nz-radio]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](334, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](335, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](336, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](337, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](338, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](339, "\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](341, "ViewChild");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](342, " \u7B49\u5176\u4ED6\u65B9\u5F0F\u83B7\u53D6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](344, "NzRadioComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](345, " \u4F7F\u7528\u4EE5\u4E0B\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](346, "table")(347, "thead")(348, "tr")(349, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](350, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](351, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](352, "\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](353, "tbody")(354, "tr")(355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](356, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](358, "\u79FB\u9664\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](359, "tr")(360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](361, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](362, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](363, "\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-basic")("nzLink", "components-radio-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-radiogroup")("nzLink", "components-radio-demo-radiogroup")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/radiogroup.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-radiogroup-options")("nzLink", "components-radio-demo-radiogroup-options")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/radiogroup-options.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-radiogroup-with-name")("nzLink", "components-radio-demo-radiogroup-with-name")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/radiogroup-with-name.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-solid")("nzLink", "components-radio-demo-solid")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/solid.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-disable")("nzLink", "components-radio-demo-disable")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/disable.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-radiogroup-more")("nzLink", "components-radio-demo-radiogroup-more")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/radiogroup-more.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-radiobutton")("nzLink", "components-radio-demo-radiobutton")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/radiobutton.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-radio-demo-size")("nzLink", "components-radio-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/radio/demo/size.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoRadioBasicComponent, _radiogroup__WEBPACK_IMPORTED_MODULE_2__.NzDemoRadioRadiogroupComponent, _radiogroup_options__WEBPACK_IMPORTED_MODULE_3__.NzDemoRadioRadiogroupOptionsComponent, _radiogroup_with_name__WEBPACK_IMPORTED_MODULE_4__.NzDemoRadioRadiogroupWithNameComponent, _solid__WEBPACK_IMPORTED_MODULE_5__.NzDemoRadioSolidComponent, _disable__WEBPACK_IMPORTED_MODULE_6__.NzDemoRadioDisableComponent, _radiogroup_more__WEBPACK_IMPORTED_MODULE_7__.NzDemoRadioRadiogroupMoreComponent, _radiobutton__WEBPACK_IMPORTED_MODULE_8__.NzDemoRadioRadiobuttonComponent, _size__WEBPACK_IMPORTED_MODULE_9__.NzDemoRadioSizeComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_radio_index_module_ts.js.map