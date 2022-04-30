"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_collapse_index_module_ts"],{

/***/ 69160:
/*!**************************************************!*\
  !*** ./src/app/components/collapse/accordion.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCollapseAccordionComponent": () => (/* binding */ NzDemoCollapseAccordionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 20011);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function NzDemoCollapseAccordionComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", panel_r1.name, " content");
} }
class NzDemoCollapseAccordionComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                name: 'This is panel header 1',
                childPanel: [
                    {
                        active: false,
                        name: 'This is panel header 1-1'
                    }
                ]
            },
            {
                active: false,
                name: 'This is panel header 2'
            },
            {
                active: false,
                name: 'This is panel header 3'
            }
        ];
    }
}
NzDemoCollapseAccordionComponent.ɵfac = function NzDemoCollapseAccordionComponent_Factory(t) { return new (t || NzDemoCollapseAccordionComponent)(); };
NzDemoCollapseAccordionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseAccordionComponent, selectors: [["nz-demo-collapse-accordion"]], decls: 2, vars: 1, consts: [["nzAccordion", ""], [3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive"]], template: function NzDemoCollapseAccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseAccordionComponent_nz_collapse_panel_1_Template, 3, 3, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapseComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapsePanelComponent], encapsulation: 2 });


/***/ }),

/***/ 70722:
/*!**********************************************!*\
  !*** ./src/app/components/collapse/basic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCollapseBasicComponent": () => (/* binding */ NzDemoCollapseBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 20011);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function NzDemoCollapseBasicComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 1)(1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active)("nzDisabled", panel_r1.disabled);
} }
class NzDemoCollapseBasicComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                name: 'This is panel header 1',
                disabled: false
            },
            {
                active: false,
                disabled: false,
                name: 'This is panel header 2'
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 3'
            }
        ];
    }
}
NzDemoCollapseBasicComponent.ɵfac = function NzDemoCollapseBasicComponent_Factory(t) { return new (t || NzDemoCollapseBasicComponent)(); };
NzDemoCollapseBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseBasicComponent, selectors: [["nz-demo-collapse-basic"]], decls: 2, vars: 1, consts: [[3, "nzHeader", "nzActive", "nzDisabled", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive", "nzDisabled"], [2, "margin", "0"]], template: function NzDemoCollapseBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseBasicComponent_nz_collapse_panel_1_Template, 3, 3, "nz-collapse-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapseComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapsePanelComponent], encapsulation: 2 });


/***/ }),

/***/ 31260:
/*!***************************************************!*\
  !*** ./src/app/components/collapse/borderless.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCollapseBorderlessComponent": () => (/* binding */ NzDemoCollapseBorderlessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 20011);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function NzDemoCollapseBorderlessComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", panel_r1.name, " content");
} }
class NzDemoCollapseBorderlessComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                disabled: false,
                name: 'This is panel header 1',
                childPannel: [
                    {
                        active: false,
                        disabled: true,
                        name: 'This is panel header 1-1'
                    }
                ]
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 2'
            },
            {
                active: false,
                disabled: false,
                name: 'This is panel header 3'
            }
        ];
    }
}
NzDemoCollapseBorderlessComponent.ɵfac = function NzDemoCollapseBorderlessComponent_Factory(t) { return new (t || NzDemoCollapseBorderlessComponent)(); };
NzDemoCollapseBorderlessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseBorderlessComponent, selectors: [["nz-demo-collapse-borderless"]], decls: 2, vars: 2, consts: [[3, "nzBordered"], [3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive"]], template: function NzDemoCollapseBorderlessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseBorderlessComponent_nz_collapse_panel_1_Template, 3, 3, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapseComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapsePanelComponent], encapsulation: 2 });


/***/ }),

/***/ 66088:
/*!***********************************************!*\
  !*** ./src/app/components/collapse/custom.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCollapseCustomComponent": () => (/* binding */ NzDemoCollapseCustomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 20011);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);




function NzDemoCollapseCustomComponent_nz_collapse_panel_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
} if (rf & 2) {
    const active_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", active_r6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRotate", _r3.nzActive ? 90 : -90);
} }
function NzDemoCollapseCustomComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2, 3)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoCollapseCustomComponent_nz_collapse_panel_1_ng_template_4_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    const isFirst_r2 = ctx.first;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active)("ngStyle", panel_r1.customStyle)("nzExpandedIcon", !isFirst_r2 && (panel_r1.icon || _r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", panel_r1.name, " content");
} }
class NzDemoCollapseCustomComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                disabled: false,
                name: 'This is panel header 1',
                customStyle: {
                    background: '#f7f7f7',
                    'border-radius': '4px',
                    'margin-bottom': '24px',
                    border: '0px'
                }
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 2',
                icon: 'double-right',
                customStyle: {
                    background: '#f7f7f7',
                    'border-radius': '4px',
                    'margin-bottom': '24px',
                    border: '0px'
                }
            },
            {
                active: false,
                disabled: false,
                name: 'This is panel header 3',
                customStyle: {
                    background: '#f7f7f7',
                    'border-radius': '4px',
                    'margin-bottom': '24px',
                    border: '0px'
                }
            }
        ];
    }
}
NzDemoCollapseCustomComponent.ɵfac = function NzDemoCollapseCustomComponent_Factory(t) { return new (t || NzDemoCollapseCustomComponent)(); };
NzDemoCollapseCustomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseCustomComponent, selectors: [["nz-demo-collapse-custom"]], decls: 2, vars: 2, consts: [[3, "nzBordered"], [3, "nzHeader", "nzActive", "ngStyle", "nzExpandedIcon", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive", "ngStyle", "nzExpandedIcon"], ["p", ""], ["expandedIcon", ""], ["nz-icon", "", "nzType", "caret-right", 1, "ant-collapse-arrow", 3, "nzRotate"]], template: function NzDemoCollapseCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseCustomComponent_nz_collapse_panel_1_Template, 6, 5, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapseComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapsePanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 66954:
/*!*****************************************************!*\
  !*** ./src/app/components/collapse/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCollapseEnComponent": () => (/* binding */ NzDemoCollapseEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 70722);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ 69160);
/* harmony import */ var _mix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix */ 15296);
/* harmony import */ var _borderless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./borderless */ 31260);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom */ 66088);
/* harmony import */ var _noarrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noarrow */ 13428);
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extra */ 83441);















class NzDemoCollapseEnComponent {
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
NzDemoCollapseEnComponent.ɵfac = function NzDemoCollapseEnComponent_Factory(t) { return new (t || NzDemoCollapseEnComponent)(); };
NzDemoCollapseEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: NzDemoCollapseEnComponent, selectors: [["nz-demo-collapse"]], viewQuery: function NzDemoCollapseEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 288, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-collapse-demo-basic", "nzTitle", "Collapse"], ["nzHref", "#components-collapse-demo-accordion", "nzTitle", "Accordion"], ["nzHref", "#components-collapse-demo-mix", "nzTitle", "Nested panel"], ["nzHref", "#components-collapse-demo-borderless", "nzTitle", "Borderless"], ["nzHref", "#components-collapse-demo-custom", "nzTitle", "Custom Panel"], ["nzHref", "#components-collapse-demo-noarrow", "nzTitle", "No arrow"], ["nzHref", "#components-collapse-demo-extra", "nzTitle", "Extra Node"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Collapse", "nzSelector", "nz-demo-collapse-basic", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-basic <name>", "nzComponentName", "NzDemoCollapseBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Accordion", "nzSelector", "nz-demo-collapse-accordion", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-accordion <name>", "nzComponentName", "NzDemoCollapseAccordionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Nested panel", "nzSelector", "nz-demo-collapse-mix", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-mix <name>", "nzComponentName", "NzDemoCollapseMixComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Borderless", "nzSelector", "nz-demo-collapse-borderless", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-borderless <name>", "nzComponentName", "NzDemoCollapseBorderlessComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom Panel", "nzSelector", "nz-demo-collapse-custom", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-custom <name>", "nzComponentName", "NzDemoCollapseCustomComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "No arrow", "nzSelector", "nz-demo-collapse-noarrow", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-noarrow <name>", "nzComponentName", "NzDemoCollapseNoarrowComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Extra Node", "nzSelector", "nz-demo-collapse-extra", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-extra <name>", "nzComponentName", "NzDemoCollapseExtraComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-collapse"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-collapse'", 1, "anchor"], ["id", "nz-collapse-panel"], ["onclick", "window.location.hash = 'nz-collapse-panel'", 1, "anchor"]], template: function NzDemoCollapseEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzClick", function NzDemoCollapseEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "section", 10)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "span", 11)(15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "A content area which can be collapsed and expanded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "h2", 15)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "ul")(27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Can be used to group or hide complex regions to keep the page clean.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "li")(30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " is a special kind of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, ", which allows only one panel to be expanded at a time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "pre", 17)(37, "code")(38, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, " NzCollapseModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "'ng-zorro-antd/collapse'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "h2")(55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NzDemoCollapseEnComponent_Template_i_click_57_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 22)(59, "div", 23)(60, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "nz-demo-collapse-basic", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "More than one panel can be expanded at a time, the first panel is initialized to be active in this case.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "nz-demo-collapse-accordion", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Accordion mode, only one panel can be expanded at a time. The first panel will be expanded by default.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "nz-demo-collapse-mix", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "p")(74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, " is nested inside the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "nz-demo-collapse-borderless", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "A borderless style of Collapse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](86, "nz-demo-collapse-custom", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "Customize the background, border, margin and icon styles for each panel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](91, "nz-demo-collapse-noarrow", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94, "You can disable showing arrow icon by passing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, "[nzShowArrow]=\"false\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, "nz-collapse-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100, " component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](102, "nz-demo-collapse-extra", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105, "You can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "nzExtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, " to put extra elements in the top right corner.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "h2", 34)(111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "h3", 36)(116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "table")(123, "thead")(124, "tr")(125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](128, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](130, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](132, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "tbody")(136, "tr")(137, "td")(138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139, "[nzAccordion]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](141, "Accordion mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](142, "td")(143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](144, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "td")(146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "tr")(151, "td")(152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](153, "[nzBordered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](155, "Set border style");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "td")(157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "td")(160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "tr")(165, "td")(166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](167, "[nzExpandIconPosition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](169, "Set expand icon position");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](170, "td")(171, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](172, "'left' | 'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](173, "td")(174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](175, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](177, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](178, "h3", 39)(179, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](180, "nz-collapse-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](181, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](182, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](183, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](184, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "table")(186, "thead")(187, "tr")(188, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](189, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](190, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](191, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](192, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](193, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](195, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](196, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](197, "tbody")(198, "tr")(199, "td")(200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](201, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](203, "If ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](205, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](206, ", panel cannot be opened or closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](207, "td")(208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](209, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](210, "td")(211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](212, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](214, "tr")(215, "td")(216, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](217, "[nzHeader]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](219, "Title of the panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](220, "td")(221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](222, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](226, "tr")(227, "td")(228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](229, "[nzExpandedIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](231, "Customize an icon for toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](232, "td")(233, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](234, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](236, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](238, "tr")(239, "td")(240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](241, "[nzExtra]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](243, "Extra element in the corner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](244, "td")(245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](246, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](248, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](250, "tr")(251, "td")(252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](253, "[nzShowArrow]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](255, "Display arrow or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](256, "td")(257, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](258, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](259, "td")(260, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](261, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](262, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](263, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](264, "tr")(265, "td")(266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](267, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](269, "Active status of panel, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](270, "td")(271, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](272, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](273, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](274, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](276, "tr")(277, "td")(278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](279, "(nzActiveChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](281, "Callback function of the active status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](282, "td")(283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](284, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](286, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-basic")("nzLink", "components-collapse-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-accordion")("nzLink", "components-collapse-demo-accordion")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/accordion.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-mix")("nzLink", "components-collapse-demo-mix")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/mix.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-borderless")("nzLink", "components-collapse-demo-borderless")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/borderless.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-custom")("nzLink", "components-collapse-demo-custom")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/custom.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-noarrow")("nzLink", "components-collapse-demo-noarrow")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/noarrow.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-extra")("nzLink", "components-collapse-demo-extra")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/extra.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoCollapseBasicComponent, _accordion__WEBPACK_IMPORTED_MODULE_2__.NzDemoCollapseAccordionComponent, _mix__WEBPACK_IMPORTED_MODULE_3__.NzDemoCollapseMixComponent, _borderless__WEBPACK_IMPORTED_MODULE_4__.NzDemoCollapseBorderlessComponent, _custom__WEBPACK_IMPORTED_MODULE_5__.NzDemoCollapseCustomComponent, _noarrow__WEBPACK_IMPORTED_MODULE_6__.NzDemoCollapseNoarrowComponent, _extra__WEBPACK_IMPORTED_MODULE_7__.NzDemoCollapseExtraComponent], encapsulation: 2 });


/***/ }),

/***/ 83441:
/*!**********************************************!*\
  !*** ./src/app/components/collapse/extra.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCollapseExtraComponent": () => (/* binding */ NzDemoCollapseExtraComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 20011);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);




function NzDemoCollapseExtraComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const panel_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r3.name)("nzActive", panel_r3.active)("nzExtra", _r1)("nzDisabled", panel_r3.disabled);
} }
function NzDemoCollapseExtraComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCollapseExtraComponent_ng_template_2_Template_i_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NzDemoCollapseExtraComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                name: 'This is panel header 1',
                disabled: false
            },
            {
                active: false,
                disabled: false,
                name: 'This is panel header 2'
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 3'
            }
        ];
    }
}
NzDemoCollapseExtraComponent.ɵfac = function NzDemoCollapseExtraComponent_Factory(t) { return new (t || NzDemoCollapseExtraComponent)(); };
NzDemoCollapseExtraComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseExtraComponent, selectors: [["nz-demo-collapse-extra"]], decls: 4, vars: 1, consts: [[3, "nzHeader", "nzActive", "nzExtra", "nzDisabled", 4, "ngFor", "ngForOf"], ["extraTpl", ""], [3, "nzHeader", "nzActive", "nzExtra", "nzDisabled"], [2, "margin", "0"], ["nz-icon", "", "nzType", "setting", 3, "click"]], template: function NzDemoCollapseExtraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseExtraComponent_nz_collapse_panel_1_Template, 3, 4, "nz-collapse-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCollapseExtraComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapseComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapsePanelComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 28835:
/*!*****************************************************!*\
  !*** ./src/app/components/collapse/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCollapseModule": () => (/* binding */ NzDemoCollapseModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 93902);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ 69160);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 70722);
/* harmony import */ var _borderless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./borderless */ 31260);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom */ 66088);
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extra */ 83441);
/* harmony import */ var _mix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mix */ 15296);
/* harmony import */ var _noarrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./noarrow */ 13428);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zh.component */ 43582);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./en.component */ 66954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 20011);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
















class NzDemoCollapseModule {
}
NzDemoCollapseModule.ɵfac = function NzDemoCollapseModule_Factory(t) { return new (t || NzDemoCollapseModule)(); };
NzDemoCollapseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: NzDemoCollapseModule });
NzDemoCollapseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoCollapseEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoCollapseZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](NzDemoCollapseModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_2__.NzDemoCollapseAccordionComponent,
        _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoCollapseBasicComponent,
        _borderless__WEBPACK_IMPORTED_MODULE_4__.NzDemoCollapseBorderlessComponent,
        _custom__WEBPACK_IMPORTED_MODULE_5__.NzDemoCollapseCustomComponent,
        _extra__WEBPACK_IMPORTED_MODULE_6__.NzDemoCollapseExtraComponent,
        _mix__WEBPACK_IMPORTED_MODULE_7__.NzDemoCollapseMixComponent,
        _noarrow__WEBPACK_IMPORTED_MODULE_8__.NzDemoCollapseNoarrowComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoCollapseZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_10__.NzDemoCollapseEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_13__.NzCollapseModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 15296:
/*!********************************************!*\
  !*** ./src/app/components/collapse/mix.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCollapseMixComponent": () => (/* binding */ NzDemoCollapseMixComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 20011);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_nz_collapse_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 1)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const childPanel_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", childPanel_r4.name)("nzActive", childPanel_r4.active);
} }
function NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "nz-collapse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_nz_collapse_panel_2_Template, 3, 2, "nz-collapse-panel", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const panel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", panel_r1.childPanel);
} }
function NzDemoCollapseMixComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 1)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](panel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", panel_r1.childPanel && panel_r1.childPanel.length > 0);
} }
class NzDemoCollapseMixComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                disabled: false,
                name: 'This is panel header 1',
                childPanel: [
                    {
                        active: true,
                        name: 'This is panel header 1-1'
                    },
                    {
                        active: false,
                        name: 'This is panel header 1-2'
                    }
                ]
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 2'
            },
            {
                active: false,
                disabled: false,
                name: 'This is panel header 3'
            }
        ];
    }
}
NzDemoCollapseMixComponent.ɵfac = function NzDemoCollapseMixComponent_Factory(t) { return new (t || NzDemoCollapseMixComponent)(); };
NzDemoCollapseMixComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseMixComponent, selectors: [["nz-demo-collapse-mix"]], decls: 2, vars: 1, consts: [[3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive"], [4, "ngIf"]], template: function NzDemoCollapseMixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseMixComponent_nz_collapse_panel_1_Template, 4, 4, "nz-collapse-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapseComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapsePanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 93902:
/*!***********************************************!*\
  !*** ./src/app/components/collapse/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 20011);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);


const moduleList = [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_0__.NzCollapseModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule];


/***/ }),

/***/ 13428:
/*!************************************************!*\
  !*** ./src/app/components/collapse/noarrow.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCollapseNoarrowComponent": () => (/* binding */ NzDemoCollapseNoarrowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 20011);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function NzDemoCollapseNoarrowComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 1)(1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active)("nzDisabled", panel_r1.disabled)("nzShowArrow", panel_r1.arrow);
} }
class NzDemoCollapseNoarrowComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                name: 'This is panel header 1',
                arrow: true
            },
            {
                active: false,
                arrow: false,
                name: 'This is panel header 2'
            }
        ];
    }
}
NzDemoCollapseNoarrowComponent.ɵfac = function NzDemoCollapseNoarrowComponent_Factory(t) { return new (t || NzDemoCollapseNoarrowComponent)(); };
NzDemoCollapseNoarrowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseNoarrowComponent, selectors: [["nz-demo-collapse-noarrow"]], decls: 2, vars: 1, consts: [[3, "nzHeader", "nzActive", "nzDisabled", "nzShowArrow", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive", "nzDisabled", "nzShowArrow"], [2, "margin", "0"]], template: function NzDemoCollapseNoarrowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseNoarrowComponent_nz_collapse_panel_1_Template, 3, 4, "nz-collapse-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapseComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__.NzCollapsePanelComponent], encapsulation: 2 });


/***/ }),

/***/ 43582:
/*!*****************************************************!*\
  !*** ./src/app/components/collapse/zh.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCollapseZhComponent": () => (/* binding */ NzDemoCollapseZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 70722);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ 69160);
/* harmony import */ var _mix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix */ 15296);
/* harmony import */ var _borderless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./borderless */ 31260);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom */ 66088);
/* harmony import */ var _noarrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noarrow */ 13428);
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extra */ 83441);















class NzDemoCollapseZhComponent {
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
NzDemoCollapseZhComponent.ɵfac = function NzDemoCollapseZhComponent_Factory(t) { return new (t || NzDemoCollapseZhComponent)(); };
NzDemoCollapseZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: NzDemoCollapseZhComponent, selectors: [["nz-demo-collapse"]], viewQuery: function NzDemoCollapseZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 278, vars: 25, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-collapse-demo-basic", "nzTitle", "\u6298\u53E0\u9762\u677F"], ["nzHref", "#components-collapse-demo-accordion", "nzTitle", "\u624B\u98CE\u7434"], ["nzHref", "#components-collapse-demo-mix", "nzTitle", "\u9762\u677F\u5D4C\u5957"], ["nzHref", "#components-collapse-demo-borderless", "nzTitle", "\u7B80\u6D01\u98CE\u683C"], ["nzHref", "#components-collapse-demo-custom", "nzTitle", "\u81EA\u5B9A\u4E49\u9762\u677F"], ["nzHref", "#components-collapse-demo-noarrow", "nzTitle", "\u9690\u85CF\u7BAD\u5934"], ["nzHref", "#components-collapse-demo-extra", "nzTitle", "\u989D\u5916\u8282\u70B9"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u6298\u53E0\u9762\u677F", "nzSelector", "nz-demo-collapse-basic", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-basic <name>", "nzComponentName", "NzDemoCollapseBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u624B\u98CE\u7434", "nzSelector", "nz-demo-collapse-accordion", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-accordion <name>", "nzComponentName", "NzDemoCollapseAccordionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9762\u677F\u5D4C\u5957", "nzSelector", "nz-demo-collapse-mix", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-mix <name>", "nzComponentName", "NzDemoCollapseMixComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7B80\u6D01\u98CE\u683C", "nzSelector", "nz-demo-collapse-borderless", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-borderless <name>", "nzComponentName", "NzDemoCollapseBorderlessComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u9762\u677F", "nzSelector", "nz-demo-collapse-custom", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-custom <name>", "nzComponentName", "NzDemoCollapseCustomComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9690\u85CF\u7BAD\u5934", "nzSelector", "nz-demo-collapse-noarrow", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-noarrow <name>", "nzComponentName", "NzDemoCollapseNoarrowComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u989D\u5916\u8282\u70B9", "nzSelector", "nz-demo-collapse-extra", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-extra <name>", "nzComponentName", "NzDemoCollapseExtraComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-collapse"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-collapse'", 1, "anchor"], ["id", "nz-collapse-panel"], ["onclick", "window.location.hash = 'nz-collapse-panel'", 1, "anchor"]], template: function NzDemoCollapseZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzClick", function NzDemoCollapseZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "section", 10)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "\u6298\u53E0\u9762\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "h2", 15)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "ul")(28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "\u5BF9\u590D\u6742\u533A\u57DF\u8FDB\u884C\u5206\u7EC4\u548C\u9690\u85CF\uFF0C\u4FDD\u6301\u9875\u9762\u7684\u6574\u6D01\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "li")(31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "\u624B\u98CE\u7434");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, " \u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6298\u53E0\u9762\u677F\uFF0C\u53EA\u5141\u8BB8\u5355\u4E2A\u5185\u5BB9\u533A\u57DF\u5C55\u5F00\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "pre", 17)(35, "code")(36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, " NzCollapseModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "'ng-zorro-antd/collapse'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "h2")(53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NzDemoCollapseZhComponent_Template_i_click_55_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 22)(57, "div", 23)(58, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "nz-demo-collapse-basic", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "\u53EF\u4EE5\u540C\u65F6\u5C55\u5F00\u591A\u4E2A\u9762\u677F\uFF0C\u8FD9\u4E2A\u4F8B\u5B50\u9ED8\u8BA4\u5C55\u5F00\u4E86\u7B2C\u4E00\u4E2A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "nz-demo-collapse-accordion", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "\u624B\u98CE\u7434\uFF0C\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2Atab\u3002\u9ED8\u8BA4\u6253\u5F00\u7B2C\u4E00\u4E2A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](69, "nz-demo-collapse-mix", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "\u5D4C\u5957\u6298\u53E0\u9762\u677F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](74, "nz-demo-collapse-borderless", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "\u4E00\u5957\u6CA1\u6709\u8FB9\u6846\u7684\u7B80\u6D01\u6837\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](79, "nz-demo-collapse-custom", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "\u81EA\u5B9A\u4E49\u5404\u4E2A\u9762\u677F\u7684\u80CC\u666F\u8272\u3001\u5706\u89D2\u3001\u8FB9\u8DDD\u548C\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](84, "nz-demo-collapse-noarrow", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "\u4F60\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "[nzShowArrow]=\"false\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, " \u9690\u85CF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92, "nz-collapse-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, " \u7EC4\u4EF6\u7684\u7BAD\u5934\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](95, "nz-demo-collapse-extra", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "\u4F60\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100, "nzExtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, " \u6765\u6307\u5B9A\u9762\u677F\u53F3\u4E0A\u89D2\u7684\u989D\u5916\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "h2", 34)(104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "h3", 36)(109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "table")(116, "thead")(117, "tr")(118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "tbody")(129, "tr")(130, "td")(131, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](132, "[nzAccordion]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, "\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2Atab");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "td")(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "td")(139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "tr")(144, "td")(145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](146, "[nzBordered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148, "\u662F\u5426\u6709\u8FB9\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "td")(150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "td")(153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](156, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "tr")(158, "td")(159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](160, "[nzExpandIconPosition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](162, "\u8BBE\u7F6E\u56FE\u6807\u4F4D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "td")(164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](165, "'left' | 'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](166, "td")(167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](168, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](170, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](171, "h3", 39)(172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "nz-collapse-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](175, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](177, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](178, "table")(179, "thead")(180, "tr")(181, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](182, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](183, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](184, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](186, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](187, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](189, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](190, "tbody")(191, "tr")(192, "td")(193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](194, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](195, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](196, "\u7981\u7528\u540E\u7684\u9762\u677F\u5C55\u5F00\u4E0E\u5426\u5C06\u65E0\u6CD5\u901A\u8FC7\u7528\u6237\u4EA4\u4E92\u6539\u53D8");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](197, "td")(198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](199, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](200, "td")(201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](202, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](204, "tr")(205, "td")(206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](207, "[nzHeader]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](209, "\u9762\u677F\u5934\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](210, "td")(211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](212, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](214, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](216, "tr")(217, "td")(218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](219, "[nzExpandedIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](221, "\u81EA\u5B9A\u4E49\u5207\u6362\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](222, "td")(223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](226, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](228, "tr")(229, "td")(230, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](231, "[nzExtra]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](233, "\u81EA\u5B9A\u4E49\u6E32\u67D3\u6BCF\u4E2A\u9762\u677F\u53F3\u4E0A\u89D2\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](234, "td")(235, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](236, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](238, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](240, "tr")(241, "td")(242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](243, "[nzShowArrow]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](245, "\u662F\u5426\u5C55\u793A\u7BAD\u5934");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](246, "td")(247, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](248, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](249, "td")(250, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](251, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](253, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](254, "tr")(255, "td")(256, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](257, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](259, "\u9762\u677F\u662F\u5426\u5C55\u5F00\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](260, "td")(261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](262, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](264, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](266, "tr")(267, "td")(268, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](269, "(nzActiveChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](271, "\u9762\u677F\u5C55\u5F00\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](272, "td")(273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](274, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](276, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-basic")("nzLink", "components-collapse-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-accordion")("nzLink", "components-collapse-demo-accordion")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/accordion.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-mix")("nzLink", "components-collapse-demo-mix")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/mix.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-borderless")("nzLink", "components-collapse-demo-borderless")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/borderless.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-custom")("nzLink", "components-collapse-demo-custom")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/custom.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-noarrow")("nzLink", "components-collapse-demo-noarrow")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/noarrow.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzId", "components-collapse-demo-extra")("nzLink", "components-collapse-demo-extra")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/extra.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_10__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoCollapseBasicComponent, _accordion__WEBPACK_IMPORTED_MODULE_2__.NzDemoCollapseAccordionComponent, _mix__WEBPACK_IMPORTED_MODULE_3__.NzDemoCollapseMixComponent, _borderless__WEBPACK_IMPORTED_MODULE_4__.NzDemoCollapseBorderlessComponent, _custom__WEBPACK_IMPORTED_MODULE_5__.NzDemoCollapseCustomComponent, _noarrow__WEBPACK_IMPORTED_MODULE_6__.NzDemoCollapseNoarrowComponent, _extra__WEBPACK_IMPORTED_MODULE_7__.NzDemoCollapseExtraComponent], encapsulation: 2 });


/***/ }),

/***/ 20011:
/*!************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-collapse.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzCollapseComponent": () => (/* binding */ NzCollapseComponent),
/* harmony export */   "NzCollapseModule": () => (/* binding */ NzCollapseModule),
/* harmony export */   "NzCollapsePanelComponent": () => (/* binding */ NzCollapsePanelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 99052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ 17333);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 99597);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 92938);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 41687);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 87511);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 88153);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);













/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */








const _c0 = ["*"];
function NzCollapsePanelComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const expandedIcon_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", expandedIcon_r4 || "right")("nzRotate", ctx_r3.nzActive ? 90 : 0);
} }
function NzCollapsePanelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCollapsePanelComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzExpandedIcon);
} }
function NzCollapsePanelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.nzHeader);
} }
function NzCollapsePanelComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.nzExtra);
} }
function NzCollapsePanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCollapsePanelComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzExtra);
} }
const NZ_CONFIG_MODULE_NAME$1 = 'collapse';
class NzCollapseComponent {
    constructor(nzConfigService, cdr, elementRef, directionality) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
        this.nzAccordion = false;
        this.nzBordered = true;
        this.nzGhost = false;
        this.nzExpandIconPosition = 'left';
        this.dir = 'ltr';
        this.listOfNzCollapsePanelComponent = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-collapse');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME$1)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent
                .filter(item => item !== collapse)
                .forEach(item => {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            });
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzCollapseComponent.ɵfac = function NzCollapseComponent_Factory(t) { return new (t || NzCollapseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8)); };
NzCollapseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzCollapseComponent, selectors: [["nz-collapse"]], hostVars: 10, hostBindings: function NzCollapseComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-collapse-icon-position-left", ctx.nzExpandIconPosition === "left")("ant-collapse-icon-position-right", ctx.nzExpandIconPosition === "right")("ant-collapse-ghost", ctx.nzGhost)("ant-collapse-borderless", !ctx.nzBordered)("ant-collapse-rtl", ctx.dir === "rtl");
    } }, inputs: { nzAccordion: "nzAccordion", nzBordered: "nzBordered", nzGhost: "nzGhost", nzExpandIconPosition: "nzExpandIconPosition" }, exportAs: ["nzCollapse"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCollapseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzCollapseComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzCollapseComponent.propDecorators = {
    nzAccordion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzBordered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzGhost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzExpandIconPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)(),
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.InputBoolean)()
], NzCollapseComponent.prototype, "nzAccordion", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)(),
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.InputBoolean)()
], NzCollapseComponent.prototype, "nzBordered", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)(),
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.InputBoolean)()
], NzCollapseComponent.prototype, "nzGhost", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'collapsePanel';
class NzCollapsePanelComponent {
    constructor(nzConfigService, cdr, nzCollapseComponent, elementRef, noAnimation) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCollapseComponent = nzCollapseComponent;
        this.elementRef = elementRef;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzActive = false;
        this.nzDisabled = false;
        this.nzShowArrow = true;
        this.nzActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-collapse-item');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    clickHeader() {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.nzCollapseComponent.addPanel(this);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.nzCollapseComponent.removePanel(this);
    }
}
NzCollapsePanelComponent.ɵfac = function NzCollapsePanelComponent_Factory(t) { return new (t || NzCollapsePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzCollapseComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__.NzNoAnimationDirective, 8)); };
NzCollapsePanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzCollapsePanelComponent, selectors: [["nz-collapse-panel"]], hostVars: 6, hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
    } }, inputs: { nzActive: "nzActive", nzDisabled: "nzDisabled", nzShowArrow: "nzShowArrow", nzExtra: "nzExtra", nzHeader: "nzHeader", nzExpandedIcon: "nzExpandedIcon" }, outputs: { nzActiveChange: "nzActiveChange" }, exportAs: ["nzCollapsePanel"], ngContentSelectors: _c0, decls: 7, vars: 8, consts: [["role", "tab", 1, "ant-collapse-header", 3, "click"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-collapse-extra", 4, "ngIf"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"], [1, "ant-collapse-extra"]], template: function NzCollapsePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzCollapsePanelComponent_Template_div_click_0_listener() { return ctx.clickHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCollapsePanelComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzCollapsePanelComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzCollapsePanelComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.nzActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzShowArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-collapse-content-active", ctx.nzActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@.disabled", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__.collapseMotion] }, changeDetection: 0 });
NzCollapsePanelComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: NzCollapseComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__.NzNoAnimationDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzCollapsePanelComponent.propDecorators = {
    nzActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzShowArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzExtra: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzExpandedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzActiveChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.InputBoolean)()
], NzCollapsePanelComponent.prototype, "nzActive", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.InputBoolean)()
], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)(),
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.InputBoolean)()
], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCollapseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'nz-collapse',
                exportAs: 'nzCollapse',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                template: ` <ng-content></ng-content> `,
                host: {
                    '[class.ant-collapse-icon-position-left]': `nzExpandIconPosition === 'left'`,
                    '[class.ant-collapse-icon-position-right]': `nzExpandIconPosition === 'right'`,
                    '[class.ant-collapse-ghost]': `nzGhost`,
                    '[class.ant-collapse-borderless]': '!nzBordered',
                    '[class.ant-collapse-rtl]': "dir === 'rtl'"
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzAccordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzBordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzGhost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzExpandIconPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCollapsePanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'nz-collapse-panel',
                exportAs: 'nzCollapsePanel',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__.collapseMotion],
                template: `
    <div role="tab" [attr.aria-expanded]="nzActive" class="ant-collapse-header" (click)="clickHeader()">
      <ng-container *ngIf="nzShowArrow">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; let expandedIcon">
          <i nz-icon [nzType]="expandedIcon || 'right'" class="ant-collapse-arrow" [nzRotate]="nzActive ? 90 : 0"></i>
        </ng-container>
      </ng-container>
      <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      <div class="ant-collapse-extra" *ngIf="nzExtra">
        <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
      </div>
    </div>
    <div
      class="ant-collapse-content"
      [class.ant-collapse-content-active]="nzActive"
      [@.disabled]="noAnimation?.nzNoAnimation"
      [@collapseMotion]="nzActive ? 'expanded' : 'hidden'"
    >
      <div class="ant-collapse-content-box">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                host: {
                    '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                    '[class.ant-collapse-item-active]': 'nzActive',
                    '[class.ant-collapse-item-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: NzCollapseComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__.NzNoAnimationDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzShowArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzActiveChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzExtra: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzExpandedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCollapseModule {
}
NzCollapseModule.ɵfac = function NzCollapseModule_Factory(t) { return new (t || NzCollapseModule)(); };
NzCollapseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzCollapseModule });
NzCollapseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__.NzOutletModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__.NzNoAnimationModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCollapseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [NzCollapsePanelComponent, NzCollapseComponent],
                exports: [NzCollapsePanelComponent, NzCollapseComponent],
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__.NzOutletModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__.NzNoAnimationModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzCollapseModule, { declarations: function () { return [NzCollapsePanelComponent, NzCollapseComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__.NzOutletModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__.NzNoAnimationModule]; }, exports: function () { return [NzCollapsePanelComponent, NzCollapseComponent]; } }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=src_app_components_collapse_index_module_ts.js.map