import React from 'react';
import {  
  Row,
  Col
} from "reactstrap"


import Consolidado from './components/Consolidado'
import CotizacionPolizas from './components/CotizacionPolizas'
import Pagos from './components/Pagos'




function DashboardReporte () {     
  return (
    <div className="informes">    
      <Row>
        <Col md="12">
          <Consolidado/>
        </Col>        
      </Row>
      <Row>
        <Col md="6">
          <CotizacionPolizas/>
        </Col>
        <Col md="6">
          <Pagos/>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardReporte