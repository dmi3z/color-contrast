import { Component } from '@angular/core';

enum TextColor {
  LIGHT = '#ffffff',
  DARK = '#3A3A3A'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public textColor = TextColor.DARK;
  public backgroundColor = TextColor.LIGHT;
  public borderValue = 90;

  constructor() { }

  public setContrastTextColor(color: string): void {
    this.textColor = this.getContrastColor(color);
  }

  private getContrastColor(color: string): TextColor {
    const c = color.substring(1);
    const r = parseInt(c.substr(0, 2), 16);
    const g = parseInt(c.substr(2, 2), 16);
    const b = parseInt(c.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    if (yiq >= this.borderValue) {
      return TextColor.DARK;
    }
    return TextColor.LIGHT;
  }

}
