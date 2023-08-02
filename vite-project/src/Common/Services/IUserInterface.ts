interface IName {
    firstname: string,
    lastname: string
  }
interface IAdress {
    city: string,
    street: string,
    number: number,
    zipcode: string
  }
export interface IUserData {
    email: string,
    username: string,
    password: string,
    name: IName,
    address: IAdress,
    phone: string
  }

export interface ILoginData {
    username: string,
    password: string
  };