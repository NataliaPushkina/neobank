import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class InfoComponent {
  @Input() title: String = ''
  @Input() subtitle: String = ''
}
