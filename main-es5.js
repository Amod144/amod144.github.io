function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./player/player.component */
    "./src/app/player/player.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'mdb-angular-free';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container-fluid", 2, "width", "94%"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-player");
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./player/player.component */
    "./src/app/player/player.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _services_base_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/base.service */
    "./src/app/services/base.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _player_player_controller_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./player/player-controller.directive */
    "./src/app/player/player-controller.directive.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_base_service__WEBPACK_IMPORTED_MODULE_13__["BaseService"], _services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_8__["PlayerComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"], _player_player_controller_directive__WEBPACK_IMPORTED_MODULE_15__["PlayerControllerDirective"], _search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBRootModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_8__["PlayerComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"], _player_player_controller_directive__WEBPACK_IMPORTED_MODULE_15__["PlayerControllerDirective"], _search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"]],
          providers: [_services_base_service__WEBPACK_IMPORTED_MODULE_13__["BaseService"], _services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/base.service */
    "./src/app/services/base.service.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

    var _c0 = ["playNext"];

    var CardComponent =
    /*#__PURE__*/
    function () {
      function CardComponent(baseService) {
        _classCallCheck(this, CardComponent);

        this.baseService = baseService;
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// console.log(this.song.imgUrl);
        }
      }, {
        key: "imgClick",
        value: function imgClick() {
          this.baseService.currentSong.emit({
            "url": this.songPath,
            "songName": this.songName
          });
        }
      }, {
        key: "playNext",
        value: function playNext() {
          this.baseService.nextSong.emit({
            "url": this.songPath,
            "songName": this.songName
          });
        }
      }, {
        key: "onQueueClick",
        value: function onQueueClick() {
          this.baseService.queueData.emit({
            "url": this.songPath,
            "songName": this.songName
          });
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      viewQuery: function CardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playNextIcon = _t.first);
        }
      },
      inputs: {
        imgUrl: "imgUrl",
        songName: "songName",
        songPath: "songPath",
        count: "count",
        artist: "artist",
        releaseDate: "releaseDate"
      },
      decls: 18,
      vars: 2,
      consts: [[1, "card", 2, "width", "100%", "height", "220px"], [1, "view", "overlay", 3, "click"], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "100%", "height", "160px", 3, "src"], [1, "mask", "flex-center", "rgba-white-slight"], [1, "white-text"], [1, "far", "fa-play-circle", "fa-4x"], [1, "card-title"], [1, "row", 2, "cursor", "pointer"], [1, "col", "col-md-12"], ["mdbWavesEffect", "", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Share", 1, "material-icons", "float-right", 2, "font-size", "20px"], ["mdbWavesEffect", "", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Play Next", 1, "material-icons", "float-right", "pl-2", "pr-2", 2, "font-size", "20px", 3, "click"], ["mdbWavesEffect", "", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Add To Queue", 1, "material-icons", "float-right", 2, "font-size", "20px", 3, "click"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_div_click_1_listener() {
            return ctx.imgClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_span_click_14_listener() {
            return ctx.playNext();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "double_arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_span_click_16_listener() {
            return ctx.onQueueClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.songName);
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"]],
      styles: ["i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9EOlxcd29ya3NwYWNlXFxzYW5nZWV0L3NyY1xcYXBwXFxjYXJkXFxjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpe1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn0iLCJpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.scss']
        }]
      }], function () {
        return [{
          type: _services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]
        }];
      }, {
        imgUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        songName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        songPath: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        artist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        releaseDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        playNextIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['playNext']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/card/card.component.ts");

    var _c0 = ["trending"];

    function HomeComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgUrl", song_r18.imgUrl)("artist", song_r18.artist)("count", song_r18.count)("releaseDate", song_r18.releaseDate)("songPath", song_r18.songPath)("songName", song_r18.songName);
      }
    }

    function HomeComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgUrl", song_r19.imgUrl)("artist", song_r19.artist)("count", song_r19.count)("releaseDate", song_r19.releaseDate)("songPath", song_r19.songPath)("songName", song_r19.songName);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(dataService) {
        _classCallCheck(this, HomeComponent);

        this.dataService = dataService;
        this.songs = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataService.getSongs().subscribe(function (data) {
            _this.songs = data;
          }); // console.log(this.songs);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "scrollRight",
        value: function scrollRight() {
          console.log(this.trendingDiv.nativeElement.scrollLeft);
          this.trendingDiv.nativeElement.scrollLeft += 120;
        }
      }, {
        key: "scrollLeft",
        value: function scrollLeft() {
          console.log(this.trendingDiv.nativeElement.scrollLeft);
          this.trendingDiv.nativeElement.scrollLeft -= 120;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      viewQuery: function HomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trendingDiv = _t.first);
        }
      },
      decls: 20,
      vars: 2,
      consts: [[1, "container-fluid", "testimonial-group"], [1, "font-weight-bolder"], [1, "row", "flex-row", "flex-nowrap"], ["trending", ""], ["class", "col-2 pt-3", 4, "ngFor", "ngForOf"], ["mdbWavesEffect", "", 1, "material-icons", "float-left", 2, "font-size", "27px", "cursor", "pointer", 3, "click"], ["mdbWavesEffect", "", 1, "material-icons", "float-right", 2, "font-size", "27px", "cursor", "pointer", 3, "click"], [1, "container-fluid"], [1, "row"], [1, "col-2", "pt-3"], [3, "imgUrl", "artist", "count", "releaseDate", "songPath", "songName"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trending");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 2, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_8_listener() {
            return ctx.scrollLeft();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " keyboard_arrow_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_10_listener() {
            return ctx.scrollRight();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " keyboard_arrow_right ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Albums");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 2, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]],
      styles: [".testimonial-group[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.testimonial-group[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > .col-sm-4[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: none;\n}\n\n.col-sm-4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 48px;\n  padding-bottom: 20px;\n  padding-top: 18px;\n}\n.col-sm-4[_ngcontent-%COMP%]:nth-child(3n+1) {\n  background: #c69;\n}\n.col-sm-4[_ngcontent-%COMP%]:nth-child(3n+2) {\n  background: #9c6;\n}\n.col-sm-4[_ngcontent-%COMP%]:nth-child(3n+3) {\n  background: #69c;\n}\nhtml[_ngcontent-%COMP%] {\n  overflow: scroll;\n  scroll-behavior: smooth;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcd29ya3NwYWNlXFxzYW5nZWV0L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQUE7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDRUo7QURDRSxnQkFBQTtBQUNBO0VBQVksV0FBQTtFQUFhLGVBQUE7RUFBaUIsb0JBQUE7RUFBc0IsaUJBQUE7QUNNbEU7QURMRTtFQUE0QixnQkFBQTtBQ1M5QjtBRFJFO0VBQTRCLGdCQUFBO0FDWTlCO0FEWEU7RUFBNEIsZ0JBQUE7QUNlOUI7QURiRTtFQUNFLGdCQUFBO0VBQW1CLHVCQUFBO0FDaUJ2QjtBRGZFO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0VBQXlCLCtCQUFBO0FDbUIvQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBoZWFydCBvZiB0aGUgbWF0dGVyICovXHJcbi50ZXN0aW1vbmlhbC1ncm91cCA+IC5yb3cge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIC50ZXN0aW1vbmlhbC1ncm91cCA+IC5yb3cgPiAuY29sLXNtLTQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIERlY29yYXRpb25zICovXHJcbiAgLmNvbC1zbS00IHsgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogNDhweDsgcGFkZGluZy1ib3R0b206IDIwcHg7IHBhZGRpbmctdG9wOiAxOHB4OyB9XHJcbiAgLmNvbC1zbS00Om50aC1jaGlsZCgzbisxKSB7IGJhY2tncm91bmQ6ICNjNjk7IH1cclxuICAuY29sLXNtLTQ6bnRoLWNoaWxkKDNuKzIpIHsgYmFja2dyb3VuZDogIzljNjsgfVxyXG4gIC5jb2wtc20tNDpudGgtY2hpbGQoM24rMykgeyBiYWNrZ3JvdW5kOiAjNjljOyB9XHJcblxyXG4gIGh0bWwge1xyXG4gICAgb3ZlcmZsb3c6ICAgc2Nyb2xsO3Njcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIH1cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IC8qIG1ha2Ugc2Nyb2xsYmFyIHRyYW5zcGFyZW50ICovXHJcbiAgfSIsIi8qIFRoZSBoZWFydCBvZiB0aGUgbWF0dGVyICovXG4udGVzdGltb25pYWwtZ3JvdXAgPiAucm93IHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRlc3RpbW9uaWFsLWdyb3VwID4gLnJvdyA+IC5jb2wtc20tNCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi8qIERlY29yYXRpb25zICovXG4uY29sLXNtLTQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG59XG5cbi5jb2wtc20tNDpudGgtY2hpbGQoM24rMSkge1xuICBiYWNrZ3JvdW5kOiAjYzY5O1xufVxuXG4uY29sLXNtLTQ6bnRoLWNoaWxkKDNuKzIpIHtcbiAgYmFja2dyb3VuZDogIzljNjtcbn1cblxuLmNvbC1zbS00Om50aC1jaGlsZCgzbiszKSB7XG4gIGJhY2tncm91bmQ6ICM2OWM7XG59XG5cbmh0bWwge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvKiBtYWtlIHNjcm9sbGJhciB0cmFuc3BhcmVudCAqL1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        trendingDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['trending']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function NavComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rock");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Melody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Separated link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 36,
      vars: 0,
      consts: [["SideClass", "navbar navbar-expand-lg navbar-dark purple-gradient py-4"], ["href", "#", 1, "navbar-brand"], [1, "fas", "fa-music"], ["fas", "", "icon", "angle-left", "size", "lg", 1, "text-white", "mr-auto", "d-flex", "d-md-none", "align-self-center"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["mdbWavesEffect", "", 1, "nav-link", "waves-light"], [1, "sr-only"], [1, "nav-item"], ["dropdown", "", 1, "nav-item", "dropdown"], ["dropdownToggle", "", "mdbWavesEffect", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "dropdown-toggle", "waves-light"], [1, "caret"], ["class", "dropdown-menu dropdown dropdown-primary", "role", "menu", 4, "dropdownMenu"], ["mdbWavesEffect", "", 1, "form-inline", "waves-light"], [1, "md-form", "my-0"], ["type", "text", "placeholder", "Search", 1, "form-control", "mr-sm-2"], [1, "navbar-nav", "ml-auto", "nav-flex-icons", "fa-2x"], [1, "nav-link"], ["mdbDropdown", "", 1, "btn-group"], ["fas", "", "icon", "user", "mdbDropdownToggle", ""], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-primary"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"], ["role", "menu", 1, "dropdown-menu", "dropdown", "dropdown-primary"], ["mdbWavesEffect", "", "href", "#", 1, "dropdown-item", "waves-light"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sangeet.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mdb-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Artists");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Genere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavComponent_div_21_Template, 10, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mdb-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["LogoComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["BsDropdownMenuDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/player/player-controller.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/player/player-controller.directive.ts ***!
    \*******************************************************/

  /*! exports provided: PlayerControllerDirective */

  /***/
  function srcAppPlayerPlayerControllerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerControllerDirective", function () {
      return PlayerControllerDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/base.service */
    "./src/app/services/base.service.ts");

    var PlayerControllerDirective =
    /*#__PURE__*/
    function () {
      function PlayerControllerDirective(elementRef, baseService) {
        _classCallCheck(this, PlayerControllerDirective);

        this.elementRef = elementRef;
        this.baseService = baseService;
      }

      _createClass(PlayerControllerDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "fun",
        value: function fun(event) {
          this.baseService.seekbarData.next({
            "c": this.elementRef.nativeElement.currentTime,
            "d": this.elementRef.nativeElement.duration
          }); // this.seekbar.val=170;
        }
      }]);

      return PlayerControllerDirective;
    }();

    PlayerControllerDirective.ɵfac = function PlayerControllerDirective_Factory(t) {
      return new (t || PlayerControllerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));
    };

    PlayerControllerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PlayerControllerDirective,
      selectors: [["", "playerController", ""]],
      hostBindings: function PlayerControllerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeupdate", function PlayerControllerDirective_timeupdate_HostBindingHandler() {
            return ctx.fun();
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerControllerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[playerController]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]
        }];
      }, {
        fun: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['timeupdate']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/player/player.component.ts":
  /*!********************************************!*\
    !*** ./src/app/player/player.component.ts ***!
    \********************************************/

  /*! exports provided: PlayerComponent */

  /***/
  function srcAppPlayerPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () {
      return PlayerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/base.service */
    "./src/app/services/base.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _player_controller_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./player-controller.directive */
    "./src/app/player/player-controller.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

    var _c0 = ["customRange"];
    var _c1 = ["repeat"];

    function PlayerComponent_i_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_i_8_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onPlayClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayerComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_ng_template_9_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onPauseClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayerComponent_a_26_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 25);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "background-color": a0
      };
    };

    function PlayerComponent_a_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_a_26_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var i_r11 = ctx.index;
          var song_r10 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.playSong(ctx_r13.songUrlQueue[i_r11], song_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerComponent_a_26_i_1_Template, 1, 0, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r10 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, song_r10 == ctx_r5.currentSongName ? "#ddd" : "white"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", song_r10 == ctx_r5.currentSongName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r10, "");
      }
    }

    var _c3 = function _c3(a0) {
      return {
        "pointer-events": a0
      };
    };

    var _c4 = function _c4(a2) {
      return {
        "font-size": "36px",
        "font-weight": "900",
        "color": a2,
        "cursor": "pointer"
      };
    };

    var PlayerComponent =
    /*#__PURE__*/
    function () {
      function PlayerComponent(baseService, snackBar) {
        _classCallCheck(this, PlayerComponent);

        this.baseService = baseService;
        this.snackBar = snackBar;
        this.audio = new Audio();
        this.cTime = "00:00:00";
        this.songDuration = "00:00:00";
        this.songStatus = 'null';
        this.playNext = false; //check next song to be played or not

        this.repeatStatus = false;
        this.queueStatus = false;
        this.songUrlQueue = [];
        this.songNameQueue = [];
      }

      _createClass(PlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          //current play
          this.baseService.currentSong.subscribe(function (obj) {
            _this2.playSong(obj.url, obj.songName);
          }); //update the progress bar and duration span

          this.baseService.seekbarData.subscribe(function (data) {
            _this2.cTime = _this2.sToTime(data.c);
            _this2.songDuration = _this2.sToTime(data.d);
            _this2.progressBar.nativeElement.value = data.c / data.d;

            if (data.c == data.d && _this2.repeatStatus) {
              _this2.playSong(_this2.currentSongUrl, _this2.currentSongName);
            } else if (data.c == data.d && _this2.playNext) {
              // console.log("works");
              _this2.playSong(_this2.nextSongUrl, _this2.nextSongName);

              _this2.nextSongName = '';
              _this2.playNext = false;
            } else if (data.c == data.d && _this2.queueStatus) {
              var index = _this2.songUrlQueue.indexOf(_this2.currentSongUrl);

              _this2.playSong(_this2.songUrlQueue[index + 1], _this2.songNameQueue[index + 1]);

              if (index + 1 == _this2.songUrlQueue.length - 1) _this2.queueStatus = false;
            } else if (data.c == data.d) {
              _this2.songStatus = 'stoped';
              _this2.status = false;
            }
          }); //for next song

          this.baseService.nextSong.subscribe(function (obj) {
            _this2.nextSongUrl = obj.url;
            _this2.nextSongName = obj.songName;
            _this2.playNext = true;

            var snackBarRef = _this2.snackBar.open("song added", "", {
              duration: 1040,
              // here specify the position
              verticalPosition: 'top',
              panelClass: ['next-snackbar']
            });
          }); //for song queue

          this.baseService.queueData.subscribe(function (obj) {
            _this2.songUrlQueue.push(obj.url);

            _this2.songNameQueue.push(obj.songName); //console.log(this.songQueue);


            _this2.queueStatus = true;

            var snackBarRef = _this2.snackBar.open("song added to queue", "", {
              duration: 1040,
              // here specify the position
              verticalPosition: 'top',
              panelClass: ['next-snackbar']
            });
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "playSong",
        value: function playSong(url, name) {
          this.status = true;
          this.player = document.getElementById("player");
          this.player.src = url;
          this.player.load();
          this.player.play();
          this.songStatus = 'playing';
          this.currentSongUrl = url;
          this.currentSongName = name;
        } //for play button

      }, {
        key: "onPlayClick",
        value: function onPlayClick() {
          this.player.play();
          this.status = true;
          this.songStatus = 'playing';
        } //for pause button

      }, {
        key: "onPauseClick",
        value: function onPauseClick() {
          this.player.pause();
          this.status = false;
          this.songStatus = 'paused';
        }
      }, {
        key: "seekbarHandler",
        value: function seekbarHandler() {}
      }, {
        key: "sToTime",
        value: function sToTime(t) {
          return this.padZero(Math.floor(t / (60 * 60) % 24)) + ":" + this.padZero(Math.floor(t / 60 % 60)) + ":" + this.padZero(Math.floor(t % 60));
        }
      }, {
        key: "padZero",
        value: function padZero(v) {
          return v < 10 ? "0" + v : v;
        }
      }, {
        key: "seek",
        value: function seek(event) {
          //  console.log(event);
          var percent = event.offsetX / this.progressBar.nativeElement.offsetWidth;
          this.player.currentTime = Math.floor(percent * this.player.duration);
          this.progressBar.nativeElement.value = percent / 100;
        }
      }, {
        key: "onRepeatClick",
        value: function onRepeatClick() {
          this.repeatStatus = !this.repeatStatus;
        }
      }]);

      return PlayerComponent;
    }();

    PlayerComponent.ɵfac = function PlayerComponent_Factory(t) {
      return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
    };

    PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerComponent,
      selectors: [["app-player"]],
      viewQuery: function PlayerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.repeatIcon = _t.first);
        }
      },
      decls: 27,
      vars: 11,
      consts: [[1, "page-footer", "text-center", "z-depth-5", "rare-wind-gradient", "fixed-bottom", 2, "height", "56px", "color", "black"], ["playerController", "", "id", "player"], ["src", "/assets/vaifilhao.mp3", "type", "audio/mp3"], [1, "row", 3, "ngStyle"], [1, "col-md-2"], [1, "fas", "fa-fast-backward", "fa-2x", "pr-3", "pb-3"], ["class", "fas fa-play fa-2x pr-3", 3, "click", 4, "ngIf", "ngIfElse"], ["pause", ""], [1, "fas", "fa-fast-forward", "fa-2x"], ["id", "slider", 1, "col", "col-md-5"], ["type", "range", "value", "0", "max", "1", "step", "0.0005", 1, "bar", 3, "click"], ["customRange", ""], [1, "col", "col-md-2"], [1, "float-left", 2, "font-weight", "bolder", "color", "black"], [1, "col", "col-md-3"], ["mdbWavesEffect", "", 1, "material-icons", "float-left", 3, "ngStyle", "click"], ["repeat", ""], [1, "dropup", "float-left"], ["mdbWavesEffect", "", 1, "material-icons", "dropbtn", 2, "font-size", "42px"], [1, "dropup-content"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "fas", "fa-play", "fa-2x", "pr-3", 3, "click"], [1, "fas", "fa-pause", "fa-2x", "pr-3", 3, "click"], [3, "ngStyle", "click"], ["class", "fas fa-play float-left pr-1", 4, "ngIf"], [1, "fas", "fa-play", "float-left", "pr-1"]],
      template: function PlayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your browser does not support the audio element. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerComponent_i_8_Template, 1, 0, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlayerComponent_ng_template_9_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_input_click_13_listener($event) {
            return ctx.seek($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_span_click_19_listener() {
            return ctx.onRepeatClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " repeat ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "queue_music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PlayerComponent_a_26_Template, 3, 5, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx.songStatus == "playing" || ctx.songStatus == "paused" ? "all" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.status)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cTime, "/", ctx.songDuration, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c4, ctx.repeatStatus ? "black" : "darkgray"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songNameQueue);
        }
      },
      directives: [_player_controller_directive__WEBPACK_IMPORTED_MODULE_3__["PlayerControllerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.next-snackbar[_ngcontent-%COMP%] {\n  max-width: 80px;\n  background: #993232;\n}\n\n#slider[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 17px;\n  background: #456a8b;\n  border-radius: 40px;\n  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.9), 0px 1px 1px 0px #3f51b5;\n}\n\n#slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 490px;\n  height: 5px;\n  background: #333;\n  position: relative;\n  top: -4px;\n  left: 4px;\n  background: #1d2e38;\n  background: linear-gradient(left, #1d2e38 0%, #2b4254 50%, #2b4254 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#1d2e38\", endColorstr=\"#2b4254\",GradientType=1 );\n  border-radius: 40px;\n}\n\ninput[type=range][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  background-color: black;\n  height: 2px;\n  cursor: pointer;\n}\n\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  position: relative;\n  top: 0px;\n  z-index: 1;\n  width: 13px;\n  height: 13px;\n  cursor: pointer;\n  box-shadow: 3px 6px 5px 0px rgba(0, 0, 0, 0.6);\n  border-radius: 40px;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #1d19df), color-stop(50%, #1d19df), color-stop(51%, #1d19df), color-stop(100%, #1d19df));\n}\n\n\n\n\n\n.dropup[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n\n.dropup-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  bottom: 50px;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n\n\n.dropup-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 9px 11px;\n  text-decoration: none;\n  display: block;\n  border-style: groove;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n\n\n.dropup-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n\n\n.dropup[_ngcontent-%COMP%]:hover   .dropup-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.dropup[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #2980B9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL0Q6XFx3b3Jrc3BhY2VcXHNhbmdlZXQvc3JjXFxhcHBcXHBsYXllclxccGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREdBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FESUE7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUdDLG1CQUFBO0VBSUQsbUJBQUE7RUFJQSw2RUFBQTtBQ0xEOztBRFFBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSxtQkFBQTtFQU1BLHdFQUFBO0VBQ0EsbUhBQUE7RUFJQSxtQkFBQTtBQ1BEOztBRFdBO0VBQ0Msd0JBQUE7RUFDQSx1QkFBQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0FDUko7O0FEV0E7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFHQSw4Q0FBQTtFQUdBLG1CQUFBO0VBQ0EseUtBQUE7QUNSRDs7QURjQSxrQkFBQTs7QUFTRSxnRUFBQTs7QUFDQTtFQUNELGtCQUFBO0VBQ0EscUJBQUE7QUNuQkQ7O0FEc0JFLHVDQUFBOztBQUNBO0VBQ0QsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUNuQkQ7O0FEc0JFLDRCQUFBOztBQUNBO0VBQ0QsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNuQkQ7O0FEc0JFLDBDQUFBOztBQUNBO0VBQXlCLFVBQUE7QUNsQjNCOztBRG9CRSxrQ0FBQTs7QUFDQTtFQUNELGNBQUE7QUNqQkQ7O0FEb0JFLHNGQUFBOztBQUNBO0VBQ0QseUJBQUE7QUNqQkQiLCJmaWxlIjoic3JjL2FwcC9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5uZXh0LXNuYWNrYmFye1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1MywgNTAsIDUwKTtcclxufVxyXG5cclxuLy9JbnB1dCB0eXBlIHJhbmdlLS0tLS0tLS1Qcm9ncmVzcyBiYXJcclxuI3NsaWRlciB7XHJcblx0d2lkdGg6IDQwMHB4O1xyXG5cdGhlaWdodDogMTdweDtcclxuXHQvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Ly8gbWFyZ2luOiAxMDBweCBhdXRvO1xyXG5cdCBiYWNrZ3JvdW5kOiByZ2IoNjksIDEwNiwgMTM5KTtcclxuXHRcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDQwcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcblx0XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjkpLCAwcHggMXB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuOSksIDBweCAxcHggMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuOSksIDBweCAxcHggMXB4IDBweCAjM2Y1MWI1O1xyXG59XHJcblxyXG4jc2xpZGVyIC5iYXIge1xyXG5cdHdpZHRoOiA0OTBweDtcclxuXHRoZWlnaHQ6IDVweDtcclxuXHRiYWNrZ3JvdW5kOiAjMzMzO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IC00cHg7XHJcblx0bGVmdDogNHB4O1x0XHJcblx0XHJcblx0YmFja2dyb3VuZDogIzFkMmUzODtcclxuXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMWQyZTM4IDAlLCAjMmI0MjU0IDUwJSwgIzJiNDI1NCAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwjMWQyZTM4KSwgY29sb3Itc3RvcCg1MCUsIzJiNDI1NCksIGNvbG9yLXN0b3AoMTAwJSwjMmI0MjU0KSk7XHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzFkMmUzOCAwJSwjMmI0MjU0IDUwJSwjMmI0MjU0IDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMWQyZTM4IDAlLCMyYjQyNTQgNTAlLCMyYjQyNTQgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMWQyZTM4IDAlLCMyYjQyNTQgNTAlLCMyYjQyNTQgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsICMxZDJlMzggMCUsIzJiNDI1NCA1MCUsIzJiNDI1NCAxMDAlKTtcclxuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFkMmUzOCcsIGVuZENvbG9yc3RyPScjMmI0MjU0JyxHcmFkaWVudFR5cGU9MSApO1x0XHJcblx0XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNDBweDtcclxuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT1cInJhbmdlXCJdIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IDBweDtcclxuXHR6LWluZGV4OiAxO1xyXG5cdHdpZHRoOiAxM3B4O1xyXG5cdGhlaWdodDogMTNweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAzcHggNnB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjYpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogM3B4IDZweCA1cHggMHB4IHJnYmEoMCwwLDAsMC42KTtcclxuXHRib3gtc2hhZG93OiAzcHggNnB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjYpO1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNDBweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDQwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCMxZDE5ZGYpLCBjb2xvci1zdG9wKDUwJSwjMWQxOWRmKSwgY29sb3Itc3RvcCg1MSUsIzFkMTlkZiksIGNvbG9yLXN0b3AoMTAwJSwjMWQxOWRmKSk7XHJcbn1cclxuLy8gcHJvZ3Jlc3NiYXIgZW5kc1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWRyb3B1cCBtZW51LS0tLS0tLVBsYXlsaXN0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLyogRHJvcHVwIEJ1dHRvbiAqL1xyXG4vLyAuZHJvcGJ0biB7XHJcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjogIzM0OThEQjtcclxuLy8gXHRjb2xvcjogd2hpdGU7XHJcbi8vIFx0cGFkZGluZzogMTZweDtcclxuLy8gXHRmb250LXNpemU6IDE2cHg7XHJcbi8vIFx0Ym9yZGVyOiBub25lO1xyXG4vLyAgIH1cclxuICBcclxuICAvKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wdXAgY29udGVudCAqL1xyXG4gIC5kcm9wdXAge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIERyb3B1cCBjb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cclxuICAuZHJvcHVwLWNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogNTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG5cdG1pbi13aWR0aDogMTYwcHg7XHJcblx0Ym94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcblx0ei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wdXAgKi9cclxuICAuZHJvcHVwLWNvbnRlbnQgYSB7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdHBhZGRpbmc6IDlweCAxMXB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRib3JkZXItc3R5bGU6IGdyb292ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENoYW5nZSBjb2xvciBvZiBkcm9wdXAgbGlua3Mgb24gaG92ZXIgKi9cclxuICAuZHJvcHVwLWNvbnRlbnQgYTpob3ZlciB7Y29sb3I6cmVkfVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIGRyb3B1cCBtZW51IG9uIGhvdmVyICovXHJcbiAgLmRyb3B1cDpob3ZlciAuZHJvcHVwLWNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3B1cCBidXR0b24gd2hlbiB0aGUgZHJvcHVwIGNvbnRlbnQgaXMgc2hvd24gKi9cclxuICAuZHJvcHVwOmhvdmVyIC5kcm9wYnRuIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MEI5O1xyXG4gIH1cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS1wbGF5bGlzdCBlbmRzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFxyXG4iLCJpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV4dC1zbmFja2JhciB7XG4gIG1heC13aWR0aDogODBweDtcbiAgYmFja2dyb3VuZDogIzk5MzIzMjtcbn1cblxuI3NsaWRlciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBiYWNrZ3JvdW5kOiAjNDU2YThiO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjkpLCAwcHggMXB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjkpLCAwcHggMXB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC45KSwgMHB4IDFweCAxcHggMHB4ICMzZjUxYjU7XG59XG5cbiNzbGlkZXIgLmJhciB7XG4gIHdpZHRoOiA0OTBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICMxZDJlMzg7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICMxZDJlMzggMCUsICMyYjQyNTQgNTAlLCAjMmI0MjU0IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgIzFkMmUzOCksIGNvbG9yLXN0b3AoNTAlLCAjMmI0MjU0KSwgY29sb3Itc3RvcCgxMDAlLCAjMmI0MjU0KSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMxZDJlMzggMCUsICMyYjQyNTQgNTAlLCAjMmI0MjU0IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgIzFkMmUzOCAwJSwgIzJiNDI1NCA1MCUsICMyYjQyNTQgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgIzFkMmUzOCAwJSwgIzJiNDI1NCA1MCUsICMyYjQyNTQgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCAjMWQyZTM4IDAlLCAjMmI0MjU0IDUwJSwgIzJiNDI1NCAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9XCIjMWQyZTM4XCIsIGVuZENvbG9yc3RyPVwiIzJiNDI1NFwiLEdyYWRpZW50VHlwZT0xICk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNDBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG5pbnB1dFt0eXBlPXJhbmdlXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA2cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDZweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm94LXNoYWRvdzogM3B4IDZweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0MHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICMxZDE5ZGYpLCBjb2xvci1zdG9wKDUwJSwgIzFkMTlkZiksIGNvbG9yLXN0b3AoNTElLCAjMWQxOWRmKSwgY29sb3Itc3RvcCgxMDAlLCAjMWQxOWRmKSk7XG59XG5cbi8qIERyb3B1cCBCdXR0b24gKi9cbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3B1cCBjb250ZW50ICovXG4uZHJvcHVwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIERyb3B1cCBjb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cbi5kcm9wdXAtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wdXAgKi9cbi5kcm9wdXAtY29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiA5cHggMTFweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcHVwIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcHVwLWNvbnRlbnQgYTpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi8qIFNob3cgdGhlIGRyb3B1cCBtZW51IG9uIGhvdmVyICovXG4uZHJvcHVwOmhvdmVyIC5kcm9wdXAtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3B1cCBidXR0b24gd2hlbiB0aGUgZHJvcHVwIGNvbnRlbnQgaXMgc2hvd24gKi9cbi5kcm9wdXA6aG92ZXIgLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MEI5O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-player',
          templateUrl: './player.component.html',
          styleUrls: ['./player.component.scss']
        }]
      }], function () {
        return [{
          type: _services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }];
      }, {
        progressBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['customRange']
        }],
        repeatIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['repeat']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)();
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 2,
      vars: 0,
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/base.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/base.service.ts ***!
    \******************************************/

  /*! exports provided: BaseService */

  /***/
  function srcAppServicesBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseService", function () {
      return BaseService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BaseService = function BaseService() {
      _classCallCheck(this, BaseService);

      this.currentSong = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.seekbarData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      this.nextSong = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.queueData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    BaseService.ɵfac = function BaseService_Factory(t) {
      return new (t || BaseService)();
    };

    BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BaseService,
      factory: BaseService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
      }

      _createClass(DataService, [{
        key: "getSongs",
        value: function getSongs() {
          return this.http.get("../assets/data.json");
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\workspace\sangeet\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map