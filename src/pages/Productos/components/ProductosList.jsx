import React from 'react';
import { useSelector } from 'react-redux'
import {  
  Card
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {        
  faCopy
} from "@fortawesome/free-solid-svg-icons";


function ProductosList ({getComponent}) {            
const data = useSelector(state => state.productos.data)   
     
return (    
  <div className="lproductos">
    {data.map((item) => (                                 
        <Card           
          className="producto" 
          key={item.id}
          onClick={() => {getComponent('cotizacion','2',item.id)}}
          >                            
          <div className="pramo">{item.Ramo.nombre}</div>    
          <div className="pimagen">          
          <FontAwesomeIcon icon={faCopy} />
          </div>
          <div className="pdetalle">
          {item.nombre}
          </div>            
        </Card>

       ))} 
    </div>    
  );
}

export default ProductosList