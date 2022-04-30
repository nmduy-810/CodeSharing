"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 50425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _default_default_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default/default-dashboard.component */ 27176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _default_default_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DefaultDashboardComponent,
        data: {
            title: 'Dashboard ',
            headerDisplay: "none"
        }
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 50425);
/* harmony import */ var ng_chartjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-chartjs */ 46367);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/theme-constant.service */ 87341);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 49871);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 76815);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/rate */ 80998);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/badge */ 52559);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/radio */ 27095);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 13291);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 2227);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 75445);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tag */ 27902);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 66984);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 72455);
/* harmony import */ var _default_default_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default/default-dashboard.component */ 27176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);























const antdModule = [
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule,
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardModule,
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__.NzAvatarModule,
    ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_7__.NzRateModule,
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__.NzBadgeModule,
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__.NzProgressModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__.NzRadioModule,
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropDownModule,
    ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_13__.NzTimelineModule,
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabsModule,
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__.NzTagModule,
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListModule,
    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_17__.NzCalendarModule,
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzToolTipModule,
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__.NzCheckboxModule
];
class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [
        _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__.ThemeConstantService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule,
            ng_chartjs__WEBPACK_IMPORTED_MODULE_22__.NgChartjsModule,
            ...antdModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_default_default_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DefaultDashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule,
        ng_chartjs__WEBPACK_IMPORTED_MODULE_22__.NgChartjsModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__.NzAvatarModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_7__.NzRateModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__.NzBadgeModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__.NzProgressModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__.NzRadioModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropDownModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_13__.NzTimelineModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__.NzTagModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListModule,
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_17__.NzCalendarModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzToolTipModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__.NzCheckboxModule] }); })();


/***/ }),

/***/ 27176:
/*!******************************************************************!*\
  !*** ./src/app/dashboard/default/default-dashboard.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultDashboardComponent": () => (/* binding */ DefaultDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/theme-constant.service */ 87341);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/card */ 49871);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ 27902);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/badge */ 52559);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/progress */ 37398);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 68305);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_chartjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-chartjs */ 46367);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/list */ 51060);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 13291);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 76815);
















function DefaultDashboardComponent_ng_template_175_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.name);
} }
function DefaultDashboardComponent_ng_template_175_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.category);
} }
function DefaultDashboardComponent_ng_template_175_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tag", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", "cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" +", item_r6.growth, "% ");
} }
function DefaultDashboardComponent_ng_template_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list-item", 59)(1, "nz-list-item-meta", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DefaultDashboardComponent_ng_template_175_ng_template_2_Template, 2, 1, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DefaultDashboardComponent_ng_template_175_ng_template_4_Template, 2, 1, "ng-template", null, 62, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DefaultDashboardComponent_ng_template_175_ng_template_6_Template, 2, 2, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzContent", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r7)("nzAvatar", item_r6.avatar)("nzDescription", _r9);
} }
function DefaultDashboardComponent_tr_231_nz_badge_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-badge", 72);
} }
function DefaultDashboardComponent_tr_231_nz_badge_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-badge", 73);
} }
function DefaultDashboardComponent_tr_231_nz_badge_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-badge", 74);
} }
function DefaultDashboardComponent_tr_231_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nz-avatar", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DefaultDashboardComponent_tr_231_nz_badge_14_Template, 1, 0, "nz-badge", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DefaultDashboardComponent_tr_231_nz_badge_15_Template, 1, 0, "nz-badge", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DefaultDashboardComponent_tr_231_nz_badge_16_Template, 1, 0, "nz-badge", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", item_r16.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", 30)("nzSrc", item_r16.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 10, item_r16.amount, "3.2-5"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r16.status == "approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r16.status == "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r16.status == "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.status);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class DefaultDashboardComponent {
    constructor(colorConfig) {
        this.colorConfig = colorConfig;
        this.themeColors = this.colorConfig.get().colors;
        this.blue = this.themeColors.blue;
        this.blueLight = this.themeColors.blueLight;
        this.cyan = this.themeColors.cyan;
        this.cyanLight = this.themeColors.cyanLight;
        this.gold = this.themeColors.gold;
        this.purple = this.themeColors.purple;
        this.purpleLight = this.themeColors.purpleLight;
        this.red = this.themeColors.red;
        this.salesChartOptions = {
            scaleShowVerticalLines: false,
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            max: 80,
                            stepSize: 20,
                            display: true,
                            beginAtZero: true,
                            fontSize: 13,
                            padding: 10
                        }
                    }]
            }
        };
        this.salesChartLabels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
        this.salesChartType = 'bar';
        this.salesChartColors = [
            {
                backgroundColor: this.themeColors.blue,
                borderWidth: 0
            },
            {
                backgroundColor: this.themeColors.blueLight,
                borderWidth: 0
            }
        ];
        this.salesChartData = [
            {
                data: [20, 30, 35, 45, 55, 45],
                label: 'Online',
                categoryPercentage: 0.35,
                barPercentage: 0.70
            },
            {
                data: [25, 35, 40, 50, 60, 50],
                label: 'Offline',
                categoryPercentage: 0.35,
                barPercentage: 0.70
            }
        ];
        this.revenueChartFormat = 'revenueMonth';
        this.revenueChartData = [{
                data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],
                label: 'Series A'
            }];
        this.currentrevenueChartLabelsIdx = 1;
        this.revenueChartLabels = ["16th", "17th", "18th", "19th", "20th", "21th", "22th", "23th", "24th", "25th", "26th"];
        this.revenueChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            hover: {
                mode: 'nearest',
                intersect: true
            },
            tooltips: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                        gridLines: [{
                                display: false,
                            }],
                        ticks: {
                            display: true,
                            fontColor: this.themeColors.grayLight,
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            display: true,
                            max: 100,
                            stepSize: 20,
                            fontColor: this.themeColors.grayLight,
                            fontSize: 13,
                            padding: 10
                        }
                    }],
            }
        };
        this.revenueChartColors = [
            {
                backgroundColor: this.themeColors.transparent,
                borderColor: this.cyan,
                pointBackgroundColor: this.cyan,
                pointBorderColor: this.themeColors.white,
                pointHoverBackgroundColor: this.cyanLight,
                pointHoverBorderColor: this.cyanLight
            }
        ];
        this.revenueChartType = 'line';
        this.customersChartLabels = ['Direct', 'Referral', 'Social Network'];
        this.customersChartData = [350, 450, 100];
        this.customersChartColors = [{
                backgroundColor: [this.gold, this.blue, this.red],
                pointBackgroundColor: [this.gold, this.blue, this.red]
            }];
        this.customersChartOptions = {
            cutoutPercentage: 80,
            maintainAspectRatio: false
        };
        this.customersChartType = 'doughnut';
        this.ordersList = [
            {
                id: 5331,
                name: 'Erin Gonzales',
                avatar: 'assets/images/avatars/thumb-1.jpg',
                date: '8 May 2019',
                amount: 137,
                status: 'approved',
                checked: false
            },
            {
                id: 5375,
                name: 'Darryl Day',
                avatar: 'assets/images/avatars/thumb-2.jpg',
                date: '6 May 2019',
                amount: 322,
                status: 'approved',
                checked: false
            },
            {
                id: 5762,
                name: 'Marshall Nichols',
                avatar: 'assets/images/avatars/thumb-3.jpg',
                date: '1 May 2019',
                amount: 543,
                status: 'approved',
                checked: false
            },
            {
                id: 5865,
                name: 'Virgil Gonzales',
                avatar: 'assets/images/avatars/thumb-4.jpg',
                date: '28 April 2019',
                amount: 876,
                status: 'pending',
                checked: false
            },
            {
                id: 5213,
                name: 'Nicole Wyne',
                avatar: 'assets/images/avatars/thumb-5.jpg',
                date: '28 April 2019',
                amount: 241,
                status: 'approved',
                checked: false
            },
            {
                id: 5311,
                name: 'Riley Newman',
                avatar: 'assets/images/avatars/thumb-6.jpg',
                date: '19 April 2019',
                amount: 872,
                status: 'rejected',
                checked: false
            }
        ];
        this.productsList = [
            {
                name: 'Gray Sofa',
                avatar: 'assets/images/others/thumb-9.jpg',
                category: 'Home Decoration',
                growth: 18.3
            },
            {
                name: 'Beat Headphone',
                avatar: 'assets/images/others/thumb-10.jpg',
                category: 'Eletronic',
                growth: 12.7
            },
            {
                name: 'Wooden Rhino',
                avatar: 'assets/images/others/thumb-11.jpg',
                category: 'Home Decoration',
                growth: 9.2
            },
            {
                name: 'Red Chair',
                avatar: 'assets/images/others/thumb-12.jpg',
                category: 'Home Decoration',
                growth: 7.7
            },
            {
                name: 'Wristband',
                avatar: 'assets/images/others/thumb-13.jpg',
                category: 'Eletronic',
                growth: 5.8
            }
        ];
    }
}
DefaultDashboardComponent.ɵfac = function DefaultDashboardComponent_Factory(t) { return new (t || DefaultDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__.ThemeConstantService)); };
DefaultDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DefaultDashboardComponent, selectors: [["ng-component"]], decls: 232, vars: 51, consts: [[1, "row"], [1, "col-lg-5"], [1, "col-md-6"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "m-b-0", "text-muted"], [1, "m-b-0"], [1, "m-r-0", "m-b-0", 3, "nzColor"], ["nz-icon", "", "nzType", "arrow-up", "theme", "outline"], [1, "font-weight-semibold", "m-l-5"], [1, "m-t-40"], [1, "d-flex", "justify-content-between"], ["nzStatus", "default", 3, "nzColor"], [1, "text-gray", "font-weight-semibold", "font-size-13"], [1, "text-dark", "font-weight-semibold", "font-size-13"], ["nzPercent", "70", "nzSize", "small", 3, "nzStrokeColor", "nzShowInfo"], ["nz-icon", "", "nzType", "arrow-down", "theme", "outline"], ["nzPercent", "60", "nzSize", "small", 3, "nzStrokeColor", "nzShowInfo"], ["nzPercent", "45", "nzSize", "small", 3, "nzStrokeColor", "nzShowInfo"], ["nzPercent", "80", "nzSize", "small", 3, "nzStrokeColor", "nzShowInfo"], [1, "col-lg-7"], ["nz-dropdown", "", 1, "text-dark", "font-size-20", 3, "nzTrigger", "nzPlacement", "nzDropdownMenu"], ["nz-icon", "", "nzType", "ellipsis", "theme", "outline"], ["salesStatisticsDropDown", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], ["nz-icon", "", "nzType", "printer", "theme", "outline"], [1, "m-l-5"], ["nz-icon", "", "nzType", "download", "theme", "outline"], ["nz-icon", "", "nzType", "file-excel", "theme", "outline"], ["nz-icon", "", "nzType", "copy", "theme", "outline"], [1, "m-t-30"], [1, "d-inline-block", "m-r-30"], [1, "d-inline-block"], [1, "m-t-50"], ["ngChartjs", "", 2, "height", "220px", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], [1, "col-lg-8"], ["nz-button", "", "nzType", "default", "nzSize", "small"], [1, "d-md-flex"], [1, "p-r-30", "m-v-10", "border", "right", "border-hide-md"], [1, "text-success", "m-l-10", "font-size-14"], [1, "p-h-30", "m-v-10", "border", "right", "border-hide-md"], [1, "text-danger", "m-l-10", "font-size-14"], [1, "p-l-30", "m-v-10"], [1, "m-t-50", 2, "height", "290px"], ["ngChartjs", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], ["myCanvas", ""], [1, "col-lg-4"], [3, "nzDataSource", "nzRenderItem", "nzItemLayout"], ["products", ""], [1, "m-v-45", "text-center", 2, "height", "210px"], ["ngChartjs", "", 3, "data", "labels", "chartType", "colors", "options", "legend"], [1, "row", "p-t-25"], [1, "col-md-8", "m-h-auto"], [1, "d-flex", "justify-content-between", "align-items-center", "m-b-20"], [1, "m-b-0", "d-flex", "align-items-center"], ["nzStatus", "default", 3, "nzColor", "nzStyle"], [1, "no-border-last", 3, "nzData", "nzShowPagination"], ["ordersListTable", ""], [4, "ngFor", "ngForOf"], [3, "nzContent"], [3, "nzTitle", "nzAvatar", "nzDescription"], ["productName", ""], ["productCategory", ""], ["productGrowth", ""], [1, "font-size-15"], [1, "d-flex", "align-items-center"], ["nzIcon", "user", 3, "nzSize", "nzSrc"], [1, "m-l-10", "m-b-0"], ["nzStatus", "success", 4, "ngIf"], ["nzStatus", "error", 4, "ngIf"], ["nzStatus", "processing", 4, "ngIf"], [1, "text-capitalize"], ["nzStatus", "success"], ["nzStatus", "error"], ["nzStatus", "processing"]], template: function DefaultDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 2)(4, "nz-card")(5, "div", 3)(6, "div")(7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "$23,523");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-tag", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "6.71%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "nz-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Monthly Goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "70% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "nz-progress", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2)(25, "nz-card")(26, "div", 3)(27, "div")(28, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "$8,753");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nz-tag", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "3.26%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9)(37, "div", 10)(38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "nz-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Monthly Goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "nz-progress", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 0)(46, "div", 2)(47, "nz-card")(48, "div", 3)(49, "div")(50, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "1,753");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "nz-tag", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "2.71%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 9)(59, "div", 10)(60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "nz-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Monthly Goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "45% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "nz-progress", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 2)(68, "nz-card")(69, "div", 3)(70, "div")(71, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Affiliate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "236");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "nz-tag", 6)(76, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 9)(79, "div", 10)(80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "nz-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Monthly Goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "nz-progress", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 19)(88, "nz-card")(89, "div", 3)(90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Sales Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div")(93, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "nz-dropdown-menu", null, 22)(97, "ul", 23)(98, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 30)(115, "div", 31)(116, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "nz-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 32)(121, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "nz-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "canvas", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 0)(128, "div", 35)(129, "nz-card")(130, "div", 3)(131, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div")(134, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 30)(137, "div", 37)(138, "div", 38)(139, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Net Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "h3", 5)(142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "$58,323");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "+6.71%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 40)(147, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Selling");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "h3", 5)(150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "$17,523");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "+1.82%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 42)(155, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "h3", 5)(158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "$8,217");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "+11.2%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "canvas", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 46)(166, "nz-card")(167, "div", 3)(168, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Top Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div")(171, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 30)(174, "nz-list", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](175, DefaultDashboardComponent_ng_template_175_Template, 8, 4, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 0)(178, "div", 46)(179, "nz-card")(180, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "canvas", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 51)(185, "div", 52)(186, "div", 53)(187, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "nz-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Direct");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "350");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 53)(194, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "nz-badge", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Referral");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "450");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 53)(201, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "nz-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Social Network");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 35)(208, "nz-card")(209, "div", 3)(210, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Recent Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div")(213, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 30)(216, "nz-table", 56, 57)(218, "thead")(219, "tr")(220, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](231, DefaultDashboardComponent_tr_231_Template, 19, 13, "tr", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](96);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](176);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](217);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", "cyan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.blue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStrokeColor", ctx.blue)("nzShowInfo", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", "red");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.cyan);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStrokeColor", ctx.cyan)("nzShowInfo", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", "red");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.gold);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStrokeColor", ctx.gold)("nzShowInfo", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", "gold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.purple);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStrokeColor", ctx.purple)("nzShowInfo", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.blue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.blueLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.salesChartData)("labels", ctx.salesChartLabels)("options", ctx.salesChartOptions)("colors", ctx.salesChartColors)("legend", false)("chartType", ctx.salesChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.revenueChartData)("labels", ctx.revenueChartLabels)("options", ctx.revenueChartOptions)("colors", ctx.revenueChartColors)("legend", false)("chartType", ctx.revenueChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDataSource", ctx.productsList)("nzRenderItem", _r2)("nzItemLayout", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.customersChartData)("labels", ctx.customersChartLabels)("chartType", ctx.customersChartType)("colors", ctx.customersChartColors)("options", ctx.customersChartOptions)("legend", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.gold);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.blue)("nzStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](49, _c0, ctx.blue));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.red);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx.ordersList)("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r4.data);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__.NzCardComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__.NzTagComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__.NzBadgeComponent, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_7__.NzProgressComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_8__.NzDropDownADirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_8__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_8__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuItemDirective, ng_chartjs__WEBPACK_IMPORTED_MODULE_10__.NgChartjsDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__.NzListItemMetaComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_15__.NzAvatarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe], encapsulation: 2 });


/***/ }),

/***/ 27902:
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzTagComponent": () => (/* binding */ NzTagComponent),
/* harmony export */   "NzTagModule": () => (/* binding */ NzTagModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 99052);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 87511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/color */ 50959);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 41687);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */





function NzTagComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.closeTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class NzTagComponent {
    constructor(cdr, renderer, elementRef, directionality) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.isPresetColor = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-tag');
    }
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
        }
    }
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    clearPresetColor() {
        const hostElement = this.elementRef.nativeElement;
        // /(ant-tag-(?:pink|red|...))/g
        const regexp = new RegExp(`(ant-tag-(?:${[...ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.presetColors, ...ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.statusColors].join('|')}))`, 'g');
        const classname = hostElement.classList.toString();
        const matches = [];
        let match = regexp.exec(classname);
        while (match !== null) {
            matches.push(match[1]);
            match = regexp.exec(classname);
        }
        hostElement.classList.remove(...matches);
    }
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    setPresetColor() {
        const hostElement = this.elementRef.nativeElement;
        this.clearPresetColor();
        if (!this.nzColor) {
            this.isPresetColor = false;
        }
        else {
            this.isPresetColor = (0,ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.isPresetColor)(this.nzColor) || (0,ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.isStatusColor)(this.nzColor);
        }
        if (this.isPresetColor) {
            hostElement.classList.add(`ant-tag-${this.nzColor}`);
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { nzColor } = changes;
        if (nzColor) {
            this.setPresetColor();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTagComponent.ɵfac = function NzTagComponent_Factory(t) { return new (t || NzTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8)); };
NzTagComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTagComponent, selectors: [["nz-tag"]], hostVars: 10, hostBindings: function NzTagComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTagComponent_click_HostBindingHandler() { return ctx.updateCheckedStatus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir === "rtl");
    } }, inputs: { nzMode: "nzMode", nzChecked: "nzChecked", nzColor: "nzColor" }, outputs: { nzOnClose: "nzOnClose", nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzTag"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "close", "class", "ant-tag-close-icon", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon", 3, "click"]], template: function NzTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzMode === "closeable");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzTagComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzTagComponent.propDecorators = {
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzOnClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.InputBoolean)()
], NzTagComponent.prototype, "nzChecked", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                template: `
    <ng-content></ng-content>
    <i
      nz-icon
      nzType="close"
      class="ant-tag-close-icon"
      *ngIf="nzMode === 'closeable'"
      tabindex="-1"
      (click)="closeTag($event)"
    ></i>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                host: {
                    '[style.background-color]': `isPresetColor ? '' : nzColor`,
                    '[class.ant-tag-has-color]': `nzColor && !isPresetColor`,
                    '[class.ant-tag-checkable]': `nzMode === 'checkable'`,
                    '[class.ant-tag-checkable-checked]': `nzChecked`,
                    '[class.ant-tag-rtl]': `dir === 'rtl'`,
                    '(click)': 'updateCheckedStatus()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzOnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTagModule {
}
NzTagModule.ɵfac = function NzTagModule_Factory(t) { return new (t || NzTagModule)(); };
NzTagModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzTagModule });
NzTagModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzTagModule, { declarations: function () { return [NzTagComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule]; }, exports: function () { return [NzTagComponent]; } }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map