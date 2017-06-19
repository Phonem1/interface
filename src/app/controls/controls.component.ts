import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalGeneralService } from '../utilities/globalgeneral.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Output() notifyIncrementCounter: EventEmitter<any> = new EventEmitter<any>();
  @Output() notifyDecrementCounter: EventEmitter<any> = new EventEmitter<any>();
  @Input('question') mtitle : string = "Loading!";
  private counter = 0;
  constructor(private ggs: GlobalGeneralService) { }

  ngOnInit() {    
  }

  onClickNext(){    
    // (this.counter < 4) ? this.counter++ : 0;
    // this.ggs.notifyNavBar(this.counter.toString());
    // this.updateTitle(this.counter);
    this.sendIncrementNotification('Increment');
  }
  onClickLast(){    
    // (this.counter > 0) ? this.counter-- : this.counter = 0;
    // this.ggs.notifyNavBar(this.counter.toString());
    // this.updateTitle(this.counter);
    this.sendDecrementNotification('Decrement');
  }
  sendIncrementNotification(value: string){
    this.notifyIncrementCounter.emit(value);
  }
  sendDecrementNotification(value: string){
    this.notifyDecrementCounter.emit(value);
  }
  updateTitle(value : number){
    this.mtitle = "Current Number is " + value.toString();
  }

}
