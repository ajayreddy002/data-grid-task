import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownOptions } from 'src/app/models/form-helper';
import { BaseAPIServices } from 'src/app/_services/base-api-services';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  arcArr: IDropdownOptions[] = [
    { name: 'Arc 1', code: 'arc1' },
    { name: 'Arc 2', code: 'arc2' },
    { name: 'Arc 3', code: 'arc3' },
    { name: 'Arc 4', code: 'arc4' },
    { name: 'Arc 5', code: 'arc5' },
  ];
  selectedARC!: string;
  selectedFopCodes!: IDropdownOptions[];
  fopCodes: IDropdownOptions[] = [
    { name: 'CC', code: 'cc' },
    { name: 'CK', code: 'ck' },
    { name: 'CL', code: 'cl' },
    { name: 'CM', code: 'cm' },
  ];
  clientCodes: IDropdownOptions[] = [
    { name: 'Client Code 1', code: 'CC1' },
    { name: 'Client Code 2', code: 'CC2' },
    { name: 'Client Code 3', code: 'CC3' },
  ];
  gdsCodes: IDropdownOptions[] = [
    { name: 'GDS 1', code: 'GDS1' },
    { name: 'GDS 2', code: 'GDS2' },
    { name: 'GDS 3', code: 'GDS3' },
  ];
  markets: IDropdownOptions[] = [
    { name: 'Market 1', code: 'MM1' },
    { name: 'Market 2', code: 'MM2' },
    { name: 'Market 3', code: 'MM3' }
  ];
  consolidatorArr: IDropdownOptions[] = [
    { name: 'Consolidator 1', code: 'consolidator1' },
    { name: 'Consolidator 2', code: 'consolidator2' },
    { name: 'Consolidator 3', code: 'consolidator3' }
  ];
  dkNumArr: IDropdownOptions[] = [
    { name: 'Dk Number 1', code: 'dkNumber1' },
    { name: 'Dk Number 2', code: 'dkNumber2' },
    { name: 'Dk Number 3', code: 'dkNumber3' }
  ];
  platformArr: IDropdownOptions[] = [
    { name: 'Falcon', code: 'Falcon' },
    { name: 'Trippro', code: 'trippro' },
  ];
  distributionArr: IDropdownOptions[] = [
    { name: 'Sky link', code: 'skyLink' },
    { name: 'Trip Planet', code: 'TripPlanet' },
  ];
  whiteListArr: IDropdownOptions[] = [
    { name: 'White List 1', code: 'whiteList1' },
    { name: 'White List 2', code: 'whiteList2' },
  ];
  customerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private baseAPIService: BaseAPIServices,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      arc: [''],
      fopCodes: [''],
      clientCode: [''],
      gds: [''],
      markets: [''],
      consolidatorId: [''],
      creditLimit: [''],
      dkNumber: [''],
      platform: [''],
      distribution: [''],
      whitelisted: [''],
      systemLoaded: [''],
      systemLoadedTime: [''],
      currentBalance: ['']
    });
  }

  createNewContact() {
    this.baseAPIService.postMethod(this.customerForm.value, 'customer/save-customer')
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/'])
        }, err => {
          console.log(err);
        }
      )
  }
  setValue(event: any) {
    console.log(event)
  }

}
