export interface IAllCustomerModel {
    customerId: number;
    dkNumber: number;
    companyName: string;
    platform: string;
    distribution: string;
    customerType: string;
    email: string;
    phone: string;
    accountManager: string;
    subColumns: Array<IAllHeaderColums>;
}
export interface IAllHeaderColums {
    header:string;
    field: string;
}
