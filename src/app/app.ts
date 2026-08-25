import {
  Component,
  OnInit,
} from '@angular/core';

import {
  RouterOutlet,
} from '@angular/router';

import {
  interval,
} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {

  protected title = 'aitest';

  protected counter = 0;

  ngOnInit(): void {

    interval(1000).subscribe(
      value => {
        this.counter = value;
      }
    );
  }
}