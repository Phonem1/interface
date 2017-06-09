import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'wizard-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.css']
})
export class TickComponent implements OnInit {
  _TID:string = "TICK";
  @Input() iTick = false;

  constructor() { }

  ngOnInit() {
    console.log("Home is started!");
  }

  onClick() {
    this.iTick = !this.iTick;
    console.log(this.iTick);
  }

}
