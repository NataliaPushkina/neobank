import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-ready-page',
  templateUrl: './not-ready-page.component.html',
  styleUrls: ['./not-ready-page.component.scss'],
  standalone: true,
  imports: [],
})
export class NotReadyPageComponent {
  image: string = '../../../assets/images/oops.png'

  constructor(private location: Location) {}
  
  goBack() {
    this.location.back();
  }

}