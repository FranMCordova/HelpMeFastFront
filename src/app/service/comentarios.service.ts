import { HttpClient } from '@angular/common/http';
import { Comentarios } from './../model/comentarios';
import { Subject, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  url: string = "http://localhost:5000/intereses"
  private listaCambio = new Subject<Comentarios[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Comentarios[]>(this.url);
  }
  insertar(comentarios: Comentarios) {
    return this.http.post(this.url, comentarios);
  }
  setLista(listaNueva: Comentarios[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(comentarios: Comentarios) {
    return this.http.put(this.url + "/" + comentarios.id, comentarios);
  }
  listarId(id: number) {
    return this.http.get<Comentarios>(`${this.url}/${id}`);
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
      return this.http.post<Comentarios[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}

