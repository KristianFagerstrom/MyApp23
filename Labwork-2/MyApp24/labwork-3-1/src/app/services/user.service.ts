import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login(username: string, password: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
