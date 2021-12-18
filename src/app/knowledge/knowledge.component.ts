import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class DataComponent implements OnInit {
  knowledgeData = [
    "Adobe Creative Suite",
    "Agile/SCRUM",
    "Angular",
    "Bootstrap",
    "CSS/SCSS",
    "Figma",
    "Git",
    "Git Kraken/Sourcetree",
    "HTML",
    "HubSpot",
    "JavaScript/JQuery",
    "Jira",
    "JSON",
    "Sketch",
    "Storybook",
    "Team City",
    "Zeplin"
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
