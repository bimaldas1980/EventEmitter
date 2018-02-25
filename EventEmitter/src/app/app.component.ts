import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event Emitter';

  evenCounter: { eventCount: number }[] = [];
  oddCounter: { eventCount: number }[] = [];

  OnEmitEvenNumber(eventItem) {
    this.evenCounter.push(eventItem);
  }

  OnEmitOddNumber(eventItem) {
    this.oddCounter.push(eventItem);
  }

}
