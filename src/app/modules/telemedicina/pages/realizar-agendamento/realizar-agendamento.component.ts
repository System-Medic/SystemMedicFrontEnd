import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';

interface Agendamento {
  profissional: string;
  paciente: string;
  email: string;
  telefone: string;
  dataNascimento: string;
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
  styleUrls: ['./realizar-agendamento.component.css']
})
export class RealizarAgendamentoComponent implements OnInit {

  // Dados dos profissionais e pacientes (simulando os dados)
  profissionais = [
    { nome: 'Dr. João Silva' },
    { nome: 'Dra. Maria Souza' },
    { nome: 'Dr. Carlos Oliveira' }
  ];

  pacientes: any[] = [ // Adicione todos os pacientes que você deseja utilizar
    { id: 1, nome: 'João Silva', email: 'joao@email.com', telefone: '123456789', dataNascimento: '1985-02-20' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria@email.com', telefone: '987654321', dataNascimento: '1990-07-15' },
    { id: 3, nome: 'Carlos Souza', email: 'carlos@email.com', telefone: '564738291', dataNascimento: '1980-11-05' },
    // Outros pacientes...
  ];

  agendamento: Agendamento = {
    profissional: '',
    paciente: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    data: '',
    inicio: '',
    fim: '',
    diagnostico: '',
    observacao: '',
    notificar: false
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Pegue o id do paciente da URL
    const pacienteId = this.route.snapshot.paramMap.get('id');
    
    if (pacienteId) {
      // Encontre o paciente pelo id
      const paciente = this.pacientes.find(p => p.id === +pacienteId); // Use + para converter para número
      if (paciente) {
        // Preencha os campos do formulário com os dados do paciente
        this.agendamento.paciente = paciente.nome;
        this.agendamento.email = paciente.email;        // Preenche o email
        this.agendamento.telefone = paciente.telefone;  // Preenche o telefone
        this.agendamento.dataNascimento = paciente.dataNascimento; // Preenche a data de nascimento
        this.agendamento.diagnostico = ''; // Você pode inicializar com valores vazios ou definidos
        this.agendamento.observacao = '';
        this.agendamento.data = ''; // Defina a data de agendamento
        this.agendamento.inicio = ''; // Defina o horário de início
        this.agendamento.fim = ''; // Defina o horário de fim
        this.agendamento.notificar = false; // Inicialize o checkbox de notificação
      }
    }
  }

  onSubmit() {
    if (this.isValidTimeRange()) {
      console.log('Agendamento realizado:', this.agendamento);
      alert('Agendamento realizado com sucesso!');
    } else {
      alert('O horário de fim deve ser depois do horário de início.');
    }
  }

  isValidTimeRange(): boolean {
    if (!this.agendamento.inicio || !this.agendamento.fim) {
      return false;
    }
    const inicio = this.convertToDate(this.agendamento.inicio);
    const fim = this.convertToDate(this.agendamento.fim);
    return inicio < fim;
  }

  private convertToDate(time: string): Date {
    const [hours, minutes] = time.split(':').map(Number);
    return new Date(1970, 0, 1, hours, minutes);
  }
}
