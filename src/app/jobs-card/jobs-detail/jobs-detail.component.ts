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
    this.route.data.subscribe(
      (response: any) => {
        this.job = response[0].success.job as Job;
        console.log(this.job);
      }
    )
  }

}
