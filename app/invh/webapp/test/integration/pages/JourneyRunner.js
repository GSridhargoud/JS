sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"invh/test/integration/pages/InvoiceHeadersList",
	"invh/test/integration/pages/InvoiceHeadersObjectPage",
	"invh/test/integration/pages/InvoiceItemsObjectPage"
], function (JourneyRunner, InvoiceHeadersList, InvoiceHeadersObjectPage, InvoiceItemsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('invh') + '/test/flp.html#app-preview',
        pages: {
			onTheInvoiceHeadersList: InvoiceHeadersList,
			onTheInvoiceHeadersObjectPage: InvoiceHeadersObjectPage,
			onTheInvoiceItemsObjectPage: InvoiceItemsObjectPage
        },
        async: true
    });

    return runner;
});

