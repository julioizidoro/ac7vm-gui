import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
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

  criptoSenha(senha: string): Observable<any> {
    return this.httpClient.get(env.baseApiUrl + 'usuarios/cripto/' + senha);
  }

  salvar(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(env.baseApiUrl + 'usuarios/salvar', usuario);
  }

  upload(file: File): Observable<any> {
    const uri = env.baseApiUrl + 'usuarios/picture';
    const formData = new FormData();
    
    formData.append('file', file, file.name);
    const request = new HttpRequest('POST', uri, formData);
    return this.httpClient.request(request);
  }
}
