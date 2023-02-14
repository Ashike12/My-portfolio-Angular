import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Ashikur Rahman Nabir'],
    ['DOB', '1st February 1995'],
    ['Work Exp', '5 Years'],
    ['Education', 'Bsc. in CSE'],
    ['Interests', 'New challenges'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 5 years of experience in software industry.',
    'Worked as a Key developer where we have to build some key CRM (Customer Relationship Management) features, such as Calender events, Task board, sales case management, contact etc',
    'Delivered all product within deadlines. Always eager to learn new technologies.',
    'Currently, working as Software Engineer, leading Front End team and doing Backend tasks for a new challenging project with a short deadline',
  ];

  constructor() {}

  ngOnInit(): void {}
}
