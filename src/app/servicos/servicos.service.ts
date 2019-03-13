import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Servicos } from './model/servicos';


@Injectable()
export class ServicosService {

  constructor( private httpCliente: HttpClient) { }

  listar(): Observable<Servicos> {
    return this.httpCliente.get<Servicos>(env.baseApiUrl + 'servicos/listar/c');

  }

}
