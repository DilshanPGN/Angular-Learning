import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({//for whole form
      
    account : new FormGroup({  //for account section

      username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpaceMethod,      //custom validator   
        ],
        //asynchronos
        UsernameValidators.shouldBeUnique //custom validator
      ),
      password: new FormControl('',Validators.required)


    })
    
  });


  get username() {
    return this.form.get('account.username');
  }

  get password(){
    return this.form.get('password');
  }

    display(){
      console.log(this.form.get('username')?.errors);
    }


    login(){

      //below code is for when have a http service
      //let isValid = authService.login(this.form.value);

      //for testing perposes

      this.form.setErrors({
        invalidLogin : true
      });


    }

  
}
