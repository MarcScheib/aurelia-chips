System.register(["aurelia-pal"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_pal_1, resources, ChipsConfiguration;
    return {
        setters: [
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            }
        ],
        execute: function () {
            resources = {
                'au-chips': aurelia_pal_1.PLATFORM.moduleName('./au-chips')
            };
            ChipsConfiguration = (function () {
                function ChipsConfiguration(frameworkConfig, applySetter) {
                    var _this = this;
                    this.resources = [];
                    this.frameworkConfig = frameworkConfig;
                    applySetter(function () { return _this.apply(); });
                }
                ChipsConfiguration.prototype.apply = function () {
                    var _this = this;
                    this.resources.forEach(function (resourceName) { return _this.frameworkConfig.globalResources(resources[resourceName]); });
                };
                ChipsConfiguration.prototype.useDefaults = function () {
                    return this.useStandardResources();
                };
                ChipsConfiguration.prototype.useStandardResources = function () {
                    return this.useResource('au-chips');
                };
                ChipsConfiguration.prototype.useResource = function (resourceName) {
                    this.resources.push(resourceName);
                    return this;
                };
                return ChipsConfiguration;
            }());
            exports_1("ChipsConfiguration", ChipsConfiguration);
        }
    };
});
