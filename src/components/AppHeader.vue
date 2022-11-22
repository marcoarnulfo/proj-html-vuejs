<script>
export default {
    name: 'AppHeader'
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
                <div class="donate px-4 py-2">DONATE<a href="#"></a></div>
            </div>
        </div>
        <div class="difference text-center text-light">
            <h1>MAKE A DIFFERENCE</h1>
            <p>As long as poverty, injustice & inequality persist, none of us can truly rest</p>
            <div class="d-flex justify-content-center gap-5">
                <div class="mission py-1 px-4"><a href="#">OUR MISSION</a></div>
                <div class="donate_now py-1 px-4"><a href="#">DONATE NOW</a></div>
            </div>

        </div>
        <img class="img-fluid img_slider" src="../assets/img/home-page-slider.jpg" alt=""> 

    </header>

</template>

<style lang="scss" scoped>
/*
#site_header {
    background-image: url('../../src/assets/img/home-page-slider.jpg');
    background-repeat: no-repeat;
    //background-size: cover;
    height: 600px;
}
*/

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
    background-color: #fcd66c;
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
.mission{
    border: 3px solid white;
}
.donate_now{
    border: 3px solid #fcd66c;
    
    a{
        color: #fcd66c;
    }
}
</style>