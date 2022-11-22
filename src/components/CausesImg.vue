<script>
export default {
    name: 'CausesImg',
    methods:{
        getImagePath: function(imgName) {
            return new URL(`../assets/img/${imgName}`, import.meta.url).href;
        }
    },
    props:{
        card: Object
    }
}
</script>

<template>
    <div class="col">
        <img class="rounded" :src="getImagePath(`${card.img}.jpg`)" alt="">
    </div>
</template>

<style lang="scss" scoped>
img{
    box-shadow: 0 0 10px gray;
}
</style>