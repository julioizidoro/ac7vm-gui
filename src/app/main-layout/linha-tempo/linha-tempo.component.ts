import {Component, Input} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-timeline',
    templateUrl: './linha-tempo.component.html',
    styleUrls: ['./linha-tempo.component.scss']
})
export class LinhaTempoComponent {
    data: any;

    constructor() {
        this.data = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [
                {
                    label: 'Fluxo de caixa',
                    data: [65, 59, 80, 81, 56, 55, 40],
                },
            ]
        };
    }

    selectData(event) {
        console.log(event.element._index);
        console.log('valor', this.data.datasets[event.element._datasetIndex].data[event.element._index]);
        console.log('dia', this.data.labels[event.element._index] + '/2019');
        console.log('dia formatado',  moment(this.data.labels[event.element._index] + '/2019', 'DD/MM/YYYY').toDate());
    }

    @Input()
    set listDates(array: Array<any>) {
        this.data.labels = array;
        console.log(array);
    }

    @Input()
    set listChart(array: Array<any>) {
        this.data.datasets[0] = {data: array, label: 'Saldo atual'};
    }
}
