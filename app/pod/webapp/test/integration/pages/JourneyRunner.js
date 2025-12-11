sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"pod/test/integration/pages/POHeadersList",
	"pod/test/integration/pages/POHeadersObjectPage",
	"pod/test/integration/pages/POItemsObjectPage"
], function (JourneyRunner, POHeadersList, POHeadersObjectPage, POItemsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('pod') + '/test/flp.html#app-preview',
        pages: {
			onThePOHeadersList: POHeadersList,
			onThePOHeadersObjectPage: POHeadersObjectPage,
			onThePOItemsObjectPage: POItemsObjectPage
        },
        async: true
    });

    return runner;
});

