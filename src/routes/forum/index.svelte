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
	article {
		padding: 1em;
		margin: 1em 0;
	}
	.right-button {
		text-align: end;
	}
</style>

<svelte:head>
	<title>Forum - CareerGuru</title>
</svelte:head>

<h1>Forum</h1>

{#each posts as post}
	<!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
	<article class="content">
		<h2>{post.title}</h2>
		<p class="author">Asked by {post.author.firstName} {post.author.lastName} ({post.author.type})</p>
		<p>{post.preview}</p>
		<div class="right-button">
			<a rel="prefetch" href="forum/{post.slug}"><button>Read More</button></a>
		</div>
	</article>
{/each}
