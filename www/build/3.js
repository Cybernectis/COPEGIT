webpackJsonp([3],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewuserPageModule", function() { return NewuserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newuser__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewuserPageModule = /** @class */ (function () {
    function NewuserPageModule() {
    }
    NewuserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__newuser__["a" /* NewuserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__newuser__["a" /* NewuserPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__newuser__["a" /* NewuserPage */]
            ]
        })
    ], NewuserPageModule);
    return NewuserPageModule;
}());

//# sourceMappingURL=newuser.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewuserPage = /** @class */ (function () {
    function NewuserPage(navCtrl, toastCtrl, translateService, loadingCtrl, formBuilder, viewCtrl, app, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.user = user;
        // @ViewChild(Nav) nav: Nav;
        this.pages = [
            { title: 'Users Lists', component: 'UsersPage' },
            { title: 'New Patient', component: 'NewuserPage' }
        ];
        this.account = {
            email: '',
            password: ''
        };
        this.form = formBuilder.group({
            user_name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            user_pass: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signinErrorString = value;
        });
        this.falsemsg = "Welcome !";
    }
    NewuserPage.prototype.goToNewUser = function () {
        this.navCtrl.push('NewuserPage');
    };
    NewuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newuser',template:/*ion-inline-start:"D:\ionic\cope\src\pages\newuser\newuser.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n	<ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title >New Patient</ion-title>\n	<ion-buttons right>\n      <button ion-button outline item-end icon-start color="light">\n		<ion-icon name="star"></ion-icon>\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n \n	  <form (ngSubmit)="logForm()">\n		  <ion-card >\n		  <ion-card-header>\n			Patient Details\n		  </ion-card-header>\n\n		  <ion-list>\n		  <ion-item>\n			<ion-label floating>Patient Name</ion-label>\n			<ion-input type="text"></ion-input>\n		  </ion-item>\n\n		  <ion-item>\n			<ion-label floating>Place</ion-label>\n			<ion-input type="text"></ion-input>\n		  </ion-item>\n		  \n		  <ion-item>\n			<ion-label floating>Mobile No.</ion-label>\n			<ion-input type="number"></ion-input>\n		  </ion-item>\n		  \n		  <ion-item>\n			<ion-label floating>Age</ion-label>\n			<ion-input type="number"></ion-input>\n		  </ion-item>\n		  \n		  <ion-item>\n			<ion-label>Gender</ion-label>\n			<ion-select>\n			  <ion-option value="M" selected="true">Male</ion-option>\n			  <ion-option value="F">Female</ion-option>\n			</ion-select>\n		  </ion-item>\n		   </ion-list>\n		  </ion-card>\n		  \n		  <ion-card >\n		  <ion-card-header>\n			Doctor Details\n		  </ion-card-header>\n\n		  <ion-list>\n		  \n		  <ion-item>\n			<ion-label floating>Doctor Name</ion-label>\n			<ion-input type="text"></ion-input>\n		  </ion-item>\n		  </ion-list>\n		  </ion-card>\n		  \n		  <ion-card >\n		  <ion-card-header>\n			Product Details\n		  </ion-card-header>\n\n		  <ion-list>\n		  \n		  \n		  \n		   <ion-item>\n			<ion-label>Select Product</ion-label>\n			<ion-select>\n			  <ion-option value="M">Product 1</ion-option>\n			  <ion-option value="F">Product 2</ion-option>\n			  <ion-option value="F">Product 3</ion-option>\n			</ion-select>\n		   </ion-item>\n			  \n		   <ion-item>\n			<ion-label floating>Rx Duration (Months)</ion-label>\n			<ion-input type="number"></ion-input>\n		   </ion-item>\n		   \n		   <ion-item>\n			<ion-label floating>1st Dose Purchase Date</ion-label>\n			<ion-input type="text"></ion-input>\n		   </ion-item>\n		   \n		   <ion-item>\n			<ion-label floating>Carts</ion-label>\n			<ion-select>\n			  <ion-option value="1">1</ion-option>\n			  <ion-option value="3">3</ion-option>\n			  <ion-option value="6">6</ion-option>\n			</ion-select>\n		   </ion-item>\n		   \n		  </ion-list>\n		  </ion-card>\n		  \n		  <ion-card >\n		  <ion-card-header>\n			Upload Section\n		  </ion-card-header>\n\n		  <ion-list>\n		  \n		  \n		  \n		   <ion-item>\n			<ion-label>Dr\'s Perscription*</ion-label>\n			<ion-input type="file"></ion-input>\n		   </ion-item>\n			  \n		   <ion-item>\n			<ion-label>Invoise Copy*</ion-label>\n			<ion-input type="file"></ion-input>\n		   </ion-item>\n		   \n		  </ion-list>\n		  </ion-card>\n		  \n		</form>\n	  \n	\n</ion-content>\n'/*ion-inline-end:"D:\ionic\cope\src\pages\newuser\newuser.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */]])
    ], NewuserPage);
    return NewuserPage;
}());

//# sourceMappingURL=newuser.js.map

/***/ })

});
//# sourceMappingURL=3.js.map