/*jslint eqeqeq: true, undef: true */
/*global require, define, window, document, $, _, Backbone, App */

require([
	'order!app.def',
	'order!../../libs/jquery.min',
	'order!../../libs/underscore.min',
	'order!../../libs/backbone.min'
], function () {
	var AppView = Backbone.View.extend();
	App.view = new AppView();
});
