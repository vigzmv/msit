"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var q = "querySelector('strong').innerHTML.split(' ')[1]";
var s = ">div>table>tbody";
["#robotics", "#quizzes"].forEach(function (I) {
	document.querySelector("" + I + s).innerHTML = [].concat(_toConsumableArray(document.querySelectorAll("" + I + s + ">tr"))).sort(function (a, b) {
		return eval("a." + q) > eval("b." + q) ? 1 : -1;
	}).map(function (s) {
		return s.outerHTML;
	}).join('');
});
