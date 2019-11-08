import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExcelComponent} from './upload/excel/excel.component';

const routes: Routes = [
  {path:'', component: ExcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
