import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { LoanPageComponent } from './pages/loan/loan-page.component';
import { NotReadyPageComponent } from './pages/not-ready-page/not-ready-page.component';
import { LoanIdPageComponent } from './pages/loan-id/loan-id-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'loan', component: LoanPageComponent },
  { path: 'loan/:applicationId', component: LoanIdPageComponent },
  { path: 'loan/:applicationId/document', component: NotReadyPageComponent },
  { path: 'loan/:applicationId/document/sign', component: NotReadyPageComponent },
  { path: 'loan/:applicationId/code', component: NotReadyPageComponent },
  { path: 'product', component: NotReadyPageComponent },
  { path: 'account', component: NotReadyPageComponent },
  { path: 'resources', component: NotReadyPageComponent },
  { path: '**', pathMatch: 'full', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
