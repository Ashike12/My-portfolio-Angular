import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { IInformationModalConfig } from './../../models/models';

@Component({
  selector: 'information-modal',
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.css']
})
export class InformationModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<IInformationModalConfig>
  ) { }

  ngOnInit(): void {
  }

}
