import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EventListComponent} from './pages/event-list/event-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'event-list';
}
