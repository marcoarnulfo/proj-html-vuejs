<script>
// TODO Implementare al click del banner rosso inferiore più immagini, v-model, click, v-if
import TitleSections from './TitleSections.vue';
export default {
    name: 'RecentCauses',
    components: {
        TitleSections,
    }
}
</script>



<template>
    <div class="container-fluid text-dark">

        <TitleSections class="pt-5 text-center" title='RECENT CAUSES' paragraph='We run project in over 30 countires in 5 continets'/>
        <!-- <div class="text-center">
            <h3 class="pt-5">RE<span class="border_bot pb-3">CENT CAUS</span>ES</h3>
            <div class="pt-4">We run project in over 30 countires in 5 continets</div>
        </div> -->
        <div class="container-fluid px-5 text-center pt-5 pb-5">
            <div class="row">
                <div class="col">
                    <img src="../assets/img/avada-charity-fair-trade-featured-400x300.jpg" alt="">
                </div>
                <div class="col">
                    <img src="../assets/img/avada-charity-shelter-featured-400x300.jpg" alt="">
                </div>
                <div class="col">
                    <img src="../assets/img/avada-charity-farming-featured-400x300.jpg" alt="">
                </div>
                <div class="col">
                    <img src="../assets/img/avada-charity-vaccines-featured-400x300.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="bg_causes text-center p-5 my-5">
        <div><a href="#">view all our causes</a></div>
    </div>
</template>

<style lang="scss" scoped>
.border_bot {
    border-bottom: 3px solid #fcd66c;
}

.bg_causes{
    background-color: #ea6864;
    a{
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
    }
}

</style>