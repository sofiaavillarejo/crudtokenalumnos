<template>
  <div>
    <div v-if="sesion">
      <MenuComponentVue/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import MenuComponentVue from './components/MenuComponent.vue'
export default {
  name: 'App',
  components: {
    MenuComponentVue
  },
  data(){
    return{
      sesion: false
    }
  },
  mounted(){
    this.checkSession();
  },
  methods: {
    checkSession() {
      this.sesion = !!localStorage.getItem('token');
    }
  },
  watch: {
    $route() {
      this.checkSession();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
