import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BaseAPIServices {
    constructor(
        private httpClient: HttpClient
    ){}
    getMethod(endPoint: string){
        return this.httpClient.get(`${environment.baseUrl}/${endPoint}`)
    }
    getDataByCompanyName(companyName: string){
        return this.httpClient.post(`${environment.baseUrl}/customer/customer-by-companyname?companyName=${companyName}`, {})
    }
    postMethod(formData: any, endPoint: string){
        return this.httpClient.post(`${environment.baseUrl}/${endPoint}`, formData);
    }
    deleteCustomer(id: any, endPoint: string){
        return this.httpClient.post(`${environment.baseUrl}/${endPoint}`, {customerID: id})
    }
}