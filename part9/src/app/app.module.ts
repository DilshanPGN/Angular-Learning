import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    PostComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

    
  ],
  providers: [
    PostService,
    {provide: ErrorHandler , useClass : AppErrorHandler}
    //telling angular that where you were using ErrorHandler instead using AppHandler class
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
