import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HeaderComponent {
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen
  }

  showMessage() {
    alert('Функционал не предусмотрен в макете!')
  }
}