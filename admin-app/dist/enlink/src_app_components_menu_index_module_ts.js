"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_menu_index_module_ts"],{

/***/ 1072:
/*!*************************************************!*\
  !*** ./src/app/components/menu/en.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuEnComponent": () => (/* binding */ NzDemoMenuEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal */ 77222);
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline */ 61757);
/* harmony import */ var _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-collapsed */ 82781);
/* harmony import */ var _sider_current__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sider-current */ 50860);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vertical */ 26253);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ 42041);
/* harmony import */ var _switch_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./switch-mode */ 16321);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router */ 32295);
/* harmony import */ var _recursive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recursive */ 69339);


















class NzDemoMenuEnComponent {
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
NzDemoMenuEnComponent.ɵfac = function NzDemoMenuEnComponent_Factory(t) { return new (t || NzDemoMenuEnComponent)(); };
NzDemoMenuEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NzDemoMenuEnComponent, selectors: [["nz-demo-menu"]], viewQuery: function NzDemoMenuEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 1026, vars: 31, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-menu-demo-horizontal", "nzTitle", "Top Navigation"], ["nzHref", "#components-menu-demo-inline", "nzTitle", "Inline menu"], ["nzHref", "#components-menu-demo-inline-collapsed", "nzTitle", "Collapsed inline menu"], ["nzHref", "#components-menu-demo-sider-current", "nzTitle", "Open current submenu only"], ["nzHref", "#components-menu-demo-vertical", "nzTitle", "Vertical menu"], ["nzHref", "#components-menu-demo-theme", "nzTitle", "Menu Themes"], ["nzHref", "#components-menu-demo-switch-mode", "nzTitle", "Switch the menu type"], ["nzHref", "#components-menu-demo-router", "nzTitle", "Router"], ["nzHref", "#components-menu-demo-recursive", "nzTitle", "Recursive"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], ["href", "/components/layout/en"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Top Navigation", "nzSelector", "nz-demo-menu-horizontal", "nzGenerateCommand", "ng g ng-zorro-antd:menu-horizontal <name>", "nzComponentName", "NzDemoMenuHorizontalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Inline menu", "nzSelector", "nz-demo-menu-inline", "nzGenerateCommand", "ng g ng-zorro-antd:menu-inline <name>", "nzComponentName", "NzDemoMenuInlineComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Collapsed inline menu", "nzSelector", "nz-demo-menu-inline-collapsed", "nzGenerateCommand", "ng g ng-zorro-antd:menu-inline-collapsed <name>", "nzComponentName", "NzDemoMenuInlineCollapsedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "/components/layout/#components-layout-demo-side"], ["nzTitle", "Open current submenu only", "nzSelector", "nz-demo-menu-sider-current", "nzGenerateCommand", "ng g ng-zorro-antd:menu-sider-current <name>", "nzComponentName", "NzDemoMenuSiderCurrentComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Vertical menu", "nzSelector", "nz-demo-menu-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:menu-vertical <name>", "nzComponentName", "NzDemoMenuVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Menu Themes", "nzSelector", "nz-demo-menu-theme", "nzGenerateCommand", "ng g ng-zorro-antd:menu-theme <name>", "nzComponentName", "NzDemoMenuThemeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Switch the menu type", "nzSelector", "nz-demo-menu-switch-mode", "nzGenerateCommand", "ng g ng-zorro-antd:menu-switch-mode <name>", "nzComponentName", "NzDemoMenuSwitchModeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Router", "nzSelector", "nz-demo-menu-router", "nzGenerateCommand", "ng g ng-zorro-antd:menu-router <name>", "nzComponentName", "NzDemoMenuRouterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://angular.io/api/router/RouterLink"], ["nzTitle", "Recursive", "nzSelector", "nz-demo-menu-recursive", "nzGenerateCommand", "ng g ng-zorro-antd:menu-recursive <name>", "nzComponentName", "NzDemoMenuRecursiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://github.com/angular/angular/issues/14842"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "[nz-menu]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-menu]'", 1, "anchor"], ["id", "[nz-menu-item]"], ["onclick", "window.location.hash = '[nz-menu-item]'", 1, "anchor"], ["href", "https://www.angular.cn/api/router/RouterLink"], ["href", "https://angular.io/api/router/RouterLinkActive#routerLinkActiveOptions"], ["id", "[nz-submenu]"], ["onclick", "window.location.hash = '[nz-submenu]'", 1, "anchor"], ["id", "[nz-menu-group]"], ["onclick", "window.location.hash = '[nz-menu-group]'", 1, "anchor"], ["id", "[nz-menu-divider]"], ["onclick", "window.location.hash = '[nz-menu-divider]'", 1, "anchor"]], template: function NzDemoMenuEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("nzClick", function NzDemoMenuEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "section", 12)(14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "span", 13)(17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Menu list of Navigation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "h2", 17)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "More layouts with navigation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "pre", 20)(36, "code")(37, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, " NzMenuModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "'ng-zorro-antd/menu'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "h2")(54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NzDemoMenuEnComponent_Template_i_click_56_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 25)(58, "div", 26)(59, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](60, "nz-demo-menu-horizontal", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "Horizontal top navigation menu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](65, "nz-demo-menu-inline", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "Vertical menu with inline submenus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](70, "nz-demo-menu-inline-collapsed", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "Inline menu could be collapsed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, "Here is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "a complete demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, " with sider layout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](80, "nz-demo-menu-sider-current", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](85, "nz-demo-menu-vertical", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, "Submenus open as pop-ups.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](90, "nz-demo-menu-theme", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, "There are two built-in themes: 'light' and 'dark'. The default value is 'light'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](95, "nz-demo-menu-switch-mode", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "Show the dynamic switching mode (between 'inline' and 'vertical').");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](100, "nz-demo-menu-router", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, "Automatically activate menu items based on routing, should work with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, "routerLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](108, "nz-demo-menu-recursive", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](111, "Recursive generation menu, you need to set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "nzPaddingLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, "manually");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](116, ", only works when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "nzMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121, "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, " mode and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, "nzInlineCollapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](125, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](128, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "blockquote")(130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "Track Issue\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, "https://github.com/angular/angular/issues/14842");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "h2", 42)(136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](137, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](139, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "pre", 44)(141, "code")(142, "span", 45)(143, "span", 45)(144, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](146, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](147, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, "nz-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](151, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](152, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](153, "span", 45)(154, "span", 45)(155, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](156, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](160, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](162, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163, "Menu 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "span", 45)(165, "span", 45)(166, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](167, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](170, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](171, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](172, "span", 45)(173, "span", 45)(174, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](177, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](178, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](179, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](180, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](181, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](182, "Menu 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "span", 45)(184, "span", 45)(185, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](188, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](189, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](190, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "span", 45)(192, "span", 45)(193, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](194, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](196, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](197, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](198, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](199, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](200, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](201, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](202, "span", 47)(203, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](204, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](205, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](206, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](207, "SubMenu Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](208, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](209, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](210, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](211, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](212, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](213, "span", 45)(214, "span", 45)(215, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](216, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](217, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](218, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](219, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](220, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](221, "span", 45)(222, "span", 45)(223, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](224, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](226, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](227, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](228, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](230, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](231, "SubMenu Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](232, "span", 45)(233, "span", 45)(234, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](235, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](236, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](237, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](238, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](239, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](240, "span", 45)(241, "span", 45)(242, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](243, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](244, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](245, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](246, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](247, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](248, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](249, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](250, "SubMenu Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](251, "span", 45)(252, "span", 45)(253, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](254, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](255, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](256, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](257, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](258, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](259, "span", 45)(260, "span", 45)(261, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](262, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](263, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](264, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](265, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](266, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](267, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](268, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](269, "SubMenu Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](270, "span", 45)(271, "span", 45)(272, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](273, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](274, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](275, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](276, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](277, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](278, "span", 45)(279, "span", 45)(280, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](281, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](282, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](283, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](284, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](285, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](286, "span", 45)(287, "span", 45)(288, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](289, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](290, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](291, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](292, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](293, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](294, "span", 45)(295, "span", 45)(296, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](297, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](298, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](299, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](300, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](301, "h3", 48)(302, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](303, "[nz-menu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](304, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](305, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](306, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](307, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](308, "table")(309, "thead")(310, "tr")(311, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](312, "Param");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](313, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](314, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](315, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](316, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](317, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](318, "Default value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](319, "tbody")(320, "tr")(321, "td")(322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](323, "[nzInlineCollapsed]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](325, "specifies the collapsed status when menu is inline mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](328, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](330, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](331, "tr")(332, "td")(333, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](334, "[nzInlineIndent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](336, "indent px of inline menu item on each level");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](337, "td")(338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](339, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](340, "td")(341, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](342, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](343, "tr")(344, "td")(345, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](346, "[nzMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](348, "type of the menu; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](349, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](350, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](351, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](353, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](354, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](356, "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](357, " modes are supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](358, "td")(359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](360, "'vertical' | 'horizontal' | 'inline'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](361, "td")(362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](363, "'vertical'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](364, "tr")(365, "td")(366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](367, "[nzSelectable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](369, "allow selecting menu items");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](370, "td")(371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](372, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](373, "td")(374, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](375, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](376, "tr")(377, "td")(378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](379, "[nzTheme]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](381, "color theme of the menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](382, "td")(383, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](384, "'light' | 'dark'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](385, "td")(386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](387, "'light'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](388, "tr")(389, "td")(390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](391, "(nzClick)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](393, "the Output when click nz-menu-item inside nz-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](394, "td")(395, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](396, "EventEmitter<NzMenuItemDirective>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](398, "h3", 51)(399, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](400, "[nz-menu-item]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](401, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](402, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](403, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](404, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](405, "table")(406, "thead")(407, "tr")(408, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](409, "Param");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](410, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](411, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](412, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](413, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](414, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](415, "Default value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](416, "tbody")(417, "tr")(418, "td")(419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](420, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](422, "whether menu item is disabled or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](423, "td")(424, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](425, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](426, "td")(427, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](428, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](429, "tr")(430, "td")(431, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](432, "[nzSelected]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](433, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](434, "whether menu item is selected or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](435, "td")(436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](437, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](438, "td")(439, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](440, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](441, "tr")(442, "td")(443, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](444, "[nzMatchRouter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](445, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](446, "whether auto set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](447, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](448, "nzSelected");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](449, " according to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](450, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](451, "routerLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](452, "td")(453, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](454, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](455, "td")(456, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](457, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](458, "tr")(459, "td")(460, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](461, "[nzMatchRouterExact]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](463, "only match when the url matches the link exactly, same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](464, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](465, "routerLinkActiveOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](466, "td")(467, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](468, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](469, "td")(470, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](471, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](472, "h3", 55)(473, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](474, "[nz-submenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](475, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](476, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](477, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](478, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](479, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](480, "You can set the title of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](481, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](482, "[nz-submenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](483, " in the following ways.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](484, "pre", 44)(485, "code")(486, "span", 45)(487, "span", 45)(488, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](489, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](490, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](491, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](492, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](493, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](494, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](495, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](496, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](497, "span", 47)(498, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](499, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](500, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](501, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](502, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](503, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](504, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](505, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](506, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](507, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](508, "span", 47)(509, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](510, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](511, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](512, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](513, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](514, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](515, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](516, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](517, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](518, "span", 45)(519, "span", 45)(520, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](521, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](522, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](523, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](524, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](525, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](526, "span", 45)(527, "span", 45)(528, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](529, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](530, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](531, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](532, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](533, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](534, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](535, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](536, "span", 45)(537, "span", 45)(538, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](539, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](540, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](541, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](542, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](543, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](544, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](545, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](546, "span", 45)(547, "span", 45)(548, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](549, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](550, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](551, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](552, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](553, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](554, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](555, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](556, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](557, "span", 47)(558, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](559, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](560, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](561, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](562, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](563, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](564, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](565, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](566, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](567, "span", 45)(568, "span", 45)(569, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](570, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](571, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](572, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](573, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](574, "span", 45)(575, "span", 45)(576, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](577, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](578, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](579, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](580, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](581, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](582, "span", 45)(583, "span", 45)(584, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](585, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](586, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](587, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](588, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](589, "span", 45)(590, "span", 45)(591, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](592, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](593, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](594, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](595, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](596, "span", 45)(597, "span", 45)(598, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](599, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](600, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](601, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](602, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](603, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](604, "span", 45)(605, "span", 45)(606, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](607, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](608, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](609, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](610, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](611, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](612, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](613, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](614, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](615, "span", 47)(616, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](617, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](618, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](619, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](620, "titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](621, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](622, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](623, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](624, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](625, "span", 45)(626, "span", 45)(627, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](628, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](629, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](630, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](631, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](632, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](633, "span", 45)(634, "span", 45)(635, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](636, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](637, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](638, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](639, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](640, "#titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](641, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](642, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](643, "span", 45)(644, "span", 45)(645, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](646, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](647, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](648, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](649, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](650, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](651, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](652, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](653, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](654, "span", 47)(655, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](656, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](657, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](658, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](659, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](660, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](661, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](662, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](663, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](664, "span", 45)(665, "span", 45)(666, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](667, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](668, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](669, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](670, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](671, "span", 45)(672, "span", 45)(673, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](674, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](675, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](676, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](677, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](678, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](679, "span", 45)(680, "span", 45)(681, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](682, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](683, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](684, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](685, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](686, "span", 45)(687, "span", 45)(688, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](689, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](690, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](691, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](692, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](693, "table")(694, "thead")(695, "tr")(696, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](697, "Param");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](698, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](699, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](700, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](701, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](702, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](703, "Default value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](704, "tbody")(705, "tr")(706, "td")(707, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](708, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](709, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](710, "whether sub menu is open or not, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](711, "td")(712, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](713, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](714, "td")(715, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](716, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](717, "tr")(718, "td")(719, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](720, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](721, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](722, "whether sub menu is disabled or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](723, "td")(724, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](725, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](726, "td")(727, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](728, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](729, "tr")(730, "td")(731, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](732, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](733, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](734, "set submenu title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](735, "td")(736, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](737, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](738, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](739, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](740, "tr")(741, "td")(742, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](743, "[nzIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](744, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](745, "icon type in title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](746, "td")(747, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](748, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](749, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](750, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](751, "tr")(752, "td")(753, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](754, "[nzMenuClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](755, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](756, "Custom the submenu container's class name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](757, "td")(758, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](759, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](760, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](761, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](762, "tr")(763, "td")(764, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](765, "(nzOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](766, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](767, "nzOpen callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](768, "td")(769, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](770, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](771, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](772, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](773, "h3", 57)(774, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](775, "[nz-menu-group]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](776, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](777, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](778, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](779, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](780, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](781, "You can set the title of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](782, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](783, "[nz-menu-group]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](784, " in the following ways.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](785, "pre", 44)(786, "code")(787, "span", 45)(788, "span", 45)(789, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](790, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](791, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](792, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](793, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](794, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](795, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](796, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](797, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](798, "span", 47)(799, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](800, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](801, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](802, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](803, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](804, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](805, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](806, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](807, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](808, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](809, "span", 47)(810, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](811, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](812, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](813, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](814, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](815, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](816, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](817, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](818, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](819, "span", 45)(820, "span", 45)(821, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](822, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](823, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](824, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](825, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](826, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](827, "span", 45)(828, "span", 45)(829, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](830, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](831, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](832, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](833, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](834, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](835, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](836, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](837, "span", 45)(838, "span", 45)(839, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](840, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](841, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](842, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](843, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](844, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](845, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](846, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](847, "span", 45)(848, "span", 45)(849, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](850, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](851, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](852, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](853, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](854, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](855, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](856, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](857, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](858, "span", 47)(859, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](860, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](861, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](862, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](863, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](864, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](865, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](866, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](867, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](868, "span", 45)(869, "span", 45)(870, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](871, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](872, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](873, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](874, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](875, "span", 45)(876, "span", 45)(877, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](878, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](879, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](880, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](881, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](882, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](883, "span", 45)(884, "span", 45)(885, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](886, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](887, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](888, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](889, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](890, "span", 45)(891, "span", 45)(892, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](893, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](894, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](895, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](896, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](897, "span", 45)(898, "span", 45)(899, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](900, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](901, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](902, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](903, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](904, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](905, "span", 45)(906, "span", 45)(907, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](908, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](909, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](910, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](911, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](912, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](913, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](914, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](915, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](916, "span", 47)(917, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](918, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](919, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](920, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](921, "titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](922, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](923, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](924, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](925, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](926, "span", 45)(927, "span", 45)(928, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](929, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](930, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](931, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](932, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](933, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](934, "span", 45)(935, "span", 45)(936, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](937, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](938, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](939, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](940, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](941, "#titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](942, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](943, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](944, "span", 45)(945, "span", 45)(946, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](947, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](948, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](949, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](950, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](951, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](952, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](953, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](954, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](955, "span", 47)(956, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](957, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](958, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](959, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](960, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](961, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](962, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](963, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](964, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](965, "span", 45)(966, "span", 45)(967, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](968, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](969, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](970, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](971, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](972, "span", 45)(973, "span", 45)(974, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](975, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](976, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](977, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](978, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](979, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](980, "span", 45)(981, "span", 45)(982, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](983, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](984, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](985, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](986, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](987, "span", 45)(988, "span", 45)(989, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](990, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](991, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](992, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](993, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](994, "table")(995, "thead")(996, "tr")(997, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](998, "Param");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](999, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1000, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1001, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1002, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1003, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1004, "Default value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1005, "tbody")(1006, "tr")(1007, "td")(1008, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1009, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1010, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1011, "set menu group title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1012, "td")(1013, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1014, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1015, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1016, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1017, "h3", 59)(1018, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1019, "[nz-menu-divider]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1020, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1021, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1022, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1023, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1024, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1025, "Divider line in between menu items, only used in vertical popup Menu or Dropdown Menu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-horizontal")("nzLink", "components-menu-demo-horizontal")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/horizontal.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-inline")("nzLink", "components-menu-demo-inline")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/inline.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-inline-collapsed")("nzLink", "components-menu-demo-inline-collapsed")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/inline-collapsed.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-sider-current")("nzLink", "components-menu-demo-sider-current")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/sider-current.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-vertical")("nzLink", "components-menu-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-theme")("nzLink", "components-menu-demo-theme")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/theme.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-switch-mode")("nzLink", "components-menu-demo-switch-mode")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/switch-mode.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-router")("nzLink", "components-menu-demo-router")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/router.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-recursive")("nzLink", "components-menu-demo-recursive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/recursive.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _horizontal__WEBPACK_IMPORTED_MODULE_1__.NzDemoMenuHorizontalComponent, _inline__WEBPACK_IMPORTED_MODULE_2__.NzDemoMenuInlineComponent, _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__.NzDemoMenuInlineCollapsedComponent, _sider_current__WEBPACK_IMPORTED_MODULE_4__.NzDemoMenuSiderCurrentComponent, _vertical__WEBPACK_IMPORTED_MODULE_5__.NzDemoMenuVerticalComponent, _theme__WEBPACK_IMPORTED_MODULE_6__.NzDemoMenuThemeComponent, _switch_mode__WEBPACK_IMPORTED_MODULE_7__.NzDemoMenuSwitchModeComponent, _router__WEBPACK_IMPORTED_MODULE_8__.NzDemoMenuRouterComponent, _recursive__WEBPACK_IMPORTED_MODULE_9__.NzDemoMenuRecursiveComponent], encapsulation: 2 });


/***/ }),

/***/ 77222:
/*!***********************************************!*\
  !*** ./src/app/components/menu/horizontal.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuHorizontalComponent": () => (/* binding */ NzDemoMenuHorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);




class NzDemoMenuHorizontalComponent {
}
NzDemoMenuHorizontalComponent.ɵfac = function NzDemoMenuHorizontalComponent_Factory(t) { return new (t || NzDemoMenuHorizontalComponent)(); };
NzDemoMenuHorizontalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoMenuHorizontalComponent, selectors: [["nz-demo-menu-horizontal"]], decls: 36, vars: 0, consts: [["nz-menu", "", "nzMode", "horizontal"], ["nz-menu-item", "", "nzSelected", ""], ["nz-icon", "", "nzType", "mail"], ["nz-menu-item", "", "nzDisabled", ""], ["nz-icon", "", "nzType", "appstore"], ["nz-submenu", "", "nzTitle", "Navigation Three - Submenu", "nzIcon", "setting"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Sub Menu"], ["nz-submenu", "", "nzDisabled", "", "nzTitle", "Disabled Sub Menu"], ["href", "https://ng.ant.design", "target", "_blank", "rel", "noopener noreferrer"]], template: function NzDemoMenuHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Navigation One ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Navigation Two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5)(8, "ul")(9, "li", 6)(10, "ul")(11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8)(16, "ul")(17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9)(22, "ul")(23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 10)(28, "ul")(29, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 7)(34, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Navigation Four - Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent], encapsulation: 2 });


/***/ }),

/***/ 98045:
/*!*************************************************!*\
  !*** ./src/app/components/menu/index.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuModule": () => (/* binding */ NzDemoMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 58369);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal */ 77222);
/* harmony import */ var _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-collapsed */ 82781);
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline */ 61757);
/* harmony import */ var _recursive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recursive */ 69339);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ 32295);
/* harmony import */ var _sider_current__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sider-current */ 50860);
/* harmony import */ var _switch_mode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./switch-mode */ 16321);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme */ 42041);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vertical */ 26253);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zh.component */ 54953);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./en.component */ 1072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);






















class NzDemoMenuModule {
}
NzDemoMenuModule.ɵfac = function NzDemoMenuModule_Factory(t) { return new (t || NzDemoMenuModule)(); };
NzDemoMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: NzDemoMenuModule });
NzDemoMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoMenuEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoMenuZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](NzDemoMenuModule, { declarations: [_horizontal__WEBPACK_IMPORTED_MODULE_2__.NzDemoMenuHorizontalComponent,
        _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__.NzDemoMenuInlineCollapsedComponent,
        _inline__WEBPACK_IMPORTED_MODULE_4__.NzDemoMenuInlineComponent,
        _recursive__WEBPACK_IMPORTED_MODULE_5__.NzDemoMenuRecursiveComponent,
        _router__WEBPACK_IMPORTED_MODULE_6__.NzDemoMenuRouterComponent,
        _sider_current__WEBPACK_IMPORTED_MODULE_7__.NzDemoMenuSiderCurrentComponent,
        _switch_mode__WEBPACK_IMPORTED_MODULE_8__.NzDemoMenuSwitchModeComponent,
        _theme__WEBPACK_IMPORTED_MODULE_9__.NzDemoMenuThemeComponent,
        _vertical__WEBPACK_IMPORTED_MODULE_10__.NzDemoMenuVerticalComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoMenuZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_12__.NzDemoMenuEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_15__.NzMenuModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__.NzToolTipModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__.NzSwitchModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 82781:
/*!*****************************************************!*\
  !*** ./src/app/components/menu/inline-collapsed.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuInlineCollapsedComponent": () => (/* binding */ NzDemoMenuInlineCollapsedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);







class NzDemoMenuInlineCollapsedComponent {
    constructor() {
        this.isCollapsed = false;
    }
    toggleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
    }
}
NzDemoMenuInlineCollapsedComponent.ɵfac = function NzDemoMenuInlineCollapsedComponent_Factory(t) { return new (t || NzDemoMenuInlineCollapsedComponent)(); };
NzDemoMenuInlineCollapsedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoMenuInlineCollapsedComponent, selectors: [["nz-demo-menu-inline-collapsed"]], decls: 28, vars: 3, consts: [[1, "wrapper"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-icon", "", 3, "nzType"], ["nz-menu", "", "nzMode", "inline", "nzTheme", "dark", 3, "nzInlineCollapsed"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "nzSelected", "", 3, "nzTooltipTitle"], ["nz-icon", "", "nzType", "mail"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore"], ["nz-menu-item", ""], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting"]], template: function NzDemoMenuInlineCollapsedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoMenuInlineCollapsedComponent_Template_button_click_1_listener() { return ctx.toggleCollapsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3)(4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Navigation One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6)(9, "ul")(10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8)(15, "ul")(16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9)(21, "ul")(22, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isCollapsed ? "menu-unfold" : "menu-fold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzInlineCollapsed", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.isCollapsed ? "Navigation One" : "");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__.NzMenuItemDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzTooltipDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__.NzSubMenuComponent], styles: [".wrapper[_ngcontent-%COMP%] {\n        width: 240px;\n      }\n\n      button[_ngcontent-%COMP%] {\n        margin-bottom: 12px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlubGluZS1jb2xsYXBzZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtNQUNkOztNQUVBO1FBQ0UsbUJBQW1CO01BQ3JCIiwiZmlsZSI6ImlubGluZS1jb2xsYXBzZWQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 61757:
/*!*******************************************!*\
  !*** ./src/app/components/menu/inline.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuInlineComponent": () => (/* binding */ NzDemoMenuInlineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);



class NzDemoMenuInlineComponent {
}
NzDemoMenuInlineComponent.ɵfac = function NzDemoMenuInlineComponent_Factory(t) { return new (t || NzDemoMenuInlineComponent)(); };
NzDemoMenuInlineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoMenuInlineComponent, selectors: [["nz-demo-menu-inline"]], decls: 41, vars: 0, consts: [["nz-menu", "", "nzMode", "inline"], ["nz-submenu", "", "nzTitle", "Navigation One", "nzIcon", "mail", "nzOpen", ""], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", "", "nzSelected", ""], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting"]], template: function NzDemoMenuInlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "ul")(3, "li", 2)(4, "ul")(5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5)(10, "ul")(11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6)(16, "ul")(17, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7)(22, "ul")(23, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7)(28, "ul")(29, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 8)(34, "ul")(35, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Option 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Option 13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective], styles: ["[nz-menu][_ngcontent-%COMP%] {\n        width: 240px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlubGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO01BQ2QiLCJmaWxlIjoiaW5saW5lLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBbbnotbWVudV0ge1xuICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 58369:
/*!*******************************************!*\
  !*** ./src/app/components/menu/module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);






const moduleList = [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_0__.NzMenuModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_2__.NzToolTipModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__.NzDividerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule];


/***/ }),

/***/ 69339:
/*!**********************************************!*\
  !*** ./src/app/components/menu/recursive.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuRecursiveComponent": () => (/* binding */ NzDemoMenuRecursiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);





function NzDemoMenuRecursiveComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} if (rf & 2) {
    const menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", menu_r5.icon);
} }
function NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_1_i_1_Template, 1, 1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPaddingLeft", menu_r5.level * 24)("nzDisabled", menu_r5.disabled)("nzSelected", menu_r5.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r5.title);
} }
function NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_2_ng_container_2_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPaddingLeft", menu_r5.level * 24)("nzOpen", menu_r5.open)("nzTitle", menu_r5.title)("nzIcon", menu_r5.icon)("nzDisabled", menu_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, menu_r5.children));
} }
function NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_1_Template, 4, 5, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_li_2_Template, 3, 9, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menu_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menu_r5.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r5.children);
} }
function NzDemoMenuRecursiveComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoMenuRecursiveComponent_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 3);
} if (rf & 2) {
    const menus_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menus_r3);
} }
class NzDemoMenuRecursiveComponent {
    constructor() {
        this.mode = false;
        this.dark = false;
        this.menus = [
            {
                level: 1,
                title: 'Mail Group',
                icon: 'mail',
                open: true,
                selected: false,
                disabled: false,
                children: [
                    {
                        level: 2,
                        title: 'Group 1',
                        icon: 'bars',
                        open: false,
                        selected: false,
                        disabled: false,
                        children: [
                            {
                                level: 3,
                                title: 'Option 1',
                                selected: false,
                                disabled: false
                            },
                            {
                                level: 3,
                                title: 'Option 2',
                                selected: false,
                                disabled: true
                            }
                        ]
                    },
                    {
                        level: 2,
                        title: 'Group 2',
                        icon: 'bars',
                        selected: true,
                        disabled: false
                    },
                    {
                        level: 2,
                        title: 'Group 3',
                        icon: 'bars',
                        selected: false,
                        disabled: false
                    }
                ]
            },
            {
                level: 1,
                title: 'Team Group',
                icon: 'team',
                open: false,
                selected: false,
                disabled: false,
                children: [
                    {
                        level: 2,
                        title: 'User 1',
                        icon: 'user',
                        selected: false,
                        disabled: false
                    },
                    {
                        level: 2,
                        title: 'User 2',
                        icon: 'user',
                        selected: false,
                        disabled: false
                    }
                ]
            }
        ];
    }
}
NzDemoMenuRecursiveComponent.ɵfac = function NzDemoMenuRecursiveComponent_Factory(t) { return new (t || NzDemoMenuRecursiveComponent)(); };
NzDemoMenuRecursiveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoMenuRecursiveComponent, selectors: [["nz-demo-menu-recursive"]], decls: 4, vars: 4, consts: [["nz-menu", "", "nzMode", "inline", 2, "width", "240px"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["menuTpl", ""], [4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "nzPaddingLeft", "nzDisabled", "nzSelected", 4, "ngIf"], ["nz-submenu", "", 3, "nzPaddingLeft", "nzOpen", "nzTitle", "nzIcon", "nzDisabled", 4, "ngIf"], ["nz-menu-item", "", 3, "nzPaddingLeft", "nzDisabled", "nzSelected"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-submenu", "", 3, "nzPaddingLeft", "nzOpen", "nzTitle", "nzIcon", "nzDisabled"]], template: function NzDemoMenuRecursiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoMenuRecursiveComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoMenuRecursiveComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.menus));
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent], encapsulation: 2 });


/***/ }),

/***/ 32295:
/*!*******************************************!*\
  !*** ./src/app/components/menu/router.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuRouterComponent": () => (/* binding */ NzDemoMenuRouterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quicklink */ 45676);





const _c0 = function () { return ["/", "components", "menu", "en"]; };
const _c1 = function () { return ["/", "components", "menu", "zh"]; };
class NzDemoMenuRouterComponent {
}
NzDemoMenuRouterComponent.ɵfac = function NzDemoMenuRouterComponent_Factory(t) { return new (t || NzDemoMenuRouterComponent)(); };
NzDemoMenuRouterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoMenuRouterComponent, selectors: [["nz-demo-menu-router"]], decls: 7, vars: 4, consts: [["nz-menu", "", "nzMode", "horizontal"], ["nz-menu-item", "", "nzMatchRouter", ""], [3, "routerLink"]], template: function NzDemoMenuRouterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "English Menu Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1)(5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Chinese Menu Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, ngx_quicklink__WEBPACK_IMPORTED_MODULE_4__["ɵɵLinkDirective"]], encapsulation: 2 });


/***/ }),

/***/ 50860:
/*!**************************************************!*\
  !*** ./src/app/components/menu/sider-current.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuSiderCurrentComponent": () => (/* binding */ NzDemoMenuSiderCurrentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);



class NzDemoMenuSiderCurrentComponent {
    constructor() {
        this.openMap = {
            sub1: true,
            sub2: false,
            sub3: false
        };
    }
    openHandler(value) {
        for (const key in this.openMap) {
            if (key !== value) {
                this.openMap[key] = false;
            }
        }
    }
}
NzDemoMenuSiderCurrentComponent.ɵfac = function NzDemoMenuSiderCurrentComponent_Factory(t) { return new (t || NzDemoMenuSiderCurrentComponent)(); };
NzDemoMenuSiderCurrentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoMenuSiderCurrentComponent, selectors: [["nz-demo-menu-sider-current"]], decls: 35, vars: 3, consts: [["nz-menu", "", "nzMode", "inline", 2, "width", "240px"], ["nz-submenu", "", "nzTitle", "Navigation One", "nzIcon", "mail", 3, "nzOpen", "nzOpenChange"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore", 3, "nzOpen", "nzOpenChange"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting", 3, "nzOpen", "nzOpenChange"]], template: function NzDemoMenuSiderCurrentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_1_listener($event) { return ctx.openMap.sub1 = $event; })("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_1_listener() { return ctx.openHandler("sub1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul")(3, "li", 2)(4, "ul")(5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4)(10, "ul")(11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_15_listener($event) { return ctx.openMap.sub2 = $event; })("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_15_listener() { return ctx.openHandler("sub2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul")(17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6)(22, "ul")(23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_27_listener($event) { return ctx.openMap.sub3 = $event; })("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_27_listener() { return ctx.openHandler("sub3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul")(29, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOpen", ctx.openMap.sub1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOpen", ctx.openMap.sub2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOpen", ctx.openMap.sub3);
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective], encapsulation: 2 });


/***/ }),

/***/ 16321:
/*!************************************************!*\
  !*** ./src/app/components/menu/switch-mode.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuSwitchModeComponent": () => (/* binding */ NzDemoMenuSwitchModeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/divider */ 55570);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);






class NzDemoMenuSwitchModeComponent {
    constructor() {
        this.mode = false;
        this.dark = false;
    }
}
NzDemoMenuSwitchModeComponent.ɵfac = function NzDemoMenuSwitchModeComponent_Factory(t) { return new (t || NzDemoMenuSwitchModeComponent)(); };
NzDemoMenuSwitchModeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoMenuSwitchModeComponent, selectors: [["nz-demo-menu-switch-mode"]], decls: 42, vars: 4, consts: [[3, "ngModel", "ngModelChange"], ["nzType", "vertical"], ["nz-menu", "", 3, "nzMode", "nzTheme"], ["nz-submenu", "", "nzTitle", "Navigation One", "nzIcon", "mail"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting"]], template: function NzDemoMenuSwitchModeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoMenuSwitchModeComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Change Mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-divider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoMenuSwitchModeComponent_Template_nz_switch_ngModelChange_3_listener($event) { return ctx.dark = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Change Theme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br")(6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 2)(8, "li", 3)(9, "ul")(10, "li", 4)(11, "ul")(12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6)(17, "ul")(18, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7)(23, "ul")(24, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 8)(29, "ul")(30, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 9)(35, "ul")(36, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", ctx.mode ? "vertical" : "inline")("nzTheme", ctx.dark ? "dark" : "light");
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__.NzDividerComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzSubMenuComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuGroupComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__.NzMenuItemDirective], styles: ["[nz-menu][_ngcontent-%COMP%] {\n        width: 240px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC1tb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7TUFDZCIsImZpbGUiOiJzd2l0Y2gtbW9kZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LW1lbnVdIHtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 42041:
/*!******************************************!*\
  !*** ./src/app/components/menu/theme.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuThemeComponent": () => (/* binding */ NzDemoMenuThemeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/switch */ 65480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoMenuThemeComponent {
    constructor() {
        this.theme = true;
    }
}
NzDemoMenuThemeComponent.ɵfac = function NzDemoMenuThemeComponent_Factory(t) { return new (t || NzDemoMenuThemeComponent)(); };
NzDemoMenuThemeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoMenuThemeComponent, selectors: [["nz-demo-menu-theme"]], decls: 42, vars: 2, consts: [[3, "ngModel", "ngModelChange"], ["checked", ""], ["unchecked", ""], ["nz-menu", "", "nzMode", "inline", 2, "width", "240px", 3, "nzTheme"], ["nz-submenu", "", "nzOpen", "", "nzTitle", "Navigation One", "nzIcon", "mail"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", "", "nzSelected", ""], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting"]], template: function NzDemoMenuThemeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoMenuThemeComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.theme = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br")(6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 3)(8, "li", 4)(9, "ul")(10, "li", 5)(11, "ul")(12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8)(17, "ul")(18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9)(23, "ul")(24, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 10)(29, "ul")(30, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 11)(35, "ul")(36, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTheme", ctx.theme ? "dark" : "light");
    } }, directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_1__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__.NzSubMenuComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__.NzMenuGroupComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__.NzMenuItemDirective], encapsulation: 2 });


/***/ }),

/***/ 26253:
/*!*********************************************!*\
  !*** ./src/app/components/menu/vertical.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuVerticalComponent": () => (/* binding */ NzDemoMenuVerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 46191);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);



class NzDemoMenuVerticalComponent {
    change(value) {
        console.log(value);
    }
}
NzDemoMenuVerticalComponent.ɵfac = function NzDemoMenuVerticalComponent_Factory(t) { return new (t || NzDemoMenuVerticalComponent)(); };
NzDemoMenuVerticalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoMenuVerticalComponent, selectors: [["nz-demo-menu-vertical"]], decls: 35, vars: 1, consts: [["nz-menu", "", 3, "nzMode"], ["nz-submenu", "", "nzTitle", "Navigation One", "nzIcon", "mail"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore", 3, "nzOpenChange"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting"]], template: function NzDemoMenuVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "ul")(3, "li", 2)(4, "ul")(5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4)(10, "ul")(11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOpenChange", function NzDemoMenuVerticalComponent_Template_li_nzOpenChange_15_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul")(17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6)(22, "ul")(23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7)(28, "ul")(29, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", "vertical");
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemDirective], styles: ["[nz-menu][_ngcontent-%COMP%] {\n        width: 240px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7TUFDZCIsImZpbGUiOiJ2ZXJ0aWNhbC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LW1lbnVdIHtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 54953:
/*!*************************************************!*\
  !*** ./src/app/components/menu/zh.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoMenuZhComponent": () => (/* binding */ NzDemoMenuZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal */ 77222);
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline */ 61757);
/* harmony import */ var _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-collapsed */ 82781);
/* harmony import */ var _sider_current__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sider-current */ 50860);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vertical */ 26253);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ 42041);
/* harmony import */ var _switch_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./switch-mode */ 16321);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router */ 32295);
/* harmony import */ var _recursive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recursive */ 69339);


















class NzDemoMenuZhComponent {
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
NzDemoMenuZhComponent.ɵfac = function NzDemoMenuZhComponent_Factory(t) { return new (t || NzDemoMenuZhComponent)(); };
NzDemoMenuZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NzDemoMenuZhComponent, selectors: [["nz-demo-menu"]], viewQuery: function NzDemoMenuZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 1022, vars: 31, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-menu-demo-horizontal", "nzTitle", "\u9876\u90E8\u5BFC\u822A"], ["nzHref", "#components-menu-demo-inline", "nzTitle", "\u5185\u5D4C\u83DC\u5355"], ["nzHref", "#components-menu-demo-inline-collapsed", "nzTitle", "\u7F29\u8D77\u5185\u5D4C\u83DC\u5355"], ["nzHref", "#components-menu-demo-sider-current", "nzTitle", "\u53EA\u5C55\u5F00\u5F53\u524D\u7236\u7EA7\u83DC\u5355"], ["nzHref", "#components-menu-demo-vertical", "nzTitle", "\u5782\u76F4\u83DC\u5355"], ["nzHref", "#components-menu-demo-theme", "nzTitle", "\u4E3B\u9898"], ["nzHref", "#components-menu-demo-switch-mode", "nzTitle", "\u5207\u6362\u83DC\u5355\u7C7B\u578B"], ["nzHref", "#components-menu-demo-router", "nzTitle", "\u914D\u5408\u8DEF\u7531\u4F7F\u7528"], ["nzHref", "#components-menu-demo-recursive", "nzTitle", "\u9012\u5F52\u751F\u6210\u83DC\u5355"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], ["href", "/components/layout/zh"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u9876\u90E8\u5BFC\u822A", "nzSelector", "nz-demo-menu-horizontal", "nzGenerateCommand", "ng g ng-zorro-antd:menu-horizontal <name>", "nzComponentName", "NzDemoMenuHorizontalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u5185\u5D4C\u83DC\u5355", "nzSelector", "nz-demo-menu-inline", "nzGenerateCommand", "ng g ng-zorro-antd:menu-inline <name>", "nzComponentName", "NzDemoMenuInlineComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7F29\u8D77\u5185\u5D4C\u83DC\u5355", "nzSelector", "nz-demo-menu-inline-collapsed", "nzGenerateCommand", "ng g ng-zorro-antd:menu-inline-collapsed <name>", "nzComponentName", "NzDemoMenuInlineCollapsedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "/components/layout/#components-layout-demo-side"], ["nzTitle", "\u53EA\u5C55\u5F00\u5F53\u524D\u7236\u7EA7\u83DC\u5355", "nzSelector", "nz-demo-menu-sider-current", "nzGenerateCommand", "ng g ng-zorro-antd:menu-sider-current <name>", "nzComponentName", "NzDemoMenuSiderCurrentComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5782\u76F4\u83DC\u5355", "nzSelector", "nz-demo-menu-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:menu-vertical <name>", "nzComponentName", "NzDemoMenuVerticalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E3B\u9898", "nzSelector", "nz-demo-menu-theme", "nzGenerateCommand", "ng g ng-zorro-antd:menu-theme <name>", "nzComponentName", "NzDemoMenuThemeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5207\u6362\u83DC\u5355\u7C7B\u578B", "nzSelector", "nz-demo-menu-switch-mode", "nzGenerateCommand", "ng g ng-zorro-antd:menu-switch-mode <name>", "nzComponentName", "NzDemoMenuSwitchModeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u914D\u5408\u8DEF\u7531\u4F7F\u7528", "nzSelector", "nz-demo-menu-router", "nzGenerateCommand", "ng g ng-zorro-antd:menu-router <name>", "nzComponentName", "NzDemoMenuRouterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://www.angular.cn/api/router/RouterLink"], ["nzTitle", "\u9012\u5F52\u751F\u6210\u83DC\u5355", "nzSelector", "nz-demo-menu-recursive", "nzGenerateCommand", "ng g ng-zorro-antd:menu-recursive <name>", "nzComponentName", "NzDemoMenuRecursiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://github.com/angular/angular/issues/14842"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "[nz-menu]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-menu]'", 1, "anchor"], ["id", "[nz-menu-item]"], ["onclick", "window.location.hash = '[nz-menu-item]'", 1, "anchor"], ["href", "https://angular.io/api/router/RouterLinkActive#routerLinkActiveOptions"], ["id", "[nz-submenu]"], ["onclick", "window.location.hash = '[nz-submenu]'", 1, "anchor"], ["id", "[nz-menu-group]"], ["onclick", "window.location.hash = '[nz-menu-group]'", 1, "anchor"], ["id", "[nz-menu-divider]"], ["onclick", "window.location.hash = '[nz-menu-divider]'", 1, "anchor"]], template: function NzDemoMenuZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("nzClick", function NzDemoMenuZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "section", 12)(14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "\u5BFC\u822A\u83DC\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "\u4E3A\u9875\u9762\u548C\u529F\u80FD\u63D0\u4F9B\u5BFC\u822A\u7684\u83DC\u5355\u5217\u8868\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "h2", 17)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "\u5BFC\u822A\u83DC\u5355\u662F\u4E00\u4E2A\u7F51\u7AD9\u7684\u7075\u9B42\uFF0C\u7528\u6237\u4F9D\u8D56\u5BFC\u822A\u5728\u5404\u4E2A\u9875\u9762\u4E2D\u8FDB\u884C\u8DF3\u8F6C\u3002\u4E00\u822C\u5206\u4E3A\u9876\u90E8\u5BFC\u822A\u548C\u4FA7\u8FB9\u5BFC\u822A\uFF0C\u9876\u90E8\u5BFC\u822A\u63D0\u4F9B\u5168\u5C40\u6027\u7684\u7C7B\u76EE\u548C\u529F\u80FD\uFF0C\u4FA7\u8FB9\u5BFC\u822A\u63D0\u4F9B\u591A\u7EA7\u7ED3\u6784\u6765\u6536\u7EB3\u548C\u6392\u5217\u7F51\u7AD9\u67B6\u6784\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "\u66F4\u591A\u5E03\u5C40\u548C\u5BFC\u822A\u7684\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "\u901A\u7528\u5E03\u5C40");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "pre", 20)(37, "code")(38, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, " NzMenuModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "'ng-zorro-antd/menu'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "h2")(55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NzDemoMenuZhComponent_Template_i_click_57_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 25)(59, "div", 26)(60, "nz-code-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "nz-demo-menu-horizontal", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "\u6C34\u5E73\u7684\u9876\u90E8\u5BFC\u822A\u83DC\u5355\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "nz-demo-menu-inline", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "\u5782\u76F4\u83DC\u5355\uFF0C\u5B50\u83DC\u5355\u5185\u5D4C\u5728\u83DC\u5355\u533A\u57DF\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "nz-demo-menu-inline-collapsed", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "\u5185\u5D4C\u83DC\u5355\u53EF\u4EE5\u88AB\u7F29\u8D77/\u5C55\u5F00\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "\u4F60\u53EF\u4EE5\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, " \u91CC\u67E5\u770B\u4FA7\u8FB9\u5E03\u5C40\u7ED3\u5408\u7684\u5B8C\u6574\u793A\u4F8B\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](81, "nz-demo-menu-sider-current", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "\u70B9\u51FB\u83DC\u5355\uFF0C\u6536\u8D77\u5176\u4ED6\u5C55\u5F00\u7684\u6240\u6709\u83DC\u5355\uFF0C\u4FDD\u6301\u83DC\u5355\u805A\u7126\u7B80\u6D01\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](86, "nz-demo-menu-vertical", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "\u5B50\u83DC\u5355\u662F\u5F39\u51FA\u7684\u5F62\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](91, "nz-demo-menu-theme", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "\u5185\u5EFA\u4E86\u4E24\u5957\u4E3B\u9898 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, "light|dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "\uFF0C\u9ED8\u8BA4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99, "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](102, "nz-demo-menu-switch-mode", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, "\u5C55\u793A\u52A8\u6001\u5207\u6362\u6A21\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](107, "nz-demo-menu-router", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "\u81EA\u52A8\u6839\u636E\u8DEF\u7531\u6FC0\u6D3B\u83DC\u5355\u9879\uFF0C\u9700\u8981\u7ED3\u5408 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "routerLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, " \u4E00\u8D77\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](115, "nz-demo-menu-recursive", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "\u9012\u5F52\u751F\u6210\u83DC\u5355\uFF0C\u9700\u8981\u624B\u52A8\u6307\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120, "nzPaddingLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121, "\uFF0C\u4EC5\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123, "nzMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](126, "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, " \u7684\u6A21\u5F0F\uFF0C\u4E14 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, "nzInlineCollapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](130, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, " \u7684\u60C5\u51B5\u4E0B\u6709\u6548\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "blockquote")(135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136, "\u8FFD\u8E2A Issue\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](138, "https://github.com/angular/angular/issues/14842");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "h2", 42)(141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](144, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "pre", 44)(146, "code")(147, "span", 45)(148, "span", 45)(149, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](151, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](152, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](153, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](154, "nz-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](155, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](156, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](157, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](158, "span", 45)(159, "span", 45)(160, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](161, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](165, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](167, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, "Menu 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "span", 45)(170, "span", 45)(171, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](172, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "span", 45)(178, "span", 45)(179, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](180, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](182, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](184, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](185, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](187, "Menu 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](188, "span", 45)(189, "span", 45)(190, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](191, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](193, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](194, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](195, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](196, "span", 45)(197, "span", 45)(198, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](199, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](201, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](202, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](203, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](204, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](205, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](206, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](207, "span", 47)(208, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](209, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](210, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](211, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](212, "SubMenu Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](213, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](214, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](215, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](216, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](217, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](218, "span", 45)(219, "span", 45)(220, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](221, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](222, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](223, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](224, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](225, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](226, "span", 45)(227, "span", 45)(228, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](229, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](230, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](231, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](232, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](233, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](234, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](235, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](236, "SubMenu Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](237, "span", 45)(238, "span", 45)(239, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](240, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](241, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](242, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](243, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](244, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](245, "span", 45)(246, "span", 45)(247, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](248, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](249, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](250, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](251, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](252, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](253, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](254, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](255, "SubMenu Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](256, "span", 45)(257, "span", 45)(258, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](259, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](261, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](262, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](263, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](264, "span", 45)(265, "span", 45)(266, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](267, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](268, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](269, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](270, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](271, "nz-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](272, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](273, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](274, "SubMenu Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](275, "span", 45)(276, "span", 45)(277, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](278, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](279, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](280, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](281, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](282, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](283, "span", 45)(284, "span", 45)(285, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](286, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](287, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](288, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](289, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](290, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](291, "span", 45)(292, "span", 45)(293, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](294, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](295, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](296, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](297, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](298, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](299, "span", 45)(300, "span", 45)(301, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](302, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](303, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](304, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](305, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](306, "h3", 48)(307, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](308, "[nz-menu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](309, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](310, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](311, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](312, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](313, "table")(314, "thead")(315, "tr")(316, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](317, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](318, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](319, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](320, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](321, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](322, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](323, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](324, "tbody")(325, "tr")(326, "td")(327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](328, "[nzInlineCollapsed]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](330, "inline \u65F6\u83DC\u5355\u662F\u5426\u6536\u8D77\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](331, "td")(332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](333, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](335, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](336, "tr")(337, "td")(338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](339, "[nzInlineIndent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](341, "inline \u6A21\u5F0F\u7684\u83DC\u5355\u7F29\u8FDB\u5BBD\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](342, "td")(343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](344, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](345, "td")(346, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](347, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](348, "tr")(349, "td")(350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](351, "[nzMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](353, "\u83DC\u5355\u7C7B\u578B\uFF0C\u73B0\u5728\u652F\u6301\u5782\u76F4\u3001\u6C34\u5E73\u3001\u548C\u5185\u5D4C\u6A21\u5F0F\u4E09\u79CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](354, "td")(355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](356, "'vertical' | 'horizontal' | 'inline'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](357, "td")(358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](359, "'vertical'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](360, "tr")(361, "td")(362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](363, "[nzSelectable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](365, "\u662F\u5426\u5141\u8BB8\u9009\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](366, "td")(367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](368, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](369, "td")(370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](371, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](372, "tr")(373, "td")(374, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](375, "[nzTheme]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](376, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](377, "\u4E3B\u9898\u989C\u8272");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](378, "td")(379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](380, "'light' | 'dark'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](381, "td")(382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](383, "'light'");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](384, "tr")(385, "td")(386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](387, "(nzClick)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](389, "\u70B9\u51FB nz-menu-item \u8F93\u51FA\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](390, "td")(391, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](392, "EventEmitter<NzMenuItemDirective>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](393, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](394, "h3", 51)(395, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](396, "[nz-menu-item]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](397, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](398, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](399, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](400, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](401, "table")(402, "thead")(403, "tr")(404, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](405, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](406, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](407, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](408, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](409, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](410, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](411, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](412, "tbody")(413, "tr")(414, "td")(415, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](416, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](418, "\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](419, "td")(420, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](421, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](422, "td")(423, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](424, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](425, "tr")(426, "td")(427, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](428, "[nzSelected]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](430, "\u662F\u5426\u88AB\u9009\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](431, "td")(432, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](433, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](434, "td")(435, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](436, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](437, "tr")(438, "td")(439, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](440, "[nzMatchRouter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](442, "\u662F\u5426\u6839\u636E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](443, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](444, "routerLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](445, " \u81EA\u52A8\u8BBE\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](446, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](447, "nzSelected");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](448, "td")(449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](450, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](451, "td")(452, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](453, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](454, "tr")(455, "td")(456, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](457, "[nzMatchRouterExact]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](459, "\u662F\u5426\u8DEF\u7531\u5B8C\u6574\u7CBE\u786E\u5339\u914D, \u8BE6\u89C1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](460, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](461, "routerLinkActiveOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](462, "td")(463, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](464, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](465, "td")(466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](467, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](468, "h3", 54)(469, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](470, "[nz-submenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](471, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](472, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](473, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](474, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](475, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](476, "\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4E09\u79CD\u65B9\u5F0F\u6765\u5B9A\u4E49 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](477, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](478, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](479, " \u7684\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](480, "pre", 44)(481, "code")(482, "span", 45)(483, "span", 45)(484, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](485, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](486, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](487, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](488, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](489, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](490, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](491, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](492, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](493, "span", 47)(494, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](495, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](496, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](497, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](498, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](499, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](500, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](501, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](502, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](503, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](504, "span", 47)(505, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](506, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](507, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](508, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](509, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](510, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](511, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](512, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](513, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](514, "span", 45)(515, "span", 45)(516, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](517, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](518, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](519, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](520, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](521, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](522, "span", 45)(523, "span", 45)(524, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](525, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](526, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](527, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](528, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](529, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](530, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](531, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](532, "span", 45)(533, "span", 45)(534, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](535, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](536, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](537, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](538, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](539, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](540, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](541, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](542, "span", 45)(543, "span", 45)(544, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](545, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](546, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](547, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](548, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](549, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](550, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](551, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](552, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](553, "span", 47)(554, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](555, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](556, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](557, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](558, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](559, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](560, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](561, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](562, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](563, "span", 45)(564, "span", 45)(565, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](566, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](567, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](568, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](569, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](570, "span", 45)(571, "span", 45)(572, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](573, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](574, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](575, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](576, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](577, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](578, "span", 45)(579, "span", 45)(580, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](581, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](582, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](583, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](584, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](585, "span", 45)(586, "span", 45)(587, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](588, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](589, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](590, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](591, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](592, "span", 45)(593, "span", 45)(594, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](595, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](596, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](597, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](598, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](599, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](600, "span", 45)(601, "span", 45)(602, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](603, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](604, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](605, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](606, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](607, "nz-submenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](608, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](609, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](610, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](611, "span", 47)(612, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](613, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](614, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](615, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](616, "titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](617, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](618, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](619, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](620, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](621, "span", 45)(622, "span", 45)(623, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](624, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](625, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](626, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](627, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](628, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](629, "span", 45)(630, "span", 45)(631, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](632, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](633, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](634, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](635, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](636, "#titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](637, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](638, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](639, "span", 45)(640, "span", 45)(641, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](642, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](643, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](644, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](645, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](646, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](647, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](648, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](649, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](650, "span", 47)(651, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](652, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](653, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](654, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](655, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](656, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](657, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](658, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](659, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](660, "span", 45)(661, "span", 45)(662, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](663, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](664, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](665, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](666, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](667, "span", 45)(668, "span", 45)(669, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](670, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](671, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](672, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](673, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](674, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](675, "span", 45)(676, "span", 45)(677, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](678, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](679, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](680, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](681, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](682, "span", 45)(683, "span", 45)(684, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](685, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](686, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](687, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](688, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](689, "table")(690, "thead")(691, "tr")(692, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](693, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](694, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](695, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](696, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](697, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](698, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](699, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](700, "tbody")(701, "tr")(702, "td")(703, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](704, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](705, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](706, "\u662F\u5426\u5C55\u5F00\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](707, "td")(708, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](709, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](710, "td")(711, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](712, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](713, "tr")(714, "td")(715, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](716, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](717, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](718, "\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](719, "td")(720, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](721, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](722, "td")(723, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](724, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](725, "tr")(726, "td")(727, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](728, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](729, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](730, "\u6807\u9898\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](731, "td")(732, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](733, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](734, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](735, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](736, "tr")(737, "td")(738, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](739, "[nzIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](740, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](741, "\u6807\u9898\u4E2D icon \u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](742, "td")(743, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](744, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](745, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](746, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](747, "tr")(748, "td")(749, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](750, "[nzMenuClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](751, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](752, "\u81EA\u5B9A\u4E49\u5B50\u83DC\u5355\u5BB9\u5668\u7C7B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](753, "td")(754, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](755, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](756, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](757, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](758, "tr")(759, "td")(760, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](761, "(nzOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](762, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](763, "\u5C55\u5F00\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](764, "td")(765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](766, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](767, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](768, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](769, "h3", 56)(770, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](771, "[nz-menu-group]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](772, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](773, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](774, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](775, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](776, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](777, "\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4E09\u79CD\u65B9\u5F0F\u6765\u5B9A\u4E49 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](778, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](779, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](780, " \u7684\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](781, "pre", 44)(782, "code")(783, "span", 45)(784, "span", 45)(785, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](786, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](787, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](788, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](789, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](790, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](791, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](792, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](793, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](794, "span", 47)(795, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](796, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](797, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](798, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](799, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](800, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](801, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](802, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](803, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](804, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](805, "span", 47)(806, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](807, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](808, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](809, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](810, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](811, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](812, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](813, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](814, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](815, "span", 45)(816, "span", 45)(817, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](818, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](819, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](820, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](821, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](822, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](823, "span", 45)(824, "span", 45)(825, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](826, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](827, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](828, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](829, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](830, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](831, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](832, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](833, "span", 45)(834, "span", 45)(835, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](836, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](837, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](838, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](839, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](840, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](841, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](842, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](843, "span", 45)(844, "span", 45)(845, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](846, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](847, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](848, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](849, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](850, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](851, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](852, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](853, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](854, "span", 47)(855, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](856, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](857, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](858, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](859, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](860, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](861, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](862, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](863, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](864, "span", 45)(865, "span", 45)(866, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](867, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](868, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](869, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](870, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](871, "span", 45)(872, "span", 45)(873, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](874, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](875, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](876, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](877, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](878, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](879, "span", 45)(880, "span", 45)(881, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](882, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](883, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](884, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](885, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](886, "span", 45)(887, "span", 45)(888, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](889, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](890, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](891, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](892, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](893, "span", 45)(894, "span", 45)(895, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](896, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](897, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](898, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](899, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](900, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](901, "span", 45)(902, "span", 45)(903, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](904, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](905, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](906, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](907, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](908, "nz-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](909, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](910, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](911, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](912, "span", 47)(913, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](914, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](915, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](916, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](917, "titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](918, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](919, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](920, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](921, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](922, "span", 45)(923, "span", 45)(924, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](925, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](926, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](927, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](928, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](929, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](930, "span", 45)(931, "span", 45)(932, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](933, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](934, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](935, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](936, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](937, "#titleTpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](938, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](939, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](940, "span", 45)(941, "span", 45)(942, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](943, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](944, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](945, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](946, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](947, "nz-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](948, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](949, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](950, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](951, "span", 47)(952, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](953, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](954, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](955, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](956, "appstore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](957, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](958, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](959, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](960, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](961, "span", 45)(962, "span", 45)(963, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](964, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](965, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](966, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](967, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](968, "span", 45)(969, "span", 45)(970, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](971, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](972, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](973, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](974, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](975, "SubTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](976, "span", 45)(977, "span", 45)(978, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](979, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](980, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](981, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](982, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](983, "span", 45)(984, "span", 45)(985, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](986, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](987, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](988, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](989, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](990, "table")(991, "thead")(992, "tr")(993, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](994, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](995, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](996, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](997, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](998, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](999, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1000, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1001, "tbody")(1002, "tr")(1003, "td")(1004, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1005, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1006, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1007, "\u6807\u9898\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1008, "td")(1009, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1010, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1011, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1012, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1013, "h3", 58)(1014, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1015, "[nz-menu-divider]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1016, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1017, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1018, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1019, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1020, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1021, "\u83DC\u5355\u9879\u5206\u5272\u7EBF\uFF0C\u53EA\u7528\u5728\u5F39\u51FA\u83DC\u5355\u5185\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-horizontal")("nzLink", "components-menu-demo-horizontal")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/horizontal.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-inline")("nzLink", "components-menu-demo-inline")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/inline.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-inline-collapsed")("nzLink", "components-menu-demo-inline-collapsed")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/inline-collapsed.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-sider-current")("nzLink", "components-menu-demo-sider-current")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/sider-current.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-vertical")("nzLink", "components-menu-demo-vertical")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-theme")("nzLink", "components-menu-demo-theme")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/theme.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-switch-mode")("nzLink", "components-menu-demo-switch-mode")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/switch-mode.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-router")("nzLink", "components-menu-demo-router")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/router.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzId", "components-menu-demo-recursive")("nzLink", "components-menu-demo-recursive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/menu/demo/recursive.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_11__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_12__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _horizontal__WEBPACK_IMPORTED_MODULE_1__.NzDemoMenuHorizontalComponent, _inline__WEBPACK_IMPORTED_MODULE_2__.NzDemoMenuInlineComponent, _inline_collapsed__WEBPACK_IMPORTED_MODULE_3__.NzDemoMenuInlineCollapsedComponent, _sider_current__WEBPACK_IMPORTED_MODULE_4__.NzDemoMenuSiderCurrentComponent, _vertical__WEBPACK_IMPORTED_MODULE_5__.NzDemoMenuVerticalComponent, _theme__WEBPACK_IMPORTED_MODULE_6__.NzDemoMenuThemeComponent, _switch_mode__WEBPACK_IMPORTED_MODULE_7__.NzDemoMenuSwitchModeComponent, _router__WEBPACK_IMPORTED_MODULE_8__.NzDemoMenuRouterComponent, _recursive__WEBPACK_IMPORTED_MODULE_9__.NzDemoMenuRecursiveComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_menu_index_module_ts.js.map