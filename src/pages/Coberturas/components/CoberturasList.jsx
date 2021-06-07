import React,{useEffect} from 'react';
import { crudActions } from '../../../actions'
import { useSelector, useDispatch } from 'react-redux'
import {  
  Row,
  Col,
  Table  
} from "reactstrap"




function CoberturasList () {                    
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.polizascoberturas)  

  useEffect(() =>{        
    return () =>{             
        dispatch({type:'POLIZAS_COBERTURAS_RESET'})        
    };
  }, []);


  return (    
    <div className="repTerminos"> 
    <Row>
      <Col>
      <h5>Coberturas</h5>               
        <Table className="table-terminos">        
        {data && (
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>                      
                      <td className="text-left">{item.Cobertura.label}</td>
                      <td>{item.label}</td>                                
                    </tr>  
                    ))}
            </tbody>
        )}
    </Table>      
   </Col>
  </Row>

    </div>  
  );
}

export default CoberturasList