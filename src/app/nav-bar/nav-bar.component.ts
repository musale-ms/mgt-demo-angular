import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  brand: string = 'MGT V3 Preview 1';

  constructor() { }

  ngOnInit(): void {
  }

}
