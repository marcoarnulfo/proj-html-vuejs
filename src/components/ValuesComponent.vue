<script>
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: 'ValuesComponent',
    components:{
        ButtonComponent,
    },
    props:{
        text: String,
        title: String,
        paragraph: String,
    }
}
</script>

<template>

    <div class="col">
        <div>
            <font-awesome-icon class="icons" :icon="text" />
        </div>
        <div>{{title}}</div>
        <p class="pb-3">{{paragraph}}</p>
        <ButtonComponent class="bg_custom" text="LEARN MORE" />
    </div>

</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables.scss' as *;
.icons{
    font-size: 4rem;
    color: $alternativeColor;
    padding: 1rem;
}

.bg_custom{
    background-color: $alternativeColor;
    border: 4px solid $alternativeColor;
    &:hover{
        box-shadow: 0 0 5px $alternativeColor;
        font-weight: bold;
    }
}
</style>