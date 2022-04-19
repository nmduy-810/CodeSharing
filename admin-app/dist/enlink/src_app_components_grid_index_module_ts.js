"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_grid_index_module_ts"],{

/***/ 61325:
/*!******************************************!*\
  !*** ./src/app/components/grid/basic.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridBasicComponent": () => (/* binding */ NzDemoGridBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);


class NzDemoGridBasicComponent {
}
NzDemoGridBasicComponent.ɵfac = function NzDemoGridBasicComponent_Factory(t) { return new (t || NzDemoGridBasicComponent)(); };
NzDemoGridBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoGridBasicComponent, selectors: [["nz-demo-grid-basic"]], decls: 21, vars: 0, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "12"], ["nz-col", "", "nzSpan", "8"], ["nz-col", "", "nzSpan", "6"]], template: function NzDemoGridBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "col-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "col-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0)(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "col-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "col-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "col-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0)(13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective], encapsulation: 2 });


/***/ }),

/***/ 15558:
/*!*************************************************!*\
  !*** ./src/app/components/grid/en.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridEnComponent": () => (/* binding */ NzDemoGridEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 61325);
/* harmony import */ var _gutter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gutter */ 37105);
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offset */ 75099);
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort */ 79970);
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flex */ 60090);
/* harmony import */ var _flex_align__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flex-align */ 7999);
/* harmony import */ var _flex_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flex-order */ 25098);
/* harmony import */ var _flex_stretch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flex-stretch */ 59261);
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./responsive */ 75982);
/* harmony import */ var _responsive_more__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./responsive-more */ 26587);
/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./playground */ 49956);


















class NzDemoGridEnComponent {
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
NzDemoGridEnComponent.ɵfac = function NzDemoGridEnComponent_Factory(t) { return new (t || NzDemoGridEnComponent)(); };
NzDemoGridEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: NzDemoGridEnComponent, selectors: [["nz-demo-grid"]], viewQuery: function NzDemoGridEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 567, vars: 37, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-grid-demo-basic", "nzTitle", "Basic Grid"], ["nzHref", "#components-grid-demo-gutter", "nzTitle", "Grid Gutter"], ["nzHref", "#components-grid-demo-offset", "nzTitle", "Column offset"], ["nzHref", "#components-grid-demo-sort", "nzTitle", "Grid sort"], ["nzHref", "#components-grid-demo-flex", "nzTitle", "Layout"], ["nzHref", "#components-grid-demo-flex-align", "nzTitle", "Alignment"], ["nzHref", "#components-grid-demo-flex-order", "nzTitle", "Order"], ["nzHref", "#components-grid-demo-flex-stretch", "nzTitle", "Flex Stretch"], ["nzHref", "#components-grid-demo-responsive", "nzTitle", "Responsive"], ["nzHref", "#components-grid-demo-responsive-more", "nzTitle", "More responsive"], ["nzHref", "#components-grid-demo-playground", "nzTitle", "Playground"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "design-concept"], ["onclick", "window.location.hash = 'design-concept'", 1, "anchor"], [1, "grid-demo"], [1, "ant-row", "demo-row"], [1, "ant-col-24", "demo-col", "demo-col-1"], [1, "ant-col-6", "demo-col", "demo-col-2"], [1, "ant-col-6", "demo-col", "demo-col-3"], [1, "ant-col-8", "demo-col", "demo-col-4"], [1, "ant-col-8", "demo-col", "demo-col-5"], [1, "ant-col-12", "demo-col", "demo-col-1"], [1, "ant-col-12", "demo-col", "demo-col-3"], [1, "ant-col-16", "demo-col", "demo-col-4"], ["id", "outline"], ["onclick", "window.location.hash = 'outline'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Basic Grid", "nzSelector", "nz-demo-grid-basic", "nzGenerateCommand", "ng g ng-zorro-antd:grid-basic <name>", "nzComponentName", "NzDemoGridBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Grid Gutter", "nzSelector", "nz-demo-grid-gutter", "nzGenerateCommand", "ng g ng-zorro-antd:grid-gutter <name>", "nzComponentName", "NzDemoGridGutterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Column offset", "nzSelector", "nz-demo-grid-offset", "nzGenerateCommand", "ng g ng-zorro-antd:grid-offset <name>", "nzComponentName", "NzDemoGridOffsetComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Grid sort", "nzSelector", "nz-demo-grid-sort", "nzGenerateCommand", "ng g ng-zorro-antd:grid-sort <name>", "nzComponentName", "NzDemoGridSortComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Layout", "nzSelector", "nz-demo-grid-flex", "nzGenerateCommand", "ng g ng-zorro-antd:grid-flex <name>", "nzComponentName", "NzDemoGridFlexComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Alignment", "nzSelector", "nz-demo-grid-flex-align", "nzGenerateCommand", "ng g ng-zorro-antd:grid-flex-align <name>", "nzComponentName", "NzDemoGridFlexAlignComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Order", "nzSelector", "nz-demo-grid-flex-order", "nzGenerateCommand", "ng g ng-zorro-antd:grid-flex-order <name>", "nzComponentName", "NzDemoGridFlexOrderComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Flex Stretch", "nzSelector", "nz-demo-grid-flex-stretch", "nzGenerateCommand", "ng g ng-zorro-antd:grid-flex-stretch <name>", "nzComponentName", "NzDemoGridFlexStretchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Responsive", "nzSelector", "nz-demo-grid-responsive", "nzGenerateCommand", "ng g ng-zorro-antd:grid-responsive <name>", "nzComponentName", "NzDemoGridResponsiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "http://getbootstrap.com/css/#grid-media-queries"], ["nzTitle", "More responsive", "nzSelector", "nz-demo-grid-responsive-more", "nzGenerateCommand", "ng g ng-zorro-antd:grid-responsive-more <name>", "nzComponentName", "NzDemoGridResponsiveMoreComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Playground", "nzSelector", "nz-demo-grid-playground", "nzGenerateCommand", "ng g ng-zorro-antd:grid-playground <name>", "nzComponentName", "NzDemoGridPlaygroundComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-row]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-row]'", 1, "anchor"], ["id", "[nz-col]"], ["onclick", "window.location.hash = '[nz-col]'", 1, "anchor"], ["href", "https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints"]], template: function NzDemoGridEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzClick", function NzDemoGridEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "section", 14)(16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "span", 15)(19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "24 Grids System\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "h2", 19)(26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Design concept");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 21)(31, "div", 22)(32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, " 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 22)(35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, " 25% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38, " 25% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, " 25% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, " 25% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 22)(44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, " 33.33% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, " 33.33% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, " 33.33% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "div", 22)(51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, " 50% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, " 50% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 22)(56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57, " 66.66% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, " 33.33% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61, "In most business situations, Ant Design needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 sections.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "h2", 31)(65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66, "Outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, "In the grid system, we define the frame outside the information area based on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](72, "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, "column");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](76, ", to ensure that every area can have stable arrangement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78, "Following is a brief look at how it works:");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "ul")(80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81, "Establish a set of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83, "column");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, " in the horizontal space defined by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](87, " (abbreviated col)");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](89, "Your content elements should be placed directly in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91, "col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](92, ", and only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](93, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94, "col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](95, " should be placed directly in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](97, "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](99, "The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](101, "<div nz-col [nzSpan]=\"8\" />");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](104, "If the sum of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](106, "col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](107, " spans in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](109, "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](110, " are more than 24, then the overflowing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](112, "col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](113, " as a whole will start a new line arrangement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](115, "Our grid systems base on Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](117, "order");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](118, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](120, "Layout uses a 24 grid layout to define the width of each \"box\", but does not rigidly adhere to the grid layout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](121, "pre", 33)(122, "code")(123, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](124, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](125, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](126, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](127, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](128, " NzGridModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](130, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](131, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](132, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](133, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](134, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](135, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](136, "'ng-zorro-antd/grid'");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](137, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](138, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](139, "h2")(140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](141, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](142, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NzDemoGridEnComponent_Template_i_click_142_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](143, "div", 38)(144, "div", 39)(145, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](146, "nz-demo-grid-basic", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](147, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](149, "From the stack to the horizontal arrangement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](151, "You can create a basic grid system by using a single set of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](153, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](154, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](156, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](157, " grid assembly, all of the columns (");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](159, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](160, ") must be placed in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](162, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](163, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](164, "nz-code-box", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](165, "nz-demo-grid-gutter", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](166, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](168, "You can use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](170, "nzGutter");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](171, " property of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](173, "nzRow");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](174, " as grid spacing, we recommend set it to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](176, "(16 + 8n) px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](177, ". (");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](179, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](180, " stands for natural number.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](182, "You can set it to a object like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](184, "{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32 }");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](185, " for responsive design.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](186, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](187, "nz-demo-grid-offset", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](188, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](189, "p")(190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](191, "nzOffset");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](192, " can set the column to the right side. For example, using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](194, "nzOffset = \"4\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](195, " can set the element shifted to the right four columns width.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](196, "nz-code-box", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](197, "nz-demo-grid-sort", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](198, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](200, "By using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](202, "nzPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](203, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](205, "nzPull");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](206, " class you can easily change column order.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](207, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](208, "nz-demo-grid-flex", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](209, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](210, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](211, "Child elements depending on the value of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](213, "start");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](214, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](216, "center");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](217, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](219, "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](220, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](222, "space-between");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](223, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](224, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](225, "space-around");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](226, ", which are defined in its parent node layout mode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](227, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](228, "nz-demo-grid-flex-align", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](229, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](231, "Child elements vertically aligned.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](232, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](233, "nz-demo-grid-flex-order", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](234, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](235, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](236, "To change the element sort by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](238, "nzOrder");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](239, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](240, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](241, "nz-demo-grid-flex-stretch", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](242, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](243, "p")(244, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](245, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](246, " provides ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](247, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](248, "nzFlex");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](249, " prop to support fill rest.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](250, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](251, "nz-demo-grid-responsive", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](252, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](253, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](254, "Referring to the Bootstrap ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](255, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](256, "responsive design");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](257, ", here preset five dimensions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](259, "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](260, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](261, "sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](263, "md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](265, "lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](267, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](268, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](269, "nz-code-box", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](270, "nz-demo-grid-responsive-more", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](271, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](272, "p")(273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](274, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](276, "pull");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](278, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](279, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](280, "offset");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](282, "order");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](283, " property can be embedded into ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](285, "nzXs");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](287, "nzSm");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](289, "nzMd");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](290, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](291, "nzLg");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](293, "nzXl");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](294, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](295, "nzXXl");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](296, " properties to use,\nwhere ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](298, "nzXs=\"6\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](299, " is equivalent to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](300, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](301, "[nzXs]=\"{ span: 6 }\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](302, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](303, "nz-code-box", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](304, "nz-demo-grid-playground", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](305, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](306, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](307, "A simple playground for column count and gutter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](308, "section", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](309, "h2", 55)(310, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](311, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](312, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](313, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](314, "h3", 57)(315, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](316, "[nz-row]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](317, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](318, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](319, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](320, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](321, "table")(322, "thead")(323, "tr")(324, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](325, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](326, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](327, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](328, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](329, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](330, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](331, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](332, "tbody")(333, "tr")(334, "td")(335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](336, "[nzAlign]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](338, "the vertical alignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](339, "td")(340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](341, "'top'|'middle'|'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](343, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](344, "tr")(345, "td")(346, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](347, "[nzGutter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](348, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](349, "spacing between grids, could be a number or a object like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](351, "{ xs: 8, sm: 16, md: 24}");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](352, ". or you can use array to make horizontal and vertical spacing work at the same time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](354, "[horizontal, vertical]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](355, "td")(356, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](357, "number|object|[number, number]|[object, object]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](358, "td")(359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](360, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](361, "tr")(362, "td")(363, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](364, "[nzJustify]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](366, "horizontal arrangement");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](367, "td")(368, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](369, "'start'|'end'|'center'|'space-around'|'space-between'");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](371, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](372, "h3", 60)(373, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](374, "[nz-col]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](375, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](376, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](377, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](378, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](379, "table")(380, "thead")(381, "tr")(382, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](383, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](384, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](385, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](386, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](387, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](388, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](389, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](390, "tbody")(391, "tr")(392, "td")(393, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](394, "[nzFlex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](395, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](396, "flex layout style");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](397, "td")(398, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](399, "string | number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](400, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](401, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](402, "tr")(403, "td")(404, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](405, "[nzOffset]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](407, "the number of cells to offset Col from the left");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](408, "td")(409, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](410, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](411, "td")(412, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](413, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](414, "tr")(415, "td")(416, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](417, "[nzOrder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](419, "raster order");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](420, "td")(421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](422, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](423, "td")(424, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](425, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](426, "tr")(427, "td")(428, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](429, "[nzPull]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](430, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](431, "the number of cells that raster is moved to the left");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](432, "td")(433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](434, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](435, "td")(436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](437, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](438, "tr")(439, "td")(440, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](441, "[nzPush]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](442, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](443, "the number of cells that raster is moved to the right");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](444, "td")(445, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](446, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](447, "td")(448, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](449, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](450, "tr")(451, "td")(452, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](453, "[nzSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](455, "raster number of cells to occupy, 0 corresponds to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](456, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](457, "display: none");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](458, "td")(459, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](460, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](461, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](462, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](463, "tr")(464, "td")(465, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](466, "[nzXs]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](467, "td")(468, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](469, "<576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](470, " and also default setting, could be a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](471, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](472, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](473, " value or an object containing above props");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](474, "td")(475, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](476, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](478, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](479, "tr")(480, "td")(481, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](482, "[nzSm]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](483, "td")(484, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](485, "\u2265576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](486, ", could be a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](488, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](489, " value or an object containing above props");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](490, "td")(491, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](492, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](494, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](495, "tr")(496, "td")(497, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](498, "[nzMd]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](499, "td")(500, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](501, "\u2265768px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](502, ", could be a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](503, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](504, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](505, " value or an object containing above props");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](506, "td")(507, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](508, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](509, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](510, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](511, "tr")(512, "td")(513, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](514, "[nzLg]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](515, "td")(516, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](517, "\u2265992px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](518, ", could be a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](519, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](520, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](521, " value or an object containing above props");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](522, "td")(523, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](524, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](526, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](527, "tr")(528, "td")(529, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](530, "[nzXl]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](531, "td")(532, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](533, "\u22651200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](534, ", could be a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](535, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](536, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](537, " value or an object containing above props");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](538, "td")(539, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](540, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](541, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](542, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](543, "tr")(544, "td")(545, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](546, "[nzXXl]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](547, "td")(548, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](549, "\u22651600px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](550, ", could be a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](551, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](552, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](553, " value or an object containing above props");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](554, "td")(555, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](556, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](557, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](558, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](559, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](560, "The breakpoints of responsive grid follow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](561, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](562, "BootStrap 4 media queries rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](563, "(not including ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](564, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](565, "occasionally part");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](566, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-basic")("nzLink", "components-grid-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-gutter")("nzLink", "components-grid-demo-gutter")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/gutter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-offset")("nzLink", "components-grid-demo-offset")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/offset.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-sort")("nzLink", "components-grid-demo-sort")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/sort.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-flex")("nzLink", "components-grid-demo-flex")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/flex.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-flex-align")("nzLink", "components-grid-demo-flex-align")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/flex-align.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-flex-order")("nzLink", "components-grid-demo-flex-order")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/flex-order.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-flex-stretch")("nzLink", "components-grid-demo-flex-stretch")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/flex-stretch.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-responsive")("nzLink", "components-grid-demo-responsive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/responsive.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-responsive-more")("nzLink", "components-grid-demo-responsive-more")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/responsive-more.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-playground")("nzLink", "components-grid-demo-playground")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/playground.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_13__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_14__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_14__.NzAnchorLinkComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoGridBasicComponent, _gutter__WEBPACK_IMPORTED_MODULE_2__.NzDemoGridGutterComponent, _offset__WEBPACK_IMPORTED_MODULE_3__.NzDemoGridOffsetComponent, _sort__WEBPACK_IMPORTED_MODULE_4__.NzDemoGridSortComponent, _flex__WEBPACK_IMPORTED_MODULE_5__.NzDemoGridFlexComponent, _flex_align__WEBPACK_IMPORTED_MODULE_6__.NzDemoGridFlexAlignComponent, _flex_order__WEBPACK_IMPORTED_MODULE_7__.NzDemoGridFlexOrderComponent, _flex_stretch__WEBPACK_IMPORTED_MODULE_8__.NzDemoGridFlexStretchComponent, _responsive__WEBPACK_IMPORTED_MODULE_9__.NzDemoGridResponsiveComponent, _responsive_more__WEBPACK_IMPORTED_MODULE_10__.NzDemoGridResponsiveMoreComponent, _playground__WEBPACK_IMPORTED_MODULE_11__.NzDemoGridPlaygroundComponent], encapsulation: 2 });


/***/ }),

/***/ 7999:
/*!***********************************************!*\
  !*** ./src/app/components/grid/flex-align.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridFlexAlignComponent": () => (/* binding */ NzDemoGridFlexAlignComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);


class NzDemoGridFlexAlignComponent {
}
NzDemoGridFlexAlignComponent.ɵfac = function NzDemoGridFlexAlignComponent_Factory(t) { return new (t || NzDemoGridFlexAlignComponent)(); };
NzDemoGridFlexAlignComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoGridFlexAlignComponent, selectors: [["nz-demo-grid-flex-align"]], decls: 46, vars: 0, consts: [["nz-row", "", "nzJustify", "center", "nzAlign", "top"], ["nz-col", "", "nzSpan", "4"], [1, "height-100"], [1, "height-50"], [1, "height-120"], [1, "height-80"], ["nz-row", "", "nzJustify", "space-around", "nzAlign", "middle"], ["nz-row", "", "nzJustify", "space-between", "nzAlign", "bottom"]], template: function NzDemoGridFlexAlignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Align Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1)(8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1)(14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Align Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6)(19, "div", 1)(20, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1)(23, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1)(26, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1)(29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Align Bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7)(34, "div", 1)(35, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1)(38, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1)(41, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1)(44, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective], styles: ["[nz-row][_ngcontent-%COMP%] {\n        background-color: rgba(128, 128, 128, 0.08);\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXgtYWxpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsMkNBQTJDO01BQzdDIiwiZmlsZSI6ImZsZXgtYWxpZ24udHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIFtuei1yb3ddIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA4KTtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 25098:
/*!***********************************************!*\
  !*** ./src/app/components/grid/flex-order.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridFlexOrderComponent": () => (/* binding */ NzDemoGridFlexOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);


class NzDemoGridFlexOrderComponent {
}
NzDemoGridFlexOrderComponent.ɵfac = function NzDemoGridFlexOrderComponent_Factory(t) { return new (t || NzDemoGridFlexOrderComponent)(); };
NzDemoGridFlexOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoGridFlexOrderComponent, selectors: [["nz-demo-grid-flex-order"]], decls: 10, vars: 0, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "6", "nzOrder", "4"], ["nz-col", "", "nzSpan", "6", "nzOrder", "3"], ["nz-col", "", "nzSpan", "6", "nzOrder", "2"], ["nz-col", "", "nzSpan", "6", "nzOrder", "1"]], template: function NzDemoGridFlexOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 1 col-order-4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 2 col-order-3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 3 col-order-2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 4 col-order-1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective], styles: ["[nz-row][_ngcontent-%COMP%] {\n        background-color: rgba(128, 128, 128, 0.08);\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXgtb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsMkNBQTJDO01BQzdDIiwiZmlsZSI6ImZsZXgtb3JkZXIudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIFtuei1yb3ddIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA4KTtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 59261:
/*!*************************************************!*\
  !*** ./src/app/components/grid/flex-stretch.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridFlexStretchComponent": () => (/* binding */ NzDemoGridFlexStretchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);


class NzDemoGridFlexStretchComponent {
}
NzDemoGridFlexStretchComponent.ɵfac = function NzDemoGridFlexStretchComponent_Factory(t) { return new (t || NzDemoGridFlexStretchComponent)(); };
NzDemoGridFlexStretchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoGridFlexStretchComponent, selectors: [["nz-demo-grid-flex-stretch"]], decls: 22, vars: 0, consts: [["nz-row", ""], ["nz-col", "", "nzFlex", "2"], ["nz-col", "", "nzFlex", "3"], ["nz-col", "", "nzFlex", "100px"], ["nz-col", "", "nzFlex", "auto"], ["nz-col", "", "nzFlex", "1 1 200px"], ["nz-col", "", "nzFlex", "0 1 300px"]], template: function NzDemoGridFlexStretchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Percentage columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0)(4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2 / 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3 / 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fill rest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0)(11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "100px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fill Rest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Raw flex style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0)(18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "1 1 200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "0 1 300px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective], styles: ["[nz-row][_ngcontent-%COMP%] {\n        background-color: rgba(128, 128, 128, 0.08);\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXgtc3RyZXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSwyQ0FBMkM7TUFDN0MiLCJmaWxlIjoiZmxleC1zdHJldGNoLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBbbnotcm93XSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOCk7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 60090:
/*!*****************************************!*\
  !*** ./src/app/components/grid/flex.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridFlexComponent": () => (/* binding */ NzDemoGridFlexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);


class NzDemoGridFlexComponent {
}
NzDemoGridFlexComponent.ɵfac = function NzDemoGridFlexComponent_Factory(t) { return new (t || NzDemoGridFlexComponent)(); };
NzDemoGridFlexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoGridFlexComponent, selectors: [["nz-demo-grid-flex"]], decls: 56, vars: 0, consts: [["nz-row", "", "nzJustify", "start"], ["nz-col", "", "nzSpan", "4"], ["nz-row", "", "nzJustify", "center"], ["nz-row", "", "nzJustify", "end"], ["nz-row", "", "nzJustify", "space-between"], ["nz-row", "", "nzJustify", "space-around"]], template: function NzDemoGridFlexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "sub-element align left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0)(4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "sub-element align center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "sub-element align right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3)(26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "sub-element monospaced arrangement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4)(37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "sub-element align full");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5)(48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective], styles: ["[nz-row][_ngcontent-%COMP%] {\n        background-color: rgba(128, 128, 128, 0.08);\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsMkNBQTJDO01BQzdDIiwiZmlsZSI6ImZsZXgudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIFtuei1yb3ddIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA4KTtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 37105:
/*!*******************************************!*\
  !*** ./src/app/components/grid/gutter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridGutterComponent": () => (/* binding */ NzDemoGridGutterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);



const _c0 = function () { return { xs: 8, sm: 16, md: 24, lg: 32 }; };
const _c1 = function () { return [16, 24]; };
class NzDemoGridGutterComponent {
}
NzDemoGridGutterComponent.ɵfac = function NzDemoGridGutterComponent_Factory(t) { return new (t || NzDemoGridGutterComponent)(); };
NzDemoGridGutterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoGridGutterComponent, selectors: [["nz-demo-grid-gutter"]], decls: 54, vars: 21, consts: [["nzOrientation", "left", "nzText", "Horizontal"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 1, "gutter-row", 3, "nzSpan"], [1, "inner-box"], ["nzOrientation", "left", "nzText", "Responsive"], ["nzOrientation", "left", "nzText", "Vertical"]], template: function NzDemoGridGutterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2)(12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nz-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2)(20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2)(23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2)(26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "nz-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2)(34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2)(37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2)(40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2)(43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2)(46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2)(49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2)(52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
    } }, directives: [ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__.NzDividerComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective], styles: ["nz-divider[_ngcontent-%COMP%] {\n        color: #333;\n        fontweight: normal;\n      }\n      .inner-box[_ngcontent-%COMP%] {\n        background: #0092ff;\n        padding: 8px 0;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1dHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxXQUFXO1FBQ1gsa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxtQkFBbUI7UUFDbkIsY0FBYztNQUNoQiIsImZpbGUiOiJndXR0ZXIudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LWRpdmlkZXIge1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udHdlaWdodDogbm9ybWFsO1xuICAgICAgfVxuICAgICAgLmlubmVyLWJveCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDkyZmY7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 13743:
/*!*************************************************!*\
  !*** ./src/app/components/grid/index.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridModule": () => (/* binding */ NzDemoGridModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 42830);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 61325);
/* harmony import */ var _flex_align__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flex-align */ 7999);
/* harmony import */ var _flex_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flex-order */ 25098);
/* harmony import */ var _flex_stretch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flex-stretch */ 59261);
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flex */ 60090);
/* harmony import */ var _gutter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gutter */ 37105);
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offset */ 75099);
/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./playground */ 49956);
/* harmony import */ var _responsive_more__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./responsive-more */ 26587);
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./responsive */ 75982);
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sort */ 79970);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zh.component */ 72136);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./en.component */ 15558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);





















class NzDemoGridModule {
}
NzDemoGridModule.ɵfac = function NzDemoGridModule_Factory(t) { return new (t || NzDemoGridModule)(); };
NzDemoGridModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: NzDemoGridModule });
NzDemoGridModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_14__.NzDemoGridEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_13__.NzDemoGridZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](NzDemoGridModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoGridBasicComponent,
        _flex_align__WEBPACK_IMPORTED_MODULE_3__.NzDemoGridFlexAlignComponent,
        _flex_order__WEBPACK_IMPORTED_MODULE_4__.NzDemoGridFlexOrderComponent,
        _flex_stretch__WEBPACK_IMPORTED_MODULE_5__.NzDemoGridFlexStretchComponent,
        _flex__WEBPACK_IMPORTED_MODULE_6__.NzDemoGridFlexComponent,
        _gutter__WEBPACK_IMPORTED_MODULE_7__.NzDemoGridGutterComponent,
        _offset__WEBPACK_IMPORTED_MODULE_8__.NzDemoGridOffsetComponent,
        _playground__WEBPACK_IMPORTED_MODULE_9__.NzDemoGridPlaygroundComponent,
        _responsive_more__WEBPACK_IMPORTED_MODULE_10__.NzDemoGridResponsiveMoreComponent,
        _responsive__WEBPACK_IMPORTED_MODULE_11__.NzDemoGridResponsiveComponent,
        _sort__WEBPACK_IMPORTED_MODULE_12__.NzDemoGridSortComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_13__.NzDemoGridZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_14__.NzDemoGridEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzGridModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_18__.NzSliderModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] }); })();


/***/ }),

/***/ 42830:
/*!*******************************************!*\
  !*** ./src/app/components/grid/module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);



const moduleList = [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__.NzGridModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__.NzSliderModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__.NzDividerModule];


/***/ }),

/***/ 75099:
/*!*******************************************!*\
  !*** ./src/app/components/grid/offset.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridOffsetComponent": () => (/* binding */ NzDemoGridOffsetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);


class NzDemoGridOffsetComponent {
}
NzDemoGridOffsetComponent.ɵfac = function NzDemoGridOffsetComponent_Factory(t) { return new (t || NzDemoGridOffsetComponent)(); };
NzDemoGridOffsetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoGridOffsetComponent, selectors: [["nz-demo-grid-offset"]], decls: 13, vars: 0, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "8"], ["nz-col", "", "nzSpan", "8", "nzOffset", "8"], ["nz-col", "", "nzSpan", "6", "nzOffset", "6"], ["nz-col", "", "nzSpan", "12", "nzOffset", "6"]], template: function NzDemoGridOffsetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " col-8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " col-8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " col-6 col-offset-6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " col-6 col-offset-6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0)(11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " col-12 col-offset-6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective], encapsulation: 2 });


/***/ }),

/***/ 49956:
/*!***********************************************!*\
  !*** ./src/app/components/grid/playground.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridPlaygroundComponent": () => (/* binding */ NzDemoGridPlaygroundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57737);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





function NzDemoGridPlaygroundComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24 / ctx_r0.count);
} }
function NzDemoGridPlaygroundComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24 / ctx_r1.count);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
class NzDemoGridPlaygroundComponent {
    constructor() {
        this.hGutter = 16;
        this.vGutter = 16;
        this.count = 4;
        this.array = new Array(this.count);
        this.marksHGutter = {
            8: 8,
            16: 16,
            24: 24,
            32: 32,
            40: 40,
            48: 48
        };
        this.marksVGutter = {
            8: 8,
            16: 16,
            24: 24,
            32: 32,
            40: 40,
            48: 48
        };
        this.marksCount = {
            2: 2,
            3: 3,
            4: 4,
            6: 6,
            8: 8,
            12: 12
        };
    }
    reGenerateArray(count) {
        this.array = new Array(count);
    }
}
NzDemoGridPlaygroundComponent.ɵfac = function NzDemoGridPlaygroundComponent_Factory(t) { return new (t || NzDemoGridPlaygroundComponent)(); };
NzDemoGridPlaygroundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoGridPlaygroundComponent, selectors: [["nz-demo-grid-playground"]], decls: 17, vars: 21, consts: [[1, "slider-container"], [1, "slider"], [3, "nzMarks", "nzStep", "nzMin", "nzMax", "ngModel", "ngModelChange"], [1, "gutter-example"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "class", "gutter-row", 3, "nzSpan", 4, "ngFor", "ngForOf"], ["nz-col", "", 1, "gutter-row", 3, "nzSpan"], [1, "grid-config"]], template: function NzDemoGridPlaygroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Horizontal Gutter (px): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "nz-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoGridPlaygroundComponent_Template_nz_slider_ngModelChange_4_listener($event) { return ctx.hGutter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vertical Gutter (px): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1)(8, "nz-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoGridPlaygroundComponent_Template_nz_slider_ngModelChange_8_listener($event) { return ctx.vGutter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Column Count:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1)(12, "nz-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoGridPlaygroundComponent_Template_nz_slider_ngModelChange_12_listener($event) { return ctx.count = $event; })("ngModelChange", function NzDemoGridPlaygroundComponent_Template_nz_slider_ngModelChange_12_listener($event) { return ctx.reGenerateArray($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3)(14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NzDemoGridPlaygroundComponent_div_15_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NzDemoGridPlaygroundComponent_div_16_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMarks", ctx.marksHGutter)("nzStep", null)("nzMin", 8)("nzMax", 48)("ngModel", ctx.hGutter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMarks", ctx.marksVGutter)("nzStep", null)("nzMin", 8)("nzMax", 48)("ngModel", ctx.vGutter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMarks", ctx.marksCount)("nzStep", null)("nzMin", 2)("nzMax", 12)("ngModel", ctx.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.hGutter, ctx.vGutter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.array);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.array);
    } }, directives: [ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__.NzSliderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective], styles: [".slider[_ngcontent-%COMP%] {\n        width: 50%;\n      }\n      .slider-container[_ngcontent-%COMP%] {\n        margin-bottom: 16px;\n      }\n      .grid-config[_ngcontent-%COMP%] {\n        height: 120px;\n        font-size: 14px;\n        line-height: 120px;\n        background: #0092ff;\n        border-radius: 4px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlncm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsVUFBVTtNQUNaO01BQ0E7UUFDRSxtQkFBbUI7TUFDckI7TUFDQTtRQUNFLGFBQWE7UUFDYixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixrQkFBa0I7TUFDcEIiLCJmaWxlIjoicGxheWdyb3VuZC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnNsaWRlciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICAuc2xpZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG4gICAgICAuZ3JpZC1jb25maWcge1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwOTJmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 26587:
/*!****************************************************!*\
  !*** ./src/app/components/grid/responsive-more.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridResponsiveMoreComponent": () => (/* binding */ NzDemoGridResponsiveMoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);


const _c0 = function () { return { span: 5, offset: 1 }; };
const _c1 = function () { return { span: 6, offset: 2 }; };
const _c2 = function () { return { span: 11, offset: 1 }; };
class NzDemoGridResponsiveMoreComponent {
}
NzDemoGridResponsiveMoreComponent.ɵfac = function NzDemoGridResponsiveMoreComponent_Factory(t) { return new (t || NzDemoGridResponsiveMoreComponent)(); };
NzDemoGridResponsiveMoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoGridResponsiveMoreComponent, selectors: [["nz-demo-grid-responsive-more"]], decls: 7, vars: 12, consts: [["nz-row", ""], ["nz-col", "", 3, "nzXs", "nzLg"]], template: function NzDemoGridResponsiveMoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Col ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Col ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Col ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("nzLg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2))("nzLg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("nzLg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective], encapsulation: 2 });


/***/ }),

/***/ 75982:
/*!***********************************************!*\
  !*** ./src/app/components/grid/responsive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridResponsiveComponent": () => (/* binding */ NzDemoGridResponsiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);


class NzDemoGridResponsiveComponent {
}
NzDemoGridResponsiveComponent.ɵfac = function NzDemoGridResponsiveComponent_Factory(t) { return new (t || NzDemoGridResponsiveComponent)(); };
NzDemoGridResponsiveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoGridResponsiveComponent, selectors: [["nz-demo-grid-responsive"]], decls: 7, vars: 0, consts: [["nz-row", ""], ["nz-col", "", "nzXs", "2", "nzSm", "4", "nzMd", "6", "nzLg", "8", "nzXl", "10"], ["nz-col", "", "nzXs", "20", "nzSm", "16", "nzMd", "12", "nzLg", "8", "nzXl", "4"]], template: function NzDemoGridResponsiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Col ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Col ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Col ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective], encapsulation: 2 });


/***/ }),

/***/ 79970:
/*!*****************************************!*\
  !*** ./src/app/components/grid/sort.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridSortComponent": () => (/* binding */ NzDemoGridSortComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);


class NzDemoGridSortComponent {
}
NzDemoGridSortComponent.ɵfac = function NzDemoGridSortComponent_Factory(t) { return new (t || NzDemoGridSortComponent)(); };
NzDemoGridSortComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoGridSortComponent, selectors: [["nz-demo-grid-sort"]], decls: 5, vars: 4, consts: [["nz-row", ""], ["nz-col", "", 3, "nzSpan", "nzPush"], ["nz-col", "", 3, "nzSpan", "nzPull"]], template: function NzDemoGridSortComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " col-18 col-push-6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " col-6 col-pull-18 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 18)("nzPush", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6)("nzPull", 18);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective], encapsulation: 2 });


/***/ }),

/***/ 72136:
/*!*************************************************!*\
  !*** ./src/app/components/grid/zh.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoGridZhComponent": () => (/* binding */ NzDemoGridZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 61325);
/* harmony import */ var _gutter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gutter */ 37105);
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offset */ 75099);
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort */ 79970);
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flex */ 60090);
/* harmony import */ var _flex_align__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flex-align */ 7999);
/* harmony import */ var _flex_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flex-order */ 25098);
/* harmony import */ var _flex_stretch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flex-stretch */ 59261);
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./responsive */ 75982);
/* harmony import */ var _responsive_more__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./responsive-more */ 26587);
/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./playground */ 49956);


















class NzDemoGridZhComponent {
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
NzDemoGridZhComponent.ɵfac = function NzDemoGridZhComponent_Factory(t) { return new (t || NzDemoGridZhComponent)(); };
NzDemoGridZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: NzDemoGridZhComponent, selectors: [["nz-demo-grid"]], viewQuery: function NzDemoGridZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 544, vars: 37, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-grid-demo-basic", "nzTitle", "\u57FA\u7840\u6805\u683C"], ["nzHref", "#components-grid-demo-gutter", "nzTitle", "\u533A\u5757\u95F4\u9694"], ["nzHref", "#components-grid-demo-offset", "nzTitle", "\u5DE6\u53F3\u504F\u79FB"], ["nzHref", "#components-grid-demo-sort", "nzTitle", "\u6805\u683C\u6392\u5E8F"], ["nzHref", "#components-grid-demo-flex", "nzTitle", "\u6392\u7248"], ["nzHref", "#components-grid-demo-flex-align", "nzTitle", "\u5BF9\u9F50"], ["nzHref", "#components-grid-demo-flex-order", "nzTitle", "\u6392\u5E8F"], ["nzHref", "#components-grid-demo-flex-stretch", "nzTitle", "Flex \u586B\u5145"], ["nzHref", "#components-grid-demo-responsive", "nzTitle", "\u54CD\u5E94\u5F0F\u5E03\u5C40"], ["nzHref", "#components-grid-demo-responsive-more", "nzTitle", "\u5176\u4ED6\u5C5E\u6027\u7684\u54CD\u5E94\u5F0F"], ["nzHref", "#components-grid-demo-playground", "nzTitle", "\u6805\u683C\u914D\u7F6E\u5668"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u8BBE\u8BA1\u7406\u5FF5"], ["onclick", "window.location.hash = '\u8BBE\u8BA1\u7406\u5FF5'", 1, "anchor"], [1, "grid-demo"], [1, "ant-row", "demo-row"], [1, "ant-col-24", "demo-col", "demo-col-1"], [1, "ant-col-6", "demo-col", "demo-col-2"], [1, "ant-col-6", "demo-col", "demo-col-3"], [1, "ant-col-8", "demo-col", "demo-col-4"], [1, "ant-col-8", "demo-col", "demo-col-5"], [1, "ant-col-12", "demo-col", "demo-col-1"], [1, "ant-col-12", "demo-col", "demo-col-3"], [1, "ant-col-16", "demo-col", "demo-col-4"], ["id", "\u6982\u8FF0"], ["onclick", "window.location.hash = '\u6982\u8FF0'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u57FA\u7840\u6805\u683C", "nzSelector", "nz-demo-grid-basic", "nzGenerateCommand", "ng g ng-zorro-antd:grid-basic <name>", "nzComponentName", "NzDemoGridBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u533A\u5757\u95F4\u9694", "nzSelector", "nz-demo-grid-gutter", "nzGenerateCommand", "ng g ng-zorro-antd:grid-gutter <name>", "nzComponentName", "NzDemoGridGutterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5DE6\u53F3\u504F\u79FB", "nzSelector", "nz-demo-grid-offset", "nzGenerateCommand", "ng g ng-zorro-antd:grid-offset <name>", "nzComponentName", "NzDemoGridOffsetComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6805\u683C\u6392\u5E8F", "nzSelector", "nz-demo-grid-sort", "nzGenerateCommand", "ng g ng-zorro-antd:grid-sort <name>", "nzComponentName", "NzDemoGridSortComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6392\u7248", "nzSelector", "nz-demo-grid-flex", "nzGenerateCommand", "ng g ng-zorro-antd:grid-flex <name>", "nzComponentName", "NzDemoGridFlexComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5BF9\u9F50", "nzSelector", "nz-demo-grid-flex-align", "nzGenerateCommand", "ng g ng-zorro-antd:grid-flex-align <name>", "nzComponentName", "NzDemoGridFlexAlignComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6392\u5E8F", "nzSelector", "nz-demo-grid-flex-order", "nzGenerateCommand", "ng g ng-zorro-antd:grid-flex-order <name>", "nzComponentName", "NzDemoGridFlexOrderComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Flex \u586B\u5145", "nzSelector", "nz-demo-grid-flex-stretch", "nzGenerateCommand", "ng g ng-zorro-antd:grid-flex-stretch <name>", "nzComponentName", "NzDemoGridFlexStretchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u54CD\u5E94\u5F0F\u5E03\u5C40", "nzSelector", "nz-demo-grid-responsive", "nzGenerateCommand", "ng g ng-zorro-antd:grid-responsive <name>", "nzComponentName", "NzDemoGridResponsiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "http://getbootstrap.com/css/#grid-media-queries"], ["nzTitle", "\u5176\u4ED6\u5C5E\u6027\u7684\u54CD\u5E94\u5F0F", "nzSelector", "nz-demo-grid-responsive-more", "nzGenerateCommand", "ng g ng-zorro-antd:grid-responsive-more <name>", "nzComponentName", "NzDemoGridResponsiveMoreComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6805\u683C\u914D\u7F6E\u5668", "nzSelector", "nz-demo-grid-playground", "nzGenerateCommand", "ng g ng-zorro-antd:grid-playground <name>", "nzComponentName", "NzDemoGridPlaygroundComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-row]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-row]'", 1, "anchor"], ["id", "[nz-col]"], ["onclick", "window.location.hash = '[nz-col]'", 1, "anchor"], ["href", "https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints"]], template: function NzDemoGridZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzClick", function NzDemoGridZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "section", 14)(16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "\u6805\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "24 \u6805\u683C\u7CFB\u7EDF\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "h2", 19)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "\u8BBE\u8BA1\u7406\u5FF5");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 21)(32, "div", 22)(33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, " 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 22)(36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, " 25% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, " 25% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, " 25% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43, " 25% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 22)(45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46, " 33.33% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, " 33.33% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, " 33.33% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "div", 22)(52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53, " 50% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, " 50% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div", 22)(57, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, " 66.66% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, " 33.33% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "\u5728\u591A\u6570\u4E1A\u52A1\u60C5\u51B5\u4E0B\uFF0CAnt Design \u9700\u8981\u5728\u8BBE\u8BA1\u533A\u57DF\u5185\u89E3\u51B3\u5927\u91CF\u4FE1\u606F\u6536\u7EB3\u7684\u95EE\u9898\uFF0C\u56E0\u6B64\u5728 12 \u6805\u683C\u7CFB\u7EDF\u7684\u57FA\u7840\u4E0A\uFF0C\u6211\u4EEC\u5C06\u6574\u4E2A\u8BBE\u8BA1\u5EFA\u8BAE\u533A\u57DF\u6309\u7167 24 \u7B49\u5206\u7684\u539F\u5219\u8FDB\u884C\u5212\u5206\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](64, "\u5212\u5206\u4E4B\u540E\u7684\u4FE1\u606F\u533A\u5757\u6211\u4EEC\u79F0\u4E4B\u4E3A\u300E\u76D2\u5B50\u300F\u3002\u5EFA\u8BAE\u6A2A\u5411\u6392\u5217\u7684\u76D2\u5B50\u6570\u91CF\u6700\u591A\u56DB\u4E2A\uFF0C\u6700\u5C11\u4E00\u4E2A\u3002\u300E\u76D2\u5B50\u300F\u5728\u6574\u4E2A\u5C4F\u5E55\u4E0A\u5360\u6BD4\u89C1\u4E0A\u56FE\u3002\u8BBE\u8BA1\u90E8\u5206\u57FA\u4E8E\u76D2\u5B50\u7684\u5355\u4F4D\u5B9A\u5236\u76D2\u5B50\u5185\u90E8\u7684\u6392\u7248\u89C4\u5219\uFF0C\u4EE5\u4FDD\u8BC1\u89C6\u89C9\u5C42\u9762\u7684\u8212\u9002\u611F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "h2", 31)(66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "\u6982\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](69, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, "\u5E03\u5C40\u7684\u6805\u683C\u5316\u7CFB\u7EDF\uFF0C\u6211\u4EEC\u662F\u57FA\u4E8E\u884C\uFF08row\uFF09\u548C\u5217\uFF08col\uFF09\u6765\u5B9A\u4E49\u4FE1\u606F\u533A\u5757\u7684\u5916\u90E8\u6846\u67B6\uFF0C\u4EE5\u4FDD\u8BC1\u9875\u9762\u7684\u6BCF\u4E2A\u533A\u57DF\u80FD\u591F\u7A33\u5065\u5730\u6392\u5E03\u8D77\u6765\u3002\u4E0B\u9762\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u5B83\u7684\u5DE5\u4F5C\u539F\u7406\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "ul")(73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](74, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](76, "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, " \u5728\u6C34\u5E73\u65B9\u5411\u5EFA\u7ACB\u4E00\u7EC4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79, "column");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](80, "\uFF08\u7B80\u5199 col\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82, "\u4F60\u7684\u5185\u5BB9\u5E94\u5F53\u653E\u7F6E\u4E8E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, "col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](85, " \u5185\uFF0C\u5E76\u4E14\uFF0C\u53EA\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](87, "col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](88, " \u53EF\u4EE5\u4F5C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](90, "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91, " \u7684\u76F4\u63A5\u5143\u7D20");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](93, "\u6805\u683C\u7CFB\u7EDF\u4E2D\u7684\u5217\u662F\u6307 1 \u5230 24 \u7684\u503C\u6765\u8868\u793A\u5176\u8DE8\u8D8A\u7684\u8303\u56F4\u3002\u4F8B\u5982\uFF0C\u4E09\u4E2A\u7B49\u5BBD\u7684\u5217\u53EF\u4EE5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](95, "<div nz-col [nzSpan]=\"8\" />");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](96, " \u6765\u521B\u5EFA");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](98, "\u5982\u679C\u4E00\u4E2A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](99, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](100, "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](101, " \u4E2D\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](103, "col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](104, " \u603B\u548C\u8D85\u8FC7 24\uFF0C\u90A3\u4E48\u591A\u4F59\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](106, "col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](107, " \u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u6574\u4F53\u53E6\u8D77\u4E00\u884C\u6392\u5217");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](109, "\u6211\u4EEC\u7684\u6805\u683C\u5316\u7CFB\u7EDF\u57FA\u4E8E Flex \u5E03\u5C40\uFF0C\u5141\u8BB8\u5B50\u5143\u7D20\u5728\u7236\u8282\u70B9\u5185\u7684\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F - \u5C45\u5DE6\u3001\u5C45\u4E2D\u3001\u5C45\u53F3\u3001\u7B49\u5BBD\u6392\u5217\u3001\u5206\u6563\u6392\u5217\u3002\u5B50\u5143\u7D20\u4E0E\u5B50\u5143\u7D20\u4E4B\u95F4\uFF0C\u652F\u6301\u9876\u90E8\u5BF9\u9F50\u3001\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50\u3001\u5E95\u90E8\u5BF9\u9F50\u7684\u65B9\u5F0F\u3002\u540C\u65F6\uFF0C\u652F\u6301\u4F7F\u7528 order \u6765\u5B9A\u4E49\u5143\u7D20\u7684\u6392\u5217\u987A\u5E8F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](111, "\u5E03\u5C40\u662F\u57FA\u4E8E 24 \u6805\u683C\u6765\u5B9A\u4E49\u6BCF\u4E00\u4E2A\u300E\u76D2\u5B50\u300F\u7684\u5BBD\u5EA6\uFF0C\u4F46\u4E0D\u62D8\u6CE5\u4E8E\u6805\u683C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](112, "pre", 33)(113, "code")(114, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](115, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](116, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](117, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](118, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](119, " NzGridModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](120, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](121, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](122, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](124, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](125, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](126, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](127, "'ng-zorro-antd/grid'");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](128, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](129, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](130, "h2")(131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](132, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](133, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NzDemoGridZhComponent_Template_i_click_133_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](134, "div", 38)(135, "div", 39)(136, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](137, "nz-demo-grid-basic", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](138, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](140, "\u4ECE\u5806\u53E0\u5230\u6C34\u5E73\u6392\u5217\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](142, "\u4F7F\u7528\u5355\u4E00\u7684\u4E00\u7EC4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](144, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](145, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](147, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](148, " \u6805\u683C\u7EC4\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u7684\u6805\u683C\u7CFB\u7EDF\uFF0C\u6240\u6709\u5217\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](150, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](151, "\uFF09\u5FC5\u987B\u653E\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](153, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](154, " \u5185\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](155, "nz-code-box", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](156, "nz-demo-grid-gutter", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](157, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](159, "\u6805\u683C\u5E38\u5E38\u9700\u8981\u548C\u95F4\u9694\u8FDB\u884C\u914D\u5408\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](161, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](162, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](164, "nzGutter");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](165, " \u5C5E\u6027\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](167, "(16+8n)px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](168, " \u4F5C\u4E3A\u6805\u683C\u95F4\u9694\u3002(n \u662F\u81EA\u7136\u6570)");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](170, "\u5982\u679C\u8981\u652F\u6301\u54CD\u5E94\u5F0F\uFF0C\u53EF\u4EE5\u5199\u6210 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](171, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](172, "{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32 }");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](173, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](174, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](175, "nz-demo-grid-offset", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](176, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](178, "\u5217\u504F\u79FB\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](180, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](182, "nzOffset");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](183, " \u53EF\u4EE5\u5C06\u5217\u5411\u53F3\u4FA7\u504F\u3002\u4F8B\u5982\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](185, "nzOffset=\"4\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](186, " \u5C06\u5143\u7D20\u5411\u53F3\u4FA7\u504F\u79FB\u4E86 4 \u4E2A\u5217\uFF08column\uFF09\u7684\u5BBD\u5EA6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](187, "nz-code-box", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](188, "nz-demo-grid-sort", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](189, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](191, "\u5217\u6392\u5E8F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](193, "\u901A\u8FC7\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](195, "nzPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](196, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](198, "nzPull");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](199, " \u7C7B\u5C31\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u6539\u53D8\u5217\uFF08column\uFF09\u7684\u987A\u5E8F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](200, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](201, "nz-demo-grid-flex", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](202, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](204, "\u5E03\u5C40\u57FA\u7840\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](206, "\u5B50\u5143\u7D20\u6839\u636E\u4E0D\u540C\u7684\u503C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](207, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](208, "start");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](209, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](210, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](211, "center");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](212, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](213, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](214, "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](215, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](216, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](217, "space-between");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](218, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](219, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](220, "space-around");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](221, "\uFF0C\u5206\u522B\u5B9A\u4E49\u5176\u5728\u7236\u8282\u70B9\u91CC\u9762\u7684\u6392\u7248\u65B9\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](222, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](223, "nz-demo-grid-flex-align", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](224, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](225, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](226, "\u5B50\u5143\u7D20\u5782\u76F4\u5BF9\u9F50\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](227, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](228, "nz-demo-grid-flex-order", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](229, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](231, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](232, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](233, "nzOrder");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](234, " \u6765\u6539\u53D8\u5143\u7D20\u7684\u6392\u5E8F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](235, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](236, "nz-demo-grid-flex-stretch", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](237, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](238, "p")(239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](240, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](241, " \u63D0\u4F9B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](243, "nzFlex");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](244, " \u5C5E\u6027\u4EE5\u652F\u6301\u586B\u5145\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](245, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](246, "nz-demo-grid-responsive", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](247, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](248, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](249, "\u53C2\u7167 Bootstrap \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](250, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](251, "\u54CD\u5E94\u5F0F\u8BBE\u8BA1");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](252, "\uFF0C\u9884\u8BBE\u4E94\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](253, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](254, "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](256, "sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](257, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](258, "md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](259, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](260, "lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](262, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](263, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](264, "xxl");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](265, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](266, "nz-code-box", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](267, "nz-demo-grid-responsive-more", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](268, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](269, "p")(270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](271, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](273, "pull");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](275, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](277, "offset");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](279, "order");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](280, " \u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u5185\u5D4C\u5230 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](282, "nzXs");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](284, "nzSm");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](286, "nzMd");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](288, "nzLg");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](289, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](290, "nzXl");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](292, "nzXXl");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](293, " \u5C5E\u6027\u4E2D\u6765\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](294, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](295, "\u5176\u4E2D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](297, "nzXs=\"6\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](298, " \u76F8\u5F53\u4E8E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](300, "[nzXs]=\"{ span: 6 }\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](301, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](302, "nz-code-box", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](303, "nz-demo-grid-playground", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](304, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](305, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](306, "\u53EF\u4EE5\u7B80\u5355\u914D\u7F6E\u51E0\u79CD\u7B49\u5206\u6805\u683C\u548C\u95F4\u8DDD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](307, "section", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](308, "h2", 55)(309, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](310, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](311, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](312, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](313, "h3", 57)(314, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](315, "[nz-row]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](316, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](317, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](318, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](319, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](320, "table")(321, "thead")(322, "tr")(323, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](324, "\u6210\u5458");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](325, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](326, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](327, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](328, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](329, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](330, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](331, "tbody")(332, "tr")(333, "td")(334, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](335, "[nzAlign]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](336, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](337, "\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](338, "td")(339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](340, "'top' | 'middle' | 'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](342, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](343, "tr")(344, "td")(345, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](346, "[nzGutter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](348, "\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u4EE5\u5199\u6210\u50CF\u7D20\u503C\u6216\u652F\u6301\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\u5199\u6CD5\u6765\u8BBE\u7F6E\u6C34\u5E73\u95F4\u9694 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](349, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](350, "{ xs: 8, sm: 16, md: 24}");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](351, "\u3002\u6216\u8005\u4F7F\u7528\u6570\u7EC4\u5F62\u5F0F\u540C\u65F6\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](353, "[\u6C34\u5E73\u95F4\u8DDD, \u5782\u76F4\u95F4\u8DDD]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](354, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](355, "td")(356, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](357, "number|object|[number, number]|[object, object]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](358, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](359, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](360, "tr")(361, "td")(362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](363, "[nzJustify]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](365, "\u6C34\u5E73\u6392\u5217\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](366, "td")(367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](368, "'start' | 'end' | 'center' | 'space-around' | 'space-between'");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](370, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](371, "h3", 60)(372, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](373, "[nz-col]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](374, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](375, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](376, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](377, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](378, "table")(379, "thead")(380, "tr")(381, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](382, "\u6210\u5458");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](383, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](384, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](385, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](386, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](387, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](388, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](389, "tbody")(390, "tr")(391, "td")(392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](393, "[nzFlex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](395, "flex \u5E03\u5C40\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](396, "td")(397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](398, "string | number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](400, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](401, "tr")(402, "td")(403, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](404, "[nzOffset]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](405, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](406, "\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570\uFF0C\u95F4\u9694\u5185\u4E0D\u53EF\u4EE5\u6709\u6805\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](407, "td")(408, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](409, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](411, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](412, "tr")(413, "td")(414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](415, "[nzOrder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](416, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](417, "\u6805\u683C\u987A\u5E8F");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](418, "td")(419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](420, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](422, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](423, "tr")(424, "td")(425, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](426, "[nzPull]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](428, "\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](429, "td")(430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](431, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](433, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](434, "tr")(435, "td")(436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](437, "[nzPush]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](438, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](439, "\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](440, "td")(441, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](442, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](444, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](445, "tr")(446, "td")(447, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](448, "[nzSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](450, "\u6805\u683C\u5360\u4F4D\u683C\u6570\uFF0C\u4E3A 0 \u65F6\u76F8\u5F53\u4E8E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](451, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](452, "display: none");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](453, "td")(454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](455, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](457, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](458, "tr")(459, "td")(460, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](461, "[nzXs]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](462, "td")(463, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](464, "<576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](465, " \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](466, "td")(467, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](468, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](469, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](470, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](471, "tr")(472, "td")(473, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](474, "[nzSm]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](475, "td")(476, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](477, "\u2265576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](478, " \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](479, "td")(480, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](481, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](482, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](483, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](484, "tr")(485, "td")(486, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](487, "[nzMd]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](488, "td")(489, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](490, "\u2265768px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](491, " \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](492, "td")(493, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](494, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](496, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](497, "tr")(498, "td")(499, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](500, "[nzLg]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](501, "td")(502, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](503, "\u2265992px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](504, " \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](505, "td")(506, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](507, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](508, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](509, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](510, "tr")(511, "td")(512, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](513, "[nzXl]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](514, "td")(515, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](516, "\u22651200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](517, " \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](518, "td")(519, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](520, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](521, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](522, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](523, "tr")(524, "td")(525, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](526, "[nzXXl]");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](527, "td")(528, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](529, "\u22651600px");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](530, " \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](531, "td")(532, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](533, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](535, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](536, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](537, "\u54CD\u5E94\u5F0F\u6805\u683C\u7684\u65AD\u70B9\u6269\u5C55\u81EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](538, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](539, "BootStrap 4 \u7684\u89C4\u5219");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](540, "\uFF08\u4E0D\u5305\u542B\u94FE\u63A5\u91CC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](541, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](542, "occasionally");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](543, " \u7684\u90E8\u5206)\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-basic")("nzLink", "components-grid-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-gutter")("nzLink", "components-grid-demo-gutter")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/gutter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-offset")("nzLink", "components-grid-demo-offset")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/offset.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-sort")("nzLink", "components-grid-demo-sort")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/sort.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-flex")("nzLink", "components-grid-demo-flex")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/flex.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-flex-align")("nzLink", "components-grid-demo-flex-align")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/flex-align.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-flex-order")("nzLink", "components-grid-demo-flex-order")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/flex-order.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-flex-stretch")("nzLink", "components-grid-demo-flex-stretch")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/flex-stretch.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-responsive")("nzLink", "components-grid-demo-responsive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/responsive.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-responsive-more")("nzLink", "components-grid-demo-responsive-more")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/responsive-more.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzId", "components-grid-demo-playground")("nzLink", "components-grid-demo-playground")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/grid/demo/playground.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_13__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_14__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_14__.NzAnchorLinkComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoGridBasicComponent, _gutter__WEBPACK_IMPORTED_MODULE_2__.NzDemoGridGutterComponent, _offset__WEBPACK_IMPORTED_MODULE_3__.NzDemoGridOffsetComponent, _sort__WEBPACK_IMPORTED_MODULE_4__.NzDemoGridSortComponent, _flex__WEBPACK_IMPORTED_MODULE_5__.NzDemoGridFlexComponent, _flex_align__WEBPACK_IMPORTED_MODULE_6__.NzDemoGridFlexAlignComponent, _flex_order__WEBPACK_IMPORTED_MODULE_7__.NzDemoGridFlexOrderComponent, _flex_stretch__WEBPACK_IMPORTED_MODULE_8__.NzDemoGridFlexStretchComponent, _responsive__WEBPACK_IMPORTED_MODULE_9__.NzDemoGridResponsiveComponent, _responsive_more__WEBPACK_IMPORTED_MODULE_10__.NzDemoGridResponsiveMoreComponent, _playground__WEBPACK_IMPORTED_MODULE_11__.NzDemoGridPlaygroundComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_grid_index_module_ts.js.map