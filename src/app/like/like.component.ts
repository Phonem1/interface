import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() totalLikes = 0;
  @Input() iLike = false;

  constructor() { }

  ngOnInit() {
    console.log("Like");
  }

  onClick() {
    this.iLike = !this.iLike;
    this.totalLikes += this.iLike ? 1 : -1;
  }

}
