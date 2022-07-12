import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { OrderService } from './order.service';
import { AuthService } from './auth.service';
import { fakeBackendProvider } from './helpers/fake-backend';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoAccessComponent,
    NotFoundComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '' , component: HomeComponent},
      {path: 'admin' , component: AdminComponent},
      {path: 'login' , component: LoginComponent},
      {path: 'no-access' , component: NoAccessComponent}
    ])
  ],
  providers: [
    OrderService,
    AuthService,

    //for creatig mock-backend , You dont neew these in real apps
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
