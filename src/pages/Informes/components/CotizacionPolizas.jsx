import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function CotizacionPolizas () {  
  const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Cotizaciones x Agente, 2021'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
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
        name: 'Cotizaciones',
        colorByPoint: true,
        data: [{
            name: 'Carlos',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Alberto',
            y: 11.84
        }, {
            name: 'Franz',
            y: 10.85
        }, {
            name: 'Sandro',
            y: 4.67
        }, {
            name: 'Fernando',
            y: 4.18
        }, {
            name: 'Carla',
            y: 1.64
        }, {
            name: 'Jose',
            y: 1.6
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

export default CotizacionPolizas