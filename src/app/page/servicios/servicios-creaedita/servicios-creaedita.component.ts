import { ServiciosService } from './../../../service/servicios.service';
import { Servicios } from './../../../model/servicios';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-servicios-creaedita',
  templateUrl: './servicios-creaedita.component.html',
  styleUrls: ['./servicios-creaedita.component.css']
})
export class ServiciosCreaeditaComponent implements OnInit {
servicios:Servicios =new Servicios();
mensaje: String="";
id:number=0;
edicion: boolean = false;
  constructor(private serviciosService:ServiciosService,private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void{
    if(this.servicios.descServicios.length>0){
      if (this.edicion) {
      this.serviciosService.insertar(this.servicios).subscribe(data=>{
        this.serviciosService.listar().subscribe(data=>{
          this.serviciosService.setlista(data);
        })
      })
    } else {

      this.serviciosService.insertar(this.servicios).subscribe(data => {
        this.serviciosService.listar().subscribe(data => {
          this.serviciosService.setlista(data);
        })
      })
    }
    this.router.navigate(['servicios']);
  } else {
    this.mensaje = "Complete los valores requeridos";
  }
  }

  init() {
    if (this.edicion) {
      this.serviciosService.listarId(this.id).subscribe(data => {
        this.servicios = data;
      })
    }

  }
}
