import { Component, Input } from '@angular/core';

@Component({
  selector: 'attribute',
  template: `<h1>Attribute: {{name}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class AttributeComponent  {
  @Input() name: string;
}