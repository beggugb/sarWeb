import React, { useState  } from 'react';
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

import CotizacionesTable from './components/CotizacionesTable'
import CotizacionesSearch from './components/CotizacionesSearch'
 

function CotizacionsView () {         
  const [activeTab, setActiveTab] = useState('1');  


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
    <><CotizacionesSearch/><CotizacionesTable/></>
    </div>
  </div> 
  );
}

export default CotizacionsView