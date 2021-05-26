import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import RamosTable from '../Ramos/components/RamosTable'
import RamoForm from './components/RamoForm'

function RamosView () {     
  const dispatch = useDispatch()
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('RAMOS_RESET'))               
    };
  }, [dispatch]);
  
  return (
    <>         
    <RamoForm/>
    <RamosTable/>
    </> 
  );
}

export default RamosView