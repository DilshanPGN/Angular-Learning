import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent  {

  posts: any;
  http : HttpClient;
  url ='https://jsonplaceholder.typicode.com/posts'; 

 constructor(http : HttpClient){
    this.http = http;

   http.get(this.url).subscribe(
     response => {
       //console.log(response);
       this.posts = response;
     }
   );


   
 }


 createPost(input : HTMLInputElement){

   let post  = {title : input.value}; //creating post jason object
   input.value=''; // clear data in the input box

   this.http.post(this.url , JSON.stringify(post)).subscribe(
     response => {
       console.log(post);
       this.posts.splice(0,0,post);
     }
   );

 }


 updatePost(post: { id: string; }){
   this.http.patch(this.url + '/' + post.id , JSON.stringify({isRead : true})).subscribe(response=> {
     console.log(response);
   })
   
 }


}
