import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GenerateDigitalSignatureComponent } from './components/generate-digital-signature/generate-digital-signature.component';
import { HomeComponent } from './pages/home/home.component';
import { OnboardingDocumentsComponent } from './pages/onboarding-documents/onboarding-documents.component';
import { TeamMembersComponent } from './pages/team-members/team-members.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/account/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './shared/layout/layout.component';
import { ProfileManagementComponent } from './pages/profile-management/profile-management.component';
import { DocumentReviewComponent } from './components/document-review/document-review.component';
import { SelectedCandidatesComponent } from './selected-candidates/selected-candidates.component';
import { OfferLetterGenerationComponent } from './pages/offer-letter-generation/offer-letter-generation.component';
import { CompanyCultureComponent } from './components/company-culture/company-culture.component';
import { FacultyApprovalComponent } from './components/faculty-approval/faculty-approval.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileComponent,
    DocumentsComponent,
    TrainingsComponent,
    BenefitsComponent,
    AboutUsComponent,
    GenerateDigitalSignatureComponent,
    HomeComponent,
    OnboardingDocumentsComponent,
    TeamMembersComponent,
    NavbarComponent,
    LoginComponent,
    LayoutComponent,
    ProfileManagementComponent,
    DocumentReviewComponent,
    SelectedCandidatesComponent,
    OfferLetterGenerationComponent,
    CompanyCultureComponent,
    FacultyApprovalComponent,
    NotificationComponent,
    FooterComponent,
    DashboardComponent
    // LoginComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
