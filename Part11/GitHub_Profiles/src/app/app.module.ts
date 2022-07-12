import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponentComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '' , 
        component: HomeComponent
      }, //homepage or default route

      {
        path: 'followers/:id /:username' , //multiple paametersfor url
        component: GithubProfileComponent
        // :uername is a parameter
      }, 

      {
        path: 'followers' , 
        component: GithubFollowersComponent
      }, //homepage or default route
           

      {
        path: 'post' , 
        component:PostComponentComponent
      }, 
      
      {
        path: '**' , //any url 
        component:PostComponentComponent
      }, 
    ])

    
  ],
  providers: [
    PostService,
    {provide: ErrorHandler , useClass : AppErrorHandler},
    //telling angular that where you were using ErrorHandler instead using AppHandler class
    
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
