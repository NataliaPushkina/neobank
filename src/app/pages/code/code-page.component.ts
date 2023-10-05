import { Component } from '@angular/core';
import { CodeComponent } from './components/code/code.component';
import { FinishComponent } from './components/finish/finish.component';
import { ApiService } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  standalone: true,
  imports: [CommonModule, CodeComponent, FinishComponent],
})
export class CodePageComponent {
  step: string = 'code';
  mistake: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  sendCode(data: any) {
    const myAp = data.applicationId;
    this.apiService.getAllApplications().subscribe((res) => {
      let result = res.filter((v: { id: any }) => v.id == myAp);
      if (result[0].sesCode == Object.values(data.code).join('')) {
        this.apiService.postCode(data).subscribe(() => {
          console.log('Код отправлен');
          this.step = 'message';
        });
      } else {
        console.log('Неправильный пароль');
        this.mistake = true;
      }
    });
  }
}
