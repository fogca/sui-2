
<script>
//import Saos from "saos";
//import { Swiper, SwiperSlide } from 'swiper/svelte';
//import 'swiper/css';
import Logo from '../components/Logo@.svelte';
import TextLogo from '../components/TextLogo.svelte';
import Hyphen from '../components/Hyphen.svelte';
import Exhibition from '../components/Exhibition.svelte';
import Artpiece from '../components/Artpiece.svelte';
import Sign from '../components/Sign.svelte';
import Visual from '../components/Visual.svelte';
import Saos from 'saos';
import { onMount } from "svelte";
import { browser } from "$app/environment";
import { gsap } from "gsap/dist/gsap";
	
/*
function indexScroll() {
    if (browser) {
        let body = document.body;
        let currentY = window.pageYOffset;
        if ( currentY < 5 ) {
            body.classList.add('scrolled');
		}
	}
}
*/

onMount(() => {

	let inxtp = document.getElementById('index-top');
  	if (browser) {
    	inxtp.style.visibility = "visible";
  	}
	const tl = gsap.timeline();
	tl.from('#index-top', {
      duration: 3,
	  opacity: 0,
	  stagger: .15,
      ease: 'power2.inOut',
    }, "op")
	tl.from('#index-top .symbol .logo path', {
      duration: 1,
	  opacity: 0,
	  stagger: .15,
      ease: 'power2.inOut',
    }, "op+=1.5")
	tl.from('#index-top .symbol .typography path', {
      duration: 2,
	  opacity: 0,
	  stagger: .0,
      ease: 'power2.inOut',
    }, "op+=3.0")
	tl.from('#index-top .symbol .object path', {
      duration: 3,
	  opacity: 0,
	  rotate: "3deg",
	  stagger: .15,
      ease: 'power4.inOut',
    }, "op+=3.7")
	tl.from('#index-top .symbol .texts path', {
      duration: 4,
	  opacity: 0,
	  stagger: .015,
      ease: 'power3.inOut',
    }, "op+=5.5")
	tl.from('#index-top .symbol', {
      duration: 3,
      filter: "blur(5px)",
	  stagger: .15,
      ease: 'power2.inOut',
    }, "op+=1.5")
	tl.from('#index-first, #index-second', {
      duration: .75,
	  opacity: 0,
      ease: 'power2.inOut',
    }, "op+=3.0")
	/*
	tl.to('#index-top', {
      duration: 3,
      height: "45vh",
      ease: 'power2.inOut',
    }, "op+=5.5")
	
	tl.from('#index-first', {
      duration: 4,
      opacity: 0,
      ease: 'power3.inOut',
    }, "op+=7.5")
	*/
});
</script>

<svelte:head>
	<title>atelier sui - 蕊 | 心を澄まして聞くかほり</title>
	<meta name="description" content="心を澄まして聞くかほり | 素材との出会い、抽出、調香まで、小さないのちに内在する響きから、季節や風土のめぐりに触れる香りづくり">
	<meta property="og:url" content="https://et-cetera.co.jp/"/>
	<meta property="og:title" content="atelier sui - 蕊 | 心を澄まして聞くかほり"/>
	<meta property="og:description" content="心を澄まして聞くかほり | 素材との出会い、抽出、調香まで、小さないのちに内在する響きから、季節や風土のめぐりに触れる香りづくり"/>
	
	<meta property="og:type" content="website"/>
	<meta property="og:site_name" content="atelier sui - 蕊 | 心を澄まして聞くかほり"/>
	<meta property="og:image" content="サムネイル画像のURL"/>
	
</svelte:head>


<main class="index">

	<nav class="index-header pc">
		<ul>
			<li><a href="/#index-first">
				<div class="h6" lang="en">01.</div>
				<h1 class="h4" lang="en">fragrance</h1>
			</a></li>
			<li><a href="/#index-second">
				<div class="h6" lang="en">02.</div>
				<h1 class="h4" lang="en">essence</h1>
			</a></li>
			<li><a href="/#index-third">
				<div class="h6" lang="en">03.</div>
				<h1 class="h4" lang="en">experience</h1>
			</a></li>
			<li><a href="/#index-fourth">
				<div class="h6" lang="en">04.</div>
				<h1 class="h4" lang="en">artpiece</h1>
			</a></li>
			<li><a href="/#index-fifth">
				<div class="h6" lang="en">05.</div>
				<h1 class="h4" lang="en">about</h1>
			</a></li>
			<li><a href="/#index-sixth">
				<div class="h6" lang="en">06.</div>
				<h1 class="h4" lang="en">contact</h1>
			</a></li>
		</ul>
	</nav>

	<div class="bg-washi"></div>
	<section id="index-top">

		<div class="wrapper">
			<Visual />
		</div>




		<!--
		<div class="wrapper">
			<ul class="white">
				<li><a href="/">
					<h2 class="h4" lang="en">Perfume projects</h2>
					<div class="h7">かほりのプロジェクト</div>
				</a></li>

				<li><a href="/">
					<h2 class="h4" lang="en">Distillery / Perfume</h2>
					<div class="h7">蒸留と調香について</div>
				</a></li>

				<li><a href="/">
					<h2 class="h4" lang="en">Event - exhibition</h2>
					<div class="h7">展示やイベント情報</div>
				</a></li>
			</ul>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" width="31.92" height="176.22" viewBox="0 0 31.92 176.22">
			<svg xmlns="http://www.w3.org/2000/svg" width="31.92" height="176.22" viewBox="0 0 31.92 176.22">
				<path id="パス_1323" data-name="パス 1323" d="M30.509,10.537A4.9,4.9,0,0,0,31.553,8.7a7.264,7.264,0,0,0,.019-4.5A6.986,6.986,0,0,0,28.311.353L27.45,0c2.993,2.114,4.393,5.455,3.587,8.56a4.47,4.47,0,0,1-1.058,1.789l-.112.115.091.14a9.362,9.362,0,0,1,1.591,3.835,4.789,4.789,0,0,0-2.11.681,4.839,4.839,0,0,0-2.178,2.788,4.327,4.327,0,0,0,.333,3.317c.329.715.692,1.525,1.092,2.233A4.964,4.964,0,0,1,25.6,24.6l-.249.012v135.12c-2.7,1.58-4.291,6.362-2.434,10.133a4.953,4.953,0,0,1-2.141.335l-.3-.061-.009.311a5.108,5.108,0,0,1-3.055,4.7c-1.851.888-4.051-4.4-5.613-5.73l-.243-.195-.151.271a4.26,4.26,0,0,1-1.47,1.483c-2.2-4.43-7.012-6.1-9.936-4.746l1.439.77c2.733-1.262,6.3.583,8.123,4.2l.126.25.24-.141a5.034,5.034,0,0,0,1.729-1.676c1.944,1.457,4.209,7.337,6.027,6.494s2.919-3.274,3.07-5.7a5.024,5.024,0,0,0,2.425-.241l.258-.1-.106-.255c-1.55-3.717-.189-7.745,2.524-9V25.029a4.941,4.941,0,0,0,3.072-1.413l.1-.108-.134-.23a8.482,8.482,0,0,1-.865-2.116,5.757,5.757,0,0,1-.016-3.3A4.962,4.962,0,0,1,29.6,15.484a4.3,4.3,0,0,1,2.041-.8l.224-.029-.015-.2a8.534,8.534,0,0,0-1.344-3.92" transform="translate(0 0.001)" fill="#fff"/>
			</svg>			  
		</svg>
		-->
		  
	</section>
	
	<section id="index-first">
	  <Saos once={true} animation={"scroll-animation 3.5s cubic-bezier(.6,0,.2,1) both"}>
	  <div class="section-head">
		<div class="h4" lang="en">01.</div>
		<h1 class="h3" lang="en">fragrance</h1>
	  </div>
	  </Saos>
	  <Saos once={true} animation={"scroll-animation 3.5s cubic-bezier(.6,0,.2,1) both"}>
	  <div class="wrapper">
		<h2 class="h2">心を澄まして<br>聞くかほり</h2>
		<p>素材との出会い、抽出、調香まで<br>
			小さないのちに内在する響きから<br>
			季節や風土のめぐりに触れる<br class="sp">香りづくり
		</p>
		<a href="/projects" class="h5" lang="en">scent projects</a>
	  </div>
	  </Saos>
	</section>

	<section id="index-second">

	  <div class="bg">

		<Saos once={true} animation={"scroll-animation 3.0s cubic-bezier(.6,0,.2,1) both"}>
		<div class="wrapper">

		<div class="section-head white">
		  <div class="h4" lang="en">02.</div>
		  <h1 class="h3" lang="en">essence</h1>
		</div>

	  	<div class="container white">
			<h2 class="h4">自然の音色を聞く</h2>
			<h3 class="h4" lang="en">extract</h3>
			<p>暦や土地によって変化する<br>植物の声に耳を澄まして<br>その本質を抽出</p>
	  	</div>

	  	<div class="container white">
			<h2 class="h4">心の声を聞く</h2>
			<h3 class="h4" lang="en">blend</h3>
			<p>それぞれの感性をひらき<br>心に響く余韻のある調香</p>
	  	</div>

	  	<div class="container white">
			<h2 class="h4">物語を聞く</h2>
			<h3 class="h4" lang="en">ensemble</h3>
			<p>体験や空間が纏う空気を掬い<br>ともに奏でるコラボレーション</p>
	  	</div>
		</div>
		</Saos>

	  </div>
	</section>
	
	<Saos once={true} animation={"scroll-animation 3.0s cubic-bezier(.6,0,.2,1) both"}>
	<section id="index-third" class="js-scroll">
	  <div class="section-head">
		<div class="h4" lang="en">03.</div>
		<h1 class="h3" lang="en">experience</h1>
	  </div>
	  <h2 class="p">各地で行わせていただいた展示や<br>ワークショップの一部をご紹介します。</h2>

	  <div class="swiper exhibitions">
		<Exhibition />
	  </div>
	</section>
	</Saos>

	<Saos once={true} animation={"scroll-animation 3.0s cubic-bezier(.6,0,.2,1) both"}>
	<section id="index-fourth">
	  <div class="section-head">
		<div class="h4" lang="en">04.</div>
		<h1 class="h3" lang="en">art piece</h1>
	  </div>
	  <h2 class="p">様々なご縁でめぐり合った素材から<br>製作した作品のアーカイブ。</h2>
	  <p style="opacity: .5;" class="h6">一部、販売しているものもございます。</p>

	  <div class="swiper exhibitions">
		  <Artpiece />
	  </div>
	</section>
	</Saos>

	<section id="index-fifth">
		<Saos once={true} animation={"paragraphy-animation 3.5s cubic-bezier(.6,0,.2,1) both"}>
		<div>
	 		<div class="section-head">
				<div class="h4" lang="en">05.</div>
				<h1 class="h3" lang="en">about</h1>
	  		</div>
	  		<div class="logo"><TextLogo /></div>
	  		<div class="paragraph">
	  			<p>
					2012年創立<br>日本発のナチュラルフレグランスブランド。</p>
	  			<p>
					幼少期から音楽を続けていた調香師が、<br>植物の香りと出逢い、情景や記憶との<br>結びつきを体感。</p>
	  			<p>
					自然に内在する”響き”を奏でるような、<br>抽出、調香の実験をはじめました。</p>
	  			<p>
	  				日本の豊かな素材と香文化、<br>西洋の歴史ある香水文化。<br>それぞれの魅力を織り交ぜた<br>作品を特徴としています。</p>
	  			<p>
	  				風のように偶然性と余白のある、かほり。</p>
	  			<p>
					だからこそ生まれる、人々との共鳴を<br>喜びとし、おひとりおひとりに<br>届けられたらと願っています。</p>
			</div>
	  		<div class="sign"><Sign /></div>
		</div>
		</Saos>
	</section>

	<Saos once={true} animation={"last-animation 3.5s cubic-bezier(.6,0,.2,1) both"}>
	<section id="index-sixth" class="white">
	  <div class="section-head">
		<div class="h4" lang="en">06.</div>
		<h1 class="h3" lang="en">contact</h1>
	  </div>
	  <h2 class="p">蒸留・調香に関するご相談・ご質問は<br>
		以下メールアドレスよりお問い合わせください。<br>
		またオーダー・パーソナルフレグランスも<br>
		承っておりますので、是非ご相談ください。</h2>
	  <div class="mail">
		<a href="/" class="h5" lang="en">info@kahoritotomoni.com</a>
	  </div>
	  <div class="links">
		  <ul>
			  <li><a href="/" class="h5" lang="en">projects</a></li>
			  <li><a href="/" class="h5" lang="en">information</a></li>
			  <li><a href="/" class="h5" lang="en">instagram</a></li>
		  </ul>
	  </div>
	</section>
	</Saos>

</main>



<style>

.index section {padding-left: calc(1.9 * var(--padding));}
#index-top {visibility: hidden;}
@keyframes -global-zooming {
	0% {opacity: 0;
		transform: scale(1.2);opacity: 0;}
  100% {opacity: 1;
	  transform: scale(1);opacity: 1;}
}

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
@keyframes -global-paragraphy-animation {
	0% {
		transform: translateX(1px);
		filter: blur(5px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		filter: blur(0);
		opacity: 1;
	}
}

@keyframes -global-last-animation {
	0% {
		height: 100%;
	}
	100% {
		transform: 100vh;
	}
}



#index-first, #index-second {padding-top: 15rem;}
#index-third {padding-top: 12.5rem;}
#index-fourth {padding-top: 12rem;}

section {position: relative;}



#index-top {	
	width: 100vw;
	height: 100vh;
	height: 100dvh;
    display: flex;
    align-items: flex-end;
	justify-content: space-between;
    padding-left: 0;
}
#index-first .section-head {margin-bottom: 3.5rem;}
#index-first .wrapper p {margin: 1.2rem 0 5rem;}


#index-second .section-head {margin-bottom: 6rem;}
#index-second .bg {
	width: 100vw;
	margin-left: calc(-1 * var(--padding));
	padding: 10rem 0 4.5rem;
	padding-left: var(--padding);
	background-image: url('../image/essence.jpg');
	background-image: url(/image/essence.jpg);
	background-size: cover;
}
#index-second .wrapper .container {margin-bottom: 6rem;}
#index-second .wrapper .container h2 {
	font-size: 1.7rem;
	margin-left: -0.3px;
}
#index-second .container h3 {
	margin: .25rem 0 1.5rem;
	margin-left: .2px;
	opacity: .9;
}
#index-second .container p {
	font-size: 1.5rem;
	line-height: 2.2;
	margin-left: -.5px;
	opacity: .9;
	letter-spacing: .35em;
}



#index-third .section-head, #index-fourth .section-head {margin-bottom: 2.8rem;}

#index-third .exhibitions {
	width: 100vw;
    margin-left: calc(-1 * var(--padding));
	margin-top: 6rem;
}



#index-fourth p {font-size: 1.1rem;}
#index-fourth .exhibitions {
	margin-top: 6rem;
	width: 100vw;
    margin-left: calc(-1 * var(--padding));
}



#index-fifth {
	padding-top: 12rem;
	padding-left: 18vw;
	padding-right: 5vw;
	padding-bottom: 15rem;
	background-image: url(/image/bg.webp);
	background-size: cover;
	background-color:rgba(240,240,240,0.75);
	background-blend-mode:lighten;
}
#index-fifth .logo {
	width: 12.5rem;
	margin: 5rem 0 1.0rem;
}
#index-fifth .paragraph p {
	line-height: 2.8;
	margin-bottom: 1.6rem;
	font-size: 1.3rem;
    letter-spacing: .25em;
}
#index-fifth .sign {margin-top: 5rem;}


#index-sixth {
	width: 100vw;
	padding-top: 10rem;
	padding-bottom: 5rem;
	background-image: url('../image/sui_2023.jpg');
	background-image: url(/image/kv.webp);
	background-size: cover;
}
#index-sixth h2 {
	font-size: 1.15rem;
	margin-top: 6rem;}
#index-sixth .mail {margin: 4rem 0 10rem;}
#index-sixth .mail a {border-bottom: solid 0.5px var(--backgroundColor);}
#index-sixth .links ul li {margin-bottom: 1rem;}





@media screen and (min-width: 720px) {


	#index-first, #index-second {padding-top: 22.5rem;}
	#index-third {padding-top: 20rem;}
	#index-fourth {padding-top: 18rem;}
	#index-fifth {margin-top: 20rem;}


	#index-first .wrapper,
	#index-second .wrapper {position: relative;}

	#index-first .wrapper::after,
	#index-second .wrapper::before,
	#index-second .wrapper::after {
		position: absolute;
		display: block;
    	content: "";
		background-size: cover;
		top: auto;
    	bottom: 0;
    	left: auto;
    	right: 0;
	}

	#index-first .wrapper::after {
		width: 50%;
    	height: 37.5rem;
		height: calc((18px * 1.4)+(20px * 1.4)+(20px * 2 * 2.1) + (15px * 3 * 2.5) + (16px * 1.4) + 3.5rem + 1.2rem + 5rem);
    	background-image: url(/image/about.jpg);
	}

	#index-second .wrapper::before {
		top: 2.5rem;
		right: calc(2 * var(--padding));
		width: 25%;
    	height: 45rem;
    	background-image: url(/image/about.jpg);
	}

	#index-second .wrapper::after {
		width: 25%;
    	height: 45rem;
		right: var(--padding);
    	background-image: url(/image/bg.webp);
	}



	#index-second .bg {
		padding: 16rem 0 10rem;
    	padding-left: var(--pcSectionPadding);
    	margin-left: calc(-1 * var(--pcSectionPadding));
	}


	#index-third .exhibitions {
		width: calc(100vw - var(--pcSectionPadding));
    	margin-left: 0;
	}


	#index-fourth .exhibitions {
    	width: 35vw;
    	margin-left: 0;
  	}
	

}



 
  
  
  






#index-sixth img {
    width: calc(100% + 6.5vw);
    aspect-ratio: 2/1;
}


	
</style>