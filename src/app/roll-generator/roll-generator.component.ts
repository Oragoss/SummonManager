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
  public numberOfCreatures: number = 3;
  public enemyAC: number = 15;
  public armorClass: number = 8;
  public health: number = 30;
  public attackModifier: number = 4;
  public diceType: number = 4;
  public numberOfDice: number = 2;

  public summonedCreatures: SummonedCreature[] = [];

  public showRoller: boolean;

  constructor(private battleService: BattleService) { }

  ngOnInit() {
  }

  determineDiceType(e) {
    this.diceType = e.target.value;
  }

  generateSummons() {
    this.showRoller = true;
    this.summonedCreatures = this.battleService.generateSummons(this.numberOfCreatures, this.name, this.armorClass, this.health, this.attackModifier, this.diceType, this.numberOfDice);
  }

  attack() {
    this.battleService.setSummonCreatureDamage(this.attackModifier, this.diceType, this.numberOfDice, this.enemyAC, this.summonedCreatures)
    console.log(this.summonedCreatures[0])
    console.log(this.summonedCreatures[1])
    console.log(this.summonedCreatures[2])
  }
}