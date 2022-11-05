import { ComentariosDialogoComponent } from './comentarios-dialogo/comentarios-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { ComentariosService } from './../../../service/comentarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/model/comentarios';

@Component({
  selector: 'app-comentarios-listar',
  templateUrl: './comentarios-listar.component.html',
  styleUrls: ['./comentarios-listar.component.css']
})
export class ComentariosListarComponent implements OnInit {
  dataSource: MatTableDataSource<Comentarios> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'medida', 'accion1','accion2'];
  private idMayor: number = 0;
  constructor(private cs: ComentariosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cs.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.cs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.cs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ComentariosDialogoComponent);
  }

  eliminar(id: number) {
    this.cs.eliminar(id).subscribe(() => {
      this.cs.listar().subscribe(data => {
        this.cs.setLista(data);
      });
    });
  }
}


