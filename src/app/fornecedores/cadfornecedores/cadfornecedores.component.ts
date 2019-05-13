import { FornecedoresService } from '../fornecedores.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Cep } from 'src/app/share/model/cep';
import { ConsultacepService } from './../../share/consultacep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadfornecedores',
  templateUrl: './cadfornecedores.component.html',
  styleUrls: ['./cadfornecedores.component.css']
})
export class CadFornecedoresComponent implements OnInit {

    formulario: FormGroup;
    cep: Cep;
    pessoaJuridica = false;
    pessoaFisica = false;

  constructor(
    private consultacepService: ConsultacepService,
    private fornecedoresService: FornecedoresService,
    private router: Router,
    private formBuilder: FormBuilder) {}



  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null],
      tipojuridico: [null],
      clienteenderecoresidencial: this.formBuilder.group({
        idclienteenderecoresidencial: [null],
        cercep: [null],
        cerendereco: [null],
        cernumero: [null],
        cerbairro: [null],
        cercomplemento: [null],
        cercidade: [null],
        cerestado: [null],
        cerfoneresidencial: [null]
      })
    });
  }
}
