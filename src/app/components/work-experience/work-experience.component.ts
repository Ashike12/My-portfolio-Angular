import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common-service';
import { IWorkExperience } from '../../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: IWorkExperience[] = [
    {
      title: 'Selise Digital Platform',
      subTitle: 'Software Engineer',
      duration: 'November 2019 - Now',
      description: [
        'Develop the crm System',
        'Form Builder to manage forms',
        'UniqId that supports almost 1000 billon numbers'
      ],
    },
    {
      title: 'Selise Rockin Software',
      subTitle: 'Junior Software Engineer',
      duration: 'From november 2018 to October 2019',
      technologies: ['AngularJs, Angular 8/8+, Angular Material, mongoDB, Nodejs, Dotnet, C#, Javascript, Html5, Css3, Typescript'],
      technicalTools: ['Github, Bitbucket, Robo3t, Postman, sourcetree'],
      responsibilities: [
      'Working as a Frontend team member on agile development team focused on software delivery and manage backend services for form management.',
       `Assisting the team in maintaining existing Project, tools and workflows necessary to facilitate the process. Designing, Building & Maintaining new module
       on requirement as a team member & Developing user friendly software.`],
       projects: [{

       }],
      description: [
        'Develop the crm System',
        'Form Builder to manage forms',
        'UniqId that supports almost 1000 billon numbers'
      ]
    },
    {
      title: 'As a passion',
      subTitle: 'Problem Solver',
      duration: '2013 - Now',
      description: [
        'Leetcode,https://leetcode.com/AshikeRN/, - solved 200+ problems',
        'Codeforces,https://codeforces.com/profile/AshikeRuet, - solved 190+ problems',
        'UVA,https://onlinejudge.org/, - solved 400+ problems'
      ],
    }
  ];
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void { }

  goToSite(address: string) {
    window.open(address);
  }
  openWorkDetails(config: IWorkExperience) {
    this.commonService.openInformationModal(config)
  }
}
