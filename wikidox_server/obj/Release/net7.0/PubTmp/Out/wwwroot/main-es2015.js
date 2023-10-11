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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-settings/admin-settings.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-settings/admin-settings.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\" display: table;  margin-right: auto;  margin-left: auto;\">\r\n\r\n<div style=\"border-width:1px;border-style:solid;padding:15px;\">\r\n<h3>Settings</h3>\r\n<table>\r\n<tr>\r\n    <td><input [(ngModel)]=\"isPublic\" type=\"checkbox\" (change)=\"settingsChanged()\"/></td><td>Public page</td>\r\n</tr>\r\n\r\n</table>\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-users/admin-users.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-users/admin-users.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\" display: table;  margin-right: auto;  margin-left: auto;\">\r\n<div *ngIf=\"showError\">\r\n<div class=\"alert alert-danger\" role=\"alert\">\r\n  Error!\r\n</div>\r\n</div>\r\n<div *ngIf=\"showSuccess\">\r\n<div class=\"alert alert-success\" role=\"alert\">\r\n  Success.\r\n</div>\r\n</div>\r\n<div style=\"border-width:1px;border-style:solid;padding:15px;\">\r\n{{click}}\r\n<h3>User List</h3>\r\n<table>\r\n<tr *ngFor=\"let u of users.users\">\r\n    <td>{{ u.username }}</td>\r\n    <td><a style=\"text-decoration:underline;cursor:pointer;\" (click)=\"clickDelete(u.username)\" ><font size=\"3\">Delete</font></a> | <a style=\"text-decoration:underline;cursor:pointer;\" (click)=\"clickEdit(u.username)\" ><font size=\"3\">Edit</font></a>\r\n    </td>\r\n</tr>\r\n</table>\r\n\r\n<br>\r\n</div>\r\n<div *ngIf=\"showEdit\"  style=\"border-width:1px;border-style:solid;border-top:none;padding:15px;\">\r\n<h5>Edit User</h5>\r\n<form name=\"frm1\">\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleInputPassword1\">Password for user {{newPasswordUsername}}</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\" name=\"newpass\" [(ngModel)]=\"newPassword\"><br>\r\n<input [(ngModel)]=\"canEdit\" type=\"checkbox\" name=\"canedit\"/>Edit<br>\r\n<input [(ngModel)]=\"canCreate\" type=\"checkbox\" name=\"cancreate\"/>Create<br>\r\n<input [(ngModel)]=\"canUpload\" type=\"checkbox\" name=\"canupload\"/>Upload<br>\r\n<input [(ngModel)]=\"isAdmin\" type=\"checkbox\" name=\"isadmin\"/>Admin\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onEditPassword(newPasswordUsername)\">Submit</button>\r\n</form>\r\n\r\n</div>\r\n<div style=\"border-width:1px;border-style:solid;border-top:none;padding:15px;\">\r\n<h3>Add User</h3>\r\n<form name=\"frm\">\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleInputEmail1\">Email address</label>\r\n    <input  [(ngModel)]=\"name\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" name=\"mail\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleInputPassword1\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" name=\"pass\" [(ngModel)]=\"password\">\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onClickNewUser()\">Submit</button>\r\n</form>\r\n\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <!-- Required meta tags -->\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n  <title>RoyalUI Admin</title>\r\n  <!-- plugins:css -->\r\n  <link rel=\"stylesheet\" href=\"assets/vendors/ti-icons/css/themify-icons.css\">\r\n  <link rel=\"stylesheet\" href=\"assets/vendors/base/vendor.bundle.base.css\">\r\n  <!-- endinject -->\r\n  <!-- plugin css for this page -->\r\n  <!-- End plugin css for this page -->\r\n  <!-- inject:css -->\r\n  <link rel=\"stylesheet\" href=\"assets/css/style1.css\">\r\n  <!-- endinject -->\r\n  <link rel=\"shortcut icon\" href=\"assets/images/favicon.png\" />\r\n</head>\r\n<body>\r\n  <div class=\"container-scroller\">\r\n    <!-- partial:partials/_navbar.html -->\r\n    <nav class=\"navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\r\n      <div class=\"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center\">\r\n        <a class=\"navbar-brand brand-logo mr-5\" href=\"index.html\"><img src=\"assets/images/wikidox.png\" class=\"mr-2\" alt=\"logo\"/></a>\r\n        <a class=\"navbar-brand brand-logo-mini\" href=\"index.html\"><img src=\"assets/images/wikidox.png\" alt=\"logo\"/></a>\r\n      </div>\r\n      <div class=\"navbar-menu-wrapper d-flex align-items-center justify-content-end\">\r\n        <button class=\"navbar-toggler navbar-toggler align-self-center\" type=\"button\" data-toggle=\"minimize\">\r\n          <span class=\"ti-view-list\"></span>\r\n        </button>\r\n<ul class=\"navbar-nav navbar-nav-center\">\r\n<li class=\"nav-item mr-1\">\r\nAdministration</li>\r\n</ul>\r\n        <ul class=\"navbar-nav navbar-nav-right\">\r\n          <li class=\"nav-item dropdown mr-1\">\r\n         \r\n      \r\n          <li class=\"nav-item nav-profile dropdown\">\r\n            <a href=\"Logout\" id=\"profileDropdown\">\r\n\t\tLogout\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\r\n          <span class=\"ti-view-list\"></span>\r\n        </button>\r\n      </div>\r\n    </nav>\r\n    <!-- partial -->\r\n    <div class=\"container-fluid page-body-wrapper\">\r\n      <!-- partial:partials/_sidebar.html -->\r\n      <nav class=\"sidebar sidebar-offcanvas\" id=\"sidebar\">\r\n        <ul class=\"nav\">\r\n         \r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"admin/settings\">\r\n              <i class=\"ti-view-list-alt menu-icon\"></i>\r\n              <span class=\"menu-title\">Settings</span>\r\n            </a>\r\n          </li>       \r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"admin/users\" >\r\n              <i class=\"ti-user menu-icon\"></i>\r\n              <span class=\"menu-title\">Users\t</span>\r\n\r\n            </a>\r\n    <!--        <div class=\"collapse\" id=\"auth\">\r\n              <ul class=\"nav flex-column sub-menu\">\r\n                <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/samples/login.html\"> Login </a></li>\r\n                <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/samples/login-2.html\"> Login 2 </a></li>\r\n                <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/samples/register.html\"> Register </a></li>\r\n                <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/samples/register-2.html\"> Register 2 </a></li>\r\n                <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/samples/lock-screen.html\"> Lockscreen </a></li>\r\n              </ul>\r\n            </div>-->\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"documentation\">\r\n              <i class=\"ti-write menu-icon\"></i>\r\n              <span class=\"menu-title\">Documentation</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      <!-- partial -->\r\n      <div class=\"main-panel\">\r\n        <div class=\"content-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 grid-margin\">\r\n              <div class=\"d-flex justify-content-between align-items-center\">\r\n                <div>\r\n                  <h4 class=\"font-weight-bold mb-0\">{{pageTitle}}</h4>\r\n                </div>\r\n                <div>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-icon-text btn-rounded\">\r\n                      <i class=\"ti-clipboard btn-icon-prepend\"></i>Report\r\n                    </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"row\">\r\n\t  \r\n            <div class=\"col-md-12 grid-margin stretch-card\">\r\n              <div class=\"card position-relative\">\r\n                <div class=\"card-body\">\r\n                  <p class=\"card-title\"></p>\r\n                  <div class=\"row\">\r\n\t\t  <div *ngIf=\"mpage=='settings'\" style=\"width:100%\"><app-admin-settings></app-admin-settings></div>\r\n\t\t  <div *ngIf=\"mpage=='users'\" style=\"width:100%\"><app-admin-users></app-admin-users></div>\r\n\t\t  <div *ngIf=\"!mpage\" style=\"width:100%\"><a href=\"admin/users\">User Management</a><br><a href=\"admin/settings\">Page Settings</a></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- content-wrapper ends -->\r\n      </div>\r\n      <!-- main-panel ends -->\r\n    </div>\r\n    <!-- page-body-wrapper ends -->\r\n  </div>\r\n  <!-- container-scroller -->\r\n\r\n  <!-- plugins:js -->\r\n  <script src=\"assets/vendors/base/vendor.bundle.base.js\"></script>\r\n  <!-- endinject -->\r\n  <!-- Plugin js for this page-->\r\n  <script src=\"assets/vendors/chart.js/Chart.min.js\"></script>\r\n  <!-- End plugin js for this page-->\r\n  <!-- inject:js -->\r\n  <script src=\"assets/js/off-canvas.js\"></script>\r\n  <script src=\"assets/js/hoverable-collapse.js\"></script>\r\n  <script src=\"assets/js/template.js\"></script>\r\n  <script src=\"assets/js/todolist.js\"></script>\r\n  <!-- endinject -->\r\n  <!-- Custom js for this page-->\r\n  <script src=\"assets/js/dashboard.js\"></script>\r\n  <!-- End custom js for this page-->\r\n</body>\r\n\r\n</html>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n    <title>Material Design Bootstrap</title>\r\n    <!-- Font Awesome -->\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\">\r\n    <!-- Bootstrap core CSS -->\r\n    <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n    <!-- Material Design Bootstrap -->\r\n    <link href=\"assets/css/mdb.min.css\" rel=\"stylesheet\">\r\n    <!-- Your custom styles (optional) -->\r\n    <link href=\"assets/css/style.min.css\" rel=\"stylesheet\">  \r\n    <style>\r\n  \r\n      .map-container{\r\n  overflow:hidden;\r\n  padding-bottom:56.25%;\r\n  position:relative;\r\n  height:0;\r\n  }\r\n  .map-container iframe{\r\n  left:0;\r\n  top:0;\r\n  height:100%;\r\n  width:100%;\r\n  position:absolute;\r\n  }\r\n    </style>\r\n  </head>\r\n  \r\n  <body class=\"grey lighten-3\">\r\n     \r\n    \r\n   \r\n  \r\n<div class=\"my-overlay\" *ngIf=\"showOverlay\">\n  <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\n</div>\n    <div *ngIf=\"data==true || url=='Install'\"><router-outlet></router-outlet>\r</div>\n    <div *ngIf=\"data==false && url!='Install'\"><app-login></app-login></div>\n    \n\n  </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/install/install.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/install/install.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{content}}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <title>Login V2</title>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<!--===============================================================================================-->\t\r\n    <link rel=\"icon\" type=\"image/png\" href=\"assets/images/icons/favicon.ico\"/>\r\n<!--===============================================================================================-->\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor/bootstrap/css/bootstrap.min.css\">\r\n<!--===============================================================================================-->\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\r\n<!--===============================================================================================-->\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/fonts/iconic/css/material-design-iconic-font.min.css\">\r\n<!--===============================================================================================-->\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor/animate/animate.css\">\r\n<!--===============================================================================================-->\t\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor/css-hamburgers/hamburgers.min.css\">\r\n<!--===============================================================================================-->\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor/animsition/css/animsition.min.css\">\r\n<!--===============================================================================================-->\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor/select2/select2.min.css\">\r\n<!--===============================================================================================-->\t\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor/daterangepicker/daterangepicker.css\">\r\n<!--===============================================================================================-->\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css/util.css\">\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css/main.css\">\r\n<!--===============================================================================================-->\r\n</head>\r\n<body>\r\n    <div class=\"limiter\">\r\n\t<div class=\"container-login100\">\r\n\t    <div class=\"wrap-login100\">\r\n<div *ngIf=\"err\">\r\n<div class=\"alert alert-danger\" role=\"alert\">\r\n  Error!\r\n</div>\r\n</div>\r\n\r\n\t\t<form class=\"login100-form validate-form\">\r\n\t\t    <span class=\"login100-form-title p-b-26\">\r\n\t\t\tWelcome\r\n\t\t    </span>\r\n\r\n\t\t    <div class=\"wrap-input100 validate-input\" data-validate = \"Valid email is: a@b.c\">\r\n\t\t\t<input class=\"input100\" type=\"text\" name=\"email\" [(ngModel)]=\"username\"/>\r\n\t\t\t<span class=\"focus-input100\" data-placeholder=\"Email\"></span>\r\n\t\t    </div>\r\n\r\n\t\t    <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\r\n\t\t\t<span class=\"btn-show-pass\">\r\n\t\t\t    <i class=\"zmdi zmdi-eye\"></i>\r\n\t\t\t</span>\r\n\t\t\t<input class=\"input100\" type=\"password\" name=\"pass\" [(ngModel)]=\"password\"/>\r\n\t\t\t<span class=\"focus-input100\" data-placeholder=\"Password\"></span>\r\n\t\t    </div>\r\n\r\n\t\t    <div class=\"container-login100-form-btn\">\r\n\t\t\t<div class=\"wrap-login100-form-btn\">\r\n\t\t\t    <div class=\"login100-form-bgbtn\"></div>\t\t\t    \r\n\t\t\t    <button (click)=\"onClick($event)\" class=\"login100-form-btn\">\r\n\t\t\t\tLogin\r\n\t\t\t    </button>\r\n\t\t\t</div>\r\n\t\t    </div>\r\n\r\n\t\t    <div class=\"text-center p-t-115\">\r\n\t\t\t<span class=\"txt1\">\r\n\t\t\t    Don’t have an account?\r\n\t\t\t</span>\r\n\r\n\t\t\t<a class=\"txt2\" href=\"#\">\r\n\t\t\t    Sign Up\r\n\t\t\t</a>\r\n\t\t    </div>\r\n\t\t</form>\r\n\t    </div>\r\n\t</div>\r\n    </div>\r\n    \r\n\r\n    <div id=\"dropDownSelect1\"></div>\r\n    \r\n<!--===============================================================================================-->\r\n    <script src=\"assets/vendor/jquery/jquery-3.2.1.min.js\"></script>\r\n<!--===============================================================================================-->\r\n    <script src=\"assets/vendor/animsition/js/animsition.min.js\"></script>\r\n<!--===============================================================================================-->\r\n    <script src=\"assets/vendor/bootstrap/js/popper.js\"></script>\r\n    <script src=\"assets/vendor/bootstrap/js/bootstrap.min.js\"></script>\r\n<!--===============================================================================================-->\r\n    <script src=\"assets/vendor/select2/select2.min.js\"></script>\r\n<!--===============================================================================================-->\r\n    <script src=\"assets/vendor/daterangepicker/moment.min.js\"></script>\r\n    <script src=\"assets/vendor/daterangepicker/daterangepicker.js\"></script>\r\n<!--===============================================================================================-->\r\n    <script src=\"assets/vendor/countdowntime/countdowntime.js\"></script>\r\n<!--===============================================================================================-->\r\n    <script src=\"assets/js/main.js\"></script>\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>logout works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/footer/footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/footer/footer.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n    <title>Material Design Bootstrap</title>\r\n    <!-- Font Awesome -->\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\">\r\n    <!-- Bootstrap core CSS -->\r\n    <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n    <!-- Material Design Bootstrap -->\r\n    <link href=\"assets/css/mdb.min.css\" rel=\"stylesheet\">\r\n    <!-- Your custom styles (optional) -->\r\n    <link href=\"assets/css/style.min.css\" rel=\"stylesheet\">\r\n    <style>\r\n  \r\n      .map-container{\r\n  overflow:hidden;\r\n  padding-bottom:56.25%;\r\n  position:relative;\r\n  height:0;\r\n  }\r\n  .map-container iframe{\r\n  left:0;\r\n  top:0;\r\n  height:100%;\r\n  width:100%;\r\n  position:absolute;\r\n  }\r\n    </style>\r\n  </head>\r\n<body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/header/header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/header/header.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n    <title>Material Design Bootstrap</title>\r\n    <!-- Font Awesome -->\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\">\r\n    <!-- Bootstrap core CSS -->\r\n    <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n    <!-- Material Design Bootstrap -->\r\n    <link href=\"assets/css/mdb.min.css\" rel=\"stylesheet\">\r\n    <!-- Your custom styles (optional) -->\r\n    <link href=\"assets/css/style.min.css\" rel=\"stylesheet\">\r\n    <style>\r\n  \r\n      .map-container{\r\n  overflow:hidden;\r\n  padding-bottom:56.25%;\r\n  position:relative;\r\n  height:0;\r\n  }\r\n  .map-container iframe{\r\n  left:0;\r\n  top:0;\r\n  height:100%;\r\n  width:100%;\r\n  position:absolute;\r\n  }\r\n    </style>\r\n  </head>\r\n  <body>\r\n<!--Main Navigation-->\r\n<header>\r\n\r\n</header>\r\n    <!-- Navbar -->\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/deletemarkup/deletemarkup.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/deletemarkup/deletemarkup.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div *ngIf=\"delete && !error\">\nItem {{url}} successfully deleted.<br>\n    <a href=\"/\">Home</a>\n</div>\n\n<div *ngIf=\"!delete && !error\">\nCaution! Do you really want to delete {{url}}?<br>\n  <a href=\"/delete/{{url}}/delete\">Yes</a> - <a href=\"/{{url}}\">No</a>\n</div>\n\n<div *ngIf=\"delete && error\">\nError: The Node {{url}} has got children.<br>\n  <a href=\"/{{url}}\">Back</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/editmarkup/editmarkup.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/editmarkup/editmarkup.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n    <head></head>\r\n<body>\r\n    \r\n    <ckeditor\r\n    [(ngModel)]=\"ckeditorContent\"\r\n    [config]=\"{uiColor: '#C0C0C0'}\"\r\n    [readonly]=\"false\"\r\n    (change)=\"onChange($event)\"\r\n    (editorChange)=\"onEditorChange($event)\"\r\n    debounce=\"500\">\r\n  </ckeditor><button (click)=\"onClick($event)\">Save</button>\r\n  <br>\r\n  <hr>\r\n\r\n  <a href=\"/view/{{ url }}\"><font color=\"black\">View</font></a>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewdocx/viewdocx.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewdocx/viewdocx.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>viewdocx works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewmarkup/fileview/fileview.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewmarkup/fileview/fileview.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n.inputfile {\r\n}\r\n</style>\r\n<div>\r\n<div style=\"padding-left:15px;height:450px;overflow:hidden;width:100%;overflow: auto;\">\r\n<!--\r\n<ul>\r\n  <li *ngFor=\"let fls of files\">\r\n    <a class=\"link-unstyled\" href=\"https://xn--gnrgy-jua.co/api/files/Download?id={{fls.file.id}}&session={{session}}\"><font size=\"3\">{{ fls.file.fileName }}</font></a>\r\n  </li>\r\n</ul>\r\n<br>\r\n-->\r\n\r\n<table style=\"margin-left:-20px;margin-right:-20px;width:100%;border-right:none;\">\r\n<tr  *ngFor=\"let f of files\" style=\"border-style:solid;border-width:1px;border-left:none;border-right:none;\">\r\n    <td><a style=\"text-decoration:underline;cursor:pointer;\" (click)=\"downloadFile(f.file.id,f.file.fileName)\">{{f.file.fileName}}</a></td>\r\n</tr>\r\n</table>\r\n\r\n\r\n</div>\r\n<div *ngIf=\"uploading\"  style=\"border-top:solid;border-width:1px;margin-left:-15px;margin-right:-15px;margin-bottom:-15px;padding-left:15px;padding-right:15px;\">\r\n  Uploading...\r\n</div>\r\n\r\n\r\n<!-- <div [innerHTML]=\"url1 | safe: 'html'\" style=\"vertical-align:top;top:70%;height:20%;overflow:hidden;bottom:0;padding-left:15px;\"> -->\r\n<div *ngIf=\"!uploading\" style=\"border-top:solid;border-width:1px;margin-left:-15px;margin-right:-15px;margin-bottom:-15px;padding-left:15px;padding-right:15px;\">\r\nUpload:<br>\r\n<div class=\"input-group\">\r\n  <div class=\"input-group-prepend\">\r\n<!--    <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>-->\r\n  </div>\r\n  <div class=\"custom-file\">\r\n    <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\"\r\n      aria-describedby=\"inputGroupFileAddon01\">\r\n    <label class=\"custom-file-label\" for=\"inputGroupFile01\"></label>\r\n  </div>\r\n</div>\r\n</div>\r\n<!--\r\n<div class=\"form-group\">\r\n  <span>Choose file</span>\r\n  <input type=\"file\" class=\"file\">\r\n</div>\r\n-->\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewmarkup/viewmarkup.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewmarkup/viewmarkup.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism.min.css\" rel=\"stylesheet\" />\r\n</head>\r\n<body>\r\n<div style=\"width: 100%; height: 600px;\">\r\n    <div style=\"width: 80%; height:100%;float: left;border-style:solid;border-right:none;border-width:1px;padding:15px;\">  <ngx-md [data]=\"content\"></ngx-md> </div>\r\n    <div style=\"height:100%;border-style:solid;padding:15px;padding-left:15px;border-width:1px;text-align:center;overflow:hidden;\"><h4 style=\"text-decoration:underline;\">Attached Files</h4><br /><app-fileview [url]=\"url\"></app-fileview></div>\r\n  </div>\r\n\r\n<br>\r\n\r\n  <hr>\r\n  <a href=\"/edit/{{ url }}/edit\"><font color=\"black\">Edit/New</font></a> | <a href=\"/delete/{{ url }}/askdelete\"><font color=\"black\">Delete</font></a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewodx/viewodx.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewodx/viewodx.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>viewodx works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewpdf/viewpdf.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewpdf/viewpdf.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>viewpdf works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/attachments/attachments.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/attachments/attachments.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>attachments works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/mainarea.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/mainarea.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n    <title>Material Design Bootstrap</title>\r\n    <!-- Font Awesome -->\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\">\r\n    <!-- Bootstrap core CSS -->\r\n    <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n    <!-- Material Design Bootstrap -->\r\n    <link href=\"assets/css/mdb.min.css\" rel=\"stylesheet\">\r\n    <!-- Your custom styles (optional) -->\r\n    <link href=\"assets/css/style.min.css\" rel=\"stylesheet\">\r\n    <style>\r\n  \r\n      .map-container{\r\n  overflow:hidden;\r\n  padding-bottom:56.25%;\r\n  position:relative;\r\n  height:0;\r\n  }\r\n  .map-container iframe{\r\n  left:0;\r\n  top:0;\r\n  height:100%;\r\n  width:100%;\r\n  position:absolute;\r\n  }\r\n    </style>\r\n  </head>\r\n<body>\r\n<!--Main layout-->\r\n<main class=\"pt-5 mx-lg-5\" style=\"margin-top:-100px;top:-100px;\">\r\n\r\n\r\n    \r\n\r\n\r\n    <div class=\"container-fluid mt-5\" style=\"top:-100px;margin-top:-100px;\">\r\n    <app-treeheader [url]=\"url\"></app-treeheader>     \r\n \r\n      <!--Grid row-->\r\n      <div class=\"row wow fadeIn\">\r\n\r\n        <!--Grid column-->\r\n        <div class=\"col\">\r\n\r\n          <!--Card-->\r\n          <div class=\"card\">\r\n\r\n            <!--Card content-->\r\n            <div class=\"card-body\">\r\n                    <div *ngIf=\"doNotEdit; else doedit\">\r\n                            <app-viewmarkup [url]=\"url\"></app-viewmarkup>\r\n                    </div>\r\n                          \r\n                    <ng-template #doedit>\r\n                            <app-editmarkup [url]=\"url\"></app-editmarkup>\r\n                    </ng-template>                                        \r\n            </div>\r\n\r\n          </div>\r\n          <!--/.Card-->\r\n\r\n        </div>\r\n        <!--Grid column-->\r\n</div>\r\n</div>\r\n\r\n     \r\n\r\n        \r\n\r\n  \r\n          \r\n          <!--/.Card-->\r\n\r\n        \r\n        <!--Grid column-->\r\n\r\n      <!--Grid row-->\r\n\r\n      <!--Grid row-->\r\n      <!--Grid row-->\r\n</main>\r\n</body>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/treeheader/treeheader.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/treeheader/treeheader.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n    <title>Material Design Bootstrap</title>\r\n    <!-- Font Awesome -->\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\">\r\n    <!-- Bootstrap core CSS -->\r\n    <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n    <!-- Material Design Bootstrap -->\r\n    <link href=\"assets/css/mdb.min.css\" rel=\"stylesheet\">\r\n    <!-- Your custom styles (optional) -->\r\n    <link href=\"assets/css/style.min.css\" rel=\"stylesheet\">\r\n    <style>\r\n\r\n      .map-container{\r\n  overflow:hidden;\r\n  padding-bottom:56.25%;\r\n  position:relative;\r\n  height:0;\r\n  }\r\n  .map-container iframe{\r\n  left:0;\r\n  top:0;\r\n  height:100%;\r\n  width:100%;\r\n  position:absolute;\r\n  }\r\n    </style>\r\n  </head>\r\n<body>\r\n<!-- Heading -->\r\n<div class=\"card mb-4 wow fadeIn\">\r\n    <!--Card content-->\r\n    <div class=\"card-body d-sm-flex justify-content-between\">\r\n      <form class=\"d-flex justify-content-left\">\r\n        <!-- Default input -->\r\n        <input id=\"srch\" type=\"search\" onkeypress=\"if(event.keyCode==13)document.location.href='/'+getElementById('srch').value;\" placeholder=\"Category1:Category2:Page\" aria-label=\"Search\" class=\"form-control\" style=\"width:400px;\">\r\n        <button class=\"btn btn-primary btn-sm my-0 p\" type=\"button\" onclick=\"document.location.href=getElementById('srch').value;\">\r\n          <i class=\"fas fa-arrow-right\"></i>\r\n        </button>\r\n <a href=\"search\">Search</a>\r\n\r\n\r\n      </form>\r\n<div class=\"d-flex justify-content-right\">\r\n<a href=\"admin\">Admin</a> | <a href=\"Logout\">Logout</a>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- Heading -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/sidebar/sidebar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/sidebar/sidebar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n    <title>Material Design Bootstrap</title>\r\n    <!-- Font Awesome -->\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\">\r\n    <!-- Bootstrap core CSS -->\r\n    <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n    <!-- Material Design Bootstrap -->\r\n    <link href=\"assets/css/mdb.min.css\" rel=\"stylesheet\">\r\n    <!-- Your custom styles (optional) -->\r\n    <link href=\"assets/css/style.min.css\" rel=\"stylesheet\">\r\n    <script src=\"./assets/tree.jquery.js\"></script>\r\n    <style>\r\n\r\n      .map-container{\r\n  overflow:hidden;\r\n  padding-bottom:56.25%;\r\n  position:relative;\r\n  height:0;\r\n  }\r\n  .map-container iframe{\r\n  left:0;\r\n  top:0;\r\n  height:100%;\r\n  width:100%;\r\n  position:absolute;\r\n  }\r\n    </style>\r\n  </head>\r\n<body>\r\n\r\n        <input id=\"callback\" type=\"text\" (htmlChange)=\"this.html= $event\" />\r\n\r\n        <div style=\"left:0px;top:0px;\" class=\"sidebar-fixed position-fixed\">\r\n          <div style=\"height:30px;\"></div>\r\n          <div style=\"height:75px; text-align:center;\"><a href=\"/\"><img style=\"width:185px;\" src=\"assets/wikidox.png\" /></a></div>\r\n          <div  id=\"tree1\" data-url=\"https://xn--gnrgy-jua.co/api/markdownpage/GetNodes\"></div>\r\n          <div  [innerHTML]=\"html\">{{html}}</div>\r\n        </div>\r\n\r\n          <!-- Sidebar -->\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/redir/redir.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redir/redir.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>redir works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\r\n<app-mainarea [url]=\"url\"></app-mainarea>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div style=\" display: table;  margin-right: auto;  margin-left: auto;\">\r\n\r\n<div style=\"width:100%;\">\r\n<form name=\"frm1\">\r\n  <div class=\"form-group\">\r\n<h4>Search</h4><br>\r\n    <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Search\" name=\"searchfield\" [(ngModel)]=\"search\"> <input [(ngModel)]=\"searchPages\" type=\"checkbox\" name=\"pages\"/>Search Pages | <input [(ngModel)]=\"searchFiles\" type=\"checkbox\" name=\"files\"/>Search Files\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSearch()\">Submit</button>\r\n</form>\r\n</div>\r\n\r\n</div>\r\n<div style=\"width:100%;background-color:white;\">\r\n<div style=\"width:100%;margin-left:100px;margin-right:100px;background-color:white;padding-top:50px;\">\r\nPages:<br>\r\n\r\n<table>\r\n<tr *ngFor=\"let p of searchResult.pages\">\r\n    <td><a style=\"text-decoration:underline;cursor:pointer;\" href=\"/{{p.url}}\">{{p.url}}</a></td><br>\r\n</tr>\r\n</table>\r\n<br><br>\r\nFiles:<br>\r\n<table>\r\n<tr *ngFor=\"let f of searchResult.files\">\r\n    <td><a style=\"text-decoration:underline;cursor:pointer;\" (click)=\"downloadFile(f.id,f.filename)\">{{f.filename}}</a></td>\r\n</tr>\r\n</table>\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin-settings/admin-settings.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-settings/admin-settings.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXNldHRpbmdzL2FkbWluLXNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin-settings/admin-settings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-settings/admin-settings.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettingsComponent", function() { return AdminSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminSettingsComponent = class AdminSettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-settings/admin-settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-settings.component.css */ "./src/app/admin/admin-settings/admin-settings.component.css")).default]
    })
], AdminSettingsComponent);



/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJzL2FkbWluLXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.ts ***!
  \************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");



let AdminUsersComponent = class AdminUsersComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.showEdit = false;
        this.showSuccess = false;
        this.showError = false;
        apiService.getUsers().subscribe((data1) => {
            this.users = JSON.parse(data1.toString());
        });
    }
    onClickNewUser() {
        this.apiService.addUser(this.name, this.password).subscribe(data => {
            this.apiService.getUsers().subscribe(data2 => {
            });
        }, err => { this.showSuccess = false; this.showError = true; });
    }
    clickEdit(event) {
        this.showEdit = true;
        this.newPasswordUsername = event;
        this.apiService.getUserAcl(event).subscribe(data2 => {
            this.authCurrUser = JSON.parse(data2.toString());
            this.isAdmin = this.authCurrUser.isAdmin == 1 ? true : false;
            this.canCreate = this.authCurrUser.canCreate == 1 ? true : false;
            this.canEdit = this.authCurrUser.canEdit == 1 ? true : false;
            this.canUpload = this.authCurrUser.canUpload == 1 ? true : false;
        });
    }
    onEditPassword(newPasswordUsername) {
        this.apiService.editUser(newPasswordUsername, this.newPassword, this.canCreate, this.canEdit, this.canUpload, this.isAdmin).subscribe(data1 => {
            this.showSuccess = true;
            this.showError = false;
        }, err => { this.showSuccess = false; this.showError = true; });
    }
    clickDelete(event) {
        this.apiService.deleteUser(event).subscribe((data1) => {
            this.showSuccess = true;
            this.showError = false;
            this.apiService.getUsers().subscribe(data2 => {
                this.users = JSON.parse(data2.toString());
            });
        }, err => { this.showSuccess = false; this.showError = true; });
    }
    ngOnInit() {
    }
};
AdminUsersComponent.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
AdminUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-users/admin-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-users.component.css */ "./src/app/admin/admin-users/admin-users.component.css")).default]
    })
], AdminUsersComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AdminComponent = class AdminComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.mpage = "";
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.mpage = params.get("mpage");
        });
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AdminComponent.prototype, "mpage", void 0);
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _dto_user_data_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dto/user-data-dto */ "./src/app/dto/user-data-dto.ts");
/* harmony import */ var _dto_session_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dto/session-dto */ "./src/app/dto/session-dto.ts");
/* harmony import */ var _dto_id_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dto/id-dto */ "./src/app/dto/id-dto.ts");
/* harmony import */ var _dto_page_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dto/page-dto */ "./src/app/dto/page-dto.ts");
/* harmony import */ var _dto_file_query_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dto/file-query-dto */ "./src/app/dto/file-query-dto.ts");
/* harmony import */ var _config_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config-service.service */ "./src/app/config-service.service.ts");










let ApiService = class ApiService {
    constructor(httpClient, cookieService, configService) {
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.configService = configService;
        this.url = "";
        this.headers = { "Content-Type": "application/json" };
        this.options = { headers: this.headers, responseType: 'text' };
    }
    ngOnInit() {
        this.API_KEY = this.cookieService.get("sessionID");
        //   this.cookieService.set("sessionID",this.API_KEY,1/48);
        //  this.API_KEY=this.cookieService.get("session");
    }
    getNews(url) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_page_dto__WEBPACK_IMPORTED_MODULE_7__["PageDto"](this.API_KEY, url, "");
        return this.httpClient.post(this.configService.baseUrl + "markdownpage/GetMarkupPage", d, { headers: this.headers, responseType: 'text' });
    }
    saveMarkup(url, text) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_page_dto__WEBPACK_IMPORTED_MODULE_7__["PageDto"](this.API_KEY, url, text);
        return this.httpClient.post(this.configService.baseUrl + "markdownpage/SaveMarkupPage", d, { headers: this.headers, responseType: 'text' });
    }
    getPathById(id) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_id_dto__WEBPACK_IMPORTED_MODULE_6__["IdDto"](this.API_KEY, id);
        return this.httpClient.post(this.configService.baseUrl + "markdownpage/GetPathById", d, { headers: this.headers, responseType: 'text' });
    }
    getIdByPath(url) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_page_dto__WEBPACK_IMPORTED_MODULE_7__["PageDto"](this.API_KEY, url, "");
        return this.httpClient.post(this.configService.baseUrl + "markdownpage/GetIdByPath", d, { headers: this.headers, responseType: 'text' });
    }
    getFiles(idNode) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_id_dto__WEBPACK_IMPORTED_MODULE_6__["IdDto"](this.API_KEY, idNode);
        return this.httpClient.post(this.configService.baseUrl + "files/GetFiles", d, { headers: this.headers, responseType: 'text' });
    }
    login(username, password) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_user_data_dto__WEBPACK_IMPORTED_MODULE_4__["UserDataDto"]("", username, password);
        return this.httpClient.post(this.configService.baseUrl + "session/Login", d, { headers: this.headers, responseType: 'text' });
    }
    deleteNode(url) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_page_dto__WEBPACK_IMPORTED_MODULE_7__["PageDto"](this.API_KEY, url, "");
        return this.httpClient.post(this.configService.baseUrl + "markdownpage/DeletePage", d, { headers: this.headers, responseType: 'text' });
    }
    addUser(username, password) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_user_data_dto__WEBPACK_IMPORTED_MODULE_4__["UserDataDto"](this.API_KEY, username, password);
        return this.httpClient.post(this.configService.baseUrl + "users/AddUser", d, { headers: this.headers, responseType: 'text' });
    }
    editUser(username, password, canCreate, canEdit, canUpload, isAdmin) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_user_data_dto__WEBPACK_IMPORTED_MODULE_4__["UserDataDto"](this.API_KEY, username, password, canCreate, canEdit, canUpload, isAdmin);
        return this.httpClient.post("this.configService.baseUrl+users/EditUser", d, { headers: this.headers, responseType: 'text' });
    }
    deleteUser(username) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_user_data_dto__WEBPACK_IMPORTED_MODULE_4__["UserDataDto"](this.API_KEY, username, "");
        return this.httpClient.post(this.configService.baseUrl + "users/DeleteUser", d, { headers: this.headers, responseType: 'text' });
    }
    getTree() {
        this.API_KEY = this.cookieService.get("sessionID");
        let mheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.httpClient.get(this.configService.baseUrl + `markdownpage/GetNodes?session=` + this.API_KEY, { headers: mheaders });
    }
    checkAuth() {
        console.log("SEF");
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_session_dto__WEBPACK_IMPORTED_MODULE_5__["SessionDto"](this.API_KEY);
        return this.httpClient.post(this.configService.baseUrl + "session/GetAuth", d, { headers: this.headers, responseType: 'text' });
    }
    getUsers() {
        console.log("SEF");
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_session_dto__WEBPACK_IMPORTED_MODULE_5__["SessionDto"](this.API_KEY);
        return this.httpClient.post(this.configService.baseUrl + "users/GetUserList", d, { headers: this.headers, responseType: 'text' });
    }
    logout() {
        console.log("SEF");
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_session_dto__WEBPACK_IMPORTED_MODULE_5__["SessionDto"](this.API_KEY);
        return this.httpClient.post(this.configService.baseUrl + "session/Logout", d, { headers: this.headers, responseType: 'text' });
    }
    getUserAcl(username) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_user_data_dto__WEBPACK_IMPORTED_MODULE_4__["UserDataDto"](this.API_KEY, username, "");
        return this.httpClient.post(this.configService.baseUrl + "users/GetUserACL", d, { headers: this.headers, responseType: 'text' });
    }
    search(query, searchPages, searchFiles) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_file_query_dto__WEBPACK_IMPORTED_MODULE_8__["FileQueryDto"](this.API_KEY, searchFiles, searchPages, query);
        return this.httpClient.post(this.configService.baseUrl + "search/Search", d, { headers: this.headers, responseType: 'text' });
    }
    downloadFile(idFile) {
        this.API_KEY = this.cookieService.get("sessionID");
        let d = new _dto_id_dto__WEBPACK_IMPORTED_MODULE_6__["IdDto"](this.API_KEY, idFile);
        return this.httpClient.post(this.configService.baseUrl + "files/Download", d, { headers: this.headers, responseType: 'blob' });
    }
    uploadFile(formData) {
        let headers1 = { "Content-Type": "application/x-www-form-urlencoded" };
        return this.httpClient.post(this.configService.baseUrl + "files/Upload", formData); //, { headers:this.headers, responseType:'text' });//, { headers:headers, responseType:'text' });
    }
    install() {
        return this.httpClient.get(this.configService.baseUrl + "install/Install", { headers: this.headers, responseType: 'text' });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _config_service_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApiService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _main_mainarea_Views_deletemarkup_deletemarkup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/mainarea/Views/deletemarkup/deletemarkup.component */ "./src/app/main/mainarea/Views/deletemarkup/deletemarkup.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _redir_redir_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redir/redir.component */ "./src/app/redir/redir.component.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/routing/routing.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");









const routes = [
    {
        path: '',
        component: _routing_routing_component__WEBPACK_IMPORTED_MODULE_5__["RoutingComponent"]
    },
    { path: 'admin/:mpage', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"] },
    { path: 'Logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"] },
    {
        path: 'redir/:mid', component: _redir_redir_component__WEBPACK_IMPORTED_MODULE_4__["RedirComponent"]
    },
    { path: ':url', component: _routing_routing_component__WEBPACK_IMPORTED_MODULE_5__["RoutingComponent"] },
    { path: 'edit/:url/:action', component: _routing_routing_component__WEBPACK_IMPORTED_MODULE_5__["RoutingComponent"] },
    { path: 'delete/:url/:action', component: _main_mainarea_Views_deletemarkup_deletemarkup_component__WEBPACK_IMPORTED_MODULE_1__["DeletemarkupComponent"] },
    { path: 'view/:url', component: _routing_routing_component__WEBPACK_IMPORTED_MODULE_5__["RoutingComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");






let AppComponent = class AppComponent {
    constructor(route, apiService, router, cookieService) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        this.cookieService = cookieService;
        this.title = 'docuwiki';
        this.data = null;
    }
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            this.showOverlay = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            this.showOverlay = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
            this.showOverlay = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
            this.showOverlay = false;
        }
    }
    ngOnInit() {
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RoutesRecognized"]) {
                this.url = val.state.root.firstChild.params["url"];
            }
            //      this.url = params.get("url");
            /*
                let API_KEY=this.cookieService.get("sessionID");
                if(API_KEY.length>0)
                this.data=true;
                else
                this.data=false;*/
            if (this.url != "Install") {
                this.apiService.checkAuth().subscribe(data => {
                    console.log("DATA:" + data);
                    this.blubb = data;
                    if (data.toString().length > 0) {
                        //this.cookieService.set("sessionID",JSON.parse(data.toString()).session);
                        this.data = true;
                    }
                    else {
                        this.data = false;
                    }
                }, err => { this.data = false; });
            }
            else {
                this.data = true;
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AppComponent.prototype, "url", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AppComponent.prototype, "mpage", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-service.service */ "./src/app/config-service.service.ts");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/header/header.component */ "./src/app/main/header/header.component.ts");
/* harmony import */ var _main_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/sidebar/sidebar.component */ "./src/app/main/sidebar/sidebar.component.ts");
/* harmony import */ var _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/footer/footer.component */ "./src/app/main/footer/footer.component.ts");
/* harmony import */ var _main_mainarea_mainarea_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/mainarea/mainarea.component */ "./src/app/main/mainarea/mainarea.component.ts");
/* harmony import */ var _main_mainarea_treeheader_treeheader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/mainarea/treeheader/treeheader.component */ "./src/app/main/mainarea/treeheader/treeheader.component.ts");
/* harmony import */ var _main_mainarea_Views_viewmarkup_viewmarkup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/mainarea/Views/viewmarkup/viewmarkup.component */ "./src/app/main/mainarea/Views/viewmarkup/viewmarkup.component.ts");
/* harmony import */ var _main_mainarea_attachments_attachments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/mainarea/attachments/attachments.component */ "./src/app/main/mainarea/attachments/attachments.component.ts");
/* harmony import */ var _main_mainarea_Views_viewpdf_viewpdf_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/mainarea/Views/viewpdf/viewpdf.component */ "./src/app/main/mainarea/Views/viewpdf/viewpdf.component.ts");
/* harmony import */ var _main_mainarea_Views_viewdocx_viewdocx_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/mainarea/Views/viewdocx/viewdocx.component */ "./src/app/main/mainarea/Views/viewdocx/viewdocx.component.ts");
/* harmony import */ var _main_mainarea_Views_viewodx_viewodx_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/mainarea/Views/viewodx/viewodx.component */ "./src/app/main/mainarea/Views/viewodx/viewodx.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-md */ "./node_modules/ngx-md/fesm2015/ngx-md.js");
/* harmony import */ var _main_mainarea_Views_editmarkup_editmarkup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main/mainarea/Views/editmarkup/editmarkup.component */ "./src/app/main/mainarea/Views/editmarkup/editmarkup.component.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_tree__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-tree */ "./node_modules/ng2-tree/index.js");
/* harmony import */ var ng2_tree__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ng2_tree__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_jqwidgets_ts_angular_jqxtree__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/jqwidgets-ts/angular_jqxtree */ "./src/assets/jqwidgets-ts/angular_jqxtree.ts");
/* harmony import */ var _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sanitize-html.pipe */ "./src/app/sanitize-html.pipe.ts");
/* harmony import */ var _redir_redir_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./redir/redir.component */ "./src/app/redir/redir.component.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/routing/routing.component.ts");
/* harmony import */ var _main_mainarea_Views_viewmarkup_fileview_fileview_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./main/mainarea/Views/viewmarkup/fileview/fileview.component */ "./src/app/main/mainarea/Views/viewmarkup/fileview/fileview.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _install_install_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./install/install.component */ "./src/app/install/install.component.ts");
/* harmony import */ var _admin_admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/admin-settings/admin-settings.component */ "./src/app/admin/admin-settings/admin-settings.component.ts");
/* harmony import */ var _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/admin-users/admin-users.component */ "./src/app/admin/admin-users/admin-users.component.ts");
/* harmony import */ var _main_mainarea_Views_deletemarkup_deletemarkup_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./main/mainarea/Views/deletemarkup/deletemarkup.component */ "./src/app/main/mainarea/Views/deletemarkup/deletemarkup.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");











































function load(http, config) {
    return () => {
        return new Promise((resolve) => {
            http.get('./assets/config.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((x) => {
                config.baseUrl = x.baseUrl;
                resolve(true);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((x, caught) => {
                if (x.status !== 404) {
                    resolve(false);
                }
                config.baseUrl = 'http://localhost:5000/api';
                resolve(true);
                return Object(_node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
            })).subscribe();
        });
    };
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _main_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _main_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
            _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _main_mainarea_mainarea_component__WEBPACK_IMPORTED_MODULE_12__["MainareaComponent"],
            _main_mainarea_treeheader_treeheader_component__WEBPACK_IMPORTED_MODULE_13__["TreeheaderComponent"],
            _main_mainarea_Views_viewmarkup_viewmarkup_component__WEBPACK_IMPORTED_MODULE_14__["ViewmarkupComponent"],
            _main_mainarea_attachments_attachments_component__WEBPACK_IMPORTED_MODULE_15__["AttachmentsComponent"],
            _main_mainarea_Views_viewpdf_viewpdf_component__WEBPACK_IMPORTED_MODULE_16__["ViewpdfComponent"],
            _main_mainarea_Views_viewdocx_viewdocx_component__WEBPACK_IMPORTED_MODULE_17__["ViewdocxComponent"],
            _main_mainarea_Views_viewodx_viewodx_component__WEBPACK_IMPORTED_MODULE_18__["ViewodxComponent"],
            _main_mainarea_Views_editmarkup_editmarkup_component__WEBPACK_IMPORTED_MODULE_23__["EditmarkupComponent"],
            _assets_jqwidgets_ts_angular_jqxtree__WEBPACK_IMPORTED_MODULE_27__["jqxTreeComponent"],
            _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_28__["SanitizeHtmlPipe"],
            _redir_redir_component__WEBPACK_IMPORTED_MODULE_29__["RedirComponent"],
            _routing_routing_component__WEBPACK_IMPORTED_MODULE_30__["RoutingComponent"],
            _main_mainarea_Views_viewmarkup_fileview_fileview_component__WEBPACK_IMPORTED_MODULE_31__["FileviewComponent"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_32__["SafePipe"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_35__["AdminComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_34__["LogoutComponent"],
            _admin_admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_37__["AdminSettingsComponent"],
            _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_38__["AdminUsersComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_40__["SearchComponent"],
            _install_install_component__WEBPACK_IMPORTED_MODULE_36__["InstallComponent"],
            _main_mainarea_Views_deletemarkup_deletemarkup_component__WEBPACK_IMPORTED_MODULE_39__["DeletemarkupComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"],
            ngx_md__WEBPACK_IMPORTED_MODULE_22__["NgxMdModule"].forRoot(),
            ng2_ckeditor__WEBPACK_IMPORTED_MODULE_24__["CKEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
            ng2_tree__WEBPACK_IMPORTED_MODULE_26__["TreeModule"],
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__["CookieService"], _api_service__WEBPACK_IMPORTED_MODULE_20__["ApiService"], {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                useFactory: load,
                deps: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                    _config_service_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
                ],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/config-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/config-service.service.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfigService = class ConfigService {
    constructor() { }
};
ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConfigService);



/***/ }),

/***/ "./src/app/dto/file-query-dto.ts":
/*!***************************************!*\
  !*** ./src/app/dto/file-query-dto.ts ***!
  \***************************************/
/*! exports provided: FileQueryDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileQueryDto", function() { return FileQueryDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FileQueryDto {
    constructor(session, searchFiles, searchPages, query) {
        this.searchFiles = false;
        this.searchPages = false;
        this.query = "";
        this.session = "";
        this.session = session;
        this.searchFiles = searchFiles;
        this.searchPages = searchPages;
        this.query = query;
    }
    ;
}


/***/ }),

/***/ "./src/app/dto/id-dto.ts":
/*!*******************************!*\
  !*** ./src/app/dto/id-dto.ts ***!
  \*******************************/
/*! exports provided: IdDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdDto", function() { return IdDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class IdDto {
    constructor(session, id) {
        this.session = "";
        this.id = 0;
        this.session = session;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/dto/page-dto.ts":
/*!*********************************!*\
  !*** ./src/app/dto/page-dto.ts ***!
  \*********************************/
/*! exports provided: PageDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDto", function() { return PageDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PageDto {
    constructor(session, url, text) {
        this.session = "";
        this.url = "";
        this.text = "";
        this.session = session;
        this.url = url;
        this.text = text;
    }
}


/***/ }),

/***/ "./src/app/dto/session-dto.ts":
/*!************************************!*\
  !*** ./src/app/dto/session-dto.ts ***!
  \************************************/
/*! exports provided: SessionDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDto", function() { return SessionDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SessionDto {
    constructor(session) {
        this.session = "";
        this.session = session;
    }
}


/***/ }),

/***/ "./src/app/dto/user-data-dto.ts":
/*!**************************************!*\
  !*** ./src/app/dto/user-data-dto.ts ***!
  \**************************************/
/*! exports provided: UserDataDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataDto", function() { return UserDataDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserDataDto {
    constructor(session, username, password, canCreate = false, canEdit = false, canUpload = false, isAdmin = false) {
        this.session = "";
        this.username = "";
        this.password = "";
        this.canEdit = 0;
        this.canCreate = 0;
        this.canUpload = 0;
        this.isAdmin = 0;
        this.session = session;
        this.username = username;
        this.password = password;
        this.canEdit = canEdit ? 1 : 0;
        this.canCreate = canCreate ? 1 : 0;
        this.canUpload = canUpload ? 1 : 0;
        this.isAdmin = isAdmin ? 1 : 0;
    }
}


/***/ }),

/***/ "./src/app/install/install.component.css":
/*!***********************************************!*\
  !*** ./src/app/install/install.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RhbGwvaW5zdGFsbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/install/install.component.ts":
/*!**********************************************!*\
  !*** ./src/app/install/install.component.ts ***!
  \**********************************************/
/*! exports provided: InstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallComponent", function() { return InstallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");



let InstallComponent = class InstallComponent {
    constructor(apiService) {
        this.apiService = apiService;
        apiService.install().subscribe(data => {
            this.content = data.toString();
        }, err => { this.content = "Unknown Error. Allready installed?"; });
    }
    ngOnInit() {
    }
};
InstallComponent.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
InstallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-install',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./install.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/install/install.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./install.component.css */ "./src/app/install/install.component.css")).default]
    })
], InstallComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");





let LoginComponent = class LoginComponent {
    constructor(route, apiService, router, cookieService) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        this.cookieService = cookieService;
        this.username = "";
        this.password = "";
        this.err = false;
    }
    onClick($event) {
        this.apiService.login(this.username, this.password).subscribe((res) => { this.cookieService.set("sessionID", res.toString(), 1 / 48, '/', "", false, 'Lax'); this.err = false; window.location.reload(); }, (err) => { this.err = true; });
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoginComponent.prototype, "username", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoginComponent.prototype, "password", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let LogoutComponent = class LogoutComponent {
    constructor(apiService, cookieService) {
        this.apiService = apiService;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        this.apiService.logout().toPromise().then((data) => {
            this.cookieService.delete("sessionID");
            location.href = "/";
        });
    }
};
LogoutComponent.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")).default]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/main/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/footer/footer.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/main/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/main/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/header/header.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/main/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/main/mainarea/Views/deletemarkup/deletemarkup.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/main/mainarea/Views/deletemarkup/deletemarkup.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbmFyZWEvVmlld3MvZGVsZXRlbWFya3VwL2RlbGV0ZW1hcmt1cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/mainarea/Views/deletemarkup/deletemarkup.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/mainarea/Views/deletemarkup/deletemarkup.component.ts ***!
  \****************************************************************************/
/*! exports provided: DeletemarkupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletemarkupComponent", function() { return DeletemarkupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");




let DeletemarkupComponent = class DeletemarkupComponent {
    constructor(route, router, apiService) {
        this.route = route;
        this.router = router;
        this.apiService = apiService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.url = params.get("url");
            this.action = params.get("action");
            if (this.action == "delete") {
                this.apiService.deleteNode(this.url).subscribe((data) => {
                    this.error = data.toString() == "HASCHILDREN" ? true : false;
                });
                this.delete = true;
            }
            else {
                this.delete = false;
            }
        });
    }
};
DeletemarkupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DeletemarkupComponent.prototype, "url", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DeletemarkupComponent.prototype, "action", void 0);
DeletemarkupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deletemarkup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deletemarkup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/deletemarkup/deletemarkup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deletemarkup.component.css */ "./src/app/main/mainarea/Views/deletemarkup/deletemarkup.component.css")).default]
    })
], DeletemarkupComponent);



/***/ }),

/***/ "./src/app/main/mainarea/Views/editmarkup/editmarkup.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/main/mainarea/Views/editmarkup/editmarkup.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbmFyZWEvVmlld3MvZWRpdG1hcmt1cC9lZGl0bWFya3VwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/main/mainarea/Views/editmarkup/editmarkup.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/mainarea/Views/editmarkup/editmarkup.component.ts ***!
  \************************************************************************/
/*! exports provided: EditmarkupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmarkupComponent", function() { return EditmarkupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");




let EditmarkupComponent = class EditmarkupComponent {
    constructor(route, apiService, router) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        this.url = "";
    }
    ngOnInit() {
        this.apiService.getNews(this.url).subscribe((data) => {
            this.ckeditorContent = data.toString();
        });
        console.log("BEFORE");
        console.log("URL: " + this.url);
        this.router.events.subscribe(val => {
            console.log("SUBSCRIBE");
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]) {
                this.url = val.state.root.firstChild.params["url"];
                console.log("URL:" + this.url);
            }
            else
                console.log("ERR");
        }, error => { console.log("ERROR SUBSCRIBE:" + error.html); });
    }
    onClick($event) {
        this.apiService.saveMarkup(this.url, this.ckeditorContent).subscribe((data) => {
            console.log(data.toString());
        });
    }
    onEditorChange($event) {
    }
    onChange($event) {
    }
};
EditmarkupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditmarkupComponent.prototype, "ckeditorContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditmarkupComponent.prototype, "url", void 0);
EditmarkupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editmarkup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editmarkup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/editmarkup/editmarkup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editmarkup.component.css */ "./src/app/main/mainarea/Views/editmarkup/editmarkup.component.css")).default]
    })
], EditmarkupComponent);



/***/ }),

/***/ "./src/app/main/mainarea/Views/viewdocx/viewdocx.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main/mainarea/Views/viewdocx/viewdocx.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbmFyZWEvVmlld3Mvdmlld2RvY3gvdmlld2RvY3guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/main/mainarea/Views/viewdocx/viewdocx.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/mainarea/Views/viewdocx/viewdocx.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewdocxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdocxComponent", function() { return ViewdocxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewdocxComponent = class ViewdocxComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewdocxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewdocx',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewdocx.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewdocx/viewdocx.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewdocx.component.css */ "./src/app/main/mainarea/Views/viewdocx/viewdocx.component.css")).default]
    })
], ViewdocxComponent);



/***/ }),

/***/ "./src/app/main/mainarea/Views/viewmarkup/fileview/fileview.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/main/mainarea/Views/viewmarkup/fileview/fileview.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluYXJlYS9WaWV3cy92aWV3bWFya3VwL2ZpbGV2aWV3L2ZpbGV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluYXJlYS9WaWV3cy92aWV3bWFya3VwL2ZpbGV2aWV3L2ZpbGV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWZpbGUtdXBsb2FkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/mainarea/Views/viewmarkup/fileview/fileview.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/mainarea/Views/viewmarkup/fileview/fileview.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FileviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileviewComponent", function() { return FileviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let FileviewComponent = class FileviewComponent {
    constructor(_router, _renderer2, _document, apiService, cookieService, host) {
        this._router = _router;
        this._renderer2 = _renderer2;
        this._document = _document;
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.host = host;
        this.uploading = false;
        this.uploadDone = false;
        this.file = null;
        this.session = cookieService.get("sessionID");
        //    this.router.navigate(['/view/'+this.murl]);
    }
    ngOnInit() {
        this.apiService.getIdByPath(this.url).subscribe((data) => {
            this.idNode = data.valueOf();
            //    this.url1="<div>  <span>Choose file</span>  <span>{{file ? file.name : 'or drag and drop file here' }}</span>  <input class='file-input' type='file'></div><app-progress [progress]='progress'></app-progress>";
            //";
            //<form  method='post' action='https://xn--gnrgy-jua.co/api/files/Upload?idNode="+this.idNode+"&session="+this.session+"' id='myForm' enctype='multipart/form-data'> <div class='form-group'>    <input style='position:absolute;' type='file' name='formFile' class='file' ><div  class='input-group col-xs-12'><span class='input-group-addon'><i class='glyphicon glyphicon-picture'></i></span>      <input type='text' class='form-control input-lg' disabled placeholder='Upload File'>      <span class='input-group-btn'>        <button class='browse btn btn-primary input-lg' type='button'><i class='glyphicon glyphicon-search'></i> Browse</button>      </span>    </div>  </div></form>";
            this.apiService.getFiles(this.idNode).subscribe((data1) => {
                this.files = JSON.parse(data1);
            });
        });
    }
    emitFiles(event) {
        const file = event && event.item(0);
        this.file = file;
        this.uploading = true;
        this.apiService.uploadFile(this.toFormData()).subscribe(data => {
            this.uploading = false;
            this.apiService.getFiles(this.idNode).subscribe((data1) => {
                this.files = JSON.parse(data1);
            });
        }, error => {
            this.uploading = false;
            this.apiService.getFiles(this.idNode).subscribe((data1) => {
                this.files = JSON.parse(data1);
            });
        });
    }
    writeValue(value) {
        // clear file input
        this.host.nativeElement.value = '';
        this.file = null;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
    }
    downloadFile(id, filename) {
        this.apiService.downloadFile(id).subscribe((response) => {
            let dataType = response.type;
            let binaryData = [];
            binaryData.push(response);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
            if (filename)
                downloadLink.setAttribute('download', filename);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        });
    }
    toFormData() {
        const formData = new FormData();
        formData.append("session", this.session);
        formData.append("file", this.file, this.file.name);
        formData.append("id", this.idNode);
        formData.append("fileName", this.file.name);
        return formData;
    }
};
FileviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileviewComponent.prototype, "url", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileviewComponent.prototype, "progress", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event.target.files'])
], FileviewComponent.prototype, "emitFiles", null);
FileviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fileview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fileview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewmarkup/fileview/fileview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fileview.component.css */ "./src/app/main/mainarea/Views/viewmarkup/fileview/fileview.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], FileviewComponent);



/***/ }),

/***/ "./src/app/main/mainarea/Views/viewmarkup/viewmarkup.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/main/mainarea/Views/viewmarkup/viewmarkup.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbmFyZWEvVmlld3Mvdmlld21hcmt1cC92aWV3bWFya3VwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/main/mainarea/Views/viewmarkup/viewmarkup.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/mainarea/Views/viewmarkup/viewmarkup.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewmarkupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewmarkupComponent", function() { return ViewmarkupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api.service */ "./src/app/api.service.ts");




let ViewmarkupComponent = class ViewmarkupComponent {
    constructor(route, apiService, router) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        this.url = "";
        this.content = "";
    }
    ngOnInit() {
        console.log("LASTURL: " + this.url);
        this.route.paramMap.subscribe(params => {
            this.url = params.get("url");
            if (this.url == "" || this.url == null)
                this.url = "root";
            this.apiService.getNews(this.url).subscribe((data) => {
                this.content = data.toString();
                this.paramsSubscription.unsubscribe();
            });
        });
    }
    getPageContent(page) {
    }
};
ViewmarkupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewmarkupComponent.prototype, "url", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewmarkupComponent.prototype, "content", void 0);
ViewmarkupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewmarkup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewmarkup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewmarkup/viewmarkup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewmarkup.component.css */ "./src/app/main/mainarea/Views/viewmarkup/viewmarkup.component.css")).default]
    })
], ViewmarkupComponent);



/***/ }),

/***/ "./src/app/main/mainarea/Views/viewodx/viewodx.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main/mainarea/Views/viewodx/viewodx.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbmFyZWEvVmlld3Mvdmlld29keC92aWV3b2R4LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/main/mainarea/Views/viewodx/viewodx.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/mainarea/Views/viewodx/viewodx.component.ts ***!
  \******************************************************************/
/*! exports provided: ViewodxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewodxComponent", function() { return ViewodxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewodxComponent = class ViewodxComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewodxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewodx',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewodx.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewodx/viewodx.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewodx.component.css */ "./src/app/main/mainarea/Views/viewodx/viewodx.component.css")).default]
    })
], ViewodxComponent);



/***/ }),

/***/ "./src/app/main/mainarea/Views/viewpdf/viewpdf.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main/mainarea/Views/viewpdf/viewpdf.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbmFyZWEvVmlld3Mvdmlld3BkZi92aWV3cGRmLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/main/mainarea/Views/viewpdf/viewpdf.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/mainarea/Views/viewpdf/viewpdf.component.ts ***!
  \******************************************************************/
/*! exports provided: ViewpdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpdfComponent", function() { return ViewpdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewpdfComponent = class ViewpdfComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewpdfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewpdf',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewpdf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/Views/viewpdf/viewpdf.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewpdf.component.css */ "./src/app/main/mainarea/Views/viewpdf/viewpdf.component.css")).default]
    })
], ViewpdfComponent);



/***/ }),

/***/ "./src/app/main/mainarea/attachments/attachments.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main/mainarea/attachments/attachments.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbmFyZWEvYXR0YWNobWVudHMvYXR0YWNobWVudHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/main/mainarea/attachments/attachments.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/mainarea/attachments/attachments.component.ts ***!
  \********************************************************************/
/*! exports provided: AttachmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsComponent", function() { return AttachmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AttachmentsComponent = class AttachmentsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AttachmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attachments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./attachments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/attachments/attachments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./attachments.component.css */ "./src/app/main/mainarea/attachments/attachments.component.css")).default]
    })
], AttachmentsComponent);



/***/ }),

/***/ "./src/app/main/mainarea/mainarea.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/mainarea/mainarea.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbmFyZWEvbWFpbmFyZWEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/main/mainarea/mainarea.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/mainarea/mainarea.component.ts ***!
  \*****************************************************/
/*! exports provided: MainareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainareaComponent", function() { return MainareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MainareaComponent = class MainareaComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.doNotEdit = true;
        this.action = "";
    }
    ngOnInit() {
        console.log("URL1:" + this.url);
        this.route.paramMap.subscribe(params => {
            this.url = params.get("url");
            this.action = params.get("action");
            if (this.action == "edit")
                this.doNotEdit = false;
            else
                this.doNotEdit = true;
        });
    }
};
MainareaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainareaComponent.prototype, "url", void 0);
MainareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mainarea',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mainarea.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/mainarea.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mainarea.component.css */ "./src/app/main/mainarea/mainarea.component.css")).default]
    })
], MainareaComponent);



/***/ }),

/***/ "./src/app/main/mainarea/treeheader/treeheader.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main/mainarea/treeheader/treeheader.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbmFyZWEvdHJlZWhlYWRlci90cmVlaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/main/mainarea/treeheader/treeheader.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/mainarea/treeheader/treeheader.component.ts ***!
  \******************************************************************/
/*! exports provided: TreeheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeheaderComponent", function() { return TreeheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TreeheaderComponent = class TreeheaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TreeheaderComponent.prototype, "url", void 0);
TreeheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-treeheader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./treeheader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainarea/treeheader/treeheader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./treeheader.component.css */ "./src/app/main/mainarea/treeheader/treeheader.component.css")).default]
    })
], TreeheaderComponent);



/***/ }),

/***/ "./src/app/main/sidebar/sidebar.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/sidebar/sidebar.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n  width: 200px;\r\n}\r\n \r\nh2 {\r\n  font: 400 40px/1.5 Helvetica, Verdana, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n \r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n \r\nli {\r\n  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n \r\nli:last-child {\r\n  border: none;\r\n}\r\n \r\nli a {\r\n  text-decoration: none;\r\n  color: #000;\r\n  display: block;\r\n  width: 200px;\r\n \r\n  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  transition: font-size 0.3s ease, background-color 0.3s ease;\r\n}\r\n \r\nli a:hover {\r\n  font-size: 30px;\r\n  background: #f6f6f6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTs7RUFFWixtRUFBbUU7RUFJbkUsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4gXHJcbmgyIHtcclxuICBmb250OiA0MDAgNDBweC8xLjUgSGVsdmV0aWNhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiBcclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4gXHJcbmxpIHtcclxuICBmb250OiAyMDAgMjBweC8xLjUgSGVsdmV0aWNhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbiBcclxubGk6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbiBcclxubGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuIFxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuIFxyXG5saSBhOmhvdmVyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _assets_showtree_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/showtree.js */ "./src/assets/showtree.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");







let SidebarComponent = class SidebarComponent {
    constructor(apiService, _renderer2, _document, cookieService) {
        this.apiService = apiService;
        this._renderer2 = _renderer2;
        this._document = _document;
        this.cookieService = cookieService;
        this.mcallback = "";
        this.htmlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blubb = "";
        this.options = {};
        this.session = cookieService.get("sessionID");
        this.apiService.getTree().toPromise().then((data) => {
            this.data = data;
            this.items = data["items"];
            let script = this._renderer2.createElement('script');
            script.type = `text/javascript`;
            script.text = "$('#tree1').tree({  saveState: true, onCanSelectNode: function(node) " +
                "{" +
                " if (node.children.length == 0) {" +
                "     " +
                "     return true;" +
                "  }" +
                "  else {" +
                "      " +
                "      return true;" +
                "  }" +
                "}});" +
                `$('#tree1').on(
        'tree.select',
        function(event) {
            if (event.node) {
                
                // node was selected
                var node = event.node;
                //document.getElementById('callback').innerHTML=node.id;
                document.location.href="redir/"+node.id;
            }
            else {
                // event.node is null
                // a node was deselected
                // e.previous_node contains the deselected node
            }
        }
    );`;
            this._renderer2.appendChild(this._document.body, script);
            Object(_assets_showtree_js__WEBPACK_IMPORTED_MODULE_4__["showtree"])();
        });
    }
    ngAfterViewInit() {
    }
    set state(state) {
        this.state = this.mstate;
        console.log(state.focusedNodeId);
    }
    get state() {
        return this.mstate;
    }
    get ccallback() {
        return this.mcallback;
    }
    set ccallback(callback) {
        this.mcallback = callback;
    }
    onChanges($event) {
        this.html = $event;
    }
    onCheckChange($event) {
    }
    ngOnInit() {
    }
};
SidebarComponent.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("treeReference", { read: "", static: false })
], SidebarComponent.prototype, "tree", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarComponent.prototype, "html", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidebarComponent.prototype, "htmlChange", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/main/sidebar/sidebar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], SidebarComponent);



/***/ }),

/***/ "./src/app/redir/redir.component.css":
/*!*******************************************!*\
  !*** ./src/app/redir/redir.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGlyL3JlZGlyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/redir/redir.component.ts":
/*!******************************************!*\
  !*** ./src/app/redir/redir.component.ts ***!
  \******************************************/
/*! exports provided: RedirComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirComponent", function() { return RedirComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




let RedirComponent = class RedirComponent {
    constructor(route, apiService, router) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        console.log("1");
        this.route.paramMap.subscribe(params => {
            this.mid = params.get("mid");
            this.apiService.getPathById(this.mid).subscribe((data) => {
                this.murl = data.valueOf();
                console.log("URL:" + this.murl);
                this.router.navigate(['/view/' + this.murl]);
            });
        });
    }
    ngOnInit() {
    }
};
RedirComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RedirComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redir',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./redir.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/redir/redir.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./redir.component.css */ "./src/app/redir/redir.component.css")).default]
    })
], RedirComponent);



/***/ }),

/***/ "./src/app/routing/routing.component.css":
/*!***********************************************!*\
  !*** ./src/app/routing/routing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRpbmcvcm91dGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/routing/routing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/routing/routing.component.ts ***!
  \**********************************************/
/*! exports provided: RoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponent", function() { return RoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RoutingComponent = class RoutingComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]) {
                this.url = val.state.root.firstChild.params["url"];
            }
        });
    }
};
RoutingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RoutingComponent.prototype, "url", void 0);
RoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-routing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./routing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./routing.component.css */ "./src/app/routing/routing.component.css")).default]
    })
], RoutingComponent);



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/app/sanitize-html.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/sanitize-html.pipe.ts ***!
  \***************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SanitizeHtmlPipe = class SanitizeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
};
SanitizeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizeHtml'
    })
], SanitizeHtmlPipe);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");



let SearchComponent = class SearchComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
    }
    onSearch() {
        this.apiService.search(this.search, this.searchPages, this.searchFiles).subscribe((data) => {
            this.searchResult = JSON.parse(data.toString());
            console.log("SRCH");
        });
    }
    downloadFile(id, filename) {
        this.apiService.downloadFile(id).subscribe((response) => {
            let dataType = response.type;
            let binaryData = [];
            binaryData.push(response);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
            if (filename)
                downloadLink.setAttribute('download', filename);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/assets/jqwidgets-ts/angular_jqxtree.ts":
/*!****************************************************!*\
  !*** ./src/assets/jqwidgets-ts/angular_jqxtree.ts ***!
  \****************************************************/
/*! exports provided: jqxTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqxTreeComponent", function() { return jqxTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jqwidgets_jqxcore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jqwidgets/jqxcore.js */ "./src/assets/jqwidgets/jqxcore.js");
/* harmony import */ var _jqwidgets_jqxcore_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxcore_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jqwidgets_jqxdata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jqwidgets/jqxdata.js */ "./src/assets/jqwidgets/jqxdata.js");
/* harmony import */ var _jqwidgets_jqxdata_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxdata_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jqwidgets_jqxbuttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jqwidgets/jqxbuttons.js */ "./src/assets/jqwidgets/jqxbuttons.js");
/* harmony import */ var _jqwidgets_jqxbuttons_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxbuttons_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jqwidgets_jqxscrollbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jqwidgets/jqxscrollbar.js */ "./src/assets/jqwidgets/jqxscrollbar.js");
/* harmony import */ var _jqwidgets_jqxscrollbar_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxscrollbar_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jqwidgets_jqxpanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jqwidgets/jqxpanel.js */ "./src/assets/jqwidgets/jqxpanel.js");
/* harmony import */ var _jqwidgets_jqxpanel_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxpanel_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jqwidgets_jqxdragdrop_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jqwidgets/jqxdragdrop.js */ "./src/assets/jqwidgets/jqxdragdrop.js");
/* harmony import */ var _jqwidgets_jqxdragdrop_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxdragdrop_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _jqwidgets_jqxtree_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jqwidgets/jqxtree.js */ "./src/assets/jqwidgets/jqxtree.js");
/* harmony import */ var _jqwidgets_jqxtree_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxtree_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _jqwidgets_jqxcheckbox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jqwidgets/jqxcheckbox.js */ "./src/assets/jqwidgets/jqxcheckbox.js");
/* harmony import */ var _jqwidgets_jqxcheckbox_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxcheckbox_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
jQWidgets v8.2.0 (2019-Sep)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

/// <reference path="jqwidgets.d.ts" />









let jqxTreeComponent = class jqxTreeComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'allowDrag', 'allowDrop', 'checkboxes', 'dragStart', 'dragEnd', 'disabled', 'easing', 'enableHover', 'height', 'hasThreeStates', 'incrementalSearch', 'keyboardNavigation', 'rtl', 'source', 'toggleIndicatorSize', 'toggleMode', 'theme', 'width'];
        // jqxTreeComponent events
        this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onCheckChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.elementRef = containerElement;
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                let areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTree(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTree(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTree(this.properties[i])) {
                        this.host.jqxTree(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    }
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    createComponent(options) {
        if (this.host) {
            return;
        }
        if (options) {
            JQXLite.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = JQXLite(this.elementRef.nativeElement.firstChild);
        this.moveClasses(this.elementRef.nativeElement, this.host[0]);
        this.moveStyles(this.elementRef.nativeElement, this.host[0]);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTree', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTree('setOptions', options);
    }
    // jqxTreeComponent properties
    animationShowDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationShowDuration', arg);
        }
        else {
            return this.host.jqxTree('animationShowDuration');
        }
    }
    animationHideDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationHideDuration', arg);
        }
        else {
            return this.host.jqxTree('animationHideDuration');
        }
    }
    allowDrag(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrag', arg);
        }
        else {
            return this.host.jqxTree('allowDrag');
        }
    }
    allowDrop(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrop', arg);
        }
        else {
            return this.host.jqxTree('allowDrop');
        }
    }
    checkboxes(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('checkboxes', arg);
        }
        else {
            return this.host.jqxTree('checkboxes');
        }
    }
    dragStart(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragStart', arg);
        }
        else {
            return this.host.jqxTree('dragStart');
        }
    }
    dragEnd(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragEnd', arg);
        }
        else {
            return this.host.jqxTree('dragEnd');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('disabled', arg);
        }
        else {
            return this.host.jqxTree('disabled');
        }
    }
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('easing', arg);
        }
        else {
            return this.host.jqxTree('easing');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('enableHover', arg);
        }
        else {
            return this.host.jqxTree('enableHover');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('height', arg);
        }
        else {
            return this.host.jqxTree('height');
        }
    }
    hasThreeStates(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('hasThreeStates', arg);
        }
        else {
            return this.host.jqxTree('hasThreeStates');
        }
    }
    incrementalSearch(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('incrementalSearch', arg);
        }
        else {
            return this.host.jqxTree('incrementalSearch');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxTree('keyboardNavigation');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('rtl', arg);
        }
        else {
            return this.host.jqxTree('rtl');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('source', arg);
        }
        else {
            return this.host.jqxTree('source');
        }
    }
    toggleIndicatorSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleIndicatorSize', arg);
        }
        else {
            return this.host.jqxTree('toggleIndicatorSize');
        }
    }
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleMode', arg);
        }
        else {
            return this.host.jqxTree('toggleMode');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('theme', arg);
        }
        else {
            return this.host.jqxTree('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('width', arg);
        }
        else {
            return this.host.jqxTree('width');
        }
    }
    // jqxTreeComponent functions
    addBefore(item, id) {
        this.host.jqxTree('addBefore', item, id);
    }
    addAfter(item, id) {
        this.host.jqxTree('addAfter', item, id);
    }
    addTo(item, id) {
        this.host.jqxTree('addTo', item, id);
    }
    clear() {
        this.host.jqxTree('clear');
    }
    checkAll() {
        this.host.jqxTree('checkAll');
    }
    checkItem(item, checked) {
        this.host.jqxTree('checkItem', item, checked);
    }
    collapseAll() {
        this.host.jqxTree('collapseAll');
    }
    collapseItem(item) {
        this.host.jqxTree('collapseItem', item);
    }
    destroy() {
        this.host.jqxTree('destroy');
    }
    disableItem(item) {
        this.host.jqxTree('disableItem', item);
    }
    ensureVisible(item) {
        this.host.jqxTree('ensureVisible', item);
    }
    enableItem(item) {
        this.host.jqxTree('enableItem', item);
    }
    enableAll() {
        this.host.jqxTree('enableAll');
    }
    expandAll() {
        this.host.jqxTree('expandAll');
    }
    expandItem(item) {
        this.host.jqxTree('expandItem', item);
    }
    focus() {
        this.host.jqxTree('focus');
    }
    getCheckedItems() {
        return this.host.jqxTree('getCheckedItems');
    }
    getUncheckedItems() {
        return this.host.jqxTree('getUncheckedItems');
    }
    getItems() {
        return this.host.jqxTree('getItems');
    }
    getItem(element) {
        return this.host.jqxTree('getItem', element);
    }
    getSelectedItem() {
        return this.host.jqxTree('getSelectedItem');
    }
    getPrevItem(item) {
        return this.host.jqxTree('getPrevItem', item);
    }
    getNextItem(item) {
        return this.host.jqxTree('getNextItem', item);
    }
    hitTest(left, top) {
        return this.host.jqxTree('hitTest', left, top);
    }
    removeItem(item) {
        this.host.jqxTree('removeItem', item);
    }
    render() {
        this.host.jqxTree('render');
    }
    refresh() {
        this.host.jqxTree('refresh');
    }
    selectItem(item) {
        this.host.jqxTree('selectItem', item);
    }
    uncheckAll() {
        this.host.jqxTree('uncheckAll');
    }
    uncheckItem(item) {
        this.host.jqxTree('uncheckItem', item);
    }
    updateItem(item, newItem) {
        this.host.jqxTree('updateItem', item, newItem);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxTree('val', value);
        }
        else {
            return this.host.jqxTree('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('added', (eventData) => { this.onAdded.emit(eventData); });
        this.host.on('checkChange', (eventData) => { this.onCheckChange.emit(eventData); });
        this.host.on('collapse', (eventData) => { this.onCollapse.emit(eventData); });
        this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
        this.host.on('expand', (eventData) => { this.onExpand.emit(eventData); });
        this.host.on('itemClick', (eventData) => { this.onItemClick.emit(eventData); });
        this.host.on('removed', (eventData) => { this.onRemoved.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
    }
}; //jqxTreeComponent
jqxTreeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('animationShowDuration')
], jqxTreeComponent.prototype, "attrAnimationShowDuration", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('animationHideDuration')
], jqxTreeComponent.prototype, "attrAnimationHideDuration", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('allowDrag')
], jqxTreeComponent.prototype, "attrAllowDrag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('allowDrop')
], jqxTreeComponent.prototype, "attrAllowDrop", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('checkboxes')
], jqxTreeComponent.prototype, "attrCheckboxes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('dragStart')
], jqxTreeComponent.prototype, "attrDragStart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('dragEnd')
], jqxTreeComponent.prototype, "attrDragEnd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('disabled')
], jqxTreeComponent.prototype, "attrDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('easing')
], jqxTreeComponent.prototype, "attrEasing", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('enableHover')
], jqxTreeComponent.prototype, "attrEnableHover", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('hasThreeStates')
], jqxTreeComponent.prototype, "attrHasThreeStates", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('incrementalSearch')
], jqxTreeComponent.prototype, "attrIncrementalSearch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('keyboardNavigation')
], jqxTreeComponent.prototype, "attrKeyboardNavigation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('rtl')
], jqxTreeComponent.prototype, "attrRtl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('source')
], jqxTreeComponent.prototype, "attrSource", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('toggleIndicatorSize')
], jqxTreeComponent.prototype, "attrToggleIndicatorSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('toggleMode')
], jqxTreeComponent.prototype, "attrToggleMode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('theme')
], jqxTreeComponent.prototype, "attrTheme", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('width')
], jqxTreeComponent.prototype, "attrWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('height')
], jqxTreeComponent.prototype, "attrHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])('auto-create')
], jqxTreeComponent.prototype, "autoCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"])()
], jqxTreeComponent.prototype, "onAdded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"])()
], jqxTreeComponent.prototype, "onCheckChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"])()
], jqxTreeComponent.prototype, "onCollapse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"])()
], jqxTreeComponent.prototype, "onDragStart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"])()
], jqxTreeComponent.prototype, "onDragEnd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"])()
], jqxTreeComponent.prototype, "onExpand", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"])()
], jqxTreeComponent.prototype, "onItemClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"])()
], jqxTreeComponent.prototype, "onRemoved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"])()
], jqxTreeComponent.prototype, "onSelect", void 0);
jqxTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'jqxTree',
        template: '<div><ng-content></ng-content></div>'
    })
], jqxTreeComponent);



/***/ }),

/***/ "./src/assets/jqwidgets/jqxbuttons.js":
/*!********************************************!*\
  !*** ./src/assets/jqwidgets/jqxbuttons.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.2.0 (2019-Sep)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.cssroundedcorners=function(b){var d={all:"jqx-rc-all",top:"jqx-rc-t",bottom:"jqx-rc-b",left:"jqx-rc-l",right:"jqx-rc-r","top-right":"jqx-rc-tr","top-left":"jqx-rc-tl","bottom-right":"jqx-rc-br","bottom-left":"jqx-rc-bl"};for(var c in d){if(!d.hasOwnProperty(c)){continue}if(b==c){return d[c]}}};a.jqx.jqxWidget("jqxButton","",{});a.extend(a.jqx._jqxButton.prototype,{defineInstance:function(){var b={type:"",cursor:"arrow",roundedCorners:"all",disabled:false,height:null,width:null,overrideTheme:false,enableHover:true,enableDefault:true,enablePressed:true,imgPosition:"center",imgSrc:"",imgWidth:16,imgHeight:16,value:null,textPosition:"",textImageRelation:"overlay",rtl:false,_ariaDisabled:false,_scrollAreaButton:false,template:"default",aria:{"aria-disabled":{name:"disabled",type:"boolean"}}};if(this===a.jqx._jqxButton.prototype){return b}a.extend(true,this,b);return b},_addImage:function(c){var g=this;if(g.element.nodeName.toLowerCase()=="input"||g.element.nodeName.toLowerCase()=="button"||g.element.nodeName.toLowerCase()=="div"){if(!g._img){g.field=g.element;if(g.field.className){g._className=g.field.className}var i={title:g.field.title};var j=null;if(g.field.getAttribute("value")){var j=g.field.getAttribute("value")}else{if(g.element.nodeName.toLowerCase()!="input"){var j=g.element.innerHTML}}if(g.value){j=g.value}if(g.field.id.length){i.id=g.field.id.replace(/[^\w]/g,"_")+"_"+c}else{i.id=a.jqx.utilities.createId()+"_"+c}var b=document.createElement("div");b.id=i.id;b.title=i.title;b.style.cssText=g.field.style.cssText;b.style.boxSizing="border-box";var f=document.createElement("img");f.setAttribute("src",g.imgSrc);f.setAttribute("width",g.imgWidth);f.setAttribute("height",g.imgHeight);b.appendChild(f);g._img=f;var l=document.createElement("span");if(j){l.innerHTML=j;g.value=j}b.appendChild(l);g._text=l;g.field.style.display="none";if(g.field.parentNode){g.field.parentNode.insertBefore(b,g.field.nextSibling)}var e=g.host.data();g.host=a(b);g.host.data(e);g.element=b;g.element.id=g.field.id;g.field.id=i.id;var k=new a(g.element);var h=new a(g.field);if(g._className){k.addClass(g._className);h.removeClass(g._className)}if(g.field.tabIndex){var d=g.field.tabIndex;g.field.tabIndex=-1;g.element.tabIndex=d}}else{g._img.setAttribute("src",g.imgSrc);g._img.setAttribute("width",g.imgWidth);g._img.setAttribute("height",g.imgHeight);g._text.innerHTML=g.value}if(!g.imgSrc){g._img.style.display="none"}else{g._img.style.display="inline"}if(!g.value){g._text.style.display="none"}else{g._text.style.display="inline"}g._positionTextAndImage()}},_positionTextAndImage:function(){var k=this;var r=k.element.offsetWidth;var q=k.element.offsetHeight;var m=k.imgWidth;var v=k.imgHeight;if(k.imgSrc==""){m=0;v=0}var f=k._text.offsetWidth;var b=k._text.offsetHeight;var i=4;var c=4;var l=4;var n=0;var u=0;switch(k.textImageRelation){case"imageBeforeText":case"textBeforeImage":n=m+f+2*l+i+2*c;u=Math.max(v,b)+2*l+i+2*c;break;case"imageAboveText":case"textAboveImage":n=Math.max(m,f)+2*l;u=v+b+i+2*l+2*c;break;case"overlay":n=Math.max(m,f)+2*l;u=Math.max(v,b)+2*l;break}if(!k.width){k.element.style.width=n+"px";r=n}if(!k.height){k.element.style.height=u+"px";q=u}k._img.style.position="absolute";k._text.style.position="absolute";k.element.style.position="relative";k.element.style.overflow="hidden";var e={};var z={};var s=function(E,D,G,C,F){if(D.width<C){D.width=C}if(D.height<F){D.height=F}switch(G){case"left":E.style.left=D.left+"px";E.style.top=D.top+D.height/2-F/2+"px";break;case"topLeft":E.style.left=D.left+"px";E.style.top=D.top+"px";break;case"bottomLeft":E.style.left=D.left+"px";E.style.top=D.top+D.height-F+"px";break;default:case"center":E.style.left=D.left+D.width/2-C/2+"px";E.style.top=D.top+D.height/2-F/2+"px";break;case"top":E.style.left=D.left+D.width/2-C/2+"px";E.style.top=D.top+"px";break;case"bottom":E.style.left=D.left+D.width/2-C/2+"px";E.style.top=D.top+D.height-F+"px";break;case"right":E.style.left=D.left+D.width-C+"px";E.style.top=D.top+D.height/2-F/2+"px";break;case"topRight":E.style.left=D.left+D.width-C+"px";E.style.top=D.top+"px";break;case"bottomRight":E.style.left=D.left+D.width-C+"px";E.style.top=D.top+D.height-F+"px";break}};var g=0;var p=0;var x=r;var j=q;var A=(x-g)/2;var y=(j-p)/2;var B=k._img;var o=k._text;var t=j-p;var d=x-g;g+=c;p+=c;x=x-c-2;d=d-2*c-2;t=t-2*c-2;switch(k.textImageRelation){case"imageBeforeText":switch(k.imgPosition){case"left":case"topLeft":case"bottomLeft":z={left:g,top:p,width:g+m,height:t};e={left:g+m+i,top:p,width:d-m-i,height:t};break;case"center":case"top":case"bottom":z={left:A-f/2-m/2-i/2,top:p,width:m,height:t};e={left:z.left+m+i,top:p,width:x-z.left-m-i,height:t};break;case"right":case"topRight":case"bottomRight":z={left:x-f-m-i,top:p,width:m,height:t};e={left:z.left+m+i,top:p,width:x-z.left-m-i,height:t};break}s(B,z,k.imgPosition,m,v);s(o,e,k.textPosition,f,b);break;case"textBeforeImage":switch(k.textPosition){case"left":case"topLeft":case"bottomLeft":e={left:g,top:p,width:g+f,height:t};z={left:g+f+i,top:p,width:d-f-i,height:t};break;case"center":case"top":case"bottom":e={left:A-f/2-m/2-i/2,top:p,width:f,height:t};z={left:e.left+f+i,top:p,width:x-e.left-f-i,height:t};break;case"right":case"topRight":case"bottomRight":e={left:x-f-m-i,top:p,width:f,height:t};z={left:e.left+f+i,top:p,width:x-e.left-f-i,height:t};break}s(B,z,k.imgPosition,m,v);s(o,e,k.textPosition,f,b);break;case"imageAboveText":switch(k.imgPosition){case"topRight":case"top":case"topLeft":z={left:g,top:p,width:d,height:v};e={left:g,top:p+v+i,width:d,height:t-v-i};break;case"left":case"center":case"right":z={left:g,top:y-v/2-b/2-i/2,width:d,height:v};e={left:g,top:z.top+i+v,width:d,height:t-z.top-i-v};break;case"bottomLeft":case"bottom":case"bottomRight":z={left:g,top:j-v-b-i,width:d,height:v};e={left:g,top:z.top+i+v,width:d,height:b};break}s(B,z,k.imgPosition,m,v);s(o,e,k.textPosition,f,b);break;case"textAboveImage":switch(k.textPosition){case"topRight":case"top":case"topLeft":e={left:g,top:p,width:d,height:b};z={left:g,top:p+b+i,width:d,height:t-b-i};break;case"left":case"center":case"right":e={left:g,top:y-v/2-b/2-i/2,width:d,height:b};z={left:g,top:e.top+i+b,width:d,height:t-e.top-i-b};break;case"bottomLeft":case"bottom":case"bottomRight":e={left:g,top:j-v-b-i,width:d,height:b};z={left:g,top:e.top+i+b,width:d,height:v};break}s(B,z,k.imgPosition,m,v);s(o,e,k.textPosition,f,b);break;case"overlay":default:e={left:g,top:p,width:d,height:t};z={left:g,top:p,width:d,height:t};s(B,z,k.imgPosition,m,v);s(o,e,k.textPosition,f,b);break}},createInstance:function(d){var e=this;e._setSize();var b=e.isMaterialized();e.buttonObj=new a(e.element);if(e.imgSrc!=""||e.textPosition!=""||(e.element.value&&e.element.value.indexOf("<")>=0)||e.value!=null){e.refresh();e._addImage("jqxButton");e.buttonObj=new a(e.element)}if(!e._ariaDisabled){e.element.setAttribute("role","button")}if(e.type!==""){e.element.setAttribute("type",e.type)}if(!e.overrideTheme){e.buttonObj.addClass(e.toThemeProperty(a.jqx.cssroundedcorners(e.roundedCorners)));if(e.enableDefault){e.buttonObj.addClass(e.toThemeProperty("jqx-button"))}e.buttonObj.addClass(e.toThemeProperty("jqx-widget"))}e.isTouchDevice=a.jqx.mobile.isTouchDevice();if(!e._ariaDisabled){a.jqx.aria(this)}if(e.cursor!="arrow"){if(!e.disabled){e.element.style.cursor=e.cursor}else{e.element.style.cursor="arrow"}}var g="mouseenter mouseleave mousedown focus blur";if(e._scrollAreaButton){var g="mousedown"}if(e.isTouchDevice){e.addHandler(e.host,a.jqx.mobile.getTouchEventName("touchstart"),function(h){e.isPressed=true;e.refresh()});e.addHandler(a(document),a.jqx.mobile.getTouchEventName("touchend")+"."+e.element.id,function(h){e.isPressed=false;e.refresh()})}e.addHandler(e.host,g,function(h){switch(h.type){case"mouseenter":if(!e.isTouchDevice){if(!e.disabled&&e.enableHover){e.isMouseOver=true;e.refresh()}}break;case"mouseleave":if(!e.isTouchDevice){if(!e.disabled&&e.enableHover){e.isMouseOver=false;e.refresh()}}break;case"mousedown":if(!e.disabled){e.isPressed=true;e.refresh()}break;case"focus":if(!e.disabled){e.isFocused=true;e.refresh()}break;case"blur":if(!e.disabled){e.isFocused=false;e.refresh()}break}});e.mouseupfunc=function(h){if(!e.disabled){if(e.isPressed||e.isMouseOver){e.isPressed=false;e.refresh()}}};e.addHandler(document,"mouseup.button"+e.element.id,e.mouseupfunc);try{if(document.referrer!=""||window.frameElement){if(window.top!=null&&window.top!=window.that){var f="";if(window.parent&&document.referrer){f=document.referrer}if(f.indexOf(document.location.host)!=-1){if(window.top.document){window.top.document.addEventListener("mouseup",e._topDocumentMouseupHandler)}}}}}catch(c){}e.propertyChangeMap.roundedCorners=function(h,j,i,k){h.buttonObj.removeClass(h.toThemeProperty(a.jqx.cssroundedcorners(i)));h.buttonObj.addClass(h.toThemeProperty(a.jqx.cssroundedcorners(k)))};e.propertyChangeMap.disabled=function(h,j,i,k){if(i!=k){h.refresh();h.element.setAttribute("disabled",k);h.element.disabled=k;if(!k){h.element.style.cursor=h.cursor}else{h.element.style.cursor="default"}a.jqx.aria(h,"aria-disabled",h.disabled)}};e.propertyChangeMap.rtl=function(h,j,i,k){if(i!=k){h.refresh()}};e.propertyChangeMap.template=function(h,j,i,k){if(i!=k){h.buttonObj.removeClass(h.toThemeProperty("jqx-"+i));h.refresh()}};e.propertyChangeMap.theme=function(h,j,i,k){h.buttonObj.removeClass(h.element);if(i){h.buttonObj.removeClass("jqx-button-"+i);h.buttonObj.removeClass("jqx-widget-"+i);h.buttonObj.removeClass("jqx-fill-state-normal-"+i);h.buttonObj.removeClass(h.toThemeProperty(a.jqx.cssroundedcorners(h.roundedCorners))+"-"+i)}if(h.enableDefault){h.buttonObj.addClass(h.toThemeProperty("jqx-button"))}h.buttonObj.addClass(h.toThemeProperty("jqx-widget"));if(!h.overrideTheme){h.buttonObj.addClass(h.toThemeProperty(a.jqx.cssroundedcorners(h.roundedCorners)))}h._oldCSSCurrent=null;h.refresh()};if(e.disabled){e.element.disabled=true;e.element.setAttribute("disabled","true")}},resize:function(c,b){this.width=c;this.height=b;this._setSize()},val:function(d){var c=this;var b=c.host.find("input");if(b.length>0){if(arguments.length==0||typeof(d)=="object"){return b.val()}b.val(d);c.refresh();return b.val()}if(arguments.length==0||typeof(d)=="object"){if(c.element.nodeName.toLowerCase()=="button"){return a(c.element).text()}return c.element.value}if(arguments.length>0&&c._text){c._text.innerHTML=arguments[0];c.refresh();return}else{if(arguments.length>0&&c.element.nodeName==="DIV"){c.element.innerHTML=arguments[0];c.refresh()}}c.element.value=arguments[0];if(c.element.nodeName.toLowerCase()=="button"){a(c.element).html(arguments[0])}c.refresh()},_setSize:function(){var d=this;var b=d.height;var c=d.width;if(b){if(!isNaN(b)){b=b+"px"}d.element.style.height=b}if(c){if(!isNaN(c)){c=c+"px"}d.element.style.width=c}},_removeHandlers:function(){var b=this;b.removeHandler(b.host,"selectstart");b.removeHandler(b.host,"click");b.removeHandler(b.host,"focus");b.removeHandler(b.host,"blur");b.removeHandler(b.host,"mouseenter");b.removeHandler(b.host,"mouseleave");b.removeHandler(b.host,"mousedown");b.removeHandler(a(document),"mouseup.button"+b.element.id,b.mouseupfunc);window.top.document.removeEventListener("mouseup",b._topDocumentMouseupHandler);if(b.isTouchDevice){b.removeHandler(b.host,a.jqx.mobile.getTouchEventName("touchstart"));b.removeHandler(a(document),a.jqx.mobile.getTouchEventName("touchend")+"."+b.element.id)}b.mouseupfunc=null;delete b.mouseupfunc},focus:function(){this.host.focus()},destroy:function(){var b=this;b._removeHandlers();var c=a.data(b.element,"jqxButton");if(c){delete c.instance}b.host.removeClass();b.host.removeData();b.host.remove();delete b.set;delete b.get;delete b.call;delete b.element;delete b.host},render:function(){this.refresh()},propertiesChangedHandler:function(d,b,c){if(c&&c.width&&c.height&&Object.keys(c).length==2){d._setSize();d.refresh()}},propertyChangedHandler:function(b,c,e,d){if(this.isInitialized==undefined||this.isInitialized==false){return}if(d==e){return}if(b.batchUpdate&&b.batchUpdate.width&&b.batchUpdate.height&&Object.keys(b.batchUpdate).length==2){return}if(c==="type"){b.element.setAttribute("type",d)}if(c=="textImageRelation"||c=="textPosition"||c=="imgPosition"){if(b._img){b._positionTextAndImage()}else{b._addImage("jqxButton")}}if(c=="imgSrc"||c=="imgWidth"||c=="imgHeight"){b._addImage("jqxButton")}if(c==="value"){b.val(d)}if(c=="width"||c=="height"){b._setSize();b.refresh()}},refresh:function(){var c=this;if(c.overrideTheme){return}var e=c.toThemeProperty("jqx-fill-state-focus");var i=c.toThemeProperty("jqx-fill-state-disabled");var b=c.toThemeProperty("jqx-fill-state-normal");if(!c.enableDefault){b=""}var h=c.toThemeProperty("jqx-fill-state-hover");var f=c.toThemeProperty("jqx-fill-state-pressed");var g=c.toThemeProperty("jqx-fill-state-pressed");if(!c.enablePressed){f=""}var d="";if(!c.host){return}c.element.disabled=c.disabled;if(c.disabled){if(c._oldCSSCurrent){c.buttonObj.removeClass(c._oldCSSCurrent)}d=b+" "+i;if(c.template!=="default"&&c.template!==""){d+=" jqx-"+c.template;if(c.theme!=""){d+=" jqx-"+c.template+"-"+c.theme}}c.buttonObj.addClass(d);c._oldCSSCurrent=d;return}else{if(c.isMouseOver&&!c.isTouchDevice){if(c.isPressed){d=g}else{d=h}}else{if(c.isPressed){d=f}else{d=b}}}if(c.isFocused){d+=" "+e}if(c.template!=="default"&&c.template!==""){d+=" jqx-"+c.template;if(c.theme!=""){d+=" jqx-"+c.template+"-"+c.theme}}if(d!=c._oldCSSCurrent){if(c._oldCSSCurrent){c.buttonObj.removeClass(c._oldCSSCurrent)}c.buttonObj.addClass(d);c._oldCSSCurrent=d}if(c.rtl){c.buttonObj.addClass(c.toThemeProperty("jqx-rtl"));c.element.style.direction="rtl"}if(c.isMaterialized()){c.host.addClass("buttonRipple")}}});a.jqx.jqxWidget("jqxLinkButton","",{});a.extend(a.jqx._jqxLinkButton.prototype,{defineInstance:function(){this.disabled=false;this.height=null;this.width=null;this.rtl=false;this.href=null},createInstance:function(c){var f=this;this.host.onselectstart=function(){return false};this.host.attr("role","button");var b=this.height||this.element.offsetHeight;var d=this.width||this.element.offsetWidth;this.href=this.element.getAttribute("href");this.target=this.element.getAttribute("target");this.content=this.host.text();this.element.innerHTML="";var g=document.createElement("input");g.type="button";g.className="jqx-wrapper "+this.toThemeProperty("jqx-reset");this._setSize(g,d,b);g.value=this.content;var e=new a(this.element);e.addClass(this.toThemeProperty("jqx-link"));this.element.style.color="inherit";this.element.appendChild(g);this._setSize(g,d,b);var h=c==undefined?{}:c[0]||{};a(g).jqxButton(h);this.wrapElement=g;if(this.disabled){this.element.disabled=true}this.propertyChangeMap.disabled=function(i,k,j,l){i.element.disabled=l;i.wrapElement.jqxButton({disabled:l})};this.addHandler(a(g),"click",function(i){if(!this.disabled){f.onclick(i)}return false})},_setSize:function(c,d,b){var e=this;if(b){if(!isNaN(b)){b=b+"px"}c.style.height=b}if(d){if(!isNaN(d)){d=d+"px"}c.style.width=d}},onclick:function(b){if(this.target!=null){window.open(this.href,this.target)}else{window.location=this.href}}});a.jqx.jqxWidget("jqxRepeatButton","jqxButton",{});a.extend(a.jqx._jqxRepeatButton.prototype,{defineInstance:function(){this.delay=50},createInstance:function(d){var e=this;var c=a.jqx.mobile.isTouchDevice();var b=!c?"mouseup."+this.base.element.id:"touchend."+this.base.element.id;var f=!c?"mousedown."+this.base.element.id:"touchstart."+this.base.element.id;this.addHandler(a(document),b,function(g){if(e.timeout!=null){clearTimeout(e.timeout);e.timeout=null;e.refresh()}if(e.timer!=undefined){clearInterval(e.timer);e.timer=null;e.refresh()}});this.addHandler(this.base.host,f,function(g){if(e.timer!=null){clearInterval(e.timer)}e.timeout=setTimeout(function(){clearInterval(e.timer);e.timer=setInterval(function(h){e.ontimer(h)},e.delay)},150)});this.mousemovefunc=function(g){if(!c){if(g.which==0){if(e.timer!=null){clearInterval(e.timer);e.timer=null}}}};this.addHandler(this.base.host,"mousemove",this.mousemovefunc)},destroy:function(){var c=a.jqx.mobile.isTouchDevice();var b=!c?"mouseup."+this.base.element.id:"touchend."+this.base.element.id;var e=!c?"mousedown."+this.base.element.id:"touchstart."+this.base.element.id;this.removeHandler(this.base.host,"mousemove",this.mousemovefunc);this.removeHandler(this.base.host,e);this.removeHandler(a(document),b);this.timer=null;delete this.mousemovefunc;delete this.timer;var d=a.data(this.base.element,"jqxRepeatButton");if(d){delete d.instance}a(this.base.element).removeData();this.base.destroy();delete this.base},stop:function(){clearInterval(this.timer);this.timer=null},ontimer:function(b){var b=new a.Event("click");if(this.base!=null&&this.base.host!=null){this.base.host.trigger(b)}}});a.jqx.jqxWidget("jqxToggleButton","jqxButton",{});a.extend(a.jqx._jqxToggleButton.prototype,{defineInstance:function(){this.toggled=false;this.uiToggle=true;this.aria={"aria-checked":{name:"toggled",type:"boolean"},"aria-disabled":{name:"disabled",type:"boolean"}}},createInstance:function(b){var c=this;c.base.overrideTheme=true;c.isTouchDevice=a.jqx.mobile.isTouchDevice();a.jqx.aria(this);c.propertyChangeMap.roundedCorners=function(d,f,e,g){d.base.buttonObj.removeClass(d.toThemeProperty(a.jqx.cssroundedcorners(e)));d.base.buttonObj.addClass(d.toThemeProperty(a.jqx.cssroundedcorners(g)))};c.propertyChangeMap.toggled=function(d,f,e,g){d.refresh()};c.propertyChangeMap.disabled=function(d,f,e,g){d.base.disabled=g;d.refresh()};c.addHandler(c.base.host,"click",function(d){if(!c.base.disabled&&c.uiToggle){c.toggle()}});if(!c.isTouchDevice){c.addHandler(c.base.host,"mouseenter",function(d){if(!c.base.disabled){c.refresh()}});c.addHandler(c.base.host,"mouseleave",function(d){if(!c.base.disabled){c.refresh()}})}c.addHandler(c.base.host,"mousedown",function(d){if(!c.base.disabled){c.refresh()}});c.addHandler(a(document),"mouseup.togglebutton"+c.base.element.id,function(d){if(!c.base.disabled){c.refresh()}})},destroy:function(){this._removeHandlers();this.base.destroy()},_removeHandlers:function(){this.removeHandler(this.base.host,"click");this.removeHandler(this.base.host,"mouseenter");this.removeHandler(this.base.host,"mouseleave");this.removeHandler(this.base.host,"mousedown");this.removeHandler(a(document),"mouseup.togglebutton"+this.base.element.id)},toggle:function(){this.toggled=!this.toggled;this.refresh();a.jqx.aria(this,"aria-checked",this.toggled)},unCheck:function(){this.toggled=false;this.refresh()},check:function(){this.toggled=true;this.refresh()},refresh:function(){var c=this;var h=c.base.toThemeProperty("jqx-fill-state-disabled");var b=c.base.toThemeProperty("jqx-fill-state-normal");if(!c.base.enableDefault){b=""}var g=c.base.toThemeProperty("jqx-fill-state-hover");var e=c.base.toThemeProperty("jqx-fill-state-pressed");var f=c.base.toThemeProperty("jqx-fill-state-pressed");var d="";c.base.element.disabled=c.base.disabled;if(c.base.disabled){d=b+" "+h;c.base.buttonObj.addClass(d);return}else{if(c.base.isMouseOver&&!c.isTouchDevice){if(c.base.isPressed||c.toggled){d=f}else{d=g}}else{if(c.base.isPressed||c.toggled){d=e}else{d=b}}}if(c.base.template!=="default"&&c.base.template!==""){d+=" jqx-"+c.base.template;if(c.base.theme!=""){d+=" jqx-"+c.template+"-"+c.base.theme}}if(c.base.buttonObj.hasClass(h)&&h!=d){c.base.buttonObj.removeClass(h)}if(c.base.buttonObj.hasClass(b)&&b!=d){c.base.buttonObj.removeClass(b)}if(c.base.buttonObj.hasClass(g)&&g!=d){c.base.buttonObj.removeClass(g)}if(c.base.buttonObj.hasClass(e)&&e!=d){c.base.buttonObj.removeClass(e)}if(c.base.buttonObj.hasClass(f)&&f!=d){c.base.buttonObj.removeClass(f)}if(!c.base.buttonObj.hasClass(d)){c.base.buttonObj.addClass(d)}},_topDocumentMouseupHandler:function(c){var b=this;b.isPressed=false;b.refresh()}})})(jqxBaseFramework);



/***/ }),

/***/ "./src/assets/jqwidgets/jqxcheckbox.js":
/*!*********************************************!*\
  !*** ./src/assets/jqwidgets/jqxcheckbox.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.2.0 (2019-Sep)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxCheckBox","",{});a.extend(a.jqx._jqxCheckBox.prototype,{defineInstance:function(){var b={animationShowDelay:300,animationHideDelay:300,width:null,height:null,boxSize:"16px",checked:false,hasThreeStates:false,disabled:false,enableContainerClick:true,locked:false,groupName:"",keyboardCheck:true,enableHover:true,hasInput:true,rtl:false,updated:null,disabledContainer:false,changeType:null,_canFocus:true,aria:{"aria-checked":{name:"checked",type:"boolean"},"aria-disabled":{name:"disabled",type:"boolean"}},events:["checked","unchecked","indeterminate","change"]};if(this===a.jqx._jqxCheckBox.prototype){return b}a.extend(true,this,b);return b},createInstance:function(b){var c=this;c._createFromInput("CheckBox");c.render()},_createFromInput:function(c){var j=this;if(j.element.nodeName.toLowerCase()=="input"){j.field=j.element;if(j.field.className){j._className=j.field.className}var l={title:j.field.title};if(j.field.value){l.value=j.field.value}if(j.field.checked){l.checked=true}if(j.field.id.length){l.id=j.field.id.replace(/[^\w]/g,"_")+"_"+c}else{l.id=a.jqx.utilities.createId()+"_"+c}var e=j.element.nextSibling;var h=false;if(e&&(e.nodeName=="#text"||e.nodeName=="span")){h=true}var k=0;var b=a("<div></div>",l);if(h){b.append(e);var i=a("<span>"+a(e).text()+"</span>");i.appendTo(a(document.body));k+=i.width();i.remove()}b[0].style.cssText=j.field.style.cssText;if(!j.width){j.width=a(j.field).width()+k+10}if(!j.height){j.height=a(j.field).outerHeight()+10}a(j.field).hide().after(b);var g=j.host.data();j.host=b;j.host.data(g);j.element=b[0];j.element.id=j.field.id;j.field.id=l.id;if(j._className){j.host.addClass(j._className);a(j.field).removeClass(j._className)}if(j.field.tabIndex){var d=j.field.tabIndex;j.field.tabIndex=-1;j.element.tabIndex=d}}},_addInput:function(){if(this.hasInput){if(this.input){this.input.remove()}var b=this.host.attr("name");this.input=a("<input type='hidden'/>");this.host.append(this.input);if(b){this.input.attr("name",b)}this.input.val(this.checked);this.host.attr("role","checkbox");a.jqx.aria(this)}},render:function(){this.init=true;var d=this;this.setSize();this.propertyChangeMap.width=function(h,j,i,k){d.setSize()};this.propertyChangeMap.height=function(h,j,i,k){d.setSize()};this._removeHandlers();if(!this.width){this.host.css("overflow-x","visible")}if(!this.height){this.host.css("overflow-y","visible")}if(this.checkbox){this.checkbox.remove();this.checkbox=null}if(this.checkMark){this.checkMark.remove();this.checkMark=null}if(this.box){this.box.remove();this.box=null}if(this.clear){this.clear.remove();this.clear=null}if(this.boxSize==null){this.boxSize=16}var g=parseInt(this.boxSize)+"px";var f="16px";var e=Math.floor((parseInt(this.boxSize)-16)/2);var b=e;e+="px";b+="px";if(parseInt(this.boxSize)!=16){this.checkbox=a('<div><div style="width: '+g+"; height: "+g+';"><span style="position: relative; left: '+e+"; top: "+b+"; width: "+f+"; height: "+f+';"></span></div></div>')}else{this.checkbox=a('<div><div style="width: '+g+"; height: "+g+';"><span style="width: '+g+"; height: "+g+';"></span></div></div>')}this.host.prepend(this.checkbox);if(!this.disabledContainer){if(!this.host.attr("tabIndex")){this.host.attr("tabIndex",0)}this.clear=a('<div style="clear: both;"></div>');this.host.append(this.clear)}this.checkMark=a(this.checkbox[0].firstChild.firstChild);this.box=this.checkbox;this.box.addClass(this.toThemeProperty("jqx-checkbox-default")+" "+this.toThemeProperty("jqx-fill-state-normal")+" "+this.toThemeProperty("jqx-rc-all"));if(this.disabled){this.disable()}if(!this.disabledContainer){this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.addClass(this.toThemeProperty("jqx-checkbox"))}if(this.locked&&!this.disabledContainer){this.host.css("cursor","auto")}var c=this.element.getAttribute("checked");if(c=="checked"||c=="true"||c==true){this.checked=true}this._addInput();this._render();this._addHandlers();this.init=false;this._centerBox();if(this.isMaterialized()){a(this.checkbox).addClass("ripple");a.jqx.ripple(a(this.checkbox),this.host,"checkbox")}},_centerBox:function(){if(this.height&&this.height.toString().indexOf("%")==-1&&this.box){var b=parseInt(this.height);this.host.css("line-height",b+"px");var c=b-parseInt(this.boxSize)-1;c/=2;this.box.css("margin-top",parseInt(c))}},refresh:function(b){if(!b){this.setSize();this._render()}},resize:function(c,b){this.width=c;this.height=b;this.refresh()},setSize:function(){if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)}else{if(this.width!=undefined&&!isNaN(this.width)){this.host.width(this.width)}else{if(this.width!=null&&this.width.toString().indexOf("%")!=-1){this.element.style.width=this.width}}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)}else{if(this.height!=undefined&&!isNaN(this.height)){this.host.height(this.height)}else{if(this.height!=null&&this.height.toString().indexOf("%")!=-1){this.element.style.height=this.height}}}this._centerBox()},_addHandlers:function(){var d=this;var c=a.jqx.mobile.isTouchDevice();var b="mousedown";if(c){b=a.jqx.mobile.getTouchEventName("touchend")}this.addHandler(this.box,b,function(e){if(!d.disabled&&!d.enableContainerClick&&!d.locked){d.changeType="mouse";d.toggle();if(d.updated){e.owner=d;d.updated(e,d.checked,d.oldChecked)}if(e.preventDefault){e.preventDefault()}return false}});if(!this.disabledContainer){this.addHandler(this.host,"keydown",function(e){if(!d.disabled&&!d.locked&&d.keyboardCheck){if(e.keyCode==32){if(!d._canFocus){return true}d.changeType="keyboard";d.toggle();if(d.updated){e.owner=d;d.updated(e,d.checked,d.oldChecked)}if(e.preventDefault){e.preventDefault()}return false}}});this.addHandler(this.host,b,function(e){if(!d.disabled&&d.enableContainerClick&&!d.locked){d.clickTime=new Date();d.changeType="mouse";d.toggle();if(e.preventDefault){e.preventDefault()}if(d._canFocus){d.focus()}return false}});this.addHandler(this.host,"selectstart",function(e){if(!d.disabled&&d.enableContainerClick){if(e.preventDefault){e.preventDefault()}return false}});this.addHandler(this.host,"mouseup",function(e){if(!d.disabled&&d.enableContainerClick){if(e.preventDefault){e.preventDefault()}}});this.addHandler(this.host,"focus",function(e){if(!d.disabled&&!d.locked){if(!d._canFocus){return true}if(d.enableHover){d.box.addClass(d.toThemeProperty("jqx-checkbox-hover"))}d.box.addClass(d.toThemeProperty("jqx-fill-state-focus"));if(e.preventDefault){e.preventDefault()}a(d.checkbox).removeClass("active");if(!d.clickTime||(d.clickTime&&(new Date()-d.clickTime>300))){a(d.checkbox).addClass("active")}d.hovered=true;return false}});this.addHandler(this.host,"blur",function(e){a(d.checkbox).removeClass("active");if(!d.disabled&&!d.locked){if(!d._canFocus){return true}if(d.enableHover){d.box.removeClass(d.toThemeProperty("jqx-checkbox-hover"))}d.box.removeClass(d.toThemeProperty("jqx-fill-state-focus"));if(e.preventDefault){e.preventDefault()}d.hovered=false;return false}});this.addHandler(this.host,"mouseenter",function(e){if(d.locked){d.host.css("cursor","arrow")}if(d.enableHover){if(!d.disabled&&d.enableContainerClick&&!d.locked){d.box.addClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.addClass(d.toThemeProperty("jqx-fill-state-hover"));if(e.preventDefault){e.preventDefault()}d.hovered=true;return false}}});this.addHandler(this.host,"mouseleave",function(e){if(d.enableHover){if(!d.disabled&&d.enableContainerClick&&!d.locked){d.box.removeClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.removeClass(d.toThemeProperty("jqx-fill-state-hover"));if(e.preventDefault){e.preventDefault()}d.hovered=false;return false}}});this.addHandler(this.box,"mouseenter",function(){if(d.locked){return}if(!d.disabled&&!d.enableContainerClick){d.box.addClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.addClass(d.toThemeProperty("jqx-fill-state-hover"))}});this.addHandler(this.box,"mouseleave",function(){if(!d.disabled&&!d.enableContainerClick){d.box.removeClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.removeClass(d.toThemeProperty("jqx-fill-state-hover"))}})}},focus:function(){try{this.host.focus()}catch(b){}},_removeHandlers:function(){var c=a.jqx.mobile.isTouchDevice();var b="mousedown";if(c){b="touchend"}if(this.box){this.removeHandler(this.box,b);this.removeHandler(this.box,"mouseenter");this.removeHandler(this.box,"mouseleave")}this.removeHandler(this.host,b);this.removeHandler(this.host,"mouseup");this.removeHandler(this.host,"selectstart");this.removeHandler(this.host,"mouseenter");this.removeHandler(this.host,"mouseleave");this.removeHandler(this.host,"keydown");this.removeHandler(this.host,"blur");this.removeHandler(this.host,"focus")},_render:function(){if(!this.disabled){if(this.enableContainerClick){this.host.css("cursor","pointer")}else{if(!this.init){this.host.css("cursor","auto")}}}else{this.disable()}if(this.rtl){this.box.addClass(this.toThemeProperty("jqx-checkbox-rtl"));this.host.addClass(this.toThemeProperty("jqx-rtl"))}this.updateStates();this.host.attr("checked",this.checked)},_setState:function(c,b){if(this.checked!=c){this.checked=c;if(this.checked){this.checkMark[0].className=this.toThemeProperty("jqx-checkbox-check-checked")}else{if(this.checked==null){this.checkMark[0].className=this.toThemeProperty("jqx-checkbox-check-indeterminate")}else{this.checkMark[0].className=""}}}if(b===false||b===true){this.locked=b}if(c){this.element.setAttribute("checked",true)}else{this.element.removeAttribute("checked")}},val:function(b){if(arguments.length==0||(b!=null&&typeof(b)=="object")){return this.checked}if(typeof b=="string"){if(b=="true"){this.check()}if(b=="false"){this.uncheck()}if(b==""){this.indeterminate()}}else{if(b==true){this.check()}if(b==false){this.uncheck()}if(b==null){this.indeterminate()}}return this.checked},check:function(){this.checked=true;var c=this;this.checkMark.removeClass();this.element.setAttribute("checked",true);if(a.jqx.browser.msie||this.animationShowDelay==0){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-checked"))}else{this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-checked"));this.checkMark.css("opacity",0);this.checkMark.stop().animate({opacity:1},this.animationShowDelay,function(){})}if(this.groupName!=null&&this.groupName.length>0){var d=a.find(this.toThemeProperty(".jqx-checkbox",true));a.each(d,function(){var e=a(this).jqxCheckBox("groupName");if(e==c.groupName&&this!=c.element){a(this).jqxCheckBox("uncheck")}})}var b=this.changeType;this._raiseEvent("0",{checked:true});this.changeType=b;this._raiseEvent("3",{checked:true});if(this.input!=undefined){this.input.val(this.checked);a.jqx.aria(this,"aria-checked",this.checked);this.host.attr("checked",this.checked)}},uncheck:function(){this.checked=false;var c=this;this.element.removeAttribute("checked");if(a.jqx.browser.msie||this.animationHideDelay==0){if(c.checkMark[0].className!=""){c.checkMark[0].className=""}}else{this.checkMark.css("opacity",1);this.checkMark.stop().animate({opacity:0},this.animationHideDelay,function(){if(c.checkMark[0].className!=""){c.checkMark[0].className=""}})}var b=this.changeType;this._raiseEvent("1");this.changeType=b;this._raiseEvent("3",{checked:false});if(this.input!=undefined){this.input.val(this.checked);a.jqx.aria(this,"aria-checked",this.checked);this.host.attr("checked",this.checked)}},indeterminate:function(){this.checked=null;this.checkMark.removeClass();if(a.jqx.browser.msie||this.animationShowDelay==0){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-indeterminate"))}else{this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-indeterminate"));this.checkMark.css("opacity",0);this.checkMark.stop().animate({opacity:1},this.animationShowDelay,function(){})}var b=this.changeType;this._raiseEvent("2");this._raiseEvent("3",{checked:null});if(this.input!=undefined){this.input.val(this.checked);a.jqx.aria(this,"aria-checked","undefined");this.host.attr("checked","undefined")}},toggle:function(){if(this.disabled){return}if(this.locked){return}if(this.groupName!=null&&this.groupName.length>0){if(this.checked!=true){this.checked=true;this.updateStates()}return}this.oldChecked=this.checked;if(this.checked==true){this.checked=this.hasThreeStates?null:false}else{this.checked=this.checked!=null}this.updateStates();if(this.input!=undefined){this.input.val(this.checked)}},updateStates:function(){if(this.checked){this.check()}else{if(this.checked==false){this.uncheck()}else{if(this.checked==null){this.indeterminate()}}}},disable:function(){this.disabled=true;if(this.checked==true){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-disabled"))}else{if(this.checked==null){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-indeterminate-disabled"))}}this.box.addClass(this.toThemeProperty("jqx-checkbox-disabled-box"));this.host.addClass(this.toThemeProperty("jqx-checkbox-disabled"));this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"));this.box.addClass(this.toThemeProperty("jqx-checkbox-disabled"));a.jqx.aria(this,"aria-disabled",this.disabled)},enable:function(){if(this.checked==true){this.checkMark.removeClass(this.toThemeProperty("jqx-checkbox-check-disabled"))}else{if(this.checked==null){this.checkMark.removeClass(this.toThemeProperty("jqx-checkbox-check-indeterminate-disabled"))}}this.box.removeClass(this.toThemeProperty("jqx-checkbox-disabled-box"));this.host.removeClass(this.toThemeProperty("jqx-checkbox-disabled"));this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"));this.box.removeClass(this.toThemeProperty("jqx-checkbox-disabled"));this.disabled=false;a.jqx.aria(this,"aria-disabled",this.disabled)},destroy:function(){this.host.remove()},_raiseEvent:function(g,e){if(this.init){return}var c=this.events[g];var f=new a.Event(c);f.owner=this;if(!e){e={}}e.type=this.changeType;this.changeType=null;f.args=e;try{var b=this.host.trigger(f)}catch(d){}return b},propertiesChangedHandler:function(b,c,d){if(d.width&&d.height&&Object.keys(d).length==2){b.setSize()}},propertyChangedHandler:function(b,c,e,d){if(this.isInitialized==undefined||this.isInitialized==false){return}if(b.batchUpdate&&b.batchUpdate.width&&b.batchUpdate.height&&Object.keys(b.batchUpdate).length==2){return}if(c=="enableContainerClick"&&!b.disabled&&!b.locked){if(d){b.host.css("cursor","pointer")}else{b.host.css("cursor","auto")}}if(c=="rtl"){if(d){b.box.addClass(b.toThemeProperty("jqx-checkbox-rtl"));b.host.addClass(b.toThemeProperty("jqx-rtl"))}else{b.box.removeClass(b.toThemeProperty("jqx-checkbox-rtl"));b.host.removeClass(b.toThemeProperty("jqx-rtl"))}}if(c=="boxSize"){b.render()}if(c=="theme"){a.jqx.utilities.setTheme(e,d,b.host)}if(c=="checked"){if(d!=e){switch(d){case true:b.check();break;case false:b.uncheck();break;case null:b.indeterminate();break}}}if(c=="disabled"){if(d!=e){if(d){b.disable()}else{b.enable()}}}}})})(jqxBaseFramework);



/***/ }),

/***/ "./src/assets/jqwidgets/jqxcore.js":
/*!*****************************************!*\
  !*** ./src/assets/jqwidgets/jqxcore.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
jQWidgets v8.2.0 (2019-Sep)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

var oldBrowser=document.all&&!document.addEventListener;if(!oldBrowser){(function(bd,G){var q,an,ak=bd.document,bo=bd.location,bt=bd.navigator,ax=bd.JQXLite,X=bd.$,aR=Array.prototype.push,aD=Array.prototype.slice,aA=Array.prototype.indexOf,y=Object.prototype.toString,b=Object.prototype.hasOwnProperty,aw=String.prototype.trim,C=function(bu,bv){return new C.fn.init(bu,bv,q)},aE=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,at=/\S/,a8=/\s+/,S=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,aF=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,e=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,j=/^[\],:{}\s]*$/,t=/(?:^|:|,)(?:\s*\[)+/g,a5=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,K=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,au=/^-ms-/,aS=/-([\da-z])/gi,m=function(bu,bv){return(bv+"").toUpperCase()},a4=function(){if(ak.addEventListener){ak.removeEventListener("DOMContentLoaded",a4,false);C.ready()}else{if(ak.readyState==="complete"){ak.detachEvent("onreadystatechange",a4);C.ready()}}},a0={};C.fn=C.prototype={constructor:C,init:function(bu,bx,by){var bw,bz,bv,bA;if(!bu){return this}if(bu.nodeType){this.context=this[0]=bu;this.length=1;return this}if(typeof bu==="string"){if(bu.charAt(0)==="<"&&bu.charAt(bu.length-1)===">"&&bu.length>=3){bw=[null,bu,null]}else{bw=aF.exec(bu)}if(bw&&(bw[1]||!bx)){if(bw[1]){bx=bx instanceof C?bx[0]:bx;bA=(bx&&bx.nodeType?bx.ownerDocument||bx:ak);bu=C.parseHTML(bw[1],bA,true);if(e.test(bw[1])&&C.isPlainObject(bx)){this.attr.call(bu,bx,true)}return C.merge(this,bu)}else{bz=ak.getElementById(bw[2]);if(bz&&bz.parentNode){if(bz.id!==bw[2]){return by.find(bu)}this.length=1;this[0]=bz}this.context=ak;this.selector=bu;return this}}else{if(!bx||bx.jqx){return(bx||by).find(bu)}else{return this.constructor(bx).find(bu)}}}else{if(C.isFunction(bu)){return by.ready(bu)}}if(bu.selector!==G){this.selector=bu.selector;this.context=bu.context}return C.makeArray(bu,this)},selector:"",jqx:"4.5.0",length:0,size:function(){return this.length},toArray:function(){return aD.call(this)},get:function(bu){return bu==null?this.toArray():(bu<0?this[this.length+bu]:this[bu])},pushStack:function(bv,bx,bu){var bw=C.merge(this.constructor(),bv);bw.prevObject=this;bw.context=this.context;if(bx==="find"){bw.selector=this.selector+(this.selector?" ":"")+bu}else{if(bx){bw.selector=this.selector+"."+bx+"("+bu+")"}}return bw},each:function(bv,bu){return C.each(this,bv,bu)},ready:function(bu){C.ready.promise().done(bu);return this},eq:function(bu){bu=+bu;return bu===-1?this.slice(bu):this.slice(bu,bu+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(aD.apply(this,arguments),"slice",aD.call(arguments).join(","))},map:function(bu){return this.pushStack(C.map(this,function(bw,bv){return bu.call(bw,bv,bw)}))},end:function(){return this.prevObject||this.constructor(null)},push:aR,sort:[].sort,splice:[].splice};C.fn.init.prototype=C.fn;C.extend=C.fn.extend=function(){var bD,bw,bu,bv,bA,bB,bz=arguments[0]||{},by=1,bx=arguments.length,bC=false;if(typeof bz==="boolean"){bC=bz;bz=arguments[1]||{};by=2}if(typeof bz!=="object"&&!C.isFunction(bz)){bz={}}if(bx===by){bz=this;--by}for(;by<bx;by++){if((bD=arguments[by])!=null){for(bw in bD){bu=bz[bw];bv=bD[bw];if(bz===bv){continue}if(bC&&bv&&(C.isPlainObject(bv)||(bA=C.isArray(bv)))){if(bA){bA=false;bB=bu&&C.isArray(bu)?bu:[]}else{bB=bu&&C.isPlainObject(bu)?bu:{}}bz[bw]=C.extend(bC,bB,bv)}else{if(bv!==G){bz[bw]=bv}}}}}return bz};C.extend({noConflict:function(bu){if(bd.$===C){bd.$=X}if(bu&&bd.JQXLite===C){bd.JQXLite=ax}return C},isReady:false,readyWait:1,holdReady:function(bu){if(bu){C.readyWait++}else{C.ready(true)}},ready:function(bu){if(bu===true?--C.readyWait:C.isReady){return}if(!ak.body){return setTimeout(C.ready,1)}C.isReady=true;if(bu!==true&&--C.readyWait>0){return}an.resolveWith(ak,[C]);if(C.fn.trigger){C(ak).trigger("ready").off("ready")}},isFunction:function(bu){return C.type(bu)==="function"},isArray:Array.isArray||function(bu){return C.type(bu)==="array"},isWindow:function(bu){return bu!=null&&bu==bu.window},isNumeric:function(bu){return !isNaN(parseFloat(bu))&&isFinite(bu)},type:function(bu){return bu==null?String(bu):a0[y.call(bu)]||"object"},isPlainObject:function(bw){if(!bw||C.type(bw)!=="object"||bw.nodeType||C.isWindow(bw)){return false}try{if(bw.constructor&&!b.call(bw,"constructor")&&!b.call(bw.constructor.prototype,"isPrototypeOf")){return false}}catch(bv){return false}var bu;for(bu in bw){}return bu===G||b.call(bw,bu)},isEmptyObject:function(bv){var bu;for(bu in bv){return false}return true},error:function(bu){throw new Error(bu)},parseHTML:function(bx,bw,bu){var bv;if(!bx||typeof bx!=="string"){return null}if(typeof bw==="boolean"){bu=bw;bw=0}bw=bw||ak;if((bv=e.exec(bx))){return[bw.createElement(bv[1])]}bv=C.buildFragment([bx],bw,bu?null:[]);return C.merge([],(bv.cacheable?C.clone(bv.fragment):bv.fragment).childNodes)},parseJSON:function(bu){if(!bu||typeof bu!=="string"){return null}bu=C.trim(bu);if(bd.JSON&&bd.JSON.parse){return bd.JSON.parse(bu)}if(j.test(bu.replace(a5,"@").replace(K,"]").replace(t,""))){return(new Function("return "+bu))()}C.error("Invalid JSON: "+bu)},parseXML:function(bw){var bu,bv;if(!bw||typeof bw!=="string"){return null}try{if(bd.DOMParser){bv=new DOMParser();bu=bv.parseFromString(bw,"text/xml")}else{bu=new ActiveXObject("Microsoft.XMLDOM");bu.async="false";bu.loadXML(bw)}}catch(bx){bu=G}if(!bu||!bu.documentElement||bu.getElementsByTagName("parsererror").length){C.error("Invalid XML: "+bw)}return bu},noop:function(){},globalEval:function(bu){if(bu&&at.test(bu)){(bd.execScript||function(bv){bd["eval"].call(bd,bv)})(bu)}},camelCase:function(bu){return bu.replace(au,"ms-").replace(aS,m)},nodeName:function(bv,bu){return bv.nodeName&&bv.nodeName.toLowerCase()===bu.toLowerCase()},each:function(bz,bA,bw){var bv,bx=0,by=bz.length,bu=by===G||C.isFunction(bz);if(bw){if(bu){for(bv in bz){if(bA.apply(bz[bv],bw)===false){break}}}else{for(;bx<by;){if(bA.apply(bz[bx++],bw)===false){break}}}}else{if(bu){for(bv in bz){if(bA.call(bz[bv],bv,bz[bv])===false){break}}}else{for(;bx<by;){if(bA.call(bz[bx],bx,bz[bx++])===false){break}}}}return bz},trim:aw&&!aw.call("\uFEFF\xA0")?function(bu){return bu==null?"":aw.call(bu)}:function(bu){return bu==null?"":(bu+"").replace(S,"")},makeArray:function(bu,bw){var bx,bv=bw||[];if(bu!=null){bx=C.type(bu);if(bu.length==null||bx==="string"||bx==="function"||bx==="regexp"||C.isWindow(bu)){aR.call(bv,bu)}else{C.merge(bv,bu)}}return bv},inArray:function(bx,bv,bw){var bu;if(bv){if(aA){return aA.call(bv,bx,bw)}bu=bv.length;bw=bw?bw<0?Math.max(0,bu+bw):bw:0;for(;bw<bu;bw++){if(bw in bv&&bv[bw]===bx){return bw}}}return -1},merge:function(by,bw){var bu=bw.length,bx=by.length,bv=0;if(typeof bu==="number"){for(;bv<bu;bv++){by[bx++]=bw[bv]}}else{while(bw[bv]!==G){by[bx++]=bw[bv++]}}by.length=bx;return by},grep:function(bv,bA,bu){var bz,bw=[],bx=0,by=bv.length;bu=!!bu;for(;bx<by;bx++){bz=!!bA(bv[bx],bx);if(bu!==bz){bw.push(bv[bx])}}return bw},map:function(bu,bB,bC){var bz,bA,by=[],bw=0,bv=bu.length,bx=bu instanceof C||bv!==G&&typeof bv==="number"&&((bv>0&&bu[0]&&bu[bv-1])||bv===0||C.isArray(bu));if(bx){for(;bw<bv;bw++){bz=bB(bu[bw],bw,bC);if(bz!=null){by[by.length]=bz}}}else{for(bA in bu){bz=bB(bu[bA],bA,bC);if(bz!=null){by[by.length]=bz}}}return by.concat.apply([],by)},guid:1,proxy:function(by,bx){var bw,bu,bv;if(typeof bx==="string"){bw=by[bx];bx=by;by=bw}if(!C.isFunction(by)){return G}bu=aD.call(arguments,2);bv=function(){return by.apply(bx,bu.concat(aD.call(arguments)))};bv.guid=by.guid=by.guid||C.guid++;return bv},access:function(bu,bA,bD,bB,by,bE,bC){var bw,bz=bD==null,bx=0,bv=bu.length;if(bD&&typeof bD==="object"){for(bx in bD){C.access(bu,bA,bx,bD[bx],1,bE,bB)}by=1}else{if(bB!==G){bw=bC===G&&C.isFunction(bB);if(bz){if(bw){bw=bA;bA=function(bG,bF,bH){return bw.call(C(bG),bH)}}else{bA.call(bu,bB);bA=null}}if(bA){for(;bx<bv;bx++){bA(bu[bx],bD,bw?bB.call(bu[bx],bx,bA(bu[bx],bD)):bB,bC)}}by=1}}return by?bu:bz?bA.call(bu):bv?bA(bu[0],bD):bE},now:function(){return(new Date()).getTime()}});C.ready.promise=function(bx){if(!an){an=C.Deferred();if(ak.readyState==="complete"){setTimeout(C.ready,1)}else{if(ak.addEventListener){ak.addEventListener("DOMContentLoaded",a4,false);bd.addEventListener("load",C.ready,false)}else{ak.attachEvent("onreadystatechange",a4);bd.attachEvent("onload",C.ready);var bw=false;try{bw=bd.frameElement==null&&ak.documentElement}catch(bv){}if(bw&&bw.doScroll){(function bu(){if(!C.isReady){try{bw.doScroll("left")}catch(by){return setTimeout(bu,50)}C.ready()}})()}}}}return an.promise(bx)};C.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(bv,bu){a0["[object "+bu+"]"]=bu.toLowerCase()});q=C(ak);var aX={};function B(bv){var bu=aX[bv]={};C.each(bv.split(a8),function(bx,bw){bu[bw]=true});return bu}C.Callbacks=function(bE){bE=typeof bE==="string"?(aX[bE]||B(bE)):C.extend({},bE);var bx,bu,by,bw,bz,bA,bB=[],bC=!bE.once&&[],bv=function(bF){bx=bE.memory&&bF;bu=true;bA=bw||0;bw=0;bz=bB.length;by=true;for(;bB&&bA<bz;bA++){if(bB[bA].apply(bF[0],bF[1])===false&&bE.stopOnFalse){bx=false;break}}by=false;if(bB){if(bC){if(bC.length){bv(bC.shift())}}else{if(bx){bB=[]}else{bD.disable()}}}},bD={add:function(){if(bB){var bG=bB.length;(function bF(bH){C.each(bH,function(bJ,bI){var bK=C.type(bI);if(bK==="function"){if(!bE.unique||!bD.has(bI)){bB.push(bI)}}else{if(bI&&bI.length&&bK!=="string"){bF(bI)}}})})(arguments);if(by){bz=bB.length}else{if(bx){bw=bG;bv(bx)}}}return this},remove:function(){if(bB){C.each(arguments,function(bH,bF){var bG;while((bG=C.inArray(bF,bB,bG))>-1){bB.splice(bG,1);if(by){if(bG<=bz){bz--}if(bG<=bA){bA--}}}})}return this},has:function(bF){return C.inArray(bF,bB)>-1},empty:function(){bB=[];return this},disable:function(){bB=bC=bx=G;return this},disabled:function(){return !bB},lock:function(){bC=G;if(!bx){bD.disable()}return this},locked:function(){return !bC},fireWith:function(bG,bF){bF=bF||[];bF=[bG,bF.slice?bF.slice():bF];if(bB&&(!bu||bC)){if(by){bC.push(bF)}else{bv(bF)}}return this},fire:function(){bD.fireWith(this,arguments);return this},fired:function(){return !!bu}};return bD};C.extend({Deferred:function(bw){var bv=[["resolve","done",C.Callbacks("once memory"),"resolved"],["reject","fail",C.Callbacks("once memory"),"rejected"],["notify","progress",C.Callbacks("memory")]],bx="pending",by={state:function(){return bx},always:function(){bu.done(arguments).fail(arguments);return this},then:function(){var bz=arguments;return C.Deferred(function(bA){C.each(bv,function(bC,bB){var bE=bB[0],bD=bz[bC];bu[bB[1]](C.isFunction(bD)?function(){var bF=bD.apply(this,arguments);if(bF&&C.isFunction(bF.promise)){bF.promise().done(bA.resolve).fail(bA.reject).progress(bA.notify)}else{bA[bE+"With"](this===bu?bA:this,[bF])}}:bA[bE])});bz=null}).promise()},promise:function(bz){return bz!=null?C.extend(bz,by):by}},bu={};by.pipe=by.then;C.each(bv,function(bA,bz){var bC=bz[2],bB=bz[3];by[bz[1]]=bC.add;if(bB){bC.add(function(){bx=bB},bv[bA^1][2].disable,bv[2][2].lock)}bu[bz[0]]=bC.fire;bu[bz[0]+"With"]=bC.fireWith});by.promise(bu);if(bw){bw.call(bu,bu)}return bu},when:function(by){var bw=0,bA=aD.call(arguments),bu=bA.length,bv=bu!==1||(by&&C.isFunction(by.promise))?bu:0,bD=bv===1?by:C.Deferred(),bx=function(bF,bG,bE){return function(bH){bG[bF]=this;bE[bF]=arguments.length>1?aD.call(arguments):bH;if(bE===bC){bD.notifyWith(bG,bE)}else{if(!(--bv)){bD.resolveWith(bG,bE)}}}},bC,bz,bB;if(bu>1){bC=new Array(bu);bz=new Array(bu);bB=new Array(bu);for(;bw<bu;bw++){if(bA[bw]&&C.isFunction(bA[bw].promise)){bA[bw].promise().done(bx(bw,bB,bA)).fail(bD.reject).progress(bx(bw,bz,bC))}else{--bv}}}if(!bv){bD.resolveWith(bB,bA)}return bD.promise()}});C.support=(function(){var bG,bF,bD,bE,bx,bC,bB,bz,by,bw,bu,bv=ak.createElement("div");bv.setAttribute("className","t");bv.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";bF=bv.getElementsByTagName("*");bD=bv.getElementsByTagName("a")[0];if(!bF||!bD||!bF.length){return{}}bE=ak.createElement("select");bx=bE.appendChild(ak.createElement("option"));bC=bv.getElementsByTagName("input")[0];bD.style.cssText="top:1px;float:left;opacity:.5";bG={leadingWhitespace:(bv.firstChild.nodeType===3),tbody:!bv.getElementsByTagName("tbody").length,htmlSerialize:!!bv.getElementsByTagName("link").length,style:/top/.test(bD.getAttribute("style")),hrefNormalized:(bD.getAttribute("href")==="/a"),opacity:/^0.5/.test(bD.style.opacity),cssFloat:!!bD.style.cssFloat,checkOn:(bC.value==="on"),optSelected:bx.selected,getSetAttribute:bv.className!=="t",enctype:!!ak.createElement("form").enctype,html5Clone:ak.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(ak.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};bC.checked=true;bG.noCloneChecked=bC.cloneNode(true).checked;bE.disabled=true;bG.optDisabled=!bx.disabled;try{delete bv.test}catch(bA){bG.deleteExpando=false}if(!bv.addEventListener&&bv.attachEvent&&bv.fireEvent){bv.attachEvent("onclick",bu=function(){bG.noCloneEvent=false});bv.cloneNode(true).fireEvent("onclick");bv.detachEvent("onclick",bu)}bC=ak.createElement("input");bC.value="t";bC.setAttribute("type","radio");bG.radioValue=bC.value==="t";bC.setAttribute("checked","checked");bC.setAttribute("name","t");bv.appendChild(bC);bB=ak.createDocumentFragment();bB.appendChild(bv.lastChild);bG.checkClone=bB.cloneNode(true).cloneNode(true).lastChild.checked;bG.appendChecked=bC.checked;bB.removeChild(bC);bB.appendChild(bv);if(bv.attachEvent){for(by in {submit:true,change:true,focusin:true}){bz="on"+by;bw=(bz in bv);if(!bw){bv.setAttribute(bz,"return;");bw=(typeof bv[bz]==="function")}bG[by+"Bubbles"]=bw}}C(function(){var bI,bM,bK,bL,bJ="padding:0;margin:0;border:0;display:block;overflow:hidden;",bH=ak.getElementsByTagName("body")[0];if(!bH){return}bI=ak.createElement("div");bI.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";bH.insertBefore(bI,bH.firstChild);bM=ak.createElement("div");bI.appendChild(bM);bM.innerHTML="<table><tr><td></td><td>t</td></tr></table>";bK=bM.getElementsByTagName("td");bK[0].style.cssText="padding:0;margin:0;border:0;display:none";bw=(bK[0].offsetHeight===0);bK[0].style.display="";bK[1].style.display="none";bG.reliableHiddenOffsets=bw&&(bK[0].offsetHeight===0);bM.innerHTML="";bM.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";bG.boxSizing=(bM.offsetWidth===4);bG.doesNotIncludeMarginInBodyOffset=(bH.offsetTop!==1);if(bd.getComputedStyle){bG.pixelPosition=(bd.getComputedStyle(bM,null)||{}).top!=="1%";bG.boxSizingReliable=(bd.getComputedStyle(bM,null)||{width:"4px"}).width==="4px";bL=ak.createElement("div");bL.style.cssText=bM.style.cssText=bJ;bL.style.marginRight=bL.style.width="0";bM.style.width="1px";bM.appendChild(bL);bG.reliableMarginRight=!parseFloat((bd.getComputedStyle(bL,null)||{}).marginRight)}if(typeof bM.style.zoom!=="undefined"){bM.innerHTML="";bM.style.cssText=bJ+"width:1px;padding:1px;display:inline;zoom:1";bG.inlineBlockNeedsLayout=(bM.offsetWidth===3);bM.style.display="block";bM.style.overflow="visible";bM.innerHTML="<div></div>";bM.firstChild.style.width="5px";bG.shrinkWrapBlocks=(bM.offsetWidth!==3);bI.style.zoom=1}bH.removeChild(bI);bI=bM=bK=bL=null});bB.removeChild(bv);bF=bD=bE=bx=bC=bB=bv=null;return bG})();var aK=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,aq=/([A-Z])/g;C.extend({cache:{},deletedIds:[],uuid:0,expando:"JQXLite"+(C.fn.jqx+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(bu){bu=bu.nodeType?C.cache[bu[C.expando]]:bu[C.expando];return !!bu&&!M(bu)},data:function(bx,bv,bz,by){if(!C.acceptData(bx)){return}var bA,bC,bD=C.expando,bB=typeof bv==="string",bE=bx.nodeType,bu=bE?C.cache:bx,bw=bE?bx[bD]:bx[bD]&&bD;if((!bw||!bu[bw]||(!by&&!bu[bw].data))&&bB&&bz===G){return}if(!bw){if(bE){bx[bD]=bw=C.deletedIds.pop()||C.guid++}else{bw=bD}}if(!bu[bw]){bu[bw]={};if(!bE){bu[bw].toJSON=C.noop}}if(typeof bv==="object"||typeof bv==="function"){if(by){bu[bw]=C.extend(bu[bw],bv)}else{bu[bw].data=C.extend(bu[bw].data,bv)}}bA=bu[bw];if(!by){if(!bA.data){bA.data={}}bA=bA.data}if(bz!==G){bA[C.camelCase(bv)]=bz}if(bB){bC=bA[bv];if(bC==null){bC=bA[C.camelCase(bv)]}}else{bC=bA}return bC},removeData:function(bx,bv,by){if(!C.acceptData(bx)){return}var bB,bA,bz,bC=bx.nodeType,bu=bC?C.cache:bx,bw=bC?bx[C.expando]:C.expando;if(!bu[bw]){return}if(bv){bB=by?bu[bw]:bu[bw].data;if(bB){if(!C.isArray(bv)){if(bv in bB){bv=[bv]}else{bv=C.camelCase(bv);if(bv in bB){bv=[bv]}else{bv=bv.split(" ")}}}for(bA=0,bz=bv.length;bA<bz;bA++){delete bB[bv[bA]]}if(!(by?M:C.isEmptyObject)(bB)){return}}}if(!by){delete bu[bw].data;if(!M(bu[bw])){return}}if(bC){C.cleanData([bx],true)}else{if(C.support.deleteExpando||bu!=bu.window){delete bu[bw]}else{bu[bw]=null}}},_data:function(bv,bu,bw){return C.data(bv,bu,bw,true)},acceptData:function(bv){var bu=bv.nodeName&&C.noData[bv.nodeName.toLowerCase()];return !bu||bu!==true&&bv.getAttribute("classid")===bu}});C.fn.extend({data:function(bD,bC){var by,bv,bB,bu,bx,bw=this[0],bA=0,bz=null;if(bD===G){if(this.length){bz=C.data(bw);if(bw.nodeType===1&&!C._data(bw,"parsedAttrs")){bB=bw.attributes;for(bx=bB.length;bA<bx;bA++){bu=bB[bA].name;if(!bu.indexOf("data-")){bu=C.camelCase(bu.substring(5));a9(bw,bu,bz[bu])}}C._data(bw,"parsedAttrs",true)}}return bz}if(typeof bD==="object"){return this.each(function(){C.data(this,bD)})}by=bD.split(".",2);by[1]=by[1]?"."+by[1]:"";bv=by[1]+"!";return C.access(this,function(bE){if(bE===G){bz=this.triggerHandler("getData"+bv,[by[0]]);if(bz===G&&bw){bz=C.data(bw,bD);bz=a9(bw,bD,bz)}return bz===G&&by[1]?this.data(by[0]):bz}by[1]=bE;this.each(function(){var bF=C(this);bF.triggerHandler("setData"+bv,by);C.data(this,bD,bE);bF.triggerHandler("changeData"+bv,by)})},null,bC,arguments.length>1,null,false)},removeData:function(bu){return this.each(function(){C.removeData(this,bu)})}});function a9(bw,bv,bx){if(bx===G&&bw.nodeType===1){var bu="data-"+bv.replace(aq,"-$1").toLowerCase();bx=bw.getAttribute(bu);if(typeof bx==="string"){try{bx=bx==="true"?true:bx==="false"?false:bx==="null"?null:+bx+""===bx?+bx:aK.test(bx)?C.parseJSON(bx):bx}catch(by){}C.data(bw,bv,bx)}else{bx=G}}return bx}function M(bv){var bu;for(bu in bv){if(bu==="data"&&C.isEmptyObject(bv[bu])){continue}if(bu!=="toJSON"){return false}}return true}C.extend({queue:function(bw,bv,bx){var bu;if(bw){bv=(bv||"fx")+"queue";bu=C._data(bw,bv);if(bx){if(!bu||C.isArray(bx)){bu=C._data(bw,bv,C.makeArray(bx))}else{bu.push(bx)}}return bu||[]}},dequeue:function(bz,by){by=by||"fx";var bv=C.queue(bz,by),bA=bv.length,bx=bv.shift(),bu=C._queueHooks(bz,by),bw=function(){C.dequeue(bz,by)};if(bx==="inprogress"){bx=bv.shift();bA--}if(bx){if(by==="fx"){bv.unshift("inprogress")}delete bu.stop;bx.call(bz,bw,bu)}if(!bA&&bu){bu.empty.fire()}},_queueHooks:function(bw,bv){var bu=bv+"queueHooks";return C._data(bw,bu)||C._data(bw,bu,{empty:C.Callbacks("once memory").add(function(){C.removeData(bw,bv+"queue",true);C.removeData(bw,bu,true)})})}});C.fn.extend({queue:function(bu,bv){var bw=2;if(typeof bu!=="string"){bv=bu;bu="fx";bw--}if(arguments.length<bw){return C.queue(this[0],bu)}return bv===G?this:this.each(function(){var bx=C.queue(this,bu,bv);C._queueHooks(this,bu);if(bu==="fx"&&bx[0]!=="inprogress"){C.dequeue(this,bu)}})},dequeue:function(bu){return this.each(function(){C.dequeue(this,bu)})},delay:function(bv,bu){bv=C.fx?C.fx.speeds[bv]||bv:bv;bu=bu||"fx";return this.queue(bu,function(bx,bw){var by=setTimeout(bx,bv);bw.stop=function(){clearTimeout(by)}})},clearQueue:function(bu){return this.queue(bu||"fx",[])},promise:function(bw,bA){var bv,bx=1,bB=C.Deferred(),bz=this,bu=this.length,by=function(){if(!(--bx)){bB.resolveWith(bz,[bz])}};if(typeof bw!=="string"){bA=bw;bw=G}bw=bw||"fx";while(bu--){bv=C._data(bz[bu],bw+"queueHooks");if(bv&&bv.empty){bx++;bv.empty.add(by)}}by();return bB.promise(bA)}});var bh,aT,ay,aI=/[\t\r\n]/g,aP=/\r/g,d=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,h=/^a(?:rea|)$/i,ae=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,A=C.support.getSetAttribute;C.fn.extend({attr:function(bu,bv){return C.access(this,C.attr,bu,bv,arguments.length>1)},removeAttr:function(bu){return this.each(function(){C.removeAttr(this,bu)})},prop:function(bu,bv){return C.access(this,C.prop,bu,bv,arguments.length>1)},removeProp:function(bu){bu=C.propFix[bu]||bu;return this.each(function(){try{this[bu]=G;delete this[bu]}catch(bv){}})},addClass:function(by){var bA,bw,bv,bx,bz,bB,bu;if(C.isFunction(by)){return this.each(function(bC){C(this).addClass(by.call(this,bC,this.className))})}if(by&&typeof by==="string"){bA=by.split(a8);for(bw=0,bv=this.length;bw<bv;bw++){bx=this[bw];if(bx.nodeType===1){if(!bx.className&&bA.length===1){bx.className=by}else{bz=" "+bx.className+" ";for(bB=0,bu=bA.length;bB<bu;bB++){if(bz.indexOf(" "+bA[bB]+" ")<0){bz+=bA[bB]+" "}}bx.className=C.trim(bz)}}}}return this},removeClass:function(bA){var bx,by,bz,bB,bv,bw,bu;if(C.isFunction(bA)){return this.each(function(bC){C(this).removeClass(bA.call(this,bC,this.className))})}if((bA&&typeof bA==="string")||bA===G){bx=(bA||"").split(a8);for(bw=0,bu=this.length;bw<bu;bw++){bz=this[bw];if(bz.nodeType===1&&bz.className){by=(" "+bz.className+" ").replace(aI," ");for(bB=0,bv=bx.length;bB<bv;bB++){while(by.indexOf(" "+bx[bB]+" ")>=0){by=by.replace(" "+bx[bB]+" "," ")}}bz.className=bA?C.trim(by):""}}}return this},toggleClass:function(bx,bv){var bw=typeof bx,bu=typeof bv==="boolean";if(C.isFunction(bx)){return this.each(function(by){C(this).toggleClass(bx.call(this,by,this.className,bv),bv)})}return this.each(function(){if(bw==="string"){var bA,bz=0,by=C(this),bB=bv,bC=bx.split(a8);while((bA=bC[bz++])){bB=bu?bB:!by.hasClass(bA);by[bB?"addClass":"removeClass"](bA)}}else{if(bw==="undefined"||bw==="boolean"){if(this.className){C._data(this,"__className__",this.className)}this.className=this.className||bx===false?"":C._data(this,"__className__")||""}}})},hasClass:function(bu){var bx=" "+bu+" ",bw=0,bv=this.length;for(;bw<bv;bw++){if(this[bw].nodeType===1&&(" "+this[bw].className+" ").replace(aI," ").indexOf(bx)>=0){return true}}return false},val:function(bx){var bu,bv,by,bw=this[0];if(!arguments.length){if(bw){bu=C.valHooks[bw.type]||C.valHooks[bw.nodeName.toLowerCase()];if(bu&&"get" in bu&&(bv=bu.get(bw,"value"))!==G){return bv}bv=bw.value;return typeof bv==="string"?bv.replace(aP,""):bv==null?"":bv}return}by=C.isFunction(bx);return this.each(function(bA){var bB,bz=C(this);if(this.nodeType!==1){return}if(by){bB=bx.call(this,bA,bz.val())}else{bB=bx}if(bB==null){bB=""}else{if(typeof bB==="number"){bB+=""}else{if(C.isArray(bB)){bB=C.map(bB,function(bC){return bC==null?"":bC+""})}}}bu=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()];if(!bu||!("set" in bu)||bu.set(this,bB,"value")===G){this.value=bB}})}});C.extend({valHooks:{option:{get:function(bu){var bv=bu.attributes.value;return !bv||bv.specified?bu.value:bu.text}},select:{get:function(bu){var bA,bw,bC=bu.options,by=bu.selectedIndex,bx=bu.type==="select-one"||by<0,bB=bx?null:[],bz=bx?by+1:bC.length,bv=by<0?bz:bx?by:0;for(;bv<bz;bv++){bw=bC[bv];if((bw.selected||bv===by)&&(C.support.optDisabled?!bw.disabled:bw.getAttribute("disabled")===null)&&(!bw.parentNode.disabled||!C.nodeName(bw.parentNode,"optgroup"))){bA=C(bw).val();if(bx){return bA}bB.push(bA)}}return bB},set:function(bv,bw){var bu=C.makeArray(bw);C(bv).find("option").each(function(){this.selected=C.inArray(C(this).val(),bu)>=0});if(!bu.length){bv.selectedIndex=-1}return bu}}},attrFn:{},attr:function(bA,bx,bB,bz){var bw,bu,by,bv=bA.nodeType;if(!bA||bv===3||bv===8||bv===2){return}if(bz&&C.isFunction(C.fn[bx])){return C(bA)[bx](bB)}if(typeof bA.getAttribute==="undefined"){return C.prop(bA,bx,bB)}by=bv!==1||!C.isXMLDoc(bA);if(by){bx=bx.toLowerCase();bu=C.attrHooks[bx]||(ae.test(bx)?aT:bh)}if(bB!==G){if(bB===null){C.removeAttr(bA,bx);return}else{if(bu&&"set" in bu&&by&&(bw=bu.set(bA,bB,bx))!==G){return bw}else{bA.setAttribute(bx,bB+"");return bB}}}else{if(bu&&"get" in bu&&by&&(bw=bu.get(bA,bx))!==null){return bw}else{bw=bA.getAttribute(bx);return bw===null?G:bw}}},removeAttr:function(bx,bz){var by,bA,bv,bu,bw=0;if(bz&&bx.nodeType===1){bA=bz.split(a8);for(;bw<bA.length;bw++){bv=bA[bw];if(bv){by=C.propFix[bv]||bv;bu=ae.test(bv);if(!bu){C.attr(bx,bv,"")}bx.removeAttribute(A?bv:by);if(bu&&by in bx){bx[by]=false}}}}},attrHooks:{type:{set:function(bu,bv){if(d.test(bu.nodeName)&&bu.parentNode){C.error("type property can't be changed")}else{if(!C.support.radioValue&&bv==="radio"&&C.nodeName(bu,"input")){var bw=bu.value;bu.setAttribute("type",bv);if(bw){bu.value=bw}return bv}}}},value:{get:function(bv,bu){if(bh&&C.nodeName(bv,"button")){return bh.get(bv,bu)}return bu in bv?bv.value:null},set:function(bv,bw,bu){if(bh&&C.nodeName(bv,"button")){return bh.set(bv,bw,bu)}bv.value=bw}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bz,bx,bA){var bw,bu,by,bv=bz.nodeType;if(!bz||bv===3||bv===8||bv===2){return}by=bv!==1||!C.isXMLDoc(bz);if(by){bx=C.propFix[bx]||bx;bu=C.propHooks[bx]}if(bA!==G){if(bu&&"set" in bu&&(bw=bu.set(bz,bA,bx))!==G){return bw}else{return(bz[bx]=bA)}}else{if(bu&&"get" in bu&&(bw=bu.get(bz,bx))!==null){return bw}else{return bz[bx]}}},propHooks:{tabIndex:{get:function(bv){var bu=bv.getAttributeNode("tabindex");return bu&&bu.specified?parseInt(bu.value,10):z.test(bv.nodeName)||h.test(bv.nodeName)&&bv.href?0:G}}}});aT={get:function(bv,bu){var bx,bw=C.prop(bv,bu);return bw===true||typeof bw!=="boolean"&&(bx=bv.getAttributeNode(bu))&&bx.nodeValue!==false?bu.toLowerCase():G},set:function(bv,bx,bu){var bw;if(bx===false){C.removeAttr(bv,bu)}else{bw=C.propFix[bu]||bu;if(bw in bv){bv[bw]=true}bv.setAttribute(bu,bu.toLowerCase())}return bu}};if(!C.support.enctype){C.propFix.enctype="encoding"}var bf=/^(?:textarea|input|select)$/i,n=/^([^\.]*|)(?:\.(.+)|)$/,F=/(?:^|\s)hover(\.\S+|)\b/,aH=/^key/,bi=/^(?:mouse|contextmenu)|click/,N=/^(?:focusinfocus|focusoutblur)$/,bs=function(bu){return C.event.special.hover?bu:bu.replace(F,"mouseenter$1 mouseleave$1")};C.event={add:function(bx,bB,bI,bz,by){var bC,bA,bJ,bH,bG,bE,bu,bF,bv,bw,bD;if(bx.nodeType===3||bx.nodeType===8||!bB||!bI||!(bC=C._data(bx))){return}if(bI.handler){bv=bI;bI=bv.handler;by=bv.selector}if(!bI.guid){bI.guid=C.guid++}bJ=bC.events;if(!bJ){bC.events=bJ={}}bA=bC.handle;if(!bA){bC.handle=bA=function(bK){return typeof C!=="undefined"&&(!bK||C.event.triggered!==bK.type)?C.event.dispatch.apply(bA.elem,arguments):G};bA.elem=bx}bB=C.trim(bs(bB)).split(" ");for(bH=0;bH<bB.length;bH++){bG=n.exec(bB[bH])||[];bE=bG[1];bu=(bG[2]||"").split(".").sort();bD=C.event.special[bE]||{};bE=(by?bD.delegateType:bD.bindType)||bE;bD=C.event.special[bE]||{};bF=C.extend({type:bE,origType:bG[1],data:bz,handler:bI,guid:bI.guid,selector:by,needsContext:by&&C.expr.match.needsContext.test(by),namespace:bu.join(".")},bv);bw=bJ[bE];if(!bw){bw=bJ[bE]=[];bw.delegateCount=0;if(!bD.setup||bD.setup.call(bx,bz,bu,bA)===false){if(bx.addEventListener){bx.addEventListener(bE,bA,false)}else{if(bx.attachEvent){bx.attachEvent("on"+bE,bA)}}}}if(bD.add){bD.add.call(bx,bF);if(!bF.handler.guid){bF.handler.guid=bI.guid}}if(by){bw.splice(bw.delegateCount++,0,bF)}else{bw.push(bF)}C.event.global[bE]=true}bx=null},global:{},remove:function(bx,bC,bI,by,bB){var bJ,bK,bF,bw,bv,bz,bA,bH,bE,bu,bG,bD=C.hasData(bx)&&C._data(bx);if(!bD||!(bH=bD.events)){return}bC=C.trim(bs(bC||"")).split(" ");for(bJ=0;bJ<bC.length;bJ++){bK=n.exec(bC[bJ])||[];bF=bw=bK[1];bv=bK[2];if(!bF){for(bF in bH){C.event.remove(bx,bF+bC[bJ],bI,by,true)}continue}bE=C.event.special[bF]||{};bF=(by?bE.delegateType:bE.bindType)||bF;bu=bH[bF]||[];bz=bu.length;bv=bv?new RegExp("(^|\\.)"+bv.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(bA=0;bA<bu.length;bA++){bG=bu[bA];if((bB||bw===bG.origType)&&(!bI||bI.guid===bG.guid)&&(!bv||bv.test(bG.namespace))&&(!by||by===bG.selector||by==="**"&&bG.selector)){bu.splice(bA--,1);if(bG.selector){bu.delegateCount--}if(bE.remove){bE.remove.call(bx,bG)}}}if(bu.length===0&&bz!==bu.length){if(!bE.teardown||bE.teardown.call(bx,bv,bD.handle)===false){C.removeEvent(bx,bF,bD.handle)}delete bH[bF]}}if(C.isEmptyObject(bH)){delete bD.handle;C.removeData(bx,"events",true)}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(bv,bC,bA,bJ){if(bA&&(bA.nodeType===3||bA.nodeType===8)){return}var bu,bx,bD,bH,bz,by,bF,bE,bB,bI,bG=bv.type||bv,bw=[];if(N.test(bG+C.event.triggered)){return}if(bG.indexOf("!")>=0){bG=bG.slice(0,-1);bx=true}if(bG.indexOf(".")>=0){bw=bG.split(".");bG=bw.shift();bw.sort()}if((!bA||C.event.customEvent[bG])&&!C.event.global[bG]){return}bv=typeof bv==="object"?bv[C.expando]?bv:new C.Event(bG,bv):new C.Event(bG);bv.type=bG;bv.isTrigger=true;bv.exclusive=bx;bv.namespace=bw.join(".");bv.namespace_re=bv.namespace?new RegExp("(^|\\.)"+bw.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;by=bG.indexOf(":")<0?"on"+bG:"";if(!bA){bu=C.cache;for(bD in bu){if(bu[bD].events&&bu[bD].events[bG]){C.event.trigger(bv,bC,bu[bD].handle.elem,true)}}return}bv.result=G;if(!bv.target){bv.target=bA}bC=bC!=null?C.makeArray(bC):[];bC.unshift(bv);bF=C.event.special[bG]||{};if(bF.trigger&&bF.trigger.apply(bA,bC)===false){return}bB=[[bA,bF.bindType||bG]];if(!bJ&&!bF.noBubble&&!C.isWindow(bA)){bI=bF.delegateType||bG;bH=N.test(bI+bG)?bA:bA.parentNode;for(bz=bA;bH;bH=bH.parentNode){bB.push([bH,bI]);bz=bH}if(bz===(bA.ownerDocument||ak)){bB.push([bz.defaultView||bz.parentWindow||bd,bI])}}for(bD=0;bD<bB.length&&!bv.isPropagationStopped();bD++){bH=bB[bD][0];bv.type=bB[bD][1];bE=(C._data(bH,"events")||{})[bv.type]&&C._data(bH,"handle");if(bE){bE.apply(bH,bC)}bE=by&&bH[by];if(bE&&C.acceptData(bH)&&bE.apply&&bE.apply(bH,bC)===false){bv.preventDefault()}}bv.type=bG;if(!bJ&&!bv.isDefaultPrevented()){if((!bF._default||bF._default.apply(bA.ownerDocument,bC)===false)&&!(bG==="click"&&C.nodeName(bA,"a"))&&C.acceptData(bA)){if(by&&bA[bG]&&((bG!=="focus"&&bG!=="blur")||bv.target.offsetWidth!==0)&&!C.isWindow(bA)){bz=bA[by];if(bz){bA[by]=null}C.event.triggered=bG;bA[bG]();C.event.triggered=G;if(bz){bA[by]=bz}}}}return bv.result},dispatch:function(bu){bu=C.event.fix(bu||bd.event);var bB,bA,bK,bE,bD,bv,bC,bI,bx,bJ,by=((C._data(this,"events")||{})[bu.type]||[]),bz=by.delegateCount,bG=aD.call(arguments),bw=!bu.exclusive&&!bu.namespace,bF=C.event.special[bu.type]||{},bH=[];bG[0]=bu;bu.delegateTarget=this;if(bF.preDispatch&&bF.preDispatch.call(this,bu)===false){return}if(bz&&!(bu.button&&bu.type==="click")){for(bK=bu.target;bK!=this;bK=bK.parentNode||this){if(bK.disabled!==true||bu.type!=="click"){bD={};bC=[];for(bB=0;bB<bz;bB++){bI=by[bB];bx=bI.selector;if(bD[bx]===G){bD[bx]=bI.needsContext?C(bx,this).index(bK)>=0:C.find(bx,this,null,[bK]).length}if(bD[bx]){bC.push(bI)}}if(bC.length){bH.push({elem:bK,matches:bC})}}}}if(by.length>bz){bH.push({elem:this,matches:by.slice(bz)})}for(bB=0;bB<bH.length&&!bu.isPropagationStopped();bB++){bv=bH[bB];bu.currentTarget=bv.elem;for(bA=0;bA<bv.matches.length&&!bu.isImmediatePropagationStopped();bA++){bI=bv.matches[bA];if(bw||(!bu.namespace&&!bI.namespace)||bu.namespace_re&&bu.namespace_re.test(bI.namespace)){bu.data=bI.data;bu.handleObj=bI;bE=((C.event.special[bI.origType]||{}).handle||bI.handler).apply(bv.elem,bG);if(bE!==G){bu.result=bE;if(bE===false){bu.preventDefault();bu.stopPropagation()}}}}}if(bF.postDispatch){bF.postDispatch.call(this,bu)}return bu.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(bv,bu){if(bv.which==null){bv.which=bu.charCode!=null?bu.charCode:bu.keyCode}return bv}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(bx,bw){var by,bz,bu,bv=bw.button,bA=bw.fromElement;if(bx.pageX==null&&bw.clientX!=null){by=bx.target.ownerDocument||ak;bz=by.documentElement;bu=by.body;bx.pageX=bw.clientX+(bz&&bz.scrollLeft||bu&&bu.scrollLeft||0)-(bz&&bz.clientLeft||bu&&bu.clientLeft||0);bx.pageY=bw.clientY+(bz&&bz.scrollTop||bu&&bu.scrollTop||0)-(bz&&bz.clientTop||bu&&bu.clientTop||0)}if(!bx.relatedTarget&&bA){bx.relatedTarget=bA===bx.target?bw.toElement:bA}if(!bx.which&&bv!==G){bx.which=(bv&1?1:(bv&2?3:(bv&4?2:0)))}return bx}},fix:function(bw){if(bw[C.expando]){return bw}var bv,bz,bu=bw,bx=C.event.fixHooks[bw.type]||{},by=bx.props?this.props.concat(bx.props):this.props;bw=C.Event(bu);for(bv=by.length;bv;){bz=by[--bv];bw[bz]=bu[bz]}if(!bw.target){bw.target=bu.srcElement||ak}if(bw.target.nodeType===3){bw.target=bw.target.parentNode}bw.metaKey=!!bw.metaKey;return bx.filter?bx.filter(bw,bu):bw},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(bw,bv,bu){if(C.isWindow(this)){this.onbeforeunload=bu}},teardown:function(bv,bu){if(this.onbeforeunload===bu){this.onbeforeunload=null}}}},simulate:function(bv,bx,bw,bu){var by=C.extend(new C.Event(),bw,{type:bv,isSimulated:true,originalEvent:{}});if(bu){C.event.trigger(by,null,bx)}else{C.event.dispatch.call(bx,by)}if(by.isDefaultPrevented()){bw.preventDefault()}}};C.event.handle=C.event.dispatch;C.removeEvent=ak.removeEventListener?function(bv,bu,bw){if(bv.removeEventListener){bv.removeEventListener(bu,bw,false)}}:function(bw,bv,bx){var bu="on"+bv;if(bw.detachEvent){if(typeof bw[bu]==="undefined"){bw[bu]=null}bw.detachEvent(bu,bx)}};C.Event=function(bv,bu){if(!(this instanceof C.Event)){return new C.Event(bv,bu)}if(bv&&bv.type){this.originalEvent=bv;this.type=bv.type;this.isDefaultPrevented=(bv.defaultPrevented||bv.returnValue===false||bv.getPreventDefault&&bv.getPreventDefault())?f:bn}else{this.type=bv}if(bu){C.extend(this,bu)}this.timeStamp=bv&&bv.timeStamp||C.now();this[C.expando]=true};function bn(){return false}function f(){return true}C.Event.prototype={preventDefault:function(){this.isDefaultPrevented=f;var bu=this.originalEvent;if(!bu){return}if(bu.preventDefault){bu.preventDefault()}else{bu.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=f;var bu=this.originalEvent;if(!bu){return}if(bu.stopPropagation){bu.stopPropagation()}bu.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=f;this.stopPropagation()},isDefaultPrevented:bn,isPropagationStopped:bn,isImmediatePropagationStopped:bn};C.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bv,bu){C.event.special[bv]={delegateType:bu,bindType:bu,handle:function(bz){var bx,bB=this,bA=bz.relatedTarget,by=bz.handleObj,bw=by.selector;if(!bA||(bA!==bB&&!C.contains(bB,bA))){bz.type=by.origType;bx=by.handler.apply(this,arguments);bz.type=bu}return bx}}});C.fn.extend({on:function(bw,bu,bz,by,bv){var bA,bx;if(typeof bw==="object"){if(typeof bu!=="string"){bz=bz||bu;bu=G}for(bx in bw){this.on(bx,bu,bz,bw[bx],bv)}return this}if(bz==null&&by==null){by=bu;bz=bu=G}else{if(by==null){if(typeof bu==="string"){by=bz;bz=G}else{by=bz;bz=bu;bu=G}}}if(by===false){by=bn}else{if(!by){return this}}if(bv===1){bA=by;by=function(bB){C().off(bB);return bA.apply(this,arguments)};by.guid=bA.guid||(bA.guid=C.guid++)}return this.each(function(){C.event.add(this,bw,by,bz,bu)})},off:function(bw,bu,by){var bv,bx;if(bw&&bw.preventDefault&&bw.handleObj){bv=bw.handleObj;C(bw.delegateTarget).off(bv.namespace?bv.origType+"."+bv.namespace:bv.origType,bv.selector,bv.handler);return this}if(typeof bw==="object"){for(bx in bw){this.off(bx,bu,bw[bx])}return this}if(bu===false||typeof bu==="function"){by=bu;bu=G}if(by===false){by=bn}return this.each(function(){C.event.remove(this,bw,by,bu)})},delegate:function(bu,bv,bx,bw){return this.on(bv,bu,bx,bw)},undelegate:function(bu,bv,bw){return arguments.length===1?this.off(bu,"**"):this.off(bv,bu||"**",bw)},trigger:function(bu,bv){return this.each(function(){C.event.trigger(bu,bv,this)})},triggerHandler:function(bu,bv){if(this[0]){return C.event.trigger(bu,bv,this[0],true)}},toggle:function(bx){var bv=arguments,bu=bx.guid||C.guid++,bw=0,by=function(bz){var bA=(C._data(this,"lastToggle"+bx.guid)||0)%bw;C._data(this,"lastToggle"+bx.guid,bA+1);bz.preventDefault();return bv[bA].apply(this,arguments)||false};by.guid=bu;while(bw<bv.length){bv[bw++].guid=bu}return this.click(by)},hover:function(bu,bv){return this.mouseenter(bu).mouseleave(bv||bu)}});C.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(bv,bu){C.fn[bu]=function(bx,bw){if(bw==null){bw=bx;bx=null}return arguments.length>0?this.on(bu,null,bx,bw):this.trigger(bu)};if(aH.test(bu)){C.event.fixHooks[bu]=C.event.keyHooks}if(bi.test(bu)){C.event.fixHooks[bu]=C.event.mouseHooks}});
/*!
         * Sizzle CSS Selector Engine
         * Copyright 2012 JQXLite Foundation and other contributors
         * Released under the MIT license
         * http://sizzlejs.com/
         */
(function(cn,bM){var cs,bF,cg,bv,bR,b5,bI,bL,bH,ce,bE=true,bZ="undefined",cu=("sizcache"+Math.random()).replace(".",""),bz=String,bD=cn.document,bG=bD.documentElement,bW=0,bK=0,b9=[].pop,cr=[].push,bQ=[].slice,bT=[].indexOf||function(cE){var cD=0,cC=this.length;for(;cD<cC;cD++){if(this[cD]===cE){return cD}}return -1},cw=function(cC,cD){cC[cu]=cD==null||cD;return cC},cA=function(){var cC={},cD=[];return cw(function(cE,cF){if(cD.push(cE)>cg.cacheLength){delete cC[cD.shift()]}return(cC[cE+" "]=cF)},cC)},cp=cA(),cq=cA(),bS=cA(),b3="[\\x20\\t\\r\\n\\f]",bP="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",bN=bP.replace("w","w#"),cz="([*^$|!~]?=)",ck="\\["+b3+"*("+bP+")"+b3+"*(?:"+cz+b3+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+bN+")|)|)"+b3+"*\\]",cB=":("+bP+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+ck+")|[^:]|\\\\.)*|.*))\\)|)",b4=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b3+"*((?:-\\d)?\\d*)"+b3+"*\\)|)(?=[^-]|$)",co=new RegExp("^"+b3+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b3+"+$","g"),bA=new RegExp("^"+b3+"*,"+b3+"*"),cc=new RegExp("^"+b3+"*([\\x20\\t\\r\\n\\f>+~])"+b3+"*"),ch=new RegExp(cB),cj=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,b8=/^:not/,cm=/[\x20\t\r\n\f]*[+~]/,cv=/:not\($/,bX=/h\d/i,ci=/input|select|textarea|button/i,bY=/\\(?!\\)/g,cb={ID:new RegExp("^#("+bP+")"),CLASS:new RegExp("^\\.("+bP+")"),NAME:new RegExp("^\\[name=['\"]?("+bP+")['\"]?\\]"),TAG:new RegExp("^("+bP.replace("w","w*")+")"),ATTR:new RegExp("^"+ck),PSEUDO:new RegExp("^"+cB),POS:new RegExp(b4,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+b3+"*(even|odd|(([+-]|)(\\d*)n|)"+b3+"*(?:([+-]|)"+b3+"*(\\d+)|))"+b3+"*\\)|)","i"),needsContext:new RegExp("^"+b3+"*[>+~]|"+b4,"i")},cf=function(cC){var cE=bD.createElement("div");try{return cC(cE)}catch(cD){return false}finally{cE=null}},bC=cf(function(cC){cC.appendChild(bD.createComment(""));return !cC.getElementsByTagName("*").length}),b7=cf(function(cC){cC.innerHTML="<a href='#'></a>";return cC.firstChild&&typeof cC.firstChild.getAttribute!==bZ&&cC.firstChild.getAttribute("href")==="#"}),bV=cf(function(cD){cD.innerHTML="<select></select>";var cC=typeof cD.lastChild.getAttribute("multiple");return cC!=="boolean"&&cC!=="string"}),b6=cf(function(cC){cC.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!cC.getElementsByClassName||!cC.getElementsByClassName("e").length){return false}cC.lastChild.className="e";return cC.getElementsByClassName("e").length===2}),bu=cf(function(cD){cD.id=cu+0;cD.innerHTML="<a name='"+cu+"'></a><div name='"+cu+"'></div>";bG.insertBefore(cD,bG.firstChild);var cC=bD.getElementsByName&&bD.getElementsByName(cu).length===2+bD.getElementsByName(cu+0).length;bF=!bD.getElementById(cu);bG.removeChild(cD);return cC});try{bQ.call(bG.childNodes,0)[0].nodeType}catch(cy){bQ=function(cD){var cE,cC=[];for(;(cE=this[cD]);cD++){cC.push(cE)}return cC}}function cl(cF,cC,cH,cK){cH=cH||[];cC=cC||bD;var cI,cD,cJ,cE,cG=cC.nodeType;if(!cF||typeof cF!=="string"){return cH}if(cG!==1&&cG!==9){return[]}cJ=bR(cC);if(!cJ&&!cK){if((cI=cj.exec(cF))){if((cE=cI[1])){if(cG===9){cD=cC.getElementById(cE);if(cD&&cD.parentNode){if(cD.id===cE){cH.push(cD);return cH}}else{return cH}}else{if(cC.ownerDocument&&(cD=cC.ownerDocument.getElementById(cE))&&b5(cC,cD)&&cD.id===cE){cH.push(cD);return cH}}}else{if(cI[2]){cr.apply(cH,bQ.call(cC.getElementsByTagName(cF),0));return cH}else{if((cE=cI[3])&&b6&&cC.getElementsByClassName){cr.apply(cH,bQ.call(cC.getElementsByClassName(cE),0));return cH}}}}}return ct(cF.replace(co,"$1"),cC,cH,cK,cJ)}cl.matches=function(cD,cC){return cl(cD,null,null,cC)};cl.matchesSelector=function(cC,cD){return cl(cD,null,null,[cC]).length>0};function cd(cC){return function(cE){var cD=cE.nodeName.toLowerCase();return cD==="input"&&cE.type===cC}}function by(cC){return function(cE){var cD=cE.nodeName.toLowerCase();return(cD==="input"||cD==="button")&&cE.type===cC}}function ca(cC){return cw(function(cD){cD=+cD;return cw(function(cE,cI){var cG,cF=cC([],cE.length,cD),cH=cF.length;while(cH--){if(cE[(cG=cF[cH])]){cE[cG]=!(cI[cG]=cE[cG])}}})})}bv=cl.getText=function(cG){var cF,cD="",cE=0,cC=cG.nodeType;if(cC){if(cC===1||cC===9||cC===11){if(typeof cG.textContent==="string"){return cG.textContent}else{for(cG=cG.firstChild;cG;cG=cG.nextSibling){cD+=bv(cG)}}}else{if(cC===3||cC===4){return cG.nodeValue}}}else{for(;(cF=cG[cE]);cE++){cD+=bv(cF)}}return cD};bR=cl.isXML=function(cC){var cD=cC&&(cC.ownerDocument||cC).documentElement;return cD?cD.nodeName!=="HTML":false};b5=cl.contains=bG.contains?function(cD,cC){var cF=cD.nodeType===9?cD.documentElement:cD,cE=cC&&cC.parentNode;return cD===cE||!!(cE&&cE.nodeType===1&&cF.contains&&cF.contains(cE))}:bG.compareDocumentPosition?function(cD,cC){return cC&&!!(cD.compareDocumentPosition(cC)&16)}:function(cD,cC){while((cC=cC.parentNode)){if(cC===cD){return true}}return false};cl.attr=function(cE,cD){var cF,cC=bR(cE);if(!cC){cD=cD.toLowerCase()}if((cF=cg.attrHandle[cD])){return cF(cE)}if(cC||bV){return cE.getAttribute(cD)}cF=cE.getAttributeNode(cD);return cF?typeof cE[cD]==="boolean"?cE[cD]?cD:null:cF.specified?cF.value:null:null};cg=cl.selectors={cacheLength:50,createPseudo:cw,match:cb,attrHandle:b7?{}:{href:function(cC){return cC.getAttribute("href",2)},type:function(cC){return cC.getAttribute("type")}},find:{ID:bF?function(cF,cE,cD){if(typeof cE.getElementById!==bZ&&!cD){var cC=cE.getElementById(cF);return cC&&cC.parentNode?[cC]:[]}}:function(cF,cE,cD){if(typeof cE.getElementById!==bZ&&!cD){var cC=cE.getElementById(cF);return cC?cC.id===cF||typeof cC.getAttributeNode!==bZ&&cC.getAttributeNode("id").value===cF?[cC]:bM:[]}},TAG:bC?function(cC,cD){if(typeof cD.getElementsByTagName!==bZ){return cD.getElementsByTagName(cC)}}:function(cC,cG){var cF=cG.getElementsByTagName(cC);if(cC==="*"){var cH,cE=[],cD=0;for(;(cH=cF[cD]);cD++){if(cH.nodeType===1){cE.push(cH)}}return cE}return cF},NAME:bu&&function(cC,cD){if(typeof cD.getElementsByName!==bZ){return cD.getElementsByName(name)}},CLASS:b6&&function(cE,cD,cC){if(typeof cD.getElementsByClassName!==bZ&&!cC){return cD.getElementsByClassName(cE)}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(cC){cC[1]=cC[1].replace(bY,"");cC[3]=(cC[4]||cC[5]||"").replace(bY,"");if(cC[2]==="~="){cC[3]=" "+cC[3]+" "}return cC.slice(0,4)},CHILD:function(cC){cC[1]=cC[1].toLowerCase();if(cC[1]==="nth"){if(!cC[2]){cl.error(cC[0])}cC[3]=+(cC[3]?cC[4]+(cC[5]||1):2*(cC[2]==="even"||cC[2]==="odd"));cC[4]=+((cC[6]+cC[7])||cC[2]==="odd")}else{if(cC[2]){cl.error(cC[0])}}return cC},PSEUDO:function(cD){var cE,cC;if(cb.CHILD.test(cD[0])){return null}if(cD[3]){cD[2]=cD[3]}else{if((cE=cD[4])){if(ch.test(cE)&&(cC=bw(cE,true))&&(cC=cE.indexOf(")",cE.length-cC)-cE.length)){cE=cE.slice(0,cC);cD[0]=cD[0].slice(0,cC)}cD[2]=cE}}return cD.slice(0,3)}},filter:{ID:bF?function(cC){cC=cC.replace(bY,"");return function(cD){return cD.getAttribute("id")===cC}}:function(cC){cC=cC.replace(bY,"");return function(cE){var cD=typeof cE.getAttributeNode!==bZ&&cE.getAttributeNode("id");return cD&&cD.value===cC}},TAG:function(cC){if(cC==="*"){return function(){return true}}cC=cC.replace(bY,"").toLowerCase();return function(cD){return cD.nodeName&&cD.nodeName.toLowerCase()===cC}},CLASS:function(cC){var cD=cp[cu][cC+" "];return cD||(cD=new RegExp("(^|"+b3+")"+cC+"("+b3+"|$)"))&&cp(cC,function(cE){return cD.test(cE.className||(typeof cE.getAttribute!==bZ&&cE.getAttribute("class"))||"")})},ATTR:function(cE,cD,cC){return function(cH,cG){var cF=cl.attr(cH,cE);if(cF==null){return cD==="!="}if(!cD){return true}cF+="";return cD==="="?cF===cC:cD==="!="?cF!==cC:cD==="^="?cC&&cF.indexOf(cC)===0:cD==="*="?cC&&cF.indexOf(cC)>-1:cD==="$="?cC&&cF.substr(cF.length-cC.length)===cC:cD==="~="?(" "+cF+" ").indexOf(cC)>-1:cD==="|="?cF===cC||cF.substr(0,cC.length+1)===cC+"-":false}},CHILD:function(cC,cE,cF,cD){if(cC==="nth"){return function(cI){var cH,cJ,cG=cI.parentNode;if(cF===1&&cD===0){return true}if(cG){cJ=0;for(cH=cG.firstChild;cH;cH=cH.nextSibling){if(cH.nodeType===1){cJ++;if(cI===cH){break}}}}cJ-=cD;return cJ===cF||(cJ%cF===0&&cJ/cF>=0)}}return function(cH){var cG=cH;switch(cC){case"only":case"first":while((cG=cG.previousSibling)){if(cG.nodeType===1){return false}}if(cC==="first"){return true}cG=cH;case"last":while((cG=cG.nextSibling)){if(cG.nodeType===1){return false}}return true}}},PSEUDO:function(cF,cE){var cC,cD=cg.pseudos[cF]||cg.setFilters[cF.toLowerCase()]||cl.error("unsupported pseudo: "+cF);if(cD[cu]){return cD(cE)}if(cD.length>1){cC=[cF,cF,"",cE];return cg.setFilters.hasOwnProperty(cF.toLowerCase())?cw(function(cI,cK){var cH,cG=cD(cI,cE),cJ=cG.length;while(cJ--){cH=bT.call(cI,cG[cJ]);cI[cH]=!(cK[cH]=cG[cJ])}}):function(cG){return cD(cG,0,cC)}}return cD}},pseudos:{not:cw(function(cC){var cD=[],cE=[],cF=bI(cC.replace(co,"$1"));return cF[cu]?cw(function(cH,cM,cK,cI){var cL,cG=cF(cH,null,cI,[]),cJ=cH.length;while(cJ--){if((cL=cG[cJ])){cH[cJ]=!(cM[cJ]=cL)}}}):function(cI,cH,cG){cD[0]=cI;cF(cD,null,cG,cE);return !cE.pop()}}),has:cw(function(cC){return function(cD){return cl(cC,cD).length>0}}),contains:cw(function(cC){return function(cD){return(cD.textContent||cD.innerText||bv(cD)).indexOf(cC)>-1}}),enabled:function(cC){return cC.disabled===false},disabled:function(cC){return cC.disabled===true},checked:function(cC){var cD=cC.nodeName.toLowerCase();return(cD==="input"&&!!cC.checked)||(cD==="option"&&!!cC.selected)},selected:function(cC){if(cC.parentNode){cC.parentNode.selectedIndex}return cC.selected===true},parent:function(cC){return !cg.pseudos.empty(cC)},empty:function(cD){var cC;cD=cD.firstChild;while(cD){if(cD.nodeName>"@"||(cC=cD.nodeType)===3||cC===4){return false}cD=cD.nextSibling}return true},header:function(cC){return bX.test(cC.nodeName)},text:function(cE){var cD,cC;return cE.nodeName.toLowerCase()==="input"&&(cD=cE.type)==="text"&&((cC=cE.getAttribute("type"))==null||cC.toLowerCase()===cD)},radio:cd("radio"),checkbox:cd("checkbox"),file:cd("file"),password:cd("password"),image:cd("image"),submit:by("submit"),reset:by("reset"),button:function(cD){var cC=cD.nodeName.toLowerCase();return cC==="input"&&cD.type==="button"||cC==="button"},input:function(cC){return ci.test(cC.nodeName)},focus:function(cC){var cD=cC.ownerDocument;return cC===cD.activeElement&&(!cD.hasFocus||cD.hasFocus())&&!!(cC.type||cC.href||~cC.tabIndex)},active:function(cC){return cC===cC.ownerDocument.activeElement},first:ca(function(){return[0]}),last:ca(function(cC,cD){return[cD-1]}),eq:ca(function(cC,cE,cD){return[cD<0?cD+cE:cD]}),even:ca(function(cC,cE){for(var cD=0;cD<cE;cD+=2){cC.push(cD)}return cC}),odd:ca(function(cC,cE){for(var cD=1;cD<cE;cD+=2){cC.push(cD)}return cC}),lt:ca(function(cC,cF,cE){for(var cD=cE<0?cE+cF:cE;--cD>=0;){cC.push(cD)}return cC}),gt:ca(function(cC,cF,cE){for(var cD=cE<0?cE+cF:cE;++cD<cF;){cC.push(cD)}return cC})}};function bx(cD,cC,cE){if(cD===cC){return cE}var cF=cD.nextSibling;while(cF){if(cF===cC){return -1}cF=cF.nextSibling}return 1}bL=bG.compareDocumentPosition?function(cD,cC){if(cD===cC){bH=true;return 0}return(!cD.compareDocumentPosition||!cC.compareDocumentPosition?cD.compareDocumentPosition:cD.compareDocumentPosition(cC)&4)?-1:1}:function(cK,cJ){if(cK===cJ){bH=true;return 0}else{if(cK.sourceIndex&&cJ.sourceIndex){return cK.sourceIndex-cJ.sourceIndex}}var cH,cD,cE=[],cC=[],cG=cK.parentNode,cI=cJ.parentNode,cL=cG;if(cG===cI){return bx(cK,cJ)}else{if(!cG){return -1}else{if(!cI){return 1}}}while(cL){cE.unshift(cL);cL=cL.parentNode}cL=cI;while(cL){cC.unshift(cL);cL=cL.parentNode}cH=cE.length;cD=cC.length;for(var cF=0;cF<cH&&cF<cD;cF++){if(cE[cF]!==cC[cF]){return bx(cE[cF],cC[cF])}}return cF===cH?bx(cK,cC[cF],-1):bx(cE[cF],cJ,1)};[0,0].sort(bL);bE=!bH;cl.uniqueSort=function(cE){var cF,cG=[],cD=1,cC=0;bH=bE;cE.sort(bL);if(bH){for(;(cF=cE[cD]);cD++){if(cF===cE[cD-1]){cC=cG.push(cD)}}while(cC--){cE.splice(cG[cC],1)}}return cE};cl.error=function(cC){throw new Error("Syntax error, unrecognized expression: "+cC)};function bw(cG,cL){var cD,cH,cJ,cK,cI,cE,cC,cF=cq[cu][cG+" "];if(cF){return cL?0:cF.slice(0)}cI=cG;cE=[];cC=cg.preFilter;while(cI){if(!cD||(cH=bA.exec(cI))){if(cH){cI=cI.slice(cH[0].length)||cI}cE.push(cJ=[])}cD=false;if((cH=cc.exec(cI))){cJ.push(cD=new bz(cH.shift()));cI=cI.slice(cD.length);cD.type=cH[0].replace(co," ")}for(cK in cg.filter){if((cH=cb[cK].exec(cI))&&(!cC[cK]||(cH=cC[cK](cH)))){cJ.push(cD=new bz(cH.shift()));cI=cI.slice(cD.length);cD.type=cK;cD.matches=cH}}if(!cD){break}}return cL?cI.length:cI?cl.error(cG):cq(cG,cE).slice(0)}function b1(cG,cE,cF){var cC=cE.dir,cH=cF&&cE.dir==="parentNode",cD=bK++;return cE.first?function(cK,cJ,cI){while((cK=cK[cC])){if(cH||cK.nodeType===1){return cG(cK,cJ,cI)}}}:function(cL,cK,cJ){if(!cJ){var cI,cM=bW+" "+cD+" ",cN=cM+cs;while((cL=cL[cC])){if(cH||cL.nodeType===1){if((cI=cL[cu])===cN){return cL.sizset}else{if(typeof cI==="string"&&cI.indexOf(cM)===0){if(cL.sizset){return cL}}else{cL[cu]=cN;if(cG(cL,cK,cJ)){cL.sizset=true;return cL}cL.sizset=false}}}}}else{while((cL=cL[cC])){if(cH||cL.nodeType===1){if(cG(cL,cK,cJ)){return cL}}}}}}function bJ(cC){return cC.length>1?function(cG,cF,cD){var cE=cC.length;while(cE--){if(!cC[cE](cG,cF,cD)){return false}}return true}:cC[0]}function b0(cC,cD,cE,cF,cI){var cG,cL=[],cH=0,cJ=cC.length,cK=cD!=null;for(;cH<cJ;cH++){if((cG=cC[cH])){if(!cE||cE(cG,cF,cI)){cL.push(cG);if(cK){cD.push(cH)}}}}return cL}function cx(cE,cD,cG,cF,cH,cC){if(cF&&!cF[cu]){cF=cx(cF)}if(cH&&!cH[cu]){cH=cx(cH,cC)}return cw(function(cS,cP,cK,cR){var cU,cQ,cM,cL=[],cT=[],cJ=cP.length,cI=cS||bU(cD||"*",cK.nodeType?[cK]:cK,[]),cN=cE&&(cS||!cD)?b0(cI,cL,cE,cK,cR):cI,cO=cG?cH||(cS?cE:cJ||cF)?[]:cP:cN;if(cG){cG(cN,cO,cK,cR)}if(cF){cU=b0(cO,cT);cF(cU,[],cK,cR);cQ=cU.length;while(cQ--){if((cM=cU[cQ])){cO[cT[cQ]]=!(cN[cT[cQ]]=cM)}}}if(cS){if(cH||cE){if(cH){cU=[];cQ=cO.length;while(cQ--){if((cM=cO[cQ])){cU.push((cN[cQ]=cM))}}cH(null,(cO=[]),cU,cR)}cQ=cO.length;while(cQ--){if((cM=cO[cQ])&&(cU=cH?bT.call(cS,cM):cL[cQ])>-1){cS[cU]=!(cP[cU]=cM)}}}}else{cO=b0(cO===cP?cO.splice(cJ,cO.length):cO);if(cH){cH(null,cP,cO,cR)}else{cr.apply(cP,cO)}}})}function b2(cI){var cD,cG,cE,cH=cI.length,cL=cg.relative[cI[0].type],cM=cL||cg.relative[" "],cF=cL?1:0,cJ=b1(function(cN){return cN===cD},cM,true),cK=b1(function(cN){return bT.call(cD,cN)>-1},cM,true),cC=[function(cP,cO,cN){return(!cL&&(cN||cO!==ce))||((cD=cO).nodeType?cJ(cP,cO,cN):cK(cP,cO,cN))}];for(;cF<cH;cF++){if((cG=cg.relative[cI[cF].type])){cC=[b1(bJ(cC),cG)]}else{cG=cg.filter[cI[cF].type].apply(null,cI[cF].matches);if(cG[cu]){cE=++cF;for(;cE<cH;cE++){if(cg.relative[cI[cE].type]){break}}return cx(cF>1&&bJ(cC),cF>1&&cI.slice(0,cF-1).join("").replace(co,"$1"),cG,cF<cE&&b2(cI.slice(cF,cE)),cE<cH&&b2((cI=cI.slice(cE))),cE<cH&&cI.join(""))}cC.push(cG)}}return bJ(cC)}function bB(cF,cE){var cC=cE.length>0,cG=cF.length>0,cD=function(cQ,cK,cP,cO,cW){var cL,cM,cR,cV=[],cU=0,cN="0",cH=cQ&&[],cS=cW!=null,cT=ce,cJ=cQ||cG&&cg.find.TAG("*",cW&&cK.parentNode||cK),cI=(bW+=cT==null?1:Math.E);if(cS){ce=cK!==bD&&cK;cs=cD.el}for(;(cL=cJ[cN])!=null;cN++){if(cG&&cL){for(cM=0;(cR=cF[cM]);cM++){if(cR(cL,cK,cP)){cO.push(cL);break}}if(cS){bW=cI;cs=++cD.el}}if(cC){if((cL=!cR&&cL)){cU--}if(cQ){cH.push(cL)}}}cU+=cN;if(cC&&cN!==cU){for(cM=0;(cR=cE[cM]);cM++){cR(cH,cV,cK,cP)}if(cQ){if(cU>0){while(cN--){if(!(cH[cN]||cV[cN])){cV[cN]=b9.call(cO)}}}cV=b0(cV)}cr.apply(cO,cV);if(cS&&!cQ&&cV.length>0&&(cU+cE.length)>1){cl.uniqueSort(cO)}}if(cS){bW=cI;ce=cT}return cH};cD.el=0;return cC?cw(cD):cD}bI=cl.compile=function(cC,cH){var cE,cD=[],cG=[],cF=bS[cu][cC+" "];if(!cF){if(!cH){cH=bw(cC)}cE=cH.length;while(cE--){cF=b2(cH[cE]);if(cF[cu]){cD.push(cF)}else{cG.push(cF)}}cF=bS(cC,bB(cG,cD))}return cF};function bU(cD,cG,cF){var cE=0,cC=cG.length;for(;cE<cC;cE++){cl(cD,cG[cE],cF)}return cF}function ct(cE,cC,cG,cK,cJ){var cH,cN,cD,cM,cL,cI=bw(cE),cF=cI.length;if(!cK){if(cI.length===1){cN=cI[0]=cI[0].slice(0);if(cN.length>2&&(cD=cN[0]).type==="ID"&&cC.nodeType===9&&!cJ&&cg.relative[cN[1].type]){cC=cg.find.ID(cD.matches[0].replace(bY,""),cC,cJ)[0];if(!cC){return cG}cE=cE.slice(cN.shift().length)}for(cH=cb.POS.test(cE)?-1:cN.length-1;cH>=0;cH--){cD=cN[cH];if(cg.relative[(cM=cD.type)]){break}if((cL=cg.find[cM])){if((cK=cL(cD.matches[0].replace(bY,""),cm.test(cN[0].type)&&cC.parentNode||cC,cJ))){cN.splice(cH,1);cE=cK.length&&cN.join("");if(!cE){cr.apply(cG,bQ.call(cK,0));return cG}break}}}}}bI(cE,cI)(cK,cC,cJ,cG,cm.test(cE));return cG}if(bD.querySelectorAll){(function(){var cH,cI=ct,cG=/'|\\/g,cE=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,cD=[":focus"],cC=[":active"],cF=bG.matchesSelector||bG.mozMatchesSelector||bG.webkitMatchesSelector||bG.oMatchesSelector||bG.msMatchesSelector;cf(function(cJ){cJ.innerHTML="<select><option selected=''></option></select>";if(!cJ.querySelectorAll("[selected]").length){cD.push("\\["+b3+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")}if(!cJ.querySelectorAll(":checked").length){cD.push(":checked")}});cf(function(cJ){cJ.innerHTML="<p test=''></p>";if(cJ.querySelectorAll("[test^='']").length){cD.push("[*^$]="+b3+"*(?:\"\"|'')")}cJ.innerHTML="<input type='hidden'/>";if(!cJ.querySelectorAll(":enabled").length){cD.push(":enabled",":disabled")}});cD=new RegExp(cD.join("|"));ct=function(cP,cK,cR,cU,cT){if(!cU&&!cT&&!cD.test(cP)){var cN,cS,cM=true,cJ=cu,cL=cK,cQ=cK.nodeType===9&&cP;if(cK.nodeType===1&&cK.nodeName.toLowerCase()!=="object"){cN=bw(cP);if((cM=cK.getAttribute("id"))){cJ=cM.replace(cG,"\\$&")}else{cK.setAttribute("id",cJ)}cJ="[id='"+cJ+"'] ";cS=cN.length;while(cS--){cN[cS]=cJ+cN[cS].join("")}cL=cm.test(cP)&&cK.parentNode||cK;cQ=cN.join(",")}if(cQ){try{cr.apply(cR,bQ.call(cL.querySelectorAll(cQ),0));return cR}catch(cO){}finally{if(!cM){cK.removeAttribute("id")}}}}return cI(cP,cK,cR,cU,cT)};if(cF){cf(function(cK){cH=cF.call(cK,"div");try{cF.call(cK,"[test!='']:sizzle");cC.push("!=",cB)}catch(cJ){}});cC=new RegExp(cC.join("|"));cl.matchesSelector=function(cK,cM){cM=cM.replace(cE,"='$1']");if(!bR(cK)&&!cC.test(cM)&&!cD.test(cM)){try{var cJ=cF.call(cK,cM);if(cJ||cH||cK.document&&cK.document.nodeType!==11){return cJ}}catch(cL){}}return cl(cM,null,null,[cK]).length>0}}})()}cg.pseudos.nth=cg.pseudos.eq;function bO(){}cg.filters=bO.prototype=cg.pseudos;cg.setFilters=new bO();cl.attr=C.attr;C.find=cl;C.expr=cl.selectors;C.expr[":"]=C.expr.pseudos;C.unique=cl.uniqueSort;C.text=cl.getText;C.isXMLDoc=cl.isXML;C.contains=cl.contains})(bd);var U=/Until$/,ag=/^(?:parents|prev(?:Until|All))/,bq=/^.[^:#\[\.,]*$/,aQ=C.expr.match.needsContext,ao={children:true,contents:true,next:true,prev:true};C.fn.extend({find:function(bu){var by,bv,bA,bB,bz,bx,bw=this;if(typeof bu!=="string"){return C(bu).filter(function(){for(by=0,bv=bw.length;by<bv;by++){if(C.contains(bw[by],this)){return true}}})}bx=this.pushStack("","find",bu);for(by=0,bv=this.length;by<bv;by++){bA=bx.length;C.find(bu,this[by],bx);if(by>0){for(bB=bA;bB<bx.length;bB++){for(bz=0;bz<bA;bz++){if(bx[bz]===bx[bB]){bx.splice(bB--,1);break}}}}}return bx},has:function(bx){var bw,bv=C(bx,this),bu=bv.length;return this.filter(function(){for(bw=0;bw<bu;bw++){if(C.contains(this,bv[bw])){return true}}})},not:function(bu){return this.pushStack(az(this,bu,false),"not",bu)},filter:function(bu){return this.pushStack(az(this,bu,true),"filter",bu)},is:function(bu){return !!bu&&(typeof bu==="string"?aQ.test(bu)?C(bu,this.context).index(this[0])>=0:C.filter(bu,this).length>0:this.filter(bu).length>0)},closest:function(by,bx){var bz,bw=0,bu=this.length,bv=[],bA=aQ.test(by)||typeof by!=="string"?C(by,bx||this.context):0;for(;bw<bu;bw++){bz=this[bw];while(bz&&bz.ownerDocument&&bz!==bx&&bz.nodeType!==11){if(bA?bA.index(bz)>-1:C.find.matchesSelector(bz,by)){bv.push(bz);break}bz=bz.parentNode}}bv=bv.length>1?C.unique(bv):bv;return this.pushStack(bv,"closest",by)},index:function(bu){if(!bu){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1}if(typeof bu==="string"){return C.inArray(this[0],C(bu))}return C.inArray(bu.jqx?bu[0]:bu,this)},add:function(bu,bv){var bx=typeof bu==="string"?C(bu,bv):C.makeArray(bu&&bu.nodeType?[bu]:bu),bw=C.merge(this.get(),bx);return this.pushStack(x(bx[0])||x(bw[0])?bw:C.unique(bw))},addBack:function(bu){return this.add(bu==null?this.prevObject:this.prevObject.filter(bu))}});C.fn.andSelf=C.fn.addBack;function x(bu){return !bu||!bu.parentNode||bu.parentNode.nodeType===11}function aB(bv,bu){do{bv=bv[bu]}while(bv&&bv.nodeType!==1);return bv}C.each({parent:function(bv){var bu=bv.parentNode;return bu&&bu.nodeType!==11?bu:null},parents:function(bu){return C.dir(bu,"parentNode")},parentsUntil:function(bv,bu,bw){return C.dir(bv,"parentNode",bw)},next:function(bu){return aB(bu,"nextSibling")},prev:function(bu){return aB(bu,"previousSibling")},nextAll:function(bu){return C.dir(bu,"nextSibling")},prevAll:function(bu){return C.dir(bu,"previousSibling")},nextUntil:function(bv,bu,bw){return C.dir(bv,"nextSibling",bw)},prevUntil:function(bv,bu,bw){return C.dir(bv,"previousSibling",bw)},siblings:function(bu){return C.sibling((bu.parentNode||{}).firstChild,bu)},children:function(bu){return C.sibling(bu.firstChild)},contents:function(bu){return C.nodeName(bu,"iframe")?bu.contentDocument||bu.contentWindow.document:C.merge([],bu.childNodes)}},function(bu,bv){C.fn[bu]=function(by,bw){var bx=C.map(this,bv,by);if(!U.test(bu)){bw=by}if(bw&&typeof bw==="string"){bx=C.filter(bw,bx)}bx=this.length>1&&!ao[bu]?C.unique(bx):bx;if(this.length>1&&ag.test(bu)){bx=bx.reverse()}return this.pushStack(bx,bu,aD.call(arguments).join(","))}});C.extend({filter:function(bw,bu,bv){if(bv){bw=":not("+bw+")"}return bu.length===1?C.find.matchesSelector(bu[0],bw)?[bu[0]]:[]:C.find.matches(bw,bu)},dir:function(bw,bv,by){var bu=[],bx=bw[bv];while(bx&&bx.nodeType!==9&&(by===G||bx.nodeType!==1||!C(bx).is(by))){if(bx.nodeType===1){bu.push(bx)}bx=bx[bv]}return bu},sibling:function(bw,bv){var bu=[];for(;bw;bw=bw.nextSibling){if(bw.nodeType===1&&bw!==bv){bu.push(bw)}}return bu}});function az(bx,bw,bu){bw=bw||0;if(C.isFunction(bw)){return C.grep(bx,function(bz,by){var bA=!!bw.call(bz,by,bz);return bA===bu})}else{if(bw.nodeType){return C.grep(bx,function(bz,by){return(bz===bw)===bu})}else{if(typeof bw==="string"){var bv=C.grep(bx,function(by){return by.nodeType===1});if(bq.test(bw)){return C.filter(bw,bv,!bu)}else{bw=C.filter(bw,bv)}}}}return C.grep(bx,function(bz,by){return(C.inArray(bz,bw)>=0)===bu})}function a(bu){var bw=aJ.split("|"),bv=bu.createDocumentFragment();if(bv.createElement){while(bw.length){bv.createElement(bw.pop())}}return bv}var aJ="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aa=/ JQXLite\d+="(?:null|\d+)"/g,ah=/^\s+/,L=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,c=/<([\w:]+)/,v=/<tbody/i,P=/<|&#?\w+;/,W=/<(?:script|style|link)/i,I=/<(?:script|object|embed|option|style)/i,ac=new RegExp("<(?:"+aJ+")[\\s/>]","i"),R=/^(?:checkbox|radio)$/,o=/checked\s*(?:[^=]|=\s*.checked.)/i,bp=/\/(java|ecma)script/i,aG=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,am={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},T=a(ak),bg=T.appendChild(ak.createElement("div"));am.optgroup=am.option;am.tbody=am.tfoot=am.colgroup=am.caption=am.thead;am.th=am.td;if(!C.support.htmlSerialize){am._default=[1,"X<div>","</div>"]}C.fn.extend({text:function(bu){return C.access(this,function(bv){return bv===G?C.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ak).createTextNode(bv))},null,bu,arguments.length)},wrapAll:function(bu){if(C.isFunction(bu)){return this.each(function(bw){C(this).wrapAll(bu.call(this,bw))})}if(this[0]){var bv=C(bu,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){bv.insertBefore(this[0])}bv.map(function(){var bw=this;while(bw.firstChild&&bw.firstChild.nodeType===1){bw=bw.firstChild}return bw}).append(this)}return this},wrapInner:function(bu){if(C.isFunction(bu)){return this.each(function(bv){C(this).wrapInner(bu.call(this,bv))})}return this.each(function(){var bv=C(this),bw=bv.contents();if(bw.length){bw.wrapAll(bu)}else{bv.append(bu)}})},wrap:function(bu){var bv=C.isFunction(bu);return this.each(function(bw){C(this).wrapAll(bv?bu.call(this,bw):bu)})},unwrap:function(){return this.parent().each(function(){if(!C.nodeName(this,"body")){C(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(bu){if(this.nodeType===1||this.nodeType===11){this.appendChild(bu)}})},prepend:function(){return this.domManip(arguments,true,function(bu){if(this.nodeType===1||this.nodeType===11){this.insertBefore(bu,this.firstChild)}})},before:function(){if(!x(this[0])){return this.domManip(arguments,false,function(bv){this.parentNode.insertBefore(bv,this)})}if(arguments.length){var bu=C.clean(arguments);return this.pushStack(C.merge(bu,this),"before",this.selector)}},after:function(){if(!x(this[0])){return this.domManip(arguments,false,function(bv){this.parentNode.insertBefore(bv,this.nextSibling)})}if(arguments.length){var bu=C.clean(arguments);return this.pushStack(C.merge(this,bu),"after",this.selector)}},remove:function(bu,bx){var bw,bv=0;for(;(bw=this[bv])!=null;bv++){if(!bu||C.filter(bu,[bw]).length){if(!bx&&bw.nodeType===1){C.cleanData(bw.getElementsByTagName("*"));C.cleanData([bw])}if(bw.parentNode){bw.parentNode.removeChild(bw)}}}return this},empty:function(){var bv,bu=0;for(;(bv=this[bu])!=null;bu++){if(bv.nodeType===1){C.cleanData(bv.getElementsByTagName("*"))}while(bv.firstChild){bv.removeChild(bv.firstChild)}}return this},clone:function(bv,bu){bv=bv==null?false:bv;bu=bu==null?bv:bu;return this.map(function(){return C.clone(this,bv,bu)})},html:function(bu){return C.access(this,function(by){var bx=this[0]||{},bw=0,bv=this.length;if(by===G){return bx.nodeType===1?bx.innerHTML.replace(aa,""):G}if(typeof by==="string"&&!W.test(by)&&(C.support.htmlSerialize||!ac.test(by))&&(C.support.leadingWhitespace||!ah.test(by))&&!am[(c.exec(by)||["",""])[1].toLowerCase()]){by=by.replace(L,"<$1></$2>");try{for(;bw<bv;bw++){bx=this[bw]||{};if(bx.nodeType===1){C.cleanData(bx.getElementsByTagName("*"));bx.innerHTML=by}}bx=0}catch(bz){}}if(bx){this.empty().append(by)}},null,bu,arguments.length)},replaceWith:function(bu){if(!x(this[0])){if(C.isFunction(bu)){return this.each(function(bx){var bw=C(this),bv=bw.html();bw.replaceWith(bu.call(this,bx,bv))})}if(typeof bu!=="string"){bu=C(bu).detach()}return this.each(function(){var bw=this.nextSibling,bv=this.parentNode;C(this).remove();if(bw){C(bw).before(bu)}else{C(bv).append(bu)}})}return this.length?this.pushStack(C(C.isFunction(bu)?bu():bu),"replaceWith",bu):this},detach:function(bu){return this.remove(bu,true)},domManip:function(bA,bE,bD){bA=[].concat.apply([],bA);var bw,by,bz,bC,bx=0,bB=bA[0],bv=[],bu=this.length;if(!C.support.checkClone&&bu>1&&typeof bB==="string"&&o.test(bB)){return this.each(function(){C(this).domManip(bA,bE,bD)})}if(C.isFunction(bB)){return this.each(function(bG){var bF=C(this);bA[0]=bB.call(this,bG,bE?bF.html():G);bF.domManip(bA,bE,bD)})}if(this[0]){bw=C.buildFragment(bA,this,bv);bz=bw.fragment;by=bz.firstChild;if(bz.childNodes.length===1){bz=by}if(by){bE=bE&&C.nodeName(by,"tr");for(bC=bw.cacheable||bu-1;bx<bu;bx++){bD.call(bE&&C.nodeName(this[bx],"table")?a3(this[bx],"tbody"):this[bx],bx===bC?bz:C.clone(bz,true,true))}}bz=by=null;if(bv.length){C.each(bv,function(bF,bG){if(bG.src){if(C.ajax){C.ajax({url:bG.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})}else{C.error("no ajax")}}else{C.globalEval((bG.text||bG.textContent||bG.innerHTML||"").replace(aG,""))}if(bG.parentNode){bG.parentNode.removeChild(bG)}})}}return this}});function a3(bv,bu){return bv.getElementsByTagName(bu)[0]||bv.appendChild(bv.ownerDocument.createElement(bu))}function r(bB,bv){if(bv.nodeType!==1||!C.hasData(bB)){return}var by,bx,bu,bA=C._data(bB),bz=C._data(bv,bA),bw=bA.events;if(bw){delete bz.handle;bz.events={};for(by in bw){for(bx=0,bu=bw[by].length;bx<bu;bx++){C.event.add(bv,by,bw[by][bx])}}}if(bz.data){bz.data=C.extend({},bz.data)}}function ab(bv,bu){var bw;if(bu.nodeType!==1){return}if(bu.clearAttributes){bu.clearAttributes()}if(bu.mergeAttributes){bu.mergeAttributes(bv)}bw=bu.nodeName.toLowerCase();if(bw==="object"){if(bu.parentNode){bu.outerHTML=bv.outerHTML}if(C.support.html5Clone&&(bv.innerHTML&&!C.trim(bu.innerHTML))){bu.innerHTML=bv.innerHTML}}else{if(bw==="input"&&R.test(bv.type)){bu.defaultChecked=bu.checked=bv.checked;if(bu.value!==bv.value){bu.value=bv.value}}else{if(bw==="option"){bu.selected=bv.defaultSelected}else{if(bw==="input"||bw==="textarea"){bu.defaultValue=bv.defaultValue}else{if(bw==="script"&&bu.text!==bv.text){bu.text=bv.text}}}}}bu.removeAttribute(C.expando)}C.buildFragment=function(bx,by,bv){var bw,bu,bz,bA=bx[0];by=by||ak;by=!by.nodeType&&by[0]||by;by=by.ownerDocument||by;if(bx.length===1&&typeof bA==="string"&&bA.length<512&&by===ak&&bA.charAt(0)==="<"&&!I.test(bA)&&(C.support.checkClone||!o.test(bA))&&(C.support.html5Clone||!ac.test(bA))){bu=true;bw=C.fragments[bA];bz=bw!==G}if(!bw){bw=by.createDocumentFragment();C.clean(bx,by,bw,bv);if(bu){C.fragments[bA]=bz&&bw}}return{fragment:bw,cacheable:bu}};C.fragments={};C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(bu,bv){C.fn[bu]=function(bw){var by,bA=0,bz=[],bC=C(bw),bx=bC.length,bB=this.length===1&&this[0].parentNode;if((bB==null||bB&&bB.nodeType===11&&bB.childNodes.length===1)&&bx===1){bC[bv](this[0]);return this}else{for(;bA<bx;bA++){by=(bA>0?this.clone(true):this).get();C(bC[bA])[bv](by);bz=bz.concat(by)}return this.pushStack(bz,bu,bC.selector)}}});function bk(bu){if(typeof bu.getElementsByTagName!=="undefined"){return bu.getElementsByTagName("*")}else{if(typeof bu.querySelectorAll!=="undefined"){return bu.querySelectorAll("*")}else{return[]}}}function al(bu){if(R.test(bu.type)){bu.defaultChecked=bu.checked}}C.extend({clone:function(by,bA,bw){var bu,bv,bx,bz;if(C.support.html5Clone||C.isXMLDoc(by)||!ac.test("<"+by.nodeName+">")){bz=by.cloneNode(true)}else{bg.innerHTML=by.outerHTML;bg.removeChild(bz=bg.firstChild)}if((!C.support.noCloneEvent||!C.support.noCloneChecked)&&(by.nodeType===1||by.nodeType===11)&&!C.isXMLDoc(by)){ab(by,bz);bu=bk(by);bv=bk(bz);for(bx=0;bu[bx];++bx){if(bv[bx]){ab(bu[bx],bv[bx])}}}if(bA){r(by,bz);if(bw){bu=bk(by);bv=bk(bz);for(bx=0;bu[bx];++bx){r(bu[bx],bv[bx])}}}bu=bv=null;return bz},clean:function(bH,bw,bu,bx){var bE,bD,bG,bL,bA,bK,bB,by,bv,bF,bJ,bC,bz=bw===ak&&T,bI=[];if(!bw||typeof bw.createDocumentFragment==="undefined"){bw=ak}for(bE=0;(bG=bH[bE])!=null;bE++){if(typeof bG==="number"){bG+=""}if(!bG){continue}if(typeof bG==="string"){if(!P.test(bG)){bG=bw.createTextNode(bG)}else{bz=bz||a(bw);bB=bw.createElement("div");bz.appendChild(bB);bG=bG.replace(L,"<$1></$2>");bL=(c.exec(bG)||["",""])[1].toLowerCase();bA=am[bL]||am._default;bK=bA[0];bB.innerHTML=bA[1]+bG+bA[2];while(bK--){bB=bB.lastChild}if(!C.support.tbody){by=v.test(bG);bv=bL==="table"&&!by?bB.firstChild&&bB.firstChild.childNodes:bA[1]==="<table>"&&!by?bB.childNodes:[];for(bD=bv.length-1;bD>=0;--bD){if(C.nodeName(bv[bD],"tbody")&&!bv[bD].childNodes.length){bv[bD].parentNode.removeChild(bv[bD])}}}if(!C.support.leadingWhitespace&&ah.test(bG)){bB.insertBefore(bw.createTextNode(ah.exec(bG)[0]),bB.firstChild)}bG=bB.childNodes;bB.parentNode.removeChild(bB)}}if(bG.nodeType){bI.push(bG)}else{C.merge(bI,bG)}}if(bB){bG=bB=bz=null}if(!C.support.appendChecked){for(bE=0;(bG=bI[bE])!=null;bE++){if(C.nodeName(bG,"input")){al(bG)}else{if(typeof bG.getElementsByTagName!=="undefined"){C.grep(bG.getElementsByTagName("input"),al)}}}}if(bu){bJ=function(bM){if(!bM.type||bp.test(bM.type)){return bx?bx.push(bM.parentNode?bM.parentNode.removeChild(bM):bM):bu.appendChild(bM)}};for(bE=0;(bG=bI[bE])!=null;bE++){if(!(C.nodeName(bG,"script")&&bJ(bG))){bu.appendChild(bG);if(typeof bG.getElementsByTagName!=="undefined"){bC=C.grep(C.merge([],bG.getElementsByTagName("script")),bJ);bI.splice.apply(bI,[bE+1,0].concat(bC));bE+=bC.length}}}}return bI},cleanData:function(bv,bD){var by,bw,bx,bC,bz=0,bE=C.expando,bu=C.cache,bA=C.support.deleteExpando,bB=C.event.special;for(;(bx=bv[bz])!=null;bz++){if(bD||C.acceptData(bx)){bw=bx[bE];by=bw&&bu[bw];if(by){if(by.events){for(bC in by.events){if(bB[bC]){C.event.remove(bx,bC)}else{C.removeEvent(bx,bC,by.handle)}}}if(bu[bw]){delete bu[bw];if(bA){delete bx[bE]}else{if(bx.removeAttribute){bx.removeAttribute(bE)}else{bx[bE]=null}}C.deletedIds.push(bw)}}}}}});(function(){var bu,bv;C.uaMatch=function(bx){bx=bx.toLowerCase();var bw=/(chrome)[ \/]([\w.]+)/.exec(bx)||/(webkit)[ \/]([\w.]+)/.exec(bx)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(bx)||/(msie) ([\w.]+)/.exec(bx)||bx.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(bx)||[];return{browser:bw[1]||"",version:bw[2]||"0"}};bu=C.uaMatch(bt.userAgent);bv={};if(bu.browser){bv[bu.browser]=true;bv.version=bu.version}if(bv.chrome){bv.webkit=true}else{if(bv.webkit){bv.safari=true}}C.browser=bv;C.sub=function(){function bx(bz,bA){return new bx.fn.init(bz,bA)}C.extend(true,bx,this);bx.superclass=this;bx.fn=bx.prototype=this();bx.fn.constructor=bx;bx.sub=this.sub;bx.fn.init=function by(bz,bA){if(bA&&bA instanceof C&&!(bA instanceof bx)){bA=bx(bA)}return C.fn.init.call(this,bz,bA,bw)};bx.fn.init.prototype=bx.fn;var bw=bx(ak);return bx}})();var Q,bc,l,ad=/alpha\([^)]*\)/i,aj=/opacity=([^)]*)/,w=/^(top|right|bottom|left)$/,ai=/^(none|table(?!-c[ea]).+)/,av=/^margin/,i=new RegExp("^("+aE+")(.*)$","i"),aV=new RegExp("^("+aE+")(?!px)[a-z%]+$","i"),E=new RegExp("^([-+])=("+aE+")","i"),J={BODY:"block"},ba={position:"absolute",visibility:"hidden",display:"block"},aL={letterSpacing:0,fontWeight:400},D=["Top","Right","Bottom","Left"],O=["Webkit","O","Moz","ms"],be=C.fn.toggle;function a2(bx,bv){if(bv in bx){return bv}var by=bv.charAt(0).toUpperCase()+bv.slice(1),bu=bv,bw=O.length;while(bw--){bv=O[bw]+by;if(bv in bx){return bv}}return bu}function ap(bv,bu){bv=bu||bv;return C.css(bv,"display")==="none"||!C.contains(bv.ownerDocument,bv)}function bb(bz,bu){var by,bA,bv=[],bw=0,bx=bz.length;for(;bw<bx;bw++){by=bz[bw];if(!by.style){continue}bv[bw]=C._data(by,"olddisplay");if(bu){if(!bv[bw]&&by.style.display==="none"){by.style.display=""}if(by.style.display===""&&ap(by)){bv[bw]=C._data(by,"olddisplay",aN(by.nodeName))}}else{bA=Q(by,"display");if(!bv[bw]&&bA!=="none"){C._data(by,"olddisplay",bA)}}}for(bw=0;bw<bx;bw++){by=bz[bw];if(!by.style){continue}if(!bu||by.style.display==="none"||by.style.display===""){by.style.display=bu?bv[bw]||"":"none"}}return bz}C.fn.extend({css:function(bu,bv){return C.access(this,function(bx,bw,by){return by!==G?C.style(bx,bw,by):C.css(bx,bw)},bu,bv,arguments.length>1)},show:function(){return bb(this,true)},hide:function(){return bb(this)},toggle:function(bw,bv){var bu=typeof bw==="boolean";if(C.isFunction(bw)&&C.isFunction(bv)){return be.apply(this,arguments)}return this.each(function(){if(bu?bw:ap(this)){C(this).show()}else{C(this).hide()}})}});C.extend({cssHooks:{opacity:{get:function(bw,bv){if(bv){var bu=Q(bw,"opacity");return bu===""?"1":bu}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":C.support.cssFloat?"cssFloat":"styleFloat"},style:function(bw,bv,bC,bx){if(!bw||bw.nodeType===3||bw.nodeType===8||!bw.style){return}var bA,bB,bD,by=C.camelCase(bv),bu=bw.style;bv=C.cssProps[by]||(C.cssProps[by]=a2(bu,by));bD=C.cssHooks[bv]||C.cssHooks[by];if(bC!==G){bB=typeof bC;if(bB==="string"&&(bA=E.exec(bC))){bC=(bA[1]+1)*bA[2]+parseFloat(C.css(bw,bv));bB="number"}if(bC==null||bB==="number"&&isNaN(bC)){return}if(bB==="number"&&!C.cssNumber[by]){bC+="px"}if(!bD||!("set" in bD)||(bC=bD.set(bw,bC,bx))!==G){try{bu[bv]=bC}catch(bz){}}}else{if(bD&&"get" in bD&&(bA=bD.get(bw,false,bx))!==G){return bA}return bu[bv]}},css:function(bA,by,bz,bv){var bB,bx,bu,bw=C.camelCase(by);by=C.cssProps[bw]||(C.cssProps[bw]=a2(bA.style,bw));bu=C.cssHooks[by]||C.cssHooks[bw];if(bu&&"get" in bu){bB=bu.get(bA,true,bv)}if(bB===G){bB=Q(bA,by)}if(bB==="normal"&&by in aL){bB=aL[by]}if(bz||bv!==G){bx=parseFloat(bB);return bz||C.isNumeric(bx)?bx||0:bB}return bB},swap:function(by,bx,bz){var bw,bv,bu={};for(bv in bx){bu[bv]=by.style[bv];by.style[bv]=bx[bv]}bw=bz.call(by);for(bv in bx){by.style[bv]=bu[bv]}return bw}});if(bd.getComputedStyle){Q=function(bB,bv){var bu,by,bx,bA,bz=bd.getComputedStyle(bB,null),bw=bB.style;if(bz){bu=bz.getPropertyValue(bv)||bz[bv];if(bu===""&&!C.contains(bB.ownerDocument,bB)){bu=C.style(bB,bv)}if(aV.test(bu)&&av.test(bv)){by=bw.width;bx=bw.minWidth;bA=bw.maxWidth;bw.minWidth=bw.maxWidth=bw.width=bu;bu=bz.width;bw.width=by;bw.minWidth=bx;bw.maxWidth=bA}}return bu}}else{if(ak.documentElement.currentStyle){Q=function(by,bw){var bz,bu,bv=by.currentStyle&&by.currentStyle[bw],bx=by.style;if(bv==null&&bx&&bx[bw]){bv=bx[bw]}if(aV.test(bv)&&!w.test(bw)){bz=bx.left;bu=by.runtimeStyle&&by.runtimeStyle.left;if(bu){by.runtimeStyle.left=by.currentStyle.left}bx.left=bw==="fontSize"?"1em":bv;bv=bx.pixelLeft+"px";bx.left=bz;if(bu){by.runtimeStyle.left=bu}}return bv===""?"auto":bv}}}function aO(bu,bw,bx){var bv=i.exec(bw);return bv?Math.max(0,bv[1]-(bx||0))+(bv[2]||"px"):bw}function aZ(bx,bv,bu,bz){var bw=bu===(bz?"border":"content")?4:bv==="width"?1:0,by=0;for(;bw<4;bw+=2){if(bu==="margin"){by+=C.css(bx,bu+D[bw],true)}if(bz){if(bu==="content"){by-=parseFloat(Q(bx,"padding"+D[bw]))||0}if(bu!=="margin"){by-=parseFloat(Q(bx,"border"+D[bw]+"Width"))||0}}else{by+=parseFloat(Q(bx,"padding"+D[bw]))||0;if(bu!=="padding"){by+=parseFloat(Q(bx,"border"+D[bw]+"Width"))||0}}}return by}function Y(bx,bv,bu){var by=bv==="width"?bx.offsetWidth:bx.offsetHeight,bw=true,bz=C.support.boxSizing&&C.css(bx,"boxSizing")==="border-box";if(by<=0||by==null){by=Q(bx,bv);if(by<0||by==null){by=bx.style[bv]}if(aV.test(by)){return by}bw=bz&&(C.support.boxSizingReliable||by===bx.style[bv]);by=parseFloat(by)||0}return(by+aZ(bx,bv,bu||(bz?"border":"content"),bw))+"px"}function aN(bw){if(J[bw]){return J[bw]}var bu=C("<"+bw+">").appendTo(ak.body),bv=bu.css("display");bu.remove();if(bv==="none"||bv===""){bc=ak.body.appendChild(bc||C.extend(ak.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!l||!bc.createElement){l=(bc.contentWindow||bc.contentDocument).document;l.write("<!doctype html><html><body>");l.close()}bu=l.body.appendChild(l.createElement(bw));bv=Q(bu,"display");ak.body.removeChild(bc)}J[bw]=bv;return bv}C.each(["height","width"],function(bv,bu){C.cssHooks[bu]={get:function(by,bx,bw){if(bx){if(by.offsetWidth===0&&ai.test(Q(by,"display"))){return C.swap(by,ba,function(){return Y(by,bu,bw)})}else{return Y(by,bu,bw)}}},set:function(bx,by,bw){return aO(bx,by,bw?aZ(bx,bu,bw,C.support.boxSizing&&C.css(bx,"boxSizing")==="border-box"):0)}}});if(!C.support.opacity){C.cssHooks.opacity={get:function(bv,bu){return aj.test((bu&&bv.currentStyle?bv.currentStyle.filter:bv.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":bu?"1":""},set:function(by,bz){var bx=by.style,bv=by.currentStyle,bu=C.isNumeric(bz)?"alpha(opacity="+bz*100+")":"",bw=bv&&bv.filter||bx.filter||"";bx.zoom=1;if(bz>=1&&C.trim(bw.replace(ad,""))===""&&bx.removeAttribute){bx.removeAttribute("filter");if(bv&&!bv.filter){return}}bx.filter=ad.test(bw)?bw.replace(ad,bu):bw+" "+bu}}}C(function(){if(!C.support.reliableMarginRight){C.cssHooks.marginRight={get:function(bv,bu){return C.swap(bv,{display:"inline-block"},function(){if(bu){return Q(bv,"marginRight")}})}}}if(!C.support.pixelPosition&&C.fn.position){C.each(["top","left"],function(bu,bv){C.cssHooks[bv]={get:function(by,bx){if(bx){var bw=Q(by,bv);return aV.test(bw)?C(by).position()[bv]+"px":bw}}}})}});if(C.expr&&C.expr.filters){C.expr.filters.hidden=function(bu){return(bu.offsetWidth===0&&bu.offsetHeight===0)||(!C.support.reliableHiddenOffsets&&((bu.style&&bu.style.display)||Q(bu,"display"))==="none")};C.expr.filters.visible=function(bu){return !C.expr.filters.hidden(bu)}}C.each({margin:"",padding:"",border:"Width"},function(bu,bv){C.cssHooks[bu+bv]={expand:function(by){var bx,bz=typeof by==="string"?by.split(" "):[by],bw={};for(bx=0;bx<4;bx++){bw[bu+D[bx]+bv]=bz[bx]||bz[bx-2]||bz[0]}return bw}};if(!av.test(bu)){C.cssHooks[bu+bv].set=aO}});var g=/%20/g,af=/\[\]$/,br=/\r?\n/g,aU=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,p=/^(?:select|textarea)/i;C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?C.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||p.test(this.nodeName)||aU.test(this.type))}).map(function(bu,bv){var bw=C(this).val();return bw==null?null:C.isArray(bw)?C.map(bw,function(by,bx){return{name:bv.name,value:by.replace(br,"\r\n")}}):{name:bv.name,value:bw.replace(br,"\r\n")}}).get()}});C.param=function(bu,bw){var bx,bv=[],by=function(bz,bA){bA=C.isFunction(bA)?bA():(bA==null?"":bA);bv[bv.length]=encodeURIComponent(bz)+"="+encodeURIComponent(bA)};if(bw===G){bw=C.ajaxSettings&&C.ajaxSettings.traditional}if(C.isArray(bu)||(bu.jqx&&!C.isPlainObject(bu))){C.each(bu,function(){by(this.name,this.value)})}else{for(bx in bu){s(bx,bu[bx],bw,by)}}return bv.join("&").replace(g,"+")};function s(bw,by,bv,bx){var bu;if(C.isArray(by)){C.each(by,function(bA,bz){if(bv||af.test(bw)){bx(bw,bz)}else{s(bw+"["+(typeof bz==="object"?bA:"")+"]",bz,bv,bx)}})}else{if(!bv&&C.type(by)==="object"){for(bu in by){s(bw+"["+bu+"]",by[bu],bv,bx)}}else{bx(bw,by)}}}if(C.support.ajax){C.ajaxTransport(function(bu){if(!bu.crossDomain||C.support.cors){var bv;return{send:function(bB,bw){var bz,by,bA=bu.xhr();if(bu.username){bA.open(bu.type,bu.url,bu.async,bu.username,bu.password)}else{bA.open(bu.type,bu.url,bu.async)}if(bu.xhrFields){for(by in bu.xhrFields){bA[by]=bu.xhrFields[by]}}if(bu.mimeType&&bA.overrideMimeType){bA.overrideMimeType(bu.mimeType)}if(!bu.crossDomain&&!bB["X-Requested-With"]){bB["X-Requested-With"]="XMLHttpRequest"}try{for(by in bB){bA.setRequestHeader(by,bB[by])}}catch(bx){}bA.send((bu.hasContent&&bu.data)||null);bv=function(bK,bE){var bF,bD,bC,bI,bH;try{if(bv&&(bE||bA.readyState===4)){bv=G;if(bz){bA.onreadystatechange=C.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[bz]}}if(bE){if(bA.readyState!==4){bA.abort()}}else{bF=bA.status;bC=bA.getAllResponseHeaders();bI={};bH=bA.responseXML;if(bH&&bH.documentElement){bI.xml=bH}try{bI.text=bA.responseText}catch(bJ){}try{bD=bA.statusText}catch(bJ){bD=""}if(!bF&&bu.isLocal&&!bu.crossDomain){bF=bI.text?200:404}else{if(bF===1223){bF=204}}}}}catch(bG){if(!bE){bw(-1,bG)}}if(bI){bw(bF,bD,bI,bC)}};if(!bu.async){bv()}else{if(bA.readyState===4){setTimeout(bv,0)}else{bz=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};C(bd).unload(xhrOnUnloadAbort)}xhrCallbacks[bz]=bv}bA.onreadystatechange=bv}}},abort:function(){if(bv){bv(0,1)}}}}})}var a6,a1,ar=/^(?:toggle|show|hide)$/,aM=new RegExp("^(?:([-+])=|)("+aE+")([a-z%]*)$","i"),a7=/queueHooks$/,k=[bm],H={"*":[function(bu,bB){var bx,bC,bD=this.createTween(bu,bB),by=aM.exec(bB),bz=bD.cur(),bv=+bz||0,bw=1,bA=20;if(by){bx=+by[2];bC=by[3]||(C.cssNumber[bu]?"":"px");if(bC!=="px"&&bv){bv=C.css(bD.elem,bu,true)||bx||1;do{bw=bw||".5";bv=bv/bw;C.style(bD.elem,bu,bv+bC)}while(bw!==(bw=bD.cur()/bz)&&bw!==1&&--bA)}bD.unit=bC;bD.start=bv;bD.end=by[1]?bv+(by[1]+1)*bx:bx}return bD}]};function bl(){setTimeout(function(){a6=G},0);return(a6=C.now())}function Z(bv,bu){C.each(bu,function(bA,by){var bz=(H[bA]||[]).concat(H["*"]),bw=0,bx=bz.length;for(;bw<bx;bw++){if(bz[bw].call(bv,bA,by)){return}}})}function bj(bw,bA,bD){var bE,bz=0,bu=0,bv=k.length,bC=C.Deferred().always(function(){delete by.elem}),by=function(){var bK=a6||bl(),bH=Math.max(0,bx.startTime+bx.duration-bK),bF=bH/bx.duration||0,bJ=1-bF,bG=0,bI=bx.tweens.length;for(;bG<bI;bG++){bx.tweens[bG].run(bJ)}bC.notifyWith(bw,[bx,bJ,bH]);if(bJ<1&&bI){return bH}else{bC.resolveWith(bw,[bx]);return false}},bx=bC.promise({elem:bw,props:C.extend({},bA),opts:C.extend(true,{specialEasing:{}},bD),originalProperties:bA,originalOptions:bD,startTime:a6||bl(),duration:bD.duration,tweens:[],createTween:function(bI,bF,bH){var bG=C.Tween(bw,bx.opts,bI,bF,bx.opts.specialEasing[bI]||bx.opts.easing);bx.tweens.push(bG);return bG},stop:function(bG){var bF=0,bH=bG?bx.tweens.length:0;for(;bF<bH;bF++){bx.tweens[bF].run(1)}if(bG){bC.resolveWith(bw,[bx,bG])}else{bC.rejectWith(bw,[bx,bG])}return this}}),bB=bx.props;aW(bB,bx.opts.specialEasing);for(;bz<bv;bz++){bE=k[bz].call(bx,bw,bB,bx.opts);if(bE){return bE}}Z(bx,bB);if(C.isFunction(bx.opts.start)){bx.opts.start.call(bw,bx)}C.fx.timer(C.extend(by,{anim:bx,queue:bx.opts.queue,elem:bw}));return bx.progress(bx.opts.progress).done(bx.opts.done,bx.opts.complete).fail(bx.opts.fail).always(bx.opts.always)}function aW(bx,bz){var bw,bv,bA,by,bu;for(bw in bx){bv=C.camelCase(bw);bA=bz[bv];by=bx[bw];if(C.isArray(by)){bA=by[1];by=bx[bw]=by[0]}if(bw!==bv){bx[bv]=by;delete bx[bw]}bu=C.cssHooks[bv];if(bu&&"expand" in bu){by=bu.expand(by);delete bx[bv];for(bw in by){if(!(bw in bx)){bx[bw]=by[bw];bz[bw]=bA}}}else{bz[bv]=bA}}}C.Animation=C.extend(bj,{tweener:function(bv,by){if(C.isFunction(bv)){by=bv;bv=["*"]}else{bv=bv.split(" ")}var bx,bu=0,bw=bv.length;for(;bu<bw;bu++){bx=bv[bu];H[bx]=H[bx]||[];H[bx].unshift(by)}},prefilter:function(bv,bu){if(bu){k.unshift(bv)}else{k.push(bv)}}});function bm(by,bE,bu){var bD,bw,bG,bx,bK,bA,bJ,bI,bH,bz=this,bv=by.style,bF={},bC=[],bB=by.nodeType&&ap(by);if(!bu.queue){bI=C._queueHooks(by,"fx");if(bI.unqueued==null){bI.unqueued=0;bH=bI.empty.fire;bI.empty.fire=function(){if(!bI.unqueued){bH()}}}bI.unqueued++;bz.always(function(){bz.always(function(){bI.unqueued--;if(!C.queue(by,"fx").length){bI.empty.fire()}})})}if(by.nodeType===1&&("height" in bE||"width" in bE)){bu.overflow=[bv.overflow,bv.overflowX,bv.overflowY];if(C.css(by,"display")==="inline"&&C.css(by,"float")==="none"){if(!C.support.inlineBlockNeedsLayout||aN(by.nodeName)==="inline"){bv.display="inline-block"}else{bv.zoom=1}}}if(bu.overflow){bv.overflow="hidden";if(!C.support.shrinkWrapBlocks){bz.done(function(){bv.overflow=bu.overflow[0];bv.overflowX=bu.overflow[1];bv.overflowY=bu.overflow[2]})}}for(bD in bE){bG=bE[bD];if(ar.exec(bG)){delete bE[bD];bA=bA||bG==="toggle";if(bG===(bB?"hide":"show")){continue}bC.push(bD)}}bx=bC.length;if(bx){bK=C._data(by,"fxshow")||C._data(by,"fxshow",{});if("hidden" in bK){bB=bK.hidden}if(bA){bK.hidden=!bB}if(bB){C(by).show()}else{bz.done(function(){C(by).hide()})}bz.done(function(){var bL;C.removeData(by,"fxshow",true);for(bL in bF){C.style(by,bL,bF[bL])}});for(bD=0;bD<bx;bD++){bw=bC[bD];bJ=bz.createTween(bw,bB?bK[bw]:0);bF[bw]=bK[bw]||C.style(by,bw);if(!(bw in bK)){bK[bw]=bJ.start;if(bB){bJ.end=bJ.start;bJ.start=bw==="width"||bw==="height"?1:0}}}}}function u(bw,bv,by,bu,bx){return new u.prototype.init(bw,bv,by,bu,bx)}C.Tween=u;u.prototype={constructor:u,init:function(bx,bv,bz,bu,by,bw){this.elem=bx;this.prop=bz;this.easing=by||"swing";this.options=bv;this.start=this.now=this.cur();this.end=bu;this.unit=bw||(C.cssNumber[bz]?"":"px")},cur:function(){var bu=u.propHooks[this.prop];return bu&&bu.get?bu.get(this):u.propHooks._default.get(this)},run:function(bw){var bv,bu=u.propHooks[this.prop];if(this.options.duration){this.pos=bv=C.easing[this.easing](bw,this.options.duration*bw,0,1,this.options.duration)}else{this.pos=bv=bw}this.now=(this.end-this.start)*bv+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(bu&&bu.set){bu.set(this)}else{u.propHooks._default.set(this)}return this}};u.prototype.init.prototype=u.prototype;u.propHooks={_default:{get:function(bv){var bu;if(bv.elem[bv.prop]!=null&&(!bv.elem.style||bv.elem.style[bv.prop]==null)){return bv.elem[bv.prop]}bu=C.css(bv.elem,bv.prop,false,"");return !bu||bu==="auto"?0:bu},set:function(bu){if(C.fx.step[bu.prop]){C.fx.step[bu.prop](bu)}else{if(bu.elem.style&&(bu.elem.style[C.cssProps[bu.prop]]!=null||C.cssHooks[bu.prop])){C.style(bu.elem,bu.prop,bu.now+bu.unit)}else{bu.elem[bu.prop]=bu.now}}}}};u.propHooks.scrollTop=u.propHooks.scrollLeft={set:function(bu){if(bu.elem.nodeType&&bu.elem.parentNode){bu.elem[bu.prop]=bu.now}}};C.each(["toggle","show","hide"],function(bv,bu){var bw=C.fn[bu];C.fn[bu]=function(bx,bz,by){return bx==null||typeof bx==="boolean"||(!bv&&C.isFunction(bx)&&C.isFunction(bz))?bw.apply(this,arguments):this.animate(aY(bu,true),bx,bz,by)}});C.fn.extend({fadeTo:function(bu,bx,bw,bv){return this.filter(ap).css("opacity",0).show().end().animate({opacity:bx},bu,bw,bv)},animate:function(bA,bx,bz,by){var bw=C.isEmptyObject(bA),bu=C.speed(bx,bz,by),bv=function(){var bB=bj(this,C.extend({},bA),bu);if(bw){bB.stop(true)}};return bw||bu.queue===false?this.each(bv):this.queue(bu.queue,bv)},stop:function(bw,bv,bu){var bx=function(by){var bz=by.stop;delete by.stop;bz(bu)};if(typeof bw!=="string"){bu=bv;bv=bw;bw=G}if(bv&&bw!==false){this.queue(bw||"fx",[])}return this.each(function(){var bB=true,by=bw!=null&&bw+"queueHooks",bA=C.timers,bz=C._data(this);if(by){if(bz[by]&&bz[by].stop){bx(bz[by])}}else{for(by in bz){if(bz[by]&&bz[by].stop&&a7.test(by)){bx(bz[by])}}}for(by=bA.length;by--;){if(bA[by].elem===this&&(bw==null||bA[by].queue===bw)){bA[by].anim.stop(bu);bB=false;bA.splice(by,1)}}if(bB||!bu){C.dequeue(this,bw)}})}});function aY(bw,by){var bx,bu={height:bw},bv=0;by=by?1:0;for(;bv<4;bv+=2-by){bx=D[bv];bu["margin"+bx]=bu["padding"+bx]=bw}if(by){bu.opacity=bu.width=bw}return bu}C.each({slideDown:aY("show"),slideUp:aY("hide"),slideToggle:aY("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(bu,bv){C.fn[bu]=function(bw,by,bx){return this.animate(bv,bw,by,bx)}});C.speed=function(bw,bx,bv){var bu=bw&&typeof bw==="object"?C.extend({},bw):{complete:bv||!bv&&bx||C.isFunction(bw)&&bw,duration:bw,easing:bv&&bx||bx&&!C.isFunction(bx)&&bx};bu.duration=C.fx.off?0:typeof bu.duration==="number"?bu.duration:bu.duration in C.fx.speeds?C.fx.speeds[bu.duration]:C.fx.speeds._default;if(bu.queue==null||bu.queue===true){bu.queue="fx"}bu.old=bu.complete;bu.complete=function(){if(C.isFunction(bu.old)){bu.old.call(this)}if(bu.queue){C.dequeue(this,bu.queue)}};return bu};C.easing={linear:function(bu){return bu},swing:function(bu){return 0.5-Math.cos(bu*Math.PI)/2}};C.timers=[];C.fx=u.prototype.init;C.fx.tick=function(){var bw,bv=C.timers,bu=0;a6=C.now();for(;bu<bv.length;bu++){bw=bv[bu];if(!bw()&&bv[bu]===bw){bv.splice(bu--,1)}}if(!bv.length){C.fx.stop()}a6=G};C.fx.timer=function(bu){if(bu()&&C.timers.push(bu)&&!a1){a1=setInterval(C.fx.tick,C.fx.interval)}};C.fx.interval=13;C.fx.stop=function(){clearInterval(a1);a1=null};C.fx.speeds={slow:600,fast:200,_default:400};C.fx.step={};if(C.expr&&C.expr.filters){C.expr.filters.animated=function(bu){return C.grep(C.timers,function(bv){return bu===bv.elem}).length}}var V=/^(?:body|html)$/i;C.fn.offset=function(bE){if(arguments.length){return bE===G?this:this.each(function(bF){C.offset.setOffset(this,bE,bF)})}var bv,bA,bB,by,bC,bu,bx,bz={top:0,left:0},bw=this[0],bD=bw&&bw.ownerDocument;if(!bD){return}if((bA=bD.body)===bw){return C.offset.bodyOffset(bw)}bv=bD.documentElement;if(!C.contains(bv,bw)){return bz}if(typeof bw.getBoundingClientRect!=="undefined"){bz=bw.getBoundingClientRect()}bB=aC(bD);by=bv.clientTop||bA.clientTop||0;bC=bv.clientLeft||bA.clientLeft||0;bu=bB.pageYOffset||bv.scrollTop;bx=bB.pageXOffset||bv.scrollLeft;return{top:bz.top+bu-by,left:bz.left+bx-bC}};C.offset={bodyOffset:function(bu){var bw=bu.offsetTop,bv=bu.offsetLeft;if(C.support.doesNotIncludeMarginInBodyOffset){bw+=parseFloat(C.css(bu,"marginTop"))||0;bv+=parseFloat(C.css(bu,"marginLeft"))||0}return{top:bw,left:bv}},setOffset:function(bx,bG,bA){var bB=C.css(bx,"position");if(bB==="static"){bx.style.position="relative"}var bz=C(bx),bv=bz.offset(),bu=C.css(bx,"top"),bE=C.css(bx,"left"),bF=(bB==="absolute"||bB==="fixed")&&C.inArray("auto",[bu,bE])>-1,bD={},bC={},bw,by;if(bF){bC=bz.position();bw=bC.top;by=bC.left}else{bw=parseFloat(bu)||0;by=parseFloat(bE)||0}if(C.isFunction(bG)){bG=bG.call(bx,bA,bv)}if(bG.top!=null){bD.top=(bG.top-bv.top)+bw}if(bG.left!=null){bD.left=(bG.left-bv.left)+by}if("using" in bG){bG.using.call(bx,bD)}else{bz.css(bD)}}};C.fn.extend({isRendered:function(){var bv=this;var bu=this[0];if(bu.parentNode==null||(bu.offsetWidth===0||bu.offsetHeight===0)){return false}return true},getSizeFromStyle:function(){var by=this;var bx=null;var bu=null;var bw=this[0];var bv;if(bw.style.width){bx=bw.style.width}if(bw.style.height){bu=bw.style.height}if(bd.getComputedStyle){bv=getComputedStyle(bw,null)}else{bv=bw.currentStyle}if(bv){if(bv.width){bx=bv.width}if(bv.height){bu=bv.height}}if(bx==="0px"){bx=0}if(bu==="0px"){bu=0}if(bx===null){bx=0}if(bu===null){bu=0}return{width:bx,height:bu}},initAnimate:function(){},sizeStyleChanged:function(bx){var bw=this;var by;var bu=function(bz){var bA=by;if(bz&&bz[0]&&bz[0].attributeName==="style"&&bz[0].type==="attributes"){if(bA.element.offsetWidth!==bA.offsetWidth||bA.element.offsetHeight!==bA.offsetHeight){bA.offsetWidth=bA.element.offsetWidth;bA.offsetHeight=bA.element.offsetHeight;if(bw.isRendered()){bA.callback()}}}};by={element:bw[0],offsetWidth:bw[0].offsetWidth,offsetHeight:bw[0].offsetHeight,callback:bx};try{if(!bw.elementStyleObserver){bw.elementStyleObserver=new MutationObserver(bu);bw.elementStyleObserver.observe(bw[0],{attributes:true,childList:false,characterData:false})}}catch(bv){}},position:function(){if(!this[0]){return}var bw=this[0],bv=this.offsetParent(),bx=this.offset(),bu=V.test(bv[0].nodeName)?{top:0,left:0}:bv.offset();bx.top-=parseFloat(C.css(bw,"marginTop"))||0;bx.left-=parseFloat(C.css(bw,"marginLeft"))||0;bu.top+=parseFloat(C.css(bv[0],"borderTopWidth"))||0;bu.left+=parseFloat(C.css(bv[0],"borderLeftWidth"))||0;return{top:bx.top-bu.top,left:bx.left-bu.left}},offsetParent:function(){return this.map(function(){var bu=this.offsetParent||ak.body;while(bu&&(!V.test(bu.nodeName)&&C.css(bu,"position")==="static")){bu=bu.offsetParent}return bu||ak.body})}});C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(bw,bv){var bu=/Y/.test(bv);C.fn[bw]=function(bx){return C.access(this,function(by,bB,bA){var bz=aC(by);if(bA===G){return bz?(bv in bz)?bz[bv]:bz.document.documentElement[bB]:by[bB]}if(bz){bz.scrollTo(!bu?bA:C(bz).scrollLeft(),bu?bA:C(bz).scrollTop())}else{by[bB]=bA}},bw,bx,arguments.length,null)}});function aC(bu){return C.isWindow(bu)?bu:bu.nodeType===9?bu.defaultView||bu.parentWindow:false}C.each({Height:"height",Width:"width"},function(bu,bv){C.each({padding:"inner"+bu,content:bv,"":"outer"+bu},function(bw,bx){C.fn[bx]=function(bB,bA){var bz=arguments.length&&(bw||typeof bB!=="boolean"),by=bw||(bB===true||bA===true?"margin":"border");return C.access(this,function(bD,bC,bE){var bF;if(C.isWindow(bD)){return bD.document.documentElement["client"+bu]}if(bD.nodeType===9){bF=bD.documentElement;return Math.max(bD.body["scroll"+bu],bF["scroll"+bu],bD.body["offset"+bu],bF["offset"+bu],bF["client"+bu])}return bE===G?C.css(bD,bC,bE,by):C.style(bD,bC,bE,by)},bv,bz?bB:G,bz,null)}})});bd.JQXLite=bd.jqxHelper=C;if( true&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").JQXLite){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return C}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}})(window)}(function(a){if(a.jQuery){a.minQuery=a.JQXLite=a.jQuery;return}if(!a.$){a.$=a.minQuery=a.JQXLite}else{a.minQuery=a.JQXLite=a.$}})(window);JQXLite.generateID=function(){var a=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};var b="";do{b="jqx"+a()+a()+a()}while($("#"+b).length>0);return b};var jqxBaseFramework=window.jqxBaseFramework=window.minQuery||window.jQuery;(function(b){b.jqx=b.jqx||{};window.jqx=b.jqx;var a={createInstance:function(c,e,g){if(e=="jqxDataAdapter"){var f=g[0];var d=g[1]||{};return new b.jqx.dataAdapter(f,d)}b(c)[e](g||{});return b(c)[e]("getInstance")}};window.jqwidgets=a;b.jqx.define=function(c,d,e){c[d]=function(){if(this.baseType){this.base=new c[this.baseType]();this.base.defineInstance()}this.defineInstance();this.metaInfo()};c[d].prototype.defineInstance=function(){};c[d].prototype.metaInfo=function(){};c[d].prototype.base=null;c[d].prototype.baseType=undefined;if(e&&c[e]){c[d].prototype.baseType=e}};b.jqx.invoke=function(f,e){if(e.length==0){return}var g=typeof(e)==Array||e.length>0?e[0]:e;var d=typeof(e)==Array||e.length>1?Array.prototype.slice.call(e,1):b({}).toArray();while(f[g]==undefined&&f.base!=null){if(f[g]!=undefined&&b.isFunction(f[g])){return f[g].apply(f,d)}if(typeof g=="string"){var c=g.toLowerCase();if(f[c]!=undefined&&b.isFunction(f[c])){return f[c].apply(f,d)}}f=f.base}if(f[g]!=undefined&&b.isFunction(f[g])){return f[g].apply(f,d)}if(typeof g=="string"){var c=g.toLowerCase();if(f[c]!=undefined&&b.isFunction(f[c])){return f[c].apply(f,d)}}return};b.jqx.getByPriority=function(c){var e=undefined;for(var d=0;d<c.length&&e==undefined;d++){if(e==undefined&&c[d]!=undefined){e=c[d]}}return e};b.jqx.hasProperty=function(d,c){if(typeof(c)=="object"){for(var f in c){var e=d;while(e){if(e.hasOwnProperty(f)){return true}if(e.hasOwnProperty(f.toLowerCase())){return true}e=e.base}return false}}else{while(d){if(d.hasOwnProperty(c)){return true}if(d.hasOwnProperty(c.toLowerCase())){return true}d=d.base}}return false};b.jqx.hasFunction=function(f,e){if(e.length==0){return false}if(f==undefined){return false}var g=typeof(e)==Array||e.length>0?e[0]:e;var d=typeof(e)==Array||e.length>1?Array.prototype.slice.call(e,1):{};while(f[g]==undefined&&f.base!=null){if(f[g]&&b.isFunction(f[g])){return true}if(typeof g=="string"){var c=g.toLowerCase();if(f[c]&&b.isFunction(f[c])){return true}}f=f.base}if(f[g]&&b.isFunction(f[g])){return true}if(typeof g=="string"){var c=g.toLowerCase();if(f[c]&&b.isFunction(f[c])){return true}}return false};b.jqx.isPropertySetter=function(d,c){if(c.length==1&&typeof(c[0])=="object"){return true}if(c.length==2&&typeof(c[0])=="string"&&!b.jqx.hasFunction(d,c)){return true}return false};b.jqx.validatePropertySetter=function(g,e,c){if(!b.jqx.propertySetterValidation){return true}if(e.length==1&&typeof(e[0])=="object"){for(var f in e[0]){var h=g;while(!h.hasOwnProperty(f)&&h.base){h=h.base}if(!h||!h.hasOwnProperty(f)){if(!c){var d=h.hasOwnProperty(f.toString().toLowerCase());if(!d){throw"Invalid property: "+f}else{return true}}return false}}return true}if(e.length!=2){if(!c){throw"Invalid property: "+e.length>=0?e[0]:""}return false}while(!g.hasOwnProperty(e[0])&&g.base){g=g.base}if(!g||!g.hasOwnProperty(e[0])){if(!c){throw"Invalid property: "+e[0]}return false}return true};if(!Object.keys){Object.keys=(function(){var e=Object.prototype.hasOwnProperty,f=!({toString:null}).propertyIsEnumerable("toString"),d=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=d.length;return function(j){if(typeof j!=="object"&&(typeof j!=="function"||j===null)){throw new TypeError("Object.keys called on non-object")}var g=[],k,h;for(k in j){if(e.call(j,k)){g.push(k)}}if(f){for(h=0;h<c;h++){if(e.call(j,d[h])){g.push(d[h])}}}return g}}())}b.jqx.set=function(f,i){var d=0;if(i.length==1&&typeof(i[0])=="object"){if(f.isInitialized&&Object.keys&&Object.keys(i[0]).length>1){var g=!f.base?f.element:f.base.element;var c=b.data(g,f.widgetName).initArgs;if(c&&JSON&&JSON.stringify&&i[0]&&c[0]){try{if(JSON.stringify(i[0])==JSON.stringify(c[0])){var h=true;b.each(i[0],function(l,m){if(f[l]!=m){h=false;return false}});if(h){return}}}catch(e){}}f.batchUpdate=i[0];var j={};var k={};b.each(i[0],function(l,m){var n=f;while(!n.hasOwnProperty(l)&&n.base!=null){n=n.base}if(n.hasOwnProperty(l)){if(f[l]!=m){j[l]=f[l];k[l]=m;d++}}else{if(n.hasOwnProperty(l.toLowerCase())){if(f[l.toLowerCase()]!=m){j[l.toLowerCase()]=f[l.toLowerCase()];k[l.toLowerCase()]=m;d++}}}});if(d<2){f.batchUpdate=null}}b.each(i[0],function(l,m){var n=f;while(!n.hasOwnProperty(l)&&n.base!=null){n=n.base}if(n.hasOwnProperty(l)){b.jqx.setvalueraiseevent(n,l,m)}else{if(n.hasOwnProperty(l.toLowerCase())){b.jqx.setvalueraiseevent(n,l.toLowerCase(),m)}else{if(b.jqx.propertySetterValidation){throw"jqxCore: invalid property '"+l+"'"}}}});if(f.batchUpdate!=null){f.batchUpdate=null;if(f.propertiesChangedHandler&&d>1){f.propertiesChangedHandler(f,j,k)}}}else{if(i.length==2){while(!f.hasOwnProperty(i[0])&&f.base){f=f.base}if(f.hasOwnProperty(i[0])){b.jqx.setvalueraiseevent(f,i[0],i[1])}else{if(f.hasOwnProperty(i[0].toLowerCase())){b.jqx.setvalueraiseevent(f,i[0].toLowerCase(),i[1])}else{if(b.jqx.propertySetterValidation){throw"jqxCore: invalid property '"+i[0]+"'"}}}}}};b.jqx.setvalueraiseevent=function(d,e,f){var c=d[e];d[e]=f;if(!d.isInitialized){return}if(d.propertyChangedHandler!=undefined){d.propertyChangedHandler(d,e,c,f)}if(d.propertyChangeMap!=undefined&&d.propertyChangeMap[e]!=undefined){d.propertyChangeMap[e](d,e,c,f)}};b.jqx.get=function(f,e){if(e==undefined||e==null){return undefined}if(f.propertyMap){var d=f.propertyMap(e);if(d!=null){return d}}if(f.hasOwnProperty(e)){return f[e]}if(f.hasOwnProperty(e.toLowerCase())){return f[e.toLowerCase()]}var c=undefined;if(typeof(e)==Array){if(e.length!=1){return undefined}c=e[0]}else{if(typeof(e)=="string"){c=e}}while(!f.hasOwnProperty(c)&&f.base){f=f.base}if(f){return f[c]}return undefined};b.jqx.serialize=function(f){var c="";if(b.isArray(f)){c="[";for(var e=0;e<f.length;e++){if(e>0){c+=", "}c+=b.jqx.serialize(f[e])}c+="]"}else{if(typeof(f)=="object"){c="{";var d=0;for(var e in f){if(d++>0){c+=", "}c+=e+": "+b.jqx.serialize(f[e])}c+="}"}else{c=f.toString()}}return c};b.jqx.propertySetterValidation=true;b.jqx.jqxWidgetProxy=function(h,d,c){var e=b(d);var g=b.data(d,h);if(g==undefined){return undefined}var f=g.instance;if(b.jqx.hasFunction(f,c)){return b.jqx.invoke(f,c)}if(b.jqx.isPropertySetter(f,c)){if(b.jqx.validatePropertySetter(f,c)){b.jqx.set(f,c);return undefined}}else{if(typeof(c)=="object"&&c.length==0){return}else{if(typeof(c)=="object"&&c.length==1&&b.jqx.hasProperty(f,c[0])){return b.jqx.get(f,c[0])}else{if(typeof(c)=="string"&&b.jqx.hasProperty(f,c[0])){return b.jqx.get(f,c)}}}}throw"jqxCore: Invalid parameter '"+b.jqx.serialize(c)+"' does not exist."};b.jqx.applyWidget=function(d,f,l,m){var h=false;try{h=window.MSApp!=undefined}catch(g){}var n=b(d);if(!m){m=new b.jqx["_"+f]()}else{m.host=n;m.element=d}if(d.id==""){d.id=b.jqx.utilities.createId()}var k={host:n,element:d,instance:m,initArgs:l};m.widgetName=f;b.data(d,f,k);b.data(d,"jqxWidget",k.instance);var j=new Array();var m=k.instance;while(m){m.isInitialized=false;j.push(m);m=m.base}j.reverse();j[0].theme=b.jqx.theme||"";b.jqx.jqxWidgetProxy(f,d,l);for(var c in j){m=j[c];if(c==0){m.host=n;m.element=d;m.WinJS=h}if(m!=undefined){if(m.definedInstance){m.definedInstance()}if(m.createInstance!=null){if(h){MSApp.execUnsafeLocalFunction(function(){m.createInstance(l)})}else{m.createInstance(l)}}}}for(var c in j){if(j[c]!=undefined){j[c].isInitialized=true}}if(h){MSApp.execUnsafeLocalFunction(function(){k.instance.refresh(true)})}else{k.instance.refresh(true)}};b.jqx.jqxWidget=function(c,d,g){var j=false;try{var l=Array.prototype.slice.call(g,0)}catch(i){var l=""}try{j=window.MSApp!=undefined}catch(i){}var h=c;var m="";if(d){m="_"+d}b.jqx.define(b.jqx,"_"+h,m);var k=new Array();if(!window[h]){var f=function(n){if(n==null){return""}var e=b.type(n);switch(e){case"string":case"number":case"date":case"boolean":case"bool":if(n===null){return""}return n.toString()}var o="";b.each(n,function(q,r){var t=r;if(q>0){o+=", "}o+="[";var p=0;if(b.type(t)=="object"){for(var s in t){if(p>0){o+=", "}o+="{"+s+":"+t[s]+"}";p++}}else{if(p>0){o+=", "}o+="{"+q+":"+t+"}";p++}o+="]"});return o};a[h]=window[h]=function(e,s){var n=[];if(!s){s={}}n.push(s);var o=e;if(b.type(o)==="object"&&e[0]){o=e[0].id;if(o===""){o=e[0].id=b.jqx.utilities.createId()}}else{if(b.type(e)==="object"&&e&&e.nodeName){o=e.id;if(o===""){o=e.id=b.jqx.utilities.createId()}}}if(window.jqxWidgets&&window.jqxWidgets[o]){if(s){b.each(window.jqxWidgets[o],function(t){var u=b(this.element).data();if(u&&u.jqxWidget){b(this.element)[h](s)}})}if(window.jqxWidgets[o].length==1){var q=b(window.jqxWidgets[o][0].widgetInstance.element).data();if(q&&q.jqxWidget){return window.jqxWidgets[o][0]}}var q=b(window.jqxWidgets[o][0].widgetInstance.element).data();if(q&&q.jqxWidget){return window.jqxWidgets[o]}}var p=b(e);if(p.length===0){p=b("<div></div>");if(h==="jqxInput"||h==="jqxPasswordInput"||h==="jqxMaskedInput"){p=b("<input/>")}if(h==="jqxTextArea"){p=b("<textarea></textarea>")}if(h==="jqxButton"||h==="jqxRepeatButton"||h==="jqxToggleButton"){p=b("<button/>")}if(h==="jqxSplitter"){p=b("<div><div>Panel 1</div><div>Panel 2</div></div>")}if(h==="jqxTabs"){p=b("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div>Content 1</div><div>Content 2</div></div>")}if(h==="jqxRibbon"){p=b("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div><div>Content 1</div><div>Content 2</div></div></div>")}if(h==="jqxDocking"){p=b("<div><div><div><div>Title 1</div><div>Content 1</div></div></div></div>")}if(h==="jqxWindow"){p=b("<div><div>Title 1</div><div>Content 1</div></div>")}}var r=[];b.each(p,function(w){var y=p[w];b.jqx.applyWidget(y,h,n,undefined);if(!k[h]){var u=b.data(y,"jqxWidget");var x=b.jqx["_"+h].prototype.defineInstance();var v={};if(b.jqx["_"+h].prototype.metaInfo){v=b.jqx["_"+h].prototype.metaInfo()}if(h=="jqxDockingLayout"){x=b.extend(x,b.jqx._jqxLayout.prototype.defineInstance())}if(h=="jqxToggleButton"||h=="jqxRepeatButton"){x=b.extend(x,b.jqx._jqxButton.prototype.defineInstance())}if(h=="jqxTreeGrid"){x=b.extend(x,b.jqx._jqxDataTable.prototype.defineInstance())}var t=function(A){var z=b.data(A,"jqxWidget");this.widgetInstance=z;var B=b.extend(this,z);B.on=B.addEventListener=function(D,E){B.addHandler(!B.base?B.host:B.base.host,D,E)};B.off=B.removeEventListener=function(D){B.removeHandler(!B.base?B.host:B.base.host,D)};for(var C in z){if(b.type(z[C])=="function"){B[C]=b.proxy(z[C],z)}}return B};k[h]=t;b.each(x,function(A,z){Object.defineProperty(t.prototype,A,{get:function(){if(this.widgetInstance){return this.widgetInstance[A]}return z},set:function(H){if(this.widgetInstance&&(this.widgetInstance[A]!=H||A==="width"||A==="height")){var F=this.widgetInstance[A];var E=H;var D=b.type(F);var B=b.type(E);var G=false;if(D!=B||A==="source"||A==="width"||A==="height"){G=true}if(G||(f(F)!=f(E))){var C={};C[A]=H;if(this.widgetInstance.host){this.widgetInstance.host[h](C)}else{this.widgetInstance.base.host[h](C)}this.widgetInstance[A]=H;if(this.widgetInstance.propertyUpdated){this.widgetInstance.propertyUpdated(A,F,H)}}}}})})}var u=new k[h](y);r.push(u);if(!window.jqxWidgets){window.jqxWidgets=new Array()}if(!window.jqxWidgets[o]){window.jqxWidgets[o]=new Array()}window.jqxWidgets[o].push(u)});if(r.length===1){return r[0]}return r}}b.fn[h]=function(){var e=Array.prototype.slice.call(arguments,0);if(e.length==0||(e.length==1&&typeof(e[0])=="object")){if(this.length==0){if(this.selector){throw new Error("Invalid Selector - "+this.selector+"! Please, check whether the used ID or CSS Class name is correct.")}else{throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")}}return this.each(function(){var q=b(this);var p=this;var r=b.data(p,h);if(r==null){b.jqx.applyWidget(p,h,e,undefined)}else{b.jqx.jqxWidgetProxy(h,this,e)}})}else{if(this.length==0){if(this.selector){throw new Error("Invalid Selector - "+this.selector+"! Please, check whether the used ID or CSS Class name is correct.")}else{throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")}}var o=null;var n=0;this.each(function(){var p=b.jqx.jqxWidgetProxy(h,this,e);if(n==0){o=p;n++}else{if(n==1){var q=[];q.push(o);o=q}o.push(p)}})}return o};try{b.extend(b.jqx["_"+h].prototype,Array.prototype.slice.call(g,0)[0])}catch(i){}b.extend(b.jqx["_"+h].prototype,{toThemeProperty:function(e,n){return b.jqx.toThemeProperty(this,e,n)},isMaterialized:function(){if(!this.theme){return false}if(this.theme.indexOf("material")>=0){return true}},isModern:function(){if(!this.theme){return false}if(this.theme.indexOf("light")>=0){return true}if(this.theme==="dark"){return true}},_addBarAndLabel:function(p){var o=this;var e=b("<label></label");e[0].innerHTML=this.placeHolder;e.addClass(o.toThemeProperty("jqx-input-label"));p.after(e);o.label=e;var n=b("<span></span>");p.after(n);n.addClass(o.toThemeProperty("jqx-input-bar"));o.bar=n;o.bar.css("top",this.host.height())}});b.jqx["_"+h].prototype.refresh=function(){if(this.base){this.base.refresh(true)}};b.jqx["_"+h].prototype.createInstance=function(){};b.jqx["_"+h].prototype.addEventHandler=function(n,e){if(this.base){this.base.host.on(n,e)}else{this.host.on(n,e)}};b.jqx["_"+h].prototype.removeEventHandler=function(n,e){if(this.base){this.base.host.off(n)}else{this.host.off(n)}};b.jqx["_"+h].prototype.applyTo=function(o,n){if(!(n instanceof Array)){var e=[];e.push(n);n=e}b.jqx.applyWidget(o,h,n,this)};b.jqx["_"+h].prototype.getInstance=function(){return this};b.jqx["_"+h].prototype.propertyChangeMap={};b.jqx["_"+h].prototype.addHandler=function(p,e,n,o){b.jqx.addHandler(b(p),e,n,o)};b.jqx["_"+h].prototype.removeHandler=function(o,e,n){b.jqx.removeHandler(b(o),e,n)};b.jqx["_"+h].prototype.setOptions=function(){if(!this.host||!this.host.length||this.host.length!=1){return}return b.jqx.jqxWidgetProxy(h,this.host[0],arguments)}};b.jqx.toThemeProperty=function(d,e,j){if(d.theme==""){return e}var h=e.split(" ");var c="";for(var g=0;g<h.length;g++){if(g>0){c+=" "}var f=h[g];if(j!=null&&j){c+=f+"-"+d.theme}else{c+=f+" "+f+"-"+d.theme}}return c};b.jqx.addHandler=function(h,j,f,g){var d=j.split(" ");for(var c=0;c<d.length;c++){var e=d[c];if(window.addEventListener){switch(e){case"mousewheel":if(b.jqx.browser.mozilla){h[0].addEventListener("DOMMouseScroll",f,false)}else{h[0].addEventListener("mousewheel",f,false)}continue;case"mousemove":if(!g){h[0].addEventListener("mousemove",f,false);continue}break}}if(g==undefined||g==null){if(h.on){h.on(e,f)}else{h.bind(e,f)}}else{if(h.on){h.on(e,g,f)}else{h.bind(e,g,f)}}}};b.jqx.removeHandler=function(g,h,f){if(!h){if(g.off){g.off()}else{g.unbind()}return}var d=h.split(" ");for(var c=0;c<d.length;c++){var e=d[c];if(window.removeEventListener){switch(e){case"mousewheel":if(b.jqx.browser.mozilla){g[0].removeEventListener("DOMMouseScroll",f,false)}else{g[0].removeEventListener("mousewheel",f,false)}continue;case"mousemove":if(f){g[0].removeEventListener("mousemove",f,false);continue}break}}if(e==undefined){if(g.off){g.off()}else{g.unbind()}continue}if(f==undefined){if(g.off){g.off(e)}else{g.unbind(e)}}else{if(g.off){g.off(e,f)}else{g.unbind(e,f)}}}};b.jqx.credits=b.jqx.credits||"";b.jqx.theme=b.jqx.theme||"";b.jqx.scrollAnimation=b.jqx.scrollAnimation||false;b.jqx.resizeDelay=b.jqx.resizeDelay||10;b.jqx.ready=function(){b(window).trigger("jqxReady")};b.jqx.init=function(){b.each(arguments[0],function(c,d){if(c=="theme"){b.jqx.theme=d}if(c=="scrollBarSize"){b.jqx.utilities.scrollBarSize=d}if(c=="touchScrollBarSize"){b.jqx.utilities.touchScrollBarSize=d}if(c=="scrollBarButtonsVisibility"){b.jqx.utilities.scrollBarButtonsVisibility=d}})};b.jqx.utilities=b.jqx.utilities||{};b.extend(b.jqx.utilities,{scrollBarSize:13,touchScrollBarSize:8,scrollBarButtonsVisibility:"visible",createId:function(){var c=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return"jqxWidget"+c()+c()+c()},setTheme:function(g,h,f){if(typeof f==="undefined"){return}if(!f[0].className.split){return}if(g===undefined){g=""}if(h===undefined){h=""}var j=f[0].className.split(" "),c=[],k=[],e=f.children();for(var d=0;d<j.length;d+=1){if(j[d].indexOf(g)>=0){if(g.length>0){c.push(j[d]);k.push(j[d].replace(g,h))}else{k.push(j[d].replace("-"+h,"")+"-"+h)}}}this._removeOldClasses(c,f);this._addNewClasses(k,f);for(var d=0;d<e.length;d+=1){this.setTheme(g,h,b(e[d]))}},_removeOldClasses:function(e,d){for(var c=0;c<e.length;c+=1){d.removeClass(e[c])}},_addNewClasses:function(e,d){for(var c=0;c<e.length;c+=1){d.addClass(e[c])}},getOffset:function(c){var e=b.jqx.mobile.getLeftPos(c[0]);var d=b.jqx.mobile.getTopPos(c[0]);return{top:d,left:e}},resize:function(h,t,q,p){if(p===undefined){p=true}var m=-1;var l=this;var e=function(v){if(!l.hiddenWidgets){return -1}var w=-1;for(var u=0;u<l.hiddenWidgets.length;u++){if(v.id){if(l.hiddenWidgets[u].id==v.id){w=u;break}}else{if(l.hiddenWidgets[u].id==v[0].id){w=u;break}}}return w};if(this.resizeHandlers){for(var j=0;j<this.resizeHandlers.length;j++){if(h.id){if(this.resizeHandlers[j].id==h.id){m=j;break}}else{if(this.resizeHandlers[j].id==h[0].id){m=j;break}}}if(q===true){if(m!=-1){this.resizeHandlers.splice(m,1);if(this.watchedElementData&&this.watchedElementData.length>0){this.watchedElementData.splice(m,1)}}if(this.resizeHandlers.length==0){var o=b(window);if(o.off){o.off("resize.jqx");o.off("orientationchange.jqx");o.off("orientationchanged.jqx")}else{o.unbind("resize.jqx");o.unbind("orientationchange.jqx");o.unbind("orientationchanged.jqx")}this.resizeHandlers=null}var c=e(h);if(c!=-1&&this.hiddenWidgets){this.hiddenWidgets.splice(c,1)}return}}else{if(q===true){var c=e(h);if(c!=-1&&this.hiddenWidgets){this.hiddenWidgets.splice(c,1)}return}}var l=this;var n=function(w,F){if(!l.resizeHandlers){return}var G=function(J){var i=-1;var K=J.parentNode;while(K){i++;K=K.parentNode}return i};var v=function(L,J){if(!L.widget||!J.widget){return 0}var K=G(L.widget[0]);var i=G(J.widget[0]);try{if(K<i){return -1}if(K>i){return 1}}catch(M){var N=M}return 0};var x=function(J){if(l.hiddenWidgets.length>0){l.hiddenWidgets.sort(v);var i=function(){var L=false;var N=new Array();for(var M=0;M<l.hiddenWidgets.length;M++){var K=l.hiddenWidgets[M];if(b.jqx.isHidden(K.widget)){L=true;N.push(K)}else{if(K.callback){K.callback(F)}}}l.hiddenWidgets=N;if(!L){clearInterval(l.__resizeInterval)}};if(J==false){i();if(l.__resizeInterval){clearInterval(l.__resizeInterval)}return}if(l.__resizeInterval){clearInterval(l.__resizeInterval)}l.__resizeInterval=setInterval(function(){i()},100)}};if(l.hiddenWidgets&&l.hiddenWidgets.length>0){x(false)}l.hiddenWidgets=new Array();l.resizeHandlers.sort(v);for(var C=0;C<l.resizeHandlers.length;C++){var I=l.resizeHandlers[C];var E=I.widget;var B=I.data;if(!B){continue}if(!B.jqxWidget){continue}var u=B.jqxWidget.width;var H=B.jqxWidget.height;if(B.jqxWidget.base){if(u==undefined){u=B.jqxWidget.base.width}if(H==undefined){H=B.jqxWidget.base.height}}if(u===undefined&&H===undefined){u=B.jqxWidget.element.style.width;H=B.jqxWidget.element.style.height}var D=false;if(u!=null&&u.toString().indexOf("%")!=-1){D=true}if(H!=null&&H.toString().indexOf("%")!=-1){D=true}if(b.jqx.isHidden(E)){if(e(E)===-1){if(D||w===true){if(I.data.nestedWidget!==true){l.hiddenWidgets.push(I)}}}}else{if(w===undefined||w!==true){if(D){I.callback(F);if(l.watchedElementData){for(var z=0;z<l.watchedElementData.length;z++){if(l.watchedElementData[z].element==B.jqxWidget.element){l.watchedElementData[z].offsetWidth=B.jqxWidget.element.offsetWidth;l.watchedElementData[z].offsetHeight=B.jqxWidget.element.offsetHeight;break}}}if(l.hiddenWidgets.indexOf(I)>=0){l.hiddenWidgets.splice(l.hiddenWidgets.indexOf(I),1)}}if(B.jqxWidget.element){var y=B.jqxWidget.element.className;if(y.indexOf("dropdownlist")>=0||y.indexOf("datetimeinput")>=0||y.indexOf("combobox")>=0||y.indexOf("menu")>=0){if(B.jqxWidget.isOpened){var A=B.jqxWidget.isOpened();if(A){if(F&&F=="resize"&&b.jqx.mobile.isTouchDevice()){continue}B.jqxWidget.close()}}}}}}}x()};if(!this.resizeHandlers){this.resizeHandlers=new Array();var o=b(window);if(o.on){this._resizeTimer=null;this._initResize=null;o.on("resize.jqx",function(i){if(l._resizeTimer!=undefined){clearTimeout(l._resizeTimer)}if(!l._initResize){l._initResize=true;n(null,"resize")}else{l._resizeTimer=setTimeout(function(){n(null,"resize")},b.jqx.resizeDelay)}});o.on("orientationchange.jqx",function(i){n(null,"orientationchange")});o.on("orientationchanged.jqx",function(i){n(null,"orientationchange")})}else{o.bind("resize.jqx",function(i){n(null,"orientationchange")});o.bind("orientationchange.jqx",function(i){n(null,"orientationchange")});o.bind("orientationchanged.jqx",function(i){n(null,"orientationchange")})}}var f=h.data();if(p){if(m===-1){this.resizeHandlers.push({id:h[0].id,widget:h,callback:t,data:f})}}try{var d=f.jqxWidget.width;var s=f.jqxWidget.height;if(f.jqxWidget.base){if(d==undefined){d=f.jqxWidget.base.width}if(s==undefined){s=f.jqxWidget.base.height}}if(d===undefined&&s===undefined){d=f.jqxWidget.element.style.width;s=f.jqxWidget.element.style.height}var k=false;if(d!=null&&d.toString().indexOf("%")!=-1){k=true}if(s!=null&&s.toString().indexOf("%")!=-1){k=true}if(k){if(!this.watchedElementData){this.watchedElementData=[]}var l=this;var g=function(i){if(l.watchedElementData.forEach){l.watchedElementData.forEach(function(u){if(u.element.offsetWidth!==u.offsetWidth||u.element.offsetHeight!==u.offsetHeight){u.offsetWidth=u.element.offsetWidth;u.offsetHeight=u.element.offsetHeight;if(u.timer){clearTimeout(u.timer)}u.timer=setTimeout(function(){if(!b.jqx.isHidden(b(u.element))){u.callback()}else{u.timer=setInterval(function(){if(!b.jqx.isHidden(b(u.element))){clearInterval(u.timer);u.callback()}},100)}})}})}};l.watchedElementData.push({element:h[0],offsetWidth:h[0].offsetWidth,offsetHeight:h[0].offsetHeight,callback:t});if(!l.observer){l.observer=new MutationObserver(g);l.observer.observe(document.body,{attributes:true,childList:true,characterData:true})}}}catch(r){}if(b.jqx.isHidden(h)&&p===true){n(true)}b.jqx.resize=function(){n(null,"resize")}},parseJSON:function(e){if(!e||typeof e!=="string"){return null}var c=/^[\],:{}\s]*$/,g=/(?:^|:|,)(?:\s*\[)+/g,d=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,f=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g;e=b.trim(e);if(window.JSON&&window.JSON.parse){return window.JSON.parse(e)}if(c.test(e.replace(d,"@").replace(f,"]").replace(g,""))){return(new Function("return "+e))()}throw new Error("Invalid JSON: "+e)},html:function(d,e){if(!b(d).on){return b(d).html(e)}try{return b.access(d,function(s){var f=d[0]||{},m=0,j=d.length;if(s===undefined){return f.nodeType===1?f.innerHTML.replace(rinlinejQuery,""):undefined}var r=/<(?:script|style|link)/i,n="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",h=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,p=/<([\w:]+)/,g=/<(?:script|object|embed|option|style)/i,k=new RegExp("<(?:"+n+")[\\s/>]","i"),q=/^\s+/,t={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};if(typeof s==="string"&&!r.test(s)&&(b.support.htmlSerialize||!k.test(s))&&(b.support.leadingWhitespace||!q.test(s))&&!t[(p.exec(s)||["",""])[1].toLowerCase()]){s=s.replace(h,"<$1></$2>");try{for(;m<j;m++){f=this[m]||{};if(f.nodeType===1){b.cleanData(f.getElementsByTagName("*"));f.innerHTML=s}}f=0}catch(o){}}if(f){d.empty().append(s)}},null,e,arguments.length)}catch(c){return b(d).html(e)}},hasTransform:function(e){var d="";d=e.css("transform");if(d==""||d=="none"){d=e.parents().css("transform");if(d==""||d=="none"){var c=b.jqx.utilities.getBrowser();if(c.browser=="msie"){d=e.css("-ms-transform");if(d==""||d=="none"){d=e.parents().css("-ms-transform")}}else{if(c.browser=="chrome"){d=e.css("-webkit-transform");if(d==""||d=="none"){d=e.parents().css("-webkit-transform")}}else{if(c.browser=="opera"){d=e.css("-o-transform");if(d==""||d=="none"){d=e.parents().css("-o-transform")}}else{if(c.browser=="mozilla"){d=e.css("-moz-transform");if(d==""||d=="none"){d=e.parents().css("-moz-transform")}}}}}}else{return d!=""&&d!="none"}}if(d==""||d=="none"){d=b(document.body).css("transform")}return d!=""&&d!="none"&&d!=null},getBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=/(chrome)[ \/]([\w.]+)/.exec(d)||/(webkit)[ \/]([\w.]+)/.exec(d)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(d)||/(msie) ([\w.]+)/.exec(d)||d.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d)||[];var e={browser:c[1]||"",version:c[2]||"0"};if(d.indexOf("rv:11.0")>=0&&d.indexOf(".net4.0c")>=0){e.browser="msie";e.version="11";c[1]="msie"}if(d.indexOf("edge")>=0){e.browser="msie";e.version="12";c[1]="msie"}e[c[1]]=c[1];return e}});b.jqx.browser=b.jqx.utilities.getBrowser();b.jqx.isHidden=function(d){if(!d||!d[0]){return false}var c=d[0].offsetWidth,e=d[0].offsetHeight;if(c===0||e===0){return true}else{return false}};b.jqx.ariaEnabled=true;b.jqx.aria=function(d,f,e){if(!b.jqx.ariaEnabled){return}if(f==undefined){b.each(d.aria,function(h,i){var k=!d.base?d.host.attr(h):d.base.host.attr(h);if(k!=undefined&&!b.isFunction(k)){var j=k;switch(i.type){case"number":j=new Number(k);if(isNaN(j)){j=k}break;case"boolean":j=k=="true"?true:false;break;case"date":j=new Date(k);if(j=="Invalid Date"||isNaN(j)){j=k}break}d[i.name]=j}else{var k=d[i.name];if(b.isFunction(k)){k=d[i.name]()}if(k==undefined){k=""}try{!d.base?d.host.attr(h,k.toString()):d.base.host.attr(h,k.toString())}catch(g){}}})}else{try{if(d.host){if(!d.base){if(d.host){if(d.element.setAttribute){d.element.setAttribute(f,e.toString())}else{d.host.attr(f,e.toString())}}else{d.attr(f,e.toString())}}else{if(d.base.host){d.base.host.attr(f,e.toString())}else{d.attr(f,e.toString())}}}else{if(d.setAttribute){d.setAttribute(f,e.toString())}}}catch(c){}}};if(!Array.prototype.indexOf){Array.prototype.indexOf=function(d){var c=this.length;var e=Number(arguments[1])||0;e=(e<0)?Math.ceil(e):Math.floor(e);if(e<0){e+=c}for(;e<c;e++){if(e in this&&this[e]===d){return e}}return -1}}b.jqx.mobile=b.jqx.mobile||{};b.jqx.position=function(c){var f=parseInt(c.pageX);var e=parseInt(c.pageY);if(b.jqx.mobile.isTouchDevice()){var d=b.jqx.mobile.getTouches(c);var g=d[0];f=parseInt(g.pageX);e=parseInt(g.pageY)}return{left:f,top:e}};b.extend(b.jqx.mobile,{_touchListener:function(i,g){var c=function(j,l){var k=document.createEvent("MouseEvents");k.initMouseEvent(j,l.bubbles,l.cancelable,l.view,l.detail,l.screenX,l.screenY,l.clientX,l.clientY,l.ctrlKey,l.altKey,l.shiftKey,l.metaKey,l.button,l.relatedTarget);k._pageX=l.pageX;k._pageY=l.pageY;return k};var h={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"};var f=c(h[i.type],i);i.target.dispatchEvent(f);var d=i.target["on"+h[i.type]];if(typeof d==="function"){d(i)}},setMobileSimulator:function(d,f){if(this.isTouchDevice()){return}this.simulatetouches=true;if(f==false){this.simulatetouches=false}var e={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"};var c=this;if(window.addEventListener){var g=function(){for(var h in e){if(d.addEventListener){d.removeEventListener(h,c._touchListener);d.addEventListener(h,c._touchListener,false)}}};if(b.jqx.browser.msie){g()}else{g()}}},isTouchDevice:function(){if(this.touchDevice!=undefined){return this.touchDevice}var d="Browser CodeName: "+navigator.appCodeName+"";d+="Browser Name: "+navigator.appName+"";d+="Browser Version: "+navigator.appVersion+"";d+="Platform: "+navigator.platform+"";d+="User-agent header: "+navigator.userAgent+"";if(d.indexOf("Android")!=-1){return true}if(d.indexOf("IEMobile")!=-1){return true}if(d.indexOf("Windows Phone")!=-1){return true}if(d.indexOf("WPDesktop")!=-1){return true}if(d.indexOf("ZuneWP7")!=-1){return true}if(d.indexOf("BlackBerry")!=-1&&d.indexOf("Mobile Safari")!=-1){return true}if(d.indexOf("ipod")!=-1){return true}if(d.indexOf("nokia")!=-1||d.indexOf("Nokia")!=-1){return true}if(d.indexOf("Chrome/17")!=-1){return false}if(d.indexOf("CrOS")!=-1){return false}if(d.indexOf("Opera")!=-1&&d.indexOf("Mobi")==-1&&d.indexOf("Mini")==-1&&d.indexOf("Platform: Win")!=-1){return false}if(d.indexOf("HybridDeviceTouch")!=-1){return true}if(d.indexOf("HybridDeviceMouse")!=-1){return false}if(d.indexOf("Opera")!=-1&&d.indexOf("Mobi")!=-1&&d.indexOf("Opera Mobi")!=-1){return true}if(d.indexOf("Mozilla/5.0 (X11; Linux x86_64)")!=-1){return false}var f={ios:"i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ",android:"(Android |HTC_|Silk/)",blackberry:"BlackBerry(?:.*)Version/",rimTablet:"RIM Tablet OS ",webos:"(?:webOS|hpwOS)/",bada:"Bada/"};try{if(this.touchDevice!=undefined){return this.touchDevice}this.touchDevice=false;for(var h in f){if(f.hasOwnProperty(h)){var k=f[h];var g=d.match(new RegExp("(?:"+k+")([^\\s;]+)"));if(g){if(h.toString()=="blackberry"){this.touchDevice=false;return false}this.touchDevice=true;return true}}}var j=navigator.userAgent;if(navigator.platform.toLowerCase().indexOf("win")!=-1){if(j.indexOf("Windows Phone")>=0||j.indexOf("WPDesktop")>=0||j.indexOf("IEMobile")>=0||j.indexOf("ZuneWP7")>=0){this.touchDevice=true;return true}else{if(j.indexOf("Touch")>=0){var c=("MSPointerDown" in window)||("pointerdown" in window);if(c){this.touchDevice=true;return true}if(j.indexOf("ARM")>=0){this.touchDevice=true;return true}this.touchDevice=false;return false}}}if(navigator.platform.toLowerCase().indexOf("win")!=-1){this.touchDevice=false;return false}if(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch){this.touchDevice=true}return this.touchDevice}catch(l){this.touchDevice=false;return false}},getLeftPos:function(c){var d=c.offsetLeft;while((c=c.offsetParent)!=null){if(c.tagName!="HTML"){d+=c.offsetLeft;if(document.all){d+=c.clientLeft}}}return d},getTopPos:function(d){var f=d.offsetTop;var c=b(d).coord();while((d=d.offsetParent)!=null){if(d.tagName!="HTML"){f+=(d.offsetTop-d.scrollTop);if(document.all){f+=d.clientTop}}}var e=navigator.userAgent.toLowerCase();var g=(e.indexOf("windows phone")!=-1||e.indexOf("WPDesktop")!=-1||e.indexOf("ZuneWP7")!=-1||e.indexOf("msie 9")!=-1||e.indexOf("msie 11")!=-1||e.indexOf("msie 10")!=-1)&&e.indexOf("touch")!=-1;if(g){return c.top}if(this.isSafariMobileBrowser()){if(this.isSafari4MobileBrowser()&&this.isIPadSafariMobileBrowser()){return f}if(e.indexOf("version/7")!=-1){return c.top}if(e.indexOf("version/6")!=-1||e.indexOf("version/5")!=-1){f=f+b(window).scrollTop()}if(/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)){return f+b(window).scrollTop()}if(/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)){return f+b(window).scrollTop()}return c.top}return f},isChromeMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("android")!=-1;return c},isOperaMiniMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("opera mini")!=-1||d.indexOf("opera mobi")!=-1;return c},isOperaMiniBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("opera mini")!=-1;return c},isNewSafariMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("ipad")!=-1||d.indexOf("iphone")!=-1||d.indexOf("ipod")!=-1;c=c&&(d.indexOf("version/5")!=-1);return c},isSafari4MobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("ipad")!=-1||d.indexOf("iphone")!=-1||d.indexOf("ipod")!=-1;c=c&&(d.indexOf("version/4")!=-1);return c},isWindowsPhone:function(){var d=navigator.userAgent.toLowerCase();var c=(d.indexOf("windows phone")!=-1||d.indexOf("WPDesktop")!=-1||d.indexOf("ZuneWP7")!=-1||d.indexOf("msie 9")!=-1||d.indexOf("msie 11")!=-1||d.indexOf("msie 10")!=-1&&d.indexOf("touch")!=-1);return c},isSafariMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();if(/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)){return true}if(/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)){return true}var c=d.indexOf("ipad")!=-1||d.indexOf("iphone")!=-1||d.indexOf("ipod")!=-1||d.indexOf("mobile safari")!=-1;return c},isIPadSafariMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("ipad")!=-1;return c},isMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("ipad")!=-1||d.indexOf("iphone")!=-1||d.indexOf("android")!=-1;return c},getTouches:function(c){if(c.originalEvent){if(c.originalEvent.touches&&c.originalEvent.touches.length){return c.originalEvent.touches}else{if(c.originalEvent.changedTouches&&c.originalEvent.changedTouches.length){return c.originalEvent.changedTouches}}}if(!c.touches){c.touches=new Array();c.touches[0]=c.originalEvent!=undefined?c.originalEvent:c;if(c.originalEvent!=undefined&&c.pageX){c.touches[0]=c}if(c.type=="mousemove"){c.touches[0]=c}}return c.touches},getTouchEventName:function(c){if(this.isWindowsPhone()){var d=navigator.userAgent.toLowerCase();if(d.indexOf("windows phone 7")!=-1){if(c.toLowerCase().indexOf("start")!=-1){return"MSPointerDown"}if(c.toLowerCase().indexOf("move")!=-1){return"MSPointerMove"}if(c.toLowerCase().indexOf("end")!=-1){return"MSPointerUp"}}if(c.toLowerCase().indexOf("start")!=-1){return"pointerdown"}if(c.toLowerCase().indexOf("move")!=-1){return"pointermove"}if(c.toLowerCase().indexOf("end")!=-1){return"pointerup"}}else{return c}},dispatchMouseEvent:function(c,g,f){if(this.simulatetouches){return}var d=document.createEvent("MouseEvent");d.initMouseEvent(c,true,true,g.view,1,g.screenX,g.screenY,g.clientX,g.clientY,false,false,false,false,0,null);if(f!=null){f.dispatchEvent(d)}},getRootNode:function(c){while(c.nodeType!==1){c=c.parentNode}return c},setTouchScroll:function(c,d){if(!this.enableScrolling){this.enableScrolling=[]}this.enableScrolling[d]=c},touchScroll:function(B,M,Z,H,x,n){if(B==null){return}var G=this;var f=0;var r=0;var g=0;var i=0;var t=0;var j=0;if(!this.scrolling){this.scrolling=[]}this.scrolling[H]=false;var k=false;var p=b(B);var R=["select","input","textarea"];var X=0;var J=0;if(!this.enableScrolling){this.enableScrolling=[]}this.enableScrolling[H]=true;var H=H;var w=this.getTouchEventName("touchstart")+".touchScroll";var D=this.getTouchEventName("touchend")+".touchScroll";var ab=this.getTouchEventName("touchmove")+".touchScroll";var l,W,z,ah,V,Y,aj,Q,aa,d,F,ad,af,O,e,v,u,S,c,E,ag,o;Q=M;var aj=0;var aa=0;var h=0;var T=0;var ai=0;var Y=x.jqxScrollBar("max");var o=325;function A(am){if(am.targetTouches&&(am.targetTouches.length>=1)){return am.targetTouches[0].clientY}else{if(am.originalEvent&&am.originalEvent.clientY!==undefined){return am.originalEvent.clientY}else{var al=G.getTouches(am);return al[0].clientY}}}function ae(am){if(am.targetTouches&&(am.targetTouches.length>=1)){return am.targetTouches[0].clientX}else{if(am.originalEvent&&am.originalEvent.clientX!==undefined){return am.originalEvent.clientX}else{var al=G.getTouches(am);return al[0].clientX}}}var I=function(){var ap,am,aq,ao;ap=Date.now();am=ap-v;v=ap;aq=aa-e;var an=h-ah;e=aa;ah=h;F=true;ao=1000*aq/(1+am);var al=1000*an/(1+am);af=0.8*ao+0.2*af;O=0.8*al+0.2*O};var C=false;var X=function(am){if(!G.enableScrolling[H]){return true}if(b.inArray(am.target.tagName.toLowerCase(),R)!==-1){return}aa=n.jqxScrollBar("value");h=x.jqxScrollBar("value");var an=G.getTouches(am);var ao=an[0];if(an.length==1){G.dispatchMouseEvent("mousedown",ao,G.getRootNode(ao.target))}Y=x.jqxScrollBar("max");Q=n.jqxScrollBar("max");function al(ap){C=false;F=true;d=A(ap);ag=ae(ap);af=S=O=0;e=aa;ah=h;v=Date.now();clearInterval(u);u=setInterval(I,100);T=aa;ai=h;if(aa>0&&aa<Q&&n[0].style.visibility!="hidden"){}}al(am);k=false;r=ao.pageY;t=ao.pageX;if(G.simulatetouches){if(ao._pageY!=undefined){r=ao._pageY;t=ao._pageX}}G.scrolling[H]=true;f=0;i=0;return true};if(p.on){p.on(w,X)}else{p.bind(w,X)}var ac=function(am,al){aa=(am>Q)?Q:(am<aj)?aj:am;Z(null,am,0,0,al);return(am>Q)?"max":(am<aj)?"min":"value"};var m=function(am,al){h=(am>Y)?Y:(am<aj)?aj:am;Z(am,null,0,0,al);return(am>Y)?"max":(am<aj)?"min":"value"};function U(){var al,am;if(S){al=Date.now()-v;am=-S*Math.exp(-al/o);if(am>0.5||am<-0.5){ac(c+am);requestAnimationFrame(U)}else{ac(c)}}}function N(){var al,am;if(S){al=Date.now()-v;am=-S*Math.exp(-al/o);if(am>0.5||am<-0.5){m(E+am);requestAnimationFrame(N)}else{m(E)}}}var y=function(al){if(!G.enableScrolling[H]){return true}if(!G.scrolling[H]){return true}if(C){al.preventDefault();al.stopPropagation()}var aq=G.getTouches(al);if(aq.length>1){return true}var am=aq[0].pageY;var ao=aq[0].pageX;if(G.simulatetouches){if(aq[0]._pageY!=undefined){am=aq[0]._pageY;ao=aq[0]._pageX}}var au=am-r;var av=ao-t;J=am;var at=ao;g=au-f;j=av-i;k=true;f=au;i=av;var an=x!=null?x[0].style.visibility!="hidden":true;var ar=n!=null?n[0].style.visibility!="hidden":true;function ap(ay){var aA,az,ax;if(F){aA=A(ay);ax=ae(ay);az=d-aA;V=ag-ax;var aw="value";if(az>2||az<-2){d=aA;aw=ac(aa+az,ay);I();if(aw=="min"&&T===0){return true}if(aw=="max"&&T===Q){return true}if(!ar){return true}ay.preventDefault();ay.stopPropagation();C=true;return false}else{if(V>2||V<-2){ag=ax;aw=m(h+V,ay);I();if(aw=="min"&&ai===0){return true}if(aw=="max"&&ai===Y){return true}if(!an){return true}C=true;ay.preventDefault();ay.stopPropagation();return false}}ay.preventDefault()}}if(an||ar){if((an)||(ar)){ap(al)}}};if(p.on){p.on(ab,y)}else{p.bind(ab,y)}var s=function(am){if(!G.enableScrolling[H]){return true}var an=G.getTouches(am)[0];if(!G.scrolling[H]){return true}F=false;clearInterval(u);if(af>10||af<-10){S=0.8*af;c=Math.round(aa+S);v=Date.now();requestAnimationFrame(U)}else{if(O>10||O<-10){S=0.8*O;E=Math.round(h+S);v=Date.now();requestAnimationFrame(N)}else{}}G.scrolling[H]=false;if(k){G.dispatchMouseEvent("mouseup",an,am.target)}else{var an=G.getTouches(am)[0],al=G.getRootNode(an.target);G.dispatchMouseEvent("mouseup",an,al);G.dispatchMouseEvent("click",an,al);return true}};if(this.simulatetouches){var q=b(window).on!=undefined||b(window).bind;var P=function(al){try{s(al)}catch(am){}G.scrolling[H]=false};b(window).on!=undefined?b(document).on("mouseup.touchScroll",P):b(document).bind("mouseup.touchScroll",P);if(window.frameElement){if(window.top!=null){var L=function(al){try{s(al)}catch(am){}G.scrolling[H]=false};if(window.top.document){b(window.top.document).on?b(window.top.document).on("mouseup",L):b(window.top.document).bind("mouseup",L)}}}var ak=b(document).on!=undefined||b(document).bind;var K=function(al){if(!G.scrolling[H]){return true}G.scrolling[H]=false;var an=G.getTouches(al)[0],am=G.getRootNode(an.target);G.dispatchMouseEvent("mouseup",an,am);G.dispatchMouseEvent("click",an,am)};b(document).on!=undefined?b(document).on("touchend",K):b(document).bind("touchend",K)}if(p.on){p.on("dragstart",function(al){al.preventDefault()});p.on("selectstart",function(al){al.preventDefault()})}p.on?p.on(D+" touchcancel.touchScroll",s):p.bind(D+" touchcancel.touchScroll",s)}});b.jqx.cookie=b.jqx.cookie||{};b.extend(b.jqx.cookie,{cookie:function(f,g,d){if(arguments.length>1&&String(g)!=="[object Object]"){d=b.extend({},d);if(g===null||g===undefined){d.expires=-1}if(typeof d.expires==="number"){var i=d.expires,e=d.expires=new Date();e.setDate(e.getDate()+i)}g=String(g);return(document.cookie=[encodeURIComponent(f),"=",d.raw?g:encodeURIComponent(g),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join(""))}d=g||{};var c,h=d.raw?function(j){return j}:decodeURIComponent;return(c=new RegExp("(?:^|; )"+encodeURIComponent(f)+"=([^;]*)").exec(document.cookie))?h(c[1]):null}});b.jqx.string=b.jqx.string||{};b.extend(b.jqx.string,{replace:function(g,e,f){if(e===f){return this}var c=g;var d=c.indexOf(e);while(d!=-1){c=c.replace(e,f);d=c.indexOf(e)}return c},contains:function(c,d){if(c==null||d==null){return false}return c.indexOf(d)!=-1},containsIgnoreCase:function(c,d){if(c==null||d==null){return false}return c.toString().toUpperCase().indexOf(d.toString().toUpperCase())!=-1},equals:function(c,d){if(c==null||d==null){return false}c=this.normalize(c);if(d.length==c.length){return c.slice(0,d.length)==d}return false},equalsIgnoreCase:function(c,d){if(c==null||d==null){return false}c=this.normalize(c);if(d.length==c.length){return c.toUpperCase().slice(0,d.length)==d.toUpperCase()}return false},startsWith:function(c,d){if(c==null||d==null){return false}return c.slice(0,d.length)==d},startsWithIgnoreCase:function(c,d){if(c==null||d==null){return false}return c.toUpperCase().slice(0,d.length)==d.toUpperCase()},normalize:function(c){if(c.charCodeAt(c.length-1)==65279){c=c.substring(0,c.length-1)}return c},endsWith:function(c,d){if(c==null||d==null){return false}c=this.normalize(c);return c.slice(-d.length)==d},endsWithIgnoreCase:function(c,d){if(c==null||d==null){return false}c=this.normalize(c);return c.toUpperCase().slice(-d.length)==d.toUpperCase()}});b.extend(b.easing,{easeOutBack:function(f,g,e,j,i,h){if(h==undefined){h=1.70158}return j*((g=g/i-1)*g*((h+1)*g+h)+1)+e},easeInQuad:function(f,g,e,i,h){return i*(g/=h)*g+e},easeInOutCirc:function(f,g,e,i,h){if((g/=h/2)<1){return -i/2*(Math.sqrt(1-g*g)-1)+e}return i/2*(Math.sqrt(1-(g-=2)*g)+1)+e},easeInOutSine:function(f,g,e,i,h){return -i/2*(Math.cos(Math.PI*g/h)-1)+e},easeInCubic:function(f,g,e,i,h){return i*(g/=h)*g*g+e},easeOutCubic:function(f,g,e,i,h){return i*((g=g/h-1)*g*g+1)+e},easeInOutCubic:function(f,g,e,i,h){if((g/=h/2)<1){return i/2*g*g*g+e}return i/2*((g-=2)*g*g+2)+e},easeInSine:function(f,g,e,i,h){return -i*Math.cos(g/h*(Math.PI/2))+i+e},easeOutSine:function(f,g,e,i,h){return i*Math.sin(g/h*(Math.PI/2))+e},easeInOutSine:function(f,g,e,i,h){return -i/2*(Math.cos(Math.PI*g/h)-1)+e}})})(jqxBaseFramework);(function(b){if(b.event&&b.event.special){b.extend(b.event.special,{close:{noBubble:true},open:{noBubble:true},cellclick:{noBubble:true},rowclick:{noBubble:true},tabclick:{noBubble:true},selected:{noBubble:true},expanded:{noBubble:true},collapsed:{noBubble:true},valuechanged:{noBubble:true},expandedItem:{noBubble:true},collapsedItem:{noBubble:true},expandingItem:{noBubble:true},collapsingItem:{noBubble:true}})}if(b.fn.extend){b.fn.extend({ischildof:function(g){if(!b(this).parents){var c=g.element.contains(this.element);return c}var e=b(this).parents().get();for(var d=0;d<e.length;d++){if(typeof g!="string"){var f=e[d];if(g!==undefined){if(f==g[0]){return true}}}else{if(g!==undefined){if(b(e[d]).is(g)){return true}}}}return false}})}b.fn.jqxProxy=function(){var e=b(this).data().jqxWidget;var c=Array.prototype.slice.call(arguments,0);var d=e.element;if(!d){d=e.base.element}return b.jqx.jqxWidgetProxy(e.widgetName,d,c)};var a=b.originalVal=b.fn.val;b.fn.val=function(d){if(typeof d=="undefined"){if(b(this).hasClass("jqx-widget")){var c=b(this).data().jqxWidget;if(c&&c.val){return c.val()}}if(this[0]&&this[0].tagName.toLowerCase().indexOf("angular")>=0){var c=b(this).find(".jqx-widget").data().jqxWidget;if(c&&c.val){return c.val()}}return a.call(this)}else{if(b(this).hasClass("jqx-widget")){var c=b(this).data().jqxWidget;if(c&&c.val){if(arguments.length!=2){return c.val(d)}else{return c.val(d,arguments[1])}}}if(this[0]&&this[0].tagName.toLowerCase().indexOf("angular")>=0){var c=b(this).find(".jqx-widget").data().jqxWidget;if(c&&c.val){if(arguments.length!=2){return c.val(d)}else{return c.val(d,arguments[1])}}}return a.call(this,d)}};if(b.fn.modal&&b.fn.modal.Constructor){b.fn.modal.Constructor.prototype.enforceFocus=function(){b(document).off("focusin.bs.modal").on("focusin.bs.modal",b.proxy(function(c){if(this.$element[0]!==c.target&&!this.$element.has(c.target).length){if(b(c.target).parents().hasClass("jqx-popup")){return true}this.$element.trigger("focus")}},this))}}b.fn.coord=function(n){var e,j,i={top:0,left:0},f=this[0],l=f&&f.ownerDocument;if(!l){return}e=l.documentElement;if(!b.contains(e,f)){return i}if(typeof f.getBoundingClientRect!==undefined){i=f.getBoundingClientRect()}var d=function(o){return b.isWindow(o)?o:o.nodeType===9?o.defaultView||o.parentWindow:false};j=d(l);var h=0;var c=0;var g=navigator.userAgent.toLowerCase();var m=g.indexOf("ipad")!=-1||g.indexOf("iphone")!=-1;if(m){h=2}if(true==n){if(document.body.style.position!="static"&&document.body.style.position!=""){var k=b(document.body).coord();h=-k.left;c=-k.top}}return{top:c+i.top+(j.pageYOffset||e.scrollTop)-(e.clientTop||0),left:h+i.left+(j.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};b.jqx.ripplers=[];b.jqx.ripple=function(f,e,o){if(!e){e=f}var h=b(f);var j=false;h.append("<span class='ink'></span>");var p=h.find(".ink");var c=false;for(var g=0;g<b.jqx.ripplers.length;g++){var k=b.jqx.ripplers[g];if(k.element[0]===f[0]){c=true;break}}if(!c){b.jqx.ripplers.push({ink:p,element:f,hostElement:e,hostElementType:o})}if(o==="checkbox"||o==="radiobutton"){var l=Math.max(h.outerWidth(),h.outerHeight());p.css({height:l,width:l});var n=h.width()/2-p.width()/2;var m=h.height()/2-p.height()/2;p.css({top:m+"px",left:n+"px"})}if(b.jqx.ripplers.length===1){b(document).on("mouseup",function(r){b.jqx.ripple.mouseCaptured=false;for(var q=0;q<b.jqx.ripplers.length;q++){var d=b.jqx.ripplers[q];d.ink.removeClass("active");d.element.removeClass("active");if(o!=="checkbox"&&o!=="radiobutton"){if(d.ink.hasClass("animate")){d.ink.removeClass("animate")}}}})}e.off("mousedown.ripple");e.on("mousedown.ripple",function(i){var d=b(f);b.jqx.ripple.mouseCaptured=true;setTimeout(function(){if(d.find(".ink").length==0){d.append("<span class='ink'></span>")}var r=d.find(".ink");r.removeClass("animate");if(!r.height()&&!r.width()){var s=Math.max(d.outerWidth(),d.outerHeight());r.css({height:s,width:s})}if(o==="checkbox"||o==="radiobutton"){if(o==="checkbox"){if(e.jqxCheckBox("disabled")){return}}if(o==="radiobutton"){if(e.jqxRadioButton("disabled")){return}}var q=d.width()/2-r.width()/2;var t=d.height()/2-r.height()/2;r.css({top:t+"px",left:q+"px"}).addClass("animate");r.on("animationend",function(){if(b.jqx.ripple.mouseCaptured){r.removeClass("animate");r.addClass("active");f.addClass("active")}});return}var q=i.pageX-d.offset().left-r.width()/2;var t=i.pageY-d.offset().top-r.height()/2;r.css({top:t+"px",left:q+"px"}).addClass("animate")})})}})(jqxBaseFramework);



/***/ }),

/***/ "./src/assets/jqwidgets/jqxdata.js":
/*!*****************************************!*\
  !*** ./src/assets/jqwidgets/jqxdata.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.2.0 (2019-Sep)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(i){i.jqx.observableArray=function(e,J){if(typeof(e)=="string"){e=i.parseJSON(e)}if(!Object.defineProperty||!(function(){try{Object.defineProperty({},"x",{});return true}catch(M){return false}}())){var L=Object.defineProperty;Object.defineProperty=function(O,P,N){if(L){try{return L(O,P,N)}catch(M){}}if(O!==Object(O)){throw TypeError("Object.defineProperty called on non-object")}if(Object.prototype.__defineGetter__&&("get" in N)){Object.prototype.__defineGetter__.call(O,P,N.get)}if(Object.prototype.__defineSetter__&&("set" in N)){Object.prototype.__defineSetter__.call(O,P,N.set)}if("value" in N){O[P]=N.value}else{if(!O[P]){O[P]=N}}return O}}if(!Array.prototype.forEach){Array.prototype.forEach=function(N){if(this===void 0||this===null){throw TypeError()}var Q=Object(this);var M=Q.length>>>0;if(typeof N!=="function"){throw TypeError()}var P=arguments[1],O;for(O=0;O<M;O++){if(O in Q){N.call(P,Q[O],O,Q)}}}}if(typeof Object.getOwnPropertyNames!=="function"){Object.getOwnPropertyNames=function(O){if(O!==Object(O)){throw TypeError("Object.getOwnPropertyNames called on non-object")}var M=[],N;for(N in O){if(Object.prototype.hasOwnProperty.call(O,N)){M.push(N)}}return M}}var I=this,H,K=[];I.notifier=null;I.name="observableArray";I.observing=true;I.changes=new Array();var J=J;I.observe=function(){I.observing=true;if(arguments.length==1){J=arguments[0]}};I.unobserve=function(){I.observing=false};I.toArray=function(){return K.slice(0)};I.toJSON=function(X,O){var U=K;if(O){U=O}var T=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,W={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function M(Z){return'"'+Z.replace(T,function(aa){var ab=W[aa];return typeof ab==="string"?ab:"\\u"+("0000"+aa.charCodeAt(0).toString(16)).slice(-4)})+'"'}function N(Z){return Z<10?"0"+Z:Z}function P(aa){var Z;if(isFinite(aa.valueOf())){Z=aa.getUTCFullYear()+"-"+N(aa.getUTCMonth()+1)+"-"+N(aa.getUTCDate())+"T"+N(aa.getUTCHours())+":"+N(aa.getUTCMinutes())+":"+N(aa.getUTCSeconds())+'Z"'}else{Z="null"}return Z}function Q(ac){var Z=ac.length,aa=[],ab;for(ab=0;ab<Z;ab++){aa.push(R(ab,ac)||"null")}return"["+aa.join(",")+"]"}function Y(ac){var aa=[],ab,Z;for(ab in ac){if(Object.prototype.hasOwnProperty.call(ac,ab)){if(ab!=""&&X&&X.indexOf(ab)===-1){continue}Z=R(ab,ac);if(Z){aa.push(M(ab)+":"+Z)}}}return"{"+aa.join(",")+"}"}function S(Z){switch(Object.prototype.toString.call(Z)){case"[object Date]":return P(Z);case"[object Array]":return Q(Z)}return Y(Z)}function V(aa,Z){switch(Z){case"string":return M(aa);case"number":case"float":case"integer":case"int":return isFinite(aa)?aa:"null";case"boolean":return aa}return"null"}function R(aa,Z){var ac=Z[aa],ab=typeof ac;if(ac&&typeof ac==="object"&&typeof ac.toJSON==="function"){ac=ac.toJSON(aa);ab=typeof ac}if(/(number|float|int|integer|string|boolean)/.test(ab)||(!ac&&ab==="object")){return V(ac,ab)}else{return S(ac)}}if(!X&&window.JSON&&typeof window.JSON.stringify==="function"){return window.JSON.stringify(U)}return R("",{"":U})};I.defineIndexProperty=function(O){if(!(O in I)){var M=function(V,S,U,R){var T=V[S];var Q=T;var P=function(){return Q};var W=function(ab){T=ab;if(Q!==T){var aa=Q;Q=T;if(typeof H==="function"){var Y=K.indexOf(R);var Z="";var X=function(ad,ac){Object.getOwnPropertyNames(ad).forEach(function(ae){var af=i.type(ad[ae]);if(af=="array"||af=="object"){X(ad[ae],ac+"."+ae)}else{if(S===ae){Z=ac+"."+ae}}})};X(R,Y);H({object:I,type:"update",path:Z,index:Y,name:S,newValue:T,oldValue:aa})}}Q=T;return T};if(V[S]!=undefined&&S!="length"){if(Object.defineProperty){Object.defineProperty(V,S,{get:P,set:W})}else{if(Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__){Object.prototype.__defineGetter__.call(V,S,P);Object.prototype.__defineSetter__.call(V,S,W)}}}};var N=function(S,R,P){var Q=i.type(S);if(/(number|float|int|integer|string|boolean)/.test(Q)){return}if(S===undefined){return}Object.getOwnPropertyNames(S).forEach(function(T){var U=i.type(S[T]);if(U=="array"||U=="object"){M(S,T,R+"."+T,P);N(S[T],R+"."+T,P)}else{M(S,T,R+"."+T,P)}})};Object.defineProperty(I,O,{configurable:true,enumerable:true,get:function(){return K[O]},set:function(Q){var P=K[O];if(I.toJSON(null,P)!=I.toJSON(null,Q)){K[O]=Q;if(typeof H==="function"){H({object:I,type:"update",path:O.toString(),index:O,name:"index",newValue:Q,oldValue:P})}N(Q,O,Q)}}});N(I[O],O,I[O])}};I.push=function(){var M;for(var N=0,O=arguments.length;N<O;N++){M=K.length;K.push(arguments[N]);I.defineIndexProperty(M);if(typeof H==="function"){H({object:I,type:"add",name:"length",index:M,newValue:K.length,oldValue:M})}}return K.length};I.pop=function(){if(~K.length){var M=K.length-1,N=K.pop();delete I[M];if(typeof H==="function"){H({object:I,type:"delete",name:"length",index:M,newValue:K.length,oldValue:M})}return N}};I.unshift=function(){var M=K.length;for(var N=0,O=arguments.length;N<O;N++){K.splice(N,0,arguments[N]);I.defineIndexProperty(K.length-1)}if(typeof H==="function"){H({object:I,type:"add",index:0,name:"length",newValue:K.length,oldValue:M})}return K.length};I.shift=function(){var M=K.length;if(~K.length){var N=K.shift();K.length===0&&delete I[M];if(typeof H==="function"){H({object:I,type:"delete",index:M,name:"length",newValue:K.length,oldValue:M})}return N}};I.slice=function(Q,N,P){var M=K.slice(Q,N);var O=new i.jqx.observableArray(M,P);return O};I.splice=function(Q,R,M){var P=[],U,T;Q=!~Q?K.length-Q:Q;R=(R==null?K.length-Q:R)||0;while(R--){U=K.splice(Q,1)[0];P.push(U);delete I[K.length];if(typeof H==="function"){H({object:I,type:"delete",index:Q,name:"length",newValue:-1,oldValue:Q})}}for(var N=2,S=arguments.length;N<S;N++){K.splice(Q,0,arguments[N]);this.defineIndexProperty(K.length-1);if(typeof H==="function"){H({object:I,type:"add",index:Q,name:"length",newValue:K.length-1,oldValue:Q})}Q++}var O=new i.jqx.observableArray(P,M);return O};Object.defineProperty(I,"length",{configurable:false,enumerable:true,get:function(){return K.length},set:function(M){var N=Number(M);if(N%1===0&&N>=0){if(N<K.length){I.splice(N)}else{if(N>K.length){I.push.apply(I,new Array(N-K.length))}}}else{throw new RangeError("Invalid array length")}return M}});i.jqx.observableArray.prototype.fromArray=function(O,N){var M=new i.jqx.observableArray(O,N);return M};i.jqx.observableArray.prototype.clone=function(){var M=new i.jqx.observableArray(K,J);M.observing=I.observing;M.changes=I.changes;M.notifier=I.notifier;return M};I.remove=function(N){if(N<0||N>=I.length){throw new Error("Invalid index : "+N)}if(I.hasOwnProperty(N)){var M=I[N];I[N]=undefined;K[N]=undefined;if(typeof H==="function"){H({object:I,type:"delete",index:N,name:"index",newValue:undefined,oldValue:M})}return true}return false};I.concat=function(N,P){var M=K.concat(N);var O=new i.jqx.observableArray(M,P);return O};Object.getOwnPropertyNames(Array.prototype).forEach(function(M){if(!(M in I)){var N=function(){var Q=I.observing;I.observing=false;var P=K[M];var O=P.apply(K,arguments);I.observing=Q;return O};Object.defineProperty(I,M,{configurable:false,enumerable:true,writeable:false,value:N})}});I.set=function(N,P){if(i.type(N)=="string"&&N.split(".").length>1){var M=N.split(".");var Q=I;for(var O=0;O<M.length;O++){if(O===0){if(M[O]>=I.length){throw new Error("Invalid Index: "+N)}}if(O<M.length-1){Q=Q[M[O]]}else{Q[M[O]]=P}}return true}if(N>=I.length){I.push(P)}else{I[N]=P}return true};I.get=function(M){return I[M]};if(e instanceof Array){I.push.apply(I,e)}H=function(){if(!I.observing){return}if(arguments&&arguments[0]){I.changes.push(arguments[0])}if(J){J.apply(I,arguments)}if(I.notifier){I.notifier.apply(I,arguments)}};return I};i.jqx.formatDate=function(H,J,I){var e=i.jqx.dataFormat.formatdate(H,J,I);return e};i.jqx.formatNumber=function(H,J,I){var e=i.jqx.dataFormat.formatnumber(H,J,I);return e};i.jqx.dataAdapter=function(J,e){if(J!=undefined){if(J.dataFields!==undefined){J.datafields=J.dataFields}if(J.dataType!==undefined){J.datatype=J.dataType}if(J.localData!==undefined){J.localdata=J.localData}if(J.sortColumn!==undefined){J.sortcolumn=J.sortColumn}if(J.sortDirection!==undefined){J.sortdirection=J.sortDirection}if(J.sortColumns!==undefined){J.sortcolumns=J.sortColumns}if(J.sortDirections!==undefined){J.sortdirections=J.sortDirections}if(J.sortOrder!==undefined){J.sortdirection=J.sortOrder}if(J.formatData!==undefined){J.formatdata=J.formatData}if(J.processData!==undefined){J.processdata=J.processData}if(J.pageSize!==undefined){J.pagesize=J.pageSize}if(J.pageNum!==undefined){J.pagenum=J.pageNum}if(J.updateRow!==undefined){J.updaterow=J.updateRow}if(J.addRow!==undefined){J.addrow=J.addRow}if(J.deleteRow!==undefined){J.deleterow=J.deleteRow}if(J.contentType!==undefined){J.contenttype=J.contentType}if(J.totalRecords!=undefined){J.totalrecords=J.totalRecords}if(J.loadError!=undefined){J.loadError=J.loadError}if(J.sortComparer!=undefined){J.sortcomparer=J.sortComparer}}this._source=J;this._options=e||{};if(J.beforeLoadComplete!=undefined){this._options.beforeLoadComplete=this._source.beforeLoadComplete}if(J.downloadComplete!=undefined){this._options.downloadComplete=this._source.downloadComplete}if(J.loadComplete!=undefined){this._options.loadComplete=this._source.loadComplete}if(J.autoBind!=undefined){this._options.downloadComplete=this._source.autoBind}if(J.formatData!=undefined){this._options.formatData=this._source.formatData}if(J.loadError!=undefined){this._options.loadError=this._source.loadError}if(J.beforeSend!=undefined){this._options.beforeSend=this._source.beforeSend}if(J.contentType!=undefined){this._options.contentType=this._source.contentType}if(J.async!=undefined){this._options.async=this._source.async}if(J.loadServerData!=undefined){this._options.loadServerData=this._source.loadServerData}if(J.uniqueDataFields!=undefined){this._options.uniqueDataFields=this._source.uniqueDataFields}this.records=new Array();this._downloadComplete=new Array();this._bindingUpdate=new Array();if(J!=undefined&&J.localdata!=null&&typeof J.localdata=="function"){var I=J.localdata();if(I!=null){J._localdata=J.localdata;var H=this;if(J._localdata.subscribe){H._oldlocaldata=[];J._localdata.subscribe(function(K){var L=function(M){if(i.isArray(M)){return i.makeArray(L(i(M)))}return i.extend(true,{},M)};if(H.suspendKO==false||H.suspendKO==undefined||H._oldlocaldata.length==0){H._oldlocaldata=L(K)}},J._localdata,"beforeChange");J._localdata.subscribe(function(L){if(H.suspendKO==false||H.suspendKO==undefined){var K="";H._oldrecords=H.records;if(H._oldlocaldata.length==0){J.localdata=J._localdata()}if(H._oldlocaldata.length==0){K="change"}else{if(L){if(H._oldlocaldata.length==L.length){K="update"}if(H._oldlocaldata.length>L.length){K="remove"}if(H._oldlocaldata.length<L.length){K="add"}}}H.dataBind(null,K)}},J._localdata,"change");H._knockoutdatasource=true}J.localdata=I}}if(this._options.autoBind==true){this.dataBind()}};i.jqx.dataAdapter.prototype={getrecords:function(){return this.records},beginUpdate:function(){this.isUpdating=true},endUpdate:function(e){this.isUpdating=false;if(e!=false){if(this._changedrecords&&this._changedrecords.length>0){this.callBindingUpdate("update");this._changedrecords=[]}else{this.dataBind(null,"")}}},formatDate:function(H,J,I){var e=i.jqx.dataFormat.formatdate(H,J,I);return e},formatNumber:function(H,J,I){var e=i.jqx.dataFormat.formatnumber(H,J,I);return e},dataBind:function(R,aa){if(this.isUpdating==true){return}var W=this._source;if(!W){return}if(W.generatedfields){W.datafields=null;W.generatedfields=null}i.jqx.dataFormat.datescache=new Array();if(W.dataFields!=null){W.datafields=W.dataFields}if(W.recordstartindex==undefined){W.recordstartindex=0}if(W.recordendindex==undefined){W.recordendindex=0}if(W.loadallrecords==undefined){W.loadallrecords=true}if(W.root==undefined){W.root=""}if(W.record==undefined){W.record=""}if(W.sort!=undefined){this.sort=W.sort}if(W.filter!=undefined){this.filter=W.filter}else{this.filter=null}if(W.sortcolumn!=undefined){this.sortcolumn=W.sortcolumn}if(W.sortdirection!=undefined){this.sortdirection=W.sortdirection}if(W.sortcolumns!=undefined){this.sortcolumns=W.sortcolumns}if(W.sortdirections!=undefined){this.sortdirections=W.sortdirections}if(W.sortcomparer!=undefined){this.sortcomparer=W.sortcomparer}this.records=new Array();var K=this._options||{};this.virtualmode=K.virtualmode!=undefined?K.virtualmode:false;this.totalrecords=K.totalrecords!=undefined?K.totalrecords:0;this.pageable=K.pageable!=undefined?K.pageable:false;this.pagesize=K.pagesize!=undefined?K.pagesize:0;this.pagenum=K.pagenum!=undefined?K.pagenum:0;this.cachedrecords=K.cachedrecords!=undefined?K.cachedrecords:new Array();this.originaldata=new Array();this.recordids=new Array();this.updaterow=K.updaterow!=undefined?K.updaterow:null;this.addrow=K.addrow!=undefined?K.addrow:null;this.deleterow=K.deleterow!=undefined?K.deleterow:null;this.cache=K.cache!=undefined?K.cache:false;this.unboundmode=false;if(W.formatdata!=undefined){K.formatData=W.formatdata}if(W.data!=undefined){if(K.data==undefined){K.data={}}i.extend(K.data,W.data)}if(W.mapChar!=undefined){W.mapchar=W.mapChar}if(W.mapchar!=undefined){this.mapChar=W.mapchar?W.mapchar:">"}else{this.mapChar=K.mapChar?K.mapChar:">"}if(K.unboundmode||W.unboundmode){this.unboundmode=K.unboundmode||W.unboundmode}if(W.cache!=undefined){this.cache=W.cache}if(this.koSubscriptions){for(var ac=0;ac<this.koSubscriptions.length;ac++){this.koSubscriptions[ac].dispose()}}this.koSubscriptions=new Array();if(this.pagenum<0){this.pagenum=0}var ah=this;var Q=W.datatype;if(W.datatype==="csv"||W.datatype==="tab"||W.datatype==="tsv"||W.datatype=="text"){Q="text"}var N=K.async!=undefined?K.async:true;if(W.async!=undefined){N=W.async}switch(Q){case"local":case"array":case"observablearray":case"observableArray":default:if(W.localdata==undefined&&W.length){W.localdata=new Array();for(var Z=0;Z<W.length;Z++){W.localdata[W.localdata.length]=W[Z];W[Z].uid=Z}}if(W.beforeprocessing&&i.isFunction(W.beforeprocessing)){W.beforeprocessing(W.localdata)}var M=W.localdata.length;this.totalrecords=this.virtualmode?(W.totalrecords||M):M;if(this.unboundmode){this.totalrecords=this.unboundmode?(W.totalrecords||M):M;var ad=W.datafields?W.datafields.length:0;if(ad>0){for(var Z=0;Z<this.totalrecords;Z++){var I={};for(var Y=0;Y<ad;Y++){I[W.datafields[Y].name]=""}I.uid=Z;W.localdata[W.localdata.length]=I}}}if(this.totalrecords==undefined){this.totalrecords=0}var ad=W.datafields?W.datafields.length:0;var H=function(ao,aq){var ap={};for(var am=0;am<aq;am++){var al=W.datafields?W.datafields[am]:{};var ar="";if(undefined==al||al==null){continue}if(al.map){if(i.isFunction(al.map)){ar=al.map(ao)}else{var aj=al.map.split(ah.mapChar);if(aj.length>0){var an=ao;for(var ak=0;ak<aj.length;ak++){if(!an){continue}an=an[aj[ak]]}ar=an}else{ar=ao[al.map]}}if(ar!=undefined&&ar!=null){ar=ar.toString()}else{if(ar==undefined&&ar!=null){ar=""}}}var at=false;if(ar==""){at=true;ar=ao[al.name];if(ar!=undefined&&ar!=null){if(W._localdata&&ar.subscribe){ar=ar()}else{if(al.type!="array"){if(al.type==="date"){if(ar&&ar instanceof Date){ar=ar}}else{ar=ar.toString()}}}}}if(ar=="[object Object]"&&al.map&&at){ar=""}ar=ah.getvaluebytype(ar,al);if(al.displayname!=undefined){ap[al.displayname]=ar}else{ap[al.name]=ar}}return ap};if(W._localdata){this._changedrecords=[];this.records=new Array();var ag=W._localdata();i.each(ag,function(am,ap){if(typeof ap==="string"){ah.records.push(ap)}else{var ak={};var ao=0;var an=this;i.each(this,function(ay,aD){var at=null;var aE="string";var aC=ay;if(ad>0){var aG=false;var aB=false;for(var ax=0;ax<ad;ax++){var aw=W.datafields[ax];if(aw!=undefined&&(aw.name==ay)){aG=true;at=aw.map;aE=aw.type;aC=aw.name;break}else{if(aw!=undefined&&aw.map&&(aw.map.indexOf(ay)>=0)){aG=true;at=aw.map;aE=aw.type;aC=aw.name;aB=true;var aF=an[ay];if(at!=null){var ar=at.split(ah.mapChar);if(ar.length>0){var az=an;for(var au=0;au<ar.length;au++){az=az[ar[au]]}aF=az}else{aF=an[at]}}if(aE!="string"){aF=ah.getvaluebytype(aF,{type:aE})}ak[aC]=aF;if(ak[aC]!=undefined){ao+=ak[aC].toString().length+ak[aC].toString().substr(0,1)}}}}if(!aG){return true}if(aB){return true}}var av=i.isFunction(an[ay]);if(av){var aF=an[ay]();if(aE!="string"){aF=ah.getvaluebytype(aF,{type:aE})}ak[ay]=aF;if(an[ay].subscribe){var aA=am;ah.koSubscriptions[ah.koSubscriptions.length]=an[ay].subscribe(function(aI){var aH=aA;ak[ay]=aI;var aJ={index:aH,oldrecord:ak,record:ak};ah._changedrecords.push(aJ);if(ah.isUpdating){return}ah.callBindingUpdate("update");ah._changedrecords=[];return false})}}else{var aF=an[ay];if(at!=null){var ar=at.split(ah.mapChar);if(ar.length>0){var az=an;for(var au=0;au<ar.length;au++){az=az[ar[au]]}aF=az}else{aF=an[at]}}if(aE!="string"){aF=ah.getvaluebytype(aF,{type:aE})}ak[aC]=aF;if(ak[aC]!=undefined){ao+=ak[aC].toString().length+ak[aC].toString().substr(0,1)}}});var al=ah.getid(W.id,an,am);ak.uid=al;ah.records.push(ak);ak._koindex=ao;if(ah._oldrecords){var aj=ah.records.length-1;if(aa=="update"){if(ah._oldrecords[aj]._koindex!=ao){var aq={index:aj,oldrecord:ah._oldrecords[aj],record:ak};ah._changedrecords.push(aq)}}}}});if(aa=="add"){var M=ah.records.length;for(var Z=0;Z<M;Z++){var I=ah.records[Z];var L=false;for(var U=0;U<ah._oldrecords.length;U++){if(ah._oldrecords[U]._koindex===I._koindex){L=true;break}}if(!L){ah._changedrecords.push({index:Z,oldrecord:null,record:I,position:(Z!=0?"last":"first")})}}}else{if(aa=="remove"){var M=ah._oldrecords.length;for(var Z=0;Z<M;Z++){var P=ah._oldrecords[Z];if(!ah.records[Z]){ah._changedrecords.push({index:Z,oldrecord:P,record:null})}else{if(ah.records[Z]._koindex!=P._koindex){ah._changedrecords.push({index:Z,oldrecord:P,record:null})}}}}}}else{if(!i.isArray(W.localdata)){this.records=new Array();var V=0;var T=new Array();i.each(W.localdata,function(al){var ak=ah.getid(W.id,this,al);if(ad==0){if(!(typeof this==="string"||this instanceof String)){for(var an in this){V++;var ao=i.type(this[an]);T.push({name:an,type:ao})}ad=V;W.datafields=T;W.generatedfields=T}}if(ad>0){var aj=this;var am=H(aj,ad);am.uid=ak;ah.records[ah.records.length]=am}else{this.uid=ak;ah.records[ah.records.length]=this}})}else{if(ad==0){var V=0;var T=new Array();i.each(W.localdata,function(al,an){var aj=new Object(this);if(typeof an==="string"){ah.records=W.localdata;return false}else{var ak=ah.getid(W.id,aj,al);if(typeof(ak)==="object"){ak=al}aj.uid=ak;if(al==0){for(var ao in this){V++;var ap=i.type(this[ao]);T.push({name:ao,type:ap})}ad=V;W.datafields=T;W.generatedfields=T}if(ad>0){var am=H(aj,ad);am.uid=ak;ah.records[ah.records.length]=am}else{ah.records[ah.records.length]=aj}}})}else{i.each(W.localdata,function(al){var aj=this;var am=H(aj,ad);var ak=ah.getid(W.id,am,al);if(typeof(ak)==="object"){ak=al}var aj=new Object(am);aj.uid=ak;ah.records[ah.records.length]=aj})}}}this.originaldata=W.localdata;this.cachedrecords=this.records;this.addForeignValues(W);if(K.uniqueDataFields){var S=this.getUniqueRecords(this.records,K.uniqueDataFields);this.records=S;this.cachedrecords=S}if(K.beforeLoadComplete){var ae=K.beforeLoadComplete(ah.records,this.originaldata);if(ae!=undefined){ah.records=ae;ah.cachedrecords=ae}}if(K.autoSort&&K.autoSortField){var O=Object.prototype.toString;Object.prototype.toString=(typeof field=="function")?field:function(){return this[K.autoSortField]};ah.records.sort(function(ak,aj){if(ak===undefined){ak=null}if(aj===undefined){aj=null}if(ak===null&&aj===null){return 0}if(ak===null&&aj!==null){return 1}if(ak!==null&&aj===null){return -1}ak=ak.toString();aj=aj.toString();if(ak===null&&aj===null){return 0}if(ak===null&&aj!==null){return 1}if(ak!==null&&aj===null){return -1}if(i.jqx.dataFormat.isNumber(ak)&&i.jqx.dataFormat.isNumber(aj)){if(ak<aj){return -1}if(ak>aj){return 1}return 0}else{if(i.jqx.dataFormat.isDate(ak)&&i.jqx.dataFormat.isDate(aj)){if(ak<aj){return -1}if(ak>aj){return 1}return 0}else{if(!i.jqx.dataFormat.isNumber(ak)&&!i.jqx.dataFormat.isNumber(aj)){ak=String(ak).toLowerCase();aj=String(aj).toLowerCase()}}}try{if(ak<aj){return -1}if(ak>aj){return 1}}catch(al){var am=al}return 0});Object.prototype.toString=O}ah.loadedData=W.localdata;ah.buildHierarchy();if(i.isFunction(K.loadComplete)){K.loadComplete(W.localdata,ah.records)}break;case"json":case"jsonp":case"xml":case"xhtml":case"script":case"text":case"ics":if(W.localdata!=null&&!W.url){if(i.isFunction(W.beforeprocessing)){W.beforeprocessing(W.localdata)}if(W.datatype==="xml"){ah.loadxml(W.localdata,W.localdata,W)}else{if(Q==="text"){ah.loadtext(W.localdata,W)}else{if(Q==="ics"){ah.loadics(W.localdata,W)}else{ah.loadjson(W.localdata,W.localdata,W)}}}ah.addForeignValues(W);if(K.uniqueDataFields){var S=ah.getUniqueRecords(ah.records,K.uniqueDataFields);ah.records=S;ah.cachedrecords=S}if(K.beforeLoadComplete){var ae=K.beforeLoadComplete(ah.records,this.originaldata);if(ae!=undefined){ah.records=ae;ah.cachedrecords=ae}}ah.loadedData=W.localdata;ah.buildHierarchy.call(ah);if(i.isFunction(K.loadComplete)){K.loadComplete(W.localdata,ah.records)}ah.callBindingUpdate(aa);return}var af=K.data!=undefined?K.data:{};if(W.processdata){W.processdata(af)}if(i.isFunction(K.processData)){K.processData(af)}if(i.isFunction(K.formatData)){var e=K.formatData(af);if(e!=undefined){af=e}}var ab="application/x-www-form-urlencoded";if(K.contentType){ab=K.contentType}var J="GET";if(W.type){J=W.type}if(K.type){J=K.type}var X=Q;if(Q=="ics"){X="text"}if(W.url&&W.url.length>0){if(i.isFunction(K.loadServerData)){ah._requestData(af,W,K)}else{this.xhr=i.jqx.data.ajax({dataType:X,cache:this.cache,type:J,url:W.url,async:N,timeout:W.timeout,contentType:ab,data:af,success:function(am,aj,ap){if(i.isFunction(W.beforeprocessing)){var ao=W.beforeprocessing(am,aj,ap);if(ao!=undefined){am=ao}}if(i.isFunction(K.downloadComplete)){var ao=K.downloadComplete(am,aj,ap);if(ao!=undefined){am=ao}}if(am==null){ah.records=new Array();ah.cachedrecords=new Array();ah.originaldata=new Array();ah.callDownloadComplete();if(i.isFunction(K.loadComplete)){K.loadComplete(new Array())}return}var ak=am;if(am.records){ak=am.records}if(am.totalrecords!=undefined){W.totalrecords=am.totalrecords}else{if(am.totalRecords!=undefined){W.totalrecords=am.totalRecords}}if(W.datatype==="xml"){ah.loadxml(null,ak,W)}else{if(Q==="text"){ah.loadtext(ak,W)}else{if(Q==="ics"){ah.loadics(ak,W)}else{ah.loadjson(null,ak,W)}}}ah.addForeignValues(W);if(K.uniqueDataFields){var al=ah.getUniqueRecords(ah.records,K.uniqueDataFields);ah.records=al;ah.cachedrecords=al}if(K.beforeLoadComplete){var an=K.beforeLoadComplete(ah.records,am);if(an!=undefined){ah.records=an;ah.cachedrecords=an}}ah.loadedData=am;ah.buildHierarchy.call(ah);ah.callDownloadComplete();if(i.isFunction(K.loadComplete)){K.loadComplete(am,aj,ap,ah.records)}},error:function(al,aj,ak){if(i.isFunction(W.loaderror)){W.loaderror(al,aj,ak)}if(i.isFunction(K.loadError)){K.loadError(al,aj,ak)}al=null;ah.callDownloadComplete()},beforeSend:function(ak,aj){if(i.isFunction(K.beforeSend)){K.beforeSend(ak,aj)}if(i.isFunction(W.beforesend)){W.beforesend(ak,aj)}}})}}else{ah.buildHierarchy(new Array());ah.callDownloadComplete();if(i.isFunction(K.loadComplete)){if(!ai){var ai={}}K.loadComplete(ai)}}break}this.callBindingUpdate(aa)},buildHierarchy:function(K){var e=this._source;var P=new Array();if(!e.datafields){return}if(e.hierarchy&&!e.hierarchy.reservedNames){e.hierarchy.reservedNames={leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"}}else{if(e.hierarchy){var O=e.hierarchy.reservedNames;if(!O.leaf){O.leaf="leaf"}if(!O.parent){O.parent="parent"}if(!O.expanded){O.expanded="expanded"}if(!O.checked){O.checked="checked"}if(!O.selected){O.selected="selected"}if(!O.level){O.level="level"}if(!O.data){O.data="data"}}}if(!e.hierarchy){return}var N=this;var O=e.hierarchy.reservedNames;if(e.hierarchy.root){if(e.dataType=="xml"){var P=this.getRecordsHierarchy("uid","parentuid","records",null,K);this.hierarchy=P;return P}else{this.hierarchy=this.records;var R=e.hierarchy.root;for(var L=0;L<this.records.length;L++){var M=this.records[L];if(!M){continue}var H=function(S){if(e.hierarchy.record){S.records=S[R][e.hierarchy.record]}else{var U=R.split(N.mapChar);var T=null;if(U.length>1){var W=S;for(var V=0;V<U.length;V++){if(W!=undefined){W=W[U[V]]}}T=W}else{T=S[R]}S.records=T}if(S.records==null||(S.records&&S.records.length==0)){S[O.leaf]=true}};H(M);M[O.level]=0;var I=this.getid(e.id,M,L);M.uid=I;M[O.parent]=null;M[O.data]=M;if(M[O.expanded]===undefined){M[O.expanded]=false}var Q=function(W,U){if(!U){W.records=new Array();return}for(var V=0;V<U.length;V++){var S=U[V];if(!S){continue}H(S);S[O.level]=W[O.level]+1;S[O.parent]=W;S[O.data]=S;var T=N.getid(e.id,S,V);if(T==V&&e.id==null){S.uid=W.uid+"_"+T}else{S.uid=T}if(S[O.expanded]===undefined){S[O.expanded]=false}Q(S,S.records)}};Q(M,M.records)}}return this.hierarchy}if(e.hierarchy.keyDataField&&e.hierarchy.parentDataField){var P=this.getRecordsHierarchy(e.hierarchy.keyDataField.name,e.hierarchy.parentDataField.name,"records",null,K);this.hierarchy=P;return P}if(e.hierarchy.groupingDataFields){var J=new Array();for(var L=0;L<e.hierarchy.groupingDataFields.length;L++){J.push(e.hierarchy.groupingDataFields[L].name)}var P=this.getGroupedRecords(J,"records","label",null,"data",null,"parent",K);this.hierarchy=P;return P}},addRecord:function(H,e,M,I){var J=this;var N=function(){return{leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"}};if(H!=undefined){if(M!=undefined){if(this.hierarchy.length>0){var K=function(O){if(O){for(var P=0;P<O.length;P++){var Q=O[P];if(Q.uid==M){var R=(J._source&&J._source.hierarchy)?J._source.hierarchy.reservedNames:null;if(R==null){R=N()}H[R.parent]=Q;H[R.level]=Q[R.level]+1;if(!Q.records){Q.records=new Array();Q[R.leaf]=false}else{Q[R.leaf]=false}if(e=="last"){Q.records.push(H)}else{if(typeof e==="number"&&isFinite(e)){Q.records.splice(e,0,H)}else{Q.records.splice(0,0,H)}}return true}if(Q.records){K(Q.records)}}}};K(this.hierarchy)}}else{if(this.hierarchy&&this.hierarchy.length>=0&&(this._source.hierarchy||I)){var L=(J._source&&J._source.hierarchy)?J._source.hierarchy.reservedNames:null;if(L==null){L=N()}H[L.level]=0;if(e=="last"){this.hierarchy.push(H)}else{if(typeof e==="number"&&isFinite(e)){this.hierarchy.splice(e,0,H)}else{this.hierarchy.splice(0,0,H)}}}else{if(e=="last"){this.records.push(H)}else{if(typeof e==="number"&&isFinite(e)){this.records.splice(e,0,H)}else{this.records.splice(0,0,H)}}}return true}}return false},deleteRecord:function(H){var J=this;if(this.hierarchy.length>0){var K=function(L){if(L){for(var O=0;O<L.length;O++){var P=L[O];if(P.uid==H){L.splice(O,1);if(J.recordids[H]){delete J.recordids[H]}var N=function(T){for(var Q=0;Q<T.length;Q++){var S=T[Q].uid;for(var R=0;R<J.records.length;R++){var U=J.records[R];if(U.uid==S){J.records.splice(R,1);break}}if(T[Q].records){N(T[Q].records)}}};if(P.records){N(P.records)}for(var M=0;M<J.records.length;M++){var P=J.records[M];if(P.uid==H){J.records.splice(M,1);break}}return true}if(P.records){K(P.records)}}}};K(this.hierarchy)}else{for(var e=0;e<this.records.length;e++){var I=this.records[e];if(I.uid==H){this.records.splice(e,1);return true}}}return false},addForeignValues:function(H){var Q=this;var V=H.datafields?H.datafields.length:0;for(var N=0;N<V;N++){var L=H.datafields[N];if(L!=undefined){if(L.values!=undefined){if(L.value==undefined){L.value=L.name}if(L.values.value==undefined){L.values.value=L.value}var T=new Array();var K,M;if(Q.pageable&&Q.virtualmode){K=Q.pagenum*Q.pagesize;M=K+Q.pagesize;if(M>Q.totalrecords){M=Q.totalrecords}}else{if(Q.virtualmode){K=H.recordstartindex;M=H.recordendindex;if(M>Q.totalrecords){M=Q.totalrecords}}else{K=0;M=Q.records.length}}for(var O=K;O<M;O++){var P=Q.records[O];var I=L.name;var U=P[L.value];if(T[U]!=undefined){P[I]=T[U]}else{for(var J=0;J<L.values.source.length;J++){var S=L.values.source[J];var e=S[L.values.value];if(e==undefined){e=S.uid}if(e==U){var R=S[L.values.name];P[I]=R;T[U]=R;break}}}}}else{if(L.value!=undefined){for(var O=0;O<Q.records.length;O++){var P=Q.records[O];P[L.name]=P[L.value]}}}}}},abort:function(){if(this.xhr&&this.xhr.readyState!=4){this.xhr.abort();this.callDownloadComplete()}},_requestData:function(H,J,e){var I=this;var K=function(P){if(P.totalrecords){J.totalrecords=P.totalrecords;I.totalrecords=P.totalrecords}if(P.records){I.records=P.records;I.cachedrecords=P.records}I.addForeignValues(J);if(e.uniqueDataFields){var N=I.getUniqueRecords(I.records,e.uniqueDataFields);I.records=N;I.cachedrecords=N}if(e.beforeLoadComplete){var O=e.beforeLoadComplete(I.records,P);if(O!=undefined){I.records=O;I.cachedrecords=O}}for(var M=0;M<I.records.length;M++){var L=I.records[M];if(undefined==L){continue}if(undefined==L.uid){L.uid=I.getid(J.id,L,M)}}I.buildHierarchy.call(I);if(i.isFunction(e.loadComplete)){e.loadComplete(P)}I.callDownloadComplete()};e.loadServerData(H,J,K)},getUniqueRecords:function(I,L){if(I&&L){var e=I.length;var Q=L.length;var N=new Array();var O=new Array();for(var P=0;P<e;P++){var M=I[P];var J="";if(M==undefined){continue}for(var K=0;K<Q;K++){var H=L[K];J+=M[H]+"_"}if(!O[J]){N[N.length]=M}O[J]=true}}return N},getAggregatedData:function(S,P,M,H){var L=M;if(!L){L=this.records}var Q={};var K=new Array();var J=L.length;if(J==0){return}if(J==undefined){return}for(var O=0;O<J;O++){var R=L[O];for(var N=0;N<S.length;N++){var I=S[N];var U=R[I.name];if(I.aggregates){Q[I.name]=Q[I.name]||{};K[I.name]=K[I.name]||0;K[I.name]++;var e=function(W){for(var Y in W){var X=Q[I.name][Y];if(X==null){Q[I.name][Y]=0;X=0}if(i.isFunction(W[Y])){X=W[Y](X,U,I.name,R,H)}Q[I.name][Y]=X}};var T=parseFloat(U);if(isNaN(T)){T=false}else{T=true}if(T){U=parseFloat(U)}if(typeof U==="number"&&isFinite(U)){i.each(I.aggregates,function(){var W=Q[I.name][this];if(W==null){W=0;if(this=="min"){W=9999999999999}if(this=="max"){W=-9999999999999}}if(this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){W+=parseFloat(U)}else{if(this=="product"){if(O==0){W=parseFloat(U)}else{W*=parseFloat(U)}}else{if(this=="min"){W=Math.min(W,parseFloat(U))}else{if(this=="max"){W=Math.max(W,parseFloat(U))}else{if(this=="count"){W++}else{if(typeof(this)=="object"){e(this);return}}}}}}Q[I.name][this]=W})}else{i.each(I.aggregates,function(){if(this=="min"||this=="max"||this=="count"||this=="product"||this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){if(U===null){return true}var W=Q[I.name][this];if(W==null){W=0}Q[I.name][this]=W;return true}if(typeof(this)=="object"){e(this)}})}}}}for(var N=0;N<S.length;N++){var I=S[N];if(!Q[I.name]){Q[I.name]={};i.each(I.aggregates,function(W){Q[I.name][this]=0})}if(Q[I.name]["avg"]!=undefined){var U=Q[I.name]["avg"];var V=K[I.name];if(V===0||V==undefined){Q[I.name]["avg"]=0}else{Q[I.name]["avg"]=U/V}}else{if(Q[I.name]["count"]!=undefined){Q[I.name]["count"]=J}}if(Q[I.name]["stdev"]||Q[I.name]["stdevp"]||Q[I.name]["var"]||Q[I.name]["varp"]){i.each(I.aggregates,function(ac){if(this=="stdev"||this=="var"||this=="varp"||this=="stdevp"){var ad=Q[I.name][this];var ab=J;var W=(ad/J);var Y=0;for(var Z=0;Z<J;Z++){var aa=L[Z];var ae=aa[I.name];Y+=(ae-W)*(ae-W)}var X=(this=="stdevp"||this=="varp")?ab:ab-1;if(X==0){X=1}if(this=="var"||this=="varp"){Q[I.name][this]=Y/X}else{if(this=="stdevp"||this=="stdev"){Q[I.name][this]=Math.sqrt(Y/X)}}}})}if(I.formatStrings){i.each(I.aggregates,function(X){var W=I.formatStrings[X];if(W){if(this=="min"||this=="max"||this=="count"||this=="product"||this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){var Y=Q[I.name][this];Q[I.name][this]=i.jqx.dataFormat.formatnumber(Y,W,P)}else{if(typeof this=="object"){for(var Z in this){var Y=Q[I.name][Z];Q[I.name][Z]=i.jqx.dataFormat.formatnumber(Y,W,P)}}}}})}}return Q},bindDownloadComplete:function(H,e){this._downloadComplete[this._downloadComplete.length]={id:H,func:e}},unbindDownloadComplete:function(H){for(var e=0;e<this._downloadComplete.length;e++){if(this._downloadComplete[e].id==H){this._downloadComplete[e].func=null;this._downloadComplete.splice(e,1);break}}},callDownloadComplete:function(){for(var e=0;e<this._downloadComplete.length;e++){var H=this._downloadComplete[e];if(H.func!=null){H.func()}}},setSource:function(e){this._source=e},generatekey:function(){var e=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return(e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e())},getGroupedRecords:function(ak,an,W,af,al,ac,ae,ao,K){var ah=0;var aa=this;if(!K){K=0}var I=new Array();for(var N=0;N<ak.length;N++){I[N]=aa.generatekey()}if(!an){an="items"}if(!W){W="group"}if(!al){al="record"}if(!ae){ae="parentItem"}if(undefined===ac){ac="value"}var S=new Array();var L=0;var J=new Array();var R=ak.length;var am=new Array();if(!ao){var ao=this.records}var P=ao.length;var ag=function(ap){var aq=ap;if(af){i.each(af,function(){if(this.name&&this.map){aq[this.map]=aq[this.name]}})}return aq};for(var V=0;V<P;V++){var aj=ag(ao[V]);var ab=aj[aa.uniqueId];var H=new Array();var X=0;for(N=0;N<R;N++){var Q=ak[N];var ad=aj[Q];if(null==ad){continue}H[X++]={value:ad,hash:I[N]}}if(H.length!=R){break}var Y=null;var T="";var e=-1;for(var Z=0;Z<H.length;Z++){e++;var ai=H[Z].value;var M=H[Z].hash;T=T+"_"+M+"_"+ai;if(J[T]!=undefined&&J[T]!=null){Y=J[T];continue}if(Y==null){Y={level:0};Y[ae]=null;Y[W]=ai;Y[al]=aj;if(aj.expanded!==undefined){Y.expanded=aj.expanded}else{Y.expanded=false}if(ac){Y[ac]=aj[ac]}Y[an]=new Array();var O=S.length+K;if(!this._source.id||typeof aj.uid==="number"||isFinite(aj.uid)){O="Row"+O}Y.uid=O;S[L++]=Y}else{var U={level:Y.level+1};U[ae]=Y;U[W]=ai;U[an]=new Array();U[al]=aj;if(aj.expanded!==undefined){U.expanded=aj.expanded}else{U.expanded=false}if(ac){U[ac]=aj[ac]}U.uid=Y.uid+"_"+Y[an].length;Y[an][Y[an].length]=U;Y=U}J[T]=Y}if(aj){aj.leaf=true}if(Y!=null){if(this._source.id==null){if(undefined==aj.uid){aj.uid=Y.uid+"_"+Y[an].length}else{if(aj.uid.toString().indexOf(Y.uid)==-1){aj.uid=Y.uid+"_"+aj.uid}}}aj[ae]=Y;aj.level=Y.level+1;Y[an][Y[an].length]=aj}else{if(undefined==aj.uid){aj.uid=this.generatekey()}}}return S},getRecordsHierarchy:function(L,J,aa,U,H){var e=new Array();var I=this.records;if(H){I=H}if(this.records.length==0){return null}var Y=aa!=null?aa:"items";var R=[];var ab=I;var O=ab.length;var P=(this._source&&this._source.hierarchy)?this._source.hierarchy.reservedNames:null;var W=function(ac){var ad=ac;if(U){i.each(U,function(){if(this.name&&this.map){ad[this.map]=ad[this.name]}})}return ad};for(var X=0;X<O;X++){var Z=i.extend({},ab[X]);var T=Z[J];var S=Z[L];R[S]={parentid:T,item:Z}}for(var X=0;X<O;X++){var Z=i.extend({},ab[X]);var T=Z[J];var S=Z[L];if(R[T]!=undefined){var Z={parentid:T,item:R[S].item};var Q=R[T].item;if(!Q[Y]){Q[Y]=[]}var M=Q[Y].length;var K=Z.item;if(!P){if(K.parent==undefined){K.parent=Q}}else{if(K[P.parent]==undefined){K[P.parent]=Q}}var N=W(K);Q[Y][M]=N;R[T].item=Q;R[S]=Z}else{var K=R[S].item;if(!P){if(K.parent==undefined){K.parent=null}}else{if(K[P.parent]==undefined){K[P.parent]=null}}var N=W(K);if(!P){N.level=0}else{N[P.level]=0}e[e.length]=N}}if(e.length!=0){var V=function(af,ac){for(var ad=0;ad<ac.length;ad++){if(!P){ac[ad].level=af}else{ac[ad][P.level]=af}var ae=ac[ad][Y];if(ae){if(ae.length>0){V(af+1,ae)}else{if(!P){ac[ad].leaf=true}else{ac[ad][P.leaf]=true}}}else{if(!P){ac[ad].leaf=true}else{ac[ad][P.leaf]=true}}}};V(0,e)}return e},bindBindingUpdate:function(H,e){this._bindingUpdate[this._bindingUpdate.length]={id:H,func:e}},unbindBindingUpdate:function(H){for(var e=0;e<this._bindingUpdate.length;e++){if(this._bindingUpdate[e].id==H){this._bindingUpdate[e].func=null;this._bindingUpdate.splice(e,1);break}}},callBindingUpdate:function(e){for(var I=0;I<this._bindingUpdate.length;I++){var H=this._bindingUpdate[I];if(H.func!=null){H.func(e)}}},getid:function(N,H,K){if(N!=null&&N.name!=undefined){if(N.name){var e=i(H).attr(N.name);if(e!=null&&e.toString().length>0){return e}else{if(N.map){try{var e=i(H).attr(N.map);if(e!=null&&e.toString().length>0){return e}else{if(i(N.map,H).length>0){return i(N.map,H).text()}else{if(i(N.name,H).length>0){return i(N.name,H).text()}}}}catch(J){return K}}}return}}if(i(N,H).length>0){return i(N,H).text()}if(N){if(N.toString().length>0){var e=i(H).attr(N);if(e!=null&&e.toString().length>0){return i.trim(e).split(" ").join("").replace(/([ #;?%&,.+*~\':"!^$[\]()=>|\/\\@])/g,"")}else{var I=N.split(this.mapChar);if(I.length>1){var M=H;for(var L=0;L<I.length;L++){if(M!=undefined){M=M[I[L]]}}if(M!=undefined){return M}}else{if(H[N]!=undefined){return H[N]}}}}}return K},loadjson:function(af,ag,S){if(typeof(af)=="string"){af=i.parseJSON(af)}if(S.root==undefined){S.root=""}if(S.record==undefined){S.record=""}var af=af||ag;if(!af){af=[]}var ae=this;if(S.root!=""){var K=S.root.split(ae.mapChar);if(K.length>1){var ab=af;for(var R=0;R<K.length;R++){if(ab!=undefined){ab=ab[K[R]]}}af=ab}else{if(af[S.root]!==undefined){af=af[S.root]}else{if(af[0]&&af[0][S.root]!==undefined){af=af[0][S.root]}else{i.each(af,function(ai){var ah=this;if(this==S.root){af=this;return false}else{if(this[S.root]!=undefined){af=this[S.root]}}})}}if(!af){var K=S.root.split(ae.mapChar);if(K.length>0){var ab=af;for(var R=0;R<K.length;R++){if(ab!=undefined){ab=ab[K[R]]}}af=ab}}}}else{if(!af.length){for(var O in af){if(i.isArray(af[O])){af=af[O];break}}}}if(af!=null&&af.length==undefined){af=i.makeArray(af)}if(af==null||af==undefined||af=="undefined"||af.length==undefined){throw new Error("jqxDataAdapter: JSON Parse error! Invalid JSON. Please, check your JSON or your jqxDataAdapter initialization!");return}if(af.length==0){this.totalrecords=0;return}var J=af.length;this.totalrecords=this.virtualmode?(S.totalrecords||J):J;this.records=new Array();this.originaldata=new Array();var X=this.records;var U=!this.pageable?S.recordstartindex:this.pagesize*this.pagenum;this.recordids=new Array();if(S.loadallrecords){U=0;J=this.totalrecords}var Q=0;if(this.virtualmode){U=!this.pageable?S.recordstartindex:this.pagesize*this.pagenum;Q=U;U=0;J=this.totalrecords}var Z=S.datafields?S.datafields.length:0;if(Z==0){var e=af[0];var ac=new Array();for(var O in e){var H=O;ac[ac.length]={name:H}}S.datafields=ac;S.generatedfields=S.datafields;Z=ac.length}var M=U;for(var W=U;W<J;W++){var I=af[W];if(I==undefined){break}if(S.record&&S.record!=""){I=I[S.record];if(I==undefined){continue}}var ad=this.getid(S.id,I,W);if(typeof(ad)==="object"){ad=W}if(!this.recordids[ad]){this.recordids[ad]=I;var L={};for(var V=0;V<Z;V++){var N=S.datafields[V];var T="";if(undefined==N||N==null){continue}if(N.map){if(i.isFunction(N.map)){T=N.map(I)}else{var K=N.map.split(ae.mapChar);if(K.length>0){var aa=I;for(var R=0;R<K.length;R++){if(aa!=undefined){aa=aa[K[R]]}}T=aa}else{T=I[N.map]}}if(T!=undefined&&T!=null){T=this.getvaluebytype(T,N)}else{if(T==undefined&&T!=null){T=""}}}if(T==""&&!N.map){T=I[N.name];if(T==undefined&&T!=null){T=""}if(N.value!=undefined){if(T!=undefined){var Y=T[N.value];if(Y!=undefined){T=Y}}}}T=this.getvaluebytype(T,N);if(N.displayname!=undefined){L[N.displayname]=T}else{L[N.name]=T}if(N.type==="array"){var P=function(ak){if(!ak){return}for(var aq=0;aq<ak.length;aq++){var an=ak[aq];if(!an){continue}for(var ao=0;ao<Z;ao++){var aj=S.datafields[ao];var ap="";if(undefined==aj||aj==null){continue}if(aj.map){if(i.isFunction(aj.map)){ap=aj.map(an)}else{var ah=aj.map.split(ae.mapChar);if(ah.length>0){var am=an;for(var ai=0;ai<ah.length;ai++){if(am!=undefined){am=am[ah[ai]]}}ap=am}else{ap=an[aj.map]}}if(ap!=undefined&&ap!=null){ap=this.getvaluebytype(ap,aj)}else{if(ap==undefined&&ap!=null){ap=""}}}if(ap==""&&!aj.map){ap=an[aj.name];if(ap==undefined&&ap!=null){ap=""}if(aj.value!=undefined){if(ap!=undefined){var al=ap[aj.value];if(al!=undefined){ap=al}}}}ap=this.getvaluebytype(ap,aj);if(aj.displayname!=undefined){an[aj.displayname]=ap}else{an[aj.name]=ap}if(aj.type==="array"){P.call(this,ap)}}}};P.call(this,T)}}if(S.recordendindex<=0||U<S.recordendindex){X[Q+M]=new Object(L);X[Q+M].uid=ad;this.originaldata[Q+M]=new Object(X[W]);M++}}}this.records=X;this.cachedrecords=this.records},loadxml:function(K,aj,V){if(typeof(K)=="string"){K=aj=i(i.parseXML(K));K=null}if(V.root==undefined){V.root=""}if(V.record==undefined){V.record=""}var K;if(i.jqx.browser.msie&&aj){if(aj.xml!=undefined){K=i(V.root+" "+V.record,i.parseXML(aj.xml))}else{K=K||i(V.root+" "+V.record,aj)}}else{K=K||i(V.root+" "+V.record,aj)}if(!K){K=[]}var J=K.length;if(K.length==0){return}this.totalrecords=this.virtualmode?(V.totalrecords||J):J;this.records=new Array();this.originaldata=new Array();var ab=this.records;var Y=!this.pageable?V.recordstartindex:this.pagesize*this.pagenum;this.recordids=new Array();if(V.loadallrecords){Y=0;J=this.totalrecords}var T=0;if(this.virtualmode){Y=!this.pageable?V.recordstartindex:this.pagesize*this.pagenum;T=Y;Y=0;J=this.totalrecords}var ad=V.datafields?V.datafields.length:0;if(ad==0){var e=K[0];var ag=new Array();for(var S in e){var H=S;ag[ag.length]={name:H}}V.datafields=ag;V.generatedfields=V.datafields;ad=ag.length}var U=Y;var af=false;for(var aa=Y;aa<J;aa++){var I=K[aa];if(I==undefined){break}var ai=this.getid(V.id,I,aa);if(!this.recordids[ai]){this.recordids[ai]=I;var L={};var P=false;if(V.hierarchy&&V.hierarchy.root){P=true}for(var Z=0;Z<ad;Z++){var Q=V.datafields[Z];var X="";if(undefined==Q||Q==null){continue}if(Q.map){if(i.isFunction(Q.map)){X=Q.map(I)}else{var M=Q.map.indexOf("[");if(M<0){X=i(Q.map,I);if(X.length==1){X=X.text()}else{af=true;var ah=new Array();for(var ac=0;ac<X.length;ac++){ah.push(i(X[ac]).text())}X=ah;if(P&&ah.length>0){X=ah[0]}}}else{var ae=Q.map.substring(0,M-1);var O=Q.map.indexOf("]");var R=Q.map.substring(M+1,O);X=i(ae,I).attr(R);if(X==undefined){X=i(I).attr(R)}if(X==undefined){X=""}}if(X==""){X=i(I).attr(Q.map);if(X==undefined){X=""}}}}if(X==""){X=i(Q.name,I);if(X.length==1){X=X.text()}else{var ah=new Array();for(var ac=0;ac<X.length;ac++){ah.push(i(X[ac]).text())}X=ah;if(P&&ah.length>0){X=ah[0]}}if(X==""){X=i(I).attr(Q.name);if(X==undefined){X=""}}if(X==""){if(I.nodeName&&I.nodeName==Q.name&&I.firstChild){X=i(I.firstChild).text()}}}var W=X;X=this.getvaluebytype(X,Q);if(Q.displayname!=undefined){L[Q.displayname]=X}else{L[Q.name]=X}}if(V.recordendindex<=0||Y<V.recordendindex){ab[T+U]=i.extend({},L);ab[T+U].uid=ai;this.originaldata[T+U]=i.extend({},ab[aa]);U++}}}if(V.hierarchy&&V.hierarchy.root){for(var aa=Y;aa<J;aa++){var I=K[aa];var N=ab[aa];if(i(I).parent().length>0){var ai=this.getid(V.id,i(I).parents(V.hierarchy.record+":first"));N.parentuid=ai}else{N.parentuid=null}}}this.records=ab;this.cachedrecords=this.records},loadics:function(N,H){if(N==null){return}var S=H.rowDelimiter||this.rowDelimiter||"\n";var R=N.split(S);var K=R.length;var Q=N.split("\r");if(K==1&&Q.length>1){R=Q;K=R.length}this.records=new Array();this.originaldata=new Array();var L=this.records;this.recordids=new Array();var I=0;var P=function(V){var T=/^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z)?$/;var U=T.exec(V);if(!U){throw new Error("Invalid UNTIL value: "+V)}return new Date(Date.UTC(U[1],U[2]-1,U[3],U[5]||0,U[6]||0,U[7]||0))};for(var M=0;M<K;M++){var O=R[M];if(O=="BEGIN:VEVENT"){var e={};continue}if(O.indexOf("SUMMARY")>=0){e.SUMMARY=O.substring(O.indexOf("SUMMARY")+8);continue}if(O.indexOf("LOCATION")>=0){e.LOCATION=O.substring(O.indexOf("LOCATION")+9);continue}if(O.indexOf("DESCRIPTION")>=0){e.DESCRIPTION=O.substring(O.indexOf("DESCRIPTION")+12);continue}if(O.indexOf("RRULE")>=0){e.RRULE=O.substring(O.indexOf("RRULE")+6);continue}if(O.indexOf("EXDATE")>=0){var J=O.substring(O.indexOf("EXDATE")+7);e.EXDATE=J;continue}if(O.indexOf("DTEND")>=0){e.DTEND=P(O.substring(O.indexOf("DTEND")+6));continue}if(O.indexOf("DTSTART")>=0){e.DTSTART=P(O.substring(O.indexOf("DTSTART")+8));continue}if(O.indexOf("UID")>=0){e.uid=e.UID=O.substring(O.indexOf("UID")+4);continue}if(O.indexOf("STATUS")>=0){e.STATUS=O.substring(O.indexOf("STATUS")+7);continue}if(O=="END:VEVENT"){L.push(e);continue}}this.records=L;this.cachedrecords=this.records},loadtext:function(Y,P){if(Y==null){return}var e=P.rowDelimiter||this.rowDelimiter||"\n";var L=Y.split(e);var J=L.length;var X=Y.split("\r");if(J==1&&X.length>1){L=X;J=L.length}this.totalrecords=this.virtualmode?(P.totalrecords||J):J;this.records=new Array();this.originaldata=new Array();var U=this.records;var R=!this.pageable?P.recordstartindex:this.pagesize*this.pagenum;this.recordids=new Array();if(P.loadallrecords){R=0;J=this.totalrecords}var N=0;if(this.virtualmode){R=!this.pageable?P.recordstartindex:this.pagesize*this.pagenum;N=R;R=0;J=this.totalrecords}var V=P.datafields.length;var O=P.columnDelimiter||this.columnDelimiter;if(!O){O=(P.datatype==="tab"||P.datatype==="tsv")?"\t":","}for(var T=R;T<J;T++){var I=L[T];var W=null;if(!this.recordids[W]){if(P.id==null){W=T;this.recordids[W]=I}var K={};var H=L[T].split(O);for(var S=0;S<V;S++){if(S>=H.length){continue}var M=P.datafields[S];var Q=H[S];if(M.map&&i.isFunction(M.map)){Q=M.map(I)}if(M.type){Q=this.getvaluebytype(Q,M)}var Z=M.map||M.name||S.toString();K[Z]=Q;if(P.id!=null){if(P.id===M.name){W=Q;this.recordids[W]=I}}}if(W==null){W=T}U[N+T]=i.extend({},K);U[N+T].uid=W;this.originaldata[N+T]=i.extend({},U[T])}}this.records=U;this.cachedrecords=this.records},getvaluebytype:function(L,H){var J=L;if(L==null){return L}if(i.isArray(L)&&H.type!="array"){for(var I=0;I<L.length;I++){L[I]=this.getvaluebytype(L[I],H)}return L}if(H.type=="date"){if(L=="NaN"){L=""}else{if(L&&L instanceof Date){return L}var K=new Date(L);if(typeof L=="string"){if(H.format){var e=i.jqx.dataFormat.parsedate(L,H.format);if(e!=null){K=e}}}if(K.toString()=="NaN"||K.toString()=="Invalid Date"){if(i.jqx.dataFormat){L=i.jqx.dataFormat.tryparsedate(L)}else{L=K}}else{L=K}if(L==null){L=J}}}else{if(H.type=="float"||H.type=="number"||H.type=="decimal"){if(L=="NaN"){L=""}else{var L=parseFloat(L);if(isNaN(L)){L=J}}}else{if(H.type=="int"||H.type=="integer"){var L=parseInt(L);if(isNaN(L)){L=J}}else{if(H.type=="bool"||H.type=="boolean"){if(L!=null){if(L.toLowerCase!=undefined){if(L.toLowerCase()=="false"){L=false}else{if(L.toLowerCase()=="true"){L=true}}}}if(L==1){L=true}else{if(L==0&&L!==""){L=false}else{L=""}}}}}}return L}};i.jqx.dataFormat={};i.extend(i.jqx.dataFormat,{regexTrim:/^\s+|\s+$/g,regexInfinity:/^[+-]?infinity$/i,regexHex:/^0x[a-f0-9]+$/i,regexParseFloat:/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/,toString:Object.prototype.toString,isBoolean:function(e){return typeof e==="boolean"},isObject:function(e){return(e&&(typeof e==="object"||i.isFunction(e)))||false},isDate:function(e){return e instanceof Date},arrayIndexOf:function(J,I){if(J.indexOf){return J.indexOf(I)}for(var e=0,H=J.length;e<H;e++){if(J[e]===I){return e}}return -1},isString:function(e){return typeof e==="string"},isNumber:function(e){return typeof e==="number"&&isFinite(e)},isNull:function(e){return e===null},isUndefined:function(e){return typeof e==="undefined"},isValue:function(e){return(this.isObject(e)||this.isString(e)||this.isNumber(e)||this.isBoolean(e))},isEmpty:function(e){if(!this.isString(e)&&this.isValue(e)){return false}else{if(!this.isValue(e)){return true}}e=i.trim(e).replace(/\&nbsp\;/ig,"").replace(/\&#160\;/ig,"");return e===""},startsWith:function(H,e){return H.indexOf(e)===0},endsWith:function(H,e){return H.substr(H.length-e.length)===e},trim:function(e){return(e+"").replace(this.regexTrim,"")},isArray:function(e){return this.toString.call(e)==="[object Array]"},defaultcalendar:function(){var e={"/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",ISO:"yyyy-MM-dd hh:mm:ss",ISO2:"yyyy-MM-dd HH:mm:ss",d1:"dd.MM.yyyy",d2:"dd-MM-yyyy",d3:"MM-dd-yyyy",zone1:"yyyy-MM-ddTHH:mm:ss-HH:mm",zone2:"yyyy-MM-ddTHH:mm:ss+HH:mm",custom:"yyyy-MM-ddTHH:mm:ss.fff",custom2:"yyyy-MM-dd HH:mm:ss.fff"},percentsymbol:"%",currencysymbol:"$",currencysymbolposition:"before",decimalseparator:".",thousandsseparator:","};return e},expandFormat:function(K,J){J=J||"F";var I,H=K.patterns,e=J.length;if(e===1){I=H[J];if(!I){throw"Invalid date format string '"+J+"'."}J=I}else{if(e===2&&J.charAt(0)==="%"){J=J.charAt(1)}}return J},getEra:function(I,H){if(!H){return 0}if(typeof I==="string"){return 0}var L,K=I.getTime();for(var J=0,e=H.length;J<e;J++){L=H[J].start;if(L===null||K>=L){return J}}return 0},toUpper:function(e){return e.split("\u00A0").join(" ").toUpperCase()},toUpperArray:function(e){var J=[];for(var I=0,H=e.length;I<H;I++){J[I]=this.toUpper(e[I])}return J},getEraYear:function(H,J,e,K){var I=H.getFullYear();if(!K&&J.eras){I-=J.eras[e].offset}return I},toUpper:function(e){if(e){return e.toUpperCase()}return""},getDayIndex:function(K,J,H){var e,L=K.days,I=K._upperDays;if(!I){K._upperDays=I=[this.toUpperArray(L.names),this.toUpperArray(L.namesAbbr),this.toUpperArray(L.namesShort)]}J=J.toUpperCase();if(H){e=this.arrayIndexOf(I[1],J);if(e===-1){e=this.arrayIndexOf(I[2],J)}}else{e=this.arrayIndexOf(I[0],J)}return e},getMonthIndex:function(N,M,I){var e=N.months,H=N.monthsGenitive||N.months,K=N._upperMonths,L=N._upperMonthsGen;if(!K){N._upperMonths=K=[this.toUpperArray(e.names),this.toUpperArray(e.namesAbbr)];N._upperMonthsGen=L=[this.toUpperArray(H.names),this.toUpperArray(H.namesAbbr)]}M=this.toUpper(M);var J=this.arrayIndexOf(I?K[1]:K[0],M);if(J<0){J=this.arrayIndexOf(I?L[1]:L[0],M)}return J},appendPreOrPostMatch:function(J,e){var I=0,L=false;for(var K=0,H=J.length;K<H;K++){var M=J.charAt(K);switch(M){case"'":if(L){e.push("'")}else{I++}L=false;break;case"\\":if(L){e.push("\\")}L=!L;break;default:e.push(M);L=false;break}}return I},getTokenRegExp:function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g},formatlink:function(e,I){var H="";if(I&&I.target){H="target="+I.target}if(H!=""){return"<a "+H+' href="'+e+'">'+e+"</a>"}return'<a href="'+e+'">'+e+"</a>"},formatemail:function(e){return'<a href="mailto:'+e+'">'+e+"</a>"},formatNumber:function(e,I,H){return this.formatnumber(e,I,H)},formatnumber:function(T,S,O){if(O==undefined||O==null||O==""){O=this.defaultcalendar()}if(S===""||S===null){return T}if(!this.isNumber(T)){T*=1}var P;if(S.length>1){P=parseInt(S.slice(1),10)}var V={};var Q=S.charAt(0).toUpperCase();V.thousandsSeparator=O.thousandsseparator;V.decimalSeparator=O.decimalseparator;switch(Q){case"D":case"d":case"F":case"f":V.decimalPlaces=P;break;case"N":case"n":V.decimalPlaces=0;break;case"C":case"c":V.decimalPlaces=P;if(O.currencysymbolposition=="before"){V.prefix=O.currencysymbol}else{V.suffix=O.currencysymbol}break;case"P":case"p":V.suffix=O.percentsymbol;V.decimalPlaces=P;break;default:throw"Bad number format specifier: "+Q}if(this.isNumber(T)){var K=(T<0);var I=T+"";var R=(V.decimalSeparator)?V.decimalSeparator:".";var e;if(this.isNumber(V.decimalPlaces)){var L=V.decimalPlaces;var N=Math.pow(10,L);I=(T*N).toFixed(0)/N+"";e=I.lastIndexOf(".");if(L>0){if(e<0){I+=R;e=I.length-1}else{if(R!=="."){I=I.replace(".",R)}}while((I.length-1-e)<L){I+="0"}}}else{var I=T+"";e=I.lastIndexOf(".");if(e>0&&L==undefined){if(R!=="."){I=I.replace(".",R)}}}if(V.thousandsSeparator){var U=V.thousandsSeparator;e=I.lastIndexOf(R);e=(e>-1)?e:I.length;var J=I.substring(e);var H=-1;for(var M=e;M>0;M--){H++;if((H%3===0)&&(M!==e)&&(!K||(M>1))){J=U+J}J=I.charAt(M-1)+J}I=J}I=(V.prefix)?V.prefix+I:I;I=(V.suffix)?I+V.suffix:I;return I}else{return T}},tryparsedate:function(ak,al){if(al==undefined||al==null){al=this.defaultcalendar()}var P=this;if(ak==""){return null}if(ak!=null&&!ak.substring){ak=ak.toString()}if(ak!=null&&ak.substring(0,6)=="/Date("){var au=/^\/Date\((-?\d+)(\+|-)?(\d+)?\)\/$/;var ar=new Date(+ak.replace(/\/Date\((\d+)\)\//,"$1"));if(ar=="Invalid Date"){var an=ak.match(/^\/Date\((\d+)([-+]\d\d)(\d\d)\)\/$/);var ar=null;if(an){ar=new Date(1*an[1]+3600000*an[2]+60000*an[3])}}if(ar==null||ar=="Invalid Date"||isNaN(ar)){var Q=au.exec(ak);if(Q){var T=new Date(parseInt(Q[1]));if(Q[2]){var Z=parseInt(Q[3]);if(Q[2]==="-"){Z=-Z}var V=T.getUTCMinutes();T.setUTCMinutes(V-Z)}if(!isNaN(T.valueOf())){return T}}}return ar}var N=al.patterns;for(var S in N){ar=P.parsedate(ak,N[S],al);if(ar){if(S=="ISO"){var ac=P.parsedate(ak,N.ISO2,al);if(ac){return ac}}return ar}}if(ak!=null){var ac=null;var L=[":","/","-"];var ap=true;for(var O=0;O<L.length;O++){if(ak.indexOf(L[O])!=-1){ap=false}}if(ap){var av=new Number(ak);if(!isNaN(av)){return new Date(av)}}}if(i.type(ak)==="string"){var ag=P;ak=ag.trim(ak);var am=[":","/","-"," ",","];var M=function(az,ax,ay){return ay.replace(new RegExp(az,"g"),ax)};ak=M(", ",",",ak);var I="";var Y=ak;if(ak.indexOf(":")>=0){I=ak.substring(ak.indexOf(":")-2);I=ag.trim(I);Y=ak.substring(0,ak.indexOf(":")-2)}else{if(ak.toUpperCase().indexOf("AM")>=0){I=ak.substring(ak.toUpperCase().indexOf("AM")-2);I=ag.trim(I);Y=ak.substring(0,ak.toUpperCase().indexOf("AM")-2)}else{if(ak.toUpperCase().indexOf("PM")>=0){I=ak.substring(ak.toUpperCase().indexOf("PM")-2);I=ag.trim(I);Y=ak.substring(0,ak.toUpperCase().indexOf("PM")-2)}}}var e=new Date();var aj=false;if(Y){for(var aq=0;aq<am.length;aq++){if(Y.indexOf(am[aq])>=0){L=Y.split(am[aq]);break}}var H=new Array();var W=new Array();var ae=new Array();var R=null;var aw=null;for(var aq=0;aq<L.length;aq++){var O=L[aq];var ad=ag.parsedate(O,"d",al)||ag.parsedate(O,"dd",al)||ag.parsedate(O,"ddd",al)||ag.parsedate(O,"dddd",al);if(ad){if(O.length<=2){R=aq;H.push(ad.getDate());break}}}for(var aq=0;aq<L.length;aq++){var O=L[aq];var U=ag.parsedate(O,"M",al)||ag.parsedate(O,"MM",al)||ag.parsedate(O,"MMM",al)||ag.parsedate(O,"MMMM",al);if(U){if(R!=undefined&&R==aq){continue}W.push(U.getMonth());if(O.length>2){aw=aq;break}}}for(var aq=0;aq<L.length;aq++){var O=L[aq];var af=ag.parsedate(O,"yyyy",al);if(af){if(R!=undefined&&R==aq){continue}if(aw!=undefined&&aw==aq){continue}ae.push(af.getFullYear())}}var ao=new Array();for(var at=0;at<H.length;at++){for(var an=0;an<W.length;an++){for(var ai=0;ai<ae.length;ai++){var T=new Date(ae[ai],W[an],H[at]);if(ae[ai]<1970){T.setFullYear(ae[ai])}if(T.getTime()!=NaN){ao.push(T)}}}}if(ao.length>0){e=ao[0];aj=true}}if(I){var ah=I.indexOf(":")>=0?I.split(":"):I;var K=ag.parsedate(I,"h:mm tt",al)||ag.parsedate(I,"h:mm:ss tt",al)||ag.parsedate(I,"HH:mm:ss.fff",al)||ag.parsedate(I,"HH:mm:ss.ff",al)||ag.parsedate(I,"HH:mm:ss.tttt",al)||ag.parsedate(I,"HH:mm:ss",al)||ag.parsedate(I,"HH:mm",al)||ag.parsedate(I,"HH",al);var X=0,J=0,aa=0,ab=0;if(K&&K.getTime()!=NaN){X=K.getHours();J=K.getMinutes();aa=K.getSeconds();ab=K.getMilliseconds()}else{if(ah.length==1){X=parseInt(ah[0])}if(ah.length==2){X=parseInt(ah[0]);J=parseInt(ah[1])}if(ah.length==3){X=parseInt(ah[0]);J=parseInt(ah[1]);if(ah[2].indexOf(".")>=0){aa=parseInt(ah[2].toString().split(".")[0]);ab=parseInt(ah[2].toString().split(".")[1])}else{aa=parseInt(ah[2])}}if(ah.length==4){X=parseInt(ah[0]);J=parseInt(ah[1]);aa=parseInt(ah[2]);ab=parseInt(ah[3])}}if(e&&!isNaN(X)&&!isNaN(J)&&!isNaN(aa)&&!isNaN(ab)){e.setHours(X,J,aa,ab);aj=true}}if(aj){return e}}return null},getparseregexp:function(e,R){var T=e._parseRegExp;if(!T){e._parseRegExp=T={}}else{var K=T[R];if(K){return K}}var Q=this.expandFormat(e,R).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),O=["^"],H=[],N=0,J=0,W=this.getTokenRegExp(),L;while((L=W.exec(Q))!==null){var V=Q.slice(N,L.index);N=W.lastIndex;J+=this.appendPreOrPostMatch(V,O);if(J%2){O.push(L[0]);continue}var I=L[0],M=I.length,S;switch(I){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":S="(\\D+)";break;case"tt":case"t":S="(\\D*)";break;case"yyyy":case"fff":case"ff":case"f":S="(\\d{"+M+"})";break;case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":S="(\\d\\d?)";break;case"zzz":S="([+-]?\\d\\d?:\\d{2})";break;case"zz":case"z":S="([+-]?\\d\\d?)";break;case"/":S="(\\"+e["/"]+")";break;default:throw"Invalid date format pattern '"+I+"'.";break}if(S){O.push(S)}H.push(L[0])}this.appendPreOrPostMatch(Q.slice(N),O);O.push("$");var U=O.join("").replace(/\s+/g,"\\s+"),P={regExp:U,groups:H};return T[R]=P},outOfRange:function(I,e,H){return I<e||I>H},expandYear:function(L,J){var H=new Date(),e=this.getEra(H);if(J<100){var I=L.twoDigitYearMax;I=typeof I==="string"?new Date().getFullYear()%100+parseInt(I,10):I;var K=this.getEraYear(H,L,e);J+=K-(K%100);if(J>I){J-=100}}return J},parsedate:function(ab,ai,W){if(W==undefined||W==null){W=this.defaultcalendar()}ab=this.trim(ab);var T=W,an=this.getparseregexp(T,ai),N=new RegExp(an.regExp).exec(ab);if(N===null){return null}var aj=an.groups,Z=null,R=null,am=null,al=null,S=null,L=0,ae,ad=0,ak=0,e=0,I=null,U=false;for(var af=0,ah=aj.length;af<ah;af++){var H=N[af+1];if(H){var aa=aj[af],K=aa.length,M=parseInt(H,10);switch(aa){case"dd":case"d":al=M;if(this.outOfRange(al,1,31)){return null}break;case"MMM":case"MMMM":am=this.getMonthIndex(T,H,K===3);if(this.outOfRange(am,0,11)){return null}break;case"M":case"MM":am=M-1;if(this.outOfRange(am,0,11)){return null}break;case"y":case"yy":case"yyyy":R=K<4?this.expandYear(T,M):M;if(this.outOfRange(R,0,9999)){return null}break;case"h":case"hh":L=M;if(L===12){L=0}if(this.outOfRange(L,0,11)){return null}break;case"H":case"HH":L=M;if(this.outOfRange(L,0,23)){return null}break;case"m":case"mm":ad=M;if(this.outOfRange(ad,0,59)){return null}break;case"s":case"ss":ak=M;if(this.outOfRange(ak,0,59)){return null}break;case"tt":case"t":U=T.PM&&(H===T.PM[0]||H===T.PM[1]||H===T.PM[2]);if(!U&&(!T.AM||(H!==T.AM[0]&&H!==T.AM[1]&&H!==T.AM[2]))){return null}break;case"f":case"ff":case"fff":e=M*Math.pow(10,3-K);if(this.outOfRange(e,0,999)){return null}break;case"ddd":case"dddd":S=this.getDayIndex(T,H,K===3);if(this.outOfRange(S,0,6)){return null}break;case"zzz":var J=H.split(/:/);if(J.length!==2){return null}ae=parseInt(J[0],10);if(this.outOfRange(ae,-12,13)){return null}var P=parseInt(J[1],10);if(this.outOfRange(P,0,59)){return null}I=(ae*60)+(this.startsWith(H,"-")?-P:P);break;case"z":case"zz":ae=M;if(this.outOfRange(ae,-12,13)){return null}I=ae*60;break;case"g":case"gg":var V=H;if(!V||!T.eras){return null}V=this.trim(V.toLowerCase());for(var ag=0,ac=T.eras.length;ag<ac;ag++){if(V===T.eras[ag].name.toLowerCase()){Z=ag;break}}if(Z===null){return null}break}}}var Q=new Date(),Y,O=T.convert;Y=Q.getFullYear();if(R===null){R=Y}else{if(T.eras){R+=T.eras[(Z||0)].offset}}if(am===null){am=0}if(al===null){al=1}if(O){Q=O.toGregorian(R,am,al);if(Q===null){return null}}else{Q.setFullYear(R,am,al);if(Q.getDate()!==al){return null}if(S!==null&&Q.getDay()!==S){return null}}if(U&&L<12){L+=12}Q.setHours(L,ad,ak,e);if(I!==null){var X=Q.getMinutes()-(I+Q.getTimezoneOffset());Q.setHours(Q.getHours()+parseInt(X/60,10),X%60)}return Q},cleardatescache:function(){this.datescache=new Array()},formatDate:function(e,I,H){return this.formatdate(e,I,H)},formatdate:function(Z,ad,U){if(U==undefined||U==null){U=this.defaultcalendar()}if(typeof Z==="string"){return Z}var J=Z.toString()+"_"+ad;if(this.datescache&&this.datescache[J]){if(ad.indexOf("f")==-1){return this.datescache[J]}}if(!ad||!ad.length||ad==="i"){var af;af=this.formatDate(Z,U.patterns.F,U);return af}var aa=U.eras,H=ad==="s";ad=this.expandFormat(U,ad);af=[];var M,ab=["0","00","000"],Q,R,e=/([^d]|^)(d|dd)([^d]|$)/g,ae=0,W=this.getTokenRegExp(),I;function O(ag,aj){var ai,ah=ag+"";if(aj>1&&ah.length<aj){ai=(ab[aj-2]+ah);return ai.substr(ai.length-aj,aj)}else{ai=ah}return ai}function ac(){if(Q||R){return Q}Q=e.test(ad);R=true;return Q}function K(ah,ag){if(I){return I[ag]}if(ah.getMonth!=undefined){switch(ag){case 0:return ah.getFullYear();case 1:return ah.getMonth();case 2:return ah.getDate()}}}for(;;){var N=W.lastIndex,V=W.exec(ad);var S=ad.slice(N,V?V.index:ad.length);ae+=this.appendPreOrPostMatch(S,af);if(!V){break}if(ae%2){af.push(V[0]);continue}var X=V[0],L=X.length;switch(X){case"ddd":case"dddd":var T=(L===3)?U.days.namesAbbr:U.days.names;af.push(T[Z.getDay()]);break;case"d":case"dd":Q=true;af.push(O(K(Z,2),L));break;case"MMM":case"MMMM":var Y=K(Z,1);af.push(U.months[L===3?"namesAbbr":"names"][Y]);break;case"M":case"MM":af.push(O(K(Z,1)+1,L));break;case"y":case"yy":case"yyyy":Y=this.getEraYear(Z,U,this.getEra(Z,aa),H);if(L<4){Y=Y%100}af.push(O(Y,L));break;case"h":case"hh":M=Z.getHours()%12;if(M===0){M=12}af.push(O(M,L));break;case"H":case"HH":af.push(O(Z.getHours(),L));break;case"m":case"mm":af.push(O(Z.getMinutes(),L));break;case"s":case"ss":af.push(O(Z.getSeconds(),L));break;case"t":case"tt":Y=Z.getHours()<12?(U.AM?U.AM[0]:" "):(U.PM?U.PM[0]:" ");af.push(L===1?Y.charAt(0):Y);break;case"f":case"ff":case"fff":af.push(O(Z.getMilliseconds(),3).substr(0,L));break;case"z":case"zz":M=Z.getTimezoneOffset()/60;af.push((M<=0?"+":"-")+O(Math.floor(Math.abs(M)),L));break;case"zzz":M=Z.getTimezoneOffset()/60;af.push((M<=0?"+":"-")+O(Math.floor(Math.abs(M)),2)+":"+O(Math.abs(Z.getTimezoneOffset()%60),2));break;case"g":case"gg":if(U.eras){af.push(U.eras[this.getEra(Z,aa)].name)}break;case"/":af.push(U["/"]);break;default:throw"Invalid date format pattern '"+X+"'.";break}}var P=af.join("");if(!this.datescache){this.datescache=new Array()}this.datescache[J]=P;return P}});i.jqx.data={};var l,E,p=/#.*$/,a=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,f=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,j=/^(?:GET|HEAD)$/,o=/^\/\//,k=/\?/,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,d=/([?&])_=[^&]*/,h=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,t=/\s+/,F=i.fn.load,G={},C={},q=["*/"]+["*"];try{E=location.href}catch(A){E=document.createElement("a");E.href="";E=E.href}l=h.exec(E.toLowerCase())||[];function r(e){return function(K,M){if(typeof K!=="string"){M=K;K="*"}var H,N,O,J=K.toLowerCase().split(t),I=0,L=J.length;if(i.isFunction(M)){for(;I<L;I++){H=J[I];O=/^\+/.test(H);if(O){H=H.substr(1)||"*"}N=e[H]=e[H]||[];N[O?"unshift":"push"](M)}}}}function v(H,Q,L,O,N,J){N=N||Q.dataTypes[0];J=J||{};J[N]=true;var P,M=H[N],I=0,e=M?M.length:0,K=(H===G);for(;I<e&&(K||!P);I++){P=M[I](Q,L,O);if(typeof P==="string"){if(!K||J[P]){P=undefined}else{Q.dataTypes.unshift(P);P=v(H,Q,L,O,P,J)}}}if((K||!P)&&!J["*"]){P=v(H,Q,L,O,"*",J)}return P}function u(I,J){var H,e,K=i.jqx.data.ajaxSettings.flatOptions||{};for(H in J){if(J[H]!==undefined){(K[H]?I:(e||(e={})))[H]=J[H]}}if(e){i.extend(true,I,e)}}i.extend(i.jqx.data,{ajaxSetup:function(H,e){if(e){u(H,i.jqx.data.ajaxSettings)}else{e=H;H=i.jqx.data.ajaxSettings}u(H,e);return H},ajaxSettings:{url:E,isLocal:f.test(l[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":q},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":i.parseJSON,"text xml":i.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:r(G),ajaxTransport:r(C),ajax:function(M,J){if(typeof M==="object"){J=M;M=undefined}J=J||{};var P,ad,K,Y,R,V,I,X,Q=i.jqx.data.ajaxSetup({},J),af=Q.context||Q,T=af!==Q&&(af.nodeType||af instanceof i)?i(af):i.event,ae=i.Deferred(),aa=i.Callbacks("once memory"),N=Q.statusCode||{},U={},ab={},L=0,O="canceled",W={readyState:0,setRequestHeader:function(ag,ah){if(!L){var e=ag.toLowerCase();ag=ab[e]=ab[e]||ag;U[ag]=ah}return this},getAllResponseHeaders:function(){return L===2?ad:null},getResponseHeader:function(ag){var e;if(L===2){if(!K){K={};while((e=a.exec(ad))){K[e[1].toLowerCase()]=e[2]}}e=K[ag.toLowerCase()]}return e===undefined?null:e},overrideMimeType:function(e){if(!L){Q.mimeType=e}return this},abort:function(e){e=e||O;if(Y){Y.abort(e)}S(0,e);return this}};function S(ak,ag,al,ai){var e,ao,am,aj,an,ah=ag;if(L===2){return}L=2;if(R){clearTimeout(R)}Y=undefined;ad=ai||"";W.readyState=ak>0?4:0;if(al){aj=B(Q,W,al)}if(ak>=200&&ak<300||ak===304){if(Q.ifModified){an=W.getResponseHeader("Last-Modified");if(an){i.lastModified[P]=an}an=W.getResponseHeader("Etag");if(an){i.etag[P]=an}}if(ak===304){ah="notmodified";e=true}else{e=c(Q,aj);ah=e.state;ao=e.data;am=e.error;e=!am}}else{am=ah;if(!ah||ak){ah="error";if(ak<0){ak=0}}}W.status=ak;W.statusText=(ag||ah)+"";if(e){ae.resolveWith(af,[ao,ah,W])}else{ae.rejectWith(af,[W,ah,am])}W.statusCode(N);N=undefined;if(I){T.trigger("ajax"+(e?"Success":"Error"),[W,Q,e?ao:am])}aa.fireWith(af,[W,ah]);if(I){T.trigger("ajaxComplete",[W,Q]);if(!(--i.active)){i.event.trigger("ajaxStop")}}}ae.promise(W);W.success=W.done;W.error=W.fail;W.complete=aa.add;W.statusCode=function(ag){if(ag){var e;if(L<2){for(e in ag){N[e]=[N[e],ag[e]]}}else{e=ag[W.status];W.always(e)}}return this};Q.url=((M||Q.url)+"").replace(p,"").replace(o,l[1]+"//");Q.dataTypes=i.trim(Q.dataType||"*").toLowerCase().split(t);if(Q.crossDomain==null){V=h.exec(Q.url.toLowerCase());Q.crossDomain=!!(V&&(V[1]!==l[1]||V[2]!==l[2]||(V[3]||(V[1]==="http:"?80:443))!=(l[3]||(l[1]==="http:"?80:443))))}if(Q.data&&Q.processData&&typeof Q.data!=="string"){Q.data=i.param(Q.data,Q.traditional)}v(G,Q,J,W);if(L===2){return W}I=Q.global;Q.type=Q.type.toUpperCase();Q.hasContent=!j.test(Q.type);if(I&&i.active++===0){i.event.trigger("ajaxStart")}if(!Q.hasContent){if(Q.data){Q.url+=(k.test(Q.url)?"&":"?")+Q.data;delete Q.data}P=Q.url;if(Q.cache===false){var H=(new Date()).getTime(),ac=Q.url.replace(d,"$1_="+H);Q.url=ac+((ac===Q.url)?(k.test(Q.url)?"&":"?")+"_="+H:"")}}if(Q.data&&Q.hasContent&&Q.contentType!==false||J.contentType){W.setRequestHeader("Content-Type",Q.contentType)}if(Q.ifModified){P=P||Q.url;if(i.lastModified[P]){W.setRequestHeader("If-Modified-Since",i.lastModified[P])}if(i.etag[P]){W.setRequestHeader("If-None-Match",i.etag[P])}}W.setRequestHeader("Accept",Q.dataTypes[0]&&Q.accepts[Q.dataTypes[0]]?Q.accepts[Q.dataTypes[0]]+(Q.dataTypes[0]!=="*"?", "+q+"; q=0.01":""):Q.accepts["*"]);for(X in Q.headers){W.setRequestHeader(X,Q.headers[X])}if(Q.beforeSend&&(Q.beforeSend.call(af,W,Q)===false||L===2)){return W.abort()}O="abort";for(X in {success:1,error:1,complete:1}){W[X](Q[X])}Y=v(C,Q,J,W);if(!Y){S(-1,"No Transport")}else{W.readyState=1;if(I){T.trigger("ajaxSend",[W,Q])}if(Q.async&&Q.timeout>0){R=setTimeout(function(){W.abort("timeout")},Q.timeout)}try{L=1;Y.send(U,S)}catch(Z){if(L<2){S(-1,Z)}else{throw Z}}}return W},active:0,lastModified:{},etag:{}});function B(P,O,L){var K,M,J,e,H=P.contents,N=P.dataTypes,I=P.responseFields;for(M in I){if(M in L){O[I[M]]=L[M]}}while(N[0]==="*"){N.shift();if(K===undefined){K=P.mimeType||O.getResponseHeader("content-type")}}if(K){for(M in H){if(H[M]&&H[M].test(K)){N.unshift(M);break}}}if(N[0] in L){J=N[0]}else{for(M in L){if(!N[0]||P.converters[M+" "+N[0]]){J=M;break}if(!e){e=M}}J=J||e}if(J){if(J!==N[0]){N.unshift(J)}return L[J]}}function c(R,J){var P,H,N,L,O=R.dataTypes.slice(),I=O[0],Q={},K=0;if(R.dataFilter){J=R.dataFilter(J,R.dataType)}if(O[1]){for(P in R.converters){Q[P.toLowerCase()]=R.converters[P]}}for(;(N=O[++K]);){if(N!=="*"){if(I!=="*"&&I!==N){P=Q[I+" "+N]||Q["* "+N];if(!P){for(H in Q){L=H.split(" ");if(L[1]===N){P=Q[I+" "+L[0]]||Q["* "+L[0]];if(P){if(P===true){P=Q[H]}else{if(Q[H]!==true){N=L[0];O.splice(K--,0,N)}}break}}}}if(P!==true){if(P&&R["throws"]){J=P(J)}else{try{J=P(J)}catch(M){return{state:"parsererror",error:P?M:"No conversion from "+I+" to "+N}}}}}I=N}}return{state:"success",data:J}}var y=[],n=/\?/,D=/(=)\?(?=&|$)|\?\?/,z=(new Date()).getTime();i.jqx.data.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=y.pop()||(i.expando+"_"+(z++));this[e]=true;return e}});i.jqx.data.ajaxPrefilter("json jsonp",function(Q,L,P){var O,e,N,J=Q.data,H=Q.url,I=Q.jsonp!==false,M=I&&D.test(H),K=I&&!M&&typeof J==="string"&&!(Q.contentType||"").indexOf("application/x-www-form-urlencoded")&&D.test(J);if(Q.dataTypes[0]==="jsonp"||M||K){O=Q.jsonpCallback=i.isFunction(Q.jsonpCallback)?Q.jsonpCallback():Q.jsonpCallback;e=window[O];if(M){Q.url=H.replace(D,"$1"+O)}else{if(K){Q.data=J.replace(D,"$1"+O)}else{if(I){Q.url+=(n.test(H)?"&":"?")+Q.jsonp+"="+O}}}Q.converters["script json"]=function(){if(!N){i.error(O+" was not called")}return N[0]};Q.dataTypes[0]="json";window[O]=function(){N=arguments};P.always(function(){window[O]=e;if(Q[O]){Q.jsonpCallback=L.jsonpCallback;y.push(O)}if(N&&i.isFunction(e)){e(N[0])}N=e=undefined});return"script"}});i.jqx.data.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){i.globalEval(e);return e}}});i.jqx.data.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false}});i.jqx.data.ajaxTransport("script",function(I){if(I.crossDomain){var e,H=document.head||document.getElementsByTagName("head")[0]||document.documentElement;return{send:function(J,K){e=document.createElement("script");e.async="async";if(I.scriptCharset){e.charset=I.scriptCharset}e.src=I.url;e.onload=e.onreadystatechange=function(M,L){if(L||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;if(H&&e.parentNode){H.removeChild(e)}e=undefined;if(!L){K(200,"success")}}};H.insertBefore(e,H.firstChild)},abort:function(){if(e){e.onload(0,1)}}}}});var w,x=window.ActiveXObject?function(){for(var e in w){w[e](0,1)}}:false,m=0;function g(){try{return new window.XMLHttpRequest()}catch(H){}}function s(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(H){}}i.jqx.data.ajaxSettings.xhr=window.ActiveXObject?function(){return !this.isLocal&&g()||s()}:g;(function(e){i.extend(i.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})})(i.jqx.data.ajaxSettings.xhr());if(!i.support){i.support={ajax:true}}if(i.support.ajax){i.jqx.data.ajaxTransport(function(e){if(!e.crossDomain||i.support.cors){var H;return{send:function(N,I){var L,K,M=e.xhr();if(e.username){M.open(e.type,e.url,e.async,e.username,e.password)}else{M.open(e.type,e.url,e.async)}if(e.xhrFields){for(K in e.xhrFields){M[K]=e.xhrFields[K]}}if(e.mimeType&&M.overrideMimeType){M.overrideMimeType(e.mimeType)}if(!e.crossDomain&&!N["X-Requested-With"]){N["X-Requested-With"]="XMLHttpRequest"}try{for(K in N){M.setRequestHeader(K,N[K])}}catch(J){}M.send((e.hasContent&&e.data)||null);H=function(W,Q){var R,P,O,U,T;try{if(H&&(Q||M.readyState===4)){H=undefined;if(L){M.onreadystatechange=function(){};if(x){delete w[L]}}if(Q){if(M.readyState!==4){M.abort()}}else{R=M.status;O=M.getAllResponseHeaders();U={};T=M.responseXML;if(T&&T.documentElement){U.xml=T}try{U.text=M.responseText}catch(V){}try{P=M.statusText}catch(V){P=""}if(!R&&e.isLocal&&!e.crossDomain){R=U.text?200:404}else{if(R===1223){R=204}}}}}catch(S){if(!Q){I(-1,S)}}if(U){I(R,P,U,O)}};if(!e.async){H()}else{if(M.readyState===4){setTimeout(H,0)}else{L=++m;if(x){if(!w){w={};i(window).unload(x)}w[L]=H}M.onreadystatechange=H}}},abort:function(){if(H){H(0,1)}}}}})}i.jqx.filter=function(){this.operator="and";var M=0;var J=1;var P=["EMPTY","NOT_EMPTY","CONTAINS","CONTAINS_CASE_SENSITIVE","DOES_NOT_CONTAIN","DOES_NOT_CONTAIN_CASE_SENSITIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","ENDS_WITH","ENDS_WITH_CASE_SENSITIVE","EQUAL","EQUAL_CASE_SENSITIVE","NULL","NOT_NULL"];var R=["EQUAL","NOT_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","GREATER_THAN","GREATER_THAN_OR_EQUAL","NULL","NOT_NULL"];var S=["EQUAL","NOT_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","GREATER_THAN","GREATER_THAN_OR_EQUAL","NULL","NOT_NULL"];var L=["EQUAL","NOT_EQUAL"];var K=new Array();var Q=new Array();this.evaluate=function(X){var V=true;for(var W=0;W<K.length;W++){var U=K[W].evaluate(X);if(W==0){V=U}else{if(Q[W]==J||Q[W]=="or"){V=V||U}else{V=V&&U}}}return V};this.getfilterscount=function(){return K.length};this.setoperatorsbyfiltertype=function(U,V){switch(U){case"numericfilter":R=V;break;case"stringfilter":P=V;break;case"datefilter":S=V;break;case"booleanfilter":L=V;break}};this.getoperatorsbyfiltertype=function(U){var V=new Array();switch(U){case"numericfilter":V=R.slice(0);break;case"stringfilter":V=P.slice(0);break;case"datefilter":V=S.slice(0);break;case"booleanfilter":V=L.slice(0);break}return V};var O=function(){var U=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return(U()+"-"+U()+"-"+U())};this.createfilter=function(Y,V,X,W,U,Z){if(Y==null||Y==undefined){return null}switch(Y){case"numericfilter":return new N(V,X.toUpperCase());case"stringfilter":return new T(V,X.toUpperCase());case"datefilter":return new H(V,X.toUpperCase(),U,Z);case"booleanfilter":return new I(V,X.toUpperCase());case"custom":return new e(V,X.toUpperCase(),W)}throw new Error("jqxGrid: There is no such filter type. The available filter types are: 'numericfilter', 'stringfilter', 'datefilter' and 'booleanfilter'");return null};this.getfilters=function(){var U=new Array();for(var V=0;V<K.length;V++){var W={value:K[V].filtervalue,condition:K[V].comparisonoperator,operator:Q[V],type:K[V].type};if(K[V].data){W.id=K[V].data}U[V]=W}return U};this.addfilter=function(U,V){K[K.length]=V;V.key=O();Q[Q.length]=U};this.removefilter=function(V){for(var U=0;U<K.length;U++){if(K[U].key==V.key){K.splice(U,1);Q.splice(U,1);break}}};this.getoperatorat=function(U){if(U==undefined||U==null){return null}if(U<0||U>K.length){return null}return Q[U]};this.setoperatorat=function(V,U){if(V==undefined||V==null){return null}if(V<0||V>K.length){return null}Q[U]=U};this.getfilterat=function(U){if(U==undefined||U==null){return null}if(U<0||U>K.length){return null}return K[U]};this.setfilterat=function(U,V){if(U==undefined||U==null){return null}if(U<0||U>K.length){return null}V.key=O();K[U]=V};this.clear=function(){K=new Array();Q=new Array()};var T=function(V,U){this.filtervalue=V;this.comparisonoperator=U;this.type="stringfilter";this.evaluate=function(af){var ae=this.filtervalue;var al=this.comparisonoperator;if(af==null||af==undefined||af==""){if(al=="NULL"){return true}if(al=="NOT_NULL"){return false}if(al=="EQUAL"&&af==ae){return true}if(al=="NOT_EQUAL"&&af!=ae){return true}if(al!="EMPTY"){return false}else{if(af==""){return true}}}var an="";try{an=af.toString()}catch(ag){return true}var am=function(ap,ao){switch(al){case"EQUAL":return i.jqx.string.equalsIgnoreCase(ap,ao);case"EQUAL_CASE_SENSITIVE":return i.jqx.string.equals(ap,ao);case"NOT_EQUAL":return !i.jqx.string.equalsIgnoreCase(ap,ao);case"NOT_EQUAL_CASE_SENSITIVE":return !i.jqx.string.equals(ap,ao);case"CONTAINS":return i.jqx.string.containsIgnoreCase(ap,ao);case"CONTAINS_CASE_SENSITIVE":return i.jqx.string.contains(ap,ao);case"DOES_NOT_CONTAIN":return !i.jqx.string.containsIgnoreCase(ap,ao);case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !i.jqx.string.contains(ap,ao);case"EMPTY":return ap=="";case"NOT_EMPTY":return ap!="";case"NOT_NULL":return ap!=null;case"STARTS_WITH":return i.jqx.string.startsWithIgnoreCase(ap,ao);case"ENDS_WITH":return i.jqx.string.endsWithIgnoreCase(ap,ao);case"ENDS_WITH_CASE_SENSITIVE":return i.jqx.string.endsWith(ap,ao);case"STARTS_WITH_CASE_SENSITIVE":return i.jqx.string.startsWith(ap,ao);default:return false}};var Z=new Array();if(ae&&ae.indexO&&al!=="NOT_EQUAL"){if(ae.indexOf("|")>=0||ae.indexOf(" AND ")>=0||ae.indexOf(" OR ")>=0||ae.indexOf(" and ")>=0||ae.indexOf(" or ")>=0){var aa=am(an,ae);if(aa){return aa}var ab=ae.indexOf(" AND ")>=0?ae.split(" AND "):new Array();var Y=ae.indexOf(" OR ")>=0?ae.split(" OR "):new Array();var X=ae.indexOf(" and ")>=0?ae.split(" and "):new Array();var ac=ae.indexOf(" or ")>=0?ae.split(" or "):new Array();var W=ae.indexOf("|")>=0?ae.split("|"):new Array();if(W.length>0){for(var ak=0;ak<W.length;ak++){W[ak]=i.trim(W[ak])}}var aj=ae.indexOf(" ")>=0?ae.split(" "):new Array();if(aj.length>0){for(var ak=0;ak<aj.length;ak++){aj[ak]=i.trim(aj[ak])}}ab=ab.concat(aj);ab=ab.concat(X);Y=Y.concat(W);Y=Y.concat(ac);if(ab.length>0){for(var ak=0;ak<ab.length;ak++){if(!ab[ak].indexOf(" OR ")>=0){Z.push(ab[ak])}}}if(Y.length>0){for(var ak=0;ak<Y.length;ak++){if(!Y[ak].indexOf(" AND ")>=0){Z.push(Y[ak])}}}var ai=undefined;for(var ah=0;ah<Z.length;ah++){var af=Z[ah];var aa=am(an,af);var ad=ah<ab.length?"and":"or";if(ai==undefined){ai=aa}else{if(ad=="or"){ai=ai||aa}else{ai=ai&&aa}}}return ai}}return am(an,ae)}};var I=function(V,U){this.filtervalue=V;this.comparisonoperator=U;this.type="booleanfilter";this.evaluate=function(Y){var X=this.filtervalue;var W=this.comparisonoperator;if(Y==null||Y==undefined){if(W=="NULL"){return true}return false}var Z=Y;switch(W){case"EQUAL":return Z==X||Z.toString()==X.toString();case"NOT_EQUAL":return Z!=X&&Z.toString()!=X.toString();default:return false}}};var N=function(V,U){this.filtervalue=V;this.comparisonoperator=U;this.type="numericfilter";this.evaluate=function(ag){var af=this.filtervalue;var al=this.comparisonoperator;if(ag===null||ag===undefined||ag===""){if(al=="NOT_NULL"){return false}if(al=="NULL"){return true}else{switch(al){case"EQUAL":return ag==af;case"NOT_EQUAL":return ag!=af}return false}}else{if(al=="NULL"){return false}if(al=="NOT_NULL"){return true}}var an=ag;try{an=parseFloat(an)}catch(ah){if(ag.toString()!=""){return false}}var am=function(ap,ao){switch(al){case"EQUAL":return ap==ao;case"NOT_EQUAL":return ap!=ao;case"GREATER_THAN":return ap>ao;case"GREATER_THAN_OR_EQUAL":return ap>=ao;case"LESS_THAN":return ap<ao;case"LESS_THAN_OR_EQUAL":return ap<=ao;case"STARTS_WITH":return i.jqx.string.startsWithIgnoreCase(ap.toString(),ao.toString());case"ENDS_WITH":return i.jqx.string.endsWithIgnoreCase(ap.toString(),ao.toString());case"ENDS_WITH_CASE_SENSITIVE":return i.jqx.string.endsWith(ap.toString(),ao.toString());case"STARTS_WITH_CASE_SENSITIVE":return i.jqx.string.startsWith(ap.toString(),ao.toString());case"CONTAINS":return i.jqx.string.containsIgnoreCase(ap.toString(),ao.toString());case"CONTAINS_CASE_SENSITIVE":return i.jqx.string.contains(ap.toString(),ao.toString());case"DOES_NOT_CONTAIN":return !i.jqx.string.containsIgnoreCase(ap.toString(),ao.toString());case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !i.jqx.string.contains(ap.toString(),ao.toString());default:return true}};var aa=new Array();if(af&&af.indexOf){af=af.replace("$","")}if(af.indexOf&&(af.indexOf("|")>=0||af.indexOf(" AND ")>=0||af.indexOf(" OR ")>=0||af.indexOf(" and ")>=0||af.indexOf(" or ")>=0)){var ab=am(an,af);if(ab){return ab}af=af.toString();var ac=af.indexOf(" AND ")>=0?af.split(" AND "):new Array();var Z=af.indexOf(" OR ")>=0?af.split(" OR "):new Array();var Y=af.indexOf(" and ")>=0?af.split(" and "):new Array();var ad=af.indexOf(" or ")>=0?af.split(" or "):new Array();ac=ac.concat(Y);Z=Z.concat(ad);var X=af.indexOf("|")>=0?af.split("|"):new Array();if(X.length>0){for(var ak=0;ak<X.length;ak++){X[ak]=i.trim(X[ak])}}Z=Z.concat(X);if(ac.length>0){for(var ak=0;ak<ac.length;ak++){if(!ac[ak].indexOf(" OR ")>=0){aa.push(ac[ak])}}}if(Z.length>0){for(var ak=0;ak<Z.length;ak++){if(!Z[ak].indexOf(" AND ")>=0){aa.push(Z[ak])}}}var aj=undefined;for(var ai=0;ai<aa.length;ai++){var ag=aa[ai];if(ag&&ag.indexOf&&ag.indexOf("..")>=0){var W=ag.toString().split("..");if(W.length==2){ab=an>=W[0]&&an<=W[1]}}else{var ab=am(an,ag)}var ae=ai<ac.length?"and":"or";if(aj==undefined){aj=ab}else{if(ae=="or"){aj=aj||ab}else{aj=aj&&ab}}}return aj}if(af&&af.indexOf&&af.indexOf("..")>=0){aa=af.toString().split("..");if(aa.length==2){return an>=aa[0]&&an<=aa[1]}}return am(an,af)}};var H=function(X,V,W,ab){this.filtervalue=X;this.type="datefilter";var Z=this;if(W!=undefined&&ab!=undefined){var Y=i.jqx.dataFormat.parsedate(X,W,ab);if(Y!=null){this.filterdate=Y}else{var U=i.jqx.dataFormat.tryparsedate(X,ab);if(U!=null){this.filterdate=U}}}else{var aa=new Date(X);if(aa.toString()=="NaN"||aa.toString()=="Invalid Date"){this.filterdate=i.jqx.dataFormat.tryparsedate(X)}else{this.filterdate=aa}}if(!this.filterdate){var aa=new Date(X);if(aa.toString()=="NaN"||aa.toString()=="Invalid Date"){this.filterdate=i.jqx.dataFormat.tryparsedate(X)}else{this.filterdate=aa}}this.comparisonoperator=V;this.evaluate=function(ao){var an=this.filtervalue;var aw=this.comparisonoperator;if(ao==null||ao==undefined||ao==""){if(aw=="NOT_NULL"){return false}if(aw=="NULL"){return true}else{switch(aw){case"EQUAL":return ao==an;case"NOT_EQUAL":return ao!=an}return false}}else{if(aw=="NULL"){return false}if(aw=="NOT_NULL"){return true}}var ay=new Date();ay.setFullYear(1900,0,1);ay.setHours(12,0,0,0);try{var av=new Date(ao);if(av.toString()=="NaN"||av.toString()=="Invalid Date"){ao=i.jqx.dataFormat.tryparsedate(ao)}else{ao=av}ay=ao;var at=false;if(W!=undefined&&ab!=undefined){if(W.indexOf("t")>=0||W.indexOf("T")>=0||W.indexOf(":")>=0||W.indexOf("f")>=0){at=true;if(an&&an.toString().indexOf(":")==-1){var aj=i.jqx.dataFormat.tryparsedate(an.toString()+":00",ab);if(aj!=null){Z.filterdate=aj}}}}if(W!=undefined){if(W.indexOf("hh")>=0||W.indexOf("t")>=0){at=true}}if(!at){ay.setHours(0);ay.setMinutes(0);ay.setSeconds(0)}}catch(ap){if(ao.toString()!=""){return false}}if(Z.filterdate!=null){an=Z.filterdate}else{if(an&&an.indexOf){if(an.indexOf(":")!=-1||!isNaN(parseInt(an))){var ai=new Date(ay);ai.setHours(12,0,0,0);var ah=an.split(":");for(var au=0;au<ah.length;au++){if(au==0){ai.setHours(ah[au])}if(au==1){ai.setMinutes(ah[au])}if(au==2){ai.setSeconds(ah[au])}}an=ai}}}if(at){if(an&&an.setFullYear){if(ay&&ay.getFullYear){if(W.indexOf("d")==-1&&W.indexOf("M")==-1&&W.indexOf("y")==-1){an.setFullYear(ay.getFullYear(),ay.getMonth(),ay.getDate())}}}}var ax=function(aA,az){if(aA==null){aA=""}switch(aw){case"EQUAL":return aA.toString()==az.toString();case"NOT_EQUAL":return aA.toString()!=az.toString();case"GREATER_THAN":return aA>az;case"GREATER_THAN_OR_EQUAL":return aA>=az;case"LESS_THAN":return aA<az;case"LESS_THAN_OR_EQUAL":return aA<=az;case"STARTS_WITH":return i.jqx.string.startsWithIgnoreCase(aA.toString(),az.toString());case"ENDS_WITH":return i.jqx.string.endsWithIgnoreCase(aA.toString(),az.toString());case"ENDS_WITH_CASE_SENSITIVE":return i.jqx.string.endsWith(aA.toString(),az.toString());case"STARTS_WITH_CASE_SENSITIVE":return i.jqx.string.startsWith(aA.toString(),az.toString());case"CONTAINS":return i.jqx.string.containsIgnoreCase(aA.toString(),az.toString());case"CONTAINS_CASE_SENSITIVE":return i.jqx.string.contains(aA.toString(),az.toString());case"DOES_NOT_CONTAIN":return !i.jqx.string.containsIgnoreCase(aA.toString(),az.toString());case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !i.jqx.string.contains(aA.toString(),az.toString());default:return true}};var ag=new Array();if(an&&an.indexOf){if(an.indexOf("|")>=0||an.indexOf(" AND ")>=0||an.indexOf(" OR ")>=0||an.indexOf(" and ")>=0||an.indexOf(" or ")>=0){var aj=ax(ay,an);if(aj){return aj}var ak=an.indexOf(" AND ")>=0?an.split(" AND "):new Array();var af=an.indexOf(" OR ")>=0?an.split(" OR "):new Array();var ae=an.indexOf(" and ")>=0?an.split(" and "):new Array();var al=an.indexOf(" or ")>=0?an.split(" or "):new Array();ak=ak.concat(ae);af=af.concat(al);var ad=an.indexOf("|")>=0?an.split("|"):new Array();if(ad.length>0){for(var au=0;au<ad.length;au++){ad[au]=i.trim(ad[au])}}af=af.concat(ad);if(ak.length>0){for(var au=0;au<ak.length;au++){if(!ak[au].indexOf(" OR ")>=0){ag.push(ak[au])}}}if(af.length>0){for(var au=0;au<af.length;au++){if(!af[au].indexOf(" AND ")>=0){ag.push(af[au])}}}var ar=undefined;for(var aq=0;aq<ag.length;aq++){var ao=ag[aq];if(ao&&ao.indexOf&&ao.indexOf("..")>=0){var ac=ao.toString().split("..");if(ac.length==2){aj=ay>=ac[0]&&ay<=ac[1]}}else{var aj=ax(ay,ao)}var am=aq<ak.length?"and":"or";if(ar==undefined){ar=aj}else{if(am=="or"){ar=ar||aj}else{ar=ar&&aj}}}return ar}}if(an&&an.indexOf&&an.indexOf("..")>=0){ag=an.toString().split("..");if(ag.length==2){return ay>=ag[0]&&ay<=ag[1]}}return ax(ay,an)}};var e=function(V,U,W){this.filtervalue=V;this.comparisonoperator=U;this.evaluate=function(Y,X){return W(this.filtervalue,Y,this.comparisonoperator)}}}})(jqxBaseFramework);



/***/ }),

/***/ "./src/assets/jqwidgets/jqxdragdrop.js":
/*!*********************************************!*\
  !*** ./src/assets/jqwidgets/jqxdragdrop.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.2.0 (2019-Sep)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxDragDrop","",{});a.extend(a.jqx._jqxDragDrop.prototype,{defineInstance:function(){var b={restricter:"document",handle:false,feedback:"clone",opacity:0.6,revert:false,revertDuration:400,distance:5,disabled:false,tolerance:"intersect",data:null,dropAction:"default",dragZIndex:999999,appendTo:"parent",cursor:"move",onDragEnd:null,onDrag:null,onDragStart:null,onTargetDrop:null,onDropTargetEnter:null,onDropTargetLeave:null,initFeedback:null,dropTarget:null,isDestroyed:false,triggerEvents:true,_touchEvents:{mousedown:a.jqx.mobile.getTouchEventName("touchstart"),click:a.jqx.mobile.getTouchEventName("touchstart"),mouseup:a.jqx.mobile.getTouchEventName("touchend"),mousemove:a.jqx.mobile.getTouchEventName("touchmove"),mouseenter:"mouseenter",mouseleave:"mouseleave"},_restricter:null,_zIndexBackup:0,_targetEnterFired:false,_oldOpacity:1,_feedbackType:undefined,_isTouchDevice:false,_events:["dragStart","dragEnd","dragging","dropTargetEnter","dropTargetLeave"]};if(this===a.jqx._jqxDragDrop.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){this._createDragDrop()},_createDragDrop:function(){var c=a.data(document.body,"jqx-draggables")||1;this.appendTo=this._getParent();this._isTouchDevice=a.jqx.mobile.isTouchDevice();if((/(static|relative)/).test(this.host.css("position"))){if(!this.feedback||this.feedback==="original"){var d=this._getRelativeOffset(this.host);var b=this.appendTo.offset();if(this.appendTo.css("position")!="static"){b={left:0,top:0}}this.element.style.position="absolute";this.element.style.left=b.left+d.left+"px";this.element.style.top=b.top+d.top+"px"}}this._validateProperties();this._idHandler(c);if(this.disabled){this.disable()}if(typeof this.dropTarget==="string"){this.dropTarget=a(this.dropTarget)}this._refresh();c+=1;a.data(document.body,"jqx-draggables",c);this.host.addClass("jqx-draggable");if(!this.disabled){this.host.css("cursor",this.cursor)}},_getParent:function(){var b=this.appendTo;if(typeof this.appendTo==="string"){switch(this.appendTo){case"parent":b=this.host.parent();break;case"document":b=a(document);break;case"body":b=a(document.body);break;default:b=a(this.appendTo);break}}return b},_idHandler:function(b){if(!this.element.id){var c="jqx-draggable-"+b;this.element.id=c}},_refresh:function(){this._removeEventHandlers();this._addEventHandlers()},_getEvent:function(b){if(this._isTouchDevice){return this._touchEvents[b]}else{return b}},_validateProperties:function(){if(this.feedback==="clone"){this._feedbackType="clone"}else{this._feedbackType="original"}if(this.dropAction!=="default"){this.dropAction="nothing"}},_removeEventHandlers:function(){this.removeHandler(this.host,"dragstart");this.removeHandler(this.host,this._getEvent("mousedown")+".draggable."+this.element.id,this._mouseDown);this.removeHandler(a(document),this._getEvent("mousemove")+".draggable."+this.element.id,this._mouseMove);this.removeHandler(a(document),this._getEvent("mouseup")+".draggable."+this.element.id,this._mouseUp)},_addEventHandlers:function(){var b=this;this.addHandler(this.host,"dragstart",function(f){if(b.disabled){return true}var e=a.jqx.mobile.isTouchDevice();if(!e){f.preventDefault();return false}});this.addHandler(this.host,this._getEvent("mousedown")+".draggable."+this.element.id,this._mouseDown,{self:this});this.addHandler(a(document),this._getEvent("mousemove")+".draggable."+this.element.id,this._mouseMove,{self:this});this.addHandler(a(document),this._getEvent("mouseup")+".draggable."+this.element.id,function(e){b._mouseUp(e)},{self:this});try{if(document.referrer!=""||window.frameElement){if(window.top!=null&&window.top!=window.self){var d="";if(window.parent&&document.referrer){d=document.referrer}if(d.indexOf(document.location.host)!=-1){if(window.top.document.addEventListener){window.top.document.addEventListener("mouseup",function(){b._mouseUp(b)},false)}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmouseup",function(){b._mouseUp(b)})}}}}}}catch(c){}},_mouseDown:function(f){var b=f.data.self;var d=b._getMouseCoordinates(f);var c=b._mouseCapture(f);b._originalPageX=d.left;b._originalPageY=d.top;if(b.disabled){return true}var e=false;if(!b._mouseStarted){b._clear(f);e=true}if(c){b._mouseDownEvent=f}if(b._isTouchDevice){return true}if(f.which!==1||!c){return true}f.preventDefault()},_mouseMove:function(c){var b=c.data.self;if(b.disabled){return true}if(b._mouseStarted){b._mouseDrag(c);if(c.preventDefault){c.preventDefault()}return false}if(b._mouseDownEvent&&b._isMovedDistance(c)){if(b._mouseStart(b._mouseDownEvent,c)){b._mouseStarted=true}else{b._mouseStarted=false}if(b._mouseStarted){b._mouseDrag(c)}else{b._mouseUp(c)}}return !b._mouseStarted},_mouseUp:function(b){this._clear(b)},_clear:function(c){var b;if(c.data&&c.data.self){b=c.data.self}else{b=this}if(b.disabled){return true}b._mouseDownEvent=false;b._movedDistance=false;if(b._mouseStarted){b._mouseStarted=false;b._mouseStop(c)}if(b.feedback&&b.feedback[0]&&b._feedbackType!=="original"&&typeof b.feedback.remove==="function"&&!b.revert){b.feedback.remove()}if(!b._isTouchDevice){return false}},cancelDrag:function(){var b=this.revertDuration;this.revertDuration=0;this._mouseDownEvent=false;this._movedDistance=false;this._mouseStarted=false;this._mouseStop();this.feedback.remove();this.revertDuration=b},_isMovedDistance:function(b){var c=this._getMouseCoordinates(b);if(this._movedDistance){return true}if(c.left>=this._originalPageX+this.distance||c.left<=this._originalPageX-this.distance||c.top>=this._originalPageY+this.distance||c.top<=this._originalPageY-this.distance){this._movedDistance=true;return true}return false},_getMouseCoordinates:function(b){if(this._isTouchDevice){var c=a.jqx.position(b);return{left:c.left,top:c.top}}else{return{left:b.pageX,top:b.pageY}}},destroy:function(){this._enableSelection(this.host);this.host.removeData("draggable").off(".draggable").removeClass("jqx-draggable jqx-draggable-dragging jqx-draggable-disabled");this._removeEventHandlers();this.isDestroyed=true;return this},_disableSelection:function(b){b.each(function(){a(this).attr("unselectable","on").css({"-ms-user-select":"none","-moz-user-select":"none","-webkit-user-select":"none","user-select":"none"}).each(function(){this.onselectstart=function(){return false}})})},_enableSelection:function(b){b.each(function(){a(this).attr("unselectable","off").css({"-ms-user-select":"text","-moz-user-select":"text","-webkit-user-select":"text","user-select":"text"}).each(function(){this.onselectstart=null})})},_mouseCapture:function(b){if(this.disabled){return false}if(!this._getHandle(b)){return false}this._disableSelection(this.host);return true},_getScrollParent:function(b){var c;if((a.jqx.browser.msie&&(/(static|relative)/).test(b.css("position")))||(/absolute/).test(b.css("position"))){c=b.parents().filter(function(){return(/(relative|absolute|fixed)/).test(a.css(this,"position",1))&&(/(auto|scroll)/).test(a.css(this,"overflow",1)+a.css(this,"overflow-y",1)+a.css(this,"overflow-x",1))}).eq(0)}else{c=b.parents().filter(function(){return(/(auto|scroll)/).test(a.css(this,"overflow",1)+a.css(this,"overflow-y",1)+a.css(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(b.css("position"))||!c.length?a(document):c},_mouseStart:function(e){var d=this._getMouseCoordinates(e),c=this._getParentOffset(this.host);this.feedback=this._createFeedback(e);this._zIndexBackup=this.feedback.css("z-index");this.feedback[0].style.zIndex=this.dragZIndex;this._backupFeedbackProportions();this._backupeMargins();this._positionType=this.feedback.css("position");this._scrollParent=this._getScrollParent(this.feedback);this._offset=this.positionAbs=this.host.offset();this._offset={top:this._offset.top-this.margins.top,left:this._offset.left-this.margins.left};a.extend(this._offset,{click:{left:d.left-this._offset.left,top:d.top-this._offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset(),hostRelative:this._getRelativeOffset(this.host)});this.position=this._generatePosition(e);this.originalPosition=this._fixPosition();if(this.restricter){this._setRestricter()}this.feedback.addClass(this.toThemeProperty("jqx-draggable-dragging"));var b=this._raiseEvent(0,e);if(this.onDragStart&&typeof this.onDragStart==="function"){this.onDragStart(this.position)}this._mouseDrag(e,true);return true},_fixPosition:function(){var c=this._getRelativeOffset(this.host),b=this.position;b={left:this.position.left+c.left,top:this.position.top+c.top};return b},_mouseDrag:function(b,c){this.position=this._generatePosition(b);this.positionAbs=this._convertPositionTo("absolute");this.feedback[0].style.left=this.position.left+"px";this.feedback[0].style.top=this.position.top+"px";this._raiseEvent(2,b);if(this.onDrag&&typeof this.onDrag==="function"){this.onDrag(this.data,this.position)}this._handleTarget();return false},_over:function(b,d,e){if(this.dropTarget){var f=false,c=this;a.each(this.dropTarget,function(g,h){f=c._overItem(h,b,d,e);if(f.over){return false}})}return f},_overItem:function(i,c,e,g){i=a(i);var b=i.offset(),f=i.outerHeight(),d=i.outerWidth(),h;if(!i||i[0]===this.element){return}var h=false;switch(this.tolerance){case"intersect":if(c.left+e>b.left&&c.left<b.left+d&&c.top+g>b.top&&c.top<b.top+f){h=true}break;case"fit":if(e+c.left<=b.left+d&&c.left>=b.left&&g+c.top<=b.top+f&&c.top>=b.top){h=true}break}return{over:h,target:i}},_handleTarget:function(){if(this.dropTarget){var b=this.feedback.offset(),c=this.feedback.outerWidth(),d=this.feedback.outerHeight(),e=this._over(b,c,d);if(e.over){if(this._targetEnterFired&&e.target.length>0&&this._oldtarget&&this._oldtarget.length>0&&e.target[0]!=this._oldtarget[0]){this._raiseEvent(4,{target:this._oldtarget});if(this.onDropTargetLeave&&typeof this.onDropTargetLeave==="function"){this.onDropTargetLeave(this._oldtarget)}}if(!this._targetEnterFired||(e.target.length>0&&this._oldtarget&&this._oldtarget.length>0&&e.target[0]!=this._oldtarget[0])){this._targetEnterFired=true;this._raiseEvent(3,{target:e.target});if(this.onDropTargetEnter&&typeof this.onDropTargetEnter==="function"){this.onDropTargetEnter(e.target)}}this._oldtarget=e.target}else{if(this._targetEnterFired){this._targetEnterFired=false;this._raiseEvent(4,{target:this._oldtarget||e.target});if(this.onDropTargetLeave&&typeof this.onDropTargetLeave==="function"){this.onDropTargetLeave(this._oldtarget||e.target)}}}}},_mouseStop:function(d){var e=false,b=this._fixPosition(),c={width:this.host.outerWidth(),height:this.host.outerHeight()};this.feedback[0].style.opacity=this._oldOpacity;if(!this.revert){this.feedback[0].style.zIndex=this._zIndexBackup}this._enableSelection(this.host);if(this.dropped){e=this.dropped;this.dropped=false}if((!this.element||!this.element.parentNode)&&this.feedback==="original"){return false}this._dropElement(b);this.feedback.removeClass(this.toThemeProperty("jqx-draggable-dragging"));this._raiseEvent(1,d);if(this.onDragEnd&&typeof this.onDragEnd==="function"){this.onDragEnd(this.data)}if(this.onTargetDrop&&typeof this.onTargetDrop==="function"&&this._over(b,c.width,c.height).over){this.onTargetDrop(this._over(b,c.width,c.height).target)}this._revertHandler();return false},_dropElement:function(b){if(this.dropAction==="default"&&this.feedback&&this.feedback[0]!==this.element&&this.feedback!=="original"){if(!this.revert){if(!(/(fixed|absolute)/).test(this.host.css("position"))){this.host.css("position","relative");var c=this._getRelativeOffset(this.host);b=this.position;b.left-=c.left;b.top-=c.top;this.element.style.left=b.left+"px";this.element.style.top=b.top+"px"}}}},_revertHandler:function(){if(this.revert||(a.isFunction(this.revert)&&this.revert())){var b=this;if(this._feedbackType!="original"){if(this.feedback!=null){if(this.dropAction!="none"){a(this.feedback).animate({left:b.originalPosition.left-b._offset.hostRelative.left,top:b.originalPosition.top-b._offset.hostRelative.top},parseInt(this.revertDuration,10),function(){if(b.feedback&&b.feedback[0]&&b._feedbackType!=="original"&&typeof b.feedback.remove==="function"){b.feedback.remove()}})}else{if(b.feedback&&b.feedback[0]&&b._feedbackType!=="original"&&typeof b.feedback.remove==="function"){b.feedback.remove()}}}}else{this.element.style.zIndex=this.dragZIndex;a(this.host).animate({left:b.originalPosition.left-b._offset.hostRelative.left,top:b.originalPosition.top-b._offset.hostRelative.top},parseInt(this.revertDuration,10),function(){b.element.style.zIndex=b._zIndexBackup})}}},_getHandle:function(b){var c;if(!this.handle){c=true}else{a(this.handle,this.host).find("*").andSelf().each(function(){if(this==b.target){c=true}})}return c},_createFeedback:function(c){var b;if(typeof this._feedbackType==="function"){b=this._feedbackType()}else{if(this._feedbackType==="clone"){b=this.host.clone().removeAttr("id")}else{b=this.host}}if(!(/(absolute|fixed)/).test(b.css("position"))){b.css("position","absolute")}if(this.appendTo[0]!==this.host.parent()[0]||b[0]!==this.element){var d={};b.css({left:this.host.offset().left-this._getParentOffset(this.host).left+this._getParentOffset(b).left,top:this.host.offset().top-this._getParentOffset(this.host).top+this._getParentOffset(b).top});b.appendTo(this.appendTo)}if(typeof this.initFeedback==="function"){this.initFeedback(b)}return b},_getParentOffset:function(c){var c=c||this.feedback;this._offsetParent=c.offsetParent();var b=this._offsetParent.offset();if(this._positionType=="absolute"&&this._scrollParent[0]!==document&&a.contains(this._scrollParent[0],this._offsetParent[0])){b.left+=this._scrollParent.scrollLeft();b.top+=this._scrollParent.scrollTop()}if((this._offsetParent[0]==document.body)||(this._offsetParent[0].tagName&&this._offsetParent[0].tagName.toLowerCase()=="html"&&a.jqx.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this._offsetParent.css("border-top-width"),10)||0),left:b.left+(parseInt(this._offsetParent.css("border-left-width"),10)||0)}},_getRelativeOffset:function(c){var d=this._scrollParent||c.parent();c=c||this.feedback;if(c.css("position")==="relative"){var b=this.host.position();return{top:b.top-(parseInt(c.css("top"),10)||0),left:b.left-(parseInt(c.css("left"),10)||0)}}else{return{top:0,left:0}}},_backupeMargins:function(){this.margins={left:(parseInt(this.host.css("margin-left"),10)||0),top:(parseInt(this.host.css("margin-top"),10)||0),right:(parseInt(this.host.css("margin-right"),10)||0),bottom:(parseInt(this.host.css("margin-bottom"),10)||0)}},_backupFeedbackProportions:function(){this.feedback[0].style.opacity=this.opacity;this._feedbackProportions={width:this.feedback.outerWidth(),height:this.feedback.outerHeight()}},_setRestricter:function(){if(this.restricter=="parent"){this.restricter=this.feedback[0].parentNode}if(this.restricter=="document"||this.restricter=="window"){this._handleNativeRestricter()}if(typeof this.restricter.left!=="undefined"&&typeof this.restricter.top!=="undefined"&&typeof this.restricter.height!=="undefined"&&typeof this.restricter.width!=="undefined"){this._restricter=[this.restricter.left,this.restricter.top,this.restricter.width,this.restricter.height]}else{if(!(/^(document|window|parent)$/).test(this.restricter)&&this.restricter.constructor!=Array){this._handleDOMParentRestricter()}else{if(this.restricter.constructor==Array){this._restricter=this.restricter}}}},_handleNativeRestricter:function(){this._restricter=[this.restricter==="document"?0:a(window).scrollLeft()-this._offset.relative.left-this._offset.parent.left,this.restricter==="document"?0:a(window).scrollTop()-this._offset.relative.top-this._offset.parent.top,(this.restricter==="document"?0:a(window).scrollLeft())+a(this.restricter==="document"?document:window).width()-this._feedbackProportions.width-this.margins.left,(this.restricter==="document"?0:a(window).scrollTop())+(a(this.restricter==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this._feedbackProportions.height-this.margins.top]},_handleDOMParentRestricter:function(){var d=a(this.restricter),b=d[0];if(!b){return}var c=(a(b).css("overflow")!=="hidden");this._restricter=[(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0),(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this._feedbackProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this._feedbackProportions.height-this.margins.top-this.margins.bottom];this._restrictiveContainer=d},_convertPositionTo:function(f,c){if(!c){c=this.position}var e,b,g;if(f==="absolute"){e=1}else{e=-1}if(this._positionType==="absolute"&&!(this._scrollParent[0]!=document&&a.contains(this._scrollParent[0],this._offsetParent[0]))){b=this._offsetParent}else{b=this._scrollParent}g=(/(html|body)/i).test(b[0].tagName);return this._getPosition(c,e,g,b)},_getPosition:function(c,d,e,b){return{top:(c.top+this._offset.relative.top*d+this._offset.parent.top*d-(a.jqx.browser.safari&&a.jqx.browser.version<526&&this._positionType=="fixed"?0:(this._positionType=="fixed"?-this._scrollParent.scrollTop():(e?0:b.scrollTop()))*d)),left:(c.left+this._offset.relative.left*d+this._offset.parent.left*d-(a.jqx.browser.safari&&a.jqx.browser.version<526&&this._positionType=="fixed"?0:(this._positionType=="fixed"?-this._scrollParent.scrollLeft():e?0:b.scrollLeft())*d))}},_generatePosition:function(f){var b=this._positionType=="absolute"&&!(this._scrollParent[0]!=document&&a.contains(this._scrollParent[0],this._offsetParent[0]))?this._offsetParent:this._scrollParent,i=(/(html|body)/i).test(b[0].tagName);var e=this._getMouseCoordinates(f),d=e.left,c=e.top;if(this.originalPosition){var h;if(this.restricter){if(this._restrictiveContainer){var g=this._restrictiveContainer.offset();h=[this._restricter[0]+g.left,this._restricter[1]+g.top,this._restricter[2]+g.left,this._restricter[3]+g.top]}else{h=this._restricter}if(e.left-this._offset.click.left<h[0]){d=h[0]+this._offset.click.left}if(e.top-this._offset.click.top<h[1]){c=h[1]+this._offset.click.top}if(e.left-this._offset.click.left>h[2]){d=h[2]+this._offset.click.left}if(e.top-this._offset.click.top>h[3]){c=h[3]+this._offset.click.top}}}return{top:(c-this._offset.click.top-this._offset.relative.top-this._offset.parent.top+(a.jqx.browser.safari&&a.jqx.browser.version<526&&this._positionType=="fixed"?0:(this._positionType=="fixed"?-this._scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this._offset.click.left-this._offset.relative.left-this._offset.parent.left+(a.jqx.browser.safari&&a.jqx.browser.version<526&&this._positionType=="fixed"?0:(this._positionType=="fixed"?-this._scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_raiseEvent:function(c,e){if(this.triggerEvents!=undefined&&this.triggerEvents==false){return}var b=this._events[c],d=a.Event(b),e=e||{};e.position=this.position;e.element=this.element;a.extend(e,this.data);e.feedback=this.feedback;d.args=e;return this.host.trigger(d)},disable:function(){this.disabled=true;this.host.addClass(this.toThemeProperty("jqx-draggable-disabled"));this._enableSelection(this.host)},enable:function(){this.disabled=false;this.host.removeClass(this.toThemeProperty("jqx-draggable-disabled"))},propertyChangedHandler:function(b,c,e,d){if(c==="dropTarget"){if(typeof d==="string"){b.dropTarget=a(d)}}else{if(c=="disabled"){if(d){b._enableSelection(b.host)}}else{if(c=="cursor"){b.host.css("cursor",b.cursor)}}}}})})(jqxBaseFramework);(function(a){window.jqxListBoxDragDrop=function(){a.extend(a.jqx._jqxListBox.prototype,{_hitTestBounds:function(b,c,e){var f=b.host.offset();var g=e-parseInt(f.top);var i=c-parseInt(f.left);var k=b._hitTest(i,g);if(g<0){return null}if(k!=null){var d=parseInt(f.left);var j=d+b.host.width();if(d<=c+k.width/2&&c<=j){return k}return null}if(b.items&&b.items.length>0){var h=b.items[b.items.length-1];if(b.groups.length<2){if(h.top+h.height+15>=g){return h}}}return null},_handleDragStart:function(d,c){var b=a.jqx.mobile.isTouchDevice();if(b){if(c.allowDrag){d.on(a.jqx.mobile.getTouchEventName("touchstart"),function(){a.jqx.mobile.setTouchScroll(false,c.element.id)})}}d.off("dragStart");d.on("dragStart",function(h){if(c.allowDrag&&!c.disabled){c.feedbackElement=a("<div style='z-index: 99999; position: absolute;'></div>");c.feedbackElement.addClass(c.toThemeProperty("jqx-listbox-feedback"));c.feedbackElement.appendTo(a(document.body));c.feedbackElement.hide();c.isDragging=true;c._dragCancel=false;var j=c._getMouseCoordinates(h);var g=c._hitTestBounds(c,j.left,j.top);var i=a.find(".jqx-listbox");c._listBoxes=i;a.each(c._listBoxes,function(){if(a.jqx.isHidden(a(this))){return}var k=a.data(this,"jqxListBox").instance;k._enableHover=k.enableHover;k.enableHover=false;a.jqx.mobile.setTouchScroll(false,c.element.id)});var f=function(){c._dragCancel=true;a(h.args.element).jqxDragDrop({triggerEvents:false});a(h.args.element).jqxDragDrop("cancelDrag");clearInterval(c._autoScrollTimer);a(h.args.element).jqxDragDrop({triggerEvents:true});a.each(c._listBoxes,function(){if(a.jqx.isHidden(a(this))){return}var k=a.data(this,"jqxListBox").instance;if(k._enableHover!=undefined){k.enableHover=k._enableHover;a.jqx.mobile.setTouchScroll(true,c.element.id)}})};if(g!=null&&!g.isGroup){c._dragItem=g;if(c.dragStart){var e=c.dragStart(g);if(e==false){f();return false}}if(g.disabled){f()}c._raiseEvent(4,{label:g.label,value:g.value,dragSourceElement:c.element,originalEvent:h.args})}else{if(g==null){f()}}}return false})},_handleDragging:function(d,c){var b=this;d.off("dragging");d.on("dragging",function(g){var e=g.args;if(c._dragCancel){return}var h=c._getMouseCoordinates(g);c._lastDraggingPosition=h;c._dragOverItem=null;c.feedbackElement.hide();var f=b._getBestMatchItem(c,h);a.each(c._listBoxes,function(){if(a.jqx.isHidden(a(this))){return true}var m=a(this).offset();var o=m.top+20;var i=a(this).height()+o-40;var k=m.left;var j=a(this).width();var p=k+j;var n=a.data(this,"jqxListBox").instance;var q=n._hitTestBounds(n,h.left,h.top);var l=n.vScrollInstance;if(!q){return}if(!n.allowDrop||n.disabled||!q.element){return}if(!f||!f.item||a(this)[0]!=f.item[0]){return}c._dragOverItem=q;c.feedbackElement.show();var r=a(q.element).offset().top+1;if(h.top>r+q.height/2){r=r+q.height}c.feedbackElement.css("top",r);c.feedbackElement.css("left",k);if(n.vScrollBar.css("visibility")!="visible"){c.feedbackElement.width(a(this).width())}else{c.feedbackElement.width(a(this).width()-20)}if(h.left>=k&&h.left<p){if(e.position.top<o&&e.position.top>=o-30){clearInterval(n._autoScrollTimer);if(l.value!=0){c.feedbackElement.hide()}n._autoScrollTimer=setInterval(function(){var s=n.scrollUp();if(!s){clearInterval(n._autoScrollTimer)}},100)}else{if(e.position.top>i&&e.position.top<i+30){clearInterval(n._autoScrollTimer);if((n.vScrollBar.css("visibility")!="hidden")&&l.value!=l.max){c.feedbackElement.hide()}n._autoScrollTimer=setInterval(function(){var s=n.scrollDown();if(!s){clearInterval(n._autoScrollTimer)}},100)}else{clearInterval(n._autoScrollTimer)}}}else{if(c._dragOverItem==null){c.feedbackElement.hide()}clearInterval(n._autoScrollTimer)}})})},_getBestMatchItem:function(n,l){var k={};var d=a.find(".jqx-listbox");for(var j=0;j<d.length;j++){var f=a(d[j]);if(a.jqx.isHidden(f)){continue}var h=parseInt(f.offset().left);var q=h+f.width();var p=f.jqxListBox("getInstance");clearInterval(p._autoScrollTimer);if(p._enableHover!=undefined){p.enableHover=p._enableHover;a.jqx.mobile.setTouchScroll(true,n.element.id)}if(n._dragItem!=null){var e=l.left>=h&&l.left<=q;var g=l.left-n._dragItem.width/2>=h&&l.left-n._dragItem.width/2<=q;var m=l.left-n._dragItem.width/2>=h&&l.left-n._dragItem.width/2<=q;if(e||g||m){var o=parseInt(f.offset().top);var b=o+f.height();if(l.top>=o&&l.top<=b){var c=(l.left+n._dragItem.width/2)-(h+q)/2;if(isNaN(k.distance)||k.distance>c){k={distance:c,item:f}}}}}}return k},_handleDragEnd:function(d,c){var b=this;var e=a.find(".jqx-listbox");d.off("dragEnd");d.on("dragEnd",function(g){clearInterval(c._autoScrollTimer);var r=a.jqx.mobile.isTouchDevice();var m=r?c._lastDraggingPosition:c._getMouseCoordinates(g);var h=a.find(".jqx-listbox");c.feedbackElement.remove();if(c._dragCancel){g.stopPropagation();return}var l=b._getBestMatchItem(c,m);var i=l.item;var v=c._dragItem;var q=null;if(i!=null&&i.length>0){var p=a.data(i[0],"jqxListBox").instance;var n=p.allowDrop;q=p.element;if(n&&!p.disabled){var p=a.data(i[0],"jqxListBox").instance;var s=p._hitTestBounds(p,m.left,m.top);s=c._dragOverItem;if(s!=null&&!s.isGroup){var u=true;if(c.dragEnd){u=c.dragEnd(v,s,g.args);if(u==false){a(g.args.element).jqxDragDrop({triggerEvents:false});a(g.args.element).jqxDragDrop("cancelDrag");clearInterval(c._autoScrollTimer);a(g.args.element).jqxDragDrop({triggerEvents:true});if(g.preventDefault){g.preventDefault()}if(g.stopPropagation){g.stopPropagation()}return false}if(u==undefined){u=true}}if(u){var f=s.visibleIndex;var k=function(){var x=s.visibleIndex;for(var w=x-2;w<=x+2;w++){if(p.items&&p.items.length>w){var y=p.items[w];if(y!=null){if(y.value==v.value){return y.visibleIndex}}}}return x};if(p.dropAction!="none"){if(s.element){var t=a(s.element).offset().top+1}else{var t=a(p.element).offset().top+1}if(p.content.find(".draggable").length>0){p.content.find(".draggable").jqxDragDrop("destroy")}if(m.top>t+s.height/2){p.insertAt(c._dragItem,s.index+1)}else{p.insertAt(c._dragItem,s.index)}if(c.dropAction=="default"){if(v.visibleIndex>0){c.clearSelection();c.selectIndex(v.visibleIndex-1)}c.removeItem(v,true)}var o=k();p.clearSelection();p.selectIndex(o)}}}else{if(p.dropAction!="none"){if(p.content.find(".draggable").length>0){p.content.find(".draggable").jqxDragDrop("destroy")}if(c.dragEnd){var u=c.dragEnd(c._dragItem,null,g.args);if(u==false){a(g.args.element).jqxDragDrop({triggerEvents:false});a(g.args.element).jqxDragDrop("cancelDrag");clearInterval(c._autoScrollTimer);a(g.args.element).jqxDragDrop({triggerEvents:true});if(g.preventDefault){g.preventDefault()}if(g.stopPropagation){g.stopPropagation()}return false}if(u==undefined){u=true}}p.addItem(c._dragItem);if(p.dropAction=="default"){if(v.visibleIndex>0){c.selectIndex(v.visibleIndex-1)}c.removeItem(v,true)}p.clearSelection();p.selectIndex(p.items.length-1)}}}}else{if(c.dragEnd){var j=c.dragEnd(v,g.args);if(false==j){if(g.preventDefault){g.preventDefault()}if(g.stopPropagation){g.stopPropagation()}return false}}}if(v!=null){c._raiseEvent(5,{label:v.label,value:v.value,index:v.index,dropTargetElement:q,originalEvent:g.args})}return false})},_enableDragDrop:function(){if(this.allowDrag&&this.host.jqxDragDrop){var c=this.content.find(".draggable");if(c.length>0){var b=this;c.jqxDragDrop({cursor:"arrow",revertDuration:0,appendTo:"body",dragZIndex:99999,revert:true,initFeedback:function(d){var f=a('<span style="white-space: nowrap;" class="'+b.toThemeProperty("jqx-fill-state-normal")+'">'+d.text()+"</span>");a(document.body).append(f);var e=f.width();f.remove();d.width(e+5);d.addClass(b.toThemeProperty("jqx-fill-state-pressed"))}});this._autoScrollTimer=null;b._dragItem=null;b._handleDragStart(c,b);b._handleDragging(c,b);b._handleDragEnd(c,b)}}},_getMouseCoordinates:function(b){this._isTouchDevice=a.jqx.mobile.isTouchDevice();if(this._isTouchDevice){var c=a.jqx.position(b.args);return{left:c.left,top:c.top}}else{return{left:b.args.pageX,top:b.args.pageY}}}})};window.jqxTreeDragDrop=function(){a.extend(a.jqx._jqxTree.prototype,{_hitTestBounds:function(b,g,f){var d=this;var e=null;if(b._visibleItems){var c=parseInt(b.host.offset().left);var h=b.host.outerWidth();a.each(b._visibleItems,function(j){if(g>=c&&g<c+h){if(this.top+5<f&&f<this.top+this.height){var i=a(this.element).parents("li:first");if(i.length>0){e=b.getItem(i[0]);if(e!=null){e.height=this.height;e.top=this.top;return false}}}}})}return e},_handleDragStart:function(d,c){if(c._dragOverItem){c._dragOverItem.titleElement.removeClass(c.toThemeProperty("jqx-fill-state-hover"))}var b=a.jqx.mobile.isTouchDevice();if(b){if(c.allowDrag){d.on(a.jqx.mobile.getTouchEventName("touchstart"),function(){a.jqx.mobile.setTouchScroll(false,"panel"+c.element.id)})}}d.off("dragStart");d.on("dragStart",function(g){c.feedbackElement=a("<div style='z-index: 99999; position: absolute;'></div>");c.feedbackElement.addClass(c.toThemeProperty("jqx-listbox-feedback"));c.feedbackElement.appendTo(a(document.body));c.feedbackElement.hide();c._dragCancel=false;var e=g.args.position;var f=a.find(".jqx-tree");c._trees=f;a.each(f,function(){var j=a.data(this,"jqxTree").instance;var l=j.host.find(".draggable");j._syncItems(l);if(j.allowDrag&&!j.disabled){var i=a(g.target).parents("li:first");if(i.length>0){var k=j.getItem(i[0]);if(k){c._dragItem=k;if(j.dragStart){var h=j.dragStart(k);if(h==false){c._dragCancel=true;a(g.args.element).jqxDragDrop({triggerEvents:false});a(g.args.element).jqxDragDrop("cancelDrag");clearInterval(c._autoScrollTimer);a(g.args.element).jqxDragDrop({triggerEvents:j});return false}}j._raiseEvent(8,{label:k.label,value:k.value,originalEvent:g.args})}}}});return false})},_getMouseCoordinates:function(b){this._isTouchDevice=a.jqx.mobile.isTouchDevice();if(this._isTouchDevice){var c=a.jqx.position(b.args);return{left:c.left,top:c.top}}else{return{left:b.args.pageX,top:b.args.pageY}}},_handleDragging:function(c,b){var c=this.host.find(".draggable");c.off("dragging");c.on("dragging",function(h){var f=h.args;var d=f.position;var e=b._trees;if(b._dragCancel){return}if(b._dragOverItem){b._dragOverItem.titleElement.removeClass(b.toThemeProperty("jqx-fill-state-hover"))}var i=true;var g=b._getMouseCoordinates(h);b._lastDraggingPosition=g;a.each(e,function(){if(a.jqx.isHidden(a(this))){return true}var m=a(this).offset();var q=m.top+20;var j=a(this).height()+q-40;var l=m.left;var k=a(this).width();var r=l+k;var p=a.data(this,"jqxTree").instance;if(p.disabled||!p.allowDrop){return}var n=p.vScrollInstance;var s=p._hitTestBounds(p,g.left,g.top);if(s!=null){if(b._dragOverItem){b._dragOverItem.titleElement.removeClass(p.toThemeProperty("jqx-fill-state-hover"))}b._dragOverItem=s;if(s.element){b.feedbackElement.show();var t=s.top;var o=g.top;b._dropPosition="before";if(o>t+s.height/3){t=s.top+s.height/2;b._dragOverItem.titleElement.addClass(b.toThemeProperty("jqx-fill-state-hover"));b.feedbackElement.hide();b._dropPosition="inside"}if(o>(s.top+s.height)-s.height/3){t=s.top+s.height;b._dragOverItem.titleElement.removeClass(b.toThemeProperty("jqx-fill-state-hover"));b.feedbackElement.show();b._dropPosition="after"}b.feedbackElement.css("top",t);var l=-2+parseInt(s.titleElement.offset().left);b.feedbackElement.css("left",l);b.feedbackElement.width(a(s.titleElement).width()+12)}}if(g.left>=l&&g.left<r){if(g.top+20>=q&&g.top<=q+p.host.height()){i=false}if(g.top<q&&g.top>=q-30){clearInterval(p._autoScrollTimer);if(n.value!=0){b.feedbackElement.hide()}p._autoScrollTimer=setInterval(function(){var v=p.panelInstance.scrollUp();var u=p.host.find(".draggable");p._syncItems(u);if(!v){clearInterval(p._autoScrollTimer)}},100)}else{if(g.top>j&&g.top<j+30){clearInterval(p._autoScrollTimer);if(n.value!=n.max){b.feedbackElement.hide()}p._autoScrollTimer=setInterval(function(){var v=p.panelInstance.scrollDown();var u=p.host.find(".draggable");p._syncItems(u);if(!v){clearInterval(p._autoScrollTimer)}},100)}else{clearInterval(p._autoScrollTimer)}}}else{clearInterval(p._autoScrollTimer)}});if(i){if(b.feedbackElement){b.feedbackElement.hide()}}})},_handleDragEnd:function(c,b){c.off("dragEnd");c.on("dragEnd",function(f){var d=b.host.find(".draggable");clearInterval(b._autoScrollTimer);var k=f.args.position;var s=b._trees;var t=null;var n=a.jqx.mobile.isTouchDevice();var g=n?b._lastDraggingPosition:b._getMouseCoordinates(f);b.feedbackElement.remove();if(b._dragCancel){return false}if(b._dragOverItem){b._dragOverItem.titleElement.removeClass(b.toThemeProperty("jqx-fill-state-hover"))}a.each(s,function(){if(a.jqx.isHidden(a(this))){return true}var y=parseInt(a(this).offset().left);var w=y+a(this).width();var v=a.data(this,"jqxTree").instance;clearInterval(v._autoScrollTimer);if(b._dragItem!=null){if(g.left>=y&&g.left<w){var x=parseInt(a(this).offset().top);var u=x+a(this).height();if(g.top>=x&&g.top<=u){t=a(this)}}}});var r=b._dragItem;if(t!=null&&t.length>0){var l=t.jqxTree("allowDrop");if(l){var m=a.data(t[0],"jqxTree").instance;var o=b._dragOverItem;if(o!=null&&b._dragOverItem.treeInstance.element.id==m.element.id){var q=true;if(b.dragEnd){q=b.dragEnd(r,o,f.args,b._dropPosition,t);if(q==false){a(f.args.element).jqxDragDrop({triggerEvents:false});a(f.args.element).jqxDragDrop("cancelDrag");clearInterval(b._autoScrollTimer);a(f.args.element).jqxDragDrop({triggerEvents:true})}if(undefined==q){q=true}}if(q){var e=function(){var u=b._dragItem.treeInstance;u._refreshMapping();u._updateItemsNavigation();u._render(true,false);if(u.checkboxes){u._updateCheckStates()}b._dragItem.treeInstance=m;b._syncItems(b._dragItem.treeInstance.host.find(".draggable"))};if(m.dropAction!="none"){if(b._dragItem.id!=b._dragOverItem.id){if(b._dropPosition=="inside"){m._drop(b._dragItem.element,b._dragOverItem.element,-1,m);e()}else{var i=0;if(b._dropPosition=="after"){i++}m._drop(b._dragItem.element,b._dragOverItem.parentElement,i+a(b._dragOverItem.element).index(),m);e()}}}m._render(true,false);var p=m.host.find(".draggable");b._syncItems(p);b._dragOverItem=null;b._dragItem=null;m._refreshMapping();m._updateItemsNavigation();m.selectedItem=null;m.selectItem(r.element);if(m.checkboxes){m._updateCheckStates()}m._render(true,false)}}else{if(m.dropAction!="none"){if(m.allowDrop){var q=true;if(b.dragEnd){q=b.dragEnd(r,o,f.args,b._dropPosition,t);if(q==false){a(f.args.element).jqxDragDrop({triggerEvents:false});a(f.args.element).jqxDragDrop("cancelDrag");clearInterval(b._autoScrollTimer);a(f.args.element).jqxDragDrop({triggerEvents:true})}if(undefined==q){q=true}}if(q){b._dragItem.parentElement=null;m._drop(b._dragItem.element,null,-1,m);var h=b._dragItem.treeInstance;h._refreshMapping();h._updateItemsNavigation();if(h.checkboxes){h._updateCheckStates()}var p=h.host.find(".draggable");b._syncItems(p);b._dragItem.treeInstance=m;m.items[m.items.length]=b._dragItem;m._render(true,false);m._refreshMapping();m.selectItem(r.element);m._updateItemsNavigation();var p=m.host.find(".draggable");m._syncItems(p);if(m.checkboxes){m._updateCheckStates()}b._dragOverItem=null;b._dragItem=null}}}}}}else{if(b.dragEnd){var j=b.dragEnd(r,f.args);if(false==j){return false}}}if(r!=null){b._raiseEvent(7,{label:r.label,value:r.value,originalEvent:f.args})}return false})},_drop:function(d,i,f,g){if(a(i).parents("#"+d.id).length>0){return}if(i!=null){if(i.id==d.id){return}}var h=this;if(g.element.innerHTML.indexOf("UL")){var e=g.host.find("ul:first")}if(i==undefined&&i==null){if(f==undefined||f==-1){e.append(d)}else{if(e.children("li").eq(f).length==0){e.children("li").eq(f-1).after(d)}else{if(e.children("li").eq(f)[0].id!=d.id){e.children("li").eq(f).before(d)}}}}else{if(f==undefined||f==-1){i=a(i);var c=i.find("ul:first");if(c.length==0){var b=a("<ul></ul>");a(i).append(b);c=i.find("ul:first");var j=g.itemMapping["id"+i[0].id].item;j.subtreeElement=c[0];j.hasItems=true;c.addClass(g.toThemeProperty("jqx-tree-dropdown"));c.append(d);d=c.find("li:first");j.parentElement=d}else{c.append(d)}}else{i=a(i);var c=i.find("ul:first");if(c.length==0){var b=a("<ul></ul>");a(i).append(b);c=i.find("ul:first");if(i){var j=g.itemMapping["id"+i[0].id].item;j.subtreeElement=c[0];j.hasItems=true}c.addClass(g.toThemeProperty("jqx-tree-dropdown"));c.append(d);d=c.find("li:first");j.parentElement=d}else{if(c.children("li").eq(f).length==0){c.children("li").eq(f-1).after(d)}else{if(c.children("li").eq(f)[0].id!=d.id){c.children("li").eq(f).before(d)}}}}}},_enableDragDrop:function(){if(this.allowDrag&&this.host.jqxDragDrop){var d=this.host.find(".draggable");var c=this;if(d.length>0){d.jqxDragDrop({cursor:"arrow",revertDuration:0,appendTo:"body",dragZIndex:99999,revert:true,initFeedback:function(e){var g=a('<span style="white-space: nowrap;" class="'+c.toThemeProperty("jqx-fill-state-normal")+'">'+e.text()+"</span>");a(document.body).append(g);var f=g.width();g.remove();e.width(f+5);e.addClass(c.toThemeProperty("jqx-fill-state-pressed"))}});var b=d.jqxDragDrop("isDestroyed");if(b===true){d.jqxDragDrop("_createDragDrop")}this._autoScrollTimer=null;c._dragItem=null;c._handleDragStart(d,c);c._handleDragging(d,c);c._handleDragEnd(d,c)}}}})}})(jqxBaseFramework);



/***/ }),

/***/ "./src/assets/jqwidgets/jqxpanel.js":
/*!******************************************!*\
  !*** ./src/assets/jqwidgets/jqxpanel.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.2.0 (2019-Sep)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxPanel","",{});a.extend(a.jqx._jqxPanel.prototype,{defineInstance:function(){var b={width:null,height:null,disabled:false,scrollBarSize:a.jqx.utilities.scrollBarSize,sizeMode:"fixed",autoUpdate:false,autoUpdateInterval:500,touchMode:"auto",horizontalScrollBarMax:null,verticalScrollBarMax:null,touchModeStyle:"auto",rtl:false,events:["layout"]};if(this===a.jqx._jqxPanel.prototype){return b}a.extend(true,this,b);return b},createInstance:function(b){this.render()},render:function(){var b=this;if(a.jqx.utilities.scrollBarSize!=15){this.scrollBarSize=a.jqx.utilities.scrollBarSize}this.host.addClass(this.toThemeProperty("jqx-panel"));this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.addClass(this.toThemeProperty("jqx-widget-content"));this.host.addClass(this.toThemeProperty("jqx-rc-all"));var c=a("<div id='panelWrapper' style='overflow: hidden; width: 100%; height: 100%; background-color: transparent; -webkit-appearance: none; outline: none; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'><div id='panelContent' style='-webkit-appearance: none; -moz-box-sizing: border-box; box-sizing: border-box; width: 100%; height: 100%; outline: none; border: none; padding: 0px; position: absolute; margin: 0px; align:left; valign:top; left: 0px; top: 0px;'/><div id='verticalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='horizontalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/></div>");if(!this.host.jqxButton){throw new Error("jqxPanel: Missing reference to jqxbuttons.js.")}if(!this.host.jqxScrollBar){throw new Error("jqxPanel: Missing reference to jqxscrollbar.js.")}var d=this.host.children();this._rtl=false;if(d.length>0&&d.css("direction")=="rtl"){this.rtl=true;this._rtl=true}this.host.wrapInner(c);var g=this.host.find("#verticalScrollBar");g[0].id=this.element.id+"verticalScrollBar";this.vScrollBar=g.jqxScrollBar({vertical:true,rtl:this.rtl,touchMode:this.touchMode,theme:this.theme});var f=this.host.find("#horizontalScrollBar");f[0].id=this.element.id+"horizontalScrollBar";this.hScrollBar=f.jqxScrollBar({vertical:false,rtl:this.rtl,touchMode:this.touchMode,theme:this.theme});this.content=this.host.find("#panelContent");this.wrapper=this.host.find("#panelWrapper");this.content.addClass(this.toThemeProperty("jqx-widget-content"));this.wrapper[0].id=this.wrapper[0].id+this.element.id;this.content[0].id=this.content[0].id+this.element.id;this.bottomRight=this.host.find("#bottomRight").addClass(this.toThemeProperty("jqx-panel-bottomright")).addClass(this.toThemeProperty("jqx-scrollbar-state-normal"));this.bottomRight[0].id="bottomRight"+this.element.id;this.vScrollBar.css("visibility","inherit");this.hScrollBar.css("visibility","inherit");this.vScrollInstance=a.data(this.vScrollBar[0],"jqxScrollBar").instance;this.hScrollInstance=a.data(this.hScrollBar[0],"jqxScrollBar").instance;var e=this;this.propertyChangeMap.disabled=function(h,j,i,k){e.vScrollBar.jqxScrollBar({disabled:e.disabled});e.hScrollBar.jqxScrollBar({disabled:e.disabled})};this.vScrollBar.jqxScrollBar({disabled:this.disabled});this.hScrollBar.jqxScrollBar({disabled:this.disabled});this._addHandlers();if(this.width==null){this.width=this.content.width()}if(this.height==null){this.height=this.content.height()}this._arrange();this.contentWidth=e.content[0].scrollWidth;this.contentHeight=e.content[0].scrollHeight;if(this.autoUpdate){e._autoUpdate()}this.propertyChangeMap.autoUpdate=function(h,j,i,k){if(e.autoUpdate){e._autoUpdate()}else{clearInterval(e.autoUpdateId);e.autoUpdateId=null}};this.addHandler(a(window),"unload",function(){if(e.autoUpdateId!=null){clearInterval(e.autoUpdateId);e.autoUpdateId=null;e.destroy()}});this._updateTouchScrolling();this._render()},hiddenParent:function(){return a.jqx.isHidden(this.host)},_updateTouchScrolling:function(){var b=this;if(this.touchMode==true){a.jqx.mobile.setMobileSimulator(this.element)}var c=this.isTouchDevice();if(c){a.jqx.mobile.touchScroll(this.element,b.vScrollInstance.max,function(f,e){if(b.vScrollBar.css("visibility")!="hidden"&&e!=null){var d=b.vScrollInstance.value;b.vScrollInstance.setPosition(e)}if(b.hScrollBar.css("visibility")!="hidden"&&f!=null){var d=b.hScrollInstance.value;b.hScrollInstance.setPosition(f)}},this.element.id,this.hScrollBar,this.vScrollBar);this._arrange()}this.vScrollBar.jqxScrollBar({touchMode:this.touchMode});this.hScrollBar.jqxScrollBar({touchMode:this.touchMode})},isTouchDevice:function(){var b=a.jqx.mobile.isTouchDevice();if(this.touchMode==true){b=true}else{if(this.touchMode==false){b=false}}if(b&&this.touchModeStyle!=false){this.scrollBarSize=a.jqx.utilities.touchScrollBarSize}return b},append:function(b){if(b!=null){this.content.append(b);this._arrange()}},setcontent:function(b){this.content[0].innerHTML=b;this._arrange();var c=this;setTimeout(function(){c._arrange()},100)},prepend:function(b){if(b!=null){this.content.prepend(b);this._arrange()}},clearcontent:function(){this.content.text("");this.content.children().remove();this._arrange()},remove:function(b){if(b!=null){a(b).remove();this._arrange()}},_autoUpdate:function(){var b=this;this.autoUpdateId=setInterval(function(){var d=b.content[0].scrollWidth;var c=b.content[0].scrollHeight;var e=false;if(b.contentWidth!=d){b.contentWidth=d;e=true}if(b.contentHeight!=c){b.contentHeight=c;e=true}if(e){b._arrange()}},this.autoUpdateInterval)},_addHandlers:function(){var b=this;this.addHandler(this.vScrollBar,"valueChanged",function(c){b._render(b)});this.addHandler(this.hScrollBar,"valueChanged",function(c){b._render(b)});this.addHandler(this.host,"mousewheel",function(c){b.wheel(c,b)});this.addHandler(this.wrapper,"scroll",function(c){if(b.wrapper[0].scrollTop!=0){b.wrapper[0].scrollTop=0}if(b.wrapper[0].scrollLeft!=0){b.wrapper[0].scrollLeft=0}});this.addHandler(this.host,"mouseleave",function(c){b.focused=false});this.addHandler(this.host,"focus",function(c){b.focused=true});this.addHandler(this.host,"blur",function(c){b.focused=false});this.addHandler(this.host,"mouseenter",function(c){b.focused=true});a.jqx.utilities.resize(this.host,function(){if(a.jqx.isHidden(b.host)){return}b._arrange(false)})},resize:function(c,b){this.width=c;this.height=b;this._arrange(false)},_removeHandlers:function(){var b=this;this.removeHandler(this.vScrollBar,"valueChanged");this.removeHandler(this.hScrollBar,"valueChanged");this.removeHandler(this.host,"mousewheel");this.removeHandler(this.host,"mouseleave");this.removeHandler(this.host,"focus");this.removeHandler(this.host,"blur");this.removeHandler(this.host,"mouseenter");this.removeHandler(this.wrapper,"scroll");this.removeHandler(a(window),"resize."+this.element.id)},wheel:function(d,c){var e=0;if(d.originalEvent&&a.jqx.browser.msie&&d.originalEvent.wheelDelta){e=d.originalEvent.wheelDelta/120}if(!d){d=window.event}if(d.wheelDelta){e=d.wheelDelta/120}else{if(d.detail){e=-d.detail/3}}if(e){var b=c._handleDelta(e);if(!b){if(d.preventDefault){d.preventDefault()}}if(!b){return b}else{return false}}if(d.preventDefault){d.preventDefault()}d.returnValue=false},scrollDown:function(){if(this.vScrollBar.css("visibility")=="hidden"){return false}var b=this.vScrollInstance;if(b.value+b.largestep<=b.max){b.setPosition(b.value+b.largestep);return true}else{if(b.value+b.largestep!=b.max){b.setPosition(b.max);return true}}return false},scrollUp:function(){if(this.vScrollBar.css("visibility")=="hidden"){return false}var b=this.vScrollInstance;if(b.value-b.largestep>=b.min){b.setPosition(b.value-b.largestep);return true}else{if(b.value-b.largestep!=b.min){b.setPosition(b.min);return true}}return false},_handleDelta:function(d){if(this.focused){var c=this.vScrollInstance.value;if(d<0){this.scrollDown()}else{this.scrollUp()}var b=this.vScrollInstance.value;if(c!=b){return false}}return true},_render:function(c){if(c==undefined){c=this}var b=c.vScrollInstance.value;var d=c.hScrollInstance.value;if(this.rtl){if(this.hScrollBar[0].style.visibility!="hidden"){if(this._rtl==false){d=c.hScrollInstance.max-d}else{d=-c.hScrollInstance.value}}}c.content.css({left:-d+"px",top:-b+"px"})},scrollTo:function(c,b){if(c==undefined||b==undefined){return}this.vScrollInstance.setPosition(b);this.hScrollInstance.setPosition(c)},getScrollHeight:function(){return this.vScrollInstance.max},getVScrollPosition:function(){return this.vScrollInstance.value},getScrollWidth:function(){return this.hScrollInstance.max},getHScrollPosition:function(){return this.hScrollInstance.value},_getScrollSize:function(){var b=this.scrollBarSize;if(isNaN(b)){b=parseInt(b);if(isNaN(b)){b="17px"}else{b=b+"px"}}if(this.isTouchDevice()){b=a.jqx.utilities.touchScrollBarSize}b=parseInt(b);return b},_getScrollArea:function(){var c=0;this.content.css("margin-right","0px");this.content.css("max-width","9999999px");if(a.jqx.browser.msie&&a.jqx.browser.version<10){c=parseInt(this.content.css("left"));this.content.css("left",0)}this.content.css("overflow","auto");if(this.rtl){this.content.css("direction","rtl")}var b=parseInt(this.content[0].scrollWidth);a.each(this.content.children(),function(){b=Math.max(b,this.scrollWidth);b=Math.max(b,a(this).outerWidth())});if(a.jqx.browser.msie&&a.jqx.browser.version<10){this.content.css("left",c)}var d=parseInt(this.content[0].scrollHeight);this.content.css("overflow","visible");if(a.jqx.browser.msie&&a.jqx.browser.version<9){var d=parseInt(this.content[0].scrollHeight);switch(this.sizeMode){case"wrap":var d=parseInt(this.content[0].scrollHeight);var b=parseInt(this.content[0].scrollWidth);break;case"horizontalWrap":case"horizontalwrap":break;case"verticalWrap":case"verticalwrap":var d=parseInt(this.content[0].scrollHeight);break}}if(this.rtl){this.content.css("direction","ltr")}return{width:b,height:d}},_arrange:function(h){if(h!==false){if(this.width!=null){this.host.width(this.width)}if(this.height!=null){this.host.height(this.height)}}var b=this._getScrollSize();var d=this.host.width();var l=this.host.height();var e=this._getScrollArea();var c=e.width;var k=e.height;var i=k-parseInt(Math.round(this.host.height()));var g=c-parseInt(Math.round(this.host.width()));if(this.horizontalScrollBarMax!=undefined){g=this.horizontalScrollBarMax}if(this.verticalScrollBarMax!=undefined){i=this.verticalScrollBarMax}var j=function(o,p){var n=5;if(p>n){o.vScrollBar.jqxScrollBar({max:p});o.vScrollBar.css("visibility","inherit")}else{o.vScrollBar.jqxScrollBar("setPosition",0);o.vScrollBar.css("visibility","hidden")}};var m=function(o,n){if(n>0){if(a.jqx.browser.msie&&a.jqx.browser.version<8){if(n-10<=b){o.hScrollBar.css("visibility","hidden");o.hScrollBar.jqxScrollBar("setPosition",0)}else{o.hScrollBar.jqxScrollBar({max:n+4});o.hScrollBar.css("visibility","inherit")}}else{o.hScrollBar.jqxScrollBar({max:n+4});o.hScrollBar.css("visibility","inherit")}}else{o.hScrollBar.css("visibility","hidden");o.hScrollBar.jqxScrollBar("setPosition",0)}};switch(this.sizeMode){case"wrap":this.host.width(c);this.host.height(k);this.vScrollBar.css("visibility","hidden");this.hScrollBar.css("visibility","hidden");return;case"horizontalWrap":case"horizontalwrap":this.host.width(c);this.hScrollBar.css("visibility","hidden");j(this,i);this._arrangeScrollbars(b,c,l);return;case"verticalWrap":case"verticalwrap":this.host.height(k);this.vScrollBar.css("visibility","hidden");m(this,g);this._arrangeScrollbars(b,d,l);return}j(this,i);var f=2;if(this.vScrollBar.css("visibility")!="hidden"){if(this.horizontalScrollBarMax==undefined){if((!this.isTouchDevice()&&g>0)||(g>0)){g+=b+f}}}m(this,g);if(this.hScrollBar.css("visibility")!="hidden"){this.vScrollBar.jqxScrollBar({max:i+b+f})}this._arrangeScrollbars(b,d,l)},_arrangeScrollbars:function(b,d,j){var i=this.vScrollBar[0].style.visibility!="hidden";var f=this.hScrollBar[0].style.visibility!="hidden";var h=2;var g=2;this.hScrollBar.height(b);this.hScrollBar.css({top:j-b-h-g+"px",left:"0px"});this.hScrollBar.width(d-h+"px");this.vScrollBar.width(b);this.vScrollBar.height(parseInt(j)-h+"px");this.vScrollBar.css({left:parseInt(d)-parseInt(b)-h-g+"px",top:"0px"});if(this.rtl){this.vScrollBar.css({left:"0px"});var c=i?parseInt(b)+"px":0;if(this.content.children().css("direction")!="rtl"){var e=false;if(a.jqx.browser.msie&&a.jqx.browser.version<8){e=true}if(!e){this.content.css("padding-left",c)}}}else{if(this.vScrollBar.css("visibility")!="hidden"){this.content.css("max-width",this.host.width()-this.vScrollBar.outerWidth())}}if((this.vScrollBar.css("visibility")!="hidden")&&(this.hScrollBar.css("visibility")!="hidden")){this.bottomRight.css("visibility","inherit");this.bottomRight.css({left:1+parseInt(this.vScrollBar.css("left")),top:1+parseInt(this.hScrollBar.css("top"))});this.bottomRight.width(parseInt(b)+3);this.bottomRight.height(parseInt(b)+3);if(this.rtl){this.bottomRight.css({left:"0px"});this.hScrollBar.css({left:b+g+"px"})}this.hScrollBar.width(d-(1*b)-h-g+"px");this.vScrollBar.height(parseInt(j)-h-b-g+"px")}else{this.bottomRight.css("visibility","hidden")}this.hScrollInstance.refresh();this.vScrollInstance.refresh()},destroy:function(){clearInterval(this.autoUpdateId);this.autoUpdateId=null;this.autoUpdate=false;a.jqx.utilities.resize(this.host,null,true);this._removeHandlers();this.removeHandler(a(window),"unload");this.vScrollBar.jqxScrollBar("destroy");this.hScrollBar.jqxScrollBar("destroy");this.host.remove()},_raiseevent:function(g,d,f){if(this.isInitialized!=undefined&&this.isInitialized==true){var c=this.events[g];var e=new a.Event(c);e.previousValue=d;e.currentValue=f;e.owner=this;var b=this.host.trigger(e);return b}},beginUpdateLayout:function(){this.updating=true},resumeUpdateLayout:function(){this.updating=false;this.vScrollInstance.value=0;this.hScrollInstance.value=0;this._arrange();this._render()},propertyChangedHandler:function(c,d,b,e){if(!c.isInitialized){return}if(d=="rtl"){this.vScrollBar.jqxScrollBar({rtl:e});this.hScrollBar.jqxScrollBar({rtl:e});c._arrange()}if(!c.updating){if(d=="scrollBarSize"||d=="width"||d=="height"){if(b!=e){c._arrange()}}}if(d=="touchMode"){if(e!="auto"){c._updateTouchScrolling()}}if(d=="theme"){c.host.removeClass();c.host.addClass(this.toThemeProperty("jqx-panel"));c.host.addClass(this.toThemeProperty("jqx-widget"));c.host.addClass(this.toThemeProperty("jqx-widget-content"));c.host.addClass(this.toThemeProperty("jqx-rc-all"));c.vScrollBar.jqxScrollBar({theme:this.theme});c.hScrollBar.jqxScrollBar({theme:this.theme});c.bottomRight.removeClass();c.bottomRight.addClass(this.toThemeProperty("jqx-panel-bottomright"));c.bottomRight.addClass(this.toThemeProperty("jqx-scrollbar-state-normal"));c.content.removeClass();c.content.addClass(this.toThemeProperty("jqx-widget-content"))}},invalidate:function(){if(a.jqx.isHidden(this.host)){return}this.refresh()},refresh:function(b){this._arrange()}})})(jqxBaseFramework);



/***/ }),

/***/ "./src/assets/jqwidgets/jqxscrollbar.js":
/*!**********************************************!*\
  !*** ./src/assets/jqwidgets/jqxscrollbar.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.2.0 (2019-Sep)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxScrollBar","",{});a.extend(a.jqx._jqxScrollBar.prototype,{defineInstance:function(){var b={height:null,width:null,vertical:false,min:0,max:1000,value:0,step:10,largestep:50,thumbMinSize:10,thumbSize:0,thumbStep:"auto",roundedCorners:"all",showButtons:true,disabled:false,touchMode:"auto",touchModeStyle:"auto",thumbTouchSize:0,_triggervaluechanged:true,rtl:false,areaDownCapture:false,areaUpCapture:false,_initialLayout:false,offset:0,reference:0,velocity:0,frame:0,timestamp:0,ticker:null,amplitude:0,target:0};if(this===a.jqx._jqxScrollBar.prototype){return b}a.extend(true,this,b);return b},createInstance:function(b){this.render()},render:function(){this._mouseup=new Date();var c=this;var d="<div id='jqxScrollOuterWrap' style='box-sizing: content-box; width:100%; height: 100%; align:left; border: 0px; valign:top; position: relative;'><div id='jqxScrollWrap' style='box-sizing: content-box; width:100%; height: 100%; left: 0px; top: 0px; align:left; valign:top; position: absolute;'><div id='jqxScrollBtnUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div><div id='jqxScrollAreaUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollThumb' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollAreaDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollBtnDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div></div></div>";if(a.jqx.utilities&&a.jqx.utilities.scrollBarButtonsVisibility=="hidden"){this.showButtons=false}if(c.WinJS){MSApp.execUnsafeLocalFunction(function(){c.host.html(d)})}else{this.element.innerHTML=d}if(this.width!=undefined&&parseInt(this.width)>0){this.host.width(parseInt(this.width))}if(this.height!=undefined&&parseInt(this.height)>0){this.host.height(parseInt(this.height))}this.isPercentage=false;if(this.width!=null&&this.width.toString().indexOf("%")!=-1){this.host.width(this.width);this.isPercentage=true}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){this.host.height(this.height);this.isPercentage=true}if(this.isPercentage){var e=this;a.jqx.utilities.resize(this.host,function(){e._arrange()},false)}this.thumbCapture=false;this.scrollOuterWrap=a(this.element.firstChild);this.scrollWrap=a(this.scrollOuterWrap[0].firstChild);this.btnUp=a(this.scrollWrap[0].firstChild);this.areaUp=a(this.btnUp[0].nextSibling);this.btnThumb=a(this.areaUp[0].nextSibling);this.arrowUp=a(this.btnUp[0].firstChild);this.areaDown=a(this.btnThumb[0].nextSibling);this.btnDown=a(this.areaDown[0].nextSibling);this.arrowDown=a(this.btnDown[0].firstChild);var b=this.element.id;this.btnUp[0].id="jqxScrollBtnUp"+b;this.btnDown[0].id="jqxScrollBtnDown"+b;this.btnThumb[0].id="jqxScrollThumb"+b;this.areaUp[0].id="jqxScrollAreaUp"+b;this.areaDown[0].id="jqxScrollAreaDown"+b;this.scrollWrap[0].id="jqxScrollWrap"+b;this.scrollOuterWrap[0].id="jqxScrollOuterWrap"+b;if(!this.host.jqxRepeatButton){throw new Error("jqxScrollBar: Missing reference to jqxbuttons.js.");return}this.btnUp.jqxRepeatButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});this.btnDown.jqxRepeatButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});this.btnDownInstance=a.data(this.btnDown[0],"jqxRepeatButton").instance;this.btnUpInstance=a.data(this.btnUp[0],"jqxRepeatButton").instance;this.areaUp.jqxRepeatButton({_scrollAreaButton:true,_ariaDisabled:true,overrideTheme:true});this.areaDown.jqxRepeatButton({_scrollAreaButton:true,_ariaDisabled:true,overrideTheme:true});this.btnThumb.jqxButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});this.propertyChangeMap.value=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.setPosition(parseFloat(i),true)}}};this.propertyChangeMap.width=function(f,h,g,i){if(f.width!=undefined&&parseInt(f.width)>0){f.host.width(parseInt(f.width));f._arrange()}};this.propertyChangeMap.height=function(f,h,g,i){if(f.height!=undefined&&parseInt(f.height)>0){f.host.height(parseInt(f.height));f._arrange()}};this.propertyChangeMap.theme=function(f,h,g,i){f.setTheme()};this.propertyChangeMap.max=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.max=parseInt(i);if(f.min>f.max){f.max=f.min+1}f._arrange();f.setPosition(f.value)}}};this.propertyChangeMap.min=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.min=parseInt(i);if(f.min>f.max){f.max=f.min+1}f._arrange();f.setPosition(f.value)}}};this.propertyChangeMap.disabled=function(f,h,g,i){if(g!=i){if(i){f.host.addClass(f.toThemeProperty("jqx-fill-state-disabled"))}else{f.host.removeClass(f.toThemeProperty("jqx-fill-state-disabled"))}f.btnUp.jqxRepeatButton("disabled",f.disabled);f.btnDown.jqxRepeatButton("disabled",f.disabled);f.btnThumb.jqxButton("disabled",f.disabled)}};this.propertyChangeMap.touchMode=function(f,h,g,i){if(g!=i){f._updateTouchBehavior();if(i===true){f.showButtons=false;f.refresh()}else{if(i===false){f.showButtons=true;f.refresh()}}}};this.propertyChangeMap.rtl=function(f,h,g,i){if(g!=i){f.refresh()}};this.buttonUpCapture=false;this.buttonDownCapture=false;this._updateTouchBehavior();this.setPosition(this.value);this._addHandlers();this.setTheme()},resize:function(c,b){this.width=c;this.height=b;this._arrange()},_updateTouchBehavior:function(){this.isTouchDevice=a.jqx.mobile.isTouchDevice();if(this.touchMode==true){if(a.jqx.browser.msie&&a.jqx.browser.version<9){this.setTheme();return}this.isTouchDevice=true;a.jqx.mobile.setMobileSimulator(this.btnThumb[0]);this._removeHandlers();this._addHandlers();this.setTheme()}else{if(this.touchMode==false){this.isTouchDevice=false}}},_addHandlers:function(){var j=this;var e=false;try{if(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch){e=true;this._touchSupport=true}}catch(f){}if(j.isTouchDevice||e){this.addHandler(this.btnThumb,a.jqx.mobile.getTouchEventName("touchend"),function(k){var l=j.vertical?j.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):j.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");var m=j.toThemeProperty("jqx-fill-state-pressed");j.btnThumb.removeClass(l);j.btnThumb.removeClass(m);if(!j.disabled){j.handlemouseup(j,k)}return false});this.addHandler(this.btnThumb,a.jqx.mobile.getTouchEventName("touchstart"),function(k){if(!j.disabled){if(j.touchMode==true){k.clientX=k.originalEvent.clientX;k.clientY=k.originalEvent.clientY}else{var l=k;if(l.originalEvent.touches&&l.originalEvent.touches.length){k.clientX=l.originalEvent.touches[0].clientX;k.clientY=l.originalEvent.touches[0].clientY}else{k.clientX=k.originalEvent.clientX;k.clientY=k.originalEvent.clientY}}j.handlemousedown(k);if(k.preventDefault){k.preventDefault()}}});a.jqx.mobile.touchScroll(this.element,j.max,function(q,p,l,k,m){if(j.host.css("visibility")=="visible"){if(j.touchMode==true){m.clientX=m.originalEvent.clientX;m.clientY=m.originalEvent.clientY}else{var o=m;if(o.originalEvent.touches&&o.originalEvent.touches.length){m.clientX=o.originalEvent.touches[0].clientX;m.clientY=o.originalEvent.touches[0].clientY}else{m.clientX=m.originalEvent.clientX;m.clientY=m.originalEvent.clientY}}var n=j.vertical?j.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):j.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");j.btnThumb.addClass(n);j.btnThumb.addClass(j.toThemeProperty("jqx-fill-state-pressed"));j.thumbCapture=true;j.handlemousemove(m)}},j.element.id,j.host,j.host)}if(!this.isTouchDevice){try{if(document.referrer!=""||window.frameElement){if(window.top!=null&&window.top!=window.self){var b=null;if(window.parent&&document.referrer){b=document.referrer}if(b&&b.indexOf(document.location.host)!=-1){var g=function(k){if(!j.disabled){j.handlemouseup(j,k)}};if(window.top.document.addEventListener){window.top.document.addEventListener("mouseup",g,false)}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmouseup",g)}}}}}}catch(i){}var c="click mouseup mousedown";this.addHandler(this.btnDown,c,function(l){var k=j.step;if(Math.abs(j.max-j.min)<=k){k=1}if(j.rtl&&!j.vertical){k=-j.step}switch(l.type){case"click":if(j.buttonDownCapture&&!j.isTouchDevice){if(!j.disabled){j.setPosition(j.value+k)}}else{if(!j.disabled&&j.isTouchDevice){j.setPosition(j.value+k)}}break;case"mouseup":if(!j.btnDownInstance.base.disabled&&j.buttonDownCapture){j.buttonDownCapture=false;j.btnDown.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j.btnDown.removeClass(j.toThemeProperty("jqx-fill-state-pressed"));j._removeArrowClasses("pressed","down");j.handlemouseup(j,l);j.setPosition(j.value+k);return false}break;case"mousedown":if(!j.btnDownInstance.base.disabled){j.buttonDownCapture=true;j.btnDown.addClass(j.toThemeProperty("jqx-fill-state-pressed"));j.btnDown.addClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j._addArrowClasses("pressed","down");return false}break}});this.addHandler(this.btnUp,c,function(l){var k=j.step;if(Math.abs(j.max-j.min)<=k){k=1}if(j.rtl&&!j.vertical){k=-j.step}switch(l.type){case"click":if(j.buttonUpCapture&&!j.isTouchDevice){if(!j.disabled){j.setPosition(j.value-k)}}else{if(!j.disabled&&j.isTouchDevice){j.setPosition(j.value-k)}}break;case"mouseup":if(!j.btnUpInstance.base.disabled&&j.buttonUpCapture){j.buttonUpCapture=false;j.btnUp.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j.btnUp.removeClass(j.toThemeProperty("jqx-fill-state-pressed"));j._removeArrowClasses("pressed","up");j.handlemouseup(j,l);j.setPosition(j.value-k);return false}break;case"mousedown":if(!j.btnUpInstance.base.disabled){j.buttonUpCapture=true;j.btnUp.addClass(j.toThemeProperty("jqx-fill-state-pressed"));j.btnUp.addClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j._addArrowClasses("pressed","up");return false}break}})}var h="click";if(this.isTouchDevice){h=a.jqx.mobile.getTouchEventName("touchend")}this.addHandler(this.areaUp,h,function(l){if(!j.disabled){var k=j.largestep;if(j.rtl&&!j.vertical){k=-j.largestep}j.setPosition(j.value-k);return false}});this.addHandler(this.areaDown,h,function(l){if(!j.disabled){var k=j.largestep;if(j.rtl&&!j.vertical){k=-j.largestep}j.setPosition(j.value+k);return false}});this.addHandler(this.areaUp,"mousedown",function(k){if(!j.disabled){j.areaUpCapture=true;return false}});this.addHandler(this.areaDown,"mousedown",function(k){if(!j.disabled){j.areaDownCapture=true;return false}});this.addHandler(this.btnThumb,"mousedown dragstart",function(k){if(k.type==="dragstart"){return false}if(!j.disabled){j.handlemousedown(k)}if(k.preventDefault){k.preventDefault()}});this.addHandler(a(document),"mouseup."+this.element.id,function(k){if(!j.disabled){j.handlemouseup(j,k)}});if(!this.isTouchDevice){this.mousemoveFunc=function(k){if(!j.disabled){j.handlemousemove(k)}};this.addHandler(a(document),"mousemove."+this.element.id,this.mousemoveFunc);this.addHandler(a(document),"mouseleave."+this.element.id,function(k){if(!j.disabled){j.handlemouseleave(k)}});this.addHandler(a(document),"mouseenter."+this.element.id,function(k){if(!j.disabled){j.handlemouseenter(k)}});if(!j.disabled){this.addHandler(this.btnUp,"mouseenter mouseleave",function(k){if(k.type==="mouseenter"){if(!j.disabled&&!j.btnUpInstance.base.disabled&&j.touchMode!=true){j.btnUp.addClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnUp.addClass(j.toThemeProperty("jqx-fill-state-hover"));j._addArrowClasses("hover","up")}}else{if(!j.disabled&&!j.btnUpInstance.base.disabled&&j.touchMode!=true){j.btnUp.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnUp.removeClass(j.toThemeProperty("jqx-fill-state-hover"));j._removeArrowClasses("hover","up")}}});var d=j.toThemeProperty("jqx-scrollbar-thumb-state-hover");if(!j.vertical){d=j.toThemeProperty("jqx-scrollbar-thumb-state-hover-horizontal")}this.addHandler(this.btnThumb,"mouseenter mouseleave",function(k){if(k.type==="mouseenter"){if(!j.disabled&&j.touchMode!=true){j.btnThumb.addClass(d);j.btnThumb.addClass(j.toThemeProperty("jqx-fill-state-hover"))}}else{if(!j.disabled&&j.touchMode!=true){j.btnThumb.removeClass(d);j.btnThumb.removeClass(j.toThemeProperty("jqx-fill-state-hover"))}}});this.addHandler(this.btnDown,"mouseenter mouseleave",function(k){if(k.type==="mouseenter"){if(!j.disabled&&!j.btnDownInstance.base.disabled&&j.touchMode!=true){j.btnDown.addClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnDown.addClass(j.toThemeProperty("jqx-fill-state-hover"));j._addArrowClasses("hover","down")}}else{if(!j.disabled&&!j.btnDownInstance.base.disabled&&j.touchMode!=true){j.btnDown.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnDown.removeClass(j.toThemeProperty("jqx-fill-state-hover"));j._removeArrowClasses("hover","down")}}})}}},destroy:function(){var b=this.btnUp;var f=this.btnDown;var d=this.btnThumb;var c=this.scrollWrap;var h=this.areaUp;var e=this.areaDown;this.arrowUp.remove();delete this.arrowUp;this.arrowDown.remove();delete this.arrowDown;e.removeClass();h.removeClass();f.removeClass();b.removeClass();d.removeClass();b.jqxRepeatButton("destroy");f.jqxRepeatButton("destroy");h.jqxRepeatButton("destroy");e.jqxRepeatButton("destroy");d.jqxButton("destroy");var g=a.data(this.element,"jqxScrollBar");this._removeHandlers();this.btnUp=null;this.btnDown=null;this.scrollWrap=null;this.areaUp=null;this.areaDown=null;this.scrollOuterWrap=null;delete this.mousemoveFunc;delete this.btnDownInstance;delete this.btnUpInstance;delete this.scrollOuterWrap;delete this.scrollWrap;delete this.btnDown;delete this.areaDown;delete this.areaUp;delete this.btnDown;delete this.btnUp;delete this.btnThumb;delete this.propertyChangeMap.value;delete this.propertyChangeMap.min;delete this.propertyChangeMap.max;delete this.propertyChangeMap.touchMode;delete this.propertyChangeMap.disabled;delete this.propertyChangeMap.theme;delete this.propertyChangeMap;if(g){delete g.instance}this.host.removeData();this.host.remove();delete this.host;delete this.set;delete this.get;delete this.call;delete this.element},_removeHandlers:function(){this.removeHandler(this.btnUp,"mouseenter");this.removeHandler(this.btnDown,"mouseenter");this.removeHandler(this.btnThumb,"mouseenter");this.removeHandler(this.btnUp,"mouseleave");this.removeHandler(this.btnDown,"mouseleave");this.removeHandler(this.btnThumb,"mouseleave");this.removeHandler(this.btnUp,"click");this.removeHandler(this.btnDown,"click");this.removeHandler(this.btnDown,"mouseup");this.removeHandler(this.btnUp,"mouseup");this.removeHandler(this.btnDown,"mousedown");this.removeHandler(this.btnUp,"mousedown");this.removeHandler(this.areaUp,"mousedown");this.removeHandler(this.areaDown,"mousedown");this.removeHandler(this.areaUp,"click");this.removeHandler(this.areaDown,"click");this.removeHandler(this.btnThumb,"mousedown");this.removeHandler(this.btnThumb,"dragstart");this.removeHandler(a(document),"mouseup."+this.element.id);if(!this.mousemoveFunc){this.removeHandler(a(document),"mousemove."+this.element.id)}else{this.removeHandler(a(document),"mousemove."+this.element.id,this.mousemoveFunc)}this.removeHandler(a(document),"mouseleave."+this.element.id);this.removeHandler(a(document),"mouseenter."+this.element.id);var b=this},_addArrowClasses:function(c,b){if(c=="pressed"){c="selected"}if(c!=""){c="-"+c}if(this.vertical){if(b=="up"||b==undefined){this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-up"+c))}if(b=="down"||b==undefined){this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-down"+c))}}else{if(b=="up"||b==undefined){this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-left"+c))}if(b=="down"||b==undefined){this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-right"+c))}}},_removeArrowClasses:function(c,b){if(c=="pressed"){c="selected"}if(c!=""){c="-"+c}if(this.vertical){if(b=="up"||b==undefined){this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-up"+c))}if(b=="down"||b==undefined){this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-down"+c))}}else{if(b=="up"||b==undefined){this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-left"+c))}if(b=="down"||b==undefined){this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-right"+c))}}},setTheme:function(){var o=this.btnUp;var m=this.btnDown;var p=this.btnThumb;var e=this.scrollWrap;var g=this.areaUp;var h=this.areaDown;var f=this.arrowUp;var i=this.arrowDown;this.scrollWrap[0].className=this.toThemeProperty("jqx-reset");this.scrollOuterWrap[0].className=this.toThemeProperty("jqx-reset");var k=this.toThemeProperty("jqx-reset");this.areaDown[0].className=k;this.areaUp[0].className=k;var d=this.toThemeProperty("jqx-scrollbar")+" "+this.toThemeProperty("jqx-widget")+" "+this.toThemeProperty("jqx-widget-content");this.host.addClass(d);if(this.isTouchDevice){this.host.addClass(this.toThemeProperty("jqx-scrollbar-mobile"))}m[0].className=this.toThemeProperty("jqx-scrollbar-button-state-normal");o[0].className=this.toThemeProperty("jqx-scrollbar-button-state-normal");var q="";if(this.vertical){f[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-up");i[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-down");q=this.toThemeProperty("jqx-scrollbar-thumb-state-normal")}else{f[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-left");i[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-right");q=this.toThemeProperty("jqx-scrollbar-thumb-state-normal-horizontal")}q+=" "+this.toThemeProperty("jqx-fill-state-normal");p[0].className=q;if(this.disabled){e.addClass(this.toThemeProperty("jqx-fill-state-disabled"));e.removeClass(this.toThemeProperty("jqx-scrollbar-state-normal"))}else{e.addClass(this.toThemeProperty("jqx-scrollbar-state-normal"));e.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))}if(this.roundedCorners=="all"){this.host.addClass(this.toThemeProperty("jqx-rc-all"));if(this.vertical){var j=a.jqx.cssroundedcorners("top");j=this.toThemeProperty(j);o.addClass(j);var c=a.jqx.cssroundedcorners("bottom");c=this.toThemeProperty(c);m.addClass(c)}else{var n=a.jqx.cssroundedcorners("left");n=this.toThemeProperty(n);o.addClass(n);var l=a.jqx.cssroundedcorners("right");l=this.toThemeProperty(l);m.addClass(l)}}else{var b=a.jqx.cssroundedcorners(this.roundedCorners);b=this.toThemeProperty(b);o.addClass(b);m.addClass(b)}var b=a.jqx.cssroundedcorners(this.roundedCorners);b=this.toThemeProperty(b);if(!p.hasClass(b)){p.addClass(b)}if(o.css("display")==="none"){this.showButtons=false;this.touchModeStyle=true;p.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-normal-touch"))}if(this.isTouchDevice&&this.touchModeStyle!=false){this.showButtons=false;p.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-normal-touch"))}},isScrolling:function(){if(this.thumbCapture==undefined||this.buttonDownCapture==undefined||this.buttonUpCapture==undefined||this.areaDownCapture==undefined||this.areaUpCapture==undefined){return false}return this.thumbCapture||this.buttonDownCapture||this.buttonUpCapture||this.areaDownCapture||this.areaUpCapture},track:function(){var d,b,e,c;d=Date.now();b=d-this.timestamp;this.timestamp=d;e=this.offset-this.frame;this.frame=this.offset;c=1000*e/(1+b);this.velocity=0.2*c+0.2*this.velocity},handlemousedown:function(e){if(this.thumbCapture==undefined||this.thumbCapture==false){this.thumbCapture=true;var c=this.btnThumb;if(c!=null){c.addClass(this.toThemeProperty("jqx-fill-state-pressed"));if(this.vertical){c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"))}else{c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal"))}}}var d=this;function b(f){d.reference=parseInt(d.btnThumb[0].style.top);d.offset=parseInt(d.btnThumb[0].style.top);if(!d.vertical){d.reference=parseInt(d.btnThumb[0].style.left);d.offset=parseInt(d.btnThumb[0].style.left)}d.velocity=d.amplitude=0;d.frame=d.offset;d.timestamp=Date.now();clearInterval(d.ticker);d.ticker=setInterval(function(){d.track()},100)}if(this.thumbCapture&&a.jqx.scrollAnimation){b(e)}this.dragStartX=e.clientX;this.dragStartY=e.clientY;this.dragStartValue=this.value},toggleHover:function(c,b){},refresh:function(){this._arrange()},_setElementPosition:function(c,b,d){if(!isNaN(b)){if(parseInt(c[0].style.left)!=parseInt(b)){c[0].style.left=b+"px"}}if(!isNaN(d)){if(parseInt(c[0].style.top)!=parseInt(d)){c[0].style.top=d+"px"}}},_setElementTopPosition:function(b,c){if(!isNaN(c)){b[0].style.top=c+"px"}},_setElementLeftPosition:function(c,b){if(!isNaN(b)){c[0].style.left=b+"px"}},handlemouseleave:function(e){var b=this.btnUp;var d=this.btnDown;if(this.buttonDownCapture||this.buttonUpCapture){b.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));d.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));this._removeArrowClasses("pressed")}if(this.thumbCapture!=true){return}var c=this.btnThumb;var f=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");c.removeClass(f);c.removeClass(this.toThemeProperty("jqx-fill-state-pressed"))},handlemouseenter:function(e){var b=this.btnUp;var d=this.btnDown;if(this.buttonUpCapture){b.addClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));b.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this._addArrowClasses("pressed","up")}if(this.buttonDownCapture){d.addClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));d.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this._addArrowClasses("pressed","down")}if(this.thumbCapture!=true){return}var c=this.btnThumb;if(this.vertical){c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"))}else{c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal"))}c.addClass(this.toThemeProperty("jqx-fill-state-pressed"))},handlemousemove:function(b){var i=this.btnUp;var e=this.btnDown;var d=0;if(e==null||i==null){return}if(i!=null&&e!=null&&this.buttonDownCapture!=undefined&&this.buttonUpCapture!=undefined){if(this.buttonDownCapture&&b.which==d){e.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));e.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this._removeArrowClasses("pressed","down");this.buttonDownCapture=false}else{if(this.buttonUpCapture&&b.which==d){i.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));i.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this._removeArrowClasses("pressed","up");this.buttonUpCapture=false}}}if(this.thumbCapture!=true){return false}var k=this.btnThumb;if(b.which==d&&!this.isTouchDevice&&!this._touchSupport){this.thumbCapture=false;this._arrange();var j=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");k.removeClass(j);k.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));return true}if(b.preventDefault!=undefined){b.preventDefault()}if(b.originalEvent!=null){b.originalEvent.mouseHandled=true}if(b.stopPropagation!=undefined){b.stopPropagation()}var l=0;try{if(!this.vertical){l=b.clientX-this.dragStartX}else{l=b.clientY-this.dragStartY}var f=this._btnAndThumbSize;if(!this._btnAndThumbSize){f=(this.vertical)?i.height()+e.height()+k.height():i.width()+e.width()+k.width()}var g=(this.max-this.min)/(this.scrollBarSize-f);if(this.thumbStep=="auto"){l*=g}else{l*=g;if(Math.abs(this.dragStartValue+l-this.value)>=parseInt(this.thumbStep)){var c=Math.round(parseInt(l)/this.thumbStep)*this.thumbStep;if(this.rtl&&!this.vertical){this.setPosition(this.dragStartValue-c)}else{this.setPosition(this.dragStartValue+c)}return false}else{return false}}var c=l;if(this.rtl&&!this.vertical){c=-l}this.setPosition(this.dragStartValue+c);this.offset=parseInt(k[0].style.left);if(this.vertical){this.offset=parseInt(k[0].style.top)}}catch(h){alert(h)}return false},handlemouseup:function(j,b){var g=false;if(this.thumbCapture){this.thumbCapture=false;var i=this.btnThumb;var h=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");i.removeClass(h);i.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));g=true;this._mouseup=new Date();if(a.jqx.scrollAnimation){var d=this;function f(){var k,o;if(d.amplitude){k=Date.now()-d.timestamp;o=-d.amplitude*Math.exp(-k/325);if(o>0.5||o<-0.5){var l=(d.max-d.min)/(d.scrollBarSize-d._btnAndThumbSize);var n=l*(d.target+o);var m=n;if(d.rtl&&!d.vertical){m=-n}d.setPosition(d.dragStartValue+m);requestAnimationFrame(f)}else{var l=(d.max-d.min)/(d.scrollBarSize-d._btnAndThumbSize);var n=l*(d.target+o);var m=n;if(d.rtl&&!d.vertical){m=-n}d.setPosition(d.dragStartValue+m)}}}clearInterval(this.ticker);if(this.velocity>25||this.velocity<-25){this.amplitude=0.8*this.velocity;this.target=Math.round(this.offset+this.amplitude);if(!this.vertical){this.target-=this.reference}else{this.target-=this.reference}this.timestamp=Date.now();requestAnimationFrame(f)}}}this.areaDownCapture=this.areaUpCapture=false;if(this.buttonUpCapture||this.buttonDownCapture){var e=this.btnUp;var c=this.btnDown;this.buttonUpCapture=false;this.buttonDownCapture=false;e.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));c.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));e.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));c.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this._removeArrowClasses("pressed");g=true;this._mouseup=new Date()}if(g){if(b.preventDefault!=undefined){b.preventDefault()}if(b.originalEvent!=null){b.originalEvent.mouseHandled=true}if(b.stopPropagation!=undefined){b.stopPropagation()}}},setPosition:function(b,g){var d=this.element;if(b==undefined||b==NaN){b=this.min}if(b>=this.max){b=this.max}if(b<this.min){b=this.min}if(this.value!==b||g==true){if(b==this.max){var c=new a.Event("complete");this.host.trigger(c)}var f=this.value;if(this._triggervaluechanged){var e=new a.Event("valueChanged");e.previousValue=this.value;e.currentValue=b}this.value=b;this._positionelements();if(this._triggervaluechanged){this.host.trigger(e)}if(this.valueChanged){this.valueChanged({currentValue:this.value,previousvalue:f})}}return b},val:function(b){var c=function(e){for(var d in e){if(e.hasOwnProperty(d)){return false}}if(typeof b=="number"){return false}if(typeof b=="date"){return false}if(typeof b=="boolean"){return false}if(typeof b=="string"){return false}return true};if(c(b)||arguments.length==0){return this.value}else{this.setPosition(b);return b}},_getThumbSize:function(c){var b=this.max-this.min;var d=0;if(b>1){d=(c/(b+c)*c)}else{if(b==1){d=c-1}else{if(b==0){d=c}}}if(this.thumbSize>0){d=this.thumbSize}if(d<this.thumbMinSize){d=this.thumbMinSize}return Math.min(d,c)},_positionelements:function(){var g=this.element;var n=this.areaUp;var e=this.areaDown;var h=this.btnUp;var f=this.btnDown;var o=this.btnThumb;var b=this.scrollWrap;var p=this._height?this._height:this.host.height();var c=this._width?this._width:this.host.width();var l=(!this.vertical)?p:c;if(!this.showButtons){l=0}var m=(!this.vertical)?c:p;this.scrollBarSize=m;var d=this._getThumbSize(m-2*l);d=Math.floor(d);if(d<this.thumbMinSize){d=this.thumbMinSize}if(p==NaN||p<10){p=10}if(c==NaN||c<10){c=10}l+=2;this.btnSize=l;var i=this._btnAndThumbSize;if(!this._btnAndThumbSize){var i=(this.vertical)?2*this.btnSize+o.outerHeight():2*this.btnSize+o.outerWidth();i=Math.round(i)}var k=(m-i)/(this.max-this.min)*(this.value-this.min);if(this.rtl&&!this.vertical){k=(m-i)/(this.max-this.min)*(this.max-this.value-this.min)}k=Math.round(k);if(k<0){k=0}if(this.vertical){var j=m-k-i;if(j<0){j=0}e[0].style.height=j+"px";n[0].style.height=k+"px";this._setElementTopPosition(n,l);this._setElementTopPosition(o,l+k);this._setElementTopPosition(e,l+k+d)}else{n[0].style.width=k+"px";if(m-k-i>=0){e[0].style.width=m-k-i+"px"}else{e[0].style.width="0px"}this._setElementLeftPosition(n,l);this._setElementLeftPosition(o,l+k);this._setElementLeftPosition(e,2+l+k+d)}},_arrange:function(){var m=this;if(m._initialLayout){m._initialLayout=false;return}if(m.min>m.max){var x=m.min;m.min=m.max;m.max=x}if(m.min<0){var k=m.max-m.min;m.min=0;m.max=k}var d=m.element;var g=m.areaUp;var t=m.areaDown;var c=m.btnUp;var l=m.btnDown;var u=m.btnThumb;var p=m.scrollWrap;var n=parseInt(m.element.style.height);var q=parseInt(m.element.style.width);if(m.isPercentage){var n=m.host.height();var q=m.host.width()}if(isNaN(n)){n=0}if(isNaN(q)){q=0}m._width=q;m._height=n;var b=(!m.vertical)?n:q;if(!m.showButtons){b=0}c[0].style.width=b+"px";c[0].style.height=b+"px";l[0].style.width=b+"px";l[0].style.height=b+"px";if(m.vertical){p[0].style.width=q+2+"px"}else{p[0].style.height=n+2+"px"}m._setElementPosition(c,0,0);var s=b+2;if(m.vertical){m._setElementPosition(l,0,n-s)}else{m._setElementPosition(l,q-s,0)}var f=(!m.vertical)?q:n;m.scrollBarSize=f;var h=m._getThumbSize(f-2*s);h=Math.floor(h-2);if(h<m.thumbMinSize){h=m.thumbMinSize}var o=false;if(m.isTouchDevice&&m.touchModeStyle!=false){o=true}if(!m.vertical){u[0].style.width=h+"px";u[0].style.height=n+"px";if(o&&m.thumbTouchSize!==0){u.css({height:m.thumbTouchSize+"px"});u.css("margin-top",(m.host.height()-m.thumbTouchSize)/2)}}else{u[0].style.width=q+"px";u[0].style.height=h+"px";if(o&&m.thumbTouchSize!==0){u.css({width:m.thumbTouchSize+"px"});u.css("margin-left",(m.host.width()-m.thumbTouchSize)/2)}}if(n==NaN||n<10){n=10}if(q==NaN||q<10){q=10}m.btnSize=b;var e=(m.vertical)?2*s+(2+parseInt(u[0].style.height)):2*s+(2+parseInt(u[0].style.width));e=Math.round(e);m._btnAndThumbSize=e;var w=(f-e)/(m.max-m.min)*(m.value-m.min);if(m.rtl&&!m.vertical){w=(f-e)/(m.max-m.min)*(m.max-m.value-m.min)}w=Math.round(w);if(isNaN(w)||w<0||w===-Infinity||w===Infinity){w=0}if(m.vertical){var v=(f-w-e);if(v<0){v=0}t[0].style.height=v+"px";t[0].style.width=q+"px";g[0].style.height=w+"px";g[0].style.width=q+"px";var i=parseInt(m.element.style.height);if(m.isPercentage){i=m.host.height()}u[0].style.visibility="inherit";if(i-3*parseInt(b)<0||i<e){u[0].style.visibility="hidden"}m._setElementPosition(g,0,s);m._setElementPosition(u,0,s+w);m._setElementPosition(t,0,s+w+h)}else{if(w>0){g[0].style.width=w+"px"}if(n>0){g[0].style.height=n+"px"}var j=(f-w-e);if(j<0){j=0}t[0].style.width=j+"px";t[0].style.height=n+"px";var r=parseInt(m.element.style.width);if(m.isPercentage){r=m.host.width()}u[0].style.visibility="inherit";if((r-3*parseInt(b)<0)||(r<e)){u[0].style.visibility="hidden"}m._setElementPosition(g,s,0);m._setElementPosition(u,s+w,0);m._setElementPosition(t,s+w+h,0)}}})})(jqxBaseFramework);



/***/ }),

/***/ "./src/assets/jqwidgets/jqxtree.js":
/*!*****************************************!*\
  !*** ./src/assets/jqwidgets/jqxtree.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.2.0 (2019-Sep)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxTree","",{});a.extend(a.jqx._jqxTree.prototype,{defineInstance:function(){var b={items:new Array(),width:null,height:null,easing:"easeInOutCirc",animationShowDuration:"fast",animationHideDuration:"fast",treeElements:new Array(),disabled:false,itemsMember:"",displayMember:"",valueMember:"",enableHover:true,keyboardNavigation:true,enableKeyboardNavigation:true,toggleMode:"dblclick",source:null,checkboxes:false,checkSize:16,toggleIndicatorSize:18,hasThreeStates:false,selectedItem:null,touchMode:"auto",allowDrag:true,allowDrop:true,searchMode:"startswithignorecase",incrementalSearch:true,incrementalSearchDelay:700,animationHideDelay:0,submitCheckedItems:false,dragStart:null,dragEnd:null,rtl:false,dropAction:"default",events:["expand","collapse","select","initialized","added","removed","checkChange","dragEnd","dragStart","itemClick"],aria:{"aria-activedescendant":{name:"getActiveDescendant",type:"string"},"aria-disabled":{name:"disabled",type:"boolean"}}};if(this===a.jqx._jqxTree.prototype){return b}a.extend(true,this,b);return b},createInstance:function(c){var b=this;this.host.attr("role","tree");this.host.attr("data-role","treeview");this.enableKeyboardNavigation=this.keyboardNavigation;this.propertyChangeMap.disabled=function(f,h,g,i){if(b.disabled){b.host.addClass(b.toThemeProperty("jqx-tree-disabled"))}else{b.host.removeClass(b.toThemeProperty("jqx-tree-disabled"))}a.jqx.aria(b,"aria-disabled",i)};if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)}else{if(this.width!=undefined&&!isNaN(this.width)){this.host.width(this.width)}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)}else{if(this.height!=undefined&&!isNaN(this.height)){this.host.height(this.height)}}if(this.width!=null&&this.width.toString().indexOf("%")!=-1){this.host.width(this.width)}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){this.host.height(this.height)}if(!this.host.attr("tabindex")){this.host.attr("tabIndex",1)}if(this.disabled){this.host.addClass(this.toThemeProperty("jqx-tree-disabled"));a.jqx.aria(this,"aria-disabled",true)}if(this.host.jqxDragDrop){window.jqxTreeDragDrop()}this.originalInnerHTML=this.element.innerHTML;this.createdTree=false;if(this.element.innerHTML.indexOf("UL")){var e=this.host.find("ul:first");if(e.length>0){this.createTree(e[0]);this.createdTree=true}}if(this.source!=null){var d=this.loadItems(this.source);this.element.innerHTML=d;var e=this.host.find("ul:first");if(e.length>0){this.createTree(e[0]);this.createdTree=true}}this._itemslength=this.items.length;if(!this.createdTree){if(this.host.find("ul").length==0){this.host.append(a("<ul></ul>"));var e=this.host.find("ul:first");if(e.length>0){this.createTree(e[0]);this.createdTree=true}this.createdTree=true}}if(this.createdTree==true){this._render();this._handleKeys()}this._updateCheckLayout()},checkItems:function(f,h){var e=this;if(f!=null){var d=0;var g=false;var b=0;var i=a(f.element).find("li");b=i.length;a.each(i,function(j){var k=e.itemMapping["id"+this.id].item;if(k.checked!=false){if(k.checked==null){g=true}d++}});if(f!=h){if(d==b){this.checkItem(f.element,true,"tree")}else{if(d>0){this.checkItem(f.element,null,"tree")}else{this.checkItem(f.element,false,"tree")}}}else{var c=h.checked;var i=a(h.element).find("li");a.each(i,function(){var j=e.itemMapping["id"+this.id].item;e.checkItem(this,c,"tree")})}this.checkItems(this._parentItem(f),h)}else{var c=h.checked;var i=a(h.element).find("li");a.each(i,function(){var j=e.itemMapping["id"+this.id].item;e.checkItem(this,c,"tree")})}},_getMatches:function(e,f){if(e==undefined||e.length==0){return -1}var c=this.items;var b=new Array();for(var d=0;d<c.length;d++){if(this._isVisible(c[d])&&!c[d].disabled){b.push(c[d])}}c=b;if(f!=undefined){c=c.slice(f)}var g=new Array();a.each(c,function(j){var k=this.label;if(!k){k=""}var h=a.jqx.string.startsWithIgnoreCase(k.toString(),e);if(h){g.push({id:this.id,element:this.element})}});return g},_handleKeys:function(){var b=this;this.addHandler(this.host,"keydown",function(d){var s=d.keyCode;if(b.keyboardNavigation||b.enableKeyboardNavigation){if(b.selectedItem!=null){var l=b.selectedItem.element;if(b.incrementalSearch&&(!(s>=33&&s<=40))){var t=-1;if(!b._searchString){b._searchString=""}if((s==8||s==46)&&b._searchString.length>=1){b._searchString=b._searchString.substr(0,b._searchString.length-1)}var h=String.fromCharCode(s);var o=(!isNaN(parseInt(h)));var n=false;if((s>=65&&s<=97)||o||s==8||s==32||s==46){if(!d.shiftKey){h=h.toLocaleLowerCase()}if(s!=8&&s!=32&&s!=46){if(!(b._searchString.length>0&&b._searchString.substr(0,1)==h)){b._searchString+=h}}if(s==32){b._searchString+=" "}b._searchTime=new Date();var r=b.selectedItem;if(r){var g=r.id;var m=-1;for(var k=0;k<b.items.length;k++){if(b.items[k].id==g){m=k+1;break}}var f=b._getMatches(b._searchString,m);if(f.length==0||(f.length>0&&f[0].id==g)){var f=b._getMatches(b._searchString)}}else{var f=b._getMatches(b._searchString)}if(f.length>0){var r=b.selectedItem;if(b.selectedItem&&b.selectedItem.id!=f[0].id){b.clearSelection();b.selectItem(f[0].element,"keyboard")}b._lastSearchString=b._searchString}}if(b._searchTimer!=undefined){clearTimeout(b._searchTimer)}if(s==27||s==13){b._searchString="";b._lastSearchString=""}b._searchTimer=setTimeout(function(){b._searchString="";b._lastSearchString=""},500);if(t>=0){return}if(n){return false}}switch(s){case 32:if(b.checkboxes){b.fromKey=true;var q=a(b.selectedItem.checkBoxElement).jqxCheckBox("checked");b.checkItem(b.selectedItem.element,!q,"tree");if(b.hasThreeStates){b.checkItems(b.selectedItem,b.selectedItem)}return false}return true;case 33:var j=b._getItemsOnPage();var p=b.selectedItem;for(var k=0;k<j;k++){p=b._prevVisibleItem(p)}if(p!=null){b.selectItem(p.element,"keyboard");b.ensureVisible(p.element)}else{b.selectItem(b._firstItem().element,"keyboard");b.ensureVisible(b._firstItem().element)}return false;case 34:var j=b._getItemsOnPage();var c=b.selectedItem;for(var k=0;k<j;k++){c=b._nextVisibleItem(c)}if(c!=null){b.selectItem(c.element,"keyboard");b.ensureVisible(c.element)}else{b.selectItem(b._lastItem().element,"keyboard");b.ensureVisible(b._lastItem().element)}return false;case 37:case 39:if((s==37&&!b.rtl)||(s==39&&b.rtl)){if(b.selectedItem.hasItems&&b.selectedItem.isExpanded){b.collapseItem(l)}else{var e=b._parentItem(b.selectedItem);if(e!=null){b.selectItem(e.element,"keyboard");b.ensureVisible(e.element)}}}if((s==39&&!b.rtl)||(s==37&&b.rtl)){if(b.selectedItem.hasItems){if(!b.selectedItem.isExpanded){b.expandItem(l)}else{var c=b._nextVisibleItem(b.selectedItem);if(c!=null){b.selectItem(c.element,"keyboard");b.ensureVisible(c.element)}}}}return false;case 13:if(b.selectedItem.hasItems){if(b.selectedItem.isExpanded){b.collapseItem(l)}else{b.expandItem(l)}}return false;case 36:b.selectItem(b._firstItem().element,"keyboard");b.ensureVisible(b._firstItem().element);return false;case 35:b.selectItem(b._lastItem().element,"keyboard");b.ensureVisible(b._lastItem().element);return false;case 38:var p=b._prevVisibleItem(b.selectedItem);if(p!=null){b.selectItem(p.element,"keyboard");b.ensureVisible(p.element)}return false;case 40:var c=b._nextVisibleItem(b.selectedItem);if(c!=null){b.selectItem(c.element,"keyboard");b.ensureVisible(c.element)}return false}}}})},_firstItem:function(){var e=null;var d=this;var g=this.host.find("ul:first");var f=a(g).find("li");for(var c=0;c<=f.length-1;c++){var b=f[c];e=this.itemMapping["id"+b.id].item;if(d._isVisible(e)){return e}}return null},_lastItem:function(){var e=null;var d=this;var g=this.host.find("ul:first");var f=a(g).find("li");for(var c=f.length-1;c>=0;c--){var b=f[c];e=this.itemMapping["id"+b.id].item;if(d._isVisible(e)){return e}}return null},_parentItem:function(d){if(d==null||d==undefined){return null}var c=d.parentElement;if(!c){return null}var b=null;a.each(this.items,function(){if(this.element==c){b=this;return false}});return b},_nextVisibleItem:function(c){if(c==null||c==undefined){return null}var b=c;while(b!=null){b=b.nextItem;if(this._isVisible(b)&&!b.disabled){return b}}return null},_prevVisibleItem:function(c){if(c==null||c==undefined){return null}var b=c;while(b!=null){b=b.prevItem;if(this._isVisible(b)&&!b.disabled){return b}}return null},_isVisible:function(c){if(c==null||c==undefined){return false}if(!this._isElementVisible(c.element)){return false}var b=this._parentItem(c);if(b==null){return true}if(b!=null){if(!this._isElementVisible(b.element)){return false}if(b.isExpanded){while(b!=null){b=this._parentItem(b);if(b!=null&&!this._isElementVisible(b.element)){return false}if(b!=null&&!b.isExpanded){return false}}}else{return false}}return true},_getItemsOnPage:function(){var d=0;var c=this.panel.jqxPanel("getVScrollPosition");var b=parseInt(this.host.height());var f=0;var e=this._firstItem();if(parseInt(a(e.element).height())>0){while(f<=b){f+=parseInt(a(e.element).outerHeight());d++}}return d},_isElementVisible:function(b){if(b==null){return false}if(a(b).css("display")!="none"&&a(b).css("visibility")!="hidden"){return true}return false},refresh:function(c){if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)}else{if(this.width!=undefined&&!isNaN(this.width)){this.host.width(this.width)}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)}else{if(this.height!=undefined&&!isNaN(this.height)){this.host.height(this.height)}}if(this.panel){if(this.width!=null&&this.width.toString().indexOf("%")!=-1){var b=this;this.panel.jqxPanel("width","100%");b.removeHandler(a(window),"resize.jqxtree"+b.element.id);b.addHandler(a(window),"resize.jqxtree"+b.element.id,function(){b._calculateWidth()})}else{this.panel.jqxPanel("width",this.host.width())}this.panel.jqxPanel("_arrange")}this._calculateWidth();if(a.jqx.isHidden(this.host)){var b=this;if(this._hiddenTimer){clearInterval(this._hiddenTimer)}this._hiddenTimer=setInterval(function(){if(!a.jqx.isHidden(b.host)){clearInterval(b._hiddenTimer);b._calculateWidth()}},100)}if(c!=true){if(this.checkboxes){this._updateCheckLayout(null)}}},resize:function(c,b){this.width=c;this.height=b;this.refresh()},loadItems:function(c){if(c==null){return}var b=this;this.items=new Array();var d="<ul>";a.map(c,function(e){if(e==undefined){return null}d+=b._parseItem(e)});d+="</ul>";return d},_parseItem:function(m){var g="";if(m==undefined){return null}var j=m.label;var l=m.value;if(!m.label&&m.html){j=m.html}if(this.displayMember!=undefined&&this.displayMember!=""){j=m[this.displayMember]}if(this.valueMember!=undefined&&this.valueMember!=""){l=m[this.valueMember]}if(!j){j="Item"}if(typeof m==="string"){j=m}var h=false;if(m.expanded!=undefined&&m.expanded){h=true}var f=false;if(m.locked!=undefined&&m.locked){f=true}var d=false;if(m.selected!=undefined&&m.selected){d=true}var e=false;if(m.disabled!=undefined&&m.disabled){e=true}var k=false;if(m.checked!=undefined&&m.checked){k=true}var i=m.icon;var c=m.iconsize;g+="<li";if(h){g+=' item-expanded="true" '}if(f){g+=' item-locked="true" '}if(e){g+=' item-disabled="true" '}if(d){g+=' item-selected="true" '}if(c){g+=' item-iconsize="'+m.iconsize+'" '}if(i!=null&&i!=undefined){g+=' item-icon="'+i+'" '}if(m.label&&!m.html){g+=' item-label="'+j+'" '}if(l!=null){g+=' item-value="'+l+'" '}if(m.checked!=undefined){g+=' item-checked="'+k+'" '}var b="";if(m.id!=undefined){b=m.id;g+=' id="'+b+'" '}else{b=this.createID();g+=' id="'+b+'" '}g+=">"+j;if(m.items){g+=this.loadItems(m.items)}else{if(this.itemsMember!=undefined&&this.itemsMember!=""){if(m[this.itemsMember]){g+=this.loadItems(m[this.itemsMember])}}}if(!this._valueList){this._valueList=new Array()}this._valueList[b]=m.value;g+="</li>";return g},ensureVisible:function(f){if(f==null||f==undefined){return}if(this.panel){var c=this.panel.jqxPanel("getVScrollPosition");var g=this.panel.jqxPanel("getHScrollPosition");var b=parseInt(this.host.height());var e=a(f).find(".jqx-tree-item:first");var h=a(e).position().top;if(c===0&&h===0){return}var d=this.panel.jqxPanel("hScrollBar").outerHeight();if(h<=c||h>=b+c){this.panel.jqxPanel("scrollTo",g,h-b+a(e).outerHeight()+d)}}},_syncItems:function(c){this._visibleItems=new Array();var b=this;a.each(c,function(){var e=a(this);if(e.css("display")!="none"){var d=e.outerHeight();if(e.height()>0){var f=parseInt(e.offset().top);b._visibleItems[b._visibleItems.length]={element:this,top:f,height:d,bottom:f+d}}}})},hitTest:function(h,g){var d=this;var b=this;var f=null;var e=this.host.find(".jqx-item");this._syncItems(e);if(b._visibleItems){var c=parseInt(b.host.offset().left);var i=b.host.outerWidth();a.each(b._visibleItems,function(k){if(h>=c&&h<c+i){if(this.top+5<g&&g<this.top+this.height){var j=a(this.element).parents("li:first");if(j.length>0){f=b.getItem(j[0]);if(f!=null){f.height=this.height;f.top=this.top;return false}}}}})}return f},addBefore:function(b,d,c){return this.addBeforeAfter(b,d,true,c)},addAfter:function(b,d,c){return this.addBeforeAfter(b,d,false,c)},addBeforeAfter:function(n,q,p,m){var k=this;var l=new Array();if(q&&q.treeInstance!=undefined){q=q.element}if(!a.isArray(n)){l[0]=n}else{l=n}var g="";var o=this;a.each(l,function(){g+=o._parseItem(this)});var b=a(g);if(k.element.innerHTML.indexOf("UL")){var h=k.host.find("ul:first")}if(q==undefined&&q==null){h.append(b)}else{if(p){a(q).before(b)}else{a(q).after(b)}}var d=b;for(var i=0;i<d.length;i++){this._createItem(d[i]);var c=a(d[i]).find("li");if(c.length>0){for(var f=0;f<c.length;f++){this._createItem(c[f])}}}var e=function(j){o._refreshMapping(false);o._updateItemsNavigation();if(j&&o.allowDrag&&o._enableDragDrop){o._enableDragDrop()}if(o.selectedItem!=null){a(o.selectedItem.titleElement).addClass(o.toThemeProperty("jqx-fill-state-pressed"));a(o.selectedItem.titleElement).addClass(o.toThemeProperty("jqx-tree-item-selected"))}};if(m==false){e(true);this._raiseEvent("4",{items:this.getItems()});return}e(false);o._render();this._raiseEvent("4",{items:this.getItems()});if(o.checkboxes){o._updateCheckLayout(null)}},addTo:function(n,g,f){var b=this;var i=new Array();if(g&&g.treeInstance!=undefined){g=g.element}if(!a.isArray(n)){i[0]=n}else{i=n}var m="";var t=this;a.each(i,function(){m+=t._parseItem(this)});var c=a(m);if(b.element.innerHTML.indexOf("UL")){var q=b.host.find("ul:first")}if(g==undefined&&g==null){q.append(c)}else{g=a(g);var k=g.find("ul:first");if(k.length==0){var s=a("<ul></ul>");a(g).append(s);k=g.find("ul:first");var r=b.itemMapping["id"+g[0].id].item;r.subtreeElement=k[0];r.hasItems=true;k.addClass(b.toThemeProperty("jqx-tree-dropdown"));if(t.rtl){k.addClass(b.toThemeProperty("jqx-tree-dropdown-rtl"))}k.append(c);var d=k.find("li:first");r.parentElement=d}else{k.append(c)}}var p=c;for(var h=0;h<p.length;h++){this._createItem(p[h]);var e=a(p[h]).find("li");if(e.length>0){for(var o=0;o<e.length;o++){this._createItem(e[o])}}}var l=function(j){t._refreshMapping(false);t._updateItemsNavigation();if(j&&t.allowDrag&&t._enableDragDrop){t._enableDragDrop()}if(t.selectedItem!=null){a(t.selectedItem.titleElement).addClass(t.toThemeProperty("jqx-fill-state-pressed"));a(t.selectedItem.titleElement).addClass(t.toThemeProperty("jqx-tree-item-selected"))}};if(f==false){l(true);this._raiseEvent("4",{items:this.getItems()});return}l(false);t._render();if(t.checkboxes){t._updateCheckLayout(null)}this._raiseEvent("4",{items:this.getItems()})},updateItem:function(e,i){var h=e.treeInstance!=undefined?e:this.getItem(e);if(!h){var d=e;e=i;i=d;var h=e.treeInstance!=undefined?e:this.getItem(e)}if(h){if(typeof(i)==="string"){i={label:i}}if(i.value){h.value=i.value}if(i.label){h.label=i.label;a.jqx.utilities.html(a(h.titleElement),i.label);var b=a.jqx.browser.msie&&a.jqx.browser.version<8;if(b){a(document.body).append(this._measureItem);this._measureItem.html(a(h.titleElement).text());var g=this._measureItem.width();if(h.icon){g+=20}if(a(a(h.titleElement).find("img")).length>0){g+=20}a(h.titleElement).css("max-width",g+"px");this._measureItem.remove()}}if(i.icon){if(a(h.element).children(".itemicon").length>0){a(h.element).find(".itemicon")[0].src=i.icon}else{var c=i.iconsize;if(!c){c=16}var f=a('<img width="'+c+'" height="'+c+'" style="float: left;" class="itemicon" src="'+i.icon+'"/>');a(h.titleElement).prepend(f);f.css("margin-right","6px");if(this.rtl){f.css("margin-right","0px");f.css("margin-left","6px");f.css("float","right")}}}if(i.expanded){this.expandItem(h)}if(i.disabled){this.disableItem(h)}if(i.selected){this.selectItem(h)}return true}return false},removeItem:function(b,d){if(b==undefined||b==null){return}if(b.treeInstance!=undefined){b=b.element}var e=this;var h=b.id;var c=-1;var f=this.getItem(b);if(f){c=this.items.indexOf(f);if(c!=-1){(function g(p){var n=-1;n=this.items.indexOf(p);if(n!=-1){this.items.splice(n,1)}var k=a(p.element).find("li");var j=k.length;var o=this;var l=new Array();if(j>0){a.each(k,function(i){var q=o.itemMapping["id"+this.id].item;l.push(q)});for(var m=0;m<l.length;m++){g.apply(this,[l[m]])}}}).apply(this,[f])}}if(this.host.find("#"+b.id).length>0){a(b).remove()}if(d==false){this._raiseEvent("5");return}e._updateItemsNavigation();if(e.allowDrag&&e._enableDragDrop){e._render(true,false)}else{e._render()}if(e.selectedItem!=null){if(e.selectedItem.element==b){a(e.selectedItem.titleElement).removeClass(e.toThemeProperty("jqx-fill-state-pressed"));a(e.selectedItem.titleElement).removeClass(e.toThemeProperty("jqx-tree-item-selected"));e.selectedItem=null}}this._raiseEvent("5");if(e.checkboxes){e._updateCheckLayout(null)}},clear:function(){this.items=new Array();this.itemMapping=new Array();var b=this.host.find("ul:first");if(b.length>0){b[0].innerHTML=""}this.selectedItem=null},disableItem:function(b){if(b==null){return false}if(b.treeInstance!=undefined){b=b.element}var c=this;a.each(c.items,function(){var d=this;if(d.element==b){d.disabled=true;a(d.titleElement).addClass(c.toThemeProperty("jqx-fill-state-disabled"));a(d.titleElement).addClass(c.toThemeProperty("jqx-tree-item-disabled"));if(c.checkboxes&&d.checkBoxElement){a(d.checkBoxElement).jqxCheckBox({disabled:true})}return false}})},_updateInputSelection:function(){if(this.input){if(this.selectedItem==null){this.input.val("")}else{var c=this.selectItem.value;if(c==null){c=this.selectedItem.label}this.input.val(c)}if(this.checkboxes){var b=this.getCheckedItems();if(this.submitCheckedItems){var f="";for(var d=0;d<b.length;d++){var e=b[d].value;if(e==null){e=b[d].label}if(d==b.length-1){f+=e}else{f+=e+","}}this.input.val(f)}}}},getCheckedItems:function(){var b=new Array();var c=this;a.each(c.items,function(){var d=this;if(d.checked){b.push(d)}});return b},getUncheckedItems:function(){var b=new Array();var c=this;a.each(c.items,function(){var d=this;if(!d.checked){b.push(d)}});return b},checkAll:function(){var b=this;a.each(b.items,function(){var c=this;if(!c.disabled){c.checked=true;a(c.checkBoxElement).jqxCheckBox("_setState",true)}});this._raiseEvent("6",{element:this,checked:true})},uncheckAll:function(){var b=this;a.each(b.items,function(){var c=this;if(!c.disabled){c.checked=false;a(c.checkBoxElement).jqxCheckBox("_setState",false)}});this._raiseEvent("6",{element:this,checked:false})},checkItem:function(d,f,b){if(d==null){return false}if(f===undefined){f=true}if(d.treeInstance!=undefined){d=d.element}var e=this;var c=false;var g=null;a.each(e.items,function(){var h=this;if(h.element==d&&!h.disabled){c=true;h.checked=f;g=h;a(h.checkBoxElement).jqxCheckBox({checked:f});return false}});if(c){this._raiseEvent("6",{element:d,checked:f});this._updateInputSelection()}if(b==undefined){if(g){if(this.hasThreeStates){this.checkItems(g,g)}}}},uncheckItem:function(b){this.checkItem(b,false)},enableItem:function(b){if(b==null){return false}if(b.treeInstance!=undefined){b=b.element}var c=this;a.each(c.items,function(){var d=this;if(d.element==b){d.disabled=false;a(d.titleElement).removeClass(c.toThemeProperty("jqx-fill-state-disabled"));a(d.titleElement).removeClass(c.toThemeProperty("jqx-tree-item-disabled"));if(c.checkboxes&&d.checkBoxElement){a(d.checkBoxElement).jqxCheckBox({disabled:false})}return false}})},enableAll:function(){var b=this;a.each(b.items,function(){var c=this;c.disabled=false;a(c.titleElement).removeClass(b.toThemeProperty("jqx-tree-item-disabled"));a(c.titleElement).removeClass(b.toThemeProperty("jqx-fill-state-disabled"));if(b.checkboxes&&c.checkBoxElement){a(c.checkBoxElement).jqxCheckBox({disabled:false})}})},lockItem:function(b){if(b==null){return false}var c=this;a.each(c.items,function(){var d=this;if(d.element==b){d.locked=true;return false}})},unlockItem:function(b){if(b==null){return false}var c=this;a.each(c.items,function(){var d=this;if(d.element==b){d.locked=false;return false}})},getItems:function(){return this.items},getItem:function(b){if(b==null||b==undefined){return null}if(this.itemMapping["id"+b.id]){var c=this.itemMapping["id"+b.id].item;return c}return null},isExpanded:function(b){if(b==null||b==undefined){return false}var c=this.itemMapping["id"+b.id].item;if(c!=null){return c.isExpanded}return false},isSelected:function(b){if(b==null||b==undefined){return false}var c=this.itemMapping["id"+b.id].item;if(c!=null){return c==this.selectedItem}return false},getPrevItem:function(c){var d=this.getItem(c);if(c.treeInstance!=undefined){d=c}var b=this._prevVisibleItem(d);return b},getNextItem:function(c){var d=this.getItem(c);if(c.treeInstance!=undefined){d=c}var b=this._nextVisibleItem(d);return b},getSelectedItem:function(b){return this.selectedItem},val:function(d){if(arguments.length==0||typeof(d)=="object"){return this.selectedItem}if(typeof d=="string"){var b=this.host.find("#"+d);if(b.length>0){var c=this.getItem(b[0]);this.selectItem(c)}}else{var c=this.getItem(d);this.selectItem(c)}},getActiveDescendant:function(){if(this.selectedItem){return this.selectedItem.element.id}return""},clearSelection:function(){this.selectItem(null)},selectItem:function(b,c){if(this.disabled){return}var d=this;if(b&&b.treeInstance!=undefined){b=b.element}if(b==null||b==undefined){if(d.selectedItem!=null){a(d.selectedItem.titleElement).removeClass(d.toThemeProperty("jqx-fill-state-pressed"));a(d.selectedItem.titleElement).removeClass(d.toThemeProperty("jqx-tree-item-selected"));d.selectedItem=null}return}if(this.selectedItem!=null&&this.selectedItem.element==b){return}var e=this.selectedItem!=null?this.selectedItem.element:null;if(e){a(e).removeAttr("aria-selected")}a.each(d.items,function(){var f=this;this.selected=false;if(!f.disabled){if(f.element==b){if(d.selectedItem==null||(d.selectedItem!=null&&d.selectedItem.titleElement!=f.titleElement)){if(d.selectedItem!=null){a(d.selectedItem.titleElement).removeClass(d.toThemeProperty("jqx-fill-state-pressed"));a(d.selectedItem.titleElement).removeClass(d.toThemeProperty("jqx-tree-item-selected"))}a(f.titleElement).addClass(d.toThemeProperty("jqx-fill-state-pressed"));a(f.titleElement).addClass(d.toThemeProperty("jqx-tree-item-selected"));d.selectedItem=f;this.selected=true;a(f.element).attr("aria-selected","true");a.jqx.aria(d,"aria-activedescendant",f.element.id)}}}});this._updateInputSelection();if(!c){c=null}this._raiseEvent("2",{element:b,prevElement:e,type:c})},collapseAll:function(){this.isUpdating=true;var d=this;var b=d.items;var c=this.animationHideDuration;this.animationHideDuration=0;a.each(b,function(){var e=this;if(e.isExpanded==true){d._collapseItem(d,e)}});setTimeout(function(){d.isUpdating=false;d._calculateWidth()},this.animationHideDuration);this.animationHideDuration=c},expandAll:function(){var c=this;this.isUpdating=true;var b=this.animationShowDuration;this.animationShowDuration=0;a.each(this.items,function(){var d=this;if(d.hasItems){c._expandItem(c,d)}});setTimeout(function(){c.isUpdating=false;c._calculateWidth()},this.animationShowDuration);this.animationShowDuration=b},collapseItem:function(b){if(b==null){return false}if(b.treeInstance!=undefined){b=b.element}var c=this;a.each(this.items,function(){var d=this;if(d.isExpanded==true&&d.element==b){c._collapseItem(c,d);return false}});return true},expandItem:function(b){if(b==null){return false}if(b.treeInstance!=undefined){b=b.element}var c=this;a.each(c.items,function(){var d=this;if(d.isExpanded==false&&d.element==b&&!d.disabled&&!d.locked){c._expandItem(c,d);if(d.parentElement){c.expandItem(d.parentElement)}}});return true},_getClosedSubtreeOffset:function(c){var b=a(c.subtreeElement);var e=-b.outerHeight();var d=-b.outerWidth();d=0;return{left:d,top:e}},_collapseItem:function(g,k,d,b){if(g==null||k==null){return false}if(k.disabled){return false}if(g.disabled){return false}if(g.locked){return false}var e=a(k.subtreeElement);var l=this._getClosedSubtreeOffset(k);var h=l.top;var c=l.left;var j=a(k.element);var f=g.animationHideDelay;f=0;if(e.data("timer").show!=null){clearTimeout(e.data("timer").show);e.data("timer").show=null}var i=function(){k.isExpanded=false;if(g.checkboxes){var n=e.find(".chkbox");n.stop();n.css("opacity",1);e.find(".chkbox").animate({opacity:0},50)}var m=a(k.arrow);g._arrowStyle(m,"",k.isExpanded);e.slideUp(g.animationHideDuration,function(){k.isCollapsing=false;g._calculateWidth();var o=a(k.arrow);g._arrowStyle(o,"",k.isExpanded);e.hide();g._raiseEvent("1",{element:k.element})})};if(f>0){e.data("timer").hide=setTimeout(function(){i()},f)}else{i()}},_expandItem:function(g,j){if(g==null||j==null){return false}if(j.isExpanded){return false}if(j.locked){return false}if(j.disabled){return false}if(g.disabled){return false}var e=a(j.subtreeElement);if((e.data("timer"))!=null&&e.data("timer").hide!=null){clearTimeout(e.data("timer").hide)}var i=a(j.element);var h=0;var d=0;if(parseInt(e.css("top"))==h){j.isExpanded=true;return}var c=a(j.arrow);g._arrowStyle(c,"",j.isExpanded);if(g.checkboxes){var f=e.find(".chkbox");f.stop();f.css("opacity",0);f.animate({opacity:1},g.animationShowDuration)}var c=a(j.arrow);g._arrowStyle(c,"",true);e.slideDown(g.animationShowDuration,g.easing,function(){var k=a(j.arrow);j.isExpanded=true;g._arrowStyle(k,"",j.isExpanded);j.isExpanding=false;g._raiseEvent("0",{element:j.element});g._calculateWidth()});if(g.checkboxes){g._updateCheckItemLayout(j);if(j.subtreeElement){var b=a(j.subtreeElement).find("li");a.each(b,function(){var k=g.getItem(this);if(k!=null){g._updateCheckItemLayout(k)}})}}},_calculateWidth:function(){var f=this;var g=this.checkboxes?20:0;var e=0;if(this.isUpdating){return}a.each(this.items,function(){var h=a(this.element).height();if(h!=0){var k=a(this.titleElement).outerWidth()+10+g+(1+this.level)*20;e=Math.max(e,k);if(this.hasItems){var i=parseInt(a(this.titleElement).css("padding-top"));if(isNaN(i)){i=0}i=i*2;i+=2;var j=(i+a(this.titleElement).height())/2-17/2;if(a.jqx.browser.msie&&a.jqx.browser.version<9){a(this.arrow).css("margin-top","3px")}else{if(parseInt(j)>=0){a(this.arrow).css("margin-top",parseInt(j)+"px")}}}}});if(this.toggleIndicatorSize>16){e=e+this.toggleIndicatorSize-16}if(f.panel){if(e>this.host.width()){var b=e-this.host.width();var d=f.panel.jqxPanel("vScrollBar").css("visibility")!=="hidden"?10:0;b+=d;f.panel.jqxPanel({horizontalScrollBarMax:b})}else{f.panel.jqxPanel({horizontalScrollBarMax:0})}}this.host.find("ul:first").width(e);var c=this.host.width()-30;if(c>0){this.host.find("ul:first").css("min-width",c)}if(f.panel){f.panel.jqxPanel("_arrange")}},_arrowStyle:function(c,h,b){var e=this;if(c.length>0){c.removeClass();var g="";if(h=="hover"){g="-"+h}var f=b?"-expand":"-collapse";var d="jqx-tree-item-arrow"+f+g;c.addClass(e.toThemeProperty(d));if(!this.rtl){var f=!b?"-right":"-down";c.addClass(e.toThemeProperty("jqx-icon-arrow"+f+""))}if(this.rtl){c.addClass(e.toThemeProperty(d+"-rtl"));var f=!b?"-left":"-down";c.addClass(e.toThemeProperty("jqx-icon-arrow"+f+""))}}},_initialize:function(f,c){var e=this;var d=0;this.host.addClass(e.toThemeProperty("jqx-widget"));this.host.addClass(e.toThemeProperty("jqx-widget-content"));this.host.addClass(e.toThemeProperty("jqx-tree"));this._updateDisabledState();var b=a.jqx.browser.msie&&a.jqx.browser.version<8;a.each(this.items,function(){var m=this;var g=a(m.element);var k=null;if(e.checkboxes&&!m.hasItems&&m.checkBoxElement){a(m.checkBoxElement).css("margin-left","0px")}if(!b){if(!m.hasItems){if(!e.rtl){m.element.style.marginLeft=parseInt(e.toggleIndicatorSize)+"px"}else{m.element.style.marginRight=parseInt(e.toggleIndicatorSize)+"px"}var j=a(m.arrow);if(j.length>0){j.remove();m.arrow=null}return true}else{if(!e.rtl){m.element.style.marginLeft="0px"}else{m.element.style.marginRight="0px"}}}else{if(!m.hasItems&&a(m.element).find("ul").length>0){a(m.element).find("ul").remove()}}var j=a(m.arrow);if(j.length>0){j.remove()}var k=a('<span style="height: 17px; border: none; background-color: transparent;" id="arrow'+g[0].id+'"></span>');k.prependTo(g);if(!e.rtl){k.css("float","left")}else{k.css("float","right")}k.css("clear","both");k.width(e.toggleIndicatorSize);e._arrowStyle(k,"",m.isExpanded);var l=parseInt(a(this.titleElement).css("padding-top"));if(isNaN(l)){l=0}l=l*2;l+=2;var n=(l+a(this.titleElement).height())/2-17/2;if(a.jqx.browser.msie&&a.jqx.browser.version<9){k.css("margin-top","3px")}else{if(parseInt(n)>=0){k.css("margin-top",parseInt(n)+"px")}}g.addClass(e.toThemeProperty("jqx-disableselect"));k.addClass(e.toThemeProperty("jqx-disableselect"));var h="click";var i=e.isTouchDevice();if(i){h=a.jqx.mobile.getTouchEventName("touchend")}e.addHandler(k,h,function(){if(!m.isExpanded){e._expandItem(e,m)}else{e._collapseItem(e,m)}return false});e.addHandler(k,"selectstart",function(){return false});e.addHandler(k,"mouseup",function(){if(!i){return false}});m.hasItems=a(m.element).find("li").length>0;m.arrow=k[0];if(!m.hasItems){k.css("visibility","hidden")}g.css("float","none")})},_getOffset:function(b){var f=a(window).scrollTop();var h=a(window).scrollLeft();var c=a.jqx.mobile.isSafariMobileBrowser();var g=a(b).offset();var e=g.top;var d=g.left;if(c!=null&&c){return{left:d-h,top:e-f}}else{return a(b).offset()}},_renderHover:function(c,e,b){var d=this;if(!b){var f=a(e.titleElement);d.addHandler(f,"mouseenter",function(){if(!e.disabled&&d.enableHover&&!d.disabled){f.addClass(d.toThemeProperty("jqx-fill-state-hover"));f.addClass(d.toThemeProperty("jqx-tree-item-hover"))}});d.addHandler(f,"mouseleave",function(){if(!e.disabled&&d.enableHover&&!d.disabled){f.removeClass(d.toThemeProperty("jqx-fill-state-hover"));f.removeClass(d.toThemeProperty("jqx-tree-item-hover"))}})}},_updateDisabledState:function(){if(this.disabled){this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"))}else{this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))}},_addInput:function(){if(this.input==null){var b=this.host.attr("name");if(b){this.host.attr("name","")}this.input=a("<input type='hidden'/>");this.host.append(this.input);this.input.attr("name",b);this._updateInputSelection()}},render:function(){this._updateItemsNavigation();this._render()},_render:function(f,i){if(a.jqx.browser.msie&&a.jqx.browser.version<8){var g=this;a.each(this.items,function(){var m=a(this.element);var o=m.parent();var l=parseInt(this.titleElement.css("margin-left"))+this.titleElement[0].scrollWidth+13;m.css("min-width",l);var n=parseInt(o.css("min-width"));if(isNaN(n)){n=0}var k=m.css("min-width");if(n<parseInt(m.css("min-width"))){o.css("min-width",k)}this.titleElement[0].style.width=null})}var h=1000;var c=[5,5];var g=this;a.data(g.element,"animationHideDelay",g.animationHideDelay);a.data(document.body,"treeel",this);this._initialize();var d=this.isTouchDevice();if(d&&this.toggleMode=="dblclick"){this.toggleMode="click"}if(f==undefined||f==true){a.each(this.items,function(){g._updateItemEvents(g,this)})}if(this.allowDrag&&this._enableDragDrop&&(i==undefined||i==true)){this._enableDragDrop()}this._addInput();if(this.host.jqxPanel){if(this.host.find("#panel"+this.element.id).length>0){this.panel.jqxPanel({touchMode:this.touchMode});this.panel.jqxPanel("refresh");return}this.host.find("ul:first").wrap('<div style="background-color: transparent; overflow: hidden; width: 100%; height: 100%;" id="panel'+this.element.id+'"></div>');var b=this.host.find("div:first");var j="fixed";if(this.height==null||this.height=="auto"){j="verticalwrap"}if(this.width==null||this.width=="auto"){if(j=="fixed"){j="horizontalwrap"}else{j="wrap"}}b.jqxPanel({rtl:this.rtl,theme:this.theme,width:"100%",height:"100%",touchMode:this.touchMode,sizeMode:j});if(a.jqx.browser.msie&&a.jqx.browser.version<8){b.jqxPanel("content").css("left","0px")}b.data({nestedWidget:true});if(this.height==null||(this.height!=null&&this.height.toString().indexOf("%")!=-1)){if(this.isTouchDevice()){this.removeHandler(b,a.jqx.mobile.getTouchEventName("touchend")+".touchScroll touchcancel.touchScroll");this.removeHandler(b,a.jqx.mobile.getTouchEventName("touchmove")+".touchScroll");this.removeHandler(b,a.jqx.mobile.getTouchEventName("touchstart")+".touchScroll")}}var e=a.data(b[0],"jqxPanel").instance;if(e!=null){this.vScrollInstance=e.vScrollInstance;this.hScrollInstance=e.hScrollInstance}this.panelInstance=e;if(a.jqx.browser.msie&&a.jqx.browser.version<8){this.host.attr("hideFocus",true);this.host.find("div").attr("hideFocus",true);this.host.find("ul").attr("hideFocus",true)}b[0].className="";this.panel=b}this._raiseEvent("3",this)},focus:function(){try{this.host.focus()}catch(b){}},_updateItemEvents:function(h,j){var b=this.isTouchDevice();if(b){this.toggleMode=a.jqx.mobile.getTouchEventName("touchend")}var i=a(j.element);if(h.enableRoundedCorners){i.addClass(h.toThemeProperty("jqx-rc-all"))}var e=!b?"mousedown":a.jqx.mobile.getTouchEventName("touchend");if(h.touchMode===true){h.removeHandler(a(j.checkBoxElement),"mousedown")}h.removeHandler(a(j.checkBoxElement),e);h.addHandler(a(j.checkBoxElement),e,function(k){if(!h.disabled){if(!this.treeItem.disabled){this.treeItem.checked=!this.treeItem.checked;h.checkItem(this.treeItem.element,this.treeItem.checked,"tree");if(h.hasThreeStates){h.checkItems(this.treeItem,this.treeItem)}}}return false});var c=a(j.titleElement);h.removeHandler(i);var f=this.allowDrag&&this._enableDragDrop;if(!f){h.removeHandler(c)}else{h.removeHandler(c,"mousedown.item");h.removeHandler(c,"click");h.removeHandler(c,"dblclick");h.removeHandler(c,"mouseenter");h.removeHandler(c,"mouseleave")}h._renderHover(i,j,b);var d=a(j.subtreeElement);if(d.length>0){var g=j.isExpanded?"block":"none";d.css({overflow:"hidden",display:g});d.data("timer",{})}h.addHandler(c,"selectstart",function(k){return false});if(a.jqx.browser.opera){h.addHandler(c,"mousedown.item",function(k){return false})}if(h.toggleMode!="click"){h.addHandler(c,"click",function(k){h.selectItem(j.element,"mouse");if(h.panel!=null){h.panel.jqxPanel({focused:true})}c.focus();h._raiseEvent("9",{element:j.element})})}h.addHandler(c,h.toggleMode,function(k){if(d.length>0){clearTimeout(d.data("timer").hide)}if(h.panel!=null){h.panel.jqxPanel({focused:true})}h.selectItem(j.element,"mouse");if(j.isExpanding==undefined){j.isExpanding=false}if(j.isCollapsing==undefined){j.isCollapsing=false}if(d.length>0){if(!j.isExpanded){if(false==j.isExpanding){j.isExpanding=true;h._expandItem(h,j)}}else{if(false==j.isCollapsing){j.isCollapsing=true;h._collapseItem(h,j,true)}}return false}})},isTouchDevice:function(){if(this._isTouchDevice!=undefined){return this._isTouchDevice}var b=a.jqx.mobile.isTouchDevice();if(this.touchMode==true){b=true}else{if(this.touchMode==false){b=false}}this._isTouchDevice=b;return b},createID:function(){return a.jqx.utilities.createId()},createTree:function(b){if(b==null){return}var d=this;var f=a(b).find("li");var c=0;this.items=new Array();this.itemMapping=new Array();a(b).addClass(d.toThemeProperty("jqx-tree-dropdown-root"));if(this.rtl){a(b).addClass(d.toThemeProperty("jqx-tree-dropdown-root-rtl"))}if(this.rtl||a.jqx.browser.msie&&a.jqx.browser.version<8){this._measureItem=a("<span style='position: relative; visibility: hidden;'></span>");this._measureItem.addClass(this.toThemeProperty("jqx-widget"));this._measureItem.addClass(this.toThemeProperty("jqx-fill-state-normal"));this._measureItem.addClass(this.toThemeProperty("jqx-tree-item"));this._measureItem.addClass(this.toThemeProperty("jqx-item"));a(document.body).append(this._measureItem)}if(a.jqx.browser.msie&&a.jqx.browser.version<8){}for(var e=0;e<f.length;e++){this._createItem(f[e])}if(this.rtl||a.jqx.browser.msie&&a.jqx.browser.version<8){this._measureItem.remove()}this._updateItemsNavigation();this._updateCheckStates()},_updateCheckLayout:function(c){var b=this;if(!this.checkboxes){return}a.each(this.items,function(){if(this.level==c||c==undefined){b._updateCheckItemLayout(this)}})},_updateCheckItemLayout:function(b){if(this.checkboxes){if(a(b.titleElement).css("display")!="none"){var c=a(b.checkBoxElement);var d=a(b.titleElement).outerHeight()/2-1-parseInt(this.checkSize)/2;c.css("margin-top",d);if(!this.rtl){if(a.jqx.browser.msie&&a.jqx.browser.version<8){b.titleElement.css("margin-left",parseInt(this.checkSize)+25)}else{if(b.hasItems){c.css("margin-left",this.toggleIndicatorSize)}}}}}},_updateCheckStates:function(){var b=this;if(b.hasThreeStates){a.each(this.items,function(){b._updateCheckState(this)})}else{a.each(this.items,function(){if(this.checked==null){b.checkItem(this.element,false,"tree")}})}},_updateCheckState:function(e){if(e==null||e==undefined){return}var d=this;var c=0;var f=false;var b=0;var g=a(e.element).find("li");b=g.length;if(e.checked&&b>0){a.each(g,function(h){var j=d.itemMapping["id"+this.id].item;var i=j.element.getAttribute("item-checked");if(i==undefined||i==null||i=="true"||i==true){d.checkItem(j.element,true,"tree")}})}a.each(g,function(h){var i=d.itemMapping["id"+this.id].item;if(i.checked!=false){if(i.checked==null){f=true}c++}});if(b>0){if(c==b){this.checkItem(e.element,true,"tree")}else{if(c>0){this.checkItem(e.element,null,"tree")}else{this.checkItem(e.element,false,"tree")}}}},_updateItemsNavigation:function(){var g=this.host.find("ul:first");var f=a(g).find("li");var c=0;for(var d=0;d<f.length;d++){var b=f[d];if(this.itemMapping["id"+b.id]){var e=this.itemMapping["id"+b.id].item;if(!e){continue}e.prevItem=null;e.nextItem=null;if(d>0){if(this.itemMapping["id"+f[d-1].id]){e.prevItem=this.itemMapping["id"+f[d-1].id].item}}if(d<f.length-1){if(this.itemMapping["id"+f[d+1].id]){e.nextItem=this.itemMapping["id"+f[d+1].id].item}}}}},_applyTheme:function(e,h){var f=this;this.host.removeClass("jqx-tree-"+e);this.host.removeClass("jqx-widget-"+e);this.host.removeClass("jqx-widget-content-"+e);this.host.addClass(f.toThemeProperty("jqx-tree"));this.host.addClass(f.toThemeProperty("jqx-widget"));var b=this.host.find("ul:first");a(b).removeClass(f.toThemeProperty("jqx-tree-dropdown-root-"+e));a(b).addClass(f.toThemeProperty("jqx-tree-dropdown-root"));if(this.rtl){a(b).removeClass(f.toThemeProperty("jqx-tree-dropdown-root-rtl-"+e));a(b).addClass(f.toThemeProperty("jqx-tree-dropdown-root-rtl"))}var g=a(b).find("li");for(var d=0;d<g.length;d++){var c=g[d];a(c).children().each(function(){if(this.tagName=="ul"||this.tagName=="UL"){a(this).removeClass(f.toThemeProperty("jqx-tree-dropdown-"+e));a(this).addClass(f.toThemeProperty("jqx-tree-dropdown"));if(f.rtl){a(this).removeClass(f.toThemeProperty("jqx-tree-dropdown-rtl-"+e));a(this).addClass(f.toThemeProperty("jqx-tree-dropdown-rtl"))}return false}})}a.each(this.items,function(){var k=this;var j=a(k.element);j.removeClass(f.toThemeProperty("jqx-tree-item-li-"+e));j.addClass(f.toThemeProperty("jqx-tree-item-li"));if(this.rtl){j.removeClass(f.toThemeProperty("jqx-tree-item-li-"+e));j.addClass(f.toThemeProperty("jqx-tree-item-li"))}a(k.titleElement).removeClass(f.toThemeProperty("jqx-tree-item-"+e));a(k.titleElement).addClass(f.toThemeProperty("jqx-tree-item"));a(k.titleElement).removeClass("jqx-item-"+e);a(k.titleElement).addClass(f.toThemeProperty("jqx-item"));var i=a(k.arrow);if(i.length>0){f._arrowStyle(i,"",k.isExpanded)}if(k.checkBoxElement){a(k.checkBoxElement).jqxCheckBox({theme:h})}if(f.enableRoundedCorners){j.removeClass("jqx-rc-all-"+e);j.addClass(f.toThemeProperty("jqx-rc-all"))}});if(this.host.jqxPanel){this.panel.jqxPanel({theme:h})}},_refreshMapping:function(f,p){var e=this.host.find("li");var b=new Array();var o=new Array();var h=a.data(document.body,"treeItemsStorage");var k=this;for(var i=0;i<e.length;i++){var j=e[i];var d=a(j);var n=h[j.id];if(n==null){continue}o[o.length]=n;if(f==undefined||f==true){this._updateItemEvents(this,n)}n.level=d.parents("li").length;n.treeInstance=this;var m=null;var g=null;if(n.titleElement[0].className.indexOf("jqx-fill-state-pressed")!=-1){a(n.titleElement).removeClass(k.toThemeProperty("jqx-fill-state-pressed"));a(n.titleElement).removeClass(k.toThemeProperty("jqx-tree-item-selected"))}var c=d.children();c.each(function(){if(this.tagName=="ul"||this.tagName=="UL"){n.subtreeElement=this;a(this).addClass(k.toThemeProperty("jqx-tree-dropdown"));if(k.rtl){a(this).addClass(k.toThemeProperty("jqx-tree-dropdown-rtl"))}return false}});var l=d.parents();l.each(function(){if((this.tagName=="li"||this.tagName=="LI")){g=this.id;m=this;return false}});n.parentElement=m;n.parentId=g;n.hasItems=a(n.element).find("li").length>0;if(n!=null){b[i]={element:j,item:n};b["id"+j.id]=b[i]}}this.itemMapping=b;this.items=o},_createItem:function(c){if(c==null||c==undefined){return}var q=c.id;if(!q){q=this.createID()}var E=c;var l=a(c);E.id=q;var g=a.data(document.body,"treeItemsStorage");if(g==undefined){g=new Array()}var w=this.items.length;this.items[w]=new a.jqx._jqxTree.jqxTreeItem();this.treeElements[q]=this.items[w];g[E.id]=this.items[w];a.data(document.body,"treeItemsStorage",g);w=this.items.length;var z=0;var G=this;var e=null;l.attr("role","treeitem");l.children().each(function(){if(this.tagName=="ul"||this.tagName=="UL"){G.items[w-1].subtreeElement=this;a(this).addClass(G.toThemeProperty("jqx-tree-dropdown"));if(G.rtl){a(this).addClass(G.toThemeProperty("jqx-tree-dropdown-rtl"));a(this).css("clear","both")}return false}});l.parents().each(function(){if((this.tagName=="li"||this.tagName=="LI")){z=this.id;e=this;return false}});var v=c.getAttribute("item-expanded");if(v==null||v==undefined||(v!="true"&&v!=true)){v=false}else{v=true}E.removeAttribute("item-expanded");var F=c.getAttribute("item-locked");if(F==null||F==undefined||(F!="true"&&F!=true)){F=false}else{F=true}E.removeAttribute("item-locked");var r=c.getAttribute("item-selected");if(r==null||r==undefined||(r!="true"&&r!=true)){r=false}else{r=true}E.removeAttribute("item-selected");var d=c.getAttribute("item-disabled");if(d==null||d==undefined||(d!="true"&&d!=true)){d=false}else{d=true}E.removeAttribute("item-disabled");var i=c.getAttribute("item-checked");if(i==null||i==undefined||(i!="true"&&i!=true)){i=false}else{i=true}var H=c.getAttribute("item-title");if(H==null||H==undefined||(H!="true"&&H!=true)){H=false}E.removeAttribute("item-title");var C=c.getAttribute("item-icon");var s=c.getAttribute("item-iconsize");var j=c.getAttribute("item-label");var u=c.getAttribute("item-value");E.removeAttribute("item-icon");E.removeAttribute("item-iconsize");E.removeAttribute("item-label");E.removeAttribute("item-value");var B=this.items[w-1];B.id=q;if(B.value==undefined){if(this._valueList&&this._valueList[q]){B.value=this._valueList[q]}else{B.value=u}}B.icon=C;B.iconsize=s;B.parentId=z;B.disabled=d;B.parentElement=e;B.element=c;B.locked=F;B.selected=r;B.checked=i;B.isExpanded=v;B.treeInstance=this;this.itemMapping[w-1]={element:E,item:B};this.itemMapping["id"+E.id]=this.itemMapping[w-1];var h=false;var D=false;h=false;if(this.rtl){a(B.element).css("float","right");a(B.element).css("clear","both")}if(!h||!D){if(a(E.firstChild).length>0){var s=16;if(B.icon){s=B.iconsize;if(!s){s=16}var C=a('<img width="'+s+'" height="'+s+'" style="float: left;" class="itemicon" src="'+B.icon+'"/>');a(E).prepend(C);C.css("margin-right","6px");if(this.rtl){C.css("margin-right","0px");C.css("margin-left","6px");C.css("float","right")}}var b=E.innerHTML.indexOf("<ul");if(b==-1){b=E.innerHTML.indexOf("<UL")}if(b==-1){B.originalTitle=E.innerHTML;E.innerHTML='<div style="display: inline-block;">'+E.innerHTML+"</div>";B.titleElement=a(a(E)[0].firstChild)}else{var A=E.innerHTML.substring(0,b);A=a.trim(A);B.originalTitle=A;A=a('<div style="display: inline-block;">'+A+"</div>");var n=a(E).find("ul:first");n.remove();E.innerHTML="";a(E).prepend(A);a(E).append(n);B.titleElement=A;if(this.rtl){A.css("float","right");n.css("padding-right","10px")}}if(s!==16){a(B.titleElement).css("line-height",s+"px")}if(a.jqx.browser.msie&&a.jqx.browser.version<8){a(a(E)[0].firstChild).css("display","inline-block");var m=false;if(this._measureItem.parents().length==0){a(document.body).append(this._measureItem);m=true}this._measureItem.css("min-width","20px");this._measureItem[0].innerHTML=(a(B.titleElement).text());var t=this._measureItem.width();if(B.icon){t+=20}if(a(a(B.titleElement).find("img")).length>0){t+=20}a(a(E)[0].firstChild).css("max-width",t+"px");if(m){this._measureItem.remove()}}}else{B.originalTitle="Item";a(E).append(a("<span>Item</span>"));a(E.firstChild).wrap("<span/>");B.titleElement=a(E)[0].firstChild;if(a.jqx.browser.msie&&a.jqx.browser.version<8){a(E.firstChild).css("display","inline-block")}}}var y=a(B.titleElement);var p=this.toThemeProperty("jqx-rc-all");if(this.allowDrag){y.addClass("draggable")}if(j==null||j==undefined){j=B.titleElement;B.label=a.trim(y.text())}else{B.label=j}a(E).addClass(this.toThemeProperty("jqx-tree-item-li"));if(this.rtl){a(E).addClass(this.toThemeProperty("jqx-tree-item-li-rtl"))}p+=" "+this.toThemeProperty("jqx-tree-item")+" "+this.toThemeProperty("jqx-item");if(this.rtl){p+=" "+this.toThemeProperty("jqx-tree-item-rtl")}y[0].className=y[0].className+" "+p;B.level=a(c).parents("li").length;B.hasItems=a(c).find("li").length>0;if(this.rtl&&B.parentElement){if(!this.checkboxes){}}if(this.checkboxes){if(this.host.jqxCheckBox){var o=a('<div style="overflow: visible; position: absolute; width: 18px; height: 18px;" tabIndex=0 class="chkbox"/>');o.width(parseInt(this.checkSize));o.height(parseInt(this.checkSize));a(E).prepend(o);if(this.rtl){o.css("float","right");o.css("position","static")}o.jqxCheckBox({hasInput:false,checked:B.checked,boxSize:this.checkSize,animationShowDelay:0,animationHideDelay:0,disabled:d,theme:this.theme});if(!this.rtl){y.css("margin-left",parseInt(this.checkSize)+8)}else{var x=5;if(B.parentElement){o.css("margin-right",x+5+"px")}else{o.css("margin-right",x+"px")}}B.checkBoxElement=o[0];o[0].treeItem=B;var f=y.outerHeight()/2-1-parseInt(this.checkSize)/2;o.css("margin-top",f);if(a.jqx.browser.msie&&a.jqx.browser.version<8){y.css("width","1%");y.css("margin-left",parseInt(this.checkSize)+25)}else{if(B.hasItems){if(!this.rtl){o.css("margin-left",this.toggleIndicatorSize)}}}}else{throw new Error("jqxTree: Missing reference to jqxcheckbox.js.");return}}else{if(a.jqx.browser.msie&&a.jqx.browser.version<8){y.css("width","1%")}}if(d){this.disableItem(B.element)}if(r){this.selectItem(B.element)}if(a.jqx.browser.msie&&a.jqx.browser.version<8){a(E).css("margin","0px");a(E).css("padding","0px")}},destroy:function(){this.removeHandler(a(window),"resize.jqxtree"+this.element.id);this.host.removeClass();if(this.isTouchDevice()){this.removeHandler(this.panel,a.jqx.mobile.getTouchEventName("touchend")+".touchScroll touchcancel.touchScroll");this.removeHandler(this.panel,a.jqx.mobile.getTouchEventName("touchmove")+".touchScroll");this.removeHandler(this.panel,a.jqx.mobile.getTouchEventName("touchstart")+".touchScroll")}var c=this;var b=this.isTouchDevice();a.each(this.items,function(){var h=this;var f=a(this.element);var d=!b?"click":a.jqx.mobile.getTouchEventName("touchend");c.removeHandler(a(h.checkBoxElement),d);var i=a(h.titleElement);c.removeHandler(f);var g=c.allowDrag&&c._enableDragDrop;if(!g){c.removeHandler(i)}else{c.removeHandler(i,"mousedown.item");c.removeHandler(i,"click");c.removeHandler(i,"dblclick");c.removeHandler(i,"mouseenter");c.removeHandler(i,"mouseleave")}var e=a(h.arrow);if(e.length>0){c.removeHandler(e,d);c.removeHandler(e,"selectstart");c.removeHandler(e,"mouseup");if(!b){c.removeHandler(e,"mouseenter");c.removeHandler(e,"mouseleave")}c.removeHandler(i,"selectstart")}if(a.jqx.browser.opera){c.removeHandler(i,"mousedown.item")}if(c.toggleMode!="click"){c.removeHandler(i,"click")}c.removeHandler(i,c.toggleMode)});if(this.panel){this.panel.jqxPanel("destroy");this.panel=null}this.host.remove()},_raiseEvent:function(g,c){if(c==undefined){c={owner:null}}var d=this.events[g];var e=c;e.owner=this;var f=new a.Event(d);f.owner=this;f.args=e;var b=this.host.trigger(f);return b},propertyChangedHandler:function(d,k,b,i){if(this.isInitialized==undefined||this.isInitialized==false){return}if(k=="submitCheckedItems"){d._updateInputSelection()}if(k=="disabled"){d._updateDisabledState()}if(k=="theme"){d._applyTheme(b,i)}if(k=="keyboardNavigation"){d.enableKeyboardNavigation=i}if(k=="width"||k=="height"){d.refresh();d._initialize();d._calculateWidth();if(d.host.jqxPanel){var j="fixed";if(this.height==null||this.height=="auto"){j="verticalwrap"}if(this.width==null||this.width=="auto"){if(j=="fixed"){j="horizontalwrap"}else{j="wrap"}}d.panel.jqxPanel({sizeMode:j})}}if(k=="touchMode"){d._isTouchDevice=null;if(i){d.enableHover=false}d._render()}if(k=="source"||k=="checkboxes"){if(this.source!=null){var l=[];a.each(d.items,function(){if(this.isExpanded){l[l.length]={label:this.label,level:this.level}}});var f=d.loadItems(d.source);if(!d.host.jqxPanel){d.element.innerHTML=f}else{d.panel.jqxPanel("setcontent",f)}var e=d.disabled;var g=d.host.find("ul:first");if(g.length>0){d.createTree(g[0]);d._render()}var h=d;var c=h.animationShowDuration;h.animationShowDuration=0;d.disabled=false;if(l.length>0){a.each(d.items,function(){for(var n=0;n<l.length;n++){if(l[n].label==this.label&&l[n].level==this.level){var o=h.getItem(this.element);h._expandItem(h,o)}}})}d.disabled=e;h.animationShowDuration=c}}if(k=="hasThreeStates"){d._render();d._updateCheckStates()}if(k=="toggleIndicatorSize"){d._updateCheckLayout();d._render()}}})})(jqxBaseFramework);(function(a){a.jqx._jqxTree.jqxTreeItem=function(e,d,b){var c={label:null,id:e,parentId:d,parentElement:null,parentItem:null,disabled:false,selected:false,locked:false,checked:false,level:0,isExpanded:false,hasItems:false,element:null,subtreeElement:null,checkBoxElement:null,titleElement:null,arrow:null,prevItem:null,nextItem:null};return c}})(jqxBaseFramework);



/***/ }),

/***/ "./src/assets/showtree.js":
/*!********************************!*\
  !*** ./src/assets/showtree.js ***!
  \********************************/
/*! exports provided: showtree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showtree", function() { return showtree; });
function showtree()
{
    $('#jstree_demo_div').jstree();
}

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\wikidox_client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map