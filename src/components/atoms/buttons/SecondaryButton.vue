<template>
    <div>
        <button class="secondary-button">{{innerText}}</button>
    </div>
</template>

<style lang="scss" scoped>
    .secondary-button{
        background-color: rgb(34, 59, 122);
        color: white;
        padding: 8px;
        border: none;
        border-radius: 12px;
        width: fit-content;
    }

    .secondary-button:hover{
        background-color: rgb(78, 114, 180);
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