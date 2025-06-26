import {Component, inject, OnInit} from '@angular/core';
import {BaseEventFormComponent} from '../base-event-form/base-event-form.component';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonDirective, ButtonLabel} from 'primeng/button';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputText} from 'primeng/inputtext';
import {SelectButton} from 'primeng/selectbutton';
import {Textarea} from 'primeng/textarea';
import {EventType} from '../../../../shared/models/event-type.model';

@Component({
  selector: 'app-sport-event-form',
  imports: [
    ButtonDirective,
    ButtonLabel,
    InputText,
    ReactiveFormsModule,
    Textarea,
    SelectButton,
  ],
  templateUrl: './sport-event-form.component.html',
  styleUrl: './sport-event-form.component.scss'
})
export class SportEventFormComponent extends BaseEventFormComponent implements OnInit {
  participants = new FormControl(this.data?.participants, Validators.pattern(/^\d+$/));
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.eventForm.addControl('participants', this.participants);
    if (this.data.action === 'add') {
      this.eventForm.controls['eventType'].setValue(EventType.SPORT_EVENT);
    }
    this.eventForm.controls['eventType'].disable();
  }
}
