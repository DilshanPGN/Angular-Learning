import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  viewMode = 'map';

  courses: { id: number; name: string; }[] = [];


  onAdd(){
    this.courses.push({id:4 , name: 'course4'});
  }

  onRemove(course: { id: number; name: string; }){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  loadCourses(){
    this.courses = [
      {id:1 , name: 'course1'},
      {id:2 , name: 'course2'},
      {id:3 , name: 'course3'}
    ]
  }


  trackCourse(index: any , course: { id: any; }){
    return course ? course.id : undefined;
  }
}
