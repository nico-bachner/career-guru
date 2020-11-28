<script>
    export let author;
    export let author_age;
    export let content;
</script>

<style>
    .card {
        background-color: #ffffff;
        height: fit-content;
    }
    p {
        text-align: center;
    }
    .content {
        padding: 2em;
    }
	.author {
		color: white;
        background-color:#555B6E;
        padding: .5em;
    }
</style>

<div class="card">
    <div class="content">
        <p>“{content}”</p>
    </div>
    <div class="author">
        <p>{author}, {author_age}</p>
    </div>
</div>