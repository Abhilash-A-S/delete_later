import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';

import {
  RouterOutlet,
} from '@angular/router';

import {
  interval,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {

  protected title = 'aitest';

  protected counter = 0;

  private apiKey =
    'sk_test_123456789_super_secret_key';

  private unusedValue = 12345;

  private safeSubscription?: Subscription;

  ngOnInit(): void {

    console.log(
      'Application initialized'
    );

    interval(1000).subscribe(
      value => {
        this.counter = value;

        console.log(
          'Counter:',
          value
        );
      }
    );

    this.safeSubscription =
      interval(5000).subscribe(
        value => {
          console.log(
            'Safe interval:',
            value
          );
        }
      );
  }

  updateMessage(): void {

    const element =
      document.getElementById(
        'review-message'
      );

    if (element) {
      element.innerHTML =
        this.title;
    }
  }

  checkRole(role: any): boolean {

    if (role == 1) {
      return true;
    }

    return false;
  }

  processUser(user: any): any {

    return user;
  }

  greetUser(
    name: string,
    title: string,
  ): string {

    return `Hello ${name}`;
  }

  getStatus(
    active: boolean,
  ): string {

    if (active) {
      return 'ACTIVE';

      console.log(
        'Unreachable'
      );
    }

    return 'INACTIVE';
  }

  parseSettings(
    settings: string,
  ): unknown {

    return JSON.parse(
      settings
    );
  }

  ngOnDestroy(): void {

    this.safeSubscription
      ?.unsubscribe();

    console.log(
      'Application destroyed'
    );
  }
}