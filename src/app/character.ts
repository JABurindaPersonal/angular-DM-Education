import { Attribute } from './attribute';
import { Proficiency } from './proficiency';
export class Character {
  id: number;
  name: string;
  str: Attribute;
  int: Attribute;
  wis: Attribute;
  dex: Attribute;
  con: Attribute;
  chr: Attribute;
  proficiencies : Proficiency[];
}