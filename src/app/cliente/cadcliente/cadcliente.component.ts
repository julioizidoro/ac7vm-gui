import { ClienteService } from './../cliente.service';
import { Clienteenderecoresidencial } from './../model/clienteenderecoresidencial';
import { Instituicao } from './../model/instituicao';
import { ConsultacepService } from './../../share/consultacep.service';
import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/share/model/cep';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Clienteenderecocomercial } from '../model/clienteenderecocomercial';
import { BinaryOperator } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { Clientesocio } from '../model/clientesocio';
import { Clientecomplemento } from '../model/clientecomplemento';

@Component({
  selector: 'app-cadcliente',
  templateUrl: './cadcliente.component.html',
  styleUrls: ['./cadcliente.component.css']
})
export class CadclienteComponent implements OnInit {

  formulario: FormGroup;
  cep: Cep;
  instituicao: Instituicao;
  pessoaJuridica = false;
  pessoaFisica = false;
  public maskCPF = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  public maskCNPJ = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  public maskFONE = ['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public maskCELULAR = ['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public maskCEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
  public maskDATE = [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/,  /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(
    private consultacepService: ConsultacepService,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private activeRrouter: ActivatedRoute
    ){}



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
    let id;
    this.activeRrouter.params.subscribe(params => {
      id = params.id;
      if (id != null) {
        this.clienteService.pesquisarId(id).subscribe(
          resposta => {
            this.instituicao = resposta as Instituicao;
            if (this.instituicao == null) {
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
            } else {
              if (this.instituicao.tipojuridico=='PF'){
                this.pessoaFisica = true;
                this.pessoaJuridica = false;
              }else {
                this.pessoaJuridica = true
                this.pessoaFisica = false;
              }
              if (this.instituicao.clientesocio==null){
                this.instituicao.clientesocio = new Clientesocio();
              }
              if (this.instituicao.clienteenderecoresidencial==null){
                this.instituicao.clienteenderecoresidencial = new Clienteenderecoresidencial();
              }
              if (this.instituicao.clienteenderecocomercial==null){
                this.instituicao.clienteenderecocomercial = new Clienteenderecocomercial();
              }
              if (this.instituicao.clientecomplemento==null){
                this.instituicao.clientecomplemento = new Clientecomplemento();
              }
              this.formulario = this.formBuilder.group({
                idinstituicao: this.instituicao.idinstituicao,
                nome: this.instituicao.nome,
                cpfcnpj: this.instituicao.cpfcnpj,
                email: this.instituicao.email,
                fonecelular: this.instituicao.fonecelular,
                fonefixo: this.instituicao.fonefixo,
                datacadastro: this.instituicao.datacadastro,
                tipo: this.instituicao.tipo,
                tipojuridico: this.instituicao.tipojuridico,
                clientesocio: this.formBuilder.group({
                  idclientesocio: this.instituicao.clientesocio.idclientesocio,
                  csnome: this.instituicao.clientesocio.nome,
                  cscpf: this.instituicao.clientesocio.cpf,
                  csfonecelular: this.instituicao.clientesocio.fonecelular,
                  csemail: this.instituicao.clientesocio.email
                }),
                
                clienteenderecoresidencial: this.formBuilder.group({
                  
                  idclienteenderecoresidencial: this.instituicao.clienteenderecoresidencial.idclienteenderecoresidencial,
                  cercep: this.instituicao.clienteenderecoresidencial.cep,
                  cerendereco: this.instituicao.clienteenderecoresidencial.endereco,
                  cernumero: this.instituicao.clienteenderecoresidencial.numero,
                  cerbairro: this.instituicao.clienteenderecoresidencial.bairro,
                  cercomplemento: this.instituicao.clienteenderecoresidencial.complemento,
                  cercidade: this.instituicao.clienteenderecoresidencial.cidade,
                  cerestado: this.instituicao.clienteenderecoresidencial.estado,
                  cerfoneresidencial: this.instituicao.clienteenderecoresidencial.foneresidencial
                
                }),
              
                clienteenderecocomercial: this.formBuilder.group({
                  idclienteenderecocomercial: this.instituicao.clienteenderecocomercial.idclienteenderecocomercial,
                  ceccep: this.instituicao.clienteenderecocomercial.cep,
                  cecendereco: this.instituicao.clienteenderecocomercial.endereco,
                  cecnumero: this.instituicao.clienteenderecocomercial.numero,
                  ceccomplemento: this.instituicao.clienteenderecocomercial.complemento,
                  cecbairro: this.instituicao.clienteenderecocomercial.bairro,
                  ceccidade: this.instituicao.clienteenderecocomercial.cidade,
                  cecestado: this.instituicao.clienteenderecocomercial.estado,
                  cecfonecomercial: this.instituicao.clienteenderecocomercial.fonefixo
                }),
                clientecomplemento: this.formBuilder.group({
                  idclienteclientecomplemento: this.instituicao.clientecomplemento.idclienteclientecomplemento,
                  nacionalidade: this.instituicao.clientecomplemento.nacionalidade,
                  naturalidade: this.instituicao.clientecomplemento.naturalidade,
                  nomepai: this.instituicao.clientecomplemento.nomepai,
                  nomemae: this.instituicao.clientecomplemento.nomemae,
                  profissao: this.instituicao.clientecomplemento.profissao,
                  estadocivil: this.instituicao.clientecomplemento.estadocivil,
                  numerorg: this.instituicao.clientecomplemento.numerorg,
                  dataemissao: this.instituicao.clientecomplemento.dataemissao,
                  emissor: this.instituicao.clientecomplemento.emissor,
                  sexo: this.instituicao.clientecomplemento.sexo
                })
              });
            }
          },
          err => {
            console.log(err.error.erros.join(' '));
          }
        );
      }
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
    this.clienteService.salvar( this.instituicao).subscribe(
      resposta => {
        this.instituicao = resposta as any;
        this.router.navigate(['/consCliente']);
      }
    );

    console.log(this.instituicao);
  }

  cancelar() {
    this.formulario.reset();
    this.router.navigate(['/consCliente']);
  }

}
