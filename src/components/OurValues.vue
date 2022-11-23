<script>
import { store } from '../store';
import ValuesComponent from './ValuesComponent.vue';
import TitleSection from './TitleSection.vue';
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: 'OurValues',
    components: {
        TitleSection,
        ButtonComponent,
        ValuesComponent,
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="bg_top">
    </div>
    <div class="jumbo bg_img">
        <div class="container-fluid position-absolute text-light">
            <TitleSection class="text-center" title="OUR VALUES"/>
            <p class="text-center pt-4">Think Big. Act Bigger.</p>
            <div class="container-fluid text-center pt-5 padding_top px-5">
                <div class="row">
                    <ValuesComponent v-for="element in store.values" :text="element.icons" :title="element.title" :paragraph="element.text"/>
                </div>
            </div>
        </div>
        <img class="img-fluid img_slider" src="../assets/img/home-content-bg-2.jpg" alt=""> 
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables.scss' as *;


.bg_top{
    background-image: url('../assets/img/home-content-bg-2.jpg');
    height: 170px;
}

.img_slider{
    width: 100%;
    height: 550px;
    object-fit:cover;
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


</style>