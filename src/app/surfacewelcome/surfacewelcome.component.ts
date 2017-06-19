import { Component, OnInit } from '@angular/core';
import { GlobalGeneralService } from '../utilities/globalgeneral.service';

@Component({
  selector: 'app-surfacewelcome',
  templateUrl: './surfacewelcome.component.html',
  styleUrls: ['./surfacewelcome.component.css']
})
export class SurfaceWelcomeComponent implements OnInit {

  constructor(private ggs: GlobalGeneralService) {}

  ngOnInit() {this.ggs.notifyNavBar('0');}

}
