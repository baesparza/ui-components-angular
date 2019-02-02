import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './modules/theme/theme.module';
import { lightTheme } from './modules/theme/data/themes.data';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule.forRoot({
      themes: [lightTheme],
      active: 'light'
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
