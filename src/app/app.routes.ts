import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RealizarAgendamentoComponent } from './modules/telemedicina/pages/realizar-agendamento/realizar-agendamento.component';
import { ConsultarAgendamentoComponent } from './modules/telemedicina/pages/consultar-agendamento/consultar-agendamento.component';
import { CadastrarPacienteComponent } from './modules/paciente/pages/cadastrar-paciente/cadastrar-paciente.component';
import { EditarPacienteComponent } from './modules/paciente/pages/editar-paciente/editar-paciente.component';
import { ConsultarPacienteComponent } from './modules/paciente/pages/consultar-paciente/consultar-paciente.component';
import { VisualizarProntuarioComponent } from './modules/paciente/pages/visualizar-prontuario/visualizar-prontuario.component';
import { CadastrarProfissionalComponent } from './modules/profissional/pages/cadastrar-profissional/cadastrar-profissional.component';
import { ConsultarProfissionalComponent } from './modules/profissional/pages/consultar-profissional/consultar-profissional.component';
import { EditarProfissionalComponent } from './modules/profissional/pages/editar-profissional/editar-profissional.component';
import { ConsultaOnlineComponent } from './modules/telemedicina/pages/consulta-online/consulta-online.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  //Agenda
  { path: 'realizar-agendamento/:id', component: RealizarAgendamentoComponent },

  //Paciente
  { path: 'consultar-agendamento', component: ConsultarAgendamentoComponent },
  { path: 'cadastrar-paciente', component: CadastrarPacienteComponent },
  { path: 'editar-paciente/:id', component: EditarPacienteComponent },
  { path: 'consultar-paciente', component: ConsultarPacienteComponent },
  { path: 'visualizar-prontuario/:id', component: VisualizarProntuarioComponent },

  //Profissional
  { path: 'cadastrar-profissional', component: CadastrarProfissionalComponent },
  { path: 'editar-profissional/:id', component: EditarProfissionalComponent },
  { path: 'consultar-profissional', component: ConsultarProfissionalComponent },

  //Telemedicina
  { path: 'consulta-online', component: ConsultaOnlineComponent },
  
];
