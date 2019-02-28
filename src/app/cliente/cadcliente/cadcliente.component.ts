import { Clienteenderecoresidencial } from './../model/clienteenderecoresidencial';
import { Instituicao } from './../model/instituicao';
import { ConsultacepService } from './../../share/consultacep.service';
import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/share/model/cep';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Clienteenderecocomercial } from '../model/clienteenderecocomercial';
import { BinaryOperator } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadcliente',
  templateUrl: './cadcliente.component.html',
  styleUrls: ['./cadcliente.component.css']
})
export class CadclienteComponent implements OnInit {

  formulario: FormGroup;
  isFirstOpen = true;
  oneAtATime: boolean = true;
  bsInlineValue = new Date();
  cep: Cep;
  instituicao: Instituicao;
  pessoaJuridica = false;
  pessoaFisica = false;

  constructor(
    private consultacepService: ConsultacepService,
    private formBuilder: FormBuilder,
    private router: Router) {}



  ngOnInit() {

    this.formulario = this.formBuilder.group({

      idinstituicao: [null],
      nome: [null],
      cpfcnpj: [null],
      email: [null],
      fonecelular: [null],
      fonefixo: [null],
      datacadastro: [null],
      tipo: [null],
      tipojuridico: [null],
      clientesocio: this.formBuilder.group({
        idclientesocio: [null],
        csnome: [null],
        cscpf: [null],
        csfonecelular: [null],
        csemail: [null]
      }),
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
      }),
      clienteenderecocomercial: this.formBuilder.group({
        idclienteenderecocomercial: [null],
        ceccep: [null],
        cecendereco: [null],
        cecnumero: [null],
        ceccomplemento: [null],
        cecbairro: [null],
        ceccidade: [null],
        cecestado: [null],
        cecfonecomercial: [null]
      }),
      clientecomplemento: this.formBuilder.group({
        idclienteclientecomplemento: [null],
        nacionalidade: [null],
        naturalidade: [null],
        nomepai: [null],
        nomemae: [null],
        profissao: [null],
        estadocivil: [null],
        numerorg: [null],
        dataemissao: [null],
        emissor: [null],
        sexo: [null]
      })
    });

  }

  consultarCEP(tipo: string){
    let cepInformado;
    if (tipo=='c'){
        cepInformado = this.formulario.get('clienteenderecocomercial.ceccep').value;
    }else {
      cepInformado = this.formulario.get('clienteenderecoresidencial.cercep').value;
    }

    cepInformado = cepInformado.replace(/\D/g, '');
    this.consultacepService.consultar(cepInformado).subscribe(
      resposta => {
        this.cep = resposta;
        if (tipo == 'c') {
          this.formulario.patchValue({
            clienteenderecocomercial: {
                cecendereco: this.cep.logradouro,
                cecbairro: this.cep.bairro,
                ceccidade: this.cep.localidade,
                cecestado: this.cep.uf
            }
        });
        } else {
          this.formulario.patchValue({
            clienteenderecoresidencial: {
                cerendereco: this.cep.logradouro,
                cerbairro: this.cep.bairro,
                cercidade: this.cep.localidade,
                cerestado: this.cep.uf
            }
        });
        }

        console.log(this.cep);
      },
      err => {
        console.log(JSON.stringify(err));
      }
    );
}
  setTipoJuridico(){
    if (this.formulario.get('tipojuridico').value == 'PF') {
      this.pessoaJuridica = false;
      this.pessoaFisica = true;
    } else {
      this.pessoaJuridica = true;
      this.pessoaFisica = false;
    }
  }

  salvar() {
    this.formulario.patchValue( {
      datacadastro: new Date(),
      tipo: 'c'
      });
    this.instituicao = this.formulario.value;
    console.log(this.instituicao);
  }

  cancelar() {
    this.formulario.reset();
    this.router.navigate([ "/conscliente"]);
  }
}
