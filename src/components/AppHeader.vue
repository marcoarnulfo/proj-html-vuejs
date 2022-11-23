<script>
import { store } from '../store';
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: 'AppHeader',
    components: {
        ButtonComponent,
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>

    <header class="position-relative">
        <div class="container-fluid py-5 spacing_x nav_bar d-flex justify-content-between position-absolute">
            <div class="logo text-danger">
                <img src="../assets/img/avada-charity-logo.png" alt="">
            </div>

            <div class="links d-flex text-light gap-5 align-items-center">
                <ButtonComponent :class="link.text == 'DONATE' ? 'donate' : link.text == 'HOME' ? 'custom_color normal_link' : 'normal_link'" v-for="link in store.links" :text="link.text"/>
            </div>
        </div>
        <div class="difference text-center text-light">
            <h1 class="bigger">MAKE A DIFFERENCE</h1>
            <p class="py-1">As long as poverty, injustice & inequality persist, none of us can truly rest</p>
            <div class="d-flex justify-content-center gap-5">
                <ButtonComponent class="mission" text="OUR MISSION"/>
                <ButtonComponent class="donate_now" text="DONATE NOW"/>
            </div>

        </div>
        <img class="img-fluid img_slider" src="../assets/img/home-page-slider.jpg" alt=""> 

    </header>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;


h1{
    font-size: 3.4rem;
}
.img_slider{
    width: 100%;
    height: 900px;
    object-fit:cover;
}


.spacing_x {
    padding-left: 4rem;
    padding-right: 4rem;
}


.normal_link{
    border: 0;
    &:hover{
        background-color: $alternativeColor;
        box-shadow: 0 0 10px $grayText;
        font-weight: bold;
    }
}
.donate {
    background-color: $alternativeColor;
    border: 4px solid $alternativeColor;
    &:hover{
        box-shadow: 0 0 5px $alternativeColor;
        font-weight: bold;
    }
}
.custom_color{
    color: $alternativeColor;
    &:hover{
        color: white;
        font-weight: bold;
    }
}

.difference {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}



.donate_now{
    border: 3px solid;
    color: $alternativeColor;
    &:hover{
        box-shadow: 0 0 5px $alternativeColor;
        font-weight: bold;
    }
}

.mission{
    &:hover{
        color: $alternativeColor;
        box-shadow: 0 0 10px $alternativeColor;
        font-weight: bold;
    }
}
</style>