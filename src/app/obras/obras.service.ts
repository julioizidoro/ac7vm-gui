import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Obra } from './model/obra';


@Injectable()
export class ObrasService {

  constructor( private httpCliente: HttpClient) { }

  listar(): Observable<Obra> {
      return this.httpCliente.get<Obra>(env.baseApiUrl + 'obras');
  }

  pesquisarNome(nome: string): Observable<Obra> {
    return this.httpCliente.get<Obra>(env.baseApiUrl + 'obras/nome/' + nome);
  }

  pesquisarId(id: number): Observable<Obra> {
    return this.httpCliente.get<Obra>(env.baseApiUrl + 'obras/id/' + id);
  }

  salvar(obra: Obra):  Observable<Obra> {
    return this.httpCliente.post<any>(env.baseApiUrl + 'obras/salvar', obra);
  }
}

