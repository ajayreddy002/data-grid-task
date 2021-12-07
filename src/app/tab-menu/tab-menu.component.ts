import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
  totalRecords = 0;
  constructor(
    private baseAPIServices: BaseAPIServices,
    private ngxSpinner: NgxSpinnerService
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
    this.getAllCustomersDataPaginate({ page: 0, size: 10 })
  }
  getAllCustomersData() {
    this.ngxSpinner.show();
    this.baseAPIServices.getMethod('customer/all-customers')
      .subscribe(
        (data: any) => {
          this.ngxSpinner.hide();
          this.prepareSubRow(data);
        }, (err: any) => {
          this.ngxSpinner.hide();
          console.log(err);
        }
      )
  }
  getCustomerByCompanyName(event: any) {
    this.ngxSpinner.show();
    this.baseAPIServices.getDataByCompanyName(event.target.value)
      .subscribe(
        (data: any) => {
          this.ngxSpinner.hide();
          this.allCustomerData = data;
        }, err => {
          console.log(err);
          this.ngxSpinner.hide();
        }
      )
  }
  getAllCustomersDataPaginate(event: any) {
    this.ngxSpinner.show();
    this.baseAPIServices.getCustomerByPagniate(event.page, event.size, 'customer/all-customers-pagination')
      .subscribe(
        (data: any) => {
          if (data && data.customers && data.customers.length > 0) {
            this.totalRecords = data.totalItems;
            this.prepareSubRow(data.customers);
          }
          this.ngxSpinner.hide();
        }, err => {
          this.ngxSpinner.hide();
          console.log(err);
        }
      )
  }
  prepareSubRow(customerData: any) {
    if (customerData && customerData.length > 0) {
      let subColumns: any = [];
      // preparing subcolumns to show the data on expansion.
      customerData.map((item: IAllCustomerModel) => {
        subColumns = [
          {
            field: 'arc', header: 'ARC'
          },
          {
            field: 'branchCode', header: 'Branch Code'
          },
          {
            field: 'branchName', header: 'Branch Name'
          },
          {
            field: 'fobCodes', header: 'FOB Codes'
          },
          {
            field: 'businessFocus', header: 'Business Focus'
          },
          {
            field: 'clientCode', header: 'Client Code'
          },
          {
            field: 'consolidatorId', header: 'Consolidator ID'
          },
          {
            field: 'gds', header: 'GDS'
          },
          {
            field: 'markets', header: 'Markets'
          },
          {
            field: 'creditLimit', header: 'Credit Limit'
          },
          {
            field: 'currentBalance', header: 'Current Balance'
          },
        ];
        item.subColumns = subColumns;
      });
      this.allCustomerData = customerData
    }
  }
  deleteCustomer(event: any) {
    this.baseAPIServices.deleteCustomer(event, 'customer/delete-customer')
      .subscribe(
        data => {
          console.log(data);
          this.getAllCustomersDataPaginate({ page: 0, size: 10 })
        }, err => {
          console.log(err);
        }
      )
  }
}
