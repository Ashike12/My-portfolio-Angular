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
      technologies: ['Angular 8/8+, Angular Material, mongoDB, Nodejs, Dotnet, C#, Javascript, Html5, Css3, Typescript', 'React Native'],
      technicalTools: ['Github, Bitbucket, Robo3t, Postman, sourcetree', 'insomnia'],
      description: [
        'Develop the crm System',
        'Form Builder to manage forms',
        `An insurance company's client portal`,
        'UniqId that supports almost 1000 billon numbers',
      ],
      responsibilities: [
        `Over the past four years, I have had the opportunity to work on a range of diverse projects, which has allowed me to gain a broad range of skills and experience. One of the projects I worked on was the development of a CRM system, which included features such as calendar management, contact management, sales case management, and task management. In addition, I was responsible for building a form builder that allowed administrators to create custom forms quickly and easily. I also built an insurance company client portal that provided clients with access to their statistical data and transactions`,
        `In another project, I was responsible for developing a system that generated and maintained a reservation system for unique IDs. The system needed to be able to generate at least one billion unique IDs while ensuring that the generated IDs were unique and maintaining the reservation of IDs that had been generated but not yet used.`,
        `Throughout these projects, I gained experience working with a range of different technologies and programming languages, including the above mentioned tech and teach tools. I also developed valuable skills in project management, team collaboration, and problem-solving, which I believe will be invaluable in future projects.`
      ]
    },
    {
      title: 'Selise Rockin Software',
      subTitle: 'Junior Software Engineer',
      duration: 'From november 2018 to October 2019',
      technologies: ['AngularJs, Angular 7, Angular Material, mongoDB, Nodejs, Dotnet, C#, Javascript, Html5, Css3, Typescript'],
      technicalTools: ['Github, Bitbucket, Robo3t, Postman, sourcetree'],
      responsibilities: [
        `I worked on a project to develop an e-learning platform for a client. As part of my responsibilities, I was responsible for ensuring that the platform met the customer's requirements by performing user acceptance testing. In addition to developing the platform, I also worked on integrating a traditional form system into the application, which allowed for seamless data capture and streamlined workflows.`,
        `Assisting the team in maintaining existing Project, tools and workflows necessary to facilitate the process. Designing, Building & Maintaining new module
       on requirement as a team member & Developing user friendly software.`,
        `Throughout the project, I was able to learn and apply new technologies to improve the platform's functionality and performance. Specifically, I gained experience working with [insert specific technologies you used or learned here], which helped me to optimize the platform's performance and user experience.`,
        `Overall, my experience working on this project allowed me to gain valuable skills and experience in the technologies mention above, which I believe will be valuable to apply to future projects.`],
      projects: [{

      }],
      description: [
        'Implement client UAT',
        `Bring customer's traditional from system to an application.`,
        'Build a e-learning platform where we have to integrate third party videos'
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
