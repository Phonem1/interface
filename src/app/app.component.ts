import { Component, OnInit, OnDestroy,Input ,Output } from '@angular/core';
import { TweetComponent } from './tweet/tweet.component';
import { GlobalGeneralService } from './utilities/globalgeneral.service';
import { Custom } from './utilities/globalmodel';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html' ,
    styleUrls: ['./app.component.css'],    
    providers: [ GlobalGeneralService ]
})

export class AppComponent implements OnInit, OnDestroy {
   
    private customs: Custom[];
    private data: any;

    constructor(private ggs:GlobalGeneralService) {           
       this.ggs.getPrimaryData().subscribe(customs => this.customs =customs);
    }
    ngOnInit(){   
        
    }
    ngOnDestroy(){        
    }
}