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

import AgentesTable from './components/AgentesTable'
import AgentesSearch from './components/AgenteSearch'
import AgenteForm from './components/AgenteForm'
 

function AgentesView () {     
 
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('lista')   

   const getComponent = (name, tab, pky) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'lista':
      setComponent(<><AgentesSearch/><AgentesTable getComponent={getComponent}/></>)      
      break;
      case 'formulario':
      dispatch({type:'AGENTE_RESET_ITEM'});
      setComponent(<AgenteForm/>)
      break;
      case 'editar':
      setComponent(<AgenteForm/>)      
      dispatch({type:'AGENTE_SET_ITEM',response: pky});
      break;      
      default:
        console.log('nan')
      break;  
    }    
  }


useEffect(() =>{    
    if(!mount) {
      setMount(true);
      getComponent('lista','1',1)
      console.log('cargaAgentes')      
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
          {' '} Lista
          </NavLink>  
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { getComponent('formulario', '2',1)}}
            >
          <FontAwesomeIcon icon={faPlusCircle} />   
          {' '} Nuevo agente
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

export default AgentesView