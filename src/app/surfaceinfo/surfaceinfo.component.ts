import { Component, OnInit } from '@angular/core';
import { GlobalGeneralService } from '../utilities/globalgeneral.service';

@Component({
  selector: 'app-surfaceinfo',
  templateUrl: './surfaceinfo.component.html',
  styleUrls: ['./surfaceinfo.component.css']
})
export class SurfaceInfoComponent implements OnInit {

  constructor(private ggs: GlobalGeneralService) { }

  ngOnInit() {
    this.ggs.notifyNavBar('1');
  }

}
