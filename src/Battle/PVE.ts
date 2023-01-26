import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

type Enemy = (Fighter | SimpleFighter)[];

export default class PVE extends Battle {
  private _player: Fighter;
  private _environment: Enemy;

  constructor(player: Fighter, environment: Enemy) {
    super(player);

    this._player = player;
    this._environment = environment;
  }

  fight(): number {
    const battleOver: boolean = (
      this._player.lifePoints === -1
      || this._environment.every((enemy) => enemy.lifePoints === -1)
    );

    this._environment.forEach((enemy) => this._player.attack(enemy));
    this._environment.forEach((enemy) => enemy.attack(this._player));

    return battleOver ? super.fight() : this.fight();
  }
}
