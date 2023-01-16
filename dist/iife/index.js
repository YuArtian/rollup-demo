var demo_iife = (function (exports) {
	'use strict';

	const arr = [1, 2, 3];

	exports.arr = arr;

	return exports;

})({});
