import { User } from '@app/shared/model/interface/user';

export class UserImpl implements User {

  readonly id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  age: number;
  country: string;
  state: string;
  city: string;
  password: string;

  constructor(options:{
    id?: number;
    firstName?: string;
    lastName?: string;
    userName?: string;
    email?: string;
    age?: number;
    country?: string;
    state?: string;
    city?: string;
    password?: string;
  } = {}) {
    this.id = options.id || 0;
    this.firstName = options.firstName || '';
    this.lastName = options.lastName || '';
    this.userName = options.userName || '';
    this.email = options.email || '';
    this.age = options.age || 0;
    this.country = options.country || '';
    this.state = options.state || '';
    this.city = options.city || '';
    this.password = options.password || '';
  }
}
