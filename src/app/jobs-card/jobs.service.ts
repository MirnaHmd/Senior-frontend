import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "./job";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http : HttpClient) { }

  getJobs() : Observable<Job[]>{
    return this.http.get<Job[]>('\'http://localhost/api/job')
  }
  getSingleJob(id: any): Observable<any> {
    return this.http.get<any>('http://localhost/project/getJobs.php?id=' + id);
  }

  getUserJobs(userId: any) {
    return this.http.get<any>('http://localhost/project/getUserJobs.php?id=' + userId);
  }

  addJob(data: any): Observable<any> {
    return this.http.post('http://localhost/project/addJob.php', data);
  }

  deleteJob(id: any) {
    return this.http.delete<any>('http://localhost/project/deleteJob.php?id=' + id);
  }

  updateJob(id: any, data: any) {
    return this.http.put<any>('http://localhost/project/updateJob.php?id=' + id, data)
  }
}
