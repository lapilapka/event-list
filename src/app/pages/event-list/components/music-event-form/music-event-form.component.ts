import {Component} from '@angular/core';
import {BaseEventFormComponent} from '../base-event-form/base-event-form.component';
import {ButtonDirective, ButtonLabel} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SelectButton} from 'primeng/selectbutton';
import {Textarea} from 'primeng/textarea';
import {EventType} from '../../../../shared/models/event-type.model';

@Component({
  selector: 'app-music-event-form',
  imports: [
    ButtonDirective,
    ButtonLabel,
    InputText,
    ReactiveFormsModule,
    SelectButton,
    Textarea
  ],
  templateUrl: './music-event-form.component.html',
  styleUrl: './music-event-form.component.scss'
})
export class MusicEventFormComponent extends BaseEventFormComponent {
  genre = new FormControl(this.data?.genre);
  constructor() {
    super();
    this.eventForm.addControl(
      'genre',
      this.genre
    );
    if (this.data.action === 'add') {
      this.eventForm.controls['eventType'].setValue(EventType.MUSIC_EVENT);
    }
    this.eventForm.controls['eventType'].disable();
  }
}
