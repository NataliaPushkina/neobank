import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent {
  src1="../../../../assets/images/cardImage1.png"
  src2="../../../../assets/images/cardImage2.png"
  src3="../../../../assets/images/cardImage3.png"
  src4="../../../../assets/images/cardImage4.png"
}
