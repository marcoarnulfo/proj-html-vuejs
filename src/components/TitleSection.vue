<script>
export default {
    name: 'TitleSections',
    props: {
        title: String,
        //paragraph: String,
    }
}
</script>

<template>

    <div>
        <h3 class="pb-2 ">{{title}}</h3>
        <div class="underline rounded"></div>
        <!-- <div class="pt-4">{{paragraph}}</div> -->
    </div>
    
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables.scss' as *;

.underline {
    margin: auto;
    background-color: $alternativeColor;
    height: 4px;
    width: 100px;
}
</style>