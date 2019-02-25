import { ClienteService } from './../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Instituicao } from '../cliente/model/instituicao';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-consucliente',
  templateUrl: './consucliente.component.html',
  styleUrls: ['./consucliente.component.css']
})
export class ConsuclienteComponent implements OnInit {

    formulario: FormGroup;



  constructor(
    private clienteService: ClienteService,) {}

    instituicao: Instituicao[];


  ngOnInit() {
    this.consultar();
  }

    consultar() {
      this.clienteService.listar().subscribe(
        resposta => {
          this.instituicao = <any> resposta;
        }
      );

      console.log(this.instituicao);
    }




}
