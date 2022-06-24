import { Component, Input, OnInit } from '@angular/core';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  posts: any;

 

 constructor(private service : PostService){

 }
 
  ngOnInit(): void {
    
    this.service.getAll().subscribe({

      next : response => this.posts = response

      //error will be handled in global error handler (app-error-handler)
    });
  }

 createPost(input : HTMLInputElement){

   let post  = {title : input.value , id : input.value}; //creating post jason object
   this.posts.splice(0,0,post); //optimistic approack

   input.value=''; // clear data in the input box

   this.service.create(post).subscribe({

    next :() => {
      console.log(post);
      
    },

    error : (er : Response) =>{

      this.posts.splice(0,1);   //rollback if there is an error in optimistic approach

      if(er instanceof BadInput){
        alert('Bad Request error occured!');
        
      } else{
        throw er; //unexpected error will be thrown and catch and handled in global error handler (app-error-handler)
    
            
      }
    }
   })
 }


 updatePost(post: any){
  this.service.update(post).subscribe({
    
   next: response=> {
     console.log(response);
   }

   //unexpected error will be handled in global error handler (app-error-handler)
    

  });
  
}


 deletePost(post: any){

  //optimistic way- delete first , rollback if there is an error
  let index = this.posts.indexOf(post);
  this.posts.splice(index,1);  
    



   this.service.delete(post.id).subscribe({

    

    error : (error : Response) =>{


      this.posts.splice(index,0, post);     
      
      if(error instanceof NotFoundError){
        alert('this post has already been deleted');

      }else{
        throw error;
         //unexpected error will be thrown and catch and handled in global error handler (app-error-handler)
    
      }

      
     }
     
   });
 }


}
