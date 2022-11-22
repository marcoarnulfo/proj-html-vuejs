<script>
// TODO Implementare al click del banner rosso inferiore più immagini, v-model, click, v-if
import { store } from '../store';
import TitleSection from './TitleSection.vue';
import CausesImg from './CausesImg.vue';
export default {
    name: 'RecentCauses',
    components: {
        TitleSection,
        CausesImg
    },
    data(){
        return{
            store
        }
    }
}
</script>



<template>
    <div class="container-fluid text-dark">

        <TitleSection class="pt-5 text-center" title='RECENT CAUSES' paragraph='We run project in over 30 countires in 5 continets'/>
        <!-- <div class="text-center">
            <h3 class="pt-5">RE<span class="border_bot pb-3">CENT CAUS</span>ES</h3>
            <div class="pt-4">We run project in over 30 countires in 5 continets</div>
        </div> -->
        <div class="container-fluid px-5 text-center pt-5 pb-5">
            <div class="row">
                <CausesImg v-for="card in store.causesImg" :card="card"/>
                <CausesImg v-if="store.causes % 2 == 0" class="pt-4" v-for="card in store.causesImgHidden" :card="card"/>
            </div>
        </div>
    </div>
    <div class="bg_causes text-center p-5 my-5">
        <div @click="store.showCauses()">view all our causes</div>
    </div>
</template>

<style lang="scss" scoped>

/*
.border_bot {
    border-bottom: 3px solid #fcd66c;
}
*/

.bg_causes{
    background-color: #ea6864;
    div{
        cursor: pointer;
        color: white;
        font-size: 1.4rem;
    }
}

</style>