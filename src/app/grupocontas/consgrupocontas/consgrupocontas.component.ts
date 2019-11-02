import { GrupoContasService } from '../grupocontas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router } from '@angular/router';
import { Grupoplanoconta } from '../model/grupoplanoconta';

@Component({
  selector: 'app-consgrupocontas',
  templateUrl: './consgrupocontas.component.html',
  styleUrls: ['./consgrupocontas.component.css']
})
export class ConsGrupoContasComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime = true;
    grupoContas: Grupoplanoconta[];


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private grupocontasservice: GrupoContasService) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      conta: [null],
      descricao: [null],
    });
    this.consultar();
  }

  consultar() {
    this.grupocontasservice.listar().subscribe(
      resposta => {
        this.grupoContas = resposta as any;
      }
    );
  }

  pesquisar() {
    const descricao = this.formulario.get('descricao').value;
    if ( descricao != null) {
        this.grupocontasservice.pesquisarDescricao(descricao).subscribe(
          resposta => {
            this.grupoContas = resposta as any;
          }
        );
    } else {
      const conta = this.formulario.get('conta').value;
      if (( conta != null ) && ( conta.length > 0)) {
        this.grupocontasservice.pesquisarConta(conta).subscribe(
          resposta => {
            this.grupoContas = resposta as any;
          }
        );
      }
    }
 }

 editar(grupoConta: Grupoplanoconta) {
  this.router.navigate([ '/cadgrupocontas' ,   grupoConta.idgrupoplanoconta ]);
}

}
