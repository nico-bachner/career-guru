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

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
	<a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a>
</nav>
