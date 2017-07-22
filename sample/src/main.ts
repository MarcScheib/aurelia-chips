import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-chips'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
