import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { Page1Component }  from './page1.component';
import { Page2Component }  from './page2.component';
import { NotFoundComponent }  from './notfound.component';

const appRoutes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: '',
    redirectTo: '/page1',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, Page1Component, Page2Component, NotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
