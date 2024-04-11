import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '@core/services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatSlideToggleModule, MatIconModule],
  templateUrl: './header.component.html',
  styles: ['.spacer { flex: 1 1 auto; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isDarkTheme = false;

  private themeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.initializeTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.toggleTheme();
  }
}
