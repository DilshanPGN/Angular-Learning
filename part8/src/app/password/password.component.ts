import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';



@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  form : FormGroup;

  constructor(fb : FormBuilder){


    this.form = fb.group({
      oldPassword: ['',
        Validators.required,
        PasswordValidators.shouldBeUnique
      ],

      newPassword:['', Validators.required ],
      confirmPassword:['', Validators.required]



    },  { Validator: PasswordValidators.shouldBeMatch});
  }



  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }
  get confirmPassword(){
    return this.form.get('confirmPassword');
  }


}
