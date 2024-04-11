import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styles: ['.spacer { flex: 1 1 auto; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isDarkTheme = false;

  constructor(private overlayContainer: OverlayContainer) {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.overlayContainer
      .getContainerElement()
      .classList.toggle('dark-theme', this.isDarkTheme);
  }
}
