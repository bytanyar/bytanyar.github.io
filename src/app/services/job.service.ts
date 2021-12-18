import { Injectable } from '@angular/core';

import { Job } from '../classes/job';
import { JOBS } from '../inputs/actual-jobs';

@Injectable({
  providedIn: 'root'
})

export class JobService {
  /** GET jobs from the file */
  getJobs (): Job[] {
    return JOBS;
  }

  constructor() { }
}