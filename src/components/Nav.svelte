<script>
	export let segment;
</script>

<style>
	nav {
		background-color: lightblue;
		padding: .5rem;
	}
	[aria-current] {
		color: chocolate;
	}
	a {
		margin: 1em;
	}
</style>

<nav>
	<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
	<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>
</nav>