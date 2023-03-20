<script>
import { Swiper, SwiperSlide } from 'swiper/svelte';
import { EffectFade,Scrollbar } from 'swiper';
import { Autoplay } from 'swiper/core';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Saos from 'saos';

const items = [
  
  { 
    title: "春愁 shun shu",
    info: "yoshida-tei / 2023",
    img: "../image/exhibition_.jpg"
  },
  {
    title: "脈々 myaku myaku",
    info: "wise wise tools / 2023",
    img: "../image/exhibition_0.jpg"
  },
  {
    title: "Sona",
    info: "Kumu Tokyo / 2022",
    img: "../image/exhibition_sona.jpg"
  },
  {
    title: "水辺をつつむ",
    info: "atelier fluss / 2022",
    img: "../image/exhibition_3.jpg"
  },
  {
    title: "風をきく",
    info: "atelier sui / 2022",
    img: "../image/exhibition_4.png"
  },
  {
    title: "CHIQ - Wine × Fragrance",
    info: "OFS gallery / 2022",
    img: "../image/exhibition_2.jpeg"
  }

];


</script>


  <Swiper
      modules={[Scrollbar]}
      speed={1000}
      slidesPerView={"auto"}
      spaceBetween={30}
      scrollbar={{ draggable: true }}
      class="mySwiper wrapper"
  >

  {#each items as item, i}
    <SwiperSlide>
        <div class="swiper-slide">
            <Saos once={true} animation={"zooming 3.0s cubic-bezier(0.2, 0.6, 0.35, 1) both"}>
            <img src={ item.img } alt=""></Saos>
            <div class="info">
              <h3 class="h5" lang="en">{ item.title }</h3>
              <h4 class="h6" lang="en">{ item.info }</h4>
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
  width: 45vw;
  height: 50vw;
  overflow: hidden;
}
.swiper-slide img {
  width: 45vw;
  height: 50vw;
}
.exhibitions .swiper-slide .info h3 {margin: 1.2rem 0 .25rem; opacity: .75;}
.exhibitions .swiper-slide .info h4 {opacity: .25;}


@media screen and (min-width: 720px) {
.swiper-slide {
  width: 20vw;
  height: 25vw;
  overflow: hidden;
}
.swiper-slide img {
  width: 20vw;
  height: 25vw;
}
}

</style>