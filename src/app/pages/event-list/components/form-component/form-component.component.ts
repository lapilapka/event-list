import {Component, inject} from '@angular/core';
import {TabsModule} from 'primeng/tabs';
import {MusicEventFormComponent} from '../music-event-form/music-event-form.component';
import {SportEventFormComponent} from '../sport-event-form/sport-event-form.component';
import {Event} from '../../../../shared/models/event.model';
import {DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-form-component',
  imports: [TabsModule, MusicEventFormComponent, SportEventFormComponent],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})
export class FormComponentComponent {
}
