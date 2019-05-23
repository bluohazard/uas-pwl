import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public constructor(private titleService: Title) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.setTitle('UAS PWL - GreggyGF');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
