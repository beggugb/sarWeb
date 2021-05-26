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



function ListaClausulas ({pky}) {          
  const dispatch = useDispatch()  

  const lista = useSelector(state => state.productoclausulas.lista)  
  const clista = useSelector(state => state.clausulasproductos.lista)  
    
  const changeHandler = (it) => { 
    console.log(it)
    var newArray = lista
    newArray = newArray.filter(item => item !== it)

    var newArray2 = clista
    newArray2 = newArray2.filter(citem => citem.clausulaId !== it.clausulaId)

    
    dispatch(productoActions.setItems('CLAUSULAS_PRODUCTOS_SET',newArray2))
    dispatch(productoActions.setItems('PRODUCTOS_CLAUSULAS_SETS',newArray))

  }
  
 useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('PRODUCTOS_CLAUSULAS_RESET'))
        dispatch(crudActions.setReset('CLAUSULAS_PRODUCTOS_RESET'))
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
            {clista.map((ite,indexi ) => {                                               
              if(item.clausulaId === ite.clausulaId){
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

export default ListaClausulas