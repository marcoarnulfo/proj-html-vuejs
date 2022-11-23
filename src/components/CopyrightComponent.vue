<script>
import {store} from '../store.js';
import SocialIcons from './SocialIcons.vue';
export default {
    name: 'CopyrightComponent',
    data(){
        return {
            store
        }
    },
    components:{
        SocialIcons
    }
}
</script>


<template>
    <div class="bg_custom">
        <div class="container text-center">
            <div class="copyringht pt-5 pb-4">Copyringht 2021 - 2022 AVADA THEME BY THEME FUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS</div>
            <SocialIcons class="social rounded-circle mb-4" v-for="icon in store.icons" :text="icon.text" :classe="icon.class"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables.scss' as * ;

.facebook{
    padding: 1rem 20px;
    &:hover{
        color: 	#4267B2;
        box-shadow: 0 0 5px #4267B2;
    }
}

.instagram{
    padding: 1rem 16px;
    &:hover{
        color: #C13584;
        box-shadow: 0 0 5px #C13584;
    }
}
.twitter{
    padding: 1rem 14px;
    &:hover{
        color: #1DA1F2;
        box-shadow: 0 0 5px #1DA1F2;
    }
}
.youtube{
    padding: 1rem 12px;
    &:hover{
        color: #FF0000;
        box-shadow:0 0 5px #FF0000;
    }
}
.social{
    cursor: pointer;
    margin: 0 9px;
    font-size: 2rem;
    color: $alternativeColor;
    background-color: white;
}

.bg_custom{
    background-color: $bgFooter; 
}
.copyringht{
    color: $footerText;
    font-size: 0.8rem;
}

</style>