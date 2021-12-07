import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownOptions } from 'src/app/models/form-helper';
import { BaseAPIServices } from 'src/app/_services/base-api-services';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { arcData, clientCodeData, consolidatorData, distributionData, dkNumberData, fopCodesData, gdsData, marketsData, payLoadData, platformData, whiteListData } from 'src/app/_services/helpers/data-helper';
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit, OnChanges {
  arcArr: IDropdownOptions[] = arcData;
  selectedARC!: string;
  selectedFopCodes!: IDropdownOptions[];
  fopCodes: IDropdownOptions[] = fopCodesData;
  clientCodes: IDropdownOptions[] = clientCodeData;
  gdsCodes: IDropdownOptions[] = gdsData;
  markets: IDropdownOptions[] = marketsData;
  consolidatorArr: IDropdownOptions[] = consolidatorData;
  dkNumArr: IDropdownOptions[] = dkNumberData;
  platformArr: IDropdownOptions[] = platformData;
  distributionArr: IDropdownOptions[] = distributionData;
  whiteListArr: IDropdownOptions[] = whiteListData;
  customerForm!: FormGroup;
  @Input() customerData: any;
  constructor(
    private formBuilder: FormBuilder,
    private baseAPIService: BaseAPIServices,
    private router: Router,
    private ngxSpinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
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
      currentBalance: [''],
      companyName: ['Test']
    });
  }
  
  ngOnInit(): void {
    
  }
  ngOnChanges(){
    if(this.customerData){
      this.customerForm.patchValue(this.customerData);
      this.customerForm.get('fopCodes')?.setValue(JSON.parse(this.customerData['fopCodes']))
    }
  }
  createNewContact() {
    // 
    const payLoad = payLoadData;
    payLoadData.arc = this.customerForm.get('arc')?.value
    payLoadData.clientCode = this.customerForm.get('clientCode')?.value
    payLoadData.consolidatorId = parseInt(this.customerForm.get('consolidatorId')?.value)
    payLoadData.creditLimit = this.customerForm.get('creditLimit')?.value
    payLoadData.distribution = this.customerForm.get('distribution')?.value
    payLoadData.dkNumber = this.customerForm.get('dkNumber')?.value
    payLoadData.dkNumber10 = this.customerForm.get('dkNumber')?.value
    payLoadData.markets = this.customerForm.get('markets')?.value
    payLoadData.fopCodes = JSON.stringify(this.customerForm.get('fopCodes')?.value)
    payLoadData.gds = this.customerForm.get('gds')?.value
    payLoadData.platform = this.customerForm.get('platform')?.value
    payLoadData.emailConfig.whitelisted = this.customerForm.get('whitelisted')?.value
    payLoadData.systemLoaded = this.customerForm.get('systemLoaded')?.value
    payLoadData.companyName = 'Test';
    this.ngxSpinner.show();
    this.baseAPIService.postMethod(payLoad, 'customer/save-customer')
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success('New company created', 'Success');
          this.router.navigate(['/']);
          this.ngxSpinner.hide();
        }, err => {
          console.log(err);
          this.ngxSpinner.hide();
        }
      )
  }

}
