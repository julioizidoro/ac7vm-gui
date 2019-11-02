import { FaseObraService } from './../../faseobra/faseobra.service';
import { PlanoContasService } from './../../planocontas/planocontas.service';
import { Obrafase } from './../../faseobra/model/obrafase';
import { Planoconta } from 'src/app/planocontas/model/planoconta';
import { ServicosService } from '../servicos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router, ActivatedRoute } from '@angular/router';
import { Servicos } from '../model/servicos';

@Component({
  selector: 'app-cadservicos',
  templateUrl: './cadservicos.component.html',
  styleUrls: ['./cadservicos.component.css']
})
export class CadServicosComponent implements OnInit {

    formulario: FormGroup;
    servico: Servicos;
    listaPlanoConta: Planoconta[];
    planoConta: Planoconta;
    listaFaseObra: Obrafase[];
    faseObra: Obrafase;



  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private servicoService: ServicosService,
    private planoContaService: PlanoContasService,
    private activeRrouter: ActivatedRoute,
    private faseObraService: FaseObraService
    ) {}

  ngOnInit() {
    this.listarPlanoConta();
    this.listarFaseObra();
    this.formulario = this.formBuilder.group({
      idservico: [null],
      descricao: [null],
      conta: [null],
      obrafase: [null],
      planoconta: [null]
    });
    let id: number;
    this.activeRrouter.params.subscribe(params => {
      id = params.id;
      if (id != null) {
        this.servicoService.pesquisarId(id).subscribe(
          resposta => {
            this.servico = resposta as Servicos;
            if (this.servico == null) {
              this.formulario = this.formBuilder.group({
                idservico: [null],
                descricao: [null],
                conta: [null],
                obrafase: [],
                planoconta: [null]
              });
            } else {
              this.formulario = this.formBuilder.group({
                idservico: this.servico.idservico,
                descricao: this.servico.descricao,
                conta: this.servico.conta,
                obrafase: this.servico.obrafase,
                planoconta: this.servico.planoconta
              });
            }
          },
          err => {
            console.log(err.error.erros.join(' '));
          });
      }
  });
}


  salvar() {
    this.servico = this.formulario.value;
    this.router.navigate([ '/consservicos']);
  }

  cancelar() {
    this.formulario.reset();
    this.router.navigate([ '/consservicos']);
  }

  listarPlanoConta() {
    this.planoContaService.listar().subscribe(
      resposta => {
        this.listaPlanoConta = resposta as any;
      },
      err => {
        console.log(err.error.erros.join(' '));
      }
    );
  }

  compararPalnoConta(obj1, obj2) {
    return obj1 && obj2 ? obj1.idloja === obj2.idloja : obj1 === obj2;
  }

  setPlanoConta() {
    this.faseObra = this.formulario.get('planoconta').value;
  }

  listarFaseObra() {
    this.faseObraService.listar().subscribe(
      resposta => {
        this.listaFaseObra = resposta as any;
      },
      err => {
        console.log(err.error.erros.join(' '));
      }
    );
  }

  compararFaseObra(obj1, obj2) {
    return obj1 && obj2 ? obj1.idloja === obj2.idloja : obj1 === obj2;
  }

  setFaseObra() {
    this.faseObra = this.formulario.get('obrafase').value;
  }

}
