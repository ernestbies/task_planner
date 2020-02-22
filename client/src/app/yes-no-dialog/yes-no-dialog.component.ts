import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.css']
})
export class YesNoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<YesNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: YesNoDialogData) {
  }

  onPositiveClick(): void {
    this.dialogRef.close();
    this.data.onPositiveClick();
  }

}

export interface YesNoDialogData {
  title: string;
  content: string;
  onPositiveClick: () => void;
}
