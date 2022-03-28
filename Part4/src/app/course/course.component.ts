import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "List of couses";
  imageUrl = "https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_960_720.png";
  col = 2;
  isActive = true;

  constructor() { }

  ngOnInit(): void {
  }

 // event binding

  onSave($event: any){
    console.log("Button Was clicked !", $event);
  }

  // stop event bubbling


  // stop event bubbling
  onDivClick(){
    console.log("Div Was clicked !");
  }

  onSaveWithoutBubble($event: any){
    $event.stopPropagation();  //if this is not there onDivClick() also triggered
    console.log("Button Was clicked !", $event);
  }

  //event filtering

  upEnter(){
    console.log("Enter was pressed !")
  }

  /*----------Template variable-------------*/
  //traditional (hard)

  oneKeyUpTrad($event: any){
    console.log( $event.target.value);
  }

  //angular special
  oneKeyUpSpecial(email: any){
    console.log(email);
  }

   /*----------Two way binding------------*/

   myemail = "nip@dilsgan.com";
   OneKeyUp2way(){
     console.log(this.myemail);
   }


    // Pipes

   courseDetail = {
     title : "The morning show",
     rating : 4.9745,
     students : 30123,
     price : 190.95,
     relaseDate : new Date(2022,3,3)
   }


   //Custom pipe - summary


   text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';


}
