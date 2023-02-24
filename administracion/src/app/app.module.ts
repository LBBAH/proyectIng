import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { popper } from '@popperjs/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { RolesComponent } from './components/roles/roles.component';
import { PrivilegiosComponent } from './components/privilegios/privilegios.component';

const routes: Routes =[
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent }, 
  {path:'users', component:UsersComponent },
  {path:'user/:id/details', component:UserComponent },
  {path:'roles', component:RolesComponent},
  {path:'privilegios', component:PrivilegiosComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,    
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
