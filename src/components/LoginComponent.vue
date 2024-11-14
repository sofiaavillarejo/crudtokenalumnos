<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <form v-on:submit.prevent="login()">
      <label>Introduce tu nombre:</label>
      <input type="text" v-model="usuario.userName"/><br/>
      <label>Introduce tu contraseña</label>
      <input type="text" v-model="usuario.password"/><br/>
      <button>Entrar</button>
    </form>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos';
const service = new ServiceAlumnos();
export default {
  name: "LoginComponent",
  data(){
    return {
      usuario: {
        userName: "",
        password: ""
      }
    }
  },
  methods: {
    login(){
      console.log(this.usuario.userName, this.usuario.password);
      service.login(this.usuario).then(result => {
        // console.log(result);
        const token = result.data.response;
        localStorage.setItem('token', token);
        this.$root.checkSession();
        this.$router.push("/alumnos");

      })
    }
  }
}
</script>

<style>

</style>