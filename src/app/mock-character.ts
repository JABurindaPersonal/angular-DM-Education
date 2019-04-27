import { Character } from './character';

export const CHARACTER: Character = {
  id: 1,
  name: 'Lotor McCleave',
  str: {name:"Strength", value:15} , int: 10, wis: 12, dex: 13, con: 14, chr: 8 ,
  proficiencies: [{ type: "Armor", value: "Heavy" }, { type: "Armor", value: "Medium" }, { type: "Armor", value: "Light" }]
};