import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  
  Row,
  Col,
  Table  
} from "reactstrap"




function PagosList () {                    
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.pagos)  

  useEffect(() =>{        
    return () =>{             
        dispatch({type:'PAGOS_RESET'})        
    };
  }, []);


  return (    
    <div className="repTerminos"> 
    <Row>
      <Col>
      <h5>Pagos</h5>               
        <Table className="table-terminos">       
          <thead>
            <tr>  
                <th width="10%">#</th>
                <th width="30%">Fecha pago</th>
                <th width="30%">Monto</th>
                <th width="30%">Estado</th>                
            </tr>
          </thead> 
        {data && (
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>                                            
                      <td>{item.ncuota}</td>   
                      <td>{item.fechaPago}</td>   
                      <td>
                      {new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.monto)}
                      </td>                             
                      <td>{item.estado}</td>
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

export default PagosList