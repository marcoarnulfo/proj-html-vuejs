<script>
export default {
    name: 'OurValues'
}
</script>

<template>
    <div class="bg_test">
        <!-- <img class="img-fluid" src="../assets/img/home-content-bg-2.jpg" alt="">  -->
    </div>
    <div class="jumbo bg_img">
        <div class="container-fluid position-absolute text-light">
            <div class="text-center">
                <h3 class="pb-2">OUR VALUES</h3>
                <div class="pt-4">T<span class="border_top pt-3">hink Big. Act Bigge</span>r.</div>
            </div>
            <div class="container-fluid text-center pt-5 padding_top px-5"> <!-- info d-flex text-center pt-5 justify-content-center gap-5 --> <!-- info d-flex mx-5 text-center gap-5 padding_top-->
                <div class="row">
                    <div class="col">
                        <div>Immagine</div>
                        <div>Vaccinations</div>
                        <p>Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.</p>
                        <span class="learn px-4 py-2"><a href="#">LEARN MORE</a></span>
                    </div>
                    <div class="col">
                        <div>Immagine</div>
                        <div>Education</div>
                        <p>Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.</p>
                        <span class="learn px-4 py-2"><a href="#">LEARN MORE</a></span>
                    </div>
                    <div class="col">
                        <div>Immagine</div>
                        <div>Clean Water</div>
                        <p>Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.</p>
                        <span class="learn px-4 py-2"><a href="#">LEARN MORE</a></span>
                    </div>
                    <div class="col">
                        <div>Immagine</div>
                        <div>Farming</div>
                        <p>Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.</p>
                        <span class="learn px-4 py-2"><a href="#">LEARN MORE</a></span>
                    </div>
                </div>
            </div>
        </div>
        <img class="img-fluid img_slider" src="../assets/img/home-content-bg-2.jpg" alt=""> 
    </div>
</template>

<style lang="scss" scoped>

/*
.bg_img{
    background-image: url('../assets/img/home-content-bg-2.jpg');
    height: 900px;
    background-repeat: no-repeat;
    width: 100%;
}
*/
.bg_test{
    background-image: url('../assets/img/home-content-bg-2.jpg');
    height: 200px;
}

.img_slider{
    width: 100%;
    height: 550px;
    object-fit:cover;
}

.border_top{
    border-top: 3px solid #fcd66c;
}
.learn {
    background-color: #fcd66c;
    a{
        text-decoration: none;
        color: white;
    }
}

.padding_top{
    padding-top: 10rem;
}

p{
    line-height: 2em;
    padding-bottom: 0.7rem;
}

</style>