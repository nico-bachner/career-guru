// In the future, we will generate this data from separate markdown files in the
// repo or fetch them from a database. 

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What jobs actually use calculus?',
		slug: 'calculus-jobs',
		preview: 'I really enjoy my calculus course, but I don’t know how finding a derivative would be useful in real life. Is there ...',
		author: {
			firstName: 'Robert',
			lastName: 'Piccolo',
			type: 'High School Student'
		},
		html: `
			<p>I really enjoy my calculus course, but I don’t know how finding a derivative would be useful in real life. Is there any jobs that use calculus concepts?</p>

			<p>It's hard to find a job where math is actually done. I am in my last semester of my senior year I want to find some career options. Ideally I'd like some of them to be with calculus. I have been considering things in demand such as computational mathematics/physics, machine learning, operations research, etc. Does anyone know if there are many in demand opportunities for calculus?</p>
		`,
		responses: [
			{
				author: {
					firstName: 'Angela',
					lastName: 'Wigens',
					type: 'Professor of Computer Science'
				},
				content: `
					The PhD's I work with have have extensive mathematical backgrounds. None of them "do calculus" day to day. Instead, their job is to figure out the best way to get computers to "do" math for us. I'd be lost having prior background knowledge in calculus.
				`
			},
			{
				author: {
					firstName: 'Christopher',
					lastName: 'Albert',
					type: 'Independent Researcher'
				},
				content: `
					Hi, in research, we use Calculus just about every day. There are some subtleties for smoothing out experimental noise and error checking, including things like making sure the area under the curve agrees with physical laws. PM me if you want to know more!
				`
			}
		]
	},
	{
		title: 'How is COVID-19 transforming the healthcare and pharmaceutical industries?',
		slug: 'covid-19-impact',
		preview: 'I’m interested in pursuing a career in medicine, but I’m wondering how COVID-19 might change job prospects and ...',
		author: {
			firstName: 'Katie',
			lastName: 'Summers',
			type: 'Middle School Student'
		},
		html: `
			<p>I’m interested in pursuing a career in medicine, but I’m wondering how COVID-19 might change this industry for future generations.</p> 
			<p>Will there be a significant impact for us in high school or will this pandemic be insignificant in the long run.</p>
			<p>Please let me know!</p>
		`,
		responses: [
			{
				author: {
					firstName: 'Riley',
					lastName: 'Anderson',
					type: 'Mentor'
				},
				content: "Excellent question. To be frank, I don't exactly know. It really depends how determined people are willing to slow this pandemic down."
			},
			{
				author: {
					firstName: 'Meghan',
					lastName: 'Holmes',
					type: 'High School Student'
				},
				content: "So far COVID-19 hasn't affected my courses at all (apart from us doing school remotely)"
			},
			{
				author: 'Benjamin Boardley [Professional Mentor]',
				author: {
					firstName: 'Benjamin',
					lastName: 'Boardley',
					type: 'General Practitioner'
				},
				content: "Personally, I don't think it will affect you youngsters much at all. By the time you're in the workforce the effects of COVID-19 will most likely have worn off."
			}
		]
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
