import { ChipsConfiguration } from './chips-configuration';
export function configure(frameworkConfig, callback) {
    var applyConfig = null;
    var config = new ChipsConfiguration(frameworkConfig, function (apply) { applyConfig = apply; });
    if (typeof callback === 'function') {
        callback(config);
    }
    else {
        config.useDefaults();
    }
    applyConfig();
}
export * from './au-chips';
