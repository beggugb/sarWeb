import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  crudActions } from '../../../actions'
import {      
  Row,  
  Col
} from "reactstrap"

function ListaCoberturas ({pky}) {          
  const dispatch = useDispatch()  
  
  const lista = useSelector(state => state.productocoberturas.lista)  
  const clista = useSelector(state => state.coberturasproductos.lista)  
   
   
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
          </Row>               
       ))}    
      </>        
  );
}

export default ListaCoberturas