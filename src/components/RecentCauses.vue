<script>
import { store } from '../store';
import TitleSection from './TitleSection.vue';
import CausesImg from './CausesImg.vue';
export default {
    name: 'RecentCauses',
    components: {
        TitleSection,
        CausesImg
    },
    data() {
        return {
            store
        }
    }
}
</script>



<template>
    <div class="container-fluid text-dark">

        <TitleSection class="pt-5 text-center blue" title='RECENT CAUSES'
            paragraph='We run project in over 30 countires in 5 continets' />
        <p class="text-center pt-4">We run project in over 30 countries in 5 continents</p>
        <!-- <div class="text-center">
            <h3 class="pt-5">RE<span class="border_bot pb-3">CENT CAUS</span>ES</h3>
            <div class="pt-4">We run project in over 30 countires in 5 continets</div>
        </div> -->
        <div class="container-fluid px-5 text-center pt-5 pb-5">
            <div class="row">
                <CausesImg v-for="card in store.causesImg" :card="card" />
                <CausesImg v-if="store.causes" class="pt-4" v-for="card in store.causesImgHidden" :card="card" />
            </div>
        </div>
    </div>
    <div class="bg_causes text-center p-5 my-5">
        <div @click="store.causes = !store.causes">view all our causes</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.blue {
    color: $blueText;
}
p{
    color: $grayText;
}
.bg_causes {
    background-color: $altBg;

    div {
        cursor: pointer;
        color: white;
        font-size: 1.4rem;
    }
}
</style>