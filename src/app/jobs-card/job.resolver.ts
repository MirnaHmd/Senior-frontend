import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {JobsService} from "./jobs.service";

@Injectable({
  providedIn: 'root'
})
export class JobResolver implements Resolve<boolean> {


  constructor(private jobService: JobsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.jobService.getSingleJob(route.params["id"]);
  }
}
