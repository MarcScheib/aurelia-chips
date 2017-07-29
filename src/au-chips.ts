import { customElement, inlineView } from 'aurelia-templating';

@customElement('au-chips')
@inlineView(`
  <template>
    <slot></slot>
  </template>
`)
export class AuChips {

}
