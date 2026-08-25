import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-review-test',
  standalone: true,
  template: `
    <h2>Angular PR Reviewer Test</h2>

    <p>Username: {{ username }}</p>

    <button (click)="loadUsers()">
      Load Users
    </button>

    <button (click)="updateMessage()">
      Update Message
    </button>

    <div id="review-message"></div>
  `,
})
export class ReviewTestComponent
  implements OnInit, OnDestroy {

  username = 'Abhilash';

  // ISSUE 1:
  // Hardcoded secret
  private apiKey =
    'sk_test_123456789_super_secret_key';

  // ISSUE 2:
  // Unused variable
  private unusedValue = 12345;

  private subscription?: Subscription;

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {

    // ISSUE 3:
    // Console statement
    console.log(
      'ReviewTestComponent initialized'
    );

    // ISSUE 4:
    // RxJS subscription without storing/unsubscribing it
    interval(1000).subscribe(value => {
      console.log(
        'Polling:',
        value
      );
    });

    // This one is intentionally correct.
    // Reviewer should NOT report it as leaking.
    this.subscription =
      interval(5000).subscribe(value => {
        console.log(
          'Safe polling:',
          value
        );
      });
  }

  // ISSUE 5:
  // HTTP subscription without error handling
  loadUsers(): void {

    this.http
      .get(
        'https://jsonplaceholder.typicode.com/users'
      )
      .subscribe(users => {
        console.log(users);
      });
  }

  // ISSUE 6:
  // Direct DOM access in Angular
  updateMessage(): void {

    const element =
      document.getElementById(
        'review-message'
      );

    if (element) {
      element.innerHTML =
        this.username;
    }
  }

  // ISSUE 7:
  // Loose equality
  checkRole(role: any): boolean {

    if (role == 1) {
      return true;
    }

    return false;
  }

  // ISSUE 8:
  // Explicit any
  processUser(user: any): any {
    return user;
  }

  // ISSUE 9:
  // Unused parameter
  greetUser(
    name: string,
    title: string,
  ): string {

    return `Hello ${name}`;
  }

  // ISSUE 10:
  // Unreachable code
  getStatus(
    active: boolean,
  ): string {

    if (active) {
      return 'ACTIVE';

      console.log(
        'Unreachable code'
      );
    }

    return 'INACTIVE';
  }

  // ISSUE 11:
  // Unsafe JSON parsing
  parseSettings(
    settings: string,
  ): unknown {

    return JSON.parse(
      settings
    );
  }

  ngOnDestroy(): void {

    // Correct cleanup for the stored subscription.
    // Reviewer should recognize this.
    this.subscription?.unsubscribe();

    console.log(
      'ReviewTestComponent destroyed'
    );
  }
}