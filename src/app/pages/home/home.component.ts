import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isPacienteOpen = false;
  isTelemedicinaOpen = false;

  togglePaciente() {
    this.isPacienteOpen = !this.isPacienteOpen;
  }

  toggleTelemedicina() {
    this.isTelemedicinaOpen = !this.isTelemedicinaOpen;
  }

}
