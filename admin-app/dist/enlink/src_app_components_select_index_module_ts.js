"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_select_index_module_ts"],{

/***/ 43773:
/*!*************************************************************!*\
  !*** ./src/app/components/select/automatic-tokenization.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectAutomaticTokenizationComponent": () => (/* binding */ NzDemoSelectAutomaticTokenizationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function NzDemoSelectAutomaticTokenizationComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r1.label)("nzValue", option_r1.value);
} }
const _c0 = function () { return [","]; };
class NzDemoSelectAutomaticTokenizationComponent {
    constructor() {
        this.listOfOption = [];
        this.listOfTagOptions = [];
    }
    ngOnInit() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        }
        this.listOfOption = children;
    }
}
NzDemoSelectAutomaticTokenizationComponent.ɵfac = function NzDemoSelectAutomaticTokenizationComponent_Factory(t) { return new (t || NzDemoSelectAutomaticTokenizationComponent)(); };
NzDemoSelectAutomaticTokenizationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectAutomaticTokenizationComponent, selectors: [["nz-demo-select-automatic-tokenization"]], decls: 2, vars: 4, consts: [["nzMode", "tags", "nzPlaceHolder", "automatic tokenization", 3, "ngModel", "nzTokenSeparators", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectAutomaticTokenizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectAutomaticTokenizationComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfTagOptions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectAutomaticTokenizationComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listOfTagOptions)("nzTokenSeparators", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9tYXRpYy10b2tlbml6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsV0FBVztNQUNiIiwiZmlsZSI6ImF1dG9tYXRpYy10b2tlbml6YXRpb24udHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 58165:
/*!********************************************!*\
  !*** ./src/app/components/select/basic.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectBasicComponent": () => (/* binding */ NzDemoSelectBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoSelectBasicComponent {
}
NzDemoSelectBasicComponent.ɵfac = function NzDemoSelectBasicComponent_Factory(t) { return new (t || NzDemoSelectBasicComponent)(); };
NzDemoSelectBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectBasicComponent, selectors: [["nz-demo-select-basic"]], decls: 10, vars: 0, consts: [["ngModel", "lucy"], ["nzValue", "jack", "nzLabel", "Jack"], ["nzValue", "lucy", "nzLabel", "Lucy"], ["nzValue", "disabled", "nzLabel", "Disabled", "nzDisabled", ""], ["ngModel", "lucy", "nzDisabled", ""], ["ngModel", "lucy", "nzLoading", ""], ["ngModel", "lucy", "nzAllowClear", "", "nzPlaceHolder", "Choose"]], template: function NzDemoSelectBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-option", 1)(2, "nz-option", 2)(3, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        margin: 0 8px 10px 0;\n        width: 120px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLG9CQUFvQjtRQUNwQixZQUFZO01BQ2QiLCJmaWxlIjoiYmFzaWMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXNlbGVjdCB7XG4gICAgICAgIG1hcmdpbjogMCA4cHggMTBweCAwO1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 26913:
/*!***********************************************!*\
  !*** ./src/app/components/select/big-data.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectBigDataComponent": () => (/* binding */ NzDemoSelectBigDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function NzDemoSelectBigDataComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r1)("nzValue", item_r1);
} }
class NzDemoSelectBigDataComponent {
    constructor() {
        this.listOfOption = [];
        this.listOfSelectedValue = ['a10', 'c12'];
    }
    ngOnInit() {
        const children = [];
        for (let i = 10; i < 10000; i++) {
            children.push(`${i.toString(36)}${i}`);
        }
        this.listOfOption = children;
    }
}
NzDemoSelectBigDataComponent.ɵfac = function NzDemoSelectBigDataComponent_Factory(t) { return new (t || NzDemoSelectBigDataComponent)(); };
NzDemoSelectBigDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectBigDataComponent, selectors: [["nz-demo-select-big-data"]], decls: 2, vars: 2, consts: [["nzMode", "multiple", "nzPlaceHolder", "Please select", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectBigDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectBigDataComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfSelectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectBigDataComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listOfSelectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpZy1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFdBQVc7TUFDYiIsImZpbGUiOiJiaWctZGF0YS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 73871:
/*!**************************************************!*\
  !*** ./src/app/components/select/border-less.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectBorderLessComponent": () => (/* binding */ NzDemoSelectBorderLessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoSelectBorderLessComponent {
}
NzDemoSelectBorderLessComponent.ɵfac = function NzDemoSelectBorderLessComponent_Factory(t) { return new (t || NzDemoSelectBorderLessComponent)(); };
NzDemoSelectBorderLessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectBorderLessComponent, selectors: [["nz-demo-select-border-less"]], decls: 6, vars: 0, consts: [["ngModel", "lucy", "nzBorderless", ""], ["nzValue", "jack", "nzLabel", "Jack"], ["nzValue", "lucy", "nzLabel", "Lucy"], ["nzValue", "disabled", "nzLabel", "Disabled", "nzDisabled", ""], ["ngModel", "lucy", "nzDisabled", "", "nzBorderless", ""]], template: function NzDemoSelectBorderLessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-option", 1)(2, "nz-option", 2)(3, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        margin: 0 8px 10px 0;\n        width: 120px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvcmRlci1sZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLG9CQUFvQjtRQUNwQixZQUFZO01BQ2QiLCJmaWxlIjoiYm9yZGVyLWxlc3MudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXNlbGVjdCB7XG4gICAgICAgIG1hcmdpbjogMCA4cHggMTBweCAwO1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 27267:
/*!*************************************************!*\
  !*** ./src/app/components/select/coordinate.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectCoordinateComponent": () => (/* binding */ NzDemoSelectCoordinateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function NzDemoSelectCoordinateComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", p_r2)("nzLabel", p_r2);
} }
function NzDemoSelectCoordinateComponent_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", c_r3)("nzLabel", c_r3);
} }
class NzDemoSelectCoordinateComponent {
    constructor() {
        this.selectedProvince = 'Zhejiang';
        this.selectedCity = 'Hangzhou';
        this.provinceData = ['Zhejiang', 'Jiangsu'];
        this.cityData = {
            Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
            Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
        };
    }
    provinceChange(value) {
        this.selectedCity = this.cityData[value][0];
    }
}
NzDemoSelectCoordinateComponent.ɵfac = function NzDemoSelectCoordinateComponent_Factory(t) { return new (t || NzDemoSelectCoordinateComponent)(); };
NzDemoSelectCoordinateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectCoordinateComponent, selectors: [["nz-demo-select-coordinate"]], decls: 5, vars: 4, consts: [[3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function NzDemoSelectCoordinateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectCoordinateComponent_Template_nz_select_ngModelChange_1_listener($event) { return ctx.selectedProvince = $event; })("ngModelChange", function NzDemoSelectCoordinateComponent_Template_nz_select_ngModelChange_1_listener($event) { return ctx.provinceChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSelectCoordinateComponent_nz_option_2_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectCoordinateComponent_Template_nz_select_ngModelChange_3_listener($event) { return ctx.selectedCity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoSelectCoordinateComponent_nz_option_4_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedProvince);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.provinceData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cityData[ctx.selectedProvince]);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        margin-right: 8px;\n        width: 120px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb3JkaW5hdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsaUJBQWlCO1FBQ2pCLFlBQVk7TUFDZCIsImZpbGUiOiJjb29yZGluYXRlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1zZWxlY3Qge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 76677:
/*!*****************************************************!*\
  !*** ./src/app/components/select/custom-content.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectCustomContentComponent": () => (/* binding */ NzDemoSelectCustomContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);




class NzDemoSelectCustomContentComponent {
    constructor() {
        this.selectedOS = null;
    }
}
NzDemoSelectCustomContentComponent.ɵfac = function NzDemoSelectCustomContentComponent_Factory(t) { return new (t || NzDemoSelectCustomContentComponent)(); };
NzDemoSelectCustomContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectCustomContentComponent, selectors: [["nz-demo-select-custom-content"]], decls: 10, vars: 1, consts: [["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select OS", 3, "ngModel", "ngModelChange"], ["nzCustomContent", "", "nzLabel", "Windows", "nzValue", "windows"], ["nz-icon", "", "nzType", "windows"], ["nzCustomContent", "", "nzLabel", "Mac", "nzValue", "mac"], ["nz-icon", "", "nzType", "apple"], ["nzCustomContent", "", "nzLabel", "Android", "nzValue", "android"], ["nz-icon", "", "nzType", "android"]], template: function NzDemoSelectCustomContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectCustomContentComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedOS = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Android ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOS);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7TUFDZCIsImZpbGUiOiJjdXN0b20tY29udGVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 97249:
/*!***********************************************************!*\
  !*** ./src/app/components/select/custom-dropdown-menu.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectCustomDropdownMenuComponent": () => (/* binding */ NzDemoSelectCustomDropdownMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);






function NzDemoSelectCustomDropdownMenuComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 3);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r3)("nzValue", item_r3);
} }
function NzDemoSelectCustomDropdownMenuComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoSelectCustomDropdownMenuComponent_ng_template_2_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addItem(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class NzDemoSelectCustomDropdownMenuComponent {
    constructor() {
        this.listOfItem = ['jack', 'lucy'];
        this.index = 0;
    }
    addItem(input) {
        const value = input.value;
        if (this.listOfItem.indexOf(value) === -1) {
            this.listOfItem = [...this.listOfItem, input.value || `New item ${this.index++}`];
        }
    }
}
NzDemoSelectCustomDropdownMenuComponent.ɵfac = function NzDemoSelectCustomDropdownMenuComponent_Factory(t) { return new (t || NzDemoSelectCustomDropdownMenuComponent)(); };
NzDemoSelectCustomDropdownMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectCustomDropdownMenuComponent, selectors: [["nz-demo-select-custom-dropdown-menu"]], decls: 4, vars: 2, consts: [["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "custom dropdown render", 3, "nzDropdownRender"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["renderTemplate", ""], [3, "nzLabel", "nzValue"], [1, "container"], ["type", "text", "nz-input", ""], ["inputElement", ""], [1, "add-item", 3, "click"], ["nz-icon", "", "nzType", "plus"]], template: function NzDemoSelectCustomDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectCustomDropdownMenuComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSelectCustomDropdownMenuComponent_ng_template_2_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownRender", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfItem);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__.NzDividerComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 240px;\n      }\n      nz-divider[_ngcontent-%COMP%] {\n        margin: 4px 0;\n      }\n      .container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: nowrap;\n        padding: 8px;\n      }\n      input[_ngcontent-%COMP%] {\n      }\n      .add-item[_ngcontent-%COMP%] {\n        flex: 0 0 auto;\n        padding: 8px;\n        display: block;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1kcm9wZG93bi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7TUFDZDtNQUNBO1FBQ0UsYUFBYTtNQUNmO01BQ0E7UUFDRSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLFlBQVk7TUFDZDtNQUNBO01BQ0E7TUFDQTtRQUNFLGNBQWM7UUFDZCxZQUFZO1FBQ1osY0FBYztNQUNoQiIsImZpbGUiOiJjdXN0b20tZHJvcGRvd24tbWVudS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgfVxuICAgICAgbnotZGl2aWRlciB7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIH1cbiAgICAgIGlucHV0IHtcbiAgICAgIH1cbiAgICAgIC5hZGQtaXRlbSB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 63691:
/*!******************************************************!*\
  !*** ./src/app/components/select/custom-template.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectCustomTemplateComponent": () => (/* binding */ NzDemoSelectCustomTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);



function NzDemoSelectCustomTemplateComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const selected_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", selected_r4.nzValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selected_r4.nzLabel, " ");
} }
function NzDemoSelectCustomTemplateComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selected_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", selected_r5.nzValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selected_r5.nzLabel, "");
} }
class NzDemoSelectCustomTemplateComponent {
}
NzDemoSelectCustomTemplateComponent.ɵfac = function NzDemoSelectCustomTemplateComponent_Factory(t) { return new (t || NzDemoSelectCustomTemplateComponent)(); };
NzDemoSelectCustomTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectCustomTemplateComponent, selectors: [["nz-demo-select-custom-template"]], decls: 14, vars: 2, consts: [["nzAllowClear", "", "nzPlaceHolder", "Select OS", 3, "nzCustomTemplate"], ["nzLabel", "Windows", "nzValue", "windows"], ["nzLabel", "Apple", "nzValue", "apple"], ["nzLabel", "Android", "nzValue", "android"], ["defaultTemplate", ""], ["nzAllowClear", "", "nzPlaceHolder", "Select OS", "nzMode", "multiple", 3, "nzCustomTemplate"], ["multipleTemplate", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-select-selection-item-content"]], template: function NzDemoSelectCustomTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-option", 1)(2, "nz-option", 2)(3, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoSelectCustomTemplateComponent_ng_template_4_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br")(7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-option", 1)(10, "nz-option", 2)(11, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NzDemoSelectCustomTemplateComponent_ng_template_12_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCustomTemplate", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCustomTemplate", _r2);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconDirective], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxXQUFXO01BQ2IiLCJmaWxlIjoiY3VzdG9tLXRlbXBsYXRlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1zZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 14514:
/*!****************************************************!*\
  !*** ./src/app/components/select/default-value.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectDefaultValueComponent": () => (/* binding */ NzDemoSelectDefaultValueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function NzDemoSelectDefaultValueComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 5);
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r3)("nzValue", option_r3);
} }
function NzDemoSelectDefaultValueComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 6);
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r4)("nzValue", option_r4);
} }
function NzDemoSelectDefaultValueComponent_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 5);
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r5)("nzValue", option_r5);
} }
class NzDemoSelectDefaultValueComponent {
    constructor() {
        this.listOfOption = ['Option 01', 'Option 02'];
        this.listOfSelectedValue = ['Default 01', 'Default 02'];
        this.defaultOption = [...this.listOfSelectedValue];
        this.selectedValue = 'Default';
    }
}
NzDemoSelectDefaultValueComponent.ɵfac = function NzDemoSelectDefaultValueComponent_Factory(t) { return new (t || NzDemoSelectDefaultValueComponent)(); };
NzDemoSelectDefaultValueComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectDefaultValueComponent, selectors: [["nz-demo-select-default-value"]], decls: 8, vars: 5, consts: [["nzMode", "multiple", "nzPlaceHolder", "Inserted are removed", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzHide", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange"], ["nzLabel", "Default Value", "nzValue", "Default", "nzHide", ""], [3, "nzLabel", "nzValue"], ["nzHide", "", 3, "nzLabel", "nzValue"]], template: function NzDemoSelectDefaultValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectDefaultValueComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfSelectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectDefaultValueComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSelectDefaultValueComponent_nz_option_2_Template, 1, 2, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br")(4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectDefaultValueComponent_Template_nz_select_ngModelChange_5_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDemoSelectDefaultValueComponent_nz_option_6_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listOfSelectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsV0FBVztNQUNiIiwiZmlsZSI6ImRlZmF1bHQtdmFsdWUudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 90857:
/*!***************************************************!*\
  !*** ./src/app/components/select/en.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectEnComponent": () => (/* binding */ NzDemoSelectEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 58165);
/* harmony import */ var _multiple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiple */ 18501);
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags */ 82878);
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coordinate */ 27267);
/* harmony import */ var _label_in_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label-in-value */ 38202);
/* harmony import */ var _select_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-users */ 63115);
/* harmony import */ var _hide_selected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hide-selected */ 84081);
/* harmony import */ var _scroll_load__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scroll-load */ 38422);
/* harmony import */ var _big_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./big-data */ 26913);
/* harmony import */ var _custom_template__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-template */ 63691);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search */ 30500);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./size */ 67000);
/* harmony import */ var _optgroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./optgroup */ 88283);
/* harmony import */ var _search_box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-box */ 90210);
/* harmony import */ var _automatic_tokenization__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./automatic-tokenization */ 43773);
/* harmony import */ var _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./custom-dropdown-menu */ 97249);
/* harmony import */ var _custom_content__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./custom-content */ 76677);
/* harmony import */ var _default_value__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./default-value */ 14514);
/* harmony import */ var _border_less__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./border-less */ 73871);



























class NzDemoSelectEnComponent {
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
NzDemoSelectEnComponent.ɵfac = function NzDemoSelectEnComponent_Factory(t) { return new (t || NzDemoSelectEnComponent)(); };
NzDemoSelectEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({ type: NzDemoSelectEnComponent, selectors: [["nz-demo-select"]], viewQuery: function NzDemoSelectEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 853, vars: 64, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-select-demo-basic", "nzTitle", "Basic Usage"], ["nzHref", "#components-select-demo-search", "nzTitle", "Select with search field"], ["nzHref", "#components-select-demo-multiple", "nzTitle", "multiple selection"], ["nzHref", "#components-select-demo-size", "nzTitle", "Sizes"], ["nzHref", "#components-select-demo-tags", "nzTitle", "Tags"], ["nzHref", "#components-select-demo-optgroup", "nzTitle", "Option Group"], ["nzHref", "#components-select-demo-coordinate", "nzTitle", "coordinate"], ["nzHref", "#components-select-demo-search-box", "nzTitle", "Search Box"], ["nzHref", "#components-select-demo-label-in-value", "nzTitle", "Get option object of selected item"], ["nzHref", "#components-select-demo-automatic-tokenization", "nzTitle", "Automatic tokenization"], ["nzHref", "#components-select-demo-select-users", "nzTitle", "Search and Select Users"], ["nzHref", "#components-select-demo-custom-dropdown-menu", "nzTitle", "Custom dropdown"], ["nzHref", "#components-select-demo-hide-selected", "nzTitle", "Hide Already Selected"], ["nzHref", "#components-select-demo-custom-content", "nzTitle", "Custom Option Template"], ["nzHref", "#components-select-demo-scroll-load", "nzTitle", "Load Data on Scroll"], ["nzHref", "#components-select-demo-default-value", "nzTitle", "Default Value"], ["nzHref", "#components-select-demo-big-data", "nzTitle", "Large amounts of data"], ["nzHref", "#components-select-demo-border-less", "nzTitle", "Bordered-less"], ["nzHref", "#components-select-demo-custom-template", "nzTitle", "Custom Top Render"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], ["href", "/components/radio/en"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic Usage", "nzSelector", "nz-demo-select-basic", "nzGenerateCommand", "ng g ng-zorro-antd:select-basic <name>", "nzComponentName", "NzDemoSelectBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "multiple selection", "nzSelector", "nz-demo-select-multiple", "nzGenerateCommand", "ng g ng-zorro-antd:select-multiple <name>", "nzComponentName", "NzDemoSelectMultipleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Tags", "nzSelector", "nz-demo-select-tags", "nzGenerateCommand", "ng g ng-zorro-antd:select-tags <name>", "nzComponentName", "NzDemoSelectTagsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "coordinate", "nzSelector", "nz-demo-select-coordinate", "nzGenerateCommand", "ng g ng-zorro-antd:select-coordinate <name>", "nzComponentName", "NzDemoSelectCoordinateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "/components/cascader/en"], ["nzTitle", "Get option object of selected item", "nzSelector", "nz-demo-select-label-in-value", "nzGenerateCommand", "ng g ng-zorro-antd:select-label-in-value <name>", "nzComponentName", "NzDemoSelectLabelInValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection"], ["nzTitle", "Search and Select Users", "nzSelector", "nz-demo-select-select-users", "nzGenerateCommand", "ng g ng-zorro-antd:select-select-users <name>", "nzComponentName", "NzDemoSelectSelectUsersComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Hide Already Selected", "nzSelector", "nz-demo-select-hide-selected", "nzGenerateCommand", "ng g ng-zorro-antd:select-hide-selected <name>", "nzComponentName", "NzDemoSelectHideSelectedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Load Data on Scroll", "nzSelector", "nz-demo-select-scroll-load", "nzGenerateCommand", "ng g ng-zorro-antd:select-scroll-load <name>", "nzComponentName", "NzDemoSelectScrollLoadComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Large amounts of data", "nzSelector", "nz-demo-select-big-data", "nzGenerateCommand", "ng g ng-zorro-antd:select-big-data <name>", "nzComponentName", "NzDemoSelectBigDataComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom Top Render", "nzSelector", "nz-demo-select-custom-template", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-template <name>", "nzComponentName", "NzDemoSelectCustomTemplateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Select with search field", "nzSelector", "nz-demo-select-search", "nzGenerateCommand", "ng g ng-zorro-antd:select-search <name>", "nzComponentName", "NzDemoSelectSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Sizes", "nzSelector", "nz-demo-select-size", "nzGenerateCommand", "ng g ng-zorro-antd:select-size <name>", "nzComponentName", "NzDemoSelectSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Option Group", "nzSelector", "nz-demo-select-optgroup", "nzGenerateCommand", "ng g ng-zorro-antd:select-optgroup <name>", "nzComponentName", "NzDemoSelectOptgroupComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Search Box", "nzSelector", "nz-demo-select-search-box", "nzGenerateCommand", "ng g ng-zorro-antd:select-search-box <name>", "nzComponentName", "NzDemoSelectSearchBoxComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Automatic tokenization", "nzSelector", "nz-demo-select-automatic-tokenization", "nzGenerateCommand", "ng g ng-zorro-antd:select-automatic-tokenization <name>", "nzComponentName", "NzDemoSelectAutomaticTokenizationComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom dropdown", "nzSelector", "nz-demo-select-custom-dropdown-menu", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-dropdown-menu <name>", "nzComponentName", "NzDemoSelectCustomDropdownMenuComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom Option Template", "nzSelector", "nz-demo-select-custom-content", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-content <name>", "nzComponentName", "NzDemoSelectCustomContentComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Default Value", "nzSelector", "nz-demo-select-default-value", "nzGenerateCommand", "ng g ng-zorro-antd:select-default-value <name>", "nzComponentName", "NzDemoSelectDefaultValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Bordered-less", "nzSelector", "nz-demo-select-border-less", "nzGenerateCommand", "ng g ng-zorro-antd:select-border-less <name>", "nzComponentName", "NzDemoSelectBorderLessComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-select"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-select'", 1, "anchor"], ["id", "nz-option"], ["onclick", "window.location.hash = 'nz-option'", 1, "anchor"], ["id", "nz-option-group"], ["onclick", "window.location.hash = 'nz-option-group'", 1, "anchor"], ["id", "methods"], ["onclick", "window.location.hash = 'methods'", 1, "anchor"]], template: function NzDemoSelectEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("nzClick", function NzDemoSelectEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13)(15, "nz-link", 14)(16, "nz-link", 15)(17, "nz-link", 16)(18, "nz-link", 17)(19, "nz-link", 18)(20, "nz-link", 19)(21, "nz-link", 20)(22, "nz-link", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](23, "section", 22)(24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](25, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](26, "span", 23)(27, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](28, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](29, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](30, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](32, "Select component to select value from options.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](33, "h2", 27)(34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](35, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](36, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](37, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](38, "ul")(39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](40, "A dropdown menu for displaying choices - an elegant alternative to the native ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](41, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](42, "<select>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](43, " element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](45, "Utilizing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](46, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](47, "Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](48, " is recommended when there are fewer total options (less than 5).");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](49, "pre", 30)(50, "code")(51, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](52, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](53, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](54, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](55, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](56, " NzSelectModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](57, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](58, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](59, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](60, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](61, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](62, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](63, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](64, "'ng-zorro-antd/select'");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](65, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](66, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](67, "h2")(68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](69, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](70, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function NzDemoSelectEnComponent_Template_i_click_70_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](71, "div", 35)(72, "div", 36)(73, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](74, "nz-demo-select-basic", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](75, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](77, "Basic Usage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](78, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](79, "nz-demo-select-multiple", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](82, "Multiple selection, selecting from existing items, max 3 option will display at the same time by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](84, "nzMaxTagCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](85, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](86, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](87, "nz-demo-select-tags", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](90, "Select with tags, transform input to tag (scroll the menu)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](91, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](92, "nz-demo-select-coordinate", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](93, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](95, "Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](97, "Using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](98, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](99, "Cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](100, " component is strongly recommended instead as it is more flexible and capable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](101, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](102, "nz-demo-select-label-in-value", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](103, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](105, "The value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](107, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](108, " comes from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](110, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](111, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](113, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](114, ", when the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](116, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](117, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](119, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](120, " is an object, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](122, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](123, " will be an object too, the usage of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](125, "compareWith");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](126, " is the same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](127, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](128, "SelectControlValueAccessor");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](129, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](130, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](131, "nz-demo-select-select-users", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](132, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](134, "A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](135, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](136, "nz-demo-select-hide-selected", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](137, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](139, "Hide already selected options in the dropdown via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](141, "nzHide");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](142, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](143, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](144, "nz-demo-select-scroll-load", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](145, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](147, "Load data on scroll.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](148, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](149, "nz-demo-select-big-data", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](150, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](152, "With the help of virtual scroll, select component can deal with Large amounts of data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](153, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](154, "nz-demo-select-custom-template", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](155, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](157, "Custom the content of nz-select via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](159, "nzCustomTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](160, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](161, "div", 36)(162, "nz-code-box", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](163, "nz-demo-select-search", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](164, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](166, "Search the options while expanded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](167, "nz-code-box", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](168, "nz-demo-select-size", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](169, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](171, "The height of the input field for the select defaults to 32px. If ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](173, "nzSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](174, " is set to large, the height will be 40px, and if set to small, 24px.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](175, "nz-code-box", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](176, "nz-demo-select-optgroup", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](177, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](179, "Using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](181, "nz-option-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](182, " to group the options.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](183, "nz-code-box", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](184, "nz-demo-select-search-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](185, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](186, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](187, "Search with remote data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](188, "nz-code-box", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](189, "nz-demo-select-automatic-tokenization", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](190, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](192, "Try to copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](194, "Lucy,Jack");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](195, " to the input. Only available in tags and multiple mode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](196, "nz-code-box", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](197, "nz-demo-select-custom-dropdown-menu", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](198, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](200, "Customize the dropdown menu via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](202, "nzDropdownRender");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](203, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](204, "nz-code-box", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](205, "nz-demo-select-custom-content", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](206, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](208, "Custom the content of nz-option via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](210, "nzCustomContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](211, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](212, "nz-code-box", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](213, "nz-demo-select-default-value", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](214, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](216, "Display a default value that not in the option list with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](218, "nzHide");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](219, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](221, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](222, "nz-code-box", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](223, "nz-demo-select-border-less", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](224, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](225, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](226, "Bordered-less style component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](227, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](228, "h2", 61)(229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](230, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](231, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](232, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](233, "pre", 63)(234, "code")(235, "span", 64)(236, "span", 64)(237, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](238, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](239, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](240, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](241, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](242, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](243, "span", 64)(244, "span", 64)(245, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](246, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](247, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](248, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](249, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](250, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](251, "span", 66)(252, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](253, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](254, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](255, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](256, "lucy");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](257, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](258, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](259, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](260, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](261, "nzLabel");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](262, "span", 66)(263, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](264, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](265, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](266, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](267, "Lucy");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](268, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](269, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](270, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](271, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](272, "span", 64)(273, "span", 64)(274, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](275, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](276, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](277, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](278, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](279, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](280, "span", 64)(281, "span", 64)(282, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](283, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](284, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](285, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](286, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](287, "h3", 67)(288, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](289, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](290, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](291, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](292, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](293, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](294, "table")(295, "thead")(296, "tr")(297, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](298, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](299, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](300, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](301, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](302, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](303, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](304, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](305, "tbody")(306, "tr")(307, "td")(308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](309, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](311, "Current selected nz-option value, double binding.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](312, "td")(313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](314, "any | any[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](316, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](317, "tr")(318, "td")(319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](320, "[compareWith]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](321, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](322, "Same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](323, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](324, "SelectControlValueAccessor");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](325, "td")(326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](327, "(o1: any, o2: any) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](328, "td")(329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](330, "(o1: any, o2: any) => o1===o2");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](331, "tr")(332, "td")(333, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](334, "[nzAutoClearSearchValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](336, "Whether the current search will be cleared on selecting an item. Only applies when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](337, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](338, "mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](339, " is set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](341, "multiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](342, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](344, "tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](345, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](346, "td")(347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](348, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](349, "td")(350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](351, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](352, "tr")(353, "td")(354, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](355, "[nzAllowClear]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](357, "Show clear button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](358, "td")(359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](360, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](361, "td")(362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](363, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](364, "tr")(365, "td")(366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](367, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](369, "dropdown expand state, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](370, "td")(371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](372, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](373, "td")(374, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](375, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](376, "tr")(377, "td")(378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](379, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](381, "Get focus by default");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](382, "td")(383, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](384, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](385, "td")(386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](387, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](388, "tr")(389, "td")(390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](391, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](393, "Whether disabled select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](394, "td")(395, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](396, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](397, "td")(398, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](399, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](400, "tr")(401, "td")(402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](403, "[nzDropdownClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](405, "className of dropdown menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](406, "td")(407, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](408, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](409, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](410, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](411, "tr")(412, "td")(413, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](414, "[nzDropdownMatchSelectWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](416, "Whether dropdown's with is same with select.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](417, "td")(418, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](419, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](420, "td")(421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](422, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](423, "tr")(424, "td")(425, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](426, "[nzDropdownStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](428, "style of dropdown menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](429, "td")(430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](431, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](433, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](434, "tr")(435, "td")(436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](437, "[nzCustomTemplate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](438, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](439, "The custom template of select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](440, "td")(441, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](442, "TemplateRef<{ $implicit: NzOptionComponent }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](444, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](445, "tr")(446, "td")(447, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](448, "[nzServerSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](450, "nz-option will not be filtered when set to true");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](451, "td")(452, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](453, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](454, "td")(455, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](456, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](457, "tr")(458, "td")(459, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](460, "[nzFilterOption]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](461, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](462, "Filter options against it. The function will receive two arguments, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](463, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](464, "inputValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](465, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](467, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](468, ", if the function returns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](469, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](470, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](471, ", the option will be included in the filtered set; Otherwise, it will be excluded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](472, "td")(473, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](474, "(input?: string, option?: NzOptionComponent) => boolean;");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](476, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](477, "tr")(478, "td")(479, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](480, "[nzMaxMultipleCount]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](482, "Max selected option can be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](483, "td")(484, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](485, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](486, "td")(487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](488, "Infinity");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](489, "tr")(490, "td")(491, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](492, "[nzMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](494, "Set mode of Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](495, "td")(496, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](497, "'multiple' | 'tags' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](498, "td")(499, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](500, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](501, "tr")(502, "td")(503, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](504, "[nzNotFoundContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](506, "Specify content to show when no result matches..");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](507, "td")(508, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](509, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](510, "td")(511, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](512, "'Not Found'");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](513, "tr")(514, "td")(515, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](516, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](518, "Placeholder of select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](519, "td")(520, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](521, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](523, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](524, "tr")(525, "td")(526, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](527, "[nzShowArrow]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](528, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](529, "Whether to show the drop-down arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](530, "td")(531, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](532, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](533, "td")(534, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](535, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](536, "tr")(537, "td")(538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](539, "[nzShowSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](540, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](541, "Whether show search input in single mode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](542, "td")(543, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](544, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](545, "td")(546, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](547, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](548, "tr")(549, "td")(550, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](551, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](552, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](553, "Size of Select input");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](554, "td")(555, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](556, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](557, "td")(558, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](559, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](560, "tr")(561, "td")(562, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](563, "[nzSuffixIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](564, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](565, "The custom suffix icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](566, "td")(567, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](568, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](570, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](571, "tr")(572, "td")(573, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](574, "[nzRemoveIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](575, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](576, "The custom remove icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](577, "td")(578, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](579, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](581, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](582, "tr")(583, "td")(584, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](585, "[nzClearIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](586, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](587, "The custom clear icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](588, "td")(589, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](590, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](591, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](592, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](593, "tr")(594, "td")(595, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](596, "[nzMenuItemSelectedIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](597, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](598, "The custom menuItemSelected icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](599, "td")(600, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](601, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](602, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](603, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](604, "tr")(605, "td")(606, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](607, "[nzTokenSeparators]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](608, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](609, "Separator used to tokenize on tag/multiple mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](610, "td")(611, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](612, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](613, "td")(614, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](615, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](616, "tr")(617, "td")(618, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](619, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](620, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](621, "indicate loading state");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](622, "td")(623, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](624, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](625, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](626, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](627, "tr")(628, "td")(629, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](630, "[nzMaxTagCount]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](631, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](632, "Max tag count to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](633, "td")(634, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](635, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](636, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](637, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](638, "tr")(639, "td")(640, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](641, "[nzMaxTagPlaceholder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](642, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](643, "Placeholder for not showing tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](644, "td")(645, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](646, "TemplateRef<{ $implicit: any[] }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](647, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](648, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](649, "tr")(650, "td")(651, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](652, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](653, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](654, "Current selected nz-option value change callback.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](655, "td")(656, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](657, "EventEmitter<any[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](658, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](659, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](660, "tr")(661, "td")(662, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](663, "(nzOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](664, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](665, "dropdown expand change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](666, "td")(667, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](668, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](669, "td")(670, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](671, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](672, "tr")(673, "td")(674, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](675, "(nzScrollToBottom)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](676, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](677, "Called when dropdown scrolls to bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](678, "td")(679, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](680, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](681, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](682, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](683, "tr")(684, "td")(685, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](686, "(nzOnSearch)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](687, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](688, "Callback function that is fired when input changed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](689, "td")(690, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](691, "EventEmitter<string>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](692, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](693, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](694, "tr")(695, "td")(696, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](697, "(nzFocus)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](698, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](699, "focus callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](700, "td")(701, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](702, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](703, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](704, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](705, "tr")(706, "td")(707, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](708, "(nzBlur)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](709, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](710, "blur callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](711, "td")(712, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](713, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](714, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](715, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](716, "h3", 70)(717, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](718, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](719, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](720, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](721, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](722, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](723, "table")(724, "thead")(725, "tr")(726, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](727, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](728, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](729, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](730, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](731, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](732, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](733, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](734, "tbody")(735, "tr")(736, "td")(737, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](738, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](739, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](740, "Disable this option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](741, "td")(742, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](743, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](744, "td")(745, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](746, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](747, "tr")(748, "td")(749, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](750, "[nzLabel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](751, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](752, "The text show in nz-select and dropdown menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](753, "td")(754, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](755, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](756, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](757, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](758, "tr")(759, "td")(760, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](761, "[nzValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](762, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](763, "The value passed to ngModel of nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](764, "td")(765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](766, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](767, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](768, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](769, "tr")(770, "td")(771, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](772, "[nzHide]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](773, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](774, "Whether hide the option in the option list");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](775, "td")(776, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](777, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](778, "td")(779, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](780, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](781, "tr")(782, "td")(783, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](784, "[nzCustomContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](785, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](786, "Whether custom nz-option content in drodown menu, the ng-content in nz-option will relace nzLabel when it was set to true");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](787, "td")(788, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](789, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](790, "td")(791, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](792, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](793, "h3", 72)(794, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](795, "nz-option-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](796, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](797, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](798, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](799, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](800, "table")(801, "thead")(802, "tr")(803, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](804, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](805, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](806, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](807, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](808, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](809, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](810, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](811, "tbody")(812, "tr")(813, "td")(814, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](815, "[nzLabel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](816, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](817, "Group label");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](818, "td")(819, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](820, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](821, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](822, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](823, "h2", 74)(824, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](825, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](826, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](827, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](828, "h3", 67)(829, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](830, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](831, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](832, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](833, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](834, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](835, "table")(836, "thead")(837, "tr")(838, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](839, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](840, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](841, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](842, "tbody")(843, "tr")(844, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](845, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](846, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](847, "Remove focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](848, "tr")(849, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](850, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](851, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](852, "Get focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-basic")("nzLink", "components-select-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-multiple")("nzLink", "components-select-demo-multiple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/multiple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-tags")("nzLink", "components-select-demo-tags")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/tags.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-coordinate")("nzLink", "components-select-demo-coordinate")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/coordinate.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-label-in-value")("nzLink", "components-select-demo-label-in-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/label-in-value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-select-users")("nzLink", "components-select-demo-select-users")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/select-users.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-hide-selected")("nzLink", "components-select-demo-hide-selected")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/hide-selected.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-scroll-load")("nzLink", "components-select-demo-scroll-load")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/scroll-load.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-big-data")("nzLink", "components-select-demo-big-data")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/big-data.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-custom-template")("nzLink", "components-select-demo-custom-template")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-template.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-search")("nzLink", "components-select-demo-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-size")("nzLink", "components-select-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-optgroup")("nzLink", "components-select-demo-optgroup")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/optgroup.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-search-box")("nzLink", "components-select-demo-search-box")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/search-box.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-automatic-tokenization")("nzLink", "components-select-demo-automatic-tokenization")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/automatic-tokenization.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-custom-dropdown-menu")("nzLink", "components-select-demo-custom-dropdown-menu")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-dropdown-menu.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-custom-content")("nzLink", "components-select-demo-custom-content")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-content.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-default-value")("nzLink", "components-select-demo-default-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/default-value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-border-less")("nzLink", "components-select-demo-border-less")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/border-less.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_21__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_22__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_22__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoSelectBasicComponent, _multiple__WEBPACK_IMPORTED_MODULE_2__.NzDemoSelectMultipleComponent, _tags__WEBPACK_IMPORTED_MODULE_3__.NzDemoSelectTagsComponent, _coordinate__WEBPACK_IMPORTED_MODULE_4__.NzDemoSelectCoordinateComponent, _label_in_value__WEBPACK_IMPORTED_MODULE_5__.NzDemoSelectLabelInValueComponent, _select_users__WEBPACK_IMPORTED_MODULE_6__.NzDemoSelectSelectUsersComponent, _hide_selected__WEBPACK_IMPORTED_MODULE_7__.NzDemoSelectHideSelectedComponent, _scroll_load__WEBPACK_IMPORTED_MODULE_8__.NzDemoSelectScrollLoadComponent, _big_data__WEBPACK_IMPORTED_MODULE_9__.NzDemoSelectBigDataComponent, _custom_template__WEBPACK_IMPORTED_MODULE_10__.NzDemoSelectCustomTemplateComponent, _search__WEBPACK_IMPORTED_MODULE_11__.NzDemoSelectSearchComponent, _size__WEBPACK_IMPORTED_MODULE_12__.NzDemoSelectSizeComponent, _optgroup__WEBPACK_IMPORTED_MODULE_13__.NzDemoSelectOptgroupComponent, _search_box__WEBPACK_IMPORTED_MODULE_14__.NzDemoSelectSearchBoxComponent, _automatic_tokenization__WEBPACK_IMPORTED_MODULE_15__.NzDemoSelectAutomaticTokenizationComponent, _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_16__.NzDemoSelectCustomDropdownMenuComponent, _custom_content__WEBPACK_IMPORTED_MODULE_17__.NzDemoSelectCustomContentComponent, _default_value__WEBPACK_IMPORTED_MODULE_18__.NzDemoSelectDefaultValueComponent, _border_less__WEBPACK_IMPORTED_MODULE_19__.NzDemoSelectBorderLessComponent], encapsulation: 2 });


/***/ }),

/***/ 84081:
/*!****************************************************!*\
  !*** ./src/app/components/select/hide-selected.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectHideSelectedComponent": () => (/* binding */ NzDemoSelectHideSelectedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function NzDemoSelectHideSelectedComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r1)("nzValue", option_r1)("nzHide", !ctx_r0.isNotSelected(option_r1));
} }
class NzDemoSelectHideSelectedComponent {
    constructor() {
        this.listOfOption = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
        this.listOfSelectedValue = [];
    }
    isNotSelected(value) {
        return this.listOfSelectedValue.indexOf(value) === -1;
    }
}
NzDemoSelectHideSelectedComponent.ɵfac = function NzDemoSelectHideSelectedComponent_Factory(t) { return new (t || NzDemoSelectHideSelectedComponent)(); };
NzDemoSelectHideSelectedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectHideSelectedComponent, selectors: [["nz-demo-select-hide-selected"]], decls: 2, vars: 2, consts: [["nzMode", "multiple", "nzPlaceHolder", "Inserted are removed", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", "nzHide", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue", "nzHide"]], template: function NzDemoSelectHideSelectedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectHideSelectedComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfSelectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectHideSelectedComponent_nz_option_1_Template, 1, 3, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listOfSelectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZGUtc2VsZWN0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsV0FBVztNQUNiIiwiZmlsZSI6ImhpZGUtc2VsZWN0ZWQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 37596:
/*!***************************************************!*\
  !*** ./src/app/components/select/index.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectModule": () => (/* binding */ NzDemoSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 80193);
/* harmony import */ var _automatic_tokenization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./automatic-tokenization */ 43773);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 58165);
/* harmony import */ var _big_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./big-data */ 26913);
/* harmony import */ var _border_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./border-less */ 73871);
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coordinate */ 27267);
/* harmony import */ var _custom_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-content */ 76677);
/* harmony import */ var _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-dropdown-menu */ 97249);
/* harmony import */ var _custom_template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-template */ 63691);
/* harmony import */ var _default_value__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default-value */ 14514);
/* harmony import */ var _hide_selected__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hide-selected */ 84081);
/* harmony import */ var _label_in_value__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./label-in-value */ 38202);
/* harmony import */ var _multiple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./multiple */ 18501);
/* harmony import */ var _optgroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./optgroup */ 88283);
/* harmony import */ var _scroll_load__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scroll-load */ 38422);
/* harmony import */ var _search_box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search-box */ 90210);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search */ 30500);
/* harmony import */ var _select_users__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./select-users */ 63115);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./size */ 67000);
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tags */ 82878);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./zh.component */ 94344);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./en.component */ 90857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);


































class NzDemoSelectModule {
}
NzDemoSelectModule.ɵfac = function NzDemoSelectModule_Factory(t) { return new (t || NzDemoSelectModule)(); };
NzDemoSelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: NzDemoSelectModule });
NzDemoSelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_22__.NzDemoSelectEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_21__.NzDemoSelectZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](NzDemoSelectModule, { declarations: [_automatic_tokenization__WEBPACK_IMPORTED_MODULE_2__.NzDemoSelectAutomaticTokenizationComponent,
        _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoSelectBasicComponent,
        _big_data__WEBPACK_IMPORTED_MODULE_4__.NzDemoSelectBigDataComponent,
        _border_less__WEBPACK_IMPORTED_MODULE_5__.NzDemoSelectBorderLessComponent,
        _coordinate__WEBPACK_IMPORTED_MODULE_6__.NzDemoSelectCoordinateComponent,
        _custom_content__WEBPACK_IMPORTED_MODULE_7__.NzDemoSelectCustomContentComponent,
        _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__.NzDemoSelectCustomDropdownMenuComponent,
        _custom_template__WEBPACK_IMPORTED_MODULE_9__.NzDemoSelectCustomTemplateComponent,
        _default_value__WEBPACK_IMPORTED_MODULE_10__.NzDemoSelectDefaultValueComponent,
        _hide_selected__WEBPACK_IMPORTED_MODULE_11__.NzDemoSelectHideSelectedComponent,
        _label_in_value__WEBPACK_IMPORTED_MODULE_12__.NzDemoSelectLabelInValueComponent,
        _multiple__WEBPACK_IMPORTED_MODULE_13__.NzDemoSelectMultipleComponent,
        _optgroup__WEBPACK_IMPORTED_MODULE_14__.NzDemoSelectOptgroupComponent,
        _scroll_load__WEBPACK_IMPORTED_MODULE_15__.NzDemoSelectScrollLoadComponent,
        _search_box__WEBPACK_IMPORTED_MODULE_16__.NzDemoSelectSearchBoxComponent,
        _search__WEBPACK_IMPORTED_MODULE_17__.NzDemoSelectSearchComponent,
        _select_users__WEBPACK_IMPORTED_MODULE_18__.NzDemoSelectSelectUsersComponent,
        _size__WEBPACK_IMPORTED_MODULE_19__.NzDemoSelectSizeComponent,
        _tags__WEBPACK_IMPORTED_MODULE_20__.NzDemoSelectTagsComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_21__.NzDemoSelectZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_22__.NzDemoSelectEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_26__.NzSpinModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientJsonpModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__.NzSelectModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_29__.NzDividerModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_30__.NzRadioModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_31__.NzIconModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__.NzInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule] }); })();


/***/ }),

/***/ 38202:
/*!*****************************************************!*\
  !*** ./src/app/components/select/label-in-value.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectLabelInValueComponent": () => (/* binding */ NzDemoSelectLabelInValueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function NzDemoSelectLabelInValueComponent_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", option_r1)("nzLabel", option_r1.label);
} }
class NzDemoSelectLabelInValueComponent {
    constructor() {
        this.optionList = [
            { label: 'Lucy', value: 'lucy', age: 20 },
            { label: 'Jack', value: 'jack', age: 22 }
        ];
        this.selectedValue = { label: 'Jack', value: 'jack', age: 22 };
        // tslint:disable-next-line:no-any
        this.compareFn = (o1, o2) => (o1 && o2 ? o1.value === o2.value : o1 === o2);
    }
    log(value) {
        console.log(value);
    }
}
NzDemoSelectLabelInValueComponent.ɵfac = function NzDemoSelectLabelInValueComponent_Factory(t) { return new (t || NzDemoSelectLabelInValueComponent)(); };
NzDemoSelectLabelInValueComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectLabelInValueComponent, selectors: [["nz-demo-select-label-in-value"]], decls: 5, vars: 4, consts: [["nzAllowClear", "", "nzPlaceHolder", "Choose", 3, "ngModel", "compareWith", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function NzDemoSelectLabelInValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectLabelInValueComponent_Template_nz_select_ngModelChange_3_listener($event) { return ctx.selectedValue = $event; })("ngModelChange", function NzDemoSelectLabelInValueComponent_Template_nz_select_ngModelChange_3_listener($event) { return ctx.log($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoSelectLabelInValueComponent_nz_option_4_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The selected option's age is ", ctx.selectedValue == null ? null : ctx.selectedValue.age, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue)("compareWith", ctx.compareFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 120px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVsLWluLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7TUFDZCIsImZpbGUiOiJsYWJlbC1pbi12YWx1ZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 80193:
/*!*********************************************!*\
  !*** ./src/app/components/select/module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);








const moduleList = [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__.NzSpinModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientJsonpModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__.NzDividerModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__.NzRadioModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputModule];


/***/ }),

/***/ 18501:
/*!***********************************************!*\
  !*** ./src/app/components/select/multiple.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectMultipleComponent": () => (/* binding */ NzDemoSelectMultipleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function NzDemoSelectMultipleComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 3);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r3)("nzValue", item_r3);
} }
function NzDemoSelectMultipleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const selectedList_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" and ", selectedList_r4.length, " more selected ");
} }
class NzDemoSelectMultipleComponent {
    constructor() {
        this.listOfOption = [];
        this.listOfSelectedValue = ['a10', 'c12'];
    }
    ngOnInit() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(`${i.toString(36)}${i}`);
        }
        this.listOfOption = children;
    }
}
NzDemoSelectMultipleComponent.ɵfac = function NzDemoSelectMultipleComponent_Factory(t) { return new (t || NzDemoSelectMultipleComponent)(); };
NzDemoSelectMultipleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectMultipleComponent, selectors: [["nz-demo-select-multiple"]], decls: 4, vars: 4, consts: [["nzMode", "multiple", "nzPlaceHolder", "Please select", 3, "nzMaxTagCount", "nzMaxTagPlaceholder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["tagPlaceHolder", ""], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectMultipleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectMultipleComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfSelectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectMultipleComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSelectMultipleComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaxTagCount", 3)("nzMaxTagPlaceholder", _r1)("ngModel", ctx.listOfSelectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFdBQVc7TUFDYiIsImZpbGUiOiJtdWx0aXBsZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 88283:
/*!***********************************************!*\
  !*** ./src/app/components/select/optgroup.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectOptgroupComponent": () => (/* binding */ NzDemoSelectOptgroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoSelectOptgroupComponent {
    constructor() {
        this.selectedValue = 'lucy';
    }
}
NzDemoSelectOptgroupComponent.ɵfac = function NzDemoSelectOptgroupComponent_Factory(t) { return new (t || NzDemoSelectOptgroupComponent)(); };
NzDemoSelectOptgroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectOptgroupComponent, selectors: [["nz-demo-select-optgroup"]], decls: 6, vars: 1, consts: [["nzAllowClear", "", "nzPlaceHolder", "Choose", 3, "ngModel", "ngModelChange"], ["nzLabel", "Manager"], ["nzValue", "jack", "nzLabel", "Jack"], ["nzValue", "lucy", "nzLabel", "Lucy"], ["nzLabel", "Engineer"], ["nzValue", "tom", "nzLabel", "Tom"]], template: function NzDemoSelectOptgroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectOptgroupComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-option-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-option", 2)(3, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-option-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionGroupComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 120px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7TUFDZCIsImZpbGUiOiJvcHRncm91cC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 38422:
/*!**************************************************!*\
  !*** ./src/app/components/select/scroll-load.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectScrollLoadComponent": () => (/* binding */ NzDemoSelectScrollLoadComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/spin */ 82810);







function NzDemoSelectScrollLoadComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 3);
} if (rf & 2) {
    const o_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r3)("nzLabel", o_r3);
} }
function NzDemoSelectScrollLoadComponent_ng_template_2_nz_spin_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spin");
} }
function NzDemoSelectScrollLoadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoSelectScrollLoadComponent_ng_template_2_nz_spin_0_Template, 1, 0, "nz-spin", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
} }
class NzDemoSelectScrollLoadComponent {
    constructor(http) {
        this.http = http;
        this.randomUserUrl = 'https://api.randomuser.me/?results=10';
        this.optionList = [];
        this.selectedUser = null;
        this.isLoading = false;
        // tslint:disable:no-any
        this.getRandomNameList = this.http
            .get(`${this.randomUserUrl}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.results))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((list) => {
            return list.map((item) => `${item.name.first}`);
        }));
    }
    loadMore() {
        this.isLoading = true;
        this.getRandomNameList.subscribe(data => {
            this.isLoading = false;
            this.optionList = [...this.optionList, ...data];
        });
    }
    ngOnInit() {
        this.loadMore();
    }
}
NzDemoSelectScrollLoadComponent.ɵfac = function NzDemoSelectScrollLoadComponent_Factory(t) { return new (t || NzDemoSelectScrollLoadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
NzDemoSelectScrollLoadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectScrollLoadComponent, selectors: [["nz-demo-select-scroll-load"]], decls: 4, vars: 3, consts: [["nzPlaceHolder", "Select users", "nzAllowClear", "", 3, "ngModel", "nzDropdownRender", "ngModelChange", "nzScrollToBottom"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["renderTemplate", ""], [3, "nzValue", "nzLabel"], [4, "ngIf"]], template: function NzDemoSelectScrollLoadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectScrollLoadComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedUser = $event; })("nzScrollToBottom", function NzDemoSelectScrollLoadComponent_Template_nz_select_nzScrollToBottom_0_listener() { return ctx.loadMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectScrollLoadComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSelectScrollLoadComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUser)("nzDropdownRender", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__.NzSpinComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC1sb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFdBQVc7TUFDYiIsImZpbGUiOiJzY3JvbGwtbG9hZC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 90210:
/*!*************************************************!*\
  !*** ./src/app/components/select/search-box.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectSearchBoxComponent": () => (/* binding */ NzDemoSelectSearchBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





function NzDemoSelectSearchBoxComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", o_r1.text)("nzValue", o_r1.value);
} }
class NzDemoSelectSearchBoxComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.selectedValue = null;
        this.listOfOption = [];
        this.nzFilterOption = () => true;
    }
    search(value) {
        this.httpClient
            .jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, 'callback')
            .subscribe(data => {
            const listOfOption = [];
            data.result.forEach(item => {
                listOfOption.push({
                    value: item[0],
                    text: item[0]
                });
            });
            this.listOfOption = listOfOption;
        });
    }
}
NzDemoSelectSearchBoxComponent.ɵfac = function NzDemoSelectSearchBoxComponent_Factory(t) { return new (t || NzDemoSelectSearchBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
NzDemoSelectSearchBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectSearchBoxComponent, selectors: [["nz-demo-select-search-box"]], decls: 2, vars: 4, consts: [["nzShowSearch", "", "nzServerSearch", "", "nzPlaceHolder", "input search text", 3, "ngModel", "nzShowArrow", "nzFilterOption", "ngModelChange", "nzOnSearch"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectSearchBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSearchBoxComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("nzOnSearch", function NzDemoSelectSearchBoxComponent_Template_nz_select_nzOnSearch_0_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectSearchBoxComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue)("nzShowArrow", false)("nzFilterOption", ctx.nzFilterOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtNQUNkIiwiZmlsZSI6InNlYXJjaC1ib3gudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 30500:
/*!*********************************************!*\
  !*** ./src/app/components/select/search.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectSearchComponent": () => (/* binding */ NzDemoSelectSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoSelectSearchComponent {
    constructor() {
        this.selectedValue = null;
    }
}
NzDemoSelectSearchComponent.ɵfac = function NzDemoSelectSearchComponent_Factory(t) { return new (t || NzDemoSelectSearchComponent)(); };
NzDemoSelectSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectSearchComponent, selectors: [["nz-demo-select-search"]], decls: 4, vars: 1, consts: [["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select a person", 3, "ngModel", "ngModelChange"], ["nzLabel", "Jack", "nzValue", "jack"], ["nzLabel", "Lucy", "nzValue", "lucy"], ["nzLabel", "Tom", "nzValue", "tom"]], template: function NzDemoSelectSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSearchComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-option", 1)(2, "nz-option", 2)(3, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO01BQ2QiLCJmaWxlIjoic2VhcmNoLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1zZWxlY3Qge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 63115:
/*!***************************************************!*\
  !*** ./src/app/components/select/select-users.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectSelectUsersComponent": () => (/* binding */ NzDemoSelectSelectUsersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);








function NzDemoSelectSelectUsersComponent_ng_container_1_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 4);
} if (rf & 2) {
    const o_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r2)("nzLabel", o_r2);
} }
function NzDemoSelectSelectUsersComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectSelectUsersComponent_ng_container_1_nz_option_1_Template, 1, 2, "nz-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
} }
function NzDemoSelectSelectUsersComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NzDemoSelectSelectUsersComponent {
    constructor(http) {
        this.http = http;
        this.randomUserUrl = 'https://api.randomuser.me/?results=5';
        this.searchChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.optionList = [];
        this.isLoading = false;
    }
    onSearch(value) {
        this.isLoading = true;
        this.searchChange$.next(value);
    }
    ngOnInit() {
        // tslint:disable:no-any
        const getRandomNameList = (name) => this.http
            .get(`${this.randomUserUrl}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.results))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((list) => {
            return list.map((item) => `${item.name.first} ${name}`);
        }));
        const optionList$ = this.searchChange$
            .asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(500))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(getRandomNameList));
        optionList$.subscribe(data => {
            this.optionList = data;
            this.isLoading = false;
        });
    }
}
NzDemoSelectSelectUsersComponent.ɵfac = function NzDemoSelectSelectUsersComponent_Factory(t) { return new (t || NzDemoSelectSelectUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
NzDemoSelectSelectUsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectSelectUsersComponent, selectors: [["nz-demo-select-select-users"]], decls: 3, vars: 3, consts: [["nzMode", "multiple", "nzPlaceHolder", "Select users", "nzAllowClear", "", "nzShowSearch", "", "nzServerSearch", "", 3, "ngModel", "ngModelChange", "nzOnSearch"], [4, "ngFor", "ngForOf"], ["nzDisabled", "", "nzCustomContent", "", 4, "ngIf"], [3, "nzValue", "nzLabel", 4, "ngIf"], [3, "nzValue", "nzLabel"], ["nzDisabled", "", "nzCustomContent", ""], ["nz-icon", "", "nzType", "loading", 1, "loading-icon"]], template: function NzDemoSelectSelectUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSelectUsersComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedUser = $event; })("nzOnSearch", function NzDemoSelectSelectUsersComponent_Template_nz_select_nzOnSearch_0_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectSelectUsersComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSelectSelectUsersComponent_nz_option_2_Template, 3, 0, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__.NzOptionComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n\n      .loading-icon[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC11c2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxXQUFXO01BQ2I7O01BRUE7UUFDRSxpQkFBaUI7TUFDbkIiLCJmaWxlIjoic2VsZWN0LXVzZXJzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1zZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmxvYWRpbmctaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 67000:
/*!*******************************************!*\
  !*** ./src/app/components/select/size.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectSizeComponent": () => (/* binding */ NzDemoSelectSizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





function NzDemoSelectSizeComponent_nz_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r4.label)("nzValue", option_r4.value);
} }
function NzDemoSelectSizeComponent_nz_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r5.label)("nzValue", option_r5.value);
} }
function NzDemoSelectSizeComponent_nz_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r6.label)("nzValue", option_r6.value);
} }
function NzDemoSelectSizeComponent_nz_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r7.label)("nzValue", option_r7.value);
} }
class NzDemoSelectSizeComponent {
    constructor() {
        this.listOfOption = [];
        this.size = 'default';
        this.singleValue = 'a10';
        this.multipleValue = ['a10', 'c12'];
        this.tagValue = ['a10', 'c12', 'tag'];
    }
    ngOnInit() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        }
        this.listOfOption = children;
    }
}
NzDemoSelectSizeComponent.ɵfac = function NzDemoSelectSizeComponent_Factory(t) { return new (t || NzDemoSelectSizeComponent)(); };
NzDemoSelectSizeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectSizeComponent, selectors: [["nz-demo-select-size"]], decls: 26, vars: 13, consts: [[3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "large"], ["nz-radio-button", "", "nzValue", "default"], ["nz-radio-button", "", "nzValue", "small"], [3, "ngModel", "nzSize", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzShowSearch", "", 3, "ngModel", "nzSize", "ngModelChange"], ["nzMode", "multiple", "nzPlaceHolder", "Please select", 3, "ngModel", "nzSize", "ngModelChange"], ["nzMode", "tags", "nzPlaceHolder", "Please select", 3, "ngModel", "nzSize", "ngModelChange"], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSizeComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3)(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br")(11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSizeComponent_Template_nz_select_ngModelChange_12_listener($event) { return ctx.singleValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NzDemoSelectSizeComponent_nz_option_13_Template, 1, 2, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br")(15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSizeComponent_Template_nz_select_ngModelChange_16_listener($event) { return ctx.singleValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NzDemoSelectSizeComponent_nz_option_17_Template, 1, 2, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br")(19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSizeComponent_Template_nz_select_ngModelChange_20_listener($event) { return ctx.multipleValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NzDemoSelectSizeComponent_nz_option_21_Template, 1, 2, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br")(23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSizeComponent_Template_nz_select_ngModelChange_24_listener($event) { return ctx.tagValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NzDemoSelectSizeComponent_nz_option_25_Template, 1, 2, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.singleValue)("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.singleValue)("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.multipleValue)("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tagValue)("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioButtonDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsV0FBVztNQUNiIiwiZmlsZSI6InNpemUudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 82878:
/*!*******************************************!*\
  !*** ./src/app/components/select/tags.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectTagsComponent": () => (/* binding */ NzDemoSelectTagsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function NzDemoSelectTagsComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r1.label)("nzValue", option_r1.value);
} }
class NzDemoSelectTagsComponent {
    constructor() {
        this.listOfOption = [];
        this.listOfTagOptions = [];
    }
    ngOnInit() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        }
        this.listOfOption = children;
    }
}
NzDemoSelectTagsComponent.ɵfac = function NzDemoSelectTagsComponent_Factory(t) { return new (t || NzDemoSelectTagsComponent)(); };
NzDemoSelectTagsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectTagsComponent, selectors: [["nz-demo-select-tags"]], decls: 2, vars: 2, consts: [["nzMode", "tags", "nzPlaceHolder", "Tag Mode", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectTagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectTagsComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfTagOptions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectTagsComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listOfTagOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsV0FBVztNQUNiIiwiZmlsZSI6InRhZ3MudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 94344:
/*!***************************************************!*\
  !*** ./src/app/components/select/zh.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSelectZhComponent": () => (/* binding */ NzDemoSelectZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 58165);
/* harmony import */ var _multiple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiple */ 18501);
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags */ 82878);
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coordinate */ 27267);
/* harmony import */ var _label_in_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label-in-value */ 38202);
/* harmony import */ var _select_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-users */ 63115);
/* harmony import */ var _hide_selected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hide-selected */ 84081);
/* harmony import */ var _scroll_load__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scroll-load */ 38422);
/* harmony import */ var _big_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./big-data */ 26913);
/* harmony import */ var _custom_template__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-template */ 63691);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search */ 30500);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./size */ 67000);
/* harmony import */ var _optgroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./optgroup */ 88283);
/* harmony import */ var _search_box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-box */ 90210);
/* harmony import */ var _automatic_tokenization__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./automatic-tokenization */ 43773);
/* harmony import */ var _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./custom-dropdown-menu */ 97249);
/* harmony import */ var _custom_content__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./custom-content */ 76677);
/* harmony import */ var _default_value__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./default-value */ 14514);
/* harmony import */ var _border_less__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./border-less */ 73871);



























class NzDemoSelectZhComponent {
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
NzDemoSelectZhComponent.ɵfac = function NzDemoSelectZhComponent_Factory(t) { return new (t || NzDemoSelectZhComponent)(); };
NzDemoSelectZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({ type: NzDemoSelectZhComponent, selectors: [["nz-demo-select"]], viewQuery: function NzDemoSelectZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 876, vars: 64, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-select-demo-basic", "nzTitle", "\u57FA\u672C\u4F7F\u7528"], ["nzHref", "#components-select-demo-search", "nzTitle", "\u5E26\u641C\u7D22\u6846"], ["nzHref", "#components-select-demo-multiple", "nzTitle", "\u591A\u9009"], ["nzHref", "#components-select-demo-size", "nzTitle", "\u4E09\u79CD\u5927\u5C0F"], ["nzHref", "#components-select-demo-tags", "nzTitle", "\u6807\u7B7E"], ["nzHref", "#components-select-demo-optgroup", "nzTitle", "\u5206\u7EC4"], ["nzHref", "#components-select-demo-coordinate", "nzTitle", "\u8054\u52A8"], ["nzHref", "#components-select-demo-search-box", "nzTitle", "\u641C\u7D22\u6846"], ["nzHref", "#components-select-demo-label-in-value", "nzTitle", "\u83B7\u5F97\u9009\u9879\u7684\u5BF9\u8C61"], ["nzHref", "#components-select-demo-automatic-tokenization", "nzTitle", "\u81EA\u52A8\u5206\u8BCD"], ["nzHref", "#components-select-demo-select-users", "nzTitle", "\u641C\u7D22\u7528\u6237"], ["nzHref", "#components-select-demo-custom-dropdown-menu", "nzTitle", "\u6269\u5C55\u83DC\u5355"], ["nzHref", "#components-select-demo-hide-selected", "nzTitle", "\u9690\u85CF\u5DF2\u9009\u62E9\u9009\u9879"], ["nzHref", "#components-select-demo-custom-content", "nzTitle", "\u81EA\u5B9A\u4E49\u4E0B\u62C9\u83DC\u5355\u5185\u5BB9"], ["nzHref", "#components-select-demo-scroll-load", "nzTitle", "\u4E0B\u62C9\u52A0\u8F7D"], ["nzHref", "#components-select-demo-default-value", "nzTitle", "\u9ED8\u8BA4\u6570\u636E"], ["nzHref", "#components-select-demo-big-data", "nzTitle", "\u5927\u91CF\u6570\u636E"], ["nzHref", "#components-select-demo-border-less", "nzTitle", "\u65E0\u8FB9\u6846"], ["nzHref", "#components-select-demo-custom-template", "nzTitle", "\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], ["href", "/components/radio/zh"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C\u4F7F\u7528", "nzSelector", "nz-demo-select-basic", "nzGenerateCommand", "ng g ng-zorro-antd:select-basic <name>", "nzComponentName", "NzDemoSelectBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u591A\u9009", "nzSelector", "nz-demo-select-multiple", "nzGenerateCommand", "ng g ng-zorro-antd:select-multiple <name>", "nzComponentName", "NzDemoSelectMultipleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6807\u7B7E", "nzSelector", "nz-demo-select-tags", "nzGenerateCommand", "ng g ng-zorro-antd:select-tags <name>", "nzComponentName", "NzDemoSelectTagsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u8054\u52A8", "nzSelector", "nz-demo-select-coordinate", "nzGenerateCommand", "ng g ng-zorro-antd:select-coordinate <name>", "nzComponentName", "NzDemoSelectCoordinateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "/components/cascader/zh"], ["nzTitle", "\u83B7\u5F97\u9009\u9879\u7684\u5BF9\u8C61", "nzSelector", "nz-demo-select-label-in-value", "nzGenerateCommand", "ng g ng-zorro-antd:select-label-in-value <name>", "nzComponentName", "NzDemoSelectLabelInValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection"], ["nzTitle", "\u641C\u7D22\u7528\u6237", "nzSelector", "nz-demo-select-select-users", "nzGenerateCommand", "ng g ng-zorro-antd:select-select-users <name>", "nzComponentName", "NzDemoSelectSelectUsersComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9690\u85CF\u5DF2\u9009\u62E9\u9009\u9879", "nzSelector", "nz-demo-select-hide-selected", "nzGenerateCommand", "ng g ng-zorro-antd:select-hide-selected <name>", "nzComponentName", "NzDemoSelectHideSelectedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E0B\u62C9\u52A0\u8F7D", "nzSelector", "nz-demo-select-scroll-load", "nzGenerateCommand", "ng g ng-zorro-antd:select-scroll-load <name>", "nzComponentName", "NzDemoSelectScrollLoadComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5927\u91CF\u6570\u636E", "nzSelector", "nz-demo-select-big-data", "nzGenerateCommand", "ng g ng-zorro-antd:select-big-data <name>", "nzComponentName", "NzDemoSelectBigDataComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E", "nzSelector", "nz-demo-select-custom-template", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-template <name>", "nzComponentName", "NzDemoSelectCustomTemplateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5E26\u641C\u7D22\u6846", "nzSelector", "nz-demo-select-search", "nzGenerateCommand", "ng g ng-zorro-antd:select-search <name>", "nzComponentName", "NzDemoSelectSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E09\u79CD\u5927\u5C0F", "nzSelector", "nz-demo-select-size", "nzGenerateCommand", "ng g ng-zorro-antd:select-size <name>", "nzComponentName", "NzDemoSelectSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5206\u7EC4", "nzSelector", "nz-demo-select-optgroup", "nzGenerateCommand", "ng g ng-zorro-antd:select-optgroup <name>", "nzComponentName", "NzDemoSelectOptgroupComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u641C\u7D22\u6846", "nzSelector", "nz-demo-select-search-box", "nzGenerateCommand", "ng g ng-zorro-antd:select-search-box <name>", "nzComponentName", "NzDemoSelectSearchBoxComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u52A8\u5206\u8BCD", "nzSelector", "nz-demo-select-automatic-tokenization", "nzGenerateCommand", "ng g ng-zorro-antd:select-automatic-tokenization <name>", "nzComponentName", "NzDemoSelectAutomaticTokenizationComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6269\u5C55\u83DC\u5355", "nzSelector", "nz-demo-select-custom-dropdown-menu", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-dropdown-menu <name>", "nzComponentName", "NzDemoSelectCustomDropdownMenuComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u4E0B\u62C9\u83DC\u5355\u5185\u5BB9", "nzSelector", "nz-demo-select-custom-content", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-content <name>", "nzComponentName", "NzDemoSelectCustomContentComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9ED8\u8BA4\u6570\u636E", "nzSelector", "nz-demo-select-default-value", "nzGenerateCommand", "ng g ng-zorro-antd:select-default-value <name>", "nzComponentName", "NzDemoSelectDefaultValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u65E0\u8FB9\u6846", "nzSelector", "nz-demo-select-border-less", "nzGenerateCommand", "ng g ng-zorro-antd:select-border-less <name>", "nzComponentName", "NzDemoSelectBorderLessComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-select"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-select'", 1, "anchor"], ["id", "nz-option"], ["onclick", "window.location.hash = 'nz-option'", 1, "anchor"], ["id", "nz-option-group"], ["onclick", "window.location.hash = 'nz-option-group'", 1, "anchor"], ["id", "\u65B9\u6CD5"], ["onclick", "window.location.hash = '\u65B9\u6CD5'", 1, "anchor"]], template: function NzDemoSelectZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("nzClick", function NzDemoSelectZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13)(15, "nz-link", 14)(16, "nz-link", 15)(17, "nz-link", 16)(18, "nz-link", 17)(19, "nz-link", 18)(20, "nz-link", 19)(21, "nz-link", 20)(22, "nz-link", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](23, "section", 22)(24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](25, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](26, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](27, "\u9009\u62E9\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](28, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](29, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](30, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](31, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](33, "\u4E0B\u62C9\u9009\u62E9\u5668\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](34, "h2", 27)(35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](36, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](37, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](38, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](39, "ul")(40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](41, "\u5F39\u51FA\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u7ED9\u7528\u6237\u9009\u62E9\u64CD\u4F5C\uFF0C\u7528\u4E8E\u4EE3\u66FF\u539F\u751F\u7684\u9009\u62E9\u5668\uFF0C\u6216\u8005\u9700\u8981\u4E00\u4E2A\u66F4\u4F18\u96C5\u7684\u591A\u9009\u5668\u65F6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](43, "\u5F53\u9009\u9879\u5C11\u65F6\uFF08\u5C11\u4E8E 5 \u9879\uFF09\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u5C06\u9009\u9879\u5E73\u94FA\uFF0C\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](44, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](45, "Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](46, " \u662F\u66F4\u597D\u7684\u9009\u62E9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](47, "pre", 30)(48, "code")(49, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](50, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](51, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](52, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](53, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](54, " NzSelectModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](55, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](56, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](57, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](58, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](59, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](60, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](61, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](62, "'ng-zorro-antd/select'");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](63, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](64, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](65, "h2")(66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](67, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](68, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function NzDemoSelectZhComponent_Template_i_click_68_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](69, "div", 35)(70, "div", 36)(71, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](72, "nz-demo-select-basic", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](73, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](75, "\u57FA\u672C\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](76, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](77, "nz-demo-select-multiple", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](78, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](80, "\u591A\u9009\uFF0C\u4ECE\u5DF2\u6709\u6761\u76EE\u4E2D\u9009\u62E9\uFF0C\u4F8B\u5B50\u4E2D\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](82, "nzMaxTagCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](83, " \u9650\u5236\u6700\u591A\u663E\u793A3\u4E2A\u9009\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](84, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](85, "nz-demo-select-tags", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](88, "tags select\uFF0C\u968F\u610F\u8F93\u5165\u7684\u5185\u5BB9\uFF08scroll the menu\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](89, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](90, "nz-demo-select-coordinate", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](91, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](93, "\u7701\u5E02\u8054\u52A8\u662F\u5178\u578B\u7684\u4F8B\u5B50\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](95, "\u63A8\u8350\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](96, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](97, "Cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](98, " \u7EC4\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](99, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](100, "nz-demo-select-label-in-value", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](101, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](102, "p")(103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](104, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](105, " \u53D6\u5230\u7684\u503C\u4E3A\u9009\u4E2D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](107, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](108, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](110, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](111, " \u503C\uFF0C\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](113, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](114, " \u4F20\u5165\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](116, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](117, " \u83B7\u53D6\u7684\u503C\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](119, "compareWith");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](120, " \u7684\u7528\u6CD5\u53C2\u89C1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](121, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](122, "\u8FD9\u91CC");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](123, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](124, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](125, "nz-demo-select-select-users", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](126, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](128, "\u4E00\u4E2A\u5E26\u6709\u8FDC\u7A0B\u641C\u7D22\uFF0C\u8282\u6D41\u63A7\u5236\uFF0C\u8BF7\u6C42\u65F6\u5E8F\u63A7\u5236\uFF0C\u52A0\u8F7D\u72B6\u6001\u7684\u591A\u9009\u793A\u4F8B\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](129, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](130, "nz-demo-select-hide-selected", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](131, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](133, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](135, "nzHide");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](136, " \u9690\u85CF\u4E0B\u62C9\u5217\u8868\u4E2D\u5DF2\u9009\u62E9\u7684\u9009\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](137, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](138, "nz-demo-select-scroll-load", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](139, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](141, "\u4E00\u4E2A\u5E26\u6709\u4E0B\u62C9\u52A0\u8F7D\u8FDC\u7A0B\u6570\u636E\u7684\u4F8B\u5B50\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](142, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](143, "nz-demo-select-big-data", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](144, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](146, "\u7EC4\u4EF6\u4F7F\u7528\u4E86\u865A\u62DF\u6EDA\u52A8\u6280\u672F\uFF0C\u53EF\u4EE5\u540C\u65F6\u5904\u7406\u5927\u91CF\u6570\u636E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](147, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](148, "nz-demo-select-custom-template", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](149, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](151, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](153, "nzCustomTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](154, " \u81EA\u5B9A\u4E49 nz-select \u663E\u793A\u7684\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](155, "div", 36)(156, "nz-code-box", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](157, "nz-demo-select-search", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](158, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](160, "\u5C55\u5F00\u540E\u53EF\u5BF9\u9009\u9879\u8FDB\u884C\u641C\u7D22\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](161, "nz-code-box", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](162, "nz-demo-select-size", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](163, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](165, "\u4E09\u79CD\u5927\u5C0F\u7684\u9009\u62E9\u6846\uFF0C\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](167, "nzSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](168, " \u5206\u522B\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](170, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](171, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](173, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](174, " \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](176, "40px");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](177, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](179, "24px");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](180, " \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](182, "32px");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](183, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](184, "nz-code-box", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](185, "nz-demo-select-optgroup", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](186, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](188, "\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](189, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](190, "nz-option-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](191, " \u8FDB\u884C\u9009\u9879\u5206\u7EC4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](192, "nz-code-box", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](193, "nz-demo-select-search-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](194, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](196, "\u641C\u7D22\u548C\u8FDC\u7A0B\u6570\u636E\u7ED3\u5408\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](197, "nz-code-box", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](198, "nz-demo-select-automatic-tokenization", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](199, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](201, "\u8BD5\u4E0B\u590D\u5236 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](203, "\u9732\u897F,\u6770\u514B");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](204, " \u5230\u8F93\u5165\u6846\u91CC\u3002\u53EA\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u53EF\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](205, "nz-code-box", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](206, "nz-demo-select-custom-dropdown-menu", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](207, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](208, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](209, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](210, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](211, "nzDropdownRender");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](212, " \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](213, "nz-code-box", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](214, "nz-demo-select-custom-content", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](215, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](216, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](217, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](219, "nzCustomContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](220, " \u81EA\u5B9A\u4E49\u4E0B\u62C9\u83DC\u5355\u9009\u9879\u663E\u793A\u7684\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](221, "nz-code-box", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](222, "nz-demo-select-default-value", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](223, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](224, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](225, "\u5F53\u9700\u8981\u663E\u793A\u9ED8\u8BA4\u503C\uFF0C\u540C\u65F6\u9ED8\u8BA4\u503C\u53C8\u4E0D\u5728\u9009\u9879\u5217\u8868\u4E2D\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](227, "nzHide");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](228, " \u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](230, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](231, " \u4E2D\u5C06\u9ED8\u8BA4\u9009\u9879\u9690\u85CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](232, "nz-code-box", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](233, "nz-demo-select-border-less", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](234, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](235, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](236, "\u65E0\u8FB9\u6846\u6837\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](237, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](238, "h2", 61)(239, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](240, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](241, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](242, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](243, "pre", 63)(244, "code")(245, "span", 64)(246, "span", 64)(247, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](248, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](249, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](250, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](251, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](252, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](253, "span", 64)(254, "span", 64)(255, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](256, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](257, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](258, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](259, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](260, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](261, "span", 66)(262, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](263, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](264, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](265, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](266, "lucy");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](267, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](268, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](269, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](270, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](271, "nzLabel");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](272, "span", 66)(273, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](274, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](275, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](276, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](277, "Lucy");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](278, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](279, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](280, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](281, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](282, "span", 64)(283, "span", 64)(284, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](285, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](286, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](287, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](288, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](289, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](290, "span", 64)(291, "span", 64)(292, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](293, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](294, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](295, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](296, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](297, "h3", 67)(298, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](299, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](300, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](301, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](302, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](303, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](304, "table")(305, "thead")(306, "tr")(307, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](308, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](309, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](310, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](311, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](312, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](313, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](314, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](315, "tbody")(316, "tr")(317, "td")(318, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](319, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](320, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](321, "\u5F53\u524D\u9009\u4E2D\u7684 nz-option \u7684 nzValue \u503C\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A\uFF0C\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](323, "nzMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](324, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](325, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](326, "multiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](327, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](329, "tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](330, " \u65F6\uFF0CngModel \u4E3A\u6570\u7EC4");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](331, "td")(332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](333, "any | any[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](335, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](336, "tr")(337, "td")(338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](339, "[compareWith]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](341, "\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](342, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](343, "SelectControlValueAccessor");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](344, " \u76F8\u540C");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](345, "td")(346, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](347, "(o1: any, o2: any) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](348, "td")(349, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](350, "(o1: any, o2: any) => o1===o2");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](351, "tr")(352, "td")(353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](354, "[nzAutoClearSearchValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](356, "\u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](357, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](358, "mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](359, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](360, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](361, "multiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](362, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](363, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](364, "tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](365, " \u65F6\u6709\u6548\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](366, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](367, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](368, "td")(369, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](370, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](371, "tr")(372, "td")(373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](374, "[nzAllowClear]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](376, "\u652F\u6301\u6E05\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](377, "td")(378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](379, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](380, "td")(381, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](382, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](383, "tr")(384, "td")(385, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](386, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](388, "\u4E0B\u62C9\u83DC\u5355\u662F\u5426\u6253\u5F00\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](389, "td")(390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](391, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](392, "td")(393, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](394, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](395, "tr")(396, "td")(397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](398, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](400, "\u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](401, "td")(402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](403, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](404, "td")(405, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](406, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](407, "tr")(408, "td")(409, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](410, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](411, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](412, "\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](413, "td")(414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](415, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](416, "td")(417, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](418, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](419, "tr")(420, "td")(421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](422, "[nzDropdownClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](423, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](424, "\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](425, "td")(426, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](427, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](429, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](430, "tr")(431, "td")(432, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](433, "[nzDropdownMatchSelectWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](435, "\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](436, "td")(437, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](438, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](439, "td")(440, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](441, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](442, "tr")(443, "td")(444, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](445, "[nzDropdownStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](447, "\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](448, "td")(449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](450, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](452, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](453, "tr")(454, "td")(455, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](456, "[nzCustomTemplate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](458, "\u81EA\u5B9A\u4E49\u9009\u62E9\u6846\u7684Template\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](459, "td")(460, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](461, "TemplateRef<{ $implicit: NzOptionComponent }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](463, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](464, "tr")(465, "td")(466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](467, "[nzServerSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](469, "\u662F\u5426\u4F7F\u7528\u670D\u52A1\u7AEF\u641C\u7D22\uFF0C\u5F53\u4E3A true \u65F6\uFF0C\u5C06\u4E0D\u518D\u5728\u524D\u7AEF\u5BF9 nz-option \u8FDB\u884C\u8FC7\u6EE4");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](470, "td")(471, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](472, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](473, "td")(474, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](475, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](476, "tr")(477, "td")(478, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](479, "[nzFilterOption]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](480, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](481, "\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](482, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](483, "inputValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](484, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](485, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](486, " \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](488, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](489, " \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](490, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](491, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](492, "\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](493, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](494, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](495, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](496, "td")(497, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](498, "(input?: string, option?: NzOptionComponent) => boolean;");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](500, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](501, "tr")(502, "td")(503, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](504, "[nzMaxMultipleCount]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](506, "\u6700\u591A\u9009\u4E2D\u591A\u5C11\u4E2A\u6807\u7B7E");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](507, "td")(508, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](509, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](510, "td")(511, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](512, "Infinity");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](513, "tr")(514, "td")(515, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](516, "[nzMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](518, "\u8BBE\u7F6E nz-select \u7684\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](519, "td")(520, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](521, "'multiple' | 'tags' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](522, "td")(523, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](524, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](525, "tr")(526, "td")(527, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](528, "[nzNotFoundContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](529, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](530, "\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](531, "td")(532, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](533, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](535, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](536, "tr")(537, "td")(538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](539, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](540, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](541, "\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](542, "td")(543, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](544, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](545, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](546, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](547, "tr")(548, "td")(549, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](550, "[nzShowArrow]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](551, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](552, "\u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](553, "td")(554, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](555, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](556, "td")(557, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](558, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](559, "tr")(560, "td")(561, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](562, "[nzShowSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](564, "\u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](565, "td")(566, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](567, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](568, "td")(569, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](570, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](571, "tr")(572, "td")(573, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](574, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](575, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](576, "\u9009\u62E9\u6846\u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](577, "td")(578, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](579, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](580, "td")(581, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](582, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](583, "tr")(584, "td")(585, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](586, "[nzSuffixIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](587, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](588, "\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](589, "td")(590, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](591, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](592, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](593, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](594, "tr")(595, "td")(596, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](597, "[nzRemoveIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](598, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](599, "\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](600, "td")(601, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](602, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](603, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](604, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](605, "tr")(606, "td")(607, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](608, "[nzClearIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](609, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](610, "\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](611, "td")(612, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](613, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](614, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](615, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](616, "tr")(617, "td")(618, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](619, "[nzMenuItemSelectedIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](620, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](621, "\u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](622, "td")(623, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](624, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](625, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](626, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](627, "tr")(628, "td")(629, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](630, "[nzTokenSeparators]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](631, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](632, "\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](633, "td")(634, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](635, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](636, "td")(637, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](638, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](639, "tr")(640, "td")(641, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](642, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](643, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](644, "\u52A0\u8F7D\u4E2D\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](645, "td")(646, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](647, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](648, "td")(649, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](650, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](651, "tr")(652, "td")(653, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](654, "[nzMaxTagCount]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](655, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](656, "\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](657, "td")(658, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](659, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](660, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](661, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](662, "tr")(663, "td")(664, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](665, "[nzMaxTagPlaceholder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](666, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](667, "\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](668, "td")(669, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](670, "TemplateRef<{ $implicit: any[] }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](671, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](672, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](673, "tr")(674, "td")(675, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](676, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](677, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](678, "\u9009\u4E2D\u7684 nz-option \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](679, "td")(680, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](681, "EventEmitter<any[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](682, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](683, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](684, "tr")(685, "td")(686, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](687, "(nzOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](688, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](689, "\u4E0B\u62C9\u83DC\u5355\u6253\u5F00\u72B6\u6001\u53D8\u5316\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](690, "td")(691, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](692, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](693, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](694, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](695, "tr")(696, "td")(697, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](698, "(nzScrollToBottom)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](699, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](700, "\u4E0B\u62C9\u5217\u8868\u6EDA\u52A8\u5230\u5E95\u90E8\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](701, "td")(702, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](703, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](704, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](705, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](706, "tr")(707, "td")(708, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](709, "(nzOnSearch)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](710, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](711, "\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](712, "td")(713, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](714, "EventEmitter<string>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](715, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](716, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](717, "tr")(718, "td")(719, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](720, "(nzFocus)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](721, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](722, "focus\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](723, "td")(724, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](725, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](726, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](727, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](728, "tr")(729, "td")(730, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](731, "(nzBlur)");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](732, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](733, "blur\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](734, "td")(735, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](736, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](737, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](738, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](739, "h3", 70)(740, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](741, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](742, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](743, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](744, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](745, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](746, "table")(747, "thead")(748, "tr")(749, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](750, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](751, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](752, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](753, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](754, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](755, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](756, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](757, "tbody")(758, "tr")(759, "td")(760, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](761, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](762, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](763, "\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](764, "td")(765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](766, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](767, "td")(768, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](769, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](770, "tr")(771, "td")(772, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](773, "[nzLabel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](774, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](775, "\u9009\u4E2D\u8BE5 nz-option \u540E\uFF0Cnz-select \u4E2D\u663E\u793A\u7684\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](776, "td")(777, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](778, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](779, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](780, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](781, "tr")(782, "td")(783, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](784, "[nzValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](785, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](786, "nz-select \u4E2D ngModel \u7684\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](787, "td")(788, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](789, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](790, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](791, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](792, "tr")(793, "td")(794, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](795, "[nzHide]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](796, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](797, "\u662F\u5426\u5728\u9009\u9879\u5217\u8868\u4E2D\u9690\u85CF\u6539\u9009\u9879");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](798, "td")(799, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](800, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](801, "td")(802, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](803, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](804, "tr")(805, "td")(806, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](807, "[nzCustomContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](808, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](809, "\u662F\u5426\u81EA\u5B9A\u4E49\u5728\u4E0B\u62C9\u83DC\u5355\u4E2D\u7684Template\u5185\u5BB9\uFF0C\u5F53\u4E3A true \u65F6\uFF0Cnz-option \u5305\u88F9\u7684\u5185\u5BB9\u5C06\u76F4\u63A5\u6E32\u67D3\u5728\u4E0B\u62C9\u83DC\u5355\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](810, "td")(811, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](812, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](813, "td")(814, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](815, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](816, "h3", 72)(817, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](818, "nz-option-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](819, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](820, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](821, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](822, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](823, "table")(824, "thead")(825, "tr")(826, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](827, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](828, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](829, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](830, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](831, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](832, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](833, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](834, "tbody")(835, "tr")(836, "td")(837, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](838, "[nzLabel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](839, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](840, "\u7EC4\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](841, "td")(842, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](843, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](844, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](845, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](846, "h2", 74)(847, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](848, "\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](849, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](850, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](851, "h3", 67)(852, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](853, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](854, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](855, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](856, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](857, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](858, "table")(859, "thead")(860, "tr")(861, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](862, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](863, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](864, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](865, "tbody")(866, "tr")(867, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](868, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](869, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](870, "\u53D6\u6D88\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](871, "tr")(872, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](873, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](874, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](875, "\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-basic")("nzLink", "components-select-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-multiple")("nzLink", "components-select-demo-multiple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/multiple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-tags")("nzLink", "components-select-demo-tags")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/tags.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-coordinate")("nzLink", "components-select-demo-coordinate")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/coordinate.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-label-in-value")("nzLink", "components-select-demo-label-in-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/label-in-value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-select-users")("nzLink", "components-select-demo-select-users")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/select-users.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-hide-selected")("nzLink", "components-select-demo-hide-selected")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/hide-selected.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-scroll-load")("nzLink", "components-select-demo-scroll-load")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/scroll-load.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-big-data")("nzLink", "components-select-demo-big-data")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/big-data.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-custom-template")("nzLink", "components-select-demo-custom-template")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-template.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-search")("nzLink", "components-select-demo-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-size")("nzLink", "components-select-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-optgroup")("nzLink", "components-select-demo-optgroup")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/optgroup.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-search-box")("nzLink", "components-select-demo-search-box")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/search-box.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-automatic-tokenization")("nzLink", "components-select-demo-automatic-tokenization")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/automatic-tokenization.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-custom-dropdown-menu")("nzLink", "components-select-demo-custom-dropdown-menu")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-dropdown-menu.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-custom-content")("nzLink", "components-select-demo-custom-content")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-content.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-default-value")("nzLink", "components-select-demo-default-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/default-value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("nzId", "components-select-demo-border-less")("nzLink", "components-select-demo-border-less")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/border-less.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_21__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_22__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_22__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoSelectBasicComponent, _multiple__WEBPACK_IMPORTED_MODULE_2__.NzDemoSelectMultipleComponent, _tags__WEBPACK_IMPORTED_MODULE_3__.NzDemoSelectTagsComponent, _coordinate__WEBPACK_IMPORTED_MODULE_4__.NzDemoSelectCoordinateComponent, _label_in_value__WEBPACK_IMPORTED_MODULE_5__.NzDemoSelectLabelInValueComponent, _select_users__WEBPACK_IMPORTED_MODULE_6__.NzDemoSelectSelectUsersComponent, _hide_selected__WEBPACK_IMPORTED_MODULE_7__.NzDemoSelectHideSelectedComponent, _scroll_load__WEBPACK_IMPORTED_MODULE_8__.NzDemoSelectScrollLoadComponent, _big_data__WEBPACK_IMPORTED_MODULE_9__.NzDemoSelectBigDataComponent, _custom_template__WEBPACK_IMPORTED_MODULE_10__.NzDemoSelectCustomTemplateComponent, _search__WEBPACK_IMPORTED_MODULE_11__.NzDemoSelectSearchComponent, _size__WEBPACK_IMPORTED_MODULE_12__.NzDemoSelectSizeComponent, _optgroup__WEBPACK_IMPORTED_MODULE_13__.NzDemoSelectOptgroupComponent, _search_box__WEBPACK_IMPORTED_MODULE_14__.NzDemoSelectSearchBoxComponent, _automatic_tokenization__WEBPACK_IMPORTED_MODULE_15__.NzDemoSelectAutomaticTokenizationComponent, _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_16__.NzDemoSelectCustomDropdownMenuComponent, _custom_content__WEBPACK_IMPORTED_MODULE_17__.NzDemoSelectCustomContentComponent, _default_value__WEBPACK_IMPORTED_MODULE_18__.NzDemoSelectDefaultValueComponent, _border_less__WEBPACK_IMPORTED_MODULE_19__.NzDemoSelectBorderLessComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_select_index_module_ts.js.map