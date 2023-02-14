import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { InformationModalComponent } from '../components/information-modal/information-modal.component';
import { IWorkExperience } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private dialog: MatDialog,
  ) { }

  openInformationModal(modalData: IWorkExperience, enterAnimationDuration: string='1000ms', exitAnimationDuration: string = '500ms') {
    this.dialog.open(InformationModalComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: modalData,
      width: '100%',
      minHeight: 'calc(100vh - 180px)',
      height : '90%'
    });
  }
}
