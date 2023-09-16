import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  constructor( private router: Router){}
  title = 'ClientApp03';
  isMenuVisible = true;
  ngDoCheck(): void {
    const currentRoute = this.router.url;
    console.log(currentRoute);
    if(currentRoute=='/login' || currentRoute=='/' ){
      this.isMenuVisible = false;
    }
    else{
      this.isMenuVisible = true;
    }
  }

}
