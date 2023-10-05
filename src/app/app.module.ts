import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoanIdModule } from './pages/loan-id/loan-id.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    LoanIdModule,
    SharedModule
  ],
})
export class AppModule {}
