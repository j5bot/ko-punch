/* ko-punch: knockout.ko-punch.js */

(function (ko,undefined) {

	var _kopunch_;

	/*
	 * To create an easy-punch ViewModel, inherit from PunchViewModel using prototypal inheritance
	 * 
	 * example:
	 *	
	 *	function ViewModel () {}
	 *	ViewModel.prototype = new PunchViewModel();
	 *	var vm = new ViewModel();
	 *
	 * Alternatively, extend either a new PunchModel or the PunchModel constructor either with
	 * raw javascript or your library's extension method
	 *
	 * examples:
	 *
	 *	ViewModel.punch = PunchViewModel.punch;
	 *
	 *	$.extend(true, ViewModel, new PunchViewModel());
	 *	$.extend(true, ViewModel, { punch: PunchViewModel.punch });
	 *
	 */
	function PunchViewModel () {}
	
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

	PunchViewModel.prototype = {
		punch: function (observable, value) {
			if (arguments.length == 0) {
				return this.punch;
			}
			if (typeof(observable) != "string") {
				value = observable.value;
				observable = observable.observable;
			}
			return _kopunch_.observable.call(this, observable, value);
		}
	};
	PunchViewModel.punch = PunchViewModel.prototype.punch;	
	_kopunch_ = PunchViewModel.punch.fn = PunchViewModel.punch.prototype = {
		base: function (type, observable, value) {
			if (typeof(observable) !== "string") {
				value = observable.value;
				observable = observable.observable;
			}
			return ko[type]().punch(this, observable, value);
		},
		subscribable: function (observable, value) {
			return _kopunch_.base.call(this, "subscribable", observable, value);
		},
		observable: function (observable, value) {
			return _kopunch_.base.call(this, "observable", observable, value);
		},
		observableArray: function (observable, value) {
			return _kopunch_.base.call(this, "observableArray", observable, value);
		}
	};
	/*
	PunchViewModel.punch.base = function () { return _kopunch_.base.apply(PunchViewModel, arguments) };
	PunchViewModel.punch.subscribable = function () { return _kopunch_.subscribable.apply(PunchViewModel, arguments) };
	PunchViewModel.punch.observable = function () { return _kopunch_.observable.apply(PunchViewModel, arguments) };
	PunchViewModel.punch.observableArray = function () { return _kopunch_.observableArray.apply(PunchViewModel, arguments) };
	*/
	PunchViewModel.punch.base = _kopunch_.base;
	PunchViewModel.punch.subscribable = _kopunch_.subscribable;
	PunchViewModel.punch.observable = _kopunch_.observable;
	PunchViewModel.punch.observableArray = _kopunch_.observableArray;
	
	/*
	 * call with either all three params or a params object with target, observable, value properties
	 * values option is totally optional and it may make more sense to you to put the value into the
	 * observable before the punch is processed
	 *
	 * examples:
	 *
	 *	ko.observable().punch(viewModel, "lazyProperty"); 				 // creates viewModel.lazyProperty with undefined value
	 *	ko.observable().punch(viewModel, "lazyProperty", "zzzzZZZZzzz"); // creates viewModel.lazyProperty with initial value
	 *
	 *	ko.observable("zzzzZZZZZzzzz").punch(viewModel, "lazyProperty"); // creates viewModel.lazyProperty with initial value
	 *
	 *	ko.observable().punch({
	 *		target: viewModel,
	 *		observable: "lazyProperty",
	 *		value: "zzzzZZZZZzzzz"
	 *	});																 // creates viewModel.lazyProperty with initial value
	 *
	 */
	ko.subscribable.fn.punch = function (target,observable,value) {
		if (observable == undefined) {
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

	// Attach base punch view model to knockout
	ko.baseModels = ko.baseModels || {};
	ko.baseModels.PunchViewModel = PunchViewModel;

})(ko);