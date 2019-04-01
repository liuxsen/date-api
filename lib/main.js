(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["time"] = factory();
	else
		root["time"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: formatDate, getCurrentDate, getYesterdayStartDate, getYesterdayEndDate, getTodayStartDate, getTodayEndDate, getWeekStartDate, getWeekEndDate, getMonthDays, getQuarterStartMonth, getLastWeekStartDate, getLastWeekEndDate, getMonthStartDate, getMonthEndDate, getLastMonthStartDate, getLastMonthEndDate, getQuarterStartDate, getQuarterEndDate, getLastyearStartDate, getLastyearEndDate, getCurrentYearStartDate, getCurrentYearEndDate, getOldDaysStartDate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentDate\", function() { return getCurrentDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getYesterdayStartDate\", function() { return getYesterdayStartDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getYesterdayEndDate\", function() { return getYesterdayEndDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodayStartDate\", function() { return getTodayStartDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodayEndDate\", function() { return getTodayEndDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeekStartDate\", function() { return getWeekStartDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeekEndDate\", function() { return getWeekEndDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMonthDays\", function() { return getMonthDays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQuarterStartMonth\", function() { return getQuarterStartMonth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastWeekStartDate\", function() { return getLastWeekStartDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastWeekEndDate\", function() { return getLastWeekEndDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMonthStartDate\", function() { return getMonthStartDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMonthEndDate\", function() { return getMonthEndDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastMonthStartDate\", function() { return getLastMonthStartDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastMonthEndDate\", function() { return getLastMonthEndDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQuarterStartDate\", function() { return getQuarterStartDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQuarterEndDate\", function() { return getQuarterEndDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastyearStartDate\", function() { return getLastyearStartDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastyearEndDate\", function() { return getLastyearEndDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentYearStartDate\", function() { return getCurrentYearStartDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentYearEndDate\", function() { return getCurrentYearEndDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOldDaysStartDate\", function() { return getOldDaysStartDate; });\nvar now = new Date(); // 当前日期\n\nvar nowDayOfWeek = now.getDay() - 1; //  今天本周的第几天\n\nvar nowDay = now.getDate(); // 当前日\n\nvar nowMonth = now.getMonth(); // 当前月\n\nvar nowYear = now.getYear(); // 当前年\n\nnowYear += nowYear < 2000 ? 1900 : 0; //\n\nvar lastMonthDate = new Date(); // 上月日期\n\nlastMonthDate.setDate(1);\nlastMonthDate.setMonth(lastMonthDate.getMonth() - 1);\nvar lastMonth = lastMonthDate.getMonth(); // 格式化日期：yyyy-MM-dd\n\nfunction formatDate(date) {\n  var myyear = date.getFullYear();\n  var mymonth = date.getMonth() + 1;\n  var myweekday = date.getDate();\n\n  if (mymonth < 10) {\n    mymonth = '0' + mymonth;\n  }\n\n  if (myweekday < 10) {\n    myweekday = '0' + myweekday;\n  }\n\n  return myyear + '-' + mymonth + '-' + myweekday;\n} // 获取当前时间\n\nfunction getCurrentDate() {\n  return new Date().getTime();\n} //  获取昨天开始时间\n\nfunction getYesterdayStartDate() {\n  var now = new Date();\n  var yesterdayStart = new Date(now.setHours(0, 0, 0, 0) - 60 * 60 * 1000 * 24 * 1).getTime();\n  return yesterdayStart;\n} // 获取昨天结束时间\n\nfunction getYesterdayEndDate() {\n  var now = new Date();\n  var yesterdayEnd = now.setHours(23, 59, 59, 0) - 60 * 60 * 1000 * 24 * 1;\n  return yesterdayEnd;\n} //  获取今天开始时间\n\nfunction getTodayStartDate() {\n  var now = new Date();\n  var nowrdayStart = now.setHours(0, 0, 0, 0);\n  return nowrdayStart;\n} // 获取今天结束时间\n\nfunction getTodayEndDate() {\n  var now = new Date();\n  var nowrdayStart = now.setHours(23, 59, 59, 0);\n  return nowrdayStart;\n} // 获得本周的开始日期\n\nfunction getWeekStartDate() {\n  var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek).getTime();\n  return weekStartDate;\n} // 获得本周的结束日期\n\nfunction getWeekEndDate() {\n  var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek), 23, 59, 59).getTime();\n  return weekEndDate;\n} // 获得某月的天数\n\nfunction getMonthDays(myMonth) {\n  var monthStartDate = new Date(nowYear, myMonth, 1);\n  var monthEndDate = new Date(nowYear, myMonth + 1, 1);\n  var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);\n  return days;\n} // 获得本季度的开始月份\n\nfunction getQuarterStartMonth() {\n  var quarterStartMonth = 0;\n\n  if (nowMonth < 3) {\n    quarterStartMonth = 0;\n  }\n\n  if (nowMonth > 2 && nowMonth < 6) {\n    quarterStartMonth = 3;\n  }\n\n  if (nowMonth > 5 && nowMonth < 9) {\n    quarterStartMonth = 6;\n  }\n\n  if (nowMonth > 8) {\n    quarterStartMonth = 9;\n  }\n\n  return quarterStartMonth;\n} // 获得上周的开始日期\n\nfunction getLastWeekStartDate() {\n  var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 7).getTime();\n  return weekStartDate;\n} // 获得上周的结束日期\n\nfunction getLastWeekEndDate() {\n  var weekEndDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 1, 23, 59, 59, 0).getTime();\n  return weekEndDate;\n} // 获得本月的开始日期\n\nfunction getMonthStartDate() {\n  var monthStartDate = new Date(nowYear, nowMonth, 1).getTime();\n  return monthStartDate;\n} // 获得本月的结束日期\n\nfunction getMonthEndDate() {\n  var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth), 23, 59, 59, 0).getTime();\n  return monthEndDate;\n} // 获得上月开始时间\n\nfunction getLastMonthStartDate() {\n  var lastMonthStartDate = '';\n\n  if (lastMonth === 11) {\n    lastMonthStartDate = new Date(nowYear - 1, lastMonth, 1).getTime();\n  } else {\n    lastMonthStartDate = new Date(nowYear, lastMonth, 1).getTime();\n  }\n\n  return lastMonthStartDate;\n} // 获得上月结束时间\n\nfunction getLastMonthEndDate() {\n  var lastMonthEndDate = '';\n\n  if (lastMonth === 11) {\n    lastMonthEndDate = new Date(nowYear - 1, lastMonth, getMonthDays(lastMonth), 23, 59, 59, 0).getTime();\n  } else {\n    lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth), 23, 59, 59, 0).getTime();\n  }\n\n  return lastMonthEndDate;\n} // 获得本季度的开始日期\n\nfunction getQuarterStartDate() {\n  var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1).getTime();\n  return quarterStartDate;\n} // 或的本季度的结束日期\n\nfunction getQuarterEndDate() {\n  var quarterEndMonth = getQuarterStartMonth() + 2;\n  var quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth)).getTime();\n  return quarterStartDate;\n} // 获取去年开始时间\n\nfunction getLastyearStartDate() {\n  var nowYear = now.getYear(); // 当前年\n\n  nowYear += nowYear < 2000 ? 1900 : 0; //\n\n  var lastYear = --nowYear;\n  var lastYearFirstDay = new Date(lastYear, 0, 1).getTime();\n  return lastYearFirstDay;\n} // 获取去年结束时间\n\nfunction getLastyearEndDate() {\n  var nowYear = now.getYear(); // 当前年\n\n  nowYear += nowYear < 2000 ? 1900 : 0; //\n\n  var lastYear = --nowYear;\n  var lastYearEndDay = new Date(lastYear, 11, getMonthDays(11), 23, 59, 59, 0).getTime();\n  return lastYearEndDay;\n} // 获取今年开始时间\n\nfunction getCurrentYearStartDate() {\n  var nowYear = now.getYear(); // 当前年\n\n  nowYear += nowYear < 2000 ? 1900 : 0; //\n\n  var startDay = new Date(nowYear, 0, 1).getTime();\n  return startDay;\n} // 获取今年结束时间\n\nfunction getCurrentYearEndDate() {\n  var nowYear = now.getYear(); // 当前年\n\n  nowYear += nowYear < 2000 ? 1900 : 0; //\n\n  var endDay = new Date(nowYear, 11, getMonthDays(11), 23, 59, 59, 0).getTime();\n  return endDay;\n} // 获取过去num天时间\n\nfunction getOldDaysStartDate() {\n  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n  var now = new Date();\n  return now.setHours(0, 0, 0, 0) - num * 60 * 60 * 1000 * 24;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  formatDate: formatDate,\n  getCurrentDate: getCurrentDate,\n  getYesterdayStartDate: getYesterdayStartDate,\n  getYesterdayEndDate: getYesterdayEndDate,\n  getTodayStartDate: getTodayStartDate,\n  getTodayEndDate: getTodayEndDate,\n  getWeekStartDate: getWeekStartDate,\n  getWeekEndDate: getWeekEndDate,\n  getMonthDays: getMonthDays,\n  getQuarterStartMonth: getQuarterStartMonth,\n  getLastWeekStartDate: getLastWeekStartDate,\n  getLastWeekEndDate: getLastWeekEndDate,\n  getMonthStartDate: getMonthStartDate,\n  getMonthEndDate: getMonthEndDate,\n  getLastMonthStartDate: getLastMonthStartDate,\n  getLastMonthEndDate: getLastMonthEndDate,\n  getQuarterStartDate: getQuarterStartDate,\n  getQuarterEndDate: getQuarterEndDate,\n  getLastyearStartDate: getLastyearStartDate,\n  getLastyearEndDate: getLastyearEndDate,\n  getCurrentYearStartDate: getCurrentYearStartDate,\n  getCurrentYearEndDate: getCurrentYearEndDate,\n  getOldDaysStartDate: getOldDaysStartDate\n});\n\n//# sourceURL=webpack://time/./src/index.js?");

/***/ })

/******/ })["default"];
});