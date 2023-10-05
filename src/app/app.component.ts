import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private title: Title,
    private meta: Meta,
    private apiService: ApiService
  ) {
    this.title.setTitle('Neo Study Project'); //for SEO
    this.meta.addTags([
      { name: 'keywords', content: 'angular' },
      { name: 'description', content: 'this is project for angular learning' },
    ]);
  }

  ngOnInit(): void {
    this.apiService
      .getAllApplications()
      .subscribe((data) => console.log('all aplications', data));
  }
}
