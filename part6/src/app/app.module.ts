import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { MyZippyComponent } from './my-zippy/my-zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    ZippyComponent,
    MyZippyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
