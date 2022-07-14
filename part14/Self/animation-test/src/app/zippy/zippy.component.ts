import { animate, animateChild, group, query, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';

import { Component, Input, OnInit } from '@angular/core';
import { expandCollapse } from './zippy.component.animation';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    expandCollapse
  ]
})
export class ZippyComponent{

  @Input('title') title: string ='';
  isExpanded: boolean = false;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }

  

}
