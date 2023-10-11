import { NgModule } from '@angular/core';
import { SecondUserFormComponent } from './components/second-user-form/second-user-form.component';
import { LoanIdPageComponent } from './loan-id-page.component';
import { SharedModule } from 'src/app/shared.module';
import { InfoComponent } from 'src/app/components/info/info.component';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { LoanIdRoutingModule } from './loan-id-routing.module';
import { DocumentPageComponent } from '../document/document-page.component';
import { SignPageComponent } from '../sign/sign-page.component';
import { CodePageComponent } from '../code/code-page.component';

@NgModule({
  declarations: [
    LoanIdPageComponent, 
    SecondUserFormComponent,
  ],
  imports: [
    SharedModule,
    InfoComponent,
    LoaderComponent,
    LoanIdRoutingModule,
    DocumentPageComponent,
    SignPageComponent,
    CodePageComponent,
  ],
  exports: [
    SharedModule,
    LoaderComponent,
    LoanIdRoutingModule
  ]
})

export class LoanIdModule {}
