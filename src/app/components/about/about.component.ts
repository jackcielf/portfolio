import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from "../../shared/animations/animationInput";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeAnimation],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
