/* knockout.ko-punch.js ko.observable().punch() tests */

module("ko.observable().punch(target,observable,value) tests");

test("create empty observable", function () {
	var ViewModel = {};
	ko.observable().punch(ViewModel, "emptyObservable");

	deepEqual(typeof(ViewModel.emptyObservable), "function", "emptyObservable is a function");
	ok(ViewModel.emptyObservable.toString().indexOf("observable") != -1, "emptyObservable function contains 'observable'");
});

test("create observable with value", function () {
	var ViewModel = {};
	ko.observable().punch(ViewModel, "populatedObservable", "value");

	deepEqual(typeof(ViewModel.populatedObservable), "function", "populatedObservable is a function");
	deepEqual(ViewModel.populatedObservable(), "value", "populatedObservable has expected value: 'value'");
});

module("ko.observable(value).punch(target,observable) tests");

test("create observable with value", function () {
	var ViewModel = {};
	ko.observable("value").punch(ViewModel, "populatedObservable");

	deepEqual(typeof(ViewModel.populatedObservable), "function", "populatedObservable is a function");
	deepEqual(ViewModel.populatedObservable(), "value", "populatedObservable has expected value: 'value'");
});

module("ko.observable().punch({ target: ..., observable: ..., value: ... }) tests");

test("create empty observable", function () {
	var ViewModel = {};
	ko.observable().punch({
		target: ViewModel,
		observable: "emptyObservable"
	});

	deepEqual(typeof(ViewModel.emptyObservable), "function", "emptyObservable is a function");
	ok(ViewModel.emptyObservable.toString().indexOf("observable") != -1, "emptyObservable function contains 'observable'");
});

test("create observable with value", function () {
	var ViewModel = {};
	ko.observable().punch({
		target: ViewModel,
		observable: "populatedObservable",
		value: "value"
	});

	deepEqual(typeof(ViewModel.populatedObservable), "function", "populatedObservable is a function");
	deepEqual(ViewModel.populatedObservable(), "value", "populatedObservable has expected value: 'value'");
});

module("ko.observable(value).punch({ target: ..., observable: ... }) tests");

test("create observable with value", function () {
	var ViewModel = {};
	ko.observable("value").punch({
		target: ViewModel,
		observable: "populatedObservable"
	});

	deepEqual(typeof(ViewModel.populatedObservable), "function", "populatedObservable is a function");
	deepEqual(ViewModel.populatedObservable(), "value", "populatedObservable has expected value: 'value'");
});