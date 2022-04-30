"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_charts_charts_module_ts"],{

/***/ 45490:
/*!*****************************************************!*\
  !*** ./src/app/charts/chartjs/chartjs.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartjsComponent": () => (/* binding */ ChartjsComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/theme-constant.service */ 87341);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var ng_chartjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-chartjs */ 46367);








class ChartjsComponent {
    constructor(colorConfig) {
        this.colorConfig = colorConfig;
        this.expanded = false;
        this.themeColors = this.colorConfig.get().colors;
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.currentLineChartLabelsIdx = 1;
        this.lineChartLabels = ["16th", "17th", "18th", "19th", "20th", "21th", "22th"];
        this.lineChartOptions = {
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
        this.lineChartColors = [
            {
                backgroundColor: this.themeColors.transparent,
                borderColor: this.themeColors.blue,
                pointBackgroundColor: this.themeColors.blue,
                pointBorderColor: this.themeColors.white,
                pointHoverBackgroundColor: this.themeColors.blueLight,
                pointHoverBorderColor: this.themeColors.blueLight
            },
            {
                backgroundColor: this.themeColors.transparent,
                borderColor: this.themeColors.cyan,
                pointBackgroundColor: this.themeColors.cyan,
                pointBorderColor: this.themeColors.white,
                pointHoverBackgroundColor: this.themeColors.cyanLight,
                pointHoverBorderColor: this.themeColors.cyanLight
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        //Stacked Area Chart
        this.stackedAreaChartData = [
            { data: [28, 48, 40, 55, 86, 55, 90] }
        ];
        this.currentstackedAreaChartLabelsIdx = 2;
        this.stackedAreaChartLabels = ["16th", "17th", "18th", "19th", "20th", "21th", "22th"];
        this.stackedAreaChartOptions = {
            responsive: true,
            hover: {
                mode: 'nearest',
                intersect: true
            },
            elements: {
                line: {
                    tension: 0.5
                },
                point: {
                    radius: 0
                }
            },
            scales: {
                xAxes: [{
                        gridLines: [{
                                display: false,
                            }],
                        ticks: {
                            fontColor: this.themeColors.grayLight,
                            display: true,
                            beginAtZero: true,
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
                            zeroLineBorderDash: [3, 4],
                            scaleLabel: {
                                display: false,
                                labelString: 'Value'
                            }
                        },
                        ticks: {
                            max: 100,
                            stepSize: 20,
                            display: true,
                            beginAtZero: true,
                            fontColor: this.themeColors.grayLight,
                            fontSize: 13,
                            padding: 10
                        }
                    }],
            }
        };
        this.stackedAreaChartColors = [
            {
                backgroundColor: this.themeColors.blueLight,
                borderColor: this.themeColors.blue,
                pointBackgroundColor: this.themeColors.blue,
                pointBorderColor: this.themeColors.white,
                pointHoverBackgroundColor: this.themeColors.blueLight,
                pointHoverBorderColor: this.themeColors.blueLight
            }
        ];
        this.stackedAreaChartLegend = true;
        this.stackedAreaChartType = 'line';
        //Bar Chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
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
                            max: 100,
                            stepSize: 20,
                            display: true,
                            beginAtZero: true,
                            fontSize: 13,
                            padding: 10
                        }
                    }]
            }
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011',];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartColors = [
            {
                backgroundColor: this.themeColors.blue,
                borderWidth: 0
            },
            {
                backgroundColor: this.themeColors.blueLight,
                borderWidth: 0
            }
        ];
        this.barChartData = [
            {
                data: [65, 59, 80, 81, 56, 55],
                label: 'Series A',
                categoryPercentage: 0.45,
                barPercentage: 0.70,
            },
            {
                data: [28, 48, 40, 19, 86, 27],
                label: 'Series B',
                categoryPercentage: 0.45,
                barPercentage: 0.70,
            }
        ];
        //Radar Chart
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartOptions = {
            responsive: true,
            scale: {
                ticks: {
                    max: 100,
                    stepSize: 25,
                },
                gridLines: {
                    color: this.themeColors.border
                },
                angleLines: {
                    color: this.themeColors.border
                }
            }
        };
        this.radarChartColors = [
            {
                backgroundColor: this.themeColors.blueLight,
                borderWidth: 2,
                borderColor: this.themeColors.blue
            },
            {
                backgroundColor: this.themeColors.cyanLight,
                borderWidth: 2,
                borderColor: this.themeColors.cyan
            }
        ];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Doughnut Chart
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartColors = [{
                backgroundColor: [this.themeColors.blue, this.themeColors.gold, this.themeColors.cyan],
                pointBackgroundColor: [this.themeColors.blue, this.themeColors.gold, this.themeColors.cyan]
            }];
        this.doughnutChartType = 'doughnut';
        // PolarArea Chart
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartOptions = {
            responsive: true,
            scale: {
                ticks: {
                    max: 500,
                    stepSize: 100,
                },
                gridLines: {
                    color: this.themeColors.border
                },
                angleLines: {
                    color: this.themeColors.border
                }
            }
        };
        this.polarAreaChartColors = [{
                backgroundColor: [
                    this.themeColors.blueLight,
                    this.themeColors.cyanLight,
                    this.themeColors.goldLight,
                    this.themeColors.purpleLight,
                    this.themeColors.redLight,
                ],
                borderColor: [
                    this.themeColors.blue,
                    this.themeColors.cyan,
                    this.themeColors.gold,
                    this.themeColors.purple,
                    this.themeColors.red,
                ]
            }];
        this.polarAreaChartType = 'polarArea';
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
    ngOnInit() {
    }
}
ChartjsComponent.ɵfac = function ChartjsComponent_Factory(t) { return new (t || ChartjsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__.ThemeConstantService)); };
ChartjsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChartjsComponent, selectors: [["ng-component"]], viewQuery: function ChartjsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 466, vars: 68, consts: [[1, "demo-components-container", "w-100"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/93Alliance/ng-chartjs", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Line Chart", "nzComponentName", "Line Chart", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["ngChartjs", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], ["intro", ""], ["nzTitle", "Stacked Area Chart", "nzComponentName", "Stacked Area Chart", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Bar Chart", "nzComponentName", "Bar Chart", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Radar Chart", "nzComponentName", "Radar Chart", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["ngChartjs", "", 3, "datasets", "labels", "options", "colors", "chartType"], ["nzTitle", "Doughnut Chart", "nzComponentName", "Doughnut Chart", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["ngChartjs", "", 3, "data", "labels", "chartType", "colors"], ["nzTitle", "Polar Chart", "nzComponentName", "Polar Chart", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["ngChartjs", "", 3, "data", "labels", "legend", "options", "colors", "chartType"], [1, "markdown", "api-container"], ["id", "api"], [1, "anchor"], ["id", "ng-chartjs"], [1, "api-type-label", "plugins"], ["href", "https://github.com/93Alliance/ng-chartjs", 1, "anchor"], [1, "font-size-14"], ["target", "_blank", "href", "http://www.chartjs.org/docs/", "rel", "nofollow"], ["href", "https://www.chartjs.org/docs/master/developers/plugins.html", "rel", "nofollow"], ["href", "https://riptutorial.com/chart-js/topic/6510/plugins", "rel", "nofollow"], ["id", "ThemeConstantService"], [1, "api-type-label", "service"], [1, "m-t-20"]], template: function ChartjsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "article")(2, "section", 1)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ChartJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 2)(6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2")(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChartjsComponent_Template_i_click_12_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "div", 8)(15, "nz-code-box", 9)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8)(22, "nz-code-box", 13)(23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Line charts can be configured into stacked area charts by changing the settings on the y axis to enable stacking. Stacked area charts can be used to show how one data trend is made up of a number of smaller pieces.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 8)(29, "nz-code-box", 14)(30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 8)(36, "nz-code-box", 15)(37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "canvas", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "A radar chart is a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 8)(43, "nz-code-box", 17)(44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "canvas", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Pie charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 8)(50, "nz-code-box", 19)(51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "canvas", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "section", 21)(57, "h2", 22)(58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h3", 24)(63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "ng-chartjs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "plugins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "a", 26)(68, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Official Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 21)(71, "table")(72, "thead")(73, "tr")(74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "tbody")(83, "tr")(84, "td")(85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "[data]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Array number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "tr")(94, "td")(95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "[datasets]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "number[], label: string>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Array data: Array number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "tr")(104, "td")(105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "[labels]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "x axis labels. It's necessary for charts: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "radar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, ". And just labels (on hover) for charts: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "polarArea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "pie");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "doughnut");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "?Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "tr")(131, "td")(132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "[chartType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "indicates the type of charts, it can be: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "radar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "pie");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "polarArea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "doughnut");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "?string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "tr")(158, "td")(159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "[options]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "chart options (as from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Chart.js documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "?any");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "tr")(171, "td")(172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "[colors]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "data colors, will use default if null");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "?Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "tr")(181, "td")(182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "[legend]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "if true show legend below the chart, otherwise not be shown");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "tr")(191, "td")(192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "[inlinePlugins]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Chart.js inline plugin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Chart.js Plugins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Other Reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "any[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "tr")(206, "td")(207, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "[adding]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "You can add new data and update chart. It needs to be reassigned to trigger.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "td")(212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "tr")(217, "td")(218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "[removing]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "You can delete the latest or oldest data.It needs to be reassigned to trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "td")(223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "tr")(228, "td")(229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "[resetOption]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Reset options can trigger update chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](237, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 21)(239, "h3", 31)(240, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](241, "ThemeConstantService");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "ThemeConstantService return a set of preset colors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "table")(247, "thead")(248, "tr")(249, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](254, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](255, "tbody")(256, "tr")(257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "magenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "#eb2f96");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "tr")(264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "magentaLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269, "rgba(235, 47, 150, 0.05)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "tr")(271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "red");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](274, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, "#de4436");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "tr")(278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, "redLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283, "rgba(222, 68, 54, 0.05)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "tr")(285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](286, "volcano");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, "#fa541c");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "tr")(292, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "volcanoLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](295, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297, "rgba(250, 84, 28, 0.05)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "tr")(299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](300, "orange");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](304, "#fa8c16");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "tr")(306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](307, "orangeLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](309, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](311, "rgba(250, 140, 22, 0.1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "tr")(313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](314, "gold");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, "#ffc107");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "tr")(320, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](321, "goldLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](323, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](325, "rgba(255, 193, 7, 0.1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "tr")(327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "lime");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "#a0d911");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "tr")(334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](335, "limeLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](337, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](339, "rgba(160, 217, 17, 0.1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](340, "tr")(341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "green");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](344, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](346, "#52c41a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "tr")(348, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](349, "greenLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](351, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](353, "rgba(82, 196, 26, 0.1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "tr")(355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](356, "cyan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](360, "#05c9a7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](361, "tr")(362, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](363, "cyanLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](365, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](366, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](367, "rgba(0, 201, 167, 0.1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](368, "tr")(369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](370, "blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](371, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](372, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](374, "#3f87f5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "tr")(376, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](377, "blueLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](378, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](379, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](381, "rgba(63, 135, 245, 0.15)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "tr")(383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](384, "geekBlue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](388, "#2f54eb");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](389, "tr")(390, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](391, "geekBlueLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](393, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](395, "rgba(47, 84, 235, 0.1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](396, "tr")(397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](398, "purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](400, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](402, "#6b54bd");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "tr")(404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](405, "purpleLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](407, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](408, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](409, "rgba(107, 84, 189, 0.1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](410, "tr")(411, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](412, "gray");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](413, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](414, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](416, "#53535f");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](417, "tr")(418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](419, "grayLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](421, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](423, "#77838f");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](424, "tr")(425, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](426, "grayLighter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](428, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](430, "#ededed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](431, "tr")(432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](433, "grayLightest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](435, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](437, "#f1f2f3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](438, "tr")(439, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](440, "border");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](442, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](444, "#edf2f9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](445, "tr")(446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](447, "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](448, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](449, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](451, "#ffffff");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](452, "tr")(453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](454, "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](455, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](456, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](458, "#2a2a2a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](459, "tr")(460, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](461, "transparent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](463, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](464, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](465, "rgba(255, 255, 255, 0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzId", "charts-chartjs-line-chart")("nzLink", "components-chartjs-line-chart")("nzHref", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzId", "charts-chartjs-stacked-area-chart")("nzLink", "components-chartjs-stacked-area-chart")("nzHref", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.stackedAreaChartData)("labels", ctx.stackedAreaChartLabels)("options", ctx.stackedAreaChartOptions)("colors", ctx.stackedAreaChartColors)("legend", ctx.stackedAreaChartLegend)("chartType", ctx.stackedAreaChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzId", "charts-chartjs-bar-chart")("nzLink", "components-chartjs-bar-chart")("nzHref", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("colors", ctx.barChartColors)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzId", "charts-chartjs-radar-chart")("nzLink", "components-chartjs-radar-chart")("nzHref", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.radarChartData)("labels", ctx.radarChartLabels)("options", ctx.radarChartOptions)("colors", ctx.radarChartColors)("chartType", ctx.radarChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzId", "charts-chartjs-doughnut-chart")("nzLink", "components-chartjs-doughnut-chart")("nzHref", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzId", "charts-chartjs-polar-chart")("nzLink", "components-chartjs-polar-chart")("nzHref", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.polarAreaChartData)("labels", ctx.polarAreaChartLabels)("legend", ctx.polarAreaLegend)("options", ctx.polarAreaChartOptions)("colors", ctx.polarAreaChartColors)("chartType", ctx.polarAreaChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", "{", " labels: any[], data: any[][] ", "}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", "{", "orientation: string", "}", "");
    } }, directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, ng_chartjs__WEBPACK_IMPORTED_MODULE_6__.NgChartjsDirective], encapsulation: 2 });


/***/ }),

/***/ 92389:
/*!*************************************************!*\
  !*** ./src/app/charts/charts-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsRoutingModule": () => (/* binding */ ChartsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartjs/chartjs.component */ 45490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: 'chartjs',
        component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_0__.ChartjsComponent,
        data: {
            title: 'Chart Js'
        }
    }
];
class ChartsRoutingModule {
}
ChartsRoutingModule.ɵfac = function ChartsRoutingModule_Factory(t) { return new (t || ChartsRoutingModule)(); };
ChartsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChartsRoutingModule });
ChartsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChartsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 55108:
/*!*****************************************!*\
  !*** ./src/app/charts/charts.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsModule": () => (/* binding */ ChartsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts-routing.module */ 92389);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/theme-constant.service */ 87341);
/* harmony import */ var ng_chartjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-chartjs */ 46367);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 49871);
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjs/chartjs.component */ 45490);
/* harmony import */ var _components_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);









class ChartsModule {
}
ChartsModule.ɵfac = function ChartsModule_Factory(t) { return new (t || ChartsModule)(); };
ChartsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ChartsModule });
ChartsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__.ThemeConstantService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _charts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChartsRoutingModule,
            ng_chartjs__WEBPACK_IMPORTED_MODULE_7__.NgChartjsModule,
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule,
            _components_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_4__.DemoComponentsShareModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ChartsModule, { declarations: [_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_3__.ChartjsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _charts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChartsRoutingModule,
        ng_chartjs__WEBPACK_IMPORTED_MODULE_7__.NgChartjsModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule,
        _components_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_4__.DemoComponentsShareModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_charts_charts_module_ts.js.map