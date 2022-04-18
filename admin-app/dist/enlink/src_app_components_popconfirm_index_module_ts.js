"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_popconfirm_index_module_ts"],{

/***/ 55805:
/*!************************************************!*\
  !*** ./src/app/components/popconfirm/basic.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoPopconfirmBasicComponent": () => (/* binding */ NzDemoPopconfirmBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 84307);



class NzDemoPopconfirmBasicComponent {
    constructor(nzMessageService) {
        this.nzMessageService = nzMessageService;
    }
    cancel() {
        this.nzMessageService.info('click cancel');
    }
    confirm() {
        this.nzMessageService.info('click confirm');
    }
}
NzDemoPopconfirmBasicComponent.ɵfac = function NzDemoPopconfirmBasicComponent_Factory(t) { return new (t || NzDemoPopconfirmBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService)); };
NzDemoPopconfirmBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPopconfirmBasicComponent, selectors: [["nz-demo-popconfirm-basic"]], decls: 2, vars: 0, consts: [["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "bottom", 3, "nzOnConfirm", "nzOnCancel"]], template: function NzDemoPopconfirmBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmBasicComponent_Template_a_nzOnConfirm_0_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmBasicComponent_Template_a_nzOnCancel_0_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_2__.NzPopconfirmDirective], encapsulation: 2 });


/***/ }),

/***/ 93101:
/*!******************************************************!*\
  !*** ./src/app/components/popconfirm/custom-icon.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoPopconfirmCustomIconComponent": () => (/* binding */ NzDemoPopconfirmCustomIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 84307);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);




function NzDemoPopconfirmCustomIconComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
} }
class NzDemoPopconfirmCustomIconComponent {
}
NzDemoPopconfirmCustomIconComponent.ɵfac = function NzDemoPopconfirmCustomIconComponent_Factory(t) { return new (t || NzDemoPopconfirmCustomIconComponent)(); };
NzDemoPopconfirmCustomIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPopconfirmCustomIconComponent, selectors: [["nz-demo-popconfirm-custom-icon"]], decls: 4, vars: 1, consts: [["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure?", 3, "nzIcon"], ["iconTpl", ""], ["nz-icon", "", "nzType", "question-circle-o", 2, "color", "red"]], template: function NzDemoPopconfirmCustomIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoPopconfirmCustomIconComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIcon", _r0);
    } }, directives: [ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_1__.NzPopconfirmDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 54787:
/*!**********************************************************!*\
  !*** ./src/app/components/popconfirm/dynamic-trigger.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoPopconfirmDynamicTriggerComponent": () => (/* binding */ NzDemoPopconfirmDynamicTriggerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 84307);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);





class NzDemoPopconfirmDynamicTriggerComponent {
    constructor(nzMessageService) {
        this.nzMessageService = nzMessageService;
        this.switchValue = false;
    }
    cancel() {
        this.nzMessageService.info('click cancel');
    }
    confirm() {
        this.nzMessageService.info('click confirm');
    }
}
NzDemoPopconfirmDynamicTriggerComponent.ɵfac = function NzDemoPopconfirmDynamicTriggerComponent_Factory(t) { return new (t || NzDemoPopconfirmDynamicTriggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService)); };
NzDemoPopconfirmDynamicTriggerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPopconfirmDynamicTriggerComponent, selectors: [["nz-demo-popconfirm-dynamic-trigger"]], decls: 6, vars: 2, consts: [["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", 3, "nzCondition", "nzOnConfirm", "nzOnCancel"], [3, "ngModel", "ngModelChange"]], template: function NzDemoPopconfirmDynamicTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmDynamicTriggerComponent_Template_a_nzOnConfirm_0_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmDynamicTriggerComponent_Template_a_nzOnCancel_0_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete a task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br")(3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Whether directly execute: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-switch", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoPopconfirmDynamicTriggerComponent_Template_nz_switch_ngModelChange_5_listener($event) { return ctx.switchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCondition", ctx.switchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.switchValue);
    } }, directives: [ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_2__.NzPopconfirmDirective, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 38721:
/*!*******************************************************!*\
  !*** ./src/app/components/popconfirm/en.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoPopconfirmEnComponent": () => (/* binding */ NzDemoPopconfirmEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 55805);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placement */ 91329);
/* harmony import */ var _custom_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-icon */ 93101);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale */ 50570);
/* harmony import */ var _dynamic_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-trigger */ 54787);














class NzDemoPopconfirmEnComponent {
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
NzDemoPopconfirmEnComponent.ɵfac = function NzDemoPopconfirmEnComponent_Factory(t) { return new (t || NzDemoPopconfirmEnComponent)(); };
NzDemoPopconfirmEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NzDemoPopconfirmEnComponent, selectors: [["nz-demo-popconfirm"]], viewQuery: function NzDemoPopconfirmEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 290, vars: 22, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-popconfirm-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-popconfirm-demo-locale", "nzTitle", "Locale text"], ["nzHref", "#components-popconfirm-demo-placement", "nzTitle", "Placement"], ["nzHref", "#components-popconfirm-demo-dynamic-trigger", "nzTitle", "Conditional trigger"], ["nzHref", "#components-popconfirm-demo-custom-icon", "nzTitle", "Customize icon"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-popconfirm-basic", "nzGenerateCommand", "ng g ng-zorro-antd:popconfirm-basic <name>", "nzComponentName", "NzDemoPopconfirmBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Placement", "nzSelector", "nz-demo-popconfirm-placement", "nzGenerateCommand", "ng g ng-zorro-antd:popconfirm-placement <name>", "nzComponentName", "NzDemoPopconfirmPlacementComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Customize icon", "nzSelector", "nz-demo-popconfirm-custom-icon", "nzGenerateCommand", "ng g ng-zorro-antd:popconfirm-custom-icon <name>", "nzComponentName", "NzDemoPopconfirmCustomIconComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Locale text", "nzSelector", "nz-demo-popconfirm-locale", "nzGenerateCommand", "ng g ng-zorro-antd:popconfirm-locale <name>", "nzComponentName", "NzDemoPopconfirmLocaleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Conditional trigger", "nzSelector", "nz-demo-popconfirm-dynamic-trigger", "nzGenerateCommand", "ng g ng-zorro-antd:popconfirm-dynamic-trigger <name>", "nzComponentName", "NzDemoPopconfirmDynamicTriggerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-popconfirm]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-popconfirm]'", 1, "anchor"], ["href", "/components/tooltip/en#api"], ["id", "note"], ["onclick", "window.location.hash = 'note'", 1, "anchor"]], template: function NzDemoPopconfirmEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzClick", function NzDemoPopconfirmEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "section", 8)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Popconfirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "span", 9)(13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "A simple and compact confirmation dialog of an action.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h2", 13)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "A simple and compact dialog used for asking for user confirmation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "The difference with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " modal dialog is that it's more lightweight than the static popped full-screen confirm modal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "pre", 15)(32, "code")(33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " NzPopconfirmModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "'ng-zorro-antd/popconfirm'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "h2")(50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NzDemoPopconfirmEnComponent_Template_i_click_52_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 20)(54, "div", 21)(55, "nz-code-box", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "nz-demo-popconfirm-basic", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "The basic example.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "nz-demo-popconfirm-placement", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "There are 12 placement options available.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "nz-demo-popconfirm-custom-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, " to customize the icon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 21)(74, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "nz-demo-popconfirm-locale", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "okText");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "cancelText");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, " props to customise the button's labels.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "nz-demo-popconfirm-dynamic-trigger", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Make it pop up under some conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "h2", 30)(92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "h3", 32)(97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "[nz-popconfirm]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "table")(104, "thead")(105, "tr")(106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "Param");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "Default value");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "tbody")(115, "tr")(116, "td")(117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "[nzPopconfirmTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Title of the confirmation box");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "td")(122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "tr")(127, "td")(128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "[nzPopconfirmTrigger]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "Popconfirm trigger mode. If set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, " it would not be triggered");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "td")(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "'click' | 'focus' | 'hover' | null");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "td")(139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "'hover'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "tr")(142, "td")(143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, "[nzPopconfirmPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146, "The position of the popconfirm relative to the target");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "td")(148, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, "'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "td")(151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "tr")(154, "td")(155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](156, "[nzPopconfirmOrigin]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](158, "Origin of the popconfirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "td")(160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](161, "ElementRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](163, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "table")(165, "thead")(166, "tr")(167, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](168, "Param");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](170, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](172, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](174, "Default value");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "tbody")(176, "tr")(177, "td")(178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](179, "[nzCancelText]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181, "Text of the Cancel button");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "td")(183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](184, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](185, "td")(186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](187, "'Cancel'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "tr")(189, "td")(190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](191, "[nzOkText]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](193, "Text of the Confirm button");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "td")(195, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](196, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](197, "td")(198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](199, "'Confirm'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](200, "tr")(201, "td")(202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](203, "[nzOkType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](205, "Button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](207, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](208, " of the Confirm button");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](209, "td")(210, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](211, "'primary' | 'ghost' | 'dashed' | 'danger' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](212, "td")(213, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](214, "'primary'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](215, "tr")(216, "td")(217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](218, "[nzCondition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](220, "Whether to directly emit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](222, "onConfirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](223, " without showing Popconfirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](224, "td")(225, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](226, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](227, "td")(228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](229, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](230, "tr")(231, "td")(232, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](233, "[nzIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](234, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](235, "Customize icon of confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](236, "td")(237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](238, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](240, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](241, "tr")(242, "td")(243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](244, "(nzOnCancel)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](246, "Callback of cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](247, "td")(248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](249, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](251, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](252, "tr")(253, "td")(254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](255, "(nzOnConfirm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](257, "Callback of confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](258, "td")(259, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](260, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](262, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](263, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](264, "Consult ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](265, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](266, "Tooltip's documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](267, " to find more APIs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](268, "h2", 36)(269, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](270, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](271, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](272, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](273, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](274, "Please ensure that the child node of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](276, "nz-popconfirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](277, " accepts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](279, "onMouseEnter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](280, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](282, "onMouseLeave");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](283, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](285, "onFocus");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](286, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](288, "onClick");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](289, " events.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-popconfirm-demo-basic")("nzLink", "components-popconfirm-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-popconfirm-demo-placement")("nzLink", "components-popconfirm-demo-placement")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/demo/placement.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-popconfirm-demo-custom-icon")("nzLink", "components-popconfirm-demo-custom-icon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/demo/custom-icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-popconfirm-demo-locale")("nzLink", "components-popconfirm-demo-locale")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/demo/locale.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-popconfirm-demo-dynamic-trigger")("nzLink", "components-popconfirm-demo-dynamic-trigger")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/demo/dynamic-trigger.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoPopconfirmBasicComponent, _placement__WEBPACK_IMPORTED_MODULE_2__.NzDemoPopconfirmPlacementComponent, _custom_icon__WEBPACK_IMPORTED_MODULE_3__.NzDemoPopconfirmCustomIconComponent, _locale__WEBPACK_IMPORTED_MODULE_4__.NzDemoPopconfirmLocaleComponent, _dynamic_trigger__WEBPACK_IMPORTED_MODULE_5__.NzDemoPopconfirmDynamicTriggerComponent], encapsulation: 2 });


/***/ }),

/***/ 7393:
/*!*******************************************************!*\
  !*** ./src/app/components/popconfirm/index.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoPopconfirmModule": () => (/* binding */ NzDemoPopconfirmModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 64574);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 55805);
/* harmony import */ var _custom_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-icon */ 93101);
/* harmony import */ var _dynamic_trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-trigger */ 54787);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale */ 50570);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placement */ 91329);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zh.component */ 16494);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./en.component */ 38721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 84307);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
















class NzDemoPopconfirmModule {
}
NzDemoPopconfirmModule.ɵfac = function NzDemoPopconfirmModule_Factory(t) { return new (t || NzDemoPopconfirmModule)(); };
NzDemoPopconfirmModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: NzDemoPopconfirmModule });
NzDemoPopconfirmModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoPopconfirmEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoPopconfirmZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NzDemoPopconfirmModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoPopconfirmBasicComponent,
        _custom_icon__WEBPACK_IMPORTED_MODULE_3__.NzDemoPopconfirmCustomIconComponent,
        _dynamic_trigger__WEBPACK_IMPORTED_MODULE_4__.NzDemoPopconfirmDynamicTriggerComponent,
        _locale__WEBPACK_IMPORTED_MODULE_5__.NzDemoPopconfirmLocaleComponent,
        _placement__WEBPACK_IMPORTED_MODULE_6__.NzDemoPopconfirmPlacementComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoPopconfirmZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoPopconfirmEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_11__.NzPopconfirmModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_14__.NzSwitchModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 50570:
/*!*************************************************!*\
  !*** ./src/app/components/popconfirm/locale.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoPopconfirmLocaleComponent": () => (/* binding */ NzDemoPopconfirmLocaleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 84307);



class NzDemoPopconfirmLocaleComponent {
    constructor(nzMessageService) {
        this.nzMessageService = nzMessageService;
    }
    cancel() {
        this.nzMessageService.info('click cancel');
    }
    confirm() {
        this.nzMessageService.info('click confirm');
    }
}
NzDemoPopconfirmLocaleComponent.ɵfac = function NzDemoPopconfirmLocaleComponent_Factory(t) { return new (t || NzDemoPopconfirmLocaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService)); };
NzDemoPopconfirmLocaleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPopconfirmLocaleComponent, selectors: [["nz-demo-popconfirm-locale"]], decls: 2, vars: 0, consts: [["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure?", "nzOkText", "ok", "nzCancelText", "cancel", 3, "nzOnConfirm", "nzOnCancel"]], template: function NzDemoPopconfirmLocaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmLocaleComponent_Template_a_nzOnConfirm_0_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmLocaleComponent_Template_a_nzOnCancel_0_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_2__.NzPopconfirmDirective], encapsulation: 2 });


/***/ }),

/***/ 64574:
/*!*************************************************!*\
  !*** ./src/app/components/popconfirm/module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 84307);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);




const moduleList = [ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_0__.NzPopconfirmModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchModule];


/***/ }),

/***/ 91329:
/*!****************************************************!*\
  !*** ./src/app/components/popconfirm/placement.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoPopconfirmPlacementComponent": () => (/* binding */ NzDemoPopconfirmPlacementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 84307);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);






class NzDemoPopconfirmPlacementComponent {
    constructor(nzMessageService) {
        this.nzMessageService = nzMessageService;
    }
    cancel() {
        this.nzMessageService.info('click cancel');
    }
    confirm() {
        this.nzMessageService.info('click confirm');
    }
}
NzDemoPopconfirmPlacementComponent.ɵfac = function NzDemoPopconfirmPlacementComponent_Factory(t) { return new (t || NzDemoPopconfirmPlacementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService)); };
NzDemoPopconfirmPlacementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPopconfirmPlacementComponent, selectors: [["nz-demo-popconfirm-placement"]], decls: 28, vars: 0, consts: [[2, "margin-left", "60px"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "topLeft", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "top", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "topRight", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"], [2, "width", "60px", "float", "left"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "leftTop", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "left", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "leftBottom", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"], [2, "width", "60px", "margin-left", "252px"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "rightTop", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "right", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "rightBottom", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"], [2, "margin-left", "60px", "clear", "both"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "bottomLeft", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "bottom", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this task?", "nzPopconfirmPlacement", "bottomRight", "nz-button", "", 3, "nzOnConfirm", "nzOnCancel"]], template: function NzDemoPopconfirmPlacementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_1_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_1_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " TL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_3_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_3_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_5_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_5_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " TR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_8_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_8_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " LT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_10_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_10_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_12_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_12_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " LB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_15_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_15_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " RT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_17_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_17_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_19_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_19_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " RB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_22_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_22_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " BL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_24_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_24_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnConfirm_26_listener() { return ctx.confirm(); })("nzOnCancel", function NzDemoPopconfirmPlacementComponent_Template_button_nzOnCancel_26_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " BR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_4__.NzPopconfirmDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["button[_ngcontent-%COMP%] {\n        margin-right: 8px;\n        margin-bottom: 8px;\n        width: 70px;\n        text-align: center;\n        padding: 0;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsVUFBVTtNQUNaIiwiZmlsZSI6InBsYWNlbWVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 16494:
/*!*******************************************************!*\
  !*** ./src/app/components/popconfirm/zh.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoPopconfirmZhComponent": () => (/* binding */ NzDemoPopconfirmZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 55805);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placement */ 91329);
/* harmony import */ var _custom_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-icon */ 93101);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale */ 50570);
/* harmony import */ var _dynamic_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-trigger */ 54787);














class NzDemoPopconfirmZhComponent {
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
NzDemoPopconfirmZhComponent.ɵfac = function NzDemoPopconfirmZhComponent_Factory(t) { return new (t || NzDemoPopconfirmZhComponent)(); };
NzDemoPopconfirmZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NzDemoPopconfirmZhComponent, selectors: [["nz-demo-popconfirm"]], viewQuery: function NzDemoPopconfirmZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 288, vars: 22, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-popconfirm-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-popconfirm-demo-locale", "nzTitle", "\u56FD\u9645\u5316"], ["nzHref", "#components-popconfirm-demo-placement", "nzTitle", "\u4F4D\u7F6E"], ["nzHref", "#components-popconfirm-demo-dynamic-trigger", "nzTitle", "\u6761\u4EF6\u89E6\u53D1"], ["nzHref", "#components-popconfirm-demo-custom-icon", "nzTitle", "\u81EA\u5B9A\u4E49 icon \u56FE\u6807"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-popconfirm-basic", "nzGenerateCommand", "ng g ng-zorro-antd:popconfirm-basic <name>", "nzComponentName", "NzDemoPopconfirmBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u4F4D\u7F6E", "nzSelector", "nz-demo-popconfirm-placement", "nzGenerateCommand", "ng g ng-zorro-antd:popconfirm-placement <name>", "nzComponentName", "NzDemoPopconfirmPlacementComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49 icon \u56FE\u6807", "nzSelector", "nz-demo-popconfirm-custom-icon", "nzGenerateCommand", "ng g ng-zorro-antd:popconfirm-custom-icon <name>", "nzComponentName", "NzDemoPopconfirmCustomIconComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u56FD\u9645\u5316", "nzSelector", "nz-demo-popconfirm-locale", "nzGenerateCommand", "ng g ng-zorro-antd:popconfirm-locale <name>", "nzComponentName", "NzDemoPopconfirmLocaleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6761\u4EF6\u89E6\u53D1", "nzSelector", "nz-demo-popconfirm-dynamic-trigger", "nzGenerateCommand", "ng g ng-zorro-antd:popconfirm-dynamic-trigger <name>", "nzComponentName", "NzDemoPopconfirmDynamicTriggerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-popconfirm]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-popconfirm]'", 1, "anchor"], ["href", "/components/tooltip/zh#api"], ["id", "\u6CE8\u610F"], ["onclick", "window.location.hash = '\u6CE8\u610F'", 1, "anchor"]], template: function NzDemoPopconfirmZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzClick", function NzDemoPopconfirmZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "section", 8)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Popconfirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u6C14\u6CE1\u786E\u8BA4\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\u70B9\u51FB\u5143\u7D20\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5F0F\u7684\u786E\u8BA4\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "h2", 13)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\u76EE\u6807\u5143\u7D20\u7684\u64CD\u4F5C\u9700\u8981\u7528\u6237\u8FDB\u4E00\u6B65\u7684\u786E\u8BA4\u65F6\uFF0C\u5728\u76EE\u6807\u5143\u7D20\u9644\u8FD1\u5F39\u51FA\u6D6E\u5C42\u63D0\u793A\uFF0C\u8BE2\u95EE\u7528\u6237\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " \u5F39\u51FA\u7684\u5168\u5C4F\u5C45\u4E2D\u6A21\u6001\u5BF9\u8BDD\u6846\u76F8\u6BD4\uFF0C\u4EA4\u4E92\u5F62\u5F0F\u66F4\u8F7B\u91CF\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "pre", 15)(33, "code")(34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " NzPopconfirmModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "'ng-zorro-antd/popconfirm'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "h2")(51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NzDemoPopconfirmZhComponent_Template_i_click_53_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 20)(55, "div", 21)(56, "nz-code-box", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "nz-demo-popconfirm-basic", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "nz-demo-popconfirm-placement", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "\u4F4D\u7F6E\u6709\u5341\u4E8C\u4E2A\u65B9\u5411\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "nz-demo-popconfirm-custom-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, " \u81EA\u5B9A\u4E49\u63D0\u793A\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 21)(75, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "nz-demo-popconfirm-locale", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "okText");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "cancelText");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, " \u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](87, "nz-demo-popconfirm-dynamic-trigger", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "\u53EF\u4EE5\u5224\u65AD\u662F\u5426\u9700\u8981\u5F39\u51FA\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "h2", 30)(93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "h3", 32)(98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "[nz-popconfirm]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "table")(105, "thead")(106, "tr")(107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "tbody")(116, "tr")(117, "td")(118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "[nzPopconfirmTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "\u786E\u8BA4\u6846\u7684\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "td")(123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "tr")(128, "td")(129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "[nzPopconfirmTrigger]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "\u89E6\u53D1\u884C\u4E3A\uFF0C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, " \u65F6\u4E0D\u54CD\u5E94\u5149\u6807\u4E8B\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "td")(137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](138, "'click' | 'focus' | 'hover' | null");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "td")(140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, "'hover'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "tr")(143, "td")(144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](145, "[nzPopconfirmPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147, "\u6C14\u6CE1\u6846\u4F4D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "td")(149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](150, "'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "td")(152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](153, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "tr")(155, "td")(156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](157, "[nzPopconfirmOrigin]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](159, "\u6C14\u6CE1\u6846\u5B9A\u4F4D\u5143\u7D20");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "td")(161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162, "ElementRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](164, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "table")(166, "thead")(167, "tr")(168, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](171, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](175, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "tbody")(177, "tr")(178, "td")(179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180, "[nzCancelText]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](182, "\u53D6\u6D88\u6309\u94AE\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](183, "td")(184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](185, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](186, "td")(187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](188, "'\u53D6\u6D88'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](189, "tr")(190, "td")(191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](192, "[nzOkText]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](194, "\u786E\u8BA4\u6309\u94AE\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](195, "td")(196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](197, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "td")(199, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](200, "'\u786E\u5B9A'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](201, "tr")(202, "td")(203, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](204, "[nzOkType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](206, "\u786E\u8BA4\u6309\u94AE\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](207, "td")(208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](209, "'primary' | 'ghost' | 'dashed' | 'danger' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](210, "td")(211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](212, "'primary'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](213, "tr")(214, "td")(215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](216, "[nzCondition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](218, "\u662F\u5426\u76F4\u63A5\u89E6\u53D1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](219, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](220, "nzOnConfirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](221, " \u800C\u4E0D\u5F39\u51FA\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](222, "td")(223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](224, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](225, "td")(226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](227, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](228, "tr")(229, "td")(230, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](231, "[nzIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](233, "\u81EA\u5B9A\u4E49\u5F39\u51FA\u6846\u7684 icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](234, "td")(235, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](236, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](238, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](239, "tr")(240, "td")(241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](242, "(nzOnCancel)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](244, "\u70B9\u51FB\u53D6\u6D88\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](245, "td")(246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](247, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](249, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](250, "tr")(251, "td")(252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](253, "(nzOnConfirm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](255, "\u70B9\u51FB\u786E\u8BA4\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](256, "td")(257, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](258, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](260, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](261, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](262, "\u66F4\u591A\u5C5E\u6027\u8BF7\u53C2\u8003 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](263, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](264, "Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](265, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](266, "h2", 36)(267, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](268, "\u6CE8\u610F");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](269, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](270, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](271, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](272, "\u8BF7\u786E\u4FDD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](274, "nz-popconfirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](275, " \u7684\u5B50\u5143\u7D20\u80FD\u63A5\u53D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](277, "onMouseEnter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](278, "\u3001");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](279, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](280, "onMouseLeave");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](281, "\u3001");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](282, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](283, "onFocus");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](284, "\u3001");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](286, "onClick");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](287, " \u4E8B\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-popconfirm-demo-basic")("nzLink", "components-popconfirm-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-popconfirm-demo-placement")("nzLink", "components-popconfirm-demo-placement")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/demo/placement.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-popconfirm-demo-custom-icon")("nzLink", "components-popconfirm-demo-custom-icon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/demo/custom-icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-popconfirm-demo-locale")("nzLink", "components-popconfirm-demo-locale")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/demo/locale.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-popconfirm-demo-dynamic-trigger")("nzLink", "components-popconfirm-demo-dynamic-trigger")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/popconfirm/demo/dynamic-trigger.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoPopconfirmBasicComponent, _placement__WEBPACK_IMPORTED_MODULE_2__.NzDemoPopconfirmPlacementComponent, _custom_icon__WEBPACK_IMPORTED_MODULE_3__.NzDemoPopconfirmCustomIconComponent, _locale__WEBPACK_IMPORTED_MODULE_4__.NzDemoPopconfirmLocaleComponent, _dynamic_trigger__WEBPACK_IMPORTED_MODULE_5__.NzDemoPopconfirmDynamicTriggerComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_popconfirm_index_module_ts.js.map