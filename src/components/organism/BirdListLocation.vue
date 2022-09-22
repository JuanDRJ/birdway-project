<template>
  <div>
    <table>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
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
               /* regionCode: 'CO-CAL' */
           }
       },
       mounted(){
           console.log('hola vue desde mounted')
           this.getTodos();
       },
       methods:{
           getTodos(){
               /* let code = this.regionCode; */
               console.log('Hola vue desde methods')
               axios
                .get(`https://api.ebird.org/v2/data/obs/CO-CAL/recent`,{
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

