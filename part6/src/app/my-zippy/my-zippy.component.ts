import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-zippy',
  templateUrl: './my-zippy.component.html',
  styleUrls: ['./my-zippy.component.css']
})
export class MyZippyComponent implements OnInit {

  @Input("title") title:string ="This is the title";
  isExpanded:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isExpanded=!this.isExpanded;
  }

}
