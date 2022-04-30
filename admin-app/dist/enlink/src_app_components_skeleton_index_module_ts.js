"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_skeleton_index_module_ts"],{

/***/ 55843:
/*!***********************************************!*\
  !*** ./src/app/components/skeleton/active.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSkeletonActiveComponent": () => (/* binding */ NzDemoSkeletonActiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);


class NzDemoSkeletonActiveComponent {
}
NzDemoSkeletonActiveComponent.ɵfac = function NzDemoSkeletonActiveComponent_Factory(t) { return new (t || NzDemoSkeletonActiveComponent)(); };
NzDemoSkeletonActiveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSkeletonActiveComponent, selectors: [["nz-demo-skeleton-active"]], decls: 1, vars: 1, consts: [[3, "nzActive"]], template: function NzDemoSkeletonActiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-skeleton", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActive", true);
    } }, directives: [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__.NzSkeletonComponent], encapsulation: 2 });


/***/ }),

/***/ 17134:
/*!**********************************************!*\
  !*** ./src/app/components/skeleton/basic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSkeletonBasicComponent": () => (/* binding */ NzDemoSkeletonBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);


class NzDemoSkeletonBasicComponent {
}
NzDemoSkeletonBasicComponent.ɵfac = function NzDemoSkeletonBasicComponent_Factory(t) { return new (t || NzDemoSkeletonBasicComponent)(); };
NzDemoSkeletonBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSkeletonBasicComponent, selectors: [["nz-demo-skeleton-basic"]], decls: 1, vars: 0, template: function NzDemoSkeletonBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-skeleton");
    } }, directives: [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__.NzSkeletonComponent], encapsulation: 2 });


/***/ }),

/***/ 46743:
/*!*************************************************!*\
  !*** ./src/app/components/skeleton/children.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSkeletonChildrenComponent": () => (/* binding */ NzDemoSkeletonChildrenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoSkeletonChildrenComponent {
    constructor() {
        this.loading = false;
    }
    showSkeleton() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    }
}
NzDemoSkeletonChildrenComponent.ɵfac = function NzDemoSkeletonChildrenComponent_Factory(t) { return new (t || NzDemoSkeletonChildrenComponent)(); };
NzDemoSkeletonChildrenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSkeletonChildrenComponent, selectors: [["nz-demo-skeleton-children"]], decls: 8, vars: 2, consts: [[1, "article"], [3, "nzLoading"], ["nz-button", "", 3, "disabled", "click"]], template: function NzDemoSkeletonChildrenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nz-skeleton", 1)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ant Design, a design language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoSkeletonChildrenComponent_Template_button_click_6_listener() { return ctx.showSkeleton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Show Skeleton ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
    } }, directives: [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__.NzSkeletonComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], styles: [".article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        margin-bottom: 16px;\n      }\n      .article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        margin-top: 16px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkcmVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0UsZ0JBQWdCO01BQ2xCIiwiZmlsZSI6ImNoaWxkcmVuLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuYXJ0aWNsZSBoNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZSBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 61617:
/*!************************************************!*\
  !*** ./src/app/components/skeleton/complex.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSkeletonComplexComponent": () => (/* binding */ NzDemoSkeletonComplexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);


const _c0 = function () { return { rows: 4 }; };
class NzDemoSkeletonComplexComponent {
}
NzDemoSkeletonComplexComponent.ɵfac = function NzDemoSkeletonComplexComponent_Factory(t) { return new (t || NzDemoSkeletonComplexComponent)(); };
NzDemoSkeletonComplexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSkeletonComplexComponent, selectors: [["nz-demo-skeleton-complex"]], decls: 1, vars: 3, consts: [[3, "nzAvatar", "nzParagraph"]], template: function NzDemoSkeletonComplexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-skeleton", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAvatar", true)("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__.NzSkeletonComponent], encapsulation: 2 });


/***/ }),

/***/ 92381:
/*!************************************************!*\
  !*** ./src/app/components/skeleton/element.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSkeletonElementComponent": () => (/* binding */ NzDemoSkeletonElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);






class NzDemoSkeletonElementComponent {
    constructor() {
        this.buttonActive = false;
        this.avatarActive = false;
        this.inputActive = false;
        this.buttonSize = 'default';
        this.avatarSize = 'default';
        this.inputSize = 'default';
        this.buttonShape = 'default';
        this.avatarShape = 'circle';
    }
}
NzDemoSkeletonElementComponent.ɵfac = function NzDemoSkeletonElementComponent_Factory(t) { return new (t || NzDemoSkeletonElementComponent)(); };
NzDemoSkeletonElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSkeletonElementComponent, selectors: [["nz-demo-skeleton-element"]], decls: 65, vars: 19, consts: [["nz-row", "", "nzAlign", "middle", 3, "nzGutter"], ["nz-col", "", "nzSpan", "5"], [3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "9"], ["nz-radio-button", "", "nzValue", "default"], ["nz-radio-button", "", "nzValue", "large"], ["nz-radio-button", "", "nzValue", "small"], ["nz-radio-button", "", "nzValue", "circle"], ["nz-radio-button", "", "nzValue", "round"], ["nzType", "button", 3, "nzActive", "nzSize", "nzShape"], ["nz-radio-button", "", "nzValue", "square"], ["nzType", "avatar", 3, "nzActive", "nzSize", "nzShape"], ["nzType", "input", 2, "width", "300px", 3, "nzActive", "nzSize"]], template: function NzDemoSkeletonElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ButtonActive: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_switch_ngModelChange_3_listener($event) { return ctx.buttonActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ButtonSize: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_radio_group_ngModelChange_6_listener($event) { return ctx.buttonSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " ButtonShape: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_radio_group_ngModelChange_15_listener($event) { return ctx.buttonShape = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Round");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br")(23, "nz-skeleton-element", 9)(24, "br")(25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0)(27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " AvatarActive: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_switch_ngModelChange_29_listener($event) { return ctx.avatarActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " AvatarSize: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_radio_group_ngModelChange_32_listener($event) { return ctx.avatarSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " AvatarShape: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_radio_group_ngModelChange_41_listener($event) { return ctx.avatarShape = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br")(47, "nz-skeleton-element", 11)(48, "br")(49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 0)(51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " InputActive: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nz-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_switch_ngModelChange_53_listener($event) { return ctx.inputActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " InputSize: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_radio_group_ngModelChange_56_listener($event) { return ctx.inputSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br")(64, "nz-skeleton-element", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buttonActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buttonSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buttonShape);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActive", ctx.buttonActive)("nzSize", ctx.buttonSize)("nzShape", ctx.buttonShape);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.avatarActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.avatarSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.avatarShape);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActive", ctx.avatarActive)("nzSize", ctx.avatarSize)("nzShape", ctx.avatarShape);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActive", ctx.inputActive)("nzSize", ctx.inputSize);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioButtonDirective, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__.NzSkeletonElementDirective, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__.NzSkeletonElementButtonComponent, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__.NzSkeletonElementAvatarComponent, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__.NzSkeletonElementInputComponent], encapsulation: 2 });


/***/ }),

/***/ 97885:
/*!*****************************************************!*\
  !*** ./src/app/components/skeleton/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSkeletonEnComponent": () => (/* binding */ NzDemoSkeletonEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 17134);
/* harmony import */ var _complex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complex */ 61617);
/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active */ 55843);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element */ 92381);
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./children */ 46743);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ 59235);















class NzDemoSkeletonEnComponent {
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
NzDemoSkeletonEnComponent.ɵfac = function NzDemoSkeletonEnComponent_Factory(t) { return new (t || NzDemoSkeletonEnComponent)(); };
NzDemoSkeletonEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NzDemoSkeletonEnComponent, selectors: [["nz-demo-skeleton"]], viewQuery: function NzDemoSkeletonEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 436, vars: 22, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-skeleton-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-skeleton-demo-complex", "nzTitle", "Complex combination"], ["nzHref", "#components-skeleton-demo-active", "nzTitle", "Active Animation"], ["nzHref", "#components-skeleton-demo-element", "nzTitle", "Skeleton button, avatar and input"], ["nzHref", "#components-skeleton-demo-children", "nzTitle", "Contains sub component"], ["nzHref", "#components-skeleton-demo-list", "nzTitle", "List Sample"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-skeleton-basic", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-basic <name>", "nzComponentName", "NzDemoSkeletonBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Complex combination", "nzSelector", "nz-demo-skeleton-complex", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-complex <name>", "nzComponentName", "NzDemoSkeletonComplexComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Active Animation", "nzSelector", "nz-demo-skeleton-active", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-active <name>", "nzComponentName", "NzDemoSkeletonActiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Skeleton button, avatar and input", "nzSelector", "nz-demo-skeleton-element", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-element <name>", "nzComponentName", "NzDemoSkeletonElementComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Contains sub component", "nzSelector", "nz-demo-skeleton-children", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-children <name>", "nzComponentName", "NzDemoSkeletonChildrenComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "List Sample", "nzSelector", "nz-demo-skeleton-list", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-list <name>", "nzComponentName", "NzDemoSkeletonListComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-skeleton"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-skeleton'", 1, "anchor"], ["id", "nzskeletonavatar"], ["onclick", "window.location.hash = 'nzskeletonavatar'", 1, "anchor"], ["id", "nzskeletontitle"], ["onclick", "window.location.hash = 'nzskeletontitle'", 1, "anchor"], ["id", "nzskeletonparagraph"], ["onclick", "window.location.hash = 'nzskeletonparagraph'", 1, "anchor"], ["id", "nz-skeleton-element-[nztype=\"button\"]"], ["onclick", "window.location.hash = 'nz-skeleton-element-[nztype=\"button\"]'", 1, "anchor"], ["id", "nz-skeleton-element-[nztype=\"avatar\"]"], ["onclick", "window.location.hash = 'nz-skeleton-element-[nztype=\"avatar\"]'", 1, "anchor"], ["id", "nz-skeleton-element-[nztype=\"input\"]"], ["onclick", "window.location.hash = 'nz-skeleton-element-[nztype=\"input\"]'", 1, "anchor"]], template: function NzDemoSkeletonEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzClick", function NzDemoSkeletonEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "section", 9)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Skeleton");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span", 10)(14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h2", 14)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ul")(26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "When resource need long time loading, like low network speed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "The component contains much information, such as List or Card.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Only works when loading data for the first time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Could be replaced by Spin in any situation, but can provide a better user experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "pre", 16)(35, "code")(36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " NzSkeletonModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "'ng-zorro-antd/skeleton'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "h2")(53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NzDemoSkeletonEnComponent_Template_i_click_55_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 21)(57, "div", 22)(58, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "nz-demo-skeleton-basic", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Basic usage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "nz-demo-skeleton-complex", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Complex combination with avatar and multiple paragraphs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "nz-demo-skeleton-active", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, " Display active animation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "nz-demo-skeleton-element", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Skeleton button, avatar and input.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "nz-demo-skeleton-children", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, " Skeleton contains sub component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "nz-demo-skeleton-list", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "Use skeleton in list component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "h2", 32)(90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "h3", 34)(95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "nz-skeleton");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "table")(102, "thead")(103, "tr")(104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "tbody")(113, "tr")(114, "td")(115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](116, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, "Show animation effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "td")(120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](121, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "td")(123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "tr")(126, "td")(127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](128, "[nzAvatar]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](130, "Show avatar placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "td")(132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, "boolean | NzSkeletonAvatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "td")(135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](136, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "tr")(138, "td")(139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](140, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](142, "Display the skeleton when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](144, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "td")(146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](147, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](149, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "tr")(151, "td")(152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](153, "[nzParagraph]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](155, "Show paragraph placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "td")(157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](158, "boolean | NzSkeletonParagraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](159, "td")(160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](161, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "tr")(163, "td")(164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](167, "Show title placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "td")(169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](170, "boolean | NzSkeletonTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](171, "td")(172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](173, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](174, "h3", 37)(175, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](176, "NzSkeletonAvatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](177, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](178, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](179, "table")(180, "thead")(181, "tr")(182, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](185, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](187, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](188, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](189, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](190, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](191, "tbody")(192, "tr")(193, "td")(194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](195, "size");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](197, "Set the size of avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](199, "`number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](201, "\\ 'large' | 'small' | 'default'`");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](203, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](204, "tr")(205, "td")(206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](207, "shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](209, "Set the shape of avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](210, "td")(211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](212, "'circle' | 'square'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](214, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](216, "h3", 39)(217, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](218, "NzSkeletonTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](219, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](220, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](221, "table")(222, "thead")(223, "tr")(224, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](225, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](226, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](227, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](228, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](229, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](230, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](231, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](232, "tbody")(233, "tr")(234, "td")(235, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](236, "width");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](238, "Set the width of title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](239, "td")(240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](241, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](243, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](244, "h3", 41)(245, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](246, "NzSkeletonParagraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](247, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](248, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](249, "table")(250, "thead")(251, "tr")(252, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](253, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](254, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](255, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](256, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](257, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](258, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](259, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](260, "tbody")(261, "tr")(262, "td")(263, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](264, "rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](266, "Set the row count of paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](267, "td")(268, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](269, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](271, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](272, "tr")(273, "td")(274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](275, "width");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](277, "Set the width of paragraph. When width is an Array, it can set the width of each row. Otherwise only set the last row width");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](278, "td")(279, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](280, "number | string | Array<number | string>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](282, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](283, "h3", 43)(284, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](285, "nz-skeleton-element [nzType=\"button\"]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](286, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](287, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](288, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](289, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](290, "table")(291, "thead")(292, "tr")(293, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](294, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](295, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](296, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](297, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](298, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](299, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](300, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](301, "tbody")(302, "tr")(303, "td")(304, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](305, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](307, "Show animation effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](308, "td")(309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](310, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](311, "td")(312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](313, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](314, "tr")(315, "td")(316, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](317, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](319, "Set the size");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](320, "td")(321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](322, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](323, "td")(324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](325, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](326, "tr")(327, "td")(328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](329, "[nzShape]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](331, "Set the shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](332, "td")(333, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](334, "'circle' | 'round' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](335, "td")(336, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](337, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](338, "h3", 45)(339, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](340, "nz-skeleton-element [nzType=\"avatar\"]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](341, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](342, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](343, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](344, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](345, "table")(346, "thead")(347, "tr")(348, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](349, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](350, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](351, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](352, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](353, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](354, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](355, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](356, "tbody")(357, "tr")(358, "td")(359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](360, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](361, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](362, "Show animation effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](363, "td")(364, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](365, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](366, "td")(367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](368, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](369, "tr")(370, "td")(371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](372, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](374, "Set the size");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](375, "td")(376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](377, "number | 'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](378, "td")(379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](380, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](381, "tr")(382, "td")(383, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](384, "[nzShape]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](386, "Set the shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](387, "td")(388, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](389, "'circle' | 'square'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](390, "td")(391, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](392, "'square'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](393, "h3", 47)(394, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](395, "nz-skeleton-element [nzType=\"input\"]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](396, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](397, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](398, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](399, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](400, "table")(401, "thead")(402, "tr")(403, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](404, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](405, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](406, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](407, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](408, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](409, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](410, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](411, "tbody")(412, "tr")(413, "td")(414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](415, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](416, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](417, "Show animation effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](418, "td")(419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](420, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](421, "td")(422, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](423, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](424, "tr")(425, "td")(426, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](427, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](429, "Set the size");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](430, "td")(431, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](432, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](433, "td")(434, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](435, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-basic")("nzLink", "components-skeleton-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-complex")("nzLink", "components-skeleton-demo-complex")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/complex.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-active")("nzLink", "components-skeleton-demo-active")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/active.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-element")("nzLink", "components-skeleton-demo-element")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/element.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-children")("nzLink", "components-skeleton-demo-children")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/children.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-list")("nzLink", "components-skeleton-demo-list")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/list.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoSkeletonBasicComponent, _complex__WEBPACK_IMPORTED_MODULE_2__.NzDemoSkeletonComplexComponent, _active__WEBPACK_IMPORTED_MODULE_3__.NzDemoSkeletonActiveComponent, _element__WEBPACK_IMPORTED_MODULE_4__.NzDemoSkeletonElementComponent, _children__WEBPACK_IMPORTED_MODULE_5__.NzDemoSkeletonChildrenComponent, _list__WEBPACK_IMPORTED_MODULE_6__.NzDemoSkeletonListComponent], encapsulation: 2 });


/***/ }),

/***/ 72929:
/*!*****************************************************!*\
  !*** ./src/app/components/skeleton/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSkeletonModule": () => (/* binding */ NzDemoSkeletonModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 41966);
/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active */ 55843);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 17134);
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./children */ 46743);
/* harmony import */ var _complex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complex */ 61617);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element */ 92381);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list */ 59235);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zh.component */ 77323);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./en.component */ 97885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);



















class NzDemoSkeletonModule {
}
NzDemoSkeletonModule.ɵfac = function NzDemoSkeletonModule_Factory(t) { return new (t || NzDemoSkeletonModule)(); };
NzDemoSkeletonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: NzDemoSkeletonModule });
NzDemoSkeletonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoSkeletonEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoSkeletonZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](NzDemoSkeletonModule, { declarations: [_active__WEBPACK_IMPORTED_MODULE_2__.NzDemoSkeletonActiveComponent,
        _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoSkeletonBasicComponent,
        _children__WEBPACK_IMPORTED_MODULE_4__.NzDemoSkeletonChildrenComponent,
        _complex__WEBPACK_IMPORTED_MODULE_5__.NzDemoSkeletonComplexComponent,
        _element__WEBPACK_IMPORTED_MODULE_6__.NzDemoSkeletonElementComponent,
        _list__WEBPACK_IMPORTED_MODULE_7__.NzDemoSkeletonListComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoSkeletonZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_9__.NzDemoSkeletonEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_12__.NzSkeletonModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_13__.NzListModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_14__.NzSwitchModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__.NzRadioModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 59235:
/*!*********************************************!*\
  !*** ./src/app/components/skeleton/list.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSkeletonListComponent": () => (/* binding */ NzDemoSkeletonListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);







function NzDemoSkeletonListComponent_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 156");
} }
function NzDemoSkeletonListComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 156");
} }
function NzDemoSkeletonListComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 2");
} }
function NzDemoSkeletonListComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r2.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
} }
function NzDemoSkeletonListComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} }
const _c0 = function () { return []; };
const _c1 = function (a0, a1, a2) { return [a0, a1, a2]; };
function NzDemoSkeletonListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 3)(1, "nz-skeleton", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSkeletonListComponent_ng_template_2_ng_template_2_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoSkeletonListComponent_ng_template_2_ng_template_4_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDemoSkeletonListComponent_ng_template_2_ng_template_6_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-list-item-meta", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzDemoSkeletonListComponent_ng_template_2_ng_template_9_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzDemoSkeletonListComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzContent", ctx_r1.loading ? " " : item_r2.content)("nzActions", ctx_r1.loading ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c1, _r3, _r5, _r7))("nzExtra", ctx_r1.loading ? "" : _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r1.loading)("nzActive", true)("nzAvatar", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAvatar", item_r2.avatar)("nzTitle", _r9)("nzDescription", item_r2.description);
} }
class NzDemoSkeletonListComponent {
    constructor() {
        this.loading = true;
        this.listData = new Array(3).fill({}).map((_i, index) => {
            return {
                href: 'http://ng.ant.design',
                title: `ant design part ${index}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources ' +
                    '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
            };
        });
    }
}
NzDemoSkeletonListComponent.ɵfac = function NzDemoSkeletonListComponent_Factory(t) { return new (t || NzDemoSkeletonListComponent)(); };
NzDemoSkeletonListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSkeletonListComponent, selectors: [["nz-demo-skeleton-list"]], decls: 4, vars: 4, consts: [[3, "ngModel", "ngModelChange"], [3, "nzDataSource", "nzRenderItem", "nzItemLayout"], ["item", ""], [3, "nzContent", "nzActions", "nzExtra"], [3, "nzLoading", "nzActive", "nzAvatar"], ["starAction", ""], ["likeAction", ""], ["msgAction", ""], [3, "nzAvatar", "nzTitle", "nzDescription"], ["nzTitle", ""], ["extra", ""], ["nz-icon", "", "nzType", "star-o", 2, "margin-right", "8px"], ["nz-icon", "", "nzType", "like-o", 2, "margin-right", "8px"], ["nz-icon", "", "nzType", "message", 2, "margin-right", "8px"], [3, "href"], ["width", "272", "alt", "logo", "src", "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"]], template: function NzDemoSkeletonListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonListComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.loading = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSkeletonListComponent_ng_template_2_Template, 13, 14, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx.listData)("nzRenderItem", _r0)("nzItemLayout", "vertical");
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemComponent, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_4__.NzSkeletonComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemMetaComponent], encapsulation: 2 });


/***/ }),

/***/ 41966:
/*!***********************************************!*\
  !*** ./src/app/components/skeleton/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 66153);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);






const moduleList = [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_0__.NzSkeletonModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__.NzSwitchModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__.NzRadioModule];


/***/ }),

/***/ 77323:
/*!*****************************************************!*\
  !*** ./src/app/components/skeleton/zh.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoSkeletonZhComponent": () => (/* binding */ NzDemoSkeletonZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 17134);
/* harmony import */ var _complex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complex */ 61617);
/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active */ 55843);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element */ 92381);
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./children */ 46743);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ 59235);















class NzDemoSkeletonZhComponent {
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
NzDemoSkeletonZhComponent.ɵfac = function NzDemoSkeletonZhComponent_Factory(t) { return new (t || NzDemoSkeletonZhComponent)(); };
NzDemoSkeletonZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NzDemoSkeletonZhComponent, selectors: [["nz-demo-skeleton"]], viewQuery: function NzDemoSkeletonZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 435, vars: 22, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-skeleton-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-skeleton-demo-complex", "nzTitle", "\u590D\u6742\u7684\u7EC4\u5408"], ["nzHref", "#components-skeleton-demo-active", "nzTitle", "\u52A8\u753B\u6548\u679C"], ["nzHref", "#components-skeleton-demo-element", "nzTitle", "\u9AA8\u67B6\u6309\u94AE\u3001\u5934\u50CF\u548C\u8F93\u5165\u6846\u3002"], ["nzHref", "#components-skeleton-demo-children", "nzTitle", "\u5305\u542B\u5B50\u7EC4\u4EF6"], ["nzHref", "#components-skeleton-demo-list", "nzTitle", "\u5217\u8868\u6837\u4F8B"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-skeleton-basic", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-basic <name>", "nzComponentName", "NzDemoSkeletonBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u590D\u6742\u7684\u7EC4\u5408", "nzSelector", "nz-demo-skeleton-complex", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-complex <name>", "nzComponentName", "NzDemoSkeletonComplexComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u52A8\u753B\u6548\u679C", "nzSelector", "nz-demo-skeleton-active", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-active <name>", "nzComponentName", "NzDemoSkeletonActiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9AA8\u67B6\u6309\u94AE\u3001\u5934\u50CF\u548C\u8F93\u5165\u6846\u3002", "nzSelector", "nz-demo-skeleton-element", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-element <name>", "nzComponentName", "NzDemoSkeletonElementComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5305\u542B\u5B50\u7EC4\u4EF6", "nzSelector", "nz-demo-skeleton-children", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-children <name>", "nzComponentName", "NzDemoSkeletonChildrenComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5217\u8868\u6837\u4F8B", "nzSelector", "nz-demo-skeleton-list", "nzGenerateCommand", "ng g ng-zorro-antd:skeleton-list <name>", "nzComponentName", "NzDemoSkeletonListComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-skeleton"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-skeleton'", 1, "anchor"], ["id", "nzskeletonavatar"], ["onclick", "window.location.hash = 'nzskeletonavatar'", 1, "anchor"], ["id", "nzskeletontitle"], ["onclick", "window.location.hash = 'nzskeletontitle'", 1, "anchor"], ["id", "nzskeletonparagraph"], ["onclick", "window.location.hash = 'nzskeletonparagraph'", 1, "anchor"], ["id", "nz-skeleton-element-[nztype=\"button\"]"], ["onclick", "window.location.hash = 'nz-skeleton-element-[nztype=\"button\"]'", 1, "anchor"], ["id", "nz-skeleton-element-[nztype=\"avatar\"]"], ["onclick", "window.location.hash = 'nz-skeleton-element-[nztype=\"avatar\"]'", 1, "anchor"], ["id", "nz-skeleton-element-[nztype=\"input\"]"], ["onclick", "window.location.hash = 'nz-skeleton-element-[nztype=\"input\"]'", 1, "anchor"]], template: function NzDemoSkeletonZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzClick", function NzDemoSkeletonZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "section", 9)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Skeleton");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u9AA8\u67B6\u5C4F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\u5728\u9700\u8981\u7B49\u5F85\u52A0\u8F7D\u5185\u5BB9\u7684\u4F4D\u7F6E\u63D0\u4F9B\u4E00\u4E2A\u5360\u4F4D\u56FE\u5F62\u7EC4\u5408\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "h2", 14)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ul")(27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\u7F51\u7EDC\u8F83\u6162\uFF0C\u9700\u8981\u957F\u65F6\u95F4\u7B49\u5F85\u52A0\u8F7D\u5904\u7406\u7684\u60C5\u51B5\u4E0B\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\u56FE\u6587\u4FE1\u606F\u5185\u5BB9\u8F83\u591A\u7684\u5217\u8868/\u5361\u7247\u4E2D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "\u53EA\u9002\u5408\u7528\u5728\u7B2C\u4E00\u6B21\u52A0\u8F7D\u6570\u636E\u7684\u573A\u666F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "\u53EF\u4EE5\u88AB Spin \u5B8C\u5168\u4EE3\u66FF\uFF0C\u4F46\u662F\u5728\u53EF\u7528\u7684\u573A\u666F\u4E0B\u53EF\u4EE5\u6BD4 Spin \u63D0\u4F9B\u66F4\u597D\u7684\u89C6\u89C9\u6548\u679C\u548C\u7528\u6237\u4F53\u9A8C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "pre", 16)(36, "code")(37, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " NzSkeletonModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "'ng-zorro-antd/skeleton'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "h2")(54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NzDemoSkeletonZhComponent_Template_i_click_56_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 21)(58, "div", 22)(59, "nz-code-box", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "nz-demo-skeleton-basic", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "nz-demo-skeleton-complex", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "\u66F4\u590D\u6742\u7684\u7EC4\u5408\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "nz-demo-skeleton-active", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, " \u663E\u793A\u52A8\u753B\u6548\u679C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "nz-demo-skeleton-element", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "\u9AA8\u67B6\u6309\u94AE\u3001\u5934\u50CF\u548C\u8F93\u5165\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](80, "nz-demo-skeleton-children", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, " \u52A0\u8F7D\u5360\u4F4D\u56FE\u5305\u542B\u5B50\u7EC4\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](85, "nz-demo-skeleton-list", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "\u5728\u5217\u8868\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u52A0\u8F7D\u5360\u4F4D\u7B26\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "h2", 32)(91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "h3", 34)(96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "nz-skeleton");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "table")(103, "thead")(104, "tr")(105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "tbody")(114, "tr")(115, "td")(116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119, "\u662F\u5426\u5C55\u793A\u52A8\u753B\u6548\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "td")(121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "td")(124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](125, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "tr")(127, "td")(128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](129, "[nzAvatar]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "\u662F\u5426\u663E\u793A\u5934\u50CF\u5360\u4F4D\u56FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "td")(133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](134, "boolean | NzSkeletonAvatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "td")(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "tr")(139, "td")(140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](141, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](143, "\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](145, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](146, " \u65F6\uFF0C\u663E\u793A\u5360\u4F4D\u56FE\u3002\u53CD\u4E4B\u5219\u76F4\u63A5\u5C55\u793A\u5B50\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "td")(148, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](149, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "tr")(153, "td")(154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](155, "[nzParagraph]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](157, "\u662F\u5426\u663E\u793A\u6BB5\u843D\u5360\u4F4D\u56FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "td")(159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](160, "boolean | NzSkeletonParagraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "tr")(165, "td")(166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](167, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](169, "\u662F\u5426\u663E\u793A\u6807\u9898\u5360\u4F4D\u56FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "td")(171, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](172, "boolean | NzSkeletonTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "td")(174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](175, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](176, "h3", 37)(177, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](178, "NzSkeletonAvatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](179, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](180, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "table")(182, "thead")(183, "tr")(184, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](185, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](187, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](188, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](189, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](190, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](191, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](192, "tbody")(193, "tr")(194, "td")(195, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](196, "size");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](198, "\u8BBE\u7F6E\u5934\u50CF\u5360\u4F4D\u56FE\u7684\u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](199, "td")(200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](201, "number | 'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](203, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](204, "tr")(205, "td")(206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](207, "shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](209, "\u6307\u5B9A\u5934\u50CF\u7684\u5F62\u72B6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](210, "td")(211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](212, "'circle' | 'square'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](214, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](215, "h3", 39)(216, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](217, "NzSkeletonTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](218, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](219, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](220, "table")(221, "thead")(222, "tr")(223, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](224, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](225, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](226, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](227, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](228, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](229, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](230, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](231, "tbody")(232, "tr")(233, "td")(234, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](235, "width");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](237, "\u8BBE\u7F6E\u6807\u9898\u5360\u4F4D\u56FE\u7684\u5BBD\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](238, "td")(239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](240, "number | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](242, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](243, "h3", 41)(244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](245, "NzSkeletonParagraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](246, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](247, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](248, "table")(249, "thead")(250, "tr")(251, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](252, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](253, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](254, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](255, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](256, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](257, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](258, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](259, "tbody")(260, "tr")(261, "td")(262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](263, "rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](265, "\u8BBE\u7F6E\u6BB5\u843D\u5360\u4F4D\u56FE\u7684\u884C\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](266, "td")(267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](268, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](270, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](271, "tr")(272, "td")(273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](274, "width");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](276, "\u8BBE\u7F6E\u6807\u9898\u5360\u4F4D\u56FE\u7684\u5BBD\u5EA6\uFF0C\u82E5\u4E3A\u6570\u7EC4\u65F6\u5219\u4E3A\u5BF9\u5E94\u7684\u6BCF\u884C\u5BBD\u5EA6\uFF0C\u53CD\u4E4B\u5219\u662F\u6700\u540E\u4E00\u884C\u7684\u5BBD\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](277, "td")(278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](279, "number | string | Array<number | string>");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](281, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](282, "h3", 43)(283, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](284, "nz-skeleton-element [nzType=\"button\"]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](285, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](286, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](287, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](288, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](289, "table")(290, "thead")(291, "tr")(292, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](293, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](294, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](295, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](296, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](297, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](298, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](299, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](300, "tbody")(301, "tr")(302, "td")(303, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](304, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](306, "\u662F\u5426\u5C55\u793A\u52A8\u753B\u6548\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](307, "td")(308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](309, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](310, "td")(311, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](312, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](313, "tr")(314, "td")(315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](316, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](318, "\u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](319, "td")(320, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](321, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](322, "td")(323, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](324, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](325, "tr")(326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](328, "[nzShape]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](330, "\u5F62\u72B6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](331, "td")(332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](333, "'circle' | 'round' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](334, "td")(335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](336, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](337, "h3", 45)(338, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](339, "nz-skeleton-element [nzType=\"avatar\"]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](340, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](341, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](342, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](343, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](344, "table")(345, "thead")(346, "tr")(347, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](348, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](349, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](350, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](351, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](352, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](353, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](354, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](355, "tbody")(356, "tr")(357, "td")(358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](359, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](361, "\u662F\u5426\u5C55\u793A\u52A8\u753B\u6548\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](362, "td")(363, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](364, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](365, "td")(366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](367, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](368, "tr")(369, "td")(370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](371, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](372, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](373, "\u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](374, "td")(375, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](376, "number | 'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](377, "td")(378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](379, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](380, "tr")(381, "td")(382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](383, "[nzShape]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](385, "\u5F62\u72B6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](386, "td")(387, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](388, "'circle' | 'square'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](389, "td")(390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](391, "'square'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](392, "h3", 47)(393, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](394, "nz-skeleton-element [nzType=\"input\"]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](395, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](396, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](397, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](398, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](399, "table")(400, "thead")(401, "tr")(402, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](403, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](404, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](405, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](406, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](407, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](408, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](409, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](410, "tbody")(411, "tr")(412, "td")(413, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](414, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](416, "\u662F\u5426\u5C55\u793A\u52A8\u753B\u6548\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](417, "td")(418, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](419, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](420, "td")(421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](422, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](423, "tr")(424, "td")(425, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](426, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](428, "\u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](429, "td")(430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](431, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](432, "td")(433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](434, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-basic")("nzLink", "components-skeleton-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-complex")("nzLink", "components-skeleton-demo-complex")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/complex.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-active")("nzLink", "components-skeleton-demo-active")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/active.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-element")("nzLink", "components-skeleton-demo-element")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/element.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-children")("nzLink", "components-skeleton-demo-children")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/children.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzId", "components-skeleton-demo-list")("nzLink", "components-skeleton-demo-list")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/list.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_9__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoSkeletonBasicComponent, _complex__WEBPACK_IMPORTED_MODULE_2__.NzDemoSkeletonComplexComponent, _active__WEBPACK_IMPORTED_MODULE_3__.NzDemoSkeletonActiveComponent, _element__WEBPACK_IMPORTED_MODULE_4__.NzDemoSkeletonElementComponent, _children__WEBPACK_IMPORTED_MODULE_5__.NzDemoSkeletonChildrenComponent, _list__WEBPACK_IMPORTED_MODULE_6__.NzDemoSkeletonListComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_skeleton_index_module_ts.js.map