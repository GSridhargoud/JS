sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"auds/test/integration/pages/POAuditsList",
	"auds/test/integration/pages/POAuditsObjectPage"
], function (JourneyRunner, POAuditsList, POAuditsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('auds') + '/test/flp.html#app-preview',
        pages: {
			onThePOAuditsList: POAuditsList,
			onThePOAuditsObjectPage: POAuditsObjectPage
        },
        async: true
    });

    return runner;
});

