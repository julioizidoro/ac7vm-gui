import { Fluxocaixa } from './../fluxocaixa/model/fluxocaixa';
import { FluxocaixaService } from './../fluxocaixa/fluxocaixa.service';
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

    clicked: boolean;
    listaFluxoCaixa = [];
    lista: Fluxocaixa[];
    listaDate = [];
    dataInicial: Date;
    dataFinal: Date;

    constructor(
        private fluxoCaixaService: FluxocaixaService,
    ) {
        this.clicked = this.clicked === undefined ? false : true;
    }

    ngOnInit() {
        console.log('test');
        this.fluxoCaixaService. listarInicial().subscribe(
           
        resposta => {
              this.lista = resposta as any;
              let dia;
              for (let i = 0; i <= (this.lista.length - 1); i++ ) {
                this.listaFluxoCaixa.push(this.lista[i].saldoatual);
                dia = this.lista[i].data;
                this.listaDate.push(moment(dia).format('DD/MM'));
              }
              console.log(this.listaFluxoCaixa);
            }
          );


       /* for (let i = 9; i >= 0; i--) {
            this.listaDate.push(moment().subtract(i, 'days').format('DD/MM'));
        }*/
    }

    setClicked(val: boolean): void {
        this.clicked = val;
    }



}
