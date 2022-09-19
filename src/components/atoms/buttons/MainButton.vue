<template>
    <div>
        <button class="main-button">{{innerText}}</button>
    </div>
</template>

<style lang="scss" scoped>
    .main-button{
        background-color: rgb(34, 122, 34);
        color: white;
        padding: 8px;
        border: none;
        border-radius: 12px;
        width: fit-content;
    }

    .main-button:hover{
        background-color: rgb(78, 180, 78);
        color: white;  
    } 
    
</style>

<script>
export default {
  props: {
    innerText: String
  }
}
</script>
