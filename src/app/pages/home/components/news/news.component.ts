import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticleComponent } from '../news-article/news-article.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule, 
    NewsArticleComponent
  ],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input() news!: any[];
  @ViewChild('newsList', { read: ElementRef }) newsList!: ElementRef;
  position: number = 0;
  itemWidth: number = 320;

  handleLeft() {
    let width = this.newsList.nativeElement.clientWidth;
    this.position = this.position + width;
    this.position = Math.min(this.position, 0);
    this.newsList.nativeElement.style.marginLeft = this.position + `px`;
  }

  handleRight() {
    let width = this.newsList.nativeElement.clientWidth;
    let n = Math.floor(width / this.itemWidth);
    this.position = this.position - width;
    this.position = Math.max(this.position, -this.itemWidth * this.news.length);
    this.newsList.nativeElement.style.marginLeft = this.position + 'px';
    // this.newsList.nativeElement.style.transform = new CSSTranslate(CSS.px(width), CSS.px(0))
  }
}
