import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GlobalGeneralService } from '../utilities/globalgeneral.service';

@Component({
  selector: 'wizard-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private data : any[] = [
     {mHome : null},
     {mUser : null},
     {mCamera : null},
     {mTc : null},
     {mTick : null}
   ];

  private ssp:Subscription;
  constructor(private ggs:GlobalGeneralService) {     
    
  }
  ngOnInit() {         
    this.changeState(0);
    this.ssp = this.ggs.notifyObservable$.subscribe((res)=>{
      this.changeState(Number(res));
    })
    
  }

  ngOnDistory(){
    this.ssp.unsubscribe();
  }

  onHomeClick() {
    this.changeState(0);
  }

  onUserClick() {
    this.changeState(1);
  }

  onCameraClick() {
    this.changeState(2);
  }

  onTcClick() {
    this.changeState(3);
  }

  onTickClick() {
    this.changeState(4);
  }

  changeState(position:number){
    var val;
    for(val in this.data){
      (val > position || val < position) ? this.data[val] = false : this.data[val] = true;      
    }
  }

 
    

  

}
