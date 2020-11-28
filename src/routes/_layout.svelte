<script>
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
</script>

<style>
	main {
		padding: 5em 2em;
		background-color:#FAF9F9;
		color: #555B6E;
	}
</style>

<Navbar {segment}/>

<main>
	<slot></slot>
</main>

<Footer/>