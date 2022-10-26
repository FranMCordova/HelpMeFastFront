import { HttpClient } from '@angular/common/http';
import { Enfermero } from './../model/enfermero';
import { Subject, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnfermeroService {
url:string="http://localhost:5000/enfermeros";
private confirmaEliminacion = new Subject<Boolean>()
private listaCambio = new Subject<Enfermero[]>()

  constructor(private http:HttpClient) { }

  listar()
  {
      return this.http.get<any>(this.url);
  }
  insertar(enfermero: Enfermero) {
    return this.http.post(this.url, enfermero);
  }
  setLista(listaNueva: Enfermero[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(enfermero: Enfermero) {
    return this.http.put(this.url + "/" + enfermero.id, enfermero);
  }
  listarId(id: number) {
    return this.http.get<Enfermero>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Enfermero[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}

