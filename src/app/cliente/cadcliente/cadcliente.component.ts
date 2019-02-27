import { Instituicao } from './../model/instituicao';
import { ConsultacepService } from './../../share/consultacep.service';
import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/share/model/cep';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Clienteenderecocomercial } from '../model/clienteenderecocomercial';
import { BinaryOperator } from '@angular/compiler';

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

  constructor(
    private consultacepService: ConsultacepService,
    private formBuilder: FormBuilder) {
      this.instituicao = new Instituicao();
      this.instituicao.clienteenderecocomercial = new Clienteenderecocomercial;
    }



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
        cercomplemento: [null],
        cercidade: [null],
        cerestado: [null]
      }),
      clienteenderecocomercial: this.formBuilder.group({
        idclienteenderecocomercial: [null],
        ceccep: [null],
        cecendereco: [null],
        cecnumero: [null],
        ceccomplemento: [null],
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

  consultarCEP(){
    let CepComercial = this.formulario.get('clienteenderecocomercial.ceccep').value;
    CepComercial = CepComercial.replace(/\D/g, '');
    this.consultacepService.consultar(CepComercial).subscribe(
      resposta => {
        this.cep = resposta;
        this.formulario.patchValue({
            clienteenderecocomercial: {
                cecendereco: this.cep.logradouro,
                cecbairro: this.cep.bairro,
                ceccidade: this.cep.localidade,
                cecestado: this.cep.uf
            }
        });
        console.log(this.cep);
      },
      err => {
        console.log(JSON.stringify(err));
      }
    );

}
}
