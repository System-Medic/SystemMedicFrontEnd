import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";

interface Agendamento {
  profissional: string;
  paciente: string;
  data: string;
  inicio: string;
  fim: string;
  diagnostico: string;
  observacao: string;
  notificar: boolean;
}

@Component({
  selector: 'app-realizar-agendamento',
  standalone: true,
  imports: [FormsModule, CommonModule, SidebarComponent],
  templateUrl: './realizar-agendamento.component.html',
  styleUrl: './realizar-agendamento.component.css'
})

export class RealizarAgendamentoComponent {
  // Dados dos profissionais e pacientes (simulando os dados)
  profissionais = [
    { nome: 'Dr. João Silva' },
    { nome: 'Dra. Maria Souza' },
    { nome: 'Dr. Carlos Oliveira' }
  ];

  pacientes = [
    { nome: 'Ana Costa' },
    { nome: 'Pedro Silva' },
    { nome: 'Lucas Lima' }
  ];

  // Dados do agendamento com tipagem explícita
  agendamento: Agendamento = {
    profissional: '',
    paciente: '',
    data: '',
    inicio: '',
    fim: '',
    diagnostico: '',
    observacao: '',
    notificar: false
  };

  onSubmit() {
    if (this.isValidTimeRange()) {
      console.log('Agendamento realizado:', this.agendamento);
      alert('Agendamento realizado com sucesso!');
    } else {
      alert('O horário de fim deve ser depois do horário de início.');
    }
  }

  // Função para validar o horário de fim
  isValidTimeRange(): boolean {
    // Verifica se 'inicio' e 'fim' são válidos e não vazios
    if (!this.agendamento.inicio || !this.agendamento.fim) {
      return false;
    }
  
    // Converte as strings de horário para objetos Date (baseado em um horário fictício, 1970-01-01)
    const inicio = this.convertToDate(this.agendamento.inicio);
    const fim = this.convertToDate(this.agendamento.fim);
  
    // Retorna se o horário de início é antes do horário de fim
    return inicio < fim;
  }
  
  // Função auxiliar para converter o horário para um objeto Date
  private convertToDate(time: string): Date {
    const [hours, minutes] = time.split(':').map(Number);
    return new Date(1970, 0, 1, hours, minutes);  // Data fictícia (1º de janeiro de 1970)
  }
  
}
