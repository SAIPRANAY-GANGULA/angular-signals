import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, map, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs-vs-signals',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <hr />
    <h2 class="title">Rxjs vs Signals on Synchronous Events</h2>

    <h4>Rxjs Subject:{{ counter$ | async }}</h4>
    <h4>Signal:{{ counterSignal() }}</h4>

    <button (click)="increase()">Increase +</button>
    <button (click)="decrease()">Decrease -</button>
  `,
  styles: [
    `
      .title {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class RxjsVsSignalsComponent implements OnInit {
  private state$ = new BehaviorSubject<{ counter: number }>({ counter: 0 });
  private stateSignal = signal<{ counter: number }>({ counter: 0 });

  counter$ = this.state$.pipe(map((it) => it.counter));
  counterSignal = computed(() => this.stateSignal().counter);

  ngOnInit(): void {
    //TODO: Unsubscribe
    this.counter$
      .pipe(tap((data) => console.log(`Subject:${data}`))) // side effects
      .subscribe();

    effect(() => console.log(`Signal:${this.counterSignal()}`)); // side effects
  }

  increase(): void {
    this.state$.next({
      counter: this.state$.value.counter + 1,
    });

    this.stateSignal.update((v) => {
      return {
        counter: v.counter + 1,
      };
    });
    // this.stateSignal.mutate((v) => (v.counter = v.counter + 1));
  }

  decrease(): void {
    this.state$.next({
      counter: this.state$.value.counter - 1,
    });

    this.stateSignal.set({
      counter: this.stateSignal().counter - 1,
    });
  }
}
