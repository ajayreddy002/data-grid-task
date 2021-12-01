import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCustomerRoutingModule } from './new-customer-routing.module';
import { NewCustomerComponent } from './new-customer.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    NewCustomerComponent,
    BasicInfoComponent
  ],
  imports: [
    CommonModule,
    NewCustomerRoutingModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
  ]
})
export class NewCustomerModule { }
