import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  step: number = 1;

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }
}
