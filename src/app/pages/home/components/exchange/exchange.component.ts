import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
})
export class ExchangeComponent {
  date: Date = new Date();
  USD: string = '';
  CNY: string = '';
  CHF: string = '';
  JPY: string = '';
  TRY: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCurrency();
    setInterval(() => {
      this.getCurrency();
    }, 900000);
  }

  getCurrency() {
    this.apiService.getCurrency().subscribe((data: any) => {
      this.USD = data.Valute.USD.Value;
      this.CNY = data.Valute.CNY.Value;
      this.CHF = data.Valute.CHF.Value;
      this.JPY = data.Valute.JPY.Value;
      this.TRY = data.Valute.TRY.Value;
    });
  }
}
