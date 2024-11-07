import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { SidebarComponent } from "../../../../shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-editar-paciente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SidebarComponent],
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {
  cadastroForm: FormGroup;
  pacienteId: string | null | undefined;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.cadastroForm = this.fb.group({
      nome: ['Roberto Santos', Validators.required],
      email: ['roberto.santos@gmail.com', [Validators.required, Validators.email]],
      telefone: ['1198744123', Validators.required],
      dataNascimento: ['1980-12-31', Validators.required]
    });
  }

  ngOnInit(): void {
    this.pacienteId = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      console.log('Formulário enviado:', this.cadastroForm.value);
      // Lógica para enviar os dados
    }
  }
}
