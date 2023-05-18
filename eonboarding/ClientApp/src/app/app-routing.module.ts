import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/account/profile/profile.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { GenerateDigitalSignatureComponent } from './components/generate-digital-signature/generate-digital-signature.component';
import { HomeComponent } from './pages/home/home.component';
import { OnboardingDocumentsComponent } from './pages/onboarding-documents/onboarding-documents.component';
import { TeamMembersComponent } from './pages/team-members/team-members.component';
import { LoginComponent } from './components/account/login/login.component';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './shared/layout/layout.component';
import { ProfileManagementComponent } from './pages/profile-management/profile-management.component';
import { DocumentReviewComponent } from './components/document-review/document-review.component';
import { SelectedCandidatesComponent } from './pages/selected-candidates/selected-candidates.component';
import { OfferLetterGenerationComponent } from './pages/offer-letter-generation/offer-letter-generation.component';
import { CompanyCultureComponent } from './components/company-culture/company-culture.component';
import { FacultyApprovalComponent } from './components/faculty-approval/faculty-approval.component';
import { NotificationComponent } from './shared/notification/notification.component';

// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: '', component: LayoutComponent, canActivate: [AuthGuard] ,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    { path: 'profile', component: ProfileComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'trainings', component: TrainingsComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'onboarding-documents', component: OnboardingDocumentsComponent },
  { path: 'generate-digital-signature', component: GenerateDigitalSignatureComponent },
  { path:'team-members', component: TeamMembersComponent},
  { path:'profile-management', component: ProfileManagementComponent},
  { path:'document-review', component: DocumentReviewComponent},
  { path:'selected-candidates', component: SelectedCandidatesComponent},
  { path:'offer-letter-generation', component: OfferLetterGenerationComponent},
  {path: 'company-culture', component: CompanyCultureComponent},
  { path:'faculty-approval', component: FacultyApprovalComponent},
  { path:'notification', component: NotificationComponent},
],
  },
  // { path:'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports:

 [RouterModule]
})
export class AppRoutingModule { }