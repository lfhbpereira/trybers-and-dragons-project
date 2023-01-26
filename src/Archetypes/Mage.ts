import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static _archetypeCounter = 0;
  private _energyType: 'mana' | 'stamina';

  constructor(name: string) {
    super(name);

    Mage._archetypeCounter += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this._archetypeCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
