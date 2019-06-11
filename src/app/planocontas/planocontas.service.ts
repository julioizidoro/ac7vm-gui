import { Planocontas } from './model/planoconta';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PlanoContasService {

  constructor( private httpCliente: HttpClient) { }

  listar(): Observable<Planocontas> {
    return this.httpCliente.get<Planocontas>(env.baseApiUrl + 'planocontas');
  }

  pesquisarBens(): Observable<Planocontas> {
    return this.httpCliente.get<Planocontas>(env.baseApiUrl + 'planocontas/bens');
  }

  pesquisarDescricao(descricao: string): Observable<Planocontas> {
    return this.httpCliente.get<Planocontas>(env.baseApiUrl + 'planocontas/descricao/' + descricao);
  }

  pesquisarConta(conta: string): Observable<Planocontas> {
    return this.httpCliente.get<Planocontas>(env.baseApiUrl + 'planocontas/conta/' + conta);
  }

  pesquisarGrupo(idgrupo: number): Observable<Planocontas> {
    return this.httpCliente.get<Planocontas>(env.baseApiUrl + 'planocontas/grupo/' + idgrupo);
  }

  salvar(conta: Planocontas): Observable<any> {
      return this.httpCliente.post<any>(env.baseApiUrl + 'planocontas/salvar', conta);
  }

  pesquisarId(id: number): Observable<Planocontas> {
    return this.httpCliente.get<Planocontas>(env.baseApiUrl + 'planocontas/id/' + id);
  }
}
