import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Servicos } from './model/servicos';


@Injectable()
export class ServicosService {

  private servico: Servicos;

  constructor( private httpCliente: HttpClient) { }

  setServico(servico: Servicos) {
    this.servico= servico;
  }

  getServico() {
    return this.servico;
  }

  listar(): Observable<Servicos> {
    return this.httpCliente.get<Servicos>(env.baseApiUrl + 'servicos');
  }

  pesquisarDescricao(descricao: string): Observable<Servicos> {
    return this.httpCliente.get<Servicos>(env.baseApiUrl + 'servicos/descricao/' + descricao);

  }

  pesquisarConta(conta: string): Observable<Servicos> {
    return this.httpCliente.get<Servicos>(env.baseApiUrl + 'servicos/conta/' + conta);

  }

  salvar(obraFase: Servicos): Observable<any> {
      return this.httpCliente.post<any>(env.baseApiUrl + 'servicos/salvar', obraFase);
  }

  pesquisarId(id: number): Observable<Servicos> {
    return this.httpCliente.get<Servicos>(env.baseApiUrl + 'servicos/id/' + id);
  }

}
