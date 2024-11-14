import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import AlumnosComponent from "./components/AlumnosComponent.vue";
import DetallesComponent from "./components/DetallesComponent.vue";
import CrearAlumno from "./components/CrearAlumno.vue";
import UpdateAlumno from "./components/UpdateAlumno.vue";
import DeleteAlumno from "./components/DeleteAlumno.vue";
import AlumnosCurso from "./components/AlumnosCurso.vue";

const myRoutes = [
  {path:"/", component: LoginComponent},
  {path:"/alumnos", component: AlumnosComponent},
  {path:"/detalles/:id", component: DetallesComponent},
  {path:"/crear", component: CrearAlumno},
  {path:"/update/:id", component: UpdateAlumno},
  {path:"/delete/:id", component: DeleteAlumno},
  {path:"/alumnoscurso/:id", component: AlumnosCurso},

]

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

export default router;