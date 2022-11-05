import { DistritoDialogoComponent } from './distrito-dialogo/distrito-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { DistritoService } from './../../../service/distrito.service';
import { Distrito } from './../../../model/distrito';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distrito-listar',
  templateUrl: './distrito-listar.component.html',
  styleUrls: ['./distrito-listar.component.css']
})
export class DistritoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Distrito> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'medida', 'accion1','accion2'];
  private idMayor: number = 0;
  constructor(private ds: DistritoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ds.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ds.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ds.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DistritoDialogoComponent);
  }

  eliminar(id: number) {
    this.ds.eliminar(id).subscribe(() => {
      this.ds.listar().subscribe(data => {
        this.ds.setLista(data);
      });
    });
  }
}

