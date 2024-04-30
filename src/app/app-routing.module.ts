import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmwModelsComponent } from './pages/bmw-models/bmw-models.component';

const routes: Routes = [
  {path: '', component: BmwModelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
