import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';




    export let bounceOutAnimation = animation(
        
        animate('0.5s 1s ease-in' , keyframes([
            style({
                offset: .2, //untill 20% of animation
                opacity: 1,
                transform: 'translateX(20px)'
            }),

            style({
                offset: 1, //untill 100% of animation
                opacity: 0,
                transform: 'translateX(-100%)'
            })                
        ])) 
    );



    export let fade = trigger( 'fade' ,[

        //state definition
        state('void' , style({opacity : 0})), //before

        transition(':enter , :leave' , [ // void <=> *   
        animate(2000) //after
        ])

    ]);


    /*

    ********************** animations without using keyframes
    
    export let slide = trigger('slide',[
        transition(':enter',[
            style({transform: 'translateX(-10px)'}),  //apply before enter
            animate(2000) //applay in entering
        ]),

        transition(':leave',[
          
            animate('0.5s 1s ease-in', style({transform: 'translateX(-100%)'}))   // ' time delay ease_in_or_out_or_basire '

            //cubic-bazier example - cubic-bezier(0,1.55,.79,-0.8)
        ])
    ])

    */

    export let slide = trigger('slide',[
        transition(':enter',[
            style({transform: 'translateX(-10px)'}),  //apply before enter
            animate(2000) //applay in entering
        ]),

        transition(':leave',[
          
            useAnimation(bounceOutAnimation)

        ])
    ])





