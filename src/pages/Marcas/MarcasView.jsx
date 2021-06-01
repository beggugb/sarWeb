import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import MarcasTable from '../Marcas/components/MarcasTable'
import MarcaForm from './components/MarcaForm'

function MarcasView () {     
  const dispatch = useDispatch()
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('MARCAS_RESET'))               
    };
  }, [dispatch]);
  
  return (
    <>         
    <MarcaForm/>
    <MarcasTable/>
    </> 
  );
}

export default MarcasView