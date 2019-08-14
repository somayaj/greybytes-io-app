import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../jobs.service';
import { UserData} from '../jobs.service';


@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})

export class SearchJobsComponent{
displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
dataSource: MatTableDataSource<UserData>;
isQueryParamIdPresent = false;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

constructor(private router: Router, private route: ActivatedRoute, jobsService: JobsService) {
    var users = jobsService.getUsers();
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getId();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 getId()
 {
   return JSON.stringify(this.route.snapshot.queryParamMap.get("id"));
  }
}



