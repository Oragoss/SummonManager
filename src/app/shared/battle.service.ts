import { Injectable } from '@angular/core';
import { SummonedCreature } from '../models/SummonedCreature';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() { }

  public generateSummons(numberOfCreatures, name, armorClass, health, attackModifier, diceType, numberOfDice): SummonedCreature[] {
    let summonedCreatures: SummonedCreature[] = [];

    for(let i = 0; i < numberOfCreatures; i++) {
      summonedCreatures.push({
        Name: name,
        ArmorClass: armorClass,
        Health: health,
        AttackModifier: attackModifier,
        DiceType: diceType,
        NumberOfDice: numberOfDice,
        CurrentDamage: ""
      });
    }
    return summonedCreatures;
  }

  /**
   * This method will give you the attack of all your summons and the damage they do IF they hit.
   * @param {number} attackModifier
   * @param {number} diceType
   * @param {number} numberOfDice
   * @param {number} enemyAC
   */
  public setSummonCreatureDamage(attackModifier: number, diceType: number, numberOfDice: number, enemyAC: number, summonedCreatures: SummonedCreature[]): void {
    for(let x = 0; x < summonedCreatures.length; x++) {
      const roll20 = Math.random() * (Math.floor(20) + 1);
      if(roll20 + attackModifier >= enemyAC) {
        let dps = 0;
        for(let y = 0; y < numberOfDice; y++) {
          let p = (Math.random() * (Math.floor(Number(diceType)) + 1));
          dps += Number(p.toFixed(0));
        }
        summonedCreatures[x].CurrentDamage = (dps).toString();
      }
    }
  }
}
