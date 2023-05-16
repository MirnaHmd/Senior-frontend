import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {JobsService} from "../jobs.service";
import {Subscription} from "rxjs";
import {Job} from "../job";
import {AuthService} from "../../auth/auth.service";

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
  locations: any;



  constructor(private route : ActivatedRoute, private jobsService : JobsService,
             private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.authService.getLocations().subscribe((response) => {
      this.locations = response;
    })
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
  ngOnDestroy(): void {
    if (this.editMode) {
      this.subscription.unsubscribe();
    }
    this.editMode = false;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    // @ts-ignore
    let userId = JSON.parse(this.authService.user.getValue()).id;
    const data: any = {
      job_title: form.value.jobtitle,
      company_name: form.value.companyname,
      job_description: form.value.description,
      location : form.value.selectedLocation,
      salary : form.value.salary,
      user_id: userId
    }
    if (!this.editMode) {
      this.jobsService.addJob(data).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (response) => {
          if (response.status == '401') {
            alert('you need to be logged in first!')
            this.router.navigate(['login']);
          }
        }
      );
    } else {
      this.jobsService.updateJob(this.job.id, data).subscribe(
        () => {
          this.router.navigate(['']);
        }
      )
    }
  }
}
