sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'gcr',
            componentId: 'GRItemsObjectPage',
            contextPath: '/GRHeaders/to_gr_items'
        },
        CustomPageDefinitions
    );
});