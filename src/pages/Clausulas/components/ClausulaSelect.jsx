import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { productoActions, crudActions } from '../../../actions'
import { stylesErp } from '../../../helpers'
import {  
  Row,
  Col,  
  Button, FormGroup, Input
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from 'react';
import Select from 'react-select'

const defaultVal = (options, valor) =>{
    return options.filter(item =>
        item.valor === valor
      )
  
  }

function ClausulasSelect ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const data = useSelector(state => state.clausulas.data)
  
  const lista = useSelector(state => state.productoclausulas.lista)  
  const clista = useSelector(state => state.clausulasproductos.lista)  
  const pitem = useSelector(state => state.productos.item)
  const cdata = useSelector(state => state.productoscompania.data)
  

  const [nclausula,setNclausula] = useState('')
  const [newData,setNewData] = useState([])
   
 
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getListItems(xredux, payload))  

  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('CLAUSULAS_LISTA','clausulas');      

    }

     return () =>{            
        dispatch(crudActions.setReset('CLAUSULAS_RESET'))
    };
  }, [dispatch, makeHttpRequestWithPage, mount]);

  


  const update = (id, event) =>{           
    const newTodos = [...newData]
    const { value } = event.target
    newTodos[id].label = value    
    setNewData(newTodos)    
  }

  const save = () =>{           
   /* producto clausulas*/
    const newDat = [...lista]
    let nc = {}
    nc.clausulaId = nclausula
    nc.productoId = pitem.id
    let label = defaultVal(data,nclausula)
    nc.label = label[0].label
    newDat.push(nc)
    /* producto clausulas*/
     
   const newLista = [...clista]
   newData.map(item =>{
    return newLista.push(item)
   })
   dispatch(productoActions.setItems('CLAUSULAS_PRODUCTOS_SET',newLista))
   dispatch(productoActions.setItems('PRODUCTOS_CLAUSULAS_SET',newDat))
   setNewData([]) 
   setNclausula(0)
  }

  const changeHandler = event => {          
    const { valor } =  event ? event : ''           
    const newDate = []    
    setNclausula(valor)       
    cdata.map((item=>{
        let dat = {}    
        dat.key = item.id    
        dat.productocompaniaId = item.id
        dat.clausulaId = ''
        dat.productoId = item.productoId          
        dat.label= ''
        dat.clausulaId= valor
        return newDate.push(dat)
      }))
    setNewData(newDate)
   }
 


  return (
      <>
      <Row>      
       <Col md="12" className="desclausulas text-center">  
        Clausulas
        </Col>
      </Row>
      <Row>      
       <Col md="3" className="descompania text-center">        
        <Select                                                               
            defaultValue={data[0]}
            name="nclausula"    
            id="nclausula"                    
            options={data}      
            isClearable={true} 
            value={defaultVal(data,nclausula) || ''}
            onChange={ changeHandler }                                       
            styles={stylesErp} 
                      
        />
        </Col>        
       {newData.map((item,index) => (                                 
          <Col key={item.productocompaniaId} 
                className="descompania text-center">                                                 
              <FormGroup>                          
                  <Input
                   id={item.id}
                   type="text"
                   name={item.id}        
                   value={item.label}
                   onChange={event => update(index,event)}                    
                 />
              </FormGroup>                    
          </Col>
        ))}  
        <Col md="1">
          <Button 
            type="button"
            onClick={() => save()}
            className="btn-md btn-success">
            <FontAwesomeIcon icon={faPlus} />  
          </Button>                
        </Col>
      </Row>
      </>
  );
}

export default ClausulasSelect