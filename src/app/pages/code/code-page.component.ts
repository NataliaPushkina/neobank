import { Component } from '@angular/core';
import { CodeComponent } from './components/code/code.component';
import { FinishComponent } from './components/finish/finish.component';
import { ApiService } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  standalone: true,
  imports: [CommonModule, CodeComponent, FinishComponent],
})
export class CodePageComponent {
  step: string = 'code';
  mistake: boolean = false;
  applicationId!: number;

  constructor(
    private apiService: ApiService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.applicationId = params['applicationId'];
    });
  }

  sendCode(codeStr: string) {
    this.apiService
      .getApplicationsById(this.applicationId)
      .pipe(map((application) => application.sesCode))
      .subscribe((code) => {
        console.log(code);
        if (code === codeStr) {
          this.apiService.postCode(code).subscribe(() => {
            this.step = 'message';
          });
        } else {
          this.mistake = true;
        }
      });
  }

  // sendCode(data: any) {
  //   this.statusService
  //     .checkStatus(this.applicationId)
  //     .subscribe((status) => {
  //       switch(status) {
  //         case Status.CREDIT_ISSUED:
  //           this.router.navigate(['/'])
  //       }
  //     });
  // }
}
