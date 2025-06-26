import {Component, inject} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ButtonDirective, ButtonLabel} from 'primeng/button';

@Component({
  selector: 'app-remove-event-dialog',
  imports: [
    ButtonDirective,
  ],
  templateUrl: './remove-event-dialog.component.html',
  styleUrl: './remove-event-dialog.component.scss'
})
export class RemoveEventDialogComponent {
  private ref = inject(DynamicDialogRef);
  config = inject(DynamicDialogConfig);
  data = this.config.data;

  onOkClick() {
  this.ref.close(this.config.data);
  }
  onCancelClick() {
    this.ref.close();
  }
}
