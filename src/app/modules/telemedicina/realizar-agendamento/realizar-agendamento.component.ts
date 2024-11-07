import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-realizar-agendamento',
  standalone: true,
  imports: [FormsModule, CommonModule, NgSelectModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, SidebarComponent],
  templateUrl: './realizar-agendamento.component.html',
  styleUrl: './realizar-agendamento.component.css'
})
export class RealizarAgendamentoComponent {
// Dados dos profissionais e pacientes (simulando os dados)
profissionais: string[] = ['Dr. João Silva', 'Dra. Maria Souza', 'Dr. Carlos Oliveira'];
pacientes: string[] = ['Ana Costa', 'Pedro Silva', 'Mariana Lima'];

// Dados do agendamento
agendamento = {
  profissional: '',
  paciente: '',
  data: '',
  inicio: '',
  fim: '',
  diagnostico: '',
  observacao: ''
};
showSidebar: any;

// Função para submeter o formulário
onSubmit() {
  console.log('Agendamento realizado:', this.agendamento);
  alert('Agendamento realizado com sucesso!');
  // Aqui você pode enviar os dados para o backend, ou manipular conforme necessário
}
}
