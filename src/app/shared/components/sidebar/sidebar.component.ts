import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isPacienteOpen = false;
  isProfissionalOpen = false;

  togglePaciente() {
    this.isPacienteOpen = !this.isPacienteOpen;
  }

  toggleProfissional() {
    this.isProfissionalOpen = !this.isProfissionalOpen;
  }

}
