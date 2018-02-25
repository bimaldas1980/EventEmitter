import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

 @Output() evenEmitter = new EventEmitter<number>();
 @Output() oddEmitter = new EventEmitter<number>();;
 
 timerRef;

  constructor() { }

  ngOnInit() {

  }

  OnStartEvent() {
    this.timerRef = setInterval(t=> {
        var rd = this.GenerateRandomNumber();
        if(this.isEven(rd)) {
          this.evenEmitter.emit(rd);
        }else {
          this.oddEmitter.emit(rd);
        }
    }, 1000);
   }

   isEven(n) {
    return n % 2 == 0;
    }

  OnStopEvent() {
    window.clearInterval(this.timerRef);
  }

  GenerateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }


}
