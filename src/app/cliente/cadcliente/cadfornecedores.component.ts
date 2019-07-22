import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cep } from 'src/app/share/model/cep';
import { ConsultacepService } from '../../share/consultacep.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Instituicao } from '../model/instituicao';
import { ClienteService } from '../cliente.service';
import { Clienteenderecocomercial } from '../model/clienteenderecocomercial';


@Component({
  selector: 'app-cadfornecedores',
  templateUrl: './cadfornecedores.component.html',
  styleUrls: ['./cadfornecedores.component.css']
})
export class CadFornecedoresComponent implements OnInit {

  formulario: FormGroup;
  cep: Cep;
  instituicao: Instituicao;
  pessoaJuridica = false;
  pessoaFisica = false;
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
    private clienteService: ClienteService,
    private router: Router,
    private activeRrouter: ActivatedRoute,
    private formBuilder: FormBuilder) {}




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
              });
            } else {
              if (this.instituicao.tipojuridico === 'PF') {
                this.pessoaFisica = true;
                this.pessoaJuridica = false;
              } else {
                this.pessoaJuridica = true;
                this.pessoaFisica = false;
              }
              if (this.instituicao.clienteenderecocomercial == null) {
                this.instituicao.clienteenderecocomercial = new Clienteenderecocomercial();
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

  setTipoJuridico() {
    if (this.formulario.get('tipojuridico').value === 'PF') {
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
      tipo: 'f'
      });
    this.instituicao = this.formulario.value;
    this.clienteService.salvar( this.instituicao).subscribe(
      resposta => {
        this.instituicao = resposta as any;
        this.router.navigate(['/consFornecedor']);
      }
    );

    console.log(this.instituicao);
  }

  cancelar() {
    this.formulario.reset();
    this.router.navigate(['/consFornecedor']);
  }

  consultarCEP(tipo: string) {
    let cepInformado;
    if (tipo === 'c') {
        cepInformado = this.formulario.get('clienteenderecocomercial.ceccep').value;
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
}
