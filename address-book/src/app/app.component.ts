import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'address-book';
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
