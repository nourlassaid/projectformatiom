import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component'; // Importez le composant app-sidebar

import { AppComponent } from './app.component';
import { FormationsComponent } from './formations/formations.component';
import { FormationService } from './services/formation.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FooterComponent } from './footer/footer.component'; // Importez votre service de formation ici

@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    SidebarComponent,
    AuthentificationComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FormationService], // Fournir le service de formation ici
  bootstrap: [AppComponent]
})
export class AppModule { }
