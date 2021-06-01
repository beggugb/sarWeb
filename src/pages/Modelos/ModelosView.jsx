import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import ModelosTable from '../Modelos/components/ModelosTable'
import ModeloForm from './components/ModeloForm'

function ModelosView () {     
  const dispatch = useDispatch()
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('MODELOS_RESET'))               
    };
  }, [dispatch]);
  
  return (
    <>         
    <ModeloForm/>
    <ModelosTable/>
    </> 
  );
}

export default ModelosView