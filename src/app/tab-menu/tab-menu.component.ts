import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BaseAPIServices } from 'src/app/_services/base-api-services';
import { IAllCustomerModel, IAllHeaderColums } from '../models/table-model';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {
  items: any[] = [];
  checked!: boolean;
  cities: any[] = [];
  selectedCity: any;
  products: any[] = [];
  showAllTable = true;
  allCustomerColumns: IAllHeaderColums[] = [];
  allCustomerData: IAllCustomerModel[] = [];
  constructor(
    private httpClient: HttpClient,
    private baseAPIServices: BaseAPIServices
  ) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.allCustomerColumns = [
      { header: 'Customer ID', field: 'customerId' },
      { header: 'DK Number', field: 'dkNumber' },
      { header: 'Company Name', field: 'companyName' },
      { header: 'platform', field: 'platform' },
      { header: 'distribution', field: 'distribution' },
      { header: 'customerType', field: 'customerType' },
      { header: 'email', field: 'email' },
      { header: 'phone', field: 'phone' },
      { header: 'accountManager', field: 'accountManager' },
    ];
    this.getAllCustomersData();
  }
  getAllCustomersData() {
    this.baseAPIServices.getMethod('customer/all-customers')
      .subscribe(
        (data: any) => {
          console.log(data);
          this.allCustomerData = data;
        }, (err: any) => {
          console.log(err);
        }
      )
  }
  getCustomerByCompanyName(event: any) {
    this.baseAPIServices.getDataByCompanyName(event.target.value)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.allCustomerData = data;
        }, err => {
          console.log(err);
        }
      )
  }

}
