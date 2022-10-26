import { Router, ActivatedRoute, Params } from '@angular/router';
import { InteresService } from './../../../service/interes.service';
import { Interes } from './../../../model/interes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interes-creaedita',
  templateUrl: './interes-creaedita.component.html',
  styleUrls: ['./interes-creaedita.component.css']
})
export class InteresCreaeditaComponent implements OnInit {
  interes: Interes = new Interes();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private interesService: InteresService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.interes.medidaInteres.length > 0) {
      if (this.edicion){
        this.interesService.modificar(this.interes).subscribe(data => {
          this.interesService.listar().subscribe(data => {
            this.interesService.setLista(data);
          })
        })
      } else{
        this.interesService.insertar(this.interes).subscribe(data => {
          this.interesService.listar().subscribe(data => {
            this.interesService.setLista(data);
          })
        })
      }
      this.router.navigate(['intereses']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.interesService.listarId(this.id).subscribe(data => {
        this.interes = data;
      })
    }
  }
}

