import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onClick() {
    const part1 = 'hello';
    const part2 = Math.pow(2, 6);
    const part3 = String.fromCharCode(part2);
    const part4 = 'florentpia.net';
    const part5 = part1 + String.fromCharCode(part2) + part4;
    // tslint:disable-next-line:max-line-length
    const insertMail = document.getElementById('insertMail');
    insertMail.innerHTML = '';
    insertMail.innerHTML = '<a href="' + 'mai' + 'lto' + ':' + part5 + '" style="font-size:1.5em">' + part1 + part3 + part4 + '</a>';
  }

}
