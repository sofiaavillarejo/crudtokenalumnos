<template>
  <div>
    <h1>Modificar alumno</h1>
    <form v-on:submit.prevent="updateAlumno()">
      <label for="">idAlumno</label>
      <input type="number" v-model="usuario.idAlumno" disabled /><br>
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
      <button class="btn btn-success">Modificar</button>
    </form>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos';
const service = new ServiceAlumnos();
export default {
  name: "UpdateAlumno",
  data() {
    return {
      usuario: 
        {
          idAlumno: this.$route.params.id,
          nombre: "",
          apellidos: "",
          imagen: "",
          activo: 0,
          idCurso: 0
        }
    }
  },
  methods: {
    updateAlumno(){
      service.updateAlumno(this.usuario).then(result => {
        console.log("usuario modificado correctamente" + result);
        this.$router.push("/detalles/"+this.usuario.idAlumno);
      })
    }
  }
}
</script>

<style>

</style>