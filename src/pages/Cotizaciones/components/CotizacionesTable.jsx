import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions, cotizacionActions } from '../../../actions'
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
  faFilePdf,
  faPaperPlane,
  faCheck,
  faCheckDouble
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navigations/Pagination'
import CotizacionView from './CotizacionView'
import CotizacionPolizaView from './CotizacionPolizaView'


import { useCallback } from 'react';

function CotizacionsTable ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const {data, total, pagina, paginas, modalView } = useSelector(state => state.cotizaciones)  
  let usu = JSON.parse(localStorage.getItem('user'))
  const [component,setComponent] = useState()
  
  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getData('COTIZACIONES_DATA','cotizaciones',usu.id,usu.rolId,page, num))  
  },[dispatch])
     

  const toggleModalView = (item,tipo) => {    
    
    let est = modalView === true ? false : true;        
    if(item && tipo === 'pdf'){   
      dispatch(cotizacionActions.getItem('cotizaciones',item.id))
      setComponent(<CotizacionView/>)
    }
    if(item && tipo === 'poliza'){   
      dispatch(cotizacionActions.getItem('cotizaciones',item.id))
      setComponent(<CotizacionPolizaView/>)
    }    
    dispatch({type:'COTIZACIONES_VIEW',view:est})       

  };  

  const sendCotizacion = (item) => {        
      dispatch(cotizacionActions.sendCotizacion('cotizaciones',item.id))          
        
  };  

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage(1,12);
    } 
    return () =>{             
        dispatch({type:'COTIZACIONES_RESET_DATA'})        
    };   
  }, []);
  
  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="5%">#</th>
                <th width="30%">Cliente</th>
                <th width="20%">Email</th>
                <th width="15%">Producto</th>
                <th width="10%">Fecha</th>
                <th width="10%">Valor</th>                
                <th width="10%"></th>                
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.id}</td>
                      <td>{item.Cliente.nombres}</td>
                      <td>{item.Cliente.email}</td>                      
                      <td>{item.Producto.nombre}</td>
                      <td><Moment format="DD/MM/YYYY">{item.ivigencia}</Moment></td>                      
                      <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.valor)}</td>  
                      {item.contratado ? 
                      <td>
                        <Button className={"btn btn-danger btn-xs"} onClick={() => {toggleModalView(item,'pdf')}}>
                              <FontAwesomeIcon icon={faFilePdf} />
                        </Button>
                        <Button className={"btn btn-success btn-xs"}>                              
                              <FontAwesomeIcon icon={faCheckDouble} />
                        </Button>                                          
                      </td>
                        :
                                      
                       <td>
                        <Button className={"btn btn-danger btn-xs"} onClick={() => {toggleModalView(item,'pdf')}}>
                              <FontAwesomeIcon icon={faFilePdf} />
                        </Button>                  
                        <Button className={"btn btn-warning btn-xs"} onClick={() => {sendCotizacion(item)}}>
                              <FontAwesomeIcon icon={faPaperPlane} />
                        </Button>
                        <Button className={"btn btn-success btn-xs"} onClick={() => {toggleModalView(item,'poliza')}}>
                              <FontAwesomeIcon icon={faCheck} />
                        </Button>
                      </td>
                       

                      }                                      
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
        {component}
    </ModalBody>
  </Modal>
 </>
  );
}

export default CotizacionsTable