import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  @Input() width!: string;
  @Input() height!: string;
  @Input() top!: string;
  @Input() right!: string;
  @Input() bottom!: string;
  @Input() left!: string;
  @Input() border!: string;
  @Input() radius!: string;
  @Input() zindex!: string;
  @Input() backgroundColorItem!: string;
  @Input() borderItem!: string;
  @Input() borderRadiusItem!: string;
  @Input() boxShadow!: string;
  
  constructor() { }

  ngOnInit() {
  }

}
