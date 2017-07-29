import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

const resources: { [key: string]: string } = {
  'au-chips': PLATFORM.moduleName('./au-chips')
};

export class ChipsConfiguration {
  private frameworkConfig: FrameworkConfiguration;
  private resources: string[] = [];

  constructor(frameworkConfig: FrameworkConfiguration, applySetter: (apply: () => void) => void) {
    this.frameworkConfig = frameworkConfig;
    applySetter(() => this.apply());
  }

  private apply() {
    this.resources.forEach(resourceName => {
      console.log(resourceName);
      console.log(resources[resourceName]);
      this.frameworkConfig.globalResources(resources[resourceName])
    });
  }

  public useDefaults() {
    return this.useStandardResources();
  }

  public useStandardResources(): this {
    return this.useResource('au-chips');
  }

  public useResource(resourceName: string): this {
    this.resources.push(resourceName);
    return this;
  }
}
