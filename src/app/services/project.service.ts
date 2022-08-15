import { Injectable } from '@angular/core';

import { Project } from '../classes/project';
import { PROJECTS } from '../inputs/projects';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  /** GET projects from the file */
  getProjects (): Project[] {
    return PROJECTS;
  }

  constructor() { }
}