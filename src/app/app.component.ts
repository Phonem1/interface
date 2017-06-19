import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { TweetComponent } from './tweet/tweet.component';
import { GlobalGeneralService } from './utilities/globalgeneral.service';
import { Custom } from './utilities/globalmodel';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GlobalGeneralService]
})

export class AppComponent implements OnInit, OnDestroy {

    private customs: Custom[];
    private data: any;
    private type: string; //current page
    question = 'AppComponent';

    //limits
    private TotalPages : number = 0;

    constructor(private ggs: GlobalGeneralService) {        
        this.ggs.getPrimaryData()
                .subscribe(
                    customs => {
                        this.customs = customs;
                        this.setupBasic();
                    });
    }

    private myIncrementCounter(value: any): void {
        (value = 'Increment') ? ((parseInt(this.type) < 5) ? this.type = (parseInt(this.type) + 1).toString() : console.log('value is greater than 5')) : false;
        //console.log(this.type);     
        this.updateQuestion(this.type);
    }

    private myDecrementCounter(value: any): void {
        (value = 'Decrement') ? ((parseInt(this.type) > 0) ? this.type = (parseInt(this.type) - 1).toString() : console.log('value is lesser than 1') ): false;
        //console.log(this.type);
        this.updateQuestion(this.type);
    }

    private setupBasic(): void {
        this.type = '4';
        for(let item of this.customs){
            this.TotalPages += parseInt(item.pages);
            (item.index == this.type) ? this.question = item.question.toUpperCase() : console.log(item.index + ' ' + 'do nothing');
        }
        //console.log(this.TotalPages);
    }
    private updateQuestion(value: any) : void {
        for(let item of this.customs){
            (item.index == value) ? this.question = item.question.toUpperCase() : false;
        }    
    }

    ngOnInit() {               
    }
    ngOnDestroy() {
    }
}