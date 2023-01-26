import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _archetypeCounter = 0;
  private _energyType: 'mana' | 'stamina';

  constructor(name: string) {
    super(name);

    Ranger._archetypeCounter += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this._archetypeCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
