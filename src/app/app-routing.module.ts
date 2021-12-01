import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabMenuComponent } from './tab-menu/tab-menu.component';

const routes: Routes = [
  {
    path: 'new-customer', loadChildren:() => import('./new-customer/new-customer.module').then(mod => mod.NewCustomerModule)
  },
  {
    path: '', component: TabMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
