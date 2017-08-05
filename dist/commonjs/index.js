"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var chips_configuration_1 = require("./chips-configuration");
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
__export(require("./au-chips"));
