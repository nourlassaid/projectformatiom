import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ParticipantsComponent } from './participants/participants.component';
import { FormationsComponent } from './formations/formations.component';
 import { RechercheComponent } from './recherche/recherche.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accueil', component: AccueilComponent },
   { path: 'participants', component: ParticipantsComponent },

  { path: 'formations', component: FormationsComponent }, 
  { path: 'recherche', component: RechercheComponent },
   { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
