<script>
export default {
    name: 'TitleSections',
    props: {
        title: String,
        paragraph: String,
    }
}
</script>

<template>
    <div>
        <h3 class="pb-2">{{title}}</h3>
        <div class="prova"></div>
        <div class="pt-4">{{paragraph}}</div>
    </div>
</template>

<style lang="scss" scoped>
.prova {
    margin: auto;
    background-color: #fcd66c;
    height: 4px;
    width: 100px;
}
</style>