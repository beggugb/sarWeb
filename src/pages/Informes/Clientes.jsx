import React, { useRef, useEffect }  from 'react'
import Moment from 'react-moment';
import { crudActions } from '../../actions/crud.actions'
import {     
  Table,    
  Button } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'


import ReactToPrint from "react-to-print";


 export class ComponentToPrint extends React.PureComponent {
  render() {
    
    return (
      <>
  <div className="invoice-box">
  <div className="sol">

    <h5 className="text-center mb-2">INFORME DE CLIENTE REGISTRADOS</h5>   
    <h6 className="text-center" >
    ( <Moment format="DD/MM/YYYY">{this.props.pdesde}</Moment> ) - 
    ( <Moment format="DD/MM/YYYY">{this.props.phasta}</Moment> )
    </h6> 
    <h6 className="ml-3" >Total: { this.props.pdetalle }</h6>      
 </div>

    <div className="sol"> 
          <Table className="table-reporteb">
            <thead>
                <tr>  
                    <th width="5%">#</th>
                    <th width="10%" className="text-dark">Fecha</th>
                    <th width="50%" className="text-dark">Nombre</th>
                    <th width="20%" className="text-dark">CI</th>
                    <th width="20%" className="text-dark">Teléfono</th>          
                </tr>
            </thead>
        {this.props.pdata.data && (
            <tbody>
                {this.props.pdata.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>                      
                    <td><Moment format="DD/MM/YYYY">{item.createdAt}</Moment></td>                           
                    <td>{item.nombres}</td>
                    <td>{item.ci}</td>
                    <td>{item.telefono}</td>
                    </tr>  
                    ))}
            </tbody>
        )}
         </Table>                    
    </div>    
      <p><b> Usuario : </b>{this.props.puser.nombre}</p>    
    </div>     
    </> 
    );
  }}


function Clientes () {    
  const componentRef = useRef();   
  const {detalle, clientes, desde, hasta } = useSelector(state => state.informes)  
  const user = useSelector(state => state.usuarios.item)  
  const dispatch = useDispatch()

  

  useEffect(() =>{      
    return () =>{             
      dispatch(crudActions.setReset('INFORMES_RESET'))               
    };
  }, [dispatch]);

return(
    <div className="creporte">
        <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}          
            puser={user}
            pdetalle={detalle}
            pdata={clientes}
            pdesde={desde}
            phasta={hasta}
        />
    </div>
     )
}


export default Clientes