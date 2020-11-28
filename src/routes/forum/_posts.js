// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What jobs actually use calculus',
		slug: 'calculus-jobs',
		html: `
			<p>I really enjoy my calculus course, but I don’t know how finding a derivative would be useful in real life. Is there....</p>
		`
	},
	{
		title: 'How is COVID-19 transforming the healthcare and pharmaceutical industries',
		slug: 'covid-19-impact',
		html: `
			<p>I’m interested in pursuing a career in medicine, but I’m wondering how COVID-19might change job prospects and ...</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
