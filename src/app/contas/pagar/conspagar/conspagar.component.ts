import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contas } from '../../model/contas';
import { ContasService } from '../../contas.service';

@Component({
  selector: 'app-conspagar',
  templateUrl: './conspagar.component.html',
  styleUrls: ['./conspagar.component.css']
})
export class ConspagarComponent implements OnInit {

  formulario: FormGroup;
  isFirstOpen = false;
  oneAtATime = true;
  contas: Contas[];
  inscricao: Subscription;
  pagas: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contasService: ContasService,
    private activeRrouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.pagas = false;
    this.formulario = this.formBuilder.group({
      documento: [null],
      cliente: [null],
      datainicial: [null],
      datafinal: [null],
      tipoConta: ['todas'],
    });
    this.consultar();
  }

  consultar() {
      this.contasService.listarCP().subscribe(
        resposta => {
          this.contas = resposta as any;
        }
      );
      this.formulario.reset();
  }

  pesquisar() {
    // tslint:disable-next-line:prefer-const
    let documento = this.formulario.get('documento').value;
    const cliente = this.formulario.get('cliente').value;
    const datainicial = this.formulario.get('datainicial').value;
    const datafinal = this.formulario.get('datafinal').value;
    const tipoConta = this.formulario.get('tipoConta').value;
    if (cliente === null) {
       const nome = '@';
    }
    if (documento != null) {
      this.pesquisarDocumento(documento);
    } else if ((datainicial != null) && (datafinal != null ))  {
      this.pesquisarDataVencimento( tipoConta, datainicial, datafinal, cliente);
    }
  }

  pesquisarDocumento(ducumento: string) {
    this.contasService.pesquisarDocumentoCP( ducumento ).subscribe(
      resposta => {
        this.contas = resposta as any;
      }
    );
  }

  pesquisarNome(cliente: string) {
    this.contasService.listarCP().subscribe(
      resposta => {
        this.contas = resposta as any;
      }
    );
  }

  pesquisarDataVencimento( tipoConta: string, dataInicial: string, dataFinal: string, cliente: string) {
    if (tipoConta === 'todas')  {
      this.contasService.pesquisarTodasVencimentoCP(dataInicial, dataFinal, cliente).subscribe(
        resposta => {
          this.contas = resposta as any;
        }
      );
    } else if (tipoConta === 'pagas')  {
      this.contasService.pesquisarRecebidasVencimentoCP(dataInicial, dataFinal, cliente).subscribe(
        resposta => {
          this.contas = resposta as any;
        }
      );
    } else if (tipoConta === 'pagar')  {
      this.contasService.pesquisarReceberVencimentoCP(dataInicial, dataFinal, cliente).subscribe(
        resposta => {
          this.contas = resposta as any;
        }
      );
    }
  }

  editar(c: Contas) {
    this.contasService.setContas( c );
    this.router.navigate(['/cadpagar']);
  }
}
