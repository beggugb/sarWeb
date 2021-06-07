import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navigations/Pagination'
import { useCallback } from 'react';

function ModelosTable ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const { data, total, pagina, paginas } = useSelector(state => state.modelos)
 
  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getData('MODELOS_DATA','modelos', page, num,'nombre','ASC'))  
  },[dispatch])

   

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage(1,12);
    }
     return () =>{            
        dispatch({type:'MODELOS_RESET_DATA'})    
    };
  }, []);

  


  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="50%">Nombre</th>
                <th width="40%">Marca</th> 
                <th width="10%"></th>                             
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.nombre}</td>
                      <td>{item.Marca.nombre}</td>                      
                      <td className="text-center">
                       <Button className="btn btn-success btn-xs" onClick={() => {getComponent('editar','2',item.id)}} >
                          <FontAwesomeIcon icon={faEdit} />
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

export default ModelosTable