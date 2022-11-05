import { Router, ActivatedRoute, Params } from '@angular/router';
import { DistritoService } from './../../../service/distrito.service';
import { Distrito } from './../../../model/distrito';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distrito-creaedita',
  templateUrl: './distrito-creaedita.component.html',
  styleUrls: ['./distrito-creaedita.component.css']
})
export class DistritoCreaeditaComponent implements OnInit {

  distrito: Distrito = new Distrito();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private distritoService: DistritoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.distrito.distrito.length > 0) {
      if (this.edicion){
        this.distritoService.modificar(this.distrito).subscribe(data => {
          this.distritoService.listar().subscribe(data => {
            this.distritoService.setLista(data);
          })
        })
      } else{
        this.distritoService.insertar(this.distrito).subscribe(data => {
          this.distritoService.listar().subscribe(data => {
            this.distritoService.setLista(data);
          })
        })
      }
      this.router.navigate(['distrito']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.distritoService.listarId(this.id).subscribe(data => {
        this.distrito = data;
      })
    }
  }
}
