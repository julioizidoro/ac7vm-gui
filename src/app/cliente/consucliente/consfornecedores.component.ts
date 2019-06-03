
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instituicao } from '../model/instituicao';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-consfornecedores',
  templateUrl: './consfornecedores.component.html',
  styleUrls: ['./consfornecedores.component.css']
})
export class ConsuFornecedoresComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime = true;
    instituicao: Instituicao[];


  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router) {}



  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null]
    });
    this.consultar();
  }

  consultar() {
    this.clienteService.listar('f').subscribe(
      resposta => {
        this.instituicao = resposta as any;
      }
    );
  }

  pesquisar() {
    const nome = this.formulario.get('nome').value;
    this.clienteService.pesquisarNome(nome).subscribe(
     resposta => {
       this.instituicao = resposta as any;
     }
   );
 }

 editar(instituicao: Instituicao) {
   this.router.navigate([ '/cadfornecedor' ,   instituicao.idinstituicao ]);
 }


}
