import { Usuario } from 'src/app/usuario/model/usuario';
import { AuthService } from './../../usuario/login/auth.service';
import { ContasService } from './../../contas/contas.service';
import {ClienteService} from '../cliente.service';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Instituicao} from '../model/instituicao';
import {listLazyRoutes} from '@angular/compiler/src/aot/lazy_routes';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

@Component({
    selector: 'app-consucliente',
    templateUrl: './consucliente.component.html',
    styleUrls: ['./consucliente.component.css']
})
export class ConsuclienteComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime: true;
    instituicao: any[];
    rotaAnterior: string;
    habilitarConsulta = true;
    inscricao: Subscription;
    dataInicial: Date;
    dataFinal: Date;
    usuario: Usuario;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private clienteService: ClienteService,
        private activeRrouter: ActivatedRoute,
        private contasService: ContasService,
        private authService: AuthService,
    ) {
    }


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
            nome: [null],
            email: [null],
        });
        this.consultar();
    }


    consultar() {
        this.formulario.reset();
        this.clienteService.listar('c').subscribe(
            resposta => {
                this.instituicao = resposta as any;
            }
        );
    }

    pesquisar() {
        const nome = this.formulario.get('nome').value;
        const email = this.formulario.get('email').value;
        this.clienteService.pesquisar(nome, email).subscribe(
            resposta => {
                this.instituicao = resposta as any;
            }
        );
        console.log('test');
    }

    editar(instituicao: Instituicao) {
        this.clienteService.setCliente(instituicao);
        this.router.navigate(['/cadCliente']);
    }

    selecionarCliente(clienteSelecionado: Instituicao) {
        if (this.rotaAnterior === 'bens') {
            this.router.navigate(['/cadbens', 'e', clienteSelecionado.idinstituicao, 'conscliente']);
        } else if (this.rotaAnterior === 'contasr') {
            this.contasService.setInstituicao(clienteSelecionado);
            this.router.navigate(['/cadreceber']);
        } else if (this.rotaAnterior === 'contasp') {
            this.contasService.setInstituicao(clienteSelecionado);
            this.router.navigate(['/cadpagar']);
        }
    }


}
