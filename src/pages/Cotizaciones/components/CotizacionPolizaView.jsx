import React from 'react';
import { crudActions } from '../../../actions'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { apiErp } from "../../../helpers";
import {  
  Row,
  Col,    
  Button,
  Table  
} from "reactstrap"


import TasasCompaniaLista from '../../Tasas/components/TasasCompaniaLista'

function CotizacionPolizaView () {                    
  const dispatch = useDispatch()  
  const {item}  = useSelector(state => state.polizas)  

  const saveHandler = () => {         
     dispatch(crudActions.createList('COTIZACIONES_DATA','polizas/registro',item)) 
     dispatch({type:'COTIZACIONES_VIEW',view:false})  
   } 
  


  return (    
  	<div className="vpolizas">	
                                                        
      <Row>       
        <Col md="12" className="vcompanias">          
         <TasasCompaniaLista/>             
        </Col> 
      </Row>
      {item.valor ? 
      <>
      <Row>               
        <Col md="9" className="vpoliza"> 
          <h6>Datos de cotización a contratar</h6>
          <Table>            
            <tbody>            
            <tr>
              <td width="30%"><b>Compañia:</b></td>
              <td>{item.lcompania}</td>
            </tr>
            <tr>
              <td><b>Cliente:</b></td>
              <td>{item.lcliente}</td>
            </tr>
            <tr>
              <td><b>Email:</b></td>
              <td>{item.lemail}</td>
            </tr>
            <tr>
              <td><b>Valor asegurado:</b></td>
              <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.valor)}</td>
            </tr>
            <tr>
              <td><b>Tipo:</b></td>
              <td><b> {item.contado ? 'contado' : 'crédito'}</b></td>
            </tr>
            <tr>
              <td><b>Prima seleccionada:</b></td>
              <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.primaTotal)}</td>
            </tr>

            </tbody>                        
          </Table>          
        </Col>    
        <Col md="3" className="vpoliza"> 
          <img
            alt="compania"
            className="img-perfil"
            src={apiErp + "/static/images/companias/md/" + item.filename}
          />
        </Col>    
      </Row>
      
      <Row>
        <Col md="3" className="vpoliza"> 
          <Button 
            type="button"
            className={"btn-md btn-info"}
            onClick={() => {saveHandler()}}
            >
            <FontAwesomeIcon icon={faSave} />  
           {' '} Guardar
          </Button>
        </Col>    
      </Row>  
      </>
      : null}                                                         
    </div>  
  );
}

export default CotizacionPolizaView