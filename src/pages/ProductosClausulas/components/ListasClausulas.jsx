import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions'
import {      
  Row,  
  Col
} from "reactstrap"


function ListaClausulas ({pky}) {          
  const dispatch = useDispatch()  

  const lista = useSelector(state => state.productoclausulas.lista)  
  const clista = useSelector(state => state.clausulasproductos.lista)  
    
    
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
          </Row>               
       ))}    
      </>        
  );
}

export default ListaClausulas