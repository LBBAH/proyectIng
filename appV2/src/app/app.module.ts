import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvisoPrivacidadComponent } from './components/aviso-privacidad/aviso-privacidad.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContacUsComponent } from './components/contac-us/contac-us.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { DonacionComponent } from './components/donacion/donacion.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RecursoComponent } from './components/recurso/recurso.component';
import { PreguntasFComponent } from './components/preguntas-f/preguntas-f.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuestionSecretPasswordComponent } from './components/question-secret-password/question-secret-password.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

 
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';

import { NgxCaptchaModule } from 'ngx-captcha';
import { AlertNewQuestionSecretComponent } from './components/alert-new-question-secret/alert-new-question-secret.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes =[
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent },
  {path:'avisoPrivacidad', component:AvisoPrivacidadComponent },
  {path:'chat', component:ChatComponent },
  {path:'contactUs', component:ContacUsComponent },
  {path:'donacion', component:DonacionComponent },
  {path:'editUser', component:EditUserComponent },
  {path:'login', component:LoginComponent },
  {path:'quienesSomos', component:QuienesSomosComponent },
  {path:'recursos', component:RecursosComponent },
  {path:'singIn', component:RegistroComponent },
  {path:'recurso/:id',component:RecursoComponent },
  {path: 'preguntasf', component:PreguntasFComponent},
  {path: 'preguntaSecreta', component:QuestionSecretPasswordComponent},
  {path: 'perfilU/:id', component:PerfilUsuarioComponent},
];

@NgModule({
  declarations: [
    AppComponent,  
    HomeComponent,
    SearchComponent,
    FooterComponent,
    FiltroComponent,
    ChatComponent, 
    ContacUsComponent,
    DonacionComponent,
    RegistroComponent,
    AvisoPrivacidadComponent,
    LoginComponent,
    RecursosComponent,
    RecursoComponent,
    PreguntasFComponent,
    ScrollToTopComponent,
    MenuComponent,
    QuestionSecretPasswordComponent,
    PerfilUsuarioComponent,
    EditUserComponent,
    AlertNewQuestionSecretComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    CommonModule,
    RecaptchaV3Module,
    HttpClientModule,    
    
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: 'pon_la_key_de_google',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
