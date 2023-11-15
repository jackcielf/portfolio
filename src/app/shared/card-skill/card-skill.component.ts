import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
  styleUrls: ['./card-skill.component.scss']
})
export class CardSkillComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() { }
}
