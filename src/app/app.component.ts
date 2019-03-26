import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foliogular';

  languageList = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

}
