import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'wizard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _HID:string = "HOME";
  @Input() iHome = false;

  constructor() { }

  ngOnInit() {
    console.log("Home is started!");
  }

  onClick() {
    this.iHome = !this.iHome;
    console.log(this.iHome);
  }
}