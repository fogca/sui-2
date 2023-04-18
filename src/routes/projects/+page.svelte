<script>
	//import Saos from "saos";
	//import { Swiper, SwiperSlide } from 'swiper/svelte';
	//import 'swiper/css';
	import Logo from '../../components/Logo@.svelte';
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
	let pt = document.getElementById('pt');
  	if (browser) {
    	pt.style.visibility = "visible";
  	}
});


/** @type {import('./$types').PageData} */
export let data;

</script>

<svelte:head>
	<title>かほりのプロジェクト | atelier sui - 蕊 | 心を澄まして聞くかほり</title>
</svelte:head>


<a href="/" class="logo" data-sveltekit-reload><TextLogo /></a>

<main class="page">
	<div class="bg-washi"></div>
	<section id="pt">
		
		<div class="wrapper">
			<h1 class="h4">かほりのプロジェクト</h1>
			<p>蒸留家・調香師として参画した<br>プロジェクトになります。</p>
		</div>
	</section>

	<section id="pi">
	  <div class="wrapper">

		
		{#if data[0].contents}    
      		{#each data[0].contents as content}                                 
			<a href="{content.link}" class="container" target="_blank" rel="noreferrer">
				<div class="image">
					<picture>
        			<source srcset="{`${content.thumbnail.url}?fm=avif&q=40&width=720`} 1x, {`${content.thumbnail.url}?fm=avif&q=75&width=2880`} 2x," type="image/avif">
        			<source srcset="{`${content.thumbnail.url}?fm=webp&q=40&width=720`} 1x, {`${content.thumbnail.url}?fm=webp&q=75&width=2880`} 2x," type="image/webp">
        			<img src={content.thumbnail.url} alt="{content.title}">
      				</picture>	
				</div>
			<h2 class="h2" lang="en">{content.title}</h2>
			<h3 class="h7">{content.subhead}</h3>
			<p>{@html content.body}</p>
			<a href="{content.link}" class="h6" target="_blank" rel="noreferrer">公式サイト</a>
			</a>
      		{/each}
      	{/if}
		
		<!--
		<a href="https://sen-n.com/" class="container">
			<div class="image"><img src="../image/projects_senn.jpeg" alt=""></div>
			<h2 class="h2" lang="en">senn - skin care brand</h2>
			<h3 class="h7">スキンケアプロダクト・インセンス</h3>
			<p>本文はデザインや全体のボリューム感を確認するためのダミーテキストです。校正が終了した際は、文章をこちらから置き換えてください。また本文章の文字量が足りない場合は適宜適切な分量をコピーアンドペーストし、ご活用ください。</p>
			<a href="https://shop.sen-n.com/" class="h6" target="_blank" rel="noreferrer">公式サイト</a>
		</a>
		<a href="https://sen-n.com/" class="container">
			<img src="../image/projects_sophistance.jpeg" alt="">
			<h2 class="h2" lang="en">sophistance</h2>
			<h3 class="h7">ルームフレグランス</h3>
			<p>本文はデザインや全体のボリューム感を確認するためのダミーテキストです。校正が終了した際は、文章をこちらから置き換えてください。</p>
			<a href="https://sen-n.com/" class="h6" target="_blank" rel="noreferrer">公式サイト</a>
		</a>

		<a href="https://sen-n.com/" class="container">
			<img src="../image/projects_senn.jpeg" alt="">
			<h2 class="h2" lang="en">senn - skin care brand</h2>
			<h3 class="h7">スキンケアプロダクト、インセンスの香り</h3>
			<p>本文はデザインや全体のボリューム感を確認するためのダミーテキストです。校正が終了した際は、文章をこちらから置き換えてください。</p>
			<a href="https://sen-n.com/" class="h6" target="_blank" rel="noreferrer">公式サイト</a>
		</a>
		-->
		  
	  </div>
	</section>

</main>

<style>

.bg-washi {
	opacity: .1;
	opacity: .05;
}
.page {padding-bottom: 4rem;}

@keyframes -global-scroll-animation {
	0% {
		transform: translateY(3px);
		filter: blur(1px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		filter: blur(0);
		opacity: 1;
	}
}

.logo {
	width: 10rem;
	position: absolute;
	top: 4rem;
	left: var(--padding);
}


#pt {
	padding-top: 12.5rem;
	padding-bottom: 5rem;
}

#pt .wrapper p {
    margin-top: 0.5rem;
	font-size: 1.3rem;
    line-height: 2.3;
}

#pi {position: relative;}

#pi .wrapper .container img {
    width: 100%;
    height: 50vw;
    object-position: center 65%;
}
#pi .wrapper .container:nth-of-type(1) .image {
	width: calc(100vw - var(--padding) + 1px);
	height: calc(100vw - var(--padding));
	
	height: calc(100vh - 125px - 55px - (16px * 2.1) - (13px*2.3*2));
	height: calc(100dvh - (125px + 55px + (16px * 2.1) + (13px*2.3*2)));
	
	margin-bottom: 3rem;
	margin-left: -1px;
	overflow: hidden;
}
#pi .wrapper .container:nth-of-type(1) .image img {
	object-position: 25%;
	width: 100%;
	height: 100%;
	transition: 1s ease-in-out;
}

#pi .wrapper .container {margin-bottom: 10rem;}
#pi .wrapper .container a {
	position: relative;
	font-feature-settings: normal;
	letter-spacing: .3em;
	text-decoration: none;
}
#pi .wrapper .container a::after {
	content: "";
	position: absolute;
	top: auto;
	bottom: 1px;
	left: 0;
	width: 100%;
	height: .5px;
	background-color: var(--textColor);
}

#pi .wrapper .container h2 {
	font-size: 2.2rem;
	margin: 1.5rem 0 .5rem;
	margin-left: -.9px;
}
#pi .wrapper .container h3 {letter-spacing: .3em;}
#pi .wrapper .container p {
	width: 97.5%;
	font-size: 1.25rem;
	opacity: 1;
	margin: 2rem 0 3.2rem;
}
#pi .wrapper .container:nth-of-type(1) p {width: 87.5%;}




@media screen and (min-width: 720px) {

	#pt {padding-top: 20rem;}

	#pi .wrapper {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
	}
	

	#pi .wrapper .container:nth-of-type(1) {width: 100%;}
	#pi .wrapper .container:nth-of-type(1) .image {
		width: calc(100vw - var(--padding) + 1px);
		height: calc(100vw - var(--padding));
		height: calc(100dvh - (200px + 55px + 30px + (16px * 2.1) + (13px*2.3*2)));
	}
	
	#pi .wrapper .container {
 	   width: 45%;
	   height: fit-content;
	}

	#pi .wrapper .container img {
		width: 100%;
		height: 20vw;
	}



}



	
</style>