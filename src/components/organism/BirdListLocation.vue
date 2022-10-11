<template>
  <div class="main-table">
    <p>Observaciones recientes en una región:</p>
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
      <button class="mybutton" @click="getTodos()">MOSTRAR</button>


      <div v-show="charge" class="loader">
        <div class="lds-dual-ring"></div>
      </div>

      <div v-show="active" class="head">
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
  button{
    background-color: $blue;
    color: $white;
    font-weight: bold;
    font-size: 15px;
    width: max-content;
    padding: 0.6em;
    border-radius: 30px;
    border: none;
    margin-top: 1em;
  }

  .mybutton:hover{
      background-color: rgb(18, 62, 193);
      transition: all 300ms;
  }

  select{
    font-size: 18px;
    padding: 0.6em;
    border-radius: 15px;
    border: none;
    stroke: none;
  }
  
  p{
    font-size: 18px;
  }
  tr{
    border: gray 1px solid;
    color: $dark-blue;
    border-radius: 20px;
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
  border: 1px gray solid;
}

.lds-dual-ring {
  display: inline-block;
  width: 120px;
  height: 120px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid $blue;
  border-color: $blue transparent $blue transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader{
  display: flex;
  justify-content: center;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      todos: null,
      regionCode: "CO-CAL",
      active: false,
      charge: false,
      apiSelect: 'https://api.ebird.org/v2/data/obs/geo/recent?lat=5.031&lng=-75.4&sort=species',
    };
  },
  mounted() {
    console.log("hola vue desde mounted");
  },
  methods: {
    getTodos() {
      this.charge = true;
       
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
          this.charge = false;
          this.active = true;  
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>


