sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        isCustomer: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
