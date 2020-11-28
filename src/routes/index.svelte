<script>
	import ValuesSection from "../components/ValuesSection.svelte";	
</script>

<svelte:head>
	<title>Career Guru</title>
</svelte:head>

<style>
	h1 {
		font-size: 4em;
		margin-bottom: 0;
	}
	#home p {
		font-size: 2em;
	}
	img {
		width: 80%;
		display: block;
		margin: auto;
	}
	button {
		padding: .6em 1.2em;
		color: var(--content);
		background-color: var(--nav-active);
		border-radius: .5em;
		font-family: 'Work Sans', sans-serif;
		font-weight: 500;
		font-size: 1.4rem;
	}
	@media screen and (min-width: 700px) {
		h1 {
			font-size: 4.5em;
		}
		#home img {
			width: 60%;
		}
	}
	@media screen and (min-width: 1000px) {
		#home {
			display: grid;
			grid-template-columns: 3fr 2fr;
		}
		h1 {
			font-size: 5em;
		}
		#home img {
			width: 100%;
			margin-top: 30%;
			float: right;
		}
	}
</style>

<section id="home">
	<div>
		<h1>Career Guru</h1>
		<p>Chat with professionals and plan your career beyond high school</p>
		<a href="signup"><button>Start Planning</button></a>
	</div>
	<img src="hero.svg" alt="illustration of student on laptop">
</section>

<ValuesSection />

<section id="testimonials" class="grid-2">
	<img src="testimonial.svg" alt="vector illustration">
	<div>
		<h2>Testimonials</h2>
		<p>“I've always struggled with finding what I really want to do in life. Career Guru is a great opportunity to explore that.”</p>
		<p>AnnMarie Vo, 16</p>
		<a href="about#testimonials"><button>View More</button></a>
	</div>
</section>
