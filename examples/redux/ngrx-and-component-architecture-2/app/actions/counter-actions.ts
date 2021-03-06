import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

@Injectable()
export class CounterActions {
  constructor(private store: Store<any>) {}

  increment() {
    this.store.dispatch({ type: INCREMENT_COUNTER });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT_COUNTER });
  }
  
  incrementAsync(timeInMs = 1000) {
    this.delay(timeInMs).then(() => this.store.dispatch({ type: INCREMENT_COUNTER }));
  }

  private delay(timeInMs) {
    return new Promise((resolve,reject) => {
      setTimeout(() => resolve() , timeInMs);
    });
  }
}