import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wizard-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   @Input() private data : any[] = [
     {mHome : null},
     {mUser : null},
     {mCamera : null},
     {mTc : null},
     {mTick : null}
   ];
  constructor() {     
    
  }
  ngOnInit() {     
    console.log("Init Navbar is started!");  
    this.ChangeState(0);
  }

  onHomeClick() {
    this.ChangeState(0);
  }

  onUserClick() {
    this.ChangeState(1);
  }

  onCameraClick() {
    this.ChangeState(2);
  }

  onTcClick() {
    this.ChangeState(3);
  }

  onTickClick() {
    this.ChangeState(4);
  }

  ChangeState(position:number){
    var val;
    for(val in this.data){
      (val > position || val < position) ? this.data[val] = false : this.data[val] = true;      
    }
  }

  

}
