<script>
	export let segment;
</script>

<style>
	nav {
		width: fit-content;
		margin: 2em auto;
	}
	[aria-current] {
		color: chocolate;
	}
	button {
		display: inline-block;
		padding: .5em;
		text-transform: uppercase;
	}
</style>

<nav class="w-min">
	<a aria-current="{segment === undefined ? 'page' : undefined}" href="."><button>home</button></a>
	<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about"><button>about</button></a>
	<a aria-current="{segment === 'forum' ? 'page' : undefined}" href="forum"><button>forum</button></a>
	<a aria-current="{segment === 'chat' ? 'page' : undefined}" href="chat"><button>chat</button></a>
	<a aria-current="{segment === 'login' ? 'page' : undefined}" href="login"><button>log in</button></a>
	<a aria-current="{segment === 'signup' ? 'page' : undefined}" href="signup"><button>sign up</button></a>
</nav>