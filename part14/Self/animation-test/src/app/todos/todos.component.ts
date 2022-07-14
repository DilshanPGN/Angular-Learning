import { animate, animateChild, group, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component} from '@angular/core';
import { bounceOutAnimation } from '../animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations:[

    /* thre is an error
     
    trigger('todoAnimation', [
      
      transition(':enter',[
        group([ // to run parellal
          query('h1',[
            style({transform: 'translateY(-20px)'}),
            animate(1000)
          ]),
  
          query('@todoAnimation' ,
          stagger(200, animateChild()) //appear items one after other
          )
        ])
      ])
    ]),
   

    */
    trigger('todoAnimation' , [

      transition(':enter' ,[
        style({opacity:0}),
        animate(2000)
      ]),

      transition(':leave' ,[
        style({backgroundColor:'red'}),
        animate(200),
        useAnimation(bounceOutAnimation)
      ])
      
    ])
  ]
})
export class TodosComponent{

  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item: any) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event: any){
    console.log($event);
  }

  animationDone($event: any){
    console.log($event);
  }

}
