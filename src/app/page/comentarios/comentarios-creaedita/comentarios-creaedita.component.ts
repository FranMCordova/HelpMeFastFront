import { Router, ActivatedRoute, Params } from '@angular/router';
import { ComentariosService } from './../../../service/comentarios.service';
import { Comentarios } from './../../../model/comentarios';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios-creaedita',
  templateUrl: './comentarios-creaedita.component.html',
  styleUrls: ['./comentarios-creaedita.component.css']
})
export class ComentariosCreaeditaComponent implements OnInit {

  comentarios: Comentarios = new Comentarios();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private comentariosService: ComentariosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.comentarios.comentarios.length > 0) {
      if (this.edicion){
        this.comentariosService.modificar(this.comentarios).subscribe(data => {
          this.comentariosService.listar().subscribe(data => {
            this.comentariosService.setLista(data);
          })
        })
      } else{
        this.comentariosService.insertar(this.comentarios).subscribe(data => {
          this.comentariosService.listar().subscribe(data => {
            this.comentariosService.setLista(data);
          })
        })
      }
      this.router.navigate(['comentarios']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.comentariosService.listarId(this.id).subscribe(data => {
        this.comentarios = data;
      })
    }
  }
}
