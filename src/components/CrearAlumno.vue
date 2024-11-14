<template>
  <div>
    <h1>Crear alumno</h1>
    <form v-on:submit.prevent="createAlumno()">
      <label for="">idAlumno</label>
      <input type="number" v-model="usuario.idAlumno"/><br>
      <label for="">nombre</label>
      <input type="string" v-model="usuario.nombre"/><br>
      <label for="">apellidos</label>
      <input type="string" v-model="usuario.apellidos"/><br>
      <label for="">imagen</label>
      <input type="string" v-model="usuario.imagen"/><br>
      <label for="">activo</label>
      <input type="number" v-model="usuario.activo"/><br>
      <label for="">idCurso</label>
      <input type="number" v-model="usuario.idCurso"/><br>
      <hr>
      <button class="btn btn-success">Crear</button>
    </form>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos';
const service = new ServiceAlumnos();

export default {
  name: "CrearAlumno",
  data() {
    return {
      usuario: 
        {
          idAlumno: 0,
          nombre: "",
          apellidos: "",
          imagen: "",
          activo: 0,
          idCurso: 0
        }
    }
  },
  mounted() {
    if(localStorage.getItem('token') == null){
      this.$router.push("/");
    }
  },
  methods:{
    createAlumno() {
      service.createAlumno(this.usuario).then(result => {
        console.log("usuario creado correctamente" + result.data);
        this.$router.push("/alumnos");
      })
    }
  }
}
</script>

<style>

</style>