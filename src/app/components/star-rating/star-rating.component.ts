import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent {
  @Input() rating: number;
  @Input() productName: string;
  @Output() ratingClicked: EventEmitter<StarRatingComponent> =
    new EventEmitter();
  starWidth: number;
  constructor() {
    this.rating = 0;
    this.starWidth = 0;
    this.productName = '';
  }

  ngOnChanges(): void {
    this.starWidth = (this.rating * 86) / 5;
  }

  ngOnInit(): void {
    this.starWidth = (this.rating * 86) / 5;
  }

  onClick() {
    console.log('click');

    this.ratingClicked.emit(this);
  }
}
