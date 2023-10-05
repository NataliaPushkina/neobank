import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-user-form',
  templateUrl: './first-user-form.component.html',
  styleUrls: ['./first-user-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FirstUserFormComponent {
  @Output() postApplication = new EventEmitter<void>();
  amount: number = 150000;
  @ViewChild('refAmount', { read: ElementRef })
  refAmount!: ElementRef;
  terms: number[] = [6, 12, 18, 24, 30, 36, 42];
  termValue: string = '18';
  form!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z\-]{2,30}/),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z\-]{2,30}/),
      ]),
      middleName: new FormControl('', Validators.pattern(/^[A-Za-z\-]{2,30}/)),
      term: new FormControl('18', [Validators.required, Validators.min(6)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[\w\.]{2,50}@[\w\.]{2,20}/),
      ]),
      birthdate: new FormControl('', [Validators.required]),
      passportSeries: new FormControl('', [
        Validators.required,
        Validators.maxLength(4),
        Validators.pattern(/^[0-9]{4}/),
      ]),
      passportNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        Validators.pattern(/^[0-9]{6}/),
      ]),
    });
  }

  setValue(): void {
    this.refAmount.nativeElement.textContent = this.amount;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = { ...this.form.value, amount: this.amount };
      const edit = {
        ...formData,
        term: Number(formData.term),
        amount: this.amount,
        middleName: formData.middleName || null,
      };
      this.postApplication.emit(edit);
    } else console.log('form invalid');

    this.form.reset();
  }

  checkValidity(name: string): boolean | undefined {
    return this.form.get(name)?.invalid && this.form.get(name)?.touched;
  }

  checkAge(): boolean {
    if (this.form.get('birthdate')?.value != null) {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      let birthday = this.form.get('birthdate')?.value.split('-');
      const birthNow = new Date(today.getFullYear(), birthday[1], birthday[2]);
      let age = today.getFullYear() - birthday[0];
      if (today < birthNow) {
        age = age - 1;
      }
      return age > 17 ? false : true;
    } else return true;
  }
}
