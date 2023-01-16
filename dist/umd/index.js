(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.demo_umd = {}));
})(this, (function (exports) { 'use strict';

	const arr = [1, 2, 3];

	exports.arr = arr;

}));
