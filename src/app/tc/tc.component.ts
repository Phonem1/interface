import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'wizard-tc',
  templateUrl: './tc.component.html',
  styleUrls: ['./tc.component.css']
})
export class TcComponent implements OnInit {
  _TCID:string = "TC";
  @Input() iTc = false;

  constructor() { }

  ngOnInit() {
    console.log("Home is started!");
  }

  onClick() {
    this.iTc = !this.iTc;
    console.log(this.iTc);
  }

}
