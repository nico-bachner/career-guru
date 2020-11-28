<script context="module">
	export function preload() {
		return this.fetch(`forum.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	p {
		text-align: center;
		font-size: 1.6em;
	}
</style>

<svelte:head>
	<title>Forum - CareerGuru</title>
</svelte:head>

<h1>Forum</h1>
<p>Explore careers</p>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->

		<li><a rel="prefetch" href="forum/{post.slug}">{post.title}</a></li>
	{/each}
</ul>
