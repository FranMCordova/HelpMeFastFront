import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnuncioService } from './../../../service/anuncio.service';
import { Anuncio } from './../../../model/anuncio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio-creaedita',
  templateUrl: './anuncio-creaedita.component.html',
  styleUrls: ['./anuncio-creaedita.component.css']
})
export class AnuncioCreaeditaComponent implements OnInit {
 anuncio:Anuncio= new Anuncio();
 mensaje:string="";
 edicion: boolean= false;
 id: number=0;

  constructor(private anuncioService: AnuncioService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id=data['id'];
      this.edicion=data['id'] !=  null;
      this.init();
    })

  }
  aceptar(): void {
    if (this.anuncio.preServicio> 0 && this.anuncio.fechaPublicacion.length > 0) {
      if(this.edicion){
        this.anuncioService.modificar(this.anuncio).subscribe(data =>{
          this.anuncioService.listar().subscribe(data=>{
            this.anuncioService.setLista(data);
          })
        })
      } else{
        this.anuncioService.insertar(this.anuncio).subscribe(data=>{
          this.anuncioService.listar().subscribe(data=>{
            this.anuncioService.setLista(data);
          })
        })
      }
      this.router.navigate(['anuncios']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init(){
    if(this.edicion){
      this.anuncioService.listarId(this.id).subscribe(data=>{
        this.anuncio=data;
      })
    }
  }

}

