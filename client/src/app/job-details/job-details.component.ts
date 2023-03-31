import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../models/Job';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job: Job | undefined | any;


  constructor(private jobsService: JobsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('jobId'));
    if (jobId == null) { return; }
    this.jobsService.getJobById(jobId).subscribe({
      next: job => this.job = job
    })
  }

}
