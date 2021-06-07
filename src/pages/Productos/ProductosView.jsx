import React, { useState,useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { productoActions,crudActions } from '../../actions'
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
import ProductosTable from './components/ProductosTable'
import ProductoSearch from './components/ProductoSearch'
import ProductoForm from './components/ProductoForm'
import ProductoDetalle from './components/ProductoDetalle'
import TasasView from '../Tasas/TasasView'

function ClientesView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('lista')  


  const getComponent = useCallback((name, tab, pky) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'lista':
      setComponent(<><ProductoSearch/><ProductosTable getComponent={getComponent}/></>)      
      break;
      case 'formulario':
      setComponent(<ProductoForm getComponent={getComponent}/>)
      break;      
      case 'catalogo':
      setComponent(<ProductoDetalle pky={pky}/>)      
      dispatch(productoActions.getItem('productos',pky))
      dispatch(productoActions.getItems('catalogos',pky))      
      break;
      case 'tasas':
      setComponent(<TasasView pky={pky}/>)      
      dispatch(productoActions.getItem('productos',pky))
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
      console.log('cargaProductos')      
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
          {' '} Nuevo producto
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

export default ClientesView