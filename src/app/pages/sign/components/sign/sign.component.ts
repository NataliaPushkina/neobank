import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  @Output() onSign = new EventEmitter<string>();
  isChecked: boolean = false;
  applicationId!: number;

  signDoc() {
    this.onSign.emit();
  }
}
