/** 
 * @preserve ko-punch knockoutjs extensions v0
 * http://github.com/j5bot/ko-punch
 *
 * Copyright (c) 2013 Jonathan 'J5' Cook <jonathan.j5.cook@gmail.com>
 * MIT License: http://github.com/j5bot/ko-punch/blob/master/LICENSE
 */

/*jshint*/
/*global ko: true */

(function (ko, undefined) {

	/*
	 * the punch function creates a new observable on the inheriting ViewModel
	 *
	 * the punch function's prototype creates a namespace and implements the
	 * functionality (based on the ko.observable().punch() extension method
	 *
	 * examples:
	 *
	 *	ViewModel.punch("eeny", "meeny");
	 *
	 *	ViewModel.punch().observable("miney","moe");
	 *	ViewModel.punch().observableArray("catcha","tiger");
	 *	ViewModel.punch().subscribable("byhis","toe");
	 *
	 *	ViewModel.punch().base("customObservableType","custom","observable type");
	 *
	 */

	var kopunch = function (target) {
		var punched = target;

		var _punch_ = function (observable, value) {
			_punch_.base.call(punched, "observable", observable, value);
		};
		_punch_.base = function (type, observable, value) {
			if (typeof(observable) !== "string") {
				value = observable.value;
				observable = observable.observable;
			}
			return ko[type]().punch(punched, observable, value);
		};
		_punch_.subscribable = function (observable) {
			return punched[observable] = new ko.subscribable();
		};
		_punch_.observable = function (observable, value) {
			return _punch_.base("observable", observable, value);
		};
		_punch_.observableArray = function (observable, value) {
			return _punch_.base("observableArray", observable, value);
		};

		return _punch_;
	};

	/*
	 * call with either all three params or a params object with target, observable, value properties
	 * values option is totally optional and it may make more sense to you to put the value into the
	 * observable before the punch is processed
	 *
	 * examples:
	 *
	 *	ko.observable().punch(viewModel, "lazyProperty");					// creates viewModel.lazyProperty with undefined value
	 *	ko.observable().punch(viewModel, "lazyProperty", "zzzzZZZZzzz");	// creates viewModel.lazyProperty with initial value
	 *
	 *	ko.observable("zzzzZZZZZzzzz").punch(viewModel, "lazyProperty");	// creates viewModel.lazyProperty with initial value
	 *
	 *	ko.observable().punch({
	 *		target: viewModel,
	 *		observable: "lazyProperty",
	 *		value: "zzzzZZZZZzzzz"
	 *	});																	// creates viewModel.lazyProperty with initial value
	 *
	 */
	ko.subscribable.fn.punch = function (target,observable,value) {
		if (!target) return;
		if (observable === undefined) {
			observable = target.observable;
			value = target.value;
			target = target.target;
		}
		if (!target.observable) {
			target[observable] = this;
		}
		if (value) { this(value); }
		return this;
	};

	/*
	 * attach to your ViewModel with the ko.punch method
	 * 
	 * example:
	 *
	 *	ViewModel.punch = ko.punch(ViewModel);
	 *
	 */
	ko.punch = kopunch;

})(ko);