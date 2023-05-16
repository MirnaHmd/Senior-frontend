import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {BehaviorSubject, Observable} from "rxjs";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedMajor = '';
  selectedLocation = '';
  locations: any;
  majors: any;
  isEmployee: BehaviorSubject<string> = new BehaviorSubject<string>('false');

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getLocations().subscribe((response) => {
      this.locations = response;
    })
    this.authService.getIndustries().subscribe((response) =>{
      this.majors = response;
    })
  }

  setMode(e: any): void {
    this.isEmployee.next(e.target.value);
    console.log(this.isEmployee.value)
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const data: any = {
      first_name: form.value.firstname,
      last_name: form.value.lastname,
      password: form.value.password,
      email: form.value.email,
      location: form.value.selectedLocation,
      gender: form.value.gender,
      phone: form.value.phone,
      major: form.value.selectedMajor,
      role: form.value.role
    }

  }

  toLogin() {
    this.router.navigate(['login']);
  }

  onSelectedMajor(value: string): void {
    this.selectedMajor = value;
  }

  onSelectedLocation(value: string): void {
    this.selectedLocation = value;
  }
}
