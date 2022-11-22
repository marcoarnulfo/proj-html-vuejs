<script>
export default {
    name: 'ButtonComponent',
    props:{
        text: String,
    }
}
</script>

<template>

    <span class="borderZ rounded py-1 px-4">{{text}}</span>

</template>

<style lang="scss" scoped>
.borderZ{
    border: 3px solid;
    cursor: pointer;
}
</style>