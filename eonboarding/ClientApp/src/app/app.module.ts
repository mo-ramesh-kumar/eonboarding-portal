import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { DocumentsComponent } from './documents/documents.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GenerateDigitalSignatureComponent } from './generate-digital-signature/generate-digital-signature.component';
import { HomeComponent } from './home/home.component';
import { OnboardingDocumentsComponent } from './onboarding-documents/onboarding-documents.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { DocumentReviewComponent } from './document-review/document-review.component';
import { SelectedCandidatesComponent } from './selected-candidates/selected-candidates.component';
import { OfferLetterGenerationComponent } from './offer-letter-generation/offer-letter-generation.component';
import { CompanyCultureComponent } from './company-culture/company-culture.component';
import { FacultyApprovalComponent } from './faculty-approval/faculty-approval.component';
import { NotificationComponent } from './notification/notification.component';





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
