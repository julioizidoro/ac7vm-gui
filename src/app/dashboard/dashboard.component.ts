import { AuthService } from './../usuario/login/auth.service';
import { Fluxocaixa } from './../fluxocaixa/model/fluxocaixa';
import { FluxocaixaService } from './../fluxocaixa/fluxocaixa.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { FluxocaixaModule } from '../fluxocaixa/fluxocaixa.module';
import { Usuario } from '../usuario/model/usuario';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    @ViewChild('sidenav', { static: true }) sidenav: ElementRef;

    clicked: boolean;
    listaFluxoCaixa = [];
    lista: Fluxocaixa[];
    listaDate = [];
    dataInicial: Date;
    dataFinal: Date;
    view = false;
    ultimaData: Date;
    usuario: Usuario;

    constructor(
        private fluxoCaixaService: FluxocaixaService,
        private authService: AuthService,
    ) {
        this.clicked = this.clicked === undefined ? false : true;
        this.usuario = authService.usuario;
    }

    async ngOnInit() {
        await this.fluxoCaixaService.listarInicial().subscribe(
            resposta => {
                this.lista = resposta as any;
                if (this.lista != null) {
                    let dia;
                    for (let i = 0; i <= (this.lista.length - 1); i++) {
                        this.listaFluxoCaixa.push(this.lista[i].saldoatual);
                        dia = this.lista[i].data;
                        this.listaDate.push(moment(dia).format('DD/MM'));
                    }
                    this.view = true;
                }
            });
    }

    setClicked(val: boolean): void {
        this.clicked = val;
    }

    consultarFluxoCaixa(tipo: String) {
        if (tipo === 'v') {
            this.ultimaData = this.lista[0].data;
            this.ultimaData.setDate(this.ultimaData.getDate() - 1);
        } else {
            this.ultimaData = this.lista[this.lista.length - 1].data;
            this.ultimaData.setDate(this.ultimaData.getDate() + 1);
        }
        this.listaFluxoCaixa.length = 0;
        this.lista.length = 0;
        this.listaDate.length = 0;
        this.fluxoCaixaService.listarInicial().subscribe(
            resposta => {
                this.lista = resposta as any;
                if (this.lista != null) {
                    let dia;
                    for (let i = 0; i <= (this.lista.length - 1); i++) {
                        this.listaFluxoCaixa.push(this.lista[i].saldoatual);
                        dia = this.lista[i].data;
                        this.listaDate.push(moment(dia).format('DD/MM'));
                    }
                    this.view = true;
                }
            });

    }


}
