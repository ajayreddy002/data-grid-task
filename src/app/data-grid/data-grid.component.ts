import { Component, Input, OnInit } from '@angular/core';
import { IAllCustomerModel, IAllHeaderColums } from '../models/table-model';
import { BaseAPIServices } from '../_services/base-api-services';
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() products: any[] = [];
  @Input() columns: IAllHeaderColums[] = [];
  @Input() allCustomerData = [] as IAllCustomerModel[];
  selectedRow: any;
  constructor(
    private apiService: BaseAPIServices
  ) { }

  ngOnInit(): void {
    console.log(this.allCustomerData)
  }
  deleteCustomer(id: any) {
    
  }
}
