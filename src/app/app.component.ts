import { Component } from '@angular/core';
import { TweetComponent } from './tweet/tweet.component';
import { TweetService } from './tweet.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html' ,
    styleUrls: ['./app.component.css'],
    providers: [TweetService]
})

export class AppComponent {
    tweets: any[];

    constructor(TweetService: TweetService) {
        this.tweets = TweetService.getTweets();
    }
}