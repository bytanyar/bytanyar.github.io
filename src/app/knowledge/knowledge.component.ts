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
    "CSS 3/SCSS/LESS",
    "Express",
    "Figma",
    "Gatsby",
    "Git/GitHub",
    "Git Kraken/Sourcetree",
    "HTML 5",
    "HubSpot",
    "JavaScript",
    "Jira",
    "JQuery",
    "JSON",
    "MongoDB/Mongoose",
    "Node",
    "React JS",
    "Responsive Web Design",
    "Sketch",
    "Storybook",
    "Zeplin"
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
