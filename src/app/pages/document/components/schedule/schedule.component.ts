import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalComponent } from '../modal/modal.component';

export interface SheduleItem {
  number: number;
  date: string;
  totalPayment: number;
  interestPayment: number;
  debtPayment: number;
  remainingDebt: number;
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalComponent
  ],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  @Output() nextStep = new EventEmitter<number>();
  isChecked!: null;
  form!: FormGroup;
  modal: boolean = false;
  next: boolean = false;
  applicationId!: number;
  items: SheduleItem[] = [];
  isApproved!: boolean;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      isChecked: new FormControl(null),
    });
    this.route.params.subscribe((params: Params) => {
      console.log(params['applicationId'])
      this.applicationId = params['applicationId'];
    });
    this.apiService.getScheduler(this.applicationId).subscribe((data) => {
      this.items = data.credit?.paymentSchedule;
    });
  }

  onSubmit() {
    if (this.form.value.isChecked) {
      this.apiService.postDocument(this.applicationId).subscribe(() => {
        console.log('postDocument done');
        this.nextStep.emit();
      });
      this.form.reset();
    }
  }

  nextModal() {
    this.apiService.postDeny(this.applicationId).subscribe(() => {
      console.log('Ваша заявка отменена!');
    });
    this.next = true;
  }

  goHome() {
    this.router.navigate(['/']);
    this.next = false;
    window.scroll(0,0)
  }
}
