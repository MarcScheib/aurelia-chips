import {FrameworkConfiguration} from 'aurelia-framework';
import {ChipsConfiguration} from './chips-configuration';

export function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: ChipsConfiguration) => void): void {
  let applyConfig: () => void = null as any;
  const config = new ChipsConfiguration(frameworkConfig,  (apply: () => void) => { applyConfig = apply; });
  if (typeof callback === 'function') {
    callback(config);
  } else {
    config.useDefaults();
  }
  applyConfig();
}

export * from './au-chips';
