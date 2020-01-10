import { Component, OnInit } from '@angular/core';
// import { Spell } from '../models/Spell';
import { ChooseSpellService } from '../shared/choose-spell.service';

@Component({
  selector: 'app-choose-class',
  templateUrl: './choose-class.component.html',
  styleUrls: ['./choose-class.component.css']
})
export class ChooseClassComponent implements OnInit {

  // spells: Spell[];

  // hideDruidSpellList: boolean;
  // hideWizardSpellList: boolean;
  // hideClericSpellList: boolean;
  // hideSorcererSpellList: boolean;
  // hideWarlockSpellList: boolean;

  constructor(private chooseSpellService: ChooseSpellService) { }

  ngOnInit() {
    // this.spells = this.chooseSpellService.getSpells();
  }

  // selectSpellList(e) {
  //   const playerClass = e.target.id;

  //   switch(playerClass) {
  //     case 'druid':
  //         this.hideDruidSpellList = true;
  //       break;
  //     case 'wizard':
  //         this.hideWizardSpellList = true;
  //       break;
  //     case 'cleric':
  //         this.hideClericSpellList = true;
  //       break;
  //     case 'sorcerer':
  //         this.hideSorcererSpellList = true;
  //       break;
  //     case 'warlock':
  //         this.hideWarlockSpellList = true;
  //       break;
  //   }
  // }

  // resetClassList() {
  //   this.hideDruidSpellList = false;
  //   this.hideWizardSpellList = false;
  //   this.hideClericSpellList = false;
  //   this.hideSorcererSpellList = false;
  //   this.hideWarlockSpellList = false;
  // }
}
