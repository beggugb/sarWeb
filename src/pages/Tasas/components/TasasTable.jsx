import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
  faEdit, faTrash
} from "@fortawesome/free-solid-svg-icons";

function TasasTable () {          
  const dispatch = useDispatch()  
  const { data } = useSelector(state => state.tasas)  

  const delHandler = (pky) => {               
    dispatch(crudActions.deleteList('TASAS_LISTA','tasas',pky))            
  }
  const itemHandler = (pky) => {                   
    dispatch(crudActions.getItem('TASAS_ITEM','tasas',pky))
  }


  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="20%">Tipo</th>
                <th width="10%">Desde</th>
                <th width="10%">Hasta</th>
                <th width="15%">Prima Contado</th>
                <th width="15%">Prima Crédito</th>
                <th width="20%">Franquicia</th>
                <th width="10%"></th>                             
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.Tipo.nombre}</td>                      
                      <td>{new Intl.NumberFormat().format(item.desde)}</td>
                      <td>{new Intl.NumberFormat().format(item.hasta)}</td>
                      <td>{new Intl.NumberFormat().format(item.tasaContado)}</td>
                      <td>{new Intl.NumberFormat().format(item.tasaCredito)}</td>
                      <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.franquicia)}</td>
                      <td className="text-center">
                      <Button className="btn btn-success btn-xs" onClick={() => {itemHandler(item.id)}} >
                      <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <Button className="btn btn-danger btn-xs" onClick={() => {delHandler(item.id)}} >
                      <FontAwesomeIcon icon={faTrash} />
                      </Button>
                      </td>
                    </tr>  
                    ))}
            </tbody>
        )}
    </Table>    
 </div> 

 </>
  );
}

export default TasasTable