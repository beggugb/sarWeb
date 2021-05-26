import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { imagenActions } from '../../../actions'
import { apiErp } from "../../../helpers";
import { Input, Row, Col, Label, FormGroup, Button, ButtonGroup } from "reactstrap";

const EmpresaImagen = () =>{
    const dispatch = useDispatch()
    const item = useSelector(state => state.empresas.item) 
    const [file,setFile] = useState('');
    const [imagePreviewUrl,setImagePreviewUrl] = useState('');    
    
    const handleSubmit = (e) =>{                     
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        dispatch(imagenActions.uploadEmpresa(
          "EMPRESA_REGISTO",
          "files",
          formData,
          item.id
        ));           
    }

    const handleImageChange = (e) => {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        setFile(file)
        setImagePreviewUrl(reader.result)    
      };    
      reader.readAsDataURL(file);      
    }

return(
    <>  
      <Row className="perfilPreview">
        <Col>
        {imagePreviewUrl ? 
          <img alt="preview" className="img-perfil" src={imagePreviewUrl} />
        :
        <img
          alt="empresa"
          className="img-perfil"
          src={apiErp + "/static/images/empresa/lg/" + item.filename}
        />}
        </Col>
      </Row>
      <Row className="perfilSave">
        <Col>
          <form onSubmit={(e) => handleSubmit(e)}>
            {item.id && (
              <>
                <Row>
                  <Col >
                    <FormGroup className="frmp">
                      <Input
                        type="file"
                        id="file"
                        name="formData"
                        onChange={(e) => handleImageChange(e)}
                      />
                      <Label for="file">seleccionar</Label>
                    </FormGroup>
                  </Col>                  
                </Row>
                <Row>                  
                  <Col >
                  <ButtonGroup>
                      <Button
                        className={
                          file
                            ? "submitButton btn-success btn-md"
                            : "submitButton disabled btn-md"
                        }
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Upload
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </>
            )}
          </form>
        </Col>
      </Row>  
    </>  
    )
}     
  
export default EmpresaImagen;
