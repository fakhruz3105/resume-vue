export interface NewCustomer {
  name: string;
  age: number;
  phoneNumber: string;
  address: string;
  avatar: string;
  interests: string[];
  paymentType: string;
}

export interface Customer extends NewCustomer {
  id: string;
  createdAt: number;
}
