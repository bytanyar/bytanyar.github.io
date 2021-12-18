(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cats_cats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cats/cats.component */ "./src/app/cats/cats.component.ts");
/* harmony import */ var _knowledge_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./knowledge/data.component */ "./src/app/knowledge/data.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








const routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'data', component: _knowledge_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"] },
    { path: 'cats', component: _cats_cats_component__WEBPACK_IMPORTED_MODULE_2__["CatsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'ByTanyaR';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 1, consts: [[1, "body"], ["autoplay", "", "muted", "", "loop", "", "id", "mainVideo"], ["src", "https://bytanyar.com/src/images/videos/Home.mp4", "type", "video/mp4"], [1, "main-container"], ["routerLink", "/"], ["routerLink", "/data"], ["routerLink", "/experience"], ["routerLink", "/cats"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  background: url(\"https://bytanyar.com/src/app/images/Home.jpg\") #4150b1;\n  background-size: cover;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #f1c68d;\n  font-size: 2.5rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 5px;\n  color: #4150b1;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.box-container[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.65);\n  border: 1px solid #ccc;\n  border-radius: 25px;\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n}\n\n.body[_ngcontent-%COMP%] {\n  font-family: \"Calibri\", \"Arial\", sans-serif;\n  padding-bottom: 3rem;\n}\n\n#mainVideo[_ngcontent-%COMP%] {\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  position: fixed;\n  right: 0;\n  z-index: -1;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  max-width: 950px;\n  margin: 0 auto;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 5rem;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n  font-family: inherit;\n  font-size: 1.25rem;\n  margin: 0 5px;\n  padding: 5px 15px;\n  text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  background-color: rgba(255, 255, 255, 0.65);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFJlYWxEb2N1bWVudHNcXFdlYnNpdGVcXGJ5dGFueWFyLmdpdGh1Yi5pby9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFxSZWFsRG9jdW1lbnRzXFxXZWJzaXRlXFxieXRhbnlhci5naXRodWIuaW8vc3JjXFx2YXJzLnNjc3MiLCJzcmMvYXBwL0Q6XFxSZWFsRG9jdW1lbnRzXFxXZWJzaXRlXFxieXRhbnlhci5naXRodWIuaW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVFQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURHQTtFQUNJLGNFTEk7RUZNSixpQkFBQTtBQ0FKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNFWkc7RUZhSCxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsMkNFckJlO0VGc0JmLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FFdkJBO0VBQ0UsMkNBQUE7RUFDQSxvQkFBQTtBRjBCRjs7QUV4QkE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FGMkJGOztBRXpCQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBRjRCRjs7QUUxQkE7RUFDRSxXQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0FGNkJGOztBRTFCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FGNkJKOztBRTNCSTtFQUVFLDJDRHJDYTtBRGlFbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcnMuc2Nzcyc7XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9ieXRhbnlhci5jb20vc3JjL2FwcC9pbWFnZXMvSG9tZS5qcGcnKSAkYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuaDIge1xuICAgIGNvbG9yOiAkY3JlYW07XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5oMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmJveC1jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbn0iLCJib2R5IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9ieXRhbnlhci5jb20vc3JjL2FwcC9pbWFnZXMvSG9tZS5qcGdcIikgIzQxNTBiMTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaDIge1xuICBjb2xvcjogI2YxYzY4ZDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbmgzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzQxNTBiMTtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3gtY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuXG4jbWFpblZpZGVvIHtcbiAgYm90dG9tOiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxubmF2IGEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW46IDAgNXB4O1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxubmF2IGE6aG92ZXIsIG5hdiBhOnZpc2l0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xufSIsIiRiYWNrZ3JvdW5kLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xyXG4kYmx1ZTogIzQxNTBiMTtcclxuJGNyZWFtOiAjZjFjNjhkO1xyXG4kcHVycGxlOiAjODM2NWFkO1xyXG5cclxuIiwiQGltcG9ydCBcIi4uL3N0eWxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi92YXJzLnNjc3NcIjtcclxuXHJcbi5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJDYWxpYnJpXCIsICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbn1cclxuI21haW5WaWRlbyB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogOTUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuaDEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNXJlbTtcclxufVxyXG5uYXYge1xyXG4gIGEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlcixcclxuICAgICY6dmlzaXRlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _knowledge_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./knowledge/data.component */ "./src/app/knowledge/data.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _cats_cats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cats/cats.component */ "./src/app/cats/cats.component.ts");
/* harmony import */ var _services_cats_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/cats.service */ "./src/app/services/cats.service.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_cats_service__WEBPACK_IMPORTED_MODULE_9__["ApiCatService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _knowledge_data_component__WEBPACK_IMPORTED_MODULE_5__["DataComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
        _cats_cats_component__WEBPACK_IMPORTED_MODULE_8__["CatsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _knowledge_data_component__WEBPACK_IMPORTED_MODULE_5__["DataComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                    _cats_cats_component__WEBPACK_IMPORTED_MODULE_8__["CatsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [_services_cats_service__WEBPACK_IMPORTED_MODULE_9__["ApiCatService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cats/cats.component.ts":
/*!****************************************!*\
  !*** ./src/app/cats/cats.component.ts ***!
  \****************************************/
/*! exports provided: CatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsComponent", function() { return CatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cats.service */ "./src/app/services/cats.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CatsComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID: ", cat_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", cat_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CatsComponent {
    constructor(_catApiService) {
        this._catApiService = _catApiService;
        this.cats = [];
    }
    ngOnInit() {
        this.getNewCat();
    }
    getNewCat() {
        this._catApiService.getCats().subscribe(data => {
            this.cats = data;
        });
    }
}
CatsComponent.ɵfac = function CatsComponent_Factory(t) { return new (t || CatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cats_service__WEBPACK_IMPORTED_MODULE_1__["ApiCatService"])); };
CatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatsComponent, selectors: [["app-cats"]], decls: 8, vars: 1, consts: [[1, "container"], [1, "heading"], [3, "click"], ["class", "box-container", 4, "ngFor", "ngForOf"], [1, "box-container"], [3, "src"]], template: function CatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cats ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatsComponent_Template_button_click_5_listener() { return ctx.getNewCat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New Cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CatsComponent_ul_7_Template, 5, 2, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cats);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.box-container[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  min-height: 300px;\n}\n\n.box-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  max-width: 500px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  justify-content: space-between;\n}\n\n.heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  margin: 1.5rem 0;\n  padding: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0cy9EOlxcUmVhbERvY3VtZW50c1xcV2Vic2l0ZVxcYnl0YW55YXIuZ2l0aHViLmlvL3NyY1xcYXBwXFxjYXRzXFxjYXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRzL2NhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBQTtBQ0RKOztBREdBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNBSjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY2F0cy9jYXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcnMuc2Nzc1wiO1xyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5ib3gtY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBcclxuICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgfVxyXG59XHJcbi5oZWFkaW5nIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIH1cclxufSIsInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uYm94LWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbn1cbi5ib3gtY29udGFpbmVyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGluZyBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMS41cmVtIDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cats',
                templateUrl: './cats.component.html',
                styleUrls: ['./cats.component.scss']
            }]
    }], function () { return [{ type: _services_cats_service__WEBPACK_IMPORTED_MODULE_1__["ApiCatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data/actual-jobs.ts":
/*!*************************************!*\
  !*** ./src/app/data/actual-jobs.ts ***!
  \*************************************/
/*! exports provided: JOBS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOBS", function() { return JOBS; });
const JOBS = [
    { id: 1, company: 'Clayton Homes', start: 'February 2009', end: 'January 2020', details: [
            'Quality assurance to see that code matches design, intent, and accessibility',
            'Converting PSD compositions into HTML and CSS',
            'Expanding webpage functionality using JavaScript/JQuery/React JS',
            'Knowledgeable about cross-browser issues and testing',
            'Code pages to match customer requirements',
            'Write reusable code for UI components',
            'Utilize existing standards to maximize browser compatibility',
            'Building and testing responsive layouts',
            'Given 10+ ACE awards for excellence',
            'Managed a large base of 900+ mortgage loan account customers',
            '100+ calls per day to counsel customers with past-due mortgage accounts to arrange payments or assist them in bringing accounts up to date',
            'Recommended alternative mortgage payment options',
            'Maintained strict compliance with regulations',
            'Mentoring several newer employees',
            'Earned recognition for achieving a 95% average score for call handling and customer service ability'
        ] },
    { id: 2, company: 'StoragePug', start: 'March 2020', end: 'November 2021', details: [
            'Train others on design standards and using specialized CMS',
            'Converting Zeplin and Figma compositions into HTML and SCSS',
            'Build components using AngularJS for specialized CMS',
            'Expertly edit images to more closely meet design standards using PhotoShop',
            'Utilize provided wireframes, prototypes and content to build websites to design standards using a specialized CMS',
            'Ensure work adheres to established standards and practices',
            'Use drag-and-drop web editor to build self-storage websites',
            'Utilize CSS/HTML to override CMS settings to meet design requirements',
            'Use drag-and-drop web editor to build self-storage websites',
            'Communicate with team members, developers, and designers as needed during the website building process',
            'Present designs to peers',
            'Showcase what makes each client awesome and help them book more units through their website'
        ] },
];


/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ExperienceComponent_ul_3_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r7);
} }
function ExperienceComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExperienceComponent_ul_3_ul_6_Template, 3, 1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r5.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", job_r5.start, " to ", job_r5.end, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", job_r5.details);
} }
class ExperienceComponent {
    constructor(jobService) {
        this.jobService = jobService;
        this.jobs = [];
    }
    getJobs() {
        console.log('inside');
        this.jobs = this.jobService.getJobs();
    }
    ngOnInit() {
        this.getJobs();
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"])); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 4, vars: 1, consts: [[1, "main-container"], ["class", "job-container", 4, "ngFor", "ngForOf"], [1, "job-container"], [1, "details-container"], [4, "ngFor", "ngForOf"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExperienceComponent_ul_3_Template, 7, 4, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".job-container[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.65);\n  border: 1px solid #ccc;\n  border-radius: 25px;\n  padding: 1rem;\n}\n\n.details-container[_ngcontent-%COMP%] {\n  padding: 0 3rem 1rem;\n}\n\n.details-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9EOlxcUmVhbERvY3VtZW50c1xcV2Vic2l0ZVxcYnl0YW55YXIuZ2l0aHViLmlvL3NyY1xcYXBwXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBlcmllbmNlL0Q6XFxSZWFsRG9jdW1lbnRzXFxXZWJzaXRlXFxieXRhbnlhci5naXRodWIuaW8vc3JjXFx2YXJzLnNjc3MiLCJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG1CQUFBO0VBQ0EsMkNDTGU7RURNZixzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBRUZKOztBRktBO0VBQ0ksb0JBQUE7QUVGSjs7QUZLUTtFQUNJLG9CQUFBO0FFSFoiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFycy5zY3NzXCI7XHJcblxyXG5cclxuLmpvYi1jb250YWluZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAzcmVtIDFyZW07XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGJhY2tncm91bmQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XHJcbiRibHVlOiAjNDE1MGIxO1xyXG4kY3JlYW06ICNmMWM2OGQ7XHJcbiRwdXJwbGU6ICM4MzY1YWQ7XHJcblxyXG4iLCIuam9iLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5kZXRhaWxzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgM3JlbSAxcmVtO1xufVxuLmRldGFpbHMtY29udGFpbmVyIHVsIGxpIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss']
            }]
    }], function () { return [{ type: _services_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() {
        this.title = "ByTanyaR";
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [[1, "main-container"], [1, "box-container"], [1, "objective"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Objective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seeking a position that will benefit from my strong work ethic and experience in website development as well as grow my abilities and knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-container[_ngcontent-%COMP%] {\n  transition: transform 5s ease-in-out;\n}\n\n.box-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n.box-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n.objective[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUmVhbERvY3VtZW50c1xcV2Vic2l0ZVxcYnl0YW55YXIuZ2l0aHViLmlvL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxvQ0FBQTtBQ0RKOztBREdBO0VBQ0ksYUFBQTtBQ0FKOztBREVJO0VBQ0kscUJBQUE7QUNBUjs7QURHQTtFQUNJLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFycy5zY3NzXCI7XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5ib3gtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgfVxyXG59XHJcbi5vYmplY3RpdmUge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59IiwiLm1haW4tY29udGFpbmVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYm94LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4uYm94LWNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLm9iamVjdGl2ZSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/knowledge/data.component.ts":
/*!*********************************************!*\
  !*** ./src/app/knowledge/data.component.ts ***!
  \*********************************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function DataComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](listItem_r3);
} }
class DataComponent {
    constructor() {
        this.knowledgeData = [
            "Adobe Creative Suite",
            "Agile/SCRUM",
            "AngularJS",
            "Bootstrap",
            "CSS/SCSS",
            "Figma",
            "Git",
            "Git Kraken/Sourcetree",
            "HTML",
            "HubSpot",
            "JavaScript/JQuery",
            "Jira",
            "JSON",
            "Sketch",
            "Storybook",
            "Team City",
            "Zeplin"
        ];
    }
    ngOnInit() {
    }
}
DataComponent.ɵfac = function DataComponent_Factory(t) { return new (t || DataComponent)(); };
DataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataComponent, selectors: [["app-data"]], decls: 11, vars: 1, consts: [[1, "main-container"], [1, "box-container"], [1, "input-container"], [4, "ngFor", "ngForOf"]], template: function DataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "COMPUTER PROGRAMS & KNOWLEDGE BASE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Certifications: Web Authoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DataComponent_li_8_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PC & Macintosh Operating Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.knowledgeData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".input-container[_ngcontent-%COMP%] {\n  margin: 5px auto;\n}\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #ccc;\n  border-radius: 2px;\n  margin: 0 5px;\n  padding: 5px 2px;\n}\n.input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-color: #ccc;\n  border-radius: 5px;\n  padding: 5px 10px;\n}\nul[_ngcontent-%COMP%] {\n  -moz-columns: 2;\n       columns: 2;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: square;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva25vd2xlZGdlL0Q6XFxSZWFsRG9jdW1lbnRzXFxXZWJzaXRlXFxieXRhbnlhci5naXRodWIuaW8vc3JjXFxhcHBcXGtub3dsZWRnZVxcZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva25vd2xlZGdlL2RhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtBQ0RKO0FER0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RSO0FES0E7RUFDSSxlQUFBO09BQUEsVUFBQTtBQ0ZKO0FESUk7RUFDSSx1QkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAva25vd2xlZGdlL2RhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFycy5zY3NzXCI7XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMnB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG51bCB7XHJcbiAgICBjb2x1bW5zOiAyO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcclxuICAgIH1cclxufSIsIi5pbnB1dC1jb250YWluZXIge1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuLmlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW46IDAgNXB4O1xuICBwYWRkaW5nOiA1cHggMnB4O1xufVxuLmlucHV0LWNvbnRhaW5lciBidXR0b24ge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbnVsIHtcbiAgY29sdW1uczogMjtcbn1cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data',
                templateUrl: './data.component.html',
                styleUrls: ['./data.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/cats.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cats.service.ts ***!
  \******************************************/
/*! exports provided: ApiCatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCatService", function() { return ApiCatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ApiCatService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCats() {
        return this.httpClient.get('https://api.thecatapi.com/v1/images/search');
    }
}
ApiCatService.ɵfac = function ApiCatService_Factory(t) { return new (t || ApiCatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiCatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiCatService, factory: ApiCatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiCatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/job.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_actual_jobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/actual-jobs */ "./src/app/data/actual-jobs.ts");



class JobService {
    constructor() {
    }
    /** GET jobs from the file */
    getJobs() {
        return _data_actual_jobs__WEBPACK_IMPORTED_MODULE_1__["JOBS"];
    }
}
JobService.ɵfac = function JobService_Factory(t) { return new (t || JobService)(); };
JobService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobService, factory: JobService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\RealDocuments\Website\bytanyar.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map