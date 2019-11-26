
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Instituicao } from '../model/instituicao';
import { FornecedorService } from '../fornecedor.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Usuario } from 'src/app/usuario/model/usuario';
import { AuthService } from 'src/app/usuario/login/auth.service';


@Component({
  selector: 'app-consfornecedores',
  templateUrl: './consfornecedores.component.html',
  styleUrls: ['./consfornecedores.component.css']
})
export class ConsuFornecedoresComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime = true;
    instituicao: Instituicao[];
    rotaAnterior: string;
    habilitarConsulta = true;
    inscricao: Subscription;
    usuario: Usuario;


  constructor(
    private fornecedorService: FornecedorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRrouter: ActivatedRoute,
    private authService: AuthService,
    ) {}



  ngOnInit() {
    this.usuario = this.authService.usuario;
    this.inscricao = this.activeRrouter.params.subscribe(params => {
      this.rotaAnterior = params.rota;
  });
  if (this.rotaAnterior === null) {
      this.habilitarConsulta = false;
  } else {
      this.habilitarConsulta = true;
  }
    this.formulario = this.formBuilder.group({
      nome: [null]
    });
    this.consultar();
  }

  consultar() {
    this.fornecedorService.listar('f').subscribe(
      resposta => {
        this.instituicao = resposta as any;
      }
    );
  }

  pesquisar() {
    const nome = this.formulario.get('nome').value;
    this.fornecedorService.pesquisarNome(nome).subscribe(
     resposta => {
       this.instituicao = resposta as any;
     }
   );
 }

 editar(instituicao: Instituicao) {
   this.router.navigate([ 'cadFornecedores' ,   instituicao.idinstituicao ]);
 }

 pesquisarLimpar() {
   this.formulario.reset();
   this.consultar();
 }

 selecionarCliente(clienteSelecionado: Instituicao) {
  console.log(clienteSelecionado.nome);
  if (this.rotaAnterior === 'contasp') {
      this.router.navigate(['/cadpagar', clienteSelecionado.idinstituicao, 'conscliente']);
  }
}




}
