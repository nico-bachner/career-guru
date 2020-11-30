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
	let newComment = false;
	let newCommentContents = undefined;
	let newCommentSourceContents = "";
	function postNewComment() {
		newCommentContents = newCommentSourceContents;
		newCommentSourceContents = "";
		newComment = true;
	}
</script>

<style>
	.response {
		margin-left: 1em;
	}
	@media screen and (min-width: 500px) {
		.response {
			margin-left: 2em;
		}
	}
	@media screen and (min-width: 1000px) {
		.response {
			margin-left: 3em;
		}
	}
	textarea {
		border: none;
		border-radius: 1em;
		padding: 1em;
		font-size: 1em;
		font-family: inherit;
		resize: none;
		width: calc(100% - 2em);
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article class="content">
	<h1>{post.title}</h1>
	<p class="author">Asked by {post.author.firstName} {post.author.lastName} ({post.author.type})</p>
	<div>
		{@html post.html}
	</div>
</article>
{#each post.responses as response }
	<article class="response">
		<p>{response.author.firstName} {response.author.lastName} ({response.author.type}) replied:</p>
		<p class="content">{response.content}</p>
	</article>
{/each}
{#if newComment}
	<article class="response">
		<p>An anonymous person replied:</p>
		<p class="content">{newCommentContents}</p>
	</article>
{/if}
<div class="response right-button">
	<p>Add a comment:</p>
	<textarea placeholder="Type your comment here" bind:value={newCommentSourceContents}></textarea>
	<button on:click={postNewComment}>Send</button>
</div>
