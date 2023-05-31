import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { FormsDialogComponent } from '../forms-dialog/forms-dialog.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  rForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    senhaConfirma: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(30)])
  })

  constructor(private dialog: MatDialog) { }

  submit(): void {

  }

  mostrarDialog(): void {
    let ref = this.dialog.open(FormsDialogComponent)


    ref.componentInstance.nome = this.rForm.controls['nome'].value
    ref.componentInstance.email = this.rForm.controls['email'].value
    ref.componentInstance.senha = this.rForm.controls['senha'].value
    ref.componentInstance.senhaConfirma = this.rForm.controls['senhaConfirma'].value
  }
}
