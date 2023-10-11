import { Component } from '@angular/core';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(
    // private router: Router,
    // private apiService: ApiService,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe((params: Params) => {
      console.log(params['applicationId'])
      // this.applicationId = params['applicationId'];
    });
  }

  toStepMessage(): void {
    this.step = 'message';
  }
}
