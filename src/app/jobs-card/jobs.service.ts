import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Job} from "./job";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private url: string = environment.url;
  startedEditing: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient) {
  }

  getJobs(): Observable<any> {
    return this.http.get<any>(`${this.url}/job`)
  }

  getSingleJob(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/job/${id}`);
  }

  getUserJobs(userId: any) {
    return this.http.get<any>(`${this.url}/${userId}`);
  }

  addJob(data: any): Observable<any> {
    return this.http.post(`${this.url}/job`, data);
  }

  deleteJob(id: any) {
    return this.http.delete<any>(`${this.url}/job/${id}`);
  }

  updateJob(id: any, data: any) {
    return this.http.put<any>(`${this.url}/job/${id}`, data);
  }
  getLocation(){
    return this.http.get<any>('${this.url}/');
  }
}
