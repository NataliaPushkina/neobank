import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-loan-id-page',
  templateUrl: './loan-id-page.component.html',
  styleUrls: ['./loan-id-page.component.scss'],
})
export class LoanIdPageComponent {
  info: boolean = false;
  isApproved: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  sendForm(data: any) {
    this.apiService.putApplicationById(data).subscribe(() => {
      console.log('Форма отправлена, ждем результат');
    });

    setTimeout(() => {
      this.apiService
        .getApplicationsById(data.applicationId)
        .pipe(map((application) => application.status))
        .subscribe((status) => {
          console.log(status);
          if (status === 'CC_DENIED') {
            this.router.navigate(['/']);
          } else this.router.navigate([`/loan/${data.applicationId}/document`]);
        });
    }, 10000);
  }
}
