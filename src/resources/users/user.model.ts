import { v4 } from 'uuid';

export interface IUser {
  id: string;
  name: string;
  login: string;
  password?: string;
}

class User implements IUser{
  id: string;

  login: string;

  name: string;

  password?: string;

  constructor({
    id = v4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User): IUser {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
