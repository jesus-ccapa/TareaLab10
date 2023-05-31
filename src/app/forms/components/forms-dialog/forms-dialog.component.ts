import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forms-dialog',
  templateUrl: './forms-dialog.component.html',
  styleUrls: ['./forms-dialog.component.css']
})
export class FormsDialogComponent implements OnInit {

  nome: string = ''
  email: string = ''
  senha: string = ''
  senhaConfirma: string = ''

  constructor(private dialogRef: MatDialogRef<FormsDialogComponent>) { }
  ngOnInit(): void {

  }

  fechar():void {
    this.dialogRef.close()
  }
}
