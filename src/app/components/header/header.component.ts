import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoName = 'Jakki';
  menuShow = false;

  constructor() { }

  ngOnInit() { }

  fnShowMenu(): void {
    console.log('okokok')
    this.menuShow = !this.menuShow;
  }
}
