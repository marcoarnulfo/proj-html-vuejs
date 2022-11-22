<script>
export default {
    name: 'MomentCounts'
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-9 bg-light p-5">
                <h2><span class="underline">Every mo</span>ments counts</h2>
                <div class="pt-5">
                    <p>Curabitur non mi et turpis pharetra vulputate. Cras consequat, risus nec commodo vehicula, nisi
                        est laoreet leo, ac convallis nisi nibh id velit. Aliquam mattis metus a nisi pretium</p>
                    <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac nibh vestibulum, laoreeet
                        ipsum quis, vestibulum nisi. Carabitur non mi et turpis pharetra vulputate. Ipsum dolor sit
                        amet, consectetur adipiscing elit. Praesent ac nibh vestibulum, laoreet ipsum quis, vestibulum
                        nisi.</p>
                    <p class="pb-4">Curabitur non mi et turpis pharetra vulputate. Cras consequat, risus nec commodo vehicula, nisi
                        est laoreet leo, ac convallis nisi nibh id velit.</p>
                </div>
                <span class="mission px-4 py-2"><a href="#">OUR MISSION</a></span>
            </div>
            <div class="col-3 p-0 bg_img position-relative"> <!-- TODO aggiustare font delle scritte e le icone-->
                <div class="stats">
                    <div class="volunteers text-center py-3">
                        <span><font-awesome-icon icon="fa-regular fa-heart" /></span>
                        <span>2032</span>
                        <div>Volunteers worldwide</div>
                    </div>
                    <div class="projects text-center">
                        <span><font-awesome-icon icon="fa-solid fa-globe" /></span>
                        <span>132</span>
                        <div>Active projects</div>
                    </div>
                    <div class="donated text-center py-3">
                        <span><font-awesome-icon icon="fa-solid fa-dollar-sign" /></span>
                        <span>3.8M</span>
                        <div>Donated</div>
                    </div>
                </div>
                <!-- <img class="bg_img" src="../assets/img/home-content-bg-1.jpg" alt=""> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.underline {
    border-bottom: 4px solid yellowgreen;
    padding-bottom: 1rem;
}

.bg_img {
    background-image: url('../assets/img/home-content-bg-1.jpg');
    //background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    //height: 600px;
}

.stats{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

p{
    line-height: 2em;
}
.mission {
    background-color: #fcd66c;
    a{
        text-decoration: none;
        color: white;
    }
}
</style>