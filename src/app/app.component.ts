import { Component } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { Observable, Subscribable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libtest';
  /**
   *
   */
  constructor() {
    // this.countTime();
  }

  public countTime() {
    const expectedTime = 10;
    let executor = timer(expectedTime * 1000);
    let subscriber = executor.subscribe(() => {
      console.log('It is time!!');
    });

    const counter = timer(1000, 1000)
    .subscribe((second) => {
        console.log('Second: ', second);

        if (second === 5) {
          subscriber.unsubscribe();
          executor = timer(expectedTime * 1000);
          console.log('Creating executor again!');

          subscriber = executor.subscribe(() => {
            console.log('It is time!!');
          });
        } else if (second === expectedTime) {
          console.log('Unsubscribing counter!!');
          counter.unsubscribe();
        }
    });
  }
}
