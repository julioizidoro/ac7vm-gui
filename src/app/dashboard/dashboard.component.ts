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
    private listaFluxoCaixa = [440.88, 10.99, 20.30, 30.60, 390.99, 50.00, 40.4, 30.3, 20.49, 110.55];
    private listaDate = [];

    constructor() {
        this.clicked = this.clicked === undefined ? false : true;
    }

    ngOnInit() {
        for (let i = 9; i >= 0; i--) {
            this.listaDate.push(moment().subtract(i, 'days').format('DD/MM'));
        }
    }

    setClicked(val: boolean): void {
        this.clicked = val;
    }

}
