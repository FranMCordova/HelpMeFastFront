import { MatDialogRef } from '@angular/material/dialog';
import { ComentariosService } from './../../../../service/comentarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios-dialogo',
  templateUrl: './comentarios-dialogo.component.html',
  styleUrls: ['./comentarios-dialogo.component.css']
})
export class ComentariosDialogoComponent implements OnInit {

  constructor(private comentariosService: ComentariosService,
    private dialogRef: MatDialogRef<ComentariosDialogoComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.comentariosService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
