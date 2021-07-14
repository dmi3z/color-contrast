import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'color-detect';
  public color: string;
  public textColor = '000000';
  public borderValue = 40;

  public test(): void {
    const c = this.color.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    console.log(luma);

    if (luma < this.borderValue) {
      this.textColor = 'ffffff';
    } else {
      this.textColor = '3A3A3A';
    }
  }
}
