import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent {
  image = '../../../../assets/images/oops.png';
  constructor(protected router: Router) {}
  goBack() {
    this.router.navigate(['/']);
  }
}
