import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IAllCustomerModel, IAllHeaderColums } from '../models/table-model';
import { BaseAPIServices } from '../_services/base-api-services';
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() columns: IAllHeaderColums[] = [];
  @Input() allCustomerData = [] as IAllCustomerModel[];
  @Input() totalRecords = 0;
  @Output() paginationEvent: EventEmitter<{}> = new EventEmitter();
  @Output() deleteCustomerEvent: EventEmitter<number> = new EventEmitter();
  page: number = 1;
  size = 6;
  selectedRow: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  deleteCustomer(id: any) {
    this.deleteCustomerEvent.emit(id);
  }
  paginate(event: any) {
    this.paginationEvent.emit({ page: event.page, size: event.rows });
  }
  editCustomer(customerData: IAllCustomerModel){
    this.router.navigate(['new-customer', {state: customerData}]);
  }
}
