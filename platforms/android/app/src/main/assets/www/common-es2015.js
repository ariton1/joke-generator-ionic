(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-form/auth-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-form/auth-form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"authForm\">\n  <ion-item>\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-input\n      formControlName=\"email\"\n      type=\"email\"\n      placeholder=\"Your email address\"\n      [class.invalid]=\"!authForm.controls['email'].valid &&\n authForm.controls['email'].touched\"\n    >\n    </ion-input>\n  </ion-item>\n  <ion-item\n    class=\"error-message\"\n    *ngIf=\"!authForm.controls['email'].valid &&\n authForm.controls['email'].touched\"\n  >\n    <ion-label>Please enter a valid email address.</ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"!isPasswordResetPage\">\n    <ion-label position=\"stacked\">Password</ion-label>\n    <ion-input\n      formControlName=\"password\"\n      type=\"password\"\n      placeholder=\"Your password\"\n      [class.invalid]=\"!authForm.controls['password'].valid&& authForm.controls['password'].touched\"\n    >\n    </ion-input>\n  </ion-item>\n  <ion-item\n    class=\"error-message\"\n    *ngIf=\"!authForm.controls['password'].valid\n && authForm.controls['password'].touched && !isPasswordResetPage\"\n  >\n    <ion-label>Your password needs more than 6 characters.</ion-label>\n  </ion-item>\n\n  <ion-button\n    (click)=\"submitCredentials(authForm)\"\n    expand=\"block\"\n    [disabled]=\"!authForm.valid\"\n  >\n    {{ actionButtonText }}\n  </ion-button>\n</form>");

/***/ }),

/***/ "./src/app/components/auth-form/auth-form.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/auth-form/auth-form.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  padding: 12px;\n  margin-bottom: 32px;\n}\nform ion-button {\n  margin-top: 30px;\n}\np {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\nion-label {\n  margin-left: 5px;\n}\nion-input {\n  padding: 5px;\n}\n.invalid {\n  border-bottom: 1px solid #ff6153;\n}\n.error-message {\n  min-height: 2.2rem;\n}\n.error-message ion-label {\n  margin: 2px 0;\n  font-size: 60%;\n  color: #ff6153;\n}\n.error-message .item-inner {\n  border-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L2lvbmljcHJvamVjdHMvam9rZS1nZW5lcmF0b3Ivc3JjL2FwcC9jb21wb25lbnRzL2F1dGgtZm9ybS9hdXRoLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC1mb3JtL2F1dGgtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDRSxnQkFBQTtBQ0VOO0FERUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtBQ0NKO0FERUU7RUFDRSxnQ0FBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNFTjtBREFJO0VBQ0UsZ0JBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC1mb3JtL2F1dGgtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuICB9XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGNvbG9yOiAjZDJkMmQyO1xuICB9XG4gIFxuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbiAgXG4gIGlvbi1pbnB1dCB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIFxuICAuaW52YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjYxNTM7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBtaW4taGVpZ2h0OiAyLjJyZW07XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbjogMnB4IDA7XG4gICAgICBmb250LXNpemU6IDYwJTtcbiAgICAgIGNvbG9yOiAjZmY2MTUzO1xuICAgIH1cbiAgICAuaXRlbS1pbm5lciB7XG4gICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIH1cbiAgfSIsImZvcm0ge1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuZm9ybSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZDJkMmQyO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5pb24taW5wdXQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjYxNTM7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgbWluLWhlaWdodDogMi4ycmVtO1xufVxuLmVycm9yLW1lc3NhZ2UgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAycHggMDtcbiAgZm9udC1zaXplOiA2MCU7XG4gIGNvbG9yOiAjZmY2MTUzO1xufVxuLmVycm9yLW1lc3NhZ2UgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/auth-form/auth-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/auth-form/auth-form.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormComponent", function() { return AuthFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let AuthFormComponent = class AuthFormComponent {
    constructor(formBuilder, loadingCtrl, alertCtrl) {
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isPasswordResetPage = false;
        this.formSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.authForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]
        });
    }
    ngOnInit() { }
    submitCredentials(authForm) {
        if (!authForm.valid) {
            console.log('Form is not valid yet, current value:', authForm.value);
        }
        else {
            this.showLoading();
            const credentials = {
                email: authForm.value.email,
                password: authForm.value.password
            };
            this.formSubmitted.emit(credentials);
        }
    }
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.loading = yield this.loadingCtrl.create();
                yield this.loading.present();
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    hideLoading() {
        return this.loading.dismiss();
    }
    handleError(error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: error.message,
                buttons: [{ text: 'Ok', role: 'cancel' }]
            });
            yield alert.present();
        });
    }
};
AuthFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AuthFormComponent.prototype, "actionButtonText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AuthFormComponent.prototype, "isPasswordResetPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AuthFormComponent.prototype, "formSubmitted", void 0);
AuthFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-form/auth-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-form.component.scss */ "./src/app/components/auth-form/auth-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], AuthFormComponent);



/***/ }),

/***/ "./src/app/shared-modules/auth.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shared-modules/auth.module.ts ***!
  \***********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/auth-form/auth-form.component */ "./src/app/components/auth-form/auth-form.component.ts");






let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [src_app_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_5__["AuthFormComponent"]],
        exports: [src_app_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_5__["AuthFormComponent"]],
        entryComponents: [src_app_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_5__["AuthFormComponent"]]
    })
], AuthModule);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map