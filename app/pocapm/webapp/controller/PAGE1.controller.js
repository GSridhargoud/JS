sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], (Controller,UIComponent) => {
    "use strict";

    return Controller.extend("pocapm.controller.PAGE1", {
        onInit() {
        },
        Vendor:function(){
            var a = UIComponent.getRouterFor(this);
            a.navTo("Vendor")
        },
        Material:function(){
            var a = UIComponent.getRouterFor(this);
            a.navTo("material")
        },
        GoodsHeader:function(){
            var a = UIComponent.getRouterFor(this);
            a.navTo("GoodsHeader")
        },
        GoodsItems:function(){
            var a = UIComponent.getRouterFor(this);
            a.navTo("GoodsItems")
        },
        InvHeader:function(){
            var a = UIComponent.getRouterFor(this);
            a.navTo("InvHeader")
        },
        InvItems:function(){
            var a = UIComponent.getRouterFor(this);
            a.navTo("InvItems")
        },
        POHeader:function(){
            var a = UIComponent.getRouterFor(this);
            a.navTo("POHeader")
        },
        POItems:function(){
            var a = UIComponent.getRouterFor(this);
            a.navTo("POItems")
        },
        Audit:function(){
            var a = UIComponent.getRouterFor(this);
            a.navTo("Audit")
        }
    });
    });