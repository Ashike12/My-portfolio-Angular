import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { InformationModalComponent } from '../components/information-modal/information-modal.component';
import { IInformationModalConfig } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private dialog: MatDialog,
  ) { }

  openInformationModal(modalData: IInformationModalConfig, enterAnimationDuration: string='1000ms', exitAnimationDuration: string = '500ms') {
    this.dialog.open(InformationModalComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
