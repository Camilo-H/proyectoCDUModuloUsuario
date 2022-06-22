import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escenario } from './escenario';

@Injectable({
  providedIn: 'root'
})
export class EscenarioService {

  private url: string = "http://169.254.62.15:2022/api/categorias";
  constructor(private http: HttpClient) { }

  //obtener las categorías de los escenaios.
  getAll(): Observable<Escenario[]> {    
    return this.http.get<Escenario[]>(this.url)
  }
}
