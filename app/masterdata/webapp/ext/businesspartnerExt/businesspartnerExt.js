sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        isVendor: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});