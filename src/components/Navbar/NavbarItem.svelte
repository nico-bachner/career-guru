<script>
    export let to = '.';
    export let label;
    export let active;
</script>

<style>
    a {
		display: none;
	}
	@media screen and (min-width: 900px) {
		a {
			display: inline-block;
			padding: .4em .8em;
			margin: .8em 0;
			color: #555B6E;
			border-radius: .5em;
			font-family: 'Work Sans', sans-serif;
			font-weight: 500;
			font-size: 1.4rem;
			text-decoration: none;
			vertical-align: middle;
		}
		a:hover{
			background-color: rgba(190, 227, 219, 0.2);  
		}
    }
    [aria-current] {
		background-color: rgba(190, 227, 219, 0.2);	
	}
</style>

<a href={to} aria-current="{active}">{label}</a>