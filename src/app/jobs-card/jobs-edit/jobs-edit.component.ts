import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {JobsService} from "../jobs.service";
import {Subscription} from "rxjs";
import {Job} from "../job";

@Component({
  selector: 'app-jobs-edit',
  templateUrl: './jobs-edit.component.html',
  styleUrls: ['./jobs-edit.component.css']
})
export class JobsEditComponent implements OnInit {
  selectedLocation = '';
  subscription!: Subscription;
  job: any;
  editMode: boolean = false;
  private jobId!: number;
  @ViewChild('form', {static: false}) private form!: NgForm



  constructor(private route : ActivatedRoute, private jobsService : JobsService,
              ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        this.subscription = this.jobsService.startedEditing.subscribe(
          () => {
            this.editMode = true;
            this.jobId = this.route.snapshot.params['id'];
            this.jobsService.getSingleJob(this.jobId).subscribe(
              (response) => {
                this.job = response[0] as Job;
                setTimeout(() => {
                  this.form.setValue({
                    jobtitle: this.job.job_title,
                    companyname: this.job.company_name,
                    description: this.job.job_description,
                    selectedlocation: this.job.location,
                    salary : this.job.salary,
                  });
                }, 0)
              }
            )
          }
        )
      }
    });
  }

  onSelectedLocation(value: string) : void {
    this.selectedLocation = value;
  }

  onSubmit(form: NgForm) {

  }
}
