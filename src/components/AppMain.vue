<script>
import MomentCounts from './MomentCounts.vue';
import OurValues from './OurValues.vue';
import RecentCauses from './RecentCauses.vue';
import LastestArticles from './LastestArticles.vue';
export default {
    name: 'AppMain',
    components: {
        MomentCounts,
        OurValues,
        RecentCauses,
        LastestArticles,
    }
}
</script>

<template>
    <main id="site_main">
        <MomentCounts/>
        <OurValues/>
        <RecentCauses/>
        <LastestArticles/>
    </main>
</template>

<style lang="scss" scoped>

</style>