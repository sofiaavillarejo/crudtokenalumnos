<template>
  <div>
    <h1>Listado de alumnos</h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>apellidos</th>
          <th>imagen</th>
          <th>activo</th>
          <th>id Curso</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="alum in alumnos" :key="alum">
          <td>{{ alum.idAlumno }}</td>
          <td>{{ alum.nombre }}</td>
          <td>{{ alum.apellidos }}</td>
          <td><img :src="alum.imagen" alt="" style="width: 150px;"/></td>
          <td>{{ alum.activo }}</td>
          <td>{{ alum.idCurso }}</td>
          <td>
            <router-link class="btn btn-info" :to="'/detalles/'+ alum.idAlumno">Detalles</router-link>
            <router-link class="btn btn-warning" :to="'/update/'+ alum.idAlumno">Modificar</router-link>
            <router-link class="btn btn-danger" :to="'/delete/'+ alum.idAlumno">Eliminar</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos';
const service = new ServiceAlumnos();
export default {
  name: "AlumnosComponent",
  data(){
    return {
      alumnos: []
    }
  },
  mounted() {
    service.getAlumnos().then(result => {
      // console.log(result.data)
      this.alumnos = result.data;
    })
  }
}
</script>

<style>

</style>