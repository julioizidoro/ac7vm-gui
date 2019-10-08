import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-timeline',
    templateUrl: './linha-tempo.component.html',
    styleUrls: ['./linha-tempo.component.scss']
})
export class LinhaTempoComponent {
    public chartType: String = 'line';

    private chartDatasets: Array<any> = [
        {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Fluxo de caixa'}
    ];

    public chartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    public chartColors: Array<any> = [
        {
            backgroundColor: 'rgba(0,23,255,0.19)',
            borderColor: 'rgba(0, 10, 130, .7)',
            borderWidth: 2,
        }
    ];

    public chartOptions: any = {
        responsive: true
    };

    public chartClicked(e: any): void {
    }

    public chartHovered(e: any): void {
    }

    @Input()
    set listChart(array: Array<any>) {
        this.chartDatasets = [{data: array, label: 'Fluxo de caixa'}];
    }

    @Input()
    set listDates(array: Array<any>) {
        this.chartLabels = array;
    }

}
