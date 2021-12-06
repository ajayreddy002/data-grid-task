import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import { BaseAPIServices } from 'src/app/_services/base-api-services';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import {PaginatorModule} from 'primeng/paginator';
@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    TabMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    TabMenuModule,
    InputSwitchModule,
    DropdownModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    PaginatorModule
  ],
  providers: [
    BaseAPIServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
