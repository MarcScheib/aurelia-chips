import { ChipsConfiguration } from './chips-configuration';
export function configure(frameworkConfig, callback) {
    let applyConfig = null;
    const config = new ChipsConfiguration(frameworkConfig, (apply) => { applyConfig = apply; });
    if (typeof callback === 'function') {
        callback(config);
    }
    else {
        config.useDefaults();
    }
    applyConfig();
}
export * from './au-chips';
