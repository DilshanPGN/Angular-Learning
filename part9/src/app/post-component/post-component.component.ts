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
    
    this.service.getPosts().subscribe({

      next : response => {
        this.posts = response;
      },

      error : error =>{
        alert('An unexpected error occured!');
        console.log(error);
      }
    });
  }

 createPost(input : HTMLInputElement){

   let post  = {title : input.value}; //creating post jason object
   input.value=''; // clear data in the input box

   this.service.createPost(post).subscribe({

    next :response => {
      console.log(post);
      this.posts.splice(0,0,post);
    },

    error : (er : Response) =>{

      if(er instanceof BadInput){
        alert('Bad Request error occured!');
        
      } else{
        alert('An unexpected error occured!');
        console.log(er);       
      }
    }
   })
 }


 updatePost(post: { id: string; }){
  this.service.updatePost(post).subscribe({
    
   next: response=> {
     console.log(response);
   },

   error : error =>{
    alert('An unexpected error occured!');
    console.log(error);
   }
  });
  
}


 deletePost(post: { id: string; }){
   this.service.deletePost(post.id).subscribe({

    next : response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);  
    },

    error : (error : Response) =>{


      
      if(error instanceof NotFoundError){
        alert('this post has already been deleted');

      }else{
        alert('An unexpected error occured!');
        console.log(error);
      }

      
     }
     
   });
 }


}
