export interface UserData {
  plan: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Plan {
  id: string;
  name: string;
  amount: number;
  features: string[];
  interval: 'monthly' | 'quarterly' | 'yearly';
}

export interface PaymentInitiateResponse {
  authorizationUrl: string;
  reference: string;
}
