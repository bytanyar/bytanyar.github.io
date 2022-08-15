import { Component, OnInit } from '@angular/core';

import { Project } from '../classes/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class ExperienceComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  
  getProjects(): void {
    this.projects = this.projectService.getProjects().reverse();

  }
  ngOnInit(): void {
    this.getProjects();
  }
}
