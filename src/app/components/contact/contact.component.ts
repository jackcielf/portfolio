import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  apiUrl = 'https://api.staticforms.xyz/submit';
  accessKey = '583e11ac-bcca-44d4-be9b-c5a29332aa2f';
  afterSubmitRedirecTo = 'https://portfolio-jakki.netlify.app/contact';

  constructor() { }

  ngOnInit() {
  }

}
