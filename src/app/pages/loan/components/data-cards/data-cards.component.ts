import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DataCardsComponent {
  @Input() list: any;
}
