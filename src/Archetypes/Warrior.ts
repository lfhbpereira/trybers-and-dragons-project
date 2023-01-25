import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _archetypeCounter = 0;
  private _energyType: 'mana' | 'stamina';

  constructor(name: string) {
    super(name);

    Warrior._archetypeCounter += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this._archetypeCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
