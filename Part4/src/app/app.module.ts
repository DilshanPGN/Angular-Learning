import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';
import { GlowingStarComponent } from './glowing-star/glowing-star.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { CustomTitleCasePipe } from './customTitleCase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    GlowingStarComponent,
    TitleCaseComponent,
    CustomTitleCasePipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
