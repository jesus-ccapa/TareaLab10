import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/classes/forms';

import { FormsDialogComponent } from '../forms-dialog/forms-dialog.component';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})

export class TemplateDrivenFormComponent implements OnInit {

  usuario: User = new User;
  constructor(
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.usuario = new User();

  }
  submit() {
    console.log(this.usuario);
  }

  showDialog(): void {
    let ref = this.dialog.open(FormsDialogComponent)

    ref.componentInstance.nome = this.usuario.nome
    ref.componentInstance.email = this.usuario.email
    ref.componentInstance.senha = this.usuario.senha
    ref.componentInstance.senhaConfirma = this.usuario.senhaConfirma

  }
}
