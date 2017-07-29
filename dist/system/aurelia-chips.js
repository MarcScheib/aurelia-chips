System.register(["./chips-configuration", "./au-chips"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    exports_1("configure", configure);
    var chips_configuration_1;
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (chips_configuration_1_1) {
                chips_configuration_1 = chips_configuration_1_1;
            },
            function (au_chips_1_1) {
                exportStar_1(au_chips_1_1);
            }
        ],
        execute: function () {
        }
    };
});
