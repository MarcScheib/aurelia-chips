import { PLATFORM } from 'aurelia-pal';
const resources = {
    'au-chips': PLATFORM.moduleName('./au-chips')
};
export class ChipsConfiguration {
    constructor(frameworkConfig, applySetter) {
        this.resources = [];
        this.frameworkConfig = frameworkConfig;
        applySetter(() => this.apply());
    }
    apply() {
        this.resources.forEach(resourceName => {
            console.log(resourceName);
            console.log(resources[resourceName]);
            this.frameworkConfig.globalResources(resources[resourceName]);
        });
    }
    useDefaults() {
        return this.useStandardResources();
    }
    useStandardResources() {
        return this.useResource('au-chips');
    }
    useResource(resourceName) {
        this.resources.push(resourceName);
        return this;
    }
}
