import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MathRoundPipe } from 'src/app/pipes/math-round.pipe';
import { SpaceAddingPipe } from 'src/app/pipes/space-adding.pipe';
import { Offer } from 'src/app/services/api.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  standalone: true,
  imports: [CommonModule, MathRoundPipe, SpaceAddingPipe],
})
export class OffersComponent {
  @Input() offers!: Offer[];
  @Output() postApply = new EventEmitter<void>();
  image = '../../../../assets/images/surprise.png';
  constructor() {}

  onSelect(offer: any) {
    this.postApply.emit(offer);
  }
}
