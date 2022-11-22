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
            <TitleSection class="text-center" title="OUR VALUES" paragraph='Think Big. Act Bigger.'/>
            <div class="container-fluid text-center pt-5 padding_top px-5"> <!-- info d-flex text-center pt-5 justify-content-center gap-5 --> <!-- info d-flex mx-5 text-center gap-5 padding_top-->
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

.bg_custom{
    background-color: #fcd66c;
    border: 4px solid #fcd66c;
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
    background-color: #fcd66c;
    a{
        text-decoration: none;
        color: white;
    }
}

.padding_top{
    padding-top: 10rem;
}

p{
    line-height: 2em;
    padding-bottom: 0.7rem;
}

.icons{
    font-size: 4rem;
    color: #fcd66c;
    padding: 1rem;
}

</style>