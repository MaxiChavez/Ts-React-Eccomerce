export interface IUserData {
  name: string;
  address: {
    city: string;
    street: string;
    number: string;
    zipcode: string;
  };
  email: string;
  password: string;
  phone: string;
  rol: string;
}

export interface ILoginData {
  username: string;
  password: string;
}
