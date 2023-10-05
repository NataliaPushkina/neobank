import { Component } from '@angular/core';
import { SignComponent } from './components/sign/sign.component';
import { InfoComponent } from 'src/app/components/info/info.component';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sign-page',
  templateUrl: 'sign-page.component.html',
  standalone: true,
  imports: [CommonModule, SignComponent, InfoComponent],
})
export class SignPageComponent {
  step: string = 'sign';
  applicationId!: number;

  constructor(private route: ActivatedRoute, private ApiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.applicationId = params['applicationId'];
    });
  }

  onSign() {
    this.ApiService.postSign(this.applicationId).subscribe(() => {
      console.log('Документ подписан');
    });
    this.step = 'message';
  }
}
