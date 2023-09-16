import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(){}
  headerName = "Angular Technical Assessment"
  salary = 10;
  isDisabled=false;
  colorName="green";
  font='40px';
  className = "headClass"
  styleValue={"color": "green", "font-size": "30px"}
  colors=['green', 'red', 'yellow', 'black']

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  functionClick(name: string) {
    alert(name);
  }

}
