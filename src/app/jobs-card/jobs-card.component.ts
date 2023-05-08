import {Component, OnInit} from '@angular/core';
import {Job} from "./job";
import {JobsService} from "./jobs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-jobs-card',
  templateUrl: './jobs-card.component.html',
  styleUrls: ['./jobs-card.component.css']
})
export class JobsCardComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobsService: JobsService, private router : Router) {
  }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe(
      (response) => {
        this.jobs = response.success.jobs;
      }
    )
  }

  todescription(id: any) {
    this.router.navigate(['/job/' + id]);
  }
}
