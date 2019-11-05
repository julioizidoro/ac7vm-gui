import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bens } from './model/bens';
import { environment as env } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BensService {

  private bens: Bens;

  constructor( private httpCliente: HttpClient ) { }

  setBens( bens: Bens) {
    this.bens = bens;
  }

  getBens() {
    return this.bens;
  }

  listar(): Observable<Bens> {
    return this.httpCliente.get<Bens>(env.baseApiUrl + 'bens');
  }

  pesquisarDescricao(descricao: string): Observable<Bens> {
    return this.httpCliente.get<Bens>(env.baseApiUrl + 'bens/descricao/' + descricao);
  }

  pesquisarPlanoContas(idplanoconta: number): Observable<Bens> {
    return this.httpCliente.get<Bens>(env.baseApiUrl + 'bens/planocontas/' + idplanoconta);
  }

  getId(id: number): Observable<Bens> {
    return this.httpCliente.get<Bens>(env.baseApiUrl + 'bens/id/' + id);
  }

  salvar(bem: Bens): Observable<any> {
    return this.httpCliente.post<any>(env.baseApiUrl + 'bens/salvar', bem);
  }
}
