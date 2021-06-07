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

import ModelosTable from './components/ModelosTable'
import ModeloForm from './components/ModeloForm'
import ModeloSearch from './components/ModeloSearch'
 

function ModelosView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('lista')  

  const getComponent = useCallback((name, tab, pky) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'lista':
      setComponent(<><ModeloSearch/><ModelosTable getComponent={getComponent}/></>)      
      break;
      case 'formulario':
      dispatch({type:'MODELOS_RESET_ITEM'});
      setComponent(<ModeloForm/>)
      break;
      case 'editar':
      setComponent(<ModeloForm/>)
      dispatch(crudActions.getItemModelo('MODELOS_ITEM','modelos',pky))
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
      console.log('cargaModelos')      
   }
    
  }, []);
  
  return (
    <>       
       <Row className="mt-2">
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
          {' '} Nuevo modelo
          </NavLink>                          
        </NavItem>        
      </Nav>
      </Col>
    </Row>
    {component} 
    
  </> 
  );
}

export default ModelosView