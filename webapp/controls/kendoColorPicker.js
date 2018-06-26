sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
    "use strict";

    var KendoColorPicker = Control.extend("simple-app.controls.kendoColorPicker", {
        metadata: {
            properties: {
                "value": { type: "string", defaultValue: "#ffffff" }
            },
            aggregations: {
            },
            events: {
            }
        },

        init: function () {
            this.onColorChangeHandler = this.onColorChange.bind(this);
        },

        renderer: function (oRM, oControl) {

            oRM.write("<div class=kendoColorPicker");
            oRM.writeControlData(oControl);
            oRM.write(">");
            oRM.write("</div>");
        },

        onAfterRendering: function () {

            if (this.kendoWidget) {
                return;
            }

            this.kendoWidget = this.createKendoWidget();
        },

        exit: function () {
            if (!this.kendoWidget) {
                return;
            }

            this.kendoWidget.destroy();
            this.kendoWidget = null;
        },

        createKendoWidget: function () {
            var widget = $("#" + this.getId()).kendoColorPicker({}).data("kendoColorPicker");
            widget.bind("change", this.onColorChangeHandler);

            return widget;
        },

        onColorChange: function (e) {
            this.setValue(e.value);
        }
    });

    KendoColorPicker.prototype.setValue = function (newValue) {
        this.setProperty("value", newValue, true);

        if (this.kendoWidget) {
            this.kendoWidget.value(newValue);
        }
    }

    return KendoColorPicker;
});