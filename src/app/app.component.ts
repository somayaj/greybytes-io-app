import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'greybytes-app';

   constructor(private router: Router){};
keyDownFunction(event) {
  if(event.keyCode == 13) {
    console.dir(event.value);
      alert("evet.value=" + event.srcElement.value);
      //searchJobsService.search(event.srcElement.value);
      //this.router.navigate(['search-jobs'], { relativeTo: this.router },{ skipLocationChange: false });
      this.router.navigate(['/search-jobs']);
     }
}

}
