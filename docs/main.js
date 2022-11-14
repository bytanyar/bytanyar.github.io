"use strict";
(self["webpackChunkbytanyar"] = self["webpackChunkbytanyar"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _artwork_artwork_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artwork/artwork.component */ 6658);
/* harmony import */ var _cats_cats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cats/cats.component */ 8033);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent },
    { path: 'cats', component: _cats_cats_component__WEBPACK_IMPORTED_MODULE_1__.CatsComponent },
    { path: 'artwork', component: _artwork_artwork_component__WEBPACK_IMPORTED_MODULE_0__.ArtworkComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor(document) {
        this.document = document;
        this.title = 'ByTanyaR';
    }
    ngOnInit() {
        this.screenHeight = window.innerHeight;
    }
    onWindowScroll() {
        let timeout = null;
        if (document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50) {
            document.getElementById('mainNav').classList.add('nav-up');
            document.getElementById('mainContainer').classList.add('nav-up');
            document.getElementById('mainNav').classList.remove('fade');
        }
        else if (document.body.scrollTop == 0) {
            document.getElementById('mainNav').classList.add('fade');
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            timeout = setTimeout(function () {
                document.getElementById('mainNav').classList.remove('nav-up');
                document.getElementById('mainNav').classList.remove('fade');
                document.getElementById('mainContainer').classList.remove('nav-up');
            }, 1000);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 28, vars: 1, consts: [[1, "body"], [1, "body-row", "row"], [1, "col-md-3"], ["href", "mailto:bytanyar@yahoo.com"], [1, "col-md-9"], ["id", "mainNav", 1, "header-container", "row"], [1, "constrainer"], [1, "main-header"], ["routerLink", "/"], ["routerLink", "/artwork"], ["routerLink", "/cats"], ["target", "_blank", "href", "https://github.com/bytanyar/bytanyar.github.io"], ["href", "https://bytanyar.com/resume-2022/"], ["id", "mainContainer", 1, "main-container"], [1, ""], [1, "copyright"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "bytanyar@yahoo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Artwork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Copyright 2022 ByTanyaR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["h2[_ngcontent-%COMP%] {\n  border-radius: 0 25px 25px 0;\n  color: #f1c68d;\n  font-size: 2.5rem;\n  margin-top: 2rem !important;\n}\n\nh3[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #f1c68d;\n  border-radius: 5px;\n  color: #4150b1;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.box-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 25px;\n  padding: 1rem;\n}\n\n.body[_ngcontent-%COMP%] {\n  background: #4150b1;\n  background: linear-gradient(90deg, #4150b1 0%, #8365ad 49%, #4150b1 100%);\n  font-family: \"Calibri\", \"Arial\", sans-serif;\n  padding: 3rem 1rem;\n}\n\n.body-row[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.fade[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: 2s linear all;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 5px solid #f1c68d;\n  left: 0;\n  margin: 0 -2rem;\n  max-width: calc(100% + 4rem);\n  padding-bottom: 1rem;\n  position: fixed;\n  top: 0;\n  width: calc(100% + 4rem);\n  z-index: 999999;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   .constrainer[_ngcontent-%COMP%] {\n  max-width: 950px;\n  margin: 0 auto;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #8365ad;\n  display: inline-block;\n  font-size: 2rem;\n  margin-bottom: 0;\n  margin-left: 1.5rem;\n  padding-bottom: 0;\n  padding-top: 10px;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8365ad;\n  text-decoration: none;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 2rem;\n  margin-top: 1rem;\n  padding-right: 10%;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-color: #8365ad;\n  color: #8365ad;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #8365ad;\n  color: #fff;\n}\n\nfooter[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  max-width: 950px;\n  margin: 0 auto;\n  padding-left: 20px;\n}\n\n#mainContainer.main-container.nav-up[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.header-container[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%] {\n  max-width: 950px;\n  margin: 0 auto;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 5rem;\n  padding: 2rem 0;\n}\n\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 3rem;\n  text-decoration: none;\n}\n\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n  font-family: inherit;\n  font-size: 1.25rem;\n  margin: 0 5px;\n  padding: 5px 15px;\n  text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  background-color: #fff;\n  color: #333;\n}\n\n@media screen and (max-width: 375px) and (-webkit-min-device-pixel-ratio: 1.25), (-webkit-min-device-pixel-ratio: 1.25) and (-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 120dpi) and (-webkit-min-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3) and (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 124.8dpi) and (-webkit-min-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 144dpi) and (-webkit-min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  #mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n  #mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n\n  h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n\n@media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 1.25), (-webkit-min-device-pixel-ratio: 1.25) and (-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 120dpi) and (-webkit-min-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3) and (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 124.8dpi) and (-webkit-min-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 144dpi) and (-webkit-min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape), (min-resolution: 192dpi) and (orientation: landscape) {\n  nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n  }\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-bottom: 5px !important;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  aside[_ngcontent-%COMP%] {\n    background-color: #fff;\n    margin-bottom: -3rem;\n    margin-left: -3rem;\n    margin-top: -5rem;\n    min-height: 150vh;\n    position: relative;\n  }\n  aside[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #8365ad;\n    left: 0;\n    position: absolute;\n    text-align: right;\n    top: 38rem;\n    transform: rotate(-90deg);\n    transform-origin: 0 0;\n  }\n  aside[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #8365ad;\n  }\n\n  #mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    background: none;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, #4150b1 0%, #8365ad 65%, #f1c68d 100%);\n    border-radius: 0 15px 15px 0;\n    padding-left: 0 !important;\n  }\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n    margin: 0 5px 0 0;\n  }\n}\n\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #4150b1 0%, #8365ad 65%, #f1c68d 100%);\n  border-radius: 0 15px 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxzdHlsZXMuc2NzcyIsIi4uXFx2YXJzLnNjc3MiLCJhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSw0QkFBQTtFQUNBLGNDSEk7RURJSixpQkFBQTtFQUNBLDJCQUFBO0FFRko7O0FGSUE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0NYRztFRFlILGVBQUE7RUFDQSxrQkFBQTtBRURKOztBRklBO0VBQ0ksc0JBQUE7RUFDQSxzQkNuQmU7RURvQmYsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUVESjs7QUFsQkE7RUFDRSxtQkRISztFQ0lMLHlFQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQXFCRjs7QUFsQkE7RUFDRSxXQUFBO0FBcUJGOztBQW5CQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQXNCRjs7QUFwQkE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUF1QkY7O0FBckJFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBdUJKOztBQXJCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBdUJKOztBQXBCRTtFQUNFLGNEckNLO0VDc0NMLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBc0JKOztBQXBCSTtFQUNFLGNEOUNHO0VDK0NILHFCQUFBO0FBc0JOOztBQXBCTTtFQUNFLFdBQUE7QUFzQlI7O0FBbEJFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFvQko7O0FBbEJJO0VBQ0UscUJEN0RHO0VDOERILGNEOURHO0FDa0ZUOztBQWxCTTtFQUNFLHlCRGpFQztFQ2tFRCxXQUFBO0FBb0JSOztBQWZBO0VBQ0UsV0FBQTtBQWtCRjs7QUFoQkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWtCSjs7QUFmQTtFQUNFLGdCQUFBO0FBa0JGOztBQWhCQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQW1CRjs7QUFqQkE7RUFDRSxXQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQW9CRjs7QUFsQkU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBb0JKOztBQWxCSTtFQUNFLFdBQUE7QUFvQk47O0FBZkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQWtCSjs7QUFoQkk7RUFDRSxzQkFBQTtFQUNBLHNCRHZIYTtFQ3dIYixXQUFBO0FBa0JOOztBQWJBO0VBTUk7SUFDRSxrQkFBQTtFQVdKO0VBVEk7SUFDRSxrQkFBQTtFQVdOOztFQU5FO0lBQ0Usa0JBQUE7RUFTSjtBQUNGOztBQU5BO0VBS0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLDJCQUFBO0VBSUY7RUFGRTtJQUNFLDZCQUFBO0VBSUo7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsZUFBQTtFQUdGO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLHNCRHZLZTtJQ3dLZixvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBR0Y7RUFERTtJQUNFLGNENUtHO0lDNktILE9BQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7RUFHSjtFQURJO0lBQ0UsY0RyTEM7RUN3TFA7O0VBRUU7SUFDRSxnQkFBQTtFQUNKOztFQUVBO0lBQ0UseUVEOUxjO0lDK0xkLDRCQUFBO0lBQ0EsMEJBQUE7RUFDRjtFQUVJO0lBQ0UsaUJBQUE7RUFBTjtBQUNGOztBQUtFO0VBQ0UseUVEM01jO0VDNE1kLDRCQUFBO0FBSEoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJzLnNjc3MnO1xyXG5cclxuXHJcbmgyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjVweCAyNXB4IDA7XHJcbiAgICBjb2xvcjogJGNyZWFtO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuaDMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICRjcmVhbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJveC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4vLyAgICAgaDIge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRsaW5lYXItZ3JhZGllbnQ7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuLy8gICAgIH1cclxuLy8gfSIsIiRiYWNrZ3JvdW5kLXdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzQxNTBiMTtcclxuJGNyZWFtOiAjZjFjNjhkO1xyXG4kcHVycGxlOiAjODM2NWFkO1xyXG4kbGluZWFyLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRibHVlIDAlLCAkcHVycGxlIDY1JSwgJGNyZWFtIDEwMCUpOyIsIkBpbXBvcnQgXCIuLi9zdHlsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vdmFycy5zY3NzXCI7XHJcblxyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmx1ZSAwJSwgJHB1cnBsZSA0OSUsICRibHVlIDEwMCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhbGlicmlcIiwgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAzcmVtIDFyZW07XHJcbn1cclxuXHJcbi5ib2R5LXJvdyB7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuLmZhZGUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogMnMgbGluZWFyIGFsbDtcclxufVxyXG4jbWFpbk5hdi5oZWFkZXItY29udGFpbmVyLm5hdi11cCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJGNyZWFtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiAwIC0ycmVtO1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlICsgNHJlbSk7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogY2FsYygxMDAlICsgNHJlbSk7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG5cclxuICAuY29uc3RyYWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5NTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAubWFpbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJHB1cnBsZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbmF2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuXHJcbiAgICBhIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkcHVycGxlO1xyXG4gICAgICBjb2xvcjogJHB1cnBsZTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwdXJwbGU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuZm9vdGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcbiAgICBtYXgtd2lkdGg6IDk1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiNtYWluQ29udGFpbmVyLm1haW4tY29udGFpbmVyLm5hdi11cCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufSBcclxuLmhlYWRlci1jb250YWluZXIsIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA5NTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbm5hdiB7XHJcbiAgYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtd2hpdGU7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjI1KSwgXHJcbihtaW4tcmVzb2x1dGlvbjogMTIwZHBpKSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4zKSwgXHJcbihtaW4tcmVzb2x1dGlvbjogMTI0LjhkcGkpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLCBcclxuKG1pbi1yZXNvbHV0aW9uOiAxNDRkcGkpYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBcclxuKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIHtcclxuICAjbWFpbk5hdi5oZWFkZXItY29udGFpbmVyLm5hdi11cCB7XHJcbiAgICBuYXYge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaDEge1xyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjI1KSwgXHJcbihtaW4tcmVzb2x1dGlvbjogMTIwZHBpKSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4zKSwgXHJcbihtaW4tcmVzb2x1dGlvbjogMTI0LjhkcGkpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLCBcclxuKG1pbi1yZXNvbHV0aW9uOiAxNDRkcGkpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgXHJcbihtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICBuYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBhc2lkZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC13aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAxNTB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB0b3A6IDM4cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogJHB1cnBsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAjbWFpbk5hdi5oZWFkZXItY29udGFpbmVyLm5hdi11cCB7XHJcbiAgICBuYXYge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBuYXYge1xyXG4gICAgYmFja2dyb3VuZDogJGxpbmVhci1ncmFkaWVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTVweCAxNXB4IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweCAwIDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9ICBcclxufVxyXG5mb290ZXIge1xyXG4gIC5jb3B5cmlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogJGxpbmVhci1ncmFkaWVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTVweCAxNXB4IDA7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-image-slider */ 6118);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/token-interceptor.service */ 3742);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _artwork_artwork_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artwork/artwork.component */ 6658);
/* harmony import */ var _cats_cats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cats/cats.component */ 8033);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ 1427);
/* harmony import */ var _technical_technical_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./technical/technical.component */ 7609);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./knowledge/knowledge.component */ 6689);
/* harmony import */ var _services_cats_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/cats.service */ 3871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_services_cats_service__WEBPACK_IMPORTED_MODULE_9__.ApiCatService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_1__.TokenInterceptor,
            multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            ng_image_slider__WEBPACK_IMPORTED_MODULE_13__.NgImageSliderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _artwork_artwork_component__WEBPACK_IMPORTED_MODULE_3__.ArtworkComponent,
        _cats_cats_component__WEBPACK_IMPORTED_MODULE_4__.CatsComponent,
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceComponent,
        _technical_technical_component__WEBPACK_IMPORTED_MODULE_6__.TechnicalComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent,
        _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_8__.KnowledgeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        ng_image_slider__WEBPACK_IMPORTED_MODULE_13__.NgImageSliderModule] }); })();


/***/ }),

/***/ 6658:
/*!**********************************************!*\
  !*** ./src/app/artwork/artwork.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtworkComponent": () => (/* binding */ ArtworkComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_artwork_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/artwork.service */ 4042);
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-image-slider */ 6118);




class ArtworkComponent {
    constructor(artworkService, document) {
        this.artworkService = artworkService;
        this.document = document;
        this.drawings = [];
        this.paintings = [];
        this.selectedDrawing = 0;
        this.imageMove = 0;
        this.prevIcon = 0;
        this.selectedindex = 0;
    }
    ngOnInit() {
        this.getArtwork();
    }
    getArtwork() {
        this.drawings = this.artworkService.getDrawings();
        this.paintings = this.artworkService.getPaintings();
    }
    showArtwork(id) {
        let thumbs = this.document.getElementsByClassName('thumb-container');
        for (let i = 0; i < thumbs.length; i++) {
            this.document.getElementById(this.drawings[i].specificId + '-thumb').style.display = "none";
        }
        this.document.getElementById(id).classList.add('show');
    }
    hideArtwork(id) {
        let thumbs = this.document.getElementsByClassName('thumb-container');
        for (let j = 0; j < thumbs.length; j++) {
            this.document.getElementById(this.drawings[j].specificId + '-thumb').style.display = "block";
        }
        this.document.getElementById(id).classList.remove('show');
    }
    selectDrawing(index) {
        this.selectedindex = index;
    }
    prevDrawing() {
        if (this.selectedDrawing == 0) {
            this.selectedDrawing = this.drawings.length;
            this.imageMove = this.selectedDrawing * 160;
            this.document.getElementById('images').style.left = this.imageMove + 'px';
        }
        else {
            this.selectedDrawing--;
            this.imageMove = this.selectedDrawing * 160;
            this.document.getElementById('images').style.left = this.imageMove + 'px';
        }
        console.log('prev:', this.imageMove);
    }
    nextDrawing() {
        if (this.selectedDrawing == this.drawings.length) {
            this.selectedDrawing = 0;
            this.imageMove = 0;
            this.document.getElementById('images').style.left = this.imageMove + 'px';
        }
        else {
            this.selectedDrawing++;
            this.imageMove = this.selectedDrawing * -160;
            this.document.getElementById('images').style.left = this.imageMove + 'px';
        }
        console.log('next:', this.imageMove);
    }
}
ArtworkComponent.ɵfac = function ArtworkComponent_Factory(t) { return new (t || ArtworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_artwork_service__WEBPACK_IMPORTED_MODULE_0__.ArtworkService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
ArtworkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArtworkComponent, selectors: [["app-artwork"]], decls: 13, vars: 2, consts: [["id", "artwork", 1, "main-container", "mt-4"], [1, "paintings"], [1, "row"], [3, "images"], ["nav", ""], [1, "drawings"]], template: function ArtworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Paintings:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ng-image-slider", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Drawings:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ng-image-slider", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.paintings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.drawings);
    } }, directives: [ng_image_slider__WEBPACK_IMPORTED_MODULE_3__.NgImageSliderComponent], styles: ["img.image[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.75);\n}\n\n.image-container[_ngcontent-%COMP%], .images[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nul[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  left: --left;\n  max-width: 100%;\n  overflow: hidden;\n  padding-inline-start: 0 !important;\n  position: absolute;\n  top: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img.thumb[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  margin: 0 5px;\n  max-height: 200px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img.thumb[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.75);\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .thumb-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .thumb-container[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1));\n  border-radius: 0 0 5px 5px;\n  bottom: 0;\n  box-sizing: border-box;\n  color: #fff;\n  padding: 5px;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n}\n\n.single-image[_ngcontent-%COMP%] {\n  background-color: #252424;\n  bottom: 0%;\n  display: none;\n  height: 100%;\n  left: 0%;\n  position: absolute;\n  right: 0%;\n  top: 0%;\n  width: 100%;\n}\n\n.single-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n  max-height: 500px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.single-image.show[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.single-image.show[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  min-height: 200px;\n  overflow: hidden;\n}\n\n.icons[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.55);\n  border-radius: 50%;\n  font-size: 35px;\n  height: 35px;\n  line-height: 30px;\n  margin-top: -16px;\n  outline: 0;\n  position: absolute;\n  text-align: center;\n  text-decoration: none;\n  top: 50%;\n  transition: 0.5s ease-in-out;\n  width: 35px;\n  z-index: 8;\n}\n\n.icons[_ngcontent-%COMP%]:hover {\n  background: #fff;\n}\n\n.prev-icon[_ngcontent-%COMP%] {\n  left: 30px;\n}\n\n.next-icon[_ngcontent-%COMP%] {\n  right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydHdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx3QkFBQTtBQUFSOztBQUdBOztFQUVJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQUNKOztBQUNJO0VBQ0kscUJBQUE7QUFDUjs7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ1o7O0FBQ1k7RUFDSSx3QkFBQTtBQUNoQjs7QUFFUTtFQUNJLGtCQUFBO0FBQVo7O0FBRVk7RUFDSSxpSkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFoQjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBRko7O0FBSUk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBRlI7O0FBS0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUZKOztBQUlJO0VBQ0ksY0FBQTtBQUZSOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlBO0VBQ0kscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURKOztBQUdJO0VBQ0ksZ0JBQUE7QUFEUjs7QUFJQTtFQUNJLFVBQUE7QUFESjs7QUFHQTtFQUNJLFdBQUE7QUFBSiIsImZpbGUiOiJhcnR3b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmltYWdlIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjc1KTtcclxuICAgIH1cclxufVxyXG4uaW1hZ2UtY29udGFpbmVyLFxyXG4uaW1hZ2VzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG51bCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgbGVmdDogLS1sZWZ0O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICAgICAgaW1nLnRodW1iIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNzUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aHVtYi1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBjYXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC4xKSxyZ2JhKDAsMCwwLC4yNSkscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwuMjUpLHJnYmEoMCwwLDAsLjEpKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnNpbmdsZS1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDM2LCAzNik7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgdG9wOiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxufVxyXG4uc2luZ2xlLWltYWdlLnNob3cge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pY29ucyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTZweDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgei1pbmRleDogODtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcbi5wcmV2LWljb24ge1xyXG4gICAgbGVmdDogMzBweDtcclxufVxyXG4ubmV4dC1pY29uIHtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 8033:
/*!****************************************!*\
  !*** ./src/app/cats/cats.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatsComponent": () => (/* binding */ CatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_cats_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cats.service */ 3871);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function CatsComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("ID: ", cat_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", cat_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class CatsComponent {
    constructor(_catApiService) {
        this._catApiService = _catApiService;
        this.cats = [];
        this.loading = false;
    }
    ngOnInit() {
        this.getNewCat();
    }
    getNewCat() {
        this._catApiService.getCats()
            .subscribe(data => {
            console.log('response received');
            this.cats = data;
        }, error => {
            console.error('Request failed with error');
            this.errorMessage = error;
            this.loading = false;
        }, () => {
            console.log('Request completed');
            this.loading = false;
        });
    }
}
CatsComponent.ɵfac = function CatsComponent_Factory(t) { return new (t || CatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cats_service__WEBPACK_IMPORTED_MODULE_0__.ApiCatService)); };
CatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CatsComponent, selectors: [["app-cats"]], decls: 8, vars: 1, consts: [[1, "cats-container", "row"], [1, "heading", "row"], [1, "col-md-10", "col-sm-9"], [1, "col-md-2", "col-sm-3"], [3, "click"], ["class", "box-container d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "box-container", "d-flex", "justify-content-center"], [3, "src"]], template: function CatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CatsComponent_Template_button_click_5_listener() { return ctx.getNewCat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "New Cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CatsComponent_ul_7_Template, 5, 2, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cats);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".cats-container[_ngcontent-%COMP%] {\n  padding-left: calc(var(--bs-gutter-x) * 0.5) !important;\n  padding-right: calc(var(--bs-gutter-x) * 0.5) !important;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.box-container[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  min-height: 300px;\n  min-width: 300px;\n}\n\n.box-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  max-width: 280px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  justify-content: space-between;\n}\n\n.heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 5px 10px;\n}\n\n@media screen and (min-width: 768px) {\n  .box-container[_ngcontent-%COMP%] {\n    min-height: 300px;\n    min-width: 400px;\n  }\n  .box-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1REFBQTtFQUNBLHdEQUFBO0FBREo7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBQ1I7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUdBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGdCQUFBO0VBQU47RUFFTTtJQUNJLGdCQUFBO0VBQVY7O0VBSU07SUFDSSxrQkFBQTtFQURWO0FBQ0YiLCJmaWxlIjoiY2F0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJzLnNjc3NcIjtcclxuXHJcbi5jYXRzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogLjUpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWJzLWd1dHRlci14KSAqIC41KSAhaW1wb3J0YW50O1xyXG59XHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4uYm94LWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIFxyXG4gICAgaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICB9XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5ib3gtY29udGFpbmVyIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 1427:
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/job.service */ 2423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function ExperienceComponent_ul_3_ul_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](detail_r3);
} }
function ExperienceComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ExperienceComponent_ul_3_ul_9_Template, 3, 1, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", job_r1.start, " to ", job_r1.end, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", job_r1.details);
} }
class ExperienceComponent {
    constructor(jobService) {
        this.jobService = jobService;
        this.jobs = [];
    }
    getJobs() {
        this.jobs = this.jobService.getJobs().reverse();
    }
    ngOnInit() {
        this.getJobs();
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService)); };
ExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 4, vars: 1, consts: [[1, "main-container"], ["class", "job-container", 4, "ngFor", "ngForOf"], [1, "job-container"], [1, "list-unstyled"], [1, "details-container"], [4, "ngFor", "ngForOf"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Professional Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExperienceComponent_ul_3_Template, 10, 5, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.jobs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".job-container[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #fff;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 25px;\n  padding: 1rem;\n}\n\n.details-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: square;\n  padding-bottom: 10px;\n}\n\n@media screen and (min-width: 768px) {\n  .details-container[_ngcontent-%COMP%] {\n    padding: 0 3rem 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkNMZTtFRE1mLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBREo7O0FBTVE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0FBSFo7O0FBUUE7RUFDSTtJQUNJLG9CQUFBO0VBTE47QUFDRiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcnMuc2Nzc1wiO1xyXG5cclxuLmpvYi1jb250YWluZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC13aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgM3JlbSAxcmVtO1xyXG4gICAgfVxyXG59IiwiJGJhY2tncm91bmQtd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjNDE1MGIxO1xyXG4kY3JlYW06ICNmMWM2OGQ7XHJcbiRwdXJwbGU6ICM4MzY1YWQ7XHJcbiRsaW5lYXItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJsdWUgMCUsICRwdXJwbGUgNjUlLCAkY3JlYW0gMTAwJSk7Il19 */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../knowledge/knowledge.component */ 6689);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../experience/experience.component */ 1427);



class HomeComponent {
    constructor() {
        this.title = "ByTanyaR";
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 41, vars: 0, consts: [[1, "main-container"], [1, "top-row", "row", "d-flex", "align-items-center"], [1, "col-md-9", "col-sm-12"], [1, "box-container", "row", "col-md-12"], [1, "objective", "col-md-3"], [1, "col-md-9"], [1, "summary", "col-md-3"], [1, "img-container", "col-md-3", "col-sm-12"], ["href", "https://www.claytonhomes.com/dream-to-reality/", "target", "_blank"], ["src", "../../assets/images/dream-to-reality.png", "alt", "Dream to Reality", 1, "img-fluid", "dream-img"], [1, "second-row", "row"], [1, "third-row", "row"], [1, "fourth-row", "row", "box-container"], [1, "education-container"], [1, "entry"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Career");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Career Objective:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "I am a web designing professional and enthusiast. I am pursuing full stack development because I love to learn and because I am passionate about how websites work. I am also an artist by training and disposition and believe this skill helps me to conceptualize websites from theory to realization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Career Summary:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "For the last eight years I have successfully advanced from Front End Developer to becoming a Full Stack Developer. While at Clayton Homes, I consistently received coveted ACE awards for high performance, customer satisfaction, and collaboration. At StoragePug, I was nicknamed \u201Ceagle eye\u201D Tanya for my attention to detail.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "app-knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Coding Dojo - Bootcamp");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Black Belt - MERN Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Pellissippi State Technical Comminity College, Knoxville, TN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Associate of Applied Science Degree in Media Technologies - Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "University of Tennessee, Knoxville, TN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Completed three years of coursework (Painting/Drawing major)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_0__.KnowledgeComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceComponent], styles: [".box-container[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  margin-bottom: 1rem;\n  padding: 1rem 2rem 0;\n}\n\n.objective[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-style: italic;\n  font-weight: 600;\n  padding-left: 0;\n  text-align: left;\n}\n\n.top-row[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  padding-left: 1rem;\n}\n\n.img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #f1c68d;\n  border-right: 5px solid #f1c68d;\n  border-radius: 10px;\n}\n\n@media screen and (max-width: 767px) {\n  .box-container[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n\n  .top-row[_ngcontent-%COMP%], .second-row[_ngcontent-%COMP%], .third-row[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .dream-img[_ngcontent-%COMP%] {\n    height: 125px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBR0E7O0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVJO0VBQ0ksZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBRUE7RUFDSTtJQUNJLG1CQUFBO0VBQ047O0VBQ0U7OztJQUdJLGVBQUE7RUFFTjtBQUNGOztBQUFBO0VBQ0k7SUFDSSxhQUFBO0VBRU47QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcnMuc2Nzc1wiO1xyXG5cclxuLmJveC1jb250YWluZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAwOyBcclxufVxyXG4ub2JqZWN0aXZlLFxyXG4uc3VtbWFyeSB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRvcC1yb3cge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuLmltZy1jb250YWluZXIge1xyXG4gICAgLmltZy1mbHVpZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICRjcmVhbTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAkY3JlYW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmJveC1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAudG9wLXJvdywgXHJcbiAgICAuc2Vjb25kLXJvdyxcclxuICAgIC50aGlyZC1yb3cge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmRyZWFtLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 1763:
/*!***************************************!*\
  !*** ./src/app/inputs/actual-jobs.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JOBS": () => (/* binding */ JOBS)
/* harmony export */ });
const JOBS = [
    { id: 1,
        company: 'Clayton Homes',
        start: 'Nov 2014',
        end: 'Jan 2020',
        title: 'Front End Developer',
        details: [
            'Received 10+ ACE awards for excellence',
            'Ensure customer requirements met for presentation/coding',
            'Perform code QA for design intent and access verification',
            'Convert PSD compositions into HTML and CSS',
            'Expand webpage functionality using JavaScript/JQuery/React JS',
            'Perform cross-browser integration and testing',
            'Write reusable code for UI components',
            'Use existing standards to maximize browser compatibility',
            'Build and test responsive layouts'
        ] },
    { id: 2,
        company: 'StoragePug',
        start: 'Mar 2020',
        end: 'Nov 2021',
        title: 'Junior Web Developer / Website Specialist',
        details: [
            'Showcase customer awesomeness to increased unit bookings through their website',
            'Train others on design standards and using specialized CMS',
            'Convert Zeplin and Figma compositions into HTML and SCSS',
            'Build components using AngularJS for specialized CMS',
            'Expertly edit images to more closely meet design standards using PhotoShop',
            'Use provided wireframes, prototypes and content to build websites to design standards using a specialized CMS',
            'Ensure work adheres to established standards and practices',
            'Use drag-and-drop web editor to build self-storage websites',
            'Use CSS/HTML to override CMS settings to meet design requirements',
            'Use drag-and-drop web editor to build self-storage websites',
            'Communicate with team members, developers, and designers as needed during the website building process',
            'Present designs to peers'
        ] },
    { id: 3,
        company: 'Various Customers',
        start: 'Dec 2021',
        end: 'Present',
        title: 'Self-Employed/Freelance Frontend Developer and Coursework Full Stack Developer',
        details: [
            'Projects include:',
            'GROCERY SWAP (Neighborhood-Bartering). A MERN based application for trading local food products to reduce waste and create eco-friendly food swaps in local neighborhoods. Worked with team to design a full CRUD application with functional create, read, update, and delete features',
            'Integrated React with one-to-many relationships using MongoDB to create trade commenting capabilities',
            'Created login and registration using back end validations and web tokens for a secure and personal user experience',
            'Implemented Bcrypt’s password hashing to secure sensitive user account information',
            'Developed and linked 3 models using NoSQL, MongoDB, enabling users to comment and track their trades',
            'Implemented, designed, and styled CSS for completely responsive design',
            'RECIPES. A MERN based application for collecting and using recipes',
            'Created a full CRUD application with functional create, read, update, and delete features from scratch',
            'Leveraged React with fully responsive CSS to populate a list of all recipes and their respective detailed pages',
            'Developed full back end using an Express framework with a MongoDB database'
        ] },
];


/***/ }),

/***/ 6699:
/*!***********************************!*\
  !*** ./src/app/inputs/artwork.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DRAWINGS": () => (/* binding */ DRAWINGS),
/* harmony export */   "PAINTINGS": () => (/* binding */ PAINTINGS)
/* harmony export */ });
const DRAWINGS = [
    { id: 1,
        specificId: 'drawing1',
        image: 'assets/images/artwork/drawings/Fritz - 72.jpg',
        alt: 'Fritz',
        thumbImage: 'assets/images/artwork/drawings/Fritz - 72.jpg',
        title: 'Fritz'
    },
    { id: 2,
        specificId: 'drawing2',
        image: 'assets/images/artwork/drawings/Lovers -72.jpg',
        alt: 'Lovers',
        thumbImage: 'assets/images/artwork/drawings/Lovers -72.jpg',
        title: 'Lovers'
    },
    { id: 3,
        specificId: 'drawing3',
        image: 'assets/images/artwork/drawings/Kitten - 72.jpg',
        alt: 'Kitten',
        thumbImage: 'assets/images/artwork/drawings/Kitten - 72.jpg',
        title: 'Kitten'
    },
    { id: 4,
        specificId: 'drawing4',
        image: 'assets/images/artwork/drawings/Zorro - 72.jpg',
        alt: 'Zorro',
        thumbImage: 'assets/images/artwork/drawings/Zorro - 72.jpg',
        title: 'Zorro'
    },
    { id: 5,
        specificId: 'drawing5',
        image: 'assets/images/artwork/drawings/Tanya - 72.jpg',
        alt: 'Tanya',
        thumbImage: 'assets/images/artwork/drawings/Tanya - 72.jpg',
        title: 'Tanya'
    },
    { id: 6,
        specificId: 'drawing6',
        image: 'assets/images/artwork/drawings/Man head dwg - 72.jpg',
        alt: 'Man head',
        thumbImage: 'assets/images/artwork/drawings/Man head dwg - 72.jpg',
        title: 'Man head'
    },
    { id: 7,
        specificId: 'drawing7',
        image: 'assets/images/artwork/drawings/Squiggle Man Reclined - 72.jpg',
        alt: 'Squiggle man reclined',
        thumbImage: 'assets/images/artwork/drawings/Squiggle Man Reclined - 72.jpg',
        title: 'Squiggle man reclined'
    },
    { id: 8,
        specificId: 'drawing8',
        image: 'assets/images/artwork/drawings/WWII prep - 72.jpg',
        alt: 'WWII prep',
        thumbImage: 'assets/images/artwork/drawings/WWII prep - 72.jpg',
        title: 'WWII prep'
    }
];
const PAINTINGS = [
    { id: 1,
        specificId: 'painting1',
        image: 'assets/images/artwork/paintings/Angel Fish REH - 72.jpg',
        alt: 'Angel Fish',
        thumbImage: 'assets/images/artwork/paintings/Angel Fish REH - 72.jpg',
        title: 'Angel Fish'
    },
    { id: 2,
        specificId: 'painting2',
        image: 'assets/images/artwork/paintings/Elephant -72.jpg',
        alt: 'Elephant',
        thumbImage: 'assets/images/artwork/paintings/Elephant -72.jpg',
        title: 'Elephant'
    },
    { id: 3,
        specificId: 'painting3',
        image: 'assets/images/artwork/paintings/Bike - 72.jpg',
        alt: 'Bike',
        thumbImage: 'assets/images/artwork/paintings/Bike - 72.jpg',
        title: 'Bike'
    },
    { id: 4,
        specificId: 'painting4',
        image: 'assets/images/artwork/paintings/Orange - 72.jpg',
        alt: 'Orange',
        thumbImage: 'assets/images/artwork/paintings/Orange - 72.jpg',
        title: 'Orange'
    },
    { id: 5,
        specificId: 'painting5',
        image: 'assets/images/artwork/paintings/Moms ptg - 72.jpg',
        alt: 'Mom\'s painting',
        thumbImage: 'assets/images/artwork/paintings/Moms ptg - 72.jpg',
        title: 'Mom\'s painting'
    }
];


/***/ }),

/***/ 479:
/*!************************************!*\
  !*** ./src/app/inputs/projects.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROJECTS": () => (/* binding */ PROJECTS)
/* harmony export */ });
const PROJECTS = [
    { id: 1,
        name: 'GrocerySwap (Neighborhood-Bartering)',
        note: 'Group Project',
        description: 'A MERN based application for trading local food products to reduce waste and create eco-friendly food swaps in local neighborhoods',
        url: 'https://github.com/RobertsonTanya/Neighborhood-Bartering',
        details: [
            'Work with two other students in a team effort to design a full CRUD application with functional create, read, update, and delete features',
            'Integrated React with one-to-many relationships using MongoDB to create trade commenting capabilities',
            'Created login and registration using back end validations and web tokens for a secure and personal user experience',
            'Implemented Bcrypt\'s password hashing to secure sensitive user account information',
            'Developed and linked 3 models using NoSQL, MongoDB, enabling users to comment and track their trades',
            'Implemented, designed, and styled CSS for completely responsive design'
        ] },
    { id: 2,
        name: 'Recipes',
        note: 'Solo Project',
        description: 'A MERN based application for collecting and using recipes',
        url: 'https://github.com/RobertsonTanya/Recipes',
        details: [
            'Created a full CRUD application with functional create, read, update, and delete features from scratch',
            'Leveraged React with fully responsive CSS to populate a list of all recipes and their respective detailed pages',
            'Developed full back end using an Express framework with a MongoDB database'
        ] },
];


/***/ }),

/***/ 6689:
/*!**************************************************!*\
  !*** ./src/app/knowledge/knowledge.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeComponent": () => (/* binding */ KnowledgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function KnowledgeComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](listItem_r1);
} }
class KnowledgeComponent {
    constructor() {
        this.knowledgeData = [
            "Adobe Creative Suite",
            "Agile/SCRUM",
            "Angular 9",
            "Bootstrap",
            "CSS 3/SCSS/LESS",
            "Express",
            "Figma",
            "Gatsby",
            "Git/GitHub",
            "Git Kraken/Sourcetree",
            "HTML 5",
            "HubSpot",
            "JavaScript",
            "Jira",
            "JQuery",
            "JSON",
            "MongoDB/Mongoose",
            "Node",
            "React JS",
            "Responsive Web Design",
            "Sketch",
            "Storybook",
            "Zeplin"
        ];
    }
    ngOnInit() {
    }
}
KnowledgeComponent.ɵfac = function KnowledgeComponent_Factory(t) { return new (t || KnowledgeComponent)(); };
KnowledgeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnowledgeComponent, selectors: [["app-knowledge"]], decls: 14, vars: 1, consts: [[1, "main-container", "row"], [1, "img-container", "col-md-4"], ["href", "https://www.storeatsentinel.com", "target", "_blank"], ["src", "assets/images/sentinel.png", "alt", "Sentinel homepage", 1, "sentinel-img", "img-fluid"], [1, "box-container", "col-md-8"], [1, "input-container", "d-flex", "align-items-center", "justify-content-center"], [4, "ngFor", "ngForOf"]], template: function KnowledgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "COMPUTER PROGRAMS & KNOWLEDGE BASE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Certification: Web Authoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, KnowledgeComponent_li_11_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PC & Macintosh Operating Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.knowledgeData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #f1c68d;\n  border-left: 5px solid #f1c68d;\n  border-radius: 10px;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  margin: 5px auto;\n}\n\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #ccc;\n  border-radius: 2px;\n  margin: 0 5px;\n  padding: 5px 2px;\n}\n\n.input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-color: #ccc;\n  border-radius: 5px;\n  padding: 5px 10px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: square;\n}\n\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    flex-wrap: wrap-reverse;\n  }\n\n  .box-container[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .img-container[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    columns: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtub3dsZWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUZSOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFJSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFGUjs7QUFJSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZSOztBQU9JO0VBQ0ksdUJBQUE7QUFKUjs7QUFPQTtFQUNJO0lBQ0ksdUJBQUE7RUFKTjs7RUFNRTtJQUNJLG1CQUFBO0VBSE47QUFDRjs7QUFLQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSxhQUFBO0VBSE47O0VBS0U7SUFDSSxVQUFBO0VBRk47QUFDRiIsImZpbGUiOiJrbm93bGVkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFycy5zY3NzXCI7XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7ICAgIFxyXG4gICAgLmltZy1mbHVpZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmMWM2OGQ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjFjNjhkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDJweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIH1cclxufVxyXG5cclxudWwge1xyXG4gICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xyXG4gICAgfVxyXG4gICAgLmJveC1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgY29sdW1uczogMjtcclxuICAgIH0gICAgICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ 4042:
/*!*********************************************!*\
  !*** ./src/app/services/artwork.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtworkService": () => (/* binding */ ArtworkService)
/* harmony export */ });
/* harmony import */ var _inputs_artwork__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inputs/artwork */ 6699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ArtworkService {
    constructor() { }
    /** GET drawings from the file */
    getDrawings() {
        return _inputs_artwork__WEBPACK_IMPORTED_MODULE_0__.DRAWINGS;
    }
    /** GET paintings from the file */
    getPaintings() {
        return _inputs_artwork__WEBPACK_IMPORTED_MODULE_0__.PAINTINGS;
    }
}
ArtworkService.ɵfac = function ArtworkService_Factory(t) { return new (t || ArtworkService)(); };
ArtworkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArtworkService, factory: ArtworkService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3871:
/*!******************************************!*\
  !*** ./src/app/services/cats.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiCatService": () => (/* binding */ ApiCatService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class ApiCatService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCats() {
        return this.httpClient.get('https://api.thecatapi.com/v1/images/search', {
            headers: this.httpHeaders,
            observe: this.response
        });
    }
}
ApiCatService.ɵfac = function ApiCatService_Factory(t) { return new (t || ApiCatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ApiCatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiCatService, factory: ApiCatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2423:
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobService": () => (/* binding */ JobService)
/* harmony export */ });
/* harmony import */ var _inputs_actual_jobs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inputs/actual-jobs */ 1763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class JobService {
    constructor() { }
    /** GET jobs from the file */
    getJobs() {
        return _inputs_actual_jobs__WEBPACK_IMPORTED_MODULE_0__.JOBS;
    }
}
JobService.ɵfac = function JobService_Factory(t) { return new (t || JobService)(); };
JobService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JobService, factory: JobService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 354:
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var _inputs_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inputs/projects */ 479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ProjectService {
    constructor() { }
    /** GET projects from the file */
    getProjects() {
        return _inputs_projects__WEBPACK_IMPORTED_MODULE_0__.PROJECTS;
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(); };
ProjectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3742:
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _cats_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cats.service */ 3871);


class TokenInterceptor {
    constructor(catCall) {
        this.catCall = catCall;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                'x-api-key': `84045bbd-b25f-4a21-9ad8-46b7acaa293f`
            }
        });
        return next.handle(request);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cats_service__WEBPACK_IMPORTED_MODULE_0__.ApiCatService)); };
TokenInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ 7609:
/*!**************************************************!*\
  !*** ./src/app/technical/technical.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalComponent": () => (/* binding */ TechnicalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/project.service */ 354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function TechnicalComponent_ul_3_ul_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](detail_r3);
} }
function TechnicalComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TechnicalComponent_ul_3_ul_9_Template, 3, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" | ", project_r1.note, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.details);
} }
class TechnicalComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.projects = [];
    }
    getProjects() {
        this.projects = this.projectService.getProjects().reverse();
    }
    ngOnInit() {
        this.getProjects();
    }
}
TechnicalComponent.ɵfac = function TechnicalComponent_Factory(t) { return new (t || TechnicalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService)); };
TechnicalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TechnicalComponent, selectors: [["app-technical"]], decls: 4, vars: 1, consts: [[1, "main-container"], ["class", "project-container", 4, "ngFor", "ngForOf"], [1, "project-container"], [1, "list-unstyled"], ["target", "_blank", 3, "href"], [1, "details-container"], [4, "ngFor", "ngForOf"]], template: function TechnicalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Technical Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TechnicalComponent_ul_3_Template, 10, 5, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".project-container[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #fff;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 25px;\n  padding: 1rem;\n}\n.project-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n.details-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: square;\n  padding-bottom: 10px;\n}\n@media screen and (min-width: 768px) {\n  .details-container[_ngcontent-%COMP%] {\n    padding: 0 3rem 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlY2huaWNhbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQ0xlO0VETWYsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFESjtBQUdJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBRFI7QUFPUTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7QUFKWjtBQVNBO0VBQ0k7SUFDSSxvQkFBQTtFQU5OO0FBQ0YiLCJmaWxlIjoidGVjaG5pY2FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcnMuc2Nzc1wiO1xyXG5cclxuLnByb2plY3QtY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgaDMgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgM3JlbSAxcmVtO1xyXG4gICAgfVxyXG59IiwiJGJhY2tncm91bmQtd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjNDE1MGIxO1xyXG4kY3JlYW06ICNmMWM2OGQ7XHJcbiRwdXJwbGU6ICM4MzY1YWQ7XHJcbiRsaW5lYXItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJsdWUgMCUsICRwdXJwbGUgNjUlLCAkY3JlYW0gMTAwJSk7Il19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map