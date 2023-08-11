export interface IuserDataAdress {
  city: string;
  street: string;
  number: string;
  zipcode: string;
}

export interface IUserData {
  name: string;
  email: string;
  password: string;
  phone: string;
  rol: string;
  adress: IuserDataAdress;
  id: number;
}

export interface IUserOrder {
  name: string;
  email: string;
  phone: string;
  adress: IuserDataAdress;
}

export interface ILoginData {
  username: string;
  password: string;
}
