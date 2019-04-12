import { ClienteService } from '../cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Instituicao } from '../model/instituicao';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-consucliente',
  templateUrl: './consucliente.component.html',
  styleUrls: ['./consucliente.component.css']
})
export class ConsuclienteComponent implements OnInit {

    formulario: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,) {}

    instituicao: Instituicao[];


  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
    });
    this.consultar();
  }


    consultar() {
      this.clienteService.listar().subscribe(
        resposta => {
          this.instituicao = <any> resposta;
        }
      );
    }

    pesquisar() {
       let nome = this.formulario.get('nome').value;
       let email = this.formulario.get('email').value;
       this.clienteService.pesquisar(nome, email).subscribe(
        resposta => {
          this.instituicao = <any> resposta;
        }
      );
    }





}
