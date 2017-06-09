import { Component, OnInit } from '@angular/core';
import {TweetService} from '../tweet.service'
import {TweetComponent} from '../tweet/tweet.component'

@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  providers: [TweetService],
})
export class TweetsComponent implements OnInit {
  tweets: any[];
  constructor(tweetService: TweetService) { this.tweets = tweetService.getTweets(); }

  ngOnInit() {
    console.log("Tweets");
  }

}
