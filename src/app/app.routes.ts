import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RealizarAgendamentoComponent } from './modules/telemedicina/realizar-agendamento/realizar-agendamento.component';
import { ConsultarAgendamentoComponent } from './modules/telemedicina/consultar-agendamento/consultar-agendamento.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'realizar-agendamento', component: RealizarAgendamentoComponent },
  { path: 'consultar-agendamento', component: ConsultarAgendamentoComponent },
];
