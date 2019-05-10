import { Grupocontas } from './../model/grupocontas';
import { GrupoContasService } from '../grupocontas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadgrupocontas',
  templateUrl: './cadgrupocontas.component.html',
  styleUrls: ['./cadgrupocontas.component.css']
})
export class CadGrupoContasComponent implements OnInit {

    formulario: FormGroup;
    grupoConta: Grupocontas;



  constructor(
    private grupocontasservice: GrupoContasService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRrouter: ActivatedRoute
    ) {}



  ngOnInit() {
    this.formulario = this.formBuilder.group({
      conta: [null],
      descricao: [null],
    });
    let id;
    this.activeRrouter.params.subscribe(params => {
      id = params.id;
      if (id != null) {
        this.grupocontasservice.pesquisarId(id).subscribe(
          resposta => {
            this.grupoConta = resposta as Grupocontas;
            if (this.grupoConta == null ) {
              this.formulario = this.formBuilder.group({
                conta: [null],
                descricao: [null],
              });
            } else {
              this.formulario = this.formBuilder.group({
                conta: this.grupoConta.conta,
                descricao: this.grupoConta.descricao,
              });
            }
          }
        )
      }
  });

}

salvar() {
  this.grupoConta = this.formulario.value;
  this.grupocontasservice.salvar( this.grupoConta).subscribe(
    resposta => {
      this.grupoConta = resposta as any;
      this.router.navigate(['/consgrupocontas']);
    }
  );
}

cancelar() {
  this.formulario.reset();
  this.router.navigate(['/consgrupocontas']);
}

}
