import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/Job';
import { JobsService } from '../services/jobs.service';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs$: Observable<Job[]> | undefined;

  constructor(private jobsService:JobsService) { }

  ngOnInit(): void {
    this.jobs$ = this.jobsService.getJobs();
  }

}
