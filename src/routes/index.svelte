<svelte:head>
	<title>Career Guru</title>
</svelte:head>

<style>
	section {
		padding: 3em 0
	}
	h1, h2 {
		text-align: center;
	}

	#home p {
		font-size: 2em;
	}
	img {
		width: 80%;
		display: block;
		margin: auto;
	}
	@media screen and (min-width: 500px) {
		#home img {
			width: 50%;
		}
		.grid-4 {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2em;
		}
	}
	@media screen and (min-width: 1000px) {
		#home {
			display: grid;
			grid-template-columns: 4fr 3fr;
			grid-template-rows: 10em 1fr;
		}
		h1 {
			font-size: 5em;
		}
		#home p {
			grid-column: 1;
		}
		#home img {
			grid-column: 2;
			grid-row: 1 / span 2;
			width: 100%;
			float: right;
		}
		.grid-4 {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			gap: 2em;
		}
	}
</style>

<section id="home">
	<h1>Career Guru</h1>
	<p>Chat with professionals and plan your career beyond high school</p>
	<img src="hero.svg" alt="illustration of student on laptop">
</section>

<section id="values">
	<h2>Our Values</h2>
	<div class="grid-4">
		<img src="hero.svg" alt="illustration of student on laptop">
		<img src="hero.svg" alt="illustration of student on laptop">
		<img src="hero.svg" alt="illustration of student on laptop">
		<img src="hero.svg" alt="illustration of student on laptop">
	</div>
</section>


