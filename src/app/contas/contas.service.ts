import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contas } from './model/contas';
import { environment as env } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor( private httpCliente: HttpClient ) { }

  listar( tipo: string ): Observable<Contas> {
    return this.httpCliente.get<Contas>(env.baseApiUrl + 'contas/' + tipo);
  }

  getConta( id: number ): Observable<Contas> {
    return this.httpCliente.get<Contas>(env.baseApiUrl + 'contas/id/' + id);
  }

}
