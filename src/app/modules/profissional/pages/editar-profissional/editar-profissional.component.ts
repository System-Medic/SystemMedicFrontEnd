import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { SidebarComponent } from "../../../../shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-editar-profissional',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SidebarComponent],
  templateUrl: './editar-profissional.component.html',
  styleUrls: ['./editar-profissional.component.css']
})
export class EditarProfissionalComponent implements OnInit {
  cadastroForm: FormGroup;
  profissionalId: string | null | undefined;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.cadastroForm = this.fb.group({
      nome: ['Marcia Almeida', Validators.required],
      email: ['marcia.almeida@gmail.com', [Validators.required, Validators.email]],
      telefone: ['11941237512', Validators.required],
      dataNascimento: ['1973-02-18', Validators.required]
    });
  }

  ngOnInit(): void {
    this.profissionalId = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      console.log('Formulário enviado:', this.cadastroForm.value);
      // Lógica para enviar os dados
    }
  }
}
