<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`forum/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	article {
		margin-top: 1em;
	}
	.content {
		padding: 1em;
		border-radius: 1em;
		background-color: var(--background-darker);
	}
	.author {
		text-align: center;
	}
	.response {
		padding-left: 1em;
	}
	@media screen and (min-width: 500px) {
		.response {
			padding-left: 2em;
		}
	}
	@media screen and (min-width: 1000px) {
		.response {
			padding-left: 3em;
		}
	}
	
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	article :global(p) {
		text-align: justify;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article class="content">
	<h1>{post.title}</h1>
	<p class="author">Asked by {post.author}</p>
	<div class="content">
		{@html post.html}
	</div>
</article>
{#each post.responses as response }
	<div class="response">
		<p>{response.author} replied:</p>
		<p class="content">{response.content}</p>
	</div>
{/each}
<form class="response">
	<p>Add a comment:</p>
	<textarea></textarea>
</form>
