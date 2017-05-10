import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <nav>
    <a routerLink="/page1" routerLinkActive="active">Page1</a>
    <a routerLink="/page2">Page2</a>
  </nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
