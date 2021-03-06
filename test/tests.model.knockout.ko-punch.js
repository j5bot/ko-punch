module("model .punch.subscribable(observable,value)");

test("create subscribable", function () {
	var ViewModel = {};
	ViewModel.punch = ko.punch(ViewModel);

	ViewModel.punch.subscribable("defaultSubscribable");

	deepEqual(typeof(ViewModel.defaultSubscribable.notifySubscribers),"function", "defaultSubscribable.notifySubscribers is a function");
	deepEqual(typeof(ViewModel.defaultSubscribable.subscribe),"function", "defaultSubscribable.subscribe is a function");
});

test("test subscribable notifications", function () {
	var ViewModel = {};
	ViewModel.punch = ko.punch(ViewModel);

	ViewModel.punch.subscribable("defaultSubscribable");

	var valueIn = "this value", valueOut;

	deepEqual(typeof(ViewModel.defaultSubscribable.notifySubscribers),"function", "defaultSubscribable.notifySubscribers is a function");
	deepEqual(typeof(ViewModel.defaultSubscribable.subscribe),"function", "defaultSubscribable.subscribe is a function");

	ViewModel.defaultSubscribable.subscribe(function (value) {
		valueOut = value;
	}, this, "value");

	ViewModel.defaultSubscribable.notifySubscribers(valueIn, "value");

	deepEqual(valueOut, valueIn, "notification resulted in correct output 'this value'");
});

module("model .punch(observable,value) tests");

test("create empty observable", function () {
	var ViewModel = {};
	ViewModel.punch = ko.punch(ViewModel);

	ViewModel.punch("emptyObservable");

	deepEqual(typeof(ViewModel.emptyObservable), "function", "emptyObservable is a function");
	ok(ViewModel.emptyObservable.toString().indexOf("observable") != -1, "emptyObservable function contains 'observable'");
});

test("create populated observable", function () {
	var ViewModel = {};
	ViewModel.punch = ko.punch(ViewModel);

	ViewModel.punch("populatedObservable", "value");

	deepEqual(typeof(ViewModel.populatedObservable), "function", "populatedObservable is a function");
	deepEqual(ViewModel.populatedObservable(), "value", "populatedObservable has expected value: 'value'");
});

module("model .punch({ observable: ..., value: ... }) tests");

test("create empty observable", function () {
	var ViewModel = {};
	ViewModel.punch = ko.punch(ViewModel);

	ViewModel.punch({ observable: "emptyObservable" });

	deepEqual(typeof(ViewModel.emptyObservable), "function", "emptyObservable is a function");
	ok(ViewModel.emptyObservable.toString().indexOf("observable") != -1, "emptyObservable function contains 'observable'");
});

test("create populated observable", function () {
	var ViewModel = {};
	ViewModel.punch = ko.punch(ViewModel);

	ViewModel.punch({ observable: "populatedObservable", value: "value" });

	deepEqual(typeof(ViewModel.populatedObservable), "function", "populatedObservable is a function");
	deepEqual(ViewModel.populatedObservable(), "value", "populatedObservable has expected value: 'value'");
});

module("model .punch.observable(observable,value)");

test("create empty observable", function () {
	var ViewModel = {};
	ViewModel.punch = ko.punch(ViewModel);

	ViewModel.punch.observable("emptyObservable");

	deepEqual(typeof(ViewModel.emptyObservable),"function", "emptyObservable is a function");
	ok(ViewModel.emptyObservable.toString().indexOf("observable") != -1, "emptyObservable function contains 'observable'");
});

test("create populated observable", function () {
	var ViewModel = {};
	ViewModel.punch = ko.punch(ViewModel);

	ViewModel.punch.observable({ observable: "populatedObservable", value: "value" });

	deepEqual(typeof(ViewModel.populatedObservable), "function", "populatedObservable is a function");
	deepEqual(ViewModel.populatedObservable(), "value", "populatedObservable has expected value: 'value'");
});

module("model .punch.observableArray(observable,values)");

test("create empty observableArray", function () {
	var ViewModel = {};
	ViewModel.punch = ko.punch(ViewModel);

	ViewModel.punch.observableArray("emptyObservableArray");

	deepEqual(typeof(ViewModel.emptyObservableArray),"function", "emptyObservableArray is a function");
	ok(ViewModel.emptyObservableArray.toString().indexOf("observable") != -1, "emptyObservableArray function contains 'observable'");
});

test("create populated observableArray", function () {
	var ViewModel = {};
	ViewModel.punch = ko.punch(ViewModel);

	ViewModel.punch.observableArray({ observable: "populatedObservableArray", value: [1,2,3] });

	deepEqual(typeof(ViewModel.populatedObservableArray), "function", "populatedObservableArray is a function");
	deepEqual(ViewModel.populatedObservableArray(), [1,2,3], "populatedObservableArray has expected value: [1,2,3]");
});
