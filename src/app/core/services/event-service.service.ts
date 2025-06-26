import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {Event} from '../../shared/models/event.model';
import event from './events.json'
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {SportEventFormComponent} from '../../pages/event-list/components/sport-event-form/sport-event-form.component';
import {MusicEventFormComponent} from '../../pages/event-list/components/music-event-form/music-event-form.component';
import {FormComponentComponent} from '../../pages/event-list/components/form-component/form-component.component';
import {RemoveEventDialogComponent} from '../../pages/event-list/components/remove-event-dialog/remove-event-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private readonly dialogConfig = {
    width: '50%',
    contentStyle: { overflow: 'auto' },
    closable: true,
    dismissableMask: true,
    modal: true,
  };
  private ref: DynamicDialogRef | undefined;
  private dialogService = inject(DialogService);
  readonly eventPreset = event as Event[];
  private readonly eventMap = signal<Map<number, Event>>(new Map(this.eventPreset.map(event => [event.id, event])));
  readonly events = computed(() => {
    return [...this.eventMap().values()]
  });


  onAddEvent(): void {
    this.ref = this.dialogService.open(FormComponentComponent, {
      ...this.dialogConfig,
      header: 'Добавить мероприятие',
      data: {action: 'add'}
    });
    this.ref.onClose.subscribe((event: Event) => {
      if (event) {
        this.eventMap.update((prev) => {
          const prevMap = new Map(prev);
          const newId = this.generateId(prevMap);
          prevMap.set(newId, {...event, id: newId});
          return prevMap;
        })
      }
    })
  };

  onRemoveEvent(event: Event): void {
    this.ref = this.dialogService.open(RemoveEventDialogComponent, {
      ...this.dialogConfig,
      header: 'Удаление мероприятия',
      data: event
    });
    this.ref.onClose.subscribe((event: Event) => {
      if (event) {
        this.eventMap.update(prev => {
          const prevMap = new Map(prev);
          prevMap.delete(event.id);
          return prevMap;
        });
      }
    })
  }

  onEditEvent(event: Event): void {
    const form: any = event.eventType === 'sport' ? SportEventFormComponent : MusicEventFormComponent;
    this.ref = this.dialogService.open(form, {
      ...this.dialogConfig,
      header: 'Редактировать мероприятие',
      data: {...event, action: 'edit'},
    });

    this.ref.onClose.subscribe((editedEvent: Event) => {
      if (editedEvent) {
        this.eventMap.update(prev => {
          const prevMap = new Map(prev);
          prevMap.set(editedEvent.id, editedEvent);
          return prevMap;
        });
      }
    })
  }

  generateId(map: Map<number, Event>): number {
    return map.size === 0 ? 1 : Math.max(...map.keys()) + 1;
  }
}
