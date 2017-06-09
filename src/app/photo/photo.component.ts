import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'wizard-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  _PID:string = "PHOTO";
  @Input() iPhoto = false;
  
  constructor() { }

  ngOnInit() {
    console.log("Photo is started!");
  }

  onClick() {
    this.iPhoto = !this.iPhoto;
    console.log(this.iPhoto);
  }
}