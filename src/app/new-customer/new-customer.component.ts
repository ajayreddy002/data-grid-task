import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  customerData:any;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params && params['data']){
        this.customerData = JSON.parse(params['data']);
      }
    }
    );
    console.log(this.activatedRoute.data)
  }

}
