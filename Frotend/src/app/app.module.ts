import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { StatusComponent } from './status/status.component';
import { StudentService } from './student.service';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ApplyComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,

    HttpClientModule,
    ],

  providers: [StudentService,HttpClient,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
