<script>
import MomentCounts from './MomentCounts.vue';
import OurValues from './OurValues.vue';
import RecentCauses from './RecentCauses.vue';
export default {
    name: 'AppMain',
    components: {
        MomentCounts,
        OurValues,
        RecentCauses,
    }
}
</script>

<template>
    <main id="site_main">
        <MomentCounts/>
        <OurValues/>
        <RecentCauses/>
    </main>
</template>

<style lang="scss" scoped>

</style>