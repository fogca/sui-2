<script>
import PageTransition from '../components/PageTransition.svelte';  
import { page } from '$app/stores';
import Header from '../components/Header.svelte';
import Footer from '../components/Footer.svelte';


/** @type {import('./$types').LayoutData} */
export let data;
$: currentRoute = $page.url.pathname; 
</script>
  
<svelte:head>
  <link rel="stylesheet" href="../css/base.css?var=1.12">
  <link rel="stylesheet" href="../css/main.css?var=1.10">
  <link rel="stylesheet" href="../css/layout.css?var=1.10">
  <link rel="stylesheet" href="../css/prerendering.css?var=1.10">
  <link rel="stylesheet" href="https://use.typekit.net/alu3vih.css"><!--Adobe Fonts-->
  <script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=3PQPrveWeX4%3D&aa=1&ab=2"></script>
</svelte:head>
  
<div 
    class:Index={currentRoute === "/"} 
    class:Products={currentRoute === "/projects"}
  >
    <Header />
    <PageTransition pathname={data.pathname}>
      <slot />
    </PageTransition>

</div>
  