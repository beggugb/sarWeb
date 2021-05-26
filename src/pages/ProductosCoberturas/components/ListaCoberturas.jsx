import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { productoActions, crudActions } from '../../../actions'
import {      
  Row,
  Button,
  Col
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {        
  faTrash  
} from "@fortawesome/free-solid-svg-icons";



function ListaCoberturas ({pky}) {          
  const dispatch = useDispatch()  
  
  const lista = useSelector(state => state.productocoberturas.lista)  
  const clista = useSelector(state => state.coberturasproductos.lista)  
    
  const changeHandler = (it) => { 
    console.log(it)
    var newArray = lista
    newArray = newArray.filter(item => item !== it)

    var newArray2 = clista
    newArray2 = newArray2.filter(citem => citem.coberturaId !== it.coberturaId)

    
    dispatch(productoActions.setItems('COBERTURAS_PRODUCTOS_SET',newArray2))
    dispatch(productoActions.setItems('PRODUCTOS_COBERTURAS_SETS',newArray))

  }
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('PRODUCTOS_COBERTURAS_RESET'))
        dispatch(crudActions.setReset('COBERTURAS_PRODUCTOS_RESET'))
        console.log('descargaClientes')      
    };
  }, [dispatch]);
 
return (            
      <>      
        {lista.map((item,index ) => (                                 
          <Row key={index}>               
            <Col className="catalogo" md={3}>
              {item.label}
            </Col>             
            {clista.map((ite,index ) => {                                               
              if(item.coberturaId === ite.coberturaId){
                return <Col className="catalogo text-center" key={ite.key}>{ite.label}</Col>                                
              }
            })}
            <Col className="catalogo" md={1}>
              <Button 
              className={"btn btn-danger btn-xs"}
              onClick={() => changeHandler(item)}
            >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
            </Col>             
          </Row>               
       ))}    
      </>        
  );
}

export default ListaCoberturas