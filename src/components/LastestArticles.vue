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
    },/*
        methods: {
            getImagePath: function (imgName) {
                return new URL(`../assets/img/${imgName}`, import.meta.url).href;
            }
        }
        */
}
</script>

<template>
    <div class="container">
        <TitleSection class="text-center py-5" title="LATEST ARTICLES"
            paragraph="Together we make all the difference" />
        <div class="row">
            <div class="col-6">
                <LeftCard v-for="card in store.leftCard" :card="card" />
                <LeftCard class="mt-4" v-if="store.articles % 2 == 0" v-for="card in store.leftCardHidden" :card="card" />
            </div>
            <div class="col-6">
                <HorizontalCard class="margin_bottom" v-for="card in store.cardRight" :card="card" />
                <HorizontalCard v-if="store.articles % 2 == 0" class="mb-3" v-for="card in store.cardRightHidden" :card="card" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="bg_causes text-center p-3 my-5">
                    <div @click="store.showArticles()" class="text-light articles">VIEW ALL OUR ARTICLES</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.margin_bottom{
    margin-bottom: 19px;
}
.bg_causes {
    background-color: #ea6864;
    .articles{
        cursor: pointer;
    }
}

.border {
    box-shadow: 0 3px 0px lightgray;
    margin-bottom: 2rem;
}

.card_title {
    color: #fcd66c;
    font-size: 1.5rem;
}

p {
    line-height: 1.4em;
}
</style>