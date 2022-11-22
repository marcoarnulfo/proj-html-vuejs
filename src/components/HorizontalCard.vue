<script>
//import { store } from '../store';

export default {
    name: 'HorizontalCard',
    props:{
        card : Object
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
        <!-- Card -->
        <div class="row g-0 ">
            <div class="col-md-4">
                <img :src="getImagePath(`${card.img}.jpg`)" class="img-fluid rounded-start" > 
                <!-- ../assets/img/photo-1444664597500-035db93e2323-177x142.jpg-->
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card_title">{{card.title}}</h5> <!-- The Human story of iniqueness -->
                    <p class="card-text">{{card.paragraph}}</p> <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibhvestibulum, laoreet ipsum -->
                </div>
            </div>
        </div>
    </div>


</template>


<style lang="scss" scoped>

.card_title {
    color: #fcd66c;
    font-size: 1.5rem;
}
.card_right{
    p{
        font-size: 1rem;
    }
}
</style>