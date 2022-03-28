import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('is-favourite') isFavourite: boolean = false;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.change.emit({newValue :this.isFavourite});
  }

}

export interface FavouriteChangeEventArgs{
    newValue:boolean;
}