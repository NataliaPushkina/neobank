import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  title: string = 'Deny application';
  @Input() subtitle: string = '';
  @Input() visible!: boolean;
  @Input() btnText: string = 'Cancel';
  @Output() close = new EventEmitter<void>();
  @Output() nextModal = new EventEmitter();
  @Output() goHome = new EventEmitter();
  @Output() closeNext = new EventEmitter();
}
