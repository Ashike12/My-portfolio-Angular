import { Component, OnInit } from '@angular/core';
import { Education } from '../../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Rajshahi University of Science & Technology',
      course: 'Bsc in CSE',
      duration: 'March 2013 - December 2017',
      score: '1st Class',
    },
    {
      institute: 'Rajuk Uttara Model College',
      course: 'HSC',
      duration: '2012-2013',
      score: 'Golden A+',
    },
    {
      institute: 'Chapain New Model High School',
      course: 'SSC',
      duration: '2010-2011',
      score: 'Golden A+',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
