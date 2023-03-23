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
  {path: 'perfilU', component:PerfilUsuarioComponent},
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
    QuestionSecretPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
