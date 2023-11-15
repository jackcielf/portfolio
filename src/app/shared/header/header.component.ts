import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoName = 'Jakki';
  menuShow = false;
  move = false;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.fnMoveLogo();
  }

  fnMoveLogo(): void {
    setInterval(() => {
      this.move = !this.move;
    }, 10000);
  }

  fnShowMenu(): void {
    this.menuShow = !this.menuShow;
  }
}
