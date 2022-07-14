
import { animate, animateChild, group, query, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';



export const expandCollapse = trigger('expandCollapse',[

    state('collapsed',style({
      height:0,
      paddingTop: 0,
      paddingBottom:0,

      opacity:0
    })),

    // we can remove below code
    // state('expanded',style({
    //   height:'*', //compute height at runtime
    //   overflow:'auto',
    //   padding: '*'
    // })),       



    transition('collapsed => expanded',[
      animate('300ms ease-out', style({
        height:'*',
        paddingTop: '*',
        paddingBottom:'*'
      })),

      animate('1s', style({opacity:1})),

    ]),

    transition('expanded => collapsed',[
      animate('300ms ease-in')
    ])

  ])