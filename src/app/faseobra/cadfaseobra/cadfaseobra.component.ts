import { FaseObraService } from '../faseobra.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Obrafase } from '../model/obrafase';
import { ActivatedRoute, Router } from '@angular/router';
import { Planoconta } from 'src/app/planocontas/model/planoconta';
import { PlanoContasService } from 'src/app/planocontas/planocontas.service';



@Component({
  selector: 'app-cadfaseobra',
  templateUrl: './cadfaseobra.component.html',
  styleUrls: ['./cadfaseobra.component.css']
})
export class CadFaseObraComponent implements OnInit {

    formulario: FormGroup;
    obraFase: Obrafase;
    listaPlanoConta: Planoconta[];
    planoConta: Planoconta;

  constructor(
    private faseobraservice: FaseObraService,
    private router: Router,
    private formBuilder: FormBuilder,
    private planocontaservice: PlanoContasService,
    private activeRrouter: ActivatedRoute) {}



  ngOnInit() {
    this.listarPlanoConta();
    this.formulario = this.formBuilder.group({
      idobrafase: [null],
      descricao: [null],
      tempomedio: [null],
      conta: [null],
      planoconta: [null]
    });
    this.obraFase = this.faseobraservice.getFaseObra();
    if ( this.obraFase !=null ){
      this.formulario = this.formBuilder.group({
        idobrafase: this.obraFase.idobrafase,
        descricao: this.obraFase.descricao,
        tempomedio: this.obraFase.tempomedio,
        conta: this.obraFase.conta,
        planoconta: this.obraFase.planoconta
      });
    }
  }

salvar() {
  this.listarPlanoConta();
  this.obraFase = this.formulario.value;
  this.obraFase.planoconta = this.planoConta;
  this.faseobraservice.salvar( this.obraFase ).subscribe(
    resposta => {
      this.obraFase = resposta as any;
      this.router.navigate(['/consFaseObra']);
    }
  );
}

cancelar() {
  this.formulario.reset();
  this.router.navigate(['/consfaseobra']);
}

listarPlanoConta() {
  this.planocontaservice.listar().subscribe(
    resposta => {
      this.listaPlanoConta = resposta as any;
      console.log(this.listaPlanoConta);
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
  this.planoConta = this.formulario.get('planoconta').value;
}



}
