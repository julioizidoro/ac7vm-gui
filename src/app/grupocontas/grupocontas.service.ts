import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GrupoContasService {

  constructor( private httpCliente: HttpClient) { }

  

}
