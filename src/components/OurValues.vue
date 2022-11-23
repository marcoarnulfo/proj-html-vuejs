<script>
import TitleSection from './TitleSection.vue';
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: 'OurValues',
    components: {
        TitleSection,
        ButtonComponent,
    }
}
</script>

<template>
    <div class="bg_test">
        <!-- <img class="img-fluid" src="../assets/img/home-content-bg-2.jpg" alt="">  -->
    </div>
    <div class="jumbo bg_img">
        <div class="container-fluid position-absolute text-light">
            <TitleSection class="text-center" title="OUR VALUES"/>
            <p class="text-center pt-4">Think Big. Act Bigger.</p>
            <div class="container-fluid text-center pt-5 padding_top px-5">
                <div class="row">
                    <div class="col">
                        <div><font-awesome-icon class="icons" icon="fa-solid fa-droplet" /></div>
                        <div>Clean Water</div>
                        <p>Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.</p>
                        <ButtonComponent class="bg_custom" text="LEARN MORE"/>
                    </div>
                    <div class="col">
                        <div><font-awesome-icon class="icons" icon="fa-solid fa-stethoscope" /></div>
                        <div>Vaccinations</div>
                        <p>Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.</p>
                        <ButtonComponent class="bg_custom" text="LEARN MORE"/>
                    </div>
                    <div class="col">
                        <div><font-awesome-icon class="icons" icon="fa-solid fa-graduation-cap" /></div>
                        <div>Education</div>
                        <p>Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.</p>
                        <ButtonComponent class="bg_custom" text="LEARN MORE"/>
                    </div>
                    <div class="col">
                        <div><font-awesome-icon class="icons" icon="fa-solid fa-seedling" /></div>
                        <div>Farming</div>
                        <p>Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.</p>
                        <ButtonComponent class="bg_custom" text="LEARN MORE"/>
                    </div>
                </div>
            </div>
        </div>
        <img class="img-fluid img_slider" src="../assets/img/home-content-bg-2.jpg" alt=""> 
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables.scss' as *;


.bg_custom{
    background-color: $alternativeColor;
    border: 4px solid $alternativeColor;
}


.bg_test{
    background-image: url('../assets/img/home-content-bg-2.jpg');
    height: 200px;
}

.img_slider{
    width: 100%;
    height: 550px;
    object-fit:cover;
}

.learn {
    background-color: $alternativeColor;
    a{
        text-decoration: none;
        color: white;
    }
}

.padding_top{
    padding-top: 10rem;
}
.col{
    p{
        color: $alternativeText;
        font-size: 1rem;
        padding-top: 1rem;
        line-height: 2em;   
        padding-bottom: 0.7rem;
    }
}

.icons{
    font-size: 4rem;
    color: $alternativeColor;
    padding: 1rem;
}

</style>