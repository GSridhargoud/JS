using GRService as service from '../../srv/gr-service';
annotate service.GRHeaders with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : gr_number,
            },
            {
                $Type : 'UI.DataField',
                Value : gr_date,
            },
            {
                $Type : 'UI.DataField',
                Value : gr_stor_loc,
            },
            {
                $Type : 'UI.DataField',
                Value : gr_status,
            },
            {
                $Type : 'UI.DataField',
                Value : gr_item_receivedquan,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : gr_number,
        },
        {
            $Type : 'UI.DataField',
            Value : gr_date,
        },
        {
            $Type : 'UI.DataField',
            Value : gr_stor_loc,
        },
        {
            $Type : 'UI.DataField',
            Value : gr_status,
        },
        {
            $Type : 'UI.DataField',
            Value : gr_item_receivedquan,
        },
    ],
);

