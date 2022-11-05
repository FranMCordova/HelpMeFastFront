import { MatDialogRef } from '@angular/material/dialog';
import { DistritoService } from './../../../../service/distrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distrito-dialogo',
  templateUrl: './distrito-dialogo.component.html',
  styleUrls: ['./distrito-dialogo.component.css']
})
export class DistritoDialogoComponent implements OnInit {

  constructor(private interesService: DistritoService,
    private dialogRef: MatDialogRef<DistritoDialogoComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.interesService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
