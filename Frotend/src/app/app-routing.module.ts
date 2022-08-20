import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApplyComponent } from './apply/apply.component';
import { StatusComponent } from './status/status.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
{path:'header',component:HeaderComponent},
{path:'footer',component:FooterComponent},
{path:'appForm',component:ApplyComponent,pathMatch: 'full'},
{path :'appStatus', component:StatusComponent}];


@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
