import { Component,  EventEmitter,  Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
@Input() count!: number;
@Input() incrementFn!: () => void;

@Output() likesChange = new EventEmitter<number>();

onIncrement() {
   this.likesChange.emit(this.count++);
}
}
