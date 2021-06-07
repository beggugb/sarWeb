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

import CompaniasTable from './components/CompaniasTable'
import CompaniaForm from './components/CompaniaForm'
import CompaniaSearch from './components/CompaniaSearch'
 

function CompaniasView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('lista')  

  const getComponent = useCallback((name, tab, pky) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'lista':
      setComponent(<><CompaniaSearch/><CompaniasTable getComponent={getComponent}/></>)      
      break;
      case 'formulario':
      dispatch({type:'COMPANIAS_RESET_ITEM'});
      setComponent(<CompaniaForm/>)
      break;
      case 'editar':
      setComponent(<CompaniaForm/>)
      dispatch(crudActions.getItem('COMPANIAS_ITEM','companias',pky))
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
      console.log('cargaCompanias')      
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
          {' '} Nueva compañia
          </NavLink>                          
        </NavItem>        
      </Nav>
      </Col>
    </Row>
    {component} 
    
  </> 
  );
}

export default CompaniasView