import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'ASP.NET Core',
      level: 'Intermediate',
      rating: 60,
    },
    {
      name: 'Nodejs',
      level: 'Intermediate',
      rating: 60,
    },
    {
      name: 'MongoDB',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'C++',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Python',
      level: 'Beginner',
      rating: 50,
    },
    {
      name: 'Powershell/Batch scripting',
      level: 'Beginner',
      rating: 30,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
