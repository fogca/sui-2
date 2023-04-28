<script>
import { Swiper, SwiperSlide } from 'swiper/svelte';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css';

const visual = [
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
    slidesPerView={1}
    speed={4000}
    loop={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: true
    }}
    pagination={{ clickable: true }}
    modules="{[EffectFade, Autoplay, Pagination]}" effect="fade"
  >

  {#each visual as item, i}
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