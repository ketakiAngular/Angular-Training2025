import { Component,Input, Output, EventEmitter } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CounterComponent,CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() title = 'Functional Flower Arrangement';
  @Input() price = 99.99;
  @Input() likes = 10;
  @Input() imageURL = 'https://angular.io/assets/images/logos/angular/angular.svg';

  // @Output() likesChange = new EventEmitter<number>();

  incrementLikes() {
    this.likes++;
  }

  takeValuefromchild(event: any){
    this.likes = event;
  }
}
