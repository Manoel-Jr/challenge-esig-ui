import { Tarefa } from './tarefa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private baseUrl = environment.apiUrl + '/tarefas';

  constructor(private http: HttpClient) { }

  get(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(tarefa: Tarefa): Observable<any> {
    return this.http.post(`${this.baseUrl}`, tarefa);
  }

  update(id: number, tarefa: Tarefa): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, tarefa);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTitulo(titulo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/buscar-por-titulo/${titulo}`);
  }

  done(id: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}/situacao`, { responseType: 'text' });
  }

}
