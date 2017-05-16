import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { BugTrackerModule } from './bug-tracker/bugTracker.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BugTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
