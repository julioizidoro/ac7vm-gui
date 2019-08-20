import { Formapagamento } from './model/formapagamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FormapagamentoService {

  constructor( private httpCliente: HttpClient ) { }

  listar(): Observable<Formapagamento> {
    return this.httpCliente.get<Formapagamento>(env.baseApiUrl + 'formapagamento');
  }
}
