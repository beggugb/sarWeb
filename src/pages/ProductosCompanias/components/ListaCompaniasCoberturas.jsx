import React from 'react';
import { useSelector } from 'react-redux'
import { apiErp } from "../../../helpers";
import {  
  Row,
  Col  
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function ListaCompaniasCoberturas () {         
  const lista = useSelector(state => state.coberturasproductos.lista)  
  return (  
    <>  	
      {lista.map((item,index) => (
        <Col key={index}>
          {item.label}
        </Col>
      ))}               
    </>
  );
}

export default ListaCompaniasCoberturas