import {Component, OnInit} from '@angular/core';
import {Job} from "./job";
import {JobsService} from "./jobs.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-jobs-card',
  templateUrl: './jobs-card.component.html',
  styleUrls: ['./jobs-card.component.css']
})
export class JobsCardComponent implements OnInit {
  jobs: Job[] = [];
  isAuth!: boolean;
  subscription!: Subscription

  constructor(private jobsService: JobsService, private router : Router,
              private authService : AuthService) {
  }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe(
      (response) => {
        this.jobs = response.success.jobs;
      }
    )
    this.subscription = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    })
  }
  ngOnDestroy(): void {
    if (this.isAuth) {
      this.subscription.unsubscribe();
      this.isAuth = false;
    }
  }

  todescription(id: any) {
    if(this.isAuth){
      this.router.navigate(['/job/'+id]);
    }
    else{
      this.router.navigate(['login'])
    }
  }
}
