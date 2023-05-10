import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if (!form.valid) {
      return;
    }

    const data: any = {
      email: form.value.email,
      password: form.value.password,
    }
  }

  toRegister() {
      this.route.navigate(['register'])
  }
}
