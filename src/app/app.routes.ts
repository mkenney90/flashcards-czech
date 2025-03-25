import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { ProgressComponent } from './progress/progress.component';

export const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'progress', component: ProgressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
