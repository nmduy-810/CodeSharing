"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_list_index_module_ts"],{

/***/ 6270:
/*!******************************************!*\
  !*** ./src/app/components/list/basic.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoListBasicComponent": () => (/* binding */ NzDemoListBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);






function NzDemoListBasicComponent_nz_list_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item")(1, "nz-list-item-meta", 5)(2, "nz-list-item-meta-title")(3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
} }
function NzDemoListBasicComponent_nz_list_empty_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty");
} }
class NzDemoListBasicComponent {
    constructor() {
        this.loading = false;
        this.data = [
            {
                title: 'Ant Design Title 1'
            },
            {
                title: 'Ant Design Title 2'
            },
            {
                title: 'Ant Design Title 3'
            },
            {
                title: 'Ant Design Title 4'
            }
        ];
    }
    change() {
        this.loading = true;
        if (this.data.length > 0) {
            setTimeout(() => {
                this.data = [];
                this.loading = false;
            }, 1000);
        }
        else {
            setTimeout(() => {
                this.data = [
                    {
                        title: 'Ant Design Title 1'
                    },
                    {
                        title: 'Ant Design Title 2'
                    },
                    {
                        title: 'Ant Design Title 3'
                    },
                    {
                        title: 'Ant Design Title 4'
                    }
                ];
                this.loading = false;
            }, 1000);
        }
    }
}
NzDemoListBasicComponent.ɵfac = function NzDemoListBasicComponent_Factory(t) { return new (t || NzDemoListBasicComponent)(); };
NzDemoListBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoListBasicComponent, selectors: [["nz-demo-list-basic"]], decls: 6, vars: 3, consts: [[2, "margin-bottom", "8px"], ["nz-button", "", 3, "click"], ["nzItemLayout", "horizontal", 3, "nzLoading"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["nzAvatar", "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", "nzDescription", "Ant Design, a design language for background applications, is refined by Ant UED Team"], ["href", "https://ng.ant.design"]], template: function NzDemoListBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoListBasicComponent_Template_button_click_1_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Switch Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoListBasicComponent_nz_list_item_4_Template, 5, 1, "nz-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoListBasicComponent_nz_list_empty_5_Template, 1, 0, "nz-list-empty", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length === 0);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__.NzListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__.NzListItemMetaTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__.NzListEmptyComponent], encapsulation: 2 });


/***/ }),

/***/ 52743:
/*!*************************************************!*\
  !*** ./src/app/components/list/en.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoListEnComponent": () => (/* binding */ NzDemoListEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple */ 70940);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 6270);
/* harmony import */ var _loadmore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadmore */ 86117);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertical */ 48626);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid */ 10142);
/* harmony import */ var _resposive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resposive */ 37059);
/* harmony import */ var _infinite_load__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infinite-load */ 90245);















class NzDemoListEnComponent {
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
NzDemoListEnComponent.ɵfac = function NzDemoListEnComponent_Factory(t) { return new (t || NzDemoListEnComponent)(); };
NzDemoListEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: NzDemoListEnComponent, selectors: [["nz-demo-list"]], viewQuery: function NzDemoListEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 438, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-list-demo-simple", "nzTitle", "Simple list"], ["nzHref", "#components-list-demo-basic", "nzTitle", "Basic list"], ["nzHref", "#components-list-demo-loadmore", "nzTitle", "Load more"], ["nzHref", "#components-list-demo-vertical", "nzTitle", "Vertical"], ["nzHref", "#components-list-demo-grid", "nzTitle", "Grid"], ["nzHref", "#components-list-demo-resposive", "nzTitle", "Responsive grid list"], ["nzHref", "#components-list-demo-infinite-load", "nzTitle", "Infinite & virtualized"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Simple list", "nzSelector", "nz-demo-list-simple", "nzGenerateCommand", "ng g ng-zorro-antd:list-simple <name>", "nzComponentName", "NzDemoListSimpleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Basic list", "nzSelector", "nz-demo-list-basic", "nzGenerateCommand", "ng g ng-zorro-antd:list-basic <name>", "nzComponentName", "NzDemoListBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Load more", "nzSelector", "nz-demo-list-loadmore", "nzGenerateCommand", "ng g ng-zorro-antd:list-loadmore <name>", "nzComponentName", "NzDemoListLoadmoreComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Vertical", "nzSelector", "nz-demo-list-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:list-vertical <name>", "nzComponentName", "NzDemoListVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Grid", "nzSelector", "nz-demo-list-grid", "nzGenerateCommand", "ng g ng-zorro-antd:list-grid <name>", "nzComponentName", "NzDemoListGridComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Responsive grid list", "nzSelector", "nz-demo-list-resposive", "nzGenerateCommand", "ng g ng-zorro-antd:list-resposive <name>", "nzComponentName", "NzDemoListResposiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://ant.design/components/grid/#Col"], ["nzTitle", "Infinite & virtualized", "nzSelector", "nz-demo-list-infinite-load", "nzGenerateCommand", "ng g ng-zorro-antd:list-infinite-load <name>", "nzComponentName", "NzDemoListInfiniteLoadComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://material.angular.io/cdk/scrolling/overview"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-list"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-list'", 1, "anchor"], ["id", "nz-list-empty"], ["onclick", "window.location.hash = 'nz-list-empty'", 1, "anchor"], ["id", "nz-list[nzgrid]"], ["onclick", "window.location.hash = 'nz-list[nzgrid]'", 1, "anchor"], ["id", "nz-list-header"], ["onclick", "window.location.hash = 'nz-list-header'", 1, "anchor"], ["id", "nz-list-footer"], ["onclick", "window.location.hash = 'nz-list-footer'", 1, "anchor"], ["id", "nz-list-pagination"], ["onclick", "window.location.hash = 'nz-list-pagination'", 1, "anchor"], ["id", "nz-list-load-more"], ["onclick", "window.location.hash = 'nz-list-load-more'", 1, "anchor"], ["id", "nz-list-item"], ["onclick", "window.location.hash = 'nz-list-item'", 1, "anchor"], ["id", "ul[nz-list-item-actions]"], ["onclick", "window.location.hash = 'ul[nz-list-item-actions]'", 1, "anchor"], ["id", "nz-list-item-action"], ["onclick", "window.location.hash = 'nz-list-item-action'", 1, "anchor"], ["id", "nz-list-item-extra"], ["onclick", "window.location.hash = 'nz-list-item-extra'", 1, "anchor"], ["id", "nz-list-item-meta"], ["onclick", "window.location.hash = 'nz-list-item-meta'", 1, "anchor"], ["id", "nz-list-item-meta-title"], ["onclick", "window.location.hash = 'nz-list-item-meta-title'", 1, "anchor"], ["id", "nz-list-item-meta-description"], ["onclick", "window.location.hash = 'nz-list-item-meta-description'", 1, "anchor"], ["id", "nz-list-item-meta-avatar"], ["onclick", "window.location.hash = 'nz-list-item-meta-avatar'", 1, "anchor"]], template: function NzDemoListEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzClick", function NzDemoListEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "section", 10)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "span", 11)(15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Simple List.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "h2", 15)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "pre", 17)(29, "code")(30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, " NzListModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "'ng-zorro-antd/list'");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NzDemoListEnComponent_Template_i_click_49_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 22)(51, "div", 23)(52, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "nz-demo-list-simple", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Ant Design supports a default list size as well as a large and small size.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "If a large or small list is desired, set the size property to either large or small respectively. Omit the size property for a list with the default size.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Customizing the nzHeader and nzFooter of list by setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "nzHeader");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "nzFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, " property.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "nz-demo-list-basic", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "Basic list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](73, "nz-demo-list-loadmore", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "Load more list with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "loadMore");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, " property.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "nz-demo-list-vertical", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "Setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "nzItemLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, " property with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, " to create a vertical list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](92, "nz-demo-list-grid", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "Creating a grid list by setting the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, " property of List");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](100, "nz-demo-list-resposive", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103, "Responsive grid list. The size property is as same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105, "Layout Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](108, "nz-demo-list-infinite-load", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, "An example of infinite list & virtualized loading using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113, "cdk-virtual-scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "p")(116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117, "Virtualized");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118, " rendering is a technique to mount big sets of data. It reduces the amount of rendered DOM nodes by tracking and hiding whatever isn't currently visible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "h2", 36)(121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](124, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "h3", 38)(126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127, "nz-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "table")(133, "thead")(134, "tr")(135, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](136, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](137, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](138, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "tbody")(144, "tr")(145, "td")(146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, "[nzBordered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149, "Toggles rendering of the border around the list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "td")(151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](152, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "td")(154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](155, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "tr")(157, "td")(158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](159, "[nzFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161, "List footer renderer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "td")(163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](164, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "tr")(168, "td")(169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](170, "[nzHeader]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](172, "List header renderer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](173, "td")(174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](175, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](177, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](178, "tr")(179, "td")(180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](181, "[nzItemLayout]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](183, "The layout of list, default is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](185, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](186, ", If a vertical list is desired, set the itemLayout property to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "td")(190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](191, "'vertical' | 'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](192, "td")(193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](194, "'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](195, "tr")(196, "td")(197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](198, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](200, "Shows a loading indicator while the contents of the list are being fetched");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](201, "td")(202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](203, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](204, "td")(205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](206, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](207, "tr")(208, "td")(209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](210, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](212, "Size of list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "td")(214, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](215, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](216, "td")(217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](218, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](219, "tr")(220, "td")(221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](222, "[nzSplit]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224, "Toggles rendering of the split under the list item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "td")(226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](227, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](228, "td")(229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](230, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](231, "h3", 41)(232, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](233, "nz-list-empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](234, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](235, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](236, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](237, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](239, "Empty content component for the list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](240, "table")(241, "thead")(242, "tr")(243, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](244, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](245, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](246, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](247, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](248, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](249, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](250, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](251, "tbody")(252, "tr")(253, "td")(254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](255, "[nzNoResult]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](257, "Empty content");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](258, "td")(259, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](260, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](262, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](263, "h3", 43)(264, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](265, "nz-list[nzGrid]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](266, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](267, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](268, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](269, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](271, "Use grid layout for the list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](272, "h3", 45)(273, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](274, "nz-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](275, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](276, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](277, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](278, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](279, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](280, "Header component for the list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](281, "h3", 47)(282, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](283, "nz-list-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](284, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](285, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](286, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](287, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](288, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](289, "Footer component for the list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](290, "h3", 49)(291, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](292, "nz-list-pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](293, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](294, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](295, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](296, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](297, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](298, "Pagination component for the list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](299, "h3", 51)(300, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](301, "nz-list-load-more");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](302, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](303, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](304, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](305, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](306, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](307, "Load more component for the list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](308, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](309, "h3", 53)(310, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](311, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](312, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](313, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](314, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](315, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](316, "table")(317, "thead")(318, "tr")(319, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](320, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](321, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](322, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](323, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](324, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](325, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](326, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](327, "tbody")(328, "tr")(329, "td")(330, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](331, "[nzNoFlex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](333, "Whether it's not ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](334, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](335, "flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](336, " layout rendering");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](337, "td")(338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](339, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](340, "td")(341, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](342, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](343, "h4", 55)(344, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](345, "ul[nz-list-item-actions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](346, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](347, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](348, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](349, "Actions container component for the list items.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](350, "h4", 57)(351, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](352, "nz-list-item-action");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](353, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](354, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](355, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](356, "Action component for the list items.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](357, "h4", 59)(358, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](359, "nz-list-item-extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](360, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](361, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](362, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](363, "Extra content for the list items.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](364, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](365, "h3", 61)(366, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](367, "nz-list-item-meta");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](368, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](369, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](370, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](371, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](372, "table")(373, "thead")(374, "tr")(375, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](376, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](377, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](378, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](379, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](380, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](381, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](382, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](383, "tbody")(384, "tr")(385, "td")(386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](387, "[nzAvatar]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](389, "The avatar of list item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](390, "td")(391, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](392, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](393, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](394, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](395, "tr")(396, "td")(397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](398, "[nzDescription]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](400, "The description of list item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](401, "td")(402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](403, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](405, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](406, "tr")(407, "td")(408, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](409, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](411, "The title of list item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](412, "td")(413, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](414, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](416, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](417, "h4", 63)(418, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](419, "nz-list-item-meta-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](420, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](421, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](422, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](423, "Title component for the list items meta part.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](424, "h4", 65)(425, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](426, "nz-list-item-meta-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](427, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](428, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](429, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](430, "Description component for the list items meta part.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](431, "h4", 67)(432, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](433, "nz-list-item-meta-avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](434, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](435, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](436, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](437, "Avatar component for the list items meta part.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-simple")("nzLink", "components-list-demo-simple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/simple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-basic")("nzLink", "components-list-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-loadmore")("nzLink", "components-list-demo-loadmore")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/loadmore.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-vertical")("nzLink", "components-list-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-grid")("nzLink", "components-list-demo-grid")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/grid.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-resposive")("nzLink", "components-list-demo-resposive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/resposive.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-infinite-load")("nzLink", "components-list-demo-infinite-load")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/infinite-load.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _simple__WEBPACK_IMPORTED_MODULE_1__.NzDemoListSimpleComponent, _basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoListBasicComponent, _loadmore__WEBPACK_IMPORTED_MODULE_3__.NzDemoListLoadmoreComponent, _vertical__WEBPACK_IMPORTED_MODULE_4__.NzDemoListVerticalComponent, _grid__WEBPACK_IMPORTED_MODULE_5__.NzDemoListGridComponent, _resposive__WEBPACK_IMPORTED_MODULE_6__.NzDemoListResposiveComponent, _infinite_load__WEBPACK_IMPORTED_MODULE_7__.NzDemoListInfiniteLoadComponent], encapsulation: 2 });


/***/ }),

/***/ 10142:
/*!*****************************************!*\
  !*** ./src/app/components/list/grid.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoListGridComponent": () => (/* binding */ NzDemoListGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ 49871);





function NzDemoListGridComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "nz-list-item")(2, "nz-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Card content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", item_r1.title);
} }
class NzDemoListGridComponent {
    constructor() {
        this.data = [
            {
                title: 'Title 1'
            },
            {
                title: 'Title 2'
            },
            {
                title: 'Title 3'
            },
            {
                title: 'Title 4'
            }
        ];
    }
}
NzDemoListGridComponent.ɵfac = function NzDemoListGridComponent_Factory(t) { return new (t || NzDemoListGridComponent)(); };
NzDemoListGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoListGridComponent, selectors: [["nz-demo-list-grid"]], decls: 3, vars: 2, consts: [["nzGrid", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan"], [3, "nzTitle"]], template: function NzDemoListGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoListGridComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListGridDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__.NzCardComponent], encapsulation: 2 });


/***/ }),

/***/ 22237:
/*!*************************************************!*\
  !*** ./src/app/components/list/index.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoListModule": () => (/* binding */ NzDemoListModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 36728);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 6270);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid */ 10142);
/* harmony import */ var _infinite_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infinite-load */ 90245);
/* harmony import */ var _loadmore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadmore */ 86117);
/* harmony import */ var _resposive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resposive */ 37059);
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./simple */ 70940);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vertical */ 48626);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zh.component */ 43845);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./en.component */ 52743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ 49871);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 98235);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/typography */ 21477);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);





















class NzDemoListModule {
}
NzDemoListModule.ɵfac = function NzDemoListModule_Factory(t) { return new (t || NzDemoListModule)(); };
NzDemoListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: NzDemoListModule });
NzDemoListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoListEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoListZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](NzDemoListModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoListBasicComponent,
        _grid__WEBPACK_IMPORTED_MODULE_3__.NzDemoListGridComponent,
        _infinite_load__WEBPACK_IMPORTED_MODULE_4__.NzDemoListInfiniteLoadComponent,
        _loadmore__WEBPACK_IMPORTED_MODULE_5__.NzDemoListLoadmoreComponent,
        _resposive__WEBPACK_IMPORTED_MODULE_6__.NzDemoListResposiveComponent,
        _simple__WEBPACK_IMPORTED_MODULE_7__.NzDemoListSimpleComponent,
        _vertical__WEBPACK_IMPORTED_MODULE_8__.NzDemoListVerticalComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoListZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoListEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_13__.NzListModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_15__.NzSkeletonModule, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_16__.NzPaginationModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonModule, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_18__.NzTypographyModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzGridModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 90245:
/*!**************************************************!*\
  !*** ./src/app/components/list/infinite-load.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoListInfiniteLoadComponent": () => (/* binding */ NzDemoListInfiniteLoadComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ 72035);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ 87741);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);








const _c0 = function () { return { rows: 1 }; };
function NzDemoListInfiniteLoadComponent_nz_list_item_3_nz_skeleton_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-skeleton", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAvatar", true)("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function NzDemoListInfiniteLoadComponent_nz_list_item_3_nz_list_item_meta_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item-meta", 5)(1, "nz-list-item-meta-title")(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDescription", item_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name.last);
} }
function NzDemoListInfiniteLoadComponent_nz_list_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoListInfiniteLoadComponent_nz_list_item_3_nz_skeleton_1_Template, 1, 3, "nz-skeleton", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoListInfiniteLoadComponent_nz_list_item_3_nz_list_item_meta_2_Template, 4, 2, "nz-list-item-meta", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1);
} }
class NzDemoListInfiniteLoadComponent {
    constructor(http) {
        this.http = http;
        this.ds = new MyDataSource(this.http);
    }
}
NzDemoListInfiniteLoadComponent.ɵfac = function NzDemoListInfiniteLoadComponent_Factory(t) { return new (t || NzDemoListInfiniteLoadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
NzDemoListInfiniteLoadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoListInfiniteLoadComponent, selectors: [["nz-demo-list-infinite-load"]], decls: 4, vars: 1, consts: [["itemSize", "73", 1, "demo-infinite-container"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [3, "nzAvatar", "nzParagraph", 4, "ngIf"], ["nzAvatar", "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", 3, "nzDescription", 4, "ngIf"], [3, "nzAvatar", "nzParagraph"], ["nzAvatar", "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", 3, "nzDescription"], ["href", "https://ng.ant.design"]], template: function NzDemoListInfiniteLoadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "cdk-virtual-scroll-viewport", 0)(2, "nz-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoListInfiniteLoadComponent_nz_list_item_3_Template, 3, 2, "nz-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx.ds);
    } }, directives: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkFixedSizeVirtualScroll, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkVirtualForOf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__.NzSkeletonComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemMetaTitleComponent], styles: [".demo-infinite-container[_ngcontent-%COMP%] {\n        height: 300px;\n        border: 1px solid #e8e8e8;\n        border-radius: 4px;\n      }\n\n      nz-list[_ngcontent-%COMP%] {\n        padding: 24px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLWxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSxhQUFhO01BQ2YiLCJmaWxlIjoiaW5maW5pdGUtbG9hZC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmRlbW8taW5maW5pdGUtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuXG4gICAgICBuei1saXN0IHtcbiAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIH1cbiAgICAiXX0= */"], changeDetection: 0 });
class MyDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.DataSource {
    constructor(http) {
        super();
        this.http = http;
        this.length = 100000;
        this.pageSize = 10;
        this.cachedData = Array.from({ length: this.length });
        this.fetchedPages = new Set();
        this.dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(this.cachedData);
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    }
    connect(collectionViewer) {
        this.subscription.add(collectionViewer.viewChange.subscribe(range => {
            const startPage = this.getPageForIndex(range.start);
            const endPage = this.getPageForIndex(range.end - 1);
            for (let i = startPage; i <= endPage; i++) {
                this.fetchPage(i);
            }
        }));
        return this.dataStream;
    }
    disconnect() {
        this.subscription.unsubscribe();
    }
    getPageForIndex(index) {
        return Math.floor(index / this.pageSize);
    }
    fetchPage(page) {
        if (this.fetchedPages.has(page)) {
            return;
        }
        this.fetchedPages.add(page);
        this.http
            .get(`https://randomuser.me/api/?results=${this.pageSize}&inc=name,gender,email,nat&noinfo`)
            .subscribe(res => {
            this.cachedData.splice(page * this.pageSize, this.pageSize, ...res.results);
            this.dataStream.next(this.cachedData);
        });
    }
}


/***/ }),

/***/ 86117:
/*!*********************************************!*\
  !*** ./src/app/components/list/loadmore.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoListLoadmoreComponent": () => (/* binding */ NzDemoListLoadmoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);









function NzDemoListLoadmoreComponent_nz_list_item_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item-meta", 6)(2, "nz-list-item-meta-title")(3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 8)(7, "nz-list-item-action")(8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoListLoadmoreComponent_nz_list_item_1_ng_container_1_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.edit(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-list-item-action")(11, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoListLoadmoreComponent_nz_list_item_1_ng_container_1_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.edit(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name.last);
} }
function NzDemoListLoadmoreComponent_nz_list_item_1_nz_skeleton_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-skeleton", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAvatar", true)("nzActive", true)("nzTitle", false)("nzLoading", true);
} }
function NzDemoListLoadmoreComponent_nz_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoListLoadmoreComponent_nz_list_item_1_ng_container_1_Template, 13, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoListLoadmoreComponent_nz_list_item_1_nz_skeleton_2_Template, 1, 4, "nz-skeleton", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.loading);
} }
function NzDemoListLoadmoreComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoListLoadmoreComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onLoadMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
class NzDemoListLoadmoreComponent {
    constructor(http, msg) {
        this.http = http;
        this.msg = msg;
        this.initLoading = true; // bug
        this.loadingMore = false;
        this.data = [];
        this.list = [];
    }
    ngOnInit() {
        this.getData((res) => {
            this.data = res.results;
            this.list = res.results;
            this.initLoading = false;
        });
    }
    getData(callback) {
        this.http.get(fakeDataUrl).subscribe((res) => callback(res));
    }
    onLoadMore() {
        this.loadingMore = true;
        this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
        this.http.get(fakeDataUrl).subscribe((res) => {
            this.data = this.data.concat(res.results);
            this.list = [...this.data];
            this.loadingMore = false;
        });
    }
    edit(item) {
        this.msg.success(item.email);
    }
}
NzDemoListLoadmoreComponent.ɵfac = function NzDemoListLoadmoreComponent_Factory(t) { return new (t || NzDemoListLoadmoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__.NzMessageService)); };
NzDemoListLoadmoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoListLoadmoreComponent, selectors: [["nz-demo-list-loadmore"]], decls: 4, vars: 3, consts: [[1, "demo-loadmore-list", 3, "nzLoading"], [4, "ngFor", "ngForOf"], ["nz-list-load-more", "", 1, "loadmore"], ["nz-button", "", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "nzAvatar", "nzActive", "nzTitle", "nzLoading", 4, "ngIf"], ["nzAvatar", "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", "nzDescription", "Ant Design, a design language for background applications, is refined by Ant UED Team"], ["href", "https://ng.ant.design"], ["nz-list-item-actions", ""], [3, "click"], [3, "nzAvatar", "nzActive", "nzTitle", "nzLoading"], ["nz-button", "", 3, "click"]], template: function NzDemoListLoadmoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoListLoadmoreComponent_nz_list_item_1_Template, 3, 2, "nz-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoListLoadmoreComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.initLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingMore);
    } }, directives: [ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemMetaTitleComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemActionsComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemActionComponent, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__.NzSkeletonComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], styles: [".demo-loadmore-list[_ngcontent-%COMP%] {\n        min-height: 350px;\n      }\n      .loadmore[_ngcontent-%COMP%] {\n        text-align: center;\n        margin-top: 12px;\n        height: 32px;\n        line-height: 32px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRtb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGlCQUFpQjtNQUNuQjtNQUNBO1FBQ0Usa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osaUJBQWlCO01BQ25CIiwiZmlsZSI6ImxvYWRtb3JlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuZGVtby1sb2FkbW9yZS1saXN0IHtcbiAgICAgICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgICB9XG4gICAgICAubG9hZG1vcmUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 36728:
/*!*******************************************!*\
  !*** ./src/app/components/list/module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ 49871);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 98235);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/typography */ 21477);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);







const moduleList = [
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_0__.NzListModule,
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__.NzCardModule,
    ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_2__.NzSkeletonModule,
    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_3__.NzPaginationModule,
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule,
    ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_5__.NzTypographyModule,
    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzGridModule
];


/***/ }),

/***/ 37059:
/*!**********************************************!*\
  !*** ./src/app/components/list/resposive.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoListResposiveComponent": () => (/* binding */ NzDemoListResposiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ 49871);





function NzDemoListResposiveComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "nz-list-item")(2, "nz-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Card content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 4)("nzLg", 6)("nzMd", 6)("nzSm", 12)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", item_r1.title);
} }
class NzDemoListResposiveComponent {
    constructor() {
        this.data = [
            {
                title: 'Title 1'
            },
            {
                title: 'Title 2'
            },
            {
                title: 'Title 3'
            },
            {
                title: 'Title 4'
            },
            {
                title: 'Title 5'
            },
            {
                title: 'Title 6'
            }
        ];
    }
}
NzDemoListResposiveComponent.ɵfac = function NzDemoListResposiveComponent_Factory(t) { return new (t || NzDemoListResposiveComponent)(); };
NzDemoListResposiveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoListResposiveComponent, selectors: [["nz-demo-list-resposive"]], decls: 3, vars: 2, consts: [["nzGrid", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [3, "nzTitle"]], template: function NzDemoListResposiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoListResposiveComponent_div_2_Template, 4, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListGridDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__.NzCardComponent], encapsulation: 2 });


/***/ }),

/***/ 70940:
/*!*******************************************!*\
  !*** ./src/app/components/list/simple.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoListSimpleComponent": () => (/* binding */ NzDemoListSimpleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/typography */ 21477);





function NzDemoListSimpleComponent_nz_list_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item")(1, "span", 6)(2, "mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "[ITEM]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
} }
function NzDemoListSimpleComponent_nz_list_item_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzDemoListSimpleComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7)(1, "ul", 8)(2, "nz-list-item-action")(3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoListSimpleComponent_li_17_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.msg.info("edit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5, " ");
} }
const _c0 = function () { return { "margin-bottom.px": 16 }; };
const _c1 = function () { return { margin: "16px 0" }; };
class NzDemoListSimpleComponent {
    constructor(msg) {
        this.msg = msg;
        this.data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.'
        ];
    }
}
NzDemoListSimpleComponent.ɵfac = function NzDemoListSimpleComponent_Factory(t) { return new (t || NzDemoListSimpleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService)); };
NzDemoListSimpleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoListSimpleComponent, selectors: [["nz-demo-list-simple"]], decls: 20, vars: 10, consts: [[3, "ngStyle"], ["nzBordered", "", "nzHeader", "Header", "nzFooter", "Footer"], [4, "ngFor", "ngForOf"], ["nzBordered", "", "nzSize", "small"], ["nz-list", "", "nzBordered", "", "nzSize", "large", 3, "nzDataSource"], ["nz-list-item", "", "nzNoFlex", "", 4, "ngFor", "ngForOf"], ["nz-typography", ""], ["nz-list-item", "", "nzNoFlex", ""], ["nz-list-item-actions", ""], [3, "click"]], template: function NzDemoListSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Default Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoListSimpleComponent_nz_list_item_3_Template, 5, 1, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Small Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-list", 3)(7, "nz-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzDemoListSimpleComponent_nz_list_item_9_Template, 2, 0, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-list-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Large Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 4)(15, "nz-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NzDemoListSimpleComponent_li_17_Template, 6, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-list-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemComponent, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__.NzTypographyComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListHeaderComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListFooterComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemActionsComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemActionComponent], encapsulation: 2 });


/***/ }),

/***/ 48626:
/*!*********************************************!*\
  !*** ./src/app/components/list/vertical.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoListVerticalComponent": () => (/* binding */ NzDemoListVerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);




function NzDemoListVerticalComponent_nz_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item")(1, "nz-list-item-meta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-list-item-meta-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-list-item-meta-title")(4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-list-item-meta-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4)(10, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 156");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 156");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-list-item-extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", item_r1.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.content, " ");
} }
class NzDemoListVerticalComponent {
    constructor() {
        this.data = [];
    }
    ngOnInit() {
        this.loadData(1);
    }
    loadData(pi) {
        this.data = new Array(5).fill({}).map((_, index) => {
            return {
                href: 'http://ant.design',
                title: `ant design part ${index} (page: ${pi})`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources ' +
                    '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
            };
        });
    }
}
NzDemoListVerticalComponent.ɵfac = function NzDemoListVerticalComponent_Factory(t) { return new (t || NzDemoListVerticalComponent)(); };
NzDemoListVerticalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoListVerticalComponent, selectors: [["nz-demo-list-vertical"]], decls: 2, vars: 1, consts: [["nzItemLayout", "vertical"], [4, "ngFor", "ngForOf"], [3, "nzSrc"], [3, "href"], ["nz-list-item-actions", ""], ["nz-icon", "", "nzType", "star-o", 2, "margin-right", "8px"], ["width", "272", "alt", "logo", "src", "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"]], template: function NzDemoListVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoListVerticalComponent_nz_list_item_1_Template, 21, 5, "nz-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemMetaAvatarComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemMetaTitleComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemMetaDescriptionComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemActionsComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemActionComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemExtraComponent], encapsulation: 2 });


/***/ }),

/***/ 43845:
/*!*************************************************!*\
  !*** ./src/app/components/list/zh.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoListZhComponent": () => (/* binding */ NzDemoListZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple */ 70940);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 6270);
/* harmony import */ var _loadmore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadmore */ 86117);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertical */ 48626);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid */ 10142);
/* harmony import */ var _resposive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resposive */ 37059);
/* harmony import */ var _infinite_load__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infinite-load */ 90245);















class NzDemoListZhComponent {
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
NzDemoListZhComponent.ɵfac = function NzDemoListZhComponent_Factory(t) { return new (t || NzDemoListZhComponent)(); };
NzDemoListZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: NzDemoListZhComponent, selectors: [["nz-demo-list"]], viewQuery: function NzDemoListZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 470, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-list-demo-simple", "nzTitle", "\u7B80\u5355\u5217\u8868"], ["nzHref", "#components-list-demo-basic", "nzTitle", "\u57FA\u7840\u5217\u8868"], ["nzHref", "#components-list-demo-loadmore", "nzTitle", "\u52A0\u8F7D\u66F4\u591A"], ["nzHref", "#components-list-demo-vertical", "nzTitle", "\u7AD6\u6392\u5217\u8868\u6837\u5F0F"], ["nzHref", "#components-list-demo-grid", "nzTitle", "\u6805\u683C\u5217\u8868"], ["nzHref", "#components-list-demo-resposive", "nzTitle", "\u54CD\u5E94\u5F0F\u7684\u6805\u683C\u5217\u8868"], ["nzHref", "#components-list-demo-infinite-load", "nzTitle", "\u6EDA\u52A8\u52A0\u8F7D\u65E0\u9650\u957F\u5217\u8868"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u7B80\u5355\u5217\u8868", "nzSelector", "nz-demo-list-simple", "nzGenerateCommand", "ng g ng-zorro-antd:list-simple <name>", "nzComponentName", "NzDemoListSimpleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u57FA\u7840\u5217\u8868", "nzSelector", "nz-demo-list-basic", "nzGenerateCommand", "ng g ng-zorro-antd:list-basic <name>", "nzComponentName", "NzDemoListBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u52A0\u8F7D\u66F4\u591A", "nzSelector", "nz-demo-list-loadmore", "nzGenerateCommand", "ng g ng-zorro-antd:list-loadmore <name>", "nzComponentName", "NzDemoListLoadmoreComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7AD6\u6392\u5217\u8868\u6837\u5F0F", "nzSelector", "nz-demo-list-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:list-vertical <name>", "nzComponentName", "NzDemoListVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6805\u683C\u5217\u8868", "nzSelector", "nz-demo-list-grid", "nzGenerateCommand", "ng g ng-zorro-antd:list-grid <name>", "nzComponentName", "NzDemoListGridComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u54CD\u5E94\u5F0F\u7684\u6805\u683C\u5217\u8868", "nzSelector", "nz-demo-list-resposive", "nzGenerateCommand", "ng g ng-zorro-antd:list-resposive <name>", "nzComponentName", "NzDemoListResposiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://ant.design/components/grid-cn/#Col"], ["nzTitle", "\u6EDA\u52A8\u52A0\u8F7D\u65E0\u9650\u957F\u5217\u8868", "nzSelector", "nz-demo-list-infinite-load", "nzGenerateCommand", "ng g ng-zorro-antd:list-infinite-load <name>", "nzComponentName", "NzDemoListInfiniteLoadComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://material.angular.io/cdk/scrolling/overview"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-list"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-list'", 1, "anchor"], ["id", "nz-list-empty"], ["onclick", "window.location.hash = 'nz-list-empty'", 1, "anchor"], ["id", "nz-list[nzgrid]"], ["onclick", "window.location.hash = 'nz-list[nzgrid]'", 1, "anchor"], ["id", "nz-list-header"], ["onclick", "window.location.hash = 'nz-list-header'", 1, "anchor"], ["id", "nz-list-footer"], ["onclick", "window.location.hash = 'nz-list-footer'", 1, "anchor"], ["id", "nz-list-pagination"], ["onclick", "window.location.hash = 'nz-list-pagination'", 1, "anchor"], ["id", "nz-list-load-more"], ["onclick", "window.location.hash = 'nz-list-load-more'", 1, "anchor"], ["id", "nz-list-item"], ["onclick", "window.location.hash = 'nz-list-item'", 1, "anchor"], ["id", "ul[nz-list-item-actions]"], ["onclick", "window.location.hash = 'ul[nz-list-item-actions]'", 1, "anchor"], ["id", "nz-list-item-action"], ["onclick", "window.location.hash = 'nz-list-item-action'", 1, "anchor"], ["id", "nz-list-item-extra"], ["onclick", "window.location.hash = 'nz-list-item-extra'", 1, "anchor"], ["id", "nz-list-item-meta"], ["onclick", "window.location.hash = 'nz-list-item-meta'", 1, "anchor"], ["id", "nz-list-item-meta-title"], ["onclick", "window.location.hash = 'nz-list-item-meta-title'", 1, "anchor"], ["id", "nz-list-item-meta-description"], ["onclick", "window.location.hash = 'nz-list-item-meta-description'", 1, "anchor"], ["id", "nz-list-item-meta-avatar"], ["onclick", "window.location.hash = 'nz-list-item-meta-avatar'", 1, "anchor"]], template: function NzDemoListZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzClick", function NzDemoListZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "section", 10)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "\u5217\u8868");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\u901A\u7528\u5217\u8868\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "h2", 15)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "\u6700\u57FA\u7840\u7684\u5217\u8868\u5C55\u793A\uFF0C\u53EF\u627F\u8F7D\u6587\u5B57\u3001\u5217\u8868\u3001\u56FE\u7247\u3001\u6BB5\u843D\uFF0C\u5E38\u7528\u4E8E\u540E\u53F0\u6570\u636E\u5C55\u793A\u9875\u9762\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "pre", 17)(30, "code")(31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, " NzListModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "'ng-zorro-antd/list'");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NzDemoListZhComponent_Template_i_click_50_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 22)(52, "div", 23)(53, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "nz-demo-list-simple", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "\u5217\u8868\u62E5\u6709\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "size");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, " \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5927\u3001\u5C0F\u5C3A\u5BF8\u3002\u82E5\u4E0D\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "size");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u4E2D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "\u53EF\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "nzHeader");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "nzFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "\uFF0C\u6765\u81EA\u5B9A\u4E49\u5217\u8868\u5934\u90E8\u548C\u5C3E\u90E8\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](80, "nz-demo-list-basic", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, "\u57FA\u7840\u5217\u8868\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](85, "nz-demo-list-loadmore", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, "\u53EF\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, "loadMore");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, " \u5C5E\u6027\u5B9E\u73B0\u52A0\u8F7D\u66F4\u591A\u529F\u80FD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](93, "nz-demo-list-vertical", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, "\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "nzItemLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, " \u5C5E\u6027\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102, " \u53EF\u5B9E\u73B0\u7AD6\u6392\u5217\u8868\u6837\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](104, "nz-demo-list-grid", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109, "nz-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112, "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113, " \u5C5E\u6027\u6765\u5B9E\u73B0\u6805\u683C\u5217\u8868\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, "column");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](116, " \u53EF\u8BBE\u7F6E\u671F\u671B\u663E\u793A\u7684\u5217\u6570\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](118, "nz-demo-list-resposive", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, "\u54CD\u5E94\u5F0F\u7684\u6805\u683C\u5217\u8868\u3002\u5C3A\u5BF8\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, "Layout Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](124, " \u4FDD\u6301\u4E00\u81F4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](126, "nz-demo-list-infinite-load", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, "\u7ED3\u5408 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131, "cdk-virtual-scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](132, " \u5B9E\u73B0\u6EDA\u52A8\u52A0\u8F7D\u65E0\u9650\u957F\u5217\u8868\uFF0C\u5E26\u6709\u865A\u62DF\u5316 virtualization \u529F\u80FD\uFF0C\u80FD\u591F\u63D0\u9AD8\u6570\u636E\u91CF\u5927\u65F6\u5019\u957F\u5217\u8868\u7684\u6027\u80FD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "p")(134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](135, "Virtualized");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](136, " \u662F\u5728\u5927\u6570\u636E\u5217\u8868\u4E2D\u5E94\u7528\u7684\u4E00\u79CD\u6280\u672F\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u51CF\u5C11\u4E0D\u53EF\u89C1\u533A\u57DF\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD\uFF0C\u7279\u522B\u662F\u6570\u636E\u91CF\u5728\u6210\u5343\u4E0A\u4E07\u6761\u6548\u679C\u5C24\u4E3A\u660E\u663E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](137, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "h2", 36)(139, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "h3", 38)(144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145, "nz-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "table")(151, "thead")(152, "tr")(153, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](156, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](160, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "tbody")(162, "tr")(163, "td")(164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](165, "[nzBordered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](167, "\u662F\u5426\u5C55\u793A\u8FB9\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](168, "td")(169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](170, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](171, "td")(172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "tr")(175, "td")(176, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](177, "[nzFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](179, "\u5217\u8868\u5E95\u90E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](180, "td")(181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](182, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](184, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "tr")(186, "td")(187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188, "[nzHeader]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](190, "\u5217\u8868\u5934\u90E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](191, "td")(192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](193, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](195, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "tr")(197, "td")(198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](199, "[nzItemLayout]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](201, "\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](203, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](204, " \u5E03\u5C40, \u8BBE\u7F6E\u6210 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](206, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](207, " \u5219\u7AD6\u76F4\u6837\u5F0F\u663E\u793A, \u9ED8\u8BA4\u6A2A\u6392");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](208, "td")(209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](210, "'vertical' | 'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](211, "td")(212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](213, "'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](214, "tr")(215, "td")(216, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](217, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](219, "\u5F53\u5361\u7247\u5185\u5BB9\u8FD8\u5728\u52A0\u8F7D\u4E2D\u65F6\uFF0C\u53EF\u4EE5\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](221, "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](222, " \u5C55\u793A\u4E00\u4E2A\u5360\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](223, "td")(224, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](225, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](226, "td")(227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](228, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](229, "tr")(230, "td")(231, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](232, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](234, "list \u7684\u5C3A\u5BF8");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](235, "td")(236, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](237, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](238, "td")(239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](240, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](241, "tr")(242, "td")(243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](244, "[nzSplit]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](246, "\u662F\u5426\u5C55\u793A\u5206\u5272\u7EBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](247, "td")(248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](249, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](250, "td")(251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](252, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](253, "h3", 41)(254, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](255, "nz-list-empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](256, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](257, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](258, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](259, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](260, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](261, "\u5217\u8868\u7A7A\u5185\u5BB9\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](262, "table")(263, "thead")(264, "tr")(265, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](266, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](267, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](268, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](269, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](270, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](271, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](272, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](273, "tbody")(274, "tr")(275, "td")(276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](277, "[nzNoResult]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](279, "\u7A7A\u5185\u5BB9\u663E\u793A\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](280, "td")(281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](282, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](284, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](285, "h3", 43)(286, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](287, "nz-list[nzGrid]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](288, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](289, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](290, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](291, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](292, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](293, "\u4F7F\u7528\u6805\u683C\u5E03\u5C40");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](294, "h3", 45)(295, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](296, "nz-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](297, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](298, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](299, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](300, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](301, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](302, "\u5217\u8868\u5934\u90E8\u4F4D\u7F6E\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](303, "h3", 47)(304, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](305, "nz-list-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](306, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](307, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](308, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](309, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](310, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](311, "\u5217\u8868\u811A\u90E8\u4F4D\u7F6E\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](312, "h3", 49)(313, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](314, "nz-list-pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](315, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](316, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](317, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](318, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](319, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](320, "\u5217\u8868\u5206\u9875\u4F4D\u7F6E\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](321, "h3", 51)(322, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](323, "nz-list-load-more");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](324, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](325, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](326, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](327, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](328, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](329, "\u5217\u8868\u52A0\u8F7D\u66F4\u591A\u4F4D\u7F6E\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](330, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](331, "h3", 53)(332, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](333, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](334, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](335, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](336, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](337, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](338, "table")(339, "thead")(340, "tr")(341, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](342, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](343, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](344, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](345, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](346, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](347, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](348, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](349, "tbody")(350, "tr")(351, "td")(352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](353, "[nzNoFlex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](355, "\u662F\u5426\u975E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](356, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](357, "flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](358, " \u5E03\u5C40\u6E32\u67D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](359, "td")(360, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](361, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](362, "td")(363, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](364, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](365, "h3", 55)(366, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](367, "ul[nz-list-item-actions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](368, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](369, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](370, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](371, "\u5217\u8868\u9879\u64CD\u4F5C\u9879\u5BB9\u5668\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](372, "h3", 57)(373, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](374, "nz-list-item-action");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](375, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](376, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](377, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](378, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](379, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](380, "\u5217\u8868\u9879\u64CD\u4F5C\u9879\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](381, "h3", 59)(382, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](383, "nz-list-item-extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](384, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](385, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](386, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](387, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](388, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](389, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](390, "\u5217\u8868\u9879\u6269\u5C55\u5185\u5BB9\u4F4D\u7F6E\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](391, "h3", 61)(392, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](393, "nz-list-item-meta");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](394, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](395, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](396, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](397, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](398, "table")(399, "thead")(400, "tr")(401, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](402, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](403, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](404, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](405, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](406, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](407, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](408, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](409, "tbody")(410, "tr")(411, "td")(412, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](413, "[nzAvatar]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](414, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](415, "\u5217\u8868\u5143\u7D20\u7684\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](416, "td")(417, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](418, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](419, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](420, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](421, "tr")(422, "td")(423, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](424, "[nzDescription]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](425, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](426, "\u5217\u8868\u5143\u7D20\u7684\u63CF\u8FF0\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](427, "td")(428, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](429, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](430, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](431, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](432, "tr")(433, "td")(434, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](435, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](437, "\u5217\u8868\u5143\u7D20\u7684\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](438, "td")(439, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](440, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](442, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](443, "h3", 63)(444, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](445, "nz-list-item-meta-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](446, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](447, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](448, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](449, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](450, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](451, "\u5217\u8868\u9879\u5143\u4FE1\u606F\u6807\u9898\u90E8\u5206\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](452, "h3", 65)(453, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](454, "nz-list-item-meta-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](455, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](456, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](457, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](458, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](459, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](460, "\u5217\u8868\u9879\u5143\u4FE1\u606F\u63CF\u8FF0\u90E8\u5206\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](461, "h3", 67)(462, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](463, "nz-list-item-meta-avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](464, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](465, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](466, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](467, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](468, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](469, "\u5217\u8868\u9879\u5143\u4FE1\u606F\u5934\u50CF\u90E8\u5206\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-simple")("nzLink", "components-list-demo-simple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/simple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-basic")("nzLink", "components-list-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-loadmore")("nzLink", "components-list-demo-loadmore")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/loadmore.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-vertical")("nzLink", "components-list-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-grid")("nzLink", "components-list-demo-grid")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/grid.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-resposive")("nzLink", "components-list-demo-resposive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/resposive.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-list-demo-infinite-load")("nzLink", "components-list-demo-infinite-load")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/list/demo/infinite-load.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _simple__WEBPACK_IMPORTED_MODULE_1__.NzDemoListSimpleComponent, _basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoListBasicComponent, _loadmore__WEBPACK_IMPORTED_MODULE_3__.NzDemoListLoadmoreComponent, _vertical__WEBPACK_IMPORTED_MODULE_4__.NzDemoListVerticalComponent, _grid__WEBPACK_IMPORTED_MODULE_5__.NzDemoListGridComponent, _resposive__WEBPACK_IMPORTED_MODULE_6__.NzDemoListResposiveComponent, _infinite_load__WEBPACK_IMPORTED_MODULE_7__.NzDemoListInfiniteLoadComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_list_index_module_ts.js.map