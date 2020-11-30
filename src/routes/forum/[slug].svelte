<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`forum/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			data.content = marked(data.content);
			for (let i=0; i < data.responses.length; i++) {
				data.responses[i].content = marked(data.responses[i].content);
			}
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import marked from 'marked';

	let newComment = false;
	let newCommentContents = undefined;
	let newCommentSourceContents = "";
	function postNewComment() {
		newCommentContents = marked(newCommentSourceContents);
		newCommentSourceContents = "";
		newComment = true;
	}

	export let post;
</script>

<style>
	article {
		padding: .2em 1.6em;
	}
	.response {
		margin-left: 1em;
	}
	textarea {
		border: none;
		border-radius: 1em;
		padding: 1em;
		font-size: 1em;
		font-family: inherit;
		resize: none;
		width: calc(100% - 2em);
		height: 2em;
	}
	textarea:focus {
		height: 3em;
	}
	@media screen and (min-width: 500px) {
		.response {
			margin-left: 2em;
		}
		textarea {
			height: 3em;
		}
		textarea:focus {
			height: 5em;
		}
	}
	@media screen and (min-width: 1000px) {
		.response {
			margin-left: 3em;
		}
		textarea {
			height: 4em;
		}
		textarea:focus {
			height: 7em;
		}
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p class="author">Asked by {post.author.firstName} {post.author.lastName} ({post.author.type})</p>
<article class="content">
	{@html post.content}
</article>

{#each post.responses as response }
	<div class="response">
		<p>Reply by {response.author.firstName} {response.author.lastName} ({response.author.type})</p>
		<article>
			{@html response.content}
		</article>
	</div>
{/each}

{#if newComment}
	<div class="response">
		<p>Reply by _____ (anonymous)</p>
		<article>
			{@html newCommentContents}
		</article>
	</div>
{/if}

<div class="response">
	<p>Add a comment:</p>
	<textarea placeholder="Type your comment here" bind:value={newCommentSourceContents}></textarea>
	<button on:click={postNewComment}>Send</button>
</div>
