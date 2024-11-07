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
  pageSize: number = 10; // Número de pacientes por página
  currentPage: number = 1; // Página atual

  constructor() { }

  ngOnInit(): void {
    this.pacientes = [
      { id: 1, nome: 'João Silva', email: 'joao@email.com', telefone: '123456789', dataNascimento: '1985-02-20' },
      { id: 2, nome: 'Maria Oliveira', email: 'maria@email.com', telefone: '987654321', dataNascimento: '1990-07-15' },
      { id: 3, nome: 'Carlos Souza', email: 'carlos@email.com', telefone: '564738291', dataNascimento: '1980-11-05' },
      { id: 4, nome: 'Ana Santos', email: 'ana@email.com', telefone: '567890123', dataNascimento: '1995-03-12' },
      { id: 5, nome: 'Pedro Lima', email: 'pedro@email.com', telefone: '123123123', dataNascimento: '1982-06-25' },
      { id: 6, nome: 'Luciana Ferreira', email: 'luciana@email.com', telefone: '987987987', dataNascimento: '1992-01-30' },
      { id: 7, nome: 'Felipe Costa', email: 'felipe@email.com', telefone: '112233445', dataNascimento: '1990-09-14' },
      { id: 8, nome: 'Fernanda Pereira', email: 'fernanda@email.com', telefone: '998877665', dataNascimento: '1987-08-05' },
      { id: 9, nome: 'Ricardo Almeida', email: 'ricardo@email.com', telefone: '443322110', dataNascimento: '1983-04-19' },
      { id: 10, nome: 'Patricia Souza', email: 'patricia@email.com', telefone: '556677889', dataNascimento: '1994-12-22' },
      { id: 11, nome: 'Roberto Oliveira', email: 'roberto@email.com', telefone: '667788990', dataNascimento: '1988-02-10' },
      { id: 12, nome: 'Juliana Rocha', email: 'juliana@email.com', telefone: '223344556', dataNascimento: '1996-07-11' },
      { id: 13, nome: 'Marcos Silva', email: 'marcos@email.com', telefone: '889977665', dataNascimento: '1980-10-05' },
    ];
  }

  // Função para filtrar pacientes
  pacientesFiltrados() {
    return this.pacientes.filter(paciente => paciente.nome.toLowerCase().includes(this.filtroNome.toLowerCase()));
  }

  // Função para retornar os pacientes da página atual
  pacientesPaginaAtual() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.pacientesFiltrados().slice(startIndex, endIndex);
  }

  // Função para mover para a página anterior
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Função para mover para a próxima página
  nextPage() {
    if (this.currentPage * this.pageSize < this.pacientesFiltrados().length) {
      this.currentPage++;
    }
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
