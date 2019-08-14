import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { AppComponent } from './app.component';
import { PostJobsComponent } from './post-jobs/post-jobs.component';

const routes:
Routes = [
{ path: '', component: AppComponent},
{ path: 'search-jobs', component: SearchJobsComponent },
{ path: 'search-jobs?id=:id', component: SearchJobsComponent },

{ path: 'post-jobs', component: PostJobsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
