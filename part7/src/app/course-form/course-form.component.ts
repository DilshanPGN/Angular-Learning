import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  courseCategory = [
    {id : 1 , name: 'Development'},
    {id : 2 , name: 'Art'},
    {id : 3 , name: 'Language'},
  ];

}
