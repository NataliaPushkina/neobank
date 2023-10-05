import { Component, OnInit } from '@angular/core';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { PromoComponent } from './components/promo/promo.component';
import { FeaturesComponent } from './components/features/features.component';
import { MapComponent } from './components/map/map.component';
import { NewsComponent } from './components/news/news.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [
    PromoComponent,
    FeaturesComponent,
    ExchangeComponent,
    MapComponent,
    NewsComponent,
    MenuComponent,
  ],
})
export class HomePageComponent implements OnInit {
  news!: any[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data) => {
      this.news = data.results;
    });
  }
}
