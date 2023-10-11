import { Component, ElementRef, ViewChild } from '@angular/core';
import { PromoCardComponent } from './components/promo-card/promo-card.component';
import { NavCardComponent } from './components/nav-card/nav-card.component';
import { StepsComponent } from './components/steps/steps.component';
import { FirstUserFormComponent } from './components/first-user-form/first-user-form.component';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './components/offers/offers.component';
import { ApiService } from 'src/app/services/api.service';
import { StepService } from 'src/app/services/step.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-loan-page',
  templateUrl: './loan-page.component.html',
  standalone: true,
  imports: [
    CommonModule,
    PromoCardComponent,
    NavCardComponent,
    StepsComponent,
    FirstUserFormComponent,
    OffersComponent,
    HttpClientModule,
    LoaderComponent
  ]
})
export class LoanPageComponent {

  @ViewChild('application', { static: true }) application!: ElementRef;

  offers: any = [];
  isLoading: boolean = false;

  constructor(
    protected stepService: StepService,
    private apiService: ApiService
  ) {}
  

  postApplication(data: any) {
    this.isLoading = true;
    this.apiService.postApplication(data).subscribe((res) => {
      this.offers = res;
      this.stepService.nextStep();
    },
      () => { },
    () => this.isLoading = false);
  }

  postApply(data: any) {
    this.isLoading = true;
    this.apiService.postApply(data).subscribe(() => {
      this.stepService.nextStep();
    },
    () => { },
    () => this.isLoading = false);
  }

  toApplication() {
    this.application.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
