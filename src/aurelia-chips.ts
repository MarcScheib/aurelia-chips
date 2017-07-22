import { FrameworkConfiguration } from 'aurelia-framework';
import {ChipsConfiguration} from './chips-configuration';

export function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: ChipsConfiguration) => void): void {
  const config = new ChipsConfiguration(frameworkConfig);
  if (typeof callback === 'function') {
    callback(config);
  } else {
    config.useDefaults();
  }
}
