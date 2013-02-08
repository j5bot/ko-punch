ko-punch
=======================
KnockoutJS function and extensions to work with "punched in" (lazy-created) observables.

These observables will be created when you want to assign values to them, before you assign values, or if there are no assigned values, you don't need to worry about defining them.

Usage
-----------------------
Include <a href="https://raw.github.com/j5bot/ko-punch/master/src/knockout.ko-punch.js">knockout.ko-punch.js</a> or <a href="https://raw.github.com/j5bot/ko-punch/master/src/knockout.ko-punch.min.js">knockout.ko-punch.min.js</a> in an appropriate place in your markup.

Create your ViewModel as usual.

Add the ability to directly "punch" onto your ViewModel by running something like:

	ViewModel.punch = ko.punch(ViewModel);

Use it like this:

	ViewModel.punch("newObservable", "newValue");
	ViewModel.punch.observableArray("newObservableArray", [1,2,3]);

Wherein you pass the ViewModel as a parameter into ko.punch and assign the function/object which is returned to a property of your ViewModel.

You may also use ko-punch without attaching it to your ViewModel.  To do that, you call punch on any type of KO observable/subscribable.  For example:

	ko.observable(ViewModel, "newObservable", "newValue");
	ko.observableArray(ViewModel, "newObservableArray", [1,2,3]);

License
-----------------------
ko-punch is licensed under the MIT license.

Test Coverage
-----------------------
You can run the unit tests for ko-punch by visiting <a href="http://j5bot.github.com/ko-punch/test/index.html">unminified</a> and <a href="http://j5bot.github.com/ko-punch/test/minified.html">minified</a> QUnit test pages.