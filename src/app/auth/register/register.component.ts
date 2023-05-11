import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedNation = '';
  selectedLocation = '';
  isEmployee: Observable<boolean> = new Observable<boolean>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  setMode(e: any): void {
    this.isEmployee = e.target.value;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const data: any = {
      first_name: form.value.firstname,
      last_name: form.value.lastname,
      password: form.value.password,
      email : form.value.email,
      location :  form.value.selectedLocation,
      nationality: form.value.selectedNation,
      gender : form.value.gender,
      phone : form.value.phone,
      major : form.value.major,
      role : form.value.role
    }

  }

  toLogin() {
    this.router.navigate(['login']);
  }

  onSelectedNation(value: string): void {
    this.selectedNation = value;
  }

  onSelectedLocation(value: string): void {
    this.selectedLocation = value;
  }
}
