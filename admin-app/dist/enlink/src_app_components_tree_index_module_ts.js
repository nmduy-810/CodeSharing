"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_tree_index_module_ts"],{

/***/ 94431:
/*!*****************************************************!*\
  !*** ./src/app/components/tree/basic-controlled.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeBasicControlledComponent": () => (/* binding */ NzDemoTreeBasicControlledComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);


class NzDemoTreeBasicControlledComponent {
    constructor() {
        this.defaultCheckedKeys = ['0-0-0'];
        this.defaultSelectedKeys = ['0-0-0'];
        this.defaultExpandedKeys = ['0-0', '0-0-0', '0-0-1'];
        this.nodes = [
            {
                title: '0-0',
                key: '0-0',
                expanded: true,
                children: [
                    {
                        title: '0-0-0',
                        key: '0-0-0',
                        children: [
                            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
                            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
                            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-1',
                        key: '0-0-1',
                        children: [
                            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
                            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
                            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-2',
                        key: '0-0-2',
                        isLeaf: true
                    }
                ]
            },
            {
                title: '0-1',
                key: '0-1',
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
                    { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
                    { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
                ]
            },
            {
                title: '0-2',
                key: '0-2',
                isLeaf: true
            }
        ];
    }
    nzEvent(event) {
        console.log(event);
    }
}
NzDemoTreeBasicControlledComponent.ɵfac = function NzDemoTreeBasicControlledComponent_Factory(t) { return new (t || NzDemoTreeBasicControlledComponent)(); };
NzDemoTreeBasicControlledComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeBasicControlledComponent, selectors: [["nz-demo-tree-basic-controlled"]], decls: 1, vars: 4, consts: [["nzCheckable", "", "nzMultiple", "", 3, "nzData", "nzCheckedKeys", "nzExpandedKeys", "nzSelectedKeys", "nzClick", "nzExpandChange", "nzCheckBoxChange"]], template: function NzDemoTreeBasicControlledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoTreeBasicControlledComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.nzEvent($event); })("nzExpandChange", function NzDemoTreeBasicControlledComponent_Template_nz_tree_nzExpandChange_0_listener($event) { return ctx.nzEvent($event); })("nzCheckBoxChange", function NzDemoTreeBasicControlledComponent_Template_nz_tree_nzCheckBoxChange_0_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes)("nzCheckedKeys", ctx.defaultCheckedKeys)("nzExpandedKeys", ctx.defaultExpandedKeys)("nzSelectedKeys", ctx.defaultSelectedKeys);
    } }, directives: [ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeComponent], encapsulation: 2 });


/***/ }),

/***/ 24511:
/*!******************************************!*\
  !*** ./src/app/components/tree/basic.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeBasicComponent": () => (/* binding */ NzDemoTreeBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);


const _c0 = ["nzTreeComponent"];
class NzDemoTreeBasicComponent {
    constructor() {
        this.defaultCheckedKeys = ['10020'];
        this.defaultSelectedKeys = ['10010'];
        this.defaultExpandedKeys = ['100', '1001'];
        this.nodes = [
            {
                title: 'parent 1',
                key: '100',
                children: [
                    {
                        title: 'parent 1-0',
                        key: '1001',
                        disabled: true,
                        children: [
                            { title: 'leaf 1-0-0', key: '10010', disableCheckbox: true, isLeaf: true },
                            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
                        ]
                    },
                    {
                        title: 'parent 1-1',
                        key: '1002',
                        children: [
                            { title: 'leaf 1-1-0', key: '10020', isLeaf: true },
                            { title: 'leaf 1-1-1', key: '10021', isLeaf: true }
                        ]
                    }
                ]
            }
        ];
    }
    nzClick(event) {
        console.log(event);
    }
    nzCheck(event) {
        console.log(event);
    }
    // nzSelectedKeys change
    nzSelect(keys) {
        console.log(keys, this.nzTreeComponent.getSelectedNodeList());
    }
    ngAfterViewInit() {
        // get node by key: '10011'
        console.log(this.nzTreeComponent.getTreeNodeByKey('10011'));
        // use tree methods
        console.log(this.nzTreeComponent.getTreeNodes(), this.nzTreeComponent.getCheckedNodeList(), this.nzTreeComponent.getSelectedNodeList(), this.nzTreeComponent.getExpandedNodeList());
    }
}
NzDemoTreeBasicComponent.ɵfac = function NzDemoTreeBasicComponent_Factory(t) { return new (t || NzDemoTreeBasicComponent)(); };
NzDemoTreeBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeBasicComponent, selectors: [["nz-demo-tree-basic"]], viewQuery: function NzDemoTreeBasicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeComponent = _t.first);
    } }, decls: 2, vars: 4, consts: [["nzCheckable", "", 3, "nzData", "nzCheckedKeys", "nzExpandedKeys", "nzSelectedKeys", "nzClick", "nzContextMenu", "nzCheckBoxChange", "nzExpandChange"], ["nzTreeComponent", ""]], template: function NzDemoTreeBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoTreeBasicComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.nzClick($event); })("nzContextMenu", function NzDemoTreeBasicComponent_Template_nz_tree_nzContextMenu_0_listener($event) { return ctx.nzClick($event); })("nzCheckBoxChange", function NzDemoTreeBasicComponent_Template_nz_tree_nzCheckBoxChange_0_listener($event) { return ctx.nzCheck($event); })("nzExpandChange", function NzDemoTreeBasicComponent_Template_nz_tree_nzExpandChange_0_listener($event) { return ctx.nzCheck($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes)("nzCheckedKeys", ctx.defaultCheckedKeys)("nzExpandedKeys", ctx.defaultExpandedKeys)("nzSelectedKeys", ctx.defaultSelectedKeys);
    } }, directives: [ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeComponent], encapsulation: 2 });


/***/ }),

/***/ 44369:
/*!****************************************************!*\
  !*** ./src/app/components/tree/customized-icon.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeCustomizedIconComponent": () => (/* binding */ NzDemoTreeCustomizedIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);




function NzDemoTreeCustomizedIconComponent_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", node_r2.isExpanded ? "folder-open" : "folder");
} }
function NzDemoTreeCustomizedIconComponent_ng_template_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
function NzDemoTreeCustomizedIconComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoTreeCustomizedIconComponent_ng_template_2_i_0_Template, 1, 1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTreeCustomizedIconComponent_ng_template_2_i_1_Template, 1, 0, "i", 4);
} if (rf & 2) {
    const origin_r3 = ctx.origin;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !origin_r3.isLeaf);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", origin_r3.isLeaf);
} }
class NzDemoTreeCustomizedIconComponent {
    constructor() {
        this.nodes = [
            {
                title: 'parent 1',
                key: '100',
                expanded: true,
                icon: 'smile',
                children: [
                    { title: 'leaf', key: '1001', icon: 'meh', isLeaf: true },
                    { title: 'leaf', key: '1002', icon: 'frown', isLeaf: true }
                ]
            }
        ];
    }
}
NzDemoTreeCustomizedIconComponent.ɵfac = function NzDemoTreeCustomizedIconComponent_Factory(t) { return new (t || NzDemoTreeCustomizedIconComponent)(); };
NzDemoTreeCustomizedIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeCustomizedIconComponent, selectors: [["nz-demo-tree-customized-icon"]], decls: 4, vars: 3, consts: [["nzShowIcon", "", 3, "nzData"], ["nzShowIcon", "", 3, "nzData", "nzExpandedIcon"], ["multiExpandedIconTpl", ""], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"]], template: function NzDemoTreeCustomizedIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tree", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoTreeCustomizedIconComponent_ng_template_2_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes)("nzExpandedIcon", _r0);
    } }, directives: [ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 8597:
/*!**********************************************!*\
  !*** ./src/app/components/tree/directory.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeDirectoryComponent": () => (/* binding */ NzDemoTreeDirectoryComponent)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree */ 51882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);







function NzDemoTreeDirectoryComponent_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function NzDemoTreeDirectoryComponent_ng_template_1_span_1_Template_span_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx_r7.contextMenu($event, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTreeDirectoryComponent_ng_template_1_span_1_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.openFolder(node_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const node_r3 = ctx_r11.$implicit;
    const origin_r4 = ctx_r11.origin;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", node_r3.isExpanded ? "folder-open" : "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("created by ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, origin_r4.author), "");
} }
function NzDemoTreeDirectoryComponent_ng_template_1_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function NzDemoTreeDirectoryComponent_ng_template_1_span_2_Template_span_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx_r12.contextMenu($event, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const node_r3 = ctx_r14.$implicit;
    const origin_r4 = ctx_r14.origin;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("modified by ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, origin_r4.author), "");
} }
function NzDemoTreeDirectoryComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTreeDirectoryComponent_ng_template_1_span_1_Template, 7, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoTreeDirectoryComponent_ng_template_1_span_2_Template, 7, 4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !node_r3.isLeaf);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", node_r3.isLeaf);
} }
class NzDemoTreeDirectoryComponent {
    constructor(nzContextMenuService) {
        this.nzContextMenuService = nzContextMenuService;
        this.nodes = [
            {
                title: 'parent 0',
                key: '100',
                author: 'NG ZORRO',
                expanded: true,
                children: [
                    { title: 'leaf 0-0', key: '1000', author: 'NG ZORRO', isLeaf: true },
                    { title: 'leaf 0-1', key: '1001', author: 'NG ZORRO', isLeaf: true }
                ]
            },
            {
                title: 'parent 1',
                key: '101',
                author: 'NG ZORRO',
                children: [
                    { title: 'leaf 1-0', key: '1010', author: 'NG ZORRO', isLeaf: true },
                    { title: 'leaf 1-1', key: '1011', author: 'NG ZORRO', isLeaf: true }
                ]
            }
        ];
    }
    openFolder(data) {
        // do something if u want
        if (data instanceof ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeNode) {
            data.isExpanded = !data.isExpanded;
        }
        else {
            const node = data.node;
            if (node) {
                node.isExpanded = !node.isExpanded;
            }
        }
    }
    activeNode(data) {
        this.activatedNode = data.node;
    }
    contextMenu($event, menu) {
        this.nzContextMenuService.create($event, menu);
    }
    selectDropdown() {
        // do something
    }
}
NzDemoTreeDirectoryComponent.ɵfac = function NzDemoTreeDirectoryComponent_Factory(t) { return new (t || NzDemoTreeDirectoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__.NzContextMenuService)); };
NzDemoTreeDirectoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeDirectoryComponent, selectors: [["nz-demo-tree-directory"]], decls: 10, vars: 2, consts: [["nzBlockNode", "", 3, "nzData", "nzTreeTemplate", "nzClick", "nzDblClick"], ["nzTreeTemplate", ""], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], [1, "custom-node"], [3, "contextmenu", 4, "ngIf"], [3, "contextmenu"], ["nz-icon", "", 3, "nzType", "click"], [1, "folder-name"], [1, "folder-desc"], ["nz-icon", "", "nzType", "file"], [1, "file-name"], [1, "file-desc"]], template: function NzDemoTreeDirectoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoTreeDirectoryComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.activeNode($event); })("nzDblClick", function NzDemoTreeDirectoryComponent_Template_nz_tree_nzDblClick_0_listener($event) { return ctx.openFolder($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTreeDirectoryComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 2)(5, "ul", 3)(6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTreeDirectoryComponent_Template_li_click_6_listener() { return ctx.selectDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Action 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTreeDirectoryComponent_Template_li_click_8_listener() { return ctx.selectDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Action 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes)("nzTreeTemplate", _r0);
    } }, directives: [ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_3__.NzTreeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzMenuItemDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.LowerCasePipe], styles: ["nz-tree[_ngcontent-%COMP%] {\n        overflow: hidden;\n        margin: 0 -24px;\n        padding: 0 24px;\n      }\n\n      .custom-node[_ngcontent-%COMP%] {\n        cursor: pointer;\n        line-height: 24px;\n        margin-left: 4px;\n        display: inline-block;\n      }\n\n      .file-name[_ngcontent-%COMP%], .folder-name[_ngcontent-%COMP%] {\n        margin-left: 4px;\n      }\n\n      .file-desc[_ngcontent-%COMP%], .folder-desc[_ngcontent-%COMP%] {\n        padding: 0 8px;\n        display: inline-block;\n        background: #87ceff;\n        color: #ffffff;\n        position: relative;\n        left: 12px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGVBQWU7TUFDakI7O01BRUE7UUFDRSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixxQkFBcUI7TUFDdkI7O01BRUE7O1FBRUUsZ0JBQWdCO01BQ2xCOztNQUVBOztRQUVFLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsVUFBVTtNQUNaIiwiZmlsZSI6ImRpcmVjdG9yeS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotdHJlZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbjogMCAtMjRweDtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgfVxuXG4gICAgICAuY3VzdG9tLW5vZGUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5maWxlLW5hbWUsXG4gICAgICAuZm9sZGVyLW5hbWUge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgfVxuXG4gICAgICAuZmlsZS1kZXNjLFxuICAgICAgLmZvbGRlci1kZXNjIHtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogIzg3Y2VmZjtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogMTJweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 91368:
/*!******************************************************!*\
  !*** ./src/app/components/tree/draggable-confirm.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeDraggableConfirmComponent": () => (/* binding */ NzDemoTreeDraggableConfirmComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);




class NzDemoTreeDraggableConfirmComponent {
    constructor() {
        this.nodes = [
            {
                title: '0-0',
                key: '100',
                expanded: true,
                children: [
                    {
                        title: '0-0-0',
                        key: '1001',
                        children: [
                            { title: '0-0-0-0', key: '10010', isLeaf: true },
                            { title: '0-0-0-1', key: '10011', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-1',
                        key: '1002',
                        children: [{ title: '0-0-1-0', key: '10020', isLeaf: true }]
                    }
                ]
            }
        ];
    }
    beforeDrop(arg) {
        // if insert node into another node, wait 1s
        if (arg.pos === 0) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(1000));
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false);
        }
    }
}
NzDemoTreeDraggableConfirmComponent.ɵfac = function NzDemoTreeDraggableConfirmComponent_Factory(t) { return new (t || NzDemoTreeDraggableConfirmComponent)(); };
NzDemoTreeDraggableConfirmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzDemoTreeDraggableConfirmComponent, selectors: [["nz-demo-tree-draggable-confirm"]], decls: 1, vars: 2, consts: [["nzDraggable", "", "nzBlockNode", "", 3, "nzData", "nzBeforeDrop"]], template: function NzDemoTreeDraggableConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-tree", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx.nodes)("nzBeforeDrop", ctx.beforeDrop);
    } }, directives: [ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_3__.NzTreeComponent], encapsulation: 2 });


/***/ }),

/***/ 56012:
/*!**********************************************!*\
  !*** ./src/app/components/tree/draggable.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeDraggableComponent": () => (/* binding */ NzDemoTreeDraggableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);


class NzDemoTreeDraggableComponent {
    constructor() {
        this.nodes = [
            {
                title: '0-0',
                key: '00',
                expanded: true,
                children: [
                    {
                        title: '0-0-0',
                        key: '000',
                        expanded: true,
                        children: [
                            { title: '0-0-0-0', key: '0000', isLeaf: true },
                            { title: '0-0-0-1', key: '0001', isLeaf: true },
                            { title: '0-0-0-2', key: '0002', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-1',
                        key: '001',
                        children: [
                            { title: '0-0-1-0', key: '0010', isLeaf: true },
                            { title: '0-0-1-1', key: '0011', isLeaf: true },
                            { title: '0-0-1-2', key: '0012', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-2',
                        key: '002'
                    }
                ]
            },
            {
                title: '0-1',
                key: '01',
                children: [
                    {
                        title: '0-1-0',
                        key: '010',
                        children: [
                            { title: '0-1-0-0', key: '0100', isLeaf: true },
                            { title: '0-1-0-1', key: '0101', isLeaf: true },
                            { title: '0-1-0-2', key: '0102', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-1-1',
                        key: '011',
                        children: [
                            { title: '0-1-1-0', key: '0110', isLeaf: true },
                            { title: '0-1-1-1', key: '0111', isLeaf: true },
                            { title: '0-1-1-2', key: '0112', isLeaf: true }
                        ]
                    }
                ]
            },
            {
                title: '0-2',
                key: '02',
                isLeaf: true
            }
        ];
    }
    nzEvent(event) {
        console.log(event);
    }
}
NzDemoTreeDraggableComponent.ɵfac = function NzDemoTreeDraggableComponent_Factory(t) { return new (t || NzDemoTreeDraggableComponent)(); };
NzDemoTreeDraggableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeDraggableComponent, selectors: [["nz-demo-tree-draggable"]], decls: 1, vars: 1, consts: [["nzDraggable", "", "nzBlockNode", "", 3, "nzData", "nzOnDrop"]], template: function NzDemoTreeDraggableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnDrop", function NzDemoTreeDraggableComponent_Template_nz_tree_nzOnDrop_0_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes);
    } }, directives: [ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeComponent], encapsulation: 2 });


/***/ }),

/***/ 6205:
/*!********************************************!*\
  !*** ./src/app/components/tree/dynamic.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeDynamicComponent": () => (/* binding */ NzDemoTreeDynamicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);


class NzDemoTreeDynamicComponent {
    constructor() {
        this.nodes = [
            { title: 'Expand to load', key: '0' },
            { title: 'Expand to load', key: '1' },
            { title: 'Tree Node', key: '2', isLeaf: true }
        ];
    }
    nzEvent(event) {
        console.log(event);
        // load child async
        if (event.eventName === 'expand') {
            const node = event.node;
            if ((node === null || node === void 0 ? void 0 : node.getChildren().length) === 0 && (node === null || node === void 0 ? void 0 : node.isExpanded)) {
                this.loadNode().then(data => {
                    node.addChildren(data);
                });
            }
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
NzDemoTreeDynamicComponent.ɵfac = function NzDemoTreeDynamicComponent_Factory(t) { return new (t || NzDemoTreeDynamicComponent)(); };
NzDemoTreeDynamicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeDynamicComponent, selectors: [["nz-demo-tree-dynamic"]], decls: 1, vars: 1, consts: [["nzAsyncData", "", 3, "nzData", "nzClick", "nzExpandChange"]], template: function NzDemoTreeDynamicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoTreeDynamicComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.nzEvent($event); })("nzExpandChange", function NzDemoTreeDynamicComponent_Template_nz_tree_nzExpandChange_0_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes);
    } }, directives: [ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeComponent], encapsulation: 2 });


/***/ }),

/***/ 572:
/*!*************************************************!*\
  !*** ./src/app/components/tree/en.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeEnComponent": () => (/* binding */ NzDemoTreeEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 24511);
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ 56012);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic */ 6205);
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line */ 43763);
/* harmony import */ var _directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directory */ 8597);
/* harmony import */ var _basic_controlled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-controlled */ 94431);
/* harmony import */ var _draggable_confirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./draggable-confirm */ 91368);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search */ 91954);
/* harmony import */ var _customized_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customized-icon */ 44369);
/* harmony import */ var _virtual_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./virtual-scroll */ 67136);


















class NzDemoTreeEnComponent {
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
NzDemoTreeEnComponent.ɵfac = function NzDemoTreeEnComponent_Factory(t) { return new (t || NzDemoTreeEnComponent)(); };
NzDemoTreeEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: NzDemoTreeEnComponent, selectors: [["nz-demo-tree"]], viewQuery: function NzDemoTreeEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 1267, vars: 37, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-tree-demo-basic", "nzTitle", "basic"], ["nzHref", "#components-tree-demo-basic-controlled", "nzTitle", "basic controlled example"], ["nzHref", "#components-tree-demo-draggable", "nzTitle", "draggable"], ["nzHref", "#components-tree-demo-draggable-confirm", "nzTitle", "draggable-with-two-confirmation"], ["nzHref", "#components-tree-demo-dynamic", "nzTitle", "load data asynchronously"], ["nzHref", "#components-tree-demo-search", "nzTitle", "Searchable"], ["nzHref", "#components-tree-demo-line", "nzTitle", "Tree With Line"], ["nzHref", "#components-tree-demo-customized-icon", "nzTitle", "Customize Icon"], ["nzHref", "#components-tree-demo-directory", "nzTitle", "directory"], ["nzHref", "#components-tree-demo-virtual-scroll", "nzTitle", "Virtual Scroll"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "basic", "nzSelector", "nz-demo-tree-basic", "nzGenerateCommand", "ng g ng-zorro-antd:tree-basic <name>", "nzComponentName", "NzDemoTreeBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "draggable", "nzSelector", "nz-demo-tree-draggable", "nzGenerateCommand", "ng g ng-zorro-antd:tree-draggable <name>", "nzComponentName", "NzDemoTreeDraggableComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "load data asynchronously", "nzSelector", "nz-demo-tree-dynamic", "nzGenerateCommand", "ng g ng-zorro-antd:tree-dynamic <name>", "nzComponentName", "NzDemoTreeDynamicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Tree With Line", "nzSelector", "nz-demo-tree-line", "nzGenerateCommand", "ng g ng-zorro-antd:tree-line <name>", "nzComponentName", "NzDemoTreeLineComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "directory", "nzSelector", "nz-demo-tree-directory", "nzGenerateCommand", "ng g ng-zorro-antd:tree-directory <name>", "nzComponentName", "NzDemoTreeDirectoryComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "basic controlled example", "nzSelector", "nz-demo-tree-basic-controlled", "nzGenerateCommand", "ng g ng-zorro-antd:tree-basic-controlled <name>", "nzComponentName", "NzDemoTreeBasicControlledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "draggable-with-two-confirmation", "nzSelector", "nz-demo-tree-draggable-confirm", "nzGenerateCommand", "ng g ng-zorro-antd:tree-draggable-confirm <name>", "nzComponentName", "NzDemoTreeDraggableConfirmComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Searchable", "nzSelector", "nz-demo-tree-search", "nzGenerateCommand", "ng g ng-zorro-antd:tree-search <name>", "nzComponentName", "NzDemoTreeSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Customize Icon", "nzSelector", "nz-demo-tree-customized-icon", "nzGenerateCommand", "ng g ng-zorro-antd:tree-customized-icon <name>", "nzComponentName", "NzDemoTreeCustomizedIconComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Virtual Scroll", "nzSelector", "nz-demo-tree-virtual-scroll", "nzGenerateCommand", "ng g ng-zorro-antd:tree-virtual-scroll <name>", "nzComponentName", "NzDemoTreeVirtualScrollComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-tree"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-tree'", 1, "anchor"], ["href", "https://material.angular.io/cdk/scrolling/api"], ["id", "methods"], ["onclick", "window.location.hash = 'methods'", 1, "anchor"], ["id", "nztreenodeoptions-props"], ["onclick", "window.location.hash = 'nztreenodeoptions-props'", 1, "anchor"], ["id", "nzformatemitevent-props"], ["onclick", "window.location.hash = 'nzformatemitevent-props'", 1, "anchor"], ["id", "nzformatbeforedropevent-props"], ["onclick", "window.location.hash = 'nzformatbeforedropevent-props'", 1, "anchor"], ["id", "nztreenode-props"], ["onclick", "window.location.hash = 'nztreenode-props'", 1, "anchor"], ["id", "note"], ["onclick", "window.location.hash = 'note'", 1, "anchor"]], template: function NzDemoTreeEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("nzClick", function NzDemoTreeEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "section", 13)(15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "span", 14)(18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "h2", 18)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, " component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "pre", 20)(36, "code")(37, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, " NzTreeModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "'ng-zorro-antd/tree'");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "h2")(54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NzDemoTreeEnComponent_Template_i_click_56_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "div", 25)(58, "div", 26)(59, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](60, "nz-demo-tree-basic", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](65, "nz-demo-tree-draggable", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68, "Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](70, "nz-demo-tree-dynamic", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73, "To load data asynchronously when click to expand a treeNode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](75, "nz-demo-tree-line", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](78, "Tree With Line.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](80, "nz-demo-tree-directory", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83, "Customize directory tree with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](85, "nzTreeTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, ", get data from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88, "let-origin=\"origin\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](89, ", get node status from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](91, "let-node");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](92, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "div", 26)(94, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](95, "nz-demo-tree-basic-controlled", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](98, "basic controlled example.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](100, "nz-demo-tree-draggable-confirm", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](103, "nzBeforeDrop: Validate before drop event, for example: only allow to drag inside(delay 1s)\u3001 validate using modal .etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](105, "nz-demo-tree-search", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108, "Searchable Tree.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](110, "nz-demo-tree-customized-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](113, "You can customize icons for different nodes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](115, "nz-demo-tree-virtual-scroll", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](118, "Set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](120, "nzVirtualHeight");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](121, " to enable virtual scroll.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "section", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "h2", 40)(124, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](127, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](128, "h3", 42)(129, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](130, "nz-tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](132, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](133, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](134, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "table")(136, "thead")(137, "tr")(138, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](139, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](141, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](143, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](144, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](147, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](148, "tbody")(149, "tr")(150, "td")(151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](152, "[nzData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](154, "Tree data (Reference NzTreeNode)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](155, "td")(156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](157, "NzTreeNodeOptions[] | NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](158, "td")(159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](160, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](162, "tr")(163, "td")(164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](165, "[nzBlockNode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](167, "Whether treeNode fill remaining horizontal space");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](168, "td")(169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](170, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](171, "td")(172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](173, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](175, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](176, "tr")(177, "td")(178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](179, "[nzCheckable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](181, "Adds a Checkbox before the treeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](182, "td")(183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](184, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](185, "td")(186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](187, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](189, "tr")(190, "td")(191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](192, "[nzShowExpand]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](194, "Show a Expand Icon before the treeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](195, "td")(196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](197, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](198, "td")(199, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](200, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](202, "tr")(203, "td")(204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](205, "[nzShowLine]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](207, "Shows a connecting line");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](208, "td")(209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](210, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](211, "td")(212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](213, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](215, "tr")(216, "td")(217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](218, "[nzExpandedIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](220, "Customize an expand icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](221, "td")(222, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](223, "TemplateRef<{ $implicit: NzTreeNode }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](225, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](227, "tr")(228, "td")(229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](230, "[nzShowIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](232, "Shows the icon before a TreeNode's title. There is no default style");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](233, "td")(234, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](235, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](236, "td")(237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](238, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](240, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](241, "tr")(242, "td")(243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](244, "[nzAsyncData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](246, "Load data asynchronously (should be used with NzTreeNode.addChildren(...))");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](247, "td")(248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](249, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](250, "td")(251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](252, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](254, "tr")(255, "td")(256, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](257, "[nzDraggable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](259, "Specifies whether this Tree is draggable (IE > 8)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](260, "td")(261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](262, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](263, "td")(264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](265, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](267, "tr")(268, "td")(269, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](270, "[nzMultiple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](272, "Allows selecting multiple treeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](273, "td")(274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](275, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](276, "td")(277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](278, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](280, "tr")(281, "td")(282, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](283, "[nzHideUnMatched]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](284, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](285, "Hide unmatched nodes while searching");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](286, "td")(287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](288, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](289, "td")(290, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](291, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](292, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](293, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](294, "tr")(295, "td")(296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](297, "[nzCheckStrictly]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](299, "Check treeNode precisely; parent treeNode and children treeNodes are not associated");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](300, "td")(301, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](302, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](303, "td")(304, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](305, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](307, "tr")(308, "td")(309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](310, "[nzTreeTemplate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](311, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](312, "Custom Nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](313, "td")(314, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](315, "TemplateRef<{ $implicit: NzTreeNode }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](316, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](317, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](319, "tr")(320, "td")(321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](322, "[nzExpandAll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](324, "Whether to expand all treeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](325, "td")(326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](327, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](328, "td")(329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](330, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](332, "tr")(333, "td")(334, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](335, "[nzExpandedKeys]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](336, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](337, "Specify the keys of the default expanded treeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](338, "td")(339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](340, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](341, "td")(342, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](343, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](345, "tr")(346, "td")(347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](348, "[nzCheckedKeys]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](350, "Specifies the keys of the default checked treeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](351, "td")(352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](353, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](354, "td")(355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](356, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](358, "tr")(359, "td")(360, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](361, "[nzSelectedKeys]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](362, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](363, "Specifies the keys of the default selected treeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](364, "td")(365, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](366, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](367, "td")(368, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](369, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](371, "tr")(372, "td")(373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](374, "[nzSearchValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](376, "Filter (highlight) treeNodes (see demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](377, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](378, "Searchable");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](379, "), two-way binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](380, "td")(381, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](382, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](383, "td")(384, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](385, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](386, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](387, "tr")(388, "td")(389, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](390, "[nzSearchFunc]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](392, "Custom matching method, used with nzSearchValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](393, "td")(394, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](395, "(node: NzTreeNodeOptions) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](396, "td")(397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](398, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](400, "tr")(401, "td")(402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](403, "[nzBeforeDrop]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](405, "Drop before the second check, allowing the user to decide whether to allow placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](406, "td")(407, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](408, "(confirm: NzFormatBeforeDropEvent) => Observable<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](409, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](410, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](411, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](412, "tr")(413, "td")(414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](415, "[nzVirtualHeight]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](416, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](417, "The height of virtual scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](418, "td")(419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](420, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](421, "td")(422, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](423, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](425, "tr")(426, "td")(427, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](428, "[nzVirtualItemSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](430, "The size of the items in the list, same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](431, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](432, "cdk itemSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](433, "td")(434, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](435, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](436, "td")(437, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](438, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](439, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](440, "tr")(441, "td")(442, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](443, "[nzVirtualMaxBufferPx]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](445, "The number of pixels worth of buffer to render for when rendering new items, same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](446, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](447, "cdk maxBufferPx");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](448, "td")(449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](450, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](451, "td")(452, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](453, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](455, "tr")(456, "td")(457, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](458, "[nzVirtualMinBufferPx]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](460, "The minimum amount of buffer rendered beyond the viewport (in pixels),same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](461, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](462, "cdk minBufferPx");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](463, "td")(464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](465, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](466, "td")(467, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](468, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](469, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](470, "tr")(471, "td")(472, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](473, "(nzClick)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](474, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](475, "Callback function for when the user clicks a treeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](476, "td")(477, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](478, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](480, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](482, "tr")(483, "td")(484, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](485, "(nzDblClick)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](487, "Callback function for when the user double clicks a treeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](488, "td")(489, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](490, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](492, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](494, "tr")(495, "td")(496, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](497, "(nzContextMenu)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](498, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](499, "Callback function for when the user right clicks a treeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](500, "td")(501, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](502, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](504, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](506, "tr")(507, "td")(508, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](509, "(nzCheckBoxChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](510, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](511, "Callback function for when user clicks the Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](512, "td")(513, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](514, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](515, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](516, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](518, "tr")(519, "td")(520, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](521, "(nzExpandChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](523, "Callback function for when a treeNode is expanded or collapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](524, "td")(525, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](526, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](527, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](528, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](529, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](530, "tr")(531, "td")(532, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](533, "(nzSearchValueChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](535, "Callback function for when filter treeNodes(used with nzSearchValue)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](536, "td")(537, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](538, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](539, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](540, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](541, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](542, "tr")(543, "td")(544, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](545, "(nzOnDragStart)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](546, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](547, "Callback function for when the onDragStart event occurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](548, "td")(549, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](550, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](551, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](552, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](553, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](554, "tr")(555, "td")(556, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](557, "(nzOnDragEnter)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](558, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](559, "Callback function for when the onDragEnter event occurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](560, "td")(561, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](562, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](564, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](565, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](566, "tr")(567, "td")(568, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](569, "(nzOnDragOver)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](570, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](571, "Callback function for when the onDragOver event occurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](572, "td")(573, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](574, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](575, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](576, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](577, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](578, "tr")(579, "td")(580, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](581, "(nzOnDragLeave)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](582, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](583, "Callback function for when the onDragLeave event occurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](584, "td")(585, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](586, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](587, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](588, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](589, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](590, "tr")(591, "td")(592, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](593, "(nzOnDrop)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](594, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](595, "Callback function for when the onDrop event occurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](596, "td")(597, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](598, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](600, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](602, "tr")(603, "td")(604, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](605, "(nzOnDragEnd)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](606, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](607, "Callback function for when the onDragEnd event occurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](608, "td")(609, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](610, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](611, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](612, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](613, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](614, "h4", 46)(615, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](616, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](617, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](618, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](619, "table")(620, "thead")(621, "tr")(622, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](623, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](624, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](625, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](626, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](627, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](628, "tbody")(629, "tr")(630, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](631, "getTreeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](632, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](633, "get all nodes(NzTreeNode)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](634, "td")(635, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](636, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](637, "tr")(638, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](639, "getTreeNodeByKey");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](640, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](641, "get NzTreeNode with key");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](642, "td")(643, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](644, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](645, "tr")(646, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](647, "getCheckedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](648, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](649, "get checked nodes(merged)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](650, "td")(651, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](652, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](653, "tr")(654, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](655, "getSelectedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](656, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](657, "get selected nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](658, "td")(659, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](660, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](661, "tr")(662, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](663, "getHalfCheckedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](664, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](665, "get half checked nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](666, "td")(667, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](668, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](669, "tr")(670, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](671, "getExpandedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](672, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](673, "get expanded nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](674, "td")(675, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](676, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](677, "tr")(678, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](679, "getMatchedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](680, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](681, "get matched nodes(if nzSearchValue is not null)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](682, "td")(683, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](684, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](685, "h4", 48)(686, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](687, "NzTreeNodeOptions props");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](688, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](689, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](690, "table")(691, "thead")(692, "tr")(693, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](694, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](695, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](696, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](697, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](698, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](699, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](700, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](701, "tbody")(702, "tr")(703, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](704, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](705, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](706, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](707, "td")(708, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](709, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](710, "td")(711, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](712, "'---'");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](713, "tr")(714, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](715, "key");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](716, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](717, "Must be unique\uFF01");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](718, "td")(719, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](720, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](721, "td")(722, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](723, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](724, "tr")(725, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](726, "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](727, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](728, "icon before the treeNode\uFF0Cused with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](729, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](730, "nzShowIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](731, "td")(732, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](733, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](734, "td")(735, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](736, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](737, "tr")(738, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](739, "children");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](740, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](741, "TreeNode's children");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](742, "td")(743, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](744, "NzTreeNodeOptions[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](745, "td")(746, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](747, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](748, "tr")(749, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](750, "isLeaf");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](751, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](752, "Determines if this is a leaf node(can not be dropped to)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](753, "td")(754, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](755, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](756, "td")(757, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](758, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](759, "tr")(760, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](761, "checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](762, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](763, "Set the treeNode be checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](764, "td")(765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](766, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](767, "td")(768, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](769, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](770, "tr")(771, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](772, "selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](773, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](774, "Set the treeNode be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](775, "td")(776, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](777, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](778, "td")(779, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](780, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](781, "tr")(782, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](783, "expanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](784, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](785, "Set the treeNode be expanded ()");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](786, "td")(787, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](788, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](789, "td")(790, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](791, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](792, "tr")(793, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](794, "selectable");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](795, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](796, "Set whether the treeNode can be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](797, "td")(798, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](799, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](800, "td")(801, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](802, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](803, "tr")(804, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](805, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](806, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](807, "Disables the treeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](808, "td")(809, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](810, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](811, "td")(812, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](813, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](814, "tr")(815, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](816, "disableCheckbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](817, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](818, "Disables the checkbox of the treeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](819, "td")(820, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](821, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](822, "td")(823, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](824, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](825, "tr")(826, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](827, "[key: string]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](828, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](829, "Indexable Types, can be used with NzTreeNode.origin");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](830, "td")(831, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](832, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](833, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](834, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](835, "h4", 50)(836, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](837, "NzFormatEmitEvent props");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](838, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](839, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](840, "table")(841, "thead")(842, "tr")(843, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](844, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](845, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](846, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](847, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](848, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](849, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](850, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](851, "tbody")(852, "tr")(853, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](854, "eventName");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](855, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](856, "Event Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](857, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](858, "enum: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](859, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](860, "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](861, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](862, "dblclick");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](863, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](864, "contextmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](865, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](866, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](867, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](868, "expand");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](869, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](870, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](871, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](872, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](873, "dragstart");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](874, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](875, "dragenter");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](876, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](877, "dragover");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](878, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](879, "dragleave");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](880, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](881, "drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](882, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](883, "dragend");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](884, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](885, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](886, "tr")(887, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](888, "node");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](889, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](890, "The current operation node (such as the target node to drop while dragging)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](891, "td")(892, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](893, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](894, "td")(895, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](896, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](897, "tr")(898, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](899, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](900, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](901, "MouseEvent or DragEvent");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](902, "td")(903, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](904, "'MouseEvent' | 'DragEvent'");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](905, "td")(906, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](907, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](908, "tr")(909, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](910, "dragNode?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](911, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](912, "Current drag node (existing if dragged)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](913, "td")(914, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](915, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](916, "td")(917, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](918, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](919, "tr")(920, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](921, "selectedKeys?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](922, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](923, "Selected nodes list");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](924, "td")(925, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](926, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](927, "td")(928, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](929, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](930, "tr")(931, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](932, "checkedKeys?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](933, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](934, "Checked nodes list");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](935, "td")(936, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](937, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](938, "td")(939, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](940, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](941, "tr")(942, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](943, "matchedKeys?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](944, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](945, "Matched keys list while searching");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](946, "td")(947, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](948, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](949, "td")(950, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](951, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](952, "tr")(953, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](954, "keys?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](955, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](956, "All nodes's keys list related event(except drag events)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](957, "td")(958, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](959, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](960, "td")(961, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](962, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](963, "tr")(964, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](965, "nodes?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](966, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](967, "All nodes related event(except drag events)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](968, "td")(969, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](970, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](971, "td")(972, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](973, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](974, "h4", 52)(975, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](976, "NzFormatBeforeDropEvent props");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](977, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](978, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](979, "table")(980, "thead")(981, "tr")(982, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](983, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](984, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](985, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](986, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](987, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](988, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](989, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](990, "tbody")(991, "tr")(992, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](993, "dragNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](994, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](995, "Current drag node (existing when dragged)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](996, "td")(997, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](998, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](999, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1000, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1001, "tr")(1002, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1003, "node");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1004, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1005, "The current operation node (such as the target node to drop while dragging)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1006, "td")(1007, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1008, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1009, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1010, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1011, "tr")(1012, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1013, "pos");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1014, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1015, "position to drop(-1: before the target node, 0: inside the target node, 1: behind the target node)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1016, "td")(1017, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1018, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1019, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1020, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1021, "h4", 54)(1022, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1023, "NzTreeNode props");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1024, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1025, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1026, "table")(1027, "thead")(1028, "tr")(1029, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1030, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1031, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1032, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1033, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1034, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1035, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1036, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1037, "tbody")(1038, "tr")(1039, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1040, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1041, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1042, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1043, "td")(1044, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1045, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1046, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1047, "NzTreeNodeOptions.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1048, "tr")(1049, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1050, "key");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1051, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1052, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1053, "td")(1054, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1055, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1056, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1057, "NzTreeNodeOptions.key");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1058, "tr")(1059, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1060, "level");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1061, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1062, "TreeNode's level relative to the root node");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1063, "td")(1064, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1065, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1066, "td")(1067, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1068, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1069, "tr")(1070, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1071, "children");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1072, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1073, "Children");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1074, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1075, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1076, "td")(1077, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1078, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1079, "tr")(1080, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1081, "origin");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1082, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1083, "treeNode's raw data of NzTreeNodeOptions(user provided to show more datas)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1084, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1085, "NzTreeNodeOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1086, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1087, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1088, "tr")(1089, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1090, "getParentNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1091, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1092, "Get parentNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1093, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1094, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1095, "td")(1096, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1097, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1098, "tr")(1099, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1100, "isLeaf");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1102, "Whether treeNode is a Leaf Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1103, "td")(1104, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1105, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1106, "td")(1107, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1108, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1109, "tr")(1110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1111, "isExpanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1113, "Whether treeNode is expanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1114, "td")(1115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1116, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1117, "td")(1118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1119, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1120, "tr")(1121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1122, "isDisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1124, "Whether treeNode is disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1125, "td")(1126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1127, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1128, "td")(1129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1130, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1131, "tr")(1132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1133, "isDisableCheckbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1135, "Whether treeNode's checkbox can not be clicked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1136, "td")(1137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1138, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1139, "td")(1140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1141, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1142, "tr")(1143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1144, "isSelectable");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1146, "Set whether the treeNode can be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1147, "td")(1148, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1149, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1150, "td")(1151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1152, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1153, "tr")(1154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1155, "isChecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1157, "Whether treeNode is checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1158, "td")(1159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1160, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1161, "td")(1162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1163, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1164, "tr")(1165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1166, "isHalfChecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1168, "Part of treeNode's children are checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1169, "td")(1170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1171, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1172, "td")(1173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1174, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1175, "tr")(1176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1177, "isSelected");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1179, "Whether treeNode is selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1180, "td")(1181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1182, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1183, "td")(1184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1185, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1186, "tr")(1187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1188, "isLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1190, "Whether treeNode is loading(when nzAsyncData is true)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1191, "td")(1192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1193, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1194, "td")(1195, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1196, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1197, "tr")(1198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1199, "isMatched");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1201, "Whether treeNode's title contains nzSearchValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1202, "td")(1203, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1204, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1205, "td")(1206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1207, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1208, "tr")(1209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1210, "setSyncChecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1212, "set isChecked value and sync other nodes' state of checkBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1214, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1216, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1217, "tr")(1218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1219, "getChildren");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1221, "Get all children");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1223, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1225, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1226, "tr")(1227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1228, "addChildren");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1230, "Add child nodes, receive NzTreeNode or NzTreeNodeOptions array, the second parameter is the inserted index position");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1232, "(children: array, index?: number )=>{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1234, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1235, "tr")(1236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1237, "clearChildren");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1239, "Clear the treeNode's children");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1241, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1243, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1244, "tr")(1245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1246, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1248, "Clear current node(not root node)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1250, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1252, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1253, "h2", 56)(1254, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1255, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1256, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1257, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1258, "ul")(1259, "li")(1260, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1261, "NzTreeNodeOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1262, " accepts your customized properties\uFF0Cuse NzTreeNode.origin to get them.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1263, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1264, "If Tree Methods used with ViewChild, should be used in ngAfterViewInit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1265, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1266, "Setting NzData with NzTreeNodeOptions[] is better\uFF0Cif you set nzData with NzTreeNode[], it will be deprecated in next major version(8.x).");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-basic")("nzLink", "components-tree-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-draggable")("nzLink", "components-tree-demo-draggable")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/draggable.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-dynamic")("nzLink", "components-tree-demo-dynamic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/dynamic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-line")("nzLink", "components-tree-demo-line")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/line.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-directory")("nzLink", "components-tree-demo-directory")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/directory.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-basic-controlled")("nzLink", "components-tree-demo-basic-controlled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/basic-controlled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-draggable-confirm")("nzLink", "components-tree-demo-draggable-confirm")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/draggable-confirm.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-search")("nzLink", "components-tree-demo-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-customized-icon")("nzLink", "components-tree-demo-customized-icon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/customized-icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-virtual-scroll")("nzLink", "components-tree-demo-virtual-scroll")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/virtual-scroll.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_12__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_13__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_13__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoTreeBasicComponent, _draggable__WEBPACK_IMPORTED_MODULE_2__.NzDemoTreeDraggableComponent, _dynamic__WEBPACK_IMPORTED_MODULE_3__.NzDemoTreeDynamicComponent, _line__WEBPACK_IMPORTED_MODULE_4__.NzDemoTreeLineComponent, _directory__WEBPACK_IMPORTED_MODULE_5__.NzDemoTreeDirectoryComponent, _basic_controlled__WEBPACK_IMPORTED_MODULE_6__.NzDemoTreeBasicControlledComponent, _draggable_confirm__WEBPACK_IMPORTED_MODULE_7__.NzDemoTreeDraggableConfirmComponent, _search__WEBPACK_IMPORTED_MODULE_8__.NzDemoTreeSearchComponent, _customized_icon__WEBPACK_IMPORTED_MODULE_9__.NzDemoTreeCustomizedIconComponent, _virtual_scroll__WEBPACK_IMPORTED_MODULE_10__.NzDemoTreeVirtualScrollComponent], encapsulation: 2 });


/***/ }),

/***/ 47141:
/*!*************************************************!*\
  !*** ./src/app/components/tree/index.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeModule": () => (/* binding */ NzDemoTreeModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 1156);
/* harmony import */ var _basic_controlled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-controlled */ 94431);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 24511);
/* harmony import */ var _customized_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customized-icon */ 44369);
/* harmony import */ var _directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directory */ 8597);
/* harmony import */ var _draggable_confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draggable-confirm */ 91368);
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./draggable */ 56012);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic */ 6205);
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./line */ 43763);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search */ 91954);
/* harmony import */ var _virtual_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./virtual-scroll */ 67136);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zh.component */ 37938);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./en.component */ 572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);





















class NzDemoTreeModule {
}
NzDemoTreeModule.ɵfac = function NzDemoTreeModule_Factory(t) { return new (t || NzDemoTreeModule)(); };
NzDemoTreeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: NzDemoTreeModule });
NzDemoTreeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_13__.NzDemoTreeEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoTreeZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](NzDemoTreeModule, { declarations: [_basic_controlled__WEBPACK_IMPORTED_MODULE_2__.NzDemoTreeBasicControlledComponent,
        _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoTreeBasicComponent,
        _customized_icon__WEBPACK_IMPORTED_MODULE_4__.NzDemoTreeCustomizedIconComponent,
        _directory__WEBPACK_IMPORTED_MODULE_5__.NzDemoTreeDirectoryComponent,
        _draggable_confirm__WEBPACK_IMPORTED_MODULE_6__.NzDemoTreeDraggableConfirmComponent,
        _draggable__WEBPACK_IMPORTED_MODULE_7__.NzDemoTreeDraggableComponent,
        _dynamic__WEBPACK_IMPORTED_MODULE_8__.NzDemoTreeDynamicComponent,
        _line__WEBPACK_IMPORTED_MODULE_9__.NzDemoTreeLineComponent,
        _search__WEBPACK_IMPORTED_MODULE_10__.NzDemoTreeSearchComponent,
        _virtual_scroll__WEBPACK_IMPORTED_MODULE_11__.NzDemoTreeVirtualScrollComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoTreeZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_13__.NzDemoTreeEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_16__.NzTreeModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__.NzIconModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__.NzDropDownModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__.NzInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


/***/ }),

/***/ 43763:
/*!*****************************************!*\
  !*** ./src/app/components/tree/line.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeLineComponent": () => (/* binding */ NzDemoTreeLineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);


class NzDemoTreeLineComponent {
    constructor() {
        this.nodes = [
            {
                title: 'parent 1',
                key: '100',
                expanded: true,
                children: [
                    {
                        title: 'parent 1-0',
                        key: '1001',
                        expanded: true,
                        children: [
                            { title: 'leaf', key: '10010', isLeaf: true },
                            { title: 'leaf', key: '10011', isLeaf: true },
                            { title: 'leaf', key: '10012', isLeaf: true }
                        ]
                    },
                    {
                        title: 'parent 1-1',
                        key: '1002',
                        children: [{ title: 'leaf', key: '10020', isLeaf: true }]
                    },
                    {
                        title: 'parent 1-2',
                        key: '1003',
                        children: [
                            { title: 'leaf', key: '10030', isLeaf: true },
                            { title: 'leaf', key: '10031', isLeaf: true }
                        ]
                    }
                ]
            }
        ];
    }
    nzEvent(event) {
        console.log(event);
    }
}
NzDemoTreeLineComponent.ɵfac = function NzDemoTreeLineComponent_Factory(t) { return new (t || NzDemoTreeLineComponent)(); };
NzDemoTreeLineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeLineComponent, selectors: [["nz-demo-tree-line"]], decls: 1, vars: 1, consts: [["nzShowLine", "", 3, "nzData", "nzClick"]], template: function NzDemoTreeLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoTreeLineComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes);
    } }, directives: [ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeComponent], encapsulation: 2 });


/***/ }),

/***/ 1156:
/*!*******************************************!*\
  !*** ./src/app/components/tree/module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);




const moduleList = [ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__.NzDropDownModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__.NzInputModule];


/***/ }),

/***/ 91954:
/*!*******************************************!*\
  !*** ./src/app/components/tree/search.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeSearchComponent": () => (/* binding */ NzDemoTreeSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);





function NzDemoTreeSearchComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 4);
} }
class NzDemoTreeSearchComponent {
    constructor() {
        this.searchValue = '';
        this.nodes = [
            {
                title: '0-0',
                key: '0-0',
                children: [
                    {
                        title: '0-0-0',
                        key: '0-0-0',
                        children: [
                            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
                            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
                            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-1',
                        key: '0-0-1',
                        children: [
                            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
                            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
                            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-2',
                        key: '0-0-2',
                        isLeaf: true
                    }
                ]
            },
            {
                title: '0-1',
                key: '0-1',
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
                    { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
                    { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
                ]
            },
            {
                title: '0-2',
                key: '0-2',
                isLeaf: true
            }
        ];
    }
    nzEvent(event) {
        console.log(event);
    }
}
NzDemoTreeSearchComponent.ɵfac = function NzDemoTreeSearchComponent_Factory(t) { return new (t || NzDemoTreeSearchComponent)(); };
NzDemoTreeSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeSearchComponent, selectors: [["nz-demo-tree-search"]], decls: 5, vars: 4, consts: [[3, "nzSuffix"], ["type", "text", "nz-input", "", "placeholder", "Search", 3, "ngModel", "ngModelChange"], ["suffixIcon", ""], [3, "nzData", "nzSearchValue", "nzClick", "nzExpandChange", "nzSearchValueChange"], ["nz-icon", "", "nzType", "search"]], template: function NzDemoTreeSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-input-group", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTreeSearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoTreeSearchComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-tree", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoTreeSearchComponent_Template_nz_tree_nzClick_4_listener($event) { return ctx.nzEvent($event); })("nzExpandChange", function NzDemoTreeSearchComponent_Template_nz_tree_nzExpandChange_4_listener($event) { return ctx.nzEvent($event); })("nzSearchValueChange", function NzDemoTreeSearchComponent_Template_nz_tree_nzSearchValueChange_4_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes)("nzSearchValue", ctx.searchValue);
    } }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_4__.NzTreeComponent], styles: ["nz-input-group[_ngcontent-%COMP%] {\n        margin-bottom: 12px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxtQkFBbUI7TUFDckIiLCJmaWxlIjoic2VhcmNoLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1pbnB1dC1ncm91cCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 67136:
/*!***************************************************!*\
  !*** ./src/app/components/tree/virtual-scroll.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeVirtualScrollComponent": () => (/* binding */ NzDemoTreeVirtualScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tree */ 77628);


class NzDemoTreeVirtualScrollComponent {
    constructor() {
        this.nodes = [];
    }
    ngOnInit() {
        const dig = (path = '0', level = 3) => {
            const list = [];
            for (let i = 0; i < 10; i += 1) {
                const key = `${path}-${i}`;
                const treeNode = {
                    title: key,
                    key,
                    expanded: true,
                    children: [],
                    isLeaf: false
                };
                if (level > 0) {
                    treeNode.children = dig(key, level - 1);
                }
                else {
                    treeNode.isLeaf = true;
                }
                list.push(treeNode);
            }
            return list;
        };
        this.nodes = dig();
    }
}
NzDemoTreeVirtualScrollComponent.ɵfac = function NzDemoTreeVirtualScrollComponent_Factory(t) { return new (t || NzDemoTreeVirtualScrollComponent)(); };
NzDemoTreeVirtualScrollComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTreeVirtualScrollComponent, selectors: [["nz-demo-tree-virtual-scroll"]], decls: 1, vars: 1, consts: [["nzBlockNode", "", "nzVirtualHeight", "300px", 3, "nzData"]], template: function NzDemoTreeVirtualScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-tree", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes);
    } }, directives: [ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeComponent], encapsulation: 2 });


/***/ }),

/***/ 37938:
/*!*************************************************!*\
  !*** ./src/app/components/tree/zh.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoTreeZhComponent": () => (/* binding */ NzDemoTreeZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 24511);
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ 56012);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic */ 6205);
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line */ 43763);
/* harmony import */ var _directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directory */ 8597);
/* harmony import */ var _basic_controlled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-controlled */ 94431);
/* harmony import */ var _draggable_confirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./draggable-confirm */ 91368);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search */ 91954);
/* harmony import */ var _customized_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customized-icon */ 44369);
/* harmony import */ var _virtual_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./virtual-scroll */ 67136);


















class NzDemoTreeZhComponent {
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
NzDemoTreeZhComponent.ɵfac = function NzDemoTreeZhComponent_Factory(t) { return new (t || NzDemoTreeZhComponent)(); };
NzDemoTreeZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: NzDemoTreeZhComponent, selectors: [["nz-demo-tree"]], viewQuery: function NzDemoTreeZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 1268, vars: 37, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-tree-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-tree-demo-basic-controlled", "nzTitle", "\u53D7\u63A7\u64CD\u4F5C\u793A\u4F8B"], ["nzHref", "#components-tree-demo-draggable", "nzTitle", "\u62D6\u52A8\u793A\u4F8B"], ["nzHref", "#components-tree-demo-draggable-confirm", "nzTitle", "\u62D6\u52A8\u793A\u4F8B-\u4E8C\u6B21\u6821\u9A8C"], ["nzHref", "#components-tree-demo-dynamic", "nzTitle", "\u5F02\u6B65\u6570\u636E\u52A0\u8F7D"], ["nzHref", "#components-tree-demo-search", "nzTitle", "\u53EF\u641C\u7D22"], ["nzHref", "#components-tree-demo-line", "nzTitle", "\u8FDE\u63A5\u7EBF"], ["nzHref", "#components-tree-demo-customized-icon", "nzTitle", "\u81EA\u5B9A\u4E49\u56FE\u6807"], ["nzHref", "#components-tree-demo-directory", "nzTitle", "\u76EE\u5F55"], ["nzHref", "#components-tree-demo-virtual-scroll", "nzTitle", "\u865A\u62DF\u6EDA\u52A8"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-tree-basic", "nzGenerateCommand", "ng g ng-zorro-antd:tree-basic <name>", "nzComponentName", "NzDemoTreeBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u62D6\u52A8\u793A\u4F8B", "nzSelector", "nz-demo-tree-draggable", "nzGenerateCommand", "ng g ng-zorro-antd:tree-draggable <name>", "nzComponentName", "NzDemoTreeDraggableComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5F02\u6B65\u6570\u636E\u52A0\u8F7D", "nzSelector", "nz-demo-tree-dynamic", "nzGenerateCommand", "ng g ng-zorro-antd:tree-dynamic <name>", "nzComponentName", "NzDemoTreeDynamicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u8FDE\u63A5\u7EBF", "nzSelector", "nz-demo-tree-line", "nzGenerateCommand", "ng g ng-zorro-antd:tree-line <name>", "nzComponentName", "NzDemoTreeLineComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u76EE\u5F55", "nzSelector", "nz-demo-tree-directory", "nzGenerateCommand", "ng g ng-zorro-antd:tree-directory <name>", "nzComponentName", "NzDemoTreeDirectoryComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u53D7\u63A7\u64CD\u4F5C\u793A\u4F8B", "nzSelector", "nz-demo-tree-basic-controlled", "nzGenerateCommand", "ng g ng-zorro-antd:tree-basic-controlled <name>", "nzComponentName", "NzDemoTreeBasicControlledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u62D6\u52A8\u793A\u4F8B-\u4E8C\u6B21\u6821\u9A8C", "nzSelector", "nz-demo-tree-draggable-confirm", "nzGenerateCommand", "ng g ng-zorro-antd:tree-draggable-confirm <name>", "nzComponentName", "NzDemoTreeDraggableConfirmComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u53EF\u641C\u7D22", "nzSelector", "nz-demo-tree-search", "nzGenerateCommand", "ng g ng-zorro-antd:tree-search <name>", "nzComponentName", "NzDemoTreeSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u56FE\u6807", "nzSelector", "nz-demo-tree-customized-icon", "nzGenerateCommand", "ng g ng-zorro-antd:tree-customized-icon <name>", "nzComponentName", "NzDemoTreeCustomizedIconComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u865A\u62DF\u6EDA\u52A8", "nzSelector", "nz-demo-tree-virtual-scroll", "nzGenerateCommand", "ng g ng-zorro-antd:tree-virtual-scroll <name>", "nzComponentName", "NzDemoTreeVirtualScrollComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-tree"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-tree'", 1, "anchor"], ["href", "https://material.angular.io/cdk/scrolling/api"], ["id", "\u65B9\u6CD5"], ["onclick", "window.location.hash = '\u65B9\u6CD5'", 1, "anchor"], ["id", "nztreenodeoptions-props"], ["onclick", "window.location.hash = 'nztreenodeoptions-props'", 1, "anchor"], ["id", "nzformatemitevent-props"], ["onclick", "window.location.hash = 'nzformatemitevent-props'", 1, "anchor"], ["id", "nzformatbeforedropevent-props"], ["onclick", "window.location.hash = 'nzformatbeforedropevent-props'", 1, "anchor"], ["id", "nztreenode-props"], ["onclick", "window.location.hash = 'nztreenode-props'", 1, "anchor"], ["id", "\u6CE8\u610F"], ["onclick", "window.location.hash = '\u6CE8\u610F'", 1, "anchor"]], template: function NzDemoTreeZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("nzClick", function NzDemoTreeZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "section", 13)(15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "\u6811\u5F62\u63A7\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "h2", 18)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "\u6811\u63A7\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "\u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00\u6536\u8D77\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "pre", 20)(34, "code")(35, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, " NzTreeModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "'ng-zorro-antd/tree'");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "h2")(52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NzDemoTreeZhComponent_Template_i_click_54_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "div", 25)(56, "div", 26)(57, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](58, "nz-demo-tree-basic", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, "\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u53EF\u52FE\u9009\uFF0C\u53EF\u9009\u4E2D\uFF0C\u7981\u7528\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B49\u529F\u80FD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](63, "nz-demo-tree-draggable", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](66, "\u5C06\u8282\u70B9\u62D6\u62FD\u5230\u5176\u4ED6\u8282\u70B9\u5185\u90E8\u6216\u524D\u540E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](68, "nz-demo-tree-dynamic", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](71, "\u70B9\u51FB\u5C55\u5F00\u8282\u70B9\uFF0C\u52A8\u6001\u52A0\u8F7D\u6570\u636E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](73, "nz-demo-tree-line", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76, "\u5E26\u8FDE\u63A5\u7EBF\u7684\u6811\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](78, "nz-demo-tree-directory", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83, "nzTreeTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84, " \u5B9E\u73B0\u81EA\u5B9A\u4E49\u76EE\u5F55\u7ED3\u6784\uFF0C\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, "let-origin=\"origin\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](87, " \u83B7\u5F97\u539F\u59CB\u6570\u636E\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](89, "let-node");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90, " \u83B7\u53D6\u5F53\u524D\u8282\u70B9\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div", 26)(92, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](93, "nz-demo-tree-basic-controlled", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](96, "\u53D7\u63A7\u64CD\u4F5C\u793A\u4F8B(\u9ED8\u8BA4)\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](98, "nz-demo-tree-draggable-confirm", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101, "nzBeforeDrop: \u5728\u62D6\u62FD\u653E\u7F6E\u4E8B\u4EF6(drop\u4E8B\u4EF6)\u4E4B\u524D\u505A\u6821\u9A8C, \u4F8B\u5982\u4EC5\u5141\u8BB8\u62D6\u62FD\u5230\u5185\u90E8(\u5EF6\u65F6\u4E00\u79D2)\u3001\u653E\u7F6E\u524D\u7ED3\u5408modal\u9A8C\u8BC1\u7B49\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](103, "nz-demo-tree-search", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](106, "\u53EF\u641C\u7D22\u7684\u6811\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](108, "nz-demo-tree-customized-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](111, "\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684\u8282\u70B9\u5B9A\u5236\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](113, "nz-demo-tree-virtual-scroll", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](116, "\u8BBE\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](118, "nzVirtualHeight");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](119, " \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](120, "section", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "h2", 40)(122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](123, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "h3", 42)(127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](128, "nz-tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](129, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](130, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](132, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](133, "table")(134, "thead")(135, "tr")(136, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](137, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](139, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](141, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](143, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](144, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "tbody")(147, "tr")(148, "td")(149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](150, "[nzData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](152, "\u5143\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "td")(154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](155, "NzTreeNodeOptions[] | NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "td")(157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](158, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](160, "tr")(161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](163, "[nzBlockNode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](165, "\u662F\u5426\u8282\u70B9\u5360\u636E\u4E00\u884C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "td")(167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](168, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](169, "td")(170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](171, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](173, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "tr")(175, "td")(176, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](177, "[nzCheckable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](179, "\u8282\u70B9\u524D\u6DFB\u52A0 Checkbox \u590D\u9009\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](180, "td")(181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](182, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](183, "td")(184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](185, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](187, "tr")(188, "td")(189, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](190, "[nzShowExpand]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](192, "\u8282\u70B9\u524D\u6DFB\u52A0\u5C55\u5F00\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](193, "td")(194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](195, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](196, "td")(197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](198, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "tr")(201, "td")(202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](203, "[nzShowLine]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](205, "\u662F\u5426\u5C55\u793A\u8FDE\u63A5\u7EBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](206, "td")(207, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](208, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](209, "td")(210, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](211, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](213, "tr")(214, "td")(215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](216, "[nzExpandedIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](218, "\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](219, "td")(220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](221, "TemplateRef<{ $implicit: NzTreeNode }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](223, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](225, "tr")(226, "td")(227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](228, "[nzShowIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](230, "\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](231, "td")(232, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](233, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](234, "td")(235, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](236, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](238, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](239, "tr")(240, "td")(241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](242, "[nzAsyncData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](244, "\u662F\u5426\u5F02\u6B65\u52A0\u8F7D(\u663E\u793A\u52A0\u8F7D\u72B6\u6001)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](245, "td")(246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](247, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](248, "td")(249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](250, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](252, "tr")(253, "td")(254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](255, "[nzDraggable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](257, "\u8BBE\u7F6E\u8282\u70B9\u53EF\u62D6\u62FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](258, "td")(259, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](260, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](261, "td")(262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](263, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](265, "tr")(266, "td")(267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](268, "[nzMultiple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](270, "\u652F\u6301\u70B9\u9009\u591A\u4E2A\u8282\u70B9\uFF08\u8282\u70B9\u672C\u8EAB\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](271, "td")(272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](273, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](274, "td")(275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](276, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](278, "tr")(279, "td")(280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](281, "[nzHideUnMatched]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](283, "\u641C\u7D22\u9690\u85CF\u672A\u5339\u914D\u7684\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](284, "td")(285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](286, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](287, "td")(288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](289, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](291, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](292, "tr")(293, "td")(294, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](295, "[nzCheckStrictly]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](297, "checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](298, "td")(299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](300, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](301, "td")(302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](303, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](305, "tr")(306, "td")(307, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](308, "[nzTreeTemplate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](309, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](310, "\u81EA\u5B9A\u4E49\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](311, "td")(312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](313, "TemplateRef<{ $implicit: NzTreeNode }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](315, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](316, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](317, "tr")(318, "td")(319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](320, "[nzExpandAll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](321, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](322, "\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](323, "td")(324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](325, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](328, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](330, "tr")(331, "td")(332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](333, "[nzExpandedKeys]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](335, "\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](336, "td")(337, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](338, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](339, "td")(340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](341, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](343, "tr")(344, "td")(345, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](346, "[nzCheckedKeys]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](348, "\u6307\u5B9A\u9009\u4E2D\u590D\u9009\u6846\u7684\u6811\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](349, "td")(350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](351, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](352, "td")(353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](354, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](356, "tr")(357, "td")(358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](359, "[nzSelectedKeys]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](361, "\u6307\u5B9A\u9009\u4E2D\u7684\u6811\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](362, "td")(363, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](364, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](365, "td")(366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](367, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](369, "tr")(370, "td")(371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](372, "[nzSearchValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](374, "\u6309\u9700\u7B5B\u9009\u6811\u9AD8\u4EAE\u8282\u70B9(\u53C2\u8003\u53EF\u641C\u7D22\u7684\u6811),\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](375, "td")(376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](377, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](378, "td")(379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](380, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](382, "tr")(383, "td")(384, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](385, "[nzSearchFunc]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](386, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](387, "\u81EA\u5B9A\u4E49\u5339\u914D\u65B9\u6CD5\uFF0C\u914D\u5408 nzSearchValue \u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](388, "td")(389, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](390, "(node: NzTreeNodeOptions) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](391, "td")(392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](393, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](395, "tr")(396, "td")(397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](398, "[nzBeforeDrop]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](400, "drop\u524D\u4E8C\u6B21\u6821\u9A8C,\u5141\u8BB8\u7528\u6237\u81EA\u884C\u51B3\u5B9A\u662F\u5426\u5141\u8BB8\u653E\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](401, "td")(402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](403, "(confirm: NzFormatBeforeDropEvent) => Observable<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](405, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](407, "tr")(408, "td")(409, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](410, "[nzVirtualHeight]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](411, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](412, "\u865A\u62DF\u6EDA\u52A8\u7684\u603B\u9AD8\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](413, "td")(414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](415, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](416, "td")(417, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](418, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](419, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](420, "tr")(421, "td")(422, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](423, "[nzVirtualItemSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](425, "\u865A\u62DF\u6EDA\u52A8\u65F6\u6BCF\u4E00\u5217\u7684\u9AD8\u5EA6\uFF0C\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](426, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](427, "cdk itemSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](428, " \u76F8\u540C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](429, "td")(430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](431, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](432, "td")(433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](434, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](436, "tr")(437, "td")(438, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](439, "[nzVirtualMaxBufferPx]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](440, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](441, "\u7F13\u51B2\u533A\u6700\u5927\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](442, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](443, "cdk maxBufferPx");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](444, " \u76F8\u540C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](445, "td")(446, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](447, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](448, "td")(449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](450, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](452, "tr")(453, "td")(454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](455, "[nzVirtualMinBufferPx]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](457, "\u7F13\u51B2\u533A\u6700\u5C0F\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4F4E\u4E8E\u8BE5\u503C\u65F6\u5C06\u52A0\u8F7D\u65B0\u7ED3\u6784\uFF0C\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](458, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](459, "cdk minBufferPx");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](460, " \u76F8\u540C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](461, "td")(462, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](463, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](464, "td")(465, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](466, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](468, "tr")(469, "td")(470, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](471, "(nzClick)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](472, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](473, "\u70B9\u51FB\u6811\u8282\u70B9\u89E6\u53D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](474, "td")(475, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](476, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](478, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](480, "tr")(481, "td")(482, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](483, "(nzDblClick)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](484, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](485, "\u53CC\u51FB\u6811\u8282\u70B9\u89E6\u53D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](486, "td")(487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](488, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](490, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](492, "tr")(493, "td")(494, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](495, "(nzContextMenu)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](496, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](497, "\u53F3\u952E\u6811\u8282\u70B9\u89E6\u53D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](498, "td")(499, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](500, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](502, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](504, "tr")(505, "td")(506, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](507, "(nzCheckBoxChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](508, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](509, "\u70B9\u51FB\u6811\u8282\u70B9 Checkbox \u89E6\u53D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](510, "td")(511, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](512, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](513, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](514, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](515, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](516, "tr")(517, "td")(518, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](519, "(nzExpandChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](520, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](521, "\u70B9\u51FB\u5C55\u5F00\u6811\u8282\u70B9\u56FE\u6807\u89E6\u53D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](522, "td")(523, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](524, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](526, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](527, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](528, "tr")(529, "td")(530, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](531, "(nzSearchValueChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](532, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](533, "\u641C\u7D22\u8282\u70B9\u65F6\u8C03\u7528(\u4E0EnzSearchValue\u914D\u5408\u4F7F\u7528)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](534, "td")(535, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](536, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](538, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](539, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](540, "tr")(541, "td")(542, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](543, "(nzOnDragStart)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](544, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](545, "\u5F00\u59CB\u62D6\u62FD\u65F6\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](546, "td")(547, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](548, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](549, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](550, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](551, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](552, "tr")(553, "td")(554, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](555, "(nzOnDragEnter)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](556, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](557, "dragenter \u89E6\u53D1\u65F6\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](558, "td")(559, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](560, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](561, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](562, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](564, "tr")(565, "td")(566, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](567, "(nzOnDragOver)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](568, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](569, "dragover \u89E6\u53D1\u65F6\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](570, "td")(571, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](572, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](573, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](574, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](575, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](576, "tr")(577, "td")(578, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](579, "(nzOnDragLeave)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](581, "dragleave \u89E6\u53D1\u65F6\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](582, "td")(583, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](584, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](585, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](586, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](587, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](588, "tr")(589, "td")(590, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](591, "(nzOnDrop)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](592, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](593, "drop \u89E6\u53D1\u65F6\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](594, "td")(595, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](596, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](597, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](598, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](600, "tr")(601, "td")(602, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](603, "(nzOnDragEnd)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](604, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](605, "dragend \u89E6\u53D1\u65F6\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](606, "td")(607, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](608, "EventEmitter<NzFormatEmitEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](609, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](610, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](611, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](612, "h4", 46)(613, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](614, "\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](615, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](616, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](617, "table")(618, "thead")(619, "tr")(620, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](621, "\u65B9\u6CD5\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](622, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](623, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](624, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](625, "\u8FD4\u56DE\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](626, "tbody")(627, "tr")(628, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](629, "getTreeNodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](630, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](631, "\u83B7\u53D6\u7EC4\u4EF6 NzTreeNode \u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](632, "td")(633, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](634, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](635, "tr")(636, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](637, "getTreeNodeByKey");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](638, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](639, "\u6309 key \u83B7\u53D6 NzTreeNode \u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](640, "td")(641, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](642, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](643, "tr")(644, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](645, "getCheckedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](646, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](647, "\u83B7\u53D6\u7EC4\u4EF6 checkBox \u88AB\u70B9\u51FB\u9009\u4E2D\u7684\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](648, "td")(649, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](650, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](651, "tr")(652, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](653, "getSelectedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](654, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](655, "\u83B7\u53D6\u7EC4\u4EF6\u88AB\u9009\u4E2D\u7684\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](656, "td")(657, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](658, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](659, "tr")(660, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](661, "getHalfCheckedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](662, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](663, "\u83B7\u53D6\u7EC4\u4EF6\u534A\u9009\u72B6\u6001\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](664, "td")(665, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](666, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](667, "tr")(668, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](669, "getExpandedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](670, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](671, "\u83B7\u53D6\u7EC4\u4EF6\u5C55\u5F00\u72B6\u6001\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](672, "td")(673, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](674, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](675, "tr")(676, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](677, "getMatchedNodeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](678, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](679, "\u83B7\u53D6\u7EC4\u641C\u7D22\u5339\u914D\u5230\u7684\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](680, "td")(681, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](682, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](683, "h4", 48)(684, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](685, "NzTreeNodeOptions props");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](686, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](687, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](688, "table")(689, "thead")(690, "tr")(691, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](692, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](693, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](694, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](695, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](696, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](697, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](698, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](699, "tbody")(700, "tr")(701, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](702, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](703, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](704, "\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](705, "td")(706, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](707, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](708, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](709, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](710, "tr")(711, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](712, "key");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](713, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](714, "\u6574\u4E2A\u6811\u8303\u56F4\u5185\u7684\u6240\u6709\u8282\u70B9\u7684 key \u503C\u4E0D\u80FD\u91CD\u590D\u4E14\u4E0D\u4E3A\u7A7A\uFF01");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](715, "td")(716, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](717, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](718, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](719, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](720, "tr")(721, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](722, "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](723, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](724, "\u8282\u70B9\u524D\u7684\u56FE\u6807\uFF0C\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](725, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](726, "nzShowIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](727, " \u7EC4\u5408\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](728, "td")(729, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](730, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](731, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](732, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](733, "tr")(734, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](735, "children");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](736, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](737, "\u5B50\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](738, "td")(739, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](740, "NzTreeNodeOptions[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](741, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](742, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](743, "tr")(744, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](745, "isLeaf");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](746, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](747, "\u8BBE\u7F6E\u4E3A\u53F6\u5B50\u8282\u70B9(\u53F6\u5B50\u8282\u70B9\u4E0D\u53EF\u88AB\u62D6\u62FD\u6A21\u5F0F\u653E\u7F6E)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](748, "td")(749, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](750, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](751, "td")(752, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](753, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](754, "tr")(755, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](756, "checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](757, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](758, "\u8BBE\u7F6E\u8282\u70B9 Checkbox \u662F\u5426\u9009\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](759, "td")(760, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](761, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](762, "td")(763, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](764, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](765, "tr")(766, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](767, "selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](768, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](769, "\u8BBE\u7F6E\u8282\u70B9\u672C\u8EAB\u662F\u5426\u9009\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](770, "td")(771, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](772, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](773, "td")(774, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](775, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](776, "tr")(777, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](778, "expanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](779, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](780, "\u8BBE\u7F6E\u8282\u70B9\u662F\u5426\u5C55\u5F00(\u53F6\u5B50\u8282\u70B9\u65E0\u6548)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](781, "td")(782, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](783, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](784, "td")(785, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](786, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](787, "tr")(788, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](789, "selectable");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](790, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](791, "\u8BBE\u7F6E\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](792, "td")(793, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](794, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](795, "td")(796, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](797, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](798, "tr")(799, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](800, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](801, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](802, "\u8BBE\u7F6E\u662F\u5426\u7981\u7528\u8282\u70B9(\u4E0D\u53EF\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](803, "td")(804, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](805, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](806, "td")(807, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](808, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](809, "tr")(810, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](811, "disableCheckbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](812, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](813, "\u8BBE\u7F6E\u8282\u70B9\u7981\u7528 Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](814, "td")(815, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](816, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](817, "td")(818, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](819, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](820, "tr")(821, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](822, "[key: string]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](823, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](824, "\u81EA\u5B9A\u4E49\u6570\u636E,\u53EF\u901A\u8FC7 NzTreeNode \u7684 origin \u5B57\u6BB5\u83B7\u53D6");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](825, "td")(826, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](827, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](828, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](829, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](830, "h4", 50)(831, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](832, "NzFormatEmitEvent props");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](833, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](834, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](835, "table")(836, "thead")(837, "tr")(838, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](839, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](840, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](841, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](842, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](843, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](844, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](845, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](846, "tbody")(847, "tr")(848, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](849, "eventName");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](850, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](851, "\u4E8B\u4EF6\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](852, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](853, "enum: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](854, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](855, "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](856, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](857, "dblclick");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](858, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](859, "contextmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](860, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](861, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](862, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](863, "expand");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](864, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](865, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](866, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](867, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](868, "dragstart");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](869, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](870, "dragenter");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](871, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](872, "dragover");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](873, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](874, "dragleave");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](875, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](876, "drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](877, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](878, "dragend");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](879, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](880, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](881, "tr")(882, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](883, "node");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](884, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](885, "\u5F53\u524D\u64CD\u4F5C\u8282\u70B9(\u62D6\u62FD\u65F6\u8868\u793A\u76EE\u6807\u8282\u70B9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](886, "td")(887, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](888, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](889, "td")(890, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](891, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](892, "tr")(893, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](894, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](895, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](896, "\u539F\u751F\u4E8B\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](897, "td")(898, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](899, "'MouseEvent' | 'DragEvent'");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](900, "td")(901, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](902, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](903, "tr")(904, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](905, "dragNode?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](906, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](907, "\u5F53\u524D\u62D6\u62FD\u8282\u70B9(\u62D6\u62FD\u65F6\u5B58\u5728)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](908, "td")(909, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](910, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](911, "td")(912, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](913, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](914, "tr")(915, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](916, "selectedKeys?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](917, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](918, "\u5DF2\u9009\u4E2D\u7684\u8282\u70B9key(\u5355\u51FB\u65F6\u5B58\u5728)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](919, "td")(920, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](921, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](922, "td")(923, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](924, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](925, "tr")(926, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](927, "checkedKeys?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](928, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](929, "checkBox \u5DF2\u9009\u4E2D\u7684\u8282\u70B9key(\u70B9\u51FB checkBox \u5B58\u5728)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](930, "td")(931, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](932, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](933, "td")(934, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](935, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](936, "tr")(937, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](938, "matchedKeys?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](939, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](940, "\u641C\u7D22\u65F6\u5339\u914D\u5230\u7684\u8282\u70B9key");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](941, "td")(942, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](943, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](944, "td")(945, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](946, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](947, "tr")(948, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](949, "keys?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](950, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](951, "\u975E\u62D6\u62FD\u4E8B\u4EF6\u76F8\u5173\u7684\u5168\u90E8\u8282\u70B9\u7684key\u6570\u7EC4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](952, "td")(953, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](954, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](955, "td")(956, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](957, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](958, "tr")(959, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](960, "nodes?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](961, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](962, "\u975E\u62D6\u62FD\u4E8B\u4EF6\u76F8\u5173\u7684\u5168\u90E8\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](963, "td")(964, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](965, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](966, "td")(967, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](968, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](969, "h4", 52)(970, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](971, "NzFormatBeforeDropEvent props");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](972, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](973, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](974, "table")(975, "thead")(976, "tr")(977, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](978, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](979, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](980, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](981, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](982, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](983, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](984, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](985, "tbody")(986, "tr")(987, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](988, "dragNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](989, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](990, "\u5F53\u524D\u62D6\u62FD\u8282\u70B9(\u62D6\u62FD\u65F6\u5B58\u5728)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](991, "td")(992, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](993, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](994, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](995, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](996, "tr")(997, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](998, "node");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](999, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1000, "\u5F53\u524D\u64CD\u4F5C\u8282\u70B9(\u62D6\u62FD\u65F6\u8868\u793A\u76EE\u6807\u8282\u70B9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1001, "td")(1002, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1003, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1004, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1005, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1006, "tr")(1007, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1008, "pos");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1009, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1010, "\u653E\u7F6E\u4F4D\u7F6E(-1:\u76EE\u6807\u8282\u70B9\u524D\u9762, 0: \u76EE\u6807\u8282\u70B9\u5185\u90E8, 1: \u76EE\u6807\u8282\u70B9\u540E\u9762)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1011, "td")(1012, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1013, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1014, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1015, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1016, "h4", 54)(1017, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1018, "NzTreeNode props");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1019, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1020, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1021, "table")(1022, "thead")(1023, "tr")(1024, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1025, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1026, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1027, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1028, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1029, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1030, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1031, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1032, "tbody")(1033, "tr")(1034, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1035, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1036, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1037, "\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1038, "td")(1039, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1040, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1041, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1042, "NzTreeNodeOptions.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1043, "tr")(1044, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1045, "key");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1046, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1047, "key\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1048, "td")(1049, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1050, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1051, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1052, "NzTreeNodeOptions.key");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1053, "tr")(1054, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1055, "level");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1056, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1057, "\u5C42\u7EA7(\u6700\u9876\u5C42\u4E3A0,\u5B50\u8282\u70B9\u9010\u5C42\u52A01)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1058, "td")(1059, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1060, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1061, "td")(1062, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1063, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1064, "tr")(1065, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1066, "children");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1067, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1068, "\u5B50\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1069, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1070, "NzTreeNode[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1071, "td")(1072, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1073, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1074, "tr")(1075, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1076, "origin");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1077, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1078, "\u539F\u59CB\u8282\u70B9\u6811\u7ED3\u6784(\u7528\u6237\u63D0\u4F9B,\u7528\u4E8E\u5C55\u793A\u989D\u5916\u4FE1\u606F)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1079, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1080, "NzTreeNodeOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1081, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1082, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1083, "tr")(1084, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1085, "getParentNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1086, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1087, "\u83B7\u53D6\u7236\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1088, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1089, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1090, "td")(1091, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1092, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1093, "tr")(1094, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1095, "isLeaf");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1096, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1097, "\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1098, "td")(1099, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1100, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1101, "td")(1102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1103, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1104, "tr")(1105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1106, "isExpanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1108, "\u662F\u5426\u5DF2\u5C55\u5F00");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1109, "td")(1110, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1111, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1112, "td")(1113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1114, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1115, "tr")(1116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1117, "isDisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1119, "\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1120, "td")(1121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1122, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1123, "td")(1124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1125, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1126, "tr")(1127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1128, "isDisableCheckbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1130, "\u662F\u5426\u7981\u7528 checkBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1131, "td")(1132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1133, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1134, "td")(1135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1136, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1137, "tr")(1138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1139, "isSelectable");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1141, "\u662F\u5426\u53EF\u9009\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1142, "td")(1143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1144, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1145, "td")(1146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1147, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1148, "tr")(1149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1150, "isChecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1152, "\u662F\u5426\u9009\u4E2D checkBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1153, "td")(1154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1155, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1156, "td")(1157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1158, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1159, "tr")(1160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1161, "isHalfChecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1163, "\u5B50\u8282\u70B9\u6709\u9009\u4E2D\u4F46\u672A\u5168\u9009");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1164, "td")(1165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1166, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1167, "td")(1168, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1169, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1170, "tr")(1171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1172, "isSelected");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1174, "\u662F\u5426\u5DF2\u9009\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1175, "td")(1176, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1177, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1178, "td")(1179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1180, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1181, "tr")(1182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1183, "isLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1185, "\u662F\u5426\u5F02\u6B65\u52A0\u8F7D\u72B6\u6001(\u5F71\u54CD\u5C55\u5F00\u56FE\u6807\u5C55\u793A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1186, "td")(1187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1188, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1189, "td")(1190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1191, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1192, "tr")(1193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1194, "isMatched");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1195, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1196, "title\u662F\u5426\u5305\u542BnzSearchValue(\u641C\u7D22\u4F7F\u7528)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1197, "td")(1198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1199, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1200, "td")(1201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1202, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1203, "tr")(1204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1205, "setSyncChecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1207, "\u8BBE\u7F6E checked \u72B6\u6001\u5E76\u540C\u6B65\u5176\u4ED6\u8282\u70B9\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1209, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1211, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1212, "tr")(1213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1214, "getChildren");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1216, "\u83B7\u53D6\u5B50\u8282\u70B9,\u8FD4\u56DENzTreeNode\u6570\u7EC4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1218, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1220, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1221, "tr")(1222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1223, "addChildren");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1225, "\u6DFB\u52A0\u5B50\u8282\u70B9,\u63A5\u6536NzTreeNode\u6216NzTreeNodeOptions\u6570\u7EC4,\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u63D2\u5165\u7684\u7D22\u5F15\u4F4D\u7F6E,\u9ED8\u8BA4\u63D2\u5165\u672B\u5C3E");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1227, "(children: array, index?: number )=>{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1229, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1230, "tr")(1231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1232, "clearChildren");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1234, "\u6E05\u9664\u5B50\u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1236, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1238, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1239, "tr")(1240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1241, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1243, "\u6E05\u9664\u5F53\u524D\u8282\u70B9(\u975E\u6839\u8282\u70B9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1245, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1247, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1248, "h2", 56)(1249, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1250, "\u6CE8\u610F");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1251, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1252, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1253, "ul")(1254, "li")(1255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1256, "NzTreeNodeOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1257, " \u53EF\u4EE5\u63A5\u53D7\u7528\u6237\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u53EF\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1259, "NzTreeNode");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1260, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1262, "origin");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1263, " \u5C5E\u6027\u53D6\u5F97\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1264, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1265, "\u4F7F\u7528 ViewChild \u65F6\uFF0CTree \u65B9\u6CD5\u9700\u8981\u5728 ngAfterViewInit \u4E2D\u8C03\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1266, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1267, "nzData \u5C5E\u6027\u8BF7\u4F20\u9012 NzTreeNodeOptions \u6570\u7EC4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-basic")("nzLink", "components-tree-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-draggable")("nzLink", "components-tree-demo-draggable")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/draggable.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-dynamic")("nzLink", "components-tree-demo-dynamic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/dynamic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-line")("nzLink", "components-tree-demo-line")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/line.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-directory")("nzLink", "components-tree-demo-directory")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/directory.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-basic-controlled")("nzLink", "components-tree-demo-basic-controlled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/basic-controlled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-draggable-confirm")("nzLink", "components-tree-demo-draggable-confirm")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/draggable-confirm.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-search")("nzLink", "components-tree-demo-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-customized-icon")("nzLink", "components-tree-demo-customized-icon")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/customized-icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzId", "components-tree-demo-virtual-scroll")("nzLink", "components-tree-demo-virtual-scroll")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree/demo/virtual-scroll.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_12__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_13__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_13__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoTreeBasicComponent, _draggable__WEBPACK_IMPORTED_MODULE_2__.NzDemoTreeDraggableComponent, _dynamic__WEBPACK_IMPORTED_MODULE_3__.NzDemoTreeDynamicComponent, _line__WEBPACK_IMPORTED_MODULE_4__.NzDemoTreeLineComponent, _directory__WEBPACK_IMPORTED_MODULE_5__.NzDemoTreeDirectoryComponent, _basic_controlled__WEBPACK_IMPORTED_MODULE_6__.NzDemoTreeBasicControlledComponent, _draggable_confirm__WEBPACK_IMPORTED_MODULE_7__.NzDemoTreeDraggableConfirmComponent, _search__WEBPACK_IMPORTED_MODULE_8__.NzDemoTreeSearchComponent, _customized_icon__WEBPACK_IMPORTED_MODULE_9__.NzDemoTreeCustomizedIconComponent, _virtual_scroll__WEBPACK_IMPORTED_MODULE_10__.NzDemoTreeVirtualScrollComponent], encapsulation: 2 });


/***/ }),

/***/ 25843:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 10328);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ 71293);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 60014);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notification */ 27928);




function delay(delay, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    const absoluteDelay = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_1__.isDate)(delay);
    const delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return (source) => source.lift(new DelayOperator(delayFor, scheduler));
}
class DelayOperator {
    constructor(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    }
}
class DelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber {
    constructor(destination, delay, scheduler) {
        super(destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.queue = [];
        this.active = false;
        this.errored = false;
    }
    static dispatch(state) {
        const source = state.source;
        const queue = source.queue;
        const scheduler = state.scheduler;
        const destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            const delay = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay);
        }
        else {
            this.unsubscribe();
            source.active = false;
        }
    }
    _schedule(scheduler) {
        this.active = true;
        const destination = this.destination;
        destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    }
    scheduleNotification(notification) {
        if (this.errored === true) {
            return;
        }
        const scheduler = this.scheduler;
        const message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    }
    _next(value) {
        this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createNext(value));
    }
    _error(err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createComplete());
        this.unsubscribe();
    }
}
class DelayMessage {
    constructor(time, notification) {
        this.time = time;
        this.notification = notification;
    }
}


/***/ }),

/***/ 71293:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDate": () => (/* binding */ isDate)
/* harmony export */ });
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}


/***/ })

}]);
//# sourceMappingURL=src_app_components_tree_index_module_ts.js.map