import { Component, OnInit } from '@angular/core';
import { GlobalGeneralService } from '../utilities/globalgeneral.service';

@Component({
  selector: 'app-surfacepolicy',
  templateUrl: './surfacepolicy.component.html',
  styleUrls: ['./surfacepolicy.component.css']
})
export class SurfacePolicyComponent implements OnInit {

  constructor(private ggs: GlobalGeneralService) { }

  ngOnInit() {
    this.ggs.notifyNavBar('3');
  }

}
