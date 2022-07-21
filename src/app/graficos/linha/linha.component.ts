import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-linha',
  templateUrl: './linha.component.html',
  styleUrls: ['./linha.component.scss']
})
export class LinhaComponent {

  title = 'Gráfico de Linha';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40, 30, 34, 45, 65, 23, ],
        label: 'Vendas',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgb(101, 255, 87)',
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  
  public lineChartLegend = true;

  
}
