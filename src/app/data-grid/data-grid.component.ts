import { Component, Input, OnInit } from '@angular/core';
import { IAllCustomerModel, IAllHeaderColums } from '../models/table-model';
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() products:any[] = [];
  @Input()columns: IAllHeaderColums[] = [];
  @Input()allCustomerData: IAllCustomerModel[] = [];
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
