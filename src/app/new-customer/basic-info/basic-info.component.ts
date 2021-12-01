import { Component, OnInit } from '@angular/core';
import { IDropdownOptions } from 'src/app/models/form-helper';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  arcArr: IDropdownOptions[] = [
    {name: 'Arc 1', code: 'arc1'},
    {name: 'Arc 2', code: 'arc2'},
    {name: 'Arc 3', code: 'arc3'},
    {name: 'Arc 4', code: 'arc4'},
    {name: 'Arc 5', code: 'arc5'},
  ];
  selectedARC!: string;
  selectedFopCodes!: IDropdownOptions[];
  fopCodes:IDropdownOptions[] = [
    {name: 'CC', code: 'cc'},
    {name: 'CK', code: 'ck'},
    {name: 'CL', code: 'cl'},
    {name: 'CM', code: 'cm'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
