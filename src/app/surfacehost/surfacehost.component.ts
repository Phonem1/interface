import { Component, OnInit } from '@angular/core';
import { GlobalGeneralService } from '../utilities/globalgeneral.service';

@Component({
  selector: 'app-surfacehost',
  templateUrl: './surfacehost.component.html',
  styleUrls: ['./surfacehost.component.css']
})
export class SurfaceHostComponent implements OnInit {

  constructor(private ggs: GlobalGeneralService) { }

  ngOnInit() {
    this.ggs.notifyNavBar('1');
  }

}
