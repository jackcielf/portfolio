import { Component, OnInit } from "@angular/core";
import { fadeAnimation } from "src/app/shared/animations/animationInput";
import data from "./data.json";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  animations: [fadeAnimation],
})
export class SkillsComponent implements OnInit {
  dataSkills = data;

  constructor() {}

  ngOnInit() {}
}
