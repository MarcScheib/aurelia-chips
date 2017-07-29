define(["require", "exports", "./chips-configuration", "./au-chips"], function (require, exports, chips_configuration_1, au_chips_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(frameworkConfig, callback) {
        var applyConfig = null;
        var config = new chips_configuration_1.ChipsConfiguration(frameworkConfig, function (apply) { applyConfig = apply; });
        if (typeof callback === 'function') {
            callback(config);
        }
        else {
            config.useDefaults();
        }
        applyConfig();
    }
    exports.configure = configure;
    __export(au_chips_1);
});
