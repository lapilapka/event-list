import {EventType} from './event-type.model';

export interface Event {
  id: number;
  title: string;
  location: string;
  description?: string;
  eventType: EventType;
  participants?: number;
  genre?: string;
}
