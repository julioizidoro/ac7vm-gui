import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Obrafase } from './model/obrafase';


@Injectable()
export class FaseObraService {

  constructor( private httpCliente: HttpClient) { }

  listar(): Observable<Obrafase> {
    return this.httpCliente.get<Obrafase>(env.baseApiUrl + 'faseobras');
  }

  pesquisarDescricao(descricao: string): Observable<Obrafase> {
    return this.httpCliente.get<Obrafase>(env.baseApiUrl + 'faseobras/descricao/' + descricao);

  }

  pesquisarConta(conta: string): Observable<Obrafase> {
    return this.httpCliente.get<Obrafase>(env.baseApiUrl + 'faseobras/conta/' + conta);

  }

  salvar(obraFase: Obrafase): Observable<any> {
      return this.httpCliente.post<any>(env.baseApiUrl + 'faseobras/salvar', obraFase);
  }

  pesquisarId(id: number): Observable<Obrafase> {
    return this.httpCliente.get<Obrafase>(env.baseApiUrl + 'faseobras/id/' + id);
  }


}
