"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_drawer_index_module_ts"],{

/***/ 20229:
/*!**************************************************!*\
  !*** ./src/app/components/drawer/basic-right.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDrawerBasicRightComponent": () => (/* binding */ NzDemoDrawerBasicRightComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 33813);





class NzDemoDrawerBasicRightComponent {
    constructor() {
        this.visible = false;
    }
    open() {
        this.visible = true;
    }
    close() {
        this.visible = false;
    }
}
NzDemoDrawerBasicRightComponent.ɵfac = function NzDemoDrawerBasicRightComponent_Factory(t) { return new (t || NzDemoDrawerBasicRightComponent)(); };
NzDemoDrawerBasicRightComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDrawerBasicRightComponent, selectors: [["nz-demo-drawer-basic-right"]], decls: 9, vars: 2, consts: [["nz-button", "", "nzType", "primary", 3, "click"], ["nzPlacement", "right", "nzTitle", "Basic Drawer", 3, "nzClosable", "nzVisible", "nzOnClose"]], template: function NzDemoDrawerBasicRightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerBasicRightComponent_Template_button_click_0_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerBasicRightComponent_Template_nz_drawer_nzOnClose_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClosable", false)("nzVisible", ctx.visible);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__.NzDrawerComponent], encapsulation: 2 });


/***/ }),

/***/ 2784:
/*!***************************************************!*\
  !*** ./src/app/components/drawer/en.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDrawerEnComponent": () => (/* binding */ NzDemoDrawerEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-right */ 20229);
/* harmony import */ var _from_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from-drawer */ 8558);
/* harmony import */ var _multi_level_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multi-level-drawer */ 39605);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placement */ 90736);
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile */ 23862);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ 23971);














class NzDemoDrawerEnComponent {
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
NzDemoDrawerEnComponent.ɵfac = function NzDemoDrawerEnComponent_Factory(t) { return new (t || NzDemoDrawerEnComponent)(); };
NzDemoDrawerEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NzDemoDrawerEnComponent, selectors: [["nz-demo-drawer"]], viewQuery: function NzDemoDrawerEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 786, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-drawer-demo-basic-right", "nzTitle", "Basic"], ["nzHref", "#components-drawer-demo-placement", "nzTitle", "Custom Placement"], ["nzHref", "#components-drawer-demo-from-drawer", "nzTitle", "Edit item in drawer"], ["nzHref", "#components-drawer-demo-user-profile", "nzTitle", "Preview drawer"], ["nzHref", "#components-drawer-demo-multi-level-drawer", "nzTitle", "Multi-level drawer"], ["nzHref", "#components-drawer-demo-service", "nzTitle", "Drawer's service"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-drawer-basic-right", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-basic-right <name>", "nzComponentName", "NzDemoDrawerBasicRightComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Edit item in drawer", "nzSelector", "nz-demo-drawer-from-drawer", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-from-drawer <name>", "nzComponentName", "NzDemoDrawerFromDrawerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Multi-level drawer", "nzSelector", "nz-demo-drawer-multi-level-drawer", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-multi-level-drawer <name>", "nzComponentName", "NzDemoDrawerMultiLevelDrawerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom Placement", "nzSelector", "nz-demo-drawer-placement", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-placement <name>", "nzComponentName", "NzDemoDrawerPlacementComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Preview drawer", "nzSelector", "nz-demo-drawer-user-profile", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-user-profile <name>", "nzComponentName", "NzDemoDrawerUserProfileComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Drawer's service", "nzSelector", "nz-demo-drawer-service", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-service <name>", "nzComponentName", "NzDemoDrawerServiceComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-drawer"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-drawer'", 1, "anchor"], ["id", "nzdrawerservice"], [1, "api-type-label", "service"], ["onclick", "window.location.hash = 'nzdrawerservice'", 1, "anchor"], ["id", "nzdraweroptions"], ["onclick", "window.location.hash = 'nzdraweroptions'", 1, "anchor"], ["id", "nzdrawerref"], ["onclick", "window.location.hash = 'nzdrawerref'", 1, "anchor"], ["id", "methods"], ["onclick", "window.location.hash = 'methods'", 1, "anchor"], ["id", "property"], ["onclick", "window.location.hash = 'property'", 1, "anchor"]], template: function NzDemoDrawerEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzClick", function NzDemoDrawerEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "section", 9)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span", 10)(14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since that user can interact with the Drawer without leaving the current page, tasks can be achieved more efficient within the same context.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h2", 14)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ul")(26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Use a Form to create or edit a set of information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Processing subtasks. When subtasks are too heavy for Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "When a same Form is needed in multiple places.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "pre", 16)(33, "code")(34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " NzDrawerModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "'ng-zorro-antd/drawer'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "h2")(51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NzDemoDrawerEnComponent_Template_i_click_53_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 21)(55, "div", 22)(56, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "nz-demo-drawer-basic-right", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Basic drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "nz-demo-drawer-from-drawer", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "A drawer containing an editable form which needs to be collapsed by clicking the close button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "nz-demo-drawer-multi-level-drawer", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Open a new drawer on top of an existing drawer to handle multi branch tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 22)(72, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "nz-demo-drawer-placement", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Basic drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](78, "nz-demo-drawer-user-profile", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "Use when you need to quickly preview the outline of the object. Such as list item preview.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "nz-demo-drawer-service", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Usage of Drawer's service, examples demonstrate user-defined templates, custom components.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "h2", 32)(89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "h3", 34)(94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "nz-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "table")(101, "thead")(102, "tr")(103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, "Props");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "tbody")(114, "tr")(115, "td")(116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "[nzClosable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119, "Whether a close (x) button is visible on top right of the Drawer dialog or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "td")(121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "td")(124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](125, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "tr")(128, "td")(129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](130, "[nzMask]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](132, "Whether to show mask or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "td")(134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](135, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "td")(137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](138, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](140, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "tr")(142, "td")(143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](144, "[nzMaskClosable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](146, "Clicking on the mask (area outside the Drawer) to close the Drawer or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "td")(148, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](149, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "td")(151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](152, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](154, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "tr")(156, "td")(157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](158, "[nzKeyboard]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](160, "Whether support press esc to close");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "td")(165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](166, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "tr")(169, "td")(170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](171, "[nzMaskStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](173, "Style for Drawer's mask element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](174, "td")(175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](176, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](177, "td")(178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](179, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "tr")(182, "td")(183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](184, "[nzBodyStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](186, "Body style for drawer body element. Such as height, padding etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](187, "td")(188, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](189, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](190, "td")(191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](192, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "tr")(195, "td")(196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](197, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](199, "The title for Drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](200, "td")(201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](202, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](204, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](206, "tr")(207, "td")(208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](209, "[nzVisible]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](211, "Whether the Drawer dialog is visible or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](212, "td")(213, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](214, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](215, "td")(216, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](217, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](219, "tr")(220, "td")(221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](222, "[nzPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](224, "The placement of the Drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](225, "td")(226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](227, "'top' | 'right' | 'bottom' | 'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](228, "td")(229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](230, "'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](232, "tr")(233, "td")(234, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](235, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](237, "Width of the Drawer dialog, only when placement is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](238, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](239, "'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](240, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](242, "'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](243, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](244, "td")(245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](246, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](247, "td")(248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](249, "256");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](251, "tr")(252, "td")(253, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](254, "[nzHeight]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](256, "Height of the Drawer dialog, only when placement is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](257, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](258, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](259, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](260, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](261, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](262, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](263, "td")(264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](265, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](266, "td")(267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](268, "256");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](270, "tr")(271, "td")(272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](273, "[nzOffsetX]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](275, "The the X coordinate offset(px), only when placement is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](277, "'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](278, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](279, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](280, "'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](281, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](282, "td")(283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](284, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](285, "td")(286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](287, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](289, "tr")(290, "td")(291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](292, "[nzOffsetY]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](294, "The the Y coordinate offset(px), only when placement is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](296, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](297, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](299, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](300, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](301, "td")(302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](303, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](304, "td")(305, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](306, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](308, "tr")(309, "td")(310, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](311, "[nzWrapClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](313, "The class name of the container of the Drawer dialog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](314, "td")(315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](316, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](318, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](320, "tr")(321, "td")(322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](323, "[nzZIndex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](325, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](327, "z-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](328, " of the Drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](329, "td")(330, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](331, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](332, "td")(333, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](334, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](336, "tr")(337, "td")(338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](339, "(nzOnClose)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](341, "Specify a callback that will be called when a user clicks mask, close button or Cancel button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](342, "td")(343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](344, "EventEmitter<MouseEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](346, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](348, "h3", 37)(349, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](350, "NzDrawerService");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](351, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](352, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](353, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](354, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](355, "table")(356, "thead")(357, "tr")(358, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](359, "Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](360, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](361, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](362, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](363, "Params");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](364, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](365, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](366, "tbody")(367, "tr")(368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](369, "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](371, "create and open an Drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](372, "td")(373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](374, "NzDrawerOptions<T, D, R>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](375, "td")(376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](377, "NzDrawerRef<R>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](378, "h3", 40)(379, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](380, "NzDrawerOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](381, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](382, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](383, "table")(384, "thead")(385, "tr")(386, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](387, "Params");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](388, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](389, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](390, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](391, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](392, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](393, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](394, "tbody")(395, "tr")(396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](397, "nzContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](398, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](399, "The drawer body content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](400, "td")(401, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](402, "TemplateRef<{ $implicit: D, drawerRef: NzDrawerRef }> | Type<T>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](403, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](404, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](405, "tr")(406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](407, "nzContentParams");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](408, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](409, "The component inputs the param / The Template context.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](410, "td")(411, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](412, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](413, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](414, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](415, "tr")(416, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](417, "nzClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](419, "Whether a close (x) button is visible on top right of the Drawer dialog or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](420, "td")(421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](422, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](423, "td")(424, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](425, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](426, "tr")(427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](428, "nzOnCancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](430, "Execute when click on the mask or the upper cancel button, This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return false to prevent closing)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](431, "td")(432, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](433, "() => Promise<any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](435, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](436, "tr")(437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](438, "nzMaskClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](439, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](440, "Clicking on the mask (area outside the Drawer) to close the Drawer or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](441, "td")(442, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](443, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](444, "td")(445, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](446, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](447, "tr")(448, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](449, "nzMask");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](450, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](451, "Whether to show mask or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](452, "td")(453, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](454, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](455, "td")(456, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](457, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](458, "tr")(459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](460, "nzKeyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](461, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](462, "Whether support press esc to close");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](463, "td")(464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](465, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](466, "td")(467, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](468, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](469, "tr")(470, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](471, "nzMaskStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](472, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](473, "Style for Drawer's mask element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](474, "td")(475, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](476, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](477, "td")(478, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](479, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](480, "tr")(481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](482, "nzBodyStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](484, "Body style for modal body element. Such as height, padding etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](485, "td")(486, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](487, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](488, "td")(489, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](490, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](491, "tr")(492, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](493, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](495, "The title for Drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](496, "td")(497, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](498, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](500, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](501, "tr")(502, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](503, "nzWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](505, "Width of the Drawer dialog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](506, "td")(507, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](508, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](509, "td")(510, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](511, "256");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](512, "tr")(513, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](514, "nzHeight");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](515, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](516, "Height of the Drawer dialog, only when placement is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](517, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](518, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](519, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](520, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](521, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](522, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](523, "td")(524, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](525, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](526, "td")(527, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](528, "256");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](529, "tr")(530, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](531, "nzWrapClassName");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](532, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](533, "The class name of the container of the Drawer dialog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](534, "td")(535, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](536, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](538, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](539, "tr")(540, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](541, "nzZIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](542, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](543, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](544, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](545, "z-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](546, " of the Drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](547, "td")(548, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](549, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](550, "td")(551, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](552, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](553, "tr")(554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](555, "nzPlacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](556, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](557, "The placement of the Drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](558, "td")(559, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](560, "'top' | 'right' | 'bottom' | 'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](561, "td")(562, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](563, "'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](564, "tr")(565, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](566, "nzOffsetX");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](567, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](568, "The the X coordinate offset(px).");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](569, "td")(570, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](571, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](572, "td")(573, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](574, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](575, "tr")(576, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](577, "nzOffsetY");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](578, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](579, "The the Y coordinate offset(px), only when placement is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](580, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](581, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](582, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](583, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](584, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](585, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](586, "td")(587, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](588, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](589, "td")(590, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](591, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](592, "h3", 42)(593, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](594, "NzDrawerRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](595, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](596, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](597, "h4", 44)(598, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](599, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](600, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](601, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](602, "table")(603, "thead")(604, "tr")(605, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](606, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](607, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](608, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](609, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](610, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](611, "tbody")(612, "tr")(613, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](614, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](615, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](616, "close the drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](617, "td")(618, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](619, "(result?: R) => void");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](620, "tr")(621, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](622, "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](623, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](624, "open the drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](625, "td")(626, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](627, "() => void");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](628, "h4", 46)(629, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](630, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](631, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](632, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](633, "table")(634, "thead")(635, "tr")(636, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](637, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](638, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](639, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](640, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](641, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](642, "tbody")(643, "tr")(644, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](645, "afterOpen");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](646, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](647, "Callback called after open.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](648, "td")(649, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](650, "Observable<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](651, "tr")(652, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](653, "afterClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](654, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](655, "Callback called after close.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](656, "td")(657, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](658, "Observable<R>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](659, "tr")(660, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](661, "nzClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](662, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](663, "Whether a close (x) button is visible on top right of the Drawer dialog or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](664, "td")(665, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](666, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](667, "tr")(668, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](669, "nzMaskClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](670, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](671, "Clicking on the mask (area outside the Drawer) to close the Drawer or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](672, "td")(673, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](674, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](675, "tr")(676, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](677, "nzMask");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](678, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](679, "Whether to show mask or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](680, "td")(681, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](682, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](683, "tr")(684, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](685, "nzKeyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](686, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](687, "Whether support press esc to close");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](688, "td")(689, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](690, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](691, "tr")(692, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](693, "nzMaskStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](694, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](695, "Style for Drawer's mask element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](696, "td")(697, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](698, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](699, "tr")(700, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](701, "nzBodyStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](702, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](703, "Body style for modal body element. Such as height, padding etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](704, "td")(705, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](706, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](707, "tr")(708, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](709, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](710, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](711, "The title for Drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](712, "td")(713, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](714, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](715, "tr")(716, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](717, "nzWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](718, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](719, "Width of the Drawer dialog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](720, "td")(721, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](722, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](723, "tr")(724, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](725, "nzHeight");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](726, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](727, "Height of the Drawer dialog, only when placement is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](728, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](729, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](730, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](731, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](732, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](733, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](734, "td")(735, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](736, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](737, "tr")(738, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](739, "nzWrapClassName");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](740, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](741, "The class name of the container of the Drawer dialog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](742, "td")(743, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](744, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](745, "tr")(746, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](747, "nzZIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](748, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](749, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](750, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](751, "z-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](752, " of the Drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](753, "td")(754, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](755, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](756, "tr")(757, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](758, "nzPlacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](759, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](760, "The placement of the Drawer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](761, "td")(762, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](763, "'top' | 'right' | 'bottom' | 'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](764, "tr")(765, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](766, "nzOffsetX");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](767, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](768, "The the X coordinate offset(px).");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](769, "td")(770, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](771, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](772, "tr")(773, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](774, "nzOffsetY");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](775, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](776, "The the Y coordinate offset(px), only when placement is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](777, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](778, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](779, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](780, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](781, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](782, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](783, "td")(784, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](785, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-basic-right")("nzLink", "components-drawer-demo-basic-right")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/basic-right.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-from-drawer")("nzLink", "components-drawer-demo-from-drawer")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/from-drawer.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-multi-level-drawer")("nzLink", "components-drawer-demo-multi-level-drawer")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/multi-level-drawer.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-placement")("nzLink", "components-drawer-demo-placement")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/placement.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-user-profile")("nzLink", "components-drawer-demo-user-profile")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/user-profile.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-service")("nzLink", "components-drawer-demo-service")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/service.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic_right__WEBPACK_IMPORTED_MODULE_1__.NzDemoDrawerBasicRightComponent, _from_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDemoDrawerFromDrawerComponent, _multi_level_drawer__WEBPACK_IMPORTED_MODULE_3__.NzDemoDrawerMultiLevelDrawerComponent, _placement__WEBPACK_IMPORTED_MODULE_4__.NzDemoDrawerPlacementComponent, _user_profile__WEBPACK_IMPORTED_MODULE_5__.NzDemoDrawerUserProfileComponent, _service__WEBPACK_IMPORTED_MODULE_6__.NzDemoDrawerServiceComponent], encapsulation: 2 });


/***/ }),

/***/ 8558:
/*!**************************************************!*\
  !*** ./src/app/components/drawer/from-drawer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDrawerFromDrawerComponent": () => (/* binding */ NzDemoDrawerFromDrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 33813);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 35390);











const _c0 = function () { return { height: "calc(100% - 55px)", overflow: "auto", "padding-bottom": "53px" }; };
const _c1 = function () { return { minRows: 4, maxRows: 4 }; };
class NzDemoDrawerFromDrawerComponent {
    constructor() {
        this.visible = false;
    }
    open() {
        this.visible = true;
    }
    close() {
        this.visible = false;
    }
}
NzDemoDrawerFromDrawerComponent.ɵfac = function NzDemoDrawerFromDrawerComponent_Factory(t) { return new (t || NzDemoDrawerFromDrawerComponent)(); };
NzDemoDrawerFromDrawerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDrawerFromDrawerComponent, selectors: [["nz-demo-drawer-from-drawer"]], decls: 51, vars: 7, consts: [["nz-button", "", "nzType", "primary", 3, "click"], ["nzTitle", "Create", 3, "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzVisible", "nzOnClose"], ["nz-form", ""], ["nz-row", "", "nzGutter", "8"], ["nz-col", "", "nzSpan", "12"], ["nz-input", "", "placeholder", "please enter user name"], ["nzAddOnBefore", "http://", "nzAddOnAfter", ".com"], ["type", "text", "nz-input", "", "placeholder", "please enter url"], ["nzPlaceHolder", "Please select an owner"], ["nzPlaceHolder", "Please choose the type"], ["nzPlaceHolder", "Please choose the approver"], ["nz-col", "", "nzSpan", "24"], ["nz-input", "", "placeholder", "please enter url description", 3, "nzAutosize"]], template: function NzDemoDrawerFromDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerFromDrawerComponent_Template_button_click_0_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerFromDrawerComponent_Template_nz_drawer_nzOnClose_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "div", 4)(6, "nz-form-item")(7, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "nz-form-item")(13, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-control")(16, "nz-input-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3)(19, "div", 4)(20, "nz-form-item")(21, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4)(26, "nz-form-item")(27, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nz-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3)(32, "div", 4)(33, "nz-form-item")(34, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Approver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "nz-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4)(39, "nz-form-item")(40, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "DateTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "nz-range-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3)(45, "div", 11)(46, "nz-form-item")(47, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("nzMaskClosable", false)("nzWidth", 720)("nzVisible", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__.NzDrawerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputGroupComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_10__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_10__.NzRangePickerComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzAutosizeDirective], encapsulation: 2 });


/***/ }),

/***/ 66686:
/*!***************************************************!*\
  !*** ./src/app/components/drawer/index.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDrawerModule": () => (/* binding */ NzDemoDrawerModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 62890);
/* harmony import */ var _basic_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-right */ 20229);
/* harmony import */ var _from_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-drawer */ 8558);
/* harmony import */ var _multi_level_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multi-level-drawer */ 39605);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placement */ 90736);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ 23971);
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile */ 23862);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zh.component */ 135);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./en.component */ 2784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 33813);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 35390);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tag */ 27902);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 98372);
























class NzDemoDrawerModule {
}
NzDemoDrawerModule.ɵfac = function NzDemoDrawerModule_Factory(t) { return new (t || NzDemoDrawerModule)(); };
NzDemoDrawerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: NzDemoDrawerModule });
NzDemoDrawerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoDrawerEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoDrawerZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](NzDemoDrawerModule, { declarations: [_basic_right__WEBPACK_IMPORTED_MODULE_2__.NzDemoDrawerBasicRightComponent,
        _from_drawer__WEBPACK_IMPORTED_MODULE_3__.NzDemoDrawerFromDrawerComponent,
        _multi_level_drawer__WEBPACK_IMPORTED_MODULE_4__.NzDemoDrawerMultiLevelDrawerComponent,
        _placement__WEBPACK_IMPORTED_MODULE_5__.NzDemoDrawerPlacementComponent,
        _service__WEBPACK_IMPORTED_MODULE_6__.NzDemoDrawerServiceComponent,
        _service__WEBPACK_IMPORTED_MODULE_6__.NzDrawerCustomComponent,
        _user_profile__WEBPACK_IMPORTED_MODULE_7__.NzDemoDrawerUserProfileComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoDrawerZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoDrawerEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_12__.NzDrawerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__.NzFormModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_16__.NzDatePickerModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzSelectModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__.NzTagModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__.NzListModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__.NzRadioModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__.NzDividerModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__.NzDescriptionsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 62890:
/*!*********************************************!*\
  !*** ./src/app/components/drawer/module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 33813);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 35390);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tag */ 27902);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 98372);











const moduleList = [
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_0__.NzDrawerModule,
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule,
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormModule,
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__.NzInputModule,
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__.NzDatePickerModule,
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__.NzSelectModule,
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__.NzTagModule,
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__.NzListModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__.NzRadioModule,
    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__.NzDividerModule,
    ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_10__.NzDescriptionsModule
];


/***/ }),

/***/ 39605:
/*!*********************************************************!*\
  !*** ./src/app/components/drawer/multi-level-drawer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDrawerMultiLevelDrawerComponent": () => (/* binding */ NzDemoDrawerMultiLevelDrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 33813);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tag */ 27902);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);











function NzDemoDrawerMultiLevelDrawerComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-item", 10);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzContent", item_r2);
} }
class NzDemoDrawerMultiLevelDrawerComponent {
    constructor() {
        this.visible = false;
        this.childrenVisible = false;
        this.vegetables = ['asparagus', 'bamboo', 'potato', 'carrot', 'cilantro', 'potato', 'eggplant'];
    }
    open() {
        this.visible = true;
    }
    close() {
        this.visible = false;
    }
    openChildren() {
        this.childrenVisible = true;
    }
    closeChildren() {
        this.childrenVisible = false;
    }
}
NzDemoDrawerMultiLevelDrawerComponent.ɵfac = function NzDemoDrawerMultiLevelDrawerComponent_Factory(t) { return new (t || NzDemoDrawerMultiLevelDrawerComponent)(); };
NzDemoDrawerMultiLevelDrawerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDrawerMultiLevelDrawerComponent, selectors: [["nz-demo-drawer-multi-level-drawer"]], decls: 27, vars: 8, consts: [["nz-button", "", "nzType", "primary", 3, "click"], ["nzTitle", "Cookbook", 3, "nzClosable", "nzOffsetX", "nzWidth", "nzVisible", "nzOnClose"], ["nz-form", ""], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], ["nz-input", "", "placeholder", "please enter cookbook name"], [3, "click"], ["nzTitle", "Food", 3, "nzClosable", "nzVisible", "nzOnClose"], [3, "nzDataSource", "nzRenderItem"], ["item", ""], [3, "nzContent"]], template: function NzDemoDrawerMultiLevelDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerMultiLevelDrawerComponent_Template_button_click_0_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Cookbook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerMultiLevelDrawerComponent_Template_nz_drawer_nzOnClose_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "div", 4)(6, "nz-form-item")(7, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3)(12, "div", 4)(13, "nz-form-item")(14, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-control")(17, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "potato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "eggplant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-tag", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerMultiLevelDrawerComponent_Template_nz_tag_click_21_listener() { return ctx.openChildren(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-drawer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerMultiLevelDrawerComponent_Template_nz_drawer_nzOnClose_23_listener() { return ctx.closeChildren(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NzDemoDrawerMultiLevelDrawerComponent_ng_template_25_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClosable", false)("nzOffsetX", ctx.childrenVisible ? 180 : 0)("nzWidth", 320)("nzVisible", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClosable", false)("nzVisible", ctx.childrenVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx.vegetables)("nzRenderItem", _r0);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__.NzDrawerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__.NzTagComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__.NzListItemComponent], encapsulation: 2 });


/***/ }),

/***/ 90736:
/*!************************************************!*\
  !*** ./src/app/components/drawer/placement.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDrawerPlacementComponent": () => (/* binding */ NzDemoDrawerPlacementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 33813);







class NzDemoDrawerPlacementComponent {
    constructor() {
        this.visible = false;
        this.placement = 'left';
    }
    open() {
        this.visible = true;
    }
    close() {
        this.visible = false;
    }
}
NzDemoDrawerPlacementComponent.ɵfac = function NzDemoDrawerPlacementComponent_Factory(t) { return new (t || NzDemoDrawerPlacementComponent)(); };
NzDemoDrawerPlacementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDrawerPlacementComponent, selectors: [["nz-demo-drawer-placement"]], decls: 18, vars: 4, consts: [[3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "top"], ["nz-radio", "", "nzValue", "right"], ["nz-radio", "", "nzValue", "bottom"], ["nz-radio", "", "nzValue", "left"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nzTitle", "Basic Drawer", 3, "nzClosable", "nzVisible", "nzPlacement", "nzOnClose"]], template: function NzDemoDrawerPlacementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDrawerPlacementComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.placement = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerPlacementComponent_Template_button_click_9_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-drawer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerPlacementComponent_Template_nz_drawer_nzOnClose_11_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.placement);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClosable", false)("nzVisible", ctx.visible)("nzPlacement", ctx.placement);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerComponent], encapsulation: 2 });


/***/ }),

/***/ 23971:
/*!**********************************************!*\
  !*** ./src/app/components/drawer/service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDrawerServiceComponent": () => (/* binding */ NzDemoDrawerServiceComponent),
/* harmony export */   "NzDrawerCustomComponent": () => (/* binding */ NzDrawerCustomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 33813);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);










const _c0 = ["drawerTemplate"];
function NzDemoDrawerServiceComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerServiceComponent_ng_template_0_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const drawerRef_r3 = restoredCtx.drawerRef; return drawerRef_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" value: ", data_r2 == null ? null : data_r2.value, " ");
} }
class NzDemoDrawerServiceComponent {
    constructor(drawerService) {
        this.drawerService = drawerService;
        this.value = 'ng';
    }
    openTemplate() {
        const drawerRef = this.drawerService.create({
            nzTitle: 'Template',
            nzContent: this.drawerTemplate,
            nzContentParams: {
                value: this.value
            }
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Template) open');
        });
        drawerRef.afterClose.subscribe(() => {
            console.log('Drawer(Template) close');
        });
    }
    openComponent() {
        const drawerRef = this.drawerService.create({
            nzTitle: 'Component',
            nzContent: NzDrawerCustomComponent,
            nzContentParams: {
                value: this.value
            }
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            console.log(data);
            if (typeof data === 'string') {
                this.value = data;
            }
        });
    }
}
NzDemoDrawerServiceComponent.ɵfac = function NzDemoDrawerServiceComponent_Factory(t) { return new (t || NzDemoDrawerServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerService)); };
NzDemoDrawerServiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDrawerServiceComponent, selectors: [["nz-demo-drawer-service"]], viewQuery: function NzDemoDrawerServiceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawerTemplate = _t.first);
    } }, decls: 10, vars: 1, consts: [["drawerTemplate", ""], ["nz-form", ""], ["nz-input", "", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function NzDemoDrawerServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoDrawerServiceComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "nz-form-item")(4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDrawerServiceComponent_Template_input_ngModelChange_4_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerServiceComponent_Template_button_click_5_listener() { return ctx.openTemplate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Use Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerServiceComponent_Template_button_click_8_listener() { return ctx.openComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Use Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__.NzFormDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__.NzFormItemComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel], encapsulation: 2 });
class NzDrawerCustomComponent {
    constructor(drawerRef) {
        this.drawerRef = drawerRef;
        this.value = '';
    }
    close() {
        this.drawerRef.close(this.value);
    }
}
NzDrawerCustomComponent.ɵfac = function NzDrawerCustomComponent_Factory(t) { return new (t || NzDrawerCustomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerRef)); };
NzDrawerCustomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDrawerCustomComponent, selectors: [["nz-drawer-custom-component"]], inputs: { value: "value" }, decls: 5, vars: 1, consts: [["nz-input", "", 3, "ngModel", "ngModelChange"], ["nzType", "primary", "nz-button", "", 3, "click"]], template: function NzDrawerCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDrawerCustomComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDrawerCustomComponent_Template_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__.NzDividerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 23862:
/*!***************************************************!*\
  !*** ./src/app/components/drawer/user-profile.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDrawerUserProfileComponent": () => (/* binding */ NzDemoDrawerUserProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 33813);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 98372);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);





function NzDemoDrawerUserProfileComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerUserProfileComponent_ng_template_1_ng_template_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzDemoDrawerUserProfileComponent_ng_template_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
} }
const _c0 = function (a0) { return [a0]; };
function NzDemoDrawerUserProfileComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoDrawerUserProfileComponent_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-list-item-meta", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoDrawerUserProfileComponent_ng_template_1_ng_template_4_Template, 2, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, _r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r5);
} }
class NzDemoDrawerUserProfileComponent {
    constructor() {
        this.data = [
            {
                name: 'Lily'
            },
            {
                name: 'Lily'
            }
        ];
        this.visible = false;
    }
    open() {
        this.visible = true;
    }
    close() {
        this.visible = false;
    }
}
NzDemoDrawerUserProfileComponent.ɵfac = function NzDemoDrawerUserProfileComponent_Factory(t) { return new (t || NzDemoDrawerUserProfileComponent)(); };
NzDemoDrawerUserProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDrawerUserProfileComponent, selectors: [["nz-demo-drawer-user-profile"]], decls: 42, vars: 24, consts: [[3, "nzDataSource", "nzRenderItem", "nzItemLayout"], ["item", ""], [3, "nzVisible", "nzWidth", "nzClosable", "nzOnClose"], [1, "title", 2, "margin-bottom", "24px"], ["nzTitle", "Personal", 3, "nzColumn"], ["nzTitle", "Full Name", 3, "nzSpan"], ["nzTitle", "Account", 3, "nzSpan"], ["nzTitle", "City", 3, "nzSpan"], ["nzTitle", "Country", 3, "nzSpan"], ["nzTitle", "Birthday", 3, "nzSpan"], ["nzTitle", "Website", 3, "nzSpan"], ["nzTitle", "Message", 3, "nzSpan"], ["nzTitle", "Company", 3, "nzColumn"], ["nzTitle", "Position", 3, "nzSpan"], ["nzTitle", "Responsibilities", 3, "nzSpan"], ["nzTitle", "Department", 3, "nzSpan"], ["nzTitle", "Supervisor", 3, "nzSpan"], ["nzTitle", "Skills", 3, "nzSpan"], ["nzTitle", "Contacts", 3, "nzColumn"], ["nzTitle", "Email", 3, "nzSpan"], ["nzTitle", "Phone Number", 3, "nzSpan"], ["nzTitle", "Github", 3, "nzSpan"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd", "target", "_blank"], [3, "nzActions"], ["viewAction", ""], ["nzAvatar", "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png", "nzDescription", "Progresser AFX", 3, "nzTitle"], ["nzTitle", ""], [3, "click"], ["href", "https://ng.ant.design"]], template: function NzDemoDrawerUserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoDrawerUserProfileComponent_ng_template_1_Template, 6, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-drawer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerUserProfileComponent_Template_nz_drawer_nzOnClose_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-descriptions", 4)(7, "nz-descriptions-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-descriptions-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "AntDesign@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-descriptions-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HangZhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-descriptions-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "China\uD83C\uDDE8\uD83C\uDDF3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-descriptions-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "February 2,1900");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-descriptions-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-descriptions-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Make things as simple as possible but no simpler. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-descriptions", 12)(23, "nz-descriptions-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Programmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-descriptions-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Coding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-descriptions-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "AFX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-descriptions-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-descriptions-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-descriptions", 18)(35, "nz-descriptions-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "AntDesign@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-descriptions-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "+86 181 0000 0000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nz-descriptions-item", 21)(40, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "github.com/NG-ZORRO/ng-zorro-antd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx.data)("nzRenderItem", _r0)("nzItemLayout", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.visible)("nzWidth", 640)("nzClosable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColumn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColumn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColumn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 2);
    } }, directives: [ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemMetaComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_3__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_3__.NzDescriptionsItemComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__.NzDividerComponent], styles: [".title[_ngcontent-%COMP%] {\n        font-size: 16px;\n        color: rgba(0, 0, 0, 0.85);\n        line-height: 24px;\n        display: block;\n        margin-bottom: 16px;\n      }\n      .item-wrap[_ngcontent-%COMP%] {\n        font-size: 14px;\n        line-height: 22px;\n        margin-bottom: 7px;\n        color: rgba(0, 0, 0, 0.65);\n      }\n      .label[_ngcontent-%COMP%] {\n        margin-right: 8px;\n        display: inline-block;\n        color: rgba(0, 0, 0, 0.85);\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxlQUFlO1FBQ2YsMEJBQTBCO1FBQzFCLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsbUJBQW1CO01BQ3JCO01BQ0E7UUFDRSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQiwwQkFBMEI7TUFDNUI7TUFDQTtRQUNFLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsMEJBQTBCO01BQzVCIiwiZmlsZSI6InVzZXItcHJvZmlsZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuICAgICAgLml0ZW0td3JhcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gICAgICB9XG4gICAgICAubGFiZWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 135:
/*!***************************************************!*\
  !*** ./src/app/components/drawer/zh.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDrawerZhComponent": () => (/* binding */ NzDemoDrawerZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-right */ 20229);
/* harmony import */ var _from_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from-drawer */ 8558);
/* harmony import */ var _multi_level_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multi-level-drawer */ 39605);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placement */ 90736);
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile */ 23862);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ 23971);














class NzDemoDrawerZhComponent {
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
NzDemoDrawerZhComponent.ɵfac = function NzDemoDrawerZhComponent_Factory(t) { return new (t || NzDemoDrawerZhComponent)(); };
NzDemoDrawerZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NzDemoDrawerZhComponent, selectors: [["nz-demo-drawer"]], viewQuery: function NzDemoDrawerZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 781, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-drawer-demo-basic-right", "nzTitle", "\u57FA\u7840\u62BD\u5C49"], ["nzHref", "#components-drawer-demo-placement", "nzTitle", "\u81EA\u5B9A\u4E49\u4F4D\u7F6E"], ["nzHref", "#components-drawer-demo-from-drawer", "nzTitle", "\u5BF9\u8C61\u7F16\u8F91"], ["nzHref", "#components-drawer-demo-user-profile", "nzTitle", "\u4FE1\u606F\u9884\u89C8\u62BD\u5C49"], ["nzHref", "#components-drawer-demo-multi-level-drawer", "nzTitle", "\u591A\u5C42\u62BD\u5C49"], ["nzHref", "#components-drawer-demo-service", "nzTitle", "\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u7840\u62BD\u5C49", "nzSelector", "nz-demo-drawer-basic-right", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-basic-right <name>", "nzComponentName", "NzDemoDrawerBasicRightComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u5BF9\u8C61\u7F16\u8F91", "nzSelector", "nz-demo-drawer-from-drawer", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-from-drawer <name>", "nzComponentName", "NzDemoDrawerFromDrawerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u591A\u5C42\u62BD\u5C49", "nzSelector", "nz-demo-drawer-multi-level-drawer", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-multi-level-drawer <name>", "nzComponentName", "NzDemoDrawerMultiLevelDrawerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u4F4D\u7F6E", "nzSelector", "nz-demo-drawer-placement", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-placement <name>", "nzComponentName", "NzDemoDrawerPlacementComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4FE1\u606F\u9884\u89C8\u62BD\u5C49", "nzSelector", "nz-demo-drawer-user-profile", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-user-profile <name>", "nzComponentName", "NzDemoDrawerUserProfileComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA", "nzSelector", "nz-demo-drawer-service", "nzGenerateCommand", "ng g ng-zorro-antd:drawer-service <name>", "nzComponentName", "NzDemoDrawerServiceComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-drawer"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-drawer'", 1, "anchor"], ["id", "nzdrawerservice"], [1, "api-type-label", "service"], ["onclick", "window.location.hash = 'nzdrawerservice'", 1, "anchor"], ["id", "nzdraweroptions"], ["onclick", "window.location.hash = 'nzdraweroptions'", 1, "anchor"], ["id", "nzdrawerref"], ["onclick", "window.location.hash = 'nzdrawerref'", 1, "anchor"], ["id", "\u65B9\u6CD5"], ["onclick", "window.location.hash = '\u65B9\u6CD5'", 1, "anchor"], ["id", "\u5C5E\u6027"], ["onclick", "window.location.hash = '\u5C5E\u6027'", 1, "anchor"]], template: function NzDemoDrawerZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzClick", function NzDemoDrawerZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "section", 9)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u62BD\u5C49");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\u62BD\u5C49\u4ECE\u7236\u7A97\u4F53\u8FB9\u7F18\u6ED1\u5165\uFF0C\u8986\u76D6\u4F4F\u90E8\u5206\u7236\u7A97\u4F53\u5185\u5BB9\u3002\u7528\u6237\u5728\u62BD\u5C49\u5185\u64CD\u4F5C\u65F6\u4E0D\u5FC5\u79BB\u5F00\u5F53\u524D\u4EFB\u52A1\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5E73\u6ED1\u5730\u56DE\u5230\u5230\u539F\u4EFB\u52A1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "h2", 14)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ul")(27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\u5F53\u9700\u8981\u4E00\u4E2A\u9644\u52A0\u7684\u9762\u677F\u6765\u63A7\u5236\u7236\u7A97\u4F53\u5185\u5BB9\uFF0C\u8FD9\u4E2A\u9762\u677F\u5728\u9700\u8981\u65F6\u547C\u51FA\u3002\u6BD4\u5982\uFF0C\u63A7\u5236\u754C\u9762\u5C55\u793A\u6837\u5F0F\uFF0C\u5F80\u754C\u9762\u4E2D\u6DFB\u52A0\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\u5F53\u9700\u8981\u5728\u5F53\u524D\u4EFB\u52A1\u6D41\u4E2D\u63D2\u5165\u4E34\u65F6\u4EFB\u52A1\uFF0C\u521B\u5EFA\u6216\u9884\u89C8\u9644\u52A0\u5185\u5BB9\u3002\u6BD4\u5982\u5C55\u793A\u534F\u8BAE\u6761\u6B3E\uFF0C\u521B\u5EFA\u5B50\u5BF9\u8C61\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "pre", 16)(32, "code")(33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, " NzDrawerModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "'ng-zorro-antd/drawer'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "h2")(50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NzDemoDrawerZhComponent_Template_i_click_52_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 21)(54, "div", 22)(55, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "nz-demo-drawer-basic-right", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "\u57FA\u7840\u62BD\u5C49\uFF0C\u70B9\u51FB\u89E6\u53D1\u6309\u94AE\u62BD\u5C49\u4ECE\u53F3\u6ED1\u51FA\uFF0C\u70B9\u51FB\u906E\u7F69\u533A\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "nz-demo-drawer-from-drawer", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "\u7528\u4E8E\u627F\u8F7D\u7F16\u8F91\u76F8\u5173\u64CD\u4F5C\uFF0C\u9700\u8981\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u5173\u95ED\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](66, "nz-demo-drawer-multi-level-drawer", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "\u5728\u62BD\u5C49\u5185\u6253\u5F00\u65B0\u7684\u62BD\u5C49\uFF0C\u7528\u4EE5\u89E3\u51B3\u591A\u5206\u652F\u4EFB\u52A1\u7684\u590D\u6742\u72B6\u51B5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 22)(71, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "nz-demo-drawer-placement", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "\u81EA\u5B9A\u4E49\u4F4D\u7F6E\uFF0C\u70B9\u51FB\u89E6\u53D1\u6309\u94AE\u62BD\u5C49\u4ECE\u76F8\u5E94\u7684\u4F4D\u7F6E\u6ED1\u51FA\uFF0C\u70B9\u51FB\u906E\u7F69\u533A\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "nz-demo-drawer-user-profile", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "\u9700\u8981\u5FEB\u901F\u9884\u89C8\u5BF9\u8C61\u6982\u8981\u65F6\u4F7F\u7528\uFF0C\u70B9\u51FB\u906E\u7F69\u533A\u5173\u95ED\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](82, "nz-demo-drawer-service", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Drawer \u7684 service \u7528\u6CD5\uFF0C\u793A\u4F8B\u4E2D\u6F14\u793A\u4E86\u7528\u6237\u81EA\u5B9A\u4E49\u6A21\u677F\u3001\u81EA\u5B9A\u4E49component\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "h2", 32)(88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "h3", 34)(93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "nz-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "table")(100, "thead")(101, "tr")(102, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "tbody")(113, "tr")(114, "td")(115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](116, "[nzClosable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, "\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "td")(120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](121, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "td")(123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "tr")(127, "td")(128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](129, "[nzMaskClosable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "td")(133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](134, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "td")(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](139, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "tr")(141, "td")(142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](143, "[nzMask]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](145, "\u662F\u5426\u5C55\u793A\u906E\u7F69");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "td")(147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](148, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](149, "td")(150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](153, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "tr")(155, "td")(156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](157, "[nzMaskStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](159, "\u906E\u7F69\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "td")(161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](162, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](163, "td")(164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "tr")(168, "td")(169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](170, "[nzKeyboard]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](172, "\u662F\u5426\u652F\u6301\u952E\u76D8 esc \u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "td")(174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](175, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](176, "td")(177, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](178, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](180, "tr")(181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, "[nzBodyStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](185, "Drawer body \u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "td")(187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](188, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "td")(190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](191, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](193, "tr")(194, "td")(195, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](196, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](198, "\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](199, "td")(200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](201, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](203, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](205, "tr")(206, "td")(207, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](208, "[nzVisible]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](210, "Drawer \u662F\u5426\u53EF\u89C1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](211, "td")(212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](213, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](215, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](216, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](217, "tr")(218, "td")(219, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](220, "[nzPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](222, "\u62BD\u5C49\u7684\u65B9\u5411");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](223, "td")(224, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](225, "'top' | 'right' | 'bottom' | 'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](226, "td")(227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](228, "'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](230, "tr")(231, "td")(232, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](233, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](234, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](235, "\u5BBD\u5EA6, \u53EA\u5728\u65B9\u5411\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](236, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](237, "'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](238, "\u6216");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](240, "'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](241, " \u65F6\u751F\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](242, "td")(243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](244, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](245, "td")(246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](247, "256");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](249, "tr")(250, "td")(251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](252, "[nzHeight]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](254, "\u9AD8\u5EA6, \u53EA\u5728\u65B9\u5411\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](256, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](257, "\u6216");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](259, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](260, " \u65F6\u751F\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](261, "td")(262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](263, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](264, "td")(265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](266, "256");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](268, "tr")(269, "td")(270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](271, "[nzOffsetX]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](273, "x \u5750\u6807\u79FB\u91CF(px), \u53EA\u5728\u65B9\u5411\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](275, "'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](276, "\u6216");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](278, "'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](279, " \u65F6\u751F\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](280, "td")(281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](282, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](283, "td")(284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](285, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](286, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](287, "tr")(288, "td")(289, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](290, "[nzOffsetY]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](292, "y \u5750\u6807\u79FB\u91CF(px), \u9AD8\u5EA6, \u53EA\u5728\u65B9\u5411\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](294, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](295, "\u6216");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](297, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](298, " \u65F6\u751F\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](299, "td")(300, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](301, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](302, "td")(303, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](304, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](306, "tr")(307, "td")(308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](309, "[nzWrapClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](311, "\u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](312, "td")(313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](314, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](316, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](318, "tr")(319, "td")(320, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](321, "[nzZIndex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](323, "\u8BBE\u7F6E Drawer \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](325, "z-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](328, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](329, "td")(330, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](331, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](333, "tr")(334, "td")(335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](336, "(nzOnClose)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](338, "\u70B9\u51FB\u906E\u7F69\u5C42\u6216\u53F3\u4E0A\u89D2\u53C9\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](339, "td")(340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](341, "EventEmitter<MouseEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](343, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](345, "h3", 37)(346, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](347, "NzDrawerService");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](348, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](349, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](350, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](351, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](352, "table")(353, "thead")(354, "tr")(355, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](356, "\u65B9\u6CD5\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](357, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](358, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](359, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](360, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](361, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](362, "\u8FD4\u56DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](363, "tbody")(364, "tr")(365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](366, "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](368, "\u521B\u5EFA\u5E76\u6253\u5F00\u4E00\u4E2A Drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](369, "td")(370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](371, "NzDrawerOptions<T, D, R>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](372, "td")(373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](374, "NzDrawerRef<R>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](375, "h3", 40)(376, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](377, "NzDrawerOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](378, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](379, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](380, "table")(381, "thead")(382, "tr")(383, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](384, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](385, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](386, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](387, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](388, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](389, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](390, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](391, "tbody")(392, "tr")(393, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](394, "nzContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](395, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](396, "Drawer body \u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](397, "td")(398, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](399, "TemplateRef<{ $implicit: D, drawerRef: NzDrawerRef }> | Type<T>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](400, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](401, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](402, "tr")(403, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](404, "nzContentParams");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](405, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](406, "\u5185\u5BB9\u7EC4\u4EF6\u7684\u8F93\u5165\u53C2\u6570 / Template\u7684 context");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](407, "td")(408, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](409, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](411, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](412, "tr")(413, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](414, "nzOnCancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](416, "\u70B9\u51FB\u906E\u7F69\u5C42\u6216\u53F3\u4E0A\u89D2\u53C9\u65F6\u6267\u884C,\u8BE5\u51FD\u6570\u53EF\u8FD4\u56DE promise \u5F85\u6267\u884C\u5B8C\u6BD5\u6216 promise \u7ED3\u675F\u65F6\uFF0C\u5C06\u81EA\u52A8\u5173\u95ED\u5BF9\u8BDD\u6846\uFF08\u8FD4\u56DEfalse\u53EF\u963B\u6B62\u5173\u95ED\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](417, "td")(418, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](419, "() => Promise<any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](421, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](422, "tr")(423, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](424, "nzClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](425, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](426, "\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](427, "td")(428, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](429, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](430, "td")(431, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](432, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](433, "tr")(434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](435, "nzMaskClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](437, "\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](438, "td")(439, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](440, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](441, "td")(442, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](443, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](444, "tr")(445, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](446, "nzMask");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](447, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](448, "\u662F\u5426\u5C55\u793A\u906E\u7F69");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](449, "td")(450, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](451, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](452, "td")(453, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](454, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](455, "tr")(456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](457, "nzKeyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](459, "\u662F\u5426\u652F\u6301\u952E\u76D8esc\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](460, "td")(461, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](462, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](463, "td")(464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](465, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](466, "tr")(467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](468, "nzMaskStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](469, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](470, "\u906E\u7F69\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](471, "td")(472, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](473, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](474, "td")(475, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](476, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](477, "tr")(478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](479, "nzBodyStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](480, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](481, "Modal body \u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](482, "td")(483, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](484, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](485, "td")(486, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](487, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](488, "tr")(489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](490, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](492, "\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](493, "td")(494, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](495, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](496, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](497, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](498, "tr")(499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](500, "nzWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](502, "\u5BBD\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](503, "td")(504, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](505, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](506, "td")(507, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](508, "256");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](509, "tr")(510, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](511, "nzHeight");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](512, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](513, "\u9AD8\u5EA6, \u53EA\u5728\u65B9\u5411\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](514, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](515, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](516, "\u6216");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](517, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](518, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](519, " \u65F6\u751F\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](520, "td")(521, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](522, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](523, "td")(524, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](525, "256");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](526, "tr")(527, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](528, "nzWrapClassName");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](529, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](530, "\u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](531, "td")(532, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](533, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](535, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](536, "tr")(537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](538, "nzZIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](539, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](540, "\u8BBE\u7F6E Drawer \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](541, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](542, "z-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](543, "td")(544, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](545, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](546, "td")(547, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](548, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](549, "tr")(550, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](551, "nzPlacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](552, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](553, "\u62BD\u5C49\u7684\u65B9\u5411");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](554, "td")(555, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](556, "'top' | 'right' | 'bottom' | 'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](557, "td")(558, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](559, "'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](560, "tr")(561, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](562, "nzOffsetX");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](564, "x \u5750\u6807\u79FB\u91CF(px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](565, "td")(566, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](567, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](568, "td")(569, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](570, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](571, "tr")(572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](573, "nzOffsetY");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](575, "y \u5750\u6807\u79FB\u91CF(px), \u9AD8\u5EA6, \u53EA\u5728\u65B9\u5411\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](576, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](577, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](578, "\u6216");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](579, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](580, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](581, " \u65F6\u751F\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](582, "td")(583, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](584, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](585, "td")(586, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](587, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](588, "h3", 42)(589, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](590, "NzDrawerRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](591, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](592, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](593, "h4", 44)(594, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](595, "\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](596, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](597, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](598, "table")(599, "thead")(600, "tr")(601, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](602, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](603, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](604, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](605, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](606, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](607, "tbody")(608, "tr")(609, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](610, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](611, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](612, "\u5173\u95ED Drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](613, "td")(614, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](615, "(result?: R) => void");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](616, "tr")(617, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](618, "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](619, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](620, "\u6253\u5F00 Drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](621, "td")(622, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](623, "() => void");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](624, "h4", 46)(625, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](626, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](627, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](628, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](629, "table")(630, "thead")(631, "tr")(632, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](633, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](634, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](635, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](636, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](637, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](638, "tbody")(639, "tr")(640, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](641, "afterOpen");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](642, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](643, "\u6253\u5F00\u4E4B\u540E\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](644, "td")(645, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](646, "Observable<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](647, "tr")(648, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](649, "afterClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](650, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](651, "\u5173\u95ED\u4E4B\u540E\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](652, "td")(653, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](654, "Observable<R>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](655, "tr")(656, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](657, "nzClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](658, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](659, "\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](660, "td")(661, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](662, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](663, "tr")(664, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](665, "nzMaskClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](666, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](667, "\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](668, "td")(669, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](670, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](671, "tr")(672, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](673, "nzMask");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](674, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](675, "\u662F\u5426\u5C55\u793A\u906E\u7F69");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](676, "td")(677, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](678, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](679, "tr")(680, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](681, "nzMaskStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](682, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](683, "\u906E\u7F69\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](684, "td")(685, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](686, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](687, "tr")(688, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](689, "nzKeyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](690, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](691, "\u662F\u5426\u652F\u6301\u952E\u76D8esc\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](692, "td")(693, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](694, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](695, "tr")(696, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](697, "nzBodyStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](698, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](699, "Modal body \u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](700, "td")(701, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](702, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](703, "tr")(704, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](705, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](706, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](707, "\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](708, "td")(709, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](710, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](711, "tr")(712, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](713, "nzWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](714, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](715, "\u5BBD\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](716, "td")(717, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](718, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](719, "tr")(720, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](721, "nzHeight");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](722, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](723, "\u9AD8\u5EA6, \u53EA\u5728\u65B9\u5411\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](724, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](725, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](726, "\u6216");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](727, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](728, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](729, " \u65F6\u751F\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](730, "td")(731, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](732, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](733, "tr")(734, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](735, "nzWrapClassName");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](736, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](737, "\u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](738, "td")(739, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](740, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](741, "tr")(742, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](743, "nzZIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](744, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](745, "\u8BBE\u7F6E Drawer \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](746, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](747, "z-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](748, "td")(749, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](750, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](751, "tr")(752, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](753, "nzPlacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](754, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](755, "\u62BD\u5C49\u7684\u65B9\u5411");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](756, "td")(757, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](758, "'top' | 'right' | 'bottom' | 'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](759, "tr")(760, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](761, "nzOffsetX");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](762, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](763, "x \u5750\u6807\u79FB\u91CF(px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](764, "td")(765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](766, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](767, "tr")(768, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](769, "nzOffsetY");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](770, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](771, "y \u5750\u6807\u79FB\u91CF(px), \u9AD8\u5EA6, \u53EA\u5728\u65B9\u5411\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](772, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](773, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](774, "\u6216");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](775, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](776, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](777, " \u65F6\u751F\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](778, "td")(779, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](780, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-basic-right")("nzLink", "components-drawer-demo-basic-right")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/basic-right.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-from-drawer")("nzLink", "components-drawer-demo-from-drawer")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/from-drawer.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-multi-level-drawer")("nzLink", "components-drawer-demo-multi-level-drawer")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/multi-level-drawer.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-placement")("nzLink", "components-drawer-demo-placement")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/placement.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-user-profile")("nzLink", "components-drawer-demo-user-profile")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/user-profile.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-drawer-demo-service")("nzLink", "components-drawer-demo-service")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer/demo/service.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic_right__WEBPACK_IMPORTED_MODULE_1__.NzDemoDrawerBasicRightComponent, _from_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDemoDrawerFromDrawerComponent, _multi_level_drawer__WEBPACK_IMPORTED_MODULE_3__.NzDemoDrawerMultiLevelDrawerComponent, _placement__WEBPACK_IMPORTED_MODULE_4__.NzDemoDrawerPlacementComponent, _user_profile__WEBPACK_IMPORTED_MODULE_5__.NzDemoDrawerUserProfileComponent, _service__WEBPACK_IMPORTED_MODULE_6__.NzDemoDrawerServiceComponent], encapsulation: 2 });


/***/ }),

/***/ 27902:
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzTagComponent": () => (/* binding */ NzTagComponent),
/* harmony export */   "NzTagModule": () => (/* binding */ NzTagModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 99052);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 87511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/color */ 50959);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 41687);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */





function NzTagComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.closeTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class NzTagComponent {
    constructor(cdr, renderer, elementRef, directionality) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.isPresetColor = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-tag');
    }
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
        }
    }
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    clearPresetColor() {
        const hostElement = this.elementRef.nativeElement;
        // /(ant-tag-(?:pink|red|...))/g
        const regexp = new RegExp(`(ant-tag-(?:${[...ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.presetColors, ...ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.statusColors].join('|')}))`, 'g');
        const classname = hostElement.classList.toString();
        const matches = [];
        let match = regexp.exec(classname);
        while (match !== null) {
            matches.push(match[1]);
            match = regexp.exec(classname);
        }
        hostElement.classList.remove(...matches);
    }
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    setPresetColor() {
        const hostElement = this.elementRef.nativeElement;
        this.clearPresetColor();
        if (!this.nzColor) {
            this.isPresetColor = false;
        }
        else {
            this.isPresetColor = (0,ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.isPresetColor)(this.nzColor) || (0,ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.isStatusColor)(this.nzColor);
        }
        if (this.isPresetColor) {
            hostElement.classList.add(`ant-tag-${this.nzColor}`);
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { nzColor } = changes;
        if (nzColor) {
            this.setPresetColor();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTagComponent.ɵfac = function NzTagComponent_Factory(t) { return new (t || NzTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8)); };
NzTagComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTagComponent, selectors: [["nz-tag"]], hostVars: 10, hostBindings: function NzTagComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTagComponent_click_HostBindingHandler() { return ctx.updateCheckedStatus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir === "rtl");
    } }, inputs: { nzMode: "nzMode", nzChecked: "nzChecked", nzColor: "nzColor" }, outputs: { nzOnClose: "nzOnClose", nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzTag"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "close", "class", "ant-tag-close-icon", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon", 3, "click"]], template: function NzTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzMode === "closeable");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzTagComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzTagComponent.propDecorators = {
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzOnClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.InputBoolean)()
], NzTagComponent.prototype, "nzChecked", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                template: `
    <ng-content></ng-content>
    <i
      nz-icon
      nzType="close"
      class="ant-tag-close-icon"
      *ngIf="nzMode === 'closeable'"
      tabindex="-1"
      (click)="closeTag($event)"
    ></i>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                host: {
                    '[style.background-color]': `isPresetColor ? '' : nzColor`,
                    '[class.ant-tag-has-color]': `nzColor && !isPresetColor`,
                    '[class.ant-tag-checkable]': `nzMode === 'checkable'`,
                    '[class.ant-tag-checkable-checked]': `nzChecked`,
                    '[class.ant-tag-rtl]': `dir === 'rtl'`,
                    '(click)': 'updateCheckedStatus()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzOnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTagModule {
}
NzTagModule.ɵfac = function NzTagModule_Factory(t) { return new (t || NzTagModule)(); };
NzTagModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzTagModule });
NzTagModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzTagModule, { declarations: function () { return [NzTagComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule]; }, exports: function () { return [NzTagComponent]; } }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=src_app_components_drawer_index_module_ts.js.map