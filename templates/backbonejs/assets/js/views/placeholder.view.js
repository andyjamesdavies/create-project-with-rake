/*jslint eqeqeq: true, undef: true */
/*global App, $, _, Backbone */

App.views.Placeholder = Backbone.View.extend({
	
	className: 'placeholder',
	
	initialize: function () {
		_.bindAll(this, 'render');
		this.$el = $(this.el);
		
		this.render();
	},
	render: function () {
		
	}
});