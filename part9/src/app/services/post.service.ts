import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url ='https://jsonplaceholder.typicode.com/posts'; 


  constructor(private http : HttpClient) { }

  getPosts(){  //for create post
    return this.http.get(this.url);  
  }

  createPost(post: { title: string; }){
    return this.http.post(this.url , JSON.stringify(post)).pipe(

      //catching error
      catchError( (error : Response) =>{

        if(error.status === 400){
          return throwError(()=> new BadInput(error.json));   //error.json becase error has a data in this time
        }else{
          return throwError(()=> new AppError(error.json));   //error.json becase error has a data in this time
        }

      })

    );
  }

  updatePost(post: { id: string; }){
    return this.http.patch(this.url + '/' + post.id , JSON.stringify({isRead : true}));
  }

  deletePost(id:string){    
    return this.http.delete(this.url+'/'+id).pipe(

      //catching error
      catchError( (error : Response) => {


        if(error.status === 404){ //not found error
          return throwError(()=> new NotFoundError());
        }else{ 
          return throwError(()=> new AppError(error));
        }
      })


    );
  }


  




}
