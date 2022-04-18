"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_dropdown_index_module_ts"],{

/***/ 91259:
/*!**********************************************!*\
  !*** ./src/app/components/dropdown/basic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownBasicComponent": () => (/* binding */ NzDemoDropdownBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);





class NzDemoDropdownBasicComponent {
}
NzDemoDropdownBasicComponent.ɵfac = function NzDemoDropdownBasicComponent_Factory(t) { return new (t || NzDemoDropdownBasicComponent)(); };
NzDemoDropdownBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDropdownBasicComponent, selectors: [["nz-demo-dropdown-basic"]], decls: 12, vars: 1, consts: [["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", ""]], template: function NzDemoDropdownBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hover me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 2)(5, "ul", 3)(6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r0);
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownADirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuItemDirective], encapsulation: 2 });


/***/ }),

/***/ 7111:
/*!*****************************************************!*\
  !*** ./src/app/components/dropdown/context-menu.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownContextMenuComponent": () => (/* binding */ NzDemoDropdownContextMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);




class NzDemoDropdownContextMenuComponent {
    constructor(nzContextMenuService) {
        this.nzContextMenuService = nzContextMenuService;
    }
    contextMenu($event, menu) {
        this.nzContextMenuService.create($event, menu);
    }
    closeMenu() {
        this.nzContextMenuService.close();
    }
}
NzDemoDropdownContextMenuComponent.ɵfac = function NzDemoDropdownContextMenuComponent_Factory(t) { return new (t || NzDemoDropdownContextMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzContextMenuService)); };
NzDemoDropdownContextMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDropdownContextMenuComponent, selectors: [["nz-demo-dropdown-context-menu"]], decls: 23, vars: 0, consts: [[1, "context-area", 3, "contextmenu"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], ["nz-menu-item", "", "nzDisabled", ""], ["nz-submenu", "", "nzTitle", "sub menu"], ["nz-submenu", "", "nzDisabled", "", "nzTitle", "disabled sub menu"]], template: function NzDemoDropdownContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function NzDemoDropdownContextMenuComponent_Template_div_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.contextMenu($event, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Right Click on here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-dropdown-menu", null, 1)(4, "ul", 2)(5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "disabled menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5)(12, "ul")(13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "4th menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6)(18, "ul")(19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "4th menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__.NzMenuItemDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__.NzSubMenuComponent], styles: [".context-area[_ngcontent-%COMP%] {\n        background: #f7f7f7;\n        color: #777;\n        text-align: center;\n        height: 200px;\n        line-height: 200px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRleHQtbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2Isa0JBQWtCO01BQ3BCIiwiZmlsZSI6ImNvbnRleHQtbWVudS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmNvbnRleHQtYXJlYSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMDBweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 71850:
/*!********************************************************!*\
  !*** ./src/app/components/dropdown/dropdown-button.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownDropdownButtonComponent": () => (/* binding */ NzDemoDropdownDropdownButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);







class NzDemoDropdownDropdownButtonComponent {
    log() {
        console.log('click dropdown button');
    }
}
NzDemoDropdownDropdownButtonComponent.ɵfac = function NzDemoDropdownDropdownButtonComponent_Factory(t) { return new (t || NzDemoDropdownDropdownButtonComponent)(); };
NzDemoDropdownDropdownButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDropdownDropdownButtonComponent, selectors: [["nz-demo-dropdown-dropdown-button"]], decls: 54, vars: 4, consts: [["nz-button", "", 3, "click"], ["nz-button", "", "nz-dropdown", "", "nzPlacement", "bottomRight", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "ellipsis"], ["nz-icon", "", "nzType", "user"], ["nz-button", "", "disabled", ""], ["nz-button", "", "disabled", "", "nz-dropdown", "", "nzPlacement", "bottomRight", 3, "nzDropdownMenu"], ["nz-button", "", "nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu1", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], ["menu2", "nzDropdownMenu"], ["menu3", "nzDropdownMenu"], ["menu4", "nzDropdownMenu"]], template: function NzDemoDropdownDropdownButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-button-group")(1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDropdownDropdownButtonComponent_Template_button_click_1_listener() { return ctx.log(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DropDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-button-group")(6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDropdownDropdownButtonComponent_Template_button_click_6_listener() { return ctx.log(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DropDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-button-group")(11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "DropDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-dropdown-menu", null, 8)(20, "ul", 9)(21, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "menu1 1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "menu1 2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "menu1 3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-dropdown-menu", null, 11)(29, "ul", 9)(30, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "menu2 1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "menu2 2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "menu2 3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-dropdown-menu", null, 12)(38, "ul", 9)(39, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "menu3 1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "menu3 2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "menu3 3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nz-dropdown-menu", null, 13)(47, "ul", 9)(48, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "menu4 1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "menu4 2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "menu4 3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r3);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__.NzDropdownButtonDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__.NzDropDownDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzMenuItemDirective], styles: ["nz-button-group[_ngcontent-%COMP%] {\n        margin: 0 8px 8px 0;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxtQkFBbUI7TUFDckIiLCJmaWxlIjoiZHJvcGRvd24tYnV0dG9uLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1idXR0b24tZ3JvdXAge1xuICAgICAgICBtYXJnaW46IDAgOHB4IDhweCAwO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 2294:
/*!*****************************************************!*\
  !*** ./src/app/components/dropdown/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownEnComponent": () => (/* binding */ NzDemoDropdownEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 91259);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ 155);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ 76849);
/* harmony import */ var _sub_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-menu */ 98783);
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context-menu */ 7111);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placement */ 38654);
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trigger */ 36000);
/* harmony import */ var _dropdown_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown-button */ 71850);
/* harmony import */ var _overlay_visible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overlay-visible */ 30541);


















class NzDemoDropdownEnComponent {
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
NzDemoDropdownEnComponent.ɵfac = function NzDemoDropdownEnComponent_Factory(t) { return new (t || NzDemoDropdownEnComponent)(); };
NzDemoDropdownEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NzDemoDropdownEnComponent, selectors: [["nz-demo-dropdown"]], viewQuery: function NzDemoDropdownEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 482, vars: 34, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-dropdown-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-dropdown-demo-placement", "nzTitle", "Placement"], ["nzHref", "#components-dropdown-demo-item", "nzTitle", "Other elements"], ["nzHref", "#components-dropdown-demo-trigger", "nzTitle", "Trigger mode"], ["nzHref", "#components-dropdown-demo-event", "nzTitle", "Click event"], ["nzHref", "#components-dropdown-demo-dropdown-button", "nzTitle", "Button with dropdown menu"], ["nzHref", "#components-dropdown-demo-sub-menu", "nzTitle", "Cascading menu"], ["nzHref", "#components-dropdown-demo-overlay-visible", "nzTitle", "The way of hiding menu."], ["nzHref", "#components-dropdown-demo-context-menu", "nzTitle", "Context Menu"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-dropdown-basic", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-basic <name>", "nzComponentName", "NzDemoDropdownBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Other elements", "nzSelector", "nz-demo-dropdown-item", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-item <name>", "nzComponentName", "NzDemoDropdownItemComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Click event", "nzSelector", "nz-demo-dropdown-event", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-event <name>", "nzComponentName", "NzDemoDropdownEventComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Cascading menu", "nzSelector", "nz-demo-dropdown-sub-menu", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-sub-menu <name>", "nzComponentName", "NzDemoDropdownSubMenuComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Context Menu", "nzSelector", "nz-demo-dropdown-context-menu", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-context-menu <name>", "nzComponentName", "NzDemoDropdownContextMenuComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Placement", "nzSelector", "nz-demo-dropdown-placement", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-placement <name>", "nzComponentName", "NzDemoDropdownPlacementComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Trigger mode", "nzSelector", "nz-demo-dropdown-trigger", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-trigger <name>", "nzComponentName", "NzDemoDropdownTriggerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Button with dropdown menu", "nzSelector", "nz-demo-dropdown-dropdown-button", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-dropdown-button <name>", "nzComponentName", "NzDemoDropdownDropdownButtonComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "The way of hiding menu.", "nzSelector", "nz-demo-dropdown-overlay-visible", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-overlay-visible <name>", "nzComponentName", "NzDemoDropdownOverlayVisibleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-dropdown]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-dropdown]'", 1, "anchor"], ["href", "/components/menu/en"], ["id", "nz-dropdown-menu"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-dropdown-menu'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nzcontextmenuservice"], [1, "api-type-label", "service"], ["onclick", "window.location.hash = 'nzcontextmenuservice'", 1, "anchor"]], template: function NzDemoDropdownEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("nzClick", function NzDemoDropdownEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "section", 12)(14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "span", 13)(17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "A dropdown list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "h2", 17)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "If there are too many operations to display, you can wrap them in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, ". By clicking/hovering on the trigger, a dropdown menu should appear, which allows you to choose one option and execute relevant actions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "pre", 19)(34, "code")(35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, " NzDropDownModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "'ng-zorro-antd/dropdown'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "h2")(52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NzDemoDropdownEnComponent_Template_i_click_54_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 24)(56, "div", 25)(57, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](58, "nz-demo-dropdown-basic", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "The most basic dropdown menu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "nz-demo-dropdown-item", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "Divider and disabled menu item.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "nz-demo-dropdown-event", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "An event will be triggered when you click menu items, in which you can make different operations by adding events to item.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](73, "nz-demo-dropdown-sub-menu", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "The menu has multiple levels.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](78, "nz-demo-dropdown-context-menu", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81, "Trigger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, " with contextmenu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 25)(86, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](87, "nz-demo-dropdown-placement", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "Support 6 placements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](92, "nz-demo-dropdown-trigger", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "The default trigger mode is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "hover");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, ", you can change it to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](103, "nz-demo-dropdown-dropdown-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "A button is on the left, and a related functional menu is on the right.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](108, "nz-demo-dropdown-overlay-visible", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](111, "The default is to close the menu when you click on menu items, this feature can be turned off.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "h2", 38)(114, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "h3", 40)(119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120, "[nz-dropdown]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "table")(126, "thead")(127, "tr")(128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](135, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](136, "tbody")(137, "tr")(138, "td")(139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](140, "[nzDropdownMenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, "Dropdown menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "td")(144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145, "NzDropdownMenuComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](147, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "tr")(149, "td")(150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](151, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, "whether the dropdown menu is disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "td")(155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](156, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "tr")(160, "td")(161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](162, "[nzPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](164, "placement of pop menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "td")(166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](167, "'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](168, "td")(169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](170, "'bottomLeft'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "tr")(172, "td")(173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](174, "[nzTrigger]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176, "the trigger mode which executes the drop-down action");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "td")(178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](179, "'click' | 'hover'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](180, "td")(181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](182, "'hover'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "tr")(184, "td")(185, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "[nzClickHide]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](188, "whether hide menu when click");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](189, "td")(190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](191, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](192, "td")(193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](194, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](195, "tr")(196, "td")(197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](198, "[nzVisible]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](200, "whether the dropdown menu is visible, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](201, "td")(202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](203, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](205, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](206, "tr")(207, "td")(208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](209, "[nzBackdrop]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](211, "whether the dropdown has a backdrop when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](213, "nzTrigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](214, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](216, "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](217, "td")(218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](219, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](220, "td")(221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](222, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](223, "tr")(224, "td")(225, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](226, "[nzOverlayClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](228, "Class name of the dropdown root element");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "td")(230, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](231, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](233, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](234, "tr")(235, "td")(236, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](237, "[nzOverlayStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](239, "Style of the dropdown root element");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](240, "td")(241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](242, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](244, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](245, "tr")(246, "td")(247, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](248, "(nzVisibleChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](250, "a callback function takes an argument: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](252, "nzVisible");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](253, ", is executed when the visible state is changed");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](254, "td")(255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](256, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](258, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](259, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](260, "You should use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](261, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](262, "nz-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](263, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](265, "nz-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](266, ". The menu items and dividers are also available by using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](268, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](269, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](271, "nz-menu-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](272, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](273, "blockquote")(274, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](275, "nz-menu of nz-dropdown is unselectable by default, you can make it selectable via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](277, "<ul nz-menu nzSelectable>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](278, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](279, "h3", 44)(280, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](281, "nz-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](282, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](283, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](284, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](285, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](286, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](287, "Wrap Dropdown Menu and pass to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](289, "[nz-dropdown]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](290, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](292, "NzContextMenuService");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](293, ", you can export it via Template Syntax ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](294, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](295, "nzDropdownMenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](296, "blockquote")(297, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](298, "Note\uFF1AEvery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](300, "[nz-dropdown]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](301, " should pass independent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](303, "nz-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](304, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](305, "pre", 47)(306, "code")(307, "span", 48)(308, "span", 48)(309, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](310, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](311, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](312, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](313, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](314, "nz-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](315, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](316, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](317, "[nzDropdownMenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](318, "span", 50)(319, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](320, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](321, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](322, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](323, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](324, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](325, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](326, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](327, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](328, "Hover me");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](329, "span", 48)(330, "span", 48)(331, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](332, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](333, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](334, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](335, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](336, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](337, "span", 48)(338, "span", 48)(339, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](340, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](341, "nz-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](342, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](343, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](344, "#menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](345, "span", 50)(346, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](347, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](348, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](349, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](350, "nzDropdownMenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](351, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](352, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](353, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](354, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](355, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](356, "span", 48)(357, "span", 48)(358, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](359, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](360, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](361, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](362, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](363, "nz-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](364, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](365, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](366, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](367, "span", 48)(368, "span", 48)(369, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](370, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](371, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](372, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](373, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](374, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](375, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](376, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](377, "1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](378, "span", 48)(379, "span", 48)(380, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](381, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](382, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](383, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](384, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](385, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](386, "span", 48)(387, "span", 48)(388, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](389, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](390, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](391, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](392, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](393, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](394, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](395, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](396, "2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](397, "span", 48)(398, "span", 48)(399, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](400, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](401, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](402, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](403, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](404, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](405, "span", 48)(406, "span", 48)(407, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](408, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](409, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](410, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](411, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](412, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](413, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](414, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](415, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](416, "span", 48)(417, "span", 48)(418, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](419, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](420, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](421, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](422, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](423, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](424, "span", 48)(425, "span", 48)(426, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](427, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](428, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](429, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](430, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](431, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](432, "span", 48)(433, "span", 48)(434, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](435, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](436, "nz-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](437, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](438, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](439, "h3", 51)(440, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](441, "NzContextMenuService");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](442, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](443, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](444, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](445, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](446, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](447, "Create dropdown with contextmenu, the detail can be found in the example above");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](448, "table")(449, "thead")(450, "tr")(451, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](452, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](453, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](454, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](455, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](456, "Arguments");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](457, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](458, "Return Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](459, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](460, "tbody")(461, "tr")(462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](463, "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](464, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](465, "create dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](466, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](467, "`($event:MouseEvent");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](469, "{x:number, y:number}, menu:NzDropdownMenuComponent)`");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](470, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](471, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](472, "tr")(473, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](474, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](476, "close dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](478, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](480, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-basic")("nzLink", "components-dropdown-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-item")("nzLink", "components-dropdown-demo-item")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/item.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-event")("nzLink", "components-dropdown-demo-event")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/event.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-sub-menu")("nzLink", "components-dropdown-demo-sub-menu")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/sub-menu.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-context-menu")("nzLink", "components-dropdown-demo-context-menu")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/context-menu.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-placement")("nzLink", "components-dropdown-demo-placement")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/placement.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-trigger")("nzLink", "components-dropdown-demo-trigger")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/trigger.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-dropdown-button")("nzLink", "components-dropdown-demo-dropdown-button")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/dropdown-button.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-overlay-visible")("nzLink", "components-dropdown-demo-overlay-visible")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/overlay-visible.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoDropdownBasicComponent, _item__WEBPACK_IMPORTED_MODULE_2__.NzDemoDropdownItemComponent, _event__WEBPACK_IMPORTED_MODULE_3__.NzDemoDropdownEventComponent, _sub_menu__WEBPACK_IMPORTED_MODULE_4__.NzDemoDropdownSubMenuComponent, _context_menu__WEBPACK_IMPORTED_MODULE_5__.NzDemoDropdownContextMenuComponent, _placement__WEBPACK_IMPORTED_MODULE_6__.NzDemoDropdownPlacementComponent, _trigger__WEBPACK_IMPORTED_MODULE_7__.NzDemoDropdownTriggerComponent, _dropdown_button__WEBPACK_IMPORTED_MODULE_8__.NzDemoDropdownDropdownButtonComponent, _overlay_visible__WEBPACK_IMPORTED_MODULE_9__.NzDemoDropdownOverlayVisibleComponent], encapsulation: 2 });


/***/ }),

/***/ 76849:
/*!**********************************************!*\
  !*** ./src/app/components/dropdown/event.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownEventComponent": () => (/* binding */ NzDemoDropdownEventComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);





class NzDemoDropdownEventComponent {
    log(data) {
        console.log(data);
    }
}
NzDemoDropdownEventComponent.ɵfac = function NzDemoDropdownEventComponent_Factory(t) { return new (t || NzDemoDropdownEventComponent)(); };
NzDemoDropdownEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDropdownEventComponent, selectors: [["nz-demo-dropdown-event"]], decls: 12, vars: 1, consts: [["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"]], template: function NzDemoDropdownEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hover me, Click menu item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 2)(5, "ul", 3)(6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDropdownEventComponent_Template_li_click_6_listener() { return ctx.log("1st menu item"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDropdownEventComponent_Template_li_click_8_listener() { return ctx.log("2nd menu item"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDropdownEventComponent_Template_li_click_10_listener() { return ctx.log("3rd menu item"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r0);
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownADirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuItemDirective], encapsulation: 2 });


/***/ }),

/***/ 3482:
/*!*****************************************************!*\
  !*** ./src/app/components/dropdown/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownModule": () => (/* binding */ NzDemoDropdownModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 55793);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 91259);
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context-menu */ 7111);
/* harmony import */ var _dropdown_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-button */ 71850);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event */ 76849);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item */ 155);
/* harmony import */ var _overlay_visible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overlay-visible */ 30541);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./placement */ 38654);
/* harmony import */ var _sub_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sub-menu */ 98783);
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trigger */ 36000);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zh.component */ 88634);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./en.component */ 2294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);



















class NzDemoDropdownModule {
}
NzDemoDropdownModule.ɵfac = function NzDemoDropdownModule_Factory(t) { return new (t || NzDemoDropdownModule)(); };
NzDemoDropdownModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: NzDemoDropdownModule });
NzDemoDropdownModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoDropdownEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoDropdownZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](NzDemoDropdownModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoDropdownBasicComponent,
        _context_menu__WEBPACK_IMPORTED_MODULE_3__.NzDemoDropdownContextMenuComponent,
        _dropdown_button__WEBPACK_IMPORTED_MODULE_4__.NzDemoDropdownDropdownButtonComponent,
        _event__WEBPACK_IMPORTED_MODULE_5__.NzDemoDropdownEventComponent,
        _item__WEBPACK_IMPORTED_MODULE_6__.NzDemoDropdownItemComponent,
        _overlay_visible__WEBPACK_IMPORTED_MODULE_7__.NzDemoDropdownOverlayVisibleComponent,
        _placement__WEBPACK_IMPORTED_MODULE_8__.NzDemoDropdownPlacementComponent,
        _sub_menu__WEBPACK_IMPORTED_MODULE_9__.NzDemoDropdownSubMenuComponent,
        _trigger__WEBPACK_IMPORTED_MODULE_10__.NzDemoDropdownTriggerComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoDropdownZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoDropdownEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropDownModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 155:
/*!*********************************************!*\
  !*** ./src/app/components/dropdown/item.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownItemComponent": () => (/* binding */ NzDemoDropdownItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);





class NzDemoDropdownItemComponent {
}
NzDemoDropdownItemComponent.ɵfac = function NzDemoDropdownItemComponent_Factory(t) { return new (t || NzDemoDropdownItemComponent)(); };
NzDemoDropdownItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDropdownItemComponent, selectors: [["nz-demo-dropdown-item"]], decls: 13, vars: 1, consts: [["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], ["nz-menu-divider", ""], ["nz-menu-item", "", "nzDisabled", ""]], template: function NzDemoDropdownItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hover me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 2)(5, "ul", 3)(6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3rd menu item\uFF08disabled\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r0);
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownADirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuItemDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuDividerDirective], encapsulation: 2 });


/***/ }),

/***/ 55793:
/*!***********************************************!*\
  !*** ./src/app/components/dropdown/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);



const moduleList = [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_0__.NzDropDownModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule];


/***/ }),

/***/ 30541:
/*!********************************************************!*\
  !*** ./src/app/components/dropdown/overlay-visible.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownOverlayVisibleComponent": () => (/* binding */ NzDemoDropdownOverlayVisibleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);





class NzDemoDropdownOverlayVisibleComponent {
    constructor() {
        this.visible = false;
    }
}
NzDemoDropdownOverlayVisibleComponent.ɵfac = function NzDemoDropdownOverlayVisibleComponent_Factory(t) { return new (t || NzDemoDropdownOverlayVisibleComponent)(); };
NzDemoDropdownOverlayVisibleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDropdownOverlayVisibleComponent, selectors: [["nz-demo-dropdown-overlay-visible"]], decls: 12, vars: 3, consts: [["nz-dropdown", "", 3, "nzDropdownMenu", "nzClickHide", "nzVisible", "nzVisibleChange"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], ["nz-menu-item", "", 3, "click"]], template: function NzDemoDropdownOverlayVisibleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoDropdownOverlayVisibleComponent_Template_a_nzVisibleChange_0_listener($event) { return ctx.visible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hover me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 2)(5, "ul", 3)(6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clicking me will not close the menu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Clicking me will not close the menu also.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDropdownOverlayVisibleComponent_Template_li_click_10_listener() { return ctx.visible = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Clicking me will close the menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r0)("nzClickHide", false)("nzVisible", ctx.visible);
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownADirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuItemDirective], encapsulation: 2 });


/***/ }),

/***/ 38654:
/*!**************************************************!*\
  !*** ./src/app/components/dropdown/placement.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownPlacementComponent": () => (/* binding */ NzDemoDropdownPlacementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);







function NzDemoDropdownPlacementComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 2)(5, "ul", 3)(6, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1st menu item length");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2nd menu item length");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "3rd menu item length");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const position_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r2)("nzPlacement", position_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](position_r1);
} }
class NzDemoDropdownPlacementComponent {
    constructor() {
        this.listOfPosition = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];
    }
}
NzDemoDropdownPlacementComponent.ɵfac = function NzDemoDropdownPlacementComponent_Factory(t) { return new (t || NzDemoDropdownPlacementComponent)(); };
NzDemoDropdownPlacementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDropdownPlacementComponent, selectors: [["nz-demo-dropdown-placement"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["nz-button", "", "nz-dropdown", "", 3, "nzDropdownMenu", "nzPlacement"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""]], template: function NzDemoDropdownPlacementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoDropdownPlacementComponent_ng_container_1_Template, 12, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfPosition);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropdownButtonDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzMenuItemDirective], styles: ["[nz-button][_ngcontent-%COMP%] {\n        margin-right: 8px;\n        margin-bottom: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxpQkFBaUI7UUFDakIsa0JBQWtCO01BQ3BCIiwiZmlsZSI6InBsYWNlbWVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWJ1dHRvbl0ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 98783:
/*!*************************************************!*\
  !*** ./src/app/components/dropdown/sub-menu.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownSubMenuComponent": () => (/* binding */ NzDemoDropdownSubMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);





class NzDemoDropdownSubMenuComponent {
    change(value) {
        console.log(value);
    }
}
NzDemoDropdownSubMenuComponent.ɵfac = function NzDemoDropdownSubMenuComponent_Factory(t) { return new (t || NzDemoDropdownSubMenuComponent)(); };
NzDemoDropdownSubMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDropdownSubMenuComponent, selectors: [["nz-demo-dropdown-sub-menu"]], decls: 22, vars: 1, consts: [["nz-dropdown", "", 3, "nzDropdownMenu", "nzVisibleChange"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], ["nz-submenu", "", "nzTitle", "sub menu"], ["nz-submenu", "", "nzDisabled", "", "nzTitle", "disabled sub menu"]], template: function NzDemoDropdownSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoDropdownSubMenuComponent_Template_a_nzVisibleChange_0_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cascading menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 2)(5, "ul", 3)(6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5)(11, "ul")(12, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4th menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6)(17, "ul")(18, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "4th menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r0);
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownADirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuItemDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzSubMenuComponent], encapsulation: 2 });


/***/ }),

/***/ 36000:
/*!************************************************!*\
  !*** ./src/app/components/dropdown/trigger.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownTriggerComponent": () => (/* binding */ NzDemoDropdownTriggerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);





class NzDemoDropdownTriggerComponent {
}
NzDemoDropdownTriggerComponent.ɵfac = function NzDemoDropdownTriggerComponent_Factory(t) { return new (t || NzDemoDropdownTriggerComponent)(); };
NzDemoDropdownTriggerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDropdownTriggerComponent, selectors: [["nz-demo-dropdown-trigger"]], decls: 25, vars: 1, consts: [["nz-dropdown", "", "nzTrigger", "click", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], ["nz-menu-divider", ""], ["nz-menu-item", "", "nzDisabled", ""], ["nz-submenu", "", "nzTitle", "sub menu"], ["nz-submenu", "", "nzDisabled", "", "nzTitle", "disabled sub menu"]], template: function NzDemoDropdownTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Click me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 2)(5, "ul", 3)(6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "disabled menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7)(14, "ul")(15, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "4th menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8)(20, "ul")(21, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "4th menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r0);
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownADirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuItemDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuDividerDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzSubMenuComponent], encapsulation: 2 });


/***/ }),

/***/ 88634:
/*!*****************************************************!*\
  !*** ./src/app/components/dropdown/zh.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoDropdownZhComponent": () => (/* binding */ NzDemoDropdownZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 91259);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ 155);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ 76849);
/* harmony import */ var _sub_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-menu */ 98783);
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context-menu */ 7111);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placement */ 38654);
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trigger */ 36000);
/* harmony import */ var _dropdown_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown-button */ 71850);
/* harmony import */ var _overlay_visible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overlay-visible */ 30541);


















class NzDemoDropdownZhComponent {
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
NzDemoDropdownZhComponent.ɵfac = function NzDemoDropdownZhComponent_Factory(t) { return new (t || NzDemoDropdownZhComponent)(); };
NzDemoDropdownZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NzDemoDropdownZhComponent, selectors: [["nz-demo-dropdown"]], viewQuery: function NzDemoDropdownZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 467, vars: 34, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-dropdown-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-dropdown-demo-placement", "nzTitle", "\u5F39\u51FA\u4F4D\u7F6E"], ["nzHref", "#components-dropdown-demo-item", "nzTitle", "\u5176\u4ED6\u5143\u7D20"], ["nzHref", "#components-dropdown-demo-trigger", "nzTitle", "\u89E6\u53D1\u65B9\u5F0F"], ["nzHref", "#components-dropdown-demo-event", "nzTitle", "\u89E6\u53D1\u4E8B\u4EF6"], ["nzHref", "#components-dropdown-demo-dropdown-button", "nzTitle", "\u5E26\u4E0B\u62C9\u6846\u7684\u6309\u94AE"], ["nzHref", "#components-dropdown-demo-sub-menu", "nzTitle", "\u591A\u7EA7\u83DC\u5355"], ["nzHref", "#components-dropdown-demo-overlay-visible", "nzTitle", "\u83DC\u5355\u9690\u85CF\u65B9\u5F0F"], ["nzHref", "#components-dropdown-demo-context-menu", "nzTitle", "\u53F3\u952E\u83DC\u5355"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-dropdown-basic", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-basic <name>", "nzComponentName", "NzDemoDropdownBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u5176\u4ED6\u5143\u7D20", "nzSelector", "nz-demo-dropdown-item", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-item <name>", "nzComponentName", "NzDemoDropdownItemComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u89E6\u53D1\u4E8B\u4EF6", "nzSelector", "nz-demo-dropdown-event", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-event <name>", "nzComponentName", "NzDemoDropdownEventComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u591A\u7EA7\u83DC\u5355", "nzSelector", "nz-demo-dropdown-sub-menu", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-sub-menu <name>", "nzComponentName", "NzDemoDropdownSubMenuComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u53F3\u952E\u83DC\u5355", "nzSelector", "nz-demo-dropdown-context-menu", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-context-menu <name>", "nzComponentName", "NzDemoDropdownContextMenuComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5F39\u51FA\u4F4D\u7F6E", "nzSelector", "nz-demo-dropdown-placement", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-placement <name>", "nzComponentName", "NzDemoDropdownPlacementComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u89E6\u53D1\u65B9\u5F0F", "nzSelector", "nz-demo-dropdown-trigger", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-trigger <name>", "nzComponentName", "NzDemoDropdownTriggerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5E26\u4E0B\u62C9\u6846\u7684\u6309\u94AE", "nzSelector", "nz-demo-dropdown-dropdown-button", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-dropdown-button <name>", "nzComponentName", "NzDemoDropdownDropdownButtonComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u83DC\u5355\u9690\u85CF\u65B9\u5F0F", "nzSelector", "nz-demo-dropdown-overlay-visible", "nzGenerateCommand", "ng g ng-zorro-antd:dropdown-overlay-visible <name>", "nzComponentName", "NzDemoDropdownOverlayVisibleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-dropdown]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-dropdown]'", 1, "anchor"], ["href", "/components/menu/zh"], ["id", "nz-dropdown-menu"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-dropdown-menu'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nzcontextmenuservice"], [1, "api-type-label", "service"], ["onclick", "window.location.hash = 'nzcontextmenuservice'", 1, "anchor"]], template: function NzDemoDropdownZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("nzClick", function NzDemoDropdownZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "section", 12)(14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "\u4E0B\u62C9\u83DC\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "\u5411\u4E0B\u5F39\u51FA\u7684\u5217\u8868\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "h2", 17)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "\u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "pre", 19)(32, "code")(33, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, " NzDropDownModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "'ng-zorro-antd/dropdown'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "h2")(50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NzDemoDropdownZhComponent_Template_i_click_52_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 24)(54, "div", 25)(55, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "nz-demo-dropdown-basic", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "\u6700\u7B80\u5355\u7684\u4E0B\u62C9\u83DC\u5355\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "nz-demo-dropdown-item", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "\u5206\u5272\u7EBF\u548C\u4E0D\u53EF\u7528\u83DC\u5355\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "nz-demo-dropdown-event", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "\u70B9\u51FB\u83DC\u5355\u9879\u540E\u4F1A\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u6DFB\u52A0\u5404\u79CD\u4E8B\u4EF6\u8FDB\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "nz-demo-dropdown-sub-menu", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "\u4F20\u5165\u7684\u83DC\u5355\u91CC\u6709\u591A\u4E2A\u5C42\u7EA7\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](76, "nz-demo-dropdown-context-menu", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "\u5728\u533A\u57DF\u5185\u4EFB\u610F\u53F3\u51FB\u89E6\u53D1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "div", 25)(81, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](82, "nz-demo-dropdown-placement", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "\u652F\u6301 6 \u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](87, "nz-demo-dropdown-trigger", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u89E6\u53D1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](92, "nz-demo-dropdown-dropdown-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "\u5DE6\u8FB9\u662F\u6309\u94AE\uFF0C\u53F3\u8FB9\u662F\u989D\u5916\u7684\u76F8\u5173\u529F\u80FD\u83DC\u5355\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](97, "nz-demo-dropdown-overlay-visible", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "\u9ED8\u8BA4\u662F\u70B9\u51FB\u5173\u95ED\u83DC\u5355\uFF0C\u53EF\u4EE5\u5173\u95ED\u6B64\u529F\u80FD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "h2", 38)(103, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "h3", 40)(108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, "[nz-dropdown]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](111, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "table")(115, "thead")(116, "tr")(117, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "tbody")(126, "tr")(127, "td")(128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, "[nzDropdownMenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "Dropdown \u4E0B\u62C9\u83DC\u5355\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "td")(133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, "NzDropdownMenuComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "tr")(138, "td")(139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](140, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, "\u83DC\u5355\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "td")(144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](147, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "tr")(149, "td")(150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](151, "[nzPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, "\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "td")(155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](156, "'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "td")(158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](159, "'bottomLeft'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "tr")(161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163, "[nzTrigger]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](165, "\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "td")(167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, "'click' | 'hover'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "td")(170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](171, "'hover'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](172, "tr")(173, "td")(174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175, "[nzClickHide]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](177, "\u70B9\u51FB\u540E\u662F\u5426\u9690\u85CF\u83DC\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](178, "td")(179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](180, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](183, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "tr")(185, "td")(186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](187, "[nzVisible]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](189, "\u83DC\u5355\u662F\u5426\u663E\u793A\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](190, "td")(191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](192, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](194, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](195, "tr")(196, "td")(197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](198, "[nzBackdrop]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](200, "\u662F\u5426\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](202, "nzTrigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](203, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](205, "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](206, "\u65F6\u589E\u52A0\u80CC\u666F\u8499\u7248");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](207, "td")(208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](209, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](210, "td")(211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](212, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](213, "tr")(214, "td")(215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](216, "[nzOverlayClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](218, "\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "td")(220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](221, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](223, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](224, "tr")(225, "td")(226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](227, "[nzOverlayStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](229, "\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](230, "td")(231, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](232, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](234, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](235, "tr")(236, "td")(237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](238, "(nzVisibleChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](240, "\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A nzVisible");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](241, "td")(242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](243, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](245, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](247, "\u83DC\u5355\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](248, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](249, "nz-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](250, "\uFF0C\u8FD8\u5305\u62EC\u83DC\u5355\u9879 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](252, "[nz-menu-item]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](253, "\uFF0C\u5206\u5272\u7EBF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](255, "[nz-menu-divider]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](256, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](257, "blockquote")(258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](259, "nz-dropdown \u4E0B\u7684 nz-menu \u9ED8\u8BA4\u4E0D\u53EF\u9009\u4E2D\u3002\u5982\u679C\u9700\u8981\u83DC\u5355\u53EF\u9009\u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](260, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](261, "<ul nz-menu nzSelectable>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](262, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](263, "h3", 44)(264, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](265, "nz-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](266, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](267, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](268, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](269, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](271, "\u7528\u4E8E\u5305\u88F9\u83DC\u5355\u9879\uFF0C\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](273, "nzDropdownMenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](274, " \u6A21\u677F\u53D8\u91CF\u5BFC\u51FA\u540E\u4F20\u5165 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](276, "[nz-dropdown]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](277, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](279, "NzContextMenuService");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](280, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](281, "blockquote")(282, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](283, "\u6CE8\u610F\uFF1A\u6BCF\u4E2A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](285, "nz-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](286, " \u53EA\u80FD\u4F5C\u4E3A\u4E00\u4E2A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](288, "[nz-dropdown]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](289, " \u7684\u8F93\u5165\u9879");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](290, "pre", 47)(291, "code")(292, "span", 48)(293, "span", 48)(294, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](295, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](296, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](297, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](298, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](299, "nz-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](300, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](301, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](302, "[nzDropdownMenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](303, "span", 50)(304, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](305, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](306, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](307, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](308, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](309, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](310, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](311, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](312, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](313, "Hover me");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](314, "span", 48)(315, "span", 48)(316, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](317, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](318, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](319, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](320, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](321, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](322, "span", 48)(323, "span", 48)(324, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](325, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](326, "nz-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](327, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](328, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](329, "#menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](330, "span", 50)(331, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](332, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](333, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](334, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](335, "nzDropdownMenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](336, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](337, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](338, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](339, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](340, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](341, "span", 48)(342, "span", 48)(343, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](344, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](345, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](346, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](347, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](348, "nz-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](349, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](350, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](351, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](352, "span", 48)(353, "span", 48)(354, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](355, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](356, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](357, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](358, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](359, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](360, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](361, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](362, "1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](363, "span", 48)(364, "span", 48)(365, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](366, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](367, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](368, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](369, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](370, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](371, "span", 48)(372, "span", 48)(373, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](374, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](375, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](376, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](377, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](378, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](379, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](380, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](381, "2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](382, "span", 48)(383, "span", 48)(384, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](385, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](386, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](387, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](388, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](389, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](390, "span", 48)(391, "span", 48)(392, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](393, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](394, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](395, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](396, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](397, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](398, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](399, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](400, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](401, "span", 48)(402, "span", 48)(403, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](404, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](405, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](406, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](407, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](408, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](409, "span", 48)(410, "span", 48)(411, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](412, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](413, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](414, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](415, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](416, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](417, "span", 48)(418, "span", 48)(419, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](420, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](421, "nz-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](422, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](423, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](424, "h3", 51)(425, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](426, "NzContextMenuService");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](427, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](428, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](429, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](430, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](431, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](432, "\u7528\u4E8E\u53F3\u952E\u5F39\u51FA\u4E0B\u62C9\u83DC\u5355\uFF0C\u5177\u4F53\u53C2\u89C1\u793A\u4F8B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](433, "table")(434, "thead")(435, "tr")(436, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](437, "\u65B9\u6CD5/\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](438, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](439, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](440, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](441, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](442, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](443, "\u8FD4\u56DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](444, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](445, "tbody")(446, "tr")(447, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](448, "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](450, "\u521B\u5EFA\u53F3\u952E\u83DC\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](452, "`($event:MouseEvent");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](454, "{x:number, y:number}, menu:NzDropdownMenuComponent)`");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](455, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](456, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](457, "tr")(458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](459, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](460, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](461, "\u5173\u95ED\u53F3\u952E\u83DC\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](463, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](464, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](465, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](466, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-basic")("nzLink", "components-dropdown-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-item")("nzLink", "components-dropdown-demo-item")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/item.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-event")("nzLink", "components-dropdown-demo-event")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/event.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-sub-menu")("nzLink", "components-dropdown-demo-sub-menu")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/sub-menu.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-context-menu")("nzLink", "components-dropdown-demo-context-menu")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/context-menu.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-placement")("nzLink", "components-dropdown-demo-placement")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/placement.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-trigger")("nzLink", "components-dropdown-demo-trigger")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/trigger.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-dropdown-button")("nzLink", "components-dropdown-demo-dropdown-button")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/dropdown-button.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-dropdown-demo-overlay-visible")("nzLink", "components-dropdown-demo-overlay-visible")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/dropdown/demo/overlay-visible.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoDropdownBasicComponent, _item__WEBPACK_IMPORTED_MODULE_2__.NzDemoDropdownItemComponent, _event__WEBPACK_IMPORTED_MODULE_3__.NzDemoDropdownEventComponent, _sub_menu__WEBPACK_IMPORTED_MODULE_4__.NzDemoDropdownSubMenuComponent, _context_menu__WEBPACK_IMPORTED_MODULE_5__.NzDemoDropdownContextMenuComponent, _placement__WEBPACK_IMPORTED_MODULE_6__.NzDemoDropdownPlacementComponent, _trigger__WEBPACK_IMPORTED_MODULE_7__.NzDemoDropdownTriggerComponent, _dropdown_button__WEBPACK_IMPORTED_MODULE_8__.NzDemoDropdownDropdownButtonComponent, _overlay_visible__WEBPACK_IMPORTED_MODULE_9__.NzDemoDropdownOverlayVisibleComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_dropdown_index_module_ts.js.map