import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuaggansComponent } from './quaggans/quaggans.component';
import { DailyCraftingComponent } from './daily-crafting/daily-crafting.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'quaggans', component: QuaggansComponent },
      { path: 'daily-crafting', component: DailyCraftingComponent },
      { path: '', redirectTo: '/daily-crafting', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
