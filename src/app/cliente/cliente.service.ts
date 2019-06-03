import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';
import { Instituicao } from './model/instituicao';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClienteService {

  constructor( private httpCliente: HttpClient) { }

  listar(tipo: string): Observable<Instituicao> {
    return this.httpCliente.get<Instituicao>(env.baseApiUrl + 'instituicao/listar/tipo/' + tipo);
  }

  pesquisar(nome: string, email: string): Observable<Instituicao> {
    return this.httpCliente.get<Instituicao>(env.baseApiUrl + 'instituicao/listar/nome/email');

  }

  pesquisarNome(nome: string): Observable<Instituicao> {
    return this.httpCliente.get<Instituicao>(env.baseApiUrl + 'instituicao/listar/nome');

  }

  salvar(instituicao: Instituicao): Observable<any> {
      return this.httpCliente.post<any>(env.baseApiUrl + 'instituicao/salvar', instituicao);
  }

  pesquisarId(id: number): Observable<Instituicao> {
    return this.httpCliente.get<Instituicao>(env.baseApiUrl + 'instituicao/id/' + id);
  }

}
