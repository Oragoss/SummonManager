import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RollGeneratorComponent } from './roll-generator/roll-generator.component';
import { ChooseClassComponent } from './choose-class/choose-class.component';

const routes: Routes = [
  {path: '', component: ChooseClassComponent},
  {path: 'roll', component: RollGeneratorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouteComponents = [
  RollGeneratorComponent,
  ChooseClassComponent
];
