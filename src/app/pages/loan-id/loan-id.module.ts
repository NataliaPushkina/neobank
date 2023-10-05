import { NgModule } from '@angular/core';
import { SecondUserFormComponent } from './components/second-user-form/second-user-form.component';
import { LoanIdPageComponent } from './loan-id-page.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { InfoComponent } from 'src/app/components/info/info.component';

@NgModule({
  declarations: [
    LoanIdPageComponent, 
    SecondUserFormComponent,
  ],
  imports: [
    SharedModule,
    InfoComponent
    // RouterModule.forChild([
    // ])
  ],
  exports: [
    SharedModule,
    RouterModule
  ]
})

export class LoanIdModule {}
