import { Component, OnInit, Input } from '@angular/core';
import {LikeComponent} from '../like/like.component';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],  
})
export class TweetComponent implements OnInit {
  
 
  constructor() { console.log(this.data); }
  @Input() data;
  ngOnInit() {
    console.log("Tweet");
  }

}
