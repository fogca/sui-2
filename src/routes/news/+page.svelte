<script>
	//import Saos from "saos";
	//import { Swiper, SwiperSlide } from 'swiper/svelte';
	//import 'swiper/css';
	import TextLogo from '../../components/TextLogo.svelte';
	import Hyphen from '../../components/Hyphen.svelte';
	import Exhibition from '../../components/Exhibition.svelte';
	import Artpiece from '../../components/Artpiece.svelte';
	import Sign from '../../components/Sign.svelte';
	import Saos from 'saos';
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import { gsap } from "gsap/dist/gsap";


onMount(() => {

});
</script>

<svelte:head>
	<title>お知らせ | atelier sui - 蕊 | 心を澄まして聞くかほり</title>
</svelte:head>

<main class="page">

	<div class="bg-washi"></div>
	<section id="nt">
		<a href="/" class="logo" data-sveltekit-reload><TextLogo /></a>
		<h1 class="h3">展示やイベントのお知らせ</h1>
		<div class="h5" lang="en">information</div>
	</section>

	<section id="ni">
		<div class="wrapper">

			<a href="/" class="container">
				<div class="info">
					<span class="h6" lang="en">Exhibition</span> - <span class="h6" lang="en">12/12 - 12/18</span>
				</div>
				<h2 class="p">東京KUMUにて個展「sona」を開催いたします。</h2>
				<a href="/">詳細をみる</a>
			</a>
			<a href="/" class="container">
				<div class="info">
					<span class="h6" lang="en">Exhibition</span> - <span class="h6" lang="en">12/12 - 12/18</span>
				</div>
				<h2 class="p">東京KUMUにて個展「sona」を開催いたします。</h2>
				<a href="/">詳細をみる</a>
			</a>
			<a href="/" class="container">
				<div class="info">
					<span class="h6" lang="en">Exhibition</span> - <span class="h6" lang="en">12/12 - 12/18</span>
				</div>
				<h2 class="p">東京KUMUにて個展「sona」を開催いたします。</h2>
				<a href="/">詳細をみる</a>
			</a>
			<a href="/" class="container">
				<div class="info">
					<span class="h6" lang="en">Exhibition</span> - <span class="h6" lang="en">12/12 - 12/18</span>
				</div>
				<h2 class="p">東京KUMUにて個展「sona」を開催いたします。</h2>
				<a href="/">詳細をみる</a>
			</a>
			
		</div>
	</section>

</main>

<style>

@keyframes -global-scroll-animation {
	0% {
		transform: translateY(3px);
		filter: blur(1px);
		opacity: 0;
	} 100% {
		transform: translateX(0);
		filter: blur(0);
		opacity: 1;
}}



#nt {
	width: 100vw;
	padding: 4rem var(--padding) 8rem;
	background-image: url(/image/kv.webp);
	background-size: cover;
}
#nt .logo {width: 13rem;}
#nt h1 {margin-top: 5rem;}

#nt * {
	color: var(--backgroundColor);
	fill: var(--backgroundColor);
}



#ni {
	margin-top: 8rem;
	position: relative;
}
#ni a.container {margin-bottom: 5rem;}
#ni .info span {opacity: .5;}
#ni h2 {
	font-size: 1.45rem;
	width: 80%;
	margin: .5rem 0 1.5rem;
	margin-left: -0.8px;
}
#ni a.container a {
	opacity: .5;
	margin-left: 1.5px;
	letter-spacing: .3em;
	text-decoration: underline;
}
 
  
  
  


	
</style>