import { userService } from "../services";
import { history } from "../helpers";
import {toastr} from 'react-redux-toastr'
export const userActions = {  
  login,
  logout,
};

/*---------------------------------------------------------------*/
function login(user) {
  return (dispatch) => {    
    userService
      .login(user)
      .then((response) => {                         
        if(response.user.usuario){          
          dispatch(dlogin(response));
          history.push("/admin");          
        }else{
           toastr.error('Error', response.user.message)
        }                
      })
      .catch((err) => {  
        
      });
  };
}

export function dlogin(resp) {     
  
  return {
    type: "LOGIN_SUCCESS",
    response: resp.user.usuario
  };
}
/*---------------------------------------------------------------*/
function logout() {    
  return (dispatch) => {
    userService.logout();
    dispatch(loginOut());
    history.push("/admin");
  };
}

export function loginOut() {
  return {
    type: "LOGIN_LOGOUT",
  };
}
/*---------------------------------------------------------------*/