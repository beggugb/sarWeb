import React, { useState,useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux'

import {  
  Row,
  Col,  
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faList } from "@fortawesome/free-solid-svg-icons";

import ClientesReporte from './ClientesReporte'
import DashboardReporte from './DashboardReporte'
import CotizacionesReporte from './CotizacionesReporte'
import PolizasReporte from './PolizasReporte'

 

function InformesView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('lista')  

  const getComponent = useCallback((name, tab, pky) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'dashboard':
      setComponent(<DashboardReporte/>)      
      break;
      case 'clientes':
      setComponent(<ClientesReporte/>)
      break;
      case 'cotizaciones':
      setComponent(<CotizacionesReporte/>)      
      break;
      case 'polizas':
      setComponent(<PolizasReporte/>)      
      break;      
      default:
        console.log('nan')
      break;  
    }    
  },[activeTab, dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      getComponent('dashboard','1',1)
      console.log('carga clientes')
      
   }    
  }, []);
  
  return (
    <div className="content">     
    <div className="main-contenido">        
       <Row>
      <Col className="tabs">
      <Nav tabs>                
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}            
            onClick={() => { getComponent('lista', '1',1)}}
          >
          <FontAwesomeIcon icon={faList} />   
          {' '} Dashboard
          </NavLink>  
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { getComponent('clientes', '2',1)}}
            >
          <FontAwesomeIcon icon={faFile} />   
          {' '} Clientes
          </NavLink>                          
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { getComponent('cotizaciones', '3',1)}}
            >
          <FontAwesomeIcon icon={faFile} />   
          {' '} Cotizaciones
          </NavLink>                          
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { getComponent('polizas', '4',1)}}
            >
          <FontAwesomeIcon icon={faFile} />   
          {' '} Polizas
          </NavLink>                          
        </NavItem>

           
      </Nav>
      </Col>
    </Row>
    {component} 
    </div>
  </div> 
  );
}

export default InformesView