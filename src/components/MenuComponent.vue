<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/crear">Crear alumno</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Cursos</a>
              <ul class="dropdown-menu" >
                <li v-for="curso in cursos" :key="curso" class="bg-dark"><router-link class="nav-link" :to="'/alumnoscurso/' + curso">{{curso}}</router-link></li>
              </ul>
            </li>
            <button class="btn btn-danger" @click="cerrar()" v-if="sesion">Cerrar sesion</button>
          </ul>
          <form role="search">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search">
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceCursos from '@/services/ServiceCursos';
const service = new ServiceCursos();
export default {
  name: "MenuComponent",
  data() {
    return {
      cursos: [],
      sesion: false
    }
  },
  mounted(){

    service.getCursos().then(result => {
      console.log(result.data);
      this.cursos = result.data;
    })
  },
  methods: {
    cerrar(){
      alert("Has cerrado la sesión");
      localStorage.removeItem('token');
      this.$router.push("/");
    },
    
  },
  updated() {
      if(localStorage.getItem('token') == null){
        this.sesion = false;
      } else {
        this.sesion = true;
      }
  }

}
</script>

<style>

</style>