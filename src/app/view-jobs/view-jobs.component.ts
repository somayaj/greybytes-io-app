import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { JobsService } from '../jobs.service';
import { UserData} from '../jobs.service';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent {
 job = null;
 id = null;
  constructor(route: ActivatedRoute, jobsService: JobsService) {
   var id = JSON.stringify(route.snapshot.queryParamMap.get("id"));
     console.log("id" + id);
    if (id != null)
      this.job = jobsService.getUserById(id);
       console.log(this.job);
}
  ngOnInit() {

       }
}
