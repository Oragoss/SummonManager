import { Component, OnInit } from '@angular/core';
import { Spell } from '../models/Spell';

@Component({
  selector: 'app-choose-class',
  templateUrl: './choose-class.component.html',
  styleUrls: ['./choose-class.component.css']
})
export class ChooseClassComponent implements OnInit {

  spells: Spell[] = [];
  summonElementals: Spell;
  summonWoodlandBeings: Spell;

  constructor() { }

  ngOnInit() {
    this.summonElementals =  {
      Name: 'Summon Elementals',
      Classes: ['Wizard', 'Druid', 'Warlock']
    }
    this.summonWoodlandBeings =  {
      Name: 'Summon Woodland Beings',
      Classes: ['Cleric', 'Druid', 'Warlock']
    }

    this.spells.push(this.summonElementals, this.summonWoodlandBeings)
  }

  selectSpellList(e) {
    const playerClass = e.target.id;

    switch(playerClass) {
      case 'druid':
        break;
      case 'wizard':
        break;
      case 'cleric':
        break;
      case 'sorcerer':
        break;
      case 'warlock':
        break;
    }
  }
}
