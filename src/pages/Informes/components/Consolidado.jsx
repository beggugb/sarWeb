import React, { useEffect, useState } from 'react';
import { crudActions, informeActions } from '../../../actions'
import { useDispatch } from 'react-redux'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function Consolidado () {  
  const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Movimientos CRM'
    },
    subtitle: {
        text: 'Gestión: 2021'
    },
    xAxis: {
        categories: [
            'Ene',
            'Feb',
            'Mar',
            'Abr',
            'May',
            'Jun',
            'Jul',
            'Ago',
            'Sep',
            'Oct',
            'Nov',
            'Dic'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Unidades (u)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Cotizaciones',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    },{
        name: 'Pólizas',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
  };     
  return (
      <HighchartsReact
        highcharts={Highcharts}        
        options={options}
      />  
  );
}

export default Consolidado