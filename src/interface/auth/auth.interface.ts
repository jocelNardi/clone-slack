import { UserInterface } from '../users/user.interface';

export interface OutputLogin {
  token: string;
  user: UserInterface;
}

export interface InputLogin {
  email: string;
  password: string;
}
export interface AuthInterface {
  login: (input: InputLogin) => OutputLogin;
}
