<script>
export default {
    name: 'LeftCard',
    props: {
        card: Object
    },
    methods:{
        getImagePath: function(imgName) {
            return new URL(`../assets/img/${imgName}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="card card_left">
        <img :src="getImagePath(`${card.img}.jpg`)" class="card-img-top">
        <div class="card-body ">
            <div class="card_title py-3">{{card.title}}</div>
            <p class="card-text">{{card.paragraph}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables.scss' as *;

.card_left{
    box-shadow: 0 0 10px gray;
}


.card_title {
    color: $alternativeColor;
    font-size: 1.5rem;
}

p {
    line-height: 1.4em;
    color: $grayText;
}
</style>