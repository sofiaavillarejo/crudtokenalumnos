<template>
  <div>
    <h1>Eliminar alumno</h1>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos';
const service = new ServiceAlumnos();
export default {
  name: "DeleteAlumno",
  mounted(){
    let id = this.$route.params.id;
    service.deleteAlumno(id).then(result => {
      console.log("Alumno eliminado correctamente" + result);
      this.$router.push("/alumnos");
    })
  }
}
</script>

<style>

</style>