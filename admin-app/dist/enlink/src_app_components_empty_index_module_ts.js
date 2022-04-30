"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_empty_index_module_ts"],{

/***/ 16799:
/*!*******************************************!*\
  !*** ./src/app/components/empty/basic.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoEmptyBasicComponent": () => (/* binding */ NzDemoEmptyBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/empty */ 78560);


class NzDemoEmptyBasicComponent {
}
NzDemoEmptyBasicComponent.ɵfac = function NzDemoEmptyBasicComponent_Factory(t) { return new (t || NzDemoEmptyBasicComponent)(); };
NzDemoEmptyBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoEmptyBasicComponent, selectors: [["nz-demo-empty-basic"]], decls: 1, vars: 0, template: function NzDemoEmptyBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty");
    } }, directives: [ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__.NzEmptyComponent], encapsulation: 2 });


/***/ }),

/***/ 523:
/*!********************************************!*\
  !*** ./src/app/components/empty/config.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoEmptyConfigComponent": () => (/* binding */ NzDemoEmptyConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 99597);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 51170);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 71031);
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/transfer */ 53931);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/table */ 13291);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);













const _c0 = ["customTpl"];
function NzDemoEmptyConfigComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const name_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Data Not Found in ", name_r2, "");
} }
const _c1 = function () { return []; };
class NzDemoEmptyConfigComponent {
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.customize = false;
    }
    onConfigChange() {
        if (this.customize) {
            this.nzConfigService.set('empty', { nzDefaultEmptyContent: this.customTpl });
        }
        else {
            this.nzConfigService.set('empty', { nzDefaultEmptyContent: undefined });
        }
    }
}
NzDemoEmptyConfigComponent.ɵfac = function NzDemoEmptyConfigComponent_Factory(t) { return new (t || NzDemoEmptyConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_1__.NzConfigService)); };
NzDemoEmptyConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoEmptyConfigComponent, selectors: [["nz-demo-empty-config"]], viewQuery: function NzDemoEmptyConfigComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTpl = _t.first);
    } }, decls: 29, vars: 10, consts: [[3, "nzUnCheckedChildren", "nzCheckedChildren", "ngModel", "ngModelChange"], [2, "width", "200px"], [2, "width", "200px", 3, "nzShowSearch", "nzOptions"], [3, "nzData"], [3, "nzDataSource"], ["customTpl", ""], [2, "text-align", "center"], ["nz-icon", "", "nzType", "smile", 2, "font-size", "20px"]], template: function NzDemoEmptyConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoEmptyConfigComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.customize = $event; })("ngModelChange", function NzDemoEmptyConfigComponent_Template_nz_switch_ngModelChange_0_listener() { return ctx.onConfigChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TreeSelect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-tree-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-cascader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-table", 3)(17, "thead")(18, "tr")(19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NzDemoEmptyConfigComponent_ng_template_27_Template, 4, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzUnCheckedChildren", "default")("nzCheckedChildren", "customize")("ngModel", ctx.customize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShowSearch", true)("nzOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__.NzDividerComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__.NzSelectComponent, ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_6__.NzTreeSelectComponent, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_7__.NzCascaderComponent, ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_8__.NzTransferComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTbodyComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__.NzListComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"]], styles: ["h3[_ngcontent-%COMP%] {\n        font-size: inherit;\n        margin: 16px 0 8px 0;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxrQkFBa0I7UUFDbEIsb0JBQW9CO01BQ3RCIiwiZmlsZSI6ImNvbmZpZy50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIG1hcmdpbjogMTZweCAwIDhweCAwO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 98281:
/*!***********************************************!*\
  !*** ./src/app/components/empty/customize.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoEmptyCustomizeComponent": () => (/* binding */ NzDemoEmptyCustomizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/empty */ 78560);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





function NzDemoEmptyCustomizeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customize ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function NzDemoEmptyCustomizeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoEmptyCustomizeComponent_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NzDemoEmptyCustomizeComponent {
    onClick() {
        console.log('clicked');
    }
}
NzDemoEmptyCustomizeComponent.ɵfac = function NzDemoEmptyCustomizeComponent_Factory(t) { return new (t || NzDemoEmptyCustomizeComponent)(); };
NzDemoEmptyCustomizeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoEmptyCustomizeComponent, selectors: [["nz-demo-empty-customize"]], decls: 5, vars: 2, consts: [["nzNotFoundImage", "https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg", 3, "nzNotFoundContent", "nzNotFoundFooter"], ["contentTpl", ""], ["footerTpl", ""], ["href", "#API"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function NzDemoEmptyCustomizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-empty", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoEmptyCustomizeComponent_ng_template_1_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoEmptyCustomizeComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNotFoundContent", _r0)("nzNotFoundFooter", _r2);
    } }, directives: [ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__.NzEmptyComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 37067:
/*!*************************************************!*\
  !*** ./src/app/components/empty/description.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoEmptyDescriptionComponent": () => (/* binding */ NzDemoEmptyDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/empty */ 78560);


class NzDemoEmptyDescriptionComponent {
}
NzDemoEmptyDescriptionComponent.ɵfac = function NzDemoEmptyDescriptionComponent_Factory(t) { return new (t || NzDemoEmptyDescriptionComponent)(); };
NzDemoEmptyDescriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoEmptyDescriptionComponent, selectors: [["nz-demo-empty-description"]], decls: 1, vars: 1, consts: [[3, "nzNotFoundContent"]], template: function NzDemoEmptyDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNotFoundContent", null);
    } }, directives: [ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__.NzEmptyComponent], encapsulation: 2 });


/***/ }),

/***/ 62562:
/*!**************************************************!*\
  !*** ./src/app/components/empty/en.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoEmptyEnComponent": () => (/* binding */ NzDemoEmptyEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 16799);
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple */ 57965);
/* harmony import */ var _customize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customize */ 98281);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 523);
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./description */ 37067);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 13291);















class NzDemoEmptyEnComponent {
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
NzDemoEmptyEnComponent.ɵfac = function NzDemoEmptyEnComponent_Factory(t) { return new (t || NzDemoEmptyEnComponent)(); };
NzDemoEmptyEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NzDemoEmptyEnComponent, selectors: [["nz-demo-empty"]], viewQuery: function NzDemoEmptyEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 251, vars: 19, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-empty-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-empty-demo-simple", "nzTitle", "Chose image"], ["nzHref", "#components-empty-demo-customize", "nzTitle", "Customize"], ["nzHref", "#components-empty-demo-config", "nzTitle", "Default Config"], ["nzHref", "#components-empty-demo-description", "nzTitle", "No description"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-empty-basic", "nzGenerateCommand", "ng g ng-zorro-antd:empty-basic <name>", "nzComponentName", "NzDemoEmptyBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Chose image", "nzSelector", "nz-demo-empty-simple", "nzGenerateCommand", "ng g ng-zorro-antd:empty-simple <name>", "nzComponentName", "NzDemoEmptySimpleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Customize", "nzSelector", "nz-demo-empty-customize", "nzGenerateCommand", "ng g ng-zorro-antd:empty-customize <name>", "nzComponentName", "NzDemoEmptyCustomizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Default Config", "nzSelector", "nz-demo-empty-config", "nzGenerateCommand", "ng g ng-zorro-antd:empty-config <name>", "nzComponentName", "NzDemoEmptyConfigComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "No description", "nzSelector", "nz-demo-empty-description", "nzGenerateCommand", "ng g ng-zorro-antd:empty-description <name>", "nzComponentName", "NzDemoEmptyDescriptionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-empty"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-empty'", 1, "anchor"], ["id", "<code>nz_config</code>"], ["onclick", "window.location.hash = '<code>nz_config</code>'", 1, "anchor"], ["id", "injectiontoken"], ["onclick", "window.location.hash = 'injectiontoken'", 1, "anchor"], ["id", "global-customizable-empty-content"], ["onclick", "window.location.hash = 'global-customizable-empty-content'", 1, "anchor"]], template: function NzDemoEmptyEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzClick", function NzDemoEmptyEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "section", 8)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "span", 9)(13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Empty state placeholder.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h2", 13)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "When there is no data provided, display for friendly tips.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "pre", 15)(27, "code")(28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " NzEmptyModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "'ng-zorro-antd/empty'");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "h2")(45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NzDemoEmptyEnComponent_Template_i_click_47_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 20)(49, "div", 21)(50, "nz-code-box", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "nz-demo-empty-basic", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Simplest usage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "nz-demo-empty-simple", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "You can choose another style of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, " by setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "nzNotFoundImage");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "nz-demo-empty-customize", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Customize image, description and extra content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "nz-demo-empty-config", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "NzEmptyService");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, " set global Empty style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "nz-demo-empty-description", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Simplest Usage with no description.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "h2", 30)(89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "h3", 32)(94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "nz-empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "table")(101, "thead")(102, "tr")(103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "tbody")(112, "tr")(113, "td")(114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "[nzNotFoundImage]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, "Customize image. Will tread as image url when string provided");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "td")(119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "tr")(124, "td")(125, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "[nzNotFoundContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "Custom description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "td")(130, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "string | TemplateRef<void> | null");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "tr")(135, "td")(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "[nzNotFoundFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](139, "Custom Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "td")(141, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "h3", 35)(146, "span")(147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148, "NZ_CONFIG");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](150, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154, "nzEmpty");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](155, " interface has properties as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "table")(157, "thead")(158, "tr")(159, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](160, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](164, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "tbody")(166, "tr")(167, "td")(168, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "nzDefaultEmptyContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](171, "User default empty component. You can restore the system default empty content by providing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "td")(175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](176, "Type<any>|TemplateRef<string>|string|undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "h3", 37)(178, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](179, "InjectionToken");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "table")(183, "thead")(184, "tr")(185, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](186, "Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](187, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](188, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](189, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](190, "Parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](191, "tbody")(192, "tr")(193, "td")(194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](195, "NZ_EMPTY_COMPONENT_NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](197, "Would be injected to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](199, "NZ_DEFAULT_EMPTY_CONTENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](200, ", telling that component its parent component's name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](201, "td")(202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](203, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](204, "h3", 39)(205, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](206, "Global Customizable Empty Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](207, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](208, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](209, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](210, "You may notice or used some inputs like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](212, "nzNotFoundContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](213, " in some components. Now they would use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](214, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](215, "Empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](216, " component. So you can provide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](218, "nzDefaultEmptyContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](219, " to customize them.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](220, "pre", 15)(221, "code")(222, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](223, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](224, "\n  provide");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](225, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](226, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](227, " NZ_CONFIG");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](228, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](229, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](230, "\n  useValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](231, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](232, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](233, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](234, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](235, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](236, "\n    empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](237, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](238, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](239, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](240, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](241, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](242, "\n      nzDefaultEmptyContent\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](243, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](244, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](245, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](246, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](247, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](248, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](249, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](250, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-empty-demo-basic")("nzLink", "components-empty-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-empty-demo-simple")("nzLink", "components-empty-demo-simple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/demo/simple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-empty-demo-customize")("nzLink", "components-empty-demo-customize")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/demo/customize.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-empty-demo-config")("nzLink", "components-empty-demo-config")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/demo/config.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-empty-demo-description")("nzLink", "components-empty-demo-description")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/demo/description.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoEmptyBasicComponent, _simple__WEBPACK_IMPORTED_MODULE_2__.NzDemoEmptySimpleComponent, _customize__WEBPACK_IMPORTED_MODULE_3__.NzDemoEmptyCustomizeComponent, _config__WEBPACK_IMPORTED_MODULE_4__.NzDemoEmptyConfigComponent, _description__WEBPACK_IMPORTED_MODULE_5__.NzDemoEmptyDescriptionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTbodyComponent], encapsulation: 2 });


/***/ }),

/***/ 32139:
/*!**************************************************!*\
  !*** ./src/app/components/empty/index.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoEmptyModule": () => (/* binding */ NzDemoEmptyModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 84250);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 16799);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ 523);
/* harmony import */ var _customize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customize */ 98281);
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./description */ 37067);
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simple */ 57965);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zh.component */ 31325);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./en.component */ 62562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/empty */ 78560);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 71031);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 51170);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 13291);
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/transfer */ 53931);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);























class NzDemoEmptyModule {
}
NzDemoEmptyModule.ɵfac = function NzDemoEmptyModule_Factory(t) { return new (t || NzDemoEmptyModule)(); };
NzDemoEmptyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: NzDemoEmptyModule });
NzDemoEmptyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoEmptyEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoEmptyZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NzDemoEmptyModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoEmptyBasicComponent,
        _config__WEBPACK_IMPORTED_MODULE_3__.NzDemoEmptyConfigComponent,
        _customize__WEBPACK_IMPORTED_MODULE_4__.NzDemoEmptyCustomizeComponent,
        _description__WEBPACK_IMPORTED_MODULE_5__.NzDemoEmptyDescriptionComponent,
        _simple__WEBPACK_IMPORTED_MODULE_6__.NzDemoEmptySimpleComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoEmptyZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoEmptyEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__.NzEmptyModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_13__.NzSwitchModule, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__.NzCascaderModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__.NzDividerModule, ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_16__.NzTreeSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzSelectModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableModule, ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_19__.NzTransferModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_20__.NzListModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 84250:
/*!********************************************!*\
  !*** ./src/app/components/empty/module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/empty */ 78560);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 71031);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 51170);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/table */ 13291);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/transfer */ 53931);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);











const moduleList = [
    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_0__.NzEmptyModule,
    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule,
    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__.NzSwitchModule,
    ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__.NzCascaderModule,
    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__.NzDividerModule,
    ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_5__.NzTreeSelectModule,
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__.NzSelectModule,
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTableModule,
    ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_8__.NzTransferModule,
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListModule,
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonModule
];


/***/ }),

/***/ 57965:
/*!********************************************!*\
  !*** ./src/app/components/empty/simple.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoEmptySimpleComponent": () => (/* binding */ NzDemoEmptySimpleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/empty */ 78560);


class NzDemoEmptySimpleComponent {
}
NzDemoEmptySimpleComponent.ɵfac = function NzDemoEmptySimpleComponent_Factory(t) { return new (t || NzDemoEmptySimpleComponent)(); };
NzDemoEmptySimpleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoEmptySimpleComponent, selectors: [["nz-demo-empty-simple"]], decls: 1, vars: 0, consts: [["nzNotFoundImage", "simple"]], template: function NzDemoEmptySimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 0);
    } }, directives: [ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__.NzEmptyComponent], encapsulation: 2 });


/***/ }),

/***/ 31325:
/*!**************************************************!*\
  !*** ./src/app/components/empty/zh.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoEmptyZhComponent": () => (/* binding */ NzDemoEmptyZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 16799);
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple */ 57965);
/* harmony import */ var _customize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customize */ 98281);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 523);
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./description */ 37067);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 13291);















class NzDemoEmptyZhComponent {
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
NzDemoEmptyZhComponent.ɵfac = function NzDemoEmptyZhComponent_Factory(t) { return new (t || NzDemoEmptyZhComponent)(); };
NzDemoEmptyZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NzDemoEmptyZhComponent, selectors: [["nz-demo-empty"]], viewQuery: function NzDemoEmptyZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 218, vars: 19, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-empty-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-empty-demo-simple", "nzTitle", "\u9009\u62E9\u56FE\u7247"], ["nzHref", "#components-empty-demo-customize", "nzTitle", "\u81EA\u5B9A\u4E49"], ["nzHref", "#components-empty-demo-config", "nzTitle", "\u5168\u5C40\u5316\u914D\u7F6E"], ["nzHref", "#components-empty-demo-description", "nzTitle", "\u65E0\u63CF\u8FF0"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-empty-basic", "nzGenerateCommand", "ng g ng-zorro-antd:empty-basic <name>", "nzComponentName", "NzDemoEmptyBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u9009\u62E9\u56FE\u7247", "nzSelector", "nz-demo-empty-simple", "nzGenerateCommand", "ng g ng-zorro-antd:empty-simple <name>", "nzComponentName", "NzDemoEmptySimpleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49", "nzSelector", "nz-demo-empty-customize", "nzGenerateCommand", "ng g ng-zorro-antd:empty-customize <name>", "nzComponentName", "NzDemoEmptyCustomizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5168\u5C40\u5316\u914D\u7F6E", "nzSelector", "nz-demo-empty-config", "nzGenerateCommand", "ng g ng-zorro-antd:empty-config <name>", "nzComponentName", "NzDemoEmptyConfigComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u65E0\u63CF\u8FF0", "nzSelector", "nz-demo-empty-description", "nzGenerateCommand", "ng g ng-zorro-antd:empty-description <name>", "nzComponentName", "NzDemoEmptyDescriptionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-empty"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-empty'", 1, "anchor"], ["id", "<code>nz_config</code>"], ["onclick", "window.location.hash = '<code>nz_config</code>'", 1, "anchor"], ["id", "injectiontoken"], ["onclick", "window.location.hash = 'injectiontoken'", 1, "anchor"], ["id", "\u5168\u5C40\u81EA\u5B9A\u4E49\u7A7A\u7EC4\u4EF6"], ["onclick", "window.location.hash = '\u5168\u5C40\u81EA\u5B9A\u4E49\u7A7A\u7EC4\u4EF6'", 1, "anchor"]], template: function NzDemoEmptyZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzClick", function NzDemoEmptyZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "section", 8)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u7A7A\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\u7A7A\u72B6\u6001\u65F6\u7684\u5C55\u793A\u5360\u4F4D\u56FE\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "h2", 13)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\u5F53\u76EE\u524D\u6CA1\u6709\u6570\u636E\u65F6\uFF0C\u7528\u4E8E\u663E\u5F0F\u7684\u7528\u6237\u63D0\u793A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "pre", 15)(28, "code")(29, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " NzEmptyModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "'ng-zorro-antd/empty'");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NzDemoEmptyZhComponent_Template_i_click_48_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 20)(50, "div", 21)(51, "nz-code-box", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "nz-demo-empty-basic", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "\u7B80\u5355\u7684\u5C55\u793A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "nz-demo-empty-simple", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "nzNotFoundImage");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, " \u9009\u62E9\u53E6\u4E00\u79CD\u98CE\u683C\u7684\u56FE\u7247\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "nz-demo-empty-customize", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "\u81EA\u5B9A\u4E49\u56FE\u7247\u3001\u63CF\u8FF0\u3001\u9644\u5C5E\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "nz-demo-empty-config", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "\u81EA\u5B9A\u4E49\u5168\u5C40\u7EC4\u4EF6\u7684 Empty \u6837\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "nz-demo-empty-description", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "\u65E0\u63CF\u8FF0\u5C55\u793A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "h2", 30)(84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "h3", 32)(89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "nz-empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "table")(96, "thead")(97, "tr")(98, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "tbody")(107, "tr")(108, "td")(109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "[nzNotFoundImage]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "\u8BBE\u7F6E\u663E\u793A\u56FE\u7247\uFF0C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, " \u65F6\u8868\u793A\u81EA\u5B9A\u4E49\u56FE\u7247\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "td")(117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "tr")(122, "td")(123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "[nzNotFoundContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "\u81EA\u5B9A\u4E49\u63CF\u8FF0\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "td")(128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "string | TemplateRef<void> | null");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "tr")(133, "td")(134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "[nzNotFoundFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "\u8BBE\u7F6E\u81EA\u5B9A\u4E49 footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "td")(139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "h3", 35)(144, "span")(145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146, "NZ_CONFIG");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "p")(150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151, "nzEmpty");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, " \u63A5\u53E3\u6709\u5982\u4E0B\u5B57\u6BB5\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "table")(154, "thead")(155, "tr")(156, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](157, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](159, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](161, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "tbody")(163, "tr")(164, "td")(165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, "nzDefaultEmptyContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](168, "\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u5168\u5C40\u7A7A\u7EC4\u4EF6\uFF0C\u53EF\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](170, "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](171, " \u6765\u53D6\u6D88\u81EA\u5B9A\u4E49\u7684\u5168\u5C40\u7A7A\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "td")(173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](174, "Type<any>|TemplateRef<string>|string|undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "h3", 37)(176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](177, "InjectionToken");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](179, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "table")(181, "thead")(182, "tr")(183, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](184, "Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](185, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](186, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](187, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](188, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](189, "tbody")(190, "tr")(191, "td")(192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](193, "NZ_EMPTY_COMPONENT_NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](195, "\u5C06\u4F1A\u88AB\u6CE8\u5165\u5230\u7528\u6237\u7684\u5168\u5C40\u81EA\u5B9A\u4E49\u7A7A\u7EC4\u4EF6\u4E2D\uFF0C\u544A\u8BC9\u8BE5\u7EC4\u4EF6\u5176\u6240\u5728\u7EC4\u4EF6\u7684\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](196, "td")(197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](198, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](199, "h3", 39)(200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](201, "\u5168\u5C40\u81EA\u5B9A\u4E49\u7A7A\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](203, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](204, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](205, "\u4F60\u6216\u8BB8\u77E5\u9053\u6216\u8005\u7528\u8FC7\u4E00\u4E9B\u7C7B\u4F3C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](207, "nzNotFoundContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](208, " \u7684\u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6570\u636E\u4E3A\u7A7A\u65F6\u7684\u5185\u5BB9\uFF0C\u73B0\u5728\u5B83\u4EEC\u90FD\u4F1A\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](210, "Empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](211, " \u7EC4\u4EF6\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](213, "NZ_CONFIG");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](214, " \u4E2D\u63D0\u4F9B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](216, "{ empty: { nzDefaultEmptyContent: something } }");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](217, " \u6765\u5B9A\u4E49\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u5168\u5C40\u7A7A\u7EC4\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-empty-demo-basic")("nzLink", "components-empty-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-empty-demo-simple")("nzLink", "components-empty-demo-simple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/demo/simple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-empty-demo-customize")("nzLink", "components-empty-demo-customize")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/demo/customize.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-empty-demo-config")("nzLink", "components-empty-demo-config")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/demo/config.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzId", "components-empty-demo-description")("nzLink", "components-empty-demo-description")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/empty/demo/description.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_7__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_8__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoEmptyBasicComponent, _simple__WEBPACK_IMPORTED_MODULE_2__.NzDemoEmptySimpleComponent, _customize__WEBPACK_IMPORTED_MODULE_3__.NzDemoEmptyCustomizeComponent, _config__WEBPACK_IMPORTED_MODULE_4__.NzDemoEmptyConfigComponent, _description__WEBPACK_IMPORTED_MODULE_5__.NzDemoEmptyDescriptionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTbodyComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_empty_index_module_ts.js.map