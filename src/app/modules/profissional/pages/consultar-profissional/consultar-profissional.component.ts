import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-consultar-profissional',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SidebarComponent, FormsModule],
  templateUrl: './consultar-profissional.component.html',
  styleUrls: ['./consultar-profissional.component.css']
})
export class ConsultarProfissionalComponent implements OnInit {

  profissionais: any[] = []; // Array de profissionais
  filtroNome: string = ''; // Valor do filtro de nome
  pageSize: number = 10; // Número de profissionais por página
  currentPage: number = 1; // Página atual

  constructor() { }

  ngOnInit(): void {
    this.profissionais = [
      { id: 1, nome: 'Roberto Oliveira', email: 'roberto@email.com', telefone: '667788990', dataNascimento: '1988-02-10' },
      { id: 2, nome: 'Juliana Rocha', email: 'juliana@email.com', telefone: '223344556', dataNascimento: '1996-07-11' },
      { id: 3, nome: 'Marcos Silva', email: 'marcos@email.com', telefone: '889977665', dataNascimento: '1980-10-05' },
    ];
  }

  // Função para filtrar profissionais
  profissionaisFiltrados() {
    return this.profissionais.filter(profissional => profissional.nome.toLowerCase().includes(this.filtroNome.toLowerCase()));
  }

  // Função para retornar os profissionais da página atual
  profissionaisPaginaAtual() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.profissionaisFiltrados().slice(startIndex, endIndex);
  }

  // Função para mover para a página anterior
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Função para mover para a próxima página
  nextPage() {
    if (this.currentPage * this.pageSize < this.profissionaisFiltrados().length) {
      this.currentPage++;
    }
  }

  // Função para excluir o profissional
  excluirprofissional(profissional: any): void {
    const confirmDelete = confirm(`Você tem certeza que deseja excluir o profissional ${profissional.nome}?`);
    if (confirmDelete) {
      this.profissionais = this.profissionais.filter(p => p !== profissional);
      console.log('profissional excluído:', profissional);
    }
  }
}
