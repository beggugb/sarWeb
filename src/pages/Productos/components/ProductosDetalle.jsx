import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { productoActions } from '../../../actions'


import RamosList from '../../Ramos/components/RamosList'
import ProductosList from '../../Productos/components/ProductosList'

import { useCallback } from 'react';

function ProductosDetalle ({getComponent}) {              
  return (    
    <>
    <RamosList/>
    <ProductosList/>
    </>
  );
}

export default ProductosDetalle