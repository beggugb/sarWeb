import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { productoActions, crudActions } from '../../../actions'
import {      
    Table,    
    Button,
    Modal,
    ModalBody
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductoView from "./ProductoView"
import {      
  faFilePdf,    
  faCoins,
  faEdit,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navigations/Pagination'
import { useCallback } from 'react';

function ProductosTable ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const {data, total, paginas, pagina, modalView }= useSelector(state => state.productos)


  
  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getData('PRODUCTOS_DATA','productos',page, num,'nombre','ASC'))  
  },[dispatch])

  const toggleModalView = (item) => {    
    let est = modalView === true ? false : true;    
    
    if(item){
      dispatch(productoActions.getItem('productos',item.id))
      dispatch(productoActions.getItems('catalogos',item.id))
    }    
    dispatch(productoActions.viewModal('PRODUCTOS_VIEW',est)) 
  };

   useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage(1,12);
    }    
      return () =>{             
        dispatch({type:'PRODUCTOS_RESET_DATA'})        
     };
  }, []);

    
  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="45%">Nombre</th>
                <th width="35%">Ramo</th>
                <th width="10%">Vigencia</th>                
                <th width="10%"></th>                
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.nombre}</td>
                      <td>{item.Ramo.nombre}</td>
                      <td>{item.vigencia}</td>                      
                      <td className="text-center">
                      
                        <Button className="btn btn-success btn-xs" onClick={() => {getComponent('catalogo','2',item.id)}} >
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>                        
                        <Button className="btn btn-info btn-xs" onClick={() => {getComponent('tasas','2',item.id)}} >
                          <FontAwesomeIcon icon={faCoins} />
                        </Button> 
                        <Button className={"btn btn-danger btn-xs"} onClick={() => {toggleModalView(item)}}>
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
      <ProductoView/>    
    </ModalBody>
  </Modal>

 </>
  );
}

export default ProductosTable