import React,{useEffect} from 'react';
import { crudActions } from '../../../actions'
import { useSelector, useDispatch } from 'react-redux'
import {  
  Row,
  Col,
  Table  
} from "reactstrap"




function ClausulasList () {                    
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.polizasclausulas)  

  useEffect(() =>{        
    return () =>{             
        dispatch({type:'POLIZAS_CLAUSULAS_RESET'})        
    };
  }, []);


  return (    
    <div className="repTerminos"> 
    <Row>
      <Col>
      <h5>Clausulas</h5>               
        <Table className="table-terminos">        
        {data && (
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>                      
                      <td className="text-left">{item.Clausula.label}</td>
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

export default ClausulasList