import { Component, Input } from '@angular/core';
import { Character } from './character';
import { CHARACTER } from './mock-character.ts';
@Component({
  selector: 'app-character',
  templateUrl: `./character.component.html`,
  styleUrls: [`./character.component.css`]
})
export class CharacterComponent implements OnInit {
  character = CHARACTER;

  constructor() {}
  ngOnInit() {}
}
