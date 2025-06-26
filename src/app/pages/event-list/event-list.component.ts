import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {EventServiceService} from '../../core/services/event-service.service';
import { ButtonModule } from 'primeng/button';
import {Event} from '../../shared/models/event.model';
import {JsonPipe} from '@angular/common';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
  imports: [
    TableModule,
    ButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent implements OnInit {
  eventService = inject(EventServiceService)
  events = this.eventService.events;
  cols!: Column[];

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'title', header: 'Название мероприятия' },
      { field: 'description', header: 'Описание' },
      { field: 'location', header: 'Место проведения' },
      { field: 'eventType', header: 'Тип мероприятия' },
      { field: 'actions', header: 'Actions' }
    ]
  }

  onRemoveEvent(event: Event): void {
    this.eventService.onRemoveEvent(event);
  }

  onAddEvent(): void {
    this.eventService.onAddEvent();
  }

  onEditEvent(event: Event): void {
    this.eventService.onEditEvent(event);
  }
}
