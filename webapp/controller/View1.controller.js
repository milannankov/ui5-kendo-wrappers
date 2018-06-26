sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("simple-app.controller.View1", {
		onInit: function () {
			var oViewModel = new JSONModel({
				color: "#FFFFFF"
			});

			this.getView().setModel(oViewModel);
		},

		onBeforeRendering: function () {
		},

		onAfterRendering: function () {
		},

		onExit: function () {
		},
	});
});