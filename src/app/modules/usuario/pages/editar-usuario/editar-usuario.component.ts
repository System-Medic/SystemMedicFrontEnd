import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { SidebarComponent } from "../../../../shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SidebarComponent],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent implements OnInit {
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
