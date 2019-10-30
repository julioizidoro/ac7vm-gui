import { Obra } from './../model/obra';
import { ObrasService } from '../obras.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Cep } from 'src/app/share/model/cep';
import { ConsultacepService } from './../../share/consultacep.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadobras',
  templateUrl: './cadobras.component.html',
  styleUrls: ['./cadobras.component.css']
})
export class CadObrasComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = true;
    oneAtATime: true;
    cep: Cep;
    obra: Obra;
    public maskCEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];



  constructor(private consultacepService: ConsultacepService,
    private router: Router,
    private formBuilder: FormBuilder,
    private obrasService: ObrasService,
    private activeRrouter: ActivatedRoute
    ) {}



  ngOnInit() {
    this.setFormulario();
    this.obra = new Obra;
    let id: number;
    this.activeRrouter.params.subscribe(params => {
      id = params.id;
      if ( id != null) {
        this.obrasService.pesquisarId(id).subscribe( resposta => {
            this.obra = resposta as Obra;
            if ( this.obra != null) {
              this.formulario = this.formBuilder.group({
                idora: this.obra.idobra,
                cei: this.obra.cei,
                nome: this.obra.nome,
                descricao: this.obra.descricao,
                datainicio: this.obra.datainicio,
                endereco: this.obra.endereco,
                numero: this.obra.numero,
                bairro: this.obra.bairro,
                cidade: this.obra.cidade,
                cep: this.obra.cep,
                estado: this.obra.estado,
                engenheiro: this.obra.engenheiro,
                previsaotermino: this.obra.previsaotermino,
                datatermino: this.obra.datatermino,
                padraoacabamento: this.obra.padraoacabamento,
                blocos: this.obra.blocos,
                unidades: this.obra.unidades
              });
            }
        });
      }
    });
  }

  consultarCEP() {
    let cepInformado = this.formulario.get('cep').value;
    cepInformado = cepInformado.replace(/\D/g, '');
    this.consultacepService.consultar(cepInformado).subscribe(
      resposta => {
        this.cep = resposta;
         this.formulario.patchValue({
            endereco: this.cep.logradouro,
            bairro: this.cep.bairro,
            cidade: this.cep.localidade,
            estado: this.cep.uf
        });
      },
      err => {
        console.log(JSON.stringify(err));
      }
    );
}

setFormulario() {
  this.formulario = this.formBuilder.group({
    idora: [null],
    cei: [null],
    nome: [null],
    descricao: [null],
    datainicio: [null],
    endereco: [null],
    numero: [null],
    bairro: [null],
    cidade: [null],
    cep: [null],
    estado: [null],
    engenheiro: [null],
    previsaotermino: [null],
    datatermino: [null],
    padraoacabamento: [null],
    blocos: [null],
    unidades: [null],
  });
}

salvar() {
  this.obra = this.formulario.value;
  this.obrasService.salvar( this.obra).subscribe(
    resposta => {
      this.obra = resposta as any;
      this.router.navigate(['consobras']);
    },
    err => {
      console.log(err.error.erros.join(' '));
    }
  );
}

cancelar() {
  this.formulario.reset();
  this.router.navigate(['/consobras']);
}

}
