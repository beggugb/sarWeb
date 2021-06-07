import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function Pagos () {  
  const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Ingresos, 2021'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '$us.'
        }
    },
     credits: {
      enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: '$us.',
        colorByPoint: true,
        data: [{
            name: 'Contado',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Crédito',
            y: 11.84
        }]
    }]
  };     
  return (
      <HighchartsReact
        highcharts={Highcharts}        
        options={options}
      />  
  );
}

export default Pagos