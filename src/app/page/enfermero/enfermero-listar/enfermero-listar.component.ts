import { EnfermeroDialogoComponent } from './enfermero-dialogo/enfermero-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { EnfermeroService } from './../../../service/enfermero.service';
import { Enfermero } from './../../../model/enfermero';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfermero-listar',
  templateUrl: './enfermero-listar.component.html',
  styleUrls: ['./enfermero-listar.component.css']
})
export class EnfermeroListarComponent implements OnInit {
  dataSource: MatTableDataSource<Enfermero> = new MatTableDataSource();
  displayedColumns:string[]=['id','name','dni', 'edad', 'numero', 'email', 'CIP', 'actualizar', 'eliminar'];
  private idMayor: number = 0;
  constructor(private eS: EnfermeroService, private dialog: MatDialog) { }

  ngOnInit(): void
  {
    this.eS.listar().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
    })
    this.eS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.eS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(EnfermeroDialogoComponent);
  }


  eliminar(id: number) {
    this.eS.eliminar(id).subscribe(() => {
      this.eS.listar().subscribe(data => {
        this.eS.setLista(data);
      });
    });

  }

}

