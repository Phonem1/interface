import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wizard-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  _UID:string = "User";
  @Input() iUser = false;

  constructor() { }

  ngOnInit() {
    console.log("Home is started!");
  }

  onClick() {
    this.iUser = !this.iUser;
    console.log(this.iUser);
  }

}
