import { Clientesegundo } from './../model/clientesegundo';
import { ClienteService } from './../cliente.service';
import { Clienteenderecoresidencial } from './../model/clienteenderecoresidencial';
import { Instituicao } from './../model/instituicao';
import { ConsultacepService } from './../../share/consultacep.service';
import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/share/model/cep';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Clienteenderecocomercial } from '../model/clienteenderecocomercial';
import { Router, ActivatedRoute } from '@angular/router';
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
  segundo = false;
  isFirstOpen = false;
  oneAtATime: true;
  public maskCPF = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  // tslint:disable-next-line:max-line-length
  public maskCNPJ = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  public maskFONE = ['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  // tslint:disable-next-line:max-line-length
  public maskCELULAR = ['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public maskCEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
  public maskDATE = [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/,  /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(
    private consultacepService: ConsultacepService,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private activeRrouter: ActivatedRoute
    ) {}



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
      segundo: [false],
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
      }),
      clientesegundo: this.formBuilder.group({
        idclientesegundo: [null],
        csnome: [null],
        cscpf: [null],
        csrg: [null],
        csemissor: [null],
        csdatanascimento: [null],
        cssexo: [null],
        csestadocivil: [null],
        csfonecelular: [null],
        csfonefixo: [null],
        cscep: [null],
        csendereco: [null],
        csnumero: [null],
        cscomplemento: [null],
        csbairro:  [null],
        cscidade: [null],
        csestado: [null],
        csemail: [null],
        csnacionalidade: [null],
        csprofissao: [null],
        cslocaltrabalho: [null],
        utilizarendereco: [false]

      })
    });
    let id: number;
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
                segundo: [false],
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
                }),
                clientesegundo: this.formBuilder.group({
                  idclientesegundo: [null],
                  csnome: [null],
                  cscpf: [null],
                  csrg: [null],
                  csemissor: [null],
                  csdatanascimento: [null],
                  cssexo: [null],
                  csestadocivil: [null],
                  csfonecelular: [null],
                  csfonefixo: [null],
                  cscep: [null],
                  csendereco: [null],
                  csnumero: [null],
                  cscomplemento: [null],
                  csbairro:  [null],
                  cscidade: [null],
                  csestado: [null],
                  csemail: [null],
                  csnacionalidade: [null],
                  csprofissao: [null],
                  cslocaltrabalho: [null],
                  utilizarendereco: [false]
                })
              });
            } else {
              if (this.instituicao.tipojuridico === 'PF') {
                this.pessoaFisica = true;
                this.pessoaJuridica = false;
              } else {
                this.pessoaJuridica = true;
                this.pessoaFisica = false;
              }
              if (this.instituicao.clientesocio == null) {
                this.instituicao.clientesocio = new Clientesocio();
              }
              if (this.instituicao.clienteenderecoresidencial == null) {
                this.instituicao.clienteenderecoresidencial = new Clienteenderecoresidencial();
              }
              if (this.instituicao.clienteenderecocomercial == null) {
                this.instituicao.clienteenderecocomercial = new Clienteenderecocomercial();
              }
              if (this.instituicao.clientecomplemento == null) {
                this.instituicao.clientecomplemento = new Clientecomplemento();
              }
              if (this.instituicao.clientesegundo == null) {
                this.instituicao.clientesegundo = new Clientesegundo();
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
                }),
                clientesegundo: this.formBuilder.group({
                  idclientesegundo: this.instituicao.clientesegundo.idclientesegundo,
                  csnome: this.instituicao.clientesegundo.nome,
                  cscpf: this.instituicao.clientesegundo.cpf,
                  csrg: this.instituicao.clientesegundo.rg,
                  csemissor: this.instituicao.clientesegundo.emissor,
                  csdatanascimento: this.instituicao.clientesegundo.datanascimento,
                  cssexo: this.instituicao.clientesegundo.sexo,
                  csestadocivil: this.instituicao.clientesegundo.estadocivil,
                  csfonecelular: this.instituicao.clientesegundo.fonecelular,
                  csfonefixo: this.instituicao.clientesegundo.fonefixo,
                  cscep: this.instituicao.clientesegundo.cep,
                  csendereco: this.instituicao.clientesegundo.endereco,
                  csnumero: this.instituicao.clientesegundo.numero,
                  cscomplemento: this.instituicao.clientesegundo.complemento,
                  csbairro:  this.instituicao.clientesegundo.bairro,
                  cscidade: this.instituicao.clientesegundo.cidade,
                  csestado: this.instituicao.clientesegundo.estado,
                  csemail: this.instituicao.clientesegundo.email,
                  csnacionalidade: this.instituicao.clientesegundo.nacionalidade,
                  csprofissao: this.instituicao.clientesegundo.profissao,
                  cslocaltrabalho: this.instituicao.clientesegundo.localtrabalho,
                  utilizarendereco: [false]
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

  consultarCEP(tipo: string) {
    let cepInformado;
    if (tipo === 'c') {
        cepInformado = this.formulario.get('clienteenderecocomercial.ceccep').value;
    } else if ( tipo === 'r') {
      cepInformado = this.formulario.get('clienteenderecoresidencial.cercep').value;
    } else if ( tipo === 's') {
      cepInformado = this.formulario.get('clientesegundo.cscep').value;
    }

    cepInformado = cepInformado.replace(/\D/g, '');
    this.consultacepService.consultar(cepInformado).subscribe(
      resposta => {
        this.cep = resposta;
        if (tipo === 'c') {
          this.formulario.patchValue({
            clienteenderecocomercial: {
                cecendereco: this.cep.logradouro,
                cecbairro: this.cep.bairro,
                ceccidade: this.cep.localidade,
                cecestado: this.cep.uf
            }
        });
        } else if (tipo === 'r') {
          this.formulario.patchValue({
            clienteenderecoresidencial: {
                cerendereco: this.cep.logradouro,
                cerbairro: this.cep.bairro,
                cercidade: this.cep.localidade,
                cerestado: this.cep.uf
            }
        });
        }  else if ( tipo === 's') {
          this.formulario.patchValue({
            clientesegundo: {
              csendereco: this.cep.logradouro,
              csbairro: this.cep.bairro,
              cscidade: this.cep.localidade,
              csestado: this.cep.uf
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
  setTipoJuridico() {
    if (this.formulario.get('tipojuridico').value === 'PF') {
      this.pessoaJuridica = false;
      this.pessoaFisica = true;
    } else {
      this.pessoaJuridica = true;
      this.pessoaFisica = false;
    }
  }

  setClienteSegundo() {
    if (this.formulario.get('segundo').value === true) {
       this.segundo = true;
    } else {
      this.segundo = false;
    }
  }

  setUtilizarEndereco() {
    if (this.formulario.get('clientesegundo.utilizarendereco').value === true) {
      this.formulario.patchValue({
        clientesegundo: {
          cscep: this.formulario.get('clienteenderecoresidencial.cercep').value,
          csendereco: this.formulario.get('clienteenderecoresidencial.cerendereco').value,
          csnumero: this.formulario.get('clienteenderecoresidencial.cernumero').value,
          cscomplemento: this.formulario.get('clienteenderecoresidencial.cercomplemento').value,
          csbairro: this.formulario.get('clienteenderecoresidencial.cerbairro').value,
          cscidade: this.formulario.get('clienteenderecoresidencial.cercidade').value,
          csestado: this.formulario.get('clienteenderecoresidencial.cerestado').value,
        }
    });
    } else {
      this.formulario.patchValue({
        clientesegundo: {
          cscep: [null],
          csendereco: [null],
          csnumero: [null],
          cscomplemento: [null],
          csbairro: [null],
          cscidade: [null],
          csestado: [null],
        }
    });
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
