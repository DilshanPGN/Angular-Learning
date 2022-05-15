import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form2',
  templateUrl: './new-course-form2.component.html',
  styleUrls: ['./new-course-form2.component.css']
})
export class NewCourseForm2Component  {



  /*---- Previous Way

  //forn group
  form = new FormGroup({

    //form control
    name : new FormControl('', Validators.required),

    //form group
    contact : new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),

    //form array

    topics : new FormArray([])
  });


  ---*/

  

  /* Another way ----*/
  form;
  constructor(fb : FormBuilder){

    this.form = fb.group({

      name : ['',Validators.required],
      contact : fb.group({
        email:[],
        phone:[]
      }),
      topics : fb.array([])

    });

  }


}
