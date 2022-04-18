"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_calendar_index_module_ts"],{

/***/ 52105:
/*!**********************************************!*\
  !*** ./src/app/components/calendar/basic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCalendarBasicComponent": () => (/* binding */ NzDemoCalendarBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 66984);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class NzDemoCalendarBasicComponent {
    constructor() {
        this.date = new Date(2012, 11, 21);
        this.mode = 'month';
    }
    panelChange(change) {
        console.log(change.date, change.mode);
    }
}
NzDemoCalendarBasicComponent.ɵfac = function NzDemoCalendarBasicComponent_Factory(t) { return new (t || NzDemoCalendarBasicComponent)(); };
NzDemoCalendarBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCalendarBasicComponent, selectors: [["nz-demo-calendar-basic"]], decls: 1, vars: 2, consts: [[3, "ngModel", "nzMode", "ngModelChange", "nzModeChange", "nzPanelChange"]], template: function NzDemoCalendarBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-calendar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCalendarBasicComponent_Template_nz_calendar_ngModelChange_0_listener($event) { return ctx.date = $event; })("nzModeChange", function NzDemoCalendarBasicComponent_Template_nz_calendar_nzModeChange_0_listener($event) { return ctx.mode = $event; })("nzPanelChange", function NzDemoCalendarBasicComponent_Template_nz_calendar_nzPanelChange_0_listener($event) { return ctx.panelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date)("nzMode", ctx.mode);
    } }, directives: [ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_1__.NzCalendarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 8150:
/*!*********************************************!*\
  !*** ./src/app/components/calendar/card.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCalendarCardComponent": () => (/* binding */ NzDemoCalendarCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 66984);



const _c0 = function () { return { width: "350px", border: "1px solid #d9d9d9", borderRadius: "4px" }; };
class NzDemoCalendarCardComponent {
    onValueChange(value) {
        console.log(`Current value: ${value}`);
    }
    onPanelChange(change) {
        console.log(`Current value: ${change.date}`);
        console.log(`Current mode: ${change.mode}`);
    }
}
NzDemoCalendarCardComponent.ɵfac = function NzDemoCalendarCardComponent_Factory(t) { return new (t || NzDemoCalendarCardComponent)(); };
NzDemoCalendarCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCalendarCardComponent, selectors: [["nz-demo-calendar-card"]], decls: 2, vars: 3, consts: [[3, "ngStyle"], [3, "nzFullscreen", "nzSelectChange", "nzPanelChange"]], template: function NzDemoCalendarCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nz-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSelectChange", function NzDemoCalendarCardComponent_Template_nz_calendar_nzSelectChange_1_listener($event) { return ctx.onValueChange($event); })("nzPanelChange", function NzDemoCalendarCardComponent_Template_nz_calendar_nzPanelChange_1_listener($event) { return ctx.onPanelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFullscreen", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_2__.NzCalendarComponent], encapsulation: 2 });


/***/ }),

/***/ 52226:
/*!*****************************************************!*\
  !*** ./src/app/components/calendar/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCalendarEnComponent": () => (/* binding */ NzDemoCalendarEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 52105);
/* harmony import */ var _notice_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice-calendar */ 7691);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ 8150);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select */ 21613);











class NzDemoCalendarEnComponent {
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
NzDemoCalendarEnComponent.ɵfac = function NzDemoCalendarEnComponent_Factory(t) { return new (t || NzDemoCalendarEnComponent)(); };
NzDemoCalendarEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NzDemoCalendarEnComponent, selectors: [["nz-demo-calendar"]], viewQuery: function NzDemoCalendarEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 374, vars: 16, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-calendar-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-calendar-demo-notice-calendar", "nzTitle", "Notice Calendar"], ["nzHref", "#components-calendar-demo-card", "nzTitle", "Card"], ["nzHref", "#components-calendar-demo-select", "nzTitle", "Selectable Calendar"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/calendar/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-calendar-basic", "nzGenerateCommand", "ng g ng-zorro-antd:calendar-basic <name>", "nzComponentName", "NzDemoCalendarBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Notice Calendar", "nzSelector", "nz-demo-calendar-notice-calendar", "nzGenerateCommand", "ng g ng-zorro-antd:calendar-notice-calendar <name>", "nzComponentName", "NzDemoCalendarNoticeCalendarComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Card", "nzSelector", "nz-demo-calendar-card", "nzGenerateCommand", "ng g ng-zorro-antd:calendar-card <name>", "nzComponentName", "NzDemoCalendarCardComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Selectable Calendar", "nzSelector", "nz-demo-calendar-select", "nzGenerateCommand", "ng g ng-zorro-antd:calendar-select <name>", "nzComponentName", "NzDemoCalendarSelectComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["href", "https://angular.io/guide/i18n"], [1, "language-typescript"], [1, "token", "function"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["spellcheck", "true", 1, "token", "comment"], ["id", "nz-calendar"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-calendar'", 1, "anchor"]], template: function NzDemoCalendarEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzClick", function NzDemoCalendarEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "section", 7)(9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "span", 8)(12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Container for displaying data in calendar form.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h2", 12)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "pre", 14)(26, "code")(27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " NzCalendarModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "'ng-zorro-antd/calendar'");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "h2")(44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NzDemoCalendarEnComponent_Template_i_click_46_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 19)(48, "div", 20)(49, "nz-code-box", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "nz-demo-calendar-basic", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "A basic calendar component with Year/Month switch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "nz-demo-calendar-notice-calendar", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "This component can be rendered by using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "nzDateCell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "nzMonthCell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, " with the data you need.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "nz-demo-calendar-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Nested inside a container element for rendering in limited space.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "nz-demo-calendar-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "A basic calendar component with Year/Month switch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "h2", 28)(77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "p")(82, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, " Some of Calendar's locale are coming from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Angular i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, ", that should be provided in the file of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "app.module.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "For example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "pre", 31)(94, "code")(95, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, " registerLocaleData ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "'@angular/common'");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, " en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "'@angular/common/locales/en'");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "registerLocaleData");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "pre", 33)(133, "code")(134, "span", 34)(135, "span", 34)(136, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "nz-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "[nzDateCell]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "span", 36)(143, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](144, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "dateCellTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "[(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "span", 36)(154, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](157, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "selectedDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "[(nzMode)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "span", 36)(165, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174, "(nzPanelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "span", 36)(176, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](179, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "panelChange($event)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](182, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](183, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, "(nzSelectChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "span", 36)(187, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](188, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](190, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191, "selectChange($event)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](198, "<!-- Another method for cell definition -->");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "span", 34)(201, "span", 34)(202, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](203, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](204, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](207, "*nzDateCell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](208, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](209, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](210, "Foo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "span", 34)(212, "span", 34)(213, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](214, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](215, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](216, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](217, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](218, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "span", 34)(220, "span", 34)(221, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](222, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](223, "nz-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](224, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](225, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](226, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](227, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](228, "<!-- Passing TemplateRef -->");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](229, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](230, "span", 34)(231, "span", 34)(232, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](233, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](234, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](235, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](236, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](237, "#dateCellTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](238, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](240, "let-date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](241, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](242, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](243, "span", 34)(244, "span", 34)(245, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](246, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](247, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](248, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](249, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](250, "{{ date | date:'d'}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](251, "span", 34)(252, "span", 34)(253, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](254, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](255, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](256, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](257, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](258, "span", 34)(259, "span", 34)(260, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](261, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](262, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](263, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](264, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](265, "h3", 38)(266, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](267, "nz-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](268, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](269, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](270, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](271, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](272, "table")(273, "thead")(274, "tr")(275, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](276, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](277, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](278, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](279, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](280, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](281, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](282, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](283, "tbody")(284, "tr")(285, "td")(286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](287, "[(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](289, "(Two-way bindable) The current selected date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](290, "td")(291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](292, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](294, "current date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](295, "tr")(296, "td")(297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](298, "[(nzMode)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](300, "The display mode of the calendar (two-way bindable)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](301, "td")(302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](303, "'month' | 'year'");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](304, "td")(305, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](306, "'month'");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](307, "tr")(308, "td")(309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](310, "[nzFullscreen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](311, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](312, "Whether to display in full-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](313, "td")(314, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](315, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](316, "td")(317, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](318, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](319, "tr")(320, "td")(321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](322, "[nzDateCell]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](324, "(Contentable) Customize the display of the date cell, the template content will be appended to the cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](325, "td")(326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](327, "TemplateRef<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](329, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](330, "tr")(331, "td")(332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](333, "[nzDateFullCell]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](335, "(Contentable) Customize the display of the date cell, the template content will override the cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](336, "td")(337, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](338, "TemplateRef<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](340, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](341, "tr")(342, "td")(343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](344, "[nzMonthCell]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](346, "(Contentable) Customize the display of the month cell, the template content will be appended to the cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](347, "td")(348, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](349, "TemplateRef<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](351, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](352, "tr")(353, "td")(354, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](355, "[nzMonthFullCell]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](357, "(Contentable) Customize the display of the month cell, the template content will override the cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](358, "td")(359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](360, "TemplateRef<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](361, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](362, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](363, "tr")(364, "td")(365, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](366, "(nzPanelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](368, "Callback for when panel changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](369, "td")(370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](371, "EventEmitter<{ date: Date, mode: 'month' | 'year' }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](372, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](373, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzId", "components-calendar-demo-basic")("nzLink", "components-calendar-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/calendar/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzId", "components-calendar-demo-notice-calendar")("nzLink", "components-calendar-demo-notice-calendar")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/calendar/demo/notice-calendar.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzId", "components-calendar-demo-card")("nzLink", "components-calendar-demo-card")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/calendar/demo/card.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzId", "components-calendar-demo-select")("nzLink", "components-calendar-demo-select")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/calendar/demo/select.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__.NzAnchorLinkComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoCalendarBasicComponent, _notice_calendar__WEBPACK_IMPORTED_MODULE_2__.NzDemoCalendarNoticeCalendarComponent, _card__WEBPACK_IMPORTED_MODULE_3__.NzDemoCalendarCardComponent, _select__WEBPACK_IMPORTED_MODULE_4__.NzDemoCalendarSelectComponent], encapsulation: 2 });


/***/ }),

/***/ 20478:
/*!*****************************************************!*\
  !*** ./src/app/components/calendar/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCalendarModule": () => (/* binding */ NzDemoCalendarModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 52362);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 52105);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ 8150);
/* harmony import */ var _notice_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notice-calendar */ 7691);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select */ 21613);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zh.component */ 63961);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en.component */ 52226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 66984);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/badge */ 52559);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);














class NzDemoCalendarModule {
}
NzDemoCalendarModule.ɵfac = function NzDemoCalendarModule_Factory(t) { return new (t || NzDemoCalendarModule)(); };
NzDemoCalendarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: NzDemoCalendarModule });
NzDemoCalendarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoCalendarEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoCalendarZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](NzDemoCalendarModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoCalendarBasicComponent,
        _card__WEBPACK_IMPORTED_MODULE_3__.NzDemoCalendarCardComponent,
        _notice_calendar__WEBPACK_IMPORTED_MODULE_4__.NzDemoCalendarNoticeCalendarComponent,
        _select__WEBPACK_IMPORTED_MODULE_5__.NzDemoCalendarSelectComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoCalendarZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoCalendarEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_10__.NzCalendarModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_11__.NzBadgeModule, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_12__.NzAlertModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 52362:
/*!***********************************************!*\
  !*** ./src/app/components/calendar/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 66984);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/badge */ 52559);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);



const moduleList = [ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_0__.NzCalendarModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_1__.NzBadgeModule, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__.NzAlertModule];


/***/ }),

/***/ 7691:
/*!********************************************************!*\
  !*** ./src/app/components/calendar/notice-calendar.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCalendarNoticeCalendarComponent": () => (/* binding */ NzDemoCalendarNoticeCalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 66984);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/badge */ 52559);




function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStatus", item_r7.type)("nzText", item_r7.content);
} }
function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_2_li_1_Template, 2, 2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.listDataMap.eight);
} }
function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStatus", item_r9.type)("nzText", item_r9.content);
} }
function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_3_li_1_Template, 2, 2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.listDataMap.ten);
} }
function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStatus", item_r11.type)("nzText", item_r11.content);
} }
function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_4_li_1_Template, 2, 2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.listDataMap.eleven);
} }
function NzDemoCalendarNoticeCalendarComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_3_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", date_r2.getDate());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 11);
} }
function NzDemoCalendarNoticeCalendarComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Backlog number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const monthData_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](monthData_r14);
} }
function NzDemoCalendarNoticeCalendarComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCalendarNoticeCalendarComponent_ng_container_2_div_1_Template, 5, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const month_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getMonthData(month_r12));
} }
class NzDemoCalendarNoticeCalendarComponent {
    constructor() {
        this.listDataMap = {
            eight: [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' }
            ],
            ten: [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' }
            ],
            eleven: [
                { type: 'warning', content: 'This is warning event' },
                { type: 'success', content: 'This is very long usual event........' },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' }
            ]
        };
    }
    getMonthData(date) {
        if (date.getMonth() === 8) {
            return 1394;
        }
        return null;
    }
}
NzDemoCalendarNoticeCalendarComponent.ɵfac = function NzDemoCalendarNoticeCalendarComponent_Factory(t) { return new (t || NzDemoCalendarNoticeCalendarComponent)(); };
NzDemoCalendarNoticeCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCalendarNoticeCalendarComponent, selectors: [["nz-demo-calendar-notice-calendar"]], decls: 3, vars: 0, consts: [["class", "events", 4, "nzDateCell"], [4, "nzMonthCell"], [1, "events"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngFor", "ngForOf"], [3, "nzStatus", "nzText"], ["class", "notes-month", 4, "ngIf"], [1, "notes-month"]], template: function NzDemoCalendarNoticeCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCalendarNoticeCalendarComponent_ul_1_Template, 5, 4, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCalendarNoticeCalendarComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_1__.NzCalendarComponent, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_1__.NzDateCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_3__.NzBadgeComponent, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_1__.NzMonthCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".events[_ngcontent-%COMP%] {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n      }\n\n      .events[_ngcontent-%COMP%]   .ant-badge-status[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        width: 100%;\n        text-overflow: ellipsis;\n        font-size: 12px;\n      }\n\n      .notes-month[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 28px;\n      }\n\n      .notes-month[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n        font-size: 28px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZS1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7UUFDaEIsU0FBUztRQUNULFVBQVU7TUFDWjs7TUFFQTtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLHVCQUF1QjtRQUN2QixlQUFlO01BQ2pCOztNQUVBO1FBQ0Usa0JBQWtCO1FBQ2xCLGVBQWU7TUFDakI7O01BRUE7UUFDRSxlQUFlO01BQ2pCIiwiZmlsZSI6Im5vdGljZS1jYWxlbmRhci50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmV2ZW50cyB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLmV2ZW50cyAuYW50LWJhZGdlLXN0YXR1cyB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAubm90ZXMtbW9udGgge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIH1cblxuICAgICAgLm5vdGVzLW1vbnRoIHNlY3Rpb24ge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 21613:
/*!***********************************************!*\
  !*** ./src/app/components/calendar/select.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCalendarSelectComponent": () => (/* binding */ NzDemoCalendarSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ 76764);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 66984);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





class NzDemoCalendarSelectComponent {
    constructor() {
        this.selectedValue = new Date('2017-01-25');
    }
    selectChange(select) {
        console.log(`Select value: ${select}`);
    }
}
NzDemoCalendarSelectComponent.ɵfac = function NzDemoCalendarSelectComponent_Factory(t) { return new (t || NzDemoCalendarSelectComponent)(); };
NzDemoCalendarSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCalendarSelectComponent, selectors: [["nz-demo-calendar-select"]], decls: 3, vars: 5, consts: [[3, "nzMessage"], [3, "ngModel", "ngModelChange", "nzSelectChange"]], template: function NzDemoCalendarSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCalendarSelectComponent_Template_nz_calendar_ngModelChange_2_listener($event) { return ctx.selectedValue = $event; })("nzSelectChange", function NzDemoCalendarSelectComponent_Template_nz_calendar_nzSelectChange_2_listener($event) { return ctx.selectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzMessage", "Your selected date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, ctx.selectedValue, "yyyy-MM-dd"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);
    } }, directives: [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__.NzAlertComponent, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_2__.NzCalendarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 63961:
/*!*****************************************************!*\
  !*** ./src/app/components/calendar/zh.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoCalendarZhComponent": () => (/* binding */ NzDemoCalendarZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 52105);
/* harmony import */ var _notice_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice-calendar */ 7691);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ 8150);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select */ 21613);











class NzDemoCalendarZhComponent {
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
NzDemoCalendarZhComponent.ɵfac = function NzDemoCalendarZhComponent_Factory(t) { return new (t || NzDemoCalendarZhComponent)(); };
NzDemoCalendarZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NzDemoCalendarZhComponent, selectors: [["nz-demo-calendar"]], viewQuery: function NzDemoCalendarZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 380, vars: 16, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-calendar-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-calendar-demo-notice-calendar", "nzTitle", "\u901A\u77E5\u4E8B\u9879\u65E5\u5386"], ["nzHref", "#components-calendar-demo-card", "nzTitle", "\u5361\u7247\u6A21\u5F0F"], ["nzHref", "#components-calendar-demo-select", "nzTitle", "\u9009\u62E9\u529F\u80FD"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/calendar/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-calendar-basic", "nzGenerateCommand", "ng g ng-zorro-antd:calendar-basic <name>", "nzComponentName", "NzDemoCalendarBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u901A\u77E5\u4E8B\u9879\u65E5\u5386", "nzSelector", "nz-demo-calendar-notice-calendar", "nzGenerateCommand", "ng g ng-zorro-antd:calendar-notice-calendar <name>", "nzComponentName", "NzDemoCalendarNoticeCalendarComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5361\u7247\u6A21\u5F0F", "nzSelector", "nz-demo-calendar-card", "nzGenerateCommand", "ng g ng-zorro-antd:calendar-card <name>", "nzComponentName", "NzDemoCalendarCardComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9009\u62E9\u529F\u80FD", "nzSelector", "nz-demo-calendar-select", "nzGenerateCommand", "ng g ng-zorro-antd:calendar-select <name>", "nzComponentName", "NzDemoCalendarSelectComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-typescript"], [1, "token", "function"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["spellcheck", "true", 1, "token", "comment"], ["id", "nz-calendar"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-calendar'", 1, "anchor"]], template: function NzDemoCalendarZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzClick", function NzDemoCalendarZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "section", 7)(9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\u65E5\u5386");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\u6309\u7167\u65E5\u5386\u5F62\u5F0F\u5C55\u793A\u6570\u636E\u7684\u5BB9\u5668\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "h2", 12)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\u5F53\u6570\u636E\u662F\u65E5\u671F\u6216\u6309\u7167\u65E5\u671F\u5212\u5206\u65F6\uFF0C\u4F8B\u5982\u65E5\u7A0B\u3001\u8BFE\u8868\u3001\u4EF7\u683C\u65E5\u5386\u7B49\uFF0C\u519C\u5386\u7B49\u3002\u76EE\u524D\u652F\u6301\u5E74/\u6708\u5207\u6362\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "pre", 14)(27, "code")(28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " NzCalendarModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "'ng-zorro-antd/calendar'");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "h2")(45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NzDemoCalendarZhComponent_Template_i_click_47_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 19)(49, "div", 20)(50, "nz-code-box", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "nz-demo-calendar-basic", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "\u4E00\u4E2A\u901A\u7528\u7684\u65E5\u5386\u9762\u677F\uFF0C\u652F\u6301\u5E74/\u6708\u5207\u6362\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "nz-code-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "nz-demo-calendar-notice-calendar", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "\u4E00\u4E2A\u590D\u6742\u7684\u5E94\u7528\u793A\u4F8B\uFF0C\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "nzDateCell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "nzMonthCell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " \u6A21\u7248\u6765\u81EA\u5B9A\u4E49\u9700\u8981\u6E32\u67D3\u7684\u6570\u636E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "nz-demo-calendar-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "\u7528\u4E8E\u5D4C\u5957\u5728\u7A7A\u95F4\u6709\u9650\u7684\u5BB9\u5668\u4E2D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "nz-code-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "nz-demo-calendar-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "\u4E00\u4E2A\u901A\u7528\u7684\u65E5\u5386\u9762\u677F\uFF0C\u652F\u6301\u5E74/\u6708\u5207\u6362\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "h2", 28)(78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "p")(83, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "\u6CE8\u610F\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Calendar \u7684\u90E8\u5206 locale \u6765\u81EA\u4E8E Angular \u81EA\u8EAB\u7684\u56FD\u9645\u5316\u652F\u6301\uFF0C\u9700\u8981\u5728 app.module.ts \u6587\u4EF6\u4E2D \u5F15\u5165\u76F8\u5E94\u7684 Angular \u8BED\u8A00\u5305\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "\u4F8B\u5982\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "pre", 30)(89, "code")(90, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, " registerLocaleData ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "'@angular/common'");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, " zh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "'@angular/common/locales/zh'");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "registerLocaleData");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "zh");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "pre", 32)(128, "code")(129, "span", 33)(130, "span", 33)(131, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "nz-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "[nzDateCell]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "span", 35)(138, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "dateCellTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](144, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "[(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "span", 35)(149, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "selectedDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "[(nzMode)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "span", 35)(160, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "(nzPanelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "span", 35)(171, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "panelChange($event)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "(nzSelectChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "span", 35)(182, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](183, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](186, "selectChange($event)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](187, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](188, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](190, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193, "<!-- \u5B9A\u4E49 Cell \u7684\u53E6\u4E00\u79CD\u65B9\u5F0F -->");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](194, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](195, "span", 33)(196, "span", 33)(197, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](198, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](200, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](201, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](202, "*dateCell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](203, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](204, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205, "Foo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "span", 33)(207, "span", 33)(208, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](209, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](210, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](212, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](213, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](214, "span", 33)(215, "span", 33)(216, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](217, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](218, "nz-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](220, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](221, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](223, "<!-- \u4F20\u5165 TemplateRef \u7684\u65B9\u5F0F -->");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](224, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](225, "span", 33)(226, "span", 33)(227, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](228, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](229, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](230, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](231, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](232, "#dateCellTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](233, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](234, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](235, "let-date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](236, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](237, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](238, "span", 33)(239, "span", 33)(240, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](241, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](242, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](243, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](244, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](245, "{{ date | date:'d'}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](246, "span", 33)(247, "span", 33)(248, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](249, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](250, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](251, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](252, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](253, "span", 33)(254, "span", 33)(255, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](256, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](257, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](258, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](259, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](260, "h3", 37)(261, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](262, "nz-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](263, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](264, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](265, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](266, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](267, "table")(268, "thead")(269, "tr")(270, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](271, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](272, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](273, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](274, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](275, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](276, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](277, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](278, "tbody")(279, "tr")(280, "td")(281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](282, "[(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](284, "\uFF08\u53EF\u53CC\u5411\u7ED1\u5B9A\uFF09\u5C55\u793A\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](285, "td")(286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](287, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](289, "\u5F53\u524D\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](290, "tr")(291, "td")(292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](293, "[(nzMode)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](295, "\uFF08\u53EF\u53CC\u5411\u7ED1\u5B9A\uFF09\u663E\u793A\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](296, "td")(297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](298, "'month' | 'year'");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](299, "td")(300, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](301, "'month'");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](302, "tr")(303, "td")(304, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](305, "[nzFullscreen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](307, "\u662F\u5426\u5168\u5C4F\u663E\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](308, "td")(309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](310, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](311, "td")(312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](313, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](314, "tr")(315, "td")(316, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](317, "[nzDateCell]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](319, "\uFF08\u53EF\u4F5C\u4E3A\u5185\u5BB9\uFF09\u81EA\u5B9A\u4E49\u6E32\u67D3\u65E5\u671F\u5355\u5143\u683C\uFF0C\u6A21\u7248\u5185\u5BB9\u4F1A\u88AB\u8FFD\u52A0\u5230\u5355\u5143\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](320, "td")(321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](322, "TemplateRef<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](324, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](325, "tr")(326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](328, "[nzDateFullCell]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](330, "\uFF08\u53EF\u4F5C\u4E3A\u5185\u5BB9\uFF09\u81EA\u5B9A\u4E49\u6E32\u67D3\u65E5\u671F\u5355\u5143\u683C\uFF0C\u6A21\u7248\u5185\u5BB9\u8986\u76D6\u5355\u5143\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](331, "td")(332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](333, "TemplateRef<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](335, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](336, "tr")(337, "td")(338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](339, "[nzMonthCell]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](341, "\uFF08\u53EF\u4F5C\u4E3A\u5185\u5BB9\uFF09\u81EA\u5B9A\u4E49\u6E32\u67D3\u6708\u5355\u5143\u683C\uFF0C\u6A21\u7248\u5185\u5BB9\u4F1A\u88AB\u8FFD\u52A0\u5230\u5355\u5143\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](342, "td")(343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](344, "TemplateRef<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](346, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](347, "tr")(348, "td")(349, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](350, "[nzMonthFullCell]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](352, "\uFF08\u53EF\u4F5C\u4E3A\u5185\u5BB9\uFF09\u81EA\u5B9A\u4E49\u6E32\u67D3\u6708\u5355\u5143\u683C\uFF0C\u6A21\u7248\u5185\u5BB9\u8986\u76D6\u5355\u5143\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](353, "td")(354, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](355, "TemplateRef<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](357, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](358, "tr")(359, "td")(360, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](361, "(nzPanelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](362, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](363, "\u9762\u677F\u53D8\u5316\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](364, "td")(365, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](366, "EventEmitter<{ date: Date, mode: 'month' | 'year' }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](368, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](369, "tr")(370, "td")(371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](372, "(nzSelectChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](374, "\u9009\u62E9\u65E5\u671F\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](375, "td")(376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](377, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](378, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](379, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzId", "components-calendar-demo-basic")("nzLink", "components-calendar-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/calendar/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzId", "components-calendar-demo-notice-calendar")("nzLink", "components-calendar-demo-notice-calendar")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/calendar/demo/notice-calendar.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzId", "components-calendar-demo-card")("nzLink", "components-calendar-demo-card")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/calendar/demo/card.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzId", "components-calendar-demo-select")("nzLink", "components-calendar-demo-select")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/calendar/demo/select.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__.NzAnchorLinkComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoCalendarBasicComponent, _notice_calendar__WEBPACK_IMPORTED_MODULE_2__.NzDemoCalendarNoticeCalendarComponent, _card__WEBPACK_IMPORTED_MODULE_3__.NzDemoCalendarCardComponent, _select__WEBPACK_IMPORTED_MODULE_4__.NzDemoCalendarSelectComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_calendar_index_module_ts.js.map