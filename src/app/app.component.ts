import { Component, OnInit, OnDestroy,Input ,Output } from '@angular/core';

import { TweetComponent } from './tweet/tweet.component';
import { GlobalGeneralService } from './utilities/globalgeneral.service';
import { Custom } from './utilities/globalmodel';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html' ,
    styleUrls: ['./app.component.css'],    
    providers: [ GlobalGeneralService]
})

export class AppComponent implements OnInit, OnDestroy {
    private req:any;
    private mymodel:[Custom];

    constructor(private ggs:GlobalGeneralService) {           
       
    }
    ngOnInit(){         
         this.req = this.ggs.getPrimaryData().subscribe((data)=>{            
             this.mymodel=data;
        })
        console.log(JSON.stringify(this.mymodel));
    }
    ngOnDestroy(){
     
    }
}