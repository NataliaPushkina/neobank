import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PromoCardComponent {
  @Output() toApplication = new EventEmitter<void>();
  image = '../../../../assets/images/cardImage5';
  tooltip1 = false;
  tooltip2 = false;
  tooltip3 = false;

  onClick() {
    this.toApplication.emit();
  }
}
