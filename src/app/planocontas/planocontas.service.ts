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
}
