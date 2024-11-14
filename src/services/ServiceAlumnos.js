import Global from "@/Global";
import axios from "axios";

export default class ServiceAlumnos {
  login(usuario){
    return new Promise(function(resolve) {
      const token = localStorage.getItem('token');
      let request = "api/auth/login";
      const headers = {'Authorization' : `Bearer ${token}`}
      let url = Global.urlApi + request;
      axios.post(url, usuario, {headers}).then(response => {
        resolve(response);
      })
    })
  }

  getAlumnos() {
    return new Promise(function(resolve){
      const token = localStorage.getItem('token');
      let request = "api/alumnos/alumnostoken";
      const headers = {'Authorization' : `Bearer ${token}`};
      let url = Global.urlApi + request;
      axios.get(url, {headers}).then(response => {
        resolve(response);
      })
    })
  }

  findAlumno(idAlumno){
    return new Promise(function(resolve){
      const token = localStorage.getItem('token');
      let request = "api/alumnos/findalumnotoken/" + idAlumno;
      const headers = {'Authorization' : `Bearer ${token}`};
      let url = Global.urlApi + request;
      axios.get(url, {headers}).then(response => {
        let alumno = response.data;
        // console.table(alumno);
        resolve(alumno);
      })
    })
  }

  createAlumno(usuario){
    return new Promise(function(resolve) {
      const token = localStorage.getItem('token');
      let request = "api/alumnos/insertalumnotoken";
      const headers = {'Authorization' : `Bearer ${token}`}
      let url = Global.urlApi + request;
      axios.post(url, usuario, {headers}).then(response => {
        resolve(response);
      })
    })
  }

  updateAlumno(usuario){
    return new Promise(function(resolve) {
      const token = localStorage.getItem('token');
      let request = "api/alumnos/updatealumnotoken";
      console.log(usuario);
      const headers = {'Authorization' : `Bearer ${token}`}
      let url = Global.urlApi + request;
      axios.put(url, usuario, {headers}).then(response => {
        resolve(response);
      })
    })
  }
  deleteAlumno(id){
    return new Promise(function(resolve) {
      const token = localStorage.getItem('token');
      let request = "api/alumnos/deletealumnotoken/" + id;
      const headers = {'Authorization' : `Bearer ${token}`}
      let url = Global.urlApi + request;
      axios.delete(url, {headers}).then(response => {
        resolve(response);
      })
    })
  }
}