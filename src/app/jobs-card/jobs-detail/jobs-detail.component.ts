import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JobsService} from "../jobs.service";
import {Job} from "../job";

@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.css']
})
export class JobsDetailComponent implements OnInit {

  job!: Job;
  private jobId!: number;
  constructor(private route : ActivatedRoute,
              private jobsService : JobsService) { }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id'];
    this.jobsService.getSingleJob(this.jobId).subscribe(
      (response) => {
        this.job = response[0] as Job;
      }
    )
  }

}
