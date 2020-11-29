<script>
	import Navbar from '../components/Navbar/Navbar.svelte';
	export let segment;
</script>

<style>
	main {
		padding: 5em 1.5em;
		min-height: 70vh;
		background-color: var(--background);
		color: var(--content);
	}
	@media screen and (min-width: 500px) {
		main {
			padding: 6em 3em;
		}
	}
	@media screen and (min-width: 1000px) {
		main {
			padding: 7em 4.5em;
		}
	}

	footer {
		padding: 1em;
		color: gray;
		background-color: var(--background-darker);
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
