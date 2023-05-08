import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isEmployee: Observable<boolean> = new Observable<boolean>();
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isEmployee.subscribe(() => {

    })
  }

  setMode(e: any): void {
    this.isEmployee = e.target.value;
  }

  onSubmit(form: NgForm) {

  }

  toLogin() {
    this.router.navigate(['login']);
  }
}
