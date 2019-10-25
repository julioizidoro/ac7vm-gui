import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './model/usuario';
import { environment as env } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private httpClient: HttpClient ) { }

  logar(login: string, senha: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(env.baseApiUrl + 'usuarios/logar/' + login + '/' + senha);
  }

  logar1(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(env.baseApiUrl + 'usuarios/logar', usuario);
  }
}
