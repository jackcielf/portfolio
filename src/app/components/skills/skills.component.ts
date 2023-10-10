import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  faHtml = '/assets/html-logo.png';
  faCss = '/assets/css-logo.png';
  faJavaScript = '/assets/js-logo.png';
  faAngular = '/assets/angular-logo.png';
  faReact = '/assets/react-logo.png';
  faNode = '/assets/nodejs-logo.png';
  faJava = '/assets/java-logo.png';
  faPhp = '/assets/php-logo.png';
  faGit = '/assets/git-logo.png';
  faBootstrap = '/assets/bootstrap-logo.png';
  faPython = '/assets/python-logo.png';
  faTs = '/assets/ts-logo.png';
  faMySql = '/assets/mysql-logo.png';
  faMongoDb = '/assets/mongodb-logo.png';
  faFigma = '/assets/figma-logo.png';

  // Porcentagem de conhecimento nas tecnologias
  levelHtml = 'advanced';
  levelCss = 'intermediary';
  levelJS = 'intermediary';
  levelAngular = 'basic';
  levelReact = 'basic';
  levelNodeJs = 'basic';
  levelJava = 'intermediary';
  levelPhp = 'intermediary';
  levelPython = 'basic';
  levelMySql = 'intermediary';
  levelMongoDb = 'basic';
  levelTs = 'basic';
  levelGit = 'intermediary';
  levelBootstrap = 'intermediary';
  levelFigma = 'basic';

  constructor() { }

  ngOnInit() {
  }

}
