import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Produto } from './model/produto';


@Injectable()
export class ProdutoService {

  constructor( private httpCliente: HttpClient) { }

  listar(): Observable<Produto> {
    return this.httpCliente.get<Produto>(env.baseApiUrl + 'produtos');
  }

  pesquisarDescricao(descricao: string): Observable<Produto> {
    return this.httpCliente.get<Produto>(env.baseApiUrl + 'produtos/descricao/' + descricao);
  }

  pesquisarId(id: number): Observable<Produto> {
    return this.httpCliente.get<Produto>(env.baseApiUrl + 'produtos/id/' + id);
  }

  salvar(produto: Produto): Observable<any> {
    return this.httpCliente.post<any>(env.baseApiUrl + 'produtos/salvar', produto);
  }

}
