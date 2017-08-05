"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pal_1 = require("aurelia-pal");
var resources = {
    'au-chips': aurelia_pal_1.PLATFORM.moduleName('./au-chips')
};
var ChipsConfiguration = (function () {
    function ChipsConfiguration(frameworkConfig, applySetter) {
        var _this = this;
        this.resources = [];
        this.frameworkConfig = frameworkConfig;
        applySetter(function () { return _this.apply(); });
    }
    ChipsConfiguration.prototype.apply = function () {
        var _this = this;
        this.resources.forEach(function (resourceName) {
            console.log(resourceName);
            console.log(resources[resourceName]);
            _this.frameworkConfig.globalResources(resources[resourceName]);
        });
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
exports.ChipsConfiguration = ChipsConfiguration;
