<script>
import ChangeLife from './ChangeLife.vue';
import CharityLogo from './CharityLogo.vue';
import CopyrightComponent from './CopyrightComponent.vue';
export default {
    name: 'AppFooter',
    components: {
        ChangeLife,
        CharityLogo,
        CopyrightComponent,
    }
}
</script>

<template>
    <footer id="site_footer">
        <ChangeLife />
        <CharityLogo/>
        <CopyrightComponent/>
    </footer>
</template>

<style lang="scss" scoped>

</style>