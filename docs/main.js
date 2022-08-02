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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["h2[_ngcontent-%COMP%] {\n  border-radius: 0 25px 25px 0;\n  color: #f1c68d;\n  font-size: 2.5rem;\n  margin-top: 2rem !important;\n}\n\nh3[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #f1c68d;\n  border-radius: 5px;\n  color: #4150b1;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.box-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 25px;\n  padding: 1rem;\n}\n\n.body[_ngcontent-%COMP%] {\n  background: #4150b1;\n  background: linear-gradient(90deg, #4150b1 0%, #8365ad 49%, #4150b1 100%);\n  font-family: \"Calibri\", \"Arial\", sans-serif;\n  padding: 3rem 1rem;\n}\n\n.body-row[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.fade[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: 2s linear all;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 5px solid #f1c68d;\n  left: 0;\n  margin: 0 -2rem;\n  max-width: calc(100% + 4rem);\n  padding-bottom: 1rem;\n  position: fixed;\n  top: 0;\n  width: calc(100% + 4rem);\n  z-index: 999999;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   .constrainer[_ngcontent-%COMP%] {\n  max-width: 950px;\n  margin: 0 auto;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #8365ad;\n  display: inline-block;\n  font-size: 2rem;\n  margin-bottom: 0;\n  margin-left: 1.5rem;\n  padding-bottom: 0;\n  padding-top: 10px;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8365ad;\n  text-decoration: none;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 2rem;\n  margin-top: 1rem;\n  padding-right: 10%;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-color: #8365ad;\n  color: #8365ad;\n}\n\n#mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #8365ad;\n  color: #fff;\n}\n\nfooter[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  max-width: 950px;\n  margin: 0 auto;\n  padding-left: 20px;\n}\n\n#mainContainer.main-container.nav-up[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.header-container[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%] {\n  max-width: 950px;\n  margin: 0 auto;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 5rem;\n  padding: 2rem 0;\n}\n\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 3rem;\n  text-decoration: none;\n}\n\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n  font-family: inherit;\n  font-size: 1.25rem;\n  margin: 0 5px;\n  padding: 5px 15px;\n  text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  background-color: #fff;\n  color: #333;\n}\n\n@media screen and (max-width: 375px) and (-webkit-min-device-pixel-ratio: 1.25), (-webkit-min-device-pixel-ratio: 1.25) and (-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 120dpi) and (-webkit-min-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3) and (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 124.8dpi) and (-webkit-min-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 144dpi) and (-webkit-min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  #mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n  #mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n\n  h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n\n@media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 1.25), (-webkit-min-device-pixel-ratio: 1.25) and (-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 120dpi) and (-webkit-min-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3) and (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 124.8dpi) and (-webkit-min-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 144dpi) and (-webkit-min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape), (min-resolution: 192dpi) and (orientation: landscape) {\n  nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n  }\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-bottom: 5px !important;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  aside[_ngcontent-%COMP%] {\n    background-color: #fff;\n    margin-bottom: -3rem;\n    margin-left: -3rem;\n    margin-top: -5rem;\n    min-height: 150vh;\n    position: relative;\n  }\n  aside[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #8365ad;\n    left: 0;\n    position: absolute;\n    text-align: right;\n    top: 38rem;\n    transform: rotate(-90deg);\n    transform-origin: 0 0;\n  }\n  aside[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #8365ad;\n  }\n\n  #mainNav.header-container.nav-up[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    background: none;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, #4150b1 0%, #8365ad 65%, #f1c68d 100%);\n    border-radius: 0 15px 15px 0;\n    padding-left: 0 !important;\n  }\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n    margin: 0 5px 0 0;\n  }\n}\n\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #4150b1 0%, #8365ad 65%, #f1c68d 100%);\n  border-radius: 0 15px 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxzdHlsZXMuc2NzcyIsIi4uXFx2YXJzLnNjc3MiLCJhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSw0QkFBQTtFQUNBLGNDSEk7RURJSixpQkFBQTtFQUNBLDJCQUFBO0FFRko7O0FGSUE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0NYRztFRFlILGVBQUE7RUFDQSxrQkFBQTtBRURKOztBRklBO0VBQ0ksc0JBQUE7RUFDQSxzQkNuQmU7RURvQmYsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUVESjs7QUFsQkE7RUFDRSxtQkRISztFQ0lMLHlFQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQXFCRjs7QUFYQTtFQUNFLFdBQUE7QUFjRjs7QUFaQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQWVGOztBQWJBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBZ0JGOztBQWRFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBZ0JKOztBQWRFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFnQko7O0FBYkU7RUFDRSxjRDVDSztFQzZDTCxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWVKOztBQWJJO0VBQ0UsY0RyREc7RUNzREgscUJBQUE7QUFlTjs7QUFiTTtFQUNFLFdBQUE7QUFlUjs7QUFYRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBYUo7O0FBWEk7RUFDRSxxQkRwRUc7RUNxRUgsY0RyRUc7QUNrRlQ7O0FBWE07RUFDRSx5QkR4RUM7RUN5RUQsV0FBQTtBQWFSOztBQVJBO0VBQ0UsV0FBQTtBQVdGOztBQVRFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFSQTtFQUNFLGdCQUFBO0FBV0Y7O0FBVEE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFZRjs7QUFWQTtFQUNFLFdBQUE7RUFDQSw0REFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBYUY7O0FBWEU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBYUo7O0FBWEk7RUFDRSxXQUFBO0FBYU47O0FBUkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQVdKOztBQVRJO0VBQ0Usc0JBQUE7RUFDQSxzQkQ5SGE7RUMrSGIsV0FBQTtBQVdOOztBQU5BO0VBTUk7SUFDRSxrQkFBQTtFQUlKO0VBRkk7SUFDRSxrQkFBQTtFQUlOOztFQUNFO0lBQ0Usa0JBQUE7RUFFSjtBQUNGOztBQUNBO0VBS0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLDJCQUFBO0VBSEY7RUFLRTtJQUNFLDZCQUFBO0VBSEo7QUFDRjs7QUFNQTtFQUNFO0lBQ0UsZUFBQTtFQUpGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLHNCRDlLZTtJQytLZixvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBSkY7RUFNRTtJQUNFLGNEbkxHO0lDb0xILE9BQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7RUFKSjtFQU1JO0lBQ0UsY0Q1TEM7RUN3TFA7O0VBU0U7SUFDRSxnQkFBQTtFQU5KOztFQVNBO0lBQ0UseUVEck1jO0lDc01kLDRCQUFBO0lBQ0EsMEJBQUE7RUFORjtFQVNJO0lBQ0UsaUJBQUE7RUFQTjtBQUNGOztBQVlFO0VBQ0UseUVEbE5jO0VDbU5kLDRCQUFBO0FBVkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJzLnNjc3MnO1xyXG5cclxuXHJcbmgyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjVweCAyNXB4IDA7XHJcbiAgICBjb2xvcjogJGNyZWFtO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuaDMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICRjcmVhbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJveC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4vLyAgICAgaDIge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRsaW5lYXItZ3JhZGllbnQ7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuLy8gICAgIH1cclxuLy8gfSIsIiRiYWNrZ3JvdW5kLXdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzQxNTBiMTtcclxuJGNyZWFtOiAjZjFjNjhkO1xyXG4kcHVycGxlOiAjODM2NWFkO1xyXG4kbGluZWFyLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRibHVlIDAlLCAkcHVycGxlIDY1JSwgJGNyZWFtIDEwMCUpOyIsIkBpbXBvcnQgXCIuLi9zdHlsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vdmFycy5zY3NzXCI7XHJcblxyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmx1ZSAwJSwgJHB1cnBsZSA0OSUsICRibHVlIDEwMCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhbGlicmlcIiwgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAzcmVtIDFyZW07XHJcbiAgXHJcbiAgLy8gLS1tYXNrOiBcclxuICAvLyAgIGxpbmVhci1ncmFkaWVudCgjMDAwIDAgMCkgY2VudGVyLzEwMCUgY2FsYygxMDAlIC0gNjBweCkgbm8tcmVwZWF0LFxyXG4gIC8vICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1zaWRlLCMwMDAwIDk4JSwjMDAwKSA1MCUgLTMwcHgvNTUuNTBweCA2MHB4IHJlcGVhdC14LFxyXG4gIC8vICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1zaWRlLCMwMDAwIDk4JSwjMDAwKSA1MCUgY2FsYygxMDAlICsgMzBweCkvNTUuNTBweCA2MHB4IHJlcGVhdC14O1xyXG4gIC8vIC13ZWJraXQtbWFzazogdmFyKC0tbWFzayk7XHJcbiAgLy8gICAgICAgICBtYXNrOiB2YXIoLS1tYXNrKTtcclxufVxyXG5cclxuLmJvZHktcm93IHtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4uZmFkZSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAycyBsaW5lYXIgYWxsO1xyXG59XHJcbiNtYWluTmF2LmhlYWRlci1jb250YWluZXIubmF2LXVwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAkY3JlYW07XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IDAgLTJyZW07XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgKyA0cmVtKTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA0cmVtKTtcclxuICB6LWluZGV4OiA5OTk5OTk7XHJcblxyXG4gIC5jb25zdHJhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDk1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5tYWluLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICB9XHJcbiAgaDEge1xyXG4gICAgY29sb3I6ICRwdXJwbGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBuYXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRwdXJwbGU7XHJcbiAgICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mb290ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICAuY29weXJpZ2h0IHtcclxuICAgIG1heC13aWR0aDogOTUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcbn1cclxuI21haW5Db250YWluZXIubWFpbi1jb250YWluZXIubmF2LXVwIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59IFxyXG4uaGVhZGVyLWNvbnRhaW5lciwgLm1haW4tY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDk1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbmgxIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDVyZW07XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICB9XHJcbn1cclxubmF2IHtcclxuICBhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC13aGl0ZTtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMjUpLCBcclxuKG1pbi1yZXNvbHV0aW9uOiAxMjBkcGkpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjMpLCBcclxuKG1pbi1yZXNvbHV0aW9uOiAxMjQuOGRwaSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNSksIFxyXG4obWluLXJlc29sdXRpb246IDE0NGRwaSlhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIFxyXG4obWluLXJlc29sdXRpb246IDE5MmRwaSkge1xyXG4gICNtYWluTmF2LmhlYWRlci1jb250YWluZXIubmF2LXVwIHtcclxuICAgIG5hdiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBoMSB7XHJcbiAgICBhIHtcclxuICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMjUpLCBcclxuKG1pbi1yZXNvbHV0aW9uOiAxMjBkcGkpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjMpLCBcclxuKG1pbi1yZXNvbHV0aW9uOiAxMjQuOGRwaSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNSksIFxyXG4obWluLXJlc29sdXRpb246IDE0NGRwaSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBcclxuKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGFzaWRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTNyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAtNXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgY29sb3I6ICRwdXJwbGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHRvcDogMzhyZW07XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICNtYWluTmF2LmhlYWRlci1jb250YWluZXIubmF2LXVwIHtcclxuICAgIG5hdiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGluZWFyLWdyYWRpZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGEge1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW46IDAgNXB4IDAgMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gIFxyXG59XHJcbmZvb3RlciB7XHJcbiAgLmNvcHlyaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGluZWFyLWdyYWRpZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMDtcclxuICB9XHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-image-slider */ 6118);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/token-interceptor.service */ 3742);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _artwork_artwork_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artwork/artwork.component */ 6658);
/* harmony import */ var _cats_cats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cats/cats.component */ 8033);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ 1427);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./knowledge/knowledge.component */ 6689);
/* harmony import */ var _services_cats_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/cats.service */ 3871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_services_cats_service__WEBPACK_IMPORTED_MODULE_8__.ApiCatService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_1__.TokenInterceptor,
            multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            ng_image_slider__WEBPACK_IMPORTED_MODULE_12__.NgImageSliderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _artwork_artwork_component__WEBPACK_IMPORTED_MODULE_3__.ArtworkComponent,
        _cats_cats_component__WEBPACK_IMPORTED_MODULE_4__.CatsComponent,
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_7__.KnowledgeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        ng_image_slider__WEBPACK_IMPORTED_MODULE_12__.NgImageSliderModule] }); })();


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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Experience");
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
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 33, vars: 0, consts: [[1, "main-container"], [1, "top-row", "row", "d-flex", "align-items-center"], [1, "box-container", "col-md-9"], [1, "objective"], [1, "img-container", "col-md-3"], ["href", "https://www.claytonhomes.com/dream-to-reality/", "target", "_blank"], ["src", "../../assets/images/dream-to-reality.png", "alt", "Dream to Reality", 1, "img-fluid", "dream-img"], [1, "second-row", "row"], [1, "third-row", "row"], [1, "fourth-row", "row"], [1, "education-container"], [1, "entry"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Objective");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Seeking a position that will benefit from my strong work ethic and experience in website development as well as grow my abilities and knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Coding Dojo - Bootcamp");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Black Belt - MERN Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Pellissippi State Technical Comminity College, Knoxville, TN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Associate of Applied Science Degree in Media Technologies - Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "University of Tennessee, Knoxville, TN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Completed three years of coursework (Painting/Drawing major)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_0__.KnowledgeComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceComponent], styles: [".box-container[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  padding: 2rem;\n}\n\n.education-container[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #fff;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 25px;\n  padding: 1rem;\n}\n\n.objective[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.top-row[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  padding-left: 1rem;\n}\n\n.img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #f1c68d;\n  border-right: 5px solid #f1c68d;\n  border-radius: 10px;\n}\n\n@media screen and (max-width: 767px) {\n  .box-container[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n\n  .top-row[_ngcontent-%COMP%], .second-row[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .box-container[_ngcontent-%COMP%] {\n    max-height: 140px;\n  }\n\n  .dream-img[_ngcontent-%COMP%] {\n    height: 125px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFESjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkNWZTtFRFdmLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDSTtFQUNJLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQUVSOztBQUNBO0VBQ0k7SUFDSSxtQkFBQTtFQUVOOztFQUFFOztJQUVJLGVBQUE7RUFHTjtBQUNGOztBQURBO0VBQ0k7SUFDSSxpQkFBQTtFQUdOOztFQURFO0lBQ0ksYUFBQTtFQUlOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJzLnNjc3NcIjtcclxuXHJcbi5ib3gtY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuLmVkdWNhdGlvbi1jb250YWluZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC13aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4ub2JqZWN0aXZlIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4udG9wLXJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgICAuaW1nLWZsdWlkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJGNyZWFtO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICRjcmVhbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuYm94LWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgIC50b3Atcm93LCBcclxuICAgIC5zZWNvbmQtcm93IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5ib3gtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNDBweDtcclxuICAgIH1cclxuICAgIC5kcmVhbS1pbWcge1xyXG4gICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICB9XHJcbn0iLCIkYmFja2dyb3VuZC13aGl0ZTogI2ZmZjtcclxuJGJsdWU6ICM0MTUwYjE7XHJcbiRjcmVhbTogI2YxYzY4ZDtcclxuJHB1cnBsZTogIzgzNjVhZDtcclxuJGxpbmVhci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmx1ZSAwJSwgJHB1cnBsZSA2NSUsICRjcmVhbSAxMDAlKTsiXX0= */"] });


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
        company: 'Vanderbilt Mortgage / Clayton Homes',
        start: 'February 2010',
        end: 'January 2020',
        title: 'Account Specialist / Front End Developer',
        details: [
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
    { id: 2,
        company: 'StoragePug',
        start: 'March 2020',
        end: 'November 2021',
        title: 'Junior Web Developer / Website Specialist',
        details: [
            'Train others on design standards and using specialized CMS',
            'Converting Zeplin and Figma compositions into HTML and SCSS',
            'Build components using Angular for specialized CMS',
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
    { id: 3,
        company: 'Freelance work',
        start: '2022',
        end: 'Present',
        title: 'Web Developer',
        details: [
            'Adjust and fine tune poor images in PhotoShop',
            'Size images for improved web performance',
            'Website administration/transfer for Squarespace website',
            'Redesign page to include multiple additional images',
            'Domain administration/transfer',
            'Google My Business listing administration/transfer'
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
            "Team City",
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