import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsStoriesComponent } from './news-stories/news-stories.component';
import { OpinionComponent } from './opinion/opinion.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent,
    NewsStoriesComponent,
    OpinionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
