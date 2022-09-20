<template>
    <div>
        <table>
            <tbody>
                <tr>
                    <td>tabla</td>
                    <td>tabla</td>
                    <td>tabla</td>
                    <td>tabla</td>
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
                console.log('Hola vue desde methods')
                axios
                 .get('https://catfact.ninja/fact')
                 .then(response =>{
                    console.log(response)
                 })
                 .catch (e=> console.log(e))
            }
        }
    
    }
</script>