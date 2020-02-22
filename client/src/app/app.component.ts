import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    shouldRun: boolean = false;
    counter: number = 0;

    constructor(private router: Router) {
        this.onStartup();
    }

    onStartup() {
        console.log('Ernest Bieś, PWSZ Tarnów 2020');
    }

    showSidenav() {
      this.counter += 1;
      if (this.counter %2 !== 0) {
        this.shouldRun = true;
      } else {
        this.shouldRun = false;
      }
    }

    redirect() {
      this.router.navigate(['/'])
        .then(()=>{this.router.navigate(['task/add'])});
    }
}
