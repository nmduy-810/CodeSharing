"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_tree-select_index_module_ts"],{

/***/ 7901:
/*!*************************************************!*\
  !*** ./src/app/components/tree-select/async.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeSelectAsyncComponent": () => (/* binding */ NzDemoTreeSelectAsyncComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 51170);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



const _c0 = function () { return { "max-height": "300px" }; };
class NzDemoTreeSelectAsyncComponent {
    constructor() {
        this.expandKeys = ['0-0'];
        this.nodes = [
            {
                title: 'Node1',
                value: '0-0',
                key: '0-0',
                children: [
                    {
                        title: 'Child Node1',
                        value: '0-0-1',
                        key: '0-0-1'
                    },
                    {
                        title: 'Child Node2',
                        value: '0-0-2',
                        key: '0-0-2'
                    }
                ]
            },
            {
                title: 'Node2',
                value: '0-1',
                key: '0-1'
            }
        ];
    }
    onExpandChange(e) {
        const node = e.node;
        if (node && node.getChildren().length === 0 && node.isExpanded) {
            this.loadNode().then(data => {
                node.addChildren(data);
            });
        }
    }
    loadNode() {
        return new Promise(resolve => {
            setTimeout(() => resolve([
                { title: 'Child Node', key: `${new Date().getTime()}-0` },
                { title: 'Child Node', key: `${new Date().getTime()}-1` }
            ]), 1000);
        });
    }
}
NzDemoTreeSelectAsyncComponent.ɵfac = function NzDemoTreeSelectAsyncComponent_Factory(t) { return new (t || NzDemoTreeSelectAsyncComponent)(); };
NzDemoTreeSelectAsyncComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeSelectAsyncComponent, selectors: [["nz-demo-tree-select-async"]], decls: 1, vars: 7, consts: [["nzPlaceHolder", "Please select", 2, "width", "250px", 3, "nzExpandedKeys", "ngModel", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNodes", "nzAsyncData", "ngModelChange", "nzExpandChange"]], template: function NzDemoTreeSelectAsyncComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTreeSelectAsyncComponent_Template_nz_tree_select_ngModelChange_0_listener($event) { return ctx.value = $event; })("nzExpandChange", function NzDemoTreeSelectAsyncComponent_Template_nz_tree_select_nzExpandChange_0_listener($event) { return ctx.onExpandChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpandedKeys", ctx.expandKeys)("ngModel", ctx.value)("nzDropdownMatchSelectWidth", true)("nzDropdownStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("nzNodes", ctx.nodes)("nzAsyncData", true);
    } }, directives: [ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__.NzTreeSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 40626:
/*!*************************************************!*\
  !*** ./src/app/components/tree-select/basic.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeSelectBasicComponent": () => (/* binding */ NzDemoTreeSelectBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 51170);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoTreeSelectBasicComponent {
    constructor() {
        this.expandKeys = ['100', '1001'];
        this.nodes = [
            {
                title: 'parent 1',
                key: '100',
                children: [
                    {
                        title: 'parent 1-0',
                        key: '1001',
                        children: [
                            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
                            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
                        ]
                    },
                    {
                        title: 'parent 1-1',
                        key: '1002',
                        children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
                    }
                ]
            }
        ];
    }
    onChange($event) {
        console.log($event);
    }
    ngOnInit() {
        // mock async
        setTimeout(() => {
            this.value = '1001';
        }, 1000);
    }
}
NzDemoTreeSelectBasicComponent.ɵfac = function NzDemoTreeSelectBasicComponent_Factory(t) { return new (t || NzDemoTreeSelectBasicComponent)(); };
NzDemoTreeSelectBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeSelectBasicComponent, selectors: [["nz-demo-tree-select-basic"]], decls: 1, vars: 3, consts: [["nzShowSearch", "", "nzPlaceHolder", "Please select", 2, "width", "250px", 3, "nzExpandedKeys", "nzNodes", "ngModel", "ngModelChange"]], template: function NzDemoTreeSelectBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTreeSelectBasicComponent_Template_nz_tree_select_ngModelChange_0_listener($event) { return ctx.value = $event; })("ngModelChange", function NzDemoTreeSelectBasicComponent_Template_nz_tree_select_ngModelChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpandedKeys", ctx.expandKeys)("nzNodes", ctx.nodes)("ngModel", ctx.value);
    } }, directives: [ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__.NzTreeSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 92125:
/*!*****************************************************!*\
  !*** ./src/app/components/tree-select/checkable.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeSelectCheckableComponent": () => (/* binding */ NzDemoTreeSelectCheckableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 51170);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoTreeSelectCheckableComponent {
    constructor() {
        this.value = ['0-0-0'];
        this.nodes = [
            {
                title: 'Node1',
                value: '0-0',
                key: '0-0',
                children: [
                    {
                        title: 'Child Node1',
                        value: '0-0-0',
                        key: '0-0-0',
                        isLeaf: true
                    }
                ]
            },
            {
                title: 'Node2',
                value: '0-1',
                key: '0-1',
                children: [
                    {
                        title: 'Child Node3',
                        value: '0-1-0',
                        key: '0-1-0',
                        isLeaf: true
                    },
                    {
                        title: 'Child Node4',
                        value: '0-1-1',
                        key: '0-1-1',
                        isLeaf: true
                    },
                    {
                        title: 'Child Node5',
                        value: '0-1-2',
                        key: '0-1-2',
                        isLeaf: true
                    }
                ]
            }
        ];
    }
    onChange($event) {
        console.log($event);
    }
}
NzDemoTreeSelectCheckableComponent.ɵfac = function NzDemoTreeSelectCheckableComponent_Factory(t) { return new (t || NzDemoTreeSelectCheckableComponent)(); };
NzDemoTreeSelectCheckableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeSelectCheckableComponent, selectors: [["nz-demo-tree-select-checkable"]], decls: 1, vars: 2, consts: [["nzShowSearch", "", "nzCheckable", "", "nzPlaceHolder", "Please select", 2, "width", "250px", 3, "ngModel", "nzNodes", "ngModelChange"]], template: function NzDemoTreeSelectCheckableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTreeSelectCheckableComponent_Template_nz_tree_select_ngModelChange_0_listener($event) { return ctx.value = $event; })("ngModelChange", function NzDemoTreeSelectCheckableComponent_Template_nz_tree_select_ngModelChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("nzNodes", ctx.nodes);
    } }, directives: [ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__.NzTreeSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 75808:
/*!***********************************************************!*\
  !*** ./src/app/components/tree-select/customized-icon.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeSelectCustomizedIconComponent": () => (/* binding */ NzDemoTreeSelectCustomizedIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 51170);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);




function NzDemoTreeSelectCustomizedIconComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tree-node-selected", node_r2.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", node_r2.isExpanded ? "folder-open" : "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r2.title, " ");
} }
class NzDemoTreeSelectCustomizedIconComponent {
    constructor() {
        this.nodes = [
            {
                title: 'parent 1',
                key: '100',
                expanded: true,
                icon: 'smile',
                children: [
                    { title: 'leaf 1-0-0', key: '10010', icon: 'meh', isLeaf: true },
                    { title: 'leaf 1-0-1', key: '10011', icon: 'frown', isLeaf: true }
                ]
            }
        ];
    }
}
NzDemoTreeSelectCustomizedIconComponent.ɵfac = function NzDemoTreeSelectCustomizedIconComponent_Factory(t) { return new (t || NzDemoTreeSelectCustomizedIconComponent)(); };
NzDemoTreeSelectCustomizedIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeSelectCustomizedIconComponent, selectors: [["nz-demo-tree-select-customized-icon"]], decls: 5, vars: 4, consts: [["nzPlaceHolder", "Please select", "nzShowIcon", "", 2, "width", "250px", 3, "ngModel", "nzNodes", "ngModelChange"], ["nzPlaceHolder", "Please select", 2, "width", "250px", "margin-top", "20px", 3, "ngModel", "nzNodes", "ngModelChange"], ["nzTreeTemplate", ""], [1, "ant-tree-node-content-wrapper"], ["nz-icon", "", 3, "nzType"]], template: function NzDemoTreeSelectCustomizedIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTreeSelectCustomizedIconComponent_Template_nz_tree_select_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-tree-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTreeSelectCustomizedIconComponent_Template_nz_tree_select_ngModelChange_2_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoTreeSelectCustomizedIconComponent_ng_template_3_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("nzNodes", ctx.nodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("nzNodes", ctx.nodes);
    } }, directives: [ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__.NzTreeSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 47695:
/*!********************************************************!*\
  !*** ./src/app/components/tree-select/en.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeSelectEnComponent": () => (/* binding */ NzDemoTreeSelectEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 40626);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async */ 7901);
/* harmony import */ var _customized_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customized-icon */ 75808);
/* harmony import */ var _multiple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiple */ 80149);
/* harmony import */ var _checkable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkable */ 92125);













class NzDemoTreeSelectEnComponent {
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
NzDemoTreeSelectEnComponent.ɵfac = function NzDemoTreeSelectEnComponent_Factory(t) { return new (t || NzDemoTreeSelectEnComponent)(); };
NzDemoTreeSelectEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NzDemoTreeSelectEnComponent, selectors: [["nz-demo-tree-select"]], viewQuery: function NzDemoTreeSelectEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 506, vars: 22, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-tree-select-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-tree-select-demo-multiple", "nzTitle", "Multiple Selection"], ["nzHref", "#components-tree-select-demo-async", "nzTitle", "Load data asynchronously"], ["nzHref", "#components-tree-select-demo-checkable", "nzTitle", "Checkable"], ["nzHref", "#components-tree-select-demo-customized-icon", "nzTitle", "Customize Icon"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-tree-select-basic", "nzGenerateCommand", "ng g ng-zorro-antd:tree-select-basic <name>", "nzComponentName", "NzDemoTreeSelectBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Load data asynchronously", "nzSelector", "nz-demo-tree-select-async", "nzGenerateCommand", "ng g ng-zorro-antd:tree-select-async <name>", "nzComponentName", "NzDemoTreeSelectAsyncComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Customize Icon", "nzSelector", "nz-demo-tree-select-customized-icon", "nzGenerateCommand", "ng g ng-zorro-antd:tree-select-customized-icon <name>", "nzComponentName", "NzDemoTreeSelectCustomizedIconComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Multiple Selection", "nzSelector", "nz-demo-tree-select-multiple", "nzGenerateCommand", "ng g ng-zorro-antd:tree-select-multiple <name>", "nzComponentName", "NzDemoTreeSelectMultipleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Checkable", "nzSelector", "nz-demo-tree-select-checkable", "nzGenerateCommand", "ng g ng-zorro-antd:tree-select-checkable <name>", "nzComponentName", "NzDemoTreeSelectCheckableComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-tree-select"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-tree-select'", 1, "anchor"], ["id", "methods"], ["onclick", "window.location.hash = 'methods'", 1, "anchor"]], template: function NzDemoTreeSelectEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzClick", function NzDemoTreeSelectEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "section", 8)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "TreeSelect");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "span", 9)(13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Tree selection control.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h2", 13)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p")(25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "TreeSelect");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " is similar to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, ", but the values are provided in a tree like structure.\nAny data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "pre", 15)(32, "code")(33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " NzTreeSelectModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "'ng-zorro-antd/tree-select'");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NzDemoTreeSelectEnComponent_Template_i_click_52_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 20)(54, "div", 21)(55, "nz-code-box", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "nz-demo-tree-select-basic", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "The most basic usage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "nz-demo-tree-select-async", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "To load data asynchronously when click to expand a treeNode, loading state keeps until excute addChildren().");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "nz-demo-tree-select-customized-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "You can customize icons for different nodes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 21)(71, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "nz-demo-tree-select-multiple", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Multiple selection usage, max 3 option will display at the same time by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "nzMaxTagCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "nz-demo-tree-select-checkable", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Multiple and checkable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "h2", 30)(86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "h3", 32)(91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "nz-tree-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "table")(98, "thead")(99, "tr")(100, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "tbody")(111, "tr")(112, "td")(113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "[nzAllowClear]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "Whether allow clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "td")(118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "td")(121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "tr")(125, "td")(126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Placeholder of the select input");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "td")(131, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "tr")(137, "td")(138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](139, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, "Disabled or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "td")(143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "td")(146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "tr")(150, "td")(151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, "[nzShowIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154, "Shows the icon before a TreeNode's title. There is no default style");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "td")(156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](157, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "td")(159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](160, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "tr")(163, "td")(164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "[nzShowSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](167, "Whether to display a search input in the dropdown menu(valid only in the single mode)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "td")(169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](170, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "td")(172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](175, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "tr")(177, "td")(178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](179, "[nzNotFoundContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181, "Specify content to show when no result matches.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "td")(183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](184, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](186, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "tr")(189, "td")(190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](191, "[nzDropdownMatchSelectWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](193, "Determine whether the dropdown menu and the select input are the same width");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "td")(195, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](196, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](197, "td")(198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](199, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](201, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "tr")(203, "td")(204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](205, "[nzDropdownStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](207, "To set the style of the dropdown menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](208, "td")(209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](210, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](212, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](214, "tr")(215, "td")(216, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](217, "[nzDropdownClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](219, "classname of dropdown menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](220, "td")(221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](222, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](224, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](226, "tr")(227, "td")(228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](229, "[nzMultiple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](231, "Support multiple or not, will be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](232, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](233, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](234, " when enable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](235, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](236, "nzCheckable");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](237, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](238, "td")(239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](240, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](241, "td")(242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](243, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](245, "tr")(246, "td")(247, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](248, "[nzHideUnMatched]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](250, "Hide unmatched nodes while searching");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](251, "td")(252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](253, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](254, "td")(255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](256, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](258, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](259, "tr")(260, "td")(261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](262, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](264, "To set the size of the select input");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](265, "td")(266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](267, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](268, "td")(269, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](270, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](272, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](273, "tr")(274, "td")(275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](276, "[nzCheckable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](278, "Whether to show checkbox on the treeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](279, "td")(280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](281, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](282, "td")(283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](284, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](286, "tr")(287, "td")(288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](289, "[nzCheckStrictly]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](291, "Check treeNode precisely; parent treeNode and children treeNodes are not associated");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](292, "td")(293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](294, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](295, "td")(296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](297, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](299, "tr")(300, "td")(301, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](302, "[nzShowExpand]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](303, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](304, "Show a Expand Icon before the treeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](305, "td")(306, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](307, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](308, "td")(309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](310, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](311, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](312, "tr")(313, "td")(314, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](315, "[nzShowLine]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](316, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](317, "Shows a connecting line");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](318, "td")(319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](320, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](321, "td")(322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](323, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](325, "tr")(326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](328, "[nzAsyncData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](330, "Load data asynchronously (should be used with NzTreeNode.addChildren(...))");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](331, "td")(332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](333, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](334, "td")(335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](336, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](338, "tr")(339, "td")(340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](341, "[nzNodes]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](343, "Data of the treeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](344, "td")(345, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](346, "NzTreeNodeOptions[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](347, "td")(348, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](349, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](351, "tr")(352, "td")(353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](354, "[nzDefaultExpandAll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](356, "Whether to expand all treeNodes by default");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](357, "td")(358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](359, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](360, "td")(361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](362, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](364, "tr")(365, "td")(366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](367, "[nzExpandedKeys]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](369, "Default expanded treeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](370, "td")(371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](372, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](374, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](376, "tr")(377, "td")(378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](379, "[nzDisplayWith]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](381, "How to display the selected node value in the trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](382, "td")(383, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](384, "(node: NzTreeNode) => string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](385, "td")(386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](387, "(node: NzTreeNode) => node.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](389, "tr")(390, "td")(391, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](392, "[nzMaxTagCount]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](393, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](394, "Max tag count to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](395, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](396, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](398, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](400, "tr")(401, "td")(402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](403, "[nzMaxTagPlaceholder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](405, "Placeholder for not showing tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](407, "TemplateRef<{ $implicit: NzTreeNode[] }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](408, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](409, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](411, "tr")(412, "td")(413, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](414, "[nzTreeTemplate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](416, "Custom Nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](417, "td")(418, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](419, "TemplateRef<{ $implicit: NzTreeNode }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](421, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](422, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](423, "tr")(424, "td")(425, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](426, "(nzExpandChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](428, "Callback function for when a treeNode is expanded or collapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](429, "td")(430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](431, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](433, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](435, "h4", 35)(436, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](437, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](438, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](439, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](440, "table")(441, "thead")(442, "tr")(443, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](444, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](445, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](446, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](447, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](448, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](449, "tbody")(450, "tr")(451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](452, "getTreeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](454, "get all nodes(NzTreeNode)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](455, "td")(456, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](457, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](458, "tr")(459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](460, "getTreeNodeByKey");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](461, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](462, "get NzTreeNode with key");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](463, "td")(464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](465, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](466, "tr")(467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](468, "getCheckedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](469, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](470, "get checked nodes(merged)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](471, "td")(472, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](473, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](474, "tr")(475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](476, "getSelectedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](478, "get selected nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](479, "td")(480, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](481, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](482, "tr")(483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](484, "getHalfCheckedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](485, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](486, "get half checked nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](487, "td")(488, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](489, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](490, "tr")(491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](492, "getExpandedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](494, "get expanded nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](495, "td")(496, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](497, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](498, "tr")(499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](500, "getMatchedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](502, "get matched nodes(if nzSearchValue is not null)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](503, "td")(504, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](505, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-tree-select-demo-basic")("nzLink", "components-tree-select-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-tree-select-demo-async")("nzLink", "components-tree-select-demo-async")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/async.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-tree-select-demo-customized-icon")("nzLink", "components-tree-select-demo-customized-icon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/customized-icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-tree-select-demo-multiple")("nzLink", "components-tree-select-demo-multiple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/multiple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-tree-select-demo-checkable")("nzLink", "components-tree-select-demo-checkable")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/checkable.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoTreeSelectBasicComponent, _async__WEBPACK_IMPORTED_MODULE_2__.NzDemoTreeSelectAsyncComponent, _customized_icon__WEBPACK_IMPORTED_MODULE_3__.NzDemoTreeSelectCustomizedIconComponent, _multiple__WEBPACK_IMPORTED_MODULE_4__.NzDemoTreeSelectMultipleComponent, _checkable__WEBPACK_IMPORTED_MODULE_5__.NzDemoTreeSelectCheckableComponent], encapsulation: 2 });


/***/ }),

/***/ 44675:
/*!********************************************************!*\
  !*** ./src/app/components/tree-select/index.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeSelectModule": () => (/* binding */ NzDemoTreeSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 35034);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async */ 7901);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 40626);
/* harmony import */ var _checkable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkable */ 92125);
/* harmony import */ var _customized_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customized-icon */ 75808);
/* harmony import */ var _multiple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multiple */ 80149);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zh.component */ 10991);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./en.component */ 47695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 51170);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);















class NzDemoTreeSelectModule {
}
NzDemoTreeSelectModule.ɵfac = function NzDemoTreeSelectModule_Factory(t) { return new (t || NzDemoTreeSelectModule)(); };
NzDemoTreeSelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: NzDemoTreeSelectModule });
NzDemoTreeSelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoTreeSelectEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoTreeSelectZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NzDemoTreeSelectModule, { declarations: [_async__WEBPACK_IMPORTED_MODULE_2__.NzDemoTreeSelectAsyncComponent,
        _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoTreeSelectBasicComponent,
        _checkable__WEBPACK_IMPORTED_MODULE_4__.NzDemoTreeSelectCheckableComponent,
        _customized_icon__WEBPACK_IMPORTED_MODULE_5__.NzDemoTreeSelectCustomizedIconComponent,
        _multiple__WEBPACK_IMPORTED_MODULE_6__.NzDemoTreeSelectMultipleComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoTreeSelectZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoTreeSelectEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_12__.NzTreeSelectModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 35034:
/*!**************************************************!*\
  !*** ./src/app/components/tree-select/module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 51170);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);



const moduleList = [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__.NzTreeSelectModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule];


/***/ }),

/***/ 80149:
/*!****************************************************!*\
  !*** ./src/app/components/tree-select/multiple.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeSelectMultipleComponent": () => (/* binding */ NzDemoTreeSelectMultipleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 51170);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



function NzDemoTreeSelectMultipleComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const omittedValues_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" and ", omittedValues_r2.length, " more... ");
} }
class NzDemoTreeSelectMultipleComponent {
    constructor() {
        this.value = [];
        this.nodes = [
            {
                title: 'parent 1',
                key: '100',
                children: [
                    {
                        title: 'parent 1-0',
                        key: '1001',
                        children: [
                            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
                            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
                        ]
                    },
                    {
                        title: 'parent 1-1',
                        key: '1002',
                        children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
                    }
                ]
            }
        ];
    }
    onChange($event) {
        console.log($event);
    }
}
NzDemoTreeSelectMultipleComponent.ɵfac = function NzDemoTreeSelectMultipleComponent_Factory(t) { return new (t || NzDemoTreeSelectMultipleComponent)(); };
NzDemoTreeSelectMultipleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeSelectMultipleComponent, selectors: [["nz-demo-tree-select-multiple"]], decls: 3, vars: 7, consts: [["nzPlaceHolder", "Please select", 2, "width", "250px", 3, "ngModel", "nzMaxTagCount", "nzMaxTagPlaceholder", "nzNodes", "nzDefaultExpandAll", "nzAllowClear", "nzMultiple", "ngModelChange"], ["omittedPlaceHolder", ""]], template: function NzDemoTreeSelectMultipleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTreeSelectMultipleComponent_Template_nz_tree_select_ngModelChange_0_listener($event) { return ctx.value = $event; })("ngModelChange", function NzDemoTreeSelectMultipleComponent_Template_nz_tree_select_ngModelChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTreeSelectMultipleComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("nzMaxTagCount", 3)("nzMaxTagPlaceholder", _r0)("nzNodes", ctx.nodes)("nzDefaultExpandAll", true)("nzAllowClear", false)("nzMultiple", true);
    } }, directives: [ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_1__.NzTreeSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 10991:
/*!********************************************************!*\
  !*** ./src/app/components/tree-select/zh.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeSelectZhComponent": () => (/* binding */ NzDemoTreeSelectZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 40626);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async */ 7901);
/* harmony import */ var _customized_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customized-icon */ 75808);
/* harmony import */ var _multiple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiple */ 80149);
/* harmony import */ var _checkable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkable */ 92125);













class NzDemoTreeSelectZhComponent {
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
NzDemoTreeSelectZhComponent.ɵfac = function NzDemoTreeSelectZhComponent_Factory(t) { return new (t || NzDemoTreeSelectZhComponent)(); };
NzDemoTreeSelectZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NzDemoTreeSelectZhComponent, selectors: [["nz-demo-tree-select"]], viewQuery: function NzDemoTreeSelectZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 496, vars: 22, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-tree-select-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-tree-select-demo-multiple", "nzTitle", "\u591A\u9009"], ["nzHref", "#components-tree-select-demo-async", "nzTitle", "\u5F02\u6B65\u6570\u636E\u52A0\u8F7D"], ["nzHref", "#components-tree-select-demo-checkable", "nzTitle", "\u53EF\u52FE\u9009"], ["nzHref", "#components-tree-select-demo-customized-icon", "nzTitle", "\u81EA\u5B9A\u4E49\u56FE\u6807"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-tree-select-basic", "nzGenerateCommand", "ng g ng-zorro-antd:tree-select-basic <name>", "nzComponentName", "NzDemoTreeSelectBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u5F02\u6B65\u6570\u636E\u52A0\u8F7D", "nzSelector", "nz-demo-tree-select-async", "nzGenerateCommand", "ng g ng-zorro-antd:tree-select-async <name>", "nzComponentName", "NzDemoTreeSelectAsyncComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u56FE\u6807", "nzSelector", "nz-demo-tree-select-customized-icon", "nzGenerateCommand", "ng g ng-zorro-antd:tree-select-customized-icon <name>", "nzComponentName", "NzDemoTreeSelectCustomizedIconComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u591A\u9009", "nzSelector", "nz-demo-tree-select-multiple", "nzGenerateCommand", "ng g ng-zorro-antd:tree-select-multiple <name>", "nzComponentName", "NzDemoTreeSelectMultipleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u53EF\u52FE\u9009", "nzSelector", "nz-demo-tree-select-checkable", "nzGenerateCommand", "ng g ng-zorro-antd:tree-select-checkable <name>", "nzComponentName", "NzDemoTreeSelectCheckableComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-tree-select"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-tree-select'", 1, "anchor"], ["id", "\u65B9\u6CD5"], ["onclick", "window.location.hash = '\u65B9\u6CD5'", 1, "anchor"]], template: function NzDemoTreeSelectZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzClick", function NzDemoTreeSelectZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "section", 8)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "TreeSelect");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u6811\u9009\u62E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\u6811\u578B\u9009\u62E9\u63A7\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "h2", 13)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\u7C7B\u4F3C Select \u7684\u9009\u62E9\u63A7\u4EF6\uFF0C\u53EF\u9009\u62E9\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 TreeSelect\uFF0C\u4F8B\u5982\u516C\u53F8\u5C42\u7EA7\u3001\u5B66\u79D1\u7CFB\u7EDF\u3001\u5206\u7C7B\u76EE\u5F55\u7B49\u7B49\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "pre", 15)(28, "code")(29, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " NzTreeSelectModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "'ng-zorro-antd/tree-select'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "h2")(46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NzDemoTreeSelectZhComponent_Template_i_click_48_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 20)(50, "div", 21)(51, "nz-code-box", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "nz-demo-tree-select-basic", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "nz-demo-tree-select-async", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\u70B9\u51FB\u5C55\u5F00\u8282\u70B9\uFF0C\u52A8\u6001\u52A0\u8F7D\u6570\u636E\uFF0C\u76F4\u5230\u6267\u884C addChildren() \u65B9\u6CD5\u53D6\u6D88\u52A0\u8F7D\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "nz-demo-tree-select-customized-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u8282\u70B9\u91C7\u7528\u6837\u5F0F\u8986\u76D6\u7684\u65B9\u5F0F\u5B9A\u5236\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 21)(67, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "nz-demo-tree-select-multiple", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "\u591A\u9009\u7684\u6811\u9009\u62E9\uFF0C\u4F8B\u5B50\u4E2D\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "nzMaxTagCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, " \u9650\u5236\u6700\u591A\u663E\u793A3\u4E2A\u9009\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "nz-demo-tree-select-checkable", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "\u4F7F\u7528\u52FE\u9009\u6846\u5B9E\u73B0\u591A\u9009\u529F\u80FD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "h2", 30)(82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "h3", 32)(87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "nz-tree-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "table")(94, "thead")(95, "tr")(96, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "tbody")(107, "tr")(108, "td")(109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "[nzAllowClear]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "\u663E\u793A\u6E05\u9664\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "td")(114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "td")(117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "tr")(121, "td")(122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125, "\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "td")(127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "tr")(133, "td")(134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "\u7981\u7528\u9009\u62E9\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "td")(139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "td")(142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](143, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "tr")(146, "td")(147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148, "[nzShowIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](150, "\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "td")(152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](153, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "td")(155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](156, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](158, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "tr")(160, "td")(161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162, "[nzShowSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](164, "\u663E\u793A\u641C\u7D22\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "td")(166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](167, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "td")(169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](170, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "tr")(173, "td")(174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](175, "[nzNotFoundContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](177, "\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "td")(179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](182, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](184, "tr")(185, "td")(186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](187, "[nzDropdownMatchSelectWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](189, "\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](190, "td")(191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](192, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](193, "td")(194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](195, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](197, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "tr")(199, "td")(200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](201, "[nzDropdownStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](203, "\u4E0B\u62C9\u83DC\u5355\u7684\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](204, "td")(205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](206, "{ [key: string]: string; }");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](207, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](208, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](210, "tr")(211, "td")(212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](213, "[nzDropdownClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](215, "\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](216, "td")(217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](218, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](220, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](222, "tr")(223, "td")(224, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](225, "[nzMultiple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](227, "\u652F\u6301\u591A\u9009\uFF08\u5F53\u8BBE\u7F6E nzCheckable \u65F6\u81EA\u52A8\u53D8\u4E3Atrue\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](228, "td")(229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](230, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](231, "td")(232, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](233, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](234, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](235, "tr")(236, "td")(237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](238, "[nzHideUnMatched]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](240, "\u641C\u7D22\u9690\u85CF\u672A\u5339\u914D\u7684\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](241, "td")(242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](243, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](244, "td")(245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](246, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](248, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](249, "tr")(250, "td")(251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](252, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](254, "\u9009\u62E9\u6846\u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](255, "td")(256, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](257, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](258, "td")(259, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](260, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](262, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](263, "tr")(264, "td")(265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](266, "[nzCheckable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](268, "\u8282\u70B9\u524D\u6DFB\u52A0 Checkbox \u590D\u9009\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](269, "td")(270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](271, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](272, "td")(273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](274, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](276, "tr")(277, "td")(278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](279, "[nzCheckStrictly]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](281, "checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](282, "td")(283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](284, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](285, "td")(286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](287, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](289, "tr")(290, "td")(291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](292, "[nzShowExpand]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](294, "\u8282\u70B9\u524D\u6DFB\u52A0\u5C55\u5F00\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](295, "td")(296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](297, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](298, "td")(299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](300, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](302, "tr")(303, "td")(304, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](305, "[nzShowLine]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](307, "\u662F\u5426\u5C55\u793A\u8FDE\u63A5\u7EBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](308, "td")(309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](310, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](311, "td")(312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](313, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](315, "tr")(316, "td")(317, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](318, "[nzAsyncData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](320, "\u662F\u5426\u5F02\u6B65\u52A0\u8F7D(\u663E\u793A\u52A0\u8F7D\u72B6\u6001)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](321, "td")(322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](323, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](324, "td")(325, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](326, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](328, "tr")(329, "td")(330, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](331, "[nzNodes]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](333, "treeNodes \u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](334, "td")(335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](336, "NzTreeNodeOptions[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](337, "td")(338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](339, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](341, "tr")(342, "td")(343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](344, "[nzDefaultExpandAll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](346, "\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](347, "td")(348, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](349, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](350, "td")(351, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](352, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](354, "tr")(355, "td")(356, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](357, "[nzExpandedKeys]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](358, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](359, "\u9ED8\u8BA4\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](360, "td")(361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](362, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](364, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](366, "tr")(367, "td")(368, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](369, "[nzDisplayWith]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](371, "\u5982\u4F55\u5728\u8F93\u5165\u6846\u663E\u793A\u6240\u9009\u7684\u8282\u70B9\u503C\u7684\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](372, "td")(373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](374, "(node: NzTreeNode) => string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](375, "td")(376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](377, "(node: NzTreeNode) => node.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](378, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](379, "tr")(380, "td")(381, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](382, "[nzMaxTagCount]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](384, "\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](386, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](388, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](390, "tr")(391, "td")(392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](393, "[nzMaxTagPlaceholder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](395, "\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](397, "TemplateRef<{ $implicit: NzTreeNode[] }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](398, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](399, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](400, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](401, "tr")(402, "td")(403, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](404, "[nzTreeTemplate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](405, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](406, "\u81EA\u5B9A\u4E49\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](407, "td")(408, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](409, "TemplateRef<{ $implicit: NzTreeNode }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](411, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](412, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](413, "tr")(414, "td")(415, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](416, "(nzExpandChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](418, "\u70B9\u51FB\u5C55\u5F00\u6811\u8282\u70B9\u56FE\u6807\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](419, "td")(420, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](421, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](422, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](423, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](425, "h4", 35)(426, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](427, "\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](428, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](429, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](430, "table")(431, "thead")(432, "tr")(433, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](434, "\u65B9\u6CD5\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](435, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](436, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](437, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](438, "\u8FD4\u56DE\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](439, "tbody")(440, "tr")(441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](442, "getTreeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](444, "\u83B7\u53D6\u7EC4\u4EF6 NzTreeNode \u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](445, "td")(446, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](447, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](448, "tr")(449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](450, "getTreeNodeByKey");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](452, "\u6309 key \u83B7\u53D6 NzTreeNode \u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](453, "td")(454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](455, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](456, "tr")(457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](458, "getCheckedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](460, "\u83B7\u53D6\u7EC4\u4EF6 checkBox \u88AB\u70B9\u51FB\u9009\u4E2D\u7684\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](461, "td")(462, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](463, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](464, "tr")(465, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](466, "getSelectedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](468, "\u83B7\u53D6\u7EC4\u4EF6\u88AB\u9009\u4E2D\u7684\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](469, "td")(470, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](471, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](472, "tr")(473, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](474, "getHalfCheckedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](476, "\u83B7\u53D6\u7EC4\u4EF6\u534A\u9009\u72B6\u6001\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](477, "td")(478, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](479, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](480, "tr")(481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](482, "getExpandedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](484, "\u83B7\u53D6\u7EC4\u4EF6\u5C55\u5F00\u72B6\u6001\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](485, "td")(486, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](487, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](488, "tr")(489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](490, "getMatchedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](492, "\u83B7\u53D6\u7EC4\u641C\u7D22\u5339\u914D\u5230\u7684\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](493, "td")(494, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](495, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-tree-select-demo-basic")("nzLink", "components-tree-select-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-tree-select-demo-async")("nzLink", "components-tree-select-demo-async")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/async.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-tree-select-demo-customized-icon")("nzLink", "components-tree-select-demo-customized-icon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/customized-icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-tree-select-demo-multiple")("nzLink", "components-tree-select-demo-multiple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/multiple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-tree-select-demo-checkable")("nzLink", "components-tree-select-demo-checkable")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/checkable.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoTreeSelectBasicComponent, _async__WEBPACK_IMPORTED_MODULE_2__.NzDemoTreeSelectAsyncComponent, _customized_icon__WEBPACK_IMPORTED_MODULE_3__.NzDemoTreeSelectCustomizedIconComponent, _multiple__WEBPACK_IMPORTED_MODULE_4__.NzDemoTreeSelectMultipleComponent, _checkable__WEBPACK_IMPORTED_MODULE_5__.NzDemoTreeSelectCheckableComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_tree-select_index_module_ts.js.map