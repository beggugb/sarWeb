import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions'
import {      
    Table,    
    Button,
    Modal,
    ModalBody
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from 'react-moment'

import {     
  faTimes,
  faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navigations/Pagination'
import PolizaView from './PolizaView'



import { useCallback } from 'react';

function PolizasTable ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const {data, total, pagina, paginas, modalView } = useSelector(state => state.polizas)  
  let usu = JSON.parse(localStorage.getItem('user'))
  
  
  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getData('POLIZAS_DATA','polizas',usu.id,usu.rolId,page, num))  
  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage(1,12);
    }    
  }, [dispatch, makeHttpRequestWithPage, mount]);

    

  const toggleModalView = (itemId) => {            
    let est = modalView === true ? false : true;
    if(itemId){
        dispatch(crudActions.getItemPoliza('polizas',itemId))                      
    }            
    
    dispatch({type:'POLIZAS_VIEW',view:est})       
  };    
  
  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="5%">#</th>
                <th width="30%">Cliente</th>
                <th width="15%">Producto</th>
                <th width="15%">Ramo</th>
                <th width="15%">Vigencia</th>
                <th width="10%">P.Total</th>                
                <th width="10%"></th>                
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.id}</td>
                      <td>{item.Cliente.nombres}</td>                      
                      <td>{item.Producto.nombre}</td>
                      <td>{item.Ramo.nombre}</td>
                      <td><Moment format="DD/MM/YYYY">{item.ivigencia}</Moment> -- <Moment format="DD/MM/YYYY">{item.fvigencia}</Moment></td>                      
                      <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.primaTotal)}</td>                                                             
                       <td>
                        <Button className={"btn btn-danger btn-xs"} onClick={() => {toggleModalView(item.id)}}>
                              <FontAwesomeIcon icon={faFilePdf} />
                        </Button>                                          
                      </td>                                                            
                    </tr>  
                    ))}
            </tbody>
        )}
    </Table>    
 </div> 
 <div className="navegador" >
    <Pagination
    makeHttpRequestWithPage={ makeHttpRequestWithPage }
    total={total}
    paginas={paginas}
    current= {pagina} 
    pagina= {12}
    />
 </div>
 <Modal isOpen={modalView} toggle={toggleModalView}>
      <Button className="btn-view btn-danger"  onClick={() => toggleModalView()} >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    <ModalBody>
        <PolizaView/>
    </ModalBody>
  </Modal>
 </>
  );
}

export default PolizasTable