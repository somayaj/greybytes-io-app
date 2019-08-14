import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {MaterialModule} from '.././material-module';
import { JobsService } from './jobs.service';
import { PostJobsComponent } from './post-jobs/post-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewJobsComponent,
    SearchJobsComponent,
    PostJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule,
    FormsModule,
MaterialModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
