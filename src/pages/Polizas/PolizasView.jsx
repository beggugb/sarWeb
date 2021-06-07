import React, { useState,useEffect} from 'react';
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
import { faList } from "@fortawesome/free-solid-svg-icons";

import PolizasTable from './components/PolizasTable'
import PolizasSearch from './components/PolizasSearch'
 

function PolizasView () {     
  const dispatch = useDispatch()  
  const [activeTab, setActiveTab] = useState('1');
  


  useEffect(() =>{    

    return () =>{             
        dispatch({type:'POLIZAS_RESET'})               
        console.log('descargaPolizas')      
    };
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
          >
          <FontAwesomeIcon icon={faList} />   
          {' '} Lista
          </NavLink>  
        </NavItem>
        
      </Nav>
      </Col>
    </Row>
    <PolizasSearch/>
    <PolizasTable/>
    </div>
  </div> 
  );
}

export default PolizasView