<script>
import { store } from '../store';

export default {
    name: 'HorizontalCard',
    props:{
        card : Object
    },
    data(){
        return{
            store
        }
    },
    methods:{
        getImagePath: function(imgName) {
            return new URL(`../assets/img/${imgName}`, import.meta.url).href;
        }
    }
}
</script>

<template>

    <div class="card card_right">
        <div class="row g-0 ">
            <div class="col-md-4">
                <img :src="getImagePath(`${card.img}.jpg`)" class="img-fluid rounded-start" > 
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card_title">{{card.title}}</h5> 
                    <p class="card-text">{{card.paragraph}}</p> 
                </div>
            </div>
        </div>
    </div>


</template>


<style lang="scss" scoped>

@use '../assets/scss/partials/variables.scss' as * ;

.card_title {
    color: $alternativeColor;
    font-size: 1.5rem;
}
.card_right{
    box-shadow: 0 0 5px gray;
    p{
        font-size: 1rem;
        color: $grayText;
    }
}

</style>