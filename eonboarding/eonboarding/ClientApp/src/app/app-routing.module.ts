import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { DocumentsComponent } from './documents/documents.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { GenerateDigitalSignatureComponent } from './generate-digital-signature/generate-digital-signature.component';
import { HomeComponent } from './home/home.component';
import { OnboardingDocumentsComponent } from './onboarding-documents/onboarding-documents.component';
import { TeamMembersComponent } from './team-members/team-members.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'trainings', component: TrainingsComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'onboarding-documents', component: OnboardingDocumentsComponent },
  { path: 'generate-digital-signature', component: GenerateDigitalSignatureComponent },
  { path: 'home', component: HomeComponent },
  { path:'team-members', component: TeamMembersComponent},
  // { path:'login', component: LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],





exports:
 [RouterModule]
})
export class AppRoutingModule { }