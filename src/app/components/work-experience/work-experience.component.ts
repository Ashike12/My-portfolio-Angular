import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common-service';
import { IInformationModalConfig, WorkExperience } from '../../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Engineer',
      company: 'Selise Digital Platform',
      duration: 'November 2019 - Now',
      description: [
        'Develop the crm System',
        'Form Builder to manage forms',
        'UniqId that supports almost 1000 billon numbers'
      ],
    },
    {
      role: 'Junior Software Engineer',
      company: 'Secure Link Service',
      duration: 'February 2018 - October 2019',
      description: [
        'Involved in various Kind of Bug fixing',
        'Banking KYC Forms and all kind of forms Management'
      ],
    },
    {
      role: 'Problem Solver',
      company: 'As a passion',
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
  openWorkDetails() {
    const config: IInformationModalConfig = {

    }
    this.commonService.openInformationModal(config)
  }
}
