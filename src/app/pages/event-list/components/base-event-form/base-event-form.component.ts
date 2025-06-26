import {Component, inject, output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputText, InputTextModule} from 'primeng/inputtext';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputGroup} from 'primeng/inputgroup';
import {Textarea} from 'primeng/textarea';
import {SelectButton} from 'primeng/selectbutton';
import {ButtonDirective, ButtonLabel} from 'primeng/button';
import {EventForm} from '../../../../shared/models/event-form.model';
import {Event} from '../../../../shared/models/event.model';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-base-event-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './base-event-form.component.html',
  styleUrl: './base-event-form.component.scss',
})
export class BaseEventFormComponent {
  private ref = inject(DynamicDialogRef);
  config = inject(DynamicDialogConfig);
  data = this.config.data;
  readonly eventForm = new FormGroup<EventForm>({
    id: new FormControl(this.data.id ?? null),
    title: new FormControl(this.data.title ??'', Validators.required),
    eventType: new FormControl(this.data.eventType ?? null, Validators.required),
    location: new FormControl(this.data.location ?? '', Validators.required),
    description: new FormControl(this.data.description ?? null),
  });
  readonly eventTypeOptions: any[] = [{ label: 'Спортивное мероприятие', value: 'sport' },{ label: 'Музыкальное мероприятие', value: 'music' }];
readonly formSubmitEmitter = output<Event>();

  onSubmit() {
    this.ref.close(this.eventForm.getRawValue() as Event);
  }
}
