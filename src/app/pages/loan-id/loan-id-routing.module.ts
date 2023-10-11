import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoanIdPageComponent } from "./loan-id-page.component";
import { DocumentPageComponent } from "../document/document-page.component";
import { documentGuard } from "src/app/guards/document.guard";
import { SignPageComponent } from "../sign/sign-page.component";
import { CodePageComponent } from "../code/code-page.component";
import { statusGuard } from "src/app/guards/status.guard";

const routes: Routes = [
  {
    path: '', component: LoanIdPageComponent,
  //   children: [
  //     {
  //       path: 'document',
  //       component: DocumentPageComponent,
  //       canActivate: [documentGuard]
  //     },
  //     {
  //       path: 'document/sign',
  //       component: SignPageComponent,
  //       canActivate: [statusGuard]
  //     },
  //     {
  //       path: 'code',
  //       component: CodePageComponent,
  //       canActivate: [statusGuard]
  //     }
  //   ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanIdRoutingModule {}