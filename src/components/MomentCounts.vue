<script>
import ButtonComponent from './ButtonComponent.vue';
import TitleSection from './TitleSection.vue';
export default {
    name: 'MomentCounts',
    components: {
        ButtonComponent,
        TitleSection,
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-9 bg-light p-5">
                <div>
                    <h3 class="pb-2 blue">Every moments counts</h3>
                    <div class="underline"></div>
                </div>
                <div class="pt-5">
                    <p>Curabitur non mi et turpis pharetra vulputate. Cras consequat, risus nec commodo vehicula, nisi
                        est laoreet leo, ac convallis nisi nibh id velit. Aliquam mattis metus a nisi pretium</p>
                    <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac nibh
                        vestibulum, laoreeet
                        ipsum quis, vestibulum nisi. Carabitur non mi et turpis pharetra vulputate. Ipsum dolor sit
                        amet, consectetur adipiscing elit. Praesent ac nibh vestibulum, laoreet ipsum quis, vestibulum
                        nisi.</p>
                    <p class="pb-4">Curabitur non mi et turpis pharetra vulputate. Cras consequat, risus nec commodo
                        vehicula, nisi
                        est laoreet leo, ac convallis nisi nibh id velit.</p>
                </div>
                <ButtonComponent class="bg_custom text-light " text="OUR MISSION"/>
            </div>
            <div class="col-3 p-0 bg_img position-relative">
                <div class="stats">
                    <div class="volunteers text-center py-3 text-light">
                        <span>
                            <font-awesome-icon class="icons" icon="fa-regular fa-heart" />
                        </span>
                        <span class="fs-3">20<span class="alt_number">3</span>2</span>
                        <div>Volunteers worldwide</div>
                    </div>
                    <div class="projects text-center text-light">
                        <span>
                            <font-awesome-icon class="icons" icon="fa-solid fa-globe" />
                        </span>
                        <span class="fs-3">1<span class="alt_number">3</span>2</span>
                        <div>Active projects</div>
                    </div>
                    <div class="donated text-center text-light py-3">
                        <span>
                            <font-awesome-icon class="icons" icon="fa-solid fa-dollar-sign" />
                        </span>
                        <span class="fs-3"><span class="alt_number">3</span>.8M</span>
                        <div>Donated</div>
                    </div>
                </div>
                <!-- <img class="bg_img" src="../assets/img/home-content-bg-1.jpg" alt=""> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables.scss' as * ;

.alt_number{
    position: relative;
    top: 6px;
    font-size: 2.3rem;
}
.icons{
    font-size: 1.7rem;
    color: white;
    padding-right: 0.4rem;
}
.blue{
    color: $blueText;
}
.bg_custom{
    background-color: $alternativeColor;
    border: 4px solid $alternativeColor;
}
.underline {
    background-color: $alternativeColor;
    height: 4px;
    width: 100px;
}


.bg_img {
    background-image: url('../assets/img/home-content-bg-1.jpg');
    //background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    //height: 600px;
}

.stats {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

p {
    line-height: 2em;
    color: $grayText;
}

.mission {
    background-color: $alternativeColor;
    a {
        text-decoration: none;
        color: white;
    }
}
</style>