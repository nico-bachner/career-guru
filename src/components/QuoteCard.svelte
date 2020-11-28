<script>
    export let author;
    export let author_age;
    export let content;
</script>

<style>
    .card {
		width: 100%;
        background-color:#fff;
	}
	.author {
		color: white;
        background-color:#555B6E;
        width: 100%;
    }
    p {
        text-align: center;
        padding: 1em;
    }
</style>

<div class="card">
    <p>“{content}”</p>
    <div class="author"><p>{author}, {author_age}</p></div>
</div>