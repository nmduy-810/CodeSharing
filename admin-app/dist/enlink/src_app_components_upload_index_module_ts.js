"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_upload_index_module_ts"],{

/***/ 84177:
/*!*********************************************!*\
  !*** ./src/app/components/upload/avatar.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadAvatarComponent": () => (/* binding */ NzDemoUploadAvatarComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);







function NzDemoUploadAvatarComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r0.loading ? "loading" : "plus");
} }
function NzDemoUploadAvatarComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class NzDemoUploadAvatarComponent {
    constructor(msg) {
        this.msg = msg;
        this.loading = false;
        this.beforeUpload = (file, _fileList) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    this.msg.error('You can only upload JPG file!');
                    observer.complete();
                    return;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.msg.error('Image must smaller than 2MB!');
                    observer.complete();
                    return;
                }
                observer.next(isJpgOrPng && isLt2M);
                observer.complete();
            });
        };
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result.toString()));
        reader.readAsDataURL(img);
    }
    handleChange(info) {
        switch (info.file.status) {
            case 'uploading':
                this.loading = true;
                break;
            case 'done':
                // Get this url from response in real world.
                this.getBase64(info.file.originFileObj, (img) => {
                    this.loading = false;
                    this.avatarUrl = img;
                });
                break;
            case 'error':
                this.msg.error('Network error');
                this.loading = false;
                break;
        }
    }
}
NzDemoUploadAvatarComponent.ɵfac = function NzDemoUploadAvatarComponent_Factory(t) { return new (t || NzDemoUploadAvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__.NzMessageService)); };
NzDemoUploadAvatarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoUploadAvatarComponent, selectors: [["nz-demo-upload-avatar"]], decls: 3, vars: 4, consts: [["nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", "nzName", "avatar", "nzListType", "picture-card", 1, "avatar-uploader", 3, "nzShowUploadList", "nzBeforeUpload", "nzChange"], [4, "ngIf"], ["style", "width: 100%", 3, "src", 4, "ngIf"], ["nz-icon", "", 1, "upload-icon", 3, "nzType"], [1, "ant-upload-text"], [2, "width", "100%", 3, "src"]], template: function NzDemoUploadAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-upload", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzChange", function NzDemoUploadAvatarComponent_Template_nz_upload_nzChange_0_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoUploadAvatarComponent_ng_container_1_Template, 4, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoUploadAvatarComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShowUploadList", false)("nzBeforeUpload", ctx.beforeUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.avatarUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avatarUrl);
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_3__.NzUploadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"]], styles: ["[_nghost-%COMP%]     .avatar-uploader > .ant-upload {\n        width: 128px;\n        height: 128px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO1FBQ1osYUFBYTtNQUNmIiwiZmlsZSI6ImF2YXRhci50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hdmF0YXItdXBsb2FkZXIgPiAuYW50LXVwbG9hZCB7XG4gICAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgICAgaGVpZ2h0OiAxMjhweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 69218:
/*!********************************************!*\
  !*** ./src/app/components/upload/basic.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadBasicComponent": () => (/* binding */ NzDemoUploadBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);







const _c0 = function () { return { authorization: "authorization-text" }; };
class NzDemoUploadBasicComponent {
    constructor(msg) {
        this.msg = msg;
    }
    handleChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            this.msg.success(`${info.file.name} file uploaded successfully`);
        }
        else if (info.file.status === 'error') {
            this.msg.error(`${info.file.name} file upload failed.`);
        }
    }
}
NzDemoUploadBasicComponent.ɵfac = function NzDemoUploadBasicComponent_Factory(t) { return new (t || NzDemoUploadBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService)); };
NzDemoUploadBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoUploadBasicComponent, selectors: [["nz-demo-upload-basic"]], decls: 4, vars: 2, consts: [["nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", 3, "nzHeaders", "nzChange"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"]], template: function NzDemoUploadBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-upload", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzChange", function NzDemoUploadBasicComponent_Template_nz_upload_nzChange_0_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click to Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeaders", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_2__.NzUploadComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 83814:
/*!********************************************************!*\
  !*** ./src/app/components/upload/default-file-list.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadDefaultFileListComponent": () => (/* binding */ NzDemoUploadDefaultFileListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);






class NzDemoUploadDefaultFileListComponent {
    constructor() {
        this.fileList = [
            {
                uid: '1',
                name: 'xxx.png',
                status: 'done',
                response: 'Server Error 500',
                url: 'http://www.baidu.com/xxx.png'
            },
            {
                uid: '2',
                name: 'yyy.png',
                status: 'done',
                url: 'http://www.baidu.com/yyy.png'
            },
            {
                uid: '3',
                name: 'zzz.png',
                status: 'error',
                response: 'Server Error 500',
                url: 'http://www.baidu.com/zzz.png'
            }
        ];
    }
}
NzDemoUploadDefaultFileListComponent.ɵfac = function NzDemoUploadDefaultFileListComponent_Factory(t) { return new (t || NzDemoUploadDefaultFileListComponent)(); };
NzDemoUploadDefaultFileListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoUploadDefaultFileListComponent, selectors: [["nz-demo-upload-default-file-list"]], decls: 4, vars: 1, consts: [["nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", 3, "nzFileList"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"]], template: function NzDemoUploadDefaultFileListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-upload", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFileList", ctx.fileList);
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__.NzUploadComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 97923:
/*!************************************************!*\
  !*** ./src/app/components/upload/directory.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadDirectoryComponent": () => (/* binding */ NzDemoUploadDirectoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);






class NzDemoUploadDirectoryComponent {
}
NzDemoUploadDirectoryComponent.ɵfac = function NzDemoUploadDirectoryComponent_Factory(t) { return new (t || NzDemoUploadDirectoryComponent)(); };
NzDemoUploadDirectoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoUploadDirectoryComponent, selectors: [["nz-demo-upload-directory"]], decls: 4, vars: 0, consts: [["nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", "nzDirectory", ""], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"]], template: function NzDemoUploadDirectoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-upload", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Upload Directory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__.NzUploadComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 83044:
/*!*******************************************!*\
  !*** ./src/app/components/upload/drag.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadDragComponent": () => (/* binding */ NzDemoUploadDragComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);





class NzDemoUploadDragComponent {
    constructor(msg) {
        this.msg = msg;
    }
    handleChange({ file, fileList }) {
        const status = file.status;
        if (status !== 'uploading') {
            console.log(file, fileList);
        }
        if (status === 'done') {
            this.msg.success(`${file.name} file uploaded successfully.`);
        }
        else if (status === 'error') {
            this.msg.error(`${file.name} file upload failed.`);
        }
    }
}
NzDemoUploadDragComponent.ɵfac = function NzDemoUploadDragComponent_Factory(t) { return new (t || NzDemoUploadDragComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService)); };
NzDemoUploadDragComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoUploadDragComponent, selectors: [["nz-demo-upload-drag"]], decls: 7, vars: 1, consts: [["nzType", "drag", "nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", 3, "nzMultiple", "nzChange"], [1, "ant-upload-drag-icon"], ["nz-icon", "", "nzType", "inbox"], [1, "ant-upload-text"], [1, "ant-upload-hint"]], template: function NzDemoUploadDragComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-upload", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzChange", function NzDemoUploadDragComponent_Template_nz_upload_nzChange_0_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Click or drag file to this area to upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMultiple", true);
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_2__.NzUploadComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 14717:
/*!***************************************************!*\
  !*** ./src/app/components/upload/en.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadEnComponent": () => (/* binding */ NzDemoUploadEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 69218);
/* harmony import */ var _default_file_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-file-list */ 83814);
/* harmony import */ var _file_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-list */ 36321);
/* harmony import */ var _directory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directory */ 97923);
/* harmony import */ var _picture_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./picture-style */ 82629);
/* harmony import */ var _transform_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transform-file */ 21081);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./avatar */ 84177);
/* harmony import */ var _picture_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./picture-card */ 96525);
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drag */ 83044);
/* harmony import */ var _upload_manually__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./upload-manually */ 7878);
/* harmony import */ var _preview_file__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preview-file */ 206);
/* harmony import */ var _upload_with_aliyun_oss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-with-aliyun-oss */ 37967);





















class NzDemoUploadEnComponent {
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
NzDemoUploadEnComponent.ɵfac = function NzDemoUploadEnComponent_Factory(t) { return new (t || NzDemoUploadEnComponent)(); };
NzDemoUploadEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: NzDemoUploadEnComponent, selectors: [["nz-demo-upload"]], viewQuery: function NzDemoUploadEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 774, vars: 55, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-upload-demo-basic", "nzTitle", "Upload by clicking"], ["nzHref", "#components-upload-demo-avatar", "nzTitle", "Avatar"], ["nzHref", "#components-upload-demo-default-file-list", "nzTitle", "Default Files"], ["nzHref", "#components-upload-demo-picture-card", "nzTitle", "Pictures Wall"], ["nzHref", "#components-upload-demo-file-list", "nzTitle", "Complete control over file list"], ["nzHref", "#components-upload-demo-drag", "nzTitle", "Drag and Drop"], ["nzHref", "#components-upload-demo-directory", "nzTitle", "Upload directory"], ["nzHref", "#components-upload-demo-upload-manually", "nzTitle", "Upload manually"], ["nzHref", "#components-upload-demo-picture-style", "nzTitle", "Pictures with list style"], ["nzHref", "#components-upload-demo-preview-file", "nzTitle", "Customize preview file"], ["nzHref", "#components-upload-demo-transform-file", "nzTitle", "Transform file before request"], ["nzHref", "#components-upload-demo-upload-with-aliyun-oss", "nzTitle", "Aliyun OSS"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["aria-label", "Edit this page on Github", "href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Upload by clicking", "nzSelector", "nz-demo-upload-basic", "nzGenerateCommand", "ng g ng-zorro-antd:upload-basic <name>", "nzComponentName", "NzDemoUploadBasicComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Default Files", "nzSelector", "nz-demo-upload-default-file-list", "nzGenerateCommand", "ng g ng-zorro-antd:upload-default-file-list <name>", "nzComponentName", "NzDemoUploadDefaultFileListComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Complete control over file list", "nzSelector", "nz-demo-upload-file-list", "nzGenerateCommand", "ng g ng-zorro-antd:upload-file-list <name>", "nzComponentName", "NzDemoUploadFileListComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Upload directory", "nzSelector", "nz-demo-upload-directory", "nzGenerateCommand", "ng g ng-zorro-antd:upload-directory <name>", "nzComponentName", "NzDemoUploadDirectoryComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Pictures with list style", "nzSelector", "nz-demo-upload-picture-style", "nzGenerateCommand", "ng g ng-zorro-antd:upload-picture-style <name>", "nzComponentName", "NzDemoUploadPictureStyleComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Transform file before request", "nzSelector", "nz-demo-upload-transform-file", "nzGenerateCommand", "ng g ng-zorro-antd:upload-transform-file <name>", "nzComponentName", "NzDemoUploadTransformFileComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Avatar", "nzSelector", "nz-demo-upload-avatar", "nzGenerateCommand", "ng g ng-zorro-antd:upload-avatar <name>", "nzComponentName", "NzDemoUploadAvatarComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Pictures Wall", "nzSelector", "nz-demo-upload-picture-card", "nzGenerateCommand", "ng g ng-zorro-antd:upload-picture-card <name>", "nzComponentName", "NzDemoUploadPictureCardComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Drag and Drop", "nzSelector", "nz-demo-upload-drag", "nzGenerateCommand", "ng g ng-zorro-antd:upload-drag <name>", "nzComponentName", "NzDemoUploadDragComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Upload manually", "nzSelector", "nz-demo-upload-upload-manually", "nzGenerateCommand", "ng g ng-zorro-antd:upload-upload-manually <name>", "nzComponentName", "NzDemoUploadUploadManuallyComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Customize preview file", "nzSelector", "nz-demo-upload-preview-file", "nzGenerateCommand", "ng g ng-zorro-antd:upload-preview-file <name>", "nzComponentName", "NzDemoUploadPreviewFileComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Aliyun OSS", "nzSelector", "nz-demo-upload-upload-with-aliyun-oss", "nzGenerateCommand", "ng g ng-zorro-antd:upload-upload-with-aliyun-oss <name>", "nzComponentName", "NzDemoUploadUploadWithAliyunOssComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["href", "https://github.com/blueimp/jQuery-File-Upload/wiki", "target", "_blank", "rel", "noopener"], ["id", "nz-upload"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-upload'", 1, "anchor"], ["href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept", "target", "_blank", "rel", "noopener"], ["href", "https://caniuse.com/#feat=input-file-directory", "target", "_blank", "rel", "noopener"], ["id", "nzchange"], ["onclick", "window.location.hash = 'nzchange'", 1, "anchor"], [1, "language-js"], ["spellcheck", "true", 1, "token", "comment"], ["id", "nzcustomrequest"], ["onclick", "window.location.hash = 'nzcustomrequest'", 1, "anchor"]], template: function NzDemoUploadEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzClick", function NzDemoUploadEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13)(15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "section", 15)(17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "span", 16)(20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Upload file by selecting or dragging.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "h2", 20)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "ul")(34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, " When you need to upload one or more files.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, " When you need to show the process of uploading.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, " When you need to upload files by dragging and dropping.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "pre", 22)(41, "code")(42, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, " NzUploadModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55, "'ng-zorro-antd/upload'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](57, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "h2")(59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NzDemoUploadEnComponent_Template_i_click_61_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "div", 27)(63, "div", 28)(64, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](65, "nz-demo-upload-basic", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](68, "Classic mode. File selection dialog pops up when upload button is clicked.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](70, "nz-demo-upload-default-file-list", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](73, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](75, "nzFileList");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, " for uploaded files when page init.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](78, "nz-demo-upload-file-list", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](81, "You can gain full control over filelist by configuring ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](83, "nzFileList");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, ". You can accomplish all kinds of customed functions. The following shows two circumstances:");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "ol")(86, "li")(87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](88, " limit the number of uploaded files.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "li")(90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](91, " read from response and show file link.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](93, "nz-demo-upload-directory", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](96, "You can select and upload a whole directory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](97, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](98, "nz-demo-upload-picture-style", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](99, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](101, "If uploaded file is a picture, the thumbnail can be shown. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](103, "IE8/9");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](104, " do not support local thumbnail show. Please use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](106, "thumbUrl");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](107, " instead.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](108, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](109, "nz-demo-upload-transform-file", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](110, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](112, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](114, "nzTransformFile");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](115, " for transform file before request such as add a watermark.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](116, "div", 28)(117, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](118, "nz-demo-upload-avatar", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](119, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](121, "Click to upload user's avatar, and validate size and format of picture with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](123, "nzBeforeUpload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](124, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "blockquote")(126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](127, "The return value of function ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](129, "nzBeforeUpload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](130, " can be a Observable to check asynchronously.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](131, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](132, "nz-demo-upload-picture-card", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](133, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](135, "After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](136, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](137, "nz-demo-upload-drag", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](138, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](140, "You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](142, "We can upload serveral files at once in modern browsers by giving the input the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](144, "nzMultiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](145, " attribute.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](146, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](147, "nz-demo-upload-upload-manually", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](148, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](150, "Upload files manually after ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](152, "nzBeforeUpload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](153, " returns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](155, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](156, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](157, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](158, "nz-demo-upload-preview-file", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](159, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](161, "Customize local preview. Can handle with non-image format files such as video.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](162, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](163, "nz-demo-upload-upload-with-aliyun-oss", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](164, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](166, "Use Aliyun OSS upload example.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](168, "h2", 44)(169, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](170, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](171, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](172, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](173, "blockquote")(174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](175, "You can consult ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](176, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](177, "jQuery-File-Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](178, " about how to implement server side upload interface.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](179, "h3", 47)(180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](181, "nz-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](182, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](183, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](184, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](185, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](186, "table")(187, "thead")(188, "tr")(189, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](190, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](191, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](192, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](193, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](194, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](195, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](196, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](197, "tbody")(198, "tr")(199, "td")(200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](201, "[nzAccept]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](203, "File types that can be accepted. See ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](204, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](205, "input accept Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](206, "td")(207, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](208, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](210, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](211, "tr")(212, "td")(213, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](214, "[nzAction]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](216, "Required. Uploading URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](217, "td")(218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](219, "string | ((file: NzUploadFile) => string | Observable<string>)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](221, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](222, "tr")(223, "td")(224, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](225, "[nzDirectory]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](227, "support upload whole directory (");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](228, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](229, "caniuse");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](230, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](231, "td")(232, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](233, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](234, "td")(235, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](236, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](237, "tr")(238, "td")(239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](240, "[nzBeforeUpload]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](242, "Hook function which will be executed before uploading. Uploading will be stopped with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](244, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](245, " or a Observable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](246, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](247, "Warning\uFF1Athis function is not supported in IE9");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](248, ". NOTICE: Must use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](250, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](251, " to define the method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](252, "td")(253, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](254, "(file: NzUploadFile, fileList: NzUploadFile[]) => boolean | Observable<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](256, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](257, "tr")(258, "td")(259, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](260, "[nzCustomRequest]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](262, "override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest. NOTICE: Must use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](263, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](264, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](265, " to define the method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](266, "td")(267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](268, "(item) => Subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](270, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](271, "tr")(272, "td")(273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](274, "[nzData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](276, "Uploading params or function which can return uploading params. NOTICE: Must use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](278, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](279, " to define the method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](280, "td")(281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](282, "Object | ((file: NzUploadFile) => Object | Observable<{}>)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](284, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](285, "tr")(286, "td")(287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](288, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](289, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](290, "disable upload button");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](291, "td")(292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](293, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](294, "td")(295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](296, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](297, "tr")(298, "td")(299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](300, "[nzFileList]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](302, "List of files, two-way data-binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](303, "td")(304, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](305, "NzUploadFile[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](307, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](308, "tr")(309, "td")(310, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](311, "[nzLimit]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](313, "limit single upload count when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](314, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](315, "nzMultiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](316, " has opened. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](317, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](318, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](319, " unlimited");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](320, "td")(321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](322, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](323, "td")(324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](325, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](326, "tr")(327, "td")(328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](329, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](331, "limit file size (KB). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](333, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](334, " unlimited");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](335, "td")(336, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](337, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](338, "td")(339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](340, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](341, "tr")(342, "td")(343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](344, "[nzFileType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](346, "limit file type, e.g: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](348, "image/png,image/jpeg,image/gif,image/bmp");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](349, "td")(350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](351, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](353, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](354, "tr")(355, "td")(356, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](357, "[nzFilter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](358, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](359, "Custom filter when choosed file");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](360, "td")(361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](362, "UploadFilter[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](364, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](365, "tr")(366, "td")(367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](368, "[nzHeaders]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](370, "Set request headers, valid above IE10. NOTICE: Must use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](372, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](373, " to define the method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](374, "td")(375, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](376, "Object | ((file: NzUploadFile) => Object | Observable<{}>)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](378, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](379, "tr")(380, "td")(381, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](382, "[nzListType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](384, "Built-in stylesheets, support for three types: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](385, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](386, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](387, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](388, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](389, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](390, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](391, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](392, "picture-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](393, "td")(394, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](395, "'text' | 'picture' | 'picture-card'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](396, "td")(397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](398, "'text'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](399, "tr")(400, "td")(401, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](402, "[nzMultiple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](403, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](404, "Whether to support selected multiple file. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](405, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](406, "IE10+");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](407, " supported. You can select multiple files with CTRL holding down while multiple is set to be true");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](408, "td")(409, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](410, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](411, "td")(412, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](413, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](414, "tr")(415, "td")(416, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](417, "[nzName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](419, "The name of uploading file");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](420, "td")(421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](422, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](423, "td")(424, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](425, "'file'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](426, "tr")(427, "td")(428, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](429, "[nzShowUploadList]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](430, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](431, "Whether to show default upload list, could be an object to specify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](432, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](433, "showPreviewIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](434, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](435, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](436, "showRemoveIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](437, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](438, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](439, "showDownloadIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](440, " individually");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](441, "td")(442, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](443, "boolean | { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](444, "td")(445, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](446, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](447, "tr")(448, "td")(449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](450, "[nzShowButton]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](452, "Show upload button");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](453, "td")(454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](455, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](456, "td")(457, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](458, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](459, "tr")(460, "td")(461, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](462, "[nzWithCredentials]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](463, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](464, "ajax upload with cookie sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](465, "td")(466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](467, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](468, "td")(469, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](470, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](471, "tr")(472, "td")(473, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](474, "[nzOpenFileDialogOnClick]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](476, "click open file dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](477, "td")(478, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](479, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](480, "td")(481, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](482, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](483, "tr")(484, "td")(485, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](486, "[nzPreview]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](488, "A callback function, will be executed when file link or preview icon is clicked. NOTICE: Must use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](489, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](490, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](491, " to define the method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](492, "td")(493, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](494, "(file: NzUploadFile) => void");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](496, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](497, "tr")(498, "td")(499, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](500, "[nzPreviewFile]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](502, "Customize preview file logic. NOTICE: Must use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](503, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](504, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](505, " to define the method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](506, "td")(507, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](508, "(file: NzUploadFile) => Observable<dataURL: string>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](509, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](510, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](511, "tr")(512, "td")(513, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](514, "[nzPreviewIsImage]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](515, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](516, "Customize the preview file is an image, generally used when the image URL is in a non-standard format. NOTICE: Must use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](517, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](518, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](519, " to define the method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](520, "td")(521, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](522, "(file: NzUploadFile) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](523, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](524, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](525, "tr")(526, "td")(527, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](528, "[nzRemove]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](529, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](530, "A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](531, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](532, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](533, " or a Observable. NOTICE: Must use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](534, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](535, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](536, " to define the method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](537, "td")(538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](539, "(file: NzUploadFile) => boolean | Observable<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](540, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](541, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](542, "tr")(543, "td")(544, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](545, "(nzChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](546, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](547, "A callback function, can be executed when uploading state is changing");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](548, "td")(549, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](550, "EventEmitter<NzUploadChangeParam>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](551, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](552, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](553, "tr")(554, "td")(555, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](556, "[nzDownload]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](557, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](558, "Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](559, "td")(560, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](561, "(file: NzUploadFile) => void");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](562, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](563, "Jump to new TAB");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](564, "tr")(565, "td")(566, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](567, "[nzTransformFile]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](568, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](569, "Customize transform file before request");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](570, "td")(571, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](572, "(file: NzUploadFile) => NzUploadTransformFileType");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](573, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](574, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](575, "tr")(576, "td")(577, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](578, "[nzIconRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](579, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](580, "Custom show icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](581, "td")(582, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](583, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](584, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](585, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](586, "tr")(587, "td")(588, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](589, "[nzFileListRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](590, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](591, "Custom file list");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](592, "td")(593, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](594, "TemplateRef<{ $implicit: UploadFile[] }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](595, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](596, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](597, "h4", 52)(598, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](599, "nzChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](600, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](601, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](602, "blockquote")(603, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](604, "The function will be called when uploading is in progress, completed or failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](605, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](606, "When uploading state change, it returns:");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](607, "pre", 54)(608, "code")(609, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](610, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](611, "\n  file");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](612, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](613, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](614, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](615, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](616, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](617, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](618, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](619, "/* ... */");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](620, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](621, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](622, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](623, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](624, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](625, "\n  fileList");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](626, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](627, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](628, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](629, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](630, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](631, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](632, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](633, "/* ... */");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](634, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](635, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](636, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](637, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](638, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](639, "\n  event");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](640, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](641, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](642, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](643, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](644, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](645, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](646, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](647, "/* ... */");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](648, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](649, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](650, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](651, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](652, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](653, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](654, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](655, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](656, "ol")(657, "li")(658, "p")(659, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](660, "file");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](661, " File object for the current operation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](662, "pre", 54)(663, "code")(664, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](665, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](666, "\n   uid");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](667, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](668, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](669, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](670, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](671, "'uid'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](672, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](673, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](674, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](675, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](676, "// unique identifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](677, "\n   name");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](678, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](679, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](680, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](681, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](682, "'xx.png'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](683, "   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](684, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](685, "// file name");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](686, "\n   status");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](687, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](688, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](689, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](690, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](691, "'done'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](692, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](693, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](694, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](695, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](696, "// options\uFF1Auploading, done, error, removed");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](697, "\n   response");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](698, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](699, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](700, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](701, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](702, "'{\"status\": \"success\"}'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](703, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](704, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](705, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](706, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](707, "// response from server");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](708, "\n   linkProps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](709, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](710, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](711, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](712, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](713, "'{\"download\": \"image\"}'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](714, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](715, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](716, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](717, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](718, "// additional html props of file link");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](719, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](720, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](721, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](722, "li")(723, "p")(724, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](725, "fileList");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](726, " current list of files");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](727, "li")(728, "p")(729, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](730, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](731, " response from server, including uploading progress, supported by advanced browsers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](732, "h4", 56)(733, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](734, "nzCustomRequest");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](735, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](736, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](737, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](738, "Allows for advanced customization by overriding default behavior in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](739, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](740, "HttpClient");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](741, ". Provide your own XMLHttpRequest calls to interface with custom backend processes or interact with AWS S3 service through the aws-sdk-js package.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](742, "p")(743, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](744, "nzCustomRequest");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](745, " callback is passed an object with:");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](746, "ul")(747, "li")(748, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](749, "onProgress: (event: { percent: number }): void");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](750, "li")(751, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](752, "onError: (event: Error): void");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](753, "li")(754, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](755, "onSuccess: (body: Object, xhr?: Object): void");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](756, "li")(757, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](758, "data: Object");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](759, "li")(760, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](761, "filename: String");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](762, "li")(763, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](764, "file: File");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](765, "li")(766, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](767, "withCredentials: Boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](768, "li")(769, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](770, "action: String");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](771, "li")(772, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](773, "headers: Object");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-basic")("nzLink", "components-upload-demo-basic")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-default-file-list")("nzLink", "components-upload-demo-default-file-list")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/default-file-list.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-file-list")("nzLink", "components-upload-demo-file-list")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/file-list.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-directory")("nzLink", "components-upload-demo-directory")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/directory.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-picture-style")("nzLink", "components-upload-demo-picture-style")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/picture-style.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-transform-file")("nzLink", "components-upload-demo-transform-file")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/transform-file.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-avatar")("nzLink", "components-upload-demo-avatar")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/avatar.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-picture-card")("nzLink", "components-upload-demo-picture-card")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/picture-card.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-drag")("nzLink", "components-upload-demo-drag")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/drag.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-upload-manually")("nzLink", "components-upload-demo-upload-manually")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/upload-manually.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-preview-file")("nzLink", "components-upload-demo-preview-file")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/preview-file.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-upload-with-aliyun-oss")("nzLink", "components-upload-demo-upload-with-aliyun-oss")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/upload-with-aliyun-oss.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoUploadBasicComponent, _default_file_list__WEBPACK_IMPORTED_MODULE_2__.NzDemoUploadDefaultFileListComponent, _file_list__WEBPACK_IMPORTED_MODULE_3__.NzDemoUploadFileListComponent, _directory__WEBPACK_IMPORTED_MODULE_4__.NzDemoUploadDirectoryComponent, _picture_style__WEBPACK_IMPORTED_MODULE_5__.NzDemoUploadPictureStyleComponent, _transform_file__WEBPACK_IMPORTED_MODULE_6__.NzDemoUploadTransformFileComponent, _avatar__WEBPACK_IMPORTED_MODULE_7__.NzDemoUploadAvatarComponent, _picture_card__WEBPACK_IMPORTED_MODULE_8__.NzDemoUploadPictureCardComponent, _drag__WEBPACK_IMPORTED_MODULE_9__.NzDemoUploadDragComponent, _upload_manually__WEBPACK_IMPORTED_MODULE_10__.NzDemoUploadUploadManuallyComponent, _preview_file__WEBPACK_IMPORTED_MODULE_11__.NzDemoUploadPreviewFileComponent, _upload_with_aliyun_oss__WEBPACK_IMPORTED_MODULE_12__.NzDemoUploadUploadWithAliyunOssComponent], encapsulation: 2 });


/***/ }),

/***/ 36321:
/*!************************************************!*\
  !*** ./src/app/components/upload/file-list.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadFileListComponent": () => (/* binding */ NzDemoUploadFileListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);






class NzDemoUploadFileListComponent {
    constructor() {
        this.fileList = [
            {
                uid: '-1',
                name: 'xxx.png',
                status: 'done',
                url: 'http://www.baidu.com/xxx.png'
            }
        ];
    }
    handleChange(info) {
        let fileList = [...info.fileList];
        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);
        // 2. Read from response and show file link
        fileList = fileList.map(file => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.url;
            }
            return file;
        });
        this.fileList = fileList;
    }
}
NzDemoUploadFileListComponent.ɵfac = function NzDemoUploadFileListComponent_Factory(t) { return new (t || NzDemoUploadFileListComponent)(); };
NzDemoUploadFileListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoUploadFileListComponent, selectors: [["nz-demo-upload-file-list"]], decls: 4, vars: 1, consts: [["nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", 3, "nzFileList", "nzChange"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"]], template: function NzDemoUploadFileListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-upload", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzChange", function NzDemoUploadFileListComponent_Template_nz_upload_nzChange_0_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFileList", ctx.fileList);
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__.NzUploadComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 30289:
/*!***************************************************!*\
  !*** ./src/app/components/upload/index.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadModule": () => (/* binding */ NzDemoUploadModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 11862);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar */ 84177);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 69218);
/* harmony import */ var _default_file_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-file-list */ 83814);
/* harmony import */ var _directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directory */ 97923);
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag */ 83044);
/* harmony import */ var _file_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-list */ 36321);
/* harmony import */ var _picture_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./picture-card */ 96525);
/* harmony import */ var _picture_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./picture-style */ 82629);
/* harmony import */ var _preview_file__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preview-file */ 206);
/* harmony import */ var _transform_file__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transform-file */ 21081);
/* harmony import */ var _upload_manually__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-manually */ 7878);
/* harmony import */ var _upload_with_aliyun_oss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload-with-aliyun-oss */ 37967);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./zh.component */ 76145);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./en.component */ 14717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/modal */ 84394);























class NzDemoUploadModule {
}
NzDemoUploadModule.ɵfac = function NzDemoUploadModule_Factory(t) { return new (t || NzDemoUploadModule)(); };
NzDemoUploadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: NzDemoUploadModule });
NzDemoUploadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_15__.NzDemoUploadEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_14__.NzDemoUploadZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](NzDemoUploadModule, { declarations: [_avatar__WEBPACK_IMPORTED_MODULE_2__.NzDemoUploadAvatarComponent,
        _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoUploadBasicComponent,
        _default_file_list__WEBPACK_IMPORTED_MODULE_4__.NzDemoUploadDefaultFileListComponent,
        _directory__WEBPACK_IMPORTED_MODULE_5__.NzDemoUploadDirectoryComponent,
        _drag__WEBPACK_IMPORTED_MODULE_6__.NzDemoUploadDragComponent,
        _file_list__WEBPACK_IMPORTED_MODULE_7__.NzDemoUploadFileListComponent,
        _picture_card__WEBPACK_IMPORTED_MODULE_8__.NzDemoUploadPictureCardComponent,
        _picture_style__WEBPACK_IMPORTED_MODULE_9__.NzDemoUploadPictureStyleComponent,
        _preview_file__WEBPACK_IMPORTED_MODULE_10__.NzDemoUploadPreviewFileComponent,
        _transform_file__WEBPACK_IMPORTED_MODULE_11__.NzDemoUploadTransformFileComponent,
        _upload_manually__WEBPACK_IMPORTED_MODULE_12__.NzDemoUploadUploadManuallyComponent,
        _upload_with_aliyun_oss__WEBPACK_IMPORTED_MODULE_13__.NzDemoUploadUploadWithAliyunOssComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_14__.NzDemoUploadZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_15__.NzDemoUploadEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__.NzUploadModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__.NzIconModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] }); })();


/***/ }),

/***/ 11862:
/*!*********************************************!*\
  !*** ./src/app/components/upload/module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 84394);




const moduleList = [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_0__.NzUploadModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalModule];


/***/ }),

/***/ 96525:
/*!***************************************************!*\
  !*** ./src/app/components/upload/picture-card.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadPictureCardComponent": () => (/* binding */ NzDemoUploadPictureCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 84394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);







const _c0 = function () { return { width: "100%" }; };
function NzDemoUploadPictureCardComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.previewImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
class NzDemoUploadPictureCardComponent {
    constructor() {
        this.fileList = [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-xxx',
                percent: 50,
                name: 'image.png',
                status: 'uploading',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-5',
                name: 'image.png',
                status: 'error'
            }
        ];
        this.previewImage = '';
        this.previewVisible = false;
        this.handlePreview = (file) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (!file.url && !file.preview) {
                file.preview = yield getBase64(file.originFileObj);
            }
            this.previewImage = file.url || file.preview;
            this.previewVisible = true;
        });
    }
}
NzDemoUploadPictureCardComponent.ɵfac = function NzDemoUploadPictureCardComponent_Factory(t) { return new (t || NzDemoUploadPictureCardComponent)(); };
NzDemoUploadPictureCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoUploadPictureCardComponent, selectors: [["nz-demo-upload-picture-card"]], decls: 9, vars: 6, consts: [[1, "clearfix"], ["nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", "nzListType", "picture-card", 3, "nzFileList", "nzShowButton", "nzPreview", "nzFileListChange"], ["nz-icon", "", "nzType", "plus"], [2, "margin-top", "8px"], [3, "nzVisible", "nzContent", "nzFooter", "nzOnCancel"], ["modalContent", ""], [3, "src", "ngStyle"]], template: function NzDemoUploadPictureCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nz-upload", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFileListChange", function NzDemoUploadPictureCardComponent_Template_nz_upload_nzFileListChange_1_listener($event) { return ctx.fileList = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-modal", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnCancel", function NzDemoUploadPictureCardComponent_Template_nz_modal_nzOnCancel_6_listener() { return ctx.previewVisible = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDemoUploadPictureCardComponent_ng_template_7_Template, 1, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFileList", ctx.fileList)("nzShowButton", ctx.fileList.length < 8)("nzPreview", ctx.handlePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.previewVisible)("nzContent", _r0)("nzFooter", null);
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_2__.NzUploadComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], encapsulation: 2 });


/***/ }),

/***/ 82629:
/*!****************************************************!*\
  !*** ./src/app/components/upload/picture-style.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadPictureStyleComponent": () => (/* binding */ NzDemoUploadPictureStyleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);






class NzDemoUploadPictureStyleComponent {
    constructor() {
        this.defaultFileList = [
            {
                uid: '-1',
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-2',
                name: 'yyy.png',
                status: 'error'
            }
        ];
        this.fileList1 = [...this.defaultFileList];
        this.fileList2 = [...this.defaultFileList];
    }
}
NzDemoUploadPictureStyleComponent.ɵfac = function NzDemoUploadPictureStyleComponent_Factory(t) { return new (t || NzDemoUploadPictureStyleComponent)(); };
NzDemoUploadPictureStyleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoUploadPictureStyleComponent, selectors: [["nz-demo-upload-picture-style"]], decls: 13, vars: 2, consts: [[1, "clearfix"], ["nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", "nzListType", "picture", 3, "nzFileList", "nzFileListChange"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"], ["nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", "nzListType", "picture", 1, "upload-list-inline", 3, "nzFileList", "nzFileListChange"]], template: function NzDemoUploadPictureStyleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nz-upload", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFileListChange", function NzDemoUploadPictureStyleComponent_Template_nz_upload_nzFileListChange_1_listener($event) { return ctx.fileList1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br")(6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0)(8, "nz-upload", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFileListChange", function NzDemoUploadPictureStyleComponent_Template_nz_upload_nzFileListChange_8_listener($event) { return ctx.fileList2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFileList", ctx.fileList1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFileList", ctx.fileList2);
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__.NzUploadComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective], styles: ["[_nghost-%COMP%]     .upload-list-inline .ant-upload-list-item {\n        float: left;\n        width: 200px;\n        margin-right: 8px;\n      }\n      [_nghost-%COMP%]     .upload-list-inline [class*='-upload-list-rtl'] .ant-upload-list-item {\n        float: right;\n      }\n      [_nghost-%COMP%]     .upload-list-inline .ant-upload-animate-enter {\n        animation-name: uploadAnimateInlineIn;\n      }\n      [_nghost-%COMP%]     .upload-list-inline .ant-upload-animate-leave {\n        animation-name: uploadAnimateInlineOut;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY3R1cmUtc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7TUFDbkI7TUFDQTtRQUNFLFlBQVk7TUFDZDtNQUNBO1FBQ0UscUNBQXFDO01BQ3ZDO01BQ0E7UUFDRSxzQ0FBc0M7TUFDeEMiLCJmaWxlIjoicGljdHVyZS1zdHlsZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC51cGxvYWQtbGlzdC1pbmxpbmUgLmFudC11cGxvYWQtbGlzdC1pdGVtIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLnVwbG9hZC1saXN0LWlubGluZSBbY2xhc3MqPSctdXBsb2FkLWxpc3QtcnRsJ10gLmFudC11cGxvYWQtbGlzdC1pdGVtIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC51cGxvYWQtbGlzdC1pbmxpbmUgLmFudC11cGxvYWQtYW5pbWF0ZS1lbnRlciB7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiB1cGxvYWRBbmltYXRlSW5saW5lSW47XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLnVwbG9hZC1saXN0LWlubGluZSAuYW50LXVwbG9hZC1hbmltYXRlLWxlYXZlIHtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHVwbG9hZEFuaW1hdGVJbmxpbmVPdXQ7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 206:
/*!***************************************************!*\
  !*** ./src/app/components/upload/preview-file.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadPreviewFileComponent": () => (/* binding */ NzDemoUploadPreviewFileComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);








class NzDemoUploadPreviewFileComponent {
    constructor(http) {
        this.http = http;
        this.previewFile = (file) => {
            console.log('Your upload file:', file);
            return this.http
                .post(`https://next.json-generator.com/api/json/get/4ytyBoLK8`, {
                method: 'POST',
                body: file
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => res.thumbnail));
        };
    }
}
NzDemoUploadPreviewFileComponent.ɵfac = function NzDemoUploadPreviewFileComponent_Factory(t) { return new (t || NzDemoUploadPreviewFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
NzDemoUploadPreviewFileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoUploadPreviewFileComponent, selectors: [["nz-demo-upload-preview-file"]], decls: 5, vars: 1, consts: [[1, "clearfix"], ["nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", "nzListType", "picture", 3, "nzPreviewFile"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"]], template: function NzDemoUploadPreviewFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nz-upload", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPreviewFile", ctx.previewFile);
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_3__.NzUploadComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 21081:
/*!*****************************************************!*\
  !*** ./src/app/components/upload/transform-file.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadTransformFileComponent": () => (/* binding */ NzDemoUploadTransformFileComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);







class NzDemoUploadTransformFileComponent {
    constructor() {
        this.transformFile = (file) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((observer) => {
                const reader = new FileReader();
                // tslint:disable-next-line:no-any
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const canvas = document.createElement('canvas');
                    const img = document.createElement('img');
                    img.src = reader.result;
                    img.onload = () => {
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        ctx.fillStyle = 'red';
                        ctx.textBaseline = 'middle';
                        ctx.fillText('Ant Design', 20, 20);
                        canvas.toBlob(blob => {
                            observer.next(blob);
                            observer.complete();
                        });
                    };
                };
            });
        };
    }
}
NzDemoUploadTransformFileComponent.ɵfac = function NzDemoUploadTransformFileComponent_Factory(t) { return new (t || NzDemoUploadTransformFileComponent)(); };
NzDemoUploadTransformFileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoUploadTransformFileComponent, selectors: [["nz-demo-upload-transform-file"]], decls: 4, vars: 1, consts: [["nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", 3, "nzTransformFile"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"]], template: function NzDemoUploadTransformFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-upload", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTransformFile", ctx.transformFile);
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_2__.NzUploadComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 7878:
/*!******************************************************!*\
  !*** ./src/app/components/upload/upload-manually.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadUploadManuallyComponent": () => (/* binding */ NzDemoUploadUploadManuallyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ 51741);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);










class NzDemoUploadUploadManuallyComponent {
    constructor(http, msg) {
        this.http = http;
        this.msg = msg;
        this.uploading = false;
        this.fileList = [];
        this.beforeUpload = (file) => {
            this.fileList = this.fileList.concat(file);
            return false;
        };
    }
    handleUpload() {
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        this.fileList.forEach((file) => {
            formData.append('files[]', file);
        });
        this.uploading = true;
        // You can use any AJAX library you like
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
        // reportProgress: true
        });
        this.http
            .request(req)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(e => e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse))
            .subscribe(() => {
            this.uploading = false;
            this.fileList = [];
            this.msg.success('upload successfully.');
        }, () => {
            this.uploading = false;
            this.msg.error('upload failed.');
        });
    }
}
NzDemoUploadUploadManuallyComponent.ɵfac = function NzDemoUploadUploadManuallyComponent_Factory(t) { return new (t || NzDemoUploadUploadManuallyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__.NzMessageService)); };
NzDemoUploadUploadManuallyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzDemoUploadUploadManuallyComponent, selectors: [["nz-demo-upload-upload-manually"]], decls: 6, vars: 6, consts: [[3, "nzFileList", "nzBeforeUpload", "nzFileListChange"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"], ["nz-button", "", 2, "margin-top", "16px", 3, "nzType", "nzLoading", "disabled", "click"]], template: function NzDemoUploadUploadManuallyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-upload", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzFileListChange", function NzDemoUploadUploadManuallyComponent_Template_nz_upload_nzFileListChange_0_listener($event) { return ctx.fileList = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Select File");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzDemoUploadUploadManuallyComponent_Template_button_click_4_listener() { return ctx.handleUpload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzFileList", ctx.fileList)("nzBeforeUpload", ctx.beforeUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", "primary")("nzLoading", ctx.uploading)("disabled", ctx.fileList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.uploading ? "Uploading" : "Start Upload", " ");
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_4__.NzUploadComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 37967:
/*!*************************************************************!*\
  !*** ./src/app/components/upload/upload-with-aliyun-oss.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadUploadWithAliyunOssComponent": () => (/* binding */ NzDemoUploadUploadWithAliyunOssComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/upload */ 45210);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 92717);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 78616);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);






class NzDemoUploadUploadWithAliyunOssComponent {
    constructor() {
        this.files = [];
        this.mockOSSData = {
            dir: 'user-dir/',
            expire: '1577811661',
            host: '//www.mocky.io/v2/5cc8019d300000980a055e76',
            accessId: 'c2hhb2RhaG9uZw==',
            policy: 'eGl4aWhhaGFrdWt1ZGFkYQ==',
            signature: 'ZGFob25nc2hhbw=='
        };
        this.transformFile = (file) => {
            const suffix = file.name.slice(file.name.lastIndexOf('.'));
            const filename = Date.now() + suffix;
            file.url = this.mockOSSData.dir + filename;
            return file;
        };
        this.getExtraData = (file) => {
            const { accessId, policy, signature } = this.mockOSSData;
            return {
                key: file.url,
                OSSAccessKeyId: accessId,
                policy: policy,
                Signature: signature
            };
        };
    }
    onChange(e) {
        console.log('Aliyun OSS:', e.fileList);
    }
}
NzDemoUploadUploadWithAliyunOssComponent.ɵfac = function NzDemoUploadUploadWithAliyunOssComponent_Factory(t) { return new (t || NzDemoUploadUploadWithAliyunOssComponent)(); };
NzDemoUploadUploadWithAliyunOssComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoUploadUploadWithAliyunOssComponent, selectors: [["nz-demo-upload-upload-with-aliyun-oss"]], decls: 5, vars: 4, consts: [["nzName", "file", 3, "nzFileList", "nzTransformFile", "nzData", "nzAction", "nzFileListChange", "nzChange"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"]], template: function NzDemoUploadUploadWithAliyunOssComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-upload", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFileListChange", function NzDemoUploadUploadWithAliyunOssComponent_Template_nz_upload_nzFileListChange_0_listener($event) { return ctx.files = $event; })("nzChange", function NzDemoUploadUploadWithAliyunOssComponent_Template_nz_upload_nzChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Photos: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click to Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFileList", ctx.files)("nzTransformFile", ctx.transformFile)("nzData", ctx.getExtraData)("nzAction", ctx.mockOSSData.host);
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__.NzUploadComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective], encapsulation: 2 });


/***/ }),

/***/ 76145:
/*!***************************************************!*\
  !*** ./src/app/components/upload/zh.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoUploadZhComponent": () => (/* binding */ NzDemoUploadZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/affix */ 71161);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 41833);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ 3504);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 90640);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 37265);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 7098);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 69218);
/* harmony import */ var _default_file_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-file-list */ 83814);
/* harmony import */ var _file_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-list */ 36321);
/* harmony import */ var _directory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directory */ 97923);
/* harmony import */ var _picture_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./picture-style */ 82629);
/* harmony import */ var _transform_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transform-file */ 21081);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./avatar */ 84177);
/* harmony import */ var _picture_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./picture-card */ 96525);
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drag */ 83044);
/* harmony import */ var _upload_manually__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./upload-manually */ 7878);
/* harmony import */ var _preview_file__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preview-file */ 206);
/* harmony import */ var _upload_with_aliyun_oss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-with-aliyun-oss */ 37967);





















class NzDemoUploadZhComponent {
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
NzDemoUploadZhComponent.ɵfac = function NzDemoUploadZhComponent_Factory(t) { return new (t || NzDemoUploadZhComponent)(); };
NzDemoUploadZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: NzDemoUploadZhComponent, selectors: [["nz-demo-upload"]], viewQuery: function NzDemoUploadZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 778, vars: 55, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-upload-demo-basic", "nzTitle", "\u70B9\u51FB\u4E0A\u4F20"], ["nzHref", "#components-upload-demo-avatar", "nzTitle", "\u7528\u6237\u5934\u50CF"], ["nzHref", "#components-upload-demo-default-file-list", "nzTitle", "\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868"], ["nzHref", "#components-upload-demo-picture-card", "nzTitle", "\u7167\u7247\u5899"], ["nzHref", "#components-upload-demo-file-list", "nzTitle", "\u5B8C\u5168\u63A7\u5236\u7684\u4E0A\u4F20\u5217\u8868"], ["nzHref", "#components-upload-demo-drag", "nzTitle", "\u62D6\u62FD\u4E0A\u4F20"], ["nzHref", "#components-upload-demo-directory", "nzTitle", "\u6587\u4EF6\u5939\u4E0A\u4F20"], ["nzHref", "#components-upload-demo-upload-manually", "nzTitle", "\u624B\u52A8\u4E0A\u4F20"], ["nzHref", "#components-upload-demo-picture-style", "nzTitle", "\u56FE\u7247\u5217\u8868\u6837\u5F0F"], ["nzHref", "#components-upload-demo-preview-file", "nzTitle", "\u81EA\u5B9A\u4E49\u9884\u89C8"], ["nzHref", "#components-upload-demo-transform-file", "nzTitle", "\u4E0A\u4F20\u524D\u8F6C\u6362\u6587\u4EF6"], ["nzHref", "#components-upload-demo-upload-with-aliyun-oss", "nzTitle", "\u963F\u91CC\u4E91 OSS"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["aria-label", "Edit this page on Github", "href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u70B9\u51FB\u4E0A\u4F20", "nzSelector", "nz-demo-upload-basic", "nzGenerateCommand", "ng g ng-zorro-antd:upload-basic <name>", "nzComponentName", "NzDemoUploadBasicComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868", "nzSelector", "nz-demo-upload-default-file-list", "nzGenerateCommand", "ng g ng-zorro-antd:upload-default-file-list <name>", "nzComponentName", "NzDemoUploadDefaultFileListComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u5B8C\u5168\u63A7\u5236\u7684\u4E0A\u4F20\u5217\u8868", "nzSelector", "nz-demo-upload-file-list", "nzGenerateCommand", "ng g ng-zorro-antd:upload-file-list <name>", "nzComponentName", "NzDemoUploadFileListComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u6587\u4EF6\u5939\u4E0A\u4F20", "nzSelector", "nz-demo-upload-directory", "nzGenerateCommand", "ng g ng-zorro-antd:upload-directory <name>", "nzComponentName", "NzDemoUploadDirectoryComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u56FE\u7247\u5217\u8868\u6837\u5F0F", "nzSelector", "nz-demo-upload-picture-style", "nzGenerateCommand", "ng g ng-zorro-antd:upload-picture-style <name>", "nzComponentName", "NzDemoUploadPictureStyleComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["href", "https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL", "target", "_blank", "rel", "noopener"], ["nzTitle", "\u4E0A\u4F20\u524D\u8F6C\u6362\u6587\u4EF6", "nzSelector", "nz-demo-upload-transform-file", "nzGenerateCommand", "ng g ng-zorro-antd:upload-transform-file <name>", "nzComponentName", "NzDemoUploadTransformFileComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u7528\u6237\u5934\u50CF", "nzSelector", "nz-demo-upload-avatar", "nzGenerateCommand", "ng g ng-zorro-antd:upload-avatar <name>", "nzComponentName", "NzDemoUploadAvatarComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u7167\u7247\u5899", "nzSelector", "nz-demo-upload-picture-card", "nzGenerateCommand", "ng g ng-zorro-antd:upload-picture-card <name>", "nzComponentName", "NzDemoUploadPictureCardComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u62D6\u62FD\u4E0A\u4F20", "nzSelector", "nz-demo-upload-drag", "nzGenerateCommand", "ng g ng-zorro-antd:upload-drag <name>", "nzComponentName", "NzDemoUploadDragComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u624B\u52A8\u4E0A\u4F20", "nzSelector", "nz-demo-upload-upload-manually", "nzGenerateCommand", "ng g ng-zorro-antd:upload-upload-manually <name>", "nzComponentName", "NzDemoUploadUploadManuallyComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u9884\u89C8", "nzSelector", "nz-demo-upload-preview-file", "nzGenerateCommand", "ng g ng-zorro-antd:upload-preview-file <name>", "nzComponentName", "NzDemoUploadPreviewFileComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u963F\u91CC\u4E91 OSS", "nzSelector", "nz-demo-upload-upload-with-aliyun-oss", "nzGenerateCommand", "ng g ng-zorro-antd:upload-upload-with-aliyun-oss <name>", "nzComponentName", "NzDemoUploadUploadWithAliyunOssComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["href", "https://github.com/blueimp/jQuery-File-Upload/wiki", "target", "_blank", "rel", "noopener"], ["id", "nz-upload"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-upload'", 1, "anchor"], ["href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept", "target", "_blank", "rel", "noopener"], ["href", "https://caniuse.com/#feat=input-file-directory", "target", "_blank", "rel", "noopener"], ["id", "nzchange"], ["onclick", "window.location.hash = 'nzchange'", 1, "anchor"], [1, "language-js"], ["spellcheck", "true", 1, "token", "comment"], ["id", "nzcustomrequest"], ["onclick", "window.location.hash = 'nzcustomrequest'", 1, "anchor"]], template: function NzDemoUploadZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "article")(1, "nz-affix", 0)(2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzClick", function NzDemoUploadZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "nz-link", 2)(4, "nz-link", 3)(5, "nz-link", 4)(6, "nz-link", 5)(7, "nz-link", 6)(8, "nz-link", 7)(9, "nz-link", 8)(10, "nz-link", 9)(11, "nz-link", 10)(12, "nz-link", 11)(13, "nz-link", 12)(14, "nz-link", 13)(15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "section", 15)(17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "\u4E0A\u4F20");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "h2", 20)(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "\u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "ul")(35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, " \u5F53\u9700\u8981\u4E0A\u4F20\u4E00\u4E2A\u6216\u4E00\u4E9B\u6587\u4EF6\u65F6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, " \u5F53\u9700\u8981\u5C55\u73B0\u4E0A\u4F20\u7684\u8FDB\u5EA6\u65F6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, " \u5F53\u9700\u8981\u4F7F\u7528\u62D6\u62FD\u4EA4\u4E92\u65F6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "pre", 22)(42, "code")(43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, " NzUploadModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, "'ng-zorro-antd/upload'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "h2")(60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NzDemoUploadZhComponent_Template_i_click_62_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "div", 27)(64, "div", 28)(65, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](66, "nz-demo-upload-basic", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, "\u7ECF\u5178\u6B3E\u5F0F\uFF0C\u7528\u6237\u70B9\u51FB\u6309\u94AE\u5F39\u51FA\u6587\u4EF6\u9009\u62E9\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](71, "nz-demo-upload-default-file-list", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, "nzFileList");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](77, " \u8BBE\u7F6E\u5DF2\u4E0A\u4F20\u7684\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](79, "nz-demo-upload-file-list", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, "nzFileList");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](85, " \u5BF9\u5217\u8868\u8FDB\u884C\u5B8C\u5168\u63A7\u5236\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5404\u79CD\u81EA\u5B9A\u4E49\u529F\u80FD\uFF0C\u4EE5\u4E0B\u6F14\u793A\u4E8C\u79CD\u60C5\u51B5\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "ol")(87, "li")(88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](89, " \u4E0A\u4F20\u5217\u8868\u6570\u91CF\u7684\u9650\u5236\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](90, "li")(91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](92, " \u8BFB\u53D6\u8FDC\u7A0B\u8DEF\u5F84\u5E76\u663E\u793A\u94FE\u63A5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](94, "nz-demo-upload-directory", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](97, "\u652F\u6301\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u6240\u6709\u6587\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](99, "nz-demo-upload-picture-style", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](102, "\u4E0A\u4F20\u6587\u4EF6\u4E3A\u56FE\u7247\uFF0C\u53EF\u5C55\u793A\u672C\u5730\u7F29\u7565\u56FE\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](104, "IE8/9");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](105, " \u4E0D\u652F\u6301\u6D4F\u89C8\u5668\u672C\u5730\u7F29\u7565\u56FE\u5C55\u793A\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](106, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](107, "Ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](108, "\uFF09\uFF0C\u53EF\u4EE5\u5199 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](110, "thumbUrl");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](111, " \u5C5E\u6027\u6765\u4EE3\u66FF\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](113, "nz-demo-upload-transform-file", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](114, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](116, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](118, "nzTransformFile");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](119, " \u8F6C\u6362\u4E0A\u4F20\u7684\u6587\u4EF6\uFF08\u4F8B\u5982\u6DFB\u52A0\u6C34\u5370\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](120, "div", 28)(121, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](122, "nz-demo-upload-avatar", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](125, "\u70B9\u51FB\u4E0A\u4F20\u7528\u6237\u5934\u50CF\uFF0C\u5E76\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](127, "nzBeforeUpload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](128, " \u9650\u5236\u7528\u6237\u4E0A\u4F20\u7684\u56FE\u7247\u683C\u5F0F\u548C\u5927\u5C0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "blockquote")(130, "p")(131, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](132, "nzBeforeUpload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](133, " \u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u662F\u4E00\u4E2A Observable \u4EE5\u652F\u6301\u4E5F\u652F\u6301\u5F02\u6B65\u68C0\u67E5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](134, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](135, "nz-demo-upload-picture-card", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](136, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](138, "\u7528\u6237\u53EF\u4EE5\u4E0A\u4F20\u56FE\u7247\u5E76\u5728\u5217\u8868\u4E2D\u663E\u793A\u7F29\u7565\u56FE\u3002\u5F53\u4E0A\u4F20\u7167\u7247\u6570\u5230\u8FBE\u9650\u5236\u540E\uFF0C\u4E0A\u4F20\u6309\u94AE\u6D88\u5931\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](139, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](140, "nz-demo-upload-drag", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](141, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](143, "\u628A\u6587\u4EF6\u62D6\u5165\u6307\u5B9A\u533A\u57DF\uFF0C\u5B8C\u6210\u4E0A\u4F20\uFF0C\u540C\u6837\u652F\u6301\u70B9\u51FB\u4E0A\u4F20\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](145, "\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](147, "nzMultiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](148, " \u540E\uFF0C\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](150, "IE10+");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](151, " \u53EF\u4EE5\u4E00\u6B21\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](152, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](153, "nz-demo-upload-upload-manually", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](154, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](155, "p")(156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](157, "nzBeforeUpload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](158, " \u8FD4\u56DE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](160, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](161, " \u540E\uFF0C\u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](162, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](163, "nz-demo-upload-preview-file", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](164, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](166, "\u81EA\u5B9A\u4E49\u672C\u5730\u9884\u89C8\uFF0C\u7528\u4E8E\u5904\u7406\u975E\u56FE\u7247\u683C\u5F0F\u6587\u4EF6\uFF08\u4F8B\u5982\u89C6\u9891\u6587\u4EF6\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "nz-code-box", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](168, "nz-demo-upload-upload-with-aliyun-oss", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](169, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](171, "\u4F7F\u7528\u963F\u91CC\u4E91 OSS \u4E0A\u4F20\u793A\u4F8B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](172, "section", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](173, "h2", 45)(174, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](175, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](176, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](177, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](178, "blockquote")(179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](180, "\u670D\u52A1\u7AEF\u4E0A\u4F20\u63A5\u53E3\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](181, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](182, "jQuery-File-Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](183, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](184, "h3", 48)(185, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](186, "nz-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](187, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](188, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](189, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](190, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](191, "table")(192, "thead")(193, "tr")(194, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](195, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](196, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](197, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](198, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](199, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](200, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](201, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](202, "tbody")(203, "tr")(204, "td")(205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](206, "[nzAccept]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](207, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](208, "\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](209, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](210, "input accept Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](211, "td")(212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](213, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](215, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](216, "tr")(217, "td")(218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](219, "[nzAction]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](221, "\u5FC5\u9009\u53C2\u6570, \u4E0A\u4F20\u7684\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](222, "td")(223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](224, "string | ((file: NzUploadFile) => string | Observable<string>)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](226, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](227, "tr")(228, "td")(229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](230, "[nzDirectory]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](232, "\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](233, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](234, "caniuse");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](235, "\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](236, "td")(237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](238, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](239, "td")(240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](241, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](242, "tr")(243, "td")(244, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](245, "[nzBeforeUpload]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](247, "\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](249, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](250, " \u5219\u505C\u6B62\u4E0A\u4F20\u3002\u6CE8\u610F\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](251, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](252, "IE9");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](253, " \u4E0D\u652F\u6301\u8BE5\u65B9\u6CD5\uFF1B\u6CE8\u610F\uFF1A\u52A1\u5FC5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](255, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](256, " \u5B9A\u4E49\u5904\u7406\u65B9\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](257, "td")(258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](259, "(file: NzUploadFile, fileList: NzUploadFile[]) => boolean | Observable<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](261, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](262, "tr")(263, "td")(264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](265, "[nzCustomRequest]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](267, "\u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0\uFF1B\u6CE8\u610F\uFF1A\u52A1\u5FC5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](268, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](269, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](270, " \u5B9A\u4E49\u5904\u7406\u65B9\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](271, "td")(272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](273, "(item) => Subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](275, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](276, "tr")(277, "td")(278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](279, "[nzData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](281, "\u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5\uFF1B\u6CE8\u610F\uFF1A\u52A1\u5FC5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](282, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](283, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](284, " \u5B9A\u4E49\u5904\u7406\u65B9\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](285, "td")(286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](287, "Object | ((file: NzUploadFile) => Object | Observable<{}>)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](289, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](290, "tr")(291, "td")(292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](293, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](295, "\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](296, "td")(297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](298, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](299, "td")(300, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](301, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](302, "tr")(303, "td")(304, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](305, "[nzFileList]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](307, "\u6587\u4EF6\u5217\u8868\uFF0C\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](308, "td")(309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](310, "NzUploadFile[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](311, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](312, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](313, "tr")(314, "td")(315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](316, "[nzLimit]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](318, "\u9650\u5236\u5355\u6B21\u6700\u591A\u4E0A\u4F20\u6570\u91CF\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](320, "nzMultiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](321, " \u6253\u5F00\u65F6\u6709\u6548\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](323, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](324, " \u8868\u793A\u4E0D\u9650");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](325, "td")(326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](327, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](328, "td")(329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](330, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](331, "tr")(332, "td")(333, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](334, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](336, "\u9650\u5236\u6587\u4EF6\u5927\u5C0F\uFF0C\u5355\u4F4D\uFF1AKB\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](337, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](338, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](339, " \u8868\u793A\u4E0D\u9650");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](340, "td")(341, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](342, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](343, "td")(344, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](345, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](346, "tr")(347, "td")(348, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](349, "[nzFileType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](351, "\u9650\u5236\u6587\u4EF6\u7C7B\u578B\uFF0C\u4F8B\u5982\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](353, "image/png,image/jpeg,image/gif,image/bmp");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](354, "td")(355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](356, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](358, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](359, "tr")(360, "td")(361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](362, "[nzFilter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](364, "\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](365, "td")(366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](367, "UploadFilter[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](369, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](370, "tr")(371, "td")(372, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](373, "[nzHeaders]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](375, "\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8\uFF0CIE10 \u4EE5\u4E0A\u6709\u6548\uFF1B\u6CE8\u610F\uFF1A\u52A1\u5FC5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](377, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](378, " \u5B9A\u4E49\u5904\u7406\u65B9\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](379, "td")(380, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](381, "Object | ((file: NzUploadFile) => Object | Observable<{}>)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](383, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](384, "tr")(385, "td")(386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](387, "[nzListType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](389, "\u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F\uFF0C\u652F\u6301\u4E09\u79CD\u57FA\u672C\u6837\u5F0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](391, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](392, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](393, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](394, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](395, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](396, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](397, "picture-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](398, "td")(399, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](400, "'text' | 'picture' | 'picture-card'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](401, "td")(402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](403, "'text'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](404, "tr")(405, "td")(406, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](407, "[nzMultiple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](408, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](409, "\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](410, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](411, "ie10+");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](412, " \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](413, "td")(414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](415, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](416, "td")(417, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](418, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](419, "tr")(420, "td")(421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](422, "[nzName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](423, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](424, "\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](425, "td")(426, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](427, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](428, "td")(429, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](430, "'file'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](431, "tr")(432, "td")(433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](434, "[nzShowUploadList]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](436, "\u662F\u5426\u5C55\u793A uploadList, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](437, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](438, "showPreviewIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](439, "\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](440, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](441, "showRemoveIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](442, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](443, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](444, "showDownloadIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](445, "td")(446, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](447, "boolean | { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](448, "td")(449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](450, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](451, "tr")(452, "td")(453, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](454, "[nzShowButton]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](455, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](456, "\u662F\u5426\u5C55\u793A\u4E0A\u4F20\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](457, "td")(458, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](459, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](460, "td")(461, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](462, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](463, "tr")(464, "td")(465, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](466, "[nzWithCredentials]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](468, "\u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](469, "td")(470, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](471, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](472, "td")(473, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](474, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](475, "tr")(476, "td")(477, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](478, "[nzOpenFileDialogOnClick]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](480, "\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](481, "td")(482, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](483, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](484, "td")(485, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](486, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](487, "tr")(488, "td")(489, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](490, "[nzPreview]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](492, "\u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03\uFF1B\u6CE8\u610F\uFF1A\u52A1\u5FC5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](493, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](494, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](495, " \u5B9A\u4E49\u5904\u7406\u65B9\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](496, "td")(497, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](498, "(file: NzUploadFile) => void");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](500, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](501, "tr")(502, "td")(503, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](504, "[nzPreviewFile]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](506, "\u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91\uFF1B\u6CE8\u610F\uFF1A\u52A1\u5FC5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](507, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](508, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](509, " \u5B9A\u4E49\u5904\u7406\u65B9\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](510, "td")(511, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](512, "(file: NzUploadFile) => Observable<dataURL: string>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](513, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](514, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](515, "tr")(516, "td")(517, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](518, "[nzPreviewIsImage]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](519, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](520, "\u81EA\u5B9A\u4E49\u9884\u89C8\u6587\u4EF6\u662F\u5426\u6709\u6548\u56FE\u50CF\uFF0C\u4E00\u822C\u7528\u4E8E\u56FE\u50CFURL\u4E3A\u975E\u6807\u51C6\u683C\u5F0F\uFF1B\u6CE8\u610F\uFF1A\u52A1\u5FC5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](521, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](522, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](523, " \u5B9A\u4E49\u5904\u7406\u65B9\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](524, "td")(525, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](526, "(file: NzUploadFile) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](527, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](528, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](529, "tr")(530, "td")(531, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](532, "[nzRemove]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](534, "\u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](535, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](536, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](537, " \u5BF9\u8C61\uFF1B\u6CE8\u610F\uFF1A\u52A1\u5FC5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](539, "=>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](540, " \u5B9A\u4E49\u5904\u7406\u65B9\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](541, "td")(542, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](543, "(file: NzUploadFile) => boolean | Observable<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](544, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](545, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](546, "tr")(547, "td")(548, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](549, "(nzChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](550, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](551, "\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](552, "td")(553, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](554, "EventEmitter<NzUploadChangeParam>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](555, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](556, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](557, "tr")(558, "td")(559, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](560, "[nzDownload]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](561, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](562, "\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](563, "td")(564, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](565, "(file: NzUploadFile) => void");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](566, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](567, "\u8DF3\u8F6C\u65B0\u6807\u7B7E\u9875");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](568, "tr")(569, "td")(570, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](571, "[nzTransformFile]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](573, "\u5728\u4E0A\u4F20\u4E4B\u524D\u8F6C\u6362\u6587\u4EF6\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Observable \u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](574, "td")(575, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](576, "(file: NzUploadFile) => NzUploadTransformFileType");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](577, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](578, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](579, "tr")(580, "td")(581, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](582, "[nzIconRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](583, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](584, "\u81EA\u5B9A\u4E49\u663E\u793A icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](585, "td")(586, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](587, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](588, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](589, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](590, "tr")(591, "td")(592, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](593, "[nzFileListRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](594, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](595, "\u81EA\u5B9A\u4E49\u663E\u793A\u6574\u4E2A\u5217\u8868");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](596, "td")(597, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](598, "TemplateRef<{ $implicit: UploadFile[] }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](600, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](601, "h4", 53)(602, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](603, "nzChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](604, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](605, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](606, "blockquote")(607, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](608, "\u5F00\u59CB\u3001\u4E0A\u4F20\u8FDB\u5EA6\u3001\u5B8C\u6210\u3001\u5931\u8D25\u90FD\u4F1A\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](609, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](610, "\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u4E3A\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](611, "pre", 55)(612, "code")(613, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](614, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](615, "\n  file");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](616, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](617, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](618, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](619, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](620, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](621, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](622, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](623, "/* ... */");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](624, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](625, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](626, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](627, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](628, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](629, "\n  fileList");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](630, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](631, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](632, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](633, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](634, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](635, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](636, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](637, "/* ... */");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](638, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](639, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](640, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](641, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](642, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](643, "\n  event");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](644, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](645, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](646, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](647, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](648, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](649, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](650, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](651, "/* ... */");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](652, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](653, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](654, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](655, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](656, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](657, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](658, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](659, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](660, "ol")(661, "li")(662, "p")(663, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](664, "file");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](665, " \u5F53\u524D\u64CD\u4F5C\u7684\u6587\u4EF6\u5BF9\u8C61\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](666, "pre", 55)(667, "code")(668, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](669, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](670, "\n   uid");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](671, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](672, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](673, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](674, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](675, "'uid'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](676, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](677, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](678, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](679, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](680, "// \u6587\u4EF6\u552F\u4E00\u6807\u8BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](681, "\n   name");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](682, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](683, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](684, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](685, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](686, "'xx.png'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](687, "   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](688, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](689, "// \u6587\u4EF6\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](690, "\n   status");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](691, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](692, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](693, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](694, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](695, "'done'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](696, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](697, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](698, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](699, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](700, "// \u72B6\u6001\u6709\uFF1Auploading done error removed");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](701, "\n   response");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](702, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](703, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](704, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](705, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](706, "'{\"status\": \"success\"}'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](707, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](708, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](709, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](710, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](711, "// \u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](712, "\n   linkProps");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](713, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](714, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](715, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](716, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](717, "'{\"download\": \"image\"}'");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](718, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](719, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](720, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](721, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](722, "// \u4E0B\u8F7D\u94FE\u63A5\u989D\u5916\u7684 HTML \u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](723, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](724, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](725, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](726, "li")(727, "p")(728, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](729, "fileList");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](730, " \u5F53\u524D\u7684\u6587\u4EF6\u5217\u8868\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](731, "li")(732, "p")(733, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](734, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](735, " \u4E0A\u4F20\u4E2D\u7684\u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9\uFF0C\u5305\u542B\u4E86\u4E0A\u4F20\u8FDB\u5EA6\u7B49\u4FE1\u606F\uFF0C\u9AD8\u7EA7\u6D4F\u89C8\u5668\u652F\u6301\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](736, "h4", 57)(737, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](738, "nzCustomRequest");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](739, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](740, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](741, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](742, "\u9ED8\u8BA4\u4F7F\u7528HTML5\u65B9\u5F0F\u4E0A\u4F20\uFF08\u5373\uFF1A\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](743, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](744, "HttpClient");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](745, "\uFF09\uFF0C\u5141\u8BB8\u8986\u76D6\u9ED8\u8BA4\u884C\u4E3A\u5B9E\u73B0\u5B9A\u5236\u9700\u6C42\uFF0C\u4F8B\u5982\u76F4\u63A5\u4E0E\u963F\u91CC\u4E91\u4EA4\u4E92\u7B49\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](746, "p")(747, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](748, "nzCustomRequest");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](749, " \u56DE\u8C03\u4F20\u9012\u4EE5\u4E0B\u53C2\u6570\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](750, "ul")(751, "li")(752, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](753, "onProgress: (event: { percent: number }): void");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](754, "li")(755, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](756, "onError: (event: Error): void");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](757, "li")(758, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](759, "onSuccess: (body: Object, xhr?: Object): void");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](760, "li")(761, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](762, "data: Object");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](763, "li")(764, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](765, "filename: String");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](766, "li")(767, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](768, "file: File");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](769, "li")(770, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](771, "withCredentials: Boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](772, "li")(773, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](774, "action: String");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](775, "li")(776, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](777, "headers: Object");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-basic")("nzLink", "components-upload-demo-basic")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-default-file-list")("nzLink", "components-upload-demo-default-file-list")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/default-file-list.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-file-list")("nzLink", "components-upload-demo-file-list")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/file-list.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-directory")("nzLink", "components-upload-demo-directory")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/directory.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-picture-style")("nzLink", "components-upload-demo-picture-style")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/picture-style.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-transform-file")("nzLink", "components-upload-demo-transform-file")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/transform-file.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-avatar")("nzLink", "components-upload-demo-avatar")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/avatar.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-picture-card")("nzLink", "components-upload-demo-picture-card")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/picture-card.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-drag")("nzLink", "components-upload-demo-drag")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/drag.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-upload-manually")("nzLink", "components-upload-demo-upload-manually")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/upload-manually.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-preview-file")("nzLink", "components-upload-demo-preview-file")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/preview-file.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzId", "components-upload-demo-upload-with-aliyun-oss")("nzLink", "components-upload-demo-upload-with-aliyun-oss")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/upload/demo/upload-with-aliyun-oss.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_14__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_15__.NzAnchorLinkComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoUploadBasicComponent, _default_file_list__WEBPACK_IMPORTED_MODULE_2__.NzDemoUploadDefaultFileListComponent, _file_list__WEBPACK_IMPORTED_MODULE_3__.NzDemoUploadFileListComponent, _directory__WEBPACK_IMPORTED_MODULE_4__.NzDemoUploadDirectoryComponent, _picture_style__WEBPACK_IMPORTED_MODULE_5__.NzDemoUploadPictureStyleComponent, _transform_file__WEBPACK_IMPORTED_MODULE_6__.NzDemoUploadTransformFileComponent, _avatar__WEBPACK_IMPORTED_MODULE_7__.NzDemoUploadAvatarComponent, _picture_card__WEBPACK_IMPORTED_MODULE_8__.NzDemoUploadPictureCardComponent, _drag__WEBPACK_IMPORTED_MODULE_9__.NzDemoUploadDragComponent, _upload_manually__WEBPACK_IMPORTED_MODULE_10__.NzDemoUploadUploadManuallyComponent, _preview_file__WEBPACK_IMPORTED_MODULE_11__.NzDemoUploadPreviewFileComponent, _upload_with_aliyun_oss__WEBPACK_IMPORTED_MODULE_12__.NzDemoUploadUploadWithAliyunOssComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_upload_index_module_ts.js.map