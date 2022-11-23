<script>
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: 'AppHeader',
    components: {
        ButtonComponent,
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
                <div><a href="#">HOME</a></div>
                <div><a href="#">MISSION</a></div>
                <div><a href="#">CAUSES</a></div>
                <div><a href="#">JOURNAL</a></div>
                <ButtonComponent class="donate text-light" text="DONATE"/>
                <!-- <div class="donate px-4 py-2">DONATE<a href="#"></a></div> -->
            </div>
        </div>
        <div class="difference text-center text-light">
            <h1 class="bigger">MAKE A DIFFERENCE</h1>
            <p class="py-1">As long as poverty, injustice & inequality persist, none of us can truly rest</p>
            <div class="d-flex justify-content-center gap-5">
                <ButtonComponent text="OUR MISSION"/>
                <ButtonComponent class="custom_color" text="DONATE NOW"/>
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



.donate {
    background-color: $alternativeColor;
    border: 4px solid $alternativeColor;
}
.custom_color{
    color: $alternativeColor;
}

.difference {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

a{
    text-decoration: none;
    color: white;
}

.donate_now{
    border: 3px solid;
    color: $alternativeColor;
}
</style>