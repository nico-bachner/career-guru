<script>
    export let to = '.';
    export let label;
    export let active;
</script>

<style>
	a {
		display: inline-block;
		padding: .4em .8em;
		margin: .8em 0;
		color: #555B6E;
		border-radius: .5em;
		font-family: 'Work Sans', sans-serif;
		font-weight: 500;
		font-size: 1.4rem;
	}
	a:hover{
		background-color: #cceedd44;  
	}
    [aria-current], [aria-current]:hover {
		background-color: #cceedd88;	
	}
</style>

<a href={to} aria-current="{active}">{label}</a>