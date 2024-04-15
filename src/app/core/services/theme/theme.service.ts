import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private theme = 'light-theme';

  private isDarkTheme = new BehaviorSubject<boolean>(false);
  currentTheme = this.isDarkTheme.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initializeTheme() {
    this.renderer.addClass(this.document.body, this.theme);
  }

  toggleTheme() {
    const theme = this.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.renderer.removeClass(this.document.body, this.theme);
    this.renderer.addClass(this.document.body, theme);
    this.theme = theme;
    this.isDarkTheme.next(theme === 'dark-theme');
  }
}
