<script>
	import Navbar from '../components/Navbar/Navbar.svelte';
	export let segment;
</script>

<style>
	main {
		padding: 0 2em;
		min-height: 70vh;
		background-color: var(--background);
		color: var(--content);
	}
	@media screen and (min-width: 500px) {
		main {
			padding: 3em 4em;
		}
	}
	@media screen and (min-width: 1000px) {
		main {
			padding: 6em;
		}
	}

	p {
		color: gray;
		text-align: center;
	}
</style>

<Navbar {segment}/>

<main>
	<slot></slot>
</main>

<footer>
	<p>&copy; CareerGuru 2020</p>
</footer>
