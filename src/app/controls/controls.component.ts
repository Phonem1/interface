import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalGeneralService } from '../utilities/globalgeneral.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Input() mtitle = "Something is not right here yet";
  private counter = 0;
  constructor(private ggs: GlobalGeneralService) { console.log("testing");}

  ngOnInit() {
    console.log("Control is started");
  }
  onClickNext(){    
    (this.counter < 4) ? this.counter++ : 0;
    this.ggs.notifyNavBar(this.counter.toString());
    this.updateTitle(this.counter);
  }
  onClickLast(){    
    (this.counter > 0) ? this.counter-- : this.counter = 0;
    this.ggs.notifyNavBar(this.counter.toString());
    this.updateTitle(this.counter);
  }
  updateTitle(value : number){
    this.mtitle = "Current Number is " + value.toString();
  }

}
