import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isLiked:boolean = false;
  @Input() likesCount:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){

    if (this.isLiked) {
      this.likesCount--;
    } else {
      this.likesCount++;
    }
    this.isLiked = !this.isLiked;
  }

}
