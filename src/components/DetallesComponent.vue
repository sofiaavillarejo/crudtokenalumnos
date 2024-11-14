<template>
  <div>
    <h1>Detalles del alumno</h1>
    <router-link class="btn btn-danger" to="/alumnos">Atrás</router-link>
    <hr>
    <div v-if="alumno">
      <h5>{{ alumno.idAlumno }}, {{ alumno.nombre }}, {{ alumno.apellidos }}, {{ alumno.idCurso }}</h5>
    </div>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos';
const service = new ServiceAlumnos();
export default {
  name: "DetallesComponent",
  data(){
    return {
      alumno: null    
    } 
  },
  mounted(){
    let id = this.$route.params.id;
    service.findAlumno(id).then(result => {
      // console.table(result);
      this.alumno = result;
      console.table(this.alumno);
    })
  }
}
</script>

<style>

</style>