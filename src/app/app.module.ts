import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './sections/home/home.component';
import { WorksListComponent } from './sections/works/works-list/works-list.component';
import { WorksSingleComponent } from './sections/works/works-single/works-single.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorksViewdetailsComponent } from './sections/works/works-viewdetails/works-viewdetails.component';
import { ParticlesModule } from 'angular-particle';

const appRoutes: Routes = [
  { path : 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'works/works-list', component: WorksListComponent},
  { path: 'works/details', component: WorksViewdetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorksListComponent,
    WorksSingleComponent,
    ContactComponent,
    WorksViewdetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
