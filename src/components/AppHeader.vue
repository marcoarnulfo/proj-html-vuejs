<script>
export default {
    name: 'AppHeader'
}
</script>

<template>

    <header id="site_header" class="position-relative">
        <div class="container-fluid spacing_x py-5 nav_bar d-flex justify-content-between ">
            <div class="logo text-danger">
                <img src="../assets/img/avada-charity-logo.png" alt="">
            </div>

            <div class="links d-flex text-light gap-5 align-items-center">
                <div><a href="#"></a>HOME</div>
                <div><a href="#"></a>MISSION</div>
                <div><a href="#"></a>CAUSES</div>
                <div><a href="#"></a>JOURNAL</div>
                <div class="donate px-4 py-2"><a href="#"></a>DONATE</div>
            </div>
        </div>
        <div class="difference text-center text-light">
            <h1>MAKE A DIFFERENCE</h1>
            <p>As long as poverty, injustice & inequality persist, none of us can truly rest</p>
            <div class="d-flex justify-content-center">
                <div class="mission"><a href="#">OUR MISSION</a></div>
                <div class="donate_now"><a href="#">DONATE</a></div>
            </div>

        </div>
        <!-- <img class="img-fluid" src="../assets/img/home-page-slider.jpg" alt="">  -->

    </header>

</template>

<style lang="scss" scoped>
#site_header {
    background-image: url('../../src/assets/img/home-page-slider.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 1000px;
}

.spacing_x {
    padding-left: 10rem;
    padding-right: 10rem;
}

.links div {
    cursor: pointer;
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
</style>