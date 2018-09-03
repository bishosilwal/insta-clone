 export default class Auth {
  
  static isAuthenticated(){
    let headers = JSON.parse(window.localStorage.getItem('headers')) || false
    if(headers){
      if(moment(headers) - moment(Date.now())){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }  
  }
}; 