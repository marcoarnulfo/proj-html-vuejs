<script>
export default {
    name: 'CopyrightComponent'
}
</script>


<template>
    <div class="bg_custom">
        <div class="container text-center">
            <div class="copyringht py-5">Copyringht 2021 - 2022 AVADA THEME BY THEME FUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS</div>
            <font-awesome-icon class="social facebook rounded-circle mb-4" icon="fa-brands fa-facebook-f" />
            <font-awesome-icon class="social rounded-circle p-3 mb-4" icon="fa-brands fa-instagram" />
            <font-awesome-icon class="social rounded-circle p-3 mb-4" icon="fa-brands fa-twitter" />
            <font-awesome-icon class="social rounded-circle p-3 mb-4" icon="fa-brands fa-youtube" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.facebook{
    padding: 1rem 20px;
}
.social{
    margin: 0 9px;
    font-size: 2rem;
    color: #fcd66c;
    background-color: white;
}
.bg_custom{
    background-color: #F5F5F5;
}
.copyringht{
    font-size: 0.8rem;
}

</style>