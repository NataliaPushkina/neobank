import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { LoanPageComponent } from './pages/loan/loan-page.component';
import { NotReadyPageComponent } from './pages/not-ready-page/not-ready-page.component';
import { LoanIdPageComponent } from './pages/loan-id/loan-id-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DocumentPageComponent } from './pages/document/document-page.component';
import { SignPageComponent } from './pages/sign/sign-page.component';
import { CodePageComponent } from './pages/code/code-page.component';
import { statusGuard } from './guards/status.guard';
import { documentGuard } from './guards/document.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  {
    path: 'loan', loadComponent: () => import('./pages/loan/loan-page.component').then(mod => mod.LoanPageComponent)  },
  {
    path: 'loan/:applicationId',
    loadChildren: () => import('./pages/loan-id/loan-id.module').then(mod => mod.LoanIdModule)
  },
  {
    path: 'loan/:applicationId/document', loadComponent: () => import('./pages/document/document-page.component').then(mod => mod.DocumentPageComponent),
    canActivate: [documentGuard],
  },
  { path: 'loan/:applicationId/document/sign', loadComponent: () => import('./pages/sign/sign-page.component').then(mod => mod.SignPageComponent), canActivate: [statusGuard] },
  { path: 'loan/:applicationId/code', loadComponent: () => import('./pages/code/code-page.component').then(mod => mod.CodePageComponent), canActivate: [statusGuard] },
  { path: 'product', component: NotReadyPageComponent },
  { path: 'account', component: NotReadyPageComponent },
  { path: 'resources', component: NotReadyPageComponent },
  { path: '**', pathMatch: 'full', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
