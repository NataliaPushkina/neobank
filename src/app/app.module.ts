import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoanIdModule } from './pages/loan-id/loan-id.module';
import { SharedModule } from './shared.module';
import { ApiService } from './services/api.service';
// import { environment } from 'src/environments/environment.prod';
import { BASE_URL_TOKEN, baseUrl } from './config';
import { CustomInterceptor } from './custom.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    },
    ApiService,
    {
      provide: BASE_URL_TOKEN,
      useValue: baseUrl,
      // multi: true // чтобы создать массив урлов, не забыть добавить индекс к урлу в сервисе http
  }],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    LoanIdModule,
    SharedModule,
  ],
})
export class AppModule {}
