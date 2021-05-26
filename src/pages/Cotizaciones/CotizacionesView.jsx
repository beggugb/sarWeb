import React, { useState,useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions'
import {  
  Row,
  Col,  
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faList } from "@fortawesome/free-solid-svg-icons";

import CotizacionesTable from './components/CotizacionesTable'
import CotizacionesSearch from './components/CotizacionesSearch'
 

function CotizacionsView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('lista')  

  const getComponent = useCallback((name, tab, pky) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'lista':
      setComponent(<><CotizacionesSearch/><CotizacionesTable getComponent={getComponent}/></>)      
      break;
      case 'formulario':
      
      break;
      case 'editar':
      
      dispatch(crudActions.getItem('COTIZACIONS_ITEM','cotizacions',pky))
      break;      
      default:
        console.log('nan')
      break;  
    }    
  },[activeTab, dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      getComponent('lista','1',1)
      console.log('cargaCotizacions')      
   }
    return () =>{             
        dispatch(crudActions.setReset('COTIZACIONS_RESET'))               
        console.log('descargaCotizacions')      
    };
  }, [getComponent, mount, dispatch]);
  
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
          {' '} Lista
          </NavLink>  
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { getComponent('formulario', '2',1)}}
            >
          <FontAwesomeIcon icon={faPlusCircle} />   
          {' '} Nuevo cotizacion
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

export default CotizacionsView