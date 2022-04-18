"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_progress_index_module_ts"],{

/***/ 82146:
/*!*******************************************************!*\
  !*** ./src/app/components/progress/circle-dynamic.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressCircleDynamicComponent": () => (/* binding */ NzDemoProgressCircleDynamicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);






class NzDemoProgressCircleDynamicComponent {
    constructor() {
        this.percent = 0;
    }
    increase() {
        this.percent = this.percent + 10;
        if (this.percent > 100) {
            this.percent = 100;
        }
    }
    decline() {
        this.percent = this.percent - 10;
        if (this.percent < 0) {
            this.percent = 0;
        }
    }
}
NzDemoProgressCircleDynamicComponent.ɵfac = function NzDemoProgressCircleDynamicComponent_Factory(t) { return new (t || NzDemoProgressCircleDynamicComponent)(); };
NzDemoProgressCircleDynamicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressCircleDynamicComponent, selectors: [["nz-demo-progress-circle-dynamic"]], decls: 6, vars: 1, consts: [["nzType", "circle", 3, "nzPercent"], ["nz-button", "", 3, "click"], ["nz-icon", "", "nzType", "minus"], ["nz-icon", "", "nzType", "plus"]], template: function NzDemoProgressCircleDynamicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-button-group")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoProgressCircleDynamicComponent_Template_button_click_2_listener() { return ctx.decline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoProgressCircleDynamicComponent_Template_button_click_4_listener() { return ctx.increase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx.percent);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective], styles: ["nz-progress[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmNsZS1keW5hbWljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGlCQUFpQjtNQUNuQiIsImZpbGUiOiJjaXJjbGUtZHluYW1pYy50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotcHJvZ3Jlc3Mge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 64087:
/*!****************************************************!*\
  !*** ./src/app/components/progress/circle-mini.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressCircleMiniComponent": () => (/* binding */ NzDemoProgressCircleMiniComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);


class NzDemoProgressCircleMiniComponent {
}
NzDemoProgressCircleMiniComponent.ɵfac = function NzDemoProgressCircleMiniComponent_Factory(t) { return new (t || NzDemoProgressCircleMiniComponent)(); };
NzDemoProgressCircleMiniComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressCircleMiniComponent, selectors: [["nz-demo-progress-circle-mini"]], decls: 3, vars: 6, consts: [["nzType", "circle", 3, "nzPercent", "nzWidth"], ["nzType", "circle", "nzStatus", "exception", 3, "nzPercent", "nzWidth"]], template: function NzDemoProgressCircleMiniComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 75)("nzWidth", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 70)("nzWidth", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100)("nzWidth", 80);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent], styles: ["nz-progress[_ngcontent-%COMP%] {\n        margin-right: 8px;\n        margin-bottom: 8px;\n        display: inline-block;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmNsZS1taW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIscUJBQXFCO01BQ3ZCIiwiZmlsZSI6ImNpcmNsZS1taW5pLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1wcm9ncmVzcyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 14139:
/*!***********************************************!*\
  !*** ./src/app/components/progress/circle.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressCircleComponent": () => (/* binding */ NzDemoProgressCircleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);


class NzDemoProgressCircleComponent {
}
NzDemoProgressCircleComponent.ɵfac = function NzDemoProgressCircleComponent_Factory(t) { return new (t || NzDemoProgressCircleComponent)(); };
NzDemoProgressCircleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressCircleComponent, selectors: [["nz-demo-progress-circle"]], decls: 3, vars: 3, consts: [["nzType", "circle", 3, "nzPercent"], ["nzType", "circle", "nzStatus", "exception", 3, "nzPercent"]], template: function NzDemoProgressCircleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent], styles: ["nz-progress[_ngcontent-%COMP%] {\n        margin-right: 8px;\n        margin-bottom: 8px;\n        display: inline-block;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmNsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtNQUN2QiIsImZpbGUiOiJjaXJjbGUudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXByb2dyZXNzIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 99455:
/*!**************************************************!*\
  !*** ./src/app/components/progress/dashboard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressDashboardComponent": () => (/* binding */ NzDemoProgressDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);


class NzDemoProgressDashboardComponent {
}
NzDemoProgressDashboardComponent.ɵfac = function NzDemoProgressDashboardComponent_Factory(t) { return new (t || NzDemoProgressDashboardComponent)(); };
NzDemoProgressDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressDashboardComponent, selectors: [["nz-demo-progress-dashboard"]], decls: 1, vars: 1, consts: [["nzType", "dashboard", 3, "nzPercent"]], template: function NzDemoProgressDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 75);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent], encapsulation: 2 });


/***/ }),

/***/ 96105:
/*!************************************************!*\
  !*** ./src/app/components/progress/dynamic.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressDynamicComponent": () => (/* binding */ NzDemoProgressDynamicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);






class NzDemoProgressDynamicComponent {
    constructor() {
        this.percent = 0;
    }
    increase() {
        this.percent = this.percent + 10;
        if (this.percent > 100) {
            this.percent = 100;
        }
    }
    decline() {
        this.percent = this.percent - 10;
        if (this.percent < 0) {
            this.percent = 0;
        }
    }
}
NzDemoProgressDynamicComponent.ɵfac = function NzDemoProgressDynamicComponent_Factory(t) { return new (t || NzDemoProgressDynamicComponent)(); };
NzDemoProgressDynamicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressDynamicComponent, selectors: [["nz-demo-progress-dynamic"]], decls: 6, vars: 1, consts: [[3, "nzPercent"], ["nz-button", "", 3, "click"], ["nz-icon", "", "nzType", "minus"], ["nz-icon", "", "nzType", "plus"]], template: function NzDemoProgressDynamicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-button-group")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoProgressDynamicComponent_Template_button_click_2_listener() { return ctx.decline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoProgressDynamicComponent_Template_button_click_4_listener() { return ctx.increase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx.percent);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 300:
/*!*****************************************************!*\
  !*** ./src/app/components/progress/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressEnComponent": () => (/* binding */ NzDemoProgressEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ 34411);
/* harmony import */ var _line_mini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-mini */ 64443);
/* harmony import */ var _circle_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle-dynamic */ 82146);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ 91806);
/* harmony import */ var _segment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./segment */ 32417);
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gradient */ 73669);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./circle */ 14139);
/* harmony import */ var _circle_mini__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./circle-mini */ 64087);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamic */ 96105);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard */ 99455);
/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./round */ 21143);
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./step */ 18231);





















class NzDemoProgressEnComponent {
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
NzDemoProgressEnComponent.ɵfac = function NzDemoProgressEnComponent_Factory(t) { return new (t || NzDemoProgressEnComponent)(); };
NzDemoProgressEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: NzDemoProgressEnComponent, selectors: [["nz-demo-progress"]], viewQuery: function NzDemoProgressEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 435, vars: 43, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-progress-demo-line", "nzTitle", "Progress bar"], ["nzHref", "#components-progress-demo-circle", "nzTitle", "Circular progress bar"], ["nzHref", "#components-progress-demo-line-mini", "nzTitle", "Mini size progress bar"], ["nzHref", "#components-progress-demo-circle-mini", "nzTitle", "Mini size circular progress bar"], ["nzHref", "#components-progress-demo-circle-dynamic", "nzTitle", "Dynamic circular progress bar"], ["nzHref", "#components-progress-demo-dynamic", "nzTitle", "Dynamic"], ["nzHref", "#components-progress-demo-format", "nzTitle", "Custom text format"], ["nzHref", "#components-progress-demo-dashboard", "nzTitle", "Dashboard"], ["nzHref", "#components-progress-demo-segment", "nzTitle", "Progress bar with success segment"], ["nzHref", "#components-progress-demo-round", "nzTitle", "Square linecaps"], ["nzHref", "#components-progress-demo-gradient", "nzTitle", "Custom line gradient"], ["nzHref", "#components-progress-demo-step", "nzTitle", "Progress bar with steps"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Progress bar", "nzSelector", "nz-demo-progress-line", "nzGenerateCommand", "ng g ng-zorro-antd:progress-line <name>", "nzComponentName", "NzDemoProgressLineComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Mini size progress bar", "nzSelector", "nz-demo-progress-line-mini", "nzGenerateCommand", "ng g ng-zorro-antd:progress-line-mini <name>", "nzComponentName", "NzDemoProgressLineMiniComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Dynamic circular progress bar", "nzSelector", "nz-demo-progress-circle-dynamic", "nzGenerateCommand", "ng g ng-zorro-antd:progress-circle-dynamic <name>", "nzComponentName", "NzDemoProgressCircleDynamicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom text format", "nzSelector", "nz-demo-progress-format", "nzGenerateCommand", "ng g ng-zorro-antd:progress-format <name>", "nzComponentName", "NzDemoProgressFormatComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Progress bar with success segment", "nzSelector", "nz-demo-progress-segment", "nzGenerateCommand", "ng g ng-zorro-antd:progress-segment <name>", "nzComponentName", "NzDemoProgressSegmentComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom line gradient", "nzSelector", "nz-demo-progress-gradient", "nzGenerateCommand", "ng g ng-zorro-antd:progress-gradient <name>", "nzComponentName", "NzDemoProgressGradientComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Circular progress bar", "nzSelector", "nz-demo-progress-circle", "nzGenerateCommand", "ng g ng-zorro-antd:progress-circle <name>", "nzComponentName", "NzDemoProgressCircleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Mini size circular progress bar", "nzSelector", "nz-demo-progress-circle-mini", "nzGenerateCommand", "ng g ng-zorro-antd:progress-circle-mini <name>", "nzComponentName", "NzDemoProgressCircleMiniComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Dynamic", "nzSelector", "nz-demo-progress-dynamic", "nzGenerateCommand", "ng g ng-zorro-antd:progress-dynamic <name>", "nzComponentName", "NzDemoProgressDynamicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Dashboard", "nzSelector", "nz-demo-progress-dashboard", "nzGenerateCommand", "ng g ng-zorro-antd:progress-dashboard <name>", "nzComponentName", "NzDemoProgressDashboardComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Square linecaps", "nzSelector", "nz-demo-progress-round", "nzGenerateCommand", "ng g ng-zorro-antd:progress-round <name>", "nzComponentName", "NzDemoProgressRoundComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Progress bar with steps", "nzSelector", "nz-demo-progress-step", "nzGenerateCommand", "ng g ng-zorro-antd:progress-step <name>", "nzComponentName", "NzDemoProgressStepComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-progress"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-progress'", 1, "anchor"], ["id", "<code>nztype=\"line\"</code>"], ["onclick", "window.location.hash = '<code>nztype=\"line\"</code>'", 1, "anchor"], ["id", "<code>nztype=\"circle\"</code>"], ["onclick", "window.location.hash = '<code>nztype=\"circle\"</code>'", 1, "anchor"], ["id", "<code>nztype=\"dashboard\"</code>"], ["onclick", "window.location.hash = '<code>nztype=\"dashboard\"</code>'", 1, "anchor"]], template: function NzDemoProgressEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzClick", function NzDemoProgressEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13)(15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "section", 15)(17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "span", 16)(20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Display the current progress of an operation flow.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "h2", 20)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "If it will take a long time to complete an operation, you can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, " to show the current progress and status.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "ul")(37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "When you need to display the completion percentage of an operation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "pre", 22)(42, "code")(43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, " NzProgressModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, "'ng-zorro-antd/progress'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "h2")(60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NzDemoProgressEnComponent_Template_i_click_62_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "div", 27)(64, "div", 28)(65, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](66, "nz-demo-progress-line", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, "A standard progress bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](71, "nz-demo-progress-line-mini", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, "Appropriate for a narrow area.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](76, "nz-demo-progress-circle-dynamic", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](79, "A dynamic progress bar is better.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](81, "nz-demo-progress-format", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, "You can custom text format by setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](86, "nzFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](87, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](88, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](89, "nz-demo-progress-segment", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](90, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](92, "A standard progress bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](94, "nz-demo-progress-gradient", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](97, "A package of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](99, "linear-gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](100, ". It is recommended to only pass two colors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "div", 28)(102, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](103, "nz-demo-progress-circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](106, "A circular progress bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](108, "nz-demo-progress-circle-mini", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](111, "A smaller circular progress bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](113, "nz-demo-progress-dynamic", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](114, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](116, "A dynamic progress bar is better.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](118, "nz-demo-progress-dashboard", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](119, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](121, "By setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](123, "nzType=\"dashboard\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](124, ", you can get a dashboard style of progress easily.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](126, "nz-demo-progress-round", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](127, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](129, "By setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](130, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](131, "nzStrokeLinecap='square'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](132, ", you can change the linecaps from round to square.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](133, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](134, "nz-demo-progress-step", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](135, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](137, "A progress bar with steps.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](138, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](139, "h2", 44)(140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](141, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](142, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](143, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](144, "h3", 46)(145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](146, "nz-progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](147, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](148, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](150, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](151, "table")(152, "thead")(153, "tr")(154, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](155, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](156, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](157, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](158, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](159, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](160, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](161, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](162, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](163, "tbody")(164, "tr")(165, "td")(166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](167, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](169, "to set the type");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](170, "td")(171, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](172, "'line' | 'circle' | 'dashboard'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](173, "td")(174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](175, "'line'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](177, "tr")(178, "td")(179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](180, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](182, "template function of the content");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](183, "td")(184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](185, "(percent: number) => string | TemplateRef<{ $implicit: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](186, "td")(187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](188, "percent => percent + '%'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](190, "tr")(191, "td")(192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](193, "[nzPercent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](195, "to set the completion percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](196, "td")(197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](198, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](199, "td")(200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](201, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](203, "tr")(204, "td")(205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](206, "[nzShowInfo]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](207, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](208, "whether to display the progress value and the status icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](209, "td")(210, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](211, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](212, "td")(213, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](214, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](216, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](217, "tr")(218, "td")(219, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](220, "[nzStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](222, "to set the status of the Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](223, "td")(224, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](225, "'success' | 'exception' | 'active' | 'normal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](227, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](229, "tr")(230, "td")(231, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](232, "[nzStrokeLinecap]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](234, "to set the style of the progress linecap");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](235, "td")(236, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](237, "'round' | 'square'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](238, "td")(239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](240, "'round'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](242, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](243, "tr")(244, "td")(245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](246, "[nzStrokeColor]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](248, "color of progress bar, render linear-gradient when passing an object");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](249, "td")(250, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](251, "string | { from: string; to: string: direction: string; [percent: string]: string }");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](253, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](255, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](256, "tr")(257, "td")(258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](259, "[nzSuccessPercent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](261, "segmented success percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](262, "td")(263, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](264, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](266, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](268, "h3", 49)(269, "span")(270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](271, "nzType=\"line\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](272, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](273, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](274, "table")(275, "thead")(276, "tr")(277, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](278, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](279, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](280, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](281, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](282, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](283, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](284, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](285, "tbody")(286, "tr")(287, "td")(288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](289, "[nzStrokeWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](291, "to set the width of the progress bar, unit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](293, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](294, "td")(295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](296, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](297, "td")(298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](299, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](300, "tr")(301, "td")(302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](303, "[nzSteps]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](305, "the total step count");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](306, "td")(307, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](308, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](309, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](310, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](311, "h3", 51)(312, "span")(313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](314, "nzType=\"circle\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](315, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](316, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](317, "table")(318, "thead")(319, "tr")(320, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](321, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](322, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](323, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](324, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](325, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](326, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](327, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](328, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](329, "tbody")(330, "tr")(331, "td")(332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](333, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](335, "to set the canvas width of the circular progress bar, unit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](336, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](337, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](338, "td")(339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](340, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](341, "td")(342, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](343, "132");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](345, "tr")(346, "td")(347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](348, "[nzStrokeWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](350, "to set the width of the circular progress bar, unit: percentage of the canvas width");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](351, "td")(352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](353, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](354, "td")(355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](356, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](358, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](359, "h3", 53)(360, "span")(361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](362, "nzType=\"dashboard\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](363, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](364, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](365, "table")(366, "thead")(367, "tr")(368, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](369, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](370, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](371, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](372, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](373, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](374, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](375, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](376, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](377, "tbody")(378, "tr")(379, "td")(380, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](381, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](383, "to set the canvas width of the dashboard progress bar, unit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](384, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](385, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](386, "td")(387, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](388, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](389, "td")(390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](391, "132");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](393, "tr")(394, "td")(395, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](396, "[nzStrokeWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](398, "to set the width of the dashboard progress bar, unit: percentage of the canvas width");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](399, "td")(400, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](401, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](402, "td")(403, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](404, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](405, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](406, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](407, "tr")(408, "td")(409, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](410, "[nzGapDegree]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](411, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](412, "the gap degree of half circle, 0 ~ 360");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](413, "td")(414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](415, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](416, "td")(417, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](418, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](419, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](420, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](421, "tr")(422, "td")(423, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](424, "[nzGapPosition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](425, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](426, "the gap position");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](427, "td")(428, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](429, "'top' | 'right' | 'bottom' | 'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](430, "td")(431, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](432, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](433, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](434, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-line")("nzLink", "components-progress-demo-line")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/line.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-line-mini")("nzLink", "components-progress-demo-line-mini")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/line-mini.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-circle-dynamic")("nzLink", "components-progress-demo-circle-dynamic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/circle-dynamic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-format")("nzLink", "components-progress-demo-format")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/format.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-segment")("nzLink", "components-progress-demo-segment")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/segment.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-gradient")("nzLink", "components-progress-demo-gradient")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/gradient.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-circle")("nzLink", "components-progress-demo-circle")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/circle.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-circle-mini")("nzLink", "components-progress-demo-circle-mini")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/circle-mini.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-dynamic")("nzLink", "components-progress-demo-dynamic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/dynamic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-dashboard")("nzLink", "components-progress-demo-dashboard")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/dashboard.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-round")("nzLink", "components-progress-demo-round")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/round.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-step")("nzLink", "components-progress-demo-step")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/step.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _line__WEBPACK_IMPORTED_MODULE_1__.NzDemoProgressLineComponent, _line_mini__WEBPACK_IMPORTED_MODULE_2__.NzDemoProgressLineMiniComponent, _circle_dynamic__WEBPACK_IMPORTED_MODULE_3__.NzDemoProgressCircleDynamicComponent, _format__WEBPACK_IMPORTED_MODULE_4__.NzDemoProgressFormatComponent, _segment__WEBPACK_IMPORTED_MODULE_5__.NzDemoProgressSegmentComponent, _gradient__WEBPACK_IMPORTED_MODULE_6__.NzDemoProgressGradientComponent, _circle__WEBPACK_IMPORTED_MODULE_7__.NzDemoProgressCircleComponent, _circle_mini__WEBPACK_IMPORTED_MODULE_8__.NzDemoProgressCircleMiniComponent, _dynamic__WEBPACK_IMPORTED_MODULE_9__.NzDemoProgressDynamicComponent, _dashboard__WEBPACK_IMPORTED_MODULE_10__.NzDemoProgressDashboardComponent, _round__WEBPACK_IMPORTED_MODULE_11__.NzDemoProgressRoundComponent, _step__WEBPACK_IMPORTED_MODULE_12__.NzDemoProgressStepComponent], encapsulation: 2 });


/***/ }),

/***/ 91806:
/*!***********************************************!*\
  !*** ./src/app/components/progress/format.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressFormatComponent": () => (/* binding */ NzDemoProgressFormatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);


class NzDemoProgressFormatComponent {
    constructor() {
        this.formatOne = (percent) => `${percent} Days`;
        this.formatTwo = () => `Done`;
    }
}
NzDemoProgressFormatComponent.ɵfac = function NzDemoProgressFormatComponent_Factory(t) { return new (t || NzDemoProgressFormatComponent)(); };
NzDemoProgressFormatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressFormatComponent, selectors: [["nz-demo-progress-format"]], decls: 2, vars: 4, consts: [["nzType", "circle", 3, "nzPercent", "nzFormat"]], template: function NzDemoProgressFormatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 75)("nzFormat", ctx.formatOne);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100)("nzFormat", ctx.formatTwo);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent], styles: ["nz-progress[_ngcontent-%COMP%] {\n        margin-right: 8px;\n        margin-bottom: 8px;\n        display: inline-block;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtNQUN2QiIsImZpbGUiOiJmb3JtYXQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXByb2dyZXNzIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 73669:
/*!*************************************************!*\
  !*** ./src/app/components/progress/gradient.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressGradientComponent": () => (/* binding */ NzDemoProgressGradientComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);


const _c0 = function () { return { "0%": "#108ee9", "100%": "#87d068" }; };
const _c1 = function () { return { "0%": "#108ee9", "50%": "#2db7f5", "100%": "#87d068" }; };
class NzDemoProgressGradientComponent {
}
NzDemoProgressGradientComponent.ɵfac = function NzDemoProgressGradientComponent_Factory(t) { return new (t || NzDemoProgressGradientComponent)(); };
NzDemoProgressGradientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressGradientComponent, selectors: [["nz-demo-progress-gradient"]], decls: 4, vars: 12, consts: [[3, "nzPercent", "nzStrokeColor"], ["nzStatus", "active", 3, "nzPercent", "nzStrokeColor"], ["nzType", "circle", 3, "nzPercent", "nzStrokeColor"], ["nzType", "dashboard", 3, "nzPercent", "nzStrokeColor"]], template: function NzDemoProgressGradientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 2)(3, "nz-progress", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 99.9)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 99.9)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 90)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent], styles: ["\n      .ant-progress {\n        margin-right: 8px;\n        margin-bottom: 8px;\n        display: inline-block;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWRpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIscUJBQXFCO01BQ3ZCIiwiZmlsZSI6ImdyYWRpZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuYW50LXByb2dyZXNzIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 66082:
/*!*****************************************************!*\
  !*** ./src/app/components/progress/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressModule": () => (/* binding */ NzDemoProgressModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 53986);
/* harmony import */ var _circle_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circle-dynamic */ 82146);
/* harmony import */ var _circle_mini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle-mini */ 64087);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./circle */ 14139);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard */ 99455);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic */ 96105);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./format */ 91806);
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gradient */ 73669);
/* harmony import */ var _line_mini__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./line-mini */ 64443);
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./line */ 34411);
/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./round */ 21143);
/* harmony import */ var _segment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./segment */ 32417);
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./step */ 18231);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./zh.component */ 78955);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./en.component */ 300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);






















class NzDemoProgressModule {
}
NzDemoProgressModule.ɵfac = function NzDemoProgressModule_Factory(t) { return new (t || NzDemoProgressModule)(); };
NzDemoProgressModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: NzDemoProgressModule });
NzDemoProgressModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_15__.NzDemoProgressEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_14__.NzDemoProgressZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](NzDemoProgressModule, { declarations: [_circle_dynamic__WEBPACK_IMPORTED_MODULE_2__.NzDemoProgressCircleDynamicComponent,
        _circle_mini__WEBPACK_IMPORTED_MODULE_3__.NzDemoProgressCircleMiniComponent,
        _circle__WEBPACK_IMPORTED_MODULE_4__.NzDemoProgressCircleComponent,
        _dashboard__WEBPACK_IMPORTED_MODULE_5__.NzDemoProgressDashboardComponent,
        _dynamic__WEBPACK_IMPORTED_MODULE_6__.NzDemoProgressDynamicComponent,
        _format__WEBPACK_IMPORTED_MODULE_7__.NzDemoProgressFormatComponent,
        _gradient__WEBPACK_IMPORTED_MODULE_8__.NzDemoProgressGradientComponent,
        _line_mini__WEBPACK_IMPORTED_MODULE_9__.NzDemoProgressLineMiniComponent,
        _line__WEBPACK_IMPORTED_MODULE_10__.NzDemoProgressLineComponent,
        _round__WEBPACK_IMPORTED_MODULE_11__.NzDemoProgressRoundComponent,
        _segment__WEBPACK_IMPORTED_MODULE_12__.NzDemoProgressSegmentComponent,
        _step__WEBPACK_IMPORTED_MODULE_13__.NzDemoProgressStepComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_14__.NzDemoProgressZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_15__.NzDemoProgressEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_18__.NzProgressModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] }); })();


/***/ }),

/***/ 64443:
/*!**************************************************!*\
  !*** ./src/app/components/progress/line-mini.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressLineMiniComponent": () => (/* binding */ NzDemoProgressLineMiniComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);


class NzDemoProgressLineMiniComponent {
}
NzDemoProgressLineMiniComponent.ɵfac = function NzDemoProgressLineMiniComponent_Factory(t) { return new (t || NzDemoProgressLineMiniComponent)(); };
NzDemoProgressLineMiniComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressLineMiniComponent, selectors: [["nz-demo-progress-line-mini"]], decls: 6, vars: 6, consts: [[2, "width", "170px"], ["nzSize", "small", 3, "nzPercent"], ["nzSize", "small", "nzStatus", "active", 3, "nzPercent"], ["nzSize", "small", "nzStatus", "exception", 3, "nzPercent"], ["nzSize", "small", 3, "nzPercent", "nzShowInfo"]], template: function NzDemoProgressLineMiniComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-progress", 1)(2, "nz-progress", 2)(3, "nz-progress", 3)(4, "nz-progress", 1)(5, "nz-progress", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 50)("nzShowInfo", false);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent], encapsulation: 2 });


/***/ }),

/***/ 34411:
/*!*********************************************!*\
  !*** ./src/app/components/progress/line.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressLineComponent": () => (/* binding */ NzDemoProgressLineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);


class NzDemoProgressLineComponent {
}
NzDemoProgressLineComponent.ɵfac = function NzDemoProgressLineComponent_Factory(t) { return new (t || NzDemoProgressLineComponent)(); };
NzDemoProgressLineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressLineComponent, selectors: [["nz-demo-progress-line"]], decls: 5, vars: 6, consts: [[3, "nzPercent"], ["nzStatus", "active", 3, "nzPercent"], ["nzStatus", "exception", 3, "nzPercent"], [3, "nzPercent", "nzShowInfo"]], template: function NzDemoProgressLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 2)(3, "nz-progress", 0)(4, "nz-progress", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 50)("nzShowInfo", false);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent], encapsulation: 2 });


/***/ }),

/***/ 53986:
/*!***********************************************!*\
  !*** ./src/app/components/progress/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);



const moduleList = [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_0__.NzProgressModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule];


/***/ }),

/***/ 21143:
/*!**********************************************!*\
  !*** ./src/app/components/progress/round.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressRoundComponent": () => (/* binding */ NzDemoProgressRoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);


class NzDemoProgressRoundComponent {
}
NzDemoProgressRoundComponent.ɵfac = function NzDemoProgressRoundComponent_Factory(t) { return new (t || NzDemoProgressRoundComponent)(); };
NzDemoProgressRoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressRoundComponent, selectors: [["nz-demo-progress-round"]], decls: 3, vars: 0, consts: [["nzStrokeLinecap", "round", "nzPercent", "75"], ["nzStrokeLinecap", "round", "nzType", "circle", "nzPercent", "75"], ["nzStrokeLinecap", "square", "nzType", "dashboard", "nzPercent", "75"]], template: function NzDemoProgressRoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 2);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent], encapsulation: 2 });


/***/ }),

/***/ 32417:
/*!************************************************!*\
  !*** ./src/app/components/progress/segment.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressSegmentComponent": () => (/* binding */ NzDemoProgressSegmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);



class NzDemoProgressSegmentComponent {
}
NzDemoProgressSegmentComponent.ɵfac = function NzDemoProgressSegmentComponent_Factory(t) { return new (t || NzDemoProgressSegmentComponent)(); };
NzDemoProgressSegmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressSegmentComponent, selectors: [["nz-demo-progress-segment"]], decls: 3, vars: 6, consts: [["nz-tooltip", "", "nzTooltipTitle", "3 done / 3 in progress / 4 to do", 3, "nzPercent", "nzSuccessPercent"], ["nz-tooltip", "", "nzTooltipTitle", "3 done / 3 in progress / 4 to do", "nzType", "circle", 3, "nzPercent", "nzSuccessPercent"], ["nz-tooltip", "", "nzTooltipTitle", "3 done / 3 in progress / 4 to do", "nzType", "dashboard", 3, "nzPercent", "nzSuccessPercent"]], template: function NzDemoProgressSegmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 60)("nzSuccessPercent", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 60)("nzSuccessPercent", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 60)("nzSuccessPercent", 30);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_2__.NzTooltipDirective], encapsulation: 2 });


/***/ }),

/***/ 18231:
/*!*********************************************!*\
  !*** ./src/app/components/progress/step.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressStepComponent": () => (/* binding */ NzDemoProgressStepComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);


class NzDemoProgressStepComponent {
}
NzDemoProgressStepComponent.ɵfac = function NzDemoProgressStepComponent_Factory(t) { return new (t || NzDemoProgressStepComponent)(); };
NzDemoProgressStepComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoProgressStepComponent, selectors: [["nz-demo-progress-step"]], decls: 3, vars: 6, consts: [["nzStrokeColor", "#1890ff", 3, "nzPercent", "nzSteps"], ["nzStrokeColor", "#1890ff", "nzSize", "small", 3, "nzPercent", "nzSteps"]], template: function NzDemoProgressStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 0)(2, "nz-progress", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 50)("nzSteps", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 30)("nzSteps", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100)("nzSteps", 5);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent], encapsulation: 2 });


/***/ }),

/***/ 78955:
/*!*****************************************************!*\
  !*** ./src/app/components/progress/zh.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoProgressZhComponent": () => (/* binding */ NzDemoProgressZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ 34411);
/* harmony import */ var _line_mini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-mini */ 64443);
/* harmony import */ var _circle_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle-dynamic */ 82146);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ 91806);
/* harmony import */ var _segment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./segment */ 32417);
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gradient */ 73669);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./circle */ 14139);
/* harmony import */ var _circle_mini__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./circle-mini */ 64087);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamic */ 96105);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard */ 99455);
/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./round */ 21143);
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./step */ 18231);





















class NzDemoProgressZhComponent {
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
NzDemoProgressZhComponent.ɵfac = function NzDemoProgressZhComponent_Factory(t) { return new (t || NzDemoProgressZhComponent)(); };
NzDemoProgressZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: NzDemoProgressZhComponent, selectors: [["nz-demo-progress"]], viewQuery: function NzDemoProgressZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 420, vars: 43, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-progress-demo-line", "nzTitle", "\u8FDB\u5EA6\u6761"], ["nzHref", "#components-progress-demo-circle", "nzTitle", "\u8FDB\u5EA6\u5708"], ["nzHref", "#components-progress-demo-line-mini", "nzTitle", "\u5C0F\u578B\u8FDB\u5EA6\u6761"], ["nzHref", "#components-progress-demo-circle-mini", "nzTitle", "\u5C0F\u578B\u8FDB\u5EA6\u5708"], ["nzHref", "#components-progress-demo-circle-dynamic", "nzTitle", "\u8FDB\u5EA6\u5708\u52A8\u6001\u5C55\u793A"], ["nzHref", "#components-progress-demo-dynamic", "nzTitle", "\u52A8\u6001\u5C55\u793A"], ["nzHref", "#components-progress-demo-format", "nzTitle", "\u81EA\u5B9A\u4E49\u6587\u5B57\u683C\u5F0F"], ["nzHref", "#components-progress-demo-dashboard", "nzTitle", "\u4EEA\u8868\u76D8"], ["nzHref", "#components-progress-demo-segment", "nzTitle", "\u5206\u6BB5\u8FDB\u5EA6\u6761"], ["nzHref", "#components-progress-demo-round", "nzTitle", "\u5706\u89D2/\u65B9\u89D2\u8FB9\u7F18"], ["nzHref", "#components-progress-demo-gradient", "nzTitle", "\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6E10\u53D8\u8272"], ["nzHref", "#components-progress-demo-step", "nzTitle", "\u6B65\u9AA4\u8FDB\u5EA6\u6761"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u8FDB\u5EA6\u6761", "nzSelector", "nz-demo-progress-line", "nzGenerateCommand", "ng g ng-zorro-antd:progress-line <name>", "nzComponentName", "NzDemoProgressLineComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u5C0F\u578B\u8FDB\u5EA6\u6761", "nzSelector", "nz-demo-progress-line-mini", "nzGenerateCommand", "ng g ng-zorro-antd:progress-line-mini <name>", "nzComponentName", "NzDemoProgressLineMiniComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u8FDB\u5EA6\u5708\u52A8\u6001\u5C55\u793A", "nzSelector", "nz-demo-progress-circle-dynamic", "nzGenerateCommand", "ng g ng-zorro-antd:progress-circle-dynamic <name>", "nzComponentName", "NzDemoProgressCircleDynamicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u6587\u5B57\u683C\u5F0F", "nzSelector", "nz-demo-progress-format", "nzGenerateCommand", "ng g ng-zorro-antd:progress-format <name>", "nzComponentName", "NzDemoProgressFormatComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5206\u6BB5\u8FDB\u5EA6\u6761", "nzSelector", "nz-demo-progress-segment", "nzGenerateCommand", "ng g ng-zorro-antd:progress-segment <name>", "nzComponentName", "NzDemoProgressSegmentComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6E10\u53D8\u8272", "nzSelector", "nz-demo-progress-gradient", "nzGenerateCommand", "ng g ng-zorro-antd:progress-gradient <name>", "nzComponentName", "NzDemoProgressGradientComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u8FDB\u5EA6\u5708", "nzSelector", "nz-demo-progress-circle", "nzGenerateCommand", "ng g ng-zorro-antd:progress-circle <name>", "nzComponentName", "NzDemoProgressCircleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5C0F\u578B\u8FDB\u5EA6\u5708", "nzSelector", "nz-demo-progress-circle-mini", "nzGenerateCommand", "ng g ng-zorro-antd:progress-circle-mini <name>", "nzComponentName", "NzDemoProgressCircleMiniComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u52A8\u6001\u5C55\u793A", "nzSelector", "nz-demo-progress-dynamic", "nzGenerateCommand", "ng g ng-zorro-antd:progress-dynamic <name>", "nzComponentName", "NzDemoProgressDynamicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4EEA\u8868\u76D8", "nzSelector", "nz-demo-progress-dashboard", "nzGenerateCommand", "ng g ng-zorro-antd:progress-dashboard <name>", "nzComponentName", "NzDemoProgressDashboardComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5706\u89D2/\u65B9\u89D2\u8FB9\u7F18", "nzSelector", "nz-demo-progress-round", "nzGenerateCommand", "ng g ng-zorro-antd:progress-round <name>", "nzComponentName", "NzDemoProgressRoundComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6B65\u9AA4\u8FDB\u5EA6\u6761", "nzSelector", "nz-demo-progress-step", "nzGenerateCommand", "ng g ng-zorro-antd:progress-step <name>", "nzComponentName", "NzDemoProgressStepComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "<code>nztype=\"line\"</code>"], ["onclick", "window.location.hash = '<code>nztype=\"line\"</code>'", 1, "anchor"], ["id", "<code>nztype=\"circle\"</code>"], ["onclick", "window.location.hash = '<code>nztype=\"circle\"</code>'", 1, "anchor"], ["id", "<code>nztype=\"dashboard\"</code>"], ["onclick", "window.location.hash = '<code>nztype=\"dashboard\"</code>'", 1, "anchor"]], template: function NzDemoProgressZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzClick", function NzDemoProgressZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13)(15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "section", 15)(17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "\u8FDB\u5EA6\u6761");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "\u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "h2", 20)(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "\u5728\u64CD\u4F5C\u9700\u8981\u8F83\u957F\u65F6\u95F4\u624D\u80FD\u5B8C\u6210\u65F6\uFF0C\u4E3A\u7528\u6237\u663E\u793A\u8BE5\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u548C\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "ul")(35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, "\u5F53\u4E00\u4E2A\u64CD\u4F5C\u4F1A\u6253\u65AD\u5F53\u524D\u754C\u9762\uFF0C\u6216\u8005\u9700\u8981\u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u4E14\u8017\u65F6\u53EF\u80FD\u8D85\u8FC72\u79D2\u65F6\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "\u5F53\u9700\u8981\u663E\u793A\u4E00\u4E2A\u64CD\u4F5C\u5B8C\u6210\u7684\u767E\u5206\u6BD4\u65F6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "pre", 22)(40, "code")(41, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, " NzProgressModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "'ng-zorro-antd/progress'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "h2")(58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NzDemoProgressZhComponent_Template_i_click_60_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "div", 27)(62, "div", 28)(63, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](64, "nz-demo-progress-line", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](67, "\u6807\u51C6\u7684\u8FDB\u5EA6\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](69, "nz-demo-progress-line-mini", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](72, "\u9002\u5408\u653E\u5728\u8F83\u72ED\u7A84\u7684\u533A\u57DF\u5185\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](74, "nz-demo-progress-circle-dynamic", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](77, "\u4F1A\u52A8\u7684\u8FDB\u5EA6\u6761\u624D\u662F\u597D\u8FDB\u5EA6\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](79, "nz-demo-progress-format", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "p")(82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](83, "nzFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, " \u5C5E\u6027\u6307\u5B9A\u683C\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](86, "nz-demo-progress-segment", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](89, "\u6807\u51C6\u7684\u8FDB\u5EA6\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](90, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](91, "nz-demo-progress-gradient", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "p")(94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](95, "linear-gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](96, " \u7684\u5C01\u88C5\u3002\u63A8\u8350\u53EA\u4F20\u4E24\u79CD\u989C\u8272\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](97, "div", 28)(98, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](99, "nz-demo-progress-circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](102, "\u5708\u5F62\u7684\u8FDB\u5EA6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](103, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](104, "nz-demo-progress-circle-mini", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](107, "\u5C0F\u4E00\u53F7\u7684\u5708\u5F62\u8FDB\u5EA6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](108, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](109, "nz-demo-progress-dynamic", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](110, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](112, "\u4F1A\u52A8\u7684\u8FDB\u5EA6\u6761\u624D\u662F\u597D\u8FDB\u5EA6\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](113, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](114, "nz-demo-progress-dashboard", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](117, "\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](119, "nzType=\"dashboard\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](120, "\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u5B9E\u73B0\u4EEA\u8868\u76D8\u6837\u5F0F\u7684\u8FDB\u5EA6\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](121, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](122, "nz-demo-progress-round", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](125, "\u901A\u8FC7\u8BBE\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](127, "nzStrokeLinecap='square|round'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](128, " \u53EF\u4EE5\u8C03\u6574\u8FDB\u5EA6\u6761\u8FB9\u7F18\u7684\u5F62\u72B6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](130, "nz-demo-progress-step", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](131, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](133, "\u5E26\u6B65\u9AA4\u7684\u8FDB\u5EA6\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](134, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](135, "h2", 44)(136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](137, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](138, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](139, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](141, "\u5404\u7C7B\u578B\u901A\u7528\u7684\u5C5E\u6027\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](142, "table")(143, "thead")(144, "tr")(145, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](146, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](147, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](148, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](150, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](151, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](152, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](153, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](154, "tbody")(155, "tr")(156, "td")(157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](158, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](160, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](163, "'line' | 'circle' | 'dashboard'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](164, "td")(165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](166, "'line'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](168, "tr")(169, "td")(170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](171, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](173, "\u5185\u5BB9\u7684\u6A21\u677F\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](174, "td")(175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](176, "(percent: number) => string | TemplateRef<{ $implicit: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](177, "td")(178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](179, "percent => percent + '%'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](181, "tr")(182, "td")(183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](184, "[nzPercent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](186, "\u767E\u5206\u6BD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](187, "td")(188, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](189, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](190, "td")(191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](192, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](194, "tr")(195, "td")(196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](197, "[nzShowInfo]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](199, "\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6570\u503C\u6216\u72B6\u6001\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](200, "td")(201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](202, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](203, "td")(204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](205, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](207, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](208, "tr")(209, "td")(210, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](211, "[nzStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](213, "\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](214, "td")(215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](216, "'success' | 'exception' | 'active' | 'normal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](218, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](220, "tr")(221, "td")(222, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](223, "[nzStrokeLinecap]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](225, "\u8FDB\u5EA6\u6761\u7AEF\u70B9\u5F62\u72B6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](226, "td")(227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](228, "'round' | 'square'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](229, "td")(230, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](231, "'round'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](233, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](234, "tr")(235, "td")(236, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](237, "[nzStrokeColor]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](239, "\u8FDB\u5EA6\u6761\u989C\u8272\uFF0C\u4F20\u5165\u5BF9\u8C61\u65F6\u4E3A\u6E10\u53D8");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](240, "td")(241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](242, "string | { from: string; to: string: direction: string; [percent: string]: string }");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](244, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](246, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](247, "tr")(248, "td")(249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](250, "[nzSuccessPercent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](252, "\u5DF2\u5B8C\u6210\u7684\u5206\u6BB5\u767E\u5206\u6BD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](253, "td")(254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](255, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](257, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](259, "h3", 46)(260, "span")(261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](262, "nzType=\"line\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](263, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](264, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](265, "table")(266, "thead")(267, "tr")(268, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](269, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](270, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](271, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](272, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](273, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](274, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](275, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](276, "tbody")(277, "tr")(278, "td")(279, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](280, "[nzStrokeWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](282, "\u8FDB\u5EA6\u6761\u7EBF\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D px");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](283, "td")(284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](285, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](286, "td")(287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](288, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](289, "tr")(290, "td")(291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](292, "[nzSteps]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](294, "\u8FDB\u5EA6\u6761\u603B\u5171\u6B65\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](295, "td")(296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](297, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](299, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](300, "h3", 48)(301, "span")(302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](303, "nzType=\"circle\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](304, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](305, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](306, "table")(307, "thead")(308, "tr")(309, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](310, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](311, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](312, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](313, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](314, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](315, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](316, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](317, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](318, "tbody")(319, "tr")(320, "td")(321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](322, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](324, "\u5706\u5F62\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\uFF0C\u5355\u4F4D px");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](325, "td")(326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](327, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](328, "td")(329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](330, "132");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](332, "tr")(333, "td")(334, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](335, "[nzStrokeWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](336, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](337, "\u5706\u5F62\u8FDB\u5EA6\u6761\u7EBF\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u662F\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\u7684\u767E\u5206\u6BD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](338, "td")(339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](340, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](341, "td")(342, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](343, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](345, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](346, "h3", 50)(347, "span")(348, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](349, "nzType=\"dashboard\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](350, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](351, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](352, "table")(353, "thead")(354, "tr")(355, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](356, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](357, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](358, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](359, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](360, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](361, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](362, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](363, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](364, "tbody")(365, "tr")(366, "td")(367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](368, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](370, "\u4EEA\u8868\u76D8\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\uFF0C\u5355\u4F4D px");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](371, "td")(372, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](373, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](374, "td")(375, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](376, "132");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](378, "tr")(379, "td")(380, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](381, "[nzStrokeWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](383, "\u4EEA\u8868\u76D8\u8FDB\u5EA6\u6761\u7EBF\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u662F\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\u7684\u767E\u5206\u6BD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](384, "td")(385, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](386, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](387, "td")(388, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](389, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](390, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](391, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](392, "tr")(393, "td")(394, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](395, "[nzGapDegree]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](397, "\u4EEA\u8868\u76D8\u8FDB\u5EA6\u6761\u7F3A\u53E3\u89D2\u5EA6\uFF0C\u53EF\u53D6\u503C 0 ~ 360");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](398, "td")(399, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](400, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](401, "td")(402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](403, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](405, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](406, "tr")(407, "td")(408, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](409, "[nzGapPosition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](411, "\u4EEA\u8868\u76D8\u8FDB\u5EA6\u6761\u7F3A\u53E3\u4F4D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](412, "td")(413, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](414, "'top' | 'right' | 'bottom' | 'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](415, "td")(416, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](417, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](419, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-line")("nzLink", "components-progress-demo-line")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/line.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-line-mini")("nzLink", "components-progress-demo-line-mini")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/line-mini.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-circle-dynamic")("nzLink", "components-progress-demo-circle-dynamic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/circle-dynamic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-format")("nzLink", "components-progress-demo-format")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/format.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-segment")("nzLink", "components-progress-demo-segment")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/segment.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-gradient")("nzLink", "components-progress-demo-gradient")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/gradient.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-circle")("nzLink", "components-progress-demo-circle")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/circle.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-circle-mini")("nzLink", "components-progress-demo-circle-mini")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/circle-mini.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-dynamic")("nzLink", "components-progress-demo-dynamic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/dynamic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-dashboard")("nzLink", "components-progress-demo-dashboard")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/dashboard.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-round")("nzLink", "components-progress-demo-round")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/round.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-progress-demo-step")("nzLink", "components-progress-demo-step")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/progress/demo/step.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _line__WEBPACK_IMPORTED_MODULE_1__.NzDemoProgressLineComponent, _line_mini__WEBPACK_IMPORTED_MODULE_2__.NzDemoProgressLineMiniComponent, _circle_dynamic__WEBPACK_IMPORTED_MODULE_3__.NzDemoProgressCircleDynamicComponent, _format__WEBPACK_IMPORTED_MODULE_4__.NzDemoProgressFormatComponent, _segment__WEBPACK_IMPORTED_MODULE_5__.NzDemoProgressSegmentComponent, _gradient__WEBPACK_IMPORTED_MODULE_6__.NzDemoProgressGradientComponent, _circle__WEBPACK_IMPORTED_MODULE_7__.NzDemoProgressCircleComponent, _circle_mini__WEBPACK_IMPORTED_MODULE_8__.NzDemoProgressCircleMiniComponent, _dynamic__WEBPACK_IMPORTED_MODULE_9__.NzDemoProgressDynamicComponent, _dashboard__WEBPACK_IMPORTED_MODULE_10__.NzDemoProgressDashboardComponent, _round__WEBPACK_IMPORTED_MODULE_11__.NzDemoProgressRoundComponent, _step__WEBPACK_IMPORTED_MODULE_12__.NzDemoProgressStepComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_progress_index_module_ts.js.map