import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
  faEdit, faTrash
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navigations/Pagination'
import { useCallback } from 'react';

function MarcasTable ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const { data, total, pagina, paginas } = useSelector(state => state.marcas)
 
  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getData('MARCAS_DATA','marcas', page, num,'nombre','ASC'))  
  },[dispatch])

  const delHandler = (pky) => {               
    dispatch(crudActions.deleteList('MARCAS_DATA','marcas',pky))            
  }
  const itemHandler = (pky) => {                   
    dispatch(crudActions.getItem('MARCAS_ITEM','marcas',pky))
  }

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage(1,12);
    }
     return () =>{            
      dispatch({type:'MARCAS_RESET_DATA'})    
    };
  }, []);




  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="90%">Nombre</th>                
                <th width="10%"></th>                             
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.nombre}</td>                      
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
 <div className="navegador" >
    <Pagination
    makeHttpRequestWithPage={ makeHttpRequestWithPage }
    total={ total}
    paginas={ paginas}
    current= { pagina} 
    pagina= {12}
    />
 </div>
 </>
  );
}

export default MarcasTable