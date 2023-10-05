import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-second-user-form',
  templateUrl: './second-user-form.component.html',
  styleUrls: ['./second-user-form.component.scss'],
})
export class SecondUserFormComponent {
  @Output() sendForm = new EventEmitter<void>();
  form!: FormGroup;
  genders: string[] = ['MALE', 'FEMALE', 'NON_BINARY'];
  statuses: string[] = ['MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER'];
  dependentAmount: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  employmentStatuses: string[] = [
    'UNEMPLOYED',
    'SELF_EMPLOYED',
    'EMPLOYED',
    'BUSINESS_OWNER',
  ];
  employerINN: string = '';
  positions: string[] = ['WORKER', 'MID_MANAGER', 'TOP_MANAGER', 'OWNER'];
  applicationId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      gender: new FormControl('', Validators.required),
      maritalStatus: new FormControl('', Validators.required),
      dependentAmount: new FormControl('', Validators.required),
      passportIssueDate: new FormControl('', Validators.required),
      passportIssueBranch: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{6}/),
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
      employment: new FormGroup({
        employmentStatus: new FormControl('', Validators.required),
        employerINN: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[0-9]{12}/),
          Validators.minLength(12),
          Validators.maxLength(12),
        ]),
        salary: new FormControl('', Validators.required),
        position: new FormControl('', Validators.required),
        workExperienceTotal: new FormControl('', Validators.required),
        workExperienceCurrent: new FormControl('', Validators.required),
      }),
    });
    this.route.params.subscribe((params: Params) => {
      console.log(params['applicationId'])
      this.applicationId = params['applicationId'];
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = {
        ...this.form.value,
        dependentAmount: Number(this.form.value.dependentAmount),
        passportIssueBranch: `${this.form.value.passportIssueBranch.slice(
          0,
          3
        )}-${this.form.value.passportIssueBranch.slice(3)}`,
        employment: {
          ...this.form.value.employment,
          salary: Number(this.form.value.employment.salary),
          workExperienceTotal: Number(
            this.form.value.employment.workExperienceTotal
          ),
          workExperienceCurrent: Number(
            this.form.value.employment.workExperienceCurrent
          ),
        },
        applicationId: this.applicationId,
      };
      this.sendForm.emit(formData);
      this.form.reset();
    } else console.log('form invalid');
  }

  checkValidity(name: string) {
    return this.form.get(name)?.invalid && this.form.get(name)?.touched;
  }
}
