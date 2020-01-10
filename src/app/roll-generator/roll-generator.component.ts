import { Component, OnInit } from '@angular/core';
import { SummonedCreature } from '../models/SummonedCreature';
import { BattleService } from '../shared/battle.service';

@Component({
  selector: 'app-roll-generator',
  templateUrl: './roll-generator.component.html',
  styleUrls: ['./roll-generator.component.css']
})
export class RollGeneratorComponent implements OnInit {

  public name: string = 'Dryad, water elemental, wolf, etc...';
  public numberOfCreatures: number = 1;
  public armorClass: number = 8;
  public health: number = 30;
  public attackModifier: number = 4;
  public diceType: number;
  public numberOfDice: number = 2;

  public summonedCreatures: SummonedCreature[] = [];

  public showRoller: boolean;

  constructor(private battleService: BattleService) { }

  ngOnInit() {
  }

  determineDiceType(e) {
    console.log(e.target.value);
    this.diceType = e.target.value;
  }

  generateBattle() {
    this.showRoller = true;
    for(let i = 0; i < this.numberOfCreatures; i++) {
      this.summonedCreatures.push({
        Name: this.name,
        ArmorClass: this.armorClass,
        Health: this.health,
        AttackModifier: this.attackModifier,
        DiceType: this.diceType,
        NumberOfDice: this.numberOfDice
      });
    }
  }
}
