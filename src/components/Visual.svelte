<script>
import { Swiper, SwiperSlide } from 'swiper/svelte';
import { EffectFade, Pagination } from 'swiper';
import { Autoplay } from 'swiper/core';  
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css';
import Saos from 'saos';

const items = [
  {
    img: "../image/monochrome.jpg"
  },
  {
    img: "../image/essence.jpg"
  },
  {
    img: "../image/about.jpg"
  }
];
</script>



<Swiper
    loop={true}
    autoplay={{
        delay: 5000,
        disableOnInteraction: true
    }}
    pagination={{ clickable: true }}
    speed={5000}
    modules="{[EffectFade, Autoplay, Pagination]}" effect="fade"
  >

  {#each items as item, i}
    <SwiperSlide>
      <div class="swiper-slide">
        <img src={ item.img } alt="">
      </div>
    </SwiperSlide>

  {/each}


  </Swiper>


<style>

.swiper-slide {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
}
.swiper-slide img {
    width: 100%;
    height: 100vh;
    height: 100dvh;
}

</style>