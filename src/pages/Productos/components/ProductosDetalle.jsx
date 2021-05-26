import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { productoActions } from '../../../actions'


import RamosList from '../../Ramos/components/RamosList'
import ProductosList from '../../Productos/components/ProductosList'

import { useCallback } from 'react';

function ProductosDetalle ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)  
 
  /*const makeHttpRequestWithPage = useCallback((page, num, key) =>{
    dispatch(productoActions.getListDetalle('PRODUCTOS_LISTA','productos',key))  
  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage(1,12,1);
    }    
  }, [dispatch, makeHttpRequestWithPage, mount]);*/

    
  return (    
    <>
    <RamosList/>
    <ProductosList/>
    </>
  );
}

export default ProductosDetalle