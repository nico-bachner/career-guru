<script>
	import ValuesSection from "../components/ValuesSection.svelte";	
</script>

<svelte:head>
	<title>Career Guru</title>
</svelte:head>

<style>
	section {
		margin: 5em 4em
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
			width: 60%;
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
			margin-top: 30%;
			float: right;
		}
	}
</style>

<section id="home">
	<h1>Career Guru</h1>
	<p>Chat with professionals and plan your career beyond high school</p>
	<img src="hero.svg" alt="illustration of student on laptop">
</section>

<ValuesSection />


