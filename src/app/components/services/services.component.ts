import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/models';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      title: 'FAST',
      description: [
        'My highest priority is fast load times and lag free user interaction. Make sure you are using a fast and reliable host for your website',
      ],
    },
    {
      title: 'RESPONSIVE',
      description: [
        'Now a day people use mobile devices more than a computer, so i alawys try to make my web site responsive so that it will work on any device.',
      ],
    },
    {
      title: 'CLIENT REQUIREMENT',
      description: [
        `Yes, I always try to fulfill all requirement from client also give suggestions or make decision for client if he/she can't decide what to do!`,
      ],
    },
    {
      title: 'DYNAMIC',
      description: [
        `Websites don't have to be static, I love making pages come to life. But if you wish to make a static one then it should be well designed.`,
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
