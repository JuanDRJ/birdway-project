<template>
  <div>
    <table>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td><a href="#">{{ todo.comName }}</a></td>
          <td>{{ todo.sciName }}</td>
          <td>{{ todo.locName}}</td>x 
          <td>{{ todo.obsDt}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
   import axios from 'axios'

   export default{
       data(){
           return{
               todos:null,
               regionCode: 'CO-CAL'
           }
       },
       mounted(){
           console.log('hola vue desde mounted')
           this.getTodos();
       },
       methods:{
           getTodos(){
               let API= 'https://api.ebird.org/v2/data/obs/CO-CAL/recent'
               console.log('Hola vue desde methods')
               axios
                .get(API,{
                headers: {  'X-eBirdApiToken' : '33ig95hlu56o'
                }
            
                })
                .then(response =>{
                   console.log(response)
                   this.todos = response.data
                })
                .catch (e=> console.log(e))
           }
       }

   }
</script>

