import Global from "@/Global";
import axios from "axios";

export default class ServiceCursos {
  getCursos() {
    return new Promise(function(resolve){
      const token = localStorage.getItem('token');
      let request = "api/alumnos/cursostoken";
      const headers = {'Authorization' : `Bearer ${token}`};
      let url = Global.urlApi + request;
      axios.get(url, {headers}).then(response => {
        resolve(response);
      })
    })
  }

  getAlumnosCurso(idcurso){
    return new Promise(function(resolve){
      const token = localStorage.getItem('token');
      let request = "api/alumnos/filtrarcurso/" + idcurso;
      const headers = {'Authorization' : `Bearer ${token}`};
      let url = Global.urlApi + request;
      axios.get(url, {headers}).then(response => {
        resolve(response);
      })
    })
  }
}