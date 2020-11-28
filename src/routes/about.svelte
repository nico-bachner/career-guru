<script>
	import QuoteCard from '../components/QuoteCard.svelte'
	import ValuesSection from '../components/ValuesSection.svelte'
</script>

<svelte:head>
	<title> CareerGuru - About </title>
</svelte:head>

<style>
	@media screen and (min-width: 1000px) {
		#landing img {
			margin-top: calc(25vh - 20%);
		}
	}
</style>

<section id="landing" class="grid-2">
	<div>
		<h1>About Us</h1>
		<p>Career Guru connects students with professional mentors to learn more about their fields of interest.</p>
		<p>As the world shifts towards virtual workspaces, students find themselves looking to make connections with professionals through sites like LinkedIn, Indeed, etc.</p>
		<p>This site makes the networking process for high school students all the easier.</p>
	</div>
	<img src="aboutimg.png" alt="People working together">
</section>

<section id="testimonials">
	<h2>Testimonials</h2>
	<div class="grid-3">
		<QuoteCard author="AnnMarie Vo" author_age="16" content="I've always struggled with finding what I really want to do in life. Career Guru is a great opportunity to explore that."/>
		<QuoteCard author="Anna Thomas" author_age="16" content="Choosing a career is such a tedious process. I’m glad to have Career Guru on my side."/>
		<QuoteCard author="Angelina Vuong" author_age="16" content="I really like the idea of having a platform to explore different careers. Career Guru makes the future less intimidating."/>
	</div>
</section>

<ValuesSection />
