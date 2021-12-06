import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IAllCustomerModel, IAllHeaderColums } from '../models/table-model';
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() columns: IAllHeaderColums[] = [];
  @Input() allCustomerData = [] as IAllCustomerModel[];
  @Input() totalRecords = 0;
  @Output() paginationEvent: any = new EventEmitter();
  page: number = 1;
  size = 6;
  selectedRow: any;
  constructor(
  ) { }

  ngOnInit(): void {
  }
  deleteCustomer(id: any) {

  }
  paginate(event: any) {
    this.paginationEvent.emit({ page: event.page, size: event.rows });
  }
}
