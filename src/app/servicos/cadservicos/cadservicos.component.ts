import { ServicosService } from '../servicos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router } from '@angular/router';
import { Servicos } from '../model/servicos';

@Component({
  selector: 'app-cadservicos',
  templateUrl: './cadservicos.component.html',
  styleUrls: ['./cadservicos.component.css']
})
export class CadServicosComponent implements OnInit {

    formulario: FormGroup;
    servico: Servicos;



  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private obrasService: ServicosService) 
    {

    }



  ngOnInit() {
    this.formulario = this.formBuilder.group({
        descricao: [null],
      });
  }


  salvar() {
    this.formulario.patchValue( {
      datacadastro: new Date(),
      tipo: 'c'
      });
    this.servico = this.formulario.value;
    console.log(this.servico);
    this.router.navigate([ '/consservicos']);
  }

  cancelar() {
    this.formulario.reset();
    this.router.navigate([ "/consservicos"]);
  }
  

}
