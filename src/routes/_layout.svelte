<script>
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
</script>

<style>
	main {
		padding: 2em;
		min-height: 70vh;
		background-color:#FAF9F9;
		color: #555B6E;
	}
	@media screen and (min-width: 600px) {
		main {
			padding: 2em 4em;
		}
	}
	@media screen and (min-width: 1000px) {
		main {
			padding: 2em 6em;
		}
	}
</style>

<Navbar {segment}/>

<main>
	<slot></slot>
</main>

<Footer/>