import { NgModule } from '@angular/core';
import { SecondUserFormComponent } from './components/second-user-form/second-user-form.component';
import { InfoComponent } from './components/info/info.component';
import { LoanIdPageComponent } from './loan-id-page.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoanIdPageComponent, 
    SecondUserFormComponent, 
    InfoComponent
  ],
  imports: [
    SharedModule,
    // RouterModule.forChild([
    // ])
  ],
  exports: [
    SharedModule,
    RouterModule
  ]
})

export class LoanIdModule {}
