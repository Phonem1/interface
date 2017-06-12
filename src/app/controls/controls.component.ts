import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Input() mtitle = "Something is not right here yet";

  constructor() { console.log("testing");}

  ngOnInit() {
    console.log("Control is started");
  }

}
