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


  //Contas a recever

  listarCR(): Observable<Contas> {
    return this.httpCliente.get<Contas>(env.baseApiUrl + 'cr');
  }

  getcrId( id: number ): Observable<Contas> {
    return this.httpCliente.get<Contas>(env.baseApiUrl + 'cr/id/' + id);
  }

  salvarCR(conta: Contas): Observable<any> {
    return this.httpCliente.post<any>(env.baseApiUrl + 'cr/salvar', conta);
}


//Contas a pagar

  listarCP(): Observable<Contas> {
    return this.httpCliente.get<Contas>(env.baseApiUrl + 'cp');
  }

  getcpId( id: number ): Observable<Contas> {
    return this.httpCliente.get<Contas>(env.baseApiUrl + 'cp/id/' + id);
  }

  salvarCP(conta: Contas): Observable<any> {
    return this.httpCliente.post<any>(env.baseApiUrl + 'cp/salvar', conta);
}



}
