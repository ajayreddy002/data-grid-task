import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { NewCustomerComponent } from './new-customer.component';

const routes: Routes = [
  {path: '', component: NewCustomerComponent, children: [
    {path: 'basic-info', component: BasicInfoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCustomerRoutingModule { }
