import { FaseObraService } from '../faseobra.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Obrafase } from '../model/obrafase';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cadfaseobra',
  templateUrl: './cadfaseobra.component.html',
  styleUrls: ['./cadfaseobra.component.css']
})
export class CadFaseObraComponent implements OnInit {

    formulario: FormGroup;
    obraFase: Obrafase;

  constructor(
    private faseobraservice: FaseObraService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activeRrouter: ActivatedRoute) {}



  ngOnInit() {
    this.formulario = this.formBuilder.group({
      idobrafase: [null],
      descricao: [null],
      tempomedio: [null],
      conta: [null]
  });
    let id: number;
    this.activeRrouter.params.subscribe(params => {
      id = params.id;
      if (id != null) {
        this.faseobraservice.pesquisarId(id).subscribe(
          resposta => {
            this.obraFase = resposta as Obrafase;
            if (this.obraFase == null) {
              this.formulario = this.formBuilder.group({
                idobrafase: [null],
                descricao: [null],
                tempomedio: [null],
                conta: [null]
              });
            } else {
              this.formulario = this.formBuilder.group({
                idobrafase: this.obraFase.idobrafase,
                descricao: this.obraFase.descricao,
                tempomedio: this.obraFase.tempomedio,
                conta: this.obraFase.conta
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
  this.obraFase = this.formulario.value;
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



}
