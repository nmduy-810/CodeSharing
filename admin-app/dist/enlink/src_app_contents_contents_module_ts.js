"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_contents_contents_module_ts"],{

/***/ 14770:
/*!***************************************************!*\
  !*** ./src/app/contents/about/about.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 38836:
/*!**************************************************************************************!*\
  !*** ./src/app/contents/categories/categories-detail/categories-detail.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesDetailComponent": () => (/* binding */ CategoriesDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services */ 17253);
/* harmony import */ var src_app_shared_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/utilities.service */ 82684);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 84394);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);

















const _c0 = ["content"];
function CategoriesDetailComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Category");
} }
function CategoriesDetailComponent_ng_template_3_div_25_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 20);
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzLabel", item_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzValue", item_r8.id);
} }
function CategoriesDetailComponent_ng_template_3_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "nz-form-item")(2, "nz-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CategoriesDetailComponent_ng_template_3_div_25_nz_option_3_Template, 1, 2, "nz-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.categories$);
} }
function CategoriesDetailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CategoriesDetailComponent_ng_template_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7)(2, "div", 8)(3, "nz-form-item")(4, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-form-control", 9)(7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function CategoriesDetailComponent_ng_template_3_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.generateSlug(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "nz-form-item")(10, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Slug");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-form-control", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8)(15, "nz-form-item")(16, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "nz-form-control", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8)(21, "nz-form-item")(22, "nz-form-control")(23, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoriesDetailComponent_ng_template_3_Template_label_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.checkParent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Have parent?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CategoriesDetailComponent_ng_template_3_div_25_Template, 4, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 8)(27, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.categoryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isParentChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", ctx_r3.isConfirmLoading);
} }
function CategoriesDetailComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CategoriesDetailComponent {
    constructor(categoriesService, utilitiesService, fb) {
        this.categoriesService = categoriesService;
        this.utilitiesService = utilitiesService;
        this.fb = fb;
        this.isVisible = false;
        this.isConfirmLoading = false;
        this.isParentChecked = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.categoryForm = this.fb.group({
            parentCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])),
            slug: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])),
            sortOrder: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])),
            isParent: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false)
        });
    }
    ngOnInit() {
        this.get();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    cancel() {
        this.isVisible = false;
    }
    open() {
        this.clearForm();
        this.isVisible = true;
    }
    get() {
        this.categoriesService.get().subscribe((data) => {
            this.categories$ = data;
        });
    }
    update(id) {
        this.categoriesService.getById(id).subscribe(result => {
            this.updateData = result;
            this.categoryForm.setValue({
                parentCategoryId: this.updateData.parentCategoryId,
                title: this.updateData.title,
                slug: this.updateData.slug,
                sortOrder: this.updateData.sortOrder,
                isParent: this.updateData.isParent
            });
        });
        this.categoryId = id;
        this.open();
    }
    save() {
        this.isConfirmLoading = true;
        if (this.categoryForm.valid) {
            if (this.categoryId == null) {
                this.subscription.add(this.categoriesService.add(this.categoryForm.getRawValue())
                    .subscribe(() => {
                    setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
                }, error => {
                    setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
                }));
            }
            else {
                this.subscription.add(this.categoriesService.update(this.categoryId, this.categoryForm.getRawValue())
                    .subscribe(() => {
                    setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
                }, error => {
                    setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
                }));
            }
        }
        else {
            Object.values(this.categoryForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                    this.isConfirmLoading = false;
                }
            });
        }
    }
    generateSlug() {
        const seoAlias = this.utilitiesService.MakeSeoTitle(this.categoryForm.controls['title'].value);
        this.categoryForm.controls['slug'].setValue(seoAlias);
    }
    clearForm() {
        this.categoryForm.setValue({
            parentCategoryId: null,
            title: '',
            slug: '',
            sortOrder: 0,
            isParent: false
        });
    }
    checkParent() {
        this.isParentChecked = !this.isParentChecked;
    }
}
CategoriesDetailComponent.ɵfac = function CategoriesDetailComponent_Factory(t) { return new (t || CategoriesDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
CategoriesDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CategoriesDetailComponent, selectors: [["app-categories-detail"]], viewQuery: function CategoriesDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.childView = _t.first);
    } }, decls: 11, vars: 4, consts: [[3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-icon", "", "nzType", "form", "nzTheme", "outline"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], ["nzErrorTip", "Please input your title!"], ["nz-input", "", "placeholder", "Ti\u00EAu \u0111\u1EC1 danh m\u1EE5c", "name", "title", "formControlName", "title", 3, "keyup"], ["nzErrorTip", "Please input your slug!"], ["nz-input", "", "placeholder", "\u0110\u01B0\u1EDDng d\u1EABn SEO", "name", "slug", "formControlName", "slug"], ["nzErrorTip", "Please input your sort order!"], ["nz-input", "", "placeholder", "Th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB", "name", "sortOrder", "formControlName", "sortOrder"], ["nz-checkbox", "", "formControlName", "isParent", 3, "click"], ["class", "col-md-12", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Choose a parent category", "formControlName", "parentCategoryId"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], ["nz-button", "", "nzType", "primary"]], template: function CategoriesDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function CategoriesDetailComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function CategoriesDetailComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CategoriesDetailComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CategoriesDetailComponent_ng_template_3_Template, 29, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CategoriesDetailComponent_ng_template_5_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoriesDetailComponent_Template_button_click_7_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzTitle", _r0)("nzContent", _r2)("nzFooter", _r4);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__.NzCheckboxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 74122:
/*!*************************************************************!*\
  !*** ./src/app/contents/categories/categories.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _categories_detail_categories_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories-detail/categories-detail.component */ 38836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/table.service */ 28272);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services */ 17253);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ 84394);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 49871);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 13291);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);

















function CategoriesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 18);
} }
function CategoriesComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSortFn", column_r5.compare);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](column_r5.title);
} }
function CategoriesComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "div", 20)(5, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 22)(16, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_tr_23_Template_a_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const item_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.update(item_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_tr_23_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const item_r6 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.delete(item_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", item_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.sortOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.parentCategoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.isParent);
} }
class CategoriesComponent {
    constructor(tableSvc, categoriesService, modalService) {
        this.tableSvc = tableSvc;
        this.categoriesService = categoriesService;
        this.modalService = modalService;
        // Initialize column table
        this.categoryColumn = [
            {
                title: 'ID',
                compare: (a, b) => a.id - b.id,
            },
            {
                title: 'Title',
                compare: (a, b) => a.title.localeCompare(b.title)
            },
            {
                title: 'Slug',
                compare: (a, b) => a.title.localeCompare(b.title)
            },
            {
                title: 'Sort Order',
                compare: (a, b) => a.title.localeCompare(b.title)
            },
            {
                title: 'Parent Category',
                compare: (a, b) => a.title.localeCompare(b.title)
            },
            {
                title: 'Have Parent',
                compare: (a, b) => a.title.localeCompare(b.title)
            },
            {
                title: ''
            }
        ];
        this.displayData = [];
        this.get();
    }
    ngOnInit() {
    }
    get() {
        this.categoriesService.get().subscribe((res) => {
            this.displayData = this.categories$ = res;
        });
    }
    search() {
        const data = this.categories$;
        this.displayData = this.tableSvc.search(this.searchInput, data);
    }
    update(id) {
        this.childView.update(id);
    }
    delete(id) {
        this.modalService.confirm({
            nzTitle: 'Are you sure delete this category?',
            nzContent: '<b style="color: red;">You wont be able to revert this!</b>',
            nzOkText: 'Yes',
            nzOkType: 'primary',
            nzOkDanger: true,
            nzCancelText: 'No',
            nzOnOk: () => {
                return this.categoriesService.delete(id).subscribe(result => {
                    this.get();
                });
            }
        });
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalService)); };
CategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], viewQuery: function CategoriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_categories_detail_categories_detail_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesDetailComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.childView = _t.first);
    } }, decls: 24, vars: 5, consts: [[1, "row", "m-b-30"], [1, "col-lg-8"], [1, "d-md-flex"], [1, "m-b-10", "m-r-20"], [3, "nzPrefix"], ["type", "text", "nz-input", "", "placeholder", "Search Project", 3, "ngModel", "ngModelChange"], ["prefixTemplate", ""], [1, "m-b-10", "m-r-20", "d-flex", "align-items-center"], ["nzPlaceHolder", "Status", 1, "w-100", 2, "min-width", "220px"], ["nzLabel", "All", "nzValue", "all"], ["nzLabel", "Approved", "nzValue", "approved"], ["nzLabel", "Pending", "nzValue", "pending"], ["nzLabel", "Rejected", "nzValue", "rejected"], [1, "col-lg-4", "text-right"], [3, "nzData"], ["categoriesListTable", ""], [3, "nzSortFn", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search", 1, "opacity-05"], [3, "nzSortFn"], [1, "d-flex", "align-items-center"], [1, "m-l-10", "m-b-0"], [1, "text-md-right"], ["nz-button", "", "nzType", "default", "nzShape", "circle", "nz-tooltip", "", "nzTooltipTitle", "Edit", 1, "m-r-5", 3, "click"], ["nz-icon", "", "nzType", "edit", "theme", "outline"], ["nz-button", "", "nzType", "default", "nzShape", "circle", "nz-tooltip", "", "nzTooltipTitle", "Delete", 3, "click"], ["nz-icon", "", "nzType", "delete", "theme", "outline"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-card")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "nz-input-group", 4)(6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchInput = $event; })("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_6_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CategoriesComponent_ng_template_7_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "nz-option", 9)(12, "nz-option", 10)(13, "nz-option", 11)(14, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-categories-detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-table", 14, 15)(19, "thead")(20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CategoriesComponent_th_21_Template, 2, 2, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CategoriesComponent_tr_23_Template, 20, 6, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPrefix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzData", ctx.displayData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categoryColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r2.data);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzOptionComponent, _categories_detail_categories_detail_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesDetailComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTbodyComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 93246:
/*!*********************************************************!*\
  !*** ./src/app/contents/comments/comments.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsComponent": () => (/* binding */ CommentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CommentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(); };
CommentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 2, vars: 0, template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "comments works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8693:
/*!*******************************************************!*\
  !*** ./src/app/contents/contact/contact.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 0, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 19626:
/*!*****************************************************!*\
  !*** ./src/app/contents/contents-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentsRoutingModule": () => (/* binding */ ContentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 14770);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories/categories.component */ 74122);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments/comments.component */ 93246);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 8693);
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ 84898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '',
        children: [
            {
                path: 'about',
                component: _about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent,
                data: {
                    title: 'About'
                }
            },
            {
                path: 'categories',
                component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesComponent,
                data: {
                    title: 'Categories'
                }
            },
            {
                path: 'comments',
                component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_2__.CommentsComponent,
                data: {
                    title: 'Comments'
                }
            },
            {
                path: 'contact',
                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent,
                data: {
                    title: 'Contact'
                }
            },
            {
                path: 'posts',
                component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__.PostsComponent,
                data: {
                    title: 'Posts'
                }
            }
        ]
    }
];
class ContentsRoutingModule {
}
ContentsRoutingModule.ɵfac = function ContentsRoutingModule_Factory(t) { return new (t || ContentsRoutingModule)(); };
ContentsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ContentsRoutingModule });
ContentsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ContentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 71168:
/*!*********************************************!*\
  !*** ./src/app/contents/contents.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentsModule": () => (/* binding */ ContentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 14770);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact/contact.component */ 8693);
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/posts.component */ 84898);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ 74122);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments/comments.component */ 93246);
/* harmony import */ var _contents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contents-routing.module */ 19626);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 76815);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/badge */ 52559);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 66984);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/card */ 49871);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 35390);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/form */ 98122);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/input */ 60641);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/modal */ 84394);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 98235);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/rate */ 80998);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/select */ 55449);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 13291);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 75445);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tag */ 27902);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 2227);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-quill */ 41588);
/* harmony import */ var _shared_services_apps_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/apps.service */ 53538);
/* harmony import */ var _shared_services_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/table.service */ 28272);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/theme-constant.service */ 87341);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _categories_categories_detail_categories_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categories/categories-detail/categories-detail.component */ 38836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ 3184);








































const antdModule = [
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonModule,
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__.NzCardModule,
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_13__.NzAvatarModule,
    ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_14__.NzRateModule,
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_15__.NzBadgeModule,
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__.NzProgressModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__.NzRadioModule,
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableModule,
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__.NzDropDownModule,
    ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_20__.NzTimelineModule,
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__.NzTabsModule,
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__.NzTagModule,
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_23__.NzListModule,
    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_24__.NzCalendarModule,
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__.NzToolTipModule,
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__.NzFormModule,
    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__.NzModalModule,
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__.NzSelectModule,
    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_29__.NzUploadModule,
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__.NzInputModule,
    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_31__.NzPaginationModule,
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_32__.NzDatePickerModule,
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_33__.NzCheckboxModule,
    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_34__.NzMessageModule
];
class ContentsModule {
}
ContentsModule.ɵfac = function ContentsModule_Factory(t) { return new (t || ContentsModule)(); };
ContentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({ type: ContentsModule });
ContentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({ providers: [
        _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_8__.ThemeConstantService,
        _shared_services_apps_service__WEBPACK_IMPORTED_MODULE_6__.AppsService,
        _shared_services_table_service__WEBPACK_IMPORTED_MODULE_7__.TableService
    ], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule,
            _contents_routing_module__WEBPACK_IMPORTED_MODULE_5__.ContentsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
            ngx_quill__WEBPACK_IMPORTED_MODULE_38__.QuillModule.forRoot(),
            ...antdModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](ContentsModule, { declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent,
        _posts_posts_component__WEBPACK_IMPORTED_MODULE_2__.PostsComponent,
        _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__.CategoriesComponent,
        _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__.CommentsComponent,
        _categories_categories_detail_categories_detail_component__WEBPACK_IMPORTED_MODULE_10__.CategoriesDetailComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule,
        _contents_routing_module__WEBPACK_IMPORTED_MODULE_5__.ContentsRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_38__.QuillModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__.NzCardModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_13__.NzAvatarModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_14__.NzRateModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_15__.NzBadgeModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__.NzProgressModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__.NzRadioModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__.NzDropDownModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_20__.NzTimelineModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__.NzTagModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_23__.NzListModule,
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_24__.NzCalendarModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__.NzToolTipModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__.NzFormModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__.NzModalModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__.NzSelectModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_29__.NzUploadModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__.NzInputModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_31__.NzPaginationModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_32__.NzDatePickerModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_33__.NzCheckboxModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_34__.NzMessageModule] }); })();


/***/ }),

/***/ 84898:
/*!***************************************************!*\
  !*** ./src/app/contents/posts/posts.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsComponent": () => (/* binding */ PostsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PostsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(); };
PostsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 2, vars: 0, template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "posts works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 82684:
/*!******************************************************!*\
  !*** ./src/app/shared/services/utilities.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilitiesService": () => (/* binding */ UtilitiesService)
/* harmony export */ });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ 92365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class UtilitiesService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(http) {
        super();
        this.http = http;
        this.UnflatteringForLeftMenu = (arr) => {
            const map = {};
            const roots = [];
            for (let i = 0; i < arr.length; i++) {
                const node = arr[i];
                node.children = [];
                map[node.id] = i; // use map to look-up the parents
                if (node.parentId !== null) {
                    delete node['children'];
                    arr[map[node.parentId]].children.push(node);
                }
                else {
                    roots.push(node);
                }
            }
            return roots;
        };
        this.UnflatteringForTree = (arr) => {
            const map = {};
            const roots = [];
            let node = {
                data: {
                    id: '',
                    parentId: ''
                },
                expanded: true,
                children: []
            };
            for (let i = 0; i < arr.length; i += 1) {
                map[arr[i].id] = i; // initialize the map
                arr[i].data = arr[i]; // initialize the data
                arr[i].children = []; // initialize the children
            }
            for (let i = 0; i < arr.length; i += 1) {
                node = arr[i];
                if (node.data.parentId !== null && arr[map[node.data.parentId]] != undefined) {
                    arr[map[node.data.parentId]].children.push(node);
                }
                else {
                    roots.push(node);
                }
            }
            return roots;
        };
    }
    MakeSeoTitle(input) {
        if (input == undefined || input == '') {
            return '';
        }
        // Đổi chữ hoa thành chữ thường
        let slug = input.toLowerCase();
        // Đổi ký tự có dấu thành không dấu
        slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        slug = slug.replace(/đ/gi, 'd');
        // Xóa các ký tự đặt biệt
        slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        // Đổi khoảng trắng thành ký tự gạch ngang
        slug = slug.replace(/ /gi, '-');
        // Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        // Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        slug = slug.replace(/\-\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-/gi, '-');
        slug = slug.replace(/\-\-/gi, '-');
        // Xóa các ký tự gạch ngang ở đầu và cuối
        slug = '@' + slug + '@';
        slug = slug.replace(/\@\-|\-\@|\@/gi, '');
        return slug;
    }
    ToFormData(formValue) {
        const formData = new FormData();
        for (const key of Object.keys(formValue)) {
            const value = formValue[key];
            formData.append(key, value);
        }
        return formData;
    }
}
UtilitiesService.ɵfac = function UtilitiesService_Factory(t) { return new (t || UtilitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UtilitiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UtilitiesService, factory: UtilitiesService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_contents_contents_module_ts.js.map