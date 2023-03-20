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
    title: "香水びん",
    img: "../image/exhibition_1.jpg"
  },
  {
    title: "kousui binn",
    img: "../image/exhibition_2.jpeg"
  },
  {
    title: "kousui binn",
    img: "../image/about.jpg"
  },
  {
    title: "kousui binn",
    img: "../image/essence.jpg"
  },
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
          <Saos once={true} animation={"zooming 3.0s cubic-bezier(0.2, 0.6, 0.35, 1) both"}>
            <img src={ item.img } alt=""></Saos>
            <div class="info">
              <h3 class="p" lang="en">{ item.title }</h3>
            </div>
        </div>
    </SwiperSlide>

    {/each}


  </Swiper>


<style>
@keyframes -global-zooming {
	0% {transform: scale(1.2);}
  100% {transform: scale(1);}
}

.swiper-slide {
    width: 100%;
    height: 100vw;
    overflow: hidden;
}
.swiper-slide img {
    width: 100%;
    height: 100vw;
}

.info {margin-left: var(--padding);}

.swiper-slide h3 {
  font-size: 1.1rem;
  opacity: .5;
}



@media screen and (min-width: 720px) {


  .swiper-slide img {height: 35vh;}
  .swiper-slide {height: 35vh;}


}

</style>