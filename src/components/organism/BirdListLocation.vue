<template>
  <div class="main-table">
    <select v-model="apiSelect">
        <option value="https://api.ebird.org/v2/data/obs/geo/recent?lat=5.031&lng=-75.4&sort=species">Manizales</option>
        <option value="https://api.ebird.org/v2/data/obs/geo/recent?lat=11.32&lng=-74.0&sort=species">Santa Marta</option>
        <option value="https://api.ebird.org/v2/data/obs/geo/recent?lat=5.38&lng=-75.16&sort=species">Pensilvania/Caldas</option>
        <option value="https://api.ebird.org/v2/data/obs/geo/recent?lat=5.38&lng=-75.16&sort=species">Bogotá</option>
        <option value="https://api.ebird.org/v2/data/obs/geo/recent?lat=5.38&lng=-75.16&sort=species">Medellín</option>
        <option value="https://api.ebird.org/v2/data/obs/geo/recent?lat=5.38&lng=-75.16&sort=species">Chocó</option>
        <option value="https://api.ebird.org/v2/data/obs/geo/recent?lat=5.38&lng=-75.16&sort=species">Amazonas</option>
        <option value="https://api.ebird.org/v2/data/obs/geo/recent?lat=5.38&lng=-75.16&sort=species">Santander</option>
      </select>
      <button @click="getTodos()">GET API INFO </button>

      <div class="head">
        <p>Nombre Común</p>
        <p>Nombre Cientifico</p>
        <p>Localización</p>
        <p>Fecha</p>
      </div>
    <table>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>
            <a href="#">{{ todo.comName }}</a>
          </td>
          <td>{{ todo.sciName }}</td>
          <td>{{ todo.locName }}</td>
          <td>{{ todo.obsDt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/style.scss';
.main-table{
  width: 700px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1em;
  tr{
    border: gray 1px solid;
    color: $dark-blue;
    td{
      padding: 1em;
    }

  }
}

.head{
  display: flex;
  justify-content: space-evenly;
  gap:7em;  
  padding: 1em 1em 0.5em 0.5em;
  font-size: 15px;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      todos: null,
      regionCode: "CO-CAL",
      apiSelect: 'https://api.ebird.org/v2/data/obs/geo/recent?lat=5.031&lng=-75.4&sort=species',
    };
  },
  mounted() {
    console.log("hola vue desde mounted");
  },
  methods: {
    getTodos() {
      let API = this.apiSelect ;
      console.log(API)
      console.log("Hola vue desde methods");
      axios
        .get(API, {
          headers: { "X-eBirdApiToken": "33ig95hlu56o" },
        })
        .then((response) => {
          console.log(response);
          this.todos = response.data;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>


