import { Grupocontas } from './model/grupocontas';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GrupoContasService {

  constructor( private httpCliente: HttpClient) { }

  listar(): Observable<Grupocontas> {
    return this.httpCliente.get<Grupocontas>(env.baseApiUrl + 'grupoplanocontas');
  }

  pesquisarDescricao(descricao: string): Observable<Grupocontas> {
    return this.httpCliente.get<Grupocontas>(env.baseApiUrl + 'grupoplanocontas/descricao/' + descricao);
  }

  pesquisarConta(conta: string): Observable<Grupocontas> {
    return this.httpCliente.get<Grupocontas>(env.baseApiUrl + 'grupoplanocontas/conta/' + conta);
  }

  salvar(grupoConta: Grupocontas): Observable<any> {
      return this.httpCliente.post<any>(env.baseApiUrl + 'grupoplanocontas/salvar', grupoConta);
  }

  pesquisarId(id: number): Observable<Grupocontas> {
    return this.httpCliente.get<Grupocontas>(env.baseApiUrl + 'grupoplanocontas/id/' + id);
  }

}
