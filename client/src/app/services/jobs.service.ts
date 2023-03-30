import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Job } from '../models/Job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  apiUrl: string = environment.apiUrl;
  jobs: Job[] = [];

  constructor(private httpClient: HttpClient) { }

  getJobs() {
    return this.httpClient.get<Job[]>(this.apiUrl + 'jobs').pipe(map(jobs => this.jobs = jobs));
  }

  getJobById(id:number){
    return this.jobs.filter(x => x.jobId == id);
  }
}
