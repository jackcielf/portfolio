import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {
  linkInsta = 'https://www.instagram.com/dev_jakkifx/';
  linkCodePen = 'https://codepen.io/jakkifx';
  linkGitHub = 'https://github.com/JakkiFx';
  linkLinkedin = 'https://www.linkedin.com/in/jackciel-felix-82a194239/';

  constructor() { }

  ngOnInit() {
  }

}
