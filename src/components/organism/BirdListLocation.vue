<template>
    <div>
        <table>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <td>{{todo.id}}</td>
                    <td>{{todo.title}}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                todos:null
            }
        },
        mounted(){
            console.log('hola vue desde mounted')
            this.getTodos();
        },
        methods:{
            getTodos(){
                /* console.log('Hola vue desde methods') */
                axios
                 .get('https://jsonplaceholder.typicode.com/posts')
                 .then(response =>{
                    /* console.log(response)   */ 
                    this.todos = response.data
                 })
                 .catch (e=> console.log(e))
            }
        }
    
    }
</script>