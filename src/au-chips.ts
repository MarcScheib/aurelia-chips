import { customElement, inlineView } from 'aurelia-templating';

@customElement('au-chips')
@inlineView(`
  <template>
    <div>
      <ul>
        <li repeat.for="value of values">\${value}</li>
        <li>
          <input type="text" keydown.delegate="onKeyDown($event, inputElement)" ref="inputElement">
        </li>
      </ul>
    </div>
  </template>
`)
export class AuChips {
  allowDuplicates: boolean;
  maxLength: number;

  values: any;

  onKeyDown(event: KeyboardEvent, inputEL: HTMLInputElement): boolean {
    switch (event.which) {
      // backspace
      case 8:
        if (inputEL.value.length > 0) {
          return true;
        } else if (inputEL.value.length === 0 && this.values && this.values.length > 0) {
          this.values = [...this.values];
          this.values.pop();
        }
        break;
      // enter
      case 13:
        this.addItem(event, inputEL.value);
        inputEL.value = '';
        break;
      default:
        return true;
    }
    return false;
  }

  addItem(event: Event, item: string): void {
    this.values = this.values || [];
    if (item && item.trim().length && (!this.maxLength || this.maxLength > item.length)) {
      if (this.allowDuplicates || !this.values.includes(item)) {
        this.values = [...this.values, item];
      }
    }
  }
}
