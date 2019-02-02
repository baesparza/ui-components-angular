import { Component } from '@angular/core';
import { ThemeService } from './modules/theme/services/theme.service';

@Component({
  selector: 'indev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ui-components';

  constructor(private themeService: ThemeService) { }

  toggle() {
    const active = this.themeService.activeTheme;
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
}
