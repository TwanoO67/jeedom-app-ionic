webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_jeedom_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, storage, jeedom) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.jeedom = jeedom;
        this.api_url = "";
        this.api_key = "";
        storage.get('api_url').then(function (val) {
            _this.api_url = val;
        });
        storage.get('api_key').then(function (val) {
            _this.api_key = val;
        });
    }
    HomePage.prototype.save = function () {
        this.storage.set('api_url', this.api_url);
        this.storage.set('api_key', this.api_key);
        this.refresh();
    };
    HomePage.prototype.refresh = function () {
        this.jeedom.getFullData();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/myApp/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Home Control</h3>\n\n  <p>\n    Bienvenue dans appli domotique\n  </p>\n\n  <button ion-button secondary menuToggle (click)=\'refresh()\'>Accéder à vos piéces</button><br/>\n  <br/>\n  Réglages:<br/>\n  <br/>\n  API URL <input type="text" [(ngModel)]="api_url" /><br/>\n  API KEY <input type="text" [(ngModel)]="api_key" /><br/>\n  <button ion-button secondary (click)="save()">Enregistrer</button>\n\n</ion-content>\n`/*ion-inline-end:"/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_jeedom_service__["a" /* JeedomService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jeedom_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipment_equipment__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = (function () {
    function ListPage(navCtrl, navParams, jeedom) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jeedom = jeedom;
        this.data = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.data = navParams.get('data');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        this.jeedom.getEquipments(this.data.id).subscribe(function (data) {
            console.log(data);
            _this.items = data.map(function (elem) {
                if (elem.eqType_name === "philipsHue") {
                    elem.icon = 'bulb';
                }
                return elem;
            });
        });
    }
    ListPage.prototype.itemTapped = function (event, item) {
        console.log('tap item', item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["a" /* EquipmentPage */], {
            data: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/myApp/src/pages/list/list.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Piéce: {{data.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start *ngIf=\'item.icon\'></ion-icon>\n      {{item.name}}\n      <!--div class="item-note" item-end>\n        {{item.note}}\n      </div-->\n    </button>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/myApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__services_jeedom_service__["a" /* JeedomService */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jeedom_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquipmentPage = (function () {
    function EquipmentPage(navCtrl, navParams, jeedom, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jeedom = jeedom;
        this.alertCtrl = alertCtrl;
        this.data = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.data = navParams.get('data');
        console.log(this.data);
        this.items = [];
        this.jeedom.getCommands(this.data.id).subscribe(function (data) {
            console.log(data);
            _this.items = data.map(function (elem) {
                if (elem.type === "info") {
                    elem.icon = 'information-circle';
                }
                else if (elem.type === "action") {
                    elem.icon = 'flash';
                }
                return elem;
            });
        });
    }
    EquipmentPage.prototype.itemTapped = function (event, item) {
        var _this = this;
        console.log('tap item', item);
        this.jeedom.action(item.id).subscribe(function (data) {
            console.log(data);
            if (item.type == "info") {
                var alert_1 = _this.alertCtrl.create({
                    title: item.name,
                    subTitle: data,
                    buttons: ['Ok']
                });
                alert_1.present();
            }
        });
    };
    EquipmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipment',template:/*ion-inline-start:"/myApp/src/pages/equipment/equipment.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Equipement: {{data.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start *ngIf=\'item.icon\'></ion-icon>\n      {{item.name}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/myApp/src/pages/equipment/equipment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_jeedom_service__["a" /* JeedomService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], EquipmentPage);
    return EquipmentPage;
}());

//# sourceMappingURL=equipment.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_equipment_equipment__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_jeedom_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var pages = [
    __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
    __WEBPACK_IMPORTED_MODULE_8__pages_equipment_equipment__["a" /* EquipmentPage */]
];



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: pages.slice(),
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: pages.slice(),
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__services_jeedom_service__["a" /* JeedomService */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_jeedom_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, jeedom) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.jeedom = jeedom;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], 'data': {} }
        ];
        this.jeedom.getFullData().subscribe(function (data) {
            // on re initialise le menu
            _this.pages = [
                { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], 'data': {} }
            ];
            // et ajoute les pieces
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                _this.pages.push({
                    'title': element.name,
                    component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                    'data': element
                });
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // setRoot -> to reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component, {
            data: page.data
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/myApp/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__services_jeedom_service__["a" /* JeedomService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JeedomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JeedomService = (function () {
    function JeedomService(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.api_url = ''; //http://192.168.0.23';
        this.api_key = ''; //'KLBV1d4WblTg7vIMkGcRvswpQpXdi1NZ';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.storage.get('api_url').then(function (val) {
            _this.api_url = val;
        });
        this.storage.get('api_key').then(function (val) {
            _this.api_key = val;
        });
        this.full_data = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["ReplaySubject"](1);
    }
    JeedomService.prototype.getActionUrl = function () {
        // return this.serverWithApiUrl;
        return this.api_url + "/core/api/jeeApi.php?apikey=" + this.api_key;
    };
    JeedomService.prototype.getFullData = function () {
        var _this = this;
        // provoque recuperation
        this.http.get(this.getActionUrl() + '&type=fullData', { headers: this.headers }).subscribe(function (data) {
            _this.full_data.next(data);
        });
        return this.full_data;
    };
    JeedomService.prototype.scenario = function (id, action) {
        return this.http.get(this.getActionUrl() + '&type=&type=scenario&id=' + id + '&action=' + action, { headers: this.headers });
    };
    JeedomService.prototype.action = function (id) {
        return this.http.get(this.getActionUrl() + '&type=cmd&id=' + id, { headers: this.headers });
    };
    /*
    query : question à poser à jeedom
    utf8 [optionnel] : indique à jeedom si il faut encoder query en utf8 avant de chercher à répondre
    emptyReply [optionnel] : 0 pour que jeedom réponde même si il n’a pas compris, 1 sinon
    profile [optionnel] : nom d’utilisateur de la personne déclenchant l’interaction
    reply_cmd [optionnel] : ID de la commande à utiliser pour répondre à la demande
    */
    JeedomService.prototype.interaction = function (query, utf8, emptyReply, profile, reply_cmd) {
        var url = this.getActionUrl() + '&type=interact&query=' + query;
        if (utf8) {
            url += "utf8=" + utf8;
        }
        if (emptyReply) {
            url += "emptyReply=" + emptyReply;
        }
        if (profile) {
            url += "profile=" + profile;
        }
        if (reply_cmd) {
            url += "reply_cmd=" + reply_cmd;
        }
        return this.http.get(url, { headers: this.headers });
    };
    /*
    category : catégorie du message à ajouter au centre de message
     message : message en question, attention à bien penser à encoder le message (espace devient %20, = %3D…
     */
    JeedomService.prototype.message = function (category, message) {
        return this.http.get(this.getActionUrl() + '&type=message&category=' + category + '&message=' + message, { headers: this.headers });
    };
    JeedomService.prototype.getAllObject = function () {
        return this.http.get(this.getActionUrl() + '&type=object', { headers: this.headers });
    };
    JeedomService.prototype.getEquipments = function (object_id) {
        return this.http.get(this.getActionUrl() + '&type=eqLogic&object_id=' + object_id, { headers: this.headers });
    };
    JeedomService.prototype.getCommands = function (equipment_id) {
        return this.http.get(this.getActionUrl() + '&type=command&eqLogic_id=' + equipment_id, { headers: this.headers });
    };
    JeedomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], JeedomService);
    return JeedomService;
}());

//# sourceMappingURL=jeedom.service.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map