import { HttpClient } from '@angular/common/http';
import { catchError, throwError ,map } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';


export class DataService {


  constructor(private url : string , private http : HttpClient) { }

  getAll(){  //for get resources
    return this.http.get(this.url).pipe(
     
      //catching error
      catchError(this.handleError) //sending reference of the handle error
    );  
  }

  create(resource: any){

    return this.http.post(this.url , JSON.stringify(resource)).pipe(

      //catching error
      catchError(this.handleError) //sending reference of the handle error

   );
  }

  update(post: any){
    return this.http.patch(this.url + '/' + post.id , JSON.stringify({isRead : true})).pipe(

      //catching error
      catchError(this.handleError) //sending reference of the handle error
    );
  }

  delete(id:number){    
    return this.http.delete(this.url+'/'+id).pipe(

      //catching error
      catchError( this.handleError) //sending reference of the handle error


    );
  }



  //method for handle error

  private handleError(error :Response){

    

    if(error.status === 400) //bad request error
      return throwError(()=> new BadInput(error.json));   //error.json becase error has a data in this time
    if(error.status === 404) //not found error
      return throwError(()=> new NotFoundError());

    return throwError(()=> new AppError(error));  
    

  }


  




}
