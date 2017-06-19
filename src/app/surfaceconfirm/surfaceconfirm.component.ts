import { Component, OnInit } from '@angular/core';
import { GlobalGeneralService } from '../utilities/globalgeneral.service';

@Component({
  selector: 'app-surfaceconfirm',
  templateUrl: './surfaceconfirm.component.html',
  styleUrls: ['./surfaceconfirm.component.css']
})
export class SurfaceConfirmComponent implements OnInit {

  constructor(private ggs: GlobalGeneralService) { }

  ngOnInit() {
    this.ggs.notifyNavBar('4');
  }

}
