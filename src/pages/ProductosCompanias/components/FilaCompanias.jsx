import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { apiErp } from "../../../helpers";
import { productoActions } from '../../../actions'
import {  
  Row,
  Col,
  Button  
} from "reactstrap"

function FilaCompanias () {       
  const data = useSelector(state => state.productoscompania.data)  
  const dispatch = useDispatch()

  const handleChange = (pky) =>{
    dispatch({ type: 'PRODUCTOSCOMPANIA_KEY',response: pky });
    dispatch(productoActions.getListDetalle('TASAS_LISTA','tasas',pky)) 
  } 

  return (  
    <>                       	    
  	{data.map((item) => (                                 
    <Row key={item.id}>
      <Col>
        <Button
        className="descompanias text-center"
        onClick={() => handleChange(item.id)}
        >
         <img
            alt="compania"
            className="img-perfil"
            src={apiErp + "/static/images/companias/lg/" + item.Companium.filename}
          /> 
        </Button>        
      </Col>
    </Row>  
    ))}   
    </>             
    
  );
}

export default FilaCompanias