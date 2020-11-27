<script>
	export let segment;
</script>

<style>
	nav {
		width: fit-content;
		margin: auto;
	}
	[aria-current] {
		color: chocolate;
	}
	button {
		display: inline-block;
	}
	a {
		text-transform: uppercase;
	}
</style>

<nav>
	<button><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></button>
	<button><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></button>
</nav>