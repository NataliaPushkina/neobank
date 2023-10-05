import { Component } from '@angular/core';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ScheduleComponent
  ]
})
export class DocumentPageComponent {
  step: string = 'document';
  id!: number;

  constructor() {}

  toStepMessage(): void {
    this.step = 'message';
  }
}
