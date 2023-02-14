import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IWorkExperience } from './../../models/models';

@Component({
  selector: 'information-modal',
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.css']
})
export class InformationModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<IWorkExperience>,
    @Inject(MAT_DIALOG_DATA) public data: IWorkExperience
  ) { }

  ngOnInit(): void {
  }

}
