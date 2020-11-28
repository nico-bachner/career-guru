<svelte:head>
	<!-- Meta -->
	<title> CareerGuru - About </title>
	<meta charset="UTF-8">
	<meta content="text/html; charset=utf-8" http-equiv="content-type">
	
	<!-- desc / author / keywords-->
	<meta content="Chat with professionals and plan your career as a highschool student." name="description">
	<meta content="CareerGuru, highschool, students, volunteer,, mentorship" name="keywords">
	<!-- end -->
	
	<!-- compatibility -->
	<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="HandheldFriendly" content="true">
	<!-- end of compatibility -->
	
	<!-- End of Meta -->
	
	<!-- libraries -->

	<!-- scripts -->
	<!-- <script type="text/javascript" src="urlgohere"></script> -->
</svelte:head>

<style>
	:root {
		display: block;
	}

	/* about block */
	.about.block{
		height: 50%;
		width: 75%;
	}
	.abt-centerpiece{
		width: 200%;
	}
	.abt-centerpiece img{
		max-width:100%;
		max-height:100%;
	}
	/* end of about block */
	
	/* testimblock */
	.testim.block{
		width: 75%;
		flex-direction: column;
	}
	.testimgrid{
		display:flex;
		justify-content: center;
		align-items:center;
		flex-direction: row;
	}
	.griditem{
		display:flex;
		justify-content: center;
		align-items:center;
		flex-direction: column;
		
		width: 100%;
		height:25vh;
		background-color:#fff;
		margin: 15px;
	}
	.griditem .itemcontent{
		text-align:center;
		background-color:#fff;
	}
	.griditem .itemauthor{
		height: 10vh;
		color: white;
		background-color:#555B6E;
	}
	/* end of testim block */
	
</style>
<div class="content">
	<div class="about block">
		<div class="abt-text">
			<div class="heading">
				<h1>About Us</h1>
			</div>
			<div class="description">
				<p>CareerGuru connects students with professional mentors to learn more about their potential fields.</p>
				<br>
				<p>As the world shifts towards virtual oriented workspaces, students find themselves looking to make connections with professionals through sites like LinkedIn, Indeed, etc. This site makes the networking process for highschool students, all the more easier.</p>
			</div>
		</div>
		<div class="abt-centerpiece"><img src="aboutimg.png" alt="People working together"></div>
	</div>
	<div class="testim block">
		<div class="subheading">
			<h2>Testimonials<h2>
		</div>
		<div class="testimgrid">
			<div class="griditem">
			<p class="griditem itemcontent">“I've always struggled with finding what I really want to do in life. Career Guru is a great opportunity to explore that.” </p>
			<p class="griditem itemauthor">AnnMarie Vo, 16</p>
			</div>
			<div class="griditem">
			<p class="griditem itemcontent">“Choosing a career is such a tedious process. I’m glad to have Career Guru on my side.”  </p>
			<p class="griditem itemauthor">Anna Thomas, 16</p>
			</div>
			<div class="griditem">
			<p class="griditem itemcontent">“I really like the idea of having a platform to explore different careers. Career Guru makes the future less intimidating.” </p>
			<p class="griditem itemauthor">Angelina Vuong, 16</p>
			</div>
		</div>
	</div>
</div>
