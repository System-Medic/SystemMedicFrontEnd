import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-consultar-paciente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SidebarComponent, FormsModule],
  templateUrl: './consultar-paciente.component.html',
  styleUrls: ['./consultar-paciente.component.css']
})
export class ConsultarPacienteComponent implements OnInit {

  pacientes: any[] = []; // Array de pacientes
  filtroNome: string = ''; // Valor do filtro de nome

  constructor() { }

  ngOnInit(): void {
    this.pacientes = [
      { id: 1, nome: 'João Silva', email: 'joao@email.com', telefone: '123456789', dataNascimento: '1985-02-20' },
      { id: 2, nome: 'Maria Oliveira', email: 'maria@email.com', telefone: '987654321', dataNascimento: '1990-07-15' },
      { id: 3, nome: 'Carlos Souza', email: 'carlos@email.com', telefone: '564738291', dataNascimento: '1980-11-05' },
      // Adicione mais pacientes conforme necessário
    ];
  }

  pacientesFiltrados() {
    return this.pacientes.filter(paciente => paciente.nome.toLowerCase().includes(this.filtroNome.toLowerCase()));
  }

  // Função para excluir o paciente
  excluirPaciente(paciente: any): void {
    const confirmDelete = confirm(`Você tem certeza que deseja excluir o paciente ${paciente.nome}?`);
    if (confirmDelete) {
      this.pacientes = this.pacientes.filter(p => p !== paciente);
      console.log('Paciente excluído:', paciente);
    }
  }
}
