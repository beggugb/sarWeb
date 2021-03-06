import React, { useCallback, useState,useEffect } from 'react';
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
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import EmpresaForm from '../Configuracion/components/EmpresaForm'
import CompaniasView from '../Companias/CompaniasView'
import RamosView from '../Ramos/RamosView'
import CoberturasView from '../Coberturas/CoberturasView'
import ClausulasView from '../Clausulas/ClausulasView'
import TiposView from '../Tipos/TiposView'
import MarcasView from '../Marcas/MarcasView'
import ModelosView from '../Modelos/ModelosView'

function ConfiguracionView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('datos')
  
  const getComponent = useCallback((name, tab) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'datos':
      setComponent(<EmpresaForm/>)      
      break;
      case 'companias':
      setComponent(<CompaniasView/>)      
      break;
      case 'ramos':
      setComponent(<RamosView/>)      
      break;
      case 'coberturas':
      setComponent(<CoberturasView/>)      
      break;
      case 'clausulas':
      setComponent(<ClausulasView/>)      
      break;
      case 'tipos':
      setComponent(<TiposView/>)      
      break; 
      case 'marcas':
      setComponent(<MarcasView/>)      
      break; 
      case 'modelos':
      setComponent(<ModelosView/>)      
      break;      
      default:
        console.log('nan')
      break;  
    }    
  },[activeTab])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      getComponent('datos','1')      
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
            onClick={() => { getComponent('datos', '1')}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Datos Iniciales
          </NavLink>  
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { getComponent('companias', '2')}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Compa??ias
          </NavLink>  
        </NavItem>
        
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { getComponent('ramos', '4')}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Ramos
          </NavLink>  
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { getComponent('coberturas', '5')}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Coberturas
          </NavLink>  
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '6' })}
            onClick={() => { getComponent('clausulas', '6')}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Clausulas
          </NavLink>  
        </NavItem>     

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '7' })}
            onClick={() => { getComponent('tipos', '7')}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Tipos
          </NavLink>  
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '8' })}
            onClick={() => { getComponent('marcas', '8')}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Marcas
          </NavLink>  
        </NavItem>


        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '9' })}
            onClick={() => { getComponent('modelos', '9')}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Modelos
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

export default ConfiguracionView