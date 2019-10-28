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
  isFirstOpen = true;
  oneAtATime: true;
  public maskCPF = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  // tslint:disable-next-line:max-line-length
  public maskCNPJ = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  public maskFONE = ['(', /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  // tslint:disable-next-line:max-line-length
  public maskCELULAR = ['(', /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public maskCEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(
    private consultacepService: ConsultacepService,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private activeRrouter: ActivatedRoute
    ) {}



  ngOnInit() {
    this.setFormularioNulo();
    let id: number;
    this.activeRrouter.params.subscribe(params => {
      id = params.id;
      if (id != null) {
        this.clienteService.pesquisarId(id).subscribe(
          resposta => {
            this.instituicao = resposta as Instituicao;
            if (this.instituicao != null) {
              if (this.instituicao.tipojuridico === 'PF') {
                this.pessoaFisica = true;
                this.pessoaJuridica = false;
              } else {
                this.pessoaJuridica = true;
                this.pessoaFisica = false;
              }
              this.segundo = this.instituicao.segundo;
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
              } else {
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
                segundo: this.instituicao.segundo,
                clientesocio: this.formBuilder.group({
                  idclientesocio: this.instituicao.clientesocio.idclientesocio,
                  nome: this.instituicao.clientesocio.nome,
                  cpf: this.instituicao.clientesocio.cpf,
                  fonecelular: this.instituicao.clientesocio.fonecelular,
                  email: this.instituicao.clientesocio.email
                }),
                clienteenderecoresidencial: this.formBuilder.group({
                  idclienteenderecoresidencial: this.instituicao.clienteenderecoresidencial.idclienteenderecoresidencial,
                  cep: this.instituicao.clienteenderecoresidencial.cep,
                  endereco: this.instituicao.clienteenderecoresidencial.endereco,
                  numero: this.instituicao.clienteenderecoresidencial.numero,
                  bairro: this.instituicao.clienteenderecoresidencial.bairro,
                  complemento: this.instituicao.clienteenderecoresidencial.complemento,
                  cidade: this.instituicao.clienteenderecoresidencial.cidade,
                  estado: this.instituicao.clienteenderecoresidencial.estado,
                  foneresidencial: this.instituicao.clienteenderecoresidencial.foneresidencial
                }),
                clienteenderecocomercial: this.formBuilder.group({
                  idclienteenderecocomercial: this.instituicao.clienteenderecocomercial.idclienteenderecocomercial,
                  cep: this.instituicao.clienteenderecocomercial.cep,
                  endereco: this.instituicao.clienteenderecocomercial.endereco,
                  numero: this.instituicao.clienteenderecocomercial.numero,
                  complemento: this.instituicao.clienteenderecocomercial.complemento,
                  bairro: this.instituicao.clienteenderecocomercial.bairro,
                  cidade: this.instituicao.clienteenderecocomercial.cidade,
                  estado: this.instituicao.clienteenderecocomercial.estado,
                  fonecomercial: this.instituicao.clienteenderecocomercial.fonefixo
                }),
                clientecomplemento: this.formBuilder.group({
                  idclientecomplemento: this.instituicao.clientecomplemento.idclientecomplemento,
                  nacionalidade: this.instituicao.clientecomplemento.nacionalidade,
                  naturalidade: this.instituicao.clientecomplemento.naturalidade,
                  nomepai: this.instituicao.clientecomplemento.nomepai,
                  nomemae: this.instituicao.clientecomplemento.nomemae,
                  profissao: this.instituicao.clientecomplemento.profissao,
                  estadocivil: this.instituicao.clientecomplemento.estadocivil,
                  numerorg: this.instituicao.clientecomplemento.numerorg,
                  dataemissao: this.instituicao.clientecomplemento.dataemissao,
                  emissor: this.instituicao.clientecomplemento.emissor,
                  sexo: this.instituicao.clientecomplemento.sexo,
                  datanascimento: this.instituicao.clientecomplemento.datanascimento
                }),
                clientesegundo: this.formBuilder.group({
                  idclientesegundo: this.instituicao.clientesegundo.idclientesegundo,
                  nome: this.instituicao.clientesegundo.nome,
                  cpf: this.instituicao.clientesegundo.cpf,
                  rg: this.instituicao.clientesegundo.rg,
                  emissor: this.instituicao.clientesegundo.emissor,
                  datanascimento: this.instituicao.clientesegundo.datanascimento,
                  sexo: this.instituicao.clientesegundo.sexo,
                  estadocivil: this.instituicao.clientesegundo.estadocivil,
                  fonecelular: this.instituicao.clientesegundo.fonecelular,
                  fonefixo: this.instituicao.clientesegundo.fonefixo,
                  cep: this.instituicao.clientesegundo.cep,
                  endereco: this.instituicao.clientesegundo.endereco,
                  numero: this.instituicao.clientesegundo.numero,
                  complemento: this.instituicao.clientesegundo.complemento,
                  bairro:  this.instituicao.clientesegundo.bairro,
                  cidade: this.instituicao.clientesegundo.cidade,
                  estado: this.instituicao.clientesegundo.estado,
                  email: this.instituicao.clientesegundo.email,
                  nacionalidade: this.instituicao.clientesegundo.nacionalidade,
                  profissao: this.instituicao.clientesegundo.profissao,
                  localtrabalho: this.instituicao.clientesegundo.localtrabalho,
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
        cepInformado = this.formulario.get('clienteenderecocomercial.cep').value;
    } else if ( tipo === 'r') {
      cepInformado = this.formulario.get('clienteenderecoresidencial.cep').value;
    } else if ( tipo === 's') {
      cepInformado = this.formulario.get('clientesegundo.cep').value;
    }

    cepInformado = cepInformado.replace(/\D/g, '');
    this.consultacepService.consultar(cepInformado).subscribe(
      resposta => {
        this.cep = resposta;
        if (tipo === 'c') {
          this.formulario.patchValue({
            clienteenderecocomercial: {
                endereco: this.cep.logradouro,
                bairro: this.cep.bairro,
                cidade: this.cep.localidade,
                estado: this.cep.uf
            }
        });
        } else if (tipo === 'r') {
          this.formulario.patchValue({
            clienteenderecoresidencial: {
                endereco: this.cep.logradouro,
                bairro: this.cep.bairro,
                cidade: this.cep.localidade,
                estado: this.cep.uf
            }
        });
        }  else if ( tipo === 's') {
          this.formulario.patchValue({
            clientesegundo: {
              endereco: this.cep.logradouro,
              bairro: this.cep.bairro,
              cidade: this.cep.localidade,
              estado: this.cep.uf
            }
        });
        }
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
          cep: this.formulario.get('clienteenderecoresidencial.cep').value,
          endereco: this.formulario.get('clienteenderecoresidencial.endereco').value,
          numero: this.formulario.get('clienteenderecoresidencial.numero').value,
          complemento: this.formulario.get('clienteenderecoresidencial.complemento').value,
          bairro: this.formulario.get('clienteenderecoresidencial.bairro').value,
          cidade: this.formulario.get('clienteenderecoresidencial.cidade').value,
          estado: this.formulario.get('clienteenderecoresidencial.estado').value,
        }
    });
    } else {
      this.formulario.patchValue({
        clientesegundo: {
          cep: [null],
          endereco: [null],
          numero: [null],
          complemento: [null],
          bairro: [null],
          cidade: [null],
          estado: [null],
        }
    });
    }
  }

  salvar() {
    this.formulario.patchValue( {
      datacadastro: new Date(),
      tipo: 'c',
      segundo: this.segundo
      });
    this.instituicao = this.formulario.value;
    this.clienteService.salvar( this.instituicao).subscribe(
      resposta => {
        this.instituicao = resposta as any;
        this.router.navigate(['/consCliente']);
      },
      err => {
        console.log(err.error.erros.join(' '));
      }
    );

    console.log(this.instituicao);
  }

  cancelar() {
    this.formulario.reset();
    this.router.navigate(['/consCliente']);
  }

  setFormularioNulo() {
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
        nome: [null],
        cpf: [null],
        fonecelular: [null],
        email: [null]
      }),
      clienteenderecoresidencial: this.formBuilder.group({
        idclienteenderecoresidencial: [null],
        cep: [null],
        endereco: [null],
        numero: [null],
        bairro: [null],
        complemento: [null],
        cidade: [null],
        estado: [null],
        foneresidencial: [null]
      }),
      clienteenderecocomercial: this.formBuilder.group({
        idclienteenderecocomercial: [null],
        cep: [null],
        endereco: [null],
        numero: [null],
        complemento: [null],
        bairro: [null],
        cidade: [null],
        estado: [null],
        fonecomercial: [null]
      }),
      clientecomplemento: this.formBuilder.group({
        idclientecomplemento: [null],
        nacionalidade: [null],
        naturalidade: [null],
        nomepai: [null],
        nomemae: [null],
        profissao: [null],
        estadocivil: [null],
        numerorg: [null],
        dataemissao: [null],
        emissor: [null],
        sexo: [null],
        datanascimento: [null],
      }),
      clientesegundo: this.formBuilder.group({
        idclientesegundo: [null],
        nome: [null],
        cpf: [null],
        rg: [null],
        emissor: [null],
        datanascimento: [null],
        sexo: [null],
        estadocivil: [null],
        fonecelular: [null],
        fonefixo: [null],
        cep: [null],
        endereco: [null],
        numero: [null],
        complemento: [null],
        bairro:  [null],
        cidade: [null],
        estado: [null],
        email: [null],
        nacionalidade: [null],
        profissao: [null],
        localtrabalho: [null],
        utilizarendereco: [false]
      })
    });
  }

}
