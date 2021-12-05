import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownOptions } from 'src/app/models/form-helper';
import { BaseAPIServices } from 'src/app/_services/base-api-services';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private ngxSpinner: NgxSpinnerService,
    private toastr: ToastrService
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
      currentBalance: [''],
      companyName: ['Test']
    });
  }

  createNewContact() {
    const payLoad = {
      "SubscriptionRequired": true,
      "accountManager": "string",
      "address": "string",
      "arc": this.customerForm.get('arc')?.value,
      "branchCode": "string",
      "branchName": "string",
      "businessFocus": "string",
      "cctrAllowed": true,
      "chargeFullPublished": true,
      "checkUnderQuote": true,
      "clientCode": this.customerForm.get('clientCode')?.value,
      "companyName": "string",
      "companyOwner": "string",
      "consolidatorId": parseInt(this.customerForm.get('consolidatorId')?.value),
      "contacts": [
        {
          "mobileNumber": 0
        }
      ],
      "createdString": "string",
      "creditLimit": this.customerForm.get('creditLimit')?.value,
      "currency": "string",
      "customerId": "string",
      "customerType": "string",
      "db": "string",
      "distribution": this.customerForm.get('distribution')?.value,
      "dkNumber": this.customerForm.get('dkNumber')?.value,
      "dkNumber10": this.customerForm.get('dkNumber')?.value,
      "doAllFares": true,
      "doOnSavedPQ": true,
      "dropNetEnabled": true,
      "dropNetOverride": true,
      "dropNetPercent": 0,
      "email": "string",
      "emailConfig": {
        "ar": "string",
        "chargebacks": "string",
        "debitMemos": "string",
        "documentDelivery": "string",
        "headOffice": "string",
        "refunds": "string",
        "scheduleChanges": "string",
        "statements": "string",
        "whitelisted": this.customerForm.get('whitelisted')?.value,
      },
      "emails": [
        {
          "email": "string",
          "primary": true
        }
      ],
      "fopCodes": JSON.stringify(this.customerForm.get('fopCodes')?.value),
      "fopCodesForInternalUser": "string",
      "formatPhone": "string",
      "gds": this.customerForm.get('gds')?.value,
      "globalCustomers": true,
      "ictDefault": true,
      "id": "string",
      "interClient": "string",
      "interConsolidatorId": "string",
      "interVenId": "string",
      "keywords": [
        "string"
      ],
      "lastModified": "string",
      "markets": this.customerForm.get('markets')?.value,
      "merchantCcFeePercent": 0,
      "nationalAccountName": "string",
      "noFopTicketing": true,
      "noRemarkTicketing": true,
      "overrideAuth": true,
      "overrideICT": true,
      "parentId": "string",
      "partnerId": 0,
      "payomoAccount": {
        "accountId": "string",
        "clientId": "string",
        "clientSecret": "string"
      },
      "payomoAccountId": "string",
      "pccConfig": {
        "amadeus": "string",
        "apollo": "string",
        "galileo": "string",
        "sabre": "string",
        "worldspan": "string"
      },
      "phone": "string",
      "phones": [
        {
          "countryCode": "string",
          "phone": "string",
          "primary": true
        }
      ],
      "platform": this.customerForm.get('platform')?.value,
      "pos": "string",
      "regdCompanyName": "string",
      "secondaryPcc": "string",
      "serviceManager": "string",
      "settings": {
        "enableWallet": true
      },
      "size": "string",
      "storedFareIssueType": 0,
      "subscription": "string",
      "systemLoaded": true,
      "systemLoadedTime": "string",
      "taxId": "string",
      "travelLicense": "string",
      "tripPayEnrolled": true,
      "uniqueId": 0,
      "userAccountType": "string"
    }
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
  setValue(event: any) {
    console.log(event)
  }

}
