import { HttpClient } from '@angular/common/http';
import { Interes } from './../model/interes';
import { Subject, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteresService {
  url: string = "http://localhost:5000/intereses"
  private listaCambio = new Subject<Interes[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Interes[]>(this.url);
  }
  insertar(interes: Interes) {
    return this.http.post(this.url, interes);
  }
  setLista(listaNueva: Interes[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(interes: Interes) {
    return this.http.put(this.url + "/" + interes.id, interes);
  }
  listarId(id: number) {
    return this.http.get<Interes>(`${this.url}/${id}`);
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
      return this.http.post<Interes[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
