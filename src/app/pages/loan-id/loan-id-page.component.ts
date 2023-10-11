import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { map, tap } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-loan-id-page',
  templateUrl: './loan-id-page.component.html',
  styleUrls: ['./loan-id-page.component.scss'],
})
export class LoanIdPageComponent {
  info: boolean = false;
  isLoading: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private documentService: DocumentService) { }

  sendForm(data: any) {
    this.isLoading = true;
    this.apiService.putApplicationById(data).subscribe(() => {
      console.log('Форма отправлена, ждем результат');
    },
      () => { },
      () => this.isLoading = false);

    setTimeout(() => {
      this.isLoading = true;
      this.apiService
        .getApplicationsById(data.applicationId)
        .pipe(
          tap(console.log),
          map((application) => application.status)
        )
        .subscribe((status) => {
          if (status) {
            this.isLoading = false;
          }
          if (status === 'CC_DENIED') {
            this.router.navigate(['/']);
          } else this.router.navigate([`/loan/${data.applicationId}/document`]);
        });
    }, 10000);
  }
}
