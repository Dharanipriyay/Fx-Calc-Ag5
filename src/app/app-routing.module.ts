import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoneycalcComponent } from './moneycalc/moneycalc.component';

const routes: Routes = [
  {
    path: '',
    component: MoneycalcComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
