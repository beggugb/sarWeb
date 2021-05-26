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
import ProductosList from '../Productos/components/ProductosList'
import Cotizacion from './components/Cotizacion'

function CotizadorView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('lista')  


  const getComponent = useCallback((name, tab, pky) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'productos':
      setComponent(<ProductosList getComponent={getComponent}/>) 
      dispatch(productoActions.getListDetalle('PRODUCTOS_LISTA','productos',1))
      break;      
      case 'cotizacion':
      setComponent(<Cotizacion pky={pky}/>)      
      dispatch(productoActions.getItem('productos',pky))
      dispatch(productoActions.getItems('catalogos',pky))
      break;      
      default:
        console.log('nan')
      break;  
    }    
  },[activeTab, dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      getComponent('productos','1',1)
      console.log('cargaProductos')      
   }
    return () =>{             
        dispatch(crudActions.setReset('COTIZADOR_RESET'))               
        console.log('descargaClientes')      
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
            onClick={() => { getComponent('productos', '1',1)}}
          >
          <FontAwesomeIcon icon={faList} />   
          {' '} Productos
          </NavLink>  
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { getComponent('cotizador', '2',1)}}
            >
          <FontAwesomeIcon icon={faPlusCircle} />   
          {' '} Cotización
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

export default CotizadorView