<template>
    <div class="container">
        <div class="body"></div>
       <div class="mouth"></div>
        <div class="beak"></div>
        <div class="feather"></div>
       <div class="tail"></div>
          <div class="leg"></div>
    </div>
</template>

<style scoped lang="scss">
@import '../../../assets/style.scss';


.container {
    width: 400px;
    height: 400px;
    position: relative;
}

 .body,  .mouth,  .feather,  .tail, .beak, .mouth::before, .mouth::after, .leg, .leg::after, .leg::before {
    position: absolute;
}
 .body,  .mouth, .feather, .beak, .mouth::before, .mouth::after  {
    border-radius: 50%;
}

.body {
    top: 26px;
    left: 50px;
    height: 180px;
    width: 200px;
    transform: rotate(-17deg);
    background: linear-gradient(to bottom, transparent 0%, transparent 20%, $body 20%);
    z-index: 2;
}

.mouth {    
    background:  $mouth;
    top: 20px;
    left: -175px;
    width: 100px;
    height: 100px;
    transform: rotate(-17deg);
    z-index: 5;
    animation: animate-mouth 1.5s forwards;
    animation-delay: 2s;
}

@keyframes animate-mouth {
    100% {
        left: 175px;
    }
}
.mouth::before {
    content: "";
    width: 30px;
    height: 30px;
    background: white;
    position: absolute;
    top: 20px;
    left: 40px;
}
.mouth::after {
    content: "";
    width: 10px;
    height: 10px;
    background: black;
    position: absolute;
    top: 30px;
    left: 55px;
    animation: animate-eye 1s infinite;
    animation-delay: 4s;
}

@keyframes animate-eye {
    50% {
        height: 5px;
    }
}


.feather {
    z-index: 4;
    left: 44px;
    top: -206px;
    width: 150px;
    height: 150px;
    background: linear-gradient(to bottom, transparent 0%, transparent 50%, $feather 50%);
    transform: rotate(-17deg);
    animation: animate-feather 1.5s forwards;
    animation-delay: 2s;
}

@keyframes animate-feather {
    100% {
        top: -6px;
    }
}

.tail {
    width: 150px;
    height: 60px;
    background-color: $mouth;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
    top: 92px;
    left: 324px;
    transform: rotate(-17deg);
    z-index: 3;
    animation: animate-tail 1.5s forwards;
    animation-delay: 2s;
}
@keyframes animate-tail {
    100% {
        left: -24px;
    }
}
.beak {
    height: 100px;
    width: 100px;
    background: linear-gradient(to bottom, red 0%, red 15%, transparent 15% );
    left: 224px;
    top: 240px;
    z-index: -1;
    transform: rotate(-17deg);
    animation: animate-beak 1.5s forwards;
    animation-delay: 2s;
}
@keyframes animate-beak {
    100% {
        top: 40px;
    }
}
.leg {
    background: $leg;
    height: 50px;
    width: 10px;
    border-radius: 10px;
    top: 515px;
    left: 125px;
    transform: rotate(-15deg);
    z-index: 1;
    animation: animate-leg 1.5s forwards;
    animation-delay: 2s;
}
@keyframes animate-leg {
    100% {
        top: 215px;
    }
}
.leg::before {
    bottom: -8px;
    content: "";
    width: 40px;
    height: 9px;
    background: $leg;
    border-radius: 10px;
    transform: rotate(15deg);
    z-index: -1;
}
.leg::after {
    top: -8px;
    content: "";
    width: 30px;
    height: 9px;
    background: $leg;
    border-radius: 10px;
    transform: rotate(-15deg);
    z-index: -1;
}


</style>