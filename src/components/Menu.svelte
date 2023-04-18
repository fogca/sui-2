<script>
    import Logo from './Logo.svelte'
    import { blur, fade, slide, fly } from 'svelte/transition';
    import { quadIn, sineInOut, sineOut, sineIn, linear, quartIn, quadInOut } from 'svelte/easing';


</script>
        

<div class="Menu" 
    in:fly={{ delay: 0, opacity: 0, x: -25, duration: 1200, easing: quadInOut }}
    out:fly={{ delay: 200, opacity: 0, x: -25, duration: 1200, easing: quadInOut }}
>

<div class="bg">
    <img src="../image/menu_bg.png" alt="">
    <svg xmlns="http://www.w3.org/2000/svg" width="250.166" height="740" viewBox="0 0 250.166 740">
        <path id="パス_1681" data-name="パス 1681" d="M-11873.389,11167s258.327,99.322,128.936,301.815S-11873.389,11907-11873.389,11907h-84.953v-740Z" transform="translate(11958.342 -11167)" fill="#e5e7e7"/>
    </svg>
</div>

<div class="wrapper">

    <p>
        素材との出会い、抽出、調香まで<br>
        小さないのちに内在する響きから<br>
        季節や風土のめぐりに触れる<br>
        香りづくり
    </p>

</div>
  

</div>


      
<style>

.Menu {
    margin-left: 9vw;
    height: 100vh;
    height: 100dvh;
    position: fixed;
    z-index: 8;
    /*
    background-color: rgba(234,234,234,0.95);
    */
}

.bg {position: relative;}
.bg * {position: absolute;}
.bg svg {opacity: .95;}
.bg svg path {fill: rgb(234,234,234);}

.bg img, .bg svg {
    width: auto;
    height: 100vh;
    height: 100dvh;
}


</style>