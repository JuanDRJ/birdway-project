<template>
    <div class="main-allies">
        <h1>Nuestros Aliados</h1>
        <div class="allies">
            <img class="aves-pensil" src="../../../assets/brand/LOGO/allies/avespensil.jpg" alt="clubavespensil">
            <img class="logos" src="../../../assets/brand/LOGO/allies/Logotipo-SCO-Hor.jpg" alt="clubavespensil">
            <img class="logos" src="../../../assets/brand/LOGO/allies/ebird-logo.jpg" alt="clubavespensil">
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .main-allies{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 3em;
        h1{
            text-align: center;
        }
    }

    .allies{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
.aves-pensil{
    width: 180px;
}
.logos{
    height: 120px;
}

</style>