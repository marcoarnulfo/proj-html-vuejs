<script>
export default {
    name:'SocialIcons',
    props:{
        text: String,
        classe: String
    }
}

</script>

<template>

<font-awesome-icon :class="classe" :icon="text" />

</template>

<style lang="scss" scoped>

</style>