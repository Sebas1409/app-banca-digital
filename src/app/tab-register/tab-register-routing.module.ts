import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabRegisterPage } from './tab-register.page';

const routes: Routes = [
  {
    path: '',
    component: TabRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRegisterPageRoutingModule {}
