// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What jobs actually use calculus?',
		slug: 'calculus-jobs',
		preview: 'I really enjoy my calculus course, but I don’t know how finding a derivative would be useful in real life. Is there ...',
		author: 'test_user_123',
		html: `
			<p>I really enjoy my calculus course, but I don’t know how finding a derivative would be useful in real life. Is there any jobs that use calculus concepts?</p>

			<p>It's hard to find a job where math is actually done. I am in my last semester of my senior year I want to find some career options. Ideally I'd like to with calculus. I have been considering things in demand such as computational mathematics/physics, machine learning, operations research, etc. Does anyone know if there are many in demand opportunities for calculus?</p>
		`,
		responses: [
			{
				author: 'henlo',
				content: `
					The PhD's I work with have have extensive mathematical backgrounds. None of them "do calculus" day to day. Instead, their job is to figure out the best way to get computers to "do" math for us. I'd be lost having prior background knowledge in calculus.
				`
			},
			{
				author: 'world',
				content: `
					Hi, in research, we use Calculus just about every day. There are some subtleties for smoothing out experimental noise and error checking, including things like making sure the area under the curve agrees with physical laws. PM me if you want to know more!
				`
			}
		]
	},
	{
		title: 'How is COVID-19 transforming the healthcare and pharmaceutical industries?',
		slug: 'covid-19-impact',
		preview: 'I’m interested in pursuing a career in medicine, but I’m wondering how COVID-19might change job prospects and ...',
		author: 'test_user_123',
		html: `
			<p>I’m interested in pursuing a career in medicine, but I’m wondering how COVID-19might change job prospects and ...</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;