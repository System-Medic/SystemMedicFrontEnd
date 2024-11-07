import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RealizarAgendamentoComponent } from './modules/telemedicina/realizar-agendamento/realizar-agendamento.component';
import { ConsultarAgendamentoComponent } from './modules/telemedicina/consultar-agendamento/consultar-agendamento.component';
import { CadastrarPacienteComponent } from './modules/paciente/pages/cadastrar-paciente/cadastrar-paciente.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'realizar-agendamento', component: RealizarAgendamentoComponent },
  { path: 'consultar-agendamento', component: ConsultarAgendamentoComponent },
  { path: 'cadastrar-paciente', component: CadastrarPacienteComponent },
];
