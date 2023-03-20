<script>
import Logo from './Logo.svelte';
import TextLogo from './TextLogo.svelte';

</script>

<div class="l-line"></div>
<footer>
    <a href="/" class="logo"><TextLogo /></a>
    <p class="h6">
        蒸留・調香に関するご相談・ご質問は<br>
        以下メールアドレスよりお問い合わせください。<br>
        またオーダー・パーソナルフレグランスも<br>
        承っておりますので、ぜひご相談ください。
    </p>

    <a href="/" class="h4 l-underline" lang="en">info@sui-kahori.com</a>

</footer>


<style>
    footer {
        width: 100vw;
        padding: 8rem var(--padding) 4rem;
        background-color: var(--darkColor);
    }

    footer .logo {width: 9rem;}
    footer p {margin: 2rem 0 4rem;}




</style>