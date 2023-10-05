import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  form!: FormGroup;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.pattern(/^[\w\.]{2,50}@[\w\.]{2,20}/),
      ]),
    });
  }

  subscribe() {
    if (this.form.valid) {
      this.apiService.subscribeEmail(this.form.value).subscribe(() => {
        console.log('Подписка оформлена!');
      });
      this.form.reset();
    }
  }
}
