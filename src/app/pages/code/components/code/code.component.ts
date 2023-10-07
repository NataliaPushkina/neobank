import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent {
  @ViewChild('first', { static: true }) first!: ElementRef;
  @ViewChild('second', { static: true }) second!: ElementRef;
  @ViewChild('third', { static: true }) third!: ElementRef;
  @ViewChild('last', { static: true }) last!: ElementRef;
  @Output() sendCode = new EventEmitter<any>();
  @Input() mistake!: boolean;
  form!: FormGroup;
  applicationId!: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.first.nativeElement.focus();
    this.form = new FormGroup({
      first: new FormControl(null),
      second: new FormControl(null),
      third: new FormControl(null),
      last: new FormControl(null),
    });
    this.route.params.subscribe((params: Params) => {
      this.applicationId = params['applicationId'];
    });
  }

  toNext(n: number) {
    if (n === 2) {
      this.second.nativeElement.focus();
    } else if (n === 3) {
      this.third.nativeElement.focus();
    } else if (n === 4) {
      this.last.nativeElement.focus();
    } else {
      this.sendCode.emit(Object.values(this.form.value).join(''));
    }
  }
}
