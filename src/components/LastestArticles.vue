<script>
import TitleSection from './TitleSection.vue';
import HorizontalCard from './HorizontalCard.vue';
import LeftCard from './LeftCard.vue';
import { store } from '../store';

export default {
    name: 'LastestArticles',
    components: {
        TitleSection,
        HorizontalCard,
        LeftCard,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container">
        <TitleSection class="blue text-center" title="LATEST ARTICLES"/>
            <p class="pb-5 pt-4 text-center">Together we make all the difference</p>
        <div class="row">
            <div class="col-6">
                <LeftCard v-for="card in store.leftCard" :card="card" />
                <LeftCard class="mt-4" v-if="store.articles" v-for="card in store.leftCardHidden" :card="card" />
            </div>
            <div class="col-6">
                <HorizontalCard class="margin_bottom" v-for="card in store.cardRight" :card="card" />
                <HorizontalCard v-if="store.articles" class="mb-3" v-for="card in store.cardRightHidden" :card="card" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="bg_causes text-center p-3 my-5">
                    <div @click="store.articles = !store.articles" class="text-light articles">VIEW ALL OUR ARTICLES</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables.scss' as *;

.blue{
    color: $blueText;
}
.margin_bottom{
    margin-bottom: 19px;
}
.bg_causes {
    background-color: $altBg;
    .articles{
        cursor: pointer;
    }
}

p{
    color: $grayText;
}
</style>