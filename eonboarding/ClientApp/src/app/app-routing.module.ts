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
import { SelectedCandidatesComponent } from './selected-candidates/selected-candidates.component';
import { OfferLetterGenerationComponent } from './pages/offer-letter-generation/offer-letter-generation.component';
import { CompanyCultureComponent } from './components/company-culture/company-culture.component';
import { FacultyApprovalComponent } from './components/faculty-approval/faculty-approval.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'documents', component: DocumentsComponent, canActivate: [AuthGuard] },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'trainings', component: TrainingsComponent, canActivate: [AuthGuard] },
  { path: 'benefits', component: BenefitsComponent, canActivate: [AuthGuard] },
  { path: 'onboarding-documents', component: OnboardingDocumentsComponent, canActivate: [AuthGuard] },
  { path: 'generate-digital-signature', component: GenerateDigitalSignatureComponent, canActivate: [AuthGuard] },
  { path: 'team-members', component: TeamMembersComponent },
  { path: 'profile-management', component: ProfileManagementComponent },
  { path: 'document-review', component: DocumentReviewComponent },
  { path: 'selected-candidates', component: SelectedCandidatesComponent, canActivate: [AuthGuard] },
  { path: 'offer-letter-generation', component: OfferLetterGenerationComponent, canActivate: [AuthGuard] },
  { path: 'company-culture', component: CompanyCultureComponent, canActivate: [AuthGuard] },
  { path: 'faculty-approval', component: FacultyApprovalComponent, canActivate: [AuthGuard] },
  { path: 'notification', component: NotificationComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  // { path:'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports:

    [RouterModule]
})
export class AppRoutingModule { }