<script>
import TitleSection from './TitleSection.vue';
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: 'ChangeLife',
    components: {
        TitleSection,
        ButtonComponent,
    }
}
</script>

<template>
    <div class="position-relative text-center">
        <div class="center_custom">
            <TitleSection class="text-light" title="CHANGE A LIFE TODAY"/>
            <p class="pt-4 text-light">As long as poverty, injustice & inequality persist, none of us can truly rest. It doesn't take much to change a life, get in touch today and start making the difference.</p>
            <div class="pt-5">
                <ButtonComponent class="withe mx-3 py-2" text="VOLUNTEER"/>
                <ButtonComponent class="withe mx-3 py-2" text="DONATE NOW"/>
            </div>
        </div>
        <img class="img-fluid img_slider" src="../assets/img/home-footer.jpg" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
.img_slider {
    width: 100%;
    height: 600px;
    object-fit: cover;
}

.withe{
    color: white;
    &:hover{
        color: $alternativeColor;
        box-shadow: 0 0 10px $grayText;
        font-weight: bold;
    }
}

.center_custom {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>