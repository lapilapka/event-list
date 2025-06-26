import {FormControl} from '@angular/forms';
import {EventType} from './event-type.model';

export interface EventForm {
  title: FormControl<string | null>;
  eventType: FormControl<EventType | null>;
  location: FormControl<string | null>;
  description: FormControl<string | null>;
  genre?: FormControl<string | null>;
  participants?: FormControl<number | null>;
}
