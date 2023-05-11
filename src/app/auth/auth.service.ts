import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http : HttpClient) { }
  autoLogin(): boolean {
    //@ts-ignore
    let user: User | null = localStorage.getItem('user');
    if (!user) {
      return false
    }
    this.user.next(user);
    return true
  }
  logout() {
    localStorage.removeItem('user');
    this.user.next(null);
  }
}
