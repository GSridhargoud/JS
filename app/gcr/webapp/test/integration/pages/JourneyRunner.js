sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"gcr/test/integration/pages/GRHeadersList",
	"gcr/test/integration/pages/GRHeadersObjectPage",
	"gcr/test/integration/pages/GRItemsObjectPage"
], function (JourneyRunner, GRHeadersList, GRHeadersObjectPage, GRItemsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('gcr') + '/test/flp.html#app-preview',
        pages: {
			onTheGRHeadersList: GRHeadersList,
			onTheGRHeadersObjectPage: GRHeadersObjectPage,
			onTheGRItemsObjectPage: GRItemsObjectPage
        },
        async: true
    });

    return runner;
});

