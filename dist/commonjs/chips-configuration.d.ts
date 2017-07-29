import { FrameworkConfiguration } from 'aurelia-framework';
export declare class ChipsConfiguration {
    private frameworkConfig;
    private resources;
    constructor(frameworkConfig: FrameworkConfiguration, applySetter: (apply: () => void) => void);
    private apply();
    useDefaults(): this;
    useStandardResources(): this;
    useResource(resourceName: string): this;
}
