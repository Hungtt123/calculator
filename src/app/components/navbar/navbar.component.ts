import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  constructor() { }
  name = 'truong tan hung';
  
  ngOnInit(): void {
  }

  hello(){
    
    alert('hello ' + this.name);
  }

}
