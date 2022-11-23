<script>
export default {
    name: 'CopyrightComponent'
}
</script>


<template>
    <div class="bg_custom">
        <div class="container text-center">
            <div class="copyringht pt-5 pb-4">Copyringht 2021 - 2022 AVADA THEME BY THEME FUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS</div>
            <font-awesome-icon class="social facebook rounded-circle mb-4" icon="fa-brands fa-facebook-f" />
            <font-awesome-icon class="social rounded-circle p-3 mb-4" icon="fa-brands fa-instagram" />
            <font-awesome-icon class="social rounded-circle p-3 mb-4" icon="fa-brands fa-twitter" />
            <font-awesome-icon class="social rounded-circle p-3 mb-4" icon="fa-brands fa-youtube" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables.scss' as * ;
.facebook{
    padding: 1rem 20px;
}
.social{ // TODO aggiungere effetto hover
    margin: 0 9px;
    font-size: 2rem;
    color: $alternativeColor;
    background-color: white;
}
.bg_custom{
    background-color: $bgFooter; 
}
.copyringht{
    color: $footerText;
    font-size: 0.8rem;
}

</style>