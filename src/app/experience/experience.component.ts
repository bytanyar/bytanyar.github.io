import { Component, OnInit } from '@angular/core';

import { Job } from '../classes/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobService: JobService) { }

  
  getJobs(): void {
    this.jobs = this.jobService.getJobs().reverse();

  }
  ngOnInit(): void {
    this.getJobs();
  }
}
