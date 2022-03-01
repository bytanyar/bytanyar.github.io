import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {
  knowledgeData = [
    "Adobe Creative Suite",
    "Agile/SCRUM",
    "Angular 9",
    "Bootstrap",
    "CSS 3/SCSS",
    "Figma",
    "Gatsby",
    "Git",
    "Git Kraken/Sourcetree",
    "GitHub",
    "HTML 5",
    "HubSpot",
    "JavaScript",
    "Jira",
    "JQuery",
    "JSON",
    "Responsive Web Design",
    "Sketch",
    "Storybook",
    "Team City",
    "Typescript",
    "Zeplin"
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
