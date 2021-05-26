import { userService } from "../services";
import { history } from "../helpers";

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
        if(response.user){          
          dispatch(dlogin(response));
          history.push("/admin");          
        }else{
          
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