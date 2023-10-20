import { Component, Input, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/shared/animations/animationInput';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [fadeAnimation]
})
export class FooterComponent implements OnInit {
  @Input() route: string;

  constructor() { }

  ngOnInit() {
  }

}
