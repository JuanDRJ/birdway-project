<template>
  <div class="main-table">
    <select v-model="apiSelect">
        <option value="1value">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <h1>{{apiSelect}}</h1>
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
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      todos: null,
      regionCode: "CO-CAL",
      apiSelect: '',
    };
  },
  mounted() {
    console.log("hola vue desde mounted");
    this.getTodos();
  },
  methods: {
    getTodos() {
      let API = "https://api.ebird.org/v2/data/obs/CO-CAL/recent";
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
