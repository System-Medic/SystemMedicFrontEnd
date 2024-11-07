import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isPacienteOpen = false;
  isTelemedicinaOpen = false;

  togglePaciente() {
    this.isPacienteOpen = !this.isPacienteOpen;
  }

  toggleTelemedicina() {
    this.isTelemedicinaOpen = !this.isTelemedicinaOpen;
  }

}
