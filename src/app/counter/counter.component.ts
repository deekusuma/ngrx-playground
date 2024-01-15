import { Component, inject } from '@angular/core';
import { CounterStore } from './couter.store';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  providers: [CounterStore],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  readonly counterStore = inject(CounterStore);
}
